import{j as r}from"./react-DYHuXpTF.js";import{dd as o}from"./vendor-mp8l63Ho.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-opuTDqCP.js";import{C as t}from"./CanvasMark.stories-CCtMqX8i.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-DJuuFW7o.js";import"./@tanstack/react-virtual-Bf_zwBlO.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-Deim4iXY.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CWF-FWG1.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-BG0hbt_n.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DHa74VUi.js";import"./@salutejs/plasma-icons-wDMzmI_C.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-D3xWh3lY.js";import"./Box-D92o8JBZ.js";import"./Collapse-B9yBjfXx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DeC_sa2e.js";import"./@daisforge/glide-data-grid-D59PDnqt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CsrlmC7O.js";import"./sharedUiSearch-dyhDuXRC.js";import"./TextField-Bli-zwWY.js";import"./sharedUtilsInputs-B2YHYxoS.js";import"./TypographyWithAutoTooltip-CVA0K4WN.js";import"./Typography-T8Ohpufv.js";import"./ListOfFilters-Cw-S9oeO.js";import"./Table-BHHarSeO.js";import"./react-data-grid-B-99mHK-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-wXqMuSB9.js";import"./NumberFormat-DHHUUJcn.js";import"./EmptyState-CLdIttbM.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BpuP8p-v.js";import"./Autocomplete-Do8fumv9.js";import"./FiltersActions-CM8jemmV.js";import"./IconButton-Dl2SfgPJ.js";import"./TooltipList-DDxSrS8o.js";import"./ErrorPage-BWqvDDex.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:t,name:"Docs"}),`
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
