import{j as e}from"./react-D2T61mpp.js";import{cf as i,cg as c,c9 as o}from"./vendor-COwMm0za.js";import{L as d}from"./Logger.stories-_fTcEFuv.js";import"./react-is-Clcustum.js";import"./styled-components-CE-uo-6d.js";import"./@tanstack/react-virtual-Djp4Fi96.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./Logger-FKTAiALI.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DLJbp48I.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DTttYHJN.js";import"./@salutejs/sdds-finai-DL_QtMGJ.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"logger",children:"Logger"}),`
`,e.jsx(n.p,{children:"Панель системных сообщений: шапка со счётчиками и фильтрами по статусам, список сообщений с группами, подробностями и копированием идентификатора трассировки."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Четыре статуса: ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"info"}),", ",e.jsx(n.code,{children:"success"})]}),`
`,e.jsxs(n.li,{children:["Группы любой вложенности. Плоский список с ",e.jsx(n.code,{children:"parentId"})," превращается в дерево через ",e.jsx(n.code,{children:"buildLoggerTree"})]}),`
`,e.jsx(n.li,{children:"Фильтр по статусу учитывает вложенные сообщения: группа остаётся в списке, если в ней есть подходящее сообщение"}),`
`,e.jsxs(n.li,{children:["Кнопки сообщения: «Подробнее», «Скопировать ID», код сообщения (например ",e.jsx(n.code,{children:"F23"}),") и собственные ",e.jsx(n.code,{children:"actions"})]}),`
`,e.jsx(n.li,{children:"Состояние панели, фильтра и раскрытых элементов можно задавать извне или оставить компоненту"}),`
`]}),`
`,e.jsx(n.h2,{id:"основная-структура",children:"Основная структура"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Logger items={items} defaultOpen />
`})}),`
`,e.jsx(n.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`Logger.List; // Список сообщений без шапки
Logger.Message; // Одно сообщение
Logger.Group; // Группа сообщений
Logger.Filters; // Фильтры по статусам со счётчиками
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Logger.List"})," — подходит для модалки, drawer или своей панели, принимает те же ",e.jsx(n.code,{children:"items"})," и настройки отображения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Logger.Message"})," и ",e.jsx(n.code,{children:"Logger.Group"})," — можно использовать отдельно от панели"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Logger.Filters"})," — чипсы «Все» и по одному на статус"]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Счётчики считаются по всем элементам: и по группам, и по сообщениям. Если загружена только часть данных, передайте итоговые значения в ",e.jsx(n.code,{children:"counts"})]}),`
`,e.jsx(n.li,{children:"Описание сообщения можно скопировать, только если оно передано строкой"}),`
`,e.jsx(n.li,{children:"Закрытие панели сбрасывает фильтр, открытие выбирает «Все». Выбор фильтра в закрытой панели открывает её"}),`
`]}),`
`,e.jsxs(n.p,{children:["Описание типов и пропсов — в разделе ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-logger-api--docs",children:"API"}),"."]}),`
`,e.jsx(o,{})]})}function C(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{C as default};
