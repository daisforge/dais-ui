import{j as e}from"./react-D2T61mpp.js";import{c6 as s,c7 as i,c0 as l}from"./vendor-H482Df_i.js";import{T as d}from"./TableCanvas.controlBlock.stories-Au6ZW2Xf.js";import"./react-is-Clcustum.js";import"./styled-components-kNohFqZo.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D12y3FZC.js";import"./FiltersActions-BH8Bz5dZ.js";import"./IconButton-CBqUwvzX.js";import"./@salutejs/plasma-icons-Co7qeio2.js";import"./@salutejs/sdds-finai-DYlz9lC4.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-Dx_gyAyt.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DsNuXb8L.js";import"./TextField-_OxNzaYn.js";import"./sharedUtilsInputs-BAiE5TGs.js";import"./AnalyticalWidget-CGAcmAx3.js";import"./Collapse-DEjLV26v.js";import"./Table-pZ-P46uo.js";import"./react-data-grid-DCPnnyYy.js";import"./TableTabs-BpoRGRTe.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CjkDyEE9.js";import"./ListOfFilters-DmDjG3Af.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DfB0VoBs.js";import"./EmptyState-DsR_TrlS.js";import"./MassActions-BpFRykTe.js";import"./Autocomplete-D-ES8Cxj.js";import"./TableGlide-CW4Oc9xL.js";import"./@glideappsfinal/glide-data-grid-D0Xvk0sU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-KHwpBlAN.js";import"./starFeature-DMWVLLj5.js";function o(c){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"controlblock-tablecanvas",children:"ControlBlock (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.controlBlock"})}),`
`,e.jsx(n.p,{children:"Панель управления таблицы (верхний блок с кнопками)."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Поиск по таблице"}),`
`,e.jsxs(n.li,{children:["Кнопки действий (",e.jsx(n.code,{children:"rightSideInner"}),") и кастомные фичи с иконками (",e.jsx(n.code,{children:"customFeatures"}),")"]}),`
`,e.jsx(n.li,{children:"Встроенные фичи: ключ-текст, группировка строк, размер строк, полноэкранный режим"}),`
`,e.jsxs(n.li,{children:["Режим редактирования с кастомным слотом слева (",e.jsx(n.code,{children:"editModeLeftSlot"}),")"]}),`
`,e.jsx(n.li,{children:"Заголовок таблицы и сворачивание, внутри панели или над таблицей"}),`
`,e.jsxs(n.li,{children:["Три размера панели: ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"xs"}),". ",e.jsx(n.code,{children:"m"})," и ",e.jsx(n.code,{children:"s"})," одинаковы и подходят всем продуктам, ",e.jsx(n.code,{children:"xs"})," использует команда APE"]}),`
`,e.jsxs(n.li,{children:["Компрессия по ширине: лишние фичи уезжают в overflow-дропдаун, его ширина, размер и иконки внутри подстраиваются под ",e.jsx(n.code,{children:"rowSize"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"размеры",children:"Размеры"}),`
`,e.jsxs(n.p,{children:["Размер панели задаётся в ",e.jsx(n.code,{children:"tableConfig.controlBlock.size"}),": ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"s"})," или ",e.jsx(n.code,{children:"xs"}),". Размер каскадно применяется к кнопкам, поиску, заголовку и кнопке сворачивания. Высота панели: ",e.jsx(n.code,{children:"m"})," и ",e.jsx(n.code,{children:"s"})," дают 40px, ",e.jsx(n.code,{children:"xs"})," дает 32px."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"m"})," и ",e.jsx(n.code,{children:"s"})," дают одинаковый размер и предназначены для всех продуктов. ",e.jsx(n.code,{children:"xs"})," это компактный режим, его использует команда APE. Примеры ",e.jsx(n.code,{children:"xs"})," смотрите в разделе ControlBlock APE."]}),`
`,e.jsx(n.h2,{id:"заголовок-и-сворачивание",children:"Заголовок и сворачивание"}),`
`,e.jsxs(n.p,{children:["Заголовок и сворачивание настраиваются в ",e.jsx(n.code,{children:"tableConfig.collapsing"})," (на уровне всей таблицы, рядом с ",e.jsx(n.code,{children:"controlBlock"}),", а не внутри него)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"titleText"})," показывает заголовок таблицы (для своего узла есть ",e.jsx(n.code,{children:"titleRender"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"enableCollapse"})," добавляет кнопку сворачивания таблицы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"collapseButtonPlacement"})," задаёт, где живут заголовок и кнопка: ",e.jsx(n.code,{children:"inside"})," (по умолчанию) рисует их внутри самой панели, ",e.jsx(n.code,{children:"above"})," выносит в отдельную полосу над таблицей. Для режима ",e.jsx(n.code,{children:"above"})," есть ",e.jsx(n.code,{children:"collapseButtonAboveRightSlot"})," под свой контент справа."]}),`
`]}),`
`,e.jsx(n.h2,{id:"фичи-и-details",children:"Фичи и details"}),`
`,e.jsxs(n.p,{children:["Кастомные фичи задаются в ",e.jsx(n.code,{children:"tableConfig.controlBlock.customFeatures"})," (массив). Каждая фича рисуется в панели как иконка, а при компрессии может уехать в overflow-дропдаун."]}),`
`,e.jsxs(n.p,{children:["Иконку в самой панели задают на фиче через ",e.jsx(n.code,{children:"Icon"})," (компонент иконки) или ",e.jsx(n.code,{children:"CustomIconRender"})," (свой рендер)."]}),`
`,e.jsxs(n.p,{children:["Поле ",e.jsx(n.code,{children:"details"})," (на той же фиче) описывает, как фича выглядит, когда уезжает в дропдаун. Раньше ",e.jsx(n.code,{children:"details"})," отвечал за правый сайдбар, теперь за дропдаун. Имя оставили, чтобы не ломать существующий код."]}),`
`,e.jsxs(n.p,{children:["Типы ",e.jsx(n.code,{children:"details"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"button"})," — пункт с иконкой и действием"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"switch"})," — переключатель"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"select"})," — выпадающий список"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"custom"})," — свой рендер пункта"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Точные типы фич и ",e.jsx(n.code,{children:"details"})," смотрите в ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-controlblock-api--docs",children:"ControlBlock API"}),", готовые примеры — в stories ниже."]}),`
`,e.jsx(n.h2,{id:"поведение-при-компрессии",children:"Поведение при компрессии"}),`
`,e.jsxs(n.p,{children:["Когда таблице не хватает ширины, фичи по одной уезжают в overflow-дропдаун (троеточие). В дропдауне фича показывается по своему ",e.jsx(n.code,{children:"details"}),"; фича без ",e.jsx(n.code,{children:"details"})," при нехватке места просто скрывается."]}),`
`,e.jsxs(n.p,{children:["Оба флага ниже задаются на самой фиче (элемент массива ",e.jsx(n.code,{children:"customFeatures"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canBeCompressedInToolsMenu"})," управляет уходом фичи в дропдаун. По умолчанию ",e.jsx(n.code,{children:"true"}),", при нехватке места фича может уехать в overflow-дропдаун. Поставьте ",e.jsx(n.code,{children:"false"}),", чтобы фича всегда оставалась видимой в панели и никогда не пряталась."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mandatory: true"})," ставит фичу в начало панели и закрепляет её там. Влияет на порядок и присутствие фичи в панели (наследие старого распределения панель и сайдбар), а уходом в дропдаун управляет именно ",e.jsx(n.code,{children:"canBeCompressedInToolsMenu"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"размер-иконок-в-дропдауне",children:"Размер иконок в дропдауне"}),`
`,e.jsxs(n.p,{children:["Сам дропдаун подстраивается под ",e.jsx(n.code,{children:"rowSize"}),": на маленьком ",e.jsx(n.code,{children:"rowSize"})," он уже и компактнее. Поэтому и иконки внутри берутся на ступень меньше, чем в самой панели."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Наши штатные фичи мы размеряем сами по дизайн-макетам. Иконки-компоненты (",e.jsx(n.code,{children:"Icon"}),"), а также ключ-текст, группировка и вид отображения мельчают в дропдауне автоматически, ничего делать не нужно."]}),`
`,e.jsxs(n.li,{children:["Свои кастомные фичи в правой части размеряете вы. Готовый JSX размер сам не знает, поэтому кастомные рендеры получают контекст ",e.jsx(n.code,{children:"{ rowSize, isInDropdown }"})," и подбирают размер сами. ",e.jsx(n.code,{children:"isInDropdown"})," отличает панель (",e.jsx(n.code,{children:"false"}),", иконка обычная) от дропдауна (",e.jsx(n.code,{children:"true"}),", мельче при маленьком ",e.jsx(n.code,{children:"rowSize"}),"):"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// кастомная иконка фичи в панели и в дропдауне (поле CustomIconRender фичи)
CustomIconRender: ({ rowSize, isInDropdown }) => (
  <IconStar size={isInDropdown && rowSize === 'small' ? 'xs' : 's'} />
),

// иконка фичи в details, задаём функцией вместо готового узла
details: {
  type: 'button',
  label: 'Экспорт',
  icon: ({ rowSize, isInDropdown }) => (
    <IconExport size={isInDropdown && rowSize === 'small' ? 'xs' : 's'} />
  ),
  onClick: handleExport,
},

// иконка кнопки rightSideInner, когда она уезжает в дропдаун
{
  text: 'Сохранить',
  contentLeft: <IconSave />,
  dropdownIconRender: ({ rowSize }) => (
    <IconSave size={rowSize === 'small' ? 'xs' : 's'} />
  ),
},
`})}),`
`,e.jsxs(n.p,{children:["Если оставить статичный узел (",e.jsx(n.code,{children:"icon: <IconExport />"}),", ",e.jsx(n.code,{children:"CustomIconRender: () => <Icon />"}),"), он работает как раньше, просто размер в дропдауне не меняется."]}),`
`,e.jsxs(n.p,{children:["Подробнее смотрите примеры в сториях ниже: там кастомные фичи получают ",e.jsx(n.code,{children:"rowSize"})," и ",e.jsx(n.code,{children:"isInDropdown"})," и сами выбирают размер иконки для дропдауна."]}),`
`,e.jsx(n.h2,{id:"кнопки-с-дропдауном",children:"Кнопки с дропдауном"}),`
`,e.jsxs(n.p,{children:["У кнопок правой части (",e.jsx(n.code,{children:"rightSideInner"}),") с ",e.jsx(n.code,{children:"dropdown"})," шеврон раскрытия рисуется автоматически. Если ",e.jsx(n.code,{children:"contentRight"})," не задан, кнопка сама показывает справа ",e.jsx(n.code,{children:"IconChevronDown"})," с анимацией флипа при открытии дропдауна. Размер шеврона берётся из той же размерной сетки, что и иконки кнопок, отдельно его задавать не нужно."]}),`
`,e.jsxs(n.p,{children:["Если ",e.jsx(n.code,{children:"contentRight"})," задан (например счётчик у группировки), используется он, авто-шеврон не добавляется. Анимацию флипа панель навешивает только на свой авто-шеврон, ваш ",e.jsx(n.code,{children:"contentRight"})," рендерится как есть, контроль за анимация остается на вашей стороне в этом случае."]}),`
`,e.jsxs(n.p,{children:["Размер иконки кнопки (",e.jsx(n.code,{children:"contentLeft"}),") панель задаёт сама под свой размер, отдельно его указывать не нужно. Но если вы явно проставили ",e.jsx(n.code,{children:"size"})," на иконке своей кнопки, он сохраняется, панель его не перезаписывает."]}),`
`,e.jsx(n.h2,{id:"разделители",children:"Разделители"}),`
`,e.jsxs(n.p,{children:["На фиче в ",e.jsx(n.code,{children:"customFeatures"})," можно включить разделитель слева через ",e.jsx(n.code,{children:"dividerLeft: true"}),". Если по дизайн-макету ваша кастомная фича отделена разделителем, задайте ",e.jsx(n.code,{children:"dividerLeft"}),". Разделители сохраняются и в overflow-дропдауне, в той же последовательности, что и в панели."]}),`
`,e.jsx(n.h2,{id:"устаревшее",children:"Устаревшее"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controlBlock.leftSideInner"})," (кнопки в левой части панели, блок «Действия»). Используйте ",e.jsx(n.code,{children:"controlBlock.rightSideInner"})," или ",e.jsx(n.code,{children:"controlBlock.customFeatures"}),"."]}),`
`,e.jsxs(n.li,{children:["Link-стили у кнопок панели (",e.jsx(n.code,{children:"view: 'linkDefault'"}),", ",e.jsx(n.code,{children:"'linkAccent'"})," и подобные на ",e.jsx(n.code,{children:"ControlBlockButtonProps"}),") и ",e.jsx(n.code,{children:"controlButtonDefaultProps"}),". Кнопки панели теперь рисуются как обычные, link-стиль маппится автоматически."]}),`
`,e.jsxs(n.li,{children:["Старый ",e.jsx(n.code,{children:"dropdown"})," на фиче заменён на ",e.jsx(n.code,{children:"details"}),", ",e.jsx(n.code,{children:"customDropdownItem"})," больше не поддерживается."]}),`
`,e.jsxs(n.li,{children:["Свойство ",e.jsx(n.code,{children:"view"})," в ",e.jsx(n.code,{children:"tableConfig"})," не используется."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-конфигурации",children:"Пример конфигурации"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const tableConfig = {
  // заголовок и сворачивание — на уровне таблицы, рядом с controlBlock
  collapsing: {
    enableCollapse: true,
    titleText: 'Реестр задач',
    collapseButtonPlacement: 'above',
  },
  controlBlock: {
    size: 's',
    customFeatures: [
      {
        value: 'customPin',
        label: pinIsActive ? 'Открепить' : 'Закрепить',
        Icon: pinIsActive ? IconPinOutline : IconPinFill,
        onClick: () => setPinIsActive(!pinIsActive),
        // по умолчанию true; поставьте false, чтобы фича не пряталась в дропдаун
        canBeCompressedInToolsMenu: true,
        details: {
          type: 'switch',
          label: 'Закрепление колонок',
          checked: pinIsActive,
          onChange: () => setPinIsActive(!pinIsActive),
        },
      },
    ],
  },
};
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-controlblock-api--docs",children:"ControlBlock API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function K(c={}){const{wrapper:n}={...s(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(o,{...c})}):o(c)}export{K as default};
