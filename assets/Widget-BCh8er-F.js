import{j as e}from"./react-D2T61mpp.js";import{c4 as c,c5 as s,b_ as o}from"./vendor-DrvHogBM.js";import{W as r}from"./Widget.stories-CcaHSYf0.js";import"./react-is-Clcustum.js";import"./styled-components-C32trI5d.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./Widget-DxN3kl1z.js";import"./utils-Dj5yYuxA.js";import"./constants-B3b49qmU.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-RFE0ZUZz.js";import"./Box-ChBl0Qym.js";import"./AnalyticalWidget-D2_M22M6.js";import"./IconButton-BPoioxom.js";import"./@salutejs/plasma-icons-CWtohmdG.js";import"./Collapse-94ilkYlK.js";import"./utils-DKBiK-Fp.js";function d(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Docs"}),`
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
`,e.jsx(o,{})]})}function F(n={}){const{wrapper:i}={...c(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(d,{...n})}):d(n)}export{F as default};
