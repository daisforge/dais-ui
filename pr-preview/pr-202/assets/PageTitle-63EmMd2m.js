import{j as e}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-2C5_55Sm.js";import{M as c,S as l}from"./WithTooltip-KJL26V4Q-ChrN_QIK.js";import{P as r}from"./PageTitle.stories-CdUetU3d.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./preload-helper-KkJ3rXAN.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./storySourceDoc-tVKyHcEN.js";import"./PageTitle-CJwUSOff.js";import"./TypographyWithAutoTooltip-1fg4vpbs.js";import"./Typography-oCC8R11s.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BrITifw3.js";function t(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Docs"}),`
`,e.jsx(i.h1,{id:"pagetitle",children:"PageTitle"}),`
`,e.jsx(i.p,{children:"Компонент заголовка страницы с опциональными breadcrumbs, кнопкой «назад», подзаголовком и блоком действий."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Опциональные breadcrumbs с настраиваемым размером (по умолчанию ",e.jsx(i.code,{children:"size='m'"}),")"]}),`
`,e.jsxs(i.li,{children:["Кнопка «назад» слева от заголовка (",e.jsx(i.code,{children:"showBackButton"}),", ",e.jsx(i.code,{children:"onBackClick"}),")"]}),`
`,e.jsx(i.li,{children:"Заголовок и подзаголовок с автоматическим тултипом при обрезке текста"}),`
`,e.jsxs(i.li,{children:["Кастомный слот правее заголовка (",e.jsx(i.code,{children:"titleSlot"}),"), обычно для Badge. Стоит сразу за текстом заголовка, а не за подзаголовком, и выровнен по центру строки заголовка"]}),`
`,e.jsxs(i.li,{children:["Правый блок действий (",e.jsx(i.code,{children:"rightSlot"}),"), прижатый к правому краю"]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Компонент всегда использует ",e.jsx(i.code,{children:"TypographyWithAutoTooltip"})," для ",e.jsx(i.code,{children:"title"})," и ",e.jsx(i.code,{children:"subtitle"})]}),`
`,e.jsxs(i.li,{children:["Если ",e.jsx(i.code,{children:"tooltipText"})," не передан, текстом тултипа используется сам ",e.jsx(i.code,{children:"title"})," или ",e.jsx(i.code,{children:"subtitle"})]}),`
`,e.jsxs(i.li,{children:["Слоты ",e.jsx(i.code,{children:"titleSlot"})," и ",e.jsx(i.code,{children:"rightSlot"})," принимают ",e.jsx(i.code,{children:"ReactNode"})," или callback с размерами для адаптива"]}),`
`,e.jsxs(i.li,{children:["По умолчанию адаптив на viewport ",e.jsx(i.code,{children:"<= 1280px"})," включен; временно отключить его можно через deprecated-проп ",e.jsx(i.code,{children:"disableMediaAdaptive"})]}),`
`,e.jsxs(i.li,{children:["Код примеров отображается через ",e.jsx(i.code,{children:"storySourceDoc"}),", вкладка ",e.jsx(i.code,{children:"Show code"})," синхронизирована с реализацией"]}),`
`]}),`
`,e.jsx(i.h2,{id:"использование-адаптивных-слотов",children:"Использование адаптивных слотов"}),`
`,e.jsxs(i.p,{children:["Если слот не должен менять размеры, передавайте обычный ",e.jsx(i.code,{children:"ReactNode"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<PageTitle
  title="Заголовок страницы"
  titleSlot={<Badge size="m" view="default" text="Черновик" />}
/>
`})}),`
`,e.jsxs(i.p,{children:["Если в слоте есть кнопки, которые должны уменьшаться на 1280px, передавайте callback и используйте ",e.jsx(i.code,{children:"buttonSize"})," из аргумента:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<PageTitle
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
`,e.jsx(i.p,{children:"Размер, который приходит в callback:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`buttonSize
| viewport <= 1280px | viewport > 1280px |
| xs                 | s                 |
`})}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pagetitle-api--docs",children:"PageTitle API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function A(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{A as default};
