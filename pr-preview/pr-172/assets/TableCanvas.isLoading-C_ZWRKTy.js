import{j as i}from"./react-Ch9mc9Aq.js";import{da as r,db as s,d4 as l}from"./vendor-cmvNg_xr.js";import{T as t}from"./TableCanvas.isLoading.stories-Dkz-q_zg.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-D5MvBPh5.js";import"./@tanstack/react-virtual-CWj59MZE.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D5L1KJCt.js";import"./storySourceDoc-tVKyHcEN.js";import"./FiltersActions-BOfjVSQx.js";import"./IconButton-Ci8npbZD.js";import"./@salutejs/plasma-icons-CXjNGeWd.js";import"./@salutejs/sdds-finai-CEPim1an.js";import"./@sddsjs/sdds_finai-BSDEmCin.js";import"./utils-DqvTlrYy.js";import"./constants-l0ilsueG.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CuZNjBju.js";import"./TextField-C9YSau6k.js";import"./sharedUtilsInputs-Dc_ZEKpI.js";import"./AiAgentPopup-CBRZHYTN.js";import"./TextArea-CZ-SJBPH.js";import"./sharedUtilsResizable-ADoD9nRJ.js";import"./Table-CfgslSCF.js";import"./Collapse-B646xElm.js";import"./react-data-grid-DmYcaFlw.js";import"./TableTabs-BDRUMUlr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BRPIS80j.js";import"./@glideappsfinal/glide-data-grid-CuZIr5Db.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-3anirXXN.js";import"./ListOfFilters-CEeL_OR1.js";import"./lodash.isequal-DQmZHUWu.js";import"./NumberFormat-BE3whBbA.js";import"./EmptyState-Ch15w3Sj.js";import"./MassActions-Cs_s9s1i.js";import"./Autocomplete-D2V0L8mw.js";import"./TableCanvas-CYGZGUC6.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./ErrorPage-Bh17asus.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:t,name:"Docs"}),`
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
