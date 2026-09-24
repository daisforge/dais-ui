import{j as n}from"./react-D2T61mpp.js";import{cg as r,ch as o,ca as a}from"./vendor-nNOZyNLP.js";import{P as s}from"./PageLayout.stories-Bnyq-dbf.js";import"./react-is-Clcustum.js";import"./styled-components-Bm5ATt6S.js";import"./@tanstack/react-virtual-CKihwRsW.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-Cqrt6fUK.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-WHWAT9BU.js";import"./LeftPanel-CCzLvcZE.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./@salutejs/sdds-finai-D4KNbPPv.js";import"./utils-CLSMcwW8.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-C9x_65-Y.js";import"./PageTitle-C7upS6cH.js";import"./AnalyticalWidget-CrgSXtaY.js";import"./IconButton-BvgWrmFd.js";import"./Collapse-C4JYT3GB.js";import"./SplitView-7gCTgerU.js";import"./ModalDF-Cw5aERL2.js";import"./Container-BRcoOAH1.js";import"./TextField-hqaOplq4.js";import"./sharedUtilsInputs-DnpxamI4.js";import"./Widget-BCf67UPK.js";import"./Layout-CPEcpxdW.js";import"./PageLayout-D5n8Rp17.js";function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:s,name:"Docs"}),`
`,n.jsx(e.h1,{id:"pagelayout",children:"PageLayout"}),`
`,n.jsxs(e.p,{children:["Обёртка страницы микрофронта. Управляет отступом под fixed-шапку (",n.jsx(e.code,{children:"padding-top"}),"), боковыми/нижними паддингами по брейкпоинтам и центрированием контента."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отступ под fixed-шапку"})," — ",n.jsx(e.code,{children:"padding-top"})," по CSS-переменной ",n.jsx(e.code,{children:"--global-header-height"})," (fallback 72px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Центрирование"})," — ",n.jsx(e.code,{children:"max-width: 1920px"})," + ",n.jsx(e.code,{children:"margin-inline: auto"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Адаптивные паддинги"})," — боковые и нижние отступы меняются по брейкпоинтам"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"min-height: 100dvh"})," — страница всегда занимает минимум один экран"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"display: flex"})," — дочерний контент автоматически растягивается на всю высоту"]}),`
`]}),`
`,n.jsx(e.h2,{id:"типичные-композиции",children:"Типичные композиции"}),`
`,n.jsx(e.h3,{id:"pagelayout--layout",children:"PageLayout + Layout"}),`
`,n.jsx(e.p,{children:"Базовый сценарий — обёртка страницы с сеткой контента:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<PageLayout>
  <Layout variant="V1_1" headerSlot={...} mainSlot={...} />
</PageLayout>
`})}),`
`,n.jsx(e.h3,{id:"pagelayout--splitview",children:"PageLayout + SplitView"}),`
`,n.jsx(e.p,{children:"SplitView внутри PageLayout. Sidebar ограничен шириной контейнера, не прижимается к краю viewport:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<PageLayout>
  <SplitView
    mainContent={
      <Layout variant="V1_1" headerSlot={...} mainSlot={...} />
    }
    sidebar={{ content: ..., isOpened: sidebarOpen }}
  />
</PageLayout>
`})}),`
`,n.jsx(e.h3,{id:"pagelayout--splitview--leftpanel",children:"PageLayout + SplitView + LeftPanel"}),`
`,n.jsxs(e.p,{children:["LeftPanel — часть ",n.jsx(e.code,{children:"mainSlot"})," внутри Layout:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<PageLayout>
  <SplitView
    mainContent={
      <Layout
        variant="V1_1"
        headerSlot={...}
        mainSlot={
          <FlexContainer>
            <LeftPanel ... />
            <MainArea>контент</MainArea>
          </FlexContainer>
        }
      />
    }
    sidebar={{ content: ..., isOpened: sidebarOpen }}
  />
</PageLayout>
`})}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"PageLayout"})," — это ",n.jsx(e.strong,{children:"viewport-level"})," обёртка. Используйте как корневой контейнер страницы, внутри которого размещается ",n.jsx(e.code,{children:"Layout"})," и другие композиционные компоненты"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PageLayout"})," отвечает за отступы от шапки, padding краёв и центрирование (",n.jsx(e.code,{children:"max-width"}),"). Используется 1 раз на страницу"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout"})," отвечает за колонки, гаттеры, хедер контента. Размещается внутри ",n.jsx(e.code,{children:"PageLayout"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["Описание типов и CSS-переменных — в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pagelayout-api--docs",children:"API"}),"."]}),`
`,n.jsx(a,{})]})}function X(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{X as default};
