import{j as n}from"./react-D2T61mpp.js";import{c6 as r,c7 as l,c0 as o}from"./vendor-DV2KdZ5r.js";import{T as c}from"./TableCanvas.columnsGrouping.stories-CbxUVVMg.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-ote7_b2_.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-CFPOXd2h.js";import"./IconButton-BG1jP3Ty.js";import"./@salutejs/plasma-icons-BcApNSC-.js";import"./@salutejs/sdds-finai-Bp-ifuS6.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-DLEIaJN_.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C4aqnFI9.js";import"./TextField-BqeZw0zh.js";import"./sharedUtilsInputs-BiAZZYsy.js";import"./AnalyticalWidget-BsHPaG1B.js";import"./Collapse-v3xqndDb.js";import"./Table-BPh9f4kZ.js";import"./react-data-grid-5SLMzt16.js";import"./TableTabs-v6GgVmE7.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Bp95cg8O.js";import"./ListOfFilters-B-t36gbw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DCefPJlt.js";import"./EmptyState-FbGaLYDP.js";import"./MassActions-CM35pIsd.js";import"./Autocomplete-DeBUn4cV.js";import"./TableCanvas-pe6ptXeG.js";import"./TableGlide-BvJxKMJU.js";import"./@glideappsfinal/glide-data-grid-BzvvTle-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DCgMUAFm.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c,name:"Docs"}),`
`,n.jsx(e.h1,{id:"columnsgrouping-tablecanvas",children:"ColumnsGrouping (TableCanvas)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"columnConfig.children"})}),`
`,n.jsx(e.p,{children:"Группировка колонок — вложенная структура шапки таблицы. Позволяет объединять несколько колонок под одним общим заголовком, создавая иерархию в шапке."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Поддержка многоуровневой вложенности (2, 3+ уровня)"}),`
`,n.jsxs(e.li,{children:["Совместимость с ",n.jsx(e.code,{children:"columnsControl"}),", ",n.jsx(e.code,{children:"resizableColumn"})]}),`
`,n.jsxs(e.li,{children:["Кастомизация ",n.jsx(e.code,{children:"name"})," через ",n.jsx(e.code,{children:"ReactNode"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"как-работает",children:"Как работает"}),`
`,n.jsxs(e.p,{children:["Для создания группы колонок используется ",n.jsx(e.code,{children:"ColumnGroupConfig"})," вместо обычного ",n.jsx(e.code,{children:"ColumnConfig"}),". Группа определяется наличием ключа ",n.jsx(e.code,{children:"children"}),", в котором перечисляются дочерние колонки или вложенные группы."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const columnConfig = [
  {
    name: 'Основные данные',
    children: [
      { key: 'name', name: 'Имя' },
      { key: 'age', name: 'Возраст' },
    ],
  },
  {
    name: 'Статистика',
    children: [
      { key: 'score', name: 'Баллы' },
      { key: 'rank', name: 'Ранг' },
    ],
  },
];
`})}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Группа не имеет собственного ",n.jsx(e.code,{children:"key"})," — это чисто визуальный элемент шапки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name"})," группы может быть строкой или ",n.jsx(e.code,{children:"ReactNode"})," для кастомного рендера"]}),`
`,n.jsxs(e.li,{children:["При использовании с ",n.jsx(e.code,{children:"columnsControl"})," скрытие/показ работает на уровне дочерних колонок, не на уровне группы"]}),`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"resizableColumn"})," ресайз работает на уровне дочерних колонок"]}),`
`]}),`
`,n.jsx(e.h2,{id:"слияние-ячеек-шапки-squashemptycells",children:"Слияние ячеек шапки (squashEmptyCells)"}),`
`,n.jsxs(e.p,{children:["В многоуровневой шапке рядом с группами остаются пустые ячейки: у одиночной колонки без группы — пустая полоса СВЕРХУ, у «мелкой» группы (под которой нет более глубоких подгрупп) — пустая полоса СНИЗУ. ",n.jsx(e.code,{children:"tableConfig.columnsGrouping.squashEmptyCells"})," схлопывает их: одиночная колонка тянется вверх, мелкая группа — вниз, всё одной ячейкой без пустых полос. ",n.jsx(e.strong,{children:"Включено по умолчанию"}),"; выключить — ",n.jsx(e.code,{children:"squashEmptyCells: false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{ columnsGrouping: { squashEmptyCells: true } }}
`})}),`
`,n.jsx(e.p,{children:"Один переключатель на всю таблицу — не нужно решать по каждой колонке/группе. Пример с тумблером — стори «Группировка (squash)»."}),`
`,n.jsx(e.h3,{id:"выравнивание-заголовка-в-слитой-ячейке",children:"Выравнивание заголовка в слитой ячейке"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"squashedHeaderAlign: { horizontal, vertical }"})," задаёт положение текста в слитой ячейке:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["дефолт на таблице — ",n.jsx(e.code,{children:"tableConfig.columnsGrouping.squashedHeaderAlign"}),";"]}),`
`,n.jsxs(e.li,{children:["точечно на колонке (лист) — ",n.jsx(e.code,{children:"columnConfig[].squashedHeaderAlign"}),";"]}),`
`,n.jsxs(e.li,{children:["точечно на группе — ",n.jsx(e.code,{children:"ColumnGroupConfig.squashedHeaderAlign"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Значение на колонке или группе перекрывает табличный дефолт."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"horizontal"})," — ",n.jsx(e.code,{children:"left | center | right"}),"; ",n.jsx(e.code,{children:"vertical"})," — ",n.jsx(e.code,{children:"top | center | bottom"}),". Дефолт — ",n.jsx(e.code,{children:"left"})," / по центру по высоте. Действует только на слитой шапке. Пример — стори «Выравнивание заголовка»."]}),`
`,n.jsx(e.h3,{id:"кастомный-контент-в-слитой-шапке",children:"Кастомный контент в слитой шапке"}),`
`,n.jsxs(e.p,{children:["Если ",n.jsx(e.code,{children:"name"})," колонки или группы — canvas-элемент (",n.jsx(e.code,{children:"Canvas.Text"})," / ",n.jsx(e.code,{children:"Canvas.Container"}),"), в слитой шапке он центрируется по всей высоте объединённой ячейки. Пример — группа с кастомным ",n.jsx(e.code,{children:"name"})," в стори «Группировка (squash)»."]}),`
`,n.jsx(e.h3,{id:"реордер-и-группы",children:"Реордер и группы"}),`
`,n.jsxs(e.p,{children:["Слияние совместимо с реордером колонок за шапку (",n.jsx(e.code,{children:"columnsControl.reorderingHeader"}),", включён по умолчанию при ",n.jsx(e.code,{children:"columnsControl.enable"}),"). Drag-иконка показывается на листовых колонках, у групп своей нет — перетаскиваются листья."]}),`
`,n.jsx(e.h2,{id:"ограничения--edge-кейсы",children:"Ограничения / edge-кейсы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Слияние имеет смысл при наличии групп в шапке (иначе групп-рядов нет и сливать нечего)."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"squashedHeaderAlign"})," действует только на слитой шапке (при ",n.jsx(e.code,{children:"squashEmptyCells"}),")."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-columnsgrouping-api--docs",children:"ColumnsGrouping API"})]}),`
`]}),`
`,n.jsx(o,{})]})}function O(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{O as default};
