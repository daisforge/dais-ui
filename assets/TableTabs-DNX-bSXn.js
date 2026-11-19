import{j as e}from"./react-DNGZQ4GM.js";import{ck as r}from"./vendor-YLKf7ca7.js";import{M as t,S as l}from"./WithTooltip-KJL26V4Q-tULGdEQj.js";import{T as o}from"./TableTabs.stories-DI4us0fX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DgpxuAGO.js";import"./@tanstack/react-virtual-BaHWhgvr.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-j2gYCLme.js";import"./@salutejs/plasma-icons-BuaDVQIV.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CihOLcJg.js";import"./Table-C5cJymDf.js";import"./index-DkTc4jy4.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-ChtfndFI.js";import"./Box-Ba6bD7xl.js";import"./Collapse-DMgzmH3O.js";import"./utils-CJ5VTLFt.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-B7bWZIAA.js";import"./TableTabs-Cc5VYl1P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-COUNZWup.js";import"./@glideappsfinal/glide-data-grid-D4rqseF0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-Dw3sne4q.js";import"./sharedUiSearch-DR_G9VuT.js";import"./TextField-B2826P74.js";import"./sharedUtilsInputs-DgLMi5in.js";import"./TypographyWithAutoTooltip--uskoFla.js";import"./Typography-CitaFUXa.js";import"./ListOfFilters-DjxDso1q.js";import"./FiltersActions-4YYO6LZu.js";import"./IconButton-B7DLCuSp.js";import"./TooltipList-Dx9BjgjZ.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-LvNMf9h6.js";import"./NumberFormat-BMoxsDYG.js";import"./EmptyState-Dg8069Uy.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-DvFz2b-k.js";import"./Autocomplete-DIZ6r3L2.js";import"./TableCanvas-BER_NFGF.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-Td3oaxhf.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o,name:"Docs"}),`
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
`,e.jsx(l,{})]})}function le(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{le as default};
