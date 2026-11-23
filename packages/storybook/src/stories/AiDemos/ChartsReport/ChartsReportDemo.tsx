/* eslint-disable @typescript-eslint/no-use-before-define */
import { useIsDarkTheme } from '@ui-kit/components/AiAgentPopup/hooks/useIsDarkTheme';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { Note } from '@ui-kit/components/Note';
import { TableCanvas } from '@ui-kit/components/TableCanvas';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { Typography } from '@ui-kit/components/Typography';
import { IconCloudDownloadOutline, IconFileTextOutline } from '@ui-kit/icons';
import {
  backgroundPrimary,
  surfaceTransparentSecondary,
  textSecondary,
} from '@ui-kit/tokens';
import React, {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { DemoChat } from '../shared/DemoChat';
import { nextId, runSteps, StepPlan } from '../shared/runSteps';
import type { DemoMessage, DemoStep } from '../shared/types';
import type { ChartTheme } from './charts-stub/palette';
import { SAMPLE_FILES, START_PROMPTS } from './data/sampleFiles';
import {
  columnTypeLabel,
  Dataset,
  describeProfile,
  parseCsv,
} from './engine/dataset';
import { runFakeAgent } from './engine/fakeAgent';
import type { ReportSpec } from './engine/spec';
import { buildReportHtml, downloadHtml, openHtml } from './report/exportHtml';
import { ReportView } from './report/ReportView';

type Tab = 'report' | 'spec' | 'data';
const TABS: { value: Tab; label: string }[] = [
  { value: 'report', label: 'Отчёт' },
  { value: 'spec', label: 'Спецификация' },
  { value: 'data', label: 'Данные' },
];

const SAMPLE_PREFIX = 'Взять пример: ';

const GREETING: DemoMessage = {
  id: 'greeting',
  role: 'assistant',
  text: 'Привет! Прикрепите CSV-файл (кнопка с документом в поле ввода) или возьмите пример. Опишите, какие колонки что значат и какой отчёт нужен, — я соберу графики и отдам HTML-файл.',
};

export type ChartsReportDemoProps = {
  /** Автосценарий: сообщения отправляются по очереди, как будто их печатает человек */
  script?: string[];
};

const fileToFileName = (name: string) =>
  `${name.replace(/[^\wа-яё\- ]+/gi, '').trim() || 'отчёт'}.html`;

function genericPrompts(dataset: Dataset): string[] {
  const { columns } = dataset.profile;
  const number = columns.find((c) => c.type === 'number');
  const category = columns.find((c) => c.type === 'category');
  const date = columns.find((c) => c.type === 'date');
  const prompts: string[] = [];
  if (number && date)
    prompts.push(`Покажи динамику «${number.name}» по месяцам`);
  if (number && category)
    prompts.push(`Сравни «${number.name}» по «${category.name}»`);
  prompts.push('Добавь итоговые KPI', 'Добавь таблицу');
  return prompts;
}

export function ChartsReportDemo({ script }: ChartsReportDemoProps) {
  const isDark = useIsDarkTheme();
  const theme: ChartTheme = isDark ? 'dark' : 'light';
  const [messages, setMessages] = useState<DemoMessage[]>([GREETING]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [spec, setSpec] = useState<ReportSpec | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>(START_PROMPTS);
  const [tab, setTab] = useState<Tab>('report');
  const [scriptIndex, setScriptIndex] = useState(0);

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cancels = useRef<(() => void)[]>([]);

  useEffect(() => () => cancels.current.forEach((cancel) => cancel()), []);

  const push = (message: DemoMessage) =>
    setMessages((prev) => [...prev, message]);
  const patch = (id: string, update: Partial<DemoMessage>) =>
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? ({ ...m, ...update } as DemoMessage) : m)),
    );

  /** Ответ агента с шагами: шаги проигрываются, затем текст ответа */
  const respond = (
    plan: StepPlan[],
    finish: () => { text: string; actions?: React.ReactNode },
  ) => {
    const id = nextId('assistant');
    setBusy(true);
    push({ id, role: 'assistant', text: '', steps: [] });
    cancels.current.push(
      runSteps(
        plan,
        (steps: DemoStep[]) => patch(id, { steps }),
        () => {
          patch(id, finish());
          setBusy(false);
        },
      ),
    );
  };

  const exportProps = (current: ReportSpec, data: Dataset) => ({
    spec: current,
    profile: data.profile,
    rows: data.rows,
    theme,
  });

  const download = (current: ReportSpec, data: Dataset) =>
    downloadHtml(
      buildReportHtml(exportProps(current, data), previewRef.current),
      fileToFileName(current.title),
    );

  const attach = (text: string, fileName: string, prompts?: string[]) => {
    push({
      id: nextId('user'),
      role: 'user',
      text: 'Прикрепил файл с данными',
      attachment: fileName,
    });
    let parsed: Dataset | null = null;
    let error = '';
    try {
      parsed = parseCsv(text, fileName);
    } catch (e) {
      error = (e as Error).message;
    }
    respond(
      [
        { title: 'Загрузка файла', detail: fileName, duration: 500 },
        {
          title: 'Разбор CSV',
          detail: 'разделитель и кодировка определены',
          duration: 500,
        },
        {
          title: 'Профилирование колонок',
          detail: 'типы, диапазоны, примеры значений',
          duration: 600,
        },
      ],
      () => {
        if (!parsed) return { text: `Не получилось разобрать файл: ${error}` };
        setDataset(parsed);
        setSpec(null);
        setTab('report');
        setSuggestions(prompts ?? genericPrompts(parsed));
        return {
          text: `Файл разобран: ${describeProfile(
            parsed.profile,
          )}.\nЧто построить? Можно описать словами, какие колонки за что отвечают.`,
        };
      },
    );
  };

  const ask = (text: string) => {
    push({ id: nextId('user'), role: 'user', text });
    setSuggestions((prev) => prev.filter((item) => item !== text));

    if (!dataset) {
      respond([], () => ({
        text: 'Сначала прикрепите файл или возьмите пример — без данных строить нечего.',
      }));
      setSuggestions(START_PROMPTS);
      return;
    }

    const result = runFakeAgent(text, dataset, spec);
    if (!result) {
      respond([{ title: 'LLM: разбор запроса', duration: 700 }], () => ({
        text: 'Не понял, что изменить. Попробуйте: «сделай линией», «добавь таблицу», «оставь только …», «назови отчёт «…»» или «новый отчёт: …».',
      }));
      return;
    }

    respond(result.steps, () => {
      setSpec(result.spec);
      setTab('report');
      return {
        text: result.reply,
        actions: (
          <Button
            size="xs"
            view="secondary"
            text="Скачать HTML"
            contentLeft={<IconCloudDownloadOutline size="xs" />}
            onClick={() => download(result.spec, dataset)}
          />
        ),
      };
    });
  };

  const handleInput = (text: string) => {
    if (text.startsWith(SAMPLE_PREFIX)) {
      const file = SAMPLE_FILES.find(
        (item) => item.title === text.slice(SAMPLE_PREFIX.length),
      );
      if (file) attach(file.build(), file.fileName, file.prompts);
      return;
    }
    ask(text);
  };

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setDraft('');
    handleInput(text);
  };

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // eslint-disable-next-line no-param-reassign
    event.target.value = '';
    if (!file) return;
    if (!/\.csv$/i.test(file.name)) {
      push({
        id: nextId('user'),
        role: 'user',
        text: 'Прикрепил файл',
        attachment: file.name,
      });
      respond([], () => ({
        text: 'В демо разбирается только CSV. XLSX будет разбирать бэкенд — сохраните таблицу как CSV и прикрепите снова.',
      }));
      return;
    }
    attach(await file.text(), file.name);
  };

  // Автосценарий для показа: следующее сообщение, когда агент освободился
  useEffect(() => {
    const next = script?.[scriptIndex];
    if (!next || busy) return undefined;
    const timer = setTimeout(() => {
      handleInput(next);
      setScriptIndex((index) => index + 1);
    }, 1200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [script, busy, scriptIndex]);

  const dataColumns = useMemo(
    () =>
      (dataset?.profile.columns ?? []).map((column) => ({
        key: column.name,
        name: `${column.name} · ${columnTypeLabel(column.type)}`,
        width: 180,
      })),
    [dataset],
  );
  const dataRows = useMemo(
    () => (dataset?.rows ?? []).map((row, index) => ({ ...row, id: index })),
    [dataset],
  );

  const panel: CSSProperties = {
    flex: '1 1 auto',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    minHeight: 0,
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        height: '100vh',
        minHeight: 680,
        padding: 16,
        boxSizing: 'border-box',
        background: backgroundPrimary,
      }}
    >
      <div style={{ flex: '0 0 420px', minWidth: 0, minHeight: 0 }}>
        <DemoChat
          title="AI-агент · отчёты"
          messages={messages}
          draft={draft}
          onDraftChange={setDraft}
          onSend={send}
          busy={busy}
          suggestions={suggestions}
          onSuggestion={(text) => !busy && handleInput(text)}
          placeholder="Например: покажи выручку по месяцам в разрезе регионов"
          extraAction={
            <IconButton
              size="xs"
              view="clear"
              aria-label="Прикрепить CSV"
              disabled={busy}
              onClick={() => fileInputRef.current?.click()}
            >
              <IconFileTextOutline size="s" />
            </IconButton>
          }
        />
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,text/csv"
          hidden
          onChange={handleFile}
        />
      </div>

      <div style={panel}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <Tabs
            view="divider"
            size="m"
            index={TABS.findIndex((t) => t.value === tab)}
          >
            {TABS.map((item, index) => (
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
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              size="s"
              view="secondary"
              text="Открыть в новой вкладке"
              disabled={!spec || !dataset}
              onClick={() =>
                spec &&
                dataset &&
                openHtml(
                  buildReportHtml(
                    exportProps(spec, dataset),
                    previewRef.current,
                  ),
                )
              }
            />
            <Button
              size="s"
              view="accent"
              text="Скачать HTML"
              contentLeft={<IconCloudDownloadOutline size="s" />}
              disabled={!spec || !dataset}
              onClick={() => spec && dataset && download(spec, dataset)}
            />
          </div>
        </div>

        <div
          ref={previewRef}
          style={{
            flex: '1 1 auto',
            minHeight: 0,
            overflow: 'auto',
            borderRadius: 16,
            padding: 20,
            background: surfaceTransparentSecondary,
          }}
        >
          {tab === 'report' &&
            (spec && dataset ? (
              <ReportView
                spec={spec}
                profile={dataset.profile}
                rows={dataset.rows}
                theme={theme}
              />
            ) : (
              <EmptyPreview hasData={Boolean(dataset)} />
            ))}

          {tab === 'spec' && (
            <SpecView
              spec={spec}
              profile={
                dataset ? JSON.stringify(dataset.profile, null, 2) : null
              }
            />
          )}

          {tab === 'data' &&
            (dataset ? (
              <div style={{ height: '100%', minHeight: 400 }}>
                <TableCanvas columnConfig={dataColumns} rows={dataRows} />
              </div>
            ) : (
              <EmptyPreview hasData={false} />
            ))}
        </div>
      </div>
    </div>
  );
}

function EmptyPreview({ hasData }: { hasData: boolean }) {
  const steps = [
    [
      '1',
      'Прикрепите файл',
      'CSV с заголовками в первой строке. Данные остаются на сервере.',
    ],
    [
      '2',
      'Опишите отчёт словами',
      'Какие колонки за что отвечают и что нужно показать.',
    ],
    [
      '3',
      'Уточните и скачайте',
      'Правки словами, на выходе — один HTML-файл для руководства.',
    ],
  ];
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        textAlign: 'center',
      }}
    >
      <Typography variant="H3">
        {hasData
          ? 'Данные загружены — опишите отчёт в чате'
          : 'Здесь появится отчёт'}
      </Typography>
      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {steps.map(([n, title, text]) => (
          <div key={n} style={{ width: 220, textAlign: 'left' }}>
            <Typography variant="BodyS" bold>
              {n}. {title}
            </Typography>
            <Typography
              variant="BodyXS"
              style={{ color: textSecondary, marginTop: 4 }}
            >
              {text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecView({
  spec,
  profile,
}: {
  spec: ReportSpec | null;
  profile: string | null;
}) {
  const code: CSSProperties = {
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Note
        view="info"
        size="s"
        title="Что видит LLM и что она возвращает"
        text="Модель получает профиль данных (без самих строк) и описание графиков из MCP Charts UI, а возвращает только эту спецификацию. Отчёт и цифры строит runtime по полным данным."
      />
      <Typography variant="BodyS" bold>
        Профиль данных (вход модели)
      </Typography>
      <pre style={code}>{profile ?? 'Файл ещё не прикреплён'}</pre>
      <Typography variant="BodyS" bold>
        ReportSpec (выход модели)
      </Typography>
      <pre style={code}>
        {spec ? JSON.stringify(spec, null, 2) : 'Спецификации пока нет'}
      </pre>
    </div>
  );
}
