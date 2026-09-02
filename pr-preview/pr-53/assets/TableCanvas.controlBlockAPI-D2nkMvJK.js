import{j as e}from"./react-D2T61mpp.js";import{c6 as r,c7 as l}from"./vendor-DEqZzPsi.js";import{T as t}from"./TypeSourceViewer-DJGLxlnI.js";import{g as s}from"./getTypeAsString-9VpJ6Q-s.js";import"./react-is-Clcustum.js";import"./styled-components-DI7cxCvS.js";import"./tslib-De9GV7Vy.js";function c(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Локальные компоненты/TableCanvas/ControlBlock/API"}),`
`,e.jsx(o.h1,{id:"controlblock-api",children:"ControlBlock API"}),`
`,e.jsx(o.h2,{id:"controlblockconfig",children:"ControlBlockConfig"}),`
`,e.jsx(t,{filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"ControlBlockConfig",language:"ts"}),`
`,e.jsx(o.h2,{id:"controlblockbuttonprops",children:"ControlBlockButtonProps"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`export const controlButtonDefaultProps = {
  size: 's',
  view: 'linkDefault',
} as const;
`})}),`
`,e.jsx(t,{filePath:"packages/ui-kit/src/components/TableCanvas/widgets/control-block/control-block-button.types.tsx",typeName:"ButtonProps",language:"ts",postSource:`
  ${s("packages\\ui-kit\\src\\components\\TableCanvas\\widgets\\control-block\\control-block-button.types.tsx","LinkButtonProps")} 

${s("packages\\ui-kit\\src\\components\\TableCanvas\\widgets\\control-block\\control-block-button.types.tsx","LinkButtonView")} 

${s("packages\\ui-kit\\src\\components\\TableCanvas\\widgets\\control-block\\control-block-button.types.tsx","ControlBlockButtonProps")} 

`}),`
`,e.jsx(o.h2,{id:"featureitem-v20",children:"FeatureItem (v2.0)"}),`
`,e.jsxs(o.p,{children:["Кастомная фича в ",e.jsx(o.code,{children:"tableConfig.controlBlock.customFeatures"}),". Иконку в панели задают через ",e.jsx(o.code,{children:"Icon"})," или ",e.jsx(o.code,{children:"CustomIconRender"}),", поведение в дропдауне — через ",e.jsx(o.code,{children:"details"}),". Флаги ",e.jsx(o.code,{children:"mandatory"})," и ",e.jsx(o.code,{children:"canBeCompressedInToolsMenu"})," ставятся здесь же, на фиче."]}),`
`,e.jsx(t,{filePath:"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts",typeName:"FeatureItem",language:"ts"}),`
`,e.jsx(o.h2,{id:"featuredetails",children:"FeatureDetails"}),`
`,e.jsxs(o.p,{children:["Поле ",e.jsx(o.code,{children:"details"})," у фичи (",e.jsx(o.code,{children:"customFeatures[].details"}),"). Описывает, как фича выглядит в overflow-дропдауне (троеточие), куда она уезжает при компрессии. Раньше отвечал за правый сайдбар, имя сохранено для обратной совместимости."]}),`
`,e.jsx(t,{filePath:"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts",typeName:"FeatureDetails",language:"ts"}),`
`,e.jsx(o.h2,{id:"featureiconrender",children:"FeatureIconRender"}),`
`,e.jsxs(o.p,{children:["Тип иконки в ",e.jsx(o.code,{children:"details.icon"})," (для ",e.jsx(o.code,{children:"details"})," типа ",e.jsx(o.code,{children:"button"})," и ",e.jsx(o.code,{children:"select"}),"). Либо готовый узел, либо функция от контекста рендера. Функция нужна, чтобы подстроить размер иконки в дропдауне."]}),`
`,e.jsx(t,{filePath:"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts",typeName:"FeatureIconRender",language:"ts"}),`
`,e.jsx(o.h2,{id:"dropdownrenderctx",children:"DropdownRenderCtx"}),`
`,e.jsxs(o.p,{children:["Контекст, который получают кастомные рендеры иконок (",e.jsx(o.code,{children:"CustomIconRender"}),", ",e.jsx(o.code,{children:"details.icon"})," как функция, ",e.jsx(o.code,{children:"dropdownIconRender"})," у кнопок). По нему потребитель сам подбирает размер иконки."]}),`
`,e.jsx(t,{filePath:"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts",typeName:"DropdownRenderCtx",language:"ts"})]})}function k(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(c,{...n})}):c(n)}export{k as default};
