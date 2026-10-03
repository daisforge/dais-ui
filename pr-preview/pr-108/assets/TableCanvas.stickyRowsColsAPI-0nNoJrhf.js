import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as c}from"./vendor-y6J4V6et.js";import"./react-is-Clcustum.js";import"./styled-components-DJiEvwJZ.js";import"./@tanstack/react-virtual-by8lNOKG.js";import"./tslib-DoU9Jm1N.js";function l(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Локальные компоненты/TableCanvas/StickyRowsCols/API"}),`
`,n.jsx(s.h1,{id:"stickyrowscols-api",children:"StickyRowsCols API"}),`
`,n.jsx(s.h2,{id:"tableconfigstickycolumns",children:"tableConfig.stickyColumns"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`stickyColumns?: string[];
`})}),`
`,n.jsxs(s.p,{children:["Ключи колонок (",n.jsx(s.code,{children:"key"})," из ",n.jsx(s.code,{children:"columnConfig"}),"), которые прилипают к левому краю при горизонтальной прокрутке."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`tableConfig={{ stickyColumns: ['region', 'total'] }}
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Порядок ключей не важен, несуществующие ключи игнорируются."}),`
`,n.jsxs(s.li,{children:["Липкие колонки встают правее закреплённых (",n.jsx(s.code,{children:"columnsControl.pinnedDefault"}),") и колонки нумерации."]}),`
`]}),`
`,n.jsx(s.h2,{id:"tableconfigstickyrows",children:"tableConfig.stickyRows"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`stickyRows?: readonly number[] | ((row: RowType, rowIndex: number) => boolean);
`})}),`
`,n.jsx(s.p,{children:"Строки, которые прилипают под шапкой. Два способа задать:"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Предикат"})," — вызывается для отображаемых строк, ",n.jsx(s.code,{children:"true"})," — строка липкая."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`tableConfig={{ stickyRows: (row) => row.kind === 'subtotal' }}
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["Работает с сортировкой и фильтрами: ",n.jsx(s.code,{children:"rowIndex"})," — индекс среди отображаемых строк."]}),`
`,n.jsx(s.li,{children:"Результаты кешируются: строка, оставшаяся тем же объектом на том же месте, повторно не проверяется. При подгрузке чанками предикат вызывается только для новых строк, при редактировании — только для изменённых."}),`
`,n.jsxs(s.li,{children:["Кеш привязан к функции: передавайте стабильный предикат (",n.jsx(s.code,{children:"useCallback"})," или константа вне компонента), иначе каждый рендер проверит все строки заново."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Индексы"})," — передаются в таблицу как есть, без прохода по строкам."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`tableConfig={{ stickyRows: [0, 250000, 500000] }}
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Подходит для больших таблиц, где позиции липких строк известны заранее (например, их возвращает сервер)."}),`
`,n.jsx(s.li,{children:"Индексы относятся к отображаемым строкам: после сортировки или фильтрации их пересчитывает тот, кто передаёт."}),`
`]}),`
`,n.jsxs(s.p,{children:["Итоговые строки (",n.jsx(s.code,{children:"bottomSummaryRows"}),") закреплены снизу всегда и липкими не становятся."]}),`
`,n.jsx(s.h2,{id:"рекомендации",children:"Рекомендации"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Держите число липких строк небольшим: прилипшие строки занимают место под шапкой."}),`
`,n.jsx(s.li,{children:"Для отчётов удобно делать липкими итоги разделов — при прокрутке видно, к какому разделу относятся данные."}),`
`,n.jsx(s.li,{children:"Для миллионов строк передавайте индексы; для подгружаемых чанками данных — стабильный предикат."}),`
`]})]})}function a(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(l,{...e})}):l(e)}export{a as default};
