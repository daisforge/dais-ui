import{j as e}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BZ4xHhIu.js";import{M as c,S as l}from"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import{P as s}from"./PageTitle.stories-jdHXj66x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./storySourceDoc-tVKyHcEN.js";import"./PageTitle-DfJomGMy.js";import"./Typography-LZqKnjkf.js";import"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./utils-Dxt9aEaB.js";import"./constants-Brx3fuKM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s,name:"Docs"}),`
`,e.jsx(n.h1,{id:"pagetitle",children:"PageTitle"}),`
`,e.jsx(n.p,{children:"Компонент заголовка страницы с опциональными breadcrumbs, кнопкой «назад», подзаголовком и блоком действий."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Опциональные breadcrumbs с настраиваемым размером (по умолчанию ",e.jsx(n.code,{children:"size='m'"}),")"]}),`
`,e.jsxs(n.li,{children:["Кнопка «назад» слева от заголовка (",e.jsx(n.code,{children:"showBackButton"}),", ",e.jsx(n.code,{children:"onBackClick"}),")"]}),`
`,e.jsx(n.li,{children:"Заголовок и подзаголовок с автоматическим тултипом при обрезке текста"}),`
`,e.jsxs(n.li,{children:["Кастомный слот правее заголовка (",e.jsx(n.code,{children:"titleSlot"}),"), обычно для Badge. Стоит сразу за текстом заголовка, а не за подзаголовком, и выровнен по центру строки заголовка"]}),`
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
  titleSlot={<Badge size="m" view="default" text="Черновик" />}
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
`,e.jsx(l,{})]})}function y(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{y as default};
