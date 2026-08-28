import{j as e}from"./react-D2T61mpp.js";import{c6 as o,c7 as s,c0 as c}from"./vendor-D0k-bL4H.js";import{C as t}from"./CanvasLink.stories-Y8DAJyNe.js";import"./react-is-Clcustum.js";import"./styled-components-D8vUpZ79.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-EGzZCWcK.js";import"./FiltersActions-DFYvS86u.js";import"./IconButton-BwsXIhiD.js";import"./@salutejs/plasma-icons-B2gARaIt.js";import"./@salutejs/sdds-finai-9f2Z3gSc.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-BsIKPznQ.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-oT8vEc87.js";import"./TextField-D9SAbnRq.js";import"./sharedUtilsInputs-BpFlkwj3.js";import"./AnalyticalWidget-C_YOIqNy.js";import"./Collapse-DGqYHNo_.js";import"./Table-Bo3uZOST.js";import"./react-data-grid-p-wBMMSv.js";import"./TableTabs-bchgDMaK.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-WI14EhMn.js";import"./ListOfFilters-CTJFIH40.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C94N8voO.js";import"./EmptyState-CzQ_YjnV.js";import"./MassActions-D1nnBd7w.js";import"./Autocomplete-B7lvUJkZ.js";import"./TableGlide-DzeiQf28.js";import"./@glideappsfinal/glide-data-grid-uBYBN4Je.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BnEFvPen.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function G(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{G as default};
