import{j as e}from"./react-DYHuXpTF.js";import{dd as s}from"./vendor-DQaMhftP.js";import{M as i,S as l}from"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import{T as d}from"./TableCanvas.subRows.stories-QbVqszar.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BHnLMKCH.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-0M2beOZW.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BHH5Fs72.js";import"./@salutejs/plasma-icons-DAdkqmmH.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-BJtGJ7E8.js";import"./Box-DwiKSnnX.js";import"./Collapse-mn0OPShb.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C3Xjc3-S.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-xg-axVyL.js";import"./sharedUiSearch-B0aoQ6gP.js";import"./TextField-WPWvh7a6.js";import"./sharedUtilsInputs-DA0RRQ70.js";import"./TypographyWithAutoTooltip-CtrkPLGH.js";import"./Typography-DEItZ0E3.js";import"./ListOfFilters-DEV2tGcA.js";import"./FiltersActions-B5_R_0AW.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-CYbTJlTb.js";import"./EmptyState-DDJZV3Q6.js";import"./unidentified@3x-iHLYaSSf.js";import"./ErrorPage-CquNmxCQ.js";import"./Autocomplete-CuNqi1cT.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d,name:"Docs"}),`
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
`,e.jsx(l,{})]})}function oe(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{oe as default};
