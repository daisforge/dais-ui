import{j as e}from"./react-D2T61mpp.js";import{c4 as o,c5 as r,c6 as i}from"./vendor-4DQodAhx.js";import"./react-is-Clcustum.js";import"./styled-components-rNTPyvwi.js";import"./tslib-De9GV7Vy.js";const a="/dais-ui/pr-preview/pr-41/assets/introImage-Bn-rFJV-.png";function s(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Установка и использование"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsx("img",{src:a})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"установка",children:"Установка"}),e.jsxs(n.p,{children:["Рекомендуется использовать ",e.jsx(n.code,{children:'"typescript": ">=5.0.0"'})]}),e.jsx(n.p,{children:"Установите зависимости (если не установлены):"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`"react": ">=17.0.0",
"react-dom": ">=17.0.0",
"styled-components": "5.3.1"
`})}),e.jsx(i,{language:"bash",dark:!0,format:"dedent",code:`
        npm install react react-dom styled-components@5.3.1
        npm install -D @types/styled-components
      `}),e.jsx(n.p,{children:"Установите пакет библиотеки:"}),e.jsx(i,{language:"bash",dark:!0,format:!1,code:"npm install -S @daisforge/ui"})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"подключение-стилей-в-проекте",children:"Подключение стилей в проекте"}),e.jsxs(n.p,{children:["В корне приложения импортируйте готовый компонент ",e.jsx(n.code,{children:"GlobalStyle"})," или ",e.jsx(n.code,{children:"DarkGlobalStyle"})," и подключите его:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// index.tsx

import { GlobalStyle } from '@daisforge/ui/styles';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>
);
`})})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"использование-компонентов",children:"Использование компонентов"}),e.jsx(n.p,{children:"Все компоненты доступны из корня или из папки components:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// App.tsx

import { Button } from '@daisforge/ui';
// или import { Button } from '@daisforge/ui/components/Button

export const App = () => {
    return (
        <div>
          <Button>Hello, SDDS!</Button>
        </div>
    );
};
`})})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"использование-иконок",children:"Использование иконок"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// App.tsx

import { IconClock } from '@daisforge/ui/icons';

export const App = () => {
    return (
        <>
            <IconClock color="red" />
        </>
    );
};
`})})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"использование-токенов",children:"Использование токенов"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// App.tsx
import styled from 'styled-components';
import { backgroundPrimary, textAccent } from '@daisforge/ui/tokens';
import { getTokenValue } from '@daisforge/ui/utils';

const accentTokenValue = getTokenValue(textAccent) // #0b7ecb

const StyledDiv = styled.div\`
    background-color: \${backgroundPrimary};
    color: \${textAccent};
\`;

export const App = () => {
    return (
        <>
            <StyledDiv>StyledComponentsExample</StyledDiv>
            <div style={{ background: backgroundPrimary }}>InlineExample</div>
        </>
    );
};
`})})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function x(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{x as default};
