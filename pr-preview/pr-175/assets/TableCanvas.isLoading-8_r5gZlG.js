import{j as i}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as l}from"./vendor-csoeu4t0.js";import{T as t}from"./TableCanvas.isLoading.stories-Bj5mq-6c.js";import"./react-is-Clcustum.js";import"./styled-components-CiaFtu7t.js";import"./@tanstack/react-virtual-BmCgWJBo.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C56_C9UH.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-03Z86Vmi.js";import"./IconButton-MjMVEQyz.js";import"./@salutejs/plasma-icons-CILhqZ3Q.js";import"./@salutejs/sdds-finai-m9LnI6h0.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BUHDtJ8W.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BzLT_6pU.js";import"./TextField-cQ97M_HA.js";import"./sharedUtilsInputs-JyaYWgi3.js";import"./AiAgentPopup-DkQFK3QA.js";import"./TextArea-BWx0l4v0.js";import"./sharedUtilsResizable-BLrxSaLI.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-iheHnHNI.js";import"./Collapse-CSdQZIcp.js";import"./react-data-grid-B0devEy1.js";import"./TableTabs-C1MheQAE.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DTd-07VT.js";import"./@glideappsfinal/glide-data-grid-mwxJbNAq.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BphkPQdK.js";import"./ListOfFilters-SCXKa-jP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BbYwd1Eb.js";import"./EmptyState-CdqbsMyg.js";import"./MassActions-DWx2j14b.js";import"./Autocomplete-BMGiBQyi.js";import"./TableCanvas-Da6LM5Fm.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-DGaTJFR7.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:t,name:"Docs"}),`
`,i.jsx(n.h1,{id:"isloading-tablecanvas",children:"IsLoading (TableCanvas)"}),`
`,i.jsx(n.p,{children:i.jsx(n.strong,{children:"tableConfig.isLoading / tableConfig.loadingOverlay"})}),`
`,i.jsx(n.p,{children:"Состояние загрузки таблицы. Поддерживает скелетон-строки и полноэкранный оверлей."}),`
`,i.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Скелетон-строки при загрузке данных (",i.jsx(n.code,{children:"isLoading"}),")"]}),`
`,i.jsxs(n.li,{children:["Настраиваемое количество скелетон-строк (",i.jsx(n.code,{children:"skeletonRowsCount"}),")"]}),`
`,i.jsxs(n.li,{children:["Полноэкранный оверлей с кастомным спиннером (",i.jsx(n.code,{children:"loadingOverlay"}),")"]}),`
`,i.jsxs(n.li,{children:["Задержка показа подзаголовка (",i.jsx(n.code,{children:"showSubtitleDelay"}),")"]}),`
`,i.jsxs(n.li,{children:["Оверлей поверх таблицы без её размонтирования (",i.jsx(n.code,{children:"loadingOverlay.mode: 'cover'"}),")"]}),`
`]}),`
`,i.jsx(n.h2,{id:"когда-использовать-loadingoverlay",children:"Когда использовать loadingOverlay"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Динамическая загрузка схемы таблицы — колонки загружаются с бэкенда"}),`
`,i.jsx(n.li,{children:"Конфигурируемые таблицы — пользователь сам настраивает колонки"}),`
`,i.jsx(n.li,{children:"Ошибки загрузки структуры — не удалось загрузить метаданные"}),`
`]}),`
`,i.jsx(n.h2,{id:"когда-использовать-mode-cover",children:"Когда использовать mode: 'cover'"}),`
`,i.jsxs(n.p,{children:["Обычный ",i.jsx(n.code,{children:"loadingOverlay"})," показывается вместо таблицы: таблица размонтируется, и после снятия оверлея выделение, страница пагинации и прокрутка начинаются заново."]}),`
`,i.jsxs(n.p,{children:["С ",i.jsx(n.code,{children:"mode: 'cover'"})," таблица остаётся на месте, а оверлей ложится поверх неё полупрозрачным размытым слоем. Он закрывает control block, боковые панели, нижнюю панель и пагинацию, в fullscreen тоже, и блокирует мышь, клавиатуру и фокус. Когда оверлей снимается, таблица продолжает работу с того же состояния."]}),`
`,i.jsx(n.p,{children:"Подходит для долгих действий с уже открытой таблицей: удаление или сохранение строк, пересчёт данных."}),`
`,i.jsxs(n.p,{children:["Режимы можно совмещать: на первой загрузке показывать ",i.jsx(n.code,{children:"'replace'"}),", а когда таблица загружена, тем же ",i.jsx(n.code,{children:"loadingOverlay"})," с ",i.jsx(n.code,{children:"mode: 'cover'"})," закрывать её на время действий."]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`loadingOverlay: {
  mode: isFirstLoad ? 'replace' : 'cover',
  active: isFirstLoad || isUpdating,
}
`})}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    loadingOverlay: {
      mode: 'cover',
      active: isUpdating,
      subtitle: 'Обычно это занимает не более 10 секунд',
    },
  }}
/>
`})}),`
`,i.jsxs(n.blockquote,{children:[`
`,i.jsxs(n.p,{children:["Подробнее о типах — ",i.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-isloading-api--docs",children:"IsLoading API"})]}),`
`]}),`
`,i.jsx(l,{})]})}function Y(o={}){const{wrapper:n}={...r(),...o.components};return n?i.jsx(n,{...o,children:i.jsx(e,{...o})}):e(o)}export{Y as default};
