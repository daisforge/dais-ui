import{j as i}from"./react-UEdzNlUe.js";import{dd as e}from"./vendor-DKFmtNka.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-NPj_OXam.js";import{T as l}from"./TableCanvasInfinityScroll.stories-D9KdI8Ax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-Bxleko46.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DZjzqcod.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BIt2FCYt.js";import"./@daisforge/glide-data-grid-CNHJL7BZ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-CJxc4gWE.js";import"./Typography-cf3Xy15z.js";import"./ListOfFilters-CvMrij3w.js";import"./Table-ChCbsKuG.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-0SvJ_tVp.js";import"./unidentified@3x-DFu65eL-.js";import"./MassActions-FwAtCS6p.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-Bc2zKHWn.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-DyHSNfU1.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:l,name:"Docs"}),`
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
`,i.jsx(t,{})]})}function ti(o={}){const{wrapper:r}={...e(),...o.components};return r?i.jsx(r,{...o,children:i.jsx(n,{...o})}):n(o)}export{ti as default};
