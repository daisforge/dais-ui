import{j as e}from"./react-D2T61mpp.js";import{cf as t,cg as s}from"./vendor-BBRwy0t2.js";import"./react-is-Clcustum.js";import"./styled-components-CfSii9H4.js";import"./@tanstack/react-virtual-BGPVwFH0.js";import"./tslib-DoU9Jm1N.js";function l(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Локальные компоненты/TableCanvas/IsLoading/API"}),`
`,e.jsx(n.h1,{id:"isloading-api",children:"IsLoading API"}),`
`,e.jsx(n.h2,{id:"tableconfigisloading",children:"tableConfig.isLoading"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`isLoading?: boolean | { boolean: boolean; skeletonRowsCount: number };
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"boolean"})})," — простой флаг загрузки, количество skeleton-строк определяется автоматически"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"{ boolean, skeletonRowsCount }"})})," — загрузка с явным указанием количества skeleton-строк"]}),`
`]}),`
`,e.jsx(n.h2,{id:"tableconfigloadingoverlay",children:"tableConfig.loadingOverlay"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`loadingOverlay?: {
  active?: boolean; // default: true
  mode?: 'replace' | 'cover'; // default: 'replace'
  spinner?: ReactNode; // default: <Spinner view="secondary" size="l" />
  title?: string; // default: 'Загрузка таблицы', для mode: 'cover' — 'Таблица обновляется'
  subtitle?: string; // default: ''
  showSubtitleDelay?: number; // default: 10000 (10 секунд)
};
`})})]})}function g(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{g as default};
