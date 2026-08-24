import{j as e}from"./react-D2T61mpp.js";import{c4 as i,c5 as c,b_ as d}from"./vendor-4DQodAhx.js";import{M as o}from"./MassActions.stories-DljvT7qK.js";import"./react-is-Clcustum.js";import"./styled-components-rNTPyvwi.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-C1kndaLg.js";import"./storySourceDoc-tVKyHcEN.js";import"./LeftPanel-Bp_itFNh.js";import"./Box-D1D-Fewz.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/sdds-finai-BCLo0Wa_.js";import"./utils-CssElEth.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D6Arjyth.js";import"./MassActions-BkwwCjao.js";import"./Table-D-SEH3EB.js";import"./FiltersActions-BfyjoJr4.js";import"./IconButton-BW1UuVlC.js";import"./TextField-Cy-EMYiz.js";import"./sharedUtilsInputs-BZ_MSaS9.js";import"./AnalyticalWidget-OnDsIgBw.js";import"./Collapse-DpDeoG2B.js";import"./react-data-grid-tKl_XS4t.js";import"./TableTabs-DeLIsUYk.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DxW1YHBS.js";import"./ListOfFilters-BythAXSj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-HePYtvMi.js";import"./EmptyState-dceGeKnG.js";import"./Autocomplete-BlRSEoSY.js";import"./MassActionsStatic-CUMbmamP.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"Docs"}),`
`,e.jsx(n.h1,{id:"massactions",children:"MassActions"}),`
`,e.jsx(n.p,{children:"Базовый адаптивный компонент панели массовых действий. Независим от таблицы - может использоваться с любым контейнером. Поддерживает автоматическую компрессию кнопок при нехватке места, сворачивание/разворачивание, удобное позиционирование и другие возможности."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Автоматическая компрессия кнопок при нехватке места"}),`
`,e.jsx(n.li,{children:"Accent-кнопки всегда остаются видимыми"}),`
`,e.jsx(n.li,{children:"Автоцентрирование относительно контейнера"}),`
`,e.jsx(n.li,{children:"Поддержка двух типов кнопок: Button и LinkButton"}),`
`,e.jsxs(n.li,{children:["Размеры кнопок подбираются автоматически — передавать ",e.jsx(n.code,{children:"size"})," кнопкам не нужно (если задан, используется как есть)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(n.h3,{id:"counter",children:"Counter"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MassActions.Counter"})," — компонент счетчика выбранных элементов. Может отображать чекбокс, текст и анимированный badge с количеством."]}),`
`,e.jsx(n.h4,{id:"логика-работы-чекбокса",children:"Логика работы чекбокса"}),`
`,e.jsx(n.p,{children:"Чекбокс в Counter имеет три состояния:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"checked = true"})," — когда все элементы выбраны (",e.jsx(n.code,{children:"selectedCount === totalCount"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"indeterminate = true"})," — когда выбрано частично (",e.jsx(n.code,{children:"0 < selectedCount < totalCount"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"checked = false, indeterminate = false"})," — когда ничего не выбрано (",e.jsx(n.code,{children:"selectedCount === 0"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно:"})," Состояние чекбокса должно вычисляться на основе ",e.jsx(n.code,{children:"selectedCount"})," и общего количества элементов, а не храниться в отдельном состоянии. Это обеспечивает синхронизацию между ручным выделением элементов и состоянием чекбокса."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Правильная реализация логики чекбокса
const items = [...]; // массив всех элементов
const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

// Вычисляем состояние на основе selectedItems
const allSelected = selectedItems.size === items.length;
const someSelected = selectedItems.size > 0 && selectedItems.size < items.length;
const checked = allSelected;
const indeterminate = someSelected;

const handleCheckboxChange = (isChecked: boolean) => {
  if (isChecked) {
    // Выделяем все элементы
    setSelectedItems(new Set(items.map((item) => item.id)));
  } else {
    // Снимаем выделение со всех элементов
    setSelectedItems(new Set());
  }
};

<MassActions.Counter
  selectedCount={selectedItems.size}
  showCheckbox
  checked={checked}
  indeterminate={indeterminate}
  onCheckboxChange={(e) => handleCheckboxChange(e.target.checked)}
/>
`})}),`
`,e.jsx(n.h2,{id:"massactionsstatic",children:"MassActionsStatic"}),`
`,e.jsx(n.p,{children:"Статический компонент панели действий без адаптивной компрессии. Предназначен для использования в местах, где не требуется автоматическое скрытие кнопок (например, в боковых панелях LeftPanel)."}),`
`,e.jsxs(n.p,{children:["В отличие от ",e.jsx(n.code,{children:"MassActions"}),", ",e.jsx(n.code,{children:"MassActionsStatic"})," не поддерживает компрессию кнопок и позиционирование относительно контейнера. Поддерживает блочное отображение через проп ",e.jsx(n.code,{children:"position"})," (",e.jsx(n.code,{children:"static"})," или ",e.jsx(n.code,{children:"relative"}),"), что позволяет использовать компонент как обычный блок без абсолютного позиционирования."]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsx(n.h3,{id:"компрессия-кнопок",children:"Компрессия кнопок"}),`
`,e.jsx(n.p,{children:"При нехватке места кнопки автоматически скрываются в дропдауне скрытых действий:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Все accent-кнопки всегда видимы"}),`
`,e.jsx(n.li,{children:"Обычные кнопки добавляются по порядку, пока помещаются"}),`
`,e.jsx(n.li,{children:"Остальные кнопки идут в дропдаун скрытых действий"}),`
`]}),`
`,e.jsx(n.h3,{id:"позиционирование",children:"Позиционирование"}),`
`,e.jsxs(n.p,{children:["Панель автоматически центрируется относительно переданного контейнера (",e.jsx(n.code,{children:"containerRef"}),"). В большинстве сценариев достаточно просто передать корректный контейнер, дополнительная настройка через ",e.jsx(n.code,{children:"sidebarConfig"})," нужна только для продвинутых кейсов."]}),`
`,e.jsx(n.h3,{id:"размеры-кнопок",children:"Размеры кнопок"}),`
`,e.jsxs(n.p,{children:["Размеры кнопок и дропдаунов панель подбирает сама — по режиму отображения. В обычном режиме кнопки рендерятся размером ",e.jsx(n.code,{children:"s"}),", в компактном (узкий вьюпорт, до 1280px включительно) — ",e.jsx(n.code,{children:"xs"}),". Передавать ",e.jsx(n.code,{children:"size"})," кнопкам отдельно ",e.jsx(n.strong,{children:"не нужно"}),". Если ",e.jsx(n.code,{children:"size"})," всё же задан — он используется как есть."]}),`
`,e.jsx(n.h2,{id:"типы-кнопок",children:"Типы кнопок"}),`
`,e.jsxs(n.p,{children:["Каждый элемент массива ",e.jsx(n.code,{children:"buttons"})," — это либо обычная кнопка (",e.jsx(n.code,{children:"type: 'button'"}),", компонент ",e.jsx(n.code,{children:"Button"}),"), либо кнопка-ссылка (",e.jsx(n.code,{children:"type: 'linkButton'"}),", компонент ",e.jsx(n.code,{children:"LinkButton"}),"). Кнопки с ",e.jsx(n.code,{children:"view: 'accent'"})," никогда не скрываются в дропдауне скрытых действий."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`buttons={[
  {
    type: 'button',
    text: 'Действие',
    view: 'secondary', // 'accent' / 'critical' / 'primary' и т.д.
    onClick: () => {},
  },
  {
    type: 'linkButton',
    text: 'Ссылка-действие',
    view: 'linkSecondary', // link-стили: 'linkAccent' / 'linkDefault' и т.д.
    onClick: () => {},
  },
]}
`})}),`
`,e.jsx(n.h2,{id:"disabled-состояние",children:"Disabled-состояние"}),`
`,e.jsxs(n.p,{children:["Если у кнопки ",e.jsx(n.code,{children:"disabled: true"}),", можно передать ",e.jsx(n.code,{children:"disabledTooltipProps"})," — подсказку, которая покажется при наведении на неактивную кнопку:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  type: 'button',
  text: 'Действие',
  view: 'secondary',
  disabled: true,
  disabledTooltipProps: {
    text: 'Выберите элементы для выполнения действия',
  },
  onClick: () => {},
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно:"})," disabled-кнопка остаётся неактивной и после ухода в дропдаун скрытых действий — ",e.jsx(n.code,{children:"disabled"})," пробрасывается на пункт меню. Подсказка ",e.jsx(n.code,{children:"disabledTooltipProps"})," при этом показывается только у кнопок на самой панели, в меню её нет."]}),`
`,e.jsx(n.h2,{id:"dropdown-в-кнопках",children:"Dropdown в кнопках"}),`
`,e.jsx(n.p,{children:"Кнопка может открывать вложенный dropdown:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  type: 'button',
  text: 'Действие с меню',
  view: 'secondary',
  dropdown: {
    items: [
      { label: 'Опция 1', value: '1' },
      { label: 'Опция 2', value: '2' },
    ],
    onItemSelect: (item) => {},
  },
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-massactions-api--docs",children:"MassActions API"})]}),`
`]}),`
`,e.jsx(d,{})]})}function G(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{G as default};
