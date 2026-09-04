import{j as e}from"./react-D2T61mpp.js";import{c6 as i,c7 as s,c0 as c}from"./vendor-Ca3Rcr5K.js";import{H as t}from"./TableCanvas.hoverEffects.stories-CGnFQ6fe.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Dt6KH5ne.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DGNToxcW.js";import"./FiltersActions-BcPC5tlA.js";import"./IconButton-CYx5m0ft.js";import"./@salutejs/plasma-icons-DH_et0Tb.js";import"./@salutejs/sdds-finai-BaaqQyG7.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-BOxIorbb.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CsOzBWtM.js";import"./TextField-Cv5gnzPi.js";import"./sharedUtilsInputs-CmFty-7o.js";import"./AnalyticalWidget-D8Q0DXRg.js";import"./Collapse-bo3y3zGA.js";import"./Table-CVM1c2rG.js";import"./react-data-grid-Db8xSdWG.js";import"./TableTabs-3d7-vUiX.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-10XYhfcZ.js";import"./ListOfFilters-HU-n75dk.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cr0Censf.js";import"./EmptyState-ClfJf7Jw.js";import"./MassActions-C8FUeNyw.js";import"./Autocomplete-CEyrEhAi.js";import"./TableGlide-DGoQglmW.js";import"./@glideappsfinal/glide-data-grid-n9e9_XCI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-B5MF8Emi.js";function o(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(r.h1,{id:"hover-effects",children:"Hover Effects"}),`
`,e.jsxs(r.p,{children:["Эффекты при наведении — единый расширяемый конфиг ",e.jsx(r.code,{children:"tableConfig.hoverEffects"}),`.
Сейчас поддерживается `,e.jsx(r.strong,{children:"подсветка строки под курсором"})," (",e.jsx(r.code,{children:"row"}),`). Чисто визуальная фича, по умолчанию
`,e.jsx(r.strong,{children:"выключена"}),`. В будущем в этом же объекте появятся hover по ячейке, кастомные
мапки цветов и т.д.`]}),`
`,e.jsx(r.h2,{id:"как-включить",children:"Как включить"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`tableConfig={{ hoverEffects: { row: true } }}                   // цвета из темы
tableConfig={{ hoverEffects: { row: { color: '#FFF6E5' } } }}   // свой цвет
`})}),`
`,e.jsx(r.h2,{id:"цвета-уровень-темы",children:"Цвета (уровень темы)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"data-ячейки"})," hovered-строки — серый ",e.jsx(r.code,{children:"bgRowHovered"})," (или свой ",e.jsx(r.code,{children:"color"}),` из
конфига);`]}),`
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
`,e.jsx(c,{})]})}function Q(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{Q as default};
