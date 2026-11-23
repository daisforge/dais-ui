import{j as r}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-BJXHd15o.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-DPY0jro6.js";import{H as c}from"./TableCanvas.hoverEffects.stories-02SPlh-R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BQ6ZyzFq.js";import"./@tanstack/react-virtual-BtAgCELQ.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-CztTgQbP.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CVr_HXfF.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DUqtHKc3.js";import"./@sddsjs/sdds_finai-DqiyF2lT.js";import"./utils-1evaXQ7G.js";import"./constants-D9pWgtfS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CCc2M82T.js";import"./@salutejs/plasma-icons-D87bzLqR.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-CMCAxAlJ.js";import"./Box-yVZ__wCm.js";import"./Collapse-BpJhvNyY.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dyw7_8zY.js";import"./@daisforge/glide-data-grid-Ddyz9bvl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-Dl3ybQ3A.js";import"./sharedUiSearch-ttz439TP.js";import"./TextField-Bq_jSxbf.js";import"./sharedUtilsInputs-Z9Z1qut3.js";import"./TypographyWithAutoTooltip-BJOp4WMr.js";import"./Typography-wwPE7Tkw.js";import"./ListOfFilters-CVo-52s9.js";import"./Table-C71uzYkk.js";import"./react-data-grid-CTo1laTQ.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BNkFaJsn.js";import"./NumberFormat-CCkEtS_t.js";import"./EmptyState-BVPgIYqR.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-3P44Uq7b.js";import"./Autocomplete-BfJ_x4IL.js";import"./FiltersActions-Cas8V8u-.js";import"./IconButton-BhVPULzs.js";import"./TooltipList-C3e9_bOk.js";import"./ErrorPage-DR90XNEr.js";function i(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function cr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(i,{...o})}):i(o)}export{cr as default};
