import{j as i}from"./react-DYHuXpTF.js";import{dd as o}from"./vendor-BpmB3NYD.js";import{M as r,S as s}from"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import{S as c}from"./TableCanvas.highlightActiveTypeSplitView.stories-CQPk-r4Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./tableData-DKA5H0bF.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-B2KeE_2J.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-Doj-n6HF.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./Container-5jqajFwx.js";import"./Box-Juih1CKQ.js";import"./TableCanvas-DfFJC-Eb.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-yg_3Nt0z.js";import"./Collapse-Cm4Vf7gU.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CmYboMCL.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./ErrorPage-BL_-6djw.js";import"./Autocomplete-DCmEDwiz.js";import"./Widget-BfqaWHzi.js";function n(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:c,name:"Docs"}),`
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
