import{j as n}from"./react-D2T61mpp.js";import{c4 as e,c5 as s,b_ as l}from"./vendor-DY5usBm2.js";import{T as t}from"./TableCanvasInfinityScroll.stories-DEH7Dk2E.js";import"./react-is-Clcustum.js";import"./styled-components-DfDfQ8Bw.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./getFuncAsString-C1kndaLg.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-C1CgNDVS.js";import"./FiltersActions-B0YLSqmO.js";import"./IconButton-Dx27Zlrb.js";import"./@salutejs/plasma-icons-G-biVy7u.js";import"./@salutejs/sdds-finai-Bu6ldGV4.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-CNDOUHoR.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B-ol_qS-.js";import"./TextField-BqNAFg17.js";import"./sharedUtilsInputs-Kk-tfiXm.js";import"./AnalyticalWidget-BP96HtED.js";import"./Collapse-Da6Z5fm9.js";import"./Table-C0yVNBma.js";import"./react-data-grid-Co3kgQQK.js";import"./TableTabs-lW6x_M2S.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DWcqroLw.js";import"./ListOfFilters-DYxrmvMb.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-6S9bMZIS.js";import"./EmptyState-Bg1UZSVl.js";import"./MassActions-BjP3cRDz.js";import"./Autocomplete-BoYnVQWd.js";import"./TableGlide-Ct2HfqBE.js";import"./@glideappsfinal/glide-data-grid-BNn1kkV0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-zg0PrOYG.js";function o(r){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t,name:"Docs"}),`
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
`,n.jsx(l,{})]})}function K(r={}){const{wrapper:i}={...e(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(o,{...r})}):o(r)}export{K as default};
