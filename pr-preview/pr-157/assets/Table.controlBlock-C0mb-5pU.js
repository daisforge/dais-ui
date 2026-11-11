import{j as n}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as c}from"./vendor-7VnaVIpS.js";import{T as l}from"./Table.controlBlock.stories-Bc2U2PhH.js";import"./react-is-Clcustum.js";import"./styled-components-CFvxk-I1.js";import"./@tanstack/react-virtual-DLhPRxds.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DTbyk53y.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-B_4Nnmo1.js";import"./FiltersActions-DZoyMXNo.js";import"./IconButton-CMFhYWGF.js";import"./@salutejs/plasma-icons-BYbOMVFw.js";import"./@salutejs/sdds-finai-BIcmm3du.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DX7iE3l_.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CT_TQepK.js";import"./TextField-D9pCt3yJ.js";import"./sharedUtilsInputs-BKCjgMo1.js";import"./AiAgentPopup-BzWYf_L1.js";import"./TextArea-9ztgIWXi.js";import"./sharedUtilsResizable-DFCywCQF.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-X771ClxU.js";import"./react-data-grid-jRoc5f7v.js";import"./TableTabs-DKrWiZ2K.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Wf-EAKdc.js";import"./@glideappsfinal/glide-data-grid-BIFd4p3p.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DaNwUmPY.js";import"./ListOfFilters-d5fyBklL.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CII-iTGf.js";import"./EmptyState-TQDU6LoR.js";import"./MassActions-CIpbc9ON.js";import"./Autocomplete-B3Mm-Amr.js";function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,name:"Docs"}),`
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
`,n.jsx(c,{})]})}function U(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(o,{...e})}):o(e)}export{U as default};
