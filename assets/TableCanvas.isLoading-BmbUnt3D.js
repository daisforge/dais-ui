import{j as i}from"./react-DYHuXpTF.js";import{dd as e}from"./vendor-BpmB3NYD.js";import{M as s,S as l}from"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import{T as t}from"./TableCanvas.isLoading.stories-JCo6_ADA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CN0PPLJ2.js";import"./storySourceDoc-tVKyHcEN.js";import"./Switch-yg_3Nt0z.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./TableCanvas-DfFJC-Eb.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-Juih1CKQ.js";import"./Collapse-Cm4Vf7gU.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CmYboMCL.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./ErrorPage-BL_-6djw.js";import"./Autocomplete-DCmEDwiz.js";function r(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:t,name:"Docs"}),`
`,i.jsx(o.h1,{id:"isloading-tablecanvas",children:"IsLoading (TableCanvas)"}),`
`,i.jsx(o.p,{children:i.jsx(o.strong,{children:"tableConfig.isLoading / tableConfig.loadingOverlay"})}),`
`,i.jsx(o.p,{children:"Состояние загрузки таблицы. Поддерживает скелетон-строки и полноэкранный оверлей."}),`
`,i.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(o.ul,{children:[`
`,i.jsxs(o.li,{children:["Скелетон-строки при загрузке данных (",i.jsx(o.code,{children:"isLoading"}),")"]}),`
`,i.jsxs(o.li,{children:["Настраиваемое количество скелетон-строк (",i.jsx(o.code,{children:"skeletonRowsCount"}),")"]}),`
`,i.jsxs(o.li,{children:["Полноэкранный оверлей с кастомным спиннером (",i.jsx(o.code,{children:"loadingOverlay"}),")"]}),`
`,i.jsxs(o.li,{children:["Задержка показа подзаголовка (",i.jsx(o.code,{children:"showSubtitleDelay"}),")"]}),`
`,i.jsxs(o.li,{children:["Оверлей поверх таблицы без её размонтирования (",i.jsx(o.code,{children:"loadingOverlay.mode: 'cover'"}),")"]}),`
`]}),`
`,i.jsx(o.h2,{id:"когда-использовать-loadingoverlay",children:"Когда использовать loadingOverlay"}),`
`,i.jsxs(o.ul,{children:[`
`,i.jsx(o.li,{children:"Динамическая загрузка схемы таблицы — колонки загружаются с бэкенда"}),`
`,i.jsx(o.li,{children:"Конфигурируемые таблицы — пользователь сам настраивает колонки"}),`
`,i.jsx(o.li,{children:"Ошибки загрузки структуры — не удалось загрузить метаданные"}),`
`]}),`
`,i.jsx(o.h2,{id:"когда-использовать-mode-cover",children:"Когда использовать mode: 'cover'"}),`
`,i.jsxs(o.p,{children:["Обычный ",i.jsx(o.code,{children:"loadingOverlay"})," показывается вместо таблицы: таблица размонтируется, и после снятия оверлея выделение, страница пагинации и прокрутка начинаются заново."]}),`
`,i.jsxs(o.p,{children:["С ",i.jsx(o.code,{children:"mode: 'cover'"})," таблица остаётся на месте, а оверлей ложится поверх неё полупрозрачным размытым слоем. Он закрывает control block, боковые панели, нижнюю панель и пагинацию, в fullscreen тоже, и блокирует мышь, клавиатуру и фокус. Когда оверлей снимается, таблица продолжает работу с того же состояния."]}),`
`,i.jsx(o.p,{children:"Подходит для долгих действий с уже открытой таблицей: удаление или сохранение строк, пересчёт данных."}),`
`,i.jsxs(o.p,{children:["Режимы можно совмещать: на первой загрузке показывать ",i.jsx(o.code,{children:"'replace'"}),", а когда таблица загружена, тем же ",i.jsx(o.code,{children:"loadingOverlay"})," с ",i.jsx(o.code,{children:"mode: 'cover'"})," закрывать её на время действий."]}),`
`,i.jsx(o.pre,{children:i.jsx(o.code,{className:"language-tsx",children:`loadingOverlay: {
  mode: isFirstLoad ? 'replace' : 'cover',
  active: isFirstLoad || isUpdating,
}
`})}),`
`,i.jsx(o.pre,{children:i.jsx(o.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    loadingOverlay: {
      mode: 'cover',
      active: isUpdating,
      subtitle: 'Обычно это занимает не более 10 секунд',
    },
  }}
/>
`})}),`
`,i.jsxs(o.blockquote,{children:[`
`,i.jsxs(o.p,{children:["Подробнее о типах — ",i.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-isloading-api--docs",children:"IsLoading API"})]}),`
`]}),`
`,i.jsx(l,{})]})}function ri(n={}){const{wrapper:o}={...e(),...n.components};return o?i.jsx(o,{...n,children:i.jsx(r,{...n})}):r(n)}export{ri as default};
