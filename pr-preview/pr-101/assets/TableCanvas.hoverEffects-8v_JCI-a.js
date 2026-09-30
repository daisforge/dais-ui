import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-CJb7Mpln.js";import{H as c}from"./TableCanvas.hoverEffects.stories-CcWVe-1p.js";import"./react-is-Clcustum.js";import"./styled-components--8oS2unT.js";import"./@tanstack/react-virtual-CsbpYxz6.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Cb050bnl.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BhSzmiWJ.js";import"./FiltersActions-DRZ75GlZ.js";import"./IconButton-CpyV3IAz.js";import"./@salutejs/plasma-icons-B4tZp0N9.js";import"./@salutejs/sdds-finai-D1ZNAg7m.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-xN42GFS7.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-fE9xlbOE.js";import"./TextField-DpXllQfN.js";import"./sharedUtilsInputs-Dg1v67qA.js";import"./AnalyticalWidget-DMJtD6A-.js";import"./Collapse-ChBYh0aQ.js";import"./Table-DJtdwAS5.js";import"./react-data-grid-Cu-NDYDv.js";import"./TableTabs-BOyOvevV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DscdYs3I.js";import"./ListOfFilters-DjJSrlcF.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CW3jbEiY.js";import"./EmptyState-Cz0DspwP.js";import"./MassActions-D4q72cu1.js";import"./Autocomplete-DwRmbgRS.js";import"./TableGlide-Bi-16J9a.js";import"./@glideappsfinal/glide-data-grid-C49xTn0k.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-mU4CsTJ8.js";function o(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(r.h1,{id:"hover-effects",children:"Hover Effects"}),`
`,e.jsxs(r.p,{children:["Эффекты при наведении — единый расширяемый конфиг ",e.jsx(r.code,{children:"tableConfig.hoverEffects"}),`.
Сейчас поддерживается `,e.jsx(r.strong,{children:"подсветка строки под курсором"})," (",e.jsx(r.code,{children:"row"}),`). Чисто визуальная фича, по умолчанию
`,e.jsx(r.strong,{children:"выключена"}),". В будущем в этом же объекте появятся hover по ячейке и т.д."]}),`
`,e.jsx(r.h2,{id:"как-включить",children:"Как включить"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`tableConfig={{ hoverEffects: { row: true } }} // цвета из темы
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
`,e.jsx(t,{})]})}function U(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{U as default};
