import{j as e}from"./react-D2T61mpp.js";import{c4 as c,c5 as i}from"./vendor-4DQodAhx.js";import{T as l}from"./TypeSourceViewer-BEDFerHI.js";import"./react-is-Clcustum.js";import"./styled-components-rNTPyvwi.js";import"./tslib-De9GV7Vy.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Локальные компоненты/TableCanvas/Tooltip/API"}),`
`,e.jsx(n.h1,{id:"tooltip-api",children:"Tooltip API"}),`
`,e.jsx(n.h2,{id:"источники-конфига-тултипа",children:"Источники конфига тултипа"}),`
`,e.jsxs(n.p,{children:["Тултип может быть задан на ",e.jsx(n.strong,{children:"трёх уровнях"})," (проверяются по приоритету, первый непустой побеждает):"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Встроенный маппинг по ",e.jsx(n.code,{children:"nodeId"})]})," — внутренний словарь ",e.jsx(n.code,{children:"TOOLTIP_TEXTS"})," (например, ",e.jsx(n.code,{children:"HEADER_TOOLTIP_DRAG_ID"})," → «Перетащить колонку»). ",e.jsx(n.strong,{children:"Работает всегда."})," Наивысший приоритет — колоночный конфиг не может перебить внутренние тултипы UI таблицы."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Проп ",e.jsx(n.code,{children:"tooltip"})," на Canvas-элементе"]})," — задаётся прямо на ",e.jsx(n.code,{children:"Canvas.Container"}),", ",e.jsx(n.code,{children:"Canvas.Button"})," и т.д. внутри ",e.jsx(n.code,{children:"renderCell"})," / ",e.jsx(n.code,{children:"renderHeaderCell"}),". Тип: ",e.jsx(n.code,{children:"CanvasNodeTooltipConfig"}),". ",e.jsx(n.strong,{children:"Работает всегда."})]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Поле ",e.jsx(n.code,{children:"cellTooltip"})," / ",e.jsx(n.code,{children:"headerCellTooltip"})," в ",e.jsx(n.code,{children:"columnConfig"})]})," — на уровне конфигурации колонки. Может быть строкой, объектом или функцией ",e.jsx(n.code,{children:"(context) => config | null"}),". ",e.jsxs(n.strong,{children:["Работает только при ",e.jsx(n.code,{children:"tooltip.enabled: true"}),"."]})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Формат конфига:"})," строка (только текст) или объект с обязательным полем ",e.jsx(n.code,{children:"text"})," и опциональными пропсами ",e.jsx(n.code,{children:"Tooltip"})," (",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"view"})," и т.д.; без ",e.jsx(n.code,{children:"opened"}),", ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"style"}),"), а также ",e.jsx(n.code,{children:"mouseEnterDelay"})," / ",e.jsx(n.code,{children:"mouseLeaveDelay"})," для per-node задержек."]}),`
`,e.jsxs(n.p,{children:["По умолчанию текст рендерится с ",e.jsx(n.code,{children:"white-space: normal"})," — переносы строк (",e.jsx(n.code,{children:"\\n"}),") в ",e.jsx(n.code,{children:"text"})," схлопываются в пробел. Чтобы сохранить переносы (например, в многострочных подсказках), добавьте в объектную форму конфига ",e.jsx(n.code,{children:"preserveLineBreaks: true"})," — тогда к тексту тултипа применится ",e.jsx(n.code,{children:"white-space: pre-line"}),". Флаг выключен по умолчанию и не меняет поведение существующих строковых тултипов."]}),`
`,e.jsx(n.h2,{id:"модуль-tableconfigtooltip",children:"Модуль tableConfig.tooltip"}),`
`,e.jsxs(n.p,{children:["Глобальные настройки тултипа вынесены в ",e.jsx(n.code,{children:"tableConfig.tooltip"})," (тип ",e.jsx(n.code,{children:"TableConfigTooltip"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"tooltip.enabled"})," — включает колоночные/кастомные тултипы (",e.jsx(n.code,{children:"cellTooltip"}),", ",e.jsx(n.code,{children:"headerCellTooltip"}),"). По умолчанию ",e.jsx(n.code,{children:"false"}),". Внутренние тултипы (проп ",e.jsx(n.code,{children:"tooltip"})," на Canvas-элементе и маппинг по ",e.jsx(n.code,{children:"nodeId"}),") работают всегда, независимо от ",e.jsx(n.code,{children:"enabled"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"tooltip.mouseEnterDelay"})," — глобальная задержка перед показом (мс, по умолчанию ",e.jsx(n.code,{children:"500"}),"). Per-node переопределяет."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"tooltip.mouseLeaveDelay"})," — глобальная задержка перед скрытием (мс, по умолчанию ",e.jsx(n.code,{children:"0"}),"). Per-node переопределяет."]}),`
`]}),`
`,e.jsx(n.p,{children:"Пример:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  tooltip: {
    enabled: true,
    mouseEnterDelay: 300,
  },
}}
`})}),`
`,e.jsx(n.h2,{id:"колоночные-celltooltip--headercelltooltip",children:"Колоночные cellTooltip / headerCellTooltip"}),`
`,e.jsxs(n.p,{children:["Задаются в ",e.jsx(n.code,{children:"columnConfig"})," на уровне колонки. Значение — строка, объект или функция. Требуют ",e.jsx(n.code,{children:"tooltip.enabled: true"})," в ",e.jsx(n.code,{children:"tableConfig"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columnConfig = [
  {
    key: 'task',
    name: 'Title',
    // Строка — простой текст
    headerCellTooltip: 'Название задачи',
    // Функция — динамический конфиг
    cellTooltip: ({ row, column }) => {
      return \`\${column.name}: \${row.task}\`;
    },
  },
];
`})}),`
`,e.jsxs(n.p,{children:["Контекст функции ",e.jsx(n.code,{children:"cellTooltip"})," содержит: ",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"column"}),", ",e.jsx(n.code,{children:"ctxs"}),", ",e.jsx(n.code,{children:"refTable"}),", ",e.jsx(n.code,{children:"colInd"}),", ",e.jsx(n.code,{children:"rowInd"}),", ",e.jsx(n.code,{children:"theme"}),`.
Контекст функции `,e.jsx(n.code,{children:"headerCellTooltip"})," содержит: ",e.jsx(n.code,{children:"column"}),", ",e.jsx(n.code,{children:"ctxs"}),", ",e.jsx(n.code,{children:"refTable"}),", ",e.jsx(n.code,{children:"colInd"}),", ",e.jsx(n.code,{children:"theme"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"типы",children:"Типы"}),`
`,e.jsx(n.h3,{id:"canvasnodetooltipconfig",children:"CanvasNodeTooltipConfig"}),`
`,e.jsxs(n.p,{children:["Проп ",e.jsx(n.code,{children:"tooltip"})," на Canvas-элементах и базовый формат конфига. Строка (текст) или объект с ",e.jsx(n.code,{children:"text"})," и опциональными пропсами Tooltip."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/lib/canvas/utils/portalHoverEvents.ts",typeName:"CanvasNodeTooltipConfig"}),`
`,e.jsx(n.h3,{id:"canvasnodetooltipprops",children:"CanvasNodeTooltipProps"}),`
`,e.jsxs(n.p,{children:["Пропсы Tooltip, которые можно задать через объектную форму конфига. Управляемые внутренне поля (",e.jsx(n.code,{children:"opened"}),", ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"style"}),", ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay"}),", ",e.jsx(n.code,{children:"hoverTimeout"}),", ",e.jsx(n.code,{children:"trigger"}),") исключены."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/lib/canvas/utils/portalHoverEvents.ts",typeName:"CanvasNodeTooltipProps"}),`
`,e.jsx(n.h3,{id:"tooltipconfigresult",children:"TooltipConfigResult"}),`
`,e.jsxs(n.p,{children:["Алиас: ",e.jsx(n.code,{children:"CanvasNodeTooltipConfig | null"}),". Используется как возвращаемый тип функциональной формы ",e.jsx(n.code,{children:"cellTooltip"})," / ",e.jsx(n.code,{children:"headerCellTooltip"}),"."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-tooltip/types.ts",typeName:"TooltipConfigResult"}),`
`,e.jsx(n.h3,{id:"tooltipdata",children:"TooltipData"}),`
`,e.jsxs(n.p,{children:["Внутренний результат резолвинга: текст, пропсы тултипа и per-node задержки. Возвращается из ",e.jsx(n.code,{children:"resolveTooltipData"})," и передаётся в ",e.jsx(n.code,{children:"usePortalHover"}),"."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-tooltip/types.ts",typeName:"TooltipData"}),`
`,e.jsx(n.h3,{id:"tableconfigtooltip",children:"TableConfigTooltip"}),`
`,e.jsxs(n.p,{children:["Глобальные настройки тултипа в ",e.jsx(n.code,{children:"tableConfig.tooltip"}),"."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"TableConfigTooltip"}),`
`,e.jsx(n.h3,{id:"canvasportalhoverdetail",children:"CanvasPortalHoverDetail"}),`
`,e.jsxs(n.p,{children:["Объект события hover по canvas-элементу. Содержит координаты, размеры, ",e.jsx(n.code,{children:"nodeId"}),", ",e.jsx(n.code,{children:"source"})," (",e.jsx(n.code,{children:"'header'"})," | ",e.jsx(n.code,{children:"'cell'"}),"), ",e.jsx(n.code,{children:"tooltipFromNode"})," и ",e.jsx(n.code,{children:"tooltipContext"})," (column, row, ctxs, refTable)."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/lib/canvas/utils/portalHoverEvents.ts",typeName:"CanvasPortalHoverDetail"})]})}function j(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{j as default};
