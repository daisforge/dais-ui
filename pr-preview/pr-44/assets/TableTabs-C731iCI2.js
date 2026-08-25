import{j as e}from"./react-D2T61mpp.js";import{c4 as l,c5 as a,b_ as r}from"./vendor-79A0Y1rr.js";import{T as t}from"./TableTabs.stories-Dviq-YD2.js";import"./react-is-Clcustum.js";import"./styled-components-CyG4-HBp.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Amd1X9tE.js";import"./Table-Bs48fGjK.js";import"./FiltersActions-BXGpy_er.js";import"./IconButton-DRWW6GK4.js";import"./@salutejs/plasma-icons-DyDFzmWf.js";import"./@salutejs/sdds-finai-LXsiMrF6.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-CejOy8O0.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-u6CfKOrq.js";import"./TextField-vOV0PS1h.js";import"./sharedUtilsInputs-m__6t1dv.js";import"./AnalyticalWidget-B1z2BPO9.js";import"./Collapse-CSOL2Z_x.js";import"./react-data-grid-DC6FgrCZ.js";import"./TableTabs-C1osjsBt.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-k3PIClVY.js";import"./ListOfFilters-C6akdsJO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DNgz4QV8.js";import"./EmptyState-bMxO47Pd.js";import"./MassActions-DCvKq-ih.js";import"./Autocomplete-Bm7R9QtZ.js";import"./TableCanvas-s8kuhZz2.js";import"./TableGlide-C8zvD7TD.js";import"./@glideappsfinal/glide-data-grid-BS4D-Mn4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-D1NqqUXM.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t,name:"Docs"}),`
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
`,e.jsx(r,{})]})}function H(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{H as default};
