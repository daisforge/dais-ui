import{j as n}from"./react-D2T61mpp.js";import{c6 as c,c7 as r,c8 as s,cb as l,c0 as o}from"./vendor-DV2KdZ5r.js";import{B as t,D as a,M as h,N as x,a as j,S as f}from"./BlockGradientScroll.stories-BeSxgYUx.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./BlockGradientScroll-DCsRNIU7.js";import"./mixins-DND0djFt.js";import"./utils-xPrEbuhT.js";import"./constants-OzzdGdGS.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-5M_BRjMS.js";function d(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:t,name:"Docs"}),`
`,n.jsx(e.h1,{id:"blockgradientscroll",children:"BlockGradientScroll"}),`
`,n.jsx(e.p,{children:"Градиент-индикатор скролла — визуальная подсказка пользователю, что контент можно скроллить."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Автоматически появляется при наличии скролла"}),`
`,n.jsx(e.li,{children:"Плавно исчезает при достижении конца"}),`
`,n.jsx(e.li,{children:"Доступен как компонент и как миксин для styled-components"}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Основано на CSS ",n.jsx(e.code,{children:"animation-timeline"})," — ",n.jsx(e.a,{href:"https://caniuse.com/?search=animation-timeline",rel:"nofollow",children:"поддержка браузеров"})]}),`
`,n.jsxs(e.li,{children:["Тема определяется один раз в момент создания компонента/стилей (",n.jsx(e.code,{children:"getActiveTheme()"}),"), при переключении темы градиент не обновится автоматически"]}),`
`,n.jsxs(e.li,{children:["Компонент автоматически получает padding через ",n.jsx(e.code,{children:"getComputedStyle"})," — prop не нужен"]}),`
`,n.jsx(e.li,{children:"Миксин принимает padding и сам применяет его к контейнеру — дублирование не требуется"}),`
`,n.jsxs(e.li,{children:["Variant ",n.jsx(e.code,{children:"white"})," (default) — белый/тёмный фон; ",n.jsx(e.code,{children:"gray"})," — серый фон"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$css"})," позволяет передать дополнительные стили через styled-components"]}),`
`]}),`
`,n.jsx(e.h2,{id:"экспорты",children:"Экспорты"}),`
`,n.jsx(e.h3,{id:"компонент",children:"Компонент"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BlockGradientScroll"})," — React-компонент (",n.jsx(e.code,{children:"@daisforge/ui"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BlockGradientScrollProps"})," — Тип пропсов (",n.jsx(e.code,{children:"@daisforge/ui"}),")"]}),`
`]}),`
`,n.jsx(e.h3,{id:"миксин",children:"Миксин"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BlockGradientScrollMixin"})," — Основной миксин (",n.jsx(e.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BlockGradientScrollPadding"})," — Тип для padding (",n.jsx(e.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BlockGradientScrollVariant"})," — Тип для variant (",n.jsx(e.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"BlockGradientScrollOptions"})," — Тип опций миксина (",n.jsx(e.code,{children:"@daisforge/ui/mixins"}),")"]}),`
`]}),`
`,n.jsx(e.h3,{id:"внутренние-для-кастомизации",children:"Внутренние (для кастомизации)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"blockGradientScrollContainerStyles"})," — Базовые стили контейнера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"blockGradientScrollAfterStyles"})," — Стили псевдоэлемента ::after"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"blockGradientScrollKeyframes"})," — Keyframes анимации"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.h3,{id:"компонент-1",children:"Компонент"}),`
`,n.jsxs(e.p,{children:["Компонент ",n.jsx(e.strong,{children:"автоматически"})," получает padding'и из ваших стилей — просто укажите их в ",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"className"})," или ",n.jsx(e.code,{children:"$css"}),":"]}),`
`,n.jsx(s,{language:"tsx",code:`
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
`,n.jsx(e.h3,{id:"миксин-1",children:"Миксин"}),`
`,n.jsxs(e.p,{children:["Миксин ",n.jsx(e.strong,{children:"сам применяет padding"})," к контейнеру — не нужно дублировать:"]}),`
`,n.jsx(s,{language:"tsx",code:`
// Миксин сам применит padding: 24px ко всем сторонам
const Box = styled.div\`
  max-height: 300px;
  overflow-y: auto;
  background: #ffffff;

\${BlockGradientScrollMixin({ padding: 24, variant: 'white' })}
\`;
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"1-базовый-компонент",children:"1. Базовый компонент"}),`
`,n.jsx(s,{language:"tsx",code:`
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
`,n.jsx(e.h3,{id:"2-миксин-styled-components",children:"2. Миксин (styled-components)"}),`
`,n.jsx(s,{language:"tsx",code:`
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
`,n.jsx(e.h3,{id:"3-мало-контента--градиент-скрыт",children:"3. Мало контента — градиент скрыт"}),`
`,n.jsxs(e.p,{children:["Если контент помещается без скролла, градиент автоматически скрыт (",n.jsx(e.code,{children:"opacity: 0"}),")."]}),`
`,n.jsx(l,{of:x}),`
`,n.jsx(e.h3,{id:"4-несколько-контейнеров",children:"4. Несколько контейнеров"}),`
`,n.jsxs(e.p,{children:["Каждый контейнер работает независимо благодаря ",n.jsx(e.code,{children:"scroll-timeline"}),"."]}),`
`,n.jsx(l,{of:j}),`
`,n.jsx(e.h3,{id:"5-способы-стилизации",children:"5. Способы стилизации"}),`
`,n.jsxs(e.p,{children:["Компонент поддерживает три способа кастомизации: ",n.jsx(e.code,{children:"style"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"$css"}),"."]}),`
`,n.jsx(l,{of:f}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-blockgradientscroll-api--docs",children:"BlockGradientScroll API"})]}),`
`]}),`
`,n.jsx(o,{})]})}function w(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{w as default};
