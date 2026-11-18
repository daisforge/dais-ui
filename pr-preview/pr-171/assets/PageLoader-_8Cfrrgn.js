import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as o,ca as l}from"./vendor-_h_CmnQT.js";import{P as a}from"./PageLoader.stories-CKuOpgG3.js";import"./react-is-Clcustum.js";import"./styled-components-D7_wlBS0.js";import"./@tanstack/react-virtual-CcuGNpaY.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CD7Aw3Vn.js";import"./PageLoader-roiR2f3A.js";import"./AiAgentPopup-DhCqOGu8.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/sdds-finai-DVA7rxuT.js";import"./utils-Bn7MlwCC.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextArea-Dnzmn0hS.js";import"./sharedUtilsInputs-C8WGQWoK.js";import"./@salutejs/plasma-icons-DqqhxnUT.js";import"./sharedUtilsResizable-Cd1FcKHo.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a,name:"Docs"}),`
`,e.jsx(n.h1,{id:"pageloader",children:"PageLoader"}),`
`,e.jsx(n.p,{children:"Компонент первоначальной загрузки страницы. Показывается, пока данные ещё не получены."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Заменяет контент страницы на время первоначальной загрузки."}),`
`,e.jsx(n.li,{children:"Занимает свободное место во flex-контейнере и центрирует спиннер и текст. Размер области задаёт родитель."}),`
`,e.jsxs(n.li,{children:["Показывает описание, если передана непустая строка ",e.jsx(n.code,{children:"subtitle"}),"."]}),`
`,e.jsxs(n.li,{children:["Использует ",e.jsx(n.code,{children:'role="status"'})," для обозначения статуса загрузки."]}),`
`,e.jsxs(n.li,{children:["Подходит для ",e.jsx(n.code,{children:"fallback"})," в ",e.jsx(n.code,{children:"Suspense"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"первоначальная-загрузка",children:"Первоначальная загрузка"}),`
`,e.jsx(n.p,{children:`Заголовок страницы, приветствие и навигацию размещайте выше условного рендера,
чтобы они оставались видимыми.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Box, PageLoader, PageTitle } from '@daisforge/ui';

<Box display="flex" flexDirection="column" height="480px" gap="24px">
  <PageTitle title="Отчёты" />
  {isInitialLoading ? <PageLoader /> : <Reports />}
</Box>;
`})}),`
`,e.jsx(n.p,{children:`При повторном запросе с уже полученными данными оставляйте контент смонтированным
и показывайте локальный индикатор обновления. Ошибку запроса обрабатывайте отдельно.`}),`
`,e.jsx(n.h2,{id:"suspense",children:"Suspense"}),`
`,e.jsxs(n.p,{children:["Чтобы центрировать fallback, разместите ",e.jsx(n.code,{children:"Suspense"}),` во flex-контейнере с заданной
высотой.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Box, PageLoader } from '@daisforge/ui';
import { Suspense } from 'react';

<Box display="flex" flexDirection="column" height="480px">
  <Suspense fallback={<PageLoader />}>
    <Reports />
  </Suspense>
</Box>;
`})}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.p,{children:[`Спиннер по макету имеет размер 36×36 px. Заголовок использует H3 Bold,
описание — BodyM и цвет secondary. После спиннера предусмотрено 8 px,
между текстами — 4 px. Текст про время загрузки в примере передаётся через `,e.jsx(n.code,{children:"subtitle"}),"."]}),`
`,e.jsx(n.h3,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.p,{children:["Скринридер может пропустить текст в ",e.jsx(n.code,{children:'role="status"'}),`, если область монтируется
с уже заполненным текстом. Приложение может пометить область контента
через `,e.jsx(n.code,{children:"aria-busy"}),` и объявлять начало и окончание загрузки через постоянно
смонтированную live-область за её пределами.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<>
  <div role="status" aria-atomic="true">
    {statusMessage}
  </div>
  <Box aria-busy={isInitialLoading} display="flex" height="480px">
    {isInitialLoading ? <PageLoader aria-live="off" /> : <Reports />}
  </Box>
</>
`})}),`
`,e.jsxs(n.p,{children:["Инициализируйте ",e.jsx(n.code,{children:"statusMessage"}),` пустой строкой. Обновляйте его при начале
и завершении загрузки, например на «Загрузка отчётов» и «Отчёты загружены».
`,e.jsx(n.code,{children:'aria-live="off"'}),` отключает автоматические объявления от визуального индикатора
в этом примере, чтобы сообщение объявлялось из одной области.`]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pageloader-api--docs",children:"API"}),"."]}),`
`,e.jsx(l,{})]})}function I(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{I as default};
