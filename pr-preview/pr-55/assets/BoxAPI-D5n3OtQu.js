import{j as e}from"./react-D2T61mpp.js";import{c6 as s,c7 as i}from"./vendor-F9ObjaJa.js";import{T as r}from"./TypeSourceViewer-CQAP1DmX.js";import{g as o}from"./getTypeAsString-Dt7eosWZ.js";import"./react-is-Clcustum.js";import"./styled-components-BMg9-w0p.js";import"./tslib-De9GV7Vy.js";function n(d){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Локальные компоненты/Box/API"}),`
`,e.jsx(c.h1,{id:"box-api",children:"Box API"}),`
`,e.jsxs(c.p,{children:["Базовый контейнер-обёртка. Собственный компонент (не из ",e.jsx(c.code,{children:"@salutejs/sdds-finai"}),"). Принимает CSS-свойства как пропсы."]}),`
`,e.jsx(c.h2,{id:"boxprops",children:"BoxProps"}),`
`,e.jsx(r,{language:"ts",filePath:"packages/ui-kit/src/components/Box/Box.tsx",typeName:"BoxProps",postSource:`
  ${o("packages/ui-kit/src/components/Box/Box.tsx","BoxBaseProps",!0)}
${o("packages/ui-kit/src/components/Box/typeKeys.ts","BoxCSSProperties",!0)}
`}),`
`,e.jsx(c.h2,{id:"основные-пропсы",children:"Основные пропсы"}),`
`,e.jsxs(c.ul,{children:[`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"$css"})," (",e.jsx(c.code,{children:"string | CSSObject"}),") — кастомные стили styled-components"]}),`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"hidden"})," (",e.jsx(c.code,{children:"boolean"}),") — скрыть элемент (",e.jsx(c.code,{children:"display: none"}),")"]}),`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"as"})," (",e.jsx(c.code,{children:"ElementType"}),") — HTML-тег или компонент для корневого узла (",e.jsx(c.code,{children:"div"}),", ",e.jsx(c.code,{children:"li"}),", ",e.jsx(c.code,{children:"section"})," и т.д.)"]}),`
`]}),`
`,e.jsx(c.h2,{id:"css-пропсы-передаются-напрямую",children:"CSS-пропсы (передаются напрямую)"}),`
`,e.jsxs(c.p,{children:["Размеры: ",e.jsx(c.code,{children:"width"}),", ",e.jsx(c.code,{children:"maxWidth"}),", ",e.jsx(c.code,{children:"minWidth"}),", ",e.jsx(c.code,{children:"height"}),", ",e.jsx(c.code,{children:"maxHeight"}),", ",e.jsx(c.code,{children:"minHeight"})]}),`
`,e.jsxs(c.p,{children:["Отступы: ",e.jsx(c.code,{children:"margin"}),", ",e.jsx(c.code,{children:"marginLeft/Right/Top/Bottom"}),", ",e.jsx(c.code,{children:"padding"}),", ",e.jsx(c.code,{children:"paddingLeft/Right/Top/Bottom"})]}),`
`,e.jsxs(c.p,{children:["Flexbox: ",e.jsx(c.code,{children:"display"}),", ",e.jsx(c.code,{children:"flexDirection"}),", ",e.jsx(c.code,{children:"justifyContent"}),", ",e.jsx(c.code,{children:"justifyItems"}),", ",e.jsx(c.code,{children:"justifySelf"}),", ",e.jsx(c.code,{children:"flexGrow"}),", ",e.jsx(c.code,{children:"flexWrap"}),", ",e.jsx(c.code,{children:"flexShrink"}),", ",e.jsx(c.code,{children:"gap"})]}),`
`,e.jsxs(c.p,{children:["Позиционирование: ",e.jsx(c.code,{children:"position"}),", ",e.jsx(c.code,{children:"top"}),", ",e.jsx(c.code,{children:"left"}),", ",e.jsx(c.code,{children:"right"}),", ",e.jsx(c.code,{children:"bottom"}),", ",e.jsx(c.code,{children:"zIndex"})]}),`
`,e.jsxs(c.p,{children:["Визуальные: ",e.jsx(c.code,{children:"background"}),", ",e.jsx(c.code,{children:"backgroundColor"}),", ",e.jsx(c.code,{children:"opacity"}),", ",e.jsx(c.code,{children:"border"}),", ",e.jsx(c.code,{children:"borderWidth"}),", ",e.jsx(c.code,{children:"borderColor"}),", ",e.jsx(c.code,{children:"borderStyle"}),", ",e.jsx(c.code,{children:"borderRadius"})]}),`
`,e.jsxs(c.p,{children:["Прочие: ",e.jsx(c.code,{children:"boxSizing"}),", ",e.jsx(c.code,{children:"overflow"}),", ",e.jsx(c.code,{children:"cursor"})]})]})}function m(d={}){const{wrapper:c}={...s(),...d.components};return c?e.jsx(c,{...d,children:e.jsx(n,{...d})}):n(d)}export{m as default};
