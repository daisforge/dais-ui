import{j as i}from"./react-D2T61mpp.js";import{cc as o,cd as r,c6 as c}from"./vendor-CSAr92if.js";import{S as s}from"./TableCanvas.highlightActiveTypeSplitView.stories-DVB204Cm.js";import"./react-is-Clcustum.js";import"./styled-components-ZBTAG_Yl.js";import"./@tanstack/react-virtual-B8iA4ZKy.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-sacDF5O0.js";import"./utils-CYEse6yn.js";import"./constants-DqXCEMDa.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-BBzf3-Ac.js";import"./@salutejs/sdds-finai-DjVIg8A-.js";import"./@salutejs/plasma-icons-okGG1xc8.js";import"./Container-C4pdskrl.js";import"./Box-jB8XDFU9.js";import"./TableCanvas-3emtYoGw.js";import"./FiltersActions-BKFtPxyb.js";import"./IconButton-b3a_3ixI.js";import"./TextField-DBFBb3W8.js";import"./sharedUtilsInputs-B-me6R4C.js";import"./AnalyticalWidget-CLSSgCQw.js";import"./Collapse-H8U_Ale8.js";import"./Table-Di2fEJCk.js";import"./react-data-grid-B6EFrvhw.js";import"./TableTabs-BXVZBURa.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CS_ICbFc.js";import"./ListOfFilters-cpcetn1F.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DoOkwcp3.js";import"./EmptyState-CKBYiGrU.js";import"./MassActions-CFvZieSq.js";import"./Autocomplete-CJ0yZAju.js";import"./TableGlide-hALIsnon.js";import"./@glideappsfinal/glide-data-grid-DXWAK0Fv.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DfYmp1nP.js";import"./Widget-DzClN-rN.js";function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:s,name:"Docs"}),`
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
`,i.jsx(c,{})]})}function W(n={}){const{wrapper:e}={...o(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(t,{...n})}):t(n)}export{W as default};
