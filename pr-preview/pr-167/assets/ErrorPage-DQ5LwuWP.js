import{j as r}from"./react-B60MRyL7.js";import{ck as i}from"./vendor-BjyhLeYF.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-D-zwhmkZ.js";import{E as t}from"./ErrorPage.stories-D-vX30FG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";import"./preload-helper-BUAZWbk6.js";import"./index-Cu4lwwaE.js";import"./index-TL0b5yJv.js";import"./@salutejs/plasma-icons-B_5a5nWb.js";import"./ErrorPage-DSEhV8br.js";import"./EmptyState-B_7W5YtK.js";import"./utils-DU2v-Kn3.js";import"./constants-v491TRlQ.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./unidentified@3x-CJfTaq4R.js";import"./@salutejs/sdds-finai-NC4lN6Af.js";import"./Box--F0xJqmw.js";function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t,name:"Docs"}),`
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
`,r.jsx(c,{})]})}function A(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}export{A as default};
