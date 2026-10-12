import{j as i}from"./react-D2T61mpp.js";import{cg as t,ch as s,ca as d}from"./vendor-noKLAXN_.js";import{S as o}from"./SplitView.stories-Ik1XE2rp.js";import"./react-is-Clcustum.js";import"./styled-components-DsU3CkJN.js";import"./@tanstack/react-virtual-ig-F83uS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-BeVJ3j7w.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-BGsXK9hy.js";import"./utils-DLtG-Te-.js";import"./constants-BMyuY-FV.js";import"./@salutejs/sdds-themes-Cf5iJiw2.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-ldguPhZm.js";import"./@salutejs/sdds-finai-Clok5FAG.js";import"./@salutejs/plasma-icons-QFvtg1-5.js";import"./Container-iTfK-Dr4.js";import"./Box-CN128sBO.js";import"./Table-Dd0lYFQC.js";import"./FiltersActions-DYZGbHuA.js";import"./IconButton-C85mx186.js";import"./TextField-C3fWSe6C.js";import"./sharedUtilsInputs-C_Cv9hqb.js";import"./AiAgentPopup-CYN8WGkp.js";import"./TextArea-pBQSvsEG.js";import"./sharedUtilsResizable-D10n0Xmq.js";import"./Collapse-H2XGdmeX.js";import"./react-data-grid-CmKMVQyO.js";import"./TableTabs-CLaHsbx8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-D7XH6J8Z.js";import"./@glideappsfinal/glide-data-grid-DMPhaI5m.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-hs83Lol-.js";import"./ListOfFilters-DMj5O6Fm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-GhC7b36o.js";import"./EmptyState-CraKoVrH.js";import"./MassActions-Cybk3zsC.js";import"./Autocomplete-DKHt-6T2.js";import"./Widget-GlvEdelF.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:o,name:"Docs"}),`
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
