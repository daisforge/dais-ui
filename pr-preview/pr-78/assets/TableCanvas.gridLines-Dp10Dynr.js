import{j as n}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as d}from"./vendor-Cn_w75H7.js";import{G as t}from"./TableCanvas.gridLines.stories-Ba2sucHH.js";import"./react-is-Clcustum.js";import"./styled-components-WMyamcfa.js";import"./@tanstack/react-virtual-BQEO76G2.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CI86uvbI.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CznRUkkS.js";import"./FiltersActions-8fPslQ6R.js";import"./IconButton-DtUJUCzT.js";import"./@salutejs/plasma-icons-BtZKC4fq.js";import"./@salutejs/sdds-finai-fsSIzTFQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-WrAxOZfo.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BWZ52CnR.js";import"./TextField-D3rlTnaG.js";import"./sharedUtilsInputs-CneW2Pp3.js";import"./AnalyticalWidget-DTDser7a.js";import"./Collapse-os_VNpzX.js";import"./Table-BmFqbDFe.js";import"./react-data-grid-BrzwM-Bw.js";import"./TableTabs-5M5jD2V-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C_jvyESM.js";import"./ListOfFilters-Bvs_x8Bx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BS3fnBr4.js";import"./EmptyState-CP10X8-N.js";import"./MassActions-DgXhg-c-.js";import"./Autocomplete-CKYux7G7.js";import"./TableGlide-E9n8KRhH.js";import"./@glideappsfinal/glide-data-grid-BJKe61dd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-2EarapYl.js";function i(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
