import{j as e}from"./react-D2T61mpp.js";import{cf as o,cg as s,c9 as l}from"./vendor-BA2uJqm3.js";import{T as d}from"./TableCanvas.editing.stories-BSuy_lvH.js";import"./react-is-Clcustum.js";import"./styled-components-DI0RiSri.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BZYLyq8m.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-CJ4Jl1AH.js";import"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./constants-DatVHdkd.js";import"./Container-DF1yD7Ue.js";import"./utils-BjrMZFsU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ZOkrcsKi.js";import"./TableCanvas-Cnk4HLGu.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CqtjD7fq.js";import"./IconButton-BybKUD7Y.js";import"./TextField-DZKR2GVq.js";import"./sharedUtilsInputs-CnW24mU9.js";import"./AiAgentPopup-ByfmyI4w.js";import"./TextArea-BI7NPZWg.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Table-C6ylUQN9.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-EpzcYvI8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DKhcFH5P.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DC9JYQJ1.js";import"./ListOfFilters-BaD6Bsow.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gQLxCm.js";import"./EmptyState-BKK3EFcw.js";import"./MassActions-CHP0YYiG.js";import"./Autocomplete-CeKUjrvz.js";import"./ErrorPage-4f41r735.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"editing-tablecanvas",children:"Editing (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.editing + columnConfig.editingCell"})}),`
`,e.jsxs(n.p,{children:["Режим редактирования данных в ячейках таблицы. Условие активации — наличие свойства ",e.jsx(n.code,{children:"editing"})," в ",e.jsx(n.code,{children:"tableConfig"}),". Также необходимо сконфигурировать колонки через ",e.jsx(n.code,{children:"editingCell"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Управление режимом редактирования через ",e.jsx(n.code,{children:"enabled"})," / ",e.jsx(n.code,{children:"defaultEnabled"})]}),`
`,e.jsxs(n.li,{children:["Callback-и при включении, сохранении и отмене (",e.jsx(n.code,{children:"onEnableEditing"}),", ",e.jsx(n.code,{children:"onSave"}),", ",e.jsx(n.code,{children:"onCancel"}),")"]}),`
`,e.jsxs(n.li,{children:["Контроль редактируемости строк через ",e.jsx(n.code,{children:"rowEditable"})]}),`
`,e.jsxs(n.li,{children:["Поддержка дочерних строк через ",e.jsx(n.code,{children:"subRowsKey"})]}),`
`,e.jsxs(n.li,{children:["Кнопки управления в controlBlock (",e.jsx(n.code,{children:"showButtons"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"editingCell.component"})," рендерит React-компонент поверх таблицы; ",e.jsx(n.code,{children:"Canvas.*"})," элементы используйте только в ",e.jsx(n.code,{children:"renderCell"}),", ",e.jsx(n.code,{children:"renderHeaderCell"})," и ",e.jsx(n.code,{children:"renderSummaryCell"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"жизненный-цикл",children:"Жизненный цикл"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Пользователь нажимает кнопку «Редактирование» → вызывается ",e.jsx(n.code,{children:"onEnableEditing"})]}),`
`,e.jsxs(n.li,{children:["При изменении ячейки → вызывается ",e.jsx(n.code,{children:"onRowsChange"})," с данными об изменённых строках"]}),`
`,e.jsxs(n.li,{children:["При нажатии «Сохранить» → вызывается ",e.jsx(n.code,{children:"onSave"})]}),`
`,e.jsxs(n.li,{children:["При нажатии «Отменить» → вызывается ",e.jsx(n.code,{children:"onCancel"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"управление-состоянием",children:"Управление состоянием"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"defaultEnabled"})})," — начальное состояние (внутренний стейт)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"enabled: boolean"})})," — полностью внешнее управление (без переключения в таблице)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"enabled: [boolean, setState]"})})," — внешний стейт с возможностью переключения в таблице"]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onRowsChange"})," — обязательный callback, получает обновлённые строки и метаданные (индексы, колонка, before/after)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subRowsKey"})," — обязателен, если дочерние строки хранятся не под ключом ",e.jsx(n.code,{children:"subRows"}),". Поддерживает вложенность через точку (например, ",e.jsx(n.code,{children:"'data.children'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showButtons"})," — по умолчанию ",e.jsx(n.code,{children:"true"}),", управляет видимостью кнопок в controlBlock"]}),`
`]}),`
`,e.jsx(n.h2,{id:"управление-кнопками-buttons",children:"Управление кнопками (buttons)"}),`
`,e.jsxs(n.p,{children:["Через ",e.jsx(n.code,{children:"editing.buttons"})," можно передать пропсы кнопкам ",e.jsx(n.code,{children:"save"}),", ",e.jsx(n.code,{children:"cancel"})," и ",e.jsx(n.code,{children:"edit"}),". ",e.jsx(n.code,{children:"onClick"})," исключён — обработчики задаются через ",e.jsx(n.code,{children:"onSave"})," / ",e.jsx(n.code,{children:"onCancel"})," / ",e.jsx(n.code,{children:"onEnableEditing"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`editing: {
  buttons: {
    save: { disabled: isSaving, isLoading: isSaving },
    cancel: { disabled: isSaving },
  },
  onSave(disableEditorMode) {
    setIsSaving(true);
    api.save(rows).finally(() => {
      setIsSaving(false);
      disableEditorMode();
    });
  },
}
`})}),`
`,e.jsx(n.h2,{id:"ошибки-ячеек",children:"Ошибки ячеек"}),`
`,e.jsxs(n.p,{children:["Ошибку ячейки задаёт колонка. Если ",e.jsx(n.code,{children:"error.value"})," вернула ",e.jsx(n.code,{children:"true"}),", у ячейки появляется красная рамка. Рамки работают только в режиме редактирования и считаются только для видимой части таблицы, поэтому подходят для больших данных."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  key: 'amount',
  name: 'Сумма',
  editingCell: {
    component: 'inputNumber',
    error: {
      value: (row) => row.amount > row.limit,
    },
  },
}
`})}),`
`,e.jsxs(n.p,{children:["Чтобы при наведении на такую ячейку показывалась подсказка, добавьте ",e.jsx(n.code,{children:"error.tooltip"}),". Можно вернуть строку или объект с настройками (",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"maxWidth"}),", задержки). Функция вызывается только при наведении и только для ячеек с ошибкой."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`error: {
  value: (row) => row.amount > row.limit,
  tooltip: (row) => ({
    text: \`Сумма \${row.amount} больше лимита \${row.limit}\`,
    placement: 'right',
  }),
}
`})}),`
`,e.jsxs(n.p,{children:["Подсказка ошибки показывается вместо ",e.jsx(n.code,{children:"cellTooltip"})," колонки и не требует ",e.jsx(n.code,{children:"tableConfig.tooltip.enabled"}),"."]}),`
`,e.jsx(n.h2,{id:"столбец-с-индикатором-ошибок",children:"Столбец с индикатором ошибок"}),`
`,e.jsxs(n.p,{children:["Чтобы пользователь видел, в каких строках есть ошибки, включите служебный столбец через ",e.jsx(n.code,{children:"editing.rowErrors"}),". Он встаёт правее нумерации и чекбоксов, и у каждой строки, где есть хотя бы одна ячейка с ошибкой, показывает красный треугольник. При наведении на него выводится «Ошибок в строке: N»."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`editing: {
  rowKeyGetter: (row) => row.id,
  onRowsChange: setRows,
  rowErrors: true,
}
`})}),`
`,e.jsx(n.p,{children:"Как ведёт себя столбец:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"появляется при входе в режим редактирования и исчезает при выходе из него;"}),`
`,e.jsxs(n.li,{children:["ширина и размер иконки зависят от ",e.jsx(n.code,{children:"rowSize"}),";"]}),`
`,e.jsx(n.li,{children:"у него пустой заголовок, его нельзя растянуть, выделить, переставить или скрыть через управление столбцами;"}),`
`,e.jsx(n.li,{children:"число ошибок считается по всем колонкам строки, а не только по видимым."}),`
`]}),`
`,e.jsxs(n.p,{children:["Если нужны только рамки без столбца, передайте объект с ",e.jsx(n.code,{children:"indicatorColumn: false"}),". Это удобно, когда столбец включают и выключают по кнопке."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`rowErrors: {
  indicatorColumn: false;
}
`})}),`
`,e.jsx(n.h2,{id:"ошибка-всей-строки",children:"Ошибка всей строки"}),`
`,e.jsxs(n.p,{children:["Иногда ошибка относится не к отдельной ячейке, а к строке целиком, например когда документ отклонён. Для этого передайте ",e.jsx(n.code,{children:"rowErrors.isErrorRow"}),". У таких строк вместо рамок на ячейках рисуется одна рамка по всей ширине данных, а в столбце-индикаторе тоже горит иконка."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`rowErrors: {
  isErrorRow: (row) => row.status === 'rejected',
}
`})}),`
`,e.jsxs(n.p,{children:["Режимы можно смешивать: одни строки помечаются целиком, другие поячеечно через ",e.jsx(n.code,{children:"error.value"}),". Подсказки по умолчанию у строки целиком нет, её задают через ",e.jsx(n.code,{children:"rowErrors.tooltip"}),"."]}),`
`,e.jsx(n.h2,{id:"свой-текст-подсказки-у-индикатора",children:"Свой текст подсказки у индикатора"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rowErrors.tooltip"})," заменяет текст подсказки у иконки. В функцию приходит объект с полями ",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"treeLevel"}),", ",e.jsx(n.code,{children:"errorCellsCount"}),", ",e.jsx(n.code,{children:"errorColumnKeys"})," и ",e.jsx(n.code,{children:"isErrorRow"}),". Вернуть можно строку, объект с настройками или ",e.jsx(n.code,{children:"null"}),", если подсказка не нужна. По умолчанию подсказка стоит над иконкой и уходит вправо от неё (",e.jsx(n.code,{children:"placement: 'top-start'"}),"), другое размещение задаётся в объекте."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`rowErrors: {
  isErrorRow: (row) => row.status === 'rejected',
  tooltip: ({ isErrorRow, errorCellsCount }) =>
    isErrorRow ? 'Документ отклонён' : \`Ошибок в строке: \${errorCellsCount}\`,
}
`})}),`
`,e.jsxs(n.p,{children:["Типы ",e.jsx(n.code,{children:"RowErrorsConfig"})," и ",e.jsx(n.code,{children:"RowErrorsInfo"})," описаны в разделе ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-editing-api--docs",children:"API"}),"."]}),`
`,e.jsx(l,{})]})}function Y(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{Y as default};
