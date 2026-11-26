import{j as i}from"./react-UEdzNlUe.js";import{df as e}from"./vendor-BjJ6Dniq.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-D7p4u0mo.js";import{T as l}from"./TableCanvasInfinityScroll.stories-Byki9G0p.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-BOyu4uG3.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./tableData-DKA5H0bF.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-nSg0dRIf.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-eNsaqktA.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CQjaGWRq.js";import"./@salutejs/plasma-icons-uIGdXol1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-CHClRxL_.js";import"./Box-CnSr-EOZ.js";import"./Collapse-DKd7tDyY.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-zJFquLx-.js";import"./@daisforge/glide-data-grid-DYIqjVfn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-Dlrlaoqn.js";import"./sharedUiSearch-BUl0YIcM.js";import"./TextField-D5xzOdF9.js";import"./sharedUtilsInputs-Db1rNYqC.js";import"./Typography-CVUJ4Dv2.js";import"./ListOfFilters-CBOX8QAs.js";import"./FiltersActions-BPtwd1n-.js";import"./IconButton-CN-71Kuh.js";import"./Tooltip-MpHvU8S_.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-ujoFeuYk.js";import"./NumberFormat-Ceb_abZm.js";import"./EmptyState-DUujzGfL.js";import"./unidentified@3x-9d_s2m7N.js";import"./ErrorPage-ZM9SDQ_z.js";import"./Autocomplete-9W7xomoP.js";function o(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:l,name:"Docs"}),`
`,i.jsx(r.h1,{id:"infinity-scroll",children:"Infinity Scroll"}),`
`,i.jsx(r.p,{children:i.jsx(r.strong,{children:"tableConfig.infinityScroll"})}),`
`,i.jsxs(r.p,{children:["Бесконечная подгрузка данных при скролле. Для активации в ",i.jsx(r.code,{children:"tableConfig"})," заполняется ",i.jsx(r.code,{children:"infinityScroll"}),"."]}),`
`,i.jsx(r.h2,{id:"принцип-работы",children:"Принцип работы"}),`
`,i.jsxs(r.p,{children:["При приближении скролла к концу таблицы вызывается функция ",i.jsx(r.code,{children:"onTrigger"}),", в этот момент можно подгружать новую пачку данных и управлять состоянием загрузки через ",i.jsx(r.code,{children:"isLoading"}),"."]}),`
`,i.jsxs(r.p,{children:["При активации ",i.jsx(r.code,{children:"infinityScroll"})," ",i.jsx(r.strong,{children:"отключается дефолтная сортировка и фильтрация"}),". Предполагается, что если есть infinityScroll, то в таблице представлен не весь объем данных, по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные. Нужно использовать версии данных фичей с ручным управлением (например, для отправки на бэкенд выбранных фильтров и сортировки)."]}),`
`,i.jsx(r.h2,{id:"как-работает-определение-позиции-скролла",children:"Как работает определение позиции скролла"}),`
`,i.jsxs(r.p,{children:["Используется callback ",i.jsx(r.code,{children:"onVisibleRegionChanged"}),". Работа ведётся на уровне индексов строк — триггер срабатывает, когда пользователь доскролливает до ",i.jsx(r.code,{children:"rowThreshold"})," строк от конца (по умолчанию 5)."]}),`
`,i.jsx(r.pre,{children:i.jsx(r.code,{className:"language-tsx",children:`tableConfig={{
  infinityScroll: {
    rowThreshold: 5,
    onTrigger,
    isLoading,
    hasMore: rows.length < 300,
  },
}}
`})}),`
`,i.jsxs(r.blockquote,{children:[`
`,i.jsxs(r.p,{children:[i.jsx(r.strong,{children:"Примечание:"})," К значению ",i.jsx(r.code,{children:"rowThreshold"})," автоматически прибавляется количество skeleton-строк, чтобы триггер загрузки срабатывал раньше и пользователь не видел скелетоны."]}),`
`]}),`
`,i.jsx(r.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,i.jsx(r.pre,{children:i.jsx(r.code,{className:"language-tsx",children:`infinityScroll: {
  onTrigger: (rows: RowType[]) => Promise<void> | void;
  isLoading: boolean;
  hasMore?: boolean;              // default: true
  rowThreshold?: number;          // default: 5 (строк)
}
`})}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"onTrigger"})})," — вызывается при достижении скроллом зоны подгрузки. Получает текущий массив строк."]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"isLoading"})})," — состояние загрузки. При ",i.jsx(r.code,{children:"true"})," внизу таблицы отображаются skeleton-строки, повторные триггеры блокируются."]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"hasMore"})})," — когда все данные загружены, передать ",i.jsx(r.code,{children:"false"}),". Скелетоны скроются, триггер перестанет вызываться."]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"rowThreshold"})})," — за сколько строк до конца стригерить загрузку. @default=5"]}),`
`]}),`
`,i.jsxs(r.p,{children:["Подробное описание типов доступно в разделе ",i.jsx(r.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-infinityscroll-api--docs",children:"API"}),"."]}),`
`,i.jsx(t,{})]})}function oi(n={}){const{wrapper:r}={...e(),...n.components};return r?i.jsx(r,{...n,children:i.jsx(o,{...n})}):o(n)}export{oi as default};
