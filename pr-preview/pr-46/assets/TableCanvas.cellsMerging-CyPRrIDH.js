import{j as n}from"./react-D2T61mpp.js";import{c6 as i,c7 as c,c0 as d,cb as s}from"./vendor-Ca3Rcr5K.js";import{C as o}from"./TableCanvas.cellsMerging.stories-C8YAsd1G.js";import{Showcase as h,SubRowsMerged as x,GroupingMerged as j}from"./TableCanvas.cellsMergingExamples.stories-BCIGGkkh.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";import"./DocStoryTemplate-Dt6KH5ne.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CDH4KCVj.js";import"./FiltersActions-CgT0YxkK.js";import"./IconButton-CYx5m0ft.js";import"./@salutejs/plasma-icons-DH_et0Tb.js";import"./@salutejs/sdds-finai-BaaqQyG7.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-BOxIorbb.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CsOzBWtM.js";import"./TextField-CQu78WyT.js";import"./sharedUtilsInputs-CvN6_Xgm.js";import"./AnalyticalWidget-B4B1POp3.js";import"./Collapse-bo3y3zGA.js";import"./Table-D4798a1r.js";import"./react-data-grid-Db8xSdWG.js";import"./TableTabs-3d7-vUiX.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CSzzoJBm.js";import"./ListOfFilters-BpFQHQXV.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-GHfP6JUT.js";import"./EmptyState-DPGf1hJj.js";import"./MassActions-CiN9EfVX.js";import"./Autocomplete-BZQ1HRKY.js";import"./TableGlide-CtmXyIQj.js";import"./@glideappsfinal/glide-data-grid-n9e9_XCI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-6gn8pPYG.js";import"./tableData-UCfjiBCh.js";function l(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:o,name:"Docs"}),`
`,n.jsx(e.h1,{id:"cellsmerging-tablecanvas",children:"CellsMerging (TableCanvas)"}),`
`,n.jsx(e.p,{children:`Объединение ячеек тела таблицы: по строкам (rowSpan), по колонкам (colSpan) и
прямоугольными блоками. Несколько одинаковых ячеек рисуются одной большой, а всё
взаимодействие — клики, выделение, навигация, копирование, вставка, протяжка,
редактирование — обращается с блоком как с одной ячейкой.`}),`
`,n.jsxs(e.p,{children:[`Эта страница — обзор: как выбрать способ и с чего начать, плюс живые примеры.
Подробности (совмещение способов, работа с деревом, выравнивание, сводные
ограничения) — в
`,n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA--docs",children:"Справочнике"}),`,
типы — в
`,n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-api--docs",children:"API"}),"."]}),`
`,n.jsx(e.h2,{id:"как-это-устроено",children:"Как это устроено"}),`
`,n.jsx(e.p,{children:"Главная идея простая: объединение — это способ показа, а не способ хранения."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`В данных значение повторяется в каждой строке блока. Если «Отдел А» тянется на
три строки, то во всех трёх строках в поле отдела записано «Отдел А».`}),`
`,n.jsx(e.li,{children:`Таблица замечает повторы (или получает границы блока явно) и вместо трёх
одинаковых ячеек рисует одну высокую. Содержимое берётся из верхней-левой
ячейки блока.`}),`
`,n.jsx(e.li,{children:`Данные при этом не меняются. Уберите объединение — увидите те же строки с теми
же значениями.`}),`
`]}),`
`,n.jsx(e.p,{children:`Отсюда следует и поведение, знакомое по Excel: клик в любую точку блока выделяет
блок целиком, правка блока меняет значение во всех его строках, копирование
отдаёт значение один раз.`}),`
`,n.jsx(e.h2,{id:"три-способа-включить-объединение",children:"Три способа включить объединение"}),`
`,n.jsx(e.p,{children:`Механика под всеми способами одна. Отличие — кто вычисляет границы блоков:
потребитель или таблица. Способы можно совмещать в одной таблице — правила в
Справочнике, глава «Если включено несколько способов сразу».`}),`
`,n.jsx(e.h3,{id:"1-mergecellsmergedcellsregions--блоки-заданные-снаружи",children:"1. mergeCells.mergedCellsRegions — блоки, заданные снаружи"}),`
`,n.jsx(e.p,{children:`«Слей вот эти конкретные ячейки». Список блоков по стабильным ключам строк и
колонок; списком владеет потребитель, как выделением. Таблица переводит ключи в
текущие видимые позиции. Если сортировка, перестановка или скрытие колонки
разорвали блок — он не рисуется (как ограничение сортировки в Excel).`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{
  mergeCells: {
    mergedCellsRegions: [
      { rowKeys: ['r1', 'r2'], colKeys: ['dept'] },
      { rowKeys: ['r4', 'r5'], colKeys: ['plan', 'fact'] }, // прямоугольник 2×2
    ],
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,n.jsxs(e.p,{children:["Примеры — стори с префиксом ",n.jsx(e.code,{children:"mergedCellsRegions:"})," ниже."]}),`
`,n.jsx(e.h3,{id:"2-mergecellsmergebycellvalues--по-одинаковым-значениям",children:"2. mergeCells.mergeByCellValues — по одинаковым значениям"}),`
`,n.jsx(e.p,{children:`«В этих колонках сливай подряд идущие одинаковые значения». Границы блоков
таблица вычисляет сама из данных; после сортировки или фильтра блоки
пересобираются.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{
  mergeCells: {
    mergeByCellValues: [
      'dept',                                             // по значению колонки
      { colKey: 'role', value: (row) => row.roleGroup },  // по своей функции
    ],
  },
}}
`})}),`
`,n.jsxs(e.p,{children:[`Одинаковые названия в разных ветках иерархии могут ложно слиться — лечится
составным ключом, разбор в Справочнике, глава «Объединение по значению: где
проходит граница». Примеры — стори с префиксом `,n.jsx(e.code,{children:"mergeByCellValues:"})," ниже."]}),`
`,n.jsx(e.h3,{id:"3-merged-виды-группировки-и-subrows--полный-автомат",children:"3. Merged-виды группировки и subRows — полный автомат"}),`
`,n.jsx(e.p,{children:`Потребитель включает вид — всю работу с блоками делает таблица: строки
упорядочиваются по группам, колонки уровней сливаются по границам групп, чекбокс
и нумерация работают по верхней группе.`}),`
`,n.jsx(e.p,{children:"Через группировку (структуру задают значения группирующих колонок):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{
  rowsGrouping: {
    view: 'merged',
    groupByState: [groupBy, setGroupBy], // например ['dept', 'role']
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,n.jsx(e.p,{children:"Через subRows (структуру задаёт готовое дерево потребителя):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`tableConfig={{
  subRows: {
    view: 'merged',
    mergedColumns: ['dept', 'role'], // колонки уровней дерева
    getSubRows: (row) => row.children,
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,n.jsx(e.p,{children:`Примеры — «subRows: дерево с пагинацией» и «rowsGrouping: группировка
пользователем» в конце страницы.`}),`
`,n.jsx(e.h2,{id:"какой-способ-выбрать",children:"Какой способ выбрать"}),`
`,n.jsx(e.p,{children:`Картинка у способов похожая, поэтому выбирать стоит не по внешнему виду, а по
тому, кто владеет данными и что нужно пользователю.`}),`
`,n.jsx(e.h3,{id:"дерево-приходит-с-сервера-нужна-постраничная-загрузка--subrows",children:"Дерево приходит с сервера, нужна постраничная загрузка — subRows"}),`
`,n.jsxs(e.p,{children:[`Если данные уже иерархические (дивизион, управление, команда, сотрудники) и
приходят от сервера частями, берите `,n.jsx(e.code,{children:"subRows"})," с ",n.jsx(e.code,{children:"view: 'merged'"}),`. Дерево остаётся
у вас: вы отдаёте таблице страницу дерева, она разворачивает её в строки и сама
сливает колонки-предки. Именно поэтому здесь работает пагинация по верхним
блокам — таблице не нужно видеть все данные сразу.`]}),`
`,n.jsx(e.p,{children:`Обратная сторона: раз данными владеете вы, то поиск, сортировка и фильтрация
дерева — тоже на вашей стороне. Формат дерева, пагинация и возврат правок —
в Справочнике, глава «Дерево через subRows».`}),`
`,n.jsx(e.h3,{id:"плоские-строки-пользователь-сам-выбирает-группировку--rowsgrouping",children:"Плоские строки, пользователь сам выбирает группировку — rowsGrouping"}),`
`,n.jsxs(e.p,{children:[`Если строки плоские, а пользователь должен на лету решать, по каким колонкам
группировать, — берите `,n.jsx(e.code,{children:"rowsGrouping"})," с ",n.jsx(e.code,{children:"view: 'merged'"}),`. Состав группировки живёт
в `,n.jsx(e.code,{children:"groupByState"}),", а с настройкой ",n.jsx(e.code,{children:"groupButton"}),` в блоке управления появляется
кнопка: пользователь сам выбирает колонки, таблица пересобирает блоки. Встроенные
поиск, сортировка и фильтры работают — таблица применяет их до сборки групп.`]}),`
`,n.jsxs(e.p,{children:[`Обратная сторона: пагинации в этом виде нет — таблице нужны все строки сразу.
Не действует и всё, что привязано к строкам-групп и шевронам дерева
(`,n.jsx(e.code,{children:"groupedColumnProps"}),", ",n.jsx(e.code,{children:"renderGroupCell"}),", ",n.jsx(e.code,{children:"expandAllBtn"}),`) — полный список в
Справочнике, глава «Что не работает и почему».`]}),`
`,n.jsx(e.h3,{id:"плоские-строки-группировка-фиксированная-всё-считает-сервер--mergebycellvalues",children:"Плоские строки, группировка фиксированная, всё считает сервер — mergeByCellValues"}),`
`,n.jsxs(e.p,{children:[`Если структура известна заранее и не меняется пользователем, а данные (включая
страницы, сортировку и фильтры) готовит сервер, — самый прямой путь это
`,n.jsx(e.code,{children:"mergeByCellValues"}),`. Вы упорядочиваете строки как нужно, таблица сливает соседние
одинаковые значения. Никакой лишней механики: ни кнопок, ни дерева.`]}),`
`,n.jsx(e.h3,{id:"отдельные-ручные-блоки--mergedcellsregions",children:"Отдельные ручные блоки — mergedCellsRegions"}),`
`,n.jsx(e.p,{children:`Шапки секций внутри таблицы, нестандартные прямоугольники, объединение по кнопке
или из контекстного меню — всё, что не выводится из значений, делается регионами.
Потребитель добавляет блок в свой список — таблица его рисует.`}),`
`,n.jsx(e.h2,{id:"смежные-разделы",children:"Смежные разделы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA--docs",children:"Справочник"}),` —
совмещение способов, составные ключи, дерево, выравнивание, сводные ограничения.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-api--docs",children:"CellsMerging API"}),` —
типы.`]}),`
`,n.jsxs(e.li,{children:["Объединение ячеек шапки — раздел ColumnsGrouping (",n.jsx(e.code,{children:"squashEmptyCells"}),")."]}),`
`]}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"полные-примеры",children:"Полные примеры"}),`
`,n.jsx(e.p,{children:`Три больших примера ниже собраны как заготовки для продуктов: в каждом —
объединение ячеек в связке с поиском, сортировкой, фильтрами, пагинацией,
редактированием и выделением. Различаются они тем, кто владеет данными, поэтому
и код обвязки разный. Полный код каждого примера открывается кнопкой «Show code»
и снабжён комментариями по ключевым местам.`}),`
`,n.jsx(e.h3,{id:"mergebycellvalues-пример-с-серверными-данными",children:"mergeByCellValues: пример с серверными данными"}),`
`,n.jsxs(e.p,{children:[`Данные плоские, всё считает «сервер» (в примере его заменяет функция
`,n.jsx(e.code,{children:"selectPage"}),"), таблица только рисует полученную страницу."]}),`
`,n.jsx(e.p,{children:"Что здесь показано:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["поиск, фильтры, сортировка и пагинация в ",n.jsx(e.code,{children:"manual"}),"-режиме — считает потребитель;"]}),`
`,n.jsxs(e.li,{children:["составные ключи пути (",n.jsx(e.code,{children:"divPath"})," / ",n.jsx(e.code,{children:"unitPath"})," / ",n.jsx(e.code,{children:"teamPath"}),`) против ложного
слияния одинаковых имён из разных веток;`]}),`
`,n.jsx(e.li,{children:"сортировка внутри команды — блоки не рассыпаются;"}),`
`,n.jsx(e.li,{children:"закрепление колонок вместе с групповой шапкой;"}),`
`,n.jsx(e.li,{children:"редактирование с возвратом правок страницы в полный набор."}),`
`]}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"subrows-дерево-с-пагинацией",children:"subRows: дерево с пагинацией"}),`
`,n.jsx(e.p,{children:`Данные — дерево, и оно остаётся у потребителя: таблице отдаётся страница целых
поддеревьев.`}),`
`,n.jsx(e.p,{children:"Что здесь показано:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"пагинация по верхним блокам (дивизионам) со своим списком «показывать по»;"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"manual"}),`-поиск, сортировка и фильтры, посчитанные по дереву
(функция `,n.jsx(e.code,{children:"selectTreePage"}),");"]}),`
`,n.jsx(e.li,{children:"сортировка показателей внутри команды и перестановка веток по имени;"}),`
`,n.jsx(e.li,{children:"возврат правок листьев обратно в дерево."}),`
`]}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"rowsgrouping-группировка-пользователем",children:"rowsGrouping: группировка пользователем"}),`
`,n.jsx(e.p,{children:`Данные плоские и передаются целиком, остальное делает таблица. Самый короткий
код из трёх.`}),`
`,n.jsx(e.p,{children:"Что здесь показано:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"встроенные поиск, сортировка и фильтры — применяются до сборки групп;"}),`
`,n.jsxs(e.li,{children:["выбор состава группировки пользователем (кнопка ",n.jsx(e.code,{children:"groupButton"}),");"]}),`
`,n.jsx(e.li,{children:"полный стейт фильтров: ключ на каждый фильтр из колонок;"}),`
`,n.jsx(e.li,{children:"без пагинации — чтобы собрать группы, таблице нужны все строки сразу."}),`
`]}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h2,{id:"как-перенести-пример-к-себе",children:"Как перенести пример к себе"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Замените данные и типы строк на свои. Сохраните стабильный ",n.jsx(e.code,{children:"id"}),` строки — на
нём держатся выделение и возврат правок, между страницами он меняться не
должен.`]}),`
`,n.jsxs(e.li,{children:["Замените ",n.jsx(e.code,{children:"selectPage"})," / ",n.jsx(e.code,{children:"selectTreePage"}),` реальным запросом к серверу. Контракт
тот же: параметры выборки на входе, страница и общее количество на выходе.`]}),`
`,n.jsxs(e.li,{children:["Проверьте, что в ",n.jsx(e.code,{children:"filtering.state"}),` есть ключ каждого фильтра из колонок (со
значением «показать всё»), — селект-фильтр без своего ключа молча отсеет все
строки.`]}),`
`,n.jsxs(e.li,{children:["Для ",n.jsx(e.code,{children:"mergeByCellValues"}),` заведите составные ключи пути, если одинаковые
названия возможны в разных ветках иерархии.`]}),`
`,n.jsx(e.li,{children:`Уберите фичи, которые вам не нужны, — настройки в примерах независимы друг от
друга: пагинация, закрепление, чекбоксы, редактирование отключаются по
отдельности.`}),`
`]})]})}function Z(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(l,{...r})}):l(r)}export{Z as default};
