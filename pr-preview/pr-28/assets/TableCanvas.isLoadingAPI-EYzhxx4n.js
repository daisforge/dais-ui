import{j as n}from"./react-D2T61mpp.js";import{c2 as l,c3 as t}from"./vendor-Bxn4nphO.js";import"./react-is-Clcustum.js";import"./styled-components-k3SMx5Eo.js";import"./tslib-De9GV7Vy.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Локальные компоненты/TableCanvas/IsLoading/API"}),`
`,n.jsx(e.h1,{id:"isloading-api",children:"IsLoading API"}),`
`,n.jsx(e.h2,{id:"tableconfigisloading",children:"tableConfig.isLoading"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`isLoading?: boolean | { boolean: boolean; skeletonRowsCount: number };
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"boolean"})})," — простой флаг загрузки, количество skeleton-строк определяется автоматически"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"{ boolean, skeletonRowsCount }"})})," — загрузка с явным указанием количества skeleton-строк"]}),`
`]}),`
`,n.jsx(e.h2,{id:"tableconfigloadingoverlay",children:"tableConfig.loadingOverlay"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`loadingOverlay?: {
  active?: boolean; // default: true
  spinner?: ReactNode; // default: <Spinner view="secondary" size="36" />
  title?: string; // default: 'Загрузка таблицы'
  subtitle?: string; // default: ''
  showSubtitleDelay?: number; // default: 10000 (10 секунд)
};
`})})]})}function u(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{u as default};
