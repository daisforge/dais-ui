import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as c}from"./vendor-DaS3N6lV.js";import{N as d}from"./TableCanvas.notifications.stories-DJvMLEVs.js";import"./react-is-Clcustum.js";import"./styled-components-By-Qua6E.js";import"./@tanstack/react-virtual-bE6tDT6W.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CW0G7jtC.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DsOcMTPd.js";import"./FiltersActions-BPlwyOA9.js";import"./IconButton-DN_vLAqh.js";import"./@salutejs/plasma-icons-DYi7Td5X.js";import"./@salutejs/sdds-finai-CE284srQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-LFsJSXST.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CPQ5Zm8W.js";import"./TextField-C669WM3p.js";import"./sharedUtilsInputs-B_93GBuf.js";import"./AnalyticalWidget-Dwwt6g9d.js";import"./Collapse-DJnuAkJg.js";import"./Table-CqpCFdmK.js";import"./react-data-grid-Ci-iu5WB.js";import"./TableTabs-BloZZaWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ck4cf0_p.js";import"./ListOfFilters-NZpGeeo8.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CMG8MZiW.js";import"./EmptyState-BJxE2lSo.js";import"./MassActions-DcWWP5Ns.js";import"./Autocomplete-A6BK-6Vg.js";import"./TableGlide-BkTCU4Bq.js";import"./@glideappsfinal/glide-data-grid-0NVFZW-P.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BMcpu60A.js";function o(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function Q(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{Q as default};
