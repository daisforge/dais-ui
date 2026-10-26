import{j as r}from"./react-D2T61mpp.js";import{cf as i,cg as s,c9 as d}from"./vendor-DmlXfB6n.js";import{B as c}from"./TableCanvas.borders.stories-D-z1kLRE.js";import"./react-is-Clcustum.js";import"./styled-components-D3BTJ4t7.js";import"./@tanstack/react-virtual-DB5Ptt1B.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Da-hjSuj.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CBEOD9lf.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DhqjlIh0.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DZvjLWsU.js";import"./@salutejs/plasma-icons-DxvG4K4R.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BSKQczkC.js";import"./IconButton-DLyedcFD.js";import"./Box-D80y1dEe.js";import"./TextField-63cBokie.js";import"./sharedUtilsInputs-BVDtnJRn.js";import"./AiAgentPopup-BoxL_VdV.js";import"./TextArea-BXtZqJLt.js";import"./sharedUtilsResizable-xdFtCAfj.js";import"./Table-wo081aF0.js";import"./Collapse-C3r8kOlu.js";import"./react-data-grid-BYgM0Lfk.js";import"./TableTabs-CTFd2v_f.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cbbw3gi7.js";import"./@glideappsfinal/glide-data-grid-CEvIAez4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSU2ns8g.js";import"./ListOfFilters-BnF0fElF.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAqumv_3.js";import"./EmptyState-Bg4DWaYr.js";import"./MassActions-BxR_ht5-.js";import"./Autocomplete-Cx4MSU0r.js";import"./ErrorPage-CMJN5rYk.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
`,r.jsx(e.h1,{id:"borders-tablecanvas",children:"Borders (TableCanvas)"}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"tableConfig.borders"})}),`
`,r.jsx(e.p,{children:"Управление линиями сетки таблицы: их включение и выключение."}),`
`,r.jsx(e.p,{children:`Настраивается на четырёх уровнях, от общего к точечному. Каждый следующий уровень
сильнее предыдущего: настройка ячейки важнее настройки колонки и строки, а те
важнее общих настроек.`}),`
`,r.jsx(e.h2,{id:"уровни",children:"Уровни"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"вся таблица"})," — ",r.jsx(e.code,{children:"borders.vertical"})," и ",r.jsx(e.code,{children:"borders.horizontal"}),`: убрать все
вертикальные или все горизонтальные линии тела (по умолчанию линии есть);`]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"колонка"})," — ",r.jsx(e.code,{children:"borders.getVerticalBorder"}),": вернуть для колонки ",r.jsx(e.code,{children:"true"}),` или
`,r.jsx(e.code,{children:"false"}),", чтобы переопределить общую настройку вертикалей, или ",r.jsx(e.code,{children:"undefined"}),`,
чтобы оставить её (например, убрать разделитель справа от одной колонки);`]}),`
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
`,r.jsx(e.h2,{id:"итоговые-summary-строки",children:"Итоговые (summary) строки"}),`
`,r.jsxs(e.p,{children:[`Настройки вертикали действуют и на итоговую строку: разделители колонок проходят
через неё насквозь, а `,r.jsx(e.code,{children:"getVerticalBorder"}),` убирает разделитель у выбранной колонки
и в теле, и в итоге.`]}),`
`,r.jsxs(e.p,{children:["Точечные горизонтали (",r.jsx(e.code,{children:"getHorizontalBorder"}),`) и рамки отдельных ячеек
(`,r.jsx(e.code,{children:"getCellBorder"}),`) в итоговых строках пока не поддержаны: на их линии влияют только
по-колоночная вертикаль и общие настройки. Полное управление линиями внутри
итоговых строк появится позже.`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Подробнее о типах — ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-borders-api--docs",children:"Borders API"})]}),`
`]}),`
`,r.jsx(d,{})]})}function W(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{W as default};
