import{j as e}from"./react-DYHuXpTF.js";import{dd as i}from"./vendor-DQaMhftP.js";import{M as l}from"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Локальные компоненты/TableCanvas/IsLoading/API"}),`
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
`})})]})}function f(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{f as default};
