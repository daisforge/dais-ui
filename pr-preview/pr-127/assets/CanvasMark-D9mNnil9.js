import{j as r}from"./react-D2T61mpp.js";import{cf as e,cg as s,c9 as t}from"./vendor-D_V-7t_a.js";import{C as a}from"./CanvasMark.stories-DfSoFzkd.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-dSeoqcn-.js";import"./FiltersActions-HkTjSAr8.js";import"./IconButton-Ccn4UksK.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./@salutejs/sdds-finai-CCVgly2E.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DRPdSg45.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CYTaRxTD.js";import"./TextField-1tiUIhRw.js";import"./sharedUtilsInputs-CjCot3Kv.js";import"./AiAgentPopup-BaInsmnj.js";import"./TextArea-DaZBl3_t.js";import"./sharedUtilsResizable-CZBz5p8e.js";import"./Table-DT5LyPRu.js";import"./Collapse-D8NryjXw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-DxadsATc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DM-7xkOX.js";import"./@glideappsfinal/glide-data-grid-C-fLDB5h.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-lHetejzp.js";import"./ListOfFilters-UOj9_xA6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bfbbctir.js";import"./EmptyState-zxDobyZ4.js";import"./MassActions-KfImpKme.js";import"./Autocomplete-B9-NR3rI.js";import"./ErrorPage-B4KGxaHC.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a,name:"Docs"}),`
`,r.jsx(n.h1,{id:"canvasmark",children:"Canvas.Mark"}),`
`,r.jsxs(n.p,{children:["Подсветка фрагмента текста внутри ",r.jsx(n.code,{children:"Canvas.Text"})," или ",r.jsx(n.code,{children:"Canvas.Link"}),": цветная пластина под частью строки."]}),`
`,r.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["Работает только внутри ",r.jsx(n.code,{children:"Canvas.Text"})," и ",r.jsx(n.code,{children:"Canvas.Link"}),", отдельно от него не используется"]}),`
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
`,r.jsx(n.h2,{id:"высота-строки",children:"Высота строки"}),`
`,r.jsxs(n.p,{children:["Подсветка не меняет размеры текста. Чтобы строка таблицы вмещала перенесённый текст, задайте ",r.jsx(n.code,{children:"tableConfig.rowHeight: 'auto'"})," — см. ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight--docs",children:"RowHeight"}),"."]}),`
`,r.jsxs(n.p,{children:["Описание типов — в разделе ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark-api--docs",children:"API"}),"."]}),`
`,r.jsx(t,{})]})}function O(i={}){const{wrapper:n}={...e(),...i.components};return n?r.jsx(n,{...i,children:r.jsx(o,{...i})}):o(i)}export{O as default};
