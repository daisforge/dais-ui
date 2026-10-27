import{j as e}from"./react-CAOzMBF_.js";import{cf as o,cg as c,c9 as s}from"./vendor-DmWczWMC.js";import{W as r}from"./Widget.stories-T7Qx2HOs.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./Widget-CvkMap1n.js";import"./utils-EIxGvR70.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CKhMjg07.js";import"./Box-DvvYTz20.js";import"./AiAgentPopup-zRx4ytCb.js";import"./TextArea-FtPqzh-q.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./sharedUtilsResizable-BjlCs3KG.js";import"./IconButton-ZoRfzXaJ.js";import"./utils-ChnhBB6l.js";function d(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function I(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(d,{...n})}):d(n)}export{I as default};
