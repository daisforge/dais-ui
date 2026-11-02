import{j as i}from"./react-D2T61mpp.js";import{cf as o,cg as r,c9 as c}from"./vendor-CKkZ-t_g.js";import{S as s}from"./TableCanvas.highlightActiveTypeSplitView.stories-CDv99aV1.js";import"./react-is-Clcustum.js";import"./styled-components-CrBN_RvZ.js";import"./@tanstack/react-virtual-BloiM2g3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-BdsrhsQu.js";import"./utils-CU-JHpYX.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-Dz-7t6Cb.js";import"./@salutejs/sdds-finai-DQw3oYuX.js";import"./@salutejs/plasma-icons-DjKwx_w6.js";import"./Container-CKuN8xZJ.js";import"./Box-Cwvb02Al.js";import"./TableCanvas-INhtuV9E.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-VHGDZv6G.js";import"./IconButton-B8QlM1qp.js";import"./TextField-B6gJbNNO.js";import"./sharedUtilsInputs-CWJ6Gepf.js";import"./AiAgentPopup-CE4Wcyt9.js";import"./TextArea-DYBF1Att.js";import"./sharedUtilsResizable-CrssgjcX.js";import"./Table-DsbRZAdH.js";import"./Collapse-C8_k6HmE.js";import"./react-data-grid-D4lRd-q3.js";import"./TableTabs-gSV4vu5u.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-mR3wY0N9.js";import"./@glideappsfinal/glide-data-grid-DL53d1uD.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B7ho-1kI.js";import"./ListOfFilters-MGzF1gX5.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CrrIJDKM.js";import"./EmptyState-BYnQ-Vwo.js";import"./MassActions-BvMvKPpX.js";import"./Autocomplete-D8RxP6EW.js";import"./ErrorPage-egSgBjIO.js";import"./Widget-BY6hfb_P.js";function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:s,name:"Docs"}),`
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
`,i.jsx(c,{})]})}function $(n={}){const{wrapper:e}={...o(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(t,{...n})}):t(n)}export{$ as default};
