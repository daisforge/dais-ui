import{b as s}from"./react-UEdzNlUe.js";import{g as p}from"./getFuncAsString-CYIdLC6X.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as g}from"./TableCanvas-BGZk-FTG.js";import{a as i}from"./avatarFixtures-DoCxbZXN.js";const x={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar",tags:["!autodocs"],parameters:{screenshot:{allowedResourceErrors:["/canvas-images/missing.png"]}}};function f(){var n,o;const v=["s","m","l","xxl"].map((a,r)=>({id:r,size:a})),c=[{key:"size",name:"Размер",width:110,renderCell:({row:a})=>s.jsxDEV(t.Text,{children:a.size},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:34,columnNumber:32},this)},...[{key:"photo",name:"Фото",url:(n=i[0])==null?void 0:n.url},{key:"initials",name:"Инициалы"},{key:"custom",name:"customText",customText:"AI",url:(o=i[0])==null?void 0:o.url},{key:"broken",name:"Ошибка первой загрузки",url:"/canvas-images/missing.png"}].map(({key:a,name:r,...d})=>({key:a,name:r,width:150,copyData:"Анна Иванова",renderCell:({row:C})=>s.jsxDEV(t.Container,{padding:8,children:s.jsxDEV(t.Avatar,{name:"Анна Иванова",size:C.size,...d,tooltip:"Анна Иванова"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:57,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:56,columnNumber:9},this)}))];return s.jsxDEV(g,{rows:v,columnConfig:c,tableConfig:{rowHeight:104,containerStyle:{height:"490px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:68,columnNumber:5},this)}const A=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize } from '@daisforge/ui/components/TableCanvas';
import { avatarItems } from './avatarFixtures';

${p("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx","AvatarContentAndSizesExample")}
`,e={name:"Содержимое и размеры",...b({code:A,type:"code",previewSource:"hidden"}),render:f};var m,u,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarContentAndSizesExample
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const k=["ContentAndSizes"],N=Object.freeze(Object.defineProperty({__proto__:null,ContentAndSizes:e,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{N as C};
