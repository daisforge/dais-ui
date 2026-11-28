import{j as e}from"./react-UEdzNlUe.js";import{df as l}from"./vendor-BZ4xHhIu.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import{T as d}from"./TableCanvas.filtering.stories-C3H51R1b.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-Igcbn0Jb.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-1ilqKMuH.js";import"./Combobox-Q8JqGQSC.js";import"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./TableCanvas-Chw9-wLd.js";import"./utils-Dxt9aEaB.js";import"./constants-Brx3fuKM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-BLwU7d6k.js";import"./Collapse-BumLdPOr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-Crv_qypv.js";import"./@daisforge/glide-data-grid-DT7m1Exm.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-DK3E2Tjx.js";import"./sharedUiSearch-DfMFGjDK.js";import"./TextField-zS5TeN3S.js";import"./sharedUtilsInputs-CU9inT7Z.js";import"./Typography-LZqKnjkf.js";import"./ListOfFilters-BwM87NcY.js";import"./FiltersActions-BKFvIl-i.js";import"./IconButton-DGP6Lkn6.js";import"./Tooltip-EuRIJkYt.js";import"./lodash.isequal-mFNAsUE8.js";import"./NumberFormat-DGNiwVXJ.js";import"./EmptyState-m9Bn6vD9.js";import"./unidentified@3x-_wSsvM7E.js";import"./ErrorPage-rVDsnkg1.js";import"./Autocomplete-fJfjzeXV.js";function n(r){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function ne(r={}){const{wrapper:i}={...l(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{ne as default};
