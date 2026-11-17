import{j as e}from"./react-D2T61mpp.js";import{cg as t,ch as i,ca as s}from"./vendor-BmL46prH.js";import{P as a}from"./PageLoader.stories-Ctnyex4-.js";import"./react-is-Clcustum.js";import"./styled-components-CyOceNjt.js";import"./@tanstack/react-virtual-CEJoHVNI.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-HfshwQ72.js";import"./AiAgentPopup-zBYz23hP.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/sdds-finai-B4e86Xc-.js";import"./utils-6kvC9zOe.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextArea-BqRvnq3h.js";import"./sharedUtilsInputs-C8sO4urP.js";import"./@salutejs/plasma-icons-DbUQJRbT.js";import"./sharedUtilsResizable-ClSuuCqy.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./PageTitle-CZI-Ufqv.js";function r(n){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a,name:"Docs"}),`
`,e.jsx(o.h1,{id:"pageloader",children:"PageLoader"}),`
`,e.jsx(o.p,{children:`Компонент первоначальной загрузки страницы. Показывается вместо контента,
пока данные ещё не получены. Заголовок, приветствие и навигацию размещайте выше
условного рендера, чтобы они оставались видимыми.`}),`
`,e.jsxs(o.p,{children:[`Спиннер имеет размер 36×36 px, заголовок использует H3 Bold, описание — BodyM
и цвет secondary. Отступы: 8 px после спиннера и 4 px перед описанием.
`,e.jsx(o.code,{children:"subtitle={null}"})," или ",e.jsx(o.code,{children:'subtitle=""'})," скрывает описание."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Box, PageLoader, PageTitle } from '@daisforge/ui';

<Box display="flex" flexDirection="column" height="480px" gap="24px">
  <PageTitle title="Отчёты" />
  {isInitialLoading ? <PageLoader /> : <Reports />}
</Box>;
`})}),`
`,e.jsxs(o.p,{children:["Размер области задаёт родительский layout. Во flex-контейнере ",e.jsx(o.code,{children:"PageLoader"}),` занимает
свободное место и центрирует спиннер и тексты. Компонент сообщает о загрузке через
`,e.jsx(o.code,{children:'role="status"'}),"."]}),`
`,e.jsx(o.p,{children:`Используйте замену контента для первоначальной загрузки. При повторном запросе
с уже полученными данными оставляйте контент смонтированным и показывайте локальный
индикатор обновления. Ошибку запроса обрабатывайте отдельно от загрузки.`}),`
`,e.jsxs(o.p,{children:["Компонент также можно передать в ",e.jsx(o.code,{children:"Suspense"})," как ",e.jsx(o.code,{children:"fallback={<PageLoader />}"}),`;
размер области и расположение заголовка определяет внешняя разметка.`]}),`
`,e.jsxs(o.p,{children:["Описание типов — в разделе ",e.jsx(o.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pageloader-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function X(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{X as default};
