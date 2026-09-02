import{j as s}from"./react-D2T61mpp.js";import{c6 as o,c7 as r}from"./vendor-DV2KdZ5r.js";import{T as t}from"./TypeSourceViewer-DXoet0xR.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";function n(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Композиции/FiltersActions/API"}),`
`,s.jsx(e.h1,{id:"filtersactions-api",children:"FiltersActions API"}),`
`,s.jsxs(e.p,{children:["Компонент ",s.jsx(e.code,{children:"FiltersActions"})," построен на основе ",s.jsx(e.strong,{children:"compound-паттерна"}),". Корневой компонент предоставляет набор вложенных компонентов для сборки панели фильтров."]}),`
`,s.jsx(e.h2,{id:"filtersactionsprops",children:"FiltersActionsProps"}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",typeName:"FiltersActionsProps"}),`
`,s.jsx(e.h2,{id:"filtersactionsresizedimensions",children:"FiltersActionsResizeDimensions"}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",typeName:"FiltersActionsResizeDimensions"}),`
`,s.jsx(e.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,s.jsx(e.h3,{id:"filtersactionsfiltersbutton",children:"FiltersActions.FiltersButton"}),`
`,s.jsxs(e.p,{children:["Кнопка фильтра. Наследует пропсы ",s.jsx(e.code,{children:"Button"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",typeName:"FiltersActionsFiltersButtonProps"}),`
`,s.jsx(e.h3,{id:"filtersactionsfiltersbuttonwithpopover",children:"FiltersActions.FiltersButtonWithPopover"}),`
`,s.jsx(e.p,{children:"Кнопка с Popover для содержимого фильтра."}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",typeName:"FiltersActionsFiltersButtonWithPopoverProps"}),`
`,s.jsx(e.h4,{id:"filtertargetrenderapi",children:"FilterTargetRenderApi"}),`
`,s.jsxs(e.p,{children:["Аргумент рендер-пропа ",s.jsx(e.code,{children:"renderTarget"})," — «рычаги» для сборки собственного таргета Popover (иконки, кнопки, любого элемента) с сохранением логики открытия и красной точки-индикатора. Подробнее — в разделе Docs, «Кастомный таргет Popover»."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",typeName:"FilterTargetRenderApi"}),`
`,s.jsx(e.h3,{id:"filtersactionsreddot",children:"FiltersActions.RedDot"}),`
`,s.jsxs(e.p,{children:["Красная точка-индикатор активных фильтров. Позиционируется абсолютно в правом верхнем углу контейнера с ",s.jsx(e.code,{children:"position: relative"}),". Приходит в ",s.jsx(e.code,{children:"renderTarget"})," (поле ",s.jsx(e.code,{children:"RedDot"}),"), но доступна и как ",s.jsx(e.code,{children:"FiltersActions.RedDot"})," для использования на своём таргете."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx",typeName:"RedDotProps"}),`
`,s.jsx(e.h3,{id:"filtersactionsdotsiconbutton",children:"FiltersActions.DotsIconButton"}),`
`,s.jsxs(e.p,{children:["Кнопка-иконка «три точки» с выпадающим меню. Наследует пропсы ",s.jsx(e.code,{children:"IconButton"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",typeName:"FiltersActionsDotsIconButtonProps"}),`
`,s.jsx(e.h3,{id:"filtersactionslistoffilters",children:"FiltersActions.ListOfFilters"}),`
`,s.jsx(e.p,{children:"Список применённых фильтров (чипы)."}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/ListOfFilters/ListOfFilters.tsx",typeName:"ListOfFiltersProps"}),`
`,s.jsx(e.h3,{id:"filtersactionstextfieldsearch",children:"FiltersActions.TextFieldSearch"}),`
`,s.jsxs(e.p,{children:["Поле поиска. Наследует пропсы ",s.jsx(e.code,{children:"TextField"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/TextField/TextFieldSearch.tsx",typeName:"TextFieldSearchProps"}),`
`,s.jsx(e.h3,{id:"filtersactionstabs",children:"FiltersActions.Tabs"}),`
`,s.jsxs(e.p,{children:["Контейнер табов. Наследует пропсы ",s.jsx(e.code,{children:"Tabs"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),". Размер по умолчанию: ",s.jsx(e.code,{children:"xs"}),", вид: ",s.jsx(e.code,{children:"filled"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Tabs.tsx",typeName:"FiltersActionsTabsProps"}),`
`,s.jsx(e.h3,{id:"filtersactionstabitem",children:"FiltersActions.TabItem"}),`
`,s.jsxs(e.p,{children:["Элемент таба. Наследует пропсы ",s.jsx(e.code,{children:"TabItem"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),". Размер по умолчанию: ",s.jsx(e.code,{children:"s"}),", вид: ",s.jsx(e.code,{children:"default"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Tabs.tsx",typeName:"FiltersActionsTabItemProps"}),`
`,s.jsx(e.h3,{id:"filtersactionssegmentitem",children:"FiltersActions.SegmentItem"}),`
`,s.jsxs(e.p,{children:["Элемент сегмента. Наследует пропсы ",s.jsx(e.code,{children:"SegmentItem"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),". Размер по умолчанию: ",s.jsx(e.code,{children:"s"}),", вид: ",s.jsx(e.code,{children:"default"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Segments.tsx",typeName:"FiltersActionsSegmentItemProps"}),`
`,s.jsx(e.h3,{id:"filtersactionstooltiplist",children:"FiltersActions.TooltipList"}),`
`,s.jsxs(e.p,{children:["Тултип со списком элементов. Наследует пропсы ",s.jsx(e.code,{children:"Tooltip"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"})," (кроме ",s.jsx(e.code,{children:"text"})," и ",s.jsx(e.code,{children:"children"}),")."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",typeName:"FiltersActionsTooltipProps"}),`
`,s.jsx(e.h3,{id:"filtersactionsresetallfiltersbutton",children:"FiltersActions.ResetAllFiltersButton"}),`
`,s.jsxs(e.p,{children:["Кнопка «Сбросить все фильтры». Наследует пропсы ",s.jsx(e.code,{children:"LinkButton"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx",typeName:"ResetAllFiltersButtonProps"}),`
`,s.jsx(e.h3,{id:"filtersactionsswitcherfilter",children:"FiltersActions.SwitcherFilter"}),`
`,s.jsxs(e.p,{children:["Переключатель-фильтр. Наследует пропсы ",s.jsx(e.code,{children:"Switch"})," из ",s.jsx(e.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx",typeName:"SwitcherFilterProps"}),`
`,s.jsx(e.h2,{id:"ренейминг",children:"Ренейминг"}),`
`,s.jsx(e.p,{children:"В целях улучшения читаемости и единообразия именования некоторые compound-компоненты были переименованы."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Обратная совместимость сохранена"})," — старые имена продолжают работать. Оба варианта ссылаются на один и тот же компонент. Рекомендуем использовать новые имена:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"FiltersActions.FilterPopover"})," → ",s.jsx(e.code,{children:"FiltersActions.FiltersButtonWithPopover"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"FiltersActions.Tooltip"})," → ",s.jsx(e.code,{children:"FiltersActions.TooltipList"})]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-diff",children:`- <FiltersActions.FilterPopover
+ <FiltersActions.FiltersButtonWithPopover
    content={...}
    footer={...}
    buttonProps={{ hideLabel: true }}
  />

- <FiltersActions.Tooltip ... />
+ <FiltersActions.TooltipList ... />
`})})]})}function p(i={}){const{wrapper:e}={...o(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{p as default};
