import{j as i}from"./react-B60MRyL7.js";import{ck as n}from"./vendor-OPtbd1lp.js";import{M as r,S as s}from"./WithTooltip-KJL26V4Q-D2QxBZA4.js";import{S as c}from"./TableCanvas.highlightActiveTypeSplitView.stories-DVJ7qMma.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BRw6YPBr.js";import"./@tanstack/react-virtual-EFiood7F.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-B1pIjx6t.js";import"./@salutejs/plasma-icons-ByrhRzX2.js";import"./tableData-DKA5H0bF.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-tG_nI3Dc.js";import"./utils-CYK0V5oQ.js";import"./constants-v491TRlQ.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-FrYoex1v.js";import"./@salutejs/sdds-finai-K3Gf3X3y.js";import"./Container-ClKXHTRm.js";import"./Box-CbEpyrne.js";import"./TableCanvas-i_zHUc1M.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-B7Wr7FLp.js";import"./Collapse-B4Pt_8zE.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BCFvwvMl.js";import"./@glideappsfinal/glide-data-grid-CK8QPVqj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-BNIyHIhR.js";import"./sharedUiSearch-B9tld89l.js";import"./TextField-Bp7ffrmf.js";import"./sharedUtilsInputs-wVAiPvsc.js";import"./TypographyWithAutoTooltip-CVRx3Ji6.js";import"./Typography-CkVSDpr_.js";import"./ListOfFilters-PkVmd9qw.js";import"./Table-B87AmCdC.js";import"./react-data-grid-CajG19ED.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cf4MX0VM.js";import"./NumberFormat-BNkvGrJn.js";import"./EmptyState-CFVMNuoE.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-CCL9cJtX.js";import"./Autocomplete-pcaxmLXN.js";import"./FiltersActions-DmLL2joa.js";import"./IconButton-C1QgcvzB.js";import"./TooltipList-C_-CLRgD.js";import"./ErrorPage-BrDBiR7U.js";import"./Widget-Ca_v2P8d.js";function o(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:c,name:"Docs"}),`
`,i.jsx(e.h1,{id:"highlightactivetype--splitview",children:"HighlightActiveType + SplitView"}),`
`,i.jsxs(e.p,{children:["Подсвеченная строка (",i.jsx(e.code,{children:"highlightActiveType='row'"}),`) выступает источником «открытой»
строки: по клику она открывается в боковой панели `,i.jsx(e.code,{children:"SplitView"}),`, при закрытии панели
подсветка гаснет. Пример — на древовидной таблице (блок → трайб → продукт).`]}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Источник — подсветка, а не чекбоксы."}),` Открытую строку определяет
`,i.jsx(e.code,{children:"highlightActiveType"}),", а не ",i.jsx(e.code,{children:"tableConfig.selecting"}),`. Это разные оси: можно
одновременно иметь чекбоксы и открывать в панели именно подсвеченную строку.`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Двусторонняя связь через controlled-стейт."})," ",i.jsx(e.code,{children:"tableConfig.highlightActiveRow.state"}),`
— внешний `,i.jsx(e.code,{children:"useState"}),`. Клик по строке вызывает сеттер (панель открывается),
закрытие панели вызывает `,i.jsx(e.code,{children:"setActiveRow(undefined)"})," (подсветка гаснет)."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Открытость панели = наличие подсветки:"})," ",i.jsx(e.code,{children:"sidebar.isOpened = activeRow !== undefined"}),"."]}),`
`,i.jsxs(e.li,{children:[i.jsxs(e.strong,{children:["Объект строки — из ",i.jsx(e.code,{children:"highlightActiveRow.onChange"}),"."]}),` Колбэк отдаёт и флэт-индекс,
и сам узел дерева (`,i.jsx(e.code,{children:"row"}),`) — таблица резолвит его по индексу сама. Отдельный
`,i.jsx(e.code,{children:"onCellClicked"})," не нужен."]}),`
`]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Навигация стрелками не меняет открытую строку."}),` Подсветка обновляется только
на клик мышью — стрелки двигают выделение ячеек, но открытая в панели строка
«залипает» до следующего клика.`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Дерево."}),` Узел может быть блоком, трайбом или продуктом — карточка в панели
строит заголовок и поля по уровню узла. Уровень в примере выводится из данных
(`,i.jsx(e.code,{children:"id"}),"/",i.jsx(e.code,{children:"subRows"}),"); в реальном приложении он обычно есть в доменной модели."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Что гасит подсветку — то закрывает панель."}),` Клик по шапке колонки, по
нумерации строк или select-all сбрасывают `,i.jsx(e.code,{children:"highlightActiveRow"}),` → панель
закрывается. Если панель должна жить до явного закрытия — заведите отдельный
`,i.jsx(e.code,{children:"panelOpen"}),"-стейт вместо привязки к ",i.jsx(e.code,{children:"activeRow"}),"."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Флэт-индекс резолвит таблица."})," ",i.jsx(e.code,{children:"highlightActiveRow"}),` — индекс во флэт-строках
(с учётом раскрытых subRows). `,i.jsx(e.code,{children:"highlightActiveRow.onChange"}),` отдаёт по этому
индексу готовый объект строки, поэтому маппить индекс→узел вручную не нужно.`]}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Подробнее о подсветке и ",i.jsx(e.code,{children:"highlightActiveRow"})," — ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-highlightactivetype-api--docs",children:"HighlightActiveType API"})]}),`
`]}),`
`,i.jsx(s,{})]})}function hi(t={}){const{wrapper:e}={...n(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(o,{...t})}):o(t)}export{hi as default};
