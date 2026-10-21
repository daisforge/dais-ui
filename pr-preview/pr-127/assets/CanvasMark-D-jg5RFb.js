import{j as n}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as o}from"./vendor-D_V-7t_a.js";import{C as t}from"./CanvasMark.stories-CHYDq8Nz.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BW1VG-z-.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BfqV2dCC.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-OO_Vvml6.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CRm1Wy-6.js";import"./IconButton-CDffWwyq.js";import"./Box-CYTaRxTD.js";import"./TextField-CbKvrwjn.js";import"./sharedUtilsInputs-Uj0l5Zgs.js";import"./AiAgentPopup-DmG8MMRd.js";import"./TextArea-DOyuhzuw.js";import"./sharedUtilsResizable-TSzL2ToV.js";import"./Table-CY6CbUhw.js";import"./Collapse-CKPR3wDw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-8pV9igwr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Ctb8y2gn.js";import"./@glideappsfinal/glide-data-grid-C-fLDB5h.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DJzl3tlu.js";import"./ListOfFilters-CjDA7W98.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B31fjlrr.js";import"./EmptyState-DNA3EhLg.js";import"./MassActions-kX4VSd67.js";import"./Autocomplete-Dlta2FLD.js";import"./ErrorPage-CbyR0p9a.js";function e(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t,name:"Docs"}),`
`,n.jsx(a.h1,{id:"canvasmark",children:"Canvas.Mark"}),`
`,n.jsxs(a.p,{children:["Подсветка фрагмента текста внутри ",n.jsx(a.code,{children:"Canvas.Text"}),", ",n.jsx(a.code,{children:"Canvas.Link"})," или ",n.jsx(a.code,{children:"Canvas.Badge"}),": цветная пластина под частью строки."]}),`
`,n.jsx(a.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsxs(a.li,{children:["Работает только внутри ",n.jsx(a.code,{children:"Canvas.Text"}),", ",n.jsx(a.code,{children:"Canvas.Link"})," и ",n.jsx(a.code,{children:"Canvas.Badge"}),", отдельно не используется"]}),`
`,n.jsxs(a.li,{children:["Подсветка идёт по исходному тексту, поэтому корректно ложится на строки переноса (",n.jsx(a.code,{children:"wordWrap"}),")"]}),`
`,n.jsx(a.li,{children:"Фрагмент, разорванный переносом, получает отдельную пластину на каждой строке"}),`
`,n.jsxs(a.li,{children:["Несколько фрагментов в одном тексте — несколько ",n.jsx(a.code,{children:"Canvas.Mark"})]}),`
`,n.jsx(a.li,{children:"Если последняя видимая строка обрезана многоточием, пластина обрезается по ширине"}),`
`]}),`
`,n.jsx(a.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`<Canvas.Text wordWrap>
  до <Canvas.Mark color="#ffe27a">фрагмент</Canvas.Mark> после
</Canvas.Text>
`})}),`
`,n.jsxs(a.p,{children:["Выделяйте фрагмент, оборачивая его в ",n.jsx(a.code,{children:"Canvas.Mark"}),". Остальной текст остаётся обычными строками."]}),`
`,n.jsx(a.p,{children:"В ссылке и бейдже — так же:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`<Canvas.Link onClick={openReport}>
  <Canvas.Mark color="#ffe27a">Откр</Canvas.Mark>ыть свод
</Canvas.Link>

<Canvas.Badge>
  Трайб «<Canvas.Mark color="#ffe27a">Диджитал</Canvas.Mark> вкладов»
</Canvas.Badge>
// или текст с разметкой в пропе text
<Canvas.Badge text={<>Трайб «<Canvas.Mark color="#ffe27a">Диджитал</Canvas.Mark> вкладов»</>} />
`})}),`
`,n.jsx(a.p,{children:"Пример с поиском по тексту ссылок и бейджей — сторис «В ссылках и бейджах»."}),`
`,n.jsx(a.h2,{id:"высота-строки",children:"Высота строки"}),`
`,n.jsxs(a.p,{children:["Подсветка не меняет размеры текста. Чтобы строка таблицы вмещала перенесённый текст, задайте ",n.jsx(a.code,{children:"tableConfig.rowHeight: 'auto'"})," — см. ",n.jsx(a.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight--docs",children:"RowHeight"}),"."]}),`
`,n.jsxs(a.p,{children:["Описание типов — в разделе ",n.jsx(a.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark-api--docs",children:"API"}),"."]}),`
`,n.jsx(o,{})]})}function Q(r={}){const{wrapper:a}={...s(),...r.components};return a?n.jsx(a,{...r,children:n.jsx(e,{...r})}):e(r)}export{Q as default};
