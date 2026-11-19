import{j as e}from"./react-DNGZQ4GM.js";import{ck as o}from"./vendor-Dp5lOscd.js";import{M as s,S as r}from"./WithTooltip-KJL26V4Q-D6M4H-sn.js";import{C as t}from"./CanvasText.stories-D0Xh3fkP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BVeFqQYb.js";import"./@tanstack/react-virtual-YDfxzYL3.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-hXr06AUZ.js";import"./@salutejs/plasma-icons-Cqq3zXio.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-B6H-AKo1.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-D8WPHrZl.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Cnm6FkwI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-0WdmXQbr.js";import"./Box-BKkW6WAc.js";import"./Collapse-C5wWRaBU.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DtQPfSll.js";import"./@glideappsfinal/glide-data-grid-S2MyQhYl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-B4-ktLDB.js";import"./sharedUiSearch-B7rBkxde.js";import"./TextField-6naKsMBN.js";import"./sharedUtilsInputs-C0_NRSp2.js";import"./TypographyWithAutoTooltip-Cju-Nu1y.js";import"./Typography-BjVh6YV9.js";import"./ListOfFilters-B1s2HaSi.js";import"./Table-DkS74_Ap.js";import"./react-data-grid-CdTfwxrA.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CgEbMqyz.js";import"./NumberFormat-BljT1DEp.js";import"./EmptyState-BmKRlSr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3GAnQXt.js";import"./Autocomplete-jc_g5b5e.js";import"./FiltersActions-U8FmEHl2.js";import"./IconButton-DkyAo8ue.js";import"./TooltipList-BVqkwDIx.js";import"./ErrorPage-DiAMiMpK.js";function l(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
`,e.jsx(n.h1,{id:"canvastext",children:"Canvas.Text"}),`
`,e.jsxs(n.p,{children:["Текстовый элемент для canvas-ячеек ",e.jsx(n.code,{children:"TableCanvas"})," с поддержкой ellipsis и многострочного clamp."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Однострочный ellipsis через ",e.jsx(n.code,{children:'overflow="hidden"'})," + ",e.jsx(n.code,{children:'textOverflow="ellipsis"'})]}),`
`,e.jsxs(n.li,{children:["Многострочный clamp через ",e.jsx(n.code,{children:"wordWrap"})," + ",e.jsx(n.code,{children:"maxLines"})]}),`
`,e.jsxs(n.li,{children:["Clip без маркера: ",e.jsx(n.code,{children:'textOverflow="clip"'})]}),`
`,e.jsxs(n.li,{children:["Кастомный маркер обрезки через ",e.jsx(n.code,{children:"ellipsis"})," (по умолчанию ",e.jsx(n.code,{children:"…"}),")"]}),`
`,e.jsxs(n.li,{children:["Авто-тултип с полным текстом при обрезке через ",e.jsx(n.code,{children:"autoTooltip"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"однострочный-ellipsis",children:"Однострочный ellipsis"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Text overflow="hidden" textOverflow="ellipsis" style={{ flexGrow: 1 }}>
  Очень длинный текст
</Canvas.Text>
`})}),`
`,e.jsx(n.h2,{id:"многострочный-clamp",children:"Многострочный clamp"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Text
  wordWrap
  maxLines={2}
  overflow="hidden"
  textOverflow="ellipsis"
  lineHeight={1.2}
  style={{ flexGrow: 1 }}
>
  Длинный текст на несколько строк
</Canvas.Text>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"maxLines"})," работает только при ",e.jsx(n.code,{children:"wordWrap"})," и ",e.jsx(n.code,{children:'overflow="hidden"'}),". ",e.jsx(n.code,{children:"maxLines={1}"})," ведёт себя как однострочный ellipsis."]}),`
`,e.jsx(n.h2,{id:"высота-строки",children:"Высота строки"}),`
`,e.jsxs(n.p,{children:["Для многострочного текста высота строки таблицы должна оставлять место под нужное количество строк с учётом ",e.jsx(n.code,{children:"lineHeight"})," и padding."]}),`
`,e.jsxs(n.h2,{id:"авто-тултип-при-обрезке-autotooltip",children:["Авто-тултип при обрезке (",e.jsx(n.code,{children:"autoTooltip"}),")"]}),`
`,e.jsxs(n.p,{children:["Если текст обрезается в многоточие, ",e.jsx(n.code,{children:"Canvas.Text"})," может сам показывать тултип с полным текстом — без ручного ",e.jsx(n.code,{children:"portalHoverEnabled"})," и ",e.jsx(n.code,{children:"tooltip"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Text overflow="hidden" textOverflow="ellipsis" autoTooltip style={{ flexGrow: 1 }}>
  {row.longText}
</Canvas.Text>
`})}),`
`,e.jsx(n.p,{children:"Правила:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Тултип показывается ",e.jsx(n.strong,{children:"только когда текст реально обрезан в многоточие"}),". Если текст помещается целиком — тултипа нет."]}),`
`,e.jsxs(n.li,{children:["Работает и для многострочного clamp (",e.jsx(n.code,{children:"wordWrap"})," + ",e.jsx(n.code,{children:"maxLines"}),"): тултип появляется, когда есть скрытые строки ниже ",e.jsx(n.code,{children:"maxLines"}),"."]}),`
`,e.jsxs(n.li,{children:["При ",e.jsx(n.code,{children:'textOverflow="clip"'})," (обрезка без маркера ",e.jsx(n.code,{children:"…"}),") тултип не показывается."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"autoTooltip"})," сам делает ноду hover-таргетом (неявно включает ",e.jsx(n.code,{children:"portalHoverEnabled"}),")."]}),`
`,e.jsxs(n.li,{children:["Явный проп ",e.jsx(n.code,{children:"tooltip"})," приоритетнее: если заданы оба — показывается ",e.jsx(n.code,{children:"tooltip"})," (always-on, без условия обрезки)."]}),`
`,e.jsx(n.li,{children:"Обрезанность определяется по фактической ширине ноды после layout, поэтому при ресайзе колонки тултип автоматически появляется/исчезает вместе с многоточием."}),`
`]}),`
`,e.jsxs(n.p,{children:["Кастомизация — объектом (тип ",e.jsx(n.code,{children:"CanvasTextAutoTooltip"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Canvas.Text
  overflow="hidden"
  textOverflow="ellipsis"
  autoTooltip={{
    placement: 'top',
    mouseEnterDelay: 300,
    // По умолчанию текст тултипа = полный текст ноды.
    // Строка — заменить, функция — трансформировать, null из функции — не показывать.
    text: (fullText) => \`Полностью: \${fullText}\`,
  }}
  style={{ flexGrow: 1 }}
>
  {row.longText}
</Canvas.Text>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"autoTooltip={{ enabled: false }}"})," (или ",e.jsx(n.code,{children:"autoTooltip={false}"}),") выключает авто-тултип. Доступные пропсы оформления — те же, что у обычного node-тултипа: ",e.jsx(n.code,{children:"placement"}),", ",e.jsx(n.code,{children:"view"}),", ",e.jsx(n.code,{children:"minWidth"}),", ",e.jsx(n.code,{children:"maxWidth"}),", ",e.jsx(n.code,{children:"mouseEnterDelay"}),", ",e.jsx(n.code,{children:"mouseLeaveDelay"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Авто-тултип действует только на ",e.jsx(n.code,{children:"Canvas.Text"})," внутри canvas-разметки (",e.jsx(n.code,{children:"renderCell"})," / ",e.jsx(n.code,{children:"renderHeaderCell"}),", включая хедеры и групп-хедеры). Обычные текстовые ячейки таблицы (примитивные значения без ",e.jsx(n.code,{children:"renderCell"}),") рисуются встроенным text-рендерером glide и в этой механике не участвуют."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Общая механика тултипов таблицы описана в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-tooltip--docs",children:"Tooltip"}),"."]}),`
`,e.jsxs(n.p,{children:["Описание типов — в разделе ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvastext-api--docs",children:"API"}),"."]}),`
`,e.jsx(r,{})]})}function oe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{oe as default};
