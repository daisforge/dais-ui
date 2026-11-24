import{j as e}from"./react-UEdzNlUe.js";import{dd as s}from"./vendor-DX-rrd2O.js";import{M as o,S as d}from"./WithTooltip-KJL26V4Q-DCf5a-Ok.js";import{T as l}from"./TableCanvas.editing.stories-CWo62X_K.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BSCswbR3.js";import"./@tanstack/react-virtual-Z5qLdlzb.js";import"./preload-helper-CZSX44HQ.js";import"./index-Cu4lwwaE.js";import"./index-CTuxd491.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CRc-Bhfp.js";import"./getFuncAsString-CYIdLC6X.js";import"./getTypeAsString-Bl5DSEL6.js";import"./types.string-BR8eQOO_.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-C7gaFLwb.js";import"./@salutejs/sdds-finai-C9AHDOh5.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/plasma-icons-CGioElEJ.js";import"./constants-Des9Datc.js";import"./Container-DyTrYN3M.js";import"./utils-BfZGf093.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-3Z-m9LhI.js";import"./Switch-OG9YqfkE.js";import"./TableCanvas-DnkhBOnU.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Collapse-DxXZ8FX5.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CxcQAL4z.js";import"./@daisforge/glide-data-grid-BBUEHCSk.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-DfbZiZGK.js";import"./sharedUiSearch-riXfbLeP.js";import"./TextField-vOaHFbUF.js";import"./sharedUtilsInputs-DVbCzzFV.js";import"./TypographyWithAutoTooltip-Bve8K-AE.js";import"./Typography-CyjBKn0V.js";import"./ListOfFilters-WV3X7fTD.js";import"./FiltersActions-Dlr522w9.js";import"./IconButton-DZJTAkfX.js";import"./TooltipList-WyihhvAI.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BJUVgxKS.js";import"./NumberFormat-Bbv2g6pc.js";import"./EmptyState-keEn8Dcv.js";import"./unidentified@3x-C9E9sVoM.js";import"./ErrorPage-BWgyZ3H3.js";import"./Autocomplete-BAY2rlXz.js";import"./swr-C9kJQIGF.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l,name:"Docs"}),`
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
`,e.jsxs(n.p,{children:["Если правка подстроки пропущена, включите ",e.jsx(n.code,{children:"window.__TABLE_CANVAS_EDITING_DEBUG__ = true"})," и уровень Verbose в консоли браузера. При ошибке в ",e.jsx(n.code,{children:"subRowsKey"})," таблица выведет путь, по которому искала подстроку."]}),`
`,e.jsx(n.h2,{id:"подсветка-изменённых-ячеек",children:"Подсветка изменённых ячеек"}),`
`,e.jsx(n.p,{children:`При редактировании, вставке и протяжке ячейки с изменившимся значением получают голубой фон.
Отметка привязана к ключам строки и колонки. Если вручную вернуть прежнее значение, отметка сохранится до выхода из режима редактирования.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onRowsChange(nextRows, data)"})," вызывается один раз на операцию. ",e.jsx(n.code,{children:"data.changedCells"})," содержит адреса ",e.jsx(n.code,{children:"{ rowId, columnKey }"})," за эту операцию, включая правки нескольких колонок. ",e.jsx(n.code,{children:"data.column"})," по-прежнему содержит первую затронутую колонку. При сохранении из пользовательского редактора таблица сравнивает поля, привязанные к отображаемым колонкам. Для вычисляемой колонки, значение которой складывается из других полей строки, приложение может выставить отметку по её ",e.jsx(n.code,{children:"columnKey"})," через ",e.jsx(n.code,{children:"editedCellsState"}),". Для подсветки используйте стабильный уникальный идентификатор строки. Если ",e.jsx(n.code,{children:"rowKeyGetter"})," определён только для корневых строк, правка подстроки сохраняется по её пути в дереве. Такая подстрока попадает в ",e.jsx(n.code,{children:"data.rows"}),", а адрес в ",e.jsx(n.code,{children:"data.changedCells"})," появляется только при наличии её собственного идентификатора."]}),`
`,e.jsxs(n.p,{children:["Голубой фон отмеченной ячейки имеет приоритет над ",e.jsx(n.code,{children:"columnThemeOverride.bgCell"}),", в том числе в колонках только для чтения. Например, если редактор цены записал новый итог в поле «Сумма», изменятся и подсветятся обе ячейки. Если две колонки привязаны к одному изменённому полю, при сохранении из редактора подсветятся обе."]}),`
`,e.jsxs(n.p,{children:["Таблица сама хранит отметки за сессию. Для управления из приложения передайте пару из ",e.jsx(n.code,{children:"useState"})," в ",e.jsx(n.code,{children:"editing.editedCellsState"}),". Ключи карты — идентификаторы строк, значения — множества ключей колонок. При внешнем изменении создавайте новую карту и новое множество для изменённой строки. При выходе из режима редактирования или размонтировании таблица через сеттер предлагает очистить отметки своей сессии. Если приложение в тот же момент передало собственную новую карту, она сохраняется."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const editedCellsState = useState<TableCanvasEditedCells<number>>(() => new Map());

const editing = {
  rowKeyGetter: (row: Row) => row.id,
  onRowsChange: setRows,
  editedCellsState,
};
`})}),`
`,e.jsx(n.p,{children:"На стенде «Кнопки и подсветка — внутреннее состояние» включите редактирование и измените ячейку. Таблица добавит отметку сама и очистит её при выходе из редактирования."}),`
`,e.jsx(n.p,{children:"На стенде «Подсветка — внешнее состояние» нажмите «Редактировать», чтобы начать сессию. «Сохранить» оставляет введённые значения, «Отменить» восстанавливает значения на момент входа. В обоих случаях набор отметок очищается."}),`
`,e.jsxs(n.p,{children:["В активной сессии кнопка «Подсветить только название первой строки» заменяет весь набор отметок, а «Сбросить подсветку» очищает его. Если выключить «Подсвечивать новые правки», приложение пропускает обновления отметок от таблицы. При этом таблица продолжает передавать новые значения через ",e.jsx(n.code,{children:"onRowsChange"}),"."]}),`
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
`,e.jsx(d,{})]})}function te(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{te as default};
