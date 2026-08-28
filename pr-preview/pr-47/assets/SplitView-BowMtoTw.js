import{j as e}from"./react-D2T61mpp.js";import{c6 as s,c7 as d,c0 as t}from"./vendor-D0k-bL4H.js";import{S as c}from"./SplitView.stories-CMrZ5x1k.js";import"./react-is-Clcustum.js";import"./styled-components-D8vUpZ79.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-C3yW-upO.js";import"./utils-BsIKPznQ.js";import"./constants-OzzdGdGS.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-C_82wVqE.js";import"./@salutejs/sdds-finai-9f2Z3gSc.js";import"./@salutejs/plasma-icons-B2gARaIt.js";import"./Container-CBfUZoId.js";import"./Box-oT8vEc87.js";import"./Table-Bo3uZOST.js";import"./FiltersActions-DFYvS86u.js";import"./IconButton-BwsXIhiD.js";import"./TextField-D9SAbnRq.js";import"./sharedUtilsInputs-BpFlkwj3.js";import"./AnalyticalWidget-C_YOIqNy.js";import"./Collapse-DGqYHNo_.js";import"./react-data-grid-p-wBMMSv.js";import"./TableTabs-bchgDMaK.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-WI14EhMn.js";import"./ListOfFilters-CTJFIH40.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C94N8voO.js";import"./EmptyState-CzQ_YjnV.js";import"./MassActions-D1nnBd7w.js";import"./Autocomplete-B7lvUJkZ.js";import"./Widget-BhCY1aMs.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Docs"}),`
`,e.jsx(i.h1,{id:"splitview",children:"SplitView"}),`
`,e.jsx(i.p,{children:"Контейнер с возможностью разделения основного контента и дополнительного в боковом меню."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Resize через разделитель между контентами (зажатие и движение курсора)"}),`
`,e.jsx(i.li,{children:"Полноэкранный режим для sidebar"}),`
`,e.jsx(i.li,{children:"Скрытие sidebar полностью"}),`
`,e.jsx(i.li,{children:"Гибкая настройка ширины sidebar в процентах и пикселях"}),`
`,e.jsxs(i.li,{children:["Колбек ",e.jsx(i.code,{children:"onResize"})," для отслеживания размеров"]}),`
`]}),`
`,e.jsx(i.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"--main-width"})," — ширина основного блока"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"--separator-width"})," — ширина разделителя"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"--sidebar-width"})," — ширина sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"--sidebar-width-in-px"})," — ширина sidebar в пикселях"]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Объект ",e.jsx(i.code,{children:"splitViewClassNames"})," доступен для импорта. Включает классы: ",e.jsx(i.code,{children:"container"}),", ",e.jsx(i.code,{children:"separator"}),", ",e.jsx(i.code,{children:"separatorButton"}),", ",e.jsx(i.code,{children:"mainBlock"}),", ",e.jsx(i.code,{children:"sidebarBlock"})," и другие"]}),`
`,e.jsx(i.li,{children:"Как контентный заполнитель для sidebar рекомендуется использовать компонент Widget с его compound-компонентами"}),`
`,e.jsxs(i.li,{children:["При использовании внутри PageLayout установите ",e.jsx(i.code,{children:"insidePageLayout={true}"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"sidebar.content"})," принимает ",e.jsx(i.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,e.jsxs(i.li,{children:["По умолчанию адаптив на viewport ",e.jsx(i.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",e.jsx(i.code,{children:"disableMediaAdaptive"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"использование-адаптивного-sidebarcontent",children:"Использование адаптивного sidebar.content"}),`
`,e.jsxs(i.p,{children:["Если контент sidebar не должен менять размеры, передавайте обычный ",e.jsx(i.code,{children:"ReactNode"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<SplitView
  mainContent={<Content />}
  sidebar={{
    isOpened: true,
    content: <Widget />,
  }}
/>
`})}),`
`,e.jsxs(i.p,{children:["Если внутри sidebar есть Avatar, который должен уменьшаться на 1280px, передавайте callback и используйте ",e.jsx(i.code,{children:"avatarSize"})," из аргумента:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<SplitView
  mainContent={<Content />}
  sidebar={{
    isOpened: true,
    content: ({ avatarSize }) => (
      <Widget>
        <Widget.Header
          title="Заголовок"
          titleLeftSlot={<Avatar size={avatarSize} name="User" />}
        />
      </Widget>
    ),
  }}
/>
`})}),`
`,e.jsx(i.p,{children:"Размер, который приходит в callback:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`avatarSize
| viewport <= 1280px  | viewport > 1280px |
| m                   | l                 |
`})}),`
`,e.jsx(i.p,{children:"Дефолтный min-width sidebar:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`sidebar min-width
| viewport <= 1280px | viewport > 1280px |
| 440px              | 600px             |
`})}),`
`,e.jsxs(i.p,{children:["Описание типов — в разделе ",e.jsx(i.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-splitview-api--docs",children:"API"}),"."]}),`
`,e.jsx(t,{})]})}function q(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{q as default};
