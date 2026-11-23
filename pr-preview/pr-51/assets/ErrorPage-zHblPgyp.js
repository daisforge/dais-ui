import{j as r}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-DKFmtNka.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-BEMKlnr8.js";import{E as d}from"./ErrorPage.stories-CKvxP6Yu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-ByAByWgw.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./ErrorPage-DkH6fLVA.js";import"./EmptyState-DXsvH6cQ.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./unidentified@3x-Dft7iYeR.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./Box-CZ_ZQ2uM.js";function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:d,name:"Docs"}),`
`,r.jsx(n.h1,{id:"errorpage",children:"ErrorPage"}),`
`,r.jsxs(n.p,{children:["Компонент для отображения страниц ошибок. Предполагается использовать при ошибках основных запросов на странице (например, в ",r.jsx(n.code,{children:"onError"})," RTKQuery) и при ошибках на уровне всего приложения (например, в ",r.jsx(n.code,{children:"ErrorBoundary"}),")."]}),`
`,r.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"Встроенные описания для статусов: 400, 401, 403, 404, 500, 502, 503"}),`
`,r.jsxs(n.li,{children:["При неизвестном статусе или ",r.jsx(n.code,{children:"'unknown'"})," / ",r.jsx(n.code,{children:"undefined"})," показывается общее описание"]}),`
`,r.jsxs(n.li,{children:["Поддержка кастомных статусов через ",r.jsx(n.code,{children:"customStatuses"})]}),`
`,r.jsxs(n.li,{children:["Переопределение описания неизвестных ошибок через ",r.jsx(n.code,{children:"unknownStatus"})]}),`
`,r.jsxs(n.li,{children:["Отображение кода статуса (",r.jsx(n.code,{children:"showStatusCode"}),")"]}),`
`,r.jsxs(n.li,{children:["Кастомизация контейнера через ",r.jsx(n.code,{children:"containerProps"})]}),`
`,r.jsxs(n.li,{children:["Размерная сетка ",r.jsx(n.code,{children:"size"}),": ",r.jsx(n.code,{children:"l"})," (по умолчанию), ",r.jsx(n.code,{children:"m"}),", ",r.jsx(n.code,{children:"s"})]}),`
`]}),`
`,r.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"Картинки подставляются в зависимости от статуса на продуктовых сборках. В Storybook при смене вариантов картинка не меняется"}),`
`,r.jsxs(n.li,{children:[r.jsx(n.code,{children:"buttonHandler"})," вызывается с текущим ",r.jsx(n.code,{children:"statusCode"})," и объектом статуса — можно реализовать кастомную навигацию"]}),`
`]}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",r.jsx(n.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-errorpage-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA-api--docs",children:"ErrorPage API"})]}),`
`]}),`
`,r.jsx(c,{})]})}function q(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}export{q as default};
