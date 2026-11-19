import{j as e}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-ABAm7dM9.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-DNqkv6AN.js";import{C as c}from"./CanvasLink.stories-jWY48d5l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-gfSbfbVk.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BC-r5pnJ.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DtotkDJi.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-_4SaCD-p.js";import"./@glideappsfinal/glide-data-grid-DzB2WOB9.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./TableTabs-BBnsWNxR.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-Cbl4XGOH.js";import"./Typography-DHR5p_-g.js";import"./ListOfFilters-89QZfQ5J.js";import"./Table-BHm7A_HS.js";import"./react-data-grid-a6lPhyw4.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-Dr8_YlzM.js";import"./unidentified@3x-B0cgBGvv.js";import"./MassActions-DZOS8cH-.js";import"./Autocomplete-D4Dg924L.js";import"./FiltersActions-DMxqxWWU.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./ErrorPage-q7KReVQy.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
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
`,e.jsx(t,{})]})}function se(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{se as default};
