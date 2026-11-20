import{j as e}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-DKFmtNka.js";import{M as s}from"./WithTooltip-KJL26V4Q-DHpG5auW.js";import{T as r}from"./TypeSourceViewer-C6VzuaYx.js";import{g as c}from"./getTypeAsString-C3UFObDS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";function i(o){const d={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Локальные компоненты/Box/API"}),`
`,e.jsx(d.h1,{id:"box-api",children:"Box API"}),`
`,e.jsxs(d.p,{children:["Базовый контейнер-обёртка. Собственный компонент (не из ",e.jsx(d.code,{children:"@salutejs/sdds-finai"}),"). Принимает CSS-свойства как пропсы."]}),`
`,e.jsx(d.h2,{id:"boxprops",children:"BoxProps"}),`
`,e.jsx(r,{language:"ts",filePath:"packages/ui-kit/src/components/Box/Box.tsx",typeName:"BoxProps",postSource:`
  ${c("packages/ui-kit/src/components/Box/Box.tsx","BoxBaseProps",!0)}
${c("packages/ui-kit/src/components/Box/typeKeys.ts","BoxCSSProperties",!0)}
`}),`
`,e.jsx(d.h2,{id:"основные-пропсы",children:"Основные пропсы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"$css"})," (",e.jsx(d.code,{children:"string | CSSObject"}),") — кастомные стили styled-components"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"hidden"})," (",e.jsx(d.code,{children:"boolean"}),") — скрыть элемент (",e.jsx(d.code,{children:"display: none"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"as"})," (",e.jsx(d.code,{children:"ElementType"}),") — HTML-тег или компонент для корневого узла (",e.jsx(d.code,{children:"div"}),", ",e.jsx(d.code,{children:"li"}),", ",e.jsx(d.code,{children:"section"})," и т.д.)"]}),`
`]}),`
`,e.jsx(d.h2,{id:"css-пропсы-передаются-напрямую",children:"CSS-пропсы (передаются напрямую)"}),`
`,e.jsxs(d.p,{children:["Размеры: ",e.jsx(d.code,{children:"width"}),", ",e.jsx(d.code,{children:"maxWidth"}),", ",e.jsx(d.code,{children:"minWidth"}),", ",e.jsx(d.code,{children:"height"}),", ",e.jsx(d.code,{children:"maxHeight"}),", ",e.jsx(d.code,{children:"minHeight"})]}),`
`,e.jsxs(d.p,{children:["Отступы: ",e.jsx(d.code,{children:"margin"}),", ",e.jsx(d.code,{children:"marginLeft/Right/Top/Bottom"}),", ",e.jsx(d.code,{children:"padding"}),", ",e.jsx(d.code,{children:"paddingLeft/Right/Top/Bottom"})]}),`
`,e.jsxs(d.p,{children:["Flexbox: ",e.jsx(d.code,{children:"display"}),", ",e.jsx(d.code,{children:"flexDirection"}),", ",e.jsx(d.code,{children:"justifyContent"}),", ",e.jsx(d.code,{children:"justifyItems"}),", ",e.jsx(d.code,{children:"justifySelf"}),", ",e.jsx(d.code,{children:"flexGrow"}),", ",e.jsx(d.code,{children:"flexWrap"}),", ",e.jsx(d.code,{children:"flexShrink"}),", ",e.jsx(d.code,{children:"gap"})]}),`
`,e.jsxs(d.p,{children:["Позиционирование: ",e.jsx(d.code,{children:"position"}),", ",e.jsx(d.code,{children:"top"}),", ",e.jsx(d.code,{children:"left"}),", ",e.jsx(d.code,{children:"right"}),", ",e.jsx(d.code,{children:"bottom"}),", ",e.jsx(d.code,{children:"zIndex"})]}),`
`,e.jsxs(d.p,{children:["Визуальные: ",e.jsx(d.code,{children:"background"}),", ",e.jsx(d.code,{children:"backgroundColor"}),", ",e.jsx(d.code,{children:"opacity"}),", ",e.jsx(d.code,{children:"border"}),", ",e.jsx(d.code,{children:"borderWidth"}),", ",e.jsx(d.code,{children:"borderColor"}),", ",e.jsx(d.code,{children:"borderStyle"}),", ",e.jsx(d.code,{children:"borderRadius"})]}),`
`,e.jsxs(d.p,{children:["Прочие: ",e.jsx(d.code,{children:"boxSizing"}),", ",e.jsx(d.code,{children:"overflow"}),", ",e.jsx(d.code,{children:"cursor"})]})]})}function B(o={}){const{wrapper:d}={...n(),...o.components};return d?e.jsx(d,{...o,children:e.jsx(i,{...o})}):i(o)}export{B as default};
