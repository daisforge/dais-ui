import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as c,ca as s}from"./vendor-CNADM64k.js";import{T as l}from"./TableCanvas.rowHeight.stories-DIYPP39L.js";import"./react-is-Clcustum.js";import"./styled-components-BgHfMvxH.js";import"./@tanstack/react-virtual-BSHnyjh7.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C8-atugo.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-D2I1WMUJ.js";import"./TableCanvas-DJNdrjqX.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-CKn6Yuqm.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BEm6Z2Pr.js";import"./@salutejs/plasma-icons-CNxBuWJ1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CLV9-MC6.js";import"./IconButton-xwYe75ww.js";import"./Box-CNu36ura.js";import"./TextField-CNX1Y9ET.js";import"./sharedUtilsInputs-CLwxZzjC.js";import"./AiAgentPopup-DCS_Dhhw.js";import"./TextArea-DD7yKN7e.js";import"./sharedUtilsResizable-CT3CPyAy.js";import"./Table-BSbQ_ue5.js";import"./Collapse-BCNOa_3J.js";import"./react-data-grid-Cp9Ct-OV.js";import"./TableTabs-D-SL2hk9.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DDzsgpjj.js";import"./@glideappsfinal/glide-data-grid-D0QSDvg1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BS6HLh8B.js";import"./ListOfFilters-CYH7naC3.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D5q-ZTnA.js";import"./EmptyState-BD6vn9DS.js";import"./MassActions-CFF0ms80.js";import"./Autocomplete-DEtPf1zj.js";import"./ErrorPage-TJVDXSIn.js";function r(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"rowheight-tablecanvas",children:"RowHeight (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.rowHeight + tableConfig.rowSize"})}),`
`,e.jsx(n.p,{children:"Настройка высоты строк таблицы. Поддерживает фиксированную высоту, динамическое вычисление и переключение размера через UI."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Фиксированная высота строки (",e.jsx(n.code,{children:"number"}),")"]}),`
`,e.jsxs(n.li,{children:["Динамическая высота через функцию (",e.jsx(n.code,{children:"RowHeightFunc"}),")"]}),`
`,e.jsxs(n.li,{children:["Высота по содержимому ячеек (",e.jsx(n.code,{children:"'auto'"}),"): перенос текста растит строку"]}),`
`,e.jsxs(n.li,{children:["Доступ к данным строки и текущему размеру (",e.jsx(n.code,{children:"currentRowSize"}),")"]}),`
`,e.jsxs(n.li,{children:["Переключатель размера строк в controlBlock (",e.jsx(n.code,{children:"rowSize"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"tableconfigrowheight",children:"tableConfig.rowHeight"}),`
`,e.jsx(n.p,{children:"Определяет высоту каждой строки:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"number"})})," — фиксированная высота в пикселях для всех строк"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"RowHeightFunc"})})," — функция, вычисляющая высоту на основе ",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"currentRowSize"})," и ",e.jsx(n.code,{children:"rowIndex"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"'auto'"})})," — высота по содержимому (см. ниже)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"rowheight-auto",children:"rowHeight: 'auto'"}),`
`,e.jsxs(n.p,{children:["Ячейка сообщает высоту своего дерева Canvas, когда таблица её рисует (",e.jsx(n.code,{children:"Canvas.Text wordWrap"})," переносит слова и растит строку). Отдельного замера нет: рисуются и меряются только видимые ячейки. Вертикальные отступы ячейки (",e.jsx(n.code,{children:"cellVerticalPadding"})," темы) ui-kit добавляет к высоте строки, в дереве ячейки их задавать не нужно. Содержимое центрируйте по вертикали (",e.jsx(n.code,{children:'alignItems="center"'}),"): у выровненного по верху весь запас окажется снизу. Подсветку фрагментов текста с переносом по строкам делает ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark--docs",children:e.jsx(n.code,{children:"Canvas.Mark"})})," внутри ",e.jsx(n.code,{children:"Canvas.Text"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Высота не ниже высоты по ",e.jsx(n.code,{children:"rowSize"})," и не выше ",e.jsx(n.code,{children:"tableConfig.maxAutoRowHeight"})," (по умолчанию ",e.jsx(n.strong,{children:"480px"}),", не больше 65534): более длинный текст обрезается. Новое значение сразу применяется ко всем измеренным строкам"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCanvas tableConfig={{ rowHeight: 'auto', maxAutoRowHeight: 800 }} columnConfig={columnConfig} rows={rows} />
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Строка, показанная впервые, сразу появляется с высотой по содержимому. Колонка, до которой ещё не прокрутили, высоту строки не меняет — строка дорастёт, когда колонка появится на экране"}),`
`,e.jsxs(n.li,{children:["Высота кешируется по ячейке (объект строки + колонка): ресайз и новый ",e.jsx(n.code,{children:"renderCell"})," перемеряют только ячейки этой колонки, смена ",e.jsx(n.code,{children:"rowSize"})," или темы и загрузка любого шрифта (в том числе заданного у ",e.jsx(n.code,{children:"Canvas.Text"}),") — все. До перемера строка держит прежнюю высоту. Чтобы перемерить строку после изменения содержимого, передайте новый объект строки"]}),`
`,e.jsxs(n.li,{children:["Ячейка, объединённая на несколько строк (",e.jsx(n.code,{children:"mergeCells"}),"), строку не растит; объединённая на несколько колонок меряется по ширине блока"]}),`
`,e.jsxs(n.li,{children:["С панелью детализации строки не растут: ",e.jsx(n.code,{children:"'auto'"})," там равен высоте по ",e.jsx(n.code,{children:"rowSize"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"tableconfigrowsize",children:"tableConfig.rowSize"}),`
`,e.jsx(n.p,{children:"Переключатель размера строк в controlBlock (кнопка с выпадающим списком):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"showInControl"})})," — показывать ли кнопку в controlBlock"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"default"})})," — размер по умолчанию (",e.jsx(n.code,{children:"'s'"}),", ",e.jsx(n.code,{children:"'m'"}),", ",e.jsx(n.code,{children:"'l'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"available"})})," — список доступных размеров"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onRowSizeChange"})})," — callback при смене размера"]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RowHeightFunc"})," получает ",e.jsx(n.code,{children:"currentRowSize"})," — объект с ",e.jsx(n.code,{children:"rowSizeName"})," и ",e.jsx(n.code,{children:"rowSizeValue"}),", что позволяет адаптировать высоту к текущему выбранному размеру"]}),`
`,e.jsxs(n.li,{children:["При использовании ",e.jsx(n.code,{children:"rowHeight"})," как функции, рекомендуется мемоизировать её для производительности"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight-api--docs",children:"RowHeight API"})]}),`
`]}),`
`,e.jsx(s,{})]})}function Y(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{Y as default};
