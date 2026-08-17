import{j as e}from"./react-D2T61mpp.js";import{c2 as c,c3 as o,bY as s}from"./vendor-DvO6Ud8q.js";import{P as l}from"./PageTitle.stories-CnYLE5A9.js";import"./react-is-Clcustum.js";import"./styled-components-peerelvn.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./PageTitle-R3gnxjVL.js";import"./AnalyticalWidget-CU0fGKHE.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/sdds-finai-DNM8nTh9.js";import"./utils-C3gQRkR2.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./IconButton-CgOIaK3y.js";import"./@salutejs/plasma-icons-BHcaROEp.js";import"./Box-CTSbJM1M.js";import"./Collapse-u4wVL0Hd.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"pagetitle",children:"PageTitle"}),`
`,e.jsx(n.p,{children:"Компонент заголовка страницы с опциональными breadcrumbs, кнопкой «назад», подзаголовком и блоком действий."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Опциональные breadcrumbs с настраиваемым размером (по умолчанию ",e.jsx(n.code,{children:"size='m'"}),")"]}),`
`,e.jsxs(n.li,{children:["Кнопка «назад» слева от заголовка (",e.jsx(n.code,{children:"showBackButton"}),", ",e.jsx(n.code,{children:"onBackClick"}),")"]}),`
`,e.jsx(n.li,{children:"Заголовок и подзаголовок с автоматическим тултипом при обрезке текста"}),`
`,e.jsxs(n.li,{children:["Кастомный слот правее заголовка (",e.jsx(n.code,{children:"titleSlot"}),")"]}),`
`,e.jsxs(n.li,{children:["Правый блок действий (",e.jsx(n.code,{children:"rightSlot"}),"), прижатый к правому краю"]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Компонент всегда использует ",e.jsx(n.code,{children:"TypographyWithAutoTooltip"})," для ",e.jsx(n.code,{children:"title"})," и ",e.jsx(n.code,{children:"subtitle"})]}),`
`,e.jsxs(n.li,{children:["Если ",e.jsx(n.code,{children:"tooltipText"})," не передан, текстом тултипа используется сам ",e.jsx(n.code,{children:"title"})," или ",e.jsx(n.code,{children:"subtitle"})]}),`
`,e.jsxs(n.li,{children:["Слоты ",e.jsx(n.code,{children:"titleSlot"})," и ",e.jsx(n.code,{children:"rightSlot"})," принимают ",e.jsx(n.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,e.jsxs(n.li,{children:["По умолчанию адаптив на viewport ",e.jsx(n.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",e.jsx(n.code,{children:"disableMediaAdaptive"})]}),`
`,e.jsxs(n.li,{children:["Код примеров отображается через ",e.jsx(n.code,{children:"storySourceDoc"}),", вкладка ",e.jsx(n.code,{children:"Show code"})," синхронизирована с реализацией"]}),`
`]}),`
`,e.jsx(n.h2,{id:"использование-адаптивных-слотов",children:"Использование адаптивных слотов"}),`
`,e.jsxs(n.p,{children:["Если слот не должен менять размеры, передавайте обычный ",e.jsx(n.code,{children:"ReactNode"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<PageTitle
  title="Заголовок страницы"
  titleSlot={
    <Button size="xs" view="secondary">
      Действие
    </Button>
  }
/>
`})}),`
`,e.jsxs(n.p,{children:["Если в слоте есть кнопки, которые должны уменьшаться на 1280px, передавайте callback и используйте ",e.jsx(n.code,{children:"buttonSize"})," из аргумента:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<PageTitle
  title="Заголовок страницы"
  rightSlot={({ buttonSize }) => (
    <Flow mainAxisGap={8}>
      <Button size={buttonSize} view="secondary">
        Отмена
      </Button>
      <Button size={buttonSize} view="accent">
        Сохранить
      </Button>
    </Flow>
  )}
/>
`})}),`
`,e.jsx(n.p,{children:"Размер, который приходит в callback:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`buttonSize
| viewport <= 1280px | viewport > 1280px |
| xs                 | s                 |
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pagetitle-api--docs",children:"PageTitle API"})]}),`
`]}),`
`,e.jsx(s,{})]})}function T(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{T as default};
