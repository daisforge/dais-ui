import{j as e}from"./react-D2T61mpp.js";import{cc as o,cd as s,c6 as c}from"./vendor-DyskUa3R.js";import{C as t}from"./CanvasLink.stories-ClnigtCX.js";import"./react-is-Clcustum.js";import"./styled-components-Dk5h8vLx.js";import"./@tanstack/react-virtual-C-_FPY_A.js";import"./tslib-De9GV7Vy.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Dt8xRfXR.js";import"./FiltersActions-Gpsa9ZE5.js";import"./IconButton-CL8_KbII.js";import"./@salutejs/plasma-icons-DtkePaSU.js";import"./@salutejs/sdds-finai-D2mCi4R2.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-r6DIgRyT.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BBCb41Bg.js";import"./TextField-ARi4EvId.js";import"./sharedUtilsInputs-DdKXEku7.js";import"./AnalyticalWidget-s5EaFQsy.js";import"./Collapse-BPaM4yD6.js";import"./Table-BiGP4Hng.js";import"./react-data-grid-COE9myPN.js";import"./TableTabs-DGWc8_Mi.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-BfIq2Fs7.js";import"./ListOfFilters-C7F3Id8G.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-4yxCEElD.js";import"./EmptyState-Dq5R8LaK.js";import"./MassActions-BKuDN-gA.js";import"./Autocomplete-LhH3FtBb.js";import"./TableGlide-D_5H3XZ9.js";import"./@glideappsfinal/glide-data-grid-BEk6toGU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-8qzLcSq4.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
