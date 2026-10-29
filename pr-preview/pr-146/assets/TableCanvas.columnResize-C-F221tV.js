import{j as i}from"./react-D2T61mpp.js";import{cf as o,cg as r,c9 as h}from"./vendor-BTgOIwj0.js";import{C as s}from"./TableCanvas.columnResize.stories-Dh0atxe2.js";import"./react-is-Clcustum.js";import"./styled-components-PB4DoqG2.js";import"./@tanstack/react-virtual-B3EvV2UQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C4a7uvc5.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D5Pb-Cj8.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-B84KHSWA.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CsahcQ0V.js";import"./@salutejs/plasma-icons-IcEIFYts.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-C1nZhs7l.js";import"./IconButton-BCM0YFM1.js";import"./Box-DRjMmnr9.js";import"./TextField--v3J_G2n.js";import"./sharedUtilsInputs-CFlPlIWZ.js";import"./AiAgentPopup-D6JdqjAn.js";import"./TextArea-DlhM1poH.js";import"./sharedUtilsResizable-CyABPlSh.js";import"./Table-Deb9Du_S.js";import"./Collapse-BUJKQXnc.js";import"./react-data-grid-DpCuKNZS.js";import"./TableTabs-DvrS0MvP.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BDLt1zMA.js";import"./@glideappsfinal/glide-data-grid-COOgAVL8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DuLvsSde.js";import"./ListOfFilters-CYjThT3P.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-AFwXkphx.js";import"./EmptyState-BubZ3CIh.js";import"./MassActions-Bb4P7pOw.js";import"./Autocomplete-BFYniy2H.js";import"./ErrorPage-CAAKLkMU.js";function e(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:s,name:"Docs"}),`
`,i.jsx(n.h1,{id:"column-resize-minwidth--maxwidth--maxautowidth",children:"Column Resize (minWidth / maxWidth / maxAutoWidth)"}),`
`,i.jsx(n.p,{children:"При наведении на разделитель в шапке появляется акцентная синяя линия на всю видимую высоту таблицы. При перетаскивании она следует за границей колонки. Линия не показывается, если изменение ширины отключено для таблицы или колонки."}),`
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
`,i.jsx(n.li,{children:"иконки слева от названия: пин закреплённой колонки, иконка перетаскивания за шапку, кнопка «раскрыть все» у колонки с подстроками;"}),`
`,i.jsx(n.li,{children:"место под одну букву названия с многоточием;"}),`
`,i.jsx(n.li,{children:"кнопки справа от названия: фильтр и сортировка, если они есть у колонки. Кнопки появляются при наведении, но место под них учитывается всегда, иначе при наведении они не поместились бы."}),`
`]}),`
`,i.jsxs(n.p,{children:["Поэтому колонка с фильтром и сортировкой не сожмётся так же узко, как колонка без них, а на большой строке минимум выше, чем на малой. Свой ",i.jsx(n.code,{children:"minWidth"})," колонки может только поднять эту границу: значение меньше автоматического минимума не действует. Фиксированный ",i.jsx(n.code,{children:"width"})," меньше минимума тоже поднимается до него."]}),`
`,i.jsx(n.p,{children:"Если название колонки всё же не помещается, оно сжимается до первой буквы с многоточием, а полное название показывается в тултипе."}),`
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
`,i.jsxs(n.p,{children:["Глобальный ",i.jsx(n.code,{children:"minColumnWidth"})," на колонки с данными сейчас не действует: у каждой такой колонки минимум всегда считается по содержимому шапки, и он приоритетнее. Параметр влияет только на служебные колонки."]}),`
`,i.jsx(n.h2,{id:"приоритеты",children:"Приоритеты"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Колоночные значения (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),") приоритетнее глобальных из ",i.jsx(n.code,{children:"tableConfig"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"minWidth"})," не может быть ниже автоматического минимума по содержимому шапки"]}),`
`,i.jsxs(n.li,{children:["Если ",i.jsx(n.code,{children:"minWidth"})," больше ",i.jsx(n.code,{children:"maxWidth"}),", приоритет у ",i.jsx(n.code,{children:"minWidth"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," не влияет на ручной ресайз — пользователь всегда может растянуть колонку шире"]}),`
`]}),`
`,i.jsxs(n.p,{children:["Полная типизация колонок: ",i.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-columnconfig--docs",children:"columnConfig API"}),"."]}),`
`,i.jsx(h,{})]})}function V(d={}){const{wrapper:n}={...o(),...d.components};return n?i.jsx(n,{...d,children:i.jsx(e,{...d})}):e(d)}export{V as default};
