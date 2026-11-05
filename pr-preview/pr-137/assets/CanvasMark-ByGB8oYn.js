import{j as n}from"./react-CAOzMBF_.js";import{cf as i,cg as s,c9 as o}from"./vendor-COUnKIk6.js";import{C as t}from"./CanvasMark.stories-CogjLeYi.js";import"./react-is-vVGXX3JE.js";import"./styled-components-C1B15yVD.js";import"./@tanstack/react-virtual-B1itPQWL.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BwymtG6y.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-CyEBHczw.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BQpWD0T8.js";import"./@salutejs/plasma-icons-BtDXuAzo.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BC8BYxSQ.js";import"./IconButton-cRL0IAtx.js";import"./Box-XTw4vK77.js";import"./TextField-CrPunC8v.js";import"./sharedUtilsInputs-Du34ehWd.js";import"./AiAgentPopup-DR_B1Obh.js";import"./TextArea-CqL1mOTI.js";import"./sharedUtilsResizable-CkVuP6HL.js";import"./Table-DzjWun1G.js";import"./Collapse-Dj6imdg8.js";import"./react-data-grid-BQEIwlEM.js";import"./TableTabs-XTpYqiJK.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Z66gDIhg.js";import"./@glideappsfinal/glide-data-grid-wboW74Q1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-_XLPlX4C.js";import"./ListOfFilters-CrNgZJBY.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-DNQiAvzm.js";import"./EmptyState-D8Y0_SYG.js";import"./MassActions-OOnnrfFA.js";import"./Autocomplete-zsB5S45X.js";import"./ErrorPage-Co6vvMO1.js";function e(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
