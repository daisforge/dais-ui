import{j as e}from"./react-D2T61mpp.js";import{c2 as o,c3 as s,bY as c}from"./vendor-C4RvRB9Y.js";import{C as t}from"./CanvasLink.stories-Co6hNOF9.js";import"./react-is-Clcustum.js";import"./styled-components-DRZWVImu.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Dm4TLh_W.js";import"./FiltersActions-CeAliSyJ.js";import"./IconButton-DUuS8DE3.js";import"./@salutejs/plasma-icons-CVXIcC6c.js";import"./@salutejs/sdds-finai-DEWlHYGQ.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BZKe53yj.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Vq8Q3-WK.js";import"./TextField-OOvhELJT.js";import"./sharedUtilsInputs-_J_Qe5za.js";import"./AnalyticalWidget-CEnZM3OP.js";import"./Collapse-CXHRqKRE.js";import"./Table-CcVd51Ex.js";import"./react-data-grid-dZcAYnhL.js";import"./TableTabs-DP2cFwdJ.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-qKKeuHem.js";import"./ListOfFilters-CVgvyuFB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAo9Apt7.js";import"./EmptyState-Jej8pens.js";import"./MassActions-_PtZmAgO.js";import"./Autocomplete-BzEdXM5d.js";import"./TableGlide-CRNi9qT2.js";import"./@glideappsfinal/glide-data-grid-Y0XOACEz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Cqawd0as.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function z(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{z as default};
