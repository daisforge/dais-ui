import{j as e}from"./react-CAOzMBF_.js";import{cg as o,ch as s,ca as l}from"./vendor-Dh4d6dCz.js";import{T as d}from"./TableCanvas.editing.stories-DYuy9bm-.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B68YIrJ_.js";import"./getFuncAsString-SqWQ2qo2.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-DhjAK-_b.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./constants-ChwOYBdp.js";import"./IconButton-BY5jSHYi.js";import"./utils-I85SwEfQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-V-E_7_e1.js";import"./Container-D-HnHQA2.js";import"./TableCanvas-Cp0bp_v3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CRTH0PZ-.js";import"./TextField-DU1R_gtM.js";import"./sharedUtilsInputs-C3919g4u.js";import"./AiAgentPopup-JQocNqtc.js";import"./TextArea-CeV4EuOw.js";import"./sharedUtilsResizable-CBJT9eg4.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-D060miWS.js";import"./Collapse-CcEN_5QW.js";import"./react-data-grid-BG41yzHd.js";import"./TableTabs-BC4rHx7P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DTUuFrcP.js";import"./@glideappsfinal/glide-data-grid-gV_BbKzF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BDOhBaAU.js";import"./ListOfFilters-PPh84lG1.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-C_muNst-.js";import"./EmptyState-P7S2U46o.js";import"./MassActions-WHkWqihO.js";import"./Autocomplete-Ce-yJoLc.js";import"./ErrorPage-DQdCJbuO.js";import"./swr-CpZ8JkVd.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
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
`,e.jsx(n.h2,{id:"select-с-подгрузкой-по-скроллу",children:"Select с подгрузкой по скроллу"}),`
`,e.jsxs(n.p,{children:["Когда вариантов много (сотни и тысячи) и они приходят с бэкенда страницами, используйте кастомный редактор на ",e.jsx(n.code,{children:"CellEditorCombobox"}),". Он принимает все пропсы ",e.jsx(n.code,{children:"Combobox"}),", поэтому подгрузку собирают из них:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"virtual"})," — виртуализация списка;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onScroll"})," — подгрузка следующей страницы у конца списка;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"afterList"})," — лоадер под списком;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChangeValue"})," и ",e.jsx(n.code,{children:"filter={() => true}"})," — поиск на бэкенде вместо локального фильтра."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Выбранное значение строки добавляйте в ",e.jsx(n.code,{children:"items"})," сами, иначе редактор откроется пустым, если оно не попало в загруженную страницу. Чтобы в ячейке был шеврон, как у ",e.jsx(n.code,{children:"component: 'select'"}),", передайте ",e.jsx(n.code,{children:"showSelectIcon: true"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  key: 'counterpartyName',
  name: 'Контрагент',
  editingCell: {
    component: (info, _lvl, disableLeftOffset) => (
      <CounterpartyCellEditor info={info} disableLeftOffset={disableLeftOffset} />
    ),
    showSelectIcon: true,
  },
}
`})}),`
`,e.jsxs(n.p,{children:["У кастомного редактора опции не известны таблице, поэтому вставка и протягивание значения не проверяют. Проверяйте их в ",e.jsx(n.code,{children:"onRowsChange"}),". Полный код редактора — в стори «Select с подгрузкой по скроллу»."]}),`
`,e.jsxs(n.p,{children:["Редактор монтируется при открытии ячейки и размонтируется при закрытии, поэтому загруженные страницы храните вне него. В стори для этого используется ",e.jsx(n.code,{children:"useSWRInfinite"}),": кеш SWR глобальный, а в ключ входит поисковый запрос. При повторном открытии ячейки и при возврате к прежнему запросу список не запрашивается заново. Автоматическая перепроверка данных там отключена, поэтому если они могут измениться на бэкенде, сбрасывайте кеш через ",e.jsx(n.code,{children:"mutate"}),", например после сохранения."]}),`
`,e.jsx(l,{})]})}function ne(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{ne as default};
