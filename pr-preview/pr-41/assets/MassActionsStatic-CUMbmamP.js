import{d as l}from"./react-D2T61mpp.js";import{y as E,o as d}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as c}from"./styled-components-rNTPyvwi.js";const a={surfaceSolidCard:()=>E,outlineSolidPrimary:()=>d},p=c.div`
  position: ${({$position:u="absolute"})=>u};
  ${({$position:u})=>u==="absolute"?`
    left: 16px;
    right: 16px;
    bottom: 16px;
  `:""}
  padding: 12px;
  border-radius: 14px;
  background: ${a.surfaceSolidCard};
  border: 2px solid ${a.outlineSolidPrimary};
  display: flex;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  opacity: ${({$isVisible:u})=>u?1:0};
  ${({$animate:u=!0})=>u?"transition: opacity 0.2s ease-in-out;":""}
`,i=({children:u,className:t,style:s,position:o="absolute",show:e,animate:r=!0})=>{const n=e!==void 0?e:!0;return l.jsxDEV(p,{className:t,style:s,$position:o,$isVisible:n,$animate:r,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/MassActionsStatic/MassActionsStatic.tsx",lineNumber:18,columnNumber:5},void 0)};try{i.displayName="MassActionsStatic",i.__docgenInfo={description:"",displayName:"MassActionsStatic",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},position:{defaultValue:{value:"absolute"},description:`Позиционирование компонента
- 'absolute' - абсолютное позиционирование (по умолчанию)
- 'static' - обычный блок без абсолютного позиционирования
- 'relative' - относительное позиционирование`,name:"position",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"static"'}]}},show:{defaultValue:null,description:`Явный контроль видимости компонента
Если не указан, компонент всегда виден
Если указан, компонент отображается только при show === true`,name:"show",required:!1,type:{name:"boolean"}},animate:{defaultValue:{value:"true"},description:"Включить/отключить анимацию появления/исчезновения",name:"animate",required:!1,type:{name:"boolean"}}}}}catch{}export{i as M};
