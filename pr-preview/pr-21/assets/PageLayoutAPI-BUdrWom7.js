import{j as e}from"./react-D2T61mpp.js";import{c2 as o,c3 as d}from"./vendor-DAeWXVFZ.js";import{T as t}from"./TypeSourceViewer-CfvOItIM.js";import"./react-is-Clcustum.js";import"./styled-components-Dv4eU0M2.js";import"./tslib-De9GV7Vy.js";function i(a){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Композиции/PageLayout/API"}),`
`,e.jsx(n.h1,{id:"pagelayout-api",children:"PageLayout API"}),`
`,e.jsx(n.h2,{id:"pagelayoutprops",children:"PageLayoutProps"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/layouts/PageLayout/PageLayout.types.ts",typeName:"PageLayoutProps"}),`
`,e.jsx(n.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,e.jsx(n.p,{children:"Компонент устанавливает CSS-переменные, которые можно переопределить или использовать в дочерних элементах:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--global-header-height"})," — задаётся микрофронтом шапки (fallback 72px). PageLayout использует для ",e.jsx(n.code,{children:"padding-top"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--page-layout-padding-top"})," — верхний отступ. По умолчанию ",e.jsx(n.code,{children:"var(--global-header-height, 72px)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--page-layout-padding-inline"})," — боковые отступы. <= 1280px: ",e.jsx(n.code,{children:"24px"}),", >1280px: ",e.jsx(n.code,{children:"32px"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--page-layout-padding-bottom"})," — нижний отступ. <= 1280px: ",e.jsx(n.code,{children:"24px"}),", >1280px: ",e.jsx(n.code,{children:"32px"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"стили",children:"Стили"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`display: flex;
max-width: 1920px;
padding-top: var(--page-layout-padding-top);
margin-inline: auto;
min-height: calc(100dvh - var(--page-layout-padding-top));
padding-inline: var(--page-layout-padding-inline);
padding-bottom: var(--page-layout-padding-bottom);
box-sizing: border-box;
`})})]})}function h(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{h as default};
