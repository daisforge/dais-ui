import{j as e}from"./react-D2T61mpp.js";import{c4 as r,c5 as o,b_ as l}from"./vendor-B9_16pJt.js";import{F as t}from"./FiltersActions.stories-BQL6xU3S.js";import"./react-is-Clcustum.js";import"./styled-components-DsyoZJDS.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-C1kndaLg.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-CglBQ-O2.js";import"./FiltersActions-O5t9w8O4.js";import"./IconButton-BKcoDZsO.js";import"./@salutejs/plasma-icons-Dv1GxiBC.js";import"./@salutejs/sdds-finai-IZHEqlfF.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-D0DbmO16.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B55i4OlY.js";import"./TextField-DFKursCu.js";import"./sharedUtilsInputs-CGph2UpZ.js";import"./AnalyticalWidget-DLYuQFti.js";import"./Collapse-Caa0z_Ow.js";import"./react-data-grid-CD7lGWrv.js";import"./TableTabs-DPTpudh-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BB99zeRt.js";import"./ListOfFilters-CRZsNuJw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DbkvCu90.js";import"./EmptyState-C5WIHYMF.js";import"./MassActions-Cnw9OCOO.js";import"./Autocomplete-CjMKfftZ.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Docs"}),`
`,e.jsx(n.h1,{id:"filteractions",children:"FilterActions"}),`
`,e.jsx(n.p,{children:"Композиция для создания панели фильтров и действий. Компонент предоставляет базовые строительные блоки (кнопки, поля поиска, Popover и т.д.), оставляя логику адаптивности и размещения за командой-пользователем."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Набор строительных блоков: кнопки, поля поиска, Popover для фильтров"}),`
`,e.jsxs(n.li,{children:["Compound-компоненты: ",e.jsx(n.code,{children:"FiltersActions.FiltersButtonWithPopover"}),", ",e.jsx(n.code,{children:"FiltersActions.ListOfFilters"})," и др."]}),`
`,e.jsxs(n.li,{children:["Колбек ",e.jsx(n.code,{children:"onResize"})," для отслеживания размеров контейнера"]}),`
`,e.jsxs(n.li,{children:["Хук ",e.jsx(n.code,{children:"useFiltersList"})," для управления списком активных фильтров"]}),`
`,e.jsxs(n.li,{children:["Адаптивность опциональна — реализуется на стороне проекта через ",e.jsx(n.code,{children:"useAdaptiveFilters"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"основная-структура",children:"Основная структура"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FiltersActions
  mainBlock={/* Основные фильтры, табы, сегменты */}
  activeButtonsBlock={/* Блок действий справа */}
  listOfFilters={/* Список примененных фильтров */}
  onResize={(dimensions) => {
    /* Отслеживание размеров */
  }}
/>
`})}),`
`,e.jsx(n.h2,{id:"об-адаптивности",children:"Об адаптивности"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно:"})," Адаптивность фильтров ",e.jsx(n.strong,{children:"не является обязательной частью"})," компонента FiltersActions. Решение о том, какие фильтры показывать, куда перемещать и в каком порядке располагать — полностью на стороне команды-пользователя."]}),`
`,e.jsx(n.h3,{id:"пример-адаптивности-необязательно",children:"Пример адаптивности (необязательно)"}),`
`,e.jsxs(n.p,{children:["В истории ниже показан ",e.jsx(n.strong,{children:"пример реализации адаптивности"}),", который можно взять за основу:"]}),`
`,e.jsxs(n.h4,{id:"1-колбек-onresize",children:["1. Колбек ",e.jsx(n.code,{children:"onResize"})]}),`
`,e.jsxs(n.p,{children:["Компонент FiltersActions предоставляет колбек ",e.jsx(n.code,{children:"onResize"}),", который возвращает актуальные размеры:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FiltersActions
  onResize={(dimensions) => {
    // dimensions.containerWidth - полная ширина
    // dimensions.mainBlockWidth - ширина левого блока
    // dimensions.buttonsBlockWidth - ширина правого блока
    // dimensions.availableMainBlockWidth - доступная ширина для фильтров
  }}
/>
`})}),`
`,e.jsxs(n.h4,{id:"2-хук-useadaptivefilters",children:["2. Хук ",e.jsx(n.code,{children:"useAdaptiveFilters"})]}),`
`,e.jsxs(n.p,{children:["Хук принимает массив элементов (",e.jsx(n.code,{children:"FilterItem[]"}),"), текущую ширину и конфигурацию брейкпоинтов:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { visibleItems, overlayItems, modifications, customActions } =
  useAdaptiveFilters({
    items: allFilterItems, // Массив всех фильтров
    width: dimensions.availableMainBlockWidth, // Доступная ширина
    breakpoints: {
      1920: {
        visible: ['search', 'filter1', 'filter2'], // Видимые ID
        inOverlay: ['filter3'], // ID в Popover
        modifications: {
          // Модификации стилей
          search: { width: '300px' },
        },
      },
      1400: {
        visible: ['search'],
        inOverlay: ['filter1', 'filter2', 'filter3'],
      },
    },
  });
`})}),`
`,e.jsx(n.p,{children:"Хук определяет на основании ширины контейнера:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Какие элементы остаются видимыми (",e.jsx(n.code,{children:"visibleItems"}),")"]}),`
`,e.jsxs(n.li,{children:["Какие перемещаются в Popover (",e.jsx(n.code,{children:"overlayItems"}),")"]}),`
`,e.jsxs(n.li,{children:["Какие модификации применить (",e.jsx(n.code,{children:"modifications"}),")"]}),`
`,e.jsxs(n.li,{children:["Дополнительные действия (",e.jsx(n.code,{children:"customActions"}),")"]}),`
`]}),`
`,e.jsx(n.h4,{id:"3-контент-popover",children:"3. Контент Popover"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Контент Popover полностью контролируется использующей стороной:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FiltersActions.FiltersButtonWithPopover
  content={
    // ВЫ решаете, что рендерить внутри
    overlayItems.map((item) => (
      <div key={item.id}>{item.element}</div>
    ))
  }
  footer={
    // ВЫ решаете, что показывать в footer
    <Button onClick={resetAll}>Сбросить</Button>
  }
/>
`})}),`
`,e.jsx(n.h3,{id:"кастомизация-кнопки-popover",children:"Кастомизация кнопки Popover"}),`
`,e.jsxs(n.p,{children:["По умолчанию кнопка-таргет ",e.jsx(n.code,{children:"FiltersActions.FiltersButtonWithPopover"})," рендерится с текстом «Ещё фильтры» и иконкой размера ",e.jsx(n.code,{children:"s"}),". Через проп ",e.jsx(n.code,{children:"buttonProps"})," можно переопределить поведение кнопки:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Скрыть текст — останется только иконка
<FiltersActions.FiltersButtonWithPopover
  buttonProps={{ hideLabel: true }}
/>

// Поменять текст и размер иконки
<FiltersActions.FiltersButtonWithPopover
  buttonProps={{ text: 'Фильтры', iconSize: 'xs' }}
/>

// Заблокировать кнопку
<FiltersActions.FiltersButtonWithPopover
  buttonProps={{ disabled: true }}
/>
`})}),`
`,e.jsxs(n.p,{children:["Принимает любые пропсы ",e.jsx(n.code,{children:"FiltersActionsFiltersButton"}),". ",e.jsx(n.code,{children:"onClick"})," декорируется — сначала вызовется внешний, потом внутренний toggle Popover."]}),`
`,e.jsxs(n.h3,{id:"кастомный-таргет-popover--rendertarget",children:["Кастомный таргет Popover — ",e.jsx(n.code,{children:"renderTarget"})]}),`
`,e.jsxs(n.p,{children:["Когда ",e.jsx(n.code,{children:"buttonProps"})," недостаточно и нужно полностью заменить кнопку-таргет собственным элементом (иконкой, кнопкой, любым узлом) — используйте рендер-проп ",e.jsx(n.code,{children:"renderTarget"}),". Он оставляет за компонентом логику открытия Popover и красную точку-индикатор, а разметку таргета отдаёт вам."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"renderTarget"})," получает объект ",e.jsx(n.code,{children:"FilterTargetRenderApi"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onClick"})})," — обработчик открытия/закрытия Popover. ",e.jsx(n.strong,{children:"Обязательно"})," повесьте его на корневой кликабельный элемент таргета — иначе Popover не откроется."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isOpen"})})," — открыт ли Popover сейчас (например, чтобы подсветить активный таргет)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isRedDotVisible"})})," — нужно ли показывать красную точку (значение пропа ",e.jsx(n.code,{children:"redSquare"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"RedDot"})})," — компонент точки-индикатора. Позиционируется в правый верхний угол ближайшего контейнера с ",e.jsx(n.code,{children:"position: relative"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FiltersActions.FiltersButtonWithPopover
  title="Фильтры"
  redSquare={hasActiveFilters}
  renderTarget={({ onClick, isOpen, isRedDotVisible, RedDot }) => (
    <IconButton
      onClick={onClick}
      size="s"
      view={isOpen ? 'accent' : 'secondary'}
      style={{ position: 'relative' }} // Важно — якорь для RedDot
    >
      <IconSettingsFilter size="s" />
      <RedDot visible={isRedDotVisible} />
    </IconButton>
  )}
  content={/* ... */}
/>
`})}),`
`,e.jsxs(n.p,{children:["Когда задан ",e.jsx(n.code,{children:"renderTarget"}),", проп ",e.jsx(n.code,{children:"buttonProps"})," и дефолтная кнопка «Ещё фильтры» игнорируются. Красную точку рисуете вы — компонент ",e.jsx(n.code,{children:"RedDot"})," доступен и в API рендер-пропа, и как ",e.jsx(n.code,{children:"FiltersActions.RedDot"}),", вид индикатора остаётся единым."]}),`
`,e.jsxs(n.p,{children:["Живой пример — в истории ",e.jsx(n.strong,{children:"«FiltersActions с кастомным таргетом Popover»"})," ниже."]}),`
`,e.jsx(n.h2,{id:"размещение-фильтров-внутри-popover",children:"Размещение фильтров внутри Popover"}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Контент Popover (",e.jsx(n.code,{children:"FiltersActions.FiltersButtonWithPopover"}),") полностью контролируется использующей стороной."]})," Компонент предоставляет layout (шапка, контент, футер) — всё остальное (логика, стили, компоненты) реализуется на стороне проекта."]}),`
`,e.jsx(n.p,{children:"Ниже — рекомендации, которые помогут избежать типичных проблем с шириной и позиционированием элементов внутри Popover."}),`
`,e.jsxs(n.h3,{id:"1-реф-на-popover--popoverref",children:["1. Реф на Popover — ",e.jsx(n.code,{children:"popoverRef"})]}),`
`,e.jsxs(n.p,{children:["Создайте реф и передайте его в ",e.jsx(n.code,{children:"popoverProps.ref"}),". Этот реф нужен дочерним компонентам внутри Popover:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const popoverRef = useRef<HTMLDivElement>(null);

<FiltersActions.FiltersButtonWithPopover
  popoverProps={{ ref: popoverRef }} // Важно
  content={...}
/>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Зачем:"})," Popover рендерится через портал (вне основного DOM-дерева). Без ",e.jsx(n.code,{children:"popoverRef"})," выпадающие списки Combobox и тултипы будут рендериться в основном дереве — позади Popover или с обрезкой по ",e.jsx(n.code,{children:"overflow"}),"."]}),`
`,e.jsxs(n.h3,{id:"2-combobox-portal-и-zindex",children:["2. Combobox: ",e.jsx(n.code,{children:"portal"})," и ",e.jsx(n.code,{children:"zIndex"})]}),`
`,e.jsxs(n.p,{children:["Каждому Combobox внутри Popover передайте ",e.jsx(n.code,{children:"portal={popoverRef}"})," и ",e.jsx(n.code,{children:'zIndex="9001"'}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Combobox
  portal={popoverRef}  // Важно — dropdown рендерится внутри Popover
  zIndex="9001"         // Важно — dropdown поверх контента Popover
  ...
/>
`})}),`
`,e.jsxs(n.h3,{id:"3-tooltiplist-frame-и-fullwidth",children:["3. TooltipList: ",e.jsx(n.code,{children:"frame"})," и ",e.jsx(n.code,{children:"fullWidth"})]}),`
`,e.jsxs(n.p,{children:["Если Combobox обёрнут в ",e.jsx(n.code,{children:"FiltersActions.TooltipList"}),", передайте ",e.jsx(n.code,{children:"frame={popoverRef}"})," и ",e.jsx(n.code,{children:"fullWidth"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FiltersActions.TooltipList
  groupLabel="Название фильтра"
  fullWidth              // Важно — растягивает обёртки тултипа на 100% ширины
  frame={popoverRef}     // Важно — тултип позиционируется внутри Popover
  items={selectedLabels}
  trigger={selectedValues.length > 0 ? 'hover' : 'none'}
>
  ...
</FiltersActions.TooltipList>
`})}),`
`,e.jsxs(n.p,{children:["Проп ",e.jsx(n.code,{children:"fullWidth"})," устанавливает ",e.jsx(n.code,{children:"width: 100%"})," на внутренние обёртки Tooltip (",e.jsx(n.code,{children:".popover-target"}),", ",e.jsx(n.code,{children:".popover-wrapper"}),"), чтобы дочерний элемент занял всю доступную ширину контента Popover."]}),`
`,e.jsxs(n.h3,{id:"4-combobox-обёртка-div-с-width-100",children:["4. Combobox: обёртка ",e.jsx(n.code,{children:"div"})," с ",e.jsx(n.code,{children:"width: 100%"})]}),`
`,e.jsxs(n.p,{children:["Combobox по умолчанию занимает ширину по содержимому. Оберните его в ",e.jsx(n.code,{children:"div"})," с ",e.jsx(n.code,{children:"width: 100%"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div style={{ width: '100%' }}>
  <Combobox
    portal={popoverRef}
    zIndex="9001"
    ...
  />
</div>
`})}),`
`,e.jsx(n.h3,{id:"5-контейнер-каждого-фильтра",children:"5. Контейнер каждого фильтра"}),`
`,e.jsxs(n.p,{children:["Каждый элемент внутри ",e.jsx(n.code,{children:"content"})," оберните в ",e.jsx(n.code,{children:"div"})," с ",e.jsx(n.code,{children:"width: 100%"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`content={
  <>
    {overlayItems.map((item) => (
      <div key={item.id} style={{ width: '100%' }}>
        <BodyS style={{ marginBottom: '8px' }}>{item.label}</BodyS>
        {item.element}
      </div>
    ))}
  </>
}
`})}),`
`,e.jsx(n.h3,{id:"итого-полный-пример-фильтра-в-popover",children:"Итого: полный пример фильтра в Popover"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const popoverRef = useRef<HTMLDivElement>(null);

<FiltersActions.FiltersButtonWithPopover
  popoverProps={{ ref: popoverRef }}
  title="Фильтры"
  content={
    <div style={{ width: '100%' }}>
      <BodyS style={{ marginBottom: '8px' }}>Блок</BodyS>
      <FiltersActions.TooltipList
        groupLabel="Блок"
        fullWidth
        frame={popoverRef}
        items={selectedBlockLabels}
        trigger={blocks.length > 0 ? 'hover' : 'none'}
      >
        <div style={{ width: '100%' }}>
          <Combobox
            size="s"
            multiple
            value={blocks}
            onChange={setBlocks}
            items={blockOptions}
            portal={popoverRef}
            zIndex="9001"
          />
        </div>
      </FiltersActions.TooltipList>
    </div>
  }
/>
`})}),`
`,e.jsxs(n.h2,{id:"хук-usefilterslist",children:["Хук ",e.jsx(n.code,{children:"useFiltersList"})]}),`
`,e.jsxs(n.p,{children:["Базовый хук для управления списком активных фильтров. Принимает текущие значения фильтров, метаинформацию и опции — возвращает готовый список для отображения в ",e.jsx(n.code,{children:"FiltersActions.ListOfFilters"}),", а также функцию сброса."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { filterList, filterListOpened, clearAll } = useFiltersList({
  filters,
  filtersInfo: {
    search: { label: 'Поиск', clearedValue: '' },
    blocks: { label: 'Блок', clearedValue: [] },
    tribes: { label: 'Трайб', clearedValue: [] },
    allocation: { label: 'Аллокация', clearedValue: '' },
  },
  options: {
    blocks: blocksOptions,
    tribes: tribesOptions,
    allocation: allocationOptions,
  },
  updateFilters: (key, newValue) => updateFilters({ [key]: newValue }),
  order: ['switcher'], // опционально: порядок отображения групп
});
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"filters"})})," — объект с текущими значениями фильтров (",e.jsx(n.code,{children:"Record<FilterKey, unknown>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"filtersInfo"})})," — метаинформация: ",e.jsx(n.code,{children:"label"})," (отображаемое имя группы) и ",e.jsx(n.code,{children:"clearedValue"})," (значение при сбросе)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"options"})})," — массивы ",e.jsx(n.code,{children:"{ label, value }"})," для каждого фильтра (используются для маппинга value → label)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"updateFilters"})})," — колбек для обновления конкретного фильтра"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"order"})})," — порядок отображения групп: массив ключей, функция сортировки или ",e.jsx(n.code,{children:"'default'"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"filterList"})})," — массив групп с элементами (для передачи в ",e.jsx(n.code,{children:"ListOfFilters"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"filterListOpened"})})," — ",e.jsx(n.code,{children:"true"}),", если есть хотя бы один активный фильтр"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"clearAll"})})," — функция сброса всех фильтров в ",e.jsx(n.code,{children:"clearedValue"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"резюме",children:"Резюме"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FiltersActions"})," — набор строительных блоков"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useFiltersList"})})," — хук для управления списком активных фильтров"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Адаптивность"})," — опциональная, реализуется на стороне проекта"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onResize"})})," — для получения размеров контейнера"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useAdaptiveFilters"})})," — пример хука для управления брейкпоинтами"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Контент Popover"})," — ответственность проекта"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"buttonProps"})})," — кастомизация кнопки-таргета Popover"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"renderTarget"})})," — полная замена таргета Popover своим элементом (с сохранением открытия и красной точки)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Описание compound-компонентов и информация о ренейминге — в разделе ",e.jsx(n.a,{href:"/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-filtersactions-api--docs",children:"API"}),"."]}),`
`,e.jsx(l,{})]})}function S(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{S as default};
