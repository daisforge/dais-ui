import{j as n}from"./react-D2T61mpp.js";import{cf as d,cg as s,c9 as r}from"./vendor-C8VuHz3V.js";import{T as l}from"./TableCanvas.editing.stories-BhDQtzaQ.js";import"./react-is-Clcustum.js";import"./styled-components-BpVVkBzC.js";import"./@tanstack/react-virtual-CcbeDy_e.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B-riaFPz.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-9fEyX7uo.js";import"./@salutejs/sdds-finai-Cz7rM39w.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./@salutejs/plasma-icons-98834dYt.js";import"./constants-CUAU9RhA.js";import"./Container-B_dMidJG.js";import"./utils-DPKiBQxU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CcNAFjSN.js";import"./TableCanvas-D4QHH5SI.js";import"./FiltersActions-DmSh7VYo.js";import"./IconButton-Cyh6jX5Y.js";import"./TextField-Co0gL0EW.js";import"./sharedUtilsInputs-PdFYUoI6.js";import"./AiAgentPopup-CP0GYSYQ.js";import"./TextArea-CuXgMFQV.js";import"./sharedUtilsResizable-k1DpAbyC.js";import"./Table-B0AdTL7m.js";import"./Collapse-BFOVUS3J.js";import"./react-data-grid-B83SeY1o.js";import"./TableTabs-DrUU80Is.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-_EWp1AOz.js";import"./@glideappsfinal/glide-data-grid-DwMYPKa3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BWV_Zq-r.js";import"./ListOfFilters-C9boEqTG.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-02ANNdG-.js";import"./EmptyState-BvkbGYoG.js";import"./MassActions-CxTbJd7d.js";import"./Autocomplete-ARwfIOGo.js";import"./ErrorPage-B0chJuzn.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,name:"Docs"}),`
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
`,n.jsx(r,{})]})}function Y(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{Y as default};
