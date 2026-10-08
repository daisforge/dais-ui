import{j as e}from"./react-D2T61mpp.js";import{cg as s,ch as t,ca as d}from"./vendor-DXdfnwad.js";import{S as c}from"./SplitView.stories-Ddg0i4vE.js";import"./react-is-Clcustum.js";import"./styled-components-C8QokrFs.js";import"./@tanstack/react-virtual-cZI7JMKe.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-jGu6yxPb.js";import"./storySourceDoc-tVKyHcEN.js";import"./SplitView-BtIAXBO3.js";import"./utils-DPjVldhU.js";import"./constants-rCJTDDk_.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./ModalDF-ovr4P_xJ.js";import"./@salutejs/sdds-finai-DV8XcQV0.js";import"./@salutejs/plasma-icons-EjQFeqZJ.js";import"./Container-DO-CKbnk.js";import"./Box-CA0XSL2K.js";import"./Table-BCrtpPFY.js";import"./FiltersActions-aJaeqtti.js";import"./IconButton-Bl2UBdAa.js";import"./TextField-VTRFhKVE.js";import"./sharedUtilsInputs-CuFk2zN1.js";import"./AiAgentPopup-BLFPDkW5.js";import"./TextArea-yHmHiOj9.js";import"./sharedUtilsResizable-CAZWAHxi.js";import"./Collapse-fFVUKsg0.js";import"./react-data-grid-B52RWvTe.js";import"./TableTabs-3MefgBAM.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-6sr9gTuy.js";import"./ListOfFilters-BgvN0Ngs.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BKvjTwEP.js";import"./EmptyState-DfxP_Lxo.js";import"./MassActions-C9XZXzdZ.js";import"./Autocomplete-DfjSvcGN.js";import"./Widget-DZ5DobR9.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(d,{})]})}function K(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{K as default};
