import{j as e}from"./react-D2T61mpp.js";import{cf as i,cg as s,c9 as t}from"./vendor-Cy6vaFvA.js";import{H as c}from"./TableCanvas.hoverEffects.stories-BmKd-BOG.js";import"./react-is-Clcustum.js";import"./styled-components-BVG9KNaZ.js";import"./@tanstack/react-virtual-DuyFBKnT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CiZBbkqd.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DQFqrGoq.js";import"./FiltersActions-8ZQ_BEqD.js";import"./IconButton-ZSwgo42J.js";import"./@salutejs/plasma-icons-BFHaPNub.js";import"./@salutejs/sdds-finai-DN-VTvmQ.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-Co1HaYhE.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BUf1dJQw.js";import"./TextField-C9UC2XGi.js";import"./sharedUtilsInputs-BZCri4JS.js";import"./AiAgentPopup-DtLqyKJL.js";import"./TextArea-DD_TwqAi.js";import"./sharedUtilsResizable-lVhK15hL.js";import"./Table-EdUnEbuo.js";import"./Collapse-BBGjGWKA.js";import"./react-data-grid-OJf6xqML.js";import"./TableTabs-SFgUtVKW.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DAWWoA3m.js";import"./@glideappsfinal/glide-data-grid-B-yCBOjO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-ufnWwbWE.js";import"./ListOfFilters-BmOCPIQ_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BzlsbOV1.js";import"./EmptyState-VCDNBSXT.js";import"./MassActions-BIOpEEpz.js";import"./Autocomplete-Cp5nPxpb.js";import"./ErrorPage-Cr0gR84_.js";function o(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(r.h1,{id:"hover-effects",children:"Hover Effects"}),`
`,e.jsxs(r.p,{children:["Эффекты при наведении — единый расширяемый конфиг ",e.jsx(r.code,{children:"tableConfig.hoverEffects"}),`.
Сейчас поддерживается `,e.jsx(r.strong,{children:"подсветка строки под курсором"})," (",e.jsx(r.code,{children:"row"}),`). Чисто визуальная
фича, по умолчанию `,e.jsx(r.strong,{children:"включена"}),` (цвета из темы). В будущем в этом же объекте
появятся hover по ячейке и т.д.`]}),`
`,e.jsx(r.h2,{id:"как-выключить",children:"Как выключить"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`tableConfig={{ hoverEffects: { row: false } }}
`})}),`
`,e.jsx(r.h2,{id:"цвета-уровень-темы",children:"Цвета (уровень темы)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"data-ячейки"})," hovered-строки — серый ",e.jsx(r.code,{children:"bgRowHovered"}),";"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"служебные колонки"}),` (нумерация / чекбокс / инструменты строк) hovered-строки
не сереют — темнеют голубым `,e.jsx(r.code,{children:"bgServiceRowHovered"}),`, тем же цветом, что
сервис-зона при селектинге;`]}),`
`,e.jsxs(r.li,{children:["строка, ",e.jsx(r.strong,{children:"отмеченная чекбоксом"})," (",e.jsx(r.code,{children:"selecting"}),`), под курсором темнеет целиком —
`,e.jsx(r.code,{children:"bgSelectedRowHovered"})," (как hover шапки), вместо серого."]}),`
`]}),`
`,e.jsx(r.h2,{id:"приоритеты-слоёв-важно",children:"Приоритеты слоёв (важно)"}),`
`,e.jsxs(r.p,{children:["Hover — ",e.jsx(r.strong,{children:"самый нижний визуальный слой"}),", он не конкурирует с выделением:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["выделение ячеек/строк/колонок (",e.jsx(r.code,{children:"cellsSelection"}),`) и «залипшая» активная строка
(`,e.jsx(r.code,{children:"highlightActiveType='row'"}),") рисуются ",e.jsx(r.strong,{children:"поверх"})," и перекрывают hover;"]}),`
`,e.jsx(r.li,{children:"после сброса выделения hover под курсором снова виден;"}),`
`,e.jsx(r.li,{children:"summary-строки hover не получают."}),`
`]}),`
`,e.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:`Работает по всей строке: hover срабатывает над любой ячейкой строки,
включая нумерацию и чекбокс.`}),`
`,e.jsx(r.li,{children:"Уход мыши с таблицы (или на шапку/групп-хедер) сбрасывает подсветку."}),`
`,e.jsxs(r.li,{children:["Не требует ",e.jsx(r.code,{children:"themeOverride"}),` и не влияет на copy/paste и прочую логику
выделения — ось полностью независимая. Не путать с `,e.jsx(r.code,{children:"highlightActiveType"}),` —
тот подсвечивает строку по `,e.jsx(r.strong,{children:"клику"})," («залипает»), hover — по наведению."]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Подробнее о типах — ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-hovereffects-api--docs",children:"HoverEffects API"})]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[`Внутреннее устройство и почему такие приоритеты — в доке
`,e.jsx(r.code,{children:"packages/ui-kit/src/components/TableCanvas/docs/SelectionAndHighlighting.md"}),`,
раздел 7.`]}),`
`]}),`
`,e.jsx(t,{})]})}function W(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{W as default};
