import{j as n}from"./react-D2T61mpp.js";import{cf as o,cg as t,c9 as s}from"./vendor-Cy6vaFvA.js";import{A as c}from"./TableCanvas.appearance.stories-Bnts7Q12.js";import"./react-is-Clcustum.js";import"./styled-components-BVG9KNaZ.js";import"./@tanstack/react-virtual-DuyFBKnT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CiZBbkqd.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-DpH6BP9G.js";import"./IconButton-ZSwgo42J.js";import"./@salutejs/plasma-icons-BFHaPNub.js";import"./@salutejs/sdds-finai-DN-VTvmQ.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-Co1HaYhE.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BUf1dJQw.js";import"./TextField-CGZJhmDZ.js";import"./sharedUtilsInputs-BgN499Jz.js";import"./AiAgentPopup-C0bApLAJ.js";import"./TextArea-BGrH53dZ.js";import"./sharedUtilsResizable-lVhK15hL.js";import"./Table-BOx3WaqC.js";import"./Collapse-BBGjGWKA.js";import"./react-data-grid-OJf6xqML.js";import"./TableTabs-D6F1Voyu.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DjEzDjpq.js";import"./@glideappsfinal/glide-data-grid-B-yCBOjO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BjX3Tu7-.js";import"./ListOfFilters-BVvK-_D-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CzpZNbe5.js";import"./EmptyState-CDc_RjI9.js";import"./MassActions-qiv7Pr7v.js";import"./Autocomplete-B5RnPBgK.js";import"./TableCanvas-7Yjo4pV9.js";import"./ErrorPage-Fe15h7s3.js";function i(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c,name:"Docs"}),`
`,n.jsx(e.h1,{id:"appearance-tablecanvas",children:"Appearance (TableCanvas)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.appearance"})}),`
`,n.jsx(e.p,{children:`Внешний вид таблицы: преднастроенные конфигурации дизайн-системы. Сейчас это
«чистый» вид и зебра.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    appearance: { variant: 'clean', zebra: true },
  }}
/>
`})}),`
`,n.jsxs(e.h2,{id:"чистый-вид--variant-clean",children:["Чистый вид — ",n.jsx(e.code,{children:"variant: 'clean'"})]}),`
`,n.jsx(e.p,{children:"Таблица без линий и рамок:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`нет линий сетки, ни вертикальных, ни горизонтальных, в том числе у служебных
колонок (нумерация, чекбокс) и под шапкой;`}),`
`,n.jsx(e.li,{children:`нет внешних рамок у контейнера таблицы, блока управления, строки активных
фильтров, пагинации и скроллбаров;`}),`
`,n.jsxs(e.li,{children:["шапка на фоне ячеек, текст шапки серый (",n.jsx(e.code,{children:"text-secondary"}),`); групповая шапка и
итоговая строка на том же фоне;`]}),`
`,n.jsx(e.li,{children:"служебные колонки без собственной заливки: красятся вместе со строкой."}),`
`]}),`
`,n.jsx(e.p,{children:`Остальные цвета не меняются: hover строки, выделение ячеек и строк, отмеченная
чекбоксом строка, редактируемые и статусные ячейки берутся из той же палитры,
что и в обычном виде. Отступы, скругления углов и размеры строк не меняются.`}),`
`,n.jsxs(e.p,{children:["Линии сетки выключаются как ",n.jsx(e.code,{children:"borders: { vertical: false, horizontal: false }"}),`.
Явно заданный `,n.jsx(e.code,{children:"tableConfig.borders"}),` сильнее: в чистом виде можно точечно вернуть
нужные линии через `,n.jsx(e.code,{children:"getVerticalBorder"}),", ",n.jsx(e.code,{children:"getHorizontalBorder"}),` и
`,n.jsx(e.code,{children:"getCellBorder"}),"."]}),`
`,n.jsxs(e.h2,{id:"зебра--zebra-true",children:["Зебра — ",n.jsx(e.code,{children:"zebra: true"})]}),`
`,n.jsxs(e.p,{children:[`Чередование фона строк: первая, третья, пятая и далее строки окрашены цветом
`,n.jsx(e.code,{children:"surface-transparent-primary"}),`, остальные на обычном фоне. Красится вся строка,
включая служебные колонки. Чередование считается по отображаемым строкам, поэтому
при раскрытии `,n.jsx(e.code,{children:"subRows"}),` дочерние строки участвуют в нём наравне с родителями.
Итоговые строки не окрашиваются.`]}),`
`,n.jsxs(e.p,{children:[`Зебра это новый цвет покоя строки, а не наложение: hover, выделение ячеек и
выделение строки по нумерации считаются от него той же формулой, что и для
обычных строк, поэтому на окрашенной строке они на ступень темнее, чем на белой.
Отмеченная чекбоксом и выбранная (`,n.jsx(e.code,{children:"highlightActiveType: 'row'"}),`) строки сильнее
зебры и красятся своими цветами.`]}),`
`,n.jsxs(e.p,{children:["Зебра работает в любом ",n.jsx(e.code,{children:"variant"}),", по умолчанию выключена."]}),`
`,n.jsx(e.h2,{id:"что-ещё-учесть",children:"Что ещё учесть"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`Цвета для всех шести тем считает генератор палитры
(`,n.jsx(e.code,{children:"generators/table-token-states"}),"), руками ни один цвет не задаётся."]}),`
`,n.jsxs(e.li,{children:["В обычном виде (",n.jsx(e.code,{children:"variant: 'default'"}),`) служебные колонки сохраняют свой голубой
фон и в зебре не участвуют; как это должно выглядеть, уточняется у
дизайн-системы.`]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-appearance-api--docs",children:"Appearance API"})]}),`
`]}),`
`,n.jsx(s,{})]})}function U(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{U as default};
