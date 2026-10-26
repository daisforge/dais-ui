import{j as e}from"./react-D2T61mpp.js";import{cf as i,cg as r,c9 as l}from"./vendor-DmlXfB6n.js";import{T as d}from"./TableCanvasPopover.stories-BplazRpB.js";import"./react-is-Clcustum.js";import"./styled-components-D3BTJ4t7.js";import"./@tanstack/react-virtual-DB5Ptt1B.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-BmU1TizI.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CBEOD9lf.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DhqjlIh0.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DZvjLWsU.js";import"./@salutejs/plasma-icons-DxvG4K4R.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BSKQczkC.js";import"./IconButton-DLyedcFD.js";import"./Box-D80y1dEe.js";import"./TextField-63cBokie.js";import"./sharedUtilsInputs-BVDtnJRn.js";import"./AiAgentPopup-BoxL_VdV.js";import"./TextArea-BXtZqJLt.js";import"./sharedUtilsResizable-xdFtCAfj.js";import"./Table-wo081aF0.js";import"./Collapse-C3r8kOlu.js";import"./react-data-grid-BYgM0Lfk.js";import"./TableTabs-CTFd2v_f.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cbbw3gi7.js";import"./@glideappsfinal/glide-data-grid-CEvIAez4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSU2ns8g.js";import"./ListOfFilters-BnF0fElF.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAqumv_3.js";import"./EmptyState-Bg4DWaYr.js";import"./MassActions-BxR_ht5-.js";import"./Autocomplete-Cx4MSU0r.js";import"./ErrorPage-CMJN5rYk.js";function s(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"поповер",children:"Поповер"}),`
`,e.jsx(n.p,{children:"Всплывающий блок с произвольным содержимым, который открывается по клику или наведению на элемент внутри ячейки: кнопку, иконку, любой другой Canvas-элемент. Пригодится для подсказки с разметкой, карточки с деталями строки, небольшой формы."}),`
`,e.jsxs(n.p,{children:["Если нужен не произвольный блок, а список пунктов с выбором (меню действий по кнопке «три точки»), используйте дропдаун: раздел ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-dropdown--docs",children:"Dropdown"}),". Открытие, якорь и правила закрытия у него те же."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Задаётся пропом ",e.jsx(n.code,{children:"popover"})," на любом Canvas-элементе, без включателей в ",e.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,e.jsxs(n.li,{children:["Открывается по клику или по наведению (",e.jsx(n.code,{children:"trigger"}),")."]}),`
`,e.jsxs(n.li,{children:["Содержимое любое: готовый узел или функция с ",e.jsx(n.code,{children:"close"}),"."]}),`
`,e.jsx(n.li,{children:"Закрывается кликом мимо, Esc, скроллом, при смене строки и при изменении размеров таблицы."}),`
`,e.jsxs(n.li,{children:["Общие настройки для всей таблицы в ",e.jsx(n.code,{children:"tableConfig.popover"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"как-подключить",children:"Как подключить"}),`
`,e.jsxs(n.p,{children:["Добавьте проп ",e.jsx(n.code,{children:"popover"})," к Canvas-элементу в ",e.jsx(n.code,{children:"renderCell"}),", ",e.jsx(n.code,{children:"renderHeaderCell"})," или в ",e.jsx(n.code,{children:"name"})," группы колонок. Ничего включать в ",e.jsx(n.code,{children:"tableConfig"})," не нужно."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`renderCell: ({ row }) => (
  <Canvas.Button
    view="secondary"
    popover={{
      renderContent: ({ close }) => (
        <div>
          Задача «{row.task}»
          <Button size="s" view="secondary" text="Закрыть" onClick={close} />
        </div>
      ),
    }}
  >
    Подробнее
  </Canvas.Button>
);
`})}),`
`,e.jsxs(n.p,{children:["Курсор над таким элементом становится ",e.jsx(n.code,{children:"pointer"}),"."]}),`
`,e.jsx(n.h2,{id:"как-это-устроено",children:"Как это устроено"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"На таблице открыт только один всплывающий слой. Новый поповер закрывает предыдущий, а также открытый дропдаун и поповер фильтра в шапке."}),`
`,e.jsxs(n.li,{children:["Поповер привязан к якорю: невидимому DOM-элементу, который таблица ставит точно на место нарисованного элемента. От границ якоря считаются ",e.jsx(n.code,{children:"placement"})," и ",e.jsx(n.code,{children:"offset"}),". Якорь не перехватывает клики, они идут на канвас."]}),`
`,e.jsx(n.li,{children:"Если элемент частично скрыт за краем таблицы, якорь обрезается видимой частью."}),`
`,e.jsxs(n.li,{children:["Если клик по элементу с поповером попал в дочерний элемент, который остановил всплытие (",e.jsx(n.code,{children:"event.stopPropagation()"}),"), поповер не открывается."]}),`
`]}),`
`,e.jsx(n.h2,{id:"содержимое",children:"Содержимое"}),`
`,e.jsx(n.p,{children:"Содержимое задаётся одним из двух полей:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content"}),", готовый узел;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"renderContent"}),", функция ",e.jsx(n.code,{children:"({ close }) => ReactNode"}),". Через ",e.jsx(n.code,{children:"close"})," поповер закрывается из своего содержимого, например кнопкой в футере."]}),`
`]}),`
`,e.jsx(n.p,{children:"Поповер даёт карточку с фоном, тенью и отступами из дизайн-системы, внутрь можно положить любую разметку."}),`
`,e.jsxs(n.p,{children:["Содержимое вычисляется в момент открытия и при перерисовке таблицы не пересчитывается. Если содержимому нужно меняться (счётчик, загрузка данных), держите состояние внутри него: сделайте содержимое отдельным компонентом со своим ",e.jsx(n.code,{children:"useState"})," или запросом."]}),`
`,e.jsx(n.h2,{id:"открытие-по-клику-и-по-наведению",children:"Открытие по клику и по наведению"}),`
`,e.jsxs(n.p,{children:["Поле ",e.jsx(n.code,{children:"trigger"})," на элементе: ",e.jsx(n.code,{children:"'click'"})," (по умолчанию) или ",e.jsx(n.code,{children:"'hover'"}),"."]}),`
`,e.jsx(n.p,{children:"Поповер по наведению подходит для подсказок с разметкой: в отличие от тултипа, курсор можно перевести внутрь и нажать кнопку или ссылку."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Icon
  icon={<IconInfoCircleOutline />}
  popover={{
    trigger: 'hover',
    placement: 'top',
    hasTail: true,
    content: <PriorityHint priority={row.priority} />,
  }}
/>
`})}),`
`,e.jsx(n.p,{children:"Как ведёт себя поповер по наведению:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["открывается через ",e.jsx(n.code,{children:"mouseEnterDelay"})," (по умолчанию 300 мс), если курсор всё ещё над элементом; быстрый проход курсора мимо его не открывает;"]}),`
`,e.jsx(n.li,{children:"держится, пока курсор над элементом или над самим поповером, в том числе на пути между ними;"}),`
`,e.jsxs(n.li,{children:["закрывается через ",e.jsx(n.code,{children:"mouseLeaveDelay"})," (по умолчанию 200 мс) после того, как курсор ушёл и с элемента, и с поповера;"]}),`
`,e.jsx(n.li,{children:"клик мимо его не закрывает, он закроется, когда уйдёт курсор;"}),`
`,e.jsx(n.li,{children:"не перебивает открытый поповер по клику, дропдаун или фильтр в шапке;"}),`
`,e.jsx(n.li,{children:"если его закрыли, пока курсор остался на элементе (Esc, кнопка внутри), заново он откроется только после того, как курсор уйдёт с элемента и вернётся."}),`
`]}),`
`,e.jsxs(n.p,{children:["Пока открыт поповер, тултипы таблицы не показываются. У элемента с поповером не показывается и колоночный тултип (",e.jsx(n.code,{children:"cellTooltip"}),")."]}),`
`,e.jsx(n.h2,{id:"закрытие",children:"Закрытие"}),`
`,e.jsx(n.p,{children:"Поповер закрывается:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["кликом вне поповера (",e.jsx(n.code,{children:"closeOnOutsideClick"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),"), для поповера по клику;"]}),`
`,e.jsx(n.li,{children:"повторным кликом по тому же элементу, для поповера по клику;"}),`
`,e.jsx(n.li,{children:"уходом курсора с элемента и поповера, для поповера по наведению;"}),`
`,e.jsxs(n.li,{children:["по Esc (",e.jsx(n.code,{children:"closeOnEsc"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),");"]}),`
`,e.jsxs(n.li,{children:["скроллом таблицы по любой оси (",e.jsx(n.code,{children:"closeOnScroll"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),"): якорь нарисован на канвасе и за скроллом не едет;"]}),`
`,e.jsx(n.li,{children:"при ресайзе таблицы, переходе в полный экран, ресайзе или перестановке колонки;"}),`
`,e.jsxs(n.li,{children:["если на месте строки под поповером оказалась другая строка (сортировка, удаление, новые данные). Строки сравниваются по ключу из ",e.jsx(n.code,{children:"rowKeyGetter"})," (",e.jsx(n.code,{children:"editing"}),", ",e.jsx(n.code,{children:"selecting"}),", ",e.jsx(n.code,{children:"subRows"})," или ",e.jsx(n.code,{children:"mergeCells"}),"), а без него по ссылке: тогда новый массив с теми же данными тоже закроет поповер;"]}),`
`,e.jsx(n.li,{children:"когда таблица скрывается (смена вида, оверлей загрузки);"}),`
`,e.jsxs(n.li,{children:["вызовом ",e.jsx(n.code,{children:"close"})," из содержимого."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onOpen"})," и ",e.jsx(n.code,{children:"onClose"})," вызываются ровно по одному разу на каждое открытие."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"closeOnScroll: false"})," оставляет поповер открытым при скролле, но положение якоря при этом не обновляется. Подходит для коротких подсказок, где сдвиг не критичен."]}),`
`,e.jsx(n.h2,{id:"фокус-и-клавиатура",children:"Фокус и клавиатура"}),`
`,e.jsxs(n.p,{children:["Открытие поповера не забирает фокус у таблицы: стрелки и редактор ячейки продолжают работать. В поповер можно перейти клавишей Tab или кликом по его элементу; поле с ",e.jsx(n.code,{children:"autoFocus"})," в содержимом получает фокус как обычно. Если поповер закрывается с фокусом внутри (например, кнопкой «Закрыть»), фокус возвращается туда, где был до открытия. Пока пользователь печатает в поле ввода (редактор ячейки, поиск), поповер по наведению не открывается."]}),`
`,e.jsx(n.p,{children:"Esc из таблицы закрывает поповер и до таблицы не доходит; следующий Esc работает как обычно. Esc в поле ввода, в контекстном меню и внутри самого поповера обрабатывают они сами."}),`
`,e.jsxs(n.p,{children:["Открыть поповер с клавиатуры или программно пока нельзя. Для экранных дикторов задайте подпись поповера через ",e.jsx(n.code,{children:"ariaLabel"}),"."]}),`
`,e.jsx(n.h2,{id:"настройки-и-значения-по-умолчанию",children:"Настройки и значения по умолчанию"}),`
`,e.jsxs(n.p,{children:["На элементе задаются: ",e.jsx(n.code,{children:"trigger"}),", ",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"offset"}),", ",e.jsx(n.code,{children:"hasTail"}),", ",e.jsx(n.code,{children:"flip"}),", ",e.jsx(n.code,{children:"shift"}),", ",e.jsx(n.code,{children:"zIndex"}),", ",e.jsx(n.code,{children:"resizable"}),", ",e.jsx(n.code,{children:"closeOnScroll"}),", ",e.jsx(n.code,{children:"closeOnOutsideClick"}),", ",e.jsx(n.code,{children:"closeOnEsc"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay"}),", ",e.jsx(n.code,{children:"ariaLabel"}),", ",e.jsx(n.code,{children:"onOpen"}),", ",e.jsx(n.code,{children:"onClose"})," и содержимое (",e.jsx(n.code,{children:"content"})," или ",e.jsx(n.code,{children:"renderContent"}),")."]}),`
`,e.jsxs(n.p,{children:["Чтобы не повторять одни и те же настройки на каждом элементе, их можно задать один раз для всей таблицы в ",e.jsx(n.code,{children:"tableConfig.popover"}),". Это только значения по умолчанию: значение на элементе важнее. Там доступны ",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"offset"}),", ",e.jsx(n.code,{children:"hasTail"}),", ",e.jsx(n.code,{children:"flip"}),", ",e.jsx(n.code,{children:"shift"}),", ",e.jsx(n.code,{children:"zIndex"}),", ",e.jsx(n.code,{children:"closeOnScroll"}),", ",e.jsx(n.code,{children:"closeOnOutsideClick"}),", ",e.jsx(n.code,{children:"closeOnEsc"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay"}),". ",e.jsx(n.code,{children:"trigger"})," задаётся только на элементе."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  popover: {
    placement: 'right',
    hasTail: true,
    offset: 8,
  },
}}
`})}),`
`,e.jsxs(n.p,{children:["Встроенные значения, если не задано ни на элементе, ни в ",e.jsx(n.code,{children:"tableConfig.popover"}),": ",e.jsx(n.code,{children:"trigger: 'click'"}),", ",e.jsx(n.code,{children:"placement: 'bottom-start'"}),", ",e.jsx(n.code,{children:"offset: 4"}),", ",e.jsx(n.code,{children:"hasTail: false"}),", ",e.jsx(n.code,{children:"flip: true"}),", ",e.jsx(n.code,{children:"shift: true"}),", ",e.jsx(n.code,{children:"closeOnScroll: true"}),", ",e.jsx(n.code,{children:"closeOnOutsideClick: true"}),", ",e.jsx(n.code,{children:"closeOnEsc: true"}),", ",e.jsx(n.code,{children:"mouseEnterDelay: 300"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay: 200"}),"."]}),`
`,e.jsxs(n.p,{children:["Подробное описание типов в разделе ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-popover-api--docs",children:"API"}),"."]}),`
`,e.jsx(l,{})]})}function V(c={}){const{wrapper:n}={...i(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{V as default};
