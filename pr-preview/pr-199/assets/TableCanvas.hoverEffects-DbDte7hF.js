import{j as e}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-DX-rrd2O.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-DCf5a-Ok.js";import{H as c}from"./TableCanvas.hoverEffects.stories-eL9qMT_D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BSCswbR3.js";import"./@tanstack/react-virtual-Z5qLdlzb.js";import"./preload-helper-CZSX44HQ.js";import"./index-Cu4lwwaE.js";import"./index-CTuxd491.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CRc-Bhfp.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DnkhBOnU.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-BfZGf093.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-C9AHDOh5.js";import"./@salutejs/plasma-icons-CGioElEJ.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-OG9YqfkE.js";import"./Box-3Z-m9LhI.js";import"./Collapse-DxXZ8FX5.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CxcQAL4z.js";import"./@daisforge/glide-data-grid-BBUEHCSk.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-DfbZiZGK.js";import"./sharedUiSearch-riXfbLeP.js";import"./TextField-vOaHFbUF.js";import"./sharedUtilsInputs-DVbCzzFV.js";import"./TypographyWithAutoTooltip-Bve8K-AE.js";import"./Typography-CyjBKn0V.js";import"./ListOfFilters-WV3X7fTD.js";import"./FiltersActions-Dlr522w9.js";import"./IconButton-DZJTAkfX.js";import"./TooltipList-WyihhvAI.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BJUVgxKS.js";import"./NumberFormat-Bbv2g6pc.js";import"./EmptyState-keEn8Dcv.js";import"./unidentified@3x-C9E9sVoM.js";import"./ErrorPage-BWgyZ3H3.js";import"./Autocomplete-BAY2rlXz.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function ne(o={}){const{wrapper:r}={...n(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(i,{...o})}):i(o)}export{ne as default};
