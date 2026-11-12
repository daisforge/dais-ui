import{j as e}from"./react-D2T61mpp.js";import{cg as c,ch as s,ca as i}from"./vendor-qc-3jPn0.js";import{T as d}from"./TableCanvasPopover.stories-C1Yt1tRq.js";import"./react-is-Clcustum.js";import"./styled-components-fZZISu-E.js";import"./@tanstack/react-virtual-cDSTPgpS.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-SqWQ2qo2.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CwsHaJmw.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BZEVkRCf.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D1xekEXv.js";import"./@salutejs/plasma-icons-CfT1Hno-.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BnZbuhdn.js";import"./IconButton-C7vIwJL1.js";import"./Box-CTzYqpSx.js";import"./TextField-COil20QB.js";import"./sharedUtilsInputs-CqBI3x81.js";import"./AiAgentPopup-DMxRNqnm.js";import"./TextArea-CKpv2CXk.js";import"./sharedUtilsResizable-BZiwV9dn.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-C280hpp2.js";import"./Collapse-CkUrJuHd.js";import"./react-data-grid-CNbViKFW.js";import"./TableTabs-D79cyaX_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-n_rkjHnk.js";import"./@glideappsfinal/glide-data-grid-B-1CjMCn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cqbiwema.js";import"./ListOfFilters-BhzbP0P2.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-S5rrm-jj.js";import"./EmptyState-BLWKmdtS.js";import"./MassActions-CXeHQUg5.js";import"./Autocomplete-DR4dqk8a.js";import"./ErrorPage-B_e2_Jo1.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n.p,{children:"Всплывающий блок с произвольным содержимым, который открывается по клику или наведению на элемент внутри ячейки: кнопку, иконку, любой другой Canvas-элемент. Пригодится для подсказки с разметкой, карточки с деталями строки, небольшой формы."}),`
`,e.jsxs(n.p,{children:["Если нужен не произвольный блок, а список пунктов с выбором (меню действий по кнопке «три точки»), используйте Dropdown: раздел ",e.jsx(n.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-dropdown--docs",children:"Dropdown"}),". Открытие, якорь и правила закрытия у него те же."]}),`
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
`,e.jsx(n.li,{children:"На таблице открыт только один всплывающий слой. Новый Popover закрывает предыдущий, а также открытый Dropdown и окно фильтра в шапке."}),`
`,e.jsxs(n.li,{children:["Popover привязан к якорю: невидимому DOM-элементу, который таблица ставит точно на место нарисованного элемента. От границ якоря считаются ",e.jsx(n.code,{children:"placement"})," и ",e.jsx(n.code,{children:"offset"}),". Якорь не перехватывает клики, они идут на канвас."]}),`
`,e.jsx(n.li,{children:"Если элемент частично скрыт за краем таблицы, якорь обрезается видимой частью."}),`
`,e.jsxs(n.li,{children:["Если клик по элементу с Popover попал в дочерний элемент, который остановил всплытие (",e.jsx(n.code,{children:"event.stopPropagation()"}),"), Popover не открывается."]}),`
`]}),`
`,e.jsx(n.h2,{id:"содержимое",children:"Содержимое"}),`
`,e.jsx(n.p,{children:"Содержимое задаётся одним из двух полей:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content"}),", готовый узел;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"renderContent"}),", функция ",e.jsx(n.code,{children:"({ close }) => ReactNode"}),". Через ",e.jsx(n.code,{children:"close"})," Popover закрывается из своего содержимого, например кнопкой в футере."]}),`
`]}),`
`,e.jsx(n.p,{children:"Popover даёт карточку с фоном, тенью и отступами из дизайн-системы, внутрь можно положить любую разметку."}),`
`,e.jsxs(n.p,{children:["Содержимое вычисляется в момент открытия и при перерисовке таблицы не пересчитывается. Если содержимому нужно меняться (счётчик, загрузка данных), держите состояние внутри него: сделайте содержимое отдельным компонентом со своим ",e.jsx(n.code,{children:"useState"})," или запросом."]}),`
`,e.jsx(n.h2,{id:"открытие-по-клику-и-по-наведению",children:"Открытие по клику и по наведению"}),`
`,e.jsxs(n.p,{children:["Поле ",e.jsx(n.code,{children:"trigger"})," на элементе: ",e.jsx(n.code,{children:"'click'"})," (по умолчанию) или ",e.jsx(n.code,{children:"'hover'"}),"."]}),`
`,e.jsx(n.p,{children:"Popover по наведению подходит для подсказок с разметкой: в отличие от тултипа, курсор можно перевести внутрь и нажать кнопку или ссылку."}),`
`,e.jsx(n.p,{children:"Наведение подходит только для дополнительной информации. С клавиатуры и на сенсорном экране (планшет, телефон) навести курсор нельзя, поэтому такой Popover там не откроется. Действия, которые должны быть доступны всем, вешайте на клик."}),`
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
`,e.jsx(n.p,{children:"Как ведёт себя Popover по наведению:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["открывается через ",e.jsx(n.code,{children:"mouseEnterDelay"})," (по умолчанию 300 мс), если курсор всё ещё над элементом; быстрый проход курсора мимо его не открывает;"]}),`
`,e.jsx(n.li,{children:"держится, пока курсор над элементом или над самим Popover, в том числе на пути между ними;"}),`
`,e.jsxs(n.li,{children:["закрывается через ",e.jsx(n.code,{children:"mouseLeaveDelay"})," (по умолчанию 200 мс) после того, как курсор ушёл и с элемента, и с Popover;"]}),`
`,e.jsx(n.li,{children:"клик мимо его не закрывает, он закроется, когда уйдёт курсор;"}),`
`,e.jsx(n.li,{children:"не перебивает открытый Popover по клику, Dropdown или фильтр в шапке;"}),`
`,e.jsx(n.li,{children:"не открывается, пока в этой таблице тянут границу колонки;"}),`
`,e.jsx(n.li,{children:"если его закрыли, пока курсор остался на элементе (Esc, кнопка внутри), заново он откроется только после того, как курсор уйдёт с элемента и вернётся."}),`
`]}),`
`,e.jsxs(n.p,{children:["Пока открыт Popover, тултипы таблицы не показываются. У элемента с Popover не показывается и колоночный тултип (",e.jsx(n.code,{children:"cellTooltip"}),")."]}),`
`,e.jsx(n.h2,{id:"закрытие",children:"Закрытие"}),`
`,e.jsx(n.p,{children:"Popover закрывается:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["кликом вне Popover (",e.jsx(n.code,{children:"closeOnOutsideClick"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),"), для Popover по клику;"]}),`
`,e.jsx(n.li,{children:"повторным кликом по тому же элементу, для Popover по клику;"}),`
`,e.jsx(n.li,{children:"уходом курсора с элемента и Popover, для Popover по наведению;"}),`
`,e.jsxs(n.li,{children:["по Esc (",e.jsx(n.code,{children:"closeOnEsc"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),");"]}),`
`,e.jsxs(n.li,{children:["скроллом таблицы по любой оси (",e.jsx(n.code,{children:"closeOnScroll"}),", по умолчанию ",e.jsx(n.code,{children:"true"}),"): якорь нарисован на канвасе и за скроллом не едет;"]}),`
`,e.jsx(n.li,{children:"при ресайзе таблицы, переходе в полный экран, ресайзе или перестановке колонки;"}),`
`,e.jsxs(n.li,{children:["если на месте строки под Popover оказалась другая строка (сортировка, удаление, новые данные). Строки сравниваются по ключу из ",e.jsx(n.code,{children:"tableConfig.popover.rowKeyGetter"}),", если он не задан, по ",e.jsx(n.code,{children:"rowKeyGetter"})," из ",e.jsx(n.code,{children:"editing"}),", ",e.jsx(n.code,{children:"selecting"}),", ",e.jsx(n.code,{children:"subRows"})," или ",e.jsx(n.code,{children:"mergeCells"}),", а без него по ссылке: тогда новый массив с теми же данными тоже закроет Popover. Если ",e.jsx(n.code,{children:"rows"})," пересоздаются при каждом рендере или данные приходят заново, задайте ",e.jsx(n.code,{children:"tableConfig.popover.rowKeyGetter"}),";"]}),`
`,e.jsx(n.li,{children:"когда таблица скрывается (смена вида, оверлей загрузки);"}),`
`,e.jsxs(n.li,{children:["вызовом ",e.jsx(n.code,{children:"close"})," из содержимого."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onOpen"})," и ",e.jsx(n.code,{children:"onClose"})," вызываются ровно по одному разу на каждое открытие."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"closeOnScroll: false"})," оставляет Popover открытым при скролле, но положение якоря при этом не обновляется. Подходит для коротких подсказок, где сдвиг не критичен."]}),`
`,e.jsx(n.h2,{id:"фокус-и-клавиатура",children:"Фокус и клавиатура"}),`
`,e.jsxs(n.p,{children:["Открытие Popover не забирает фокус у таблицы: стрелки и редактор ячейки продолжают работать. В Popover можно перейти клавишей Tab или кликом по его элементу, поле с ",e.jsx(n.code,{children:"autoFocus"})," в содержимом получает фокус как обычно. Если Popover закрывается с фокусом внутри (например, кнопкой «Закрыть»), фокус возвращается туда, где был до открытия. Пока пользователь печатает в поле ввода (редактор ячейки, поиск), Popover по наведению не открывается."]}),`
`,e.jsx(n.p,{children:"Esc закрывает Popover, если нажат внутри него или в его таблице. Такой Esc до таблицы не доходит, следующий Esc работает как обычно. Esc в поле ввода таблицы (редактор ячейки, поиск) и в контекстном меню обрабатывают они сами. Esc в поле ввода или раскрытом списке внутри самого Popover тоже остаётся содержимому, окно закроется следующим Esc. Esc в другом месте страницы Popover не закрывает. Если фокуса нет нигде, Esc закрывает только последнее открытое окно на странице."}),`
`,e.jsxs(n.p,{children:["Открыть Popover с клавиатуры или программно пока нельзя. Для экранных дикторов задайте подпись Popover через ",e.jsx(n.code,{children:"ariaLabel"}),"."]}),`
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
`,e.jsx(i,{})]})}function W(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{W as default};
