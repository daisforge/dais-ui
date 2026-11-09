import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as s,ca as l}from"./vendor-5YaLwWPx.js";import{T as t}from"./TableCanvasInfinityScroll.stories-DtiwQsEt.js";import"./react-is-Clcustum.js";import"./styled-components-QSCCnPb-.js";import"./@tanstack/react-virtual-CREzRtDS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./getFuncAsString-BlcJv7wu.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-XamQaDES.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-qvqoIA2H.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CPvhdUt1.js";import"./@salutejs/plasma-icons-BYipvGmh.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-Dje76o57.js";import"./IconButton-NZ7CEyKM.js";import"./Box-0w5iF82H.js";import"./TextField-DqvL3Zc8.js";import"./sharedUtilsInputs-LUebY2e5.js";import"./AiAgentPopup-DqteTfsM.js";import"./TextArea-YGicpwCL.js";import"./sharedUtilsResizable-Bqwz7o91.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-CRVW7HiH.js";import"./Collapse-DtIQJpWx.js";import"./react-data-grid-YkKxh9rN.js";import"./TableTabs-DLc6Fg37.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C9GSTiBm.js";import"./@glideappsfinal/glide-data-grid-CMGU-CCU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DgaubpC5.js";import"./ListOfFilters-unJUCV45.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DPYPxXZH.js";import"./EmptyState-C4_cwPpk.js";import"./MassActions-CwmTlBIc.js";import"./Autocomplete-BT7QMbQ9.js";import"./ErrorPage-Bc0163Q9.js";function o(r){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
`,n.jsx(l,{})]})}function Y(r={}){const{wrapper:i}={...e(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(o,{...r})}):o(r)}export{Y as default};
