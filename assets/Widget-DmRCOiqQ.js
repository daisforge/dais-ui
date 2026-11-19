import{j as e}from"./react-DNGZQ4GM.js";import{ck as o}from"./vendor-D0kRSEyZ.js";import{M as r,S as s}from"./WithTooltip-KJL26V4Q-DmYH2O2Q.js";import{W as t}from"./Widget.stories-vC2nmAWq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-B2Euy7F3.js";import"./@tanstack/react-virtual-BMRZReVx.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-mtwU-xhz.js";import"./@salutejs/plasma-icons-CyCZXKIi.js";import"./storySourceDoc-tVKyHcEN.js";import"./Widget-YyrdSaBo.js";import"./utils-7sb7r4ay.js";import"./constants-v491TRlQ.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CTfk_qKV.js";import"./Box-C7bn7Vor.js";import"./TypographyWithAutoTooltip-D2KyJ3uF.js";import"./Typography-C1XIPscs.js";import"./IconButton-C1E4pz8y.js";import"./utils-BSYO1A7l.js";function d(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t,name:"Docs"}),`
`,e.jsx(i.h1,{id:"widget",children:"Widget"}),`
`,e.jsx(i.p,{children:"Компонент-layout, который может быть использован как отдельно, так и в рамках ModalDF, DrawerDF."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Compound-структура: Header, Footer, Content, Divider, ServiceButtons"}),`
`,e.jsxs(i.li,{children:["Поддержка разных контекстов через ",e.jsx(i.code,{children:"containerType"}),": ",e.jsx(i.code,{children:"'default'"}),", ",e.jsx(i.code,{children:"'modal'"}),", ",e.jsx(i.code,{children:"'splitView'"})]}),`
`,e.jsxs(i.li,{children:["Кастомизация через ",e.jsx(i.code,{children:"$css"}),", ",e.jsx(i.code,{children:"classes"})," и ",e.jsx(i.code,{children:"styled"}),"-обёртки"]}),`
`,e.jsx(i.li,{children:"Кнопки «назад» и «три точки» с поддержкой Dropdown"}),`
`]}),`
`,e.jsx(i.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`Widget.Header = WidgetHeader;
Widget.Footer = WidgetFooter;
Widget.Content = StyledContent;
Widget.Divider = WidgetDivider;
Widget.ServiceButtons = WidgetServiceButtons;
Widget.IconButtonDots = WidgetIconButtonDots;
Widget.IconButtonBack = WidgetIconButtonBack;
`})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.Header"})," — шапка с заголовком, подзаголовком, бейджем, кнопкой «назад» и правым блоком действий"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.Footer"})," — футер с левым и правым блоком"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.Content"})," — контейнер контента, принимает ",e.jsx(i.code,{children:"$css"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.Divider"})," — разделитель (реэкспорт стандартного Divider)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.ServiceButtons"})," — сервисные кнопки"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.IconButtonDots"})," — кнопка-иконка «три точки» с поддержкой Dropdown"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Widget.IconButtonBack"})," — кнопка «назад»"]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Объект ",e.jsx(i.code,{children:"widgetClassNames"})," доступен для импорта и используется для обращения к подэлементам компонента. Также можно обернуть в ",e.jsx(i.code,{children:"styled"})," или использовать ",e.jsx(i.code,{children:"$css"})]}),`
`,e.jsxs(i.li,{children:["Проп ",e.jsx(i.code,{children:"containerType"})," влияет на стили: ",e.jsx(i.code,{children:"'default'"})," — стандартный виджет, ",e.jsx(i.code,{children:"'modal'"})," — внутри модалки, ",e.jsx(i.code,{children:"'splitView'"})," — внутри SplitView"]}),`
`,e.jsxs(i.li,{children:["Для выравнивания Badge в Header используйте ",e.jsx(i.code,{children:"badgeMarginTop"}),":",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"titleSize='H3'"})," → ",e.jsx(i.code,{children:"badgeMarginTop={5}"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"titleSize='H4'"})," → ",e.jsx(i.code,{children:"badgeMarginTop={2}"})," (по умолчанию)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"titleSize='H5'"})," → ",e.jsx(i.code,{children:"badgeMarginTop={1}"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.p,{children:["Описание типов и compound-пропсов — в разделе ",e.jsx(i.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-widget-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function z(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(d,{...n})}):d(n)}export{z as default};
