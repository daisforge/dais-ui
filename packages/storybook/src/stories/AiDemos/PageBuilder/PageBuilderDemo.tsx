import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Note } from '@ui-kit/components/Note';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { Typography } from '@ui-kit/components/Typography';
import {
  backgroundPrimary,
  surfaceTransparentSecondary,
  textNegative,
  textSecondary,
  textWarning,
} from '@ui-kit/tokens';
import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { DemoChat } from '../shared/DemoChat';
import { nextId, runSteps, StepPlan } from '../shared/runSteps';
import type { DemoMessage, DemoStep } from '../shared/types';
import { CANVAS_CSS, CanvasNode } from './canvas/CanvasNode';
import { generateTsx } from './model/codegen';
import { runBuilderAgent } from './model/fakeBuilderAgent';
import { REGISTRY } from './model/registry';
import { checkRules } from './model/rules';
import {
  findAll,
  findNode,
  findParent,
  insertChild,
  isContainer,
  moveNode,
  node,
  NodeType,
  PropValue,
  removeNode,
  setProps,
  UINode,
} from './model/tree';
import { Inspector, Layers, Palette, Section } from './panels/Panels';

type Tab = 'canvas' | 'code' | 'json' | 'rules';

const START_PROMPTS = [
  'Собери реестр платежей с фильтрами по дате и статусу',
  'Сделай форму создания заявки',
  'Собери дашборд по договорам',
  'Сделай карточку договора',
];

const GREETING: DemoMessage = {
  id: 'greeting',
  role: 'assistant',
  text: 'Опишите экран словами — соберу его из компонентов @daisforge/ui по шаблонам и гайдам. Потом можно править: словами, кликом по элементу и в панели свойств справа.',
};

/** Подсказки по тому, что сейчас на холсте */
function followUps(tree: UINode | null): string[] {
  if (!tree) return START_PROMPTS;
  const has = (type: NodeType) =>
    findAll(tree, (item) => item.type === type).length > 0;
  if (has('TableCanvas') && !has('Metric')) {
    return [
      'Добавь кнопку «Импорт»',
      'Добавь кнопку «Синхронизировать»',
      'Добавь кнопку «Удалить»',
      'Добавь колонку «Комментарий»',
      'Добавь фильтр по контрагенту',
      'Покажи пустое состояние',
    ];
  }
  if (has('KeyValue')) {
    return [
      'Сделай кнопку «Скачать PDF» акцентной',
      'Добавь блок «Документы»',
      'Добавь кнопку «Удалить»',
    ];
  }
  if (has('Metric')) {
    return [
      'Добавь блок «Сроки исполнения»',
      'Сделай показатели в две колонки',
      'Собери новую страницу: реестр договоров',
    ];
  }
  if (has('TextField')) {
    return [
      'Добавь поле «Код проекта»',
      'Сделай поля в три колонки',
      'Добавь блок «Вложения»',
      'Добавь кнопку «Сохранить черновик»',
    ];
  }
  return START_PROMPTS;
}

export type PageBuilderDemoProps = {
  /** Автосценарий: сообщения отправляются по очереди */
  script?: string[];
};

export function PageBuilderDemo({ script }: PageBuilderDemoProps) {
  const [messages, setMessages] = useState<DemoMessage[]>([GREETING]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [tree, setTree] = useState<UINode | null>(null);
  const [history, setHistory] = useState<UINode[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>('canvas');
  const [scriptIndex, setScriptIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [used, setUsed] = useState<string[]>([]);
  const cancels = useRef<(() => void)[]>([]);

  useEffect(() => () => cancels.current.forEach((cancel) => cancel()), []);

  const issues = useMemo(() => (tree ? checkRules(tree) : []), [tree]);
  const code = useMemo(() => (tree ? generateTsx(tree) : ''), [tree]);
  const selected = tree && selectedId ? findNode(tree, selectedId) : null;

  /** Любое изменение дерева проходит через историю: есть «Отменить» */
  const commit = (next: UINode) => {
    if (tree) setHistory((prev) => [...prev.slice(-30), tree]);
    setTree(next);
  };

  const undo = () => {
    const previous = history[history.length - 1];
    if (!previous) return;
    setHistory((prev) => prev.slice(0, -1));
    setTree(previous);
    if (selectedId && !findNode(previous, selectedId)) setSelectedId(null);
  };

  const push = (message: DemoMessage) =>
    setMessages((prev) => [...prev, message]);
  const patch = (id: string, update: Partial<DemoMessage>) =>
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? ({ ...m, ...update } as DemoMessage) : m)),
    );

  const respond = (plan: StepPlan[], finish: () => string) => {
    const id = nextId('assistant');
    setBusy(true);
    push({ id, role: 'assistant', text: '', steps: [] });
    cancels.current.push(
      runSteps(
        plan,
        (steps: DemoStep[]) => patch(id, { steps }),
        () => {
          patch(id, { text: finish() });
          setBusy(false);
        },
      ),
    );
  };

  const ask = (text: string) => {
    push({ id: nextId('user'), role: 'user', text });
    setUsed((prev) => [...prev, text]);
    const result = runBuilderAgent(text, tree, selectedId);
    if (!result) {
      respond([{ title: 'LLM: разбор правки', duration: 600 }], () =>
        selected
          ? `Не понял, что сделать с ${REGISTRY[
              selected.type
            ].title.toLowerCase()}. Попробуйте: «переименуй в «…»», «удали это», «сделай эту кнопку акцентной».`
          : 'Не понял правку. Попробуйте: «добавь кнопку «…»», «добавь колонку «…»», «добавь фильтр по …», «покажи пустое состояние» или выберите элемент на холсте.',
      );
      return;
    }
    respond(result.steps, () => {
      commit(result.tree);
      setSelectedId(result.focusId ?? null);
      setTab('canvas');
      return result.reply;
    });
  };

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setDraft('');
    ask(text);
  };

  // Автосценарий для показа
  useEffect(() => {
    const next = script?.[scriptIndex];
    if (!next || busy) return undefined;
    const timer = setTimeout(() => {
      ask(next);
      setScriptIndex((index) => index + 1);
    }, 1400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [script, busy, scriptIndex]);

  const addFromPalette = (type: NodeType) => {
    const item = node(type, { ...REGISTRY[type].defaults });
    let base = tree;
    if (!base) {
      base = node('PageLayout');
    }
    const target = selected && isContainer(selected) ? selected : null;
    let next: UINode;
    if (target) {
      next = insertChild(base, target.id, item);
    } else if (selected) {
      const parent = findParent(base, selected.id) ?? base;
      const index = parent.children.findIndex(
        (child) => child.id === selected.id,
      );
      next = insertChild(base, parent.id, item, index + 1);
    } else {
      next = insertChild(base, base.id, item);
    }
    commit(next);
    setSelectedId(item.id);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const errors = issues.filter((issue) => issue.severity === 'error').length;
  const tabs: { value: Tab; label: string }[] = [
    { value: 'canvas', label: 'Холст' },
    { value: 'code', label: 'Код TSX' },
    { value: 'json', label: 'JSON' },
    {
      value: 'rules',
      label: `Правила${issues.length ? ` (${issues.length})` : ''}`,
    },
  ];

  const pre: CSSProperties = {
    margin: 0,
    padding: 16,
    borderRadius: 12,
    background: surfaceTransparentSecondary,
    fontSize: 12,
    lineHeight: 1.5,
    overflow: 'auto',
    whiteSpace: 'pre',
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        height: '100vh',
        minHeight: 720,
        padding: 12,
        boxSizing: 'border-box',
        background: backgroundPrimary,
      }}
    >
      <style>{CANVAS_CSS}</style>
      <div style={{ flex: '0 0 360px', minWidth: 0, minHeight: 0 }}>
        <DemoChat
          title="AI-конструктор"
          messages={messages}
          draft={draft}
          onDraftChange={setDraft}
          onSend={send}
          busy={busy}
          suggestions={followUps(tree).filter((item) => !used.includes(item))}
          onSuggestion={(text) => !busy && ask(text)}
          placeholder={
            selected
              ? `Правка для: ${REGISTRY[selected.type].title.toLowerCase()}`
              : 'Например: собери реестр платежей'
          }
        />
      </div>

      <div
        style={{
          flex: '1 1 auto',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <Tabs
            view="divider"
            size="m"
            index={tabs.findIndex((t) => t.value === tab)}
          >
            {tabs.map((item, index) => (
              <TabItem
                key={item.value}
                view="divider"
                size="m"
                itemIndex={index}
                selected={item.value === tab}
                onClick={() => setTab(item.value)}
              >
                {item.label}
              </TabItem>
            ))}
          </Tabs>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {errors > 0 && (
              <Badge
                text={`Ошибок: ${errors}`}
                view="negative"
                size="s"
                pilled
              />
            )}
            <Button
              size="s"
              view="secondary"
              text="Отменить"
              disabled={!history.length}
              onClick={undo}
            />
            <Button
              size="s"
              view="secondary"
              text={copied ? 'Скопировано' : 'Копировать TSX'}
              disabled={!tree}
              onClick={copyCode}
            />
          </div>
        </div>

        <div
          style={{
            flex: '1 1 auto',
            minHeight: 0,
            overflow: 'auto',
            borderRadius: 16,
            padding: tab === 'canvas' ? '8px 16px' : 16,
            background: surfaceTransparentSecondary,
          }}
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedId(null);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setSelectedId(null);
          }}
        >
          {tab === 'canvas' &&
            (tree ? (
              <CanvasNode
                item={tree}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            ) : (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 8,
                  textAlign: 'center',
                }}
              >
                <Typography variant="H3">Здесь появится страница</Typography>
                <Typography
                  variant="BodyS"
                  style={{ color: textSecondary, maxWidth: 480 }}
                >
                  Опишите экран в чате или добавьте компоненты из палитры
                  справа. Агент собирает страницу из шаблонов (реестр, карточка,
                  форма, дашборд) и проверяет её по дизайн-гайдам.
                </Typography>
              </div>
            ))}
          {tab === 'code' && (
            <pre style={pre}>{code || 'Страницы пока нет'}</pre>
          )}
          {tab === 'json' && (
            <pre style={pre}>
              {tree ? JSON.stringify(tree, null, 2) : 'Страницы пока нет'}
            </pre>
          )}
          {tab === 'rules' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Note
                view="info"
                size="s"
                title="Откуда правила"
                text="Проверки собраны из гайдов packages/docs/design/guides (action-buttons-placement, registry) и редполитики. Пропсы сверяются с MCP-индексом. Измените что-нибудь в панели свойств — например, сделайте вторую кнопку акцентной — и правило сработает."
              />
              {issues.length === 0 && (
                <Typography variant="BodyS">
                  Замечаний нет: страница соответствует правилам.
                </Typography>
              )}
              {issues.map((issue, index) => (
                <button
                  type="button"
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${issue.rule}-${index}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    cursor: issue.nodeId ? 'pointer' : 'default',
                    border: 0,
                    padding: 0,
                    background: 'transparent',
                    textAlign: 'left',
                    font: 'inherit',
                  }}
                  onClick={() => {
                    if (issue.nodeId) {
                      setSelectedId(issue.nodeId);
                      setTab('canvas');
                    }
                  }}
                >
                  <Typography
                    variant="BodyS"
                    style={{
                      color:
                        issue.severity === 'error' ? textNegative : textWarning,
                    }}
                  >
                    {issue.message}
                  </Typography>
                  <Typography
                    variant="BodyXXS"
                    style={{ color: textSecondary }}
                  >
                    {issue.rule} · гайд: {issue.guide}
                    {issue.fix ? ' · агент исправляет автоматически' : ''}
                  </Typography>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          flex: '0 0 300px',
          minWidth: 0,
          minHeight: 0,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Inspector
          item={selected}
          issues={issues}
          onChange={(props: Record<string, PropValue | undefined>) =>
            tree && selected && commit(setProps(tree, selected.id, props))
          }
          onMove={(delta) =>
            tree && selected && commit(moveNode(tree, selected.id, delta))
          }
          onRemove={() => {
            if (!tree || !selected) return;
            commit(removeNode(tree, selected.id));
            setSelectedId(null);
          }}
        />
        {tree ? (
          <Layers
            root={tree}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ) : (
          <Section title="Слои">
            <Typography variant="BodyXS" style={{ color: textSecondary }}>
              Пусто
            </Typography>
          </Section>
        )}
        <Palette onAdd={addFromPalette} />
      </div>
    </div>
  );
}
