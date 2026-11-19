import{j as e}from"./react-DNGZQ4GM.js";import{ck as a}from"./vendor-BbbJ9Z83.js";import{M as t}from"./WithTooltip-KJL26V4Q-ZJQwZcgM.js";import{T as d}from"./TypeSourceViewer-FeNqLfem.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-D_Edv4_h.js";import"./@tanstack/react-virtual-CcNjsb-5.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CuyfXGnQ.js";import"./@salutejs/plasma-icons-BJIYJCV4.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Композиции/PageLayout/API"}),`
`,e.jsx(n.h1,{id:"pagelayout-api",children:"PageLayout API"}),`
`,e.jsx(n.h2,{id:"pagelayoutprops",children:"PageLayoutProps"}),`
`,e.jsx(d,{language:"ts",filePath:"packages/ui-kit/src/layouts/PageLayout/PageLayout.types.ts",typeName:"PageLayoutProps"}),`
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
`})})]})}function b(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{b as default};
