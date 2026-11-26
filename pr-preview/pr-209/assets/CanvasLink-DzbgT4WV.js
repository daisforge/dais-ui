import{j as e}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-DTHFTCxs.js";import{M as s,S as d}from"./WithTooltip-KJL26V4Q-BXoGQxXq.js";import{C as t}from"./CanvasLink.stories-CGk18Ga4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-DjLIBw6y.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BGZk-FTG.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-7MphdwvM.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@salutejs/plasma-icons-BF2rNVOT.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Box-CAVr5OBu.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-CTGBfVd9.js";import"./@daisforge/glide-data-grid-D97_453q.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-qleR1gEq.js";import"./sharedUiSearch-CJDRPGoT.js";import"./TextField-1F9j25NL.js";import"./sharedUtilsInputs-BX82Dwrc.js";import"./Typography-CXQH0VfO.js";import"./ListOfFilters-hkoNcwhI.js";import"./FiltersActions-DfnVy1lY.js";import"./IconButton-De4CLxay.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B3DTr_Ly.js";import"./NumberFormat-DolH7SCh.js";import"./EmptyState-DUp-5WGM.js";import"./unidentified@3x-BWP3gjky.js";import"./ErrorPage-3JT73K9u.js";import"./Autocomplete-C6r0ozmF.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(n.h1,{id:"canvaslink",children:"Canvas.Link"}),`
`,e.jsxs(n.p,{children:["Ссылка с навигацией и underline внутри canvas-ячейки ",e.jsx(n.code,{children:"TableCanvas"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Несколько вариантов ",e.jsx(n.code,{children:"view"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'view="clear"'})," использует цвета ",e.jsx(n.code,{children:"default"})," как fallback — canvas не поддерживает ",e.jsx(n.code,{children:"inherit"})]}),`
`,e.jsxs(n.li,{children:["Поддержка ",e.jsx(n.code,{children:"href"}),", ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"disabled"})]}),`
`,e.jsxs(n.li,{children:["Наследует текстовые свойства от ",e.jsx(n.code,{children:"Canvas.Text"}),": ",e.jsx(n.code,{children:"wordWrap"}),", ",e.jsx(n.code,{children:"overflow"}),", ",e.jsx(n.code,{children:"textOverflow"}),", ",e.jsx(n.code,{children:"ellipsis"}),", ",e.jsx(n.code,{children:"maxLines"}),", ",e.jsx(n.code,{children:"autoTooltip"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"перехват-навигации",children:"Перехват навигации"}),`
`,e.jsxs(n.p,{children:["По умолчанию ",e.jsx(n.code,{children:"Canvas.Link"})," выполняет навигацию по ",e.jsx(n.code,{children:"href"})," после вызова ",e.jsx(n.code,{children:"onClick"}),`.
Для отмены навигации вызовите `,e.jsx(n.code,{children:"event.preventDefault()"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Link
  view="accent"
  href="/some-page"
  onClick={(event) => {
    event.preventDefault();
    openModal(row.id);
  }}
>
  Открыть
</Canvas.Link>
`})}),`
`,e.jsx(n.h2,{id:"многострочный-режим",children:"Многострочный режим"}),`
`,e.jsxs(n.p,{children:["Перенос включается явно через ",e.jsx(n.code,{children:"wordWrap"}),". Каждая видимая строка подчёркивается по длине её текста."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Container direction="row" alignItems="center" padding={8}>
  <Canvas.Link
    href="/details"
    wordWrap
    maxLines={2}
    overflow="hidden"
    textOverflow="ellipsis"
    autoTooltip
    style={{ flexGrow: 1 }}
  >
    Длинное название документа с переносом на несколько строк
  </Canvas.Link>
</Canvas.Container>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"maxLines"})," ограничивает количество строк при ",e.jsx(n.code,{children:"wordWrap"})," и ",e.jsx(n.code,{children:'overflow="hidden"'}),". ",e.jsx(n.code,{children:"maxLines={1}"})," сохраняет однострочное подчёркивание и ellipsis. ",e.jsx(n.code,{children:"autoTooltip"})," показывает полный текст при обрезке в многоточие."]}),`
`,e.jsxs(n.p,{children:["Высота строки таблицы не увеличивается автоматически: задайте ",e.jsx(n.code,{children:"tableConfig.rowHeight"})," с запасом под текст и padding, например ",e.jsx(n.code,{children:"72"})," для двух строк. Область клика остаётся прямоугольником всего блока ссылки."]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvaslink-api--docs",children:"API"}),"."]}),`
`,e.jsx(d,{})]})}function ne(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{ne as default};
