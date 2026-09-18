import{j as n}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as d}from"./vendor-DwzXrIa_.js";import{G as t}from"./TableCanvas.gridLines.stories-n4_w2afx.js";import"./react-is-Clcustum.js";import"./styled-components-C4HVP9Bu.js";import"./@tanstack/react-virtual-B5rjj9YJ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D1KCoccP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D17FoXkG.js";import"./FiltersActions-8i4OR0vz.js";import"./IconButton-BdMspFUd.js";import"./@salutejs/plasma-icons-ByXz74TC.js";import"./@salutejs/sdds-finai-CLAU31SQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-Cam_MtZy.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C2zw6gNX.js";import"./TextField-BKiYQwUB.js";import"./sharedUtilsInputs-Bi3qGV92.js";import"./AnalyticalWidget-pSEUAb11.js";import"./Collapse-DWYGfMp3.js";import"./Table-CIOD-j4A.js";import"./react-data-grid-BhThHQcM.js";import"./TableTabs-_rcOlpWb.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DQvbKNpP.js";import"./ListOfFilters-BYLKJCes.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cqbr1Qf0.js";import"./EmptyState-xzg7F41C.js";import"./MassActions-C-NecXAT.js";import"./Autocomplete-kr3RqShP.js";import"./TableGlide-Dg_riLu7.js";import"./@glideappsfinal/glide-data-grid-DqglgFH5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-9TnIh-IK.js";function i(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
`,n.jsx(r.h1,{id:"gridlines-tablecanvas",children:"GridLines (TableCanvas)"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"tableConfig.gridLines + columnConfig.verticalBorder"})}),`
`,n.jsx(r.p,{children:`Управление линиями сетки таблицы: их включение и выключение. Кастомные цвета
наружу не отдаются, только показать или скрыть линию.`}),`
`,n.jsx(r.p,{children:`Настраивается на четырёх уровнях, от общего к точечному. Каждый следующий уровень
сильнее предыдущего: настройка ячейки важнее настройки колонки и строки, а те
важнее общих настроек.`}),`
`,n.jsx(r.h2,{id:"уровни",children:"Уровни"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"вся таблица"})," — ",n.jsx(r.code,{children:"gridLines.vertical"})," и ",n.jsx(r.code,{children:"gridLines.horizontal"}),`: убрать все
вертикальные или все горизонтальные линии тела (по умолчанию линии есть);`]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"колонка"})," — ",n.jsx(r.code,{children:"columnConfig[].verticalBorder"}),`: убрать разделитель справа от
одной колонки;`]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"строка"})," — ",n.jsx(r.code,{children:"gridLines.getHorizontalBorder"}),": вернуть для строки ",n.jsx(r.code,{children:"true"}),` или
`,n.jsx(r.code,{children:"false"}),", чтобы переопределить общую настройку горизонталей, или ",n.jsx(r.code,{children:"undefined"}),`,
чтобы оставить её;`]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"ячейка"})," — ",n.jsx(r.code,{children:"gridLines.getCellBorder"}),`: включить или выключить каждую из
четырёх сторон рамки ячейки; для ячеек без переопределений вернуть `,n.jsx(r.code,{children:"undefined"}),"."]}),`
`]}),`
`,n.jsx(r.h2,{id:"точечные-колбэки",children:"Точечные колбэки"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"getHorizontalBorder"})," и ",n.jsx(r.code,{children:"getCellBorder"})," получают саму строку (",n.jsx(r.code,{children:"row"}),`), её индекс
(`,n.jsx(r.code,{children:"rowIndex"}),") и уровень вложенности subRows (",n.jsx(r.code,{children:"treeLvl"}),", где ",n.jsx(r.code,{children:"0"}),` это корень). При
раскрытии дерева индексы строк сдвигаются, поэтому настройку удобно привязывать к
строке или к уровню, а не к номеру. Для summary-строк колбэки не вызываются.`]}),`
`,n.jsx(r.p,{children:"Типичные сценарии:"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:`выключить все линии и точечно дорисовать нужные (например, только контур
объединённого блока);`}),`
`,n.jsxs(r.li,{children:[`оставить горизонтали, но не рисовать их внутри раскрытых subRows
(`,n.jsx(r.code,{children:"treeLvl > 0"})," вернуть ",n.jsx(r.code,{children:"false"}),"), чтобы родитель с детьми выглядел цельным."]}),`
`]}),`
`,n.jsx(r.h2,{id:"объединённые-ячейки",children:"Объединённые ячейки"}),`
`,n.jsxs(r.p,{children:[`Внутрь объединённого блока линии не рисуются никогда: остаётся только внешний
контур. Чтобы оформить рамку блока, задавайте стороны у его крайних ячеек через
`,n.jsx(r.code,{children:"getCellBorder"})," — внутренние рамки всё равно отсекаются."]}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:["Подробнее о типах — ",n.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-gridlines-api--docs",children:"GridLines API"})]}),`
`]}),`
`,n.jsx(d,{})]})}function Q(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{Q as default};
