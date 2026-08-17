import{j as e}from"./react-D2T61mpp.js";import{c2 as r,c3 as i,bY as s}from"./vendor-DAeWXVFZ.js";import{T as c}from"./TableCanvasTooltip.stories-CJ8Vu7CJ.js";import"./react-is-Clcustum.js";import"./styled-components-Dv4eU0M2.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./getFuncAsString-C1kndaLg.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DTTC4f-L.js";import"./FiltersActions-BAO4f8xk.js";import"./IconButton-DwHugSoI.js";import"./@salutejs/plasma-icons-DT_ZNXTc.js";import"./@salutejs/sdds-finai-BgKKvavs.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BKj8eomO.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Cnr41X_W.js";import"./TextField-Cy2yQ6kB.js";import"./sharedUtilsInputs-DwXaRU5M.js";import"./AnalyticalWidget-DSQoVeSt.js";import"./Collapse-Cm7v2G0B.js";import"./Table-1Tfpc0dH.js";import"./react-data-grid-BsdX0Dj6.js";import"./TableTabs-Bhx9_QRR.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-_JgDoTdO.js";import"./ListOfFilters-LYTZ3V_l.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ktP3G9r6.js";import"./EmptyState-9NF6aOUa.js";import"./MassActions-fQFLXngd.js";import"./Autocomplete-DEpORJTX.js";import"./TableGlide-BsbvuxRZ.js";import"./@glideappsfinal/glide-data-grid-Bsd0xK58.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Bs4XOpDv.js";function l(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"tooltip-на-канвасной-таблице",children:"Tooltip на канвасной таблице"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.tooltip + columnConfig.cellTooltip / headerCellTooltip"})}),`
`,e.jsx(n.p,{children:"Один общий тултип для элементов, отрисованных на канвасе (ячейки, заголовки, кнопки и т.д.). Тултип показывается при наведении на те канвас-элементы, которые явно участвуют в механике тултипа."}),`
`,e.jsx(n.h2,{id:"принцип-работы",children:"Принцип работы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["На таблице работает ",e.jsx(n.strong,{children:"один тултип"}),": при наведении на разные элементы отображается один и тот же тултип-оверлей с нужным текстом/пропсами для текущего элемента."]}),`
`,e.jsxs(n.li,{children:["Участие элемента в показе тултипа задаётся через проп ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"portalHoverEnabled"})})," на Canvas-примитиве — без этого пропса наведение на элемент не будет передаваться в подсистему тултипа."]}),`
`]}),`
`,e.jsx(n.h2,{id:"три-источника-конфига-по-приоритету",children:"Три источника конфига (по приоритету)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Проп ",e.jsx(n.code,{children:"tooltip"})," на Canvas-элементе"]})," — задаётся прямо на ",e.jsx(n.code,{children:"Canvas.Container"}),", ",e.jsx(n.code,{children:"Canvas.Button"})," и т.д. Строка или объект с ",e.jsx(n.code,{children:"text"}),". Самый высокий приоритет. ",e.jsx(n.strong,{children:"Работает всегда."})]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Поле ",e.jsx(n.code,{children:"cellTooltip"})," / ",e.jsx(n.code,{children:"headerCellTooltip"})," в ",e.jsx(n.code,{children:"columnConfig"})]})," — конфиг на уровне колонки. Может быть строкой, объектом или функцией ",e.jsx(n.code,{children:"(context) => config | null"}),". Для ячеек используется ",e.jsx(n.code,{children:"cellTooltip"}),", для заголовков — ",e.jsx(n.code,{children:"headerCellTooltip"}),". ",e.jsxs(n.strong,{children:["Требует ",e.jsx(n.code,{children:"tooltip.enabled: true"})," в ",e.jsx(n.code,{children:"tableConfig"}),"."]})]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Встроенный маппинг по ",e.jsx(n.code,{children:"nodeId"})]})," — внутренний словарь (например, иконка drag в заголовке → «Перетащить колонку»). ",e.jsx(n.strong,{children:"Работает всегда."})]}),`
`]}),`
`,e.jsx(n.h2,{id:"как-включить-тултип-на-элементе",children:"Как включить тултип на элементе"}),`
`,e.jsxs(n.h3,{id:"через-tooltip-на-canvas-примитиве",children:["Через ",e.jsx(n.code,{children:"tooltip"})," на Canvas-примитиве"]}),`
`,e.jsxs(n.p,{children:["В ",e.jsx(n.code,{children:"renderCell"})," / ",e.jsx(n.code,{children:"renderHeaderCell"})," задать ",e.jsx(n.code,{children:"portalHoverEnabled"})," и ",e.jsx(n.code,{children:"tooltip"})," на нужном элементе:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`renderCell: () => (
  <Canvas.Button
    portalHoverEnabled
    tooltip="Нажмите для перехода"
    onClick={() => {}}
  >
    Подробнее
  </Canvas.Button>
);
`})}),`
`,e.jsxs(n.h3,{id:"авто-тултип-для-обрезанного-текста-autotooltip-на-canvastext",children:["Авто-тултип для обрезанного текста (",e.jsx(n.code,{children:"autoTooltip"})," на ",e.jsx(n.code,{children:"Canvas.Text"}),")"]}),`
`,e.jsxs(n.p,{children:["Частный случай node-тултипа: ",e.jsx(n.code,{children:"Canvas.Text"})," с пропом ",e.jsx(n.code,{children:"autoTooltip"})," показывает тултип с полным текстом ",e.jsx(n.strong,{children:"только когда текст реально обрезан в многоточие"})," (однострочный ellipsis или многострочный clamp). ",e.jsx(n.code,{children:"portalHoverEnabled"})," включается автоматически, ",e.jsx(n.code,{children:"tooltip.enabled: true"})," в ",e.jsx(n.code,{children:"tableConfig"})," не требуется — работает всегда, как и остальные node-тултипы."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`renderCell: ({ row }) => (
  <Canvas.Text
    overflow="hidden"
    textOverflow="ellipsis"
    autoTooltip
    style={{ flexGrow: 1 }}
  >
    {row.longText}
  </Canvas.Text>
);
`})}),`
`,e.jsxs(n.p,{children:["Поведение настраивается объектом: ",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"view"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"})," / ",e.jsx(n.code,{children:"mouseLeaveDelay"}),", трансформация текста через ",e.jsx(n.code,{children:"text"}),", выключение через ",e.jsx(n.code,{children:"enabled: false"}),". Подробности и правила — в ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvastext--docs",children:"доке Canvas.Text"}),", тип — ",e.jsx(n.code,{children:"CanvasTextAutoTooltip"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Действует только на ",e.jsx(n.code,{children:"Canvas.Text"})," в canvas-разметке (",e.jsx(n.code,{children:"renderCell"})," / ",e.jsx(n.code,{children:"renderHeaderCell"}),"). Обычные текстовые ячейки (примитивные значения без ",e.jsx(n.code,{children:"renderCell"}),") рисуются встроенным text-рендерером glide — авто-тултип на них пока не распространяется."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"через-celltooltip--headercelltooltip-в-columnconfig",children:["Через ",e.jsx(n.code,{children:"cellTooltip"})," / ",e.jsx(n.code,{children:"headerCellTooltip"})," в ",e.jsx(n.code,{children:"columnConfig"})]}),`
`,e.jsxs(n.p,{children:["Задать на уровне колонки — строкой, объектом или функцией. Не забудьте включить ",e.jsx(n.code,{children:"tooltip.enabled: true"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  tooltip: { enabled: true },
}}
columnConfig={[
  {
    key: 'task',
    name: 'Title',
    headerCellTooltip: 'Название задачи',
    cellTooltip: ({ row }) => \`Задача: \${row.task}\`,
  },
]}
`})}),`
`,e.jsx(n.h2,{id:"формат-конфига",children:"Формат конфига"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Строка"})," — используется как текст тултипа с дефолтными пропсами."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Объект"})," ",e.jsx(n.code,{children:"{ text: string, placement?, view?, mouseEnterDelay?, ... }"})," — текст и кастомные пропсы для ",e.jsx(n.code,{children:"Tooltip"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"null"})})," — тултип для этого элемента не показывается (переход к следующему приоритету или без тултипа)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Подробное описание типов и контракта — в разделе ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-tooltip-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function z(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{z as default};
