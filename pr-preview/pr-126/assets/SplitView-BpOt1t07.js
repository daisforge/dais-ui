import{j as i}from"./react-D2T61mpp.js";import{cf as t,cg as s,c9 as d}from"./vendor-2EFGsDAW.js";import{S as o}from"./SplitView.stories-B0n3obTr.js";import"./react-is-Clcustum.js";import"./styled-components-CkGUZS6l.js";import"./@tanstack/react-virtual-CgKIdlLV.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-BeVJ3j7w.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-C-O3KMcA.js";import"./utils-DorKzGa8.js";import"./constants-CUAU9RhA.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-TDpykWOl.js";import"./@salutejs/sdds-finai-Df8ub7bm.js";import"./@salutejs/plasma-icons-DjOk_Iqv.js";import"./Container-ZsQ1M9y3.js";import"./Box-Cu8qm5st.js";import"./Table-CYJ23fFg.js";import"./FiltersActions-BdWuyKp2.js";import"./IconButton-BPBecMcD.js";import"./TextField-BWWrAgpe.js";import"./sharedUtilsInputs-dvBzx1lw.js";import"./AiAgentPopup-C5VcNz6M.js";import"./TextArea-8Pmmijw8.js";import"./sharedUtilsResizable-Vc7eKtE8.js";import"./Collapse-rAELqX1J.js";import"./react-data-grid-BZuVg6KG.js";import"./TableTabs-BW7SYtuy.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-zF25t3KY.js";import"./@glideappsfinal/glide-data-grid-D5hfjlrt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-tjs8-Xha.js";import"./ListOfFilters-IXh8xjxR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-rX7NuMgS.js";import"./EmptyState-DgVTGC82.js";import"./MassActions-CamMel1G.js";import"./Autocomplete-Dk7pnfyL.js";import"./Widget-CojbBZXG.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:o,name:"Docs"}),`
`,i.jsx(e.h1,{id:"splitview",children:"SplitView"}),`
`,i.jsx(e.p,{children:"Контейнер с возможностью разделения основного контента и дополнительного в боковом меню."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Resize через разделитель между контентами (зажатие и движение курсора)"}),`
`,i.jsx(e.li,{children:"Полноэкранный режим для sidebar"}),`
`,i.jsx(e.li,{children:"Скрытие sidebar полностью"}),`
`,i.jsx(e.li,{children:"Гибкая настройка ширины sidebar в процентах и пикселях"}),`
`,i.jsxs(e.li,{children:["Колбек ",i.jsx(e.code,{children:"onResize"})," для отслеживания размеров"]}),`
`]}),`
`,i.jsx(e.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--main-width"})," — ширина основного блока"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--separator-width"})," — ширина разделителя"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--sidebar-width"})," — ширина sidebar"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"--sidebar-width-in-px"})," — ширина sidebar в пикселях"]}),`
`]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Объект ",i.jsx(e.code,{children:"splitViewClassNames"})," доступен для импорта. Включает классы: ",i.jsx(e.code,{children:"container"}),", ",i.jsx(e.code,{children:"separator"}),", ",i.jsx(e.code,{children:"separatorButton"}),", ",i.jsx(e.code,{children:"mainBlock"}),", ",i.jsx(e.code,{children:"sidebarBlock"})," и другие"]}),`
`,i.jsx(e.li,{children:"Как контентный заполнитель для sidebar рекомендуется использовать компонент Widget с его compound-компонентами"}),`
`,i.jsxs(e.li,{children:["При использовании внутри PageLayout установите ",i.jsx(e.code,{children:"insidePageLayout={true}"})]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"sidebar.content"})," принимает ",i.jsx(e.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,i.jsxs(e.li,{children:["По умолчанию адаптив на viewport ",i.jsx(e.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",i.jsx(e.code,{children:"disableMediaAdaptive"})]}),`
`]}),`
`,i.jsx(e.h2,{id:"использование-адаптивного-sidebarcontent",children:"Использование адаптивного sidebar.content"}),`
`,i.jsxs(e.p,{children:["Если контент sidebar не должен менять размеры, передавайте обычный ",i.jsx(e.code,{children:"ReactNode"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`<SplitView
  mainContent={<Content />}
  sidebar={{
    isOpened: true,
    content: <Widget />,
  }}
/>
`})}),`
`,i.jsxs(e.p,{children:["Если внутри sidebar есть Avatar, который должен уменьшаться на 1280px, передавайте callback и используйте ",i.jsx(e.code,{children:"avatarSize"})," из аргумента:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`<SplitView
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
`,i.jsx(e.p,{children:"Размер, который приходит в callback:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`avatarSize
| viewport <= 1280px  | viewport > 1280px |
| m                   | l                 |
`})}),`
`,i.jsx(e.p,{children:"Дефолтный min-width sidebar:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`sidebar min-width
| viewport <= 1280px | viewport > 1280px |
| 440px              | 600px             |
`})}),`
`,i.jsxs(e.p,{children:["Описание типов — в разделе ",i.jsx(e.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-splitview-api--docs",children:"API"}),"."]}),`
`,i.jsx(d,{})]})}function Y(n={}){const{wrapper:e}={...t(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{Y as default};
