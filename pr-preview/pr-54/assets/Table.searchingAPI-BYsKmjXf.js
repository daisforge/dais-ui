import{j as n}from"./react-D2T61mpp.js";import{c6 as t,c7 as r}from"./vendor-1keUuV-j.js";import{T as o}from"./TypeSourceViewer-BaYu7dgG.js";import"./react-is-Clcustum.js";import"./styled-components-D2iiFT0j.js";import"./tslib-De9GV7Vy.js";function s(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Локальные компоненты/Table/Searching/API"}),`
`,n.jsx(e.h1,{id:"searching-api",children:"Searching API"}),`
`,n.jsx(e.h2,{id:"searchingprops",children:"SearchingProps"}),`
`,n.jsx(o,{filePath:"packages/ui-kit/src/components/Table/feature-searching/types.ts",typeName:"SearchingProps",language:"ts"}),`
`,n.jsx(e.h2,{id:"searchautocompleteconfig",children:"SearchAutocompleteConfig"}),`
`,n.jsx(o,{filePath:"packages/ui-kit/src/components/Table/feature-searching/types.ts",typeName:"SearchAutocompleteConfig",language:"ts"}),`
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
`})})]})}function m(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}export{m as default};
