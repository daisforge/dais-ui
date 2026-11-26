import{j as n}from"./react-UEdzNlUe.js";import{df as r}from"./vendor-BS4HA21f.js";import{M as o,S as a}from"./WithTooltip-KJL26V4Q-DGSPfzzr.js";import{P as s}from"./PageLayout.stories-CY4mKgK1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-i6nmInMm.js";import"./@tanstack/react-virtual-Do9j7-rI.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-Dp_h01wN.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BL0rBjAw.js";import"./LeftPanel-BLQBPkrF.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-CQUafN5B.js";import"./utils-BHv61rGQ.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CXvNxvo1.js";import"./PageTitle-CTojZ3aV.js";import"./Typography-COUeQAIi.js";import"./SplitView-DJQM1qFg.js";import"./ModalDF-BBOzTqb6.js";import"./Container-C2hOtj2c.js";import"./TextField-kUI-NAJ6.js";import"./sharedUtilsInputs-BnPXibK3.js";import"./Widget-BBstWB1a.js";import"./IconButton-CfYF5BDV.js";import"./Layout-ImF2lFSp.js";import"./PageLayout-Csmq7lsX.js";function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:s,name:"Docs"}),`
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
`,n.jsx(a,{})]})}function z(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{z as default};
