import{j as e}from"./react-D2T61mpp.js";import{c2 as r,c3 as t,c4 as d}from"./vendor-DvO6Ud8q.js";import"./react-is-Clcustum.js";import"./styled-components-peerelvn.js";import"./tslib-De9GV7Vy.js";function n(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/breakpoint/Docs"}),`
`,e.jsx(i.h1,{id:"breakpoint--media",children:"breakpoint / media"}),`
`,e.jsx(i.p,{children:"Набор утилит для адаптивной вёрстки и работы с медиазапросами."}),`
`,e.jsx(i.p,{children:"Используйте:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"media"})," — когда хотите написать адаптивные стили прямо внутри ",e.jsx(i.code,{children:"styled-components"}),". Например: на маленьком экране уменьшить ",e.jsx(i.code,{children:"padding"}),", а на мобильном поменять ",e.jsx(i.code,{children:"display"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"MediaProvider"})," — когда хотите получать те же медиазапросы не из прямого импорта ",e.jsx(i.code,{children:"media"}),", а через ",e.jsx(i.code,{children:"theme"})," внутри styled-компонентов. Это удобно, если в проекте принято брать такие утилиты из ",e.jsx(i.code,{children:"theme"}),", например ",e.jsx(i.code,{children:"theme.media.down('m')"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"BreakpointProvider"})," + ",e.jsx(i.code,{children:"useBreakpoint"})," — когда адаптивность нужна не только в CSS, но и в логике React-компонента. Например: если экран маленький, не рендерить боковую панель; если ",e.jsx(i.code,{children:"m"})," и выше, показать другую кнопку; если mobile, упростить JSX."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Если нужен свой набор брейкпоинтов, можно передать кастомный ",e.jsx(i.code,{children:"breakpointConfig"})," в ",e.jsx(i.code,{children:"MediaProvider"})," или ",e.jsx(i.code,{children:"BreakpointProvider"}),"."]}),`
`,e.jsx(i.h2,{id:"import",children:"import"}),`
`,e.jsx(d,{language:"ts",format:"dedent",code:`
    import {
      media,
      MediaProvider,
      BreakpointProvider,
      useBreakpoint,
    } from '@daisforge/ui/utils';
  `}),`
`,e.jsx(i.h2,{id:"пример-1-media",children:"Пример 1. media"}),`
`,e.jsx(d,{language:"tsx",format:"dedent",code:`
    import styled from 'styled-components';
    import { media } from '@daisforge/ui/utils';

    const Card = styled.div\`
      padding: 24px;

      \${media.down('m')\`
        padding: 16px;
      \`}

      \${media.only('xs')\`
        padding: 8px;
      \`}
    \`;

`}),`
`,e.jsx(i.h2,{id:"пример-2-mediaprovider",children:"Пример 2. MediaProvider"}),`
`,e.jsx(d,{language:"tsx",format:"dedent",code:`
    import styled from 'styled-components';
    import { MediaProvider } from '@daisforge/ui/utils';

    const Card = styled.div\`
      padding: 24px;

      \${({ theme }) => theme.media.down('m')\`
        padding: 12px;
      \`}
    \`;

    export const App = () => (
      <MediaProvider>
        <Card>Responsive content</Card>
      </MediaProvider>
    );

`}),`
`,e.jsx(i.h2,{id:"пример-3-breakpointprovider--usebreakpoint",children:"Пример 3. BreakpointProvider + useBreakpoint"}),`
`,e.jsx(d,{language:"tsx",format:"dedent",code:`
    import React from 'react';
    import {
      BreakpointProvider,
      useBreakpoint,
    } from '@daisforge/ui/utils';

    const ResponsiveBlock = () => {
      const { breakpoint, up, down, only, between } = useBreakpoint();

      return (
        <div>
          <div>current breakpoint: {breakpoint}</div>
          {up('m') && <div>Экран больше чем m</div>}
          {down('l') && <div>Экран меньше чем l</div>}
          {only('xs') && <div>Только mobile breakpoint</div>}
          {between('s', 'xl') && <div>Ширина между s и xl</div>}
        </div>
      );
    };

    export const App = () => (
      <BreakpointProvider>
        <ResponsiveBlock />
      </BreakpointProvider>
    );

`}),`
`,e.jsx(i.h2,{id:"пример-4-кастомная-конфигурация-брейкпоинтов",children:"Пример 4. Кастомная конфигурация брейкпоинтов"}),`
`,e.jsx(d,{language:"tsx",format:"dedent",code:`
    import {
      BreakpointProvider,
      type BreakpointConfig,
    } from '@daisforge/ui/utils';

    const customBreakpointConfig: BreakpointConfig = {
      xs: 480,
      s: 768,
      m: 1024,
      l: 1280,
      xl: 1440,
      xxl: 1920,
    };

    export const App = () => (
      <BreakpointProvider breakpointConfig={customBreakpointConfig}>
        <YourComponent />
      </BreakpointProvider>
    );

`})]})}function m(o={}){const{wrapper:i}={...r(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{m as default};
