import{j as e}from"./react-B60MRyL7.js";import{ck as r}from"./vendor-BjyhLeYF.js";import{M as t,S as l}from"./WithTooltip-KJL26V4Q-D-zwhmkZ.js";import{T as o}from"./TableTabs.stories-DwQlHjrG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";import"./preload-helper-BUAZWbk6.js";import"./index-Cu4lwwaE.js";import"./index-TL0b5yJv.js";import"./@salutejs/plasma-icons-B_5a5nWb.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CP6YPNYf.js";import"./Table-BsATGSzR.js";import"./index-DENfdpz2.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-NC4lN6Af.js";import"./Box--F0xJqmw.js";import"./Collapse-CvmNuHeJ.js";import"./utils-DU2v-Kn3.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-uMNe3011.js";import"./TableTabs-CeiuIDe5.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B-sUn46p.js";import"./@glideappsfinal/glide-data-grid-CKeaAZno.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-BwgHAUTB.js";import"./TextField-CGTh6kAa.js";import"./sharedUtilsInputs-B878LDVL.js";import"./TypographyWithAutoTooltip-DZRMakA4.js";import"./Typography-DEV1YILe.js";import"./ListOfFilters-DnpjyhAh.js";import"./FiltersActions-Cp5W4vvP.js";import"./IconButton-SVhgWQko.js";import"./TooltipList-BlFBxf18.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrIt19Sz.js";import"./NumberFormat-0Wv51lwB.js";import"./EmptyState-B_7W5YtK.js";import"./unidentified@3x-CJfTaq4R.js";import"./MassActions-RRA17cRW.js";import"./Autocomplete-CE19l179.js";import"./TableCanvas-D4qQYiRN.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-DSEhV8br.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o,name:"Docs"}),`
`,e.jsx(n.h1,{id:"tabletabs",children:"TableTabs"}),`
`,e.jsxs(n.p,{children:["Компонент для организации нескольких таблиц (или произвольного контента) в табах. Работает как с ",e.jsx(n.code,{children:"Table"}),", так и с ",e.jsx(n.code,{children:"TableCanvas"})," — или с обоими одновременно."]}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Единый контекст табов для ",e.jsx(n.code,{children:"Table"})," и ",e.jsx(n.code,{children:"TableCanvas"})]}),`
`,e.jsxs(n.li,{children:["Поддержка контролируемого и неконтролируемого режимов (",e.jsx(n.code,{children:"activeTabIdState"}),")"]}),`
`,e.jsxs(n.li,{children:["Кастомные табы через ",e.jsx(n.code,{children:"custom"})," поле"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TabPanel"})," с возможностью unmount/hide при переключении"]}),`
`,e.jsxs(n.li,{children:["Автоматическое скрытие скругления ",e.jsx(n.code,{children:"ControlBlock"})," у таблиц внутри табов"]}),`
`,e.jsxs(n.li,{children:["Опциональное ограничение ширины контейнера табов (",e.jsx(n.code,{children:"tabsContainerOptions.maxWidth"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TableTabs } from '@daisforge/ui/components/TableTabs';
`})}),`
`,e.jsx(n.p,{children:"Или из корневого экспорта:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TableTabs } from '@daisforge/ui';
`})}),`
`,e.jsx(n.h2,{id:"базовый-пример",children:"Базовый пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [activeTabId, setActiveTabId] = useState('tab1');

<TableTabs
  activeTabIdState={[activeTabId, setActiveTabId]}
  tabs={[
    { tabId: 'tab1', label: 'Первый таб' },
    { tabId: 'tab2', label: 'Второй таб' },
  ]}
>
  <TableTabs.TabPanel tabId="tab1">
    <Table tableConfig={...} columnConfig={...} rows={...} />
  </TableTabs.TabPanel>
  <TableTabs.TabPanel tabId="tab2">
    <TableCanvas tableConfig={...} columnConfig={...} rows={...} />
  </TableTabs.TabPanel>
</TableTabs>
`})}),`
`,e.jsx(n.h2,{id:"размер",children:"Размер"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," задаёт размер табов: ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"s"})," или ",e.jsx(n.code,{children:"xs"}),". На ",e.jsx(n.code,{children:"xs"})," уменьшаются и сами вкладки, и кнопка сворачивания над ними. Удобно вместе с ",e.jsx(n.code,{children:"controlBlock.size: 'xs'"})," у таблицы внутри."]}),`
`,e.jsx(n.h2,{id:"слот-справа",children:"Слот справа"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rightSlot"})," рисует свой контент справа от ряда табов: бейдж, кнопку, статус и подобное."]}),`
`,e.jsx(n.h2,{id:"сворачивание-над-табами",children:"Сворачивание над табами"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"collapsing"})," добавляет над табами строку с кнопкой свернуть и развернуть таблицу. У неё свой ",e.jsx(n.code,{children:"rightSlot"})," под контент справа от кнопки."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableTabs
  size="xs"
  rightSlot={<Badge text="Online" />}
  collapsing={{
    enabled: true,
    collapseText: 'Свернуть таблицу',
    expandText: 'Развернуть таблицу',
    rightSlot: <Badge view="warning" text="3 новых" />,
  }}
  tabs={[
    { tabId: 'tab1', label: 'Основная' },
    { tabId: 'tab2', label: 'Архив' },
  ]}
>
  ...
</TableTabs>
`})}),`
`,e.jsx(n.h2,{id:"tabpanel",children:"TabPanel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TableTabs.TabPanel"})," — дочерний компонент для содержимого каждого таба."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tabId"})," — идентификатор таба (должен совпадать с ",e.jsx(n.code,{children:"tabId"})," в массиве ",e.jsx(n.code,{children:"tabs"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmountOnClose"})," — если ",e.jsx(n.code,{children:"true"})," (по умолчанию), контент размонтируется при переключении. Если ",e.jsx(n.code,{children:"false"})," — скрывается через ",e.jsx(n.code,{children:"display: none"})]}),`
`]}),`
`,e.jsx(l,{})]})}function te(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{te as default};
