import{j as n}from"./react-D2T61mpp.js";import{cg as s,ch as l,ca as c}from"./vendor-CFc4-7Jd.js";import{T as o}from"./TableCanvas.columnsGrouping.stories-CASY36t2.js";import"./react-is-Clcustum.js";import"./styled-components-DovKJdjj.js";import"./@tanstack/react-virtual-DWoDfeV2.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DTkyiz2F.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-CeVBMsH2.js";import"./IconButton-DE9Sh8zI.js";import"./@salutejs/plasma-icons-Djzn6CKf.js";import"./@salutejs/sdds-finai-CnvN9Ub_.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-3l8ykBQF.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BLVowlXD.js";import"./TextField-C5Tl7ypA.js";import"./sharedUtilsInputs-cFXSU-6k.js";import"./AiAgentPopup-BEpt9dNu.js";import"./TextArea-BceZCdLD.js";import"./sharedUtilsResizable-CFfwexD1.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-aZX8yLyR.js";import"./Collapse-CcEfL7lO.js";import"./react-data-grid-jVs33wBT.js";import"./TableTabs-Dbt4U854.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BTNKI3-N.js";import"./@glideappsfinal/glide-data-grid-CFO_0xaS.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DIKPpMft.js";import"./ListOfFilters-Dm4Pda3y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FNYxGGLD.js";import"./EmptyState-CfctcnUG.js";import"./MassActions-gkg95n9N.js";import"./Autocomplete-BknfDEPG.js";import"./TableCanvas-CeBttP4k.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-BsFbBpU0.js";function r(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:o,name:"Docs"}),`
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
`,n.jsx(e.h2,{id:"клик-по-заголовку-группы",children:"Клик по заголовку группы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"tableConfig.onGroupHeaderClicked(colIndex, { key, children }, event)"}),` и
`,n.jsx(e.code,{children:"tableConfig.onGroupHeaderContextMenu(colIndex, { key, children }, event)"}),` — клик
и правый клик по заголовку группы. Второй аргумент — группа уровня, по которому
кликнули, из `,n.jsx(e.code,{children:"columnConfig"}),": ",n.jsx(e.code,{children:"key"})," и ",n.jsx(e.code,{children:"children"}),` (вложенные колонки и подгруппы).
`,n.jsx(e.code,{children:"event"})," — событие glide, в ",n.jsx(e.code,{children:"event.group"}),` тот же ключ.
`,n.jsx(e.code,{children:"colIndex"}),` — индекс колонки в координатах грида: служебные колонки слева
(нумерация `,n.jsx(e.code,{children:"rowMarkers"}),", чекбоксы ",n.jsx(e.code,{children:"selecting"}),") входят в счёт."]}),`
`,n.jsx(e.li,{children:"Клик по группе выделяет её колонки (если включено выделение колонок)."}),`
`,n.jsxs(e.li,{children:["Canvas-элементы в кастомном ",n.jsx(e.code,{children:"name"}),` группы получают клик первыми, как в листовой
шапке: кнопка с `,n.jsx(e.code,{children:"interaction={{ selection: 'keep', cellClick: 'stop' }}"}),`
обрабатывает клик сама, группа при этом не выделяется и обработчик группы не
вызывается. Пример — стори «Клик по заголовку группы».`]}),`
`]}),`
`,n.jsx(e.h2,{id:"ограничения--edge-кейсы",children:"Ограничения / edge-кейсы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Слияние имеет смысл при наличии групп в шапке (иначе групп-рядов нет и сливать нечего)."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"squashedHeaderAlign"})," действует только на слитой шапке (при ",n.jsx(e.code,{children:"squashEmptyCells"}),")."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-columnsgrouping-api--docs",children:"ColumnsGrouping API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function Z(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{Z as default};
