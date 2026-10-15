import{j as i}from"./react-D2T61mpp.js";import{cf as o,cg as r,c9 as h}from"./vendor-C8VuHz3V.js";import{C as s}from"./TableCanvas.columnResize.stories-DEaDmWwJ.js";import"./react-is-Clcustum.js";import"./styled-components-BpVVkBzC.js";import"./@tanstack/react-virtual-CcbeDy_e.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B-riaFPz.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CdW5lLpC.js";import"./FiltersActions-BBJtG2uO.js";import"./IconButton-Cyh6jX5Y.js";import"./@salutejs/plasma-icons-98834dYt.js";import"./@salutejs/sdds-finai-Cz7rM39w.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DPKiBQxU.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CcNAFjSN.js";import"./TextField-xGwV4-46.js";import"./sharedUtilsInputs-DulBkLnq.js";import"./AiAgentPopup-BOwjLeH4.js";import"./TextArea-DkKRutyA.js";import"./sharedUtilsResizable-k1DpAbyC.js";import"./Table-Cm1TIcJV.js";import"./Collapse-BFOVUS3J.js";import"./react-data-grid-B83SeY1o.js";import"./TableTabs-BQl_O17u.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BxObiBTx.js";import"./@glideappsfinal/glide-data-grid-DwMYPKa3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CHikPvVh.js";import"./ListOfFilters-DVcNOz0_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cn72JuoI.js";import"./EmptyState-BvkbGYoG.js";import"./MassActions-CuunVsGn.js";import"./Autocomplete-BLX4iX7d.js";import"./ErrorPage-B0chJuzn.js";function e(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:s,name:"Docs"}),`
`,i.jsx(n.h1,{id:"column-resize-minwidth--maxwidth--maxautowidth",children:"Column Resize (minWidth / maxWidth / maxAutoWidth)"}),`
`,i.jsxs(n.p,{children:["Ограничения ширины колонок. Задаются на уровне колонки (",i.jsx(n.code,{children:"columnConfig"}),") или глобально в ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'name',
    name: 'Название',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
  },
  {
    key: 'description',
    name: 'Описание',
    maxAutoWidth: 500,
  },
];
`})}),`
`,i.jsx(n.h2,{id:"поля-колонки",children:"Поля колонки"}),`
`,i.jsx(n.h3,{id:"minwidth",children:"minWidth"}),`
`,i.jsx(n.p,{children:"Минимальная ширина колонки (px). Колонка не может стать уже этого значения — ни при ресайзе мышкой, ни при автоматическом расчёте ширины."}),`
`,i.jsxs(n.p,{children:["У каждой колонки есть ещё минимум по содержимому шапки, он считается автоматически и ниже него колонку сжать нельзя даже с меньшим ",i.jsx(n.code,{children:"minWidth"}),". Подробнее в разделе «Минимум по содержимому шапки»."]}),`
`,i.jsx(n.h3,{id:"maxwidth",children:"maxWidth"}),`
`,i.jsxs(n.p,{children:["Максимальная ширина колонки (px). ",i.jsx(n.strong,{children:"Жёсткий потолок"})," — ограничивает всё: и автоматический расчёт ширины, и ручной ресайз мышкой. Колонка никогда не станет шире ",i.jsx(n.code,{children:"maxWidth"}),"."]}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"maxColumnWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h3,{id:"maxautowidth",children:"maxAutoWidth"}),`
`,i.jsxs(n.p,{children:["Максимальная ширина колонки при ",i.jsx(n.strong,{children:"автоматическом расчёте"})," (px). ",i.jsx(n.strong,{children:"Мягкий потолок"})," — колонка стремится не превышать это значение при автоматическом распределении ширин, но ",i.jsx(n.strong,{children:"пользователь может растянуть её шире"})," вручную."]}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"maxColumnAutoWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h4,{id:"отличие-maxautowidth-от-maxwidth",children:"Отличие maxAutoWidth от maxWidth"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxWidth"})," — жёсткий потолок. Ограничивает и автоматическую ширину, и ручной ресайз."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," — мягкий потолок. Ограничивает только автоматическую ширину. Ручной ресайз не ограничен."]}),`
`]}),`
`,i.jsxs(n.p,{children:["Если заданы оба — при автоматическом расчёте берётся ",i.jsx(n.strong,{children:"меньшее"})," из двух значений. При ручном ресайзе действует только ",i.jsx(n.code,{children:"maxWidth"}),"."]}),`
`,i.jsx(n.h2,{id:"начальная-ширина",children:"Начальная ширина"}),`
`,i.jsxs(n.p,{children:["Если у колонки задан ",i.jsx(n.code,{children:"width"}),", она рендерится с этой шириной (клампится в диапазон ",i.jsx(n.code,{children:"minWidth"}),"..",i.jsx(n.code,{children:"maxWidth"}),")."]}),`
`,i.jsxs(n.p,{children:["Если ",i.jsx(n.code,{children:"width"})," не задан — начальная ширина вычисляется автоматически. Колонки без фиксированной ширины заполняют свободное место в контейнере. При этом ",i.jsx(n.code,{children:"maxAutoWidth"})," ограничивает, насколько широко колонка может автоматически растянуться."]}),`
`,i.jsx(n.h2,{id:"минимум-по-содержимому-шапки",children:"Минимум по содержимому шапки"}),`
`,i.jsx(n.p,{children:"Шапка колонки должна оставаться читаемой при любой ширине, поэтому таблица сама считает нижнюю границу ширины колонки. В неё входят:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["отступы ячейки слева и справа по размеру строки (",i.jsx(n.code,{children:"rowSize"}),");"]}),`
`,i.jsx(n.li,{children:"иконки слева от названия: пин закреплённой колонки, троеточие перетаскивания за шапку, кнопка «раскрыть все» у колонки с подстроками;"}),`
`,i.jsx(n.li,{children:"место под одну букву названия с многоточием;"}),`
`,i.jsx(n.li,{children:"кнопки справа от названия: фильтр и сортировка, если они есть у колонки. Кнопки появляются при наведении, но место под них учитывается всегда, иначе при наведении они не поместились бы."}),`
`]}),`
`,i.jsxs(n.p,{children:["Поэтому колонка с фильтром и сортировкой не сожмётся так же узко, как колонка без них, а на большой строке минимум выше, чем на малой. Свой ",i.jsx(n.code,{children:"minWidth"})," колонки может только поднять эту границу: значение меньше автоматического минимума не действует."]}),`
`,i.jsxs(n.p,{children:["Если ширина всё же меньше минимума, например задана фиксированным ",i.jsx(n.code,{children:"width"}),", название сжимается до первой буквы с многоточием, а кнопки справа уходят за край ячейки."]}),`
`,i.jsx(n.h2,{id:"глобальные-ограничения",children:"Глобальные ограничения"}),`
`,i.jsxs(n.p,{children:["В ",i.jsx(n.code,{children:"tableConfig"})," можно задать ограничения по умолчанию для всех колонок:"]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    minColumnWidth: 80,
    maxColumnWidth: 600,
    maxColumnAutoWidth: 400,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,i.jsxs(n.p,{children:["Если у конкретной колонки задано своё значение (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),"), оно перебивает глобальное."]}),`
`,i.jsx(n.h2,{id:"приоритеты",children:"Приоритеты"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Колоночные значения (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),") приоритетнее глобальных из ",i.jsx(n.code,{children:"tableConfig"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"minWidth"})," не может быть ниже автоматического минимума по содержимому шапки"]}),`
`,i.jsxs(n.li,{children:["Если ",i.jsx(n.code,{children:"minWidth"})," больше ",i.jsx(n.code,{children:"maxWidth"}),", приоритет у ",i.jsx(n.code,{children:"minWidth"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," не влияет на ручной ресайз — пользователь всегда может растянуть колонку шире"]}),`
`]}),`
`,i.jsxs(n.p,{children:["Полная типизация колонок: ",i.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-columnconfig--docs",children:"columnConfig API"}),"."]}),`
`,i.jsx(h,{})]})}function U(d={}){const{wrapper:n}={...o(),...d.components};return n?i.jsx(n,{...d,children:i.jsx(e,{...d})}):e(d)}export{U as default};
