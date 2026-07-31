import React from 'react';

/**
 * Дебаг-таблица размеров ControlBlock по `controlBlock.size`. Использовалась
 * при разработке редизайна, чтобы видеть, какой размер получает каждый
 * элемент панели. В сториях сейчас НЕ подключается, оставлена на случай,
 * если снова понадобится визуальная сверка размеров. Папка `_lib` намеренно
 * не содержит `.stories`, чтобы этот код не попадал в мета-доку для агента.
 */

const sizeMap = {
  m: {
    controlBlock: 'm',
    editButtons: 'xs (Button)',
    leftSideInner: 'xs (Button)',
    rightSideInner: 'xs (Button)',
    nativeFeatureIcons: 'm (EmbedIconButton 40×40)',
    customFeatures: 'контролируется разработчиком',
    editModeLeftSlot: 'контролируется разработчиком',
    search: 's (TextField)',
    tabs: 's (Tabs)',
  },
  xs: {
    controlBlock: 'xs',
    editButtons: 'xxs (Button)',
    leftSideInner: 'xxs (Button)',
    rightSideInner: 'xxs (Button)',
    nativeFeatureIcons: 's (EmbedIconButton 32×32)',
    customFeatures: 'контролируется разработчиком',
    editModeLeftSlot: 'контролируется разработчиком',
    search: 'xs (TextField)',
    tabs: 'xs (Tabs)',
  },
};

const cellStyle: React.CSSProperties = {
  padding: '2px 8px',
  borderBottom: '1px solid #e0e0e0',
  fontSize: 12,
  lineHeight: '18px',
};

export const SizeInfoTable = ({ size }: { size: 'm' | 'xs' }) => {
  const info = sizeMap[size];
  const rows = [
    ['controlBlock.size', info.controlBlock],
    ['Кнопки редактирования', info.editButtons],
    ['leftSideInner кнопки', info.leftSideInner],
    ['rightSideInner кнопки', info.rightSideInner],
    ['Нативные фичи-иконки', info.nativeFeatureIcons],
    ['customFeatures (CustomIconRender)', info.customFeatures],
    ['editModeLeftSlot', info.editModeLeftSlot],
    ['Поле поиска', info.search],
    ['Табы (TableTabs)', info.tabs],
  ];

  return (
    <table
      style={{
        borderCollapse: 'collapse',
        marginBottom: 12,
        border: '1px solid #e0e0e0',
        width: 'auto',
      }}
    >
      <thead>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ ...cellStyle, fontWeight: 600, textAlign: 'left' }}>
            Элемент
          </th>
          <th style={{ ...cellStyle, fontWeight: 600, textAlign: 'left' }}>
            Размер
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <td style={cellStyle}>{label}</td>
            <td style={{ ...cellStyle, fontFamily: 'monospace' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
