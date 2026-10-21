import{j as n}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as o}from"./vendor-DIjqEUEl.js";import{C as t}from"./CanvasMark.stories-Bpdrx7Yg.js";import"./react-is-Clcustum.js";import"./styled-components-C6nqWEvq.js";import"./@tanstack/react-virtual-BrusU8ao.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DEvwEKXh.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjF6Dnvr.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BWYHBdru.js";import"./@salutejs/plasma-icons-lvaNTfmN.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-C55-JVYY.js";import"./IconButton-D4JlXDHj.js";import"./Box-B7h5WACJ.js";import"./TextField-D9UJuNTn.js";import"./sharedUtilsInputs-mEaoQ5AP.js";import"./AiAgentPopup-DL3ui1_j.js";import"./TextArea-CrTsLuRa.js";import"./sharedUtilsResizable-DAkmtp1h.js";import"./Table-DtMwOnDj.js";import"./Collapse-CpJlFoZJ.js";import"./react-data-grid-sYi6Azdk.js";import"./TableTabs-CfOO1eZV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CjOCQ5UL.js";import"./@glideappsfinal/glide-data-grid-CX_t3Cwn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-C2VcXeyy.js";import"./ListOfFilters-JOL8osxo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D0LOxKLH.js";import"./EmptyState-BmQ77qQD.js";import"./MassActions-bWVfeZxF.js";import"./Autocomplete-C26J2WCn.js";import"./ErrorPage-Cg3RbSpY.js";function e(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t,name:"Docs"}),`
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
