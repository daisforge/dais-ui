import{j as n}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as l}from"./vendor-DeTnNj4Y.js";import{T as r}from"./TableCanvas.editing.stories-DTgPoxLF.js";import"./react-is-Clcustum.js";import"./styled-components-DdokC5aN.js";import"./@tanstack/react-virtual-De5X9U1Y.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Dn3tfWr8.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-CvdNwZO0.js";import"./@salutejs/sdds-finai-CR2jG7gG.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./@salutejs/plasma-icons-DO39JMB0.js";import"./constants-DI5pidOH.js";import"./Container-DZr-Y68K.js";import"./utils-CnqbZkiM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DX5ST7G7.js";import"./TableCanvas-jn5O-zoQ.js";import"./FiltersActions-BOhkYRWC.js";import"./IconButton-CiN1tqM5.js";import"./TextField-Dr5BOjh4.js";import"./sharedUtilsInputs-DMjRfQ_3.js";import"./AnalyticalWidget-_Usa-H1c.js";import"./Collapse-CfczhZGb.js";import"./Table-DdyMGdwT.js";import"./react-data-grid-hjNugmjj.js";import"./TableTabs-B8A6oUgt.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DxWLNWqW.js";import"./ListOfFilters-B36bCL_T.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-dFRrOuxH.js";import"./EmptyState-DWWHkzJG.js";import"./MassActions-CfwEqYJq.js";import"./Autocomplete-1PW07WU4.js";import"./TableGlide-qhhQfs6u.js";import"./@glideappsfinal/glide-data-grid-CAo2RqHF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CDm9rAI0.js";function d(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:r,name:"Docs"}),`
`,n.jsx(e.h1,{id:"editing-tablecanvas",children:"Editing (TableCanvas)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.editing + columnConfig.editingCell"})}),`
`,n.jsxs(e.p,{children:["Режим редактирования данных в ячейках таблицы. Условие активации — наличие свойства ",n.jsx(e.code,{children:"editing"})," в ",n.jsx(e.code,{children:"tableConfig"}),". Также необходимо сконфигурировать колонки через ",n.jsx(e.code,{children:"editingCell"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Управление режимом редактирования через ",n.jsx(e.code,{children:"enabled"})," / ",n.jsx(e.code,{children:"defaultEnabled"})]}),`
`,n.jsxs(e.li,{children:["Callback-и при включении, сохранении и отмене (",n.jsx(e.code,{children:"onEnableEditing"}),", ",n.jsx(e.code,{children:"onSave"}),", ",n.jsx(e.code,{children:"onCancel"}),")"]}),`
`,n.jsxs(e.li,{children:["Контроль редактируемости строк через ",n.jsx(e.code,{children:"rowEditable"})]}),`
`,n.jsxs(e.li,{children:["Поддержка дочерних строк через ",n.jsx(e.code,{children:"subRowsKey"})]}),`
`,n.jsxs(e.li,{children:["Кнопки управления в controlBlock (",n.jsx(e.code,{children:"showButtons"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"editingCell.component"})," рендерит React-компонент поверх таблицы; ",n.jsx(e.code,{children:"Canvas.*"})," элементы используйте только в ",n.jsx(e.code,{children:"renderCell"}),", ",n.jsx(e.code,{children:"renderHeaderCell"})," и ",n.jsx(e.code,{children:"renderSummaryCell"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"жизненный-цикл",children:"Жизненный цикл"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Пользователь нажимает кнопку «Редактирование» → вызывается ",n.jsx(e.code,{children:"onEnableEditing"})]}),`
`,n.jsxs(e.li,{children:["При изменении ячейки → вызывается ",n.jsx(e.code,{children:"onRowsChange"})," с данными об изменённых строках"]}),`
`,n.jsxs(e.li,{children:["При нажатии «Сохранить» → вызывается ",n.jsx(e.code,{children:"onSave"})]}),`
`,n.jsxs(e.li,{children:["При нажатии «Отменить» → вызывается ",n.jsx(e.code,{children:"onCancel"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"управление-состоянием",children:"Управление состоянием"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"defaultEnabled"})})," — начальное состояние (внутренний стейт)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"enabled: boolean"})})," — полностью внешнее управление (без переключения в таблице)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"enabled: [boolean, setState]"})})," — внешний стейт с возможностью переключения в таблице"]}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onRowsChange"})," — обязательный callback, получает обновлённые строки и метаданные (индексы, колонка, before/after)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"subRowsKey"})," — обязателен, если дочерние строки хранятся не под ключом ",n.jsx(e.code,{children:"subRows"}),". Поддерживает вложенность через точку (например, ",n.jsx(e.code,{children:"'data.children'"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"showButtons"})," — по умолчанию ",n.jsx(e.code,{children:"true"}),", управляет видимостью кнопок в controlBlock"]}),`
`]}),`
`,n.jsx(e.h2,{id:"управление-кнопками-buttons",children:"Управление кнопками (buttons)"}),`
`,n.jsxs(e.p,{children:["Через ",n.jsx(e.code,{children:"editing.buttons"})," можно передать пропсы кнопкам ",n.jsx(e.code,{children:"save"}),", ",n.jsx(e.code,{children:"cancel"})," и ",n.jsx(e.code,{children:"edit"}),". ",n.jsx(e.code,{children:"onClick"})," исключён — обработчики задаются через ",n.jsx(e.code,{children:"onSave"})," / ",n.jsx(e.code,{children:"onCancel"})," / ",n.jsx(e.code,{children:"onEnableEditing"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`editing: {
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
`,n.jsx(l,{})]})}function V(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{V as default};
