import{j as n}from"./react-UEdzNlUe.js";import{df as a}from"./vendor-DTHFTCxs.js";import{M as i}from"./WithTooltip-KJL26V4Q-BLbQjfn-.js";import{T as t}from"./TypeSourceViewer-Clp7RBmJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-EhFzO87Y.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./types.string-DScL2uB7.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Локальные компоненты/Table/Searching/API"}),`
`,n.jsx(e.h1,{id:"searching-api",children:"Searching API"}),`
`,n.jsx(e.h2,{id:"searchingprops",children:"SearchingProps"}),`
`,n.jsx(t,{filePath:"packages/ui-kit/src/components/Table/feature-searching/types.ts",typeName:"SearchingProps",language:"ts"}),`
`,n.jsx(e.h2,{id:"searchautocompleteconfig",children:"SearchAutocompleteConfig"}),`
`,n.jsx(t,{filePath:"packages/ui-kit/src/components/Table/feature-searching/types.ts",typeName:"SearchAutocompleteConfig",language:"ts"}),`
`,n.jsx(e.h2,{id:"примеры-конфигурации",children:"Примеры конфигурации"}),`
`,n.jsx(e.h3,{id:"базовый-поиск",children:"Базовый поиск"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Table
  tableConfig={{
    searching: {
      enabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,n.jsx(e.h3,{id:"серверный-поиск",children:"Серверный поиск"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Table
  tableConfig={{
    searching: {
      enabled: true,
      manualSearching: true,
      onDebouncedChange: (value) => fetchData({ search: value }),
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,n.jsx(e.h3,{id:"автокомплит-с-историей",children:"Автокомплит с историей"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Table
  tableConfig={{
    searching: {
      enabled: true,
      autocomplete: {
        suggestions: [{ label: 'Запрос 1' }, { label: 'Запрос 2' }],
        threshold: 0,
        listMaxHeight: '200px',
        onSuggestionSelect: (item) => console.log(item.label),
      },
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})})]})}function S(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{S as default};
