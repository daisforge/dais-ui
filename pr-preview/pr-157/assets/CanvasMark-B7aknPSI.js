import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as s,ca as o}from"./vendor-8LkLf-EW.js";import{C as t}from"./CanvasMark.stories-Ce1lpGEF.js";import"./react-is-Clcustum.js";import"./styled-components-977JO8e_.js";import"./@tanstack/react-virtual-DFitcOyT.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-23ZLkoq1.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-Bz10k1I6.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B1oBtYhP.js";import"./@salutejs/plasma-icons-BdpyX49f.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CnqrpbjN.js";import"./IconButton-F7tjg1RO.js";import"./Box-kyMLzOlr.js";import"./TextField-CqanmeIn.js";import"./sharedUtilsInputs-Dhx-TaFa.js";import"./AiAgentPopup-COwpX4KT.js";import"./TextArea-B9dO1dvT.js";import"./sharedUtilsResizable-0LtnTkr-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-Q5jA1-83.js";import"./Collapse-sIF2WGK9.js";import"./react-data-grid-DeoNXEWJ.js";import"./TableTabs-BTy1FtUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CwxIz85B.js";import"./@glideappsfinal/glide-data-grid-DyEz4IEh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSpqG_CO.js";import"./ListOfFilters-CbelxhcW.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-G9s9w3SE.js";import"./EmptyState-CZ-GbSXm.js";import"./MassActions-CY6kJZvr.js";import"./Autocomplete-K1up5yCj.js";import"./ErrorPage-DNwHXpvs.js";function i(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
