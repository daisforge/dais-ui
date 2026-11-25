import{j as n}from"./react-UEdzNlUe.js";import{dd as r}from"./vendor-DKFmtNka.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-NPj_OXam.js";import{T as l}from"./Table.controlBlock.stories-DlTt5ODF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-Bxleko46.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CKJLB13y.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-ChCbsKuG.js";import"./index-By_8dfga.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./react-data-grid-zJbN7yQ-.js";import"./TableTabs-HvjNq9qy.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BIt2FCYt.js";import"./@daisforge/glide-data-grid-CNHJL7BZ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-CJxc4gWE.js";import"./Typography-cf3Xy15z.js";import"./ListOfFilters-CvMrij3w.js";import"./FiltersActions-Bc2zKHWn.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-0SvJ_tVp.js";import"./unidentified@3x-DFu65eL-.js";import"./MassActions-FwAtCS6p.js";import"./Autocomplete-BZdAUz1o.js";function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,name:"Docs"}),`
`,n.jsx(i.h1,{id:"control-block-configuration",children:"Control Block Configuration"}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Верхняя панель инструментов таблицы"}),`
`,n.jsx(i.li,{children:"Кастомные фичи с отображением в controlBlock или sidebar"}),`
`,n.jsx(i.li,{children:"Компрессия и перенос фич при нехватке места"}),`
`]}),`
`,n.jsx(i.p,{children:"В таблице присутствует возможность настраивать панель управления таблицы (верхний блок с кнопками)."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"tableConfig.controlBlock"})}),`
`,n.jsx(i.h2,{id:"breaking-changes-v20",children:"Breaking Changes (v2.0)"}),`
`,n.jsx(i.h3,{id:"1-удалены-устаревшие-свойства",children:"1. Удалены устаревшие свойства:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"dropdown"})," - заменен на ",n.jsx(i.code,{children:"details"})," для Sidebar-представления"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"customDropdownItem"})," - больше не поддерживается"]}),`
`]}),`
`,n.jsx(i.h3,{id:"2-новые-обязательные-требования",children:"2. Новые обязательные требования:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Для отображения в Sidebar необходимо указывать ",n.jsx(i.code,{children:"details"})]}),`
`]}),`
`,n.jsx(i.h3,{id:"3-новые-типы-фич",children:"3. Новые типы фич:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"button"})," - кнопка с иконкой и действием"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"switch"})," - переключатель"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"select"})," - выпадающий список"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"custom"})," - кастомный рендер"]}),`
`]}),`
`,n.jsx(i.h2,{id:"особенности-работы-controlblock",children:"Особенности работы ControlBlock"}),`
`,n.jsx(i.h3,{id:"1-лимит-отображения",children:"1. Лимит отображения"}),`
`,n.jsx(i.p,{children:"Не более 5 фич одновременно в ControlBlock"}),`
`,n.jsx(i.h3,{id:"2-обязательные-фичи",children:"2. Обязательные фичи"}),`
`,n.jsxs(i.p,{children:["С ",n.jsx(i.code,{children:"mandatory: true"})," всегда остаются в ControlBlock, при включённой компрессии при минимально возможном размере таблицы они будут скрыты в кнопку-dropdown ... (многоточие). Если это ваша кастомная фича, то надо обязательно описать ее details (будет использоваться для отображения в кнопке-dropdown)"]}),`
`,n.jsx(i.h3,{id:"3-автоматическое-распределение",children:"3. Автоматическое распределение:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Фичи с ",n.jsx(i.code,{children:"details"})," переносятся в Sidebar при превышении лимита (у которых mandatory: false)"]}),`
`,n.jsxs(i.li,{children:["Фичи без ",n.jsx(i.code,{children:"details"})," скрываются при превышении лимита"]}),`
`]}),`
`,n.jsx(i.h4,{id:"пример-миграции-с-v1-на-v2",children:"Пример миграции с v1 на v2:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-ts",children:`  // Было (v1):
  {
    value: 'feature',
    dropdown: { contentRight: <Component /> }
  }
  // Стало (v2):
  {
    value: 'feature',
    onClick: () => {}, // обязательно
    details: {
    type: 'custom',
    render: () => <Component />
    }
  }
`})}),`
`,n.jsx(i.h4,{id:"конфигурация-таблицы-v20",children:"Конфигурация таблицы (v2.0)"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`const [rows] = useState(createRows);
const [pinIsActive, setPinIsActive] = useState(false);

const tableConfig = {
  controlBlock: {
    customFeatures: [
      {
        value: 'customPin',
        label: pinIsActive ? 'Открепить' : 'Закрепить',
        Icon: pinIsActive ? IconPinOutline : IconPinFill,
        onClick: () => setPinIsActive(!pinIsActive),
        details: {
          type: 'switch',
          label: 'Закрепление колонок',
          checked: pinIsActive,
          onChange: () => setPinIsActive(!pinIsActive),
        },
      },
    ],
  },
};
`})}),`
`,n.jsx(i.h3,{id:"правила-использования",children:"Правила использования:"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["Для Sidebar-представления используйте ",n.jsx(i.code,{children:"details"})]}),`
`,n.jsxs(i.li,{children:["Фичи без ",n.jsx(i.code,{children:"details"})," не попадают в Sidebar"]}),`
`,n.jsxs(i.li,{children:["Используйте ",n.jsx(i.code,{children:"mandatory: true"})," для важных фич"]}),`
`]}),`
`,n.jsxs(i.p,{children:["Описание типов - в разделе ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-controlblock-api--docs",children:"API"}),"."]}),`
`,n.jsx(t,{})]})}function rn(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(o,{...e})}):o(e)}export{rn as default};
