import{j as r}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-mKquPocI.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-C9snA44b.js";import{C as t}from"./CanvasMark.stories-Bzq3lVuw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-ChsoKbNC.js";import"./@tanstack/react-virtual-QRzx54Th.js";import"./preload-helper-C_zUFXUY.js";import"./index-Cu4lwwaE.js";import"./index-Bq810BSt.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-B7jlUVHD.js";import"./@sddsjs/sdds_finai-D-rO1ecf.js";import"./utils-BKJAJHmZ.js";import"./constants-Dyz8I1EV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CBl2Z6DX.js";import"./@salutejs/plasma-icons-1TCGvzmd.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-B3wCTA8J.js";import"./Box-tzqS-Nh4.js";import"./Collapse-Dk4xyTvf.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-006Ssm5C.js";import"./@daisforge/glide-data-grid-CoDMDuM0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-C0CUs4D0.js";import"./sharedUiSearch-DZ1uL2Yj.js";import"./TextField-C-3ULIlg.js";import"./sharedUtilsInputs-DbZh-QRR.js";import"./TypographyWithAutoTooltip-skZwq5lh.js";import"./Typography-5KyJRrIU.js";import"./ListOfFilters-BlDMMOAw.js";import"./Table-D3Mm0M_U.js";import"./react-data-grid-CYj7lJMP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_QeVdxzl.js";import"./NumberFormat-B73BQGAM.js";import"./EmptyState-BoffFkaY.js";import"./unidentified@3x-B3KotUFa.js";import"./MassActions-D91OzxuB.js";import"./Autocomplete-CPscEsgX.js";import"./FiltersActions-CICr9Sel.js";import"./IconButton-CRMJuemm.js";import"./TooltipList-CTbOsFXH.js";import"./ErrorPage-CuasRas-.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:t,name:"Docs"}),`
`,r.jsx(n.h1,{id:"canvasmark",children:"Canvas.Mark"}),`
`,r.jsxs(n.p,{children:["Подсветка фрагмента текста внутри ",r.jsx(n.code,{children:"Canvas.Text"}),", ",r.jsx(n.code,{children:"Canvas.Link"})," или ",r.jsx(n.code,{children:"Canvas.Badge"}),": цветная пластина под частью строки."]}),`
`,r.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["Работает только внутри ",r.jsx(n.code,{children:"Canvas.Text"}),", ",r.jsx(n.code,{children:"Canvas.Link"})," и ",r.jsx(n.code,{children:"Canvas.Badge"}),", отдельно не используется"]}),`
`,r.jsxs(n.li,{children:["Подсветка идёт по исходному тексту, поэтому корректно ложится на строки переноса (",r.jsx(n.code,{children:"wordWrap"}),")"]}),`
`,r.jsx(n.li,{children:"Фрагмент, разорванный переносом, получает отдельную пластину на каждой строке"}),`
`,r.jsxs(n.li,{children:["Несколько фрагментов в одном тексте — несколько ",r.jsx(n.code,{children:"Canvas.Mark"})]}),`
`,r.jsx(n.li,{children:"Если последняя видимая строка обрезана многоточием, пластина обрезается по ширине"}),`
`]}),`
`,r.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<Canvas.Text wordWrap>
  до <Canvas.Mark color="#ffe27a">фрагмент</Canvas.Mark> после
</Canvas.Text>
`})}),`
`,r.jsxs(n.p,{children:["Выделяйте фрагмент, оборачивая его в ",r.jsx(n.code,{children:"Canvas.Mark"}),". Остальной текст остаётся обычными строками."]}),`
`,r.jsx(n.p,{children:"В ссылке и бейдже — так же:"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<Canvas.Link onClick={openReport}>
  <Canvas.Mark color="#ffe27a">Откр</Canvas.Mark>ыть свод
</Canvas.Link>

<Canvas.Badge>
  Трайб «<Canvas.Mark color="#ffe27a">Диджитал</Canvas.Mark> вкладов»
</Canvas.Badge>
`})}),`
`,r.jsx(n.p,{children:"Пример с поиском по тексту ссылок и бейджей — сторис «В ссылках и бейджах»."}),`
`,r.jsx(n.h2,{id:"высота-строки",children:"Высота строки"}),`
`,r.jsxs(n.p,{children:["Подсветка не меняет размеры текста. Чтобы строка таблицы вмещала перенесённый текст, задайте ",r.jsx(n.code,{children:"tableConfig.rowHeight: 'auto'"})," — см. ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight--docs",children:"RowHeight"}),"."]}),`
`,r.jsxs(n.p,{children:["Описание типов — в разделе ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark-api--docs",children:"API"}),"."]}),`
`,r.jsx(s,{})]})}function or(i={}){const{wrapper:n}={...o(),...i.components};return n?r.jsx(n,{...i,children:r.jsx(a,{...i})}):a(i)}export{or as default};
