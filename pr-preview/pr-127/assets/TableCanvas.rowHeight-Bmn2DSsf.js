import{j as e}from"./react-D2T61mpp.js";import{cf as o,cg as s,c9 as c}from"./vendor-D_V-7t_a.js";import{T as l}from"./TableCanvas.rowHeight.stories-DMQBV0I2.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BBdkpFVI.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-DUBBKGII.js";import"./TableCanvas-BW1VG-z-.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BfqV2dCC.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-OO_Vvml6.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CRm1Wy-6.js";import"./IconButton-CDffWwyq.js";import"./Box-CYTaRxTD.js";import"./TextField-CbKvrwjn.js";import"./sharedUtilsInputs-Uj0l5Zgs.js";import"./AiAgentPopup-DmG8MMRd.js";import"./TextArea-DOyuhzuw.js";import"./sharedUtilsResizable-TSzL2ToV.js";import"./Table-CY6CbUhw.js";import"./Collapse-CKPR3wDw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-8pV9igwr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Ctb8y2gn.js";import"./@glideappsfinal/glide-data-grid-C-fLDB5h.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DJzl3tlu.js";import"./ListOfFilters-CjDA7W98.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B31fjlrr.js";import"./EmptyState-DNA3EhLg.js";import"./MassActions-kX4VSd67.js";import"./Autocomplete-Dlta2FLD.js";import"./ErrorPage-CbyR0p9a.js";function r(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,name:"Docs"}),`
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
`,e.jsxs(n.p,{children:["ui-kit измеряет дерево Canvas каждой ячейки при ширине колонки (",e.jsx(n.code,{children:"Canvas.Text wordWrap"})," переносит слова и растит строку). Вертикальные отступы ячейки (",e.jsx(n.code,{children:"cellVerticalPadding"})," темы) ui-kit добавляет к высоте строки, в дереве ячейки их задавать не нужно. Содержимое центрируйте по вертикали (",e.jsx(n.code,{children:'alignItems="center"'}),"): у выровненного по верху весь запас окажется снизу. Подсветку фрагментов текста с переносом по строкам делает ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark--docs",children:e.jsx(n.code,{children:"Canvas.Mark"})})," внутри ",e.jsx(n.code,{children:"Canvas.Text"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Высота не ниже высоты по ",e.jsx(n.code,{children:"rowSize"})," и не выше ",e.jsx(n.strong,{children:"480px"}),": более длинный текст обрезается"]}),`
`,e.jsxs(n.li,{children:["Точно измеряются видимые строки с запасом; остальные до прокрутки имеют высоту по ",e.jsx(n.code,{children:"rowSize"}),". При прокрутке вверх строки над видимой областью могут вырасти и сдвинуть контент"]}),`
`,e.jsx(n.li,{children:"Измерение кешируется по объекту строки и сбрасывается при смене ширин колонок или размера строк и после загрузки шрифтов. Чтобы перемерить строку после изменения содержимого, передайте новый объект строки"}),`
`,e.jsxs(n.li,{children:["Ячейка, объединённая на несколько строк (",e.jsx(n.code,{children:"mergeCells"}),"), строку не растит; объединённая на несколько колонок меряется по ширине блока"]}),`
`,e.jsxs(n.li,{children:["С панелью детализации строки не растут: ",e.jsx(n.code,{children:"'auto'"})," там равен высоте по ",e.jsx(n.code,{children:"rowSize"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"tableconfigrowheightsref",children:"tableConfig.rowHeightsRef"}),`
`,e.jsxs(n.p,{children:["Если поверх таблицы рисуется что-то, привязанное к строкам (например, метки на скроллбаре), высоты строк можно читать из ",e.jsx(n.code,{children:"rowHeightsRef"}),": таблица кладёт туда функцию «индекс строки → текущая высота»."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { RowHeightsRef } from '@daisforge/ui/components/TableCanvas';

const rowHeightsRef: RowHeightsRef = useRef(null);
const heightOf = (rowIndex: number) => rowHeightsRef.current?.(rowIndex) ?? 40;

<TableCanvas tableConfig={{ rowHeight: 'auto', rowHeightsRef }} /* ... */ />;
`})}),`
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
`,e.jsx(c,{})]})}function Y(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{Y as default};
