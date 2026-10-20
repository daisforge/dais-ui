import{j as n}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as o}from"./vendor-DIjqEUEl.js";import{C as t}from"./CanvasMark.stories-BebdVm75.js";import"./react-is-Clcustum.js";import"./styled-components-C6nqWEvq.js";import"./@tanstack/react-virtual-BrusU8ao.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DDL9mtrd.js";import"./FiltersActions-BxQ5k0W-.js";import"./IconButton-C_G_MJwv.js";import"./@salutejs/plasma-icons-lvaNTfmN.js";import"./@salutejs/sdds-finai-D2uJuLxf.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-CYIszD-q.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B7h5WACJ.js";import"./TextField-B9wzf2KE.js";import"./sharedUtilsInputs-moM0aqRU.js";import"./AiAgentPopup-DbX97dZ5.js";import"./TextArea-DBARJAd1.js";import"./sharedUtilsResizable-Cr_4F3EA.js";import"./Table-D65jDz5I.js";import"./Collapse--jNNTe4L.js";import"./react-data-grid-sYi6Azdk.js";import"./TableTabs-BANCnS2V.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Ca_uoAGP.js";import"./@glideappsfinal/glide-data-grid-CX_t3Cwn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DpgdcT8x.js";import"./ListOfFilters-r7eLo8kc.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ZL7weso3.js";import"./EmptyState-C2OU92Fy.js";import"./MassActions-Dh3qvSru.js";import"./Autocomplete-BCWyvAOv.js";import"./ErrorPage-wU8_wQ5Q.js";function e(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t,name:"Docs"}),`
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
`,n.jsx(o,{})]})}function O(r={}){const{wrapper:a}={...s(),...r.components};return a?n.jsx(a,{...r,children:n.jsx(e,{...r})}):e(r)}export{O as default};
