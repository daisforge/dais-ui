import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as o}from"./vendor-DUKY-ZmD.js";import{C as t}from"./CanvasMark.stories-BEfYjtGF.js";import"./react-is-Clcustum.js";import"./styled-components-DexUWfrL.js";import"./@tanstack/react-virtual-Cr0lIrFi.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-_ZOliQRe.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-B7bM75xW.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BlXmPeRI.js";import"./@salutejs/plasma-icons-Dih4v0gS.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-D-_B-hw1.js";import"./IconButton-2EYMx7xU.js";import"./Box-DzoDF2Cl.js";import"./TextField-DTWtGsZA.js";import"./sharedUtilsInputs-nTDdyG6d.js";import"./AiAgentPopup-B3a2_caC.js";import"./TextArea-CRKH8gvq.js";import"./sharedUtilsResizable-BNivU2A4.js";import"./Table-RvW8Zx2O.js";import"./Collapse-dGbLemZS.js";import"./react-data-grid-UAUG1bC3.js";import"./TableTabs-COpRDDVL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CR1B7ydz.js";import"./@glideappsfinal/glide-data-grid-B3ucdcmY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DiIgDDKz.js";import"./ListOfFilters-L7YV_Ybl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-odUQWjcD.js";import"./EmptyState-Bicjyxvj.js";import"./MassActions-BRGBzJ8j.js";import"./Autocomplete-BBqSmVvF.js";import"./ErrorPage-FpU_bsEK.js";function e(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
