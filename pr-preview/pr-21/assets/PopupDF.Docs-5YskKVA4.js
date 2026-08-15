import{j as e}from"./react-D2T61mpp.js";import{c2 as d,c3 as s,bY as c}from"./vendor-C4RvRB9Y.js";import{P as r}from"./PopupDF.stories-tLIxg6TE.js";import"./react-is-Clcustum.js";import"./styled-components-DRZWVImu.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./PopupDF-DBD_Ehyt.js";import"./Box-Vq8Q3-WK.js";import"./constants-B3b49qmU.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/sdds-finai-DEWlHYGQ.js";import"./AnalyticalWidget-CEnZM3OP.js";import"./utils-BZKe53yj.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./IconButton-DUuS8DE3.js";import"./@salutejs/plasma-icons-CVXIcC6c.js";import"./Collapse-CXHRqKRE.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Docs"}),`
`,e.jsx(n.h1,{id:"popupdf",children:"PopupDF"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PopupDF"})," — локальная DF-обёртка над ",e.jsx(n.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/popup/",rel:"nofollow",children:"Popup"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["крестик закрытия живёт в ",e.jsx(n.code,{children:"PopupDF.Header"})]}),`
`,e.jsxs(n.li,{children:["доступны ",e.jsx(n.code,{children:"PopupDF.Header"}),", ",e.jsx(n.code,{children:"PopupDF.Body"}),", ",e.jsx(n.code,{children:"PopupDF.Footer"})]}),`
`,e.jsxs(n.li,{children:["доступны размеры ",e.jsx(n.code,{children:'size="m" | "s"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title"})," и ",e.jsx(n.code,{children:"description"})," ограничены двумя строками"]}),`
`,e.jsxs(n.li,{children:["в ",e.jsx(n.code,{children:"Header"})," доступна кнопка назад через ",e.jsx(n.code,{children:"onBackButtonClick"})]}),`
`,e.jsxs(n.li,{children:["иконка ресайза использует DF-иконку по умолчанию, учитывает ",e.jsx(n.code,{children:"resizable.iconSize"})," и может быть переопределена через ",e.jsx(n.code,{children:"resizable.icons"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`PopupDF.Header; // Шапка
PopupDF.Body; // Контент
PopupDF.Footer; // Футер
`})}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Header"})," и ",e.jsx(n.code,{children:"Footer"})," остаются опциональными и подключаются через композицию"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subHeader"})," подходит для кастомного контента, смыслово связанного с шапкой"]}),`
`,e.jsxs(n.li,{children:["если контента много, скролл должен жить внутри ",e.jsx(n.code,{children:"PopupDF.Body"})]}),`
`,e.jsxs(n.li,{children:["по умолчанию угол иконки ресайза вычисляется из ",e.jsx(n.code,{children:"placement"})," так, чтобы ресайз тянул popup внутрь доступной области"]}),`
`,e.jsxs(n.li,{children:["для ручной смены угла ресайза используйте нативный ",e.jsx(n.code,{children:"resizable.directions"}),", например ",e.jsx(n.code,{children:"directions: ['top-left']"})]}),`
`,e.jsxs(n.li,{children:["если ",e.jsx(n.code,{children:"hiddenIcons"})," не передан, ",e.jsx(n.code,{children:"PopupDF"})," автоматически скрывает угловые иконки, которые не входят в ",e.jsx(n.code,{children:"directions"}),"; для нестандартной видимости передайте ",e.jsx(n.code,{children:"hiddenIcons"})," явно"]}),`
`,e.jsxs(n.li,{children:["если пользовательские ",e.jsx(n.code,{children:"icons"})," не переданы, ",e.jsx(n.code,{children:"PopupDF"})," заполняет угловые иконки своей ",e.jsx(n.code,{children:"IconResizeCorneredFill"}),"; ",e.jsx(n.code,{children:"iconSize"})," влияет на DF-иконку по умолчанию"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Описание типов и compound-пропсов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-popupdf-api--docs",children:"API"}),"."]}),`
`,e.jsx(c,{})]})}function M(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{M as default};
