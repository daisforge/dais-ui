import{j as e}from"./react-D2T61mpp.js";import{c2 as o,c3 as s,bY as c}from"./vendor-LViC24RH.js";import{C as t}from"./CanvasLink.stories-C5K_tMnz.js";import"./react-is-Clcustum.js";import"./styled-components--Gqam1Xr.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BwEi6Zc4.js";import"./FiltersActions-CFKT28Lb.js";import"./IconButton-CWauitIv.js";import"./@salutejs/plasma-icons-Cpu0f1vH.js";import"./@salutejs/sdds-finai-Bz9xN3Et.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-nQz3OA2C.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-f_gtZhFV.js";import"./TextField-Bobgd_vN.js";import"./sharedUtilsInputs-7dfKMe2h.js";import"./AnalyticalWidget-fF7YSteX.js";import"./Collapse-BYtMXauB.js";import"./Table-dS_q2168.js";import"./react-data-grid-EXl_r6YN.js";import"./TableTabs-D8GUesNj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CrB1z4ug.js";import"./ListOfFilters-CkdwTuPm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-5OggL8Cr.js";import"./EmptyState-NNrQ6HtT.js";import"./MassActions-nIvtPmoU.js";import"./Autocomplete-CNjyvMJW.js";import"./TableGlide-CJPa_8gJ.js";import"./@glideappsfinal/glide-data-grid-CWlS9if2.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-e7CC4uhd.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
