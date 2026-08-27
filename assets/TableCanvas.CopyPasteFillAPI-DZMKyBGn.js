import{j as e}from"./react-D2T61mpp.js";import{c4 as l,c5 as r}from"./vendor-DrvHogBM.js";import{T as a}from"./TypeSourceViewer-CV7mtgs3.js";import"./react-is-Clcustum.js";import"./styled-components-C32trI5d.js";import"./tslib-De9GV7Vy.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill/API"}),`
`,e.jsx(n.h1,{id:"cell-transfer-api-copy--paste--fill",children:"Cell Transfer API (Copy / Paste / Fill)"}),`
`,e.jsx(n.h2,{id:"celltransferconfig-в-tableconfig",children:"CellTransferConfig (в TableConfig)"}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"CellTransferConfig"}),`
`,e.jsx(n.h2,{id:"hotkeyconfig",children:"HotkeyConfig"}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"HotkeyConfig"}),`
`,e.jsx(n.p,{children:"Можно передать массив — сработает любая из комбинаций:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`hotkeys: {
  copy: [
    { code: 'KeyC', ctrl: true },
    { code: 'Insert', ctrl: true },  // альтернативный хоткей
  ],
}
`})}),`
`,e.jsx(n.h2,{id:"pasteconfig",children:"PasteConfig"}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"PasteConfig"}),`
`,e.jsxs(n.p,{children:["Поле ",e.jsx(n.code,{children:"validation: 'type-check'"})," (default) автоматически проверяет:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"inputNumber / contentFormat.type='number'"})," — значение должно парситься в число через разделители из ",e.jsx(n.code,{children:"contentFormat"}),". Невалидные ячейки пропускаются."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"select"})," — значение должно совпадать с одной из options (value или text). Невалидные пропускаются."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"inputString / остальное"})," — всегда валидно."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Установите ",e.jsx(n.code,{children:"validation: 'none'"})," чтобы вставлять сырые строки без проверок."]}),`
`,e.jsx(n.h2,{id:"celltransfercellinfo",children:"CellTransferCellInfo"}),`
`,e.jsxs(n.p,{children:["Информация об одной ячейке. Используется как элемент двумерного массива ",e.jsx(n.code,{children:"cells"}),` внутри
всех meta-типов ниже (`,e.jsx(n.code,{children:"CopyMeta"}),", ",e.jsx(n.code,{children:"PasteMeta"}),", ",e.jsx(n.code,{children:"FillMeta"}),")."]}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"CellTransferCellInfo"}),`
`,e.jsx(n.h2,{id:"метаданные-колбэков-meta-типы",children:"Метаданные колбэков (Meta-типы)"}),`
`,e.jsxs(n.p,{children:["Каждый колбэк (",e.jsx(n.code,{children:"onBeforeCopy"}),", ",e.jsx(n.code,{children:"onBeforePaste"}),", ",e.jsx(n.code,{children:"onBeforeFill"}),`) получает вторым
аргументом свой meta-объект с контекстом операции.`]}),`
`,e.jsxs(n.h3,{id:"copymeta-onbeforecopy",children:["CopyMeta (",e.jsx(n.code,{children:"onBeforeCopy"}),")"]}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"CopyMeta"}),`
`,e.jsxs(n.h3,{id:"pastemeta-onbeforepaste",children:["PasteMeta (",e.jsx(n.code,{children:"onBeforePaste"}),")"]}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"PasteMeta"}),`
`,e.jsxs(n.h3,{id:"fillmeta-onbeforefill",children:["FillMeta (",e.jsx(n.code,{children:"onBeforeFill"}),")"]}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"FillMeta"}),`
`,e.jsx(n.h2,{id:"rowschangetype",children:"RowsChangeType"}),`
`,e.jsxs(n.p,{children:["Поле ",e.jsx(n.code,{children:"type"})," в ",e.jsx(n.code,{children:"onRowsChange"})," указывает источник изменения строк."]}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"RowsChangeType"}),`
`,e.jsx(n.h2,{id:"fillhandleconfig",children:"FillHandleConfig"}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"FillHandleConfig"}),`
`,e.jsx(n.h2,{id:"allowedfilldirections--fillpatternevent",children:"AllowedFillDirections / FillPatternEvent"}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"AllowedFillDirections"}),`
`,e.jsx(a,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts",typeName:"FillPatternEvent"}),`
`,e.jsx(n.h2,{id:"columnconfigcopydata",children:"columnConfig.copyData"}),`
`,e.jsx(n.p,{children:"Текстовое представление ячейки для копирования в буфер."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`copyData?: string | ((row: Row) => string);
`})}),`
`,e.jsxs(n.p,{children:["Если ",e.jsx(n.code,{children:"copyData"})," не задан, используется ",e.jsx(n.code,{children:"row[column.key]?.toString()"}),"."]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"базовое-использование-работает-из-коробки",children:"Базовое использование (работает из коробки)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => r.id,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,e.jsx(n.p,{children:"Copy (Ctrl+C) и Paste (Ctrl+V) работают автоматически в режиме редактирования."}),`
`,e.jsx(n.h3,{id:"excel-like-поведение-paste",children:"Excel-like поведение paste"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  cellTransfer: {
    paste: {
      readonlyBehavior: 'abort',  // как в Excel
      broadcast: true,
    },
  },
}}
`})}),`
`,e.jsx(n.h3,{id:"кастомные-хоткеи--перехват",children:"Кастомные хоткеи + перехват"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  cellTransfer: {
    hotkeys: {
      copy: { code: 'KeyC', ctrl: true, alt: true },
      paste: { code: 'KeyV', ctrl: true, alt: true },
    },
    onBeforeCopy: (data) => {
      // логируем или модифицируем данные
      console.log('Copying:', data);
      return data;
    },
    onBeforePaste: (data) => {
      if (data.length > 100) {
        alert('Слишком много строк');
        return false;
      }
      return data;
    },
  },
}}
`})}),`
`,e.jsx(n.h3,{id:"кастомный-copydata-для-canvas-ячейки",children:"Кастомный copyData для canvas-ячейки"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`columnConfig={[
  {
    key: 'status',
    name: 'Статус',
    renderCell: ({ row }) => (
      <Canvas.Badge
        text={row.status}
        view={row.status === 'Активный' ? 'positive' : 'warning'}
      />
    ),
    copyData: (row) => row.status ?? '',  // копируем только текст
  },
]}
`})})]})}function f(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{f as default};
