import{j as e}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-2C5_55Sm.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-BF3u1lCM.js";import{T as l}from"./TableCanvas.rowHeight.stories-DZ2M0NOf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./preload-helper-CZSX44HQ.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-C0WUym9P.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-DOSMI5Pc.js";import"./TableCanvas-BsLm5Qna.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./@salutejs/plasma-icons-BrITifw3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-DFPex1Sn.js";import"./Box-BOi9y4XS.js";import"./Collapse-x0oUGUsB.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-49WcSE6j.js";import"./@daisforge/glide-data-grid-BJ4Aa3YT.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-D50d6bjv.js";import"./sharedUiSearch-DVq71_y6.js";import"./TextField-C3soC6iE.js";import"./sharedUtilsInputs-ClkwfHQU.js";import"./TypographyWithAutoTooltip-CjmFlsPI.js";import"./Typography-B9B0TAuB.js";import"./ListOfFilters-BXR-FESh.js";import"./FiltersActions-GRRqYmwA.js";import"./IconButton-DV8DLcRq.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-nc4UMpNq.js";import"./EmptyState-D6V-mWG6.js";import"./unidentified@3x-C9E9sVoM.js";import"./ErrorPage-Cq1_pxML.js";import"./Autocomplete-DWI5pJkD.js";function r(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,name:"Docs"}),`
`,e.jsx(i.h1,{id:"rowheight-tablecanvas",children:"RowHeight (TableCanvas)"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"tableConfig.rowHeight + tableConfig.rowSize"})}),`
`,e.jsx(i.p,{children:"Настройка высоты строк таблицы. Поддерживает фиксированную высоту, динамическое вычисление и переключение размера через UI."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Фиксированная высота строки (",e.jsx(i.code,{children:"number"}),")"]}),`
`,e.jsxs(i.li,{children:["Динамическая высота через функцию (",e.jsx(i.code,{children:"RowHeightFunc"}),")"]}),`
`,e.jsxs(i.li,{children:["Высота по содержимому ячеек (",e.jsx(i.code,{children:"'auto'"}),"): перенос текста растит строку"]}),`
`,e.jsxs(i.li,{children:["Доступ к данным строки и текущему размеру (",e.jsx(i.code,{children:"currentRowSize"}),")"]}),`
`,e.jsxs(i.li,{children:["Переключатель размера строк в controlBlock (",e.jsx(i.code,{children:"rowSize"}),")"]}),`
`]}),`
`,e.jsx(i.h2,{id:"tableconfigrowheight",children:"tableConfig.rowHeight"}),`
`,e.jsx(i.p,{children:"Определяет высоту каждой строки:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"number"})})," — фиксированная высота в пикселях для всех строк"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"RowHeightFunc"})})," — функция, вычисляющая высоту на основе ",e.jsx(i.code,{children:"row"}),", ",e.jsx(i.code,{children:"currentRowSize"})," и ",e.jsx(i.code,{children:"rowIndex"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"'auto'"})})," — высота по содержимому (см. ниже)"]}),`
`]}),`
`,e.jsx(i.h2,{id:"rowheight-auto",children:"rowHeight: 'auto'"}),`
`,e.jsxs(i.p,{children:["Ячейка сообщает высоту своего дерева Canvas, когда таблица её рисует (",e.jsx(i.code,{children:"Canvas.Text wordWrap"})," переносит слова и растит строку). Отдельного замера нет: рисуются и меряются только видимые ячейки. Вертикальные отступы ячейки (",e.jsx(i.code,{children:"cellVerticalPadding"})," темы) ui-kit добавляет к высоте строки, в дереве ячейки их задавать не нужно. Содержимое центрируйте по вертикали (",e.jsx(i.code,{children:'alignItems="center"'}),"): у выровненного по верху весь запас окажется снизу. Подсветку фрагментов текста с переносом по строкам делает ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark--docs",children:e.jsx(i.code,{children:"Canvas.Mark"})})," внутри ",e.jsx(i.code,{children:"Canvas.Text"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Высота не ниже высоты по ",e.jsx(i.code,{children:"rowSize"})," и не выше ",e.jsx(i.code,{children:"tableConfig.maxAutoRowHeight"})," (по умолчанию ",e.jsx(i.strong,{children:"480px"}),", не больше 65534): более длинный текст обрезается. Новое значение сразу применяется ко всем измеренным строкам"]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<TableCanvas tableConfig={{ rowHeight: 'auto', maxAutoRowHeight: 800 }} columnConfig={columnConfig} rows={rows} />
`})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Строка, показанная впервые, сразу появляется с высотой по содержимому. Колонка, до которой ещё не прокрутили, высоту строки не меняет — строка дорастёт, когда колонка появится на экране"}),`
`,e.jsxs(i.li,{children:["Высота кешируется по ячейке (объект строки + колонка): ресайз и новый ",e.jsx(i.code,{children:"renderCell"})," перемеряют только ячейки этой колонки, смена ",e.jsx(i.code,{children:"rowSize"})," или темы и загрузка любого шрифта (в том числе заданного у ",e.jsx(i.code,{children:"Canvas.Text"}),") — все. До перемера строка держит прежнюю высоту. Чтобы перемерить строку после изменения содержимого, передайте новый объект строки"]}),`
`,e.jsxs(i.li,{children:["Ячейка, объединённая на несколько строк (",e.jsx(i.code,{children:"mergeCells"}),"), строку не растит; объединённая на несколько колонок меряется по ширине блока"]}),`
`,e.jsxs(i.li,{children:["С панелью детализации строки не растут: ",e.jsx(i.code,{children:"'auto'"})," там равен высоте по ",e.jsx(i.code,{children:"rowSize"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"tableconfigrowsize",children:"tableConfig.rowSize"}),`
`,e.jsx(i.p,{children:"Переключатель размера строк в controlBlock (кнопка с выпадающим списком):"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"showInControl"})})," — показывать ли кнопку в controlBlock"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"default"})})," — размер по умолчанию (",e.jsx(i.code,{children:"'s'"}),", ",e.jsx(i.code,{children:"'m'"}),", ",e.jsx(i.code,{children:"'l'"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"available"})})," — список доступных размеров"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"onRowSizeChange"})})," — callback при смене размера"]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"RowHeightFunc"})," получает ",e.jsx(i.code,{children:"currentRowSize"})," — объект с ",e.jsx(i.code,{children:"rowSizeName"})," и ",e.jsx(i.code,{children:"rowSizeValue"}),", что позволяет адаптировать высоту к текущему выбранному размеру"]}),`
`,e.jsxs(i.li,{children:["При использовании ",e.jsx(i.code,{children:"rowHeight"})," как функции, рекомендуется мемоизировать её для производительности"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight-api--docs",children:"RowHeight API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function oe(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{oe as default};
