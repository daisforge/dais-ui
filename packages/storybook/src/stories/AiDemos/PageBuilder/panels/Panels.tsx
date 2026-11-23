/**
 * Правая колонка конструктора: свойства выбранного узла, слои, палитра.
 * Контролы свойств строятся из типов пропсов: enum → список, boolean →
 * переключатель, string/number → поле. Пропсы с меткой MCP взяты
 * из среза MCP-индекса.
 */
import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Switch } from '@ui-kit/components/Switch';
import { TextField } from '@ui-kit/components/TextField';
import { Typography } from '@ui-kit/components/Typography';
import {
  outlineSolidSecondary,
  surfaceSolidCard,
  surfaceTransparentSecondary,
  textAccent,
  textNegative,
  textPrimary,
  textSecondary,
  textWarning,
} from '@ui-kit/tokens';
import React, { CSSProperties, ReactNode } from 'react';

import {
  CATEGORIES,
  libraryComponent,
  PropSpec,
  propSpecs,
  REGISTRY,
} from '../model/registry';
import type { RuleIssue } from '../model/rules';
import type { NodeType, PropValue, UINode } from '../model/tree';

const section: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 12,
  borderRadius: 12,
  background: surfaceSolidCard,
  border: `1px solid ${outlineSolidSecondary}`,
};

const selectStyle: CSSProperties = {
  width: '100%',
  height: 32,
  padding: '0 8px',
  borderRadius: 8,
  border: `1px solid ${outlineSolidSecondary}`,
  background: surfaceTransparentSecondary,
  color: textPrimary,
  font: 'inherit',
  fontSize: 13,
};

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div style={section}>
      <Typography variant="BodyS" bold>
        {title}
      </Typography>
      {children}
    </div>
  );
}

function PropControl({
  spec,
  value,
  onChange,
}: {
  spec: PropSpec;
  value: PropValue | undefined;
  onChange: (value: PropValue | undefined) => void;
}) {
  const label = (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 6 }}
      title={spec.description}
    >
      <Typography variant="BodyXS" style={{ color: textSecondary }}>
        {spec.name}
      </Typography>
      {spec.source === 'mcp' && (
        <Badge text="MCP" size="xs" view="accent" transparent pilled />
      )}
    </div>
  );

  if (spec.kind === 'boolean') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {label}
        <Switch
          size="s"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked || undefined)}
        />
      </div>
    );
  }

  if (spec.kind === 'enum') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {label}
        <select
          aria-label={spec.name}
          style={selectStyle}
          value={value === undefined ? '' : String(value)}
          onChange={(event) => onChange(event.target.value || undefined)}
        >
          <option value="">— по умолчанию —</option>
          {spec.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label}
      <TextField
        size="xs"
        value={value === undefined ? '' : String(value)}
        onChange={(event) => {
          const raw = event.target.value;
          onChange(
            spec.kind === 'number' && raw !== ''
              ? Number(raw)
              : raw || undefined,
          );
        }}
      />
    </div>
  );
}

export function Inspector({
  item,
  issues,
  onChange,
  onMove,
  onRemove,
}: {
  item: UINode | null;
  issues: RuleIssue[];
  onChange: (props: Record<string, PropValue | undefined>) => void;
  onMove: (delta: number) => void;
  onRemove: () => void;
}) {
  if (!item) {
    return (
      <Section title="Свойства">
        <Typography variant="BodyXS" style={{ color: textSecondary }}>
          Кликните элемент на холсте или в слоях.
        </Typography>
      </Section>
    );
  }
  const entry = REGISTRY[item.type];
  const component = libraryComponent(item.type);
  const own = issues.filter((issue) => issue.nodeId === item.id);
  const isRoot = item.type === 'PageLayout';

  return (
    <Section title={`${entry.title} · ${item.type}`}>
      <Typography variant="BodyXXS" style={{ color: textSecondary }}>
        {entry.preset
          ? `Композиция на ${component.name}. ${component.description}`
          : component.description}
      </Typography>
      <code
        style={{
          fontSize: 11,
          color: textSecondary,
          background: surfaceTransparentSecondary,
          padding: '4px 6px',
          borderRadius: 6,
          wordBreak: 'break-all',
        }}
      >
        {component.importStatement}
      </code>
      {own.map((issue) => (
        <Typography
          key={issue.rule}
          variant="BodyXS"
          style={{
            color: issue.severity === 'error' ? textNegative : textWarning,
          }}
        >
          ⚠ {issue.message}
        </Typography>
      ))}
      {propSpecs(item.type).map((spec) => (
        <PropControl
          key={spec.name}
          spec={spec}
          value={item.props[spec.name]}
          onChange={(value) => onChange({ [spec.name]: value })}
        />
      ))}
      {!isRoot && (
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          <Button
            size="xs"
            view="secondary"
            text="↑"
            onClick={() => onMove(-1)}
          />
          <Button
            size="xs"
            view="secondary"
            text="↓"
            onClick={() => onMove(1)}
          />
          <Button size="xs" view="negative" text="Удалить" onClick={onRemove} />
        </div>
      )}
    </Section>
  );
}

export function Layers({
  root,
  selectedId,
  onSelect,
}: {
  root: UINode;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const rows: ReactNode[] = [];
  const visit = (item: UINode, depth: number) => {
    const text =
      item.props.text ??
      item.props.title ??
      item.props.label ??
      item.props.placeholder;
    const selected = item.id === selectedId;
    rows.push(
      <button
        key={item.id}
        type="button"
        onClick={() => onSelect(item.id)}
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          padding: `3px 6px 3px ${6 + depth * 12}px`,
          border: 0,
          borderRadius: 6,
          cursor: 'pointer',
          fontFamily: "'SB Sans Text', system-ui, sans-serif",
          fontSize: 12,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: selected ? textAccent : textPrimary,
          background: selected ? surfaceTransparentSecondary : 'transparent',
        }}
      >
        {item.type}
        {text !== undefined && (
          <span style={{ color: textSecondary }}> · {String(text)}</span>
        )}
      </button>,
    );
    item.children.forEach((child) => visit(child, depth + 1));
  };
  visit(root, 0);
  return <Section title="Слои">{rows}</Section>;
}

export function Palette({ onAdd }: { onAdd: (type: NodeType) => void }) {
  return (
    <Section title="Компоненты">
      <Typography variant="BodyXXS" style={{ color: textSecondary }}>
        Клик добавляет компонент в выбранный контейнер или после выбранного
        элемента.
      </Typography>
      {CATEGORIES.map((category) => (
        <div
          key={category}
          style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
        >
          <Typography variant="BodyXXS" style={{ color: textSecondary }}>
            {category}
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {(Object.keys(REGISTRY) as NodeType[])
              .filter(
                (type) =>
                  type !== 'PageLayout' && REGISTRY[type].category === category,
              )
              .map((type) => (
                <Button
                  key={type}
                  size="xxs"
                  view="clear"
                  text={REGISTRY[type].title}
                  onClick={() => onAdd(type)}
                />
              ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
