import{j as i}from"./react-DYHuXpTF.js";import{dd as e}from"./vendor-Dy04e7eT.js";import{M as s,S as t}from"./WithTooltip-KJL26V4Q-Dieti3TI.js";import{T as l}from"./TableCanvasInfinityScroll.stories-X9sKetOx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./tableData-DKA5H0bF.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Ce8EJXt2.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-Cg1cr4lG.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BA8pOji2.js";import"./@glideappsfinal/glide-data-grid-D3ux9yp-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-aQ644jDa.js";import"./sharedUiSearch-DepFlUD_.js";import"./TextField-DKmO_cMT.js";import"./sharedUtilsInputs-CoiSiHAi.js";import"./TypographyWithAutoTooltip-CmTNIxSr.js";import"./Typography-AqY240Xv.js";import"./ListOfFilters-BIpCPfRe.js";import"./Table-Dnkey4HO.js";import"./react-data-grid-iaz8oMts.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-ByzSbtjI.js";import"./EmptyState-B8Imm43w.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CS-gDAi9.js";import"./Autocomplete-CBzySec7.js";import"./FiltersActions-BBodDsCN.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./ErrorPage-BA9S9M68.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:l,name:"Docs"}),`
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
