import{j as e}from"./react-DNGZQ4GM.js";import{ck as s}from"./vendor-Dp5lOscd.js";import{M as i,S as l}from"./WithTooltip-KJL26V4Q-D6M4H-sn.js";import{T as c}from"./TableCanvas.subRows.stories-D-qJ0wg1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BVeFqQYb.js";import"./@tanstack/react-virtual-YDfxzYL3.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-hXr06AUZ.js";import"./@salutejs/plasma-icons-Cqq3zXio.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CIjOxglH.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-B6H-AKo1.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-D8WPHrZl.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Cnm6FkwI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-0WdmXQbr.js";import"./Box-BKkW6WAc.js";import"./Collapse-C5wWRaBU.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DtQPfSll.js";import"./@glideappsfinal/glide-data-grid-S2MyQhYl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-B4-ktLDB.js";import"./sharedUiSearch-B7rBkxde.js";import"./TextField-6naKsMBN.js";import"./sharedUtilsInputs-C0_NRSp2.js";import"./TypographyWithAutoTooltip-Cju-Nu1y.js";import"./Typography-BjVh6YV9.js";import"./ListOfFilters-B1s2HaSi.js";import"./Table-DkS74_Ap.js";import"./react-data-grid-CdTfwxrA.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CgEbMqyz.js";import"./NumberFormat-BljT1DEp.js";import"./EmptyState-BmKRlSr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3GAnQXt.js";import"./Autocomplete-jc_g5b5e.js";import"./FiltersActions-U8FmEHl2.js";import"./IconButton-DkyAo8ue.js";import"./TooltipList-BVqkwDIx.js";import"./ErrorPage-DiAMiMpK.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"subrows-tablecanvas",children:"SubRows (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.subRows + columnConfig.subRow"})}),`
`,e.jsx(n.p,{children:"Иерархичное отображение данных с вложенными строками. Поддерживает произвольную глубину вложенности."}),`
`,e.jsx(n.p,{children:"Конфигурация состоит из двух частей:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tableConfig.subRows"})})," — дерево данных: функция получения дочерних строк, ключ строки, состояние раскрытия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"columnConfig[].subRow"})})," — отображение на уровне колонки: маппинг ключей, рендер ячеек, стрелка раскрытия"]}),`
`]}),`
`,e.jsx(n.h2,{id:"tableconfigsubrows",children:"tableConfig.subRows"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"getSubRows"})})," ",e.jsx(n.code,{children:"(row) => RowType[] | undefined"})," — функция получения дочерних строк"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"rowKeyGetter"})})," ",e.jsx(n.code,{children:"(row) => RowIdType"})," — уникальный ключ строки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"expandedIdsState"})})," ",e.jsx(n.code,{children:"[Set, setter]"})," — внешний стейт развёрнутых строк (опционально, иначе внутренний useState)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"columnconfigsubrow",children:"columnConfig.subRow"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isColumnWithArrow"})})," ",e.jsx(n.code,{children:"boolean | ((props) => boolean)"})," — стрелка раскрытия в этой колонке (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"hideHeaderExpandAllArrow"})})," ",e.jsx(n.code,{children:"boolean"})," — скрыть кнопку «развернуть все» в header (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"parentKeyAsDefault"})})," ",e.jsx(n.code,{children:"boolean"})," — использовать ключ родителя как fallback (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"keyOfColumnInSubRow"})})," ",e.jsx(n.code,{children:"string | number | ((lvl) => string | number)"})," — маппинг ключей колонок для каждого уровня"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"contentFormat"})})," ",e.jsx(n.code,{children:"ContentFormat"})," — формат содержимого подстрок"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"renderSubRowCell"})})," ",e.jsx(n.code,{children:"RenderSubRowCell"})," — кастомный рендер ячеек подстрок"]}),`
`]}),`
`,e.jsx(n.h2,{id:"ленивая-подгрузка-детей-показать-ещё",children:"Ленивая подгрузка детей («Показать ещё»)"}),`
`,e.jsx(n.p,{children:"Когда детей у группы много и грузить их все сразу нельзя, подгрузка собирается из штатных возможностей без доработок ядра:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSubRows"})," возвращает загруженных детей плюс одну служебную строку ",e.jsx(n.code,{children:"loadMore"})," в конце"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mergeCells.mergedCellsRegions"})," объединяет служебную строку на все колонки (регион задан ключом строки, у свёрнутой группы он не рисуется)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"renderSubRowCell"})," для служебной строки возвращает ",e.jsx(n.code,{children:"Canvas.Container"})," со ссылкой «Показать ещё N» (кликабельный контейнер с ",e.jsx(n.code,{children:"Canvas.Text"}),") и счётчиком «Показано X из Y»; по клику потребитель догружает порцию и пересобирает ",e.jsx(n.code,{children:"subRows"})]}),`
`,e.jsxs(n.li,{children:["фон строки задаётся через ",e.jsx(n.code,{children:"themeOverride"})]}),`
`,e.jsxs(n.li,{children:["в стори включён чистый вид (",e.jsx(n.code,{children:"appearance: { variant: 'clean' }"}),"), колонки растягиваются на всю ширину"]}),`
`]}),`
`,e.jsx(n.p,{children:"Пример — стори «Ленивая подгрузка детей группы»."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-subrows-api--docs",children:"SubRows API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function le(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{le as default};
