import{j as n}from"./react-D2T61mpp.js";import{cf as r,cg as s,c9 as l}from"./vendor-7aqy_xTb.js";import{T as t}from"./TableCanvas.isLoading.stories-Cn6Qt5c2.js";import"./react-is-Clcustum.js";import"./styled-components-CXZSXreE.js";import"./@tanstack/react-virtual-CkODh3sb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B1ttUE2N.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-CDdH9Py-.js";import"./IconButton-BBkNIed4.js";import"./@salutejs/plasma-icons-Bcg6L4LU.js";import"./@salutejs/sdds-finai-DF87wwoG.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-kyY3EeQU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BudS048U.js";import"./TextField-CDVhm1po.js";import"./sharedUtilsInputs-DuT9JNZO.js";import"./AiAgentPopup-UDrBvRnb.js";import"./TextArea-DcWLvEC7.js";import"./sharedUtilsResizable-QyuAbFa-.js";import"./Table-Cv_KkrbY.js";import"./Collapse-KzYV655_.js";import"./react-data-grid-DV7N6h-i.js";import"./TableTabs-D-aNuMZc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BEJLzW5G.js";import"./@glideappsfinal/glide-data-grid-CdWoP9cy.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-tT9L2lKN.js";import"./ListOfFilters-CmRH7cPa.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bf-ywxR8.js";import"./EmptyState-DqWtiGpJ.js";import"./MassActions-6lajYcuT.js";import"./Autocomplete-2E3Tf95l.js";import"./TableCanvas-CXjRm5zX.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-CX7YBCrd.js";function e(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
`,n.jsx(i.h1,{id:"isloading-tablecanvas",children:"IsLoading (TableCanvas)"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"tableConfig.isLoading / tableConfig.loadingOverlay"})}),`
`,n.jsx(i.p,{children:"Состояние загрузки таблицы. Поддерживает скелетон-строки и полноэкранный оверлей."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Скелетон-строки при загрузке данных (",n.jsx(i.code,{children:"isLoading"}),")"]}),`
`,n.jsxs(i.li,{children:["Настраиваемое количество скелетон-строк (",n.jsx(i.code,{children:"skeletonRowsCount"}),")"]}),`
`,n.jsxs(i.li,{children:["Полноэкранный оверлей с кастомным спиннером (",n.jsx(i.code,{children:"loadingOverlay"}),")"]}),`
`,n.jsxs(i.li,{children:["Задержка показа подзаголовка (",n.jsx(i.code,{children:"showSubtitleDelay"}),")"]}),`
`,n.jsxs(i.li,{children:["Оверлей поверх таблицы без её размонтирования (",n.jsx(i.code,{children:"loadingOverlay.mode: 'cover'"}),")"]}),`
`]}),`
`,n.jsx(i.h2,{id:"когда-использовать-loadingoverlay",children:"Когда использовать loadingOverlay"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Динамическая загрузка схемы таблицы — колонки загружаются с бэкенда"}),`
`,n.jsx(i.li,{children:"Конфигурируемые таблицы — пользователь сам настраивает колонки"}),`
`,n.jsx(i.li,{children:"Ошибки загрузки структуры — не удалось загрузить метаданные"}),`
`]}),`
`,n.jsx(i.h2,{id:"когда-использовать-mode-cover",children:"Когда использовать mode: 'cover'"}),`
`,n.jsxs(i.p,{children:["Обычный ",n.jsx(i.code,{children:"loadingOverlay"})," показывается вместо таблицы: таблица размонтируется, и после снятия оверлея выделение, страница пагинации и прокрутка начинаются заново."]}),`
`,n.jsxs(i.p,{children:["С ",n.jsx(i.code,{children:"mode: 'cover'"})," таблица остаётся на месте, а оверлей ложится поверх неё полупрозрачным размытым слоем. Он закрывает control block, боковые панели, нижнюю панель и пагинацию, в fullscreen тоже, и блокирует мышь, клавиатуру и фокус. Когда оверлей снимается, таблица продолжает работу с того же состояния."]}),`
`,n.jsx(i.p,{children:"Подходит для долгих действий с уже открытой таблицей: удаление или сохранение строк, пересчёт данных."}),`
`,n.jsxs(i.p,{children:["Режимы можно совмещать: на первой загрузке показывать ",n.jsx(i.code,{children:"'replace'"}),", а когда таблица загружена, тем же ",n.jsx(i.code,{children:"loadingOverlay"})," с ",n.jsx(i.code,{children:"mode: 'cover'"})," закрывать её на время действий."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`loadingOverlay: {
  mode: isFirstLoad ? 'replace' : 'cover',
  active: isFirstLoad || isUpdating,
}
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    loadingOverlay: {
      mode: 'cover',
      active: isUpdating,
      subtitle: 'Обычно это занимает не более 10 секунд',
    },
  }}
/>
`})}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:["Подробнее о типах — ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-isloading-api--docs",children:"IsLoading API"})]}),`
`]}),`
`,n.jsx(l,{})]})}function W(o={}){const{wrapper:i}={...r(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}export{W as default};
