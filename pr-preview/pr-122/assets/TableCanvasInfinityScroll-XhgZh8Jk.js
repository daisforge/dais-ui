import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as s,c9 as l}from"./vendor-C8VuHz3V.js";import{T as t}from"./TableCanvasInfinityScroll.stories-BOfofJjB.js";import"./react-is-Clcustum.js";import"./styled-components-BpVVkBzC.js";import"./@tanstack/react-virtual-CcbeDy_e.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-BeVJ3j7w.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CdW5lLpC.js";import"./FiltersActions-BBJtG2uO.js";import"./IconButton-Cyh6jX5Y.js";import"./@salutejs/plasma-icons-98834dYt.js";import"./@salutejs/sdds-finai-Cz7rM39w.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DPKiBQxU.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CcNAFjSN.js";import"./TextField-xGwV4-46.js";import"./sharedUtilsInputs-DulBkLnq.js";import"./AiAgentPopup-BOwjLeH4.js";import"./TextArea-DkKRutyA.js";import"./sharedUtilsResizable-k1DpAbyC.js";import"./Table-Cm1TIcJV.js";import"./Collapse-BFOVUS3J.js";import"./react-data-grid-B83SeY1o.js";import"./TableTabs-BQl_O17u.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BxObiBTx.js";import"./@glideappsfinal/glide-data-grid-DwMYPKa3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CHikPvVh.js";import"./ListOfFilters-DVcNOz0_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cn72JuoI.js";import"./EmptyState-BvkbGYoG.js";import"./MassActions-CuunVsGn.js";import"./Autocomplete-BLX4iX7d.js";import"./ErrorPage-B0chJuzn.js";function o(r){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
`,n.jsx(i.h1,{id:"infinity-scroll",children:"Infinity Scroll"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"tableConfig.infinityScroll"})}),`
`,n.jsxs(i.p,{children:["Бесконечная подгрузка данных при скролле. Для активации в ",n.jsx(i.code,{children:"tableConfig"})," заполняется ",n.jsx(i.code,{children:"infinityScroll"}),"."]}),`
`,n.jsx(i.h2,{id:"принцип-работы",children:"Принцип работы"}),`
`,n.jsxs(i.p,{children:["При приближении скролла к концу таблицы вызывается функция ",n.jsx(i.code,{children:"onTrigger"}),", в этот момент можно подгружать новую пачку данных и управлять состоянием загрузки через ",n.jsx(i.code,{children:"isLoading"}),"."]}),`
`,n.jsxs(i.p,{children:["При активации ",n.jsx(i.code,{children:"infinityScroll"})," ",n.jsx(i.strong,{children:"отключается дефолтная сортировка и фильтрация"}),". Предполагается, что если есть infinityScroll, то в таблице представлен не весь объем данных, по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные. Нужно использовать версии данных фичей с ручным управлением (например, для отправки на бэкенд выбранных фильтров и сортировки)."]}),`
`,n.jsx(i.h2,{id:"как-работает-определение-позиции-скролла",children:"Как работает определение позиции скролла"}),`
`,n.jsxs(i.p,{children:["Используется callback ",n.jsx(i.code,{children:"onVisibleRegionChanged"}),". Работа ведётся на уровне индексов строк — триггер срабатывает, когда пользователь доскролливает до ",n.jsx(i.code,{children:"rowThreshold"})," строк от конца (по умолчанию 5)."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`tableConfig={{
  infinityScroll: {
    rowThreshold: 5,
    onTrigger,
    isLoading,
    hasMore: rows.length < 300,
  },
}}
`})}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Примечание:"})," К значению ",n.jsx(i.code,{children:"rowThreshold"})," автоматически прибавляется количество skeleton-строк, чтобы триггер загрузки срабатывал раньше и пользователь не видел скелетоны."]}),`
`]}),`
`,n.jsx(i.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`infinityScroll: {
  onTrigger: (rows: RowType[]) => Promise<void> | void;
  isLoading: boolean;
  hasMore?: boolean;              // default: true
  rowThreshold?: number;          // default: 5 (строк)
}
`})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"onTrigger"})})," — вызывается при достижении скроллом зоны подгрузки. Получает текущий массив строк."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"isLoading"})})," — состояние загрузки. При ",n.jsx(i.code,{children:"true"})," внизу таблицы отображаются skeleton-строки, повторные триггеры блокируются."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"hasMore"})})," — когда все данные загружены, передать ",n.jsx(i.code,{children:"false"}),". Скелетоны скроются, триггер перестанет вызываться."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"rowThreshold"})})," — за сколько строк до конца стригерить загрузку. @default=5"]}),`
`]}),`
`,n.jsxs(i.p,{children:["Подробное описание типов доступно в разделе ",n.jsx(i.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-infinityscroll-api--docs",children:"API"}),"."]}),`
`,n.jsx(l,{})]})}function U(r={}){const{wrapper:i}={...e(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(o,{...r})}):o(r)}export{U as default};
