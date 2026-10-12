import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as d}from"./vendor-m8ptr2NK.js";import{B as c}from"./TableCanvas.borders.stories-CDzToVm-.js";import"./react-is-Clcustum.js";import"./styled-components-B4nx6Z04.js";import"./@tanstack/react-virtual-T6w5YrM7.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-qx-PZ3pk.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DULiTQM_.js";import"./FiltersActions-DAPzLdsq.js";import"./IconButton-CbjzGPcl.js";import"./@salutejs/plasma-icons-B39iMR5e.js";import"./@salutejs/sdds-finai-CKzZmfdH.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-0LQegF5b.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B3n0ev6h.js";import"./TextField-DiJCRAT7.js";import"./sharedUtilsInputs-Bsa0hnp8.js";import"./AiAgentPopup-DJ6b1BI4.js";import"./TextArea-DDJILtRV.js";import"./sharedUtilsResizable-BGoHR4Ou.js";import"./Table-DvMRgACe.js";import"./Collapse-DUmKgMT1.js";import"./react-data-grid-DKzBhZuS.js";import"./TableTabs-D6SEcbTs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DciZ3-22.js";import"./@glideappsfinal/glide-data-grid-DGM0WF9M.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-7qE5IVNC.js";import"./ListOfFilters-Dn5j_mQd.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DJNgv68p.js";import"./EmptyState-C0F7Jmuu.js";import"./MassActions-BOpBgRIh.js";import"./Autocomplete-BmIAFlFk.js";import"./ErrorPage-B7VwmGr8.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(d,{})]})}function U(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{U as default};
