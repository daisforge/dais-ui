import{j as n}from"./react-D2T61mpp.js";import{c4 as r,c5 as l,b_ as c}from"./vendor-CwjClrU-.js";import{L as d}from"./Layout.stories-TfqUPDr-.js";import"./react-is-Clcustum.js";import"./styled-components-CdU5JEL5.js";import"./tslib-De9GV7Vy.js";import"./Box-BsCGp3nZ.js";import"./PageTitle-BCaJTMVy.js";import"./AnalyticalWidget-DXitH16m.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/sdds-finai-rsluPq8z.js";import"./utils-ej044pNs.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./IconButton-BWb4-hTc.js";import"./@salutejs/plasma-icons-BiMarbkF.js";import"./Collapse-Bk3Aw7RD.js";import"./Layout-B0_Uw4TF.js";function e(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:d,name:"Docs"}),`
`,n.jsx(i.h1,{id:"layout",children:"Layout"}),`
`,n.jsx(i.p,{children:"Компонент сетки страницы с поддержкой одноколоночных и многоколоночных макетов."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["9 вариантов раскладки: ",n.jsx(i.code,{children:"V1_1"})," (одна колонка), ",n.jsx(i.code,{children:"V2_1"}),"/",n.jsx(i.code,{children:"V2_2"})," (две колонки), ",n.jsx(i.code,{children:"V3_1"}),"/",n.jsx(i.code,{children:"V3_2"}),"/",n.jsx(i.code,{children:"V3_3"})," (асимметричные), ",n.jsx(i.code,{children:"V4_1"}),"/",n.jsx(i.code,{children:"V4_2"})," (равные колонки), ",n.jsx(i.code,{children:"V5_1"})," (фиксированная + центрированная)"]}),`
`,n.jsx(i.li,{children:"Адаптивное поведение на разных устройствах"}),`
`,n.jsx(i.li,{children:"Кастомизация отступов через отдельные пропсы margin/padding"}),`
`,n.jsx(i.li,{children:"Гибкое управление через CSS-переменные и классы"}),`
`]}),`
`,n.jsx(i.h2,{id:"доступные-варианты-раскладки",children:"Доступные варианты раскладки"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V1_1"})," — одноколоночная"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V2_1"})," — две колонки (основная слева)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V2_2"})," — две колонки (основная справа)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V3_1"})," — очень широкая колонка слева"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V3_2"})," — очень широкая колонка справа"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V3_3"})," — три колонки (центр шире)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V4_1"})," — две равные колонки"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V4_2"})," — три равные колонки"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"V5_1"})," — фиксированная левая + центрированная"]}),`
`]}),`
`,n.jsx(i.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--layout-margin-horizontal"})," — горизонтальные отступы (по умолчанию: auto)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--layout-margin-vertical"})," — вертикальные отступы (зависит от breakpoint)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--layout-gutter"})," — расстояние между колонками (зависит от breakpoint)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--layout-header-height"})," — высота хедера (auto)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--layout-max-width"})," — максимальная ширина (1856px)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--layout-grid-template-columns"})," — шаблон колонок"]}),`
`]}),`
`,n.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["При передаче строки в проп ",n.jsx(i.code,{children:"classes"})," она применяется к корневому элементу; для точечной стилизации передайте объект ",n.jsx(i.code,{children:"LayoutClasses"})]}),`
`,n.jsxs(i.li,{children:["Встроенные CSS-классы: ",n.jsx(i.code,{children:"layout__root"}),", ",n.jsx(i.code,{children:"layout__header"}),", ",n.jsx(i.code,{children:"layout__main"}),", ",n.jsx(i.code,{children:"layout__item"}),", ",n.jsx(i.code,{children:"layout__centeredItem"})," (для V5_1)"]}),`
`,n.jsx(i.li,{children:"Адаптивные отступы и гаттеры автоматически меняются по брейкпоинтам"}),`
`,n.jsx(i.li,{children:"Максимальная ширина по умолчанию — 1856px"}),`
`]}),`
`,n.jsxs(i.p,{children:["Описание типов — в разделе ",n.jsx(i.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-layout-api--docs",children:"API"}),"."]}),`
`,n.jsx(c,{})]})}function L(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{L as default};
