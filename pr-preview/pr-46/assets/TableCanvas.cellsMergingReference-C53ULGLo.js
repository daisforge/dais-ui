import{j as e}from"./react-D2T61mpp.js";import{c6 as r,c7 as d}from"./vendor-Ca3Rcr5K.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";function l(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Локальные компоненты/TableCanvas/CellsMerging/Справочник"}),`
`,e.jsx(n.h1,{id:"cellsmerging-справочник",children:"CellsMerging: справочник"}),`
`,e.jsxs(n.p,{children:[`Подробности объединения ячеек: совмещение способов, составные ключи, работа с
деревом, взаимодействие с остальными фичами таблицы, выравнивание и сводный
список ограничений. Обзор способов и живые примеры — на странице
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging--docs",children:"Docs"}),`, типы —
на странице
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-api--docs",children:"API"}),"."]}),`
`,e.jsx(n.h2,{id:"если-включено-несколько-способов-сразу",children:"Если включено несколько способов сразу"}),`
`,e.jsx(n.p,{children:"Способы можно совмещать в одной таблице — правила простые и считаются по колонке:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Если колонка входит хотя бы в один регион из ",e.jsx(n.code,{children:"mergedCellsRegions"}),`, её
объединения описывают только регионы. `,e.jsx(n.code,{children:"mergeByCellValues"}),` на этой колонке не
действует.`]}),`
`,e.jsxs(n.li,{children:[`Колонка merged-вида (группировки или subRows) сливается по границам групп.
Пользовательский `,e.jsx(n.code,{children:"mergeByCellValues"}),` на той же колонке не действует — иначе два
механизма спорили бы за одни ячейки.`]}),`
`,e.jsxs(n.li,{children:["В остальных случаях работает ",e.jsx(n.code,{children:"mergeByCellValues"}),"."]}),`
`,e.jsx(n.li,{children:`Разные колонки живут независимо: регион на одной колонке и слияние по значению
на другой — обычная рабочая комбинация.`}),`
`]}),`
`,e.jsxs(n.p,{children:[`Пример: таблица с группировкой по «Отделу» (merged-вид) может дополнительно
сливать колонку «Статус» через `,e.jsx(n.code,{children:"mergeByCellValues"}),`, а строки-заголовки секций
рисовать регионами на всю ширину — все три способа уживаются, потому что заняты
разными колонками.`]}),`
`,e.jsx(n.h2,{id:"объединение-по-значению-где-проходит-граница",children:"Объединение по значению: где проходит граница"}),`
`,e.jsxs(n.p,{children:["У ",e.jsx(n.code,{children:"mergeByCellValues"}),` есть классическая ловушка. Допустим, регионы «Север» и «Юг»,
и в каждом есть «Команда 1» и «Команда 2»:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Север | Команда 1 | Иванов
Север | Команда 2 | Петров
Юг    | Команда 2 | Сидоров
Юг    | Команда 1 | Смирнов
`})}),`
`,e.jsx(n.p,{children:`Если сливать колонку команды по её значению, «Команда 2» из Севера и «Команда 2»
из Юга стоят рядом — и сольются в один блок через границу региона. Визуально это
выглядит как ошибка: одна команда, а на деле две разные.`}),`
`,e.jsx(n.p,{children:`Решение — сливать не по тексту в ячейке, а по составному ключу, в котором зашит
путь от корня:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`mergeCells: {
  mergeByCellValues: [
    'region',
    // Сравнивается результат функции, а не текст в ячейке.
    { colKey: 'team', value: (row) => \`\${row.region} / \${row.team}\` },
  ],
}
`})}),`
`,e.jsx(n.p,{children:`Теперь у «Команды 2» из Севера ключ «Север / Команда 2», а у южной —
«Юг / Команда 2». Ключи разные, слияние останавливается на границе региона само,
без какой-либо отдельной логики. В ячейке при этом показывается обычное значение
колонки — функция влияет только на сравнение.`}),`
`,e.jsxs(n.p,{children:[`В полном примере (стори «mergeByCellValues: пример с серверными данными») такие
ключи собраны заранее в полях строки: `,e.jsx(n.code,{children:"divPath"}),", ",e.jsx(n.code,{children:"unitPath"}),", ",e.jsx(n.code,{children:"teamPath"}),` — по
одному на каждый уровень иерархии.`]}),`
`,e.jsx(n.p,{children:`Merged-виды группировки и subRows строят такие ключи сами — там об этой ловушке
думать не нужно.`}),`
`,e.jsx(n.h2,{id:"дерево-через-subrows-как-передавать-данные",children:"Дерево через subRows: как передавать данные"}),`
`,e.jsxs(n.p,{children:["Разберём подробнее самый ёмкий сценарий — ",e.jsx(n.code,{children:"subRows"})," с ",e.jsx(n.code,{children:"view: 'merged'"}),"."]}),`
`,e.jsx(n.h3,{id:"какое-дерево-ждёт-таблица",children:"Какое дерево ждёт таблица"}),`
`,e.jsxs(n.p,{children:["В ",e.jsx(n.code,{children:"rows"})," передаются корневые узлы, детей таблица достаёт через ",e.jsx(n.code,{children:"getSubRows"}),`.
Роли узлов распределены так:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Внутренние узлы"}),` (дивизион, управление, команда) — ярлыки уровней. Каждый
несёт поле с именем своей колонки из `,e.jsx(n.code,{children:"mergedColumns"}),`: узел дивизиона — поле
`,e.jsx(n.code,{children:"division"}),", узел управления — поле ",e.jsx(n.code,{children:"unit"}),", и так далее."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Листья"}),` — строки данных. Именно они становятся строками таблицы со своими
показателями; внутренние узлы отдельными строками не показываются.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const tree = [
  {
    id: 'd1',
    division: 'Розничный бизнес', // узел уровня 0
    subRows: [
      {
        id: 'u1',
        unit: 'Управление продаж', // узел уровня 1
        subRows: [
          {
            id: 't1',
            team: 'Команда Север', // узел уровня 2
            subRows: [
              { id: 'e1', employee: 'Иванов', plan: 100, fact: 90 }, // лист
              { id: 'e2', employee: 'Петров', plan: 80, fact: 85 },
            ],
          },
        ],
      },
    ],
  },
];
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  subRows: {
    view: 'merged',
    mergedColumns: ['division', 'unit', 'team'], // порядок = уровни дерева
    getSubRows: (row) => row.subRows,
    rowKeyGetter: (row) => row.id,
  },
}}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mergedColumns"}),` — это соответствие уровней дерева и колонок: первый элемент
показывает узлы верхнего уровня, второй — следующего, и так далее. Колонка
`,e.jsx(n.code,{children:"division"}),` возьмёт значение из узла дивизиона и сольётся на все его листья,
`,e.jsx(n.code,{children:"unit"})," — на листья своего управления, вложенно."]}),`
`,e.jsx(n.p,{children:`Сворачивания в этом виде нет: таблица показывает всё переданное дерево целиком.
Хотите меньше строк на экране — передайте меньший кусок дерева (следующий
раздел).`}),`
`,e.jsx(n.h3,{id:"пагинация-по-верхним-блокам",children:"Пагинация по верхним блокам"}),`
`,e.jsxs(n.p,{children:[`Дерево у вас, поэтому страницы нарезаете вы — по верхним узлам. Таблице отдаётся
срез дерева, а в `,e.jsx(n.code,{children:"pagination.count"})," — общее число верхних узлов:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(2); // дивизионов на страницу
const pageTree = tree.slice((page - 1) * perPage, page * perPage);

tableConfig={{
  pagination: {
    count: tree.length,     // всего верхних узлов, не листьев
    perPage,
    perPageList: [1, 2, 3], // варианты «показывать по» — в блоках
    value: page,
    onChange: (nextPage, nextPerPage) => {
      if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
        setPerPage(nextPerPage);
        setPage(1);
      } else if (typeof nextPage === 'number') {
        setPage(nextPage);
      }
    },
  },
  subRows: { /* как выше */ },
}}
// ...
rows={pageTree}
`})}),`
`,e.jsxs(n.p,{children:[`Страница «2 дивизиона» может содержать разное число строк-листьев — это нормально:
единица пагинации здесь блок, а не строка. По той же причине настройте селектор
«Показывать по»: его стандартные варианты (20/50/100) рассчитаны на строки и для
блоков не имеют смысла — задайте свой список `,e.jsx(n.code,{children:"perPageList"}),` в блоках, как выше,
либо спрячьте селектор (`,e.jsx(n.code,{children:"hasPerPage: false"}),`). Если дерево приходит с сервера
частями, вместо `,e.jsx(n.code,{children:"slice"})," будет запрос следующей страницы — контракт тот же."]}),`
`,e.jsx(n.h3,{id:"редактирование-правки-возвращаются-листьями",children:"Редактирование: правки возвращаются листьями"}),`
`,e.jsxs(n.p,{children:["Редактируются листья. В ",e.jsx(n.code,{children:"editing.onRowsChange"}),` приходят изменённые строки-листья —
записать их обратно в своё дерево должен потребитель, например по `,e.jsx(n.code,{children:"id"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`editing: {
  rowKeyGetter: (r) => r.id,
  onRowsChange: (updatedLeaves) => {
    const byId = new Map(updatedLeaves.map((r) => [r.id, r]));
    // Обойдите дерево и замените листья с совпавшими id.
    setTree((prev) => writeLeavesBack(prev, byId));
  },
},
`})}),`
`,e.jsx(n.p,{children:`Это следствие владения данными: таблица не знает, как устроено ваше дерево,
поэтому отдаёт плоский результат, а раскладываете его вы.`}),`
`,e.jsx(n.h3,{id:"что-остаётся-на-вашей-стороне",children:"Что остаётся на вашей стороне"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поиск, сортировка, фильтрация"}),` — встроенные механизмы к структурному дереву
пока не применяются. Отфильтровали или отсортировали своё дерево — передали
результат в `,e.jsx(n.code,{children:"rows"}),", таблица показала."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Выделение"}),` при этом работает из коробки: один чекбокс на верхний блок, клик
выделяет все его листья (подробнее — в разделе про выделение ниже).`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Живой пример всего вместе — стори «subRows: дерево с пагинацией» на странице
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging--docs",children:"Docs"}),"."]}),`
`,e.jsx(n.h2,{id:"объединение-и-остальные-возможности-таблицы",children:"Объединение и остальные возможности таблицы"}),`
`,e.jsx(n.p,{children:`Блоки — не отдельный мир: выделение, сортировка, буфер обмена и редактирование
продолжают работать. Здесь собрано, как именно.`}),`
`,e.jsx(n.h3,{id:"выделение-нумерация-и-навигация",children:"Выделение, нумерация и навигация"}),`
`,e.jsxs(n.p,{children:["Выделение настраивается как обычно — ",e.jsx(n.code,{children:"selecting"})," со стейтом и ",e.jsx(n.code,{children:"rowKeyGetter"}),`.
А вот ведёт оно себя по-разному в зависимости от способа объединения:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Плоский вид с mergeByCellValues"}),` — чекбокс у каждой строки, номер у каждой
строки. Объединение колонок на выделение не влияет: в стори
«mergeByCellValues: пример с серверными данными» можно выделить одного
сотрудника внутри слитого блока.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Merged-виды группировки и subRows"}),` — один чекбокс и один номер на группу
верхнего уровня. Клик по чекбоксу выделяет все строки группы разом, повторный —
снимает. «Выделить всё» в шапке тоже работает. Счётчик выбранного внизу
считает строки, а не группы: выделили дивизион из 12 сотрудников — внизу
«выбрано 12».`]}),`
`]}),`
`,e.jsx(n.p,{children:`Специально настраивать групповое поведение не нужно: таблица включает его сама,
когда активен merged-вид.`}),`
`,e.jsx(n.p,{children:`Навигация тоже понимает блоки: клик в любую точку блока выделяет его целиком,
рамка фокуса рисуется вокруг всего блока, один шаг стрелкой перепрыгивает блок.
Попасть «внутрь» блока с клавиатуры нельзя — для таблицы это одна ячейка.`}),`
`,e.jsx(n.h3,{id:"сортировка-фильтрация-поиск-и-пагинация",children:"Сортировка, фильтрация, поиск и пагинация"}),`
`,e.jsx(n.p,{children:"Возможности зависят от того, кто владеет данными."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"mergeByCellValues (плоский вид)."}),` Встроенные сортировка, фильтр и поиск
работают как обычно, а блоки пересобираются после каждого изменения порядка —
объединение всегда отражает текущий видимый список строк. Если данные приходят с
сервера постранично, следите, чтобы сортировка на сервере не разрывала группы:
половина группы на одной странице и половина на другой будут выглядеть как два
отдельных блока.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"rowsGrouping (view: 'merged')."}),` Встроенные поиск, сортировка и фильтры
работают: таблица применяет их к строкам до сборки групп, поэтому группы всегда
собираются из уже отфильтрованного списка. Пагинации нет: группировке нужны все
строки сразу. Сортировку по группирующим колонкам можно снять настройкой
`,e.jsx(n.code,{children:"disableGroupColumnsSort"}),` — как в дереве, где сгруппированные колонки не
сортируются.`]}),`
`,e.jsxs(n.p,{children:[`Частая ошибка при встроенных фильтрах (не только в этом виде): в стейте
`,e.jsx(n.code,{children:"filtering.state"}),` должен быть ключ каждого фильтра, объявленного в колонках.
Select-фильтр без своего ключа получит пустое значение вместо «показать всё» и
может отсеять все строки — таблица окажется пустой без единой ошибки.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"subRows (view: 'merged')."}),` Дерево у потребителя, поэтому пагинация по верхним
блокам работает: отдаёте страницу дерева — таблица её показывает. Встроенные
поиск, сортировка и фильтрация к структурному дереву пока не применяются — эти
операции делаются на стороне потребителя над его данными.`]}),`
`,e.jsx(n.h3,{id:"копирование-вставка-и-протяжка",children:"Копирование, вставка и протяжка"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Копирование отдаёт значение в позиции верхней-левой ячейки блока, остальные
ячейки блока в буфере пустые — как в Excel.`}),`
`,e.jsx(n.li,{children:"Вставка пишет во весь блок: значение попадает во все его строки."}),`
`,e.jsx(n.li,{children:`Протяжка (fill) растягивается только до целых блоков — залить пол-блока нельзя;
пунктирная рамка протяжки сама прилипает к границам блоков.`}),`
`]}),`
`,e.jsx(n.h3,{id:"редактирование",children:"Редактирование"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Правка ячейки блока записывает значение во все его строки — данные под блоком
всегда совпадают с тем, что на экране.`}),`
`,e.jsx(n.li,{children:`При объединении по значению правка пересобирает блоки: изменили «Отдел» у
блока — он разъедется или сольётся с соседним, потому что объединение выводится
из данных.`}),`
`,e.jsx(n.li,{children:`У редактируемых Select-ячеек редактор открывается по выравниванию блока: текст
прижат к низу — редактор откроется у нижнего края, а выпадающий список
раскроется вверх.`}),`
`]}),`
`,e.jsx(n.h2,{id:"выравнивание-контента-в-блоке",children:"Выравнивание контента в блоке"}),`
`,e.jsxs(n.p,{children:["По умолчанию контент блока выравнивается по горизонтали из ",e.jsx(n.code,{children:"contentAlign"}),` колонки
(иначе слева), по вертикали — по центру. Настраивается лестницей «точечное важнее
общего»:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mergedCellsAlign"})," конкретного региона (только для ",e.jsx(n.code,{children:"mergedCellsRegions"}),");"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mergedCellsAlign"}),` на колонке — все блоки этой колонки, работает для всех
способов включения;`]}),`
`,e.jsxs(n.li,{children:["дефолт фичи: ",e.jsx(n.code,{children:"mergeCells.mergedCellsAlign"})," или ",e.jsx(n.code,{children:"rowsGrouping.mergedCellsAlign"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`columnConfig={[
  { key: 'dept', name: 'Отдел', mergedCellsAlign: { horizontal: 'center', vertical: 'top' } },
]}
`})}),`
`,e.jsxs(n.p,{children:["Колоночный ",e.jsx(n.code,{children:"mergedCellsAlign"})," может быть и функцией ",e.jsx(n.code,{children:"(row) => MergedCellsAlign"}),`
по данным строки блока — так разные блоки одной колонки получают разное
выравнивание. Это единственный способ управлять выравниванием поблочно в
merged-видах группировки и subRows, где границы блоков решает таблица, а не
потребитель.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`columnConfig={[
  { key: 'dept', mergedCellsAlign: (row) =>
      row.critical ? { vertical: 'top' } : { vertical: 'center' } },
]}
`})}),`
`,e.jsx(n.h3,{id:"свой-рендер-в-блоке",children:"Свой рендер в блоке"}),`
`,e.jsxs(n.p,{children:["Выравнивание действует на текстовый контент. Кастомный ",e.jsx(n.code,{children:"renderCell"}),` получает весь
прямоугольник блока и выравнивает содержимое сам — через свойства своих
контейнеров.`]}),`
`,e.jsx(n.p,{children:`У колонок со своим рендером есть неочевидность: предпросмотр значения (по
двойному клику на ячейке без редактирования) у них по умолчанию выключен.
Со стороны это выглядит как «у блоков не открывается предпросмотр», хотя дело в
колонке, а не в объединении. Включается настройкой колонки:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{ key: 'dept', renderCell: ..., renderCellPreview: 'cellEditorAsPreview' }
`})}),`
`,e.jsx(n.h2,{id:"что-не-работает-и-почему",children:"Что не работает и почему"}),`
`,e.jsx(n.p,{children:"Сводный список ограничений. Если «что-то не рисуется» — сначала сюда."}),`
`,e.jsx(n.h3,{id:"во-всех-способах",children:"Во всех способах"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Все ячейки блока обязаны нести одинаковые данные — это контракт
`,e.jsx(n.code,{children:"mergeByCellValues"}),` (значения реально повторяются в строках) и регионов.
Причина проста: блок показывает верхнюю-левую `,e.jsx(n.strong,{children:"видимую"}),` ячейку, а какая
ячейка окажется верхней-левой — зависит от закрепления и порядка колонок.
Если данные одинаковые, блок выглядит одинаково при любой перестановке.`]}),`
`,e.jsx(n.li,{children:`Попасть «внутрь» блока с клавиатуры нельзя — для таблицы это одна ячейка.
Это поведение, а не ошибка.`}),`
`,e.jsx(n.li,{children:"Выравнивание пока не поддерживает письмо справа налево (RTL)."}),`
`,e.jsx(n.li,{children:`Горизонтальная протяжка через colSpan-блок не растягивается до границ блока
(в работе).`}),`
`,e.jsxs(n.li,{children:["У колонок со своим ",e.jsx(n.code,{children:"renderCell"}),` по умолчанию выключен предпросмотр значения —
включается `,e.jsx(n.code,{children:"renderCellPreview: 'cellEditorAsPreview'"}),` (см. «Свой рендер в
блоке» выше).`]}),`
`]}),`
`,e.jsx(n.h3,{id:"mergedcellsregions",children:"mergedCellsRegions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Разорванный регион исчезает молча: если после сортировки, перестановки или
скрытия колонок ключи региона перестали идти подряд, блок просто не рисуется.
Ошибок и предупреждений нет — следите за порядком сами.`}),`
`]}),`
`,e.jsx(n.h3,{id:"rowsgrouping-view-merged",children:"rowsGrouping (view: 'merged')"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Пагинации нет: чтобы собрать группы, таблице нужны все строки сразу."}),`
`,e.jsxs(n.li,{children:[`Отдельная колонка «Группировка» не создаётся, поэтому не действует всё, что к
ней привязано: `,e.jsx(n.code,{children:"groupedColumnProps"}),`, свой контент ячейки группы
(`,e.jsx(n.code,{children:"renderGroupCell"})," у колонки) и кнопка «развернуть всё» (",e.jsx(n.code,{children:"expandAllBtn"}),`) —
строк-групп и шевронов в этом виде нет.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"subrows-view-merged",children:"subRows (view: 'merged')"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Встроенные поиск, сортировка и фильтрация к структурному дереву не
применяются — эти операции делает потребитель над своими данными.`}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"column.subRow"})," целиком не действует: шеврон (",e.jsx(n.code,{children:"isColumnWithArrow"}),`), свой
контент и ключи вложенных уровней (`,e.jsx(n.code,{children:"renderSubRowCell"}),", ",e.jsx(n.code,{children:"keyOfColumnInSubRow"}),`,
`,e.jsx(n.code,{children:"parentKeyAsDefault"}),", ",e.jsx(n.code,{children:"contentFormat"}),`), свой редактор уровня. Листья рисуются
как обычные строки — работают их обычные `,e.jsx(n.code,{children:"renderCell"}),", ",e.jsx(n.code,{children:"contentFormat"}),` и
`,e.jsx(n.code,{children:"editingCell"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"expandedIdsState"}),` и сворачивание не действуют: раскрывать нечего, дерево
показано целиком.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Это осознанное поведение: один и тот же конфиг ",e.jsx(n.code,{children:"subRows"})," или ",e.jsx(n.code,{children:"rowsGrouping"}),`
можно переключать между `,e.jsx(n.code,{children:"view: 'tree'"})," и ",e.jsx(n.code,{children:"view: 'merged'"}),` — лишние настройки
другого вида не мешают. Пометки «работает только в виде дерева» есть и в
подсказках типов.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsmerging-api--docs",children:"CellsMerging API"})]}),`
`]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{j as default};
