import{j as i}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as l}from"./vendor-DQE_v-3P.js";import{T as t}from"./TableCanvas.isLoading.stories-DrP0YlTI.js";import"./react-is-Clcustum.js";import"./styled-components-CnJDq8_Y.js";import"./@tanstack/react-virtual-COmxIx-H.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CCVtLeWJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-DtLTpvlb.js";import"./IconButton-BFdcKLV4.js";import"./@salutejs/plasma-icons-C5hAfewY.js";import"./@salutejs/sdds-finai-DEVB1MHB.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-sHkSbqrk.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D70Wu-J-.js";import"./TextField-C1W7ideM.js";import"./sharedUtilsInputs-CyoADmmX.js";import"./AiAgentPopup-BhPpY7Pz.js";import"./TextArea-iDWuvbHG.js";import"./sharedUtilsResizable-L-WgumPX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DPC7iENO.js";import"./Collapse-Bzr6KiQY.js";import"./react-data-grid-C31jW-aJ.js";import"./TableTabs-CdEhKw9I.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BWQx89lK.js";import"./@glideappsfinal/glide-data-grid-DOgxh6RK.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BgqBx9fg.js";import"./ListOfFilters-B_De42vo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-vI2bNhRH.js";import"./EmptyState-0MO4Rorb.js";import"./MassActions-BMR7CY7i.js";import"./Autocomplete-A4RSkvAu.js";import"./TableCanvas-DQy5jXxt.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-C-3tutEr.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:t,name:"Docs"}),`
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
