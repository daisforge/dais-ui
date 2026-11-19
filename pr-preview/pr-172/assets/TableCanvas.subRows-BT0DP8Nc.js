import{j as e}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-DnY5x8t2.js";import{M as s,S as l}from"./WithTooltip-KJL26V4Q-Cluo7wsc.js";import{T as d}from"./TableCanvas.subRows.stories-DxL1PgTA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C2sulCCv.js";import"./@tanstack/react-virtual-BA3RmMS7.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-BS0iAW2I.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BT387RgP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BZjvDSGS.js";import"./@sddsjs/sdds_finai-D-xd8Ig6.js";import"./utils-NDBGknB_.js";import"./constants-DTh3jAtl.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-2QW4XiOx.js";import"./@salutejs/plasma-icons-67FHeKcG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-BX5D65Tl.js";import"./Box-CmkBCCp8.js";import"./Collapse-cxu7l_pA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dc6dleod.js";import"./@glideappsfinal/glide-data-grid-2J2Wx1jC.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-D5RtHXQZ.js";import"./TableTabs-CfJtCWr8.js";import"./sharedUiSearch-CoeTfsOr.js";import"./TextField-DXOe7TwE.js";import"./sharedUtilsInputs-BEEVjYrl.js";import"./TypographyWithAutoTooltip-DyfRXyRD.js";import"./Typography-CTBLgXaA.js";import"./ListOfFilters-CClYEnvR.js";import"./Table-BppiMsXu.js";import"./react-data-grid-gn-LnSw-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DkYs5ioR.js";import"./NumberFormat-KGmYOFb9.js";import"./EmptyState-Clcxu70W.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-BUdib6KL.js";import"./Autocomplete-BHfvRrfM.js";import"./FiltersActions-41lXv-ok.js";import"./IconButton-pD4wRJBG.js";import"./TooltipList-DyLslyRz.js";import"./ErrorPage-D21qdhdu.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
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
`,e.jsx(l,{})]})}function de(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{de as default};
