import{j as e}from"./react-D2T61mpp.js";import{c2 as l,c3 as d,c4 as i}from"./vendor-Bxn4nphO.js";import"./react-is-Clcustum.js";import"./styled-components-k3SMx5Eo.js";import"./tslib-De9GV7Vy.js";function c(n){const s={code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Как работать с MCP"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"как-работать-с-mcp",children:"Как работать с MCP"}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"@daisforge/ui-mcp"})," — MCP-сервер для ",e.jsx(s.code,{children:"@daisforge/ui"}),". Работает по stdio и даёт кодовому агенту точные пропсы, типы, категории (wrapper/composition/standalone/form), примеры кода и фичи (TableCanvas/Table) для 260+ компонентов библиотеки (атомарные и шаблонные). Работает полностью оффлайн, сеть в рантайме не используется."]})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"быстрый-старт",children:"Быстрый старт"}),e.jsxs(s.p,{children:["Установите ",e.jsx(s.code,{children:"@daisforge/ui"})," вместе с MCP-сервером:"]}),e.jsx(i,{language:"bash",dark:!0,format:!1,code:"npm install @daisforge/ui @daisforge/ui-mcp"}),e.jsxs(s.p,{children:["Если агент просит указать ",e.jsx(s.code,{children:"command"}),"/",e.jsx(s.code,{children:"args"})," отдельно, используйте такой конфиг (обычно ",e.jsx(s.code,{children:".mcp.json"})," в корне проекта):"]}),e.jsx(i,{language:"json",dark:!0,format:"dedent",code:`
        {
          "mcpServers": {
            "daisforge-ui": {
              "command": "node",
              "args": ["node_modules/@daisforge/ui-mcp/dist/server.js"]
            }
          }
        }
      `})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"какие-инструменты-доступны-агенту",children:"Какие инструменты доступны агенту"}),e.jsx(s.p,{children:"После подключения MCP-сервер отдаёт агенту следующие инструменты:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list_components"})," — список компонентов с фильтрами по типу (wrapper/composition/standalone/form), категории, scope."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"search_components"})," — поиск компонентов и их фичей по свободному запросу (рус/англ), включая disambiguation-подсказки (например «таблица» → TableCanvas)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_component"})," — компактная карточка компонента: тип, категория, hint, importStatement, имена пропсов, compound-части, список фичей."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_component_props"})," — полные пропсы компонента (собственные + унаследованные от атомарного ",e.jsx(s.code,{children:"@salutejs/sdds-finai"})," компонента)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_component_examples"})," — примеры кода компонента."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list_features"})," — список фичей компонента (актуально для TableCanvas/Table — десятки фичей вроде Filtering/Sorting/CopyPasteFill)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_feature"})," — документация и API конкретной фичи компонента."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_feature_examples"})," — примеры кода конкретной фичи."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list_categories"})," — категории компонентов библиотеки с количеством по типам."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_installation_guide"})," — гайд по установке и подключению библиотеки."]}),`
`]})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"что-можно-спрашивать-у-агента",children:"Что можно спрашивать у агента"}),e.jsx(s.p,{children:"После подключения MCP-сервера агенту можно задавать запросы в таком формате:"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Какие пропсы есть у DrawerDF?"}),`
`,e.jsx(s.li,{children:"Покажи примеры использования TableCanvas"}),`
`,e.jsx(s.li,{children:'Какие компоненты есть в категории "Локальные компоненты"?'}),`
`,e.jsx(s.li,{children:"Какие фичи поддерживает TableCanvas и как включить Filtering?"}),`
`,e.jsx(s.li,{children:"Как установить и подключить @daisforge/ui в проект?"}),`
`]})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }
  `})]})}function j(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{j as default};
