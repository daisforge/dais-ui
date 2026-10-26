import{j as e}from"./react-D2T61mpp.js";import{cf as r,cg as i,c9 as s}from"./vendor-DmlXfB6n.js";import{T as l}from"./TableCanvasDropdown.stories-E88SVyWm.js";import"./react-is-Clcustum.js";import"./styled-components-D3BTJ4t7.js";import"./@tanstack/react-virtual-DB5Ptt1B.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-BmU1TizI.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CBEOD9lf.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DhqjlIh0.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DZvjLWsU.js";import"./@salutejs/plasma-icons-DxvG4K4R.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BSKQczkC.js";import"./IconButton-DLyedcFD.js";import"./Box-D80y1dEe.js";import"./TextField-63cBokie.js";import"./sharedUtilsInputs-BVDtnJRn.js";import"./AiAgentPopup-BoxL_VdV.js";import"./TextArea-BXtZqJLt.js";import"./sharedUtilsResizable-xdFtCAfj.js";import"./Table-wo081aF0.js";import"./Collapse-C3r8kOlu.js";import"./react-data-grid-BYgM0Lfk.js";import"./TableTabs-CTFd2v_f.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cbbw3gi7.js";import"./@glideappsfinal/glide-data-grid-CEvIAez4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSU2ns8g.js";import"./ListOfFilters-BnF0fElF.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAqumv_3.js";import"./EmptyState-Bg4DWaYr.js";import"./MassActions-BxR_ht5-.js";import"./Autocomplete-Cx4MSU0r.js";import"./ErrorPage-CMJN5rYk.js";function d(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"дропдаун",children:"Дропдаун"}),`
`,e.jsx(n.p,{children:"Выпадающий список пунктов, который открывается по левому клику или наведению на элемент внутри ячейки: кнопку «три точки», кнопку действий, иконку. Пункты такие же, как у контекстного меню таблицы, подгружать их можно асинхронно."}),`
`,e.jsx(n.p,{children:"Чем отличается от соседних механизмов:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Контекстное меню (раздел ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-contextmenu--docs",children:"ContextMenu"}),") открывается правой кнопкой по ячейке или шапке целиком и настраивается в ",e.jsx(n.code,{children:"tableConfig"})," на всю таблицу. Дропдаун открывается левой кнопкой или наведением на конкретный элемент и настраивается на этом элементе."]}),`
`,e.jsxs(n.li,{children:["Поповер (раздел ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-popover--docs",children:"Popover"}),") показывает произвольную разметку. Дропдаун показывает список пунктов и сам обрабатывает выбор. Открытие, якорь и правила закрытия у них общие."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Задаётся пропом ",e.jsx(n.code,{children:"dropdown"})," на любом Canvas-элементе, без включателей в ",e.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,e.jsxs(n.li,{children:["Открывается по левому клику или по наведению (",e.jsx(n.code,{children:"trigger"}),")."]}),`
`,e.jsx(n.li,{children:"Пункты те же, что у контекстного меню: разделители, вложенные пункты, своя отрисовка."}),`
`,e.jsxs(n.li,{children:["Асинхронная подгрузка пунктов через ",e.jsx(n.code,{children:"getItems"})," с промисом, состояния загрузки и ошибки."]}),`
`,e.jsxs(n.li,{children:["Общие настройки для всей таблицы в ",e.jsx(n.code,{children:"tableConfig.dropdown"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"как-подключить",children:"Как подключить"}),`
`,e.jsxs(n.p,{children:["Добавьте проп ",e.jsx(n.code,{children:"dropdown"})," к Canvas-элементу в ",e.jsx(n.code,{children:"renderCell"}),", ",e.jsx(n.code,{children:"renderHeaderCell"})," или в ",e.jsx(n.code,{children:"name"})," группы колонок. Ничего включать в ",e.jsx(n.code,{children:"tableConfig"})," не нужно."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`renderCell: ({ row }) => (
  <Canvas.IconButton
    icon={<IconDotsVerticalCenteredOutline />}
    dropdown={{
      items: [
        { value: 'open', label: 'Открыть' },
        { value: 'copy', label: 'Копировать ссылку' },
        { value: 'delete', label: 'Удалить' },
      ],
      onItemSelect: (item) => handleAction(item.value, row),
    }}
  />
);
`})}),`
`,e.jsxs(n.p,{children:["Курсор над таким элементом становится ",e.jsx(n.code,{children:"pointer"}),"."]}),`
`,e.jsxs(n.p,{children:["Если на одном элементе заданы и ",e.jsx(n.code,{children:"popover"}),", и ",e.jsx(n.code,{children:"dropdown"}),", открывается поповер."]}),`
`,e.jsx(n.h2,{id:"как-это-устроено",children:"Как это устроено"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"На таблице открыт только один всплывающий слой. Новый дропдаун закрывает предыдущий, а также открытый поповер и поповер фильтра в шапке."}),`
`,e.jsxs(n.li,{children:["Дропдаун привязан к якорю: невидимому DOM-элементу, который таблица ставит точно на место нарисованного элемента. От границ якоря считаются ",e.jsx(n.code,{children:"placement"})," и ",e.jsx(n.code,{children:"offset"}),". Якорь не перехватывает клики, они идут на канвас."]}),`
`,e.jsxs(n.li,{children:["Если клик по элементу попал в дочерний элемент, который остановил всплытие (",e.jsx(n.code,{children:"event.stopPropagation()"}),"), дропдаун не открывается."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пункты",children:"Пункты"}),`
`,e.jsx(n.p,{children:"Пункты задаются одним из двух полей:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items"}),", готовый массив пунктов;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItems"}),", функция, которая возвращает пункты сразу или промисом. Вызывается при каждом открытии."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Тип пункта тот же, что у контекстного меню: ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"contentLeft"})," и ",e.jsx(n.code,{children:"contentRight"}),", разделители ",e.jsx(n.code,{children:"dividerBefore"})," и ",e.jsx(n.code,{children:"dividerAfter"}),", вложенные ",e.jsx(n.code,{children:"items"}),". Своя отрисовка пункта задаётся через ",e.jsx(n.code,{children:"renderItem"}),", содержимое над списком и под ним через ",e.jsx(n.code,{children:"beforeList"})," и ",e.jsx(n.code,{children:"afterList"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onItemSelect(item, { close })"})," вызывается при выборе пункта, в том числе пункта с вложенными пунктами. После выбора пункта без вложенных пунктов список закрывается (",e.jsx(n.code,{children:"closeOnSelect"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsxs(n.p,{children:["Конфиг элемента, как и у поповера, вычисляется в момент открытия: ",e.jsx(n.code,{children:"items"})," и колбэки берутся из того рендера ячейки, в котором дропдаун открыли. Для данных, которые должны быть свежими в момент открытия, используйте ",e.jsx(n.code,{children:"getItems"}),"."]}),`
`,e.jsx(n.h2,{id:"асинхронная-подгрузка-пунктов",children:"Асинхронная подгрузка пунктов"}),`
`,e.jsxs(n.p,{children:["Если ",e.jsx(n.code,{children:"getItems"})," вернул промис, список открывается сразу и показывает ",e.jsx(n.code,{children:"loadingItems"}),", пока промис не разрешился. По умолчанию это один неактивный пункт «Загрузка...»; для скелетонов задайте свои пункты и ",e.jsx(n.code,{children:"renderItem"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`dropdown={{
  getItems: () => api.loadActions(row.id),
  loadingItems: SKELETON_ITEMS,
  renderItem: (item) =>
    String(item.value).startsWith('__skeleton') ? <SkeletonRow /> : item.label,
  renderError: ({ error, retry }) => (
    <ErrorBlock message={String(error)} onRetry={retry} />
  ),
}}
`})}),`
`,e.jsxs(n.p,{children:["Если промис отклонился или ",e.jsx(n.code,{children:"getItems"})," бросил исключение, вместо списка показывается ",e.jsx(n.code,{children:"renderError({ error, retry, close })"}),". Без ",e.jsx(n.code,{children:"renderError"})," показывается неактивный пункт «Не удалось загрузить». Ответ, пришедший после закрытия дропдауна, игнорируется."]}),`
`,e.jsxs(n.p,{children:["Отличие от контекстного меню: там запросом владеет потребитель и перечитывает пункты из ",e.jsx(n.code,{children:"tableConfig"})," на каждом рендере. Дропдаун элемента получает промис и состояние загрузки держит сам."]}),`
`,e.jsx(n.h2,{id:"открытие-по-клику-и-по-наведению",children:"Открытие по клику и по наведению"}),`
`,e.jsxs(n.p,{children:["Поле ",e.jsx(n.code,{children:"trigger"})," на элементе: ",e.jsx(n.code,{children:"'click'"})," (по умолчанию) или ",e.jsx(n.code,{children:"'hover'"}),"."]}),`
`,e.jsx(n.p,{children:"Как ведёт себя дропдаун по наведению:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["открывается через ",e.jsx(n.code,{children:"mouseEnterDelay"})," (по умолчанию 300 мс), если курсор всё ещё над элементом;"]}),`
`,e.jsx(n.li,{children:"держится, пока курсор над элементом или над списком, в том числе на пути между ними;"}),`
`,e.jsxs(n.li,{children:["закрывается через ",e.jsx(n.code,{children:"mouseLeaveDelay"})," (по умолчанию 200 мс) после того, как курсор ушёл и с элемента, и со списка;"]}),`
`,e.jsx(n.li,{children:"клик мимо его не закрывает, он закроется, когда уйдёт курсор;"}),`
`,e.jsx(n.li,{children:"не перебивает открытый дропдаун или поповер по клику и фильтр в шапке;"}),`
`,e.jsx(n.li,{children:"если его закрыли, пока курсор остался на элементе (выбор пункта, Esc), заново он откроется только после того, как курсор уйдёт с элемента и вернётся."}),`
`]}),`
`,e.jsx(n.h2,{id:"закрытие",children:"Закрытие"}),`
`,e.jsx(n.p,{children:"Дропдаун закрывается:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["выбором пункта без вложенных пунктов (",e.jsx(n.code,{children:"closeOnSelect"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),");"]}),`
`,e.jsxs(n.li,{children:["кликом вне списка (",e.jsx(n.code,{children:"closeOnOutsideClick"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),"), для дропдауна по клику;"]}),`
`,e.jsx(n.li,{children:"повторным кликом по тому же элементу, для дропдауна по клику;"}),`
`,e.jsx(n.li,{children:"уходом курсора с элемента и списка, для дропдауна по наведению;"}),`
`,e.jsxs(n.li,{children:["по Esc (",e.jsx(n.code,{children:"closeOnEsc"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),");"]}),`
`,e.jsxs(n.li,{children:["скроллом таблицы по любой оси (",e.jsx(n.code,{children:"closeOnScroll"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),"): якорь нарисован на канвасе и за скроллом не едет;"]}),`
`,e.jsx(n.li,{children:"при ресайзе таблицы, переходе в полный экран, ресайзе или перестановке колонки;"}),`
`,e.jsxs(n.li,{children:["если на месте строки под дропдауном оказалась другая строка (сортировка, удаление, новые данные). Строки сравниваются по ключу из ",e.jsx(n.code,{children:"rowKeyGetter"})," (",e.jsx(n.code,{children:"editing"}),", ",e.jsx(n.code,{children:"selecting"}),", ",e.jsx(n.code,{children:"subRows"})," или ",e.jsx(n.code,{children:"mergeCells"}),"), а без него по ссылке;"]}),`
`,e.jsx(n.li,{children:"когда таблица скрывается (смена вида, оверлей загрузки);"}),`
`,e.jsxs(n.li,{children:["вызовом ",e.jsx(n.code,{children:"close"})," из ",e.jsx(n.code,{children:"onItemSelect"})," или ",e.jsx(n.code,{children:"renderError"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onOpen"})," и ",e.jsx(n.code,{children:"onClose"})," вызываются ровно по одному разу на каждое открытие."]}),`
`,e.jsx(n.h2,{id:"фокус-и-клавиатура",children:"Фокус и клавиатура"}),`
`,e.jsxs(n.p,{children:["Открытие дропдауна не забирает фокус у таблицы: стрелки и редактор ячейки продолжают работать, пока список открыт. Esc из таблицы закрывает список и до таблицы не доходит. Пункты выбираются мышью; открыть дропдаун и ходить по пунктам с клавиатуры пока нельзя. Для экранных дикторов задайте подпись списка через ",e.jsx(n.code,{children:"ariaLabel"}),"."]}),`
`,e.jsx(n.h2,{id:"настройки-и-значения-по-умолчанию",children:"Настройки и значения по умолчанию"}),`
`,e.jsxs(n.p,{children:["На элементе задаются: ",e.jsx(n.code,{children:"trigger"}),", ",e.jsx(n.code,{children:"items"})," или ",e.jsx(n.code,{children:"getItems"}),", ",e.jsx(n.code,{children:"onItemSelect"}),", ",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"offset"}),", ",e.jsx(n.code,{children:"listWidth"}),", ",e.jsx(n.code,{children:"listMaxHeight"}),", ",e.jsx(n.code,{children:"variant"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"zIndex"}),", ",e.jsx(n.code,{children:"closeOnSelect"}),", ",e.jsx(n.code,{children:"closeOnScroll"}),", ",e.jsx(n.code,{children:"closeOnOutsideClick"}),", ",e.jsx(n.code,{children:"closeOnEsc"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay"}),", ",e.jsx(n.code,{children:"loadingItems"}),", ",e.jsx(n.code,{children:"renderError"}),", ",e.jsx(n.code,{children:"renderItem"}),", ",e.jsx(n.code,{children:"beforeList"}),", ",e.jsx(n.code,{children:"afterList"}),", ",e.jsx(n.code,{children:"ariaLabel"}),", ",e.jsx(n.code,{children:"onOpen"}),", ",e.jsx(n.code,{children:"onClose"}),"."]}),`
`,e.jsxs(n.p,{children:["Чтобы не повторять одни и те же настройки на каждом элементе, их можно задать один раз для всей таблицы в ",e.jsx(n.code,{children:"tableConfig.dropdown"}),". Это только значения по умолчанию: значение на элементе важнее. Там доступны ",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"offset"}),", ",e.jsx(n.code,{children:"listWidth"}),", ",e.jsx(n.code,{children:"listMaxHeight"}),", ",e.jsx(n.code,{children:"variant"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"zIndex"}),", ",e.jsx(n.code,{children:"closeOnSelect"}),", ",e.jsx(n.code,{children:"closeOnScroll"}),", ",e.jsx(n.code,{children:"closeOnOutsideClick"}),", ",e.jsx(n.code,{children:"closeOnEsc"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay"}),", ",e.jsx(n.code,{children:"loadingItems"}),", ",e.jsx(n.code,{children:"renderError"}),". ",e.jsx(n.code,{children:"trigger"})," задаётся только на элементе."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  dropdown: {
    placement: 'right',
    listWidth: 200,
    variant: 'tight',
  },
}}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"listWidth"})," и ",e.jsx(n.code,{children:"size"})," по умолчанию зависят от размера строк таблицы, как у контекстного меню. Остальные встроенные значения: ",e.jsx(n.code,{children:"trigger: 'click'"}),", ",e.jsx(n.code,{children:"placement: 'bottom'"}),", ",e.jsx(n.code,{children:"offset: [0, 4]"}),", ",e.jsx(n.code,{children:"variant: 'normal'"}),", ",e.jsx(n.code,{children:"closeOnSelect: true"}),", ",e.jsx(n.code,{children:"closeOnScroll: true"}),", ",e.jsx(n.code,{children:"closeOnOutsideClick: true"}),", ",e.jsx(n.code,{children:"closeOnEsc: true"}),", ",e.jsx(n.code,{children:"mouseEnterDelay: 300"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay: 200"}),"."]}),`
`,e.jsxs(n.p,{children:["Подробное описание типов в разделе ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-dropdown-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function Q(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(d,{...c})}):d(c)}export{Q as default};
