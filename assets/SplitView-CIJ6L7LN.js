import{j as e}from"./react-D2T61mpp.js";import{c6 as s,c7 as d,c0 as t}from"./vendor-DV2KdZ5r.js";import{S as c}from"./SplitView.stories-DY3VfKRz.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-BH9qsOBR.js";import"./utils-DLEIaJN_.js";import"./constants-DM2G2kGu.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-D8MMzcRn.js";import"./@salutejs/sdds-finai-Bp-ifuS6.js";import"./@salutejs/plasma-icons-BcApNSC-.js";import"./Container-B0IxlUZC.js";import"./Box-C4aqnFI9.js";import"./Table-BPh9f4kZ.js";import"./FiltersActions-CFPOXd2h.js";import"./IconButton-BG1jP3Ty.js";import"./TextField-BqeZw0zh.js";import"./sharedUtilsInputs-BiAZZYsy.js";import"./AnalyticalWidget-BsHPaG1B.js";import"./Collapse-v3xqndDb.js";import"./react-data-grid-5SLMzt16.js";import"./TableTabs-v6GgVmE7.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Bp95cg8O.js";import"./ListOfFilters-B-t36gbw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DCefPJlt.js";import"./EmptyState-FbGaLYDP.js";import"./MassActions-CM35pIsd.js";import"./Autocomplete-DeBUn4cV.js";import"./Widget-C96yx-6_.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Docs"}),`
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
