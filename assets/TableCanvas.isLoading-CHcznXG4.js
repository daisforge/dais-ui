import{j as i}from"./react-DNGZQ4GM.js";import{ck as e}from"./vendor-D0kRSEyZ.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-DmYH2O2Q.js";import{T as l}from"./TableCanvas.isLoading.stories-BtQChU8U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-B2Euy7F3.js";import"./@tanstack/react-virtual-BMRZReVx.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-mtwU-xhz.js";import"./@salutejs/plasma-icons-CyCZXKIi.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BVKLQcam.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-ChNwZ-Li.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-CTfk_qKV.js";import"./TableCanvas-C7Nx4gFI.js";import"./utils-7sb7r4ay.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Box-C7bn7Vor.js";import"./Collapse-DJQXB-S_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BHSmjU_O.js";import"./@glideappsfinal/glide-data-grid-DDGyHJjW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-BHejy9n4.js";import"./sharedUiSearch-CIBppFsz.js";import"./TextField-DpANoGFF.js";import"./sharedUtilsInputs-04PyxkHI.js";import"./TypographyWithAutoTooltip-D2KyJ3uF.js";import"./Typography-C1XIPscs.js";import"./ListOfFilters-CtA3cmfs.js";import"./Table-CLU8EiQJ.js";import"./react-data-grid-CXBejiga.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CYVukoKk.js";import"./NumberFormat-BcUnw3yr.js";import"./EmptyState-Cjd9SZHm.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3mEmrXD.js";import"./Autocomplete-Bjb9HDRp.js";import"./FiltersActions-MFwki4_2.js";import"./IconButton-C1E4pz8y.js";import"./TooltipList-BKC8WC44.js";import"./ErrorPage-G4F_Gk7e.js";function r(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:l,name:"Docs"}),`
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
`,i.jsx(t,{})]})}function ti(n={}){const{wrapper:o}={...e(),...n.components};return o?i.jsx(o,{...n,children:i.jsx(r,{...n})}):r(n)}export{ti as default};
