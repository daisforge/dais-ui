import{j as i}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BjJ6Dniq.js";import{M as r,S as s}from"./WithTooltip-KJL26V4Q-8sW6qWBN.js";import{S as c}from"./TableCanvas.highlightActiveTypeSplitView.stories-oXGs9-it.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-DihHaBn_.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./tableData-DKA5H0bF.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-BSk-jsAw.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-DPh5a9G-.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@salutejs/plasma-icons-DO9zHrCT.js";import"./Container-CcSXm98R.js";import"./Box-CnSr-EOZ.js";import"./TableCanvas-za5dS4Cx.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-D9ZKcnee.js";import"./@daisforge/glide-data-grid-CA67jk5O.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-JT5O_jSL.js";import"./sharedUiSearch-wESeMURt.js";import"./TextField-CdmN3rBr.js";import"./sharedUtilsInputs-CC6DzjXV.js";import"./Typography-KGvcb-tR.js";import"./ListOfFilters-CiQi80_Y.js";import"./FiltersActions-C5ReeHxe.js";import"./IconButton-Bi2q2X3M.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BBffWV7O.js";import"./EmptyState-PRAp0Uli.js";import"./unidentified@3x-p-1UhR3r.js";import"./ErrorPage-K5smkMSZ.js";import"./Autocomplete-Bypm81CP.js";import"./Widget-QXCpcVr0.js";function n(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:c,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function si(t={}){const{wrapper:e}={...o(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(n,{...t})}):n(t)}export{si as default};
