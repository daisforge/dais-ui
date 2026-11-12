import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as c}from"./vendor-Bj2v5t-1.js";import{C as d}from"./CanvasLink.stories-CioSV2iL.js";import"./react-is-Clcustum.js";import"./styled-components-BEgCOoGB.js";import"./@tanstack/react-virtual-yw1-e5aS.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Rq1O-F5f.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DFbuG0jD.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B-p3Wrf5.js";import"./@salutejs/plasma-icons-BuZssI3i.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B1-KfjyU.js";import"./IconButton-DWk4OQ99.js";import"./Box-C9EwcKwe.js";import"./TextField-DnwOLnGX.js";import"./sharedUtilsInputs-CkoGZrw1.js";import"./AiAgentPopup-Bhi3oPd5.js";import"./TextArea-BmM4XOV0.js";import"./sharedUtilsResizable-BQnAsbRf.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DqL3ZX5a.js";import"./Collapse-DlAIrW7d.js";import"./react-data-grid-BZL5sWps.js";import"./TableTabs-PIOj-Q1-.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BnGvs3Pt.js";import"./@glideappsfinal/glide-data-grid-DWF6JhMs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CgwtTRVe.js";import"./ListOfFilters-MUVqCEoo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CyMh_gjQ.js";import"./EmptyState-ACl1wB-h.js";import"./MassActions-D0l9arEw.js";import"./Autocomplete-CSua9LHj.js";import"./ErrorPage-CuT1LV-e.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"canvaslink",children:"Canvas.Link"}),`
`,e.jsxs(n.p,{children:["Ссылка с навигацией и underline внутри canvas-ячейки ",e.jsx(n.code,{children:"TableCanvas"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Несколько вариантов ",e.jsx(n.code,{children:"view"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'view="clear"'})," использует цвета ",e.jsx(n.code,{children:"default"})," как fallback — canvas не поддерживает ",e.jsx(n.code,{children:"inherit"})]}),`
`,e.jsxs(n.li,{children:["Поддержка ",e.jsx(n.code,{children:"href"}),", ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"disabled"})]}),`
`,e.jsxs(n.li,{children:["Наследует текстовые свойства от ",e.jsx(n.code,{children:"Canvas.Text"}),": ",e.jsx(n.code,{children:"wordWrap"}),", ",e.jsx(n.code,{children:"overflow"}),", ",e.jsx(n.code,{children:"textOverflow"}),", ",e.jsx(n.code,{children:"ellipsis"}),", ",e.jsx(n.code,{children:"maxLines"}),", ",e.jsx(n.code,{children:"autoTooltip"})]}),`
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
`,e.jsxs(n.p,{children:["Перенос включается явно через ",e.jsx(n.code,{children:"wordWrap"}),". Каждая видимая строка подчёркивается по длине её текста."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Container direction="row" alignItems="center" padding={8}>
  <Canvas.Link
    href="/details"
    wordWrap
    maxLines={2}
    overflow="hidden"
    textOverflow="ellipsis"
    autoTooltip
    style={{ flexGrow: 1 }}
  >
    Длинное название документа с переносом на несколько строк
  </Canvas.Link>
</Canvas.Container>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"maxLines"})," ограничивает количество строк при ",e.jsx(n.code,{children:"wordWrap"})," и ",e.jsx(n.code,{children:'overflow="hidden"'}),". ",e.jsx(n.code,{children:"maxLines={1}"})," сохраняет однострочное подчёркивание и ellipsis. ",e.jsx(n.code,{children:"autoTooltip"})," показывает полный текст при обрезке в многоточие."]}),`
`,e.jsxs(n.p,{children:["Высота строки таблицы не увеличивается автоматически: задайте ",e.jsx(n.code,{children:"tableConfig.rowHeight"})," с запасом под текст и padding, например ",e.jsx(n.code,{children:"72"})," для двух строк. Область клика остаётся прямоугольником всего блока ссылки."]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvaslink-api--docs",children:"API"}),"."]}),`
`,e.jsx(c,{})]})}function U(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{U as default};
