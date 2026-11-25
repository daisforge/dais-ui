import{j as e}from"./react-UEdzNlUe.js";import{dd as s}from"./vendor-D2r4jgZf.js";import{M as o,S as l}from"./WithTooltip-KJL26V4Q-Big-My47.js";import{P as t}from"./PageLoader.stories-DD1vt6Xa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./preload-helper-DY3st4ya.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./Box-Dwqy9xB3.js";import"./PageLoader-pEdhkNrz.js";import"./Typography-BcqUTUcc.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Docs"}),`
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
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-pageloader-api--docs",children:"API"}),"."]}),`
`,e.jsx(l,{})]})}function C(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{C as default};
