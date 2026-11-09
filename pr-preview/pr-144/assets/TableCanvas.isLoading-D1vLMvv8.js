import{j as i}from"./react-D2T61mpp.js";import{cg as r,ch as s,ca as l}from"./vendor-CgwLAOzt.js";import{T as t}from"./TableCanvas.isLoading.stories-CjwzQwh5.js";import"./react-is-Clcustum.js";import"./styled-components-U1h2EGhV.js";import"./@tanstack/react-virtual-_mtQm2SE.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DDxNlXvE.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-Bhr7wpvG.js";import"./IconButton-C7JOyHb5.js";import"./@salutejs/plasma-icons-BGlmN6_-.js";import"./@salutejs/sdds-finai-DBBbtUOz.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-ParcUs9H.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CGDj7ORg.js";import"./TextField-TTDGbZXl.js";import"./sharedUtilsInputs-Ds36U5zn.js";import"./AiAgentPopup-Bv5A7AJd.js";import"./TextArea-BJ5AU7KW.js";import"./sharedUtilsResizable-Y09-4PJ-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-CLuq2r_G.js";import"./Collapse-CUrhIkN9.js";import"./react-data-grid-BveG54b5.js";import"./TableTabs-B18J2TQL.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CpbVbvPN.js";import"./@glideappsfinal/glide-data-grid-D-UmZydu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CLvEXBOx.js";import"./ListOfFilters-DosdwQNl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B54ll3if.js";import"./EmptyState-Dc82nemv.js";import"./MassActions-A5XUKhxz.js";import"./Autocomplete-DSNOWxVh.js";import"./TableCanvas-qM-5-9Ct.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-B1VGADb_.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:t,name:"Docs"}),`
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
