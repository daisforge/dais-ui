import{j as n}from"./react-D2T61mpp.js";import{c2 as s,c3 as i,bY as c}from"./vendor-B0ELcGbr.js";import{E as d}from"./ErrorPage.stories-SBHrX95W.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";import"./ErrorPage-nQWFZU85.js";import"./EmptyState-D_woUcid.js";import"./utils-C6gzzOja.js";import"./constants-B3b49qmU.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CPdoK_07.js";import"./Box-Db5QYZwL.js";function o(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d,name:"Docs"}),`
`,n.jsx(e.h1,{id:"errorpage",children:"ErrorPage"}),`
`,n.jsxs(e.p,{children:["Компонент для отображения страниц ошибок. Предполагается использовать при ошибках основных запросов на странице (например, в ",n.jsx(e.code,{children:"onError"})," RTKQuery) и при ошибках на уровне всего приложения (например, в ",n.jsx(e.code,{children:"ErrorBoundary"}),")."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Встроенные описания для статусов: 400, 401, 403, 404, 500, 502, 503"}),`
`,n.jsxs(e.li,{children:["При неизвестном статусе или ",n.jsx(e.code,{children:"'unknown'"})," / ",n.jsx(e.code,{children:"undefined"})," показывается общее описание"]}),`
`,n.jsxs(e.li,{children:["Поддержка кастомных статусов через ",n.jsx(e.code,{children:"customStatuses"})]}),`
`,n.jsxs(e.li,{children:["Переопределение описания неизвестных ошибок через ",n.jsx(e.code,{children:"unknownStatus"})]}),`
`,n.jsxs(e.li,{children:["Отображение кода статуса (",n.jsx(e.code,{children:"showStatusCode"}),")"]}),`
`,n.jsxs(e.li,{children:["Кастомизация контейнера через ",n.jsx(e.code,{children:"containerProps"})]}),`
`,n.jsxs(e.li,{children:["Размерная сетка ",n.jsx(e.code,{children:"size"}),": ",n.jsx(e.code,{children:"l"})," (по умолчанию), ",n.jsx(e.code,{children:"m"}),", ",n.jsx(e.code,{children:"s"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Картинки подставляются в зависимости от статуса на продуктовых сборках. В Storybook при смене вариантов картинка не меняется"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"buttonHandler"})," вызывается с текущим ",n.jsx(e.code,{children:"statusCode"})," и объектом статуса — можно реализовать кастомную навигацию"]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-errorpage-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA-api--docs",children:"ErrorPage API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function g(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{g as default};
