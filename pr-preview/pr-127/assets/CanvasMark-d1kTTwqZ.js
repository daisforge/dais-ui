import{j as n}from"./react-D2T61mpp.js";import{cf as i,cg as s,c9 as o}from"./vendor-D_V-7t_a.js";import{C as t}from"./CanvasMark.stories-xEKYlUZV.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CF6z4t_Z.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BfqV2dCC.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-OO_Vvml6.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DyOzcOK_.js";import"./IconButton-CDffWwyq.js";import"./Box-CYTaRxTD.js";import"./TextField-CbKvrwjn.js";import"./sharedUtilsInputs-Uj0l5Zgs.js";import"./AiAgentPopup-CX8IDp7W.js";import"./TextArea-DOyuhzuw.js";import"./sharedUtilsResizable-TSzL2ToV.js";import"./Table-C54DFJaC.js";import"./Collapse-CKPR3wDw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-8pV9igwr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DPWbLbQS.js";import"./@glideappsfinal/glide-data-grid-Ckyymfn_.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DJzl3tlu.js";import"./ListOfFilters-XvefJef5.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B31fjlrr.js";import"./EmptyState-DeuBFZaX.js";import"./MassActions-DCtY5ecO.js";import"./Autocomplete-Dlta2FLD.js";import"./ErrorPage-Dxpl8euX.js";function e(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
`,n.jsx(o,{})]})}function Q(a={}){const{wrapper:r}={...i(),...a.components};return r?n.jsx(r,{...a,children:n.jsx(e,{...a})}):e(a)}export{Q as default};
