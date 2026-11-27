import{j as e}from"./react-UEdzNlUe.js";import{df as l}from"./vendor-DTHFTCxs.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-BTJpw3WR.js";import{T as c}from"./TableCanvas.filtering.stories-CQL73jWA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-DihHaBn_.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D34zP8Zj.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CAVr5OBu.js";import"./Combobox-B3DTr_Ly.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./TableCanvas-CDZkRChO.js";import"./utils-7MphdwvM.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-Ds6qywPJ.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-1dyroHpI.js";import"./@daisforge/glide-data-grid-DH_ChNwc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-QolVGGjB.js";import"./sharedUiSearch-Blb9DTGJ.js";import"./TextField-D25ygU2-.js";import"./sharedUtilsInputs-DjjTtkSA.js";import"./Typography-iY6IgvJ3.js";import"./ListOfFilters-CfqXpBrg.js";import"./FiltersActions-C9S7KRn0.js";import"./IconButton-Bf4wRAsC.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./NumberFormat-DDiwPRY3.js";import"./EmptyState-k64dhu_G.js";import"./unidentified@3x-p-1UhR3r.js";import"./ErrorPage-CpTA2l3H.js";import"./Autocomplete-DGklYyP-.js";function r(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(i.h1,{id:"filtering",children:"Filtering"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"tableConfig.filtering"})}),`
`,e.jsx(i.p,{children:"Фильтрация данных таблицы с поддержкой автоматического и ручного режимов."}),`
`,e.jsxs(i.p,{children:["Фильтр в шапке открывается под иконкой. При нехватке места справа список выравнивается по её правому краю. Автоматическая ширина списка составляет 120–300 px для XS, 120–380 px для S и 140–440 px для M. При достижении максимума длинные подписи переносятся. Ширину формы с ",e.jsx(i.code,{children:"customRender"})," задаёт приложение. У публичного ",e.jsx(i.code,{children:"TableFilterSelect"})," минимальная высота пункта по размерам строки составляет 24, 40 и 48 px. Галочка одиночного выбора в строке ",e.jsx(i.code,{children:"medium"})," имеет размер 16 px."]}),`
`,e.jsx(i.p,{children:"В примере Filtering Table откройте фильтр в заголовке Priority, чтобы увидеть перенос длинных подписей. Кнопка размера строки на панели меняет плотность таблицы. В примере Manual короткий список открывается у Priority, а поле ввода — у Title."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Три типа фильтров: ",e.jsx(i.code,{children:"input"}),", ",e.jsx(i.code,{children:"select"}),", ",e.jsx(i.code,{children:"custom"})]}),`
`,e.jsxs(i.li,{children:["Автоматическая фильтрация по умолчанию, ручная через ",e.jsx(i.code,{children:"manualFiltering: true"})]}),`
`,e.jsx(i.li,{children:"Отображение активных фильтров в виде chip-элементов"}),`
`,e.jsx(i.li,{children:"Поддержка фильтрации через sidebar с настройкой порядка и глобальных фильтров"}),`
`,e.jsx(i.li,{children:"Кастомизация chip-стилей и лейблов"}),`
`]}),`
`,e.jsx(i.h2,{id:"типы-фильтров",children:"Типы фильтров"}),`
`,e.jsx(i.h3,{id:"input",children:"Input"}),`
`,e.jsxs(i.p,{children:["Текстовый фильтр с режимами: ",e.jsx(i.code,{children:"'includes'"}),", ",e.jsx(i.code,{children:"'startWith'"}),", ",e.jsx(i.code,{children:"'equal'"})," или кастомная функция."]}),`
`,e.jsx(i.h3,{id:"select",children:"Select"}),`
`,e.jsxs(i.p,{children:["Фильтр выбором из списка. Поддержка одиночного (",e.jsx(i.code,{children:"'single'"}),") и множественного (",e.jsx(i.code,{children:"'multiple'"}),") выбора. В заголовке таблицы список сохраняет ширину при вводе и очистке поискового запроса. При следующем открытии ширина снова определяется по содержимому."]}),`
`,e.jsxs(i.p,{children:["В режиме ",e.jsx(i.code,{children:"listControls: 'slots'"})," без слотов видны только варианты. Чтобы вернуть прежний интерфейс, передайте оба готовых элемента в ",e.jsx(i.code,{children:"beforeList"}),". Каждый можно использовать отдельно или вместе с содержимым приложения. Компоненты берут состояние из фильтра заголовка."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { type ColumnConfig, TableFilterSearch, TableFilterSelectAll } from '@daisforge/ui/components/TableCanvas';

const filtering: ColumnConfig<{ status: string }>['filtering'] = {
  component: 'select',
  keyInFilterState: 'status',
  filter: { typeOfValue: 'multiple', filteringType: (values, value) => !values.length || values.includes(value) },
  valueInRow: (row: { status: string }) => row.status,
  selectOptions: {
    type: 'constant',
    options: [{ value: 'open', text: 'Открыт' }, { value: 'closed', text: 'Закрыт' }],
  },
  listControls: 'slots',
  beforeList: () => (
    <>
      <TableFilterSearch />
      <TableFilterSelectAll />
    </>
  ),
};
`})}),`
`,e.jsxs(i.p,{children:["«Выбрать всё» появляется при двух и более видимых вариантах и переключает весь исходный набор. Прокручиваются только варианты. Верхний слот и действия в ",e.jsx(i.code,{children:"afterList"})," остаются видимыми при заданном ",e.jsx(i.code,{children:"listMaxHeight"}),". Без ",e.jsx(i.code,{children:"listControls"})," сохраняется опубликованный интерфейс со встроенными элементами. Сайдбар использует собственные элементы поиска и выбора."]}),`
`,e.jsxs(i.p,{children:["Если вы собираете свой список с ",e.jsx(i.code,{children:"TableFilterSelectListItem"})," из ",e.jsx(i.code,{children:"@daisforge/ui/components/TableCanvas"}),", пункт сам задаёт расстояние между иконкой или чекбоксом и подписью. Для строк ",e.jsx(i.code,{children:"small"})," и ",e.jsx(i.code,{children:"medium"})," это 6 px, для ",e.jsx(i.code,{children:"big"})," — 8 px. Если раньше вы задавали иконке или чекбоксу ",e.jsx(i.code,{children:"marginRight"})," для этого отступа, уберите его, иначе отступы сложатся."]}),`
`,e.jsx(i.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(i.p,{children:["Полностью кастомный компонент фильтра через ",e.jsx(i.code,{children:"customRender"}),"."]}),`
`,e.jsx(i.h2,{id:"конфигурация-filteringconfig",children:"Конфигурация FilteringConfig"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"state"})})," ",e.jsx(i.code,{children:"[T, setState]"})," — стейт фильтров (обязательный)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"manualFiltering"})})," ",e.jsx(i.code,{children:"boolean"})," — ручная фильтрация (данные не фильтруются таблицей)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"filtersInfo"})})," ",e.jsx(i.code,{children:"Record<keyof T, { label, clearedValue }>"})," — метки и дефолтные значения фильтров"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"sidebarConfig"})})," ",e.jsx(i.code,{children:"{ order?, items }"})," — конфигурация sidebar с фильтрами"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"chipStyle"})})," ",e.jsx(i.code,{children:"(itemOrGroup, item) => CSSObject"})," — кастомные стили для chip-элементов"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"renderGroupLabel"})})," ",e.jsx(i.code,{children:"(group) => string"})," — кастомный заголовок группы чипсов"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"renderChipLabel"})})," ",e.jsx(i.code,{children:"(group, item) => string"})," — кастомный текст чипса"]}),`
`]}),`
`,e.jsx(i.h2,{id:"кастомизация-чипсов",children:"Кастомизация чипсов"}),`
`,e.jsx(i.h3,{id:"chipstyle",children:"chipStyle"}),`
`,e.jsx(i.p,{children:"Позволяет динамически задавать стили для каждого чипа фильтра в зависимости от его типа и содержимого."}),`
`,e.jsx(i.h3,{id:"rendergrouplabel",children:"renderGroupLabel"}),`
`,e.jsx(i.p,{children:"Форматтер заголовка группы чипсов. Полезен для i18n или добавления счётчика выбранных элементов."}),`
`,e.jsx(i.h3,{id:"renderchiplabel",children:"renderChipLabel"}),`
`,e.jsxs(i.p,{children:["Форматтер текста внутри чипса. Полезен при серверной пагинации, когда в стейте хранится только ",e.jsx(i.code,{children:"value"}),", а ",e.jsx(i.code,{children:"label"})," подставляется из кэша."]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["При ",e.jsx(i.code,{children:"manualFiltering: true"})," таблица не фильтрует данные — ожидается внешняя логика (серверная)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"sidebarConfig"})," позволяет добавлять глобальные фильтры, не привязанные к колонкам"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"filtersInfo"})," задаёт лейблы и значения по умолчанию для каждого фильтра"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-filtering-api--docs",children:"Filtering API"})]}),`
`]}),`
`,e.jsx(t,{})]})}function re(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{re as default};
