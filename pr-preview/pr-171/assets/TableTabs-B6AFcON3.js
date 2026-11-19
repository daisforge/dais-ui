import{j as e}from"./react-B60MRyL7.js";import{ck as r}from"./vendor-ABAm7dM9.js";import{M as t,S as l}from"./WithTooltip-KJL26V4Q-DNqkv6AN.js";import{T as o}from"./TableTabs.stories-y0bAOyLx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-gfSbfbVk.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DDVWy8jf.js";import"./Table-BHm7A_HS.js";import"./index-DtotkDJi.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-a6lPhyw4.js";import"./TableTabs-BBnsWNxR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-_4SaCD-p.js";import"./@glideappsfinal/glide-data-grid-DzB2WOB9.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-Cbl4XGOH.js";import"./Typography-DHR5p_-g.js";import"./ListOfFilters-89QZfQ5J.js";import"./FiltersActions-DMxqxWWU.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-Dr8_YlzM.js";import"./unidentified@3x-B0cgBGvv.js";import"./MassActions-DZOS8cH-.js";import"./Autocomplete-D4Dg924L.js";import"./TableCanvas-BC-r5pnJ.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-q7KReVQy.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o,name:"Docs"}),`
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
