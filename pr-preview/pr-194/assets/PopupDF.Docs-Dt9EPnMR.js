import{j as e}from"./react-UEdzNlUe.js";import{df as d}from"./vendor-BZ4xHhIu.js";import{M as r,S as s}from"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import{P as c}from"./PopupDF.stories-UYTKK6gS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./storySourceDoc-tVKyHcEN.js";import"./PopupDF-DommRhGr.js";import"./Box-1ilqKMuH.js";import"./constants-Brx3fuKM.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./Typography-LZqKnjkf.js";import"./utils-Dxt9aEaB.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";import"./sharedUtilsResizable-CdsDnTU1.js";function n(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,name:"Docs"}),`
`,e.jsx(o.h1,{id:"popupdf",children:"PopupDF"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"PopupDF"})," — локальная DF-обёртка над ",e.jsx(o.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/popup/",rel:"nofollow",children:"Popup"}),"."]}),`
`,e.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["крестик закрытия живёт в ",e.jsx(o.code,{children:"PopupDF.Header"})]}),`
`,e.jsxs(o.li,{children:["доступны ",e.jsx(o.code,{children:"PopupDF.Header"}),", ",e.jsx(o.code,{children:"PopupDF.Body"}),", ",e.jsx(o.code,{children:"PopupDF.Footer"})]}),`
`,e.jsxs(o.li,{children:["доступны размеры ",e.jsx(o.code,{children:'size="m" | "s"'})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"title"})," и ",e.jsx(o.code,{children:"description"})," ограничены двумя строками"]}),`
`,e.jsxs(o.li,{children:["в ",e.jsx(o.code,{children:"Header"})," доступна кнопка назад через ",e.jsx(o.code,{children:"onBackButtonClick"})]}),`
`,e.jsxs(o.li,{children:["иконка ресайза использует DF-иконку по умолчанию, учитывает ",e.jsx(o.code,{children:"resizable.iconSize"})," и может быть переопределена через ",e.jsx(o.code,{children:"resizable.icons"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`PopupDF.Header; // Шапка
PopupDF.Body; // Контент
PopupDF.Footer; // Футер
`})}),`
`,e.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Header"})," и ",e.jsx(o.code,{children:"Footer"})," остаются опциональными и подключаются через композицию"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"subHeader"})," подходит для кастомного контента, смыслово связанного с шапкой"]}),`
`,e.jsxs(o.li,{children:["если контента много, скролл должен жить внутри ",e.jsx(o.code,{children:"PopupDF.Body"})]}),`
`,e.jsxs(o.li,{children:["по умолчанию угол иконки ресайза вычисляется из ",e.jsx(o.code,{children:"placement"})," так, чтобы ресайз тянул popup внутрь доступной области"]}),`
`,e.jsxs(o.li,{children:["для ручной смены угла ресайза используйте нативный ",e.jsx(o.code,{children:"resizable.directions"}),", например ",e.jsx(o.code,{children:"directions: ['top-left']"})]}),`
`,e.jsxs(o.li,{children:["если ",e.jsx(o.code,{children:"hiddenIcons"})," не передан, ",e.jsx(o.code,{children:"PopupDF"})," автоматически скрывает угловые иконки, которые не входят в ",e.jsx(o.code,{children:"directions"}),"; для нестандартной видимости передайте ",e.jsx(o.code,{children:"hiddenIcons"})," явно"]}),`
`,e.jsxs(o.li,{children:["если пользовательские ",e.jsx(o.code,{children:"icons"})," не переданы, ",e.jsx(o.code,{children:"PopupDF"})," заполняет угловые иконки своей ",e.jsx(o.code,{children:"IconResizeCorneredFill"}),"; ",e.jsx(o.code,{children:"iconSize"})," влияет на DF-иконку по умолчанию"]}),`
`]}),`
`,e.jsxs(o.p,{children:["Описание типов и compound-пропсов — в разделе ",e.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-popupdf-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function A(i={}){const{wrapper:o}={...d(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(n,{...i})}):n(i)}export{A as default};
