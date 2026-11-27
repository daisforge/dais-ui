import{j as i}from"./react-UEdzNlUe.js";import{df as l}from"./vendor-DTHFTCxs.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-BLbQjfn-.js";import{T as d}from"./TableCanvas.filtering.stories-BqNEqMMJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-EhFzO87Y.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-Ci6gdKWw.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CAVr5OBu.js";import"./Combobox-B3DTr_Ly.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./TableCanvas-Ph-O9Fjm.js";import"./utils-7MphdwvM.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-Ds6qywPJ.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-CLiKwyq9.js";import"./@daisforge/glide-data-grid-BxEVBdtG.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-QolVGGjB.js";import"./sharedUiSearch-Blb9DTGJ.js";import"./TextField-D25ygU2-.js";import"./sharedUtilsInputs-DjjTtkSA.js";import"./Typography-gTMphbdr.js";import"./ListOfFilters-Dk_zKR4J.js";import"./FiltersActions-CVWFxJUb.js";import"./IconButton-Bf4wRAsC.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./NumberFormat-DDiwPRY3.js";import"./EmptyState-DmSFhx-j.js";import"./unidentified@3x-BjiX_gDg.js";import"./ErrorPage-BYsD4yyE.js";import"./Autocomplete-DGklYyP-.js";function n(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:d,name:"Docs"}),`
`,i.jsx(e.h1,{id:"filtering",children:"Filtering"}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"tableConfig.filtering"})}),`
`,i.jsx(e.p,{children:"Фильтрация данных таблицы с поддержкой автоматического и ручного режимов."}),`
`,i.jsxs(e.p,{children:["Фильтр в шапке открывается под иконкой. При нехватке места справа список выравнивается по её правому краю. Автоматическая ширина списка составляет 120–300 px для XS, 120–380 px для S и 140–440 px для M. При достижении максимума длинные подписи переносятся. Ширину формы с ",i.jsx(e.code,{children:"customRender"})," задаёт приложение. У публичного ",i.jsx(e.code,{children:"TableFilterSelect"})," минимальная высота пункта по размерам строки составляет 24, 40 и 48 px. Галочка одиночного выбора в строке ",i.jsx(e.code,{children:"medium"})," имеет размер 16 px."]}),`
`,i.jsx(e.p,{children:"В примере Filtering Table откройте фильтр в заголовке Priority, чтобы увидеть перенос длинных подписей. Кнопка размера строки на панели меняет плотность таблицы. В примере Manual короткий список открывается у Priority, а поле ввода — у Title."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Три типа фильтров: ",i.jsx(e.code,{children:"input"}),", ",i.jsx(e.code,{children:"select"}),", ",i.jsx(e.code,{children:"custom"})]}),`
`,i.jsxs(e.li,{children:["Автоматическая фильтрация по умолчанию, ручная через ",i.jsx(e.code,{children:"manualFiltering: true"})]}),`
`,i.jsx(e.li,{children:"Отображение активных фильтров в виде chip-элементов"}),`
`,i.jsx(e.li,{children:"Поддержка фильтрации через sidebar с настройкой порядка и глобальных фильтров"}),`
`,i.jsx(e.li,{children:"Кастомизация chip-стилей и лейблов"}),`
`]}),`
`,i.jsx(e.h2,{id:"типы-фильтров",children:"Типы фильтров"}),`
`,i.jsx(e.h3,{id:"input",children:"Input"}),`
`,i.jsxs(e.p,{children:["Текстовый фильтр с режимами: ",i.jsx(e.code,{children:"'includes'"}),", ",i.jsx(e.code,{children:"'startWith'"}),", ",i.jsx(e.code,{children:"'equal'"})," или кастомная функция."]}),`
`,i.jsx(e.h3,{id:"select",children:"Select"}),`
`,i.jsxs(e.p,{children:["Фильтр выбором из списка. Поддержка одиночного (",i.jsx(e.code,{children:"'single'"}),") и множественного (",i.jsx(e.code,{children:"'multiple'"}),") выбора."]}),`
`,i.jsx(e.h3,{id:"custom",children:"Custom"}),`
`,i.jsxs(e.p,{children:["Полностью кастомный компонент фильтра через ",i.jsx(e.code,{children:"customRender"}),"."]}),`
`,i.jsx(e.h2,{id:"конфигурация-filteringconfig",children:"Конфигурация FilteringConfig"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"state"})})," ",i.jsx(e.code,{children:"[T, setState]"})," — стейт фильтров (обязательный)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"manualFiltering"})})," ",i.jsx(e.code,{children:"boolean"})," — ручная фильтрация (данные не фильтруются таблицей)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"filtersInfo"})})," ",i.jsx(e.code,{children:"Record<keyof T, { label, clearedValue }>"})," — метки и дефолтные значения фильтров"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"sidebarConfig"})})," ",i.jsx(e.code,{children:"{ order?, items }"})," — конфигурация sidebar с фильтрами"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"chipStyle"})})," ",i.jsx(e.code,{children:"(itemOrGroup, item) => CSSObject"})," — кастомные стили для chip-элементов"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"renderGroupLabel"})})," ",i.jsx(e.code,{children:"(group) => string"})," — кастомный заголовок группы чипсов"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"renderChipLabel"})})," ",i.jsx(e.code,{children:"(group, item) => string"})," — кастомный текст чипса"]}),`
`]}),`
`,i.jsx(e.h2,{id:"кастомизация-чипсов",children:"Кастомизация чипсов"}),`
`,i.jsx(e.h3,{id:"chipstyle",children:"chipStyle"}),`
`,i.jsx(e.p,{children:"Позволяет динамически задавать стили для каждого чипа фильтра в зависимости от его типа и содержимого."}),`
`,i.jsx(e.h3,{id:"rendergrouplabel",children:"renderGroupLabel"}),`
`,i.jsx(e.p,{children:"Форматтер заголовка группы чипсов. Полезен для i18n или добавления счётчика выбранных элементов."}),`
`,i.jsx(e.h3,{id:"renderchiplabel",children:"renderChipLabel"}),`
`,i.jsxs(e.p,{children:["Форматтер текста внутри чипса. Полезен при серверной пагинации, когда в стейте хранится только ",i.jsx(e.code,{children:"value"}),", а ",i.jsx(e.code,{children:"label"})," подставляется из кэша."]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["При ",i.jsx(e.code,{children:"manualFiltering: true"})," таблица не фильтрует данные — ожидается внешняя логика (серверная)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"sidebarConfig"})," позволяет добавлять глобальные фильтры, не привязанные к колонкам"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"filtersInfo"})," задаёт лейблы и значения по умолчанию для каждого фильтра"]}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Подробнее о типах — ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-filtering-api--docs",children:"Filtering API"})]}),`
`]}),`
`,i.jsx(c,{})]})}function ni(r={}){const{wrapper:e}={...l(),...r.components};return e?i.jsx(e,{...r,children:i.jsx(n,{...r})}):n(r)}export{ni as default};
