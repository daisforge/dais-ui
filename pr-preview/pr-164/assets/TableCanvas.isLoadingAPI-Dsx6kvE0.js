import{j as e}from"./react-B60MRyL7.js";import{ck as i}from"./vendor-qSGXd1Us.js";import{M as l}from"./WithTooltip-KJL26V4Q-Bf1S2iVs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BH12kIqh.js";import"./@tanstack/react-virtual-CQvpRoFv.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-Cth5UJp1.js";import"./@salutejs/plasma-icons-Bl-ri76g.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Локальные компоненты/TableCanvas/IsLoading/API"}),`
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
`})})]})}function b(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{b as default};
