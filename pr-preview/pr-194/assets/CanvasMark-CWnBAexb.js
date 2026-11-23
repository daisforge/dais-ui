import{j as r}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-BJXHd15o.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-DPY0jro6.js";import{C as t}from"./CanvasMark.stories-9QQCQxjN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BQ6ZyzFq.js";import"./@tanstack/react-virtual-BtAgCELQ.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-CztTgQbP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DUqtHKc3.js";import"./@sddsjs/sdds_finai-DqiyF2lT.js";import"./utils-1evaXQ7G.js";import"./constants-D9pWgtfS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CCc2M82T.js";import"./@salutejs/plasma-icons-D87bzLqR.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-CMCAxAlJ.js";import"./Box-yVZ__wCm.js";import"./Collapse-BpJhvNyY.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dyw7_8zY.js";import"./@daisforge/glide-data-grid-Ddyz9bvl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-Dl3ybQ3A.js";import"./sharedUiSearch-ttz439TP.js";import"./TextField-Bq_jSxbf.js";import"./sharedUtilsInputs-Z9Z1qut3.js";import"./TypographyWithAutoTooltip-BJOp4WMr.js";import"./Typography-wwPE7Tkw.js";import"./ListOfFilters-CVo-52s9.js";import"./Table-C71uzYkk.js";import"./react-data-grid-CTo1laTQ.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BNkFaJsn.js";import"./NumberFormat-CCkEtS_t.js";import"./EmptyState-BVPgIYqR.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-3P44Uq7b.js";import"./Autocomplete-BfJ_x4IL.js";import"./FiltersActions-Cas8V8u-.js";import"./IconButton-BhVPULzs.js";import"./TooltipList-C3e9_bOk.js";import"./ErrorPage-DR90XNEr.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:t,name:"Docs"}),`
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
