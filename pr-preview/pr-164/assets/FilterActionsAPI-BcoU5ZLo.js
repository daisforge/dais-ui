import{j as s}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-BOXbJjQW.js";import{M as r}from"./WithTooltip-KJL26V4Q-D1oqEq-B.js";import{T as e}from"./TypeSourceViewer-CtEHU1-A.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-DN-dyp3E.js";import"./@tanstack/react-virtual--f9HMX-L.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-B3szzMwc.js";import"./@salutejs/plasma-icons-LsCQzLxj.js";function n(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Композиции/FiltersActions/API"}),`
`,s.jsx(t.h1,{id:"filtersactions-api",children:"FiltersActions API"}),`
`,s.jsxs(t.p,{children:["Компонент ",s.jsx(t.code,{children:"FiltersActions"})," построен на основе ",s.jsx(t.strong,{children:"compound-паттерна"}),". Корневой компонент предоставляет набор вложенных компонентов для сборки панели фильтров."]}),`
`,s.jsx(t.h2,{id:"filtersactionsprops",children:"FiltersActionsProps"}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",typeName:"FiltersActionsProps"}),`
`,s.jsx(t.h2,{id:"filtersactionsresizedimensions",children:"FiltersActionsResizeDimensions"}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",typeName:"FiltersActionsResizeDimensions"}),`
`,s.jsx(t.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,s.jsx(t.h3,{id:"filtersactionsfiltersbutton",children:"FiltersActions.FiltersButton"}),`
`,s.jsxs(t.p,{children:["Кнопка фильтра. Наследует пропсы ",s.jsx(t.code,{children:"Button"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",typeName:"FiltersActionsFiltersButtonProps"}),`
`,s.jsx(t.h3,{id:"filtersactionsfiltersbuttonwithpopover",children:"FiltersActions.FiltersButtonWithPopover"}),`
`,s.jsx(t.p,{children:"Кнопка с Popover для содержимого фильтра."}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",typeName:"FiltersActionsFiltersButtonWithPopoverProps"}),`
`,s.jsx(t.h4,{id:"filtertargetrenderapi",children:"FilterTargetRenderApi"}),`
`,s.jsxs(t.p,{children:["Аргумент рендер-пропа ",s.jsx(t.code,{children:"renderTarget"})," — «рычаги» для сборки собственного таргета Popover (иконки, кнопки, любого элемента) с сохранением логики открытия и красной точки-индикатора. Подробнее — в разделе Docs, «Кастомный таргет Popover»."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",typeName:"FilterTargetRenderApi"}),`
`,s.jsx(t.h3,{id:"filtersactionsreddot",children:"FiltersActions.RedDot"}),`
`,s.jsxs(t.p,{children:["Красная точка-индикатор активных фильтров. Позиционируется абсолютно в правом верхнем углу контейнера с ",s.jsx(t.code,{children:"position: relative"}),". Приходит в ",s.jsx(t.code,{children:"renderTarget"})," (поле ",s.jsx(t.code,{children:"RedDot"}),"), но доступна и как ",s.jsx(t.code,{children:"FiltersActions.RedDot"})," для использования на своём таргете."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx",typeName:"RedDotProps"}),`
`,s.jsx(t.h3,{id:"filtersactionsdotsiconbutton",children:"FiltersActions.DotsIconButton"}),`
`,s.jsxs(t.p,{children:["Кнопка-иконка «три точки» с выпадающим меню. Наследует пропсы ",s.jsx(t.code,{children:"IconButton"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",typeName:"FiltersActionsDotsIconButtonProps"}),`
`,s.jsx(t.h3,{id:"filtersactionslistoffilters",children:"FiltersActions.ListOfFilters"}),`
`,s.jsx(t.p,{children:"Список применённых фильтров (чипы)."}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/components/ListOfFilters/ListOfFilters.tsx",typeName:"ListOfFiltersProps"}),`
`,s.jsx(t.h3,{id:"filtersactionstextfieldsearch",children:"FiltersActions.TextFieldSearch"}),`
`,s.jsxs(t.p,{children:["Поле поиска. Наследует пропсы ",s.jsx(t.code,{children:"TextField"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/components/TextField/TextFieldSearch.tsx",typeName:"TextFieldSearchProps"}),`
`,s.jsx(t.h3,{id:"filtersactionstabs",children:"FiltersActions.Tabs"}),`
`,s.jsxs(t.p,{children:["Контейнер табов. Наследует пропсы ",s.jsx(t.code,{children:"Tabs"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),". Размер по умолчанию: ",s.jsx(t.code,{children:"xs"}),", вид: ",s.jsx(t.code,{children:"filled"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Tabs.tsx",typeName:"FiltersActionsTabsProps"}),`
`,s.jsx(t.h3,{id:"filtersactionstabitem",children:"FiltersActions.TabItem"}),`
`,s.jsxs(t.p,{children:["Элемент таба. Наследует пропсы ",s.jsx(t.code,{children:"TabItem"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),". Размер по умолчанию: ",s.jsx(t.code,{children:"s"}),", вид: ",s.jsx(t.code,{children:"default"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Tabs.tsx",typeName:"FiltersActionsTabItemProps"}),`
`,s.jsx(t.h3,{id:"filtersactionssegmentitem",children:"FiltersActions.SegmentItem"}),`
`,s.jsxs(t.p,{children:["Элемент сегмента. Наследует пропсы ",s.jsx(t.code,{children:"SegmentItem"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),". Размер по умолчанию: ",s.jsx(t.code,{children:"s"}),", вид: ",s.jsx(t.code,{children:"default"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Segments.tsx",typeName:"FiltersActionsSegmentItemProps"}),`
`,s.jsx(t.h3,{id:"filtersactionstooltiplist",children:"FiltersActions.TooltipList"}),`
`,s.jsxs(t.p,{children:["Тултип со списком элементов. Наследует пропсы ",s.jsx(t.code,{children:"Tooltip"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"})," (кроме ",s.jsx(t.code,{children:"text"})," и ",s.jsx(t.code,{children:"children"}),")."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",typeName:"FiltersActionsTooltipProps"}),`
`,s.jsx(t.h3,{id:"filtersactionsresetallfiltersbutton",children:"FiltersActions.ResetAllFiltersButton"}),`
`,s.jsxs(t.p,{children:["Кнопка «Сбросить все фильтры». Наследует пропсы ",s.jsx(t.code,{children:"LinkButton"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx",typeName:"ResetAllFiltersButtonProps"}),`
`,s.jsx(t.h3,{id:"filtersactionsswitcherfilter",children:"FiltersActions.SwitcherFilter"}),`
`,s.jsxs(t.p,{children:["Переключатель-фильтр. Наследует пропсы ",s.jsx(t.code,{children:"Switch"})," из ",s.jsx(t.code,{children:"@salutejs/sdds-finai"}),"."]}),`
`,s.jsx(e,{language:"ts",filePath:"packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx",typeName:"SwitcherFilterProps"}),`
`,s.jsx(t.h2,{id:"ренейминг",children:"Ренейминг"}),`
`,s.jsx(t.p,{children:"В целях улучшения читаемости и единообразия именования некоторые compound-компоненты были переименованы."}),`
`,s.jsxs(t.p,{children:[s.jsx(t.strong,{children:"Обратная совместимость сохранена"})," — старые имена продолжают работать. Оба варианта ссылаются на один и тот же компонент. Рекомендуем использовать новые имена:"]}),`
`,s.jsxs(t.ul,{children:[`
`,s.jsxs(t.li,{children:[s.jsx(t.code,{children:"FiltersActions.FilterPopover"})," → ",s.jsx(t.code,{children:"FiltersActions.FiltersButtonWithPopover"})]}),`
`,s.jsxs(t.li,{children:[s.jsx(t.code,{children:"FiltersActions.Tooltip"})," → ",s.jsx(t.code,{children:"FiltersActions.TooltipList"})]}),`
`]}),`
`,s.jsx(t.pre,{children:s.jsx(t.code,{className:"language-diff",children:`- <FiltersActions.FilterPopover
+ <FiltersActions.FiltersButtonWithPopover
    content={...}
    footer={...}
    buttonProps={{ hideLabel: true }}
  />

- <FiltersActions.Tooltip ... />
+ <FiltersActions.TooltipList ... />
`})})]})}function P(i={}){const{wrapper:t}={...o(),...i.components};return t?s.jsx(t,{...i,children:s.jsx(n,{...i})}):n(i)}export{P as default};
