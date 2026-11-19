import{j as r}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-DnY5x8t2.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-Cluo7wsc.js";import{H as c}from"./TableCanvas.hoverEffects.stories-DVRzFsYp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C2sulCCv.js";import"./@tanstack/react-virtual-BA3RmMS7.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-BS0iAW2I.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BT387RgP.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BZjvDSGS.js";import"./@sddsjs/sdds_finai-D-xd8Ig6.js";import"./utils-NDBGknB_.js";import"./constants-DTh3jAtl.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-2QW4XiOx.js";import"./@salutejs/plasma-icons-67FHeKcG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-BX5D65Tl.js";import"./Box-CmkBCCp8.js";import"./Collapse-cxu7l_pA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dc6dleod.js";import"./@glideappsfinal/glide-data-grid-2J2Wx1jC.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-D5RtHXQZ.js";import"./TableTabs-CfJtCWr8.js";import"./sharedUiSearch-CoeTfsOr.js";import"./TextField-DXOe7TwE.js";import"./sharedUtilsInputs-BEEVjYrl.js";import"./TypographyWithAutoTooltip-DyfRXyRD.js";import"./Typography-CTBLgXaA.js";import"./ListOfFilters-CClYEnvR.js";import"./Table-BppiMsXu.js";import"./react-data-grid-gn-LnSw-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DkYs5ioR.js";import"./NumberFormat-KGmYOFb9.js";import"./EmptyState-Clcxu70W.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-BUdib6KL.js";import"./Autocomplete-BHfvRrfM.js";import"./FiltersActions-41lXv-ok.js";import"./IconButton-pD4wRJBG.js";import"./TooltipList-DyLslyRz.js";import"./ErrorPage-D21qdhdu.js";function i(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
`,r.jsx(e.h1,{id:"hover-effects",children:"Hover Effects"}),`
`,r.jsxs(e.p,{children:["Эффекты при наведении — единый расширяемый конфиг ",r.jsx(e.code,{children:"tableConfig.hoverEffects"}),`.
Сейчас поддерживается `,r.jsx(e.strong,{children:"подсветка строки под курсором"})," (",r.jsx(e.code,{children:"row"}),`). Чисто визуальная
фича, по умолчанию `,r.jsx(e.strong,{children:"включена"}),` (цвета из темы). В будущем в этом же объекте
появятся hover по ячейке и т.д.`]}),`
`,r.jsx(e.h2,{id:"как-выключить",children:"Как выключить"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`tableConfig={{ hoverEffects: { row: false } }}
`})}),`
`,r.jsx(e.h2,{id:"цвета-уровень-темы",children:"Цвета (уровень темы)"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"data-ячейки"})," hovered-строки — серый ",r.jsx(e.code,{children:"bgRowHovered"}),";"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"служебные колонки"}),` (нумерация / чекбокс / инструменты строк) hovered-строки
не сереют — темнеют голубым `,r.jsx(e.code,{children:"bgServiceRowHovered"}),`, тем же цветом, что
сервис-зона при селектинге;`]}),`
`,r.jsxs(e.li,{children:["строка, ",r.jsx(e.strong,{children:"отмеченная чекбоксом"})," (",r.jsx(e.code,{children:"selecting"}),`), под курсором темнеет целиком —
`,r.jsx(e.code,{children:"bgSelectedRowHovered"})," (как hover шапки), вместо серого."]}),`
`]}),`
`,r.jsx(e.h2,{id:"приоритеты-слоёв-важно",children:"Приоритеты слоёв (важно)"}),`
`,r.jsxs(e.p,{children:["Hover — ",r.jsx(e.strong,{children:"самый нижний визуальный слой"}),", он не конкурирует с выделением:"]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["выделение ячеек/строк/колонок (",r.jsx(e.code,{children:"cellsSelection"}),`) и «залипшая» активная строка
(`,r.jsx(e.code,{children:"highlightActiveType='row'"}),") рисуются ",r.jsx(e.strong,{children:"поверх"})," и перекрывают hover;"]}),`
`,r.jsx(e.li,{children:"после сброса выделения hover под курсором снова виден;"}),`
`,r.jsx(e.li,{children:"summary-строки hover не получают."}),`
`]}),`
`,r.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:`Работает по всей строке: hover срабатывает над любой ячейкой строки,
включая нумерацию и чекбокс.`}),`
`,r.jsx(e.li,{children:"Уход мыши с таблицы (или на шапку/групп-хедер) сбрасывает подсветку."}),`
`,r.jsxs(e.li,{children:["Не требует ",r.jsx(e.code,{children:"themeOverride"}),` и не влияет на copy/paste и прочую логику
выделения — ось полностью независимая. Не путать с `,r.jsx(e.code,{children:"highlightActiveType"}),` —
тот подсвечивает строку по `,r.jsx(e.strong,{children:"клику"})," («залипает»), hover — по наведению."]}),`
`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Подробнее о типах — ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-hovereffects-api--docs",children:"HoverEffects API"})]}),`
`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:[`Внутреннее устройство и почему такие приоритеты — в доке
`,r.jsx(e.code,{children:"packages/ui-kit/src/components/TableCanvas/docs/SelectionAndHighlighting.md"}),`,
раздел 7.`]}),`
`]}),`
`,r.jsx(s,{})]})}function lr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(i,{...o})}):i(o)}export{lr as default};
