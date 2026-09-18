import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as d}from"./vendor-DhWFcJyQ.js";import{B as t}from"./TableCanvas.borders.stories-BkODsnQX.js";import"./react-is-Clcustum.js";import"./styled-components-Cejviklg.js";import"./@tanstack/react-virtual-DeRSQr4k.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C4kDHE18.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BaH1qbW4.js";import"./FiltersActions-C_QvRI45.js";import"./IconButton-JOgk26Qs.js";import"./@salutejs/plasma-icons-DGidcmWm.js";import"./@salutejs/sdds-finai-BFP0AIhT.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-D11d2JWz.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_yvhQXy.js";import"./TextField-CiervUQ8.js";import"./sharedUtilsInputs-D1v8Dqpk.js";import"./AnalyticalWidget-BZ7bMtAN.js";import"./Collapse-e7DqV2AW.js";import"./Table-BnyBWShb.js";import"./react-data-grid-zfC4loiI.js";import"./TableTabs-Citwhcl3.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-BHIVqe8I.js";import"./ListOfFilters-C5uN_pEt.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bdxi744O.js";import"./EmptyState-Ctnnxr7m.js";import"./MassActions-BfnN-Bis.js";import"./Autocomplete-BEWXHPUM.js";import"./TableGlide-B79wl3Ad.js";import"./@glideappsfinal/glide-data-grid-C74ZS3pz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DAKweZI5.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t,name:"Docs"}),`
`,r.jsx(e.h1,{id:"borders-tablecanvas",children:"Borders (TableCanvas)"}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"tableConfig.borders + columnConfig.verticalBorder"})}),`
`,r.jsx(e.p,{children:`Управление линиями сетки таблицы: их включение и выключение. Кастомные цвета
наружу не отдаются, только показать или скрыть линию.`}),`
`,r.jsx(e.p,{children:`Настраивается на четырёх уровнях, от общего к точечному. Каждый следующий уровень
сильнее предыдущего: настройка ячейки важнее настройки колонки и строки, а те
важнее общих настроек.`}),`
`,r.jsx(e.h2,{id:"уровни",children:"Уровни"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"вся таблица"})," — ",r.jsx(e.code,{children:"borders.vertical"})," и ",r.jsx(e.code,{children:"borders.horizontal"}),`: убрать все
вертикальные или все горизонтальные линии тела (по умолчанию линии есть);`]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"колонка"})," — ",r.jsx(e.code,{children:"columnConfig[].verticalBorder"}),`: убрать разделитель справа от
одной колонки;`]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"строка"})," — ",r.jsx(e.code,{children:"borders.getHorizontalBorder"}),": вернуть для строки ",r.jsx(e.code,{children:"true"}),` или
`,r.jsx(e.code,{children:"false"}),", чтобы переопределить общую настройку горизонталей, или ",r.jsx(e.code,{children:"undefined"}),`,
чтобы оставить её;`]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"ячейка"})," — ",r.jsx(e.code,{children:"borders.getCellBorder"}),`: включить или выключить каждую из
четырёх сторон рамки ячейки; для ячеек без переопределений вернуть `,r.jsx(e.code,{children:"undefined"}),"."]}),`
`]}),`
`,r.jsx(e.h2,{id:"точечные-колбэки",children:"Точечные колбэки"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"getHorizontalBorder"})," и ",r.jsx(e.code,{children:"getCellBorder"})," получают саму строку (",r.jsx(e.code,{children:"row"}),`), её индекс
(`,r.jsx(e.code,{children:"rowIndex"}),") и уровень вложенности subRows (",r.jsx(e.code,{children:"treeLvl"}),", где ",r.jsx(e.code,{children:"0"}),` это корень). При
раскрытии дерева индексы строк сдвигаются, поэтому настройку удобно привязывать к
строке или к уровню, а не к номеру. Для summary-строк колбэки не вызываются.`]}),`
`,r.jsx(e.p,{children:"Типичные сценарии:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:`выключить все линии и точечно дорисовать нужные (например, только контур
объединённого блока);`}),`
`,r.jsxs(e.li,{children:[`оставить горизонтали, но не рисовать их внутри раскрытых subRows
(`,r.jsx(e.code,{children:"treeLvl > 0"})," вернуть ",r.jsx(e.code,{children:"false"}),"), чтобы родитель с детьми выглядел цельным."]}),`
`]}),`
`,r.jsx(e.h2,{id:"объединённые-ячейки",children:"Объединённые ячейки"}),`
`,r.jsxs(e.p,{children:[`Внутрь объединённого блока линии не рисуются никогда: остаётся только внешний
контур. Чтобы оформить рамку блока, задавайте стороны у его крайних ячеек через
`,r.jsx(e.code,{children:"getCellBorder"})," — внутренние рамки всё равно отсекаются."]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Подробнее о типах — ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-borders-api--docs",children:"Borders API"})]}),`
`]}),`
`,r.jsx(d,{})]})}function Q(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{Q as default};
