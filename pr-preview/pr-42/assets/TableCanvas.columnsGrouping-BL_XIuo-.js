import{j as n}from"./react-D2T61mpp.js";import{c4 as r,c5 as l,b_ as o}from"./vendor-B9_16pJt.js";import{T as c}from"./TableCanvas.columnsGrouping.stories-DlsdTVW0.js";import"./react-is-Clcustum.js";import"./styled-components-DsyoZJDS.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DiJAdvEC.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-O5t9w8O4.js";import"./IconButton-BKcoDZsO.js";import"./@salutejs/plasma-icons-Dv1GxiBC.js";import"./@salutejs/sdds-finai-IZHEqlfF.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-D0DbmO16.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B55i4OlY.js";import"./TextField-DFKursCu.js";import"./sharedUtilsInputs-CGph2UpZ.js";import"./AnalyticalWidget-DLYuQFti.js";import"./Collapse-Caa0z_Ow.js";import"./Table-CglBQ-O2.js";import"./react-data-grid-CD7lGWrv.js";import"./TableTabs-DPTpudh-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BB99zeRt.js";import"./ListOfFilters-CRZsNuJw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DbkvCu90.js";import"./EmptyState-C5WIHYMF.js";import"./MassActions-Cnw9OCOO.js";import"./Autocomplete-CjMKfftZ.js";import"./TableCanvas-ByZWopgp.js";import"./TableGlide-CULzmtyb.js";import"./@glideappsfinal/glide-data-grid-0ct_A4wu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CqpYoKmB.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c,name:"Docs"}),`
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
