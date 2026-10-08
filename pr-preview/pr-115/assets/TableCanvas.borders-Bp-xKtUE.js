import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as d}from"./vendor-DytfkxZa.js";import{B as c}from"./TableCanvas.borders.stories-Br8b3ESR.js";import"./react-is-Clcustum.js";import"./styled-components-DtjY5eIH.js";import"./@tanstack/react-virtual-CMbBvweu.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BhOS6K3e.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cqd_sxAx.js";import"./FiltersActions-BbzbpGzl.js";import"./IconButton-CjBwG6MJ.js";import"./@salutejs/plasma-icons-DjnWHCmH.js";import"./@salutejs/sdds-finai-CUQOpsCT.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./utils-DvMjk4sn.js";import"./constants-DI5pidOH.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BiStHutz.js";import"./TextField-DPQLjTxL.js";import"./sharedUtilsInputs-B0Z3RgiF.js";import"./AnalyticalWidget-8C6KZAoO.js";import"./Collapse-HzfvcQkf.js";import"./Table-DTTgU6fK.js";import"./react-data-grid-DH1VEV1U.js";import"./TableTabs-DzhZa-1k.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DnRbcD6U.js";import"./ListOfFilters-D06BT2Zo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-oYlOiJp2.js";import"./EmptyState-C06GSPsG.js";import"./MassActions-RyqVh5jm.js";import"./Autocomplete-CNHPz3h8.js";import"./TableGlide-DPdzgWdw.js";import"./@glideappsfinal/glide-data-grid-u6Jxz2sP.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-3fS8ikOo.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(d,{})]})}function O(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{O as default};
