import{j as e}from"./react-D2T61mpp.js";import{cf as i,cg as d,c9 as c,cl as l}from"./vendor-D_V-7t_a.js";import{C as o}from"./TableCanvas.cellsMerging.stories-C03bjzyZ.js";import{Showcase as h,SubRowsMerged as x,GroupingMerged as j}from"./TableCanvas.cellsMergingExamples.stories-B91UQqgH.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./DocStoryTemplate-BBdkpFVI.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-dSeoqcn-.js";import"./FiltersActions-HkTjSAr8.js";import"./IconButton-Ccn4UksK.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./@salutejs/sdds-finai-CCVgly2E.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DRPdSg45.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CYTaRxTD.js";import"./TextField-1tiUIhRw.js";import"./sharedUtilsInputs-CjCot3Kv.js";import"./AiAgentPopup-BaInsmnj.js";import"./TextArea-DaZBl3_t.js";import"./sharedUtilsResizable-CZBz5p8e.js";import"./Table-DT5LyPRu.js";import"./Collapse-D8NryjXw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-DxadsATc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DM-7xkOX.js";import"./@glideappsfinal/glide-data-grid-C-fLDB5h.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-lHetejzp.js";import"./ListOfFilters-UOj9_xA6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bfbbctir.js";import"./EmptyState-zxDobyZ4.js";import"./MassActions-KfImpKme.js";import"./Autocomplete-B9-NR3rI.js";import"./ErrorPage-B4KGxaHC.js";import"./tableData-DVJFoYoT.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Docs"}),`
`,e.jsx(n.h1,{id:"cellsmerging-tablecanvas",children:"CellsMerging (TableCanvas)"}),`
`,e.jsx(n.p,{children:`Объединение ячеек тела таблицы: по строкам (rowSpan), по колонкам (colSpan) и
прямоугольными блоками. Несколько одинаковых ячеек рисуются одной большой, а всё
взаимодействие — клики, выделение, навигация, копирование, вставка, протяжка,
редактирование — обращается с блоком как с одной ячейкой.`}),`
`,e.jsxs(n.p,{children:[`Эта страница — обзор: как выбрать способ и с чего начать, плюс живые примеры.
Подробности (совмещение способов, работа с деревом, выравнивание, сводные
ограничения) — в
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA--docs",children:"Справочнике"}),`,
типы — в
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-api--docs",children:"API"}),"."]}),`
`,e.jsx(n.h2,{id:"как-это-устроено",children:"Как это устроено"}),`
`,e.jsx(n.p,{children:"Главная идея простая: объединение — это способ показа, а не способ хранения."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`В данных значение повторяется в каждой строке блока. Если «Отдел А» тянется на
три строки, то во всех трёх строках в поле отдела записано «Отдел А».`}),`
`,e.jsx(n.li,{children:`Таблица замечает повторы (или получает границы блока явно) и вместо трёх
одинаковых ячеек рисует одну высокую. Содержимое берётся из верхней-левой
ячейки блока.`}),`
`,e.jsx(n.li,{children:`Данные при этом не меняются. Уберите объединение — увидите те же строки с теми
же значениями.`}),`
`]}),`
`,e.jsx(n.p,{children:`Отсюда следует и поведение, знакомое по Excel: клик в любую точку блока выделяет
блок целиком, правка блока меняет значение во всех его строках, копирование
отдаёт значение один раз.`}),`
`,e.jsx(n.h2,{id:"четыре-способа-включить-объединение",children:"Четыре способа включить объединение"}),`
`,e.jsx(n.p,{children:`Механика под всеми способами одна. Отличие — кто вычисляет границы блоков:
потребитель или таблица. Способы можно совмещать в одной таблице — правила в
Справочнике, глава «Если включено несколько способов сразу».`}),`
`,e.jsx(n.h3,{id:"1-mergecellsmergedcellsregions--блоки-заданные-снаружи",children:"1. mergeCells.mergedCellsRegions — блоки, заданные снаружи"}),`
`,e.jsx(n.p,{children:`«Слей вот эти конкретные ячейки». Список блоков по стабильным ключам строк и
колонок; списком владеет потребитель, как выделением. Таблица переводит ключи в
текущие видимые позиции. Если сортировка, перестановка или скрытие колонки
разорвали блок — он не рисуется (как ограничение сортировки в Excel).`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  mergeCells: {
    mergedCellsRegions: [
      { rowKeys: ['r1', 'r2'], colKeys: ['dept'] },
      { rowKeys: ['r4', 'r5'], colKeys: ['plan', 'fact'] }, // прямоугольник 2×2
    ],
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,e.jsxs(n.p,{children:["Примеры — стори с префиксом ",e.jsx(n.code,{children:"mergedCellsRegions:"})," ниже."]}),`
`,e.jsx(n.h3,{id:"2-mergecellsmergebycellvalues--по-одинаковым-значениям",children:"2. mergeCells.mergeByCellValues — по одинаковым значениям"}),`
`,e.jsx(n.p,{children:`«В этих колонках сливай подряд идущие одинаковые значения». Границы блоков
таблица вычисляет сама из данных; после сортировки или фильтра блоки
пересобираются.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  mergeCells: {
    mergeByCellValues: [
      'dept',                                             // по значению колонки
      { colKey: 'role', value: (row) => row.roleGroup },  // по своей функции
    ],
  },
}}
`})}),`
`,e.jsxs(n.p,{children:[`Одинаковые названия в разных ветках иерархии могут ложно слиться — лечится
составным ключом, разбор в Справочнике, глава «Объединение по значению: где
проходит граница». Примеры — стори с префиксом `,e.jsx(n.code,{children:"mergeByCellValues:"})," ниже."]}),`
`,e.jsx(n.h3,{id:"3-merged-виды-группировки-и-subrows--полный-автомат",children:"3. Merged-виды группировки и subRows — полный автомат"}),`
`,e.jsx(n.p,{children:`Потребитель включает вид — всю работу с блоками делает таблица: строки
упорядочиваются по группам, колонки уровней сливаются по границам групп, чекбокс
и нумерация работают по верхней группе.`}),`
`,e.jsx(n.p,{children:"Через группировку (структуру задают значения группирующих колонок):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  rowsGrouping: {
    view: 'merged',
    groupByState: [groupBy, setGroupBy], // например ['dept', 'role']
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,e.jsx(n.p,{children:"Через subRows (структуру задаёт готовое дерево потребителя):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  subRows: {
    view: 'merged',
    mergedColumns: ['dept', 'role'], // колонки уровней дерева
    getSubRows: (row) => row.children,
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,e.jsx(n.p,{children:`Примеры — «subRows: дерево с пагинацией» и «rowsGrouping: группировка
пользователем» в конце страницы.`}),`
`,e.jsx(n.h3,{id:"4-mergecellsgetrowspan--ленивый-резолвер-блоков",children:"4. mergeCells.getRowSpan — ленивый резолвер блоков"}),`
`,e.jsxs(n.p,{children:[`«Для этой ячейки скажу сам, где её блок». Функция получает ключ колонки и индекс
строки и возвращает первую и последнюю строку блока (включительно) или `,e.jsx(n.code,{children:"null"}),`.
Таблица вызывает её только для видимых ячеек — способ для больших и ленивых
данных, где обход всех строк (`,e.jsx(n.code,{children:"mergeByCellValues"}),") дорог."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  mergeCells: {
    // стабильная функция: при смене данных таблица перерисуется сама
    getRowSpan: (colKey, rowInd) =>
      colKey === 'region' ? blockBounds(rowInd) : null,
  },
}}
`})}),`
`,e.jsxs(n.p,{children:["Колонки из ",e.jsx(n.code,{children:"mergedCellsRegions"}),", ",e.jsx(n.code,{children:"mergeByCellValues"}),` и merged-видов берут блоки
оттуда, `,e.jsx(n.code,{children:"getRowSpan"}),` для них не вызывается. Пример — стори «getRowSpan: ленивые
блоки на 100 000 строк» ниже.`]}),`
`,e.jsx(n.h2,{id:"какой-способ-выбрать",children:"Какой способ выбрать"}),`
`,e.jsx(n.p,{children:`Картинка у способов похожая, поэтому выбирать стоит не по внешнему виду, а по
тому, кто владеет данными и что нужно пользователю.`}),`
`,e.jsx(n.h3,{id:"дерево-приходит-с-сервера-нужна-постраничная-загрузка--subrows",children:"Дерево приходит с сервера, нужна постраничная загрузка — subRows"}),`
`,e.jsxs(n.p,{children:[`Если данные уже иерархические (дивизион, управление, команда, сотрудники) и
приходят от сервера частями, берите `,e.jsx(n.code,{children:"subRows"})," с ",e.jsx(n.code,{children:"view: 'merged'"}),`. Дерево остаётся
у вас: вы отдаёте таблице страницу дерева, она разворачивает её в строки и сама
сливает колонки-предки. Именно поэтому здесь работает пагинация по верхним
блокам — таблице не нужно видеть все данные сразу.`]}),`
`,e.jsx(n.p,{children:`Обратная сторона: раз данными владеете вы, то поиск, сортировка и фильтрация
дерева — тоже на вашей стороне. Формат дерева, пагинация и возврат правок —
в Справочнике, глава «Дерево через subRows».`}),`
`,e.jsx(n.h3,{id:"плоские-строки-пользователь-сам-выбирает-группировку--rowsgrouping",children:"Плоские строки, пользователь сам выбирает группировку — rowsGrouping"}),`
`,e.jsxs(n.p,{children:[`Если строки плоские, а пользователь должен на лету решать, по каким колонкам
группировать, — берите `,e.jsx(n.code,{children:"rowsGrouping"})," с ",e.jsx(n.code,{children:"view: 'merged'"}),`. Состав группировки живёт
в `,e.jsx(n.code,{children:"groupByState"}),", а с настройкой ",e.jsx(n.code,{children:"groupButton"}),` в блоке управления появляется
кнопка: пользователь сам выбирает колонки, таблица пересобирает блоки. Встроенные
поиск, сортировка и фильтры работают — таблица применяет их до сборки групп.`]}),`
`,e.jsxs(n.p,{children:[`Обратная сторона: пагинации в этом виде нет — таблице нужны все строки сразу.
Не действует и всё, что привязано к строкам-групп и шевронам дерева
(`,e.jsx(n.code,{children:"groupedColumnProps"}),", ",e.jsx(n.code,{children:"renderGroupCell"}),", ",e.jsx(n.code,{children:"expandAllBtn"}),`) — полный список в
Справочнике, глава «Что не работает и почему».`]}),`
`,e.jsx(n.h3,{id:"плоские-строки-группировка-фиксированная-всё-считает-сервер--mergebycellvalues",children:"Плоские строки, группировка фиксированная, всё считает сервер — mergeByCellValues"}),`
`,e.jsxs(n.p,{children:[`Если структура известна заранее и не меняется пользователем, а данные (включая
страницы, сортировку и фильтры) готовит сервер, — самый прямой путь это
`,e.jsx(n.code,{children:"mergeByCellValues"}),`. Вы упорядочиваете строки как нужно, таблица сливает соседние
одинаковые значения. Никакой лишней механики: ни кнопок, ни дерева.`]}),`
`,e.jsx(n.h3,{id:"отдельные-ручные-блоки--mergedcellsregions",children:"Отдельные ручные блоки — mergedCellsRegions"}),`
`,e.jsx(n.p,{children:`Шапки секций внутри таблицы, нестандартные прямоугольники, объединение по кнопке
или из контекстного меню — всё, что не выводится из значений, делается регионами.
Потребитель добавляет блок в свой список — таблица его рисует.`}),`
`,e.jsx(n.h2,{id:"смежные-разделы",children:"Смежные разделы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA--docs",children:"Справочник"}),` —
совмещение способов, составные ключи, дерево, выравнивание, сводные ограничения.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-api--docs",children:"CellsMerging API"}),` —
типы.`]}),`
`,e.jsxs(n.li,{children:["Объединение ячеек шапки — раздел ColumnsGrouping (",e.jsx(n.code,{children:"squashEmptyCells"}),")."]}),`
`]}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"полные-примеры",children:"Полные примеры"}),`
`,e.jsx(n.p,{children:`Три больших примера ниже собраны как заготовки для продуктов: в каждом —
объединение ячеек в связке с поиском, сортировкой, фильтрами, пагинацией,
редактированием и выделением. Различаются они тем, кто владеет данными, поэтому
и код обвязки разный. Полный код каждого примера открывается кнопкой «Show code»
и снабжён комментариями по ключевым местам.`}),`
`,e.jsx(n.h3,{id:"mergebycellvalues-пример-с-серверными-данными",children:"mergeByCellValues: пример с серверными данными"}),`
`,e.jsxs(n.p,{children:[`Данные плоские, всё считает «сервер» (в примере его заменяет функция
`,e.jsx(n.code,{children:"selectPage"}),"), таблица только рисует полученную страницу."]}),`
`,e.jsx(n.p,{children:"Что здесь показано:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["поиск, фильтры, сортировка и пагинация в ",e.jsx(n.code,{children:"manual"}),"-режиме — считает потребитель;"]}),`
`,e.jsxs(n.li,{children:["составные ключи пути (",e.jsx(n.code,{children:"divPath"})," / ",e.jsx(n.code,{children:"unitPath"})," / ",e.jsx(n.code,{children:"teamPath"}),`) против ложного
слияния одинаковых имён из разных веток;`]}),`
`,e.jsx(n.li,{children:"сортировка внутри команды — блоки не рассыпаются;"}),`
`,e.jsx(n.li,{children:"закрепление колонок вместе с групповой шапкой;"}),`
`,e.jsx(n.li,{children:"редактирование с возвратом правок страницы в полный набор."}),`
`]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"subrows-дерево-с-пагинацией",children:"subRows: дерево с пагинацией"}),`
`,e.jsx(n.p,{children:`Данные — дерево, и оно остаётся у потребителя: таблице отдаётся страница целых
поддеревьев.`}),`
`,e.jsx(n.p,{children:"Что здесь показано:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"пагинация по верхним блокам (дивизионам) со своим списком «показывать по»;"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"manual"}),`-поиск, сортировка и фильтры, посчитанные по дереву
(функция `,e.jsx(n.code,{children:"selectTreePage"}),");"]}),`
`,e.jsx(n.li,{children:"сортировка показателей внутри команды и перестановка веток по имени;"}),`
`,e.jsx(n.li,{children:"возврат правок листьев обратно в дерево."}),`
`]}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"rowsgrouping-группировка-пользователем",children:"rowsGrouping: группировка пользователем"}),`
`,e.jsx(n.p,{children:`Данные плоские и передаются целиком, остальное делает таблица. Самый короткий
код из трёх.`}),`
`,e.jsx(n.p,{children:"Что здесь показано:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"встроенные поиск, сортировка и фильтры — применяются до сборки групп;"}),`
`,e.jsxs(n.li,{children:["выбор состава группировки пользователем (кнопка ",e.jsx(n.code,{children:"groupButton"}),");"]}),`
`,e.jsx(n.li,{children:"полный стейт фильтров: ключ на каждый фильтр из колонок;"}),`
`,e.jsx(n.li,{children:"без пагинации — чтобы собрать группы, таблице нужны все строки сразу."}),`
`]}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h2,{id:"как-перенести-пример-к-себе",children:"Как перенести пример к себе"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Замените данные и типы строк на свои. Сохраните стабильный ",e.jsx(n.code,{children:"id"}),` строки — на
нём держатся выделение и возврат правок, между страницами он меняться не
должен.`]}),`
`,e.jsxs(n.li,{children:["Замените ",e.jsx(n.code,{children:"selectPage"})," / ",e.jsx(n.code,{children:"selectTreePage"}),` реальным запросом к серверу. Контракт
тот же: параметры выборки на входе, страница и общее количество на выходе.`]}),`
`,e.jsxs(n.li,{children:["Проверьте, что в ",e.jsx(n.code,{children:"filtering.state"}),` есть ключ каждого фильтра из колонок (со
значением «показать всё»), — селект-фильтр без своего ключа молча отсеет все
строки.`]}),`
`,e.jsxs(n.li,{children:["Для ",e.jsx(n.code,{children:"mergeByCellValues"}),` заведите составные ключи пути, если одинаковые
названия возможны в разных ветках иерархии.`]}),`
`,e.jsx(n.li,{children:`Уберите фичи, которые вам не нужны, — настройки в примерах независимы друг от
друга: пагинация, закрепление, чекбоксы, редактирование отключаются по
отдельности.`}),`
`]})]})}function ne(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{ne as default};
