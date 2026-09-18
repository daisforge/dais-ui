import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as c}from"./vendor-nNOZyNLP.js";import{C as t}from"./CanvasLink.stories-CB0oxWwV.js";import"./react-is-Clcustum.js";import"./styled-components-Bm5ATt6S.js";import"./@tanstack/react-virtual-CKihwRsW.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DYnmF90b.js";import"./FiltersActions-CsqK5uOd.js";import"./IconButton-BUGhYb4u.js";import"./@salutejs/plasma-icons-CIBQ7nTm.js";import"./@salutejs/sdds-finai-D4KNbPPv.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CLSMcwW8.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-WHWAT9BU.js";import"./TextField-Dd73lhcU.js";import"./sharedUtilsInputs-xU8edk4-.js";import"./AnalyticalWidget-DfERlkti.js";import"./Collapse-C4JYT3GB.js";import"./Table-BTyj2qPp.js";import"./react-data-grid-BS7__oFy.js";import"./TableTabs-cftH870o.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Dlrr1t6o.js";import"./ListOfFilters-WdtcZDYT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BZcvm7lw.js";import"./EmptyState-CKazDq9B.js";import"./MassActions-Br9j-Go-.js";import"./Autocomplete-cKevG2P9.js";import"./TableGlide-CfzVrpFh.js";import"./@glideappsfinal/glide-data-grid-HS9qCG8Q.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DiMcEP9L.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(n.h1,{id:"canvaslink",children:"Canvas.Link"}),`
`,e.jsxs(n.p,{children:["Ссылка с навигацией и underline внутри canvas-ячейки ",e.jsx(n.code,{children:"TableCanvas"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Несколько вариантов ",e.jsx(n.code,{children:"view"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'view="clear"'})," использует цвета ",e.jsx(n.code,{children:"default"})," как fallback — canvas не поддерживает ",e.jsx(n.code,{children:"inherit"})]}),`
`,e.jsxs(n.li,{children:["Поддержка ",e.jsx(n.code,{children:"href"}),", ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"disabled"})]}),`
`,e.jsxs(n.li,{children:["Наследует текстовые свойства от ",e.jsx(n.code,{children:"Canvas.Text"}),": ",e.jsx(n.code,{children:"wordWrap"}),", ",e.jsx(n.code,{children:"overflow"}),", ",e.jsx(n.code,{children:"textOverflow"}),", ",e.jsx(n.code,{children:"ellipsis"}),", ",e.jsx(n.code,{children:"maxLines"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"перехват-навигации",children:"Перехват навигации"}),`
`,e.jsxs(n.p,{children:["По умолчанию ",e.jsx(n.code,{children:"Canvas.Link"})," выполняет навигацию по ",e.jsx(n.code,{children:"href"})," после вызова ",e.jsx(n.code,{children:"onClick"}),`.
Для отмены навигации вызовите `,e.jsx(n.code,{children:"event.preventDefault()"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Link
  view="accent"
  href="/some-page"
  onClick={(event) => {
    event.preventDefault();
    openModal(row.id);
  }}
>
  Открыть
</Canvas.Link>
`})}),`
`,e.jsx(n.h2,{id:"многострочный-режим",children:"Многострочный режим"}),`
`,e.jsx(n.p,{children:"При многострочном переносе underline не рисуется, поэтому многострочные ссылки лучше использовать там, где underline не критичен."}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvaslink-api--docs",children:"API"}),"."]}),`
`,e.jsx(c,{})]})}function H(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{H as default};
