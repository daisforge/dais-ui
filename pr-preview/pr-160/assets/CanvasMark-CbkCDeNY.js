import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as s,ca as o}from"./vendor-Bj2v5t-1.js";import{C as t}from"./CanvasMark.stories-ksQFxXiS.js";import"./react-is-Clcustum.js";import"./styled-components-BEgCOoGB.js";import"./@tanstack/react-virtual-yw1-e5aS.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Rq1O-F5f.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DFbuG0jD.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B-p3Wrf5.js";import"./@salutejs/plasma-icons-BuZssI3i.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B1-KfjyU.js";import"./IconButton-DWk4OQ99.js";import"./Box-C9EwcKwe.js";import"./TextField-DnwOLnGX.js";import"./sharedUtilsInputs-CkoGZrw1.js";import"./AiAgentPopup-Bhi3oPd5.js";import"./TextArea-BmM4XOV0.js";import"./sharedUtilsResizable-BQnAsbRf.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DqL3ZX5a.js";import"./Collapse-DlAIrW7d.js";import"./react-data-grid-BZL5sWps.js";import"./TableTabs-PIOj-Q1-.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BnGvs3Pt.js";import"./@glideappsfinal/glide-data-grid-DWF6JhMs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CgwtTRVe.js";import"./ListOfFilters-MUVqCEoo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CyMh_gjQ.js";import"./EmptyState-ACl1wB-h.js";import"./MassActions-D0l9arEw.js";import"./Autocomplete-CSua9LHj.js";import"./ErrorPage-CuT1LV-e.js";function i(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
`,n.jsx(r.h1,{id:"canvasmark",children:"Canvas.Mark"}),`
`,n.jsxs(r.p,{children:["Подсветка фрагмента текста внутри ",n.jsx(r.code,{children:"Canvas.Text"}),", ",n.jsx(r.code,{children:"Canvas.Link"})," или ",n.jsx(r.code,{children:"Canvas.Badge"}),": цветная пластина под частью строки."]}),`
`,n.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Работает только внутри ",n.jsx(r.code,{children:"Canvas.Text"}),", ",n.jsx(r.code,{children:"Canvas.Link"})," и ",n.jsx(r.code,{children:"Canvas.Badge"}),", отдельно не используется"]}),`
`,n.jsxs(r.li,{children:["Подсветка идёт по исходному тексту, поэтому корректно ложится на строки переноса (",n.jsx(r.code,{children:"wordWrap"}),")"]}),`
`,n.jsx(r.li,{children:"Фрагмент, разорванный переносом, получает отдельную пластину на каждой строке"}),`
`,n.jsxs(r.li,{children:["Несколько фрагментов в одном тексте — несколько ",n.jsx(r.code,{children:"Canvas.Mark"})]}),`
`,n.jsx(r.li,{children:"Если последняя видимая строка обрезана многоточием, пластина обрезается по ширине"}),`
`]}),`
`,n.jsx(r.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`<Canvas.Text wordWrap>
  до <Canvas.Mark color="#ffe27a">фрагмент</Canvas.Mark> после
</Canvas.Text>
`})}),`
`,n.jsxs(r.p,{children:["Выделяйте фрагмент, оборачивая его в ",n.jsx(r.code,{children:"Canvas.Mark"}),". Остальной текст остаётся обычными строками."]}),`
`,n.jsx(r.p,{children:"В ссылке и бейдже — так же:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`<Canvas.Link onClick={openReport}>
  <Canvas.Mark color="#ffe27a">Откр</Canvas.Mark>ыть свод
</Canvas.Link>

<Canvas.Badge>
  Трайб «<Canvas.Mark color="#ffe27a">Диджитал</Canvas.Mark> вкладов»
</Canvas.Badge>
`})}),`
`,n.jsx(r.p,{children:"Пример с поиском по тексту ссылок и бейджей — сторис «В ссылках и бейджах»."}),`
`,n.jsx(r.h2,{id:"высота-строки",children:"Высота строки"}),`
`,n.jsxs(r.p,{children:["Подсветка не меняет размеры текста. Чтобы строка таблицы вмещала перенесённый текст, задайте ",n.jsx(r.code,{children:"tableConfig.rowHeight: 'auto'"})," — см. ",n.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight--docs",children:"RowHeight"}),"."]}),`
`,n.jsxs(r.p,{children:["Описание типов — в разделе ",n.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark-api--docs",children:"API"}),"."]}),`
`,n.jsx(o,{})]})}function U(a={}){const{wrapper:r}={...e(),...a.components};return r?n.jsx(r,{...a,children:n.jsx(i,{...a})}):i(a)}export{U as default};
