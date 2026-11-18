import{j as n}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as l}from"./vendor-DeJLDLpI.js";import{T as t}from"./TableCanvas.isLoading.stories-B-VZB-8W.js";import"./react-is-Clcustum.js";import"./styled-components-Dk50_reo.js";import"./@tanstack/react-virtual-R2Y3giEb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-koMU_8fG.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-NoKTja0C.js";import"./IconButton-BJbUR_O5.js";import"./@salutejs/plasma-icons-zWvvayCa.js";import"./@salutejs/sdds-finai-DA9CWr9W.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-KF4aT_9e.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DQw8sL1c.js";import"./TextField-Bw7vfpFF.js";import"./sharedUtilsInputs-0Qa2JB-N.js";import"./AiAgentPopup-BL-0KaMz.js";import"./TextArea-BXq_R2Lz.js";import"./sharedUtilsResizable-B5rzIJUb.js";import"./Table-BysWwP9B.js";import"./Collapse-BYKzEpcd.js";import"./react-data-grid-D_il26Se.js";import"./TableTabs-CGBNm4pI.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CDi_0XZ-.js";import"./@glideappsfinal/glide-data-grid-BGhsE5aF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DXlNuzue.js";import"./ListOfFilters-93RJN6Pl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bc4yik_9.js";import"./EmptyState-C6fSSuw7.js";import"./MassActions-BFwuue10.js";import"./Autocomplete-CW2QjWTN.js";import"./TableCanvas--bHJHxJG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-C_22i_VE.js";function e(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
