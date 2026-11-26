import{j as n}from"./react-UEdzNlUe.js";import{df as d}from"./vendor-DTHFTCxs.js";import{M as o,a as r,C as l,S as c}from"./WithTooltip-KJL26V4Q-C3x9tCBM.js";import{B as t,D as a,M as h,N as x,a as j,S as m}from"./BlockGradientScroll.stories-BB8miD6k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-BOyu4uG3.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./BlockGradientScroll-DbbJP4jo.js";import"./mixins-BHXm9zE1.js";import"./utils-Cc8UerBz.js";import"./constants-YnncqoDz.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Jb2Onqi_.js";function s(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:t,name:"Docs"}),`
`,n.jsx(i.h1,{id:"blockgradientscroll",children:"BlockGradientScroll"}),`
`,n.jsx(i.p,{children:"Градиент-индикатор скролла — визуальная подсказка пользователю, что контент можно скроллить."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Автоматически появляется при наличии скролла"}),`
`,n.jsx(i.li,{children:"Плавно исчезает при достижении конца"}),`
`,n.jsx(i.li,{children:"Доступен как компонент и как миксин для styled-components"}),`
`]}),`
`,n.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Основано на CSS ",n.jsx(i.code,{children:"animation-timeline"})," — ",n.jsx(i.a,{href:"https://caniuse.com/?search=animation-timeline",rel:"nofollow",children:"поддержка браузеров"})]}),`
`,n.jsxs(i.li,{children:["Тема определяется один раз в момент создания компонента/стилей (",n.jsx(i.code,{children:"getActiveTheme()"}),"), при переключении темы градиент не обновится автоматически"]}),`
`,n.jsxs(i.li,{children:["Компонент автоматически получает padding через ",n.jsx(i.code,{children:"getComputedStyle"})," — prop не нужен"]}),`
`,n.jsx(i.li,{children:"Миксин принимает padding и сам применяет его к контейнеру — дублирование не требуется"}),`
`,n.jsxs(i.li,{children:["Variant ",n.jsx(i.code,{children:"white"})," (default) — белый/тёмный фон; ",n.jsx(i.code,{children:"gray"})," — серый фон"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"$css"})," позволяет передать дополнительные стили через styled-components"]}),`
`]}),`
`,n.jsx(i.h2,{id:"экспорты",children:"Экспорты"}),`
`,n.jsx(i.h3,{id:"компонент",children:"Компонент"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"BlockGradientScroll"})," — React-компонент (",n.jsx(i.code,{children:"@daisforge/ui"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"BlockGradientScrollProps"})," — Тип пропсов (",n.jsx(i.code,{children:"@daisforge/ui"}),")"]}),`
`]}),`
`,n.jsx(i.h3,{id:"миксин",children:"Миксин"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"BlockGradientScrollMixin"})," — Основной миксин (",n.jsx(i.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"BlockGradientScrollPadding"})," — Тип для padding (",n.jsx(i.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"BlockGradientScrollVariant"})," — Тип для variant (",n.jsx(i.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"BlockGradientScrollOptions"})," — Тип опций миксина (",n.jsx(i.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`]}),`
`,n.jsx(i.h3,{id:"внутренние-для-кастомизации",children:"Внутренние (для кастомизации)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"blockGradientScrollContainerStyles"})," — Базовые стили контейнера"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"blockGradientScrollAfterStyles"})," — Стили псевдоэлемента ::after"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"blockGradientScrollKeyframes"})," — Keyframes анимации"]}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(i.h3,{id:"компонент-1",children:"Компонент"}),`
`,n.jsxs(i.p,{children:["Компонент ",n.jsx(i.strong,{children:"автоматически"})," получает padding'и из ваших стилей — просто укажите их в ",n.jsx(i.code,{children:"style"}),", ",n.jsx(i.code,{children:"className"})," или ",n.jsx(i.code,{children:"$css"}),":"]}),`
`,n.jsx(r,{language:"tsx",code:`
// Компонент сам определит padding из style
<BlockGradientScroll
  variant="white"
  style={{
    maxHeight: 300,
    overflowY: 'auto',
    padding: 24,
    background: '#ffffff',
  }}
>
  {children}
</BlockGradientScroll>
`}),`
`,n.jsx(i.h3,{id:"миксин-1",children:"Миксин"}),`
`,n.jsxs(i.p,{children:["Миксин ",n.jsx(i.strong,{children:"сам применяет padding"})," к контейнеру — не нужно дублировать:"]}),`
`,n.jsx(r,{language:"tsx",code:`
// Миксин сам применит padding: 24px ко всем сторонам
const Box = styled.div\`
  max-height: 300px;
  overflow-y: auto;
  background: #ffffff;

\${BlockGradientScrollMixin({ padding: 24, variant: 'white' })}
\`;
`}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(i.h3,{id:"1-базовый-компонент",children:"1. Базовый компонент"}),`
`,n.jsx(r,{language:"tsx",code:`
import { BlockGradientScroll } from '@daisforge/ui';

// Padding автоматически подхватывается из style

<BlockGradientScroll
  variant="white"
  style={{
    maxHeight: 300,
    overflowY: 'auto',
    padding: 24,
    background: '#ffffff',
  }}
>
  <Item />
  <Item />
  <Item />
</BlockGradientScroll>
`}),`
`,n.jsx(l,{of:a}),`
`,n.jsx(i.h3,{id:"2-миксин-styled-components",children:"2. Миксин (styled-components)"}),`
`,n.jsx(r,{language:"tsx",code:`
import { BlockGradientScrollMixin } from '@daisforge/ui/mixins';
import styled from 'styled-components';

// Миксин сам применяет padding — дублирование не нужно
const ScrollableBox = styled.div\`
max-height: 300px;
overflow-y: auto;
background: #ffffff;

\${BlockGradientScrollMixin({ padding: 24, variant: 'white' })}
\`;

<ScrollableBox>
  <Item />
  <Item />
</ScrollableBox>
`}),`
`,n.jsx(l,{of:h}),`
`,n.jsx(i.h3,{id:"3-мало-контента--градиент-скрыт",children:"3. Мало контента — градиент скрыт"}),`
`,n.jsxs(i.p,{children:["Если контент помещается без скролла, градиент автоматически скрыт (",n.jsx(i.code,{children:"opacity: 0"}),")."]}),`
`,n.jsx(l,{of:x}),`
`,n.jsx(i.h3,{id:"4-несколько-контейнеров",children:"4. Несколько контейнеров"}),`
`,n.jsxs(i.p,{children:["Каждый контейнер работает независимо благодаря ",n.jsx(i.code,{children:"scroll-timeline"}),"."]}),`
`,n.jsx(l,{of:j}),`
`,n.jsx(i.h3,{id:"5-способы-стилизации",children:"5. Способы стилизации"}),`
`,n.jsxs(i.p,{children:["Компонент поддерживает три способа кастомизации: ",n.jsx(i.code,{children:"style"}),", ",n.jsx(i.code,{children:"className"}),", ",n.jsx(i.code,{children:"$css"}),"."]}),`
`,n.jsx(l,{of:m}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-blockgradientscroll-api--docs",children:"BlockGradientScroll API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function P(e={}){const{wrapper:i}={...d(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{P as default};
