import{j as e}from"./react-UEdzNlUe.js";import{df as r}from"./vendor-DTHFTCxs.js";import{M as s,S as c}from"./WithTooltip-KJL26V4Q-C3x9tCBM.js";import{N as d}from"./TableCanvas.notifications.stories-DbY9obqa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-BOyu4uG3.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DUafcp_1.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CZpwsoeY.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-Cc8UerBz.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Jb2Onqi_.js";import"./@salutejs/plasma-icons-C6iRh3Pq.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-DUic9P4N.js";import"./Box-CAVr5OBu.js";import"./Collapse-CKKPV_S6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-B6g4hc_2.js";import"./@daisforge/glide-data-grid-7SWKw7OM.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-GaaUELLw.js";import"./sharedUiSearch-Br8C3RCh.js";import"./TextField-Cu6HokJS.js";import"./sharedUtilsInputs-t7ShkDmK.js";import"./Typography-CPfrmcSS.js";import"./ListOfFilters-CaFybgEu.js";import"./FiltersActions-BQ_4x4XD.js";import"./IconButton-s9L26CSR.js";import"./Tooltip-DNh4Yts8.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-uBgqq2ir.js";import"./NumberFormat-DF3lboLZ.js";import"./EmptyState-DsJjulzh.js";import"./unidentified@3x-9d_s2m7N.js";import"./ErrorPage-D2aEy8hF.js";import"./Autocomplete-zKBYUNFR.js";function o(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"notifications",children:"Notifications"}),`
`,e.jsxs(n.p,{children:[`Стандартизированный канал событий таблицы для внешних потребителей. Таблица
`,e.jsx(n.strong,{children:"не рисует UI сама"})," — она вызывает ",e.jsx(n.code,{children:"onNotification"}),`, а тост/модалку/уведомление
показывает потребитель на своей стороне. Задаётся через
`,e.jsx(n.code,{children:"tableConfig.notifications"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Единый колбэк"})," ",e.jsx(n.code,{children:"notifications.onNotification(event)"}),` — вызывается на каждое
событие таблицы.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Стандартизированные типы"})," событий: широкая категория ",e.jsx(n.code,{children:"type"}),` +
уточняющий машинный `,e.jsx(n.code,{children:"code"})," + ",e.jsx(n.code,{children:"level"})," (серьёзность) + дефолтный ",e.jsx(n.code,{children:"message"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UI на стороне потребителя"}),` — библиотека не навязывает вид уведомления,
отдаёт только данные (`,e.jsx(n.code,{children:"message"})," можно игнорировать и показать свой текст)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Расширяемость"})," — новые события добавляются в каталог, конвейер не меняется."]}),`
`]}),`
`,e.jsx(n.h2,{id:"каталог-событий",children:"Каталог событий"}),`
`,e.jsxs(n.p,{children:[`Сейчас эмитятся события copy / paste / fill и закрепления колонок (pin).
Каждое событие — это `,e.jsx(n.code,{children:"TableNotification"})," с полями ",e.jsx(n.code,{children:"type"})," / ",e.jsx(n.code,{children:"code"})," / ",e.jsx(n.code,{children:"level"}),`
(см. `,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications-api--docs",children:"API"}),`).
Формат пункта ниже — `,e.jsx(n.code,{children:"type"})," · ",e.jsx(n.code,{children:"code"})," · ",e.jsx(n.code,{children:"level"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"copy"})," · ",e.jsx(n.code,{children:"multi-range-scattered"})," · ",e.jsx(n.code,{children:"error"})]}),` — копирование при разрозненном
выборе сразу по разным строкам И колонкам (2D-разброс).`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"paste"})," · ",e.jsx(n.code,{children:"multi-range-scattered"})," · ",e.jsx(n.code,{children:"error"})]}),` — вставка при таком же
2D-разбросе выделения.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"paste"})," · ",e.jsx(n.code,{children:"readonly-abort"})," · ",e.jsx(n.code,{children:"error"})]})," — при ",e.jsx(n.code,{children:"paste.readonlyBehavior: 'abort'"})," в области вставки оказалась нередактируемая ячейка."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"paste"})," · ",e.jsx(n.code,{children:"overflow-abort"})," · ",e.jsx(n.code,{children:"error"})]})," — при ",e.jsx(n.code,{children:"paste.overflowBehavior: 'abort'"})," данные не поместились в границы таблицы."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"paste"})," · ",e.jsx(n.code,{children:"validation-skipped"})," · ",e.jsx(n.code,{children:"warning"})]}),` — часть значений пропущена
проверкой типа ячеек (в `,e.jsx(n.code,{children:"meta.count"})," — сколько)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"fill"})," · ",e.jsx(n.code,{children:"readonly-abort"})," · ",e.jsx(n.code,{children:"error"})]}),` — при автозаполнении (fill handle) в
области заполнения оказалась нередактируемая ячейка.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"fill"})," · ",e.jsx(n.code,{children:"validation-skipped"})," · ",e.jsx(n.code,{children:"warning"})]}),` — при автозаполнении часть
значений пропущена проверкой типа ячеек (в `,e.jsx(n.code,{children:"meta.count"})," — сколько)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"pin"})," · ",e.jsx(n.code,{children:"no-selection"})," · ",e.jsx(n.code,{children:"warning"})]}),` — попытка закрепить столбцы из меню
закрепления (контрл-блок) без выделенных колонок.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"как-подписаться",children:"Как подписаться"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    notifications: {
      onNotification: (event) => {
        // event: { type, code, level, message, meta? }
        if (event.level === 'error') showToast(event.message, 'error');
        // или ветвление по event.code для своих текстов
      },
    },
  }}
/>
`})}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Событие — это ",e.jsx(n.strong,{children:"данные"}),`, а не рендер: показывать/скрывать/группировать
уведомления решает потребитель.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"meta"})," несёт детали события (например, ",e.jsx(n.code,{children:"validation-skipped"})," → ",e.jsx(n.code,{children:"{ count }"}),")."]}),`
`,e.jsxs(n.li,{children:[`Наличие/отсутствие подписки не меняет поведение copy/paste — при ошибке
операция и так не выполняется, `,e.jsx(n.code,{children:"onNotification"}),` лишь дополнительно сообщает о
причине.`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications-api--docs",children:"Notifications API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function re(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{re as default};
