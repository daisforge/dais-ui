import{d as s}from"./react-D2T61mpp.js";import{g as d}from"./getFuncAsString-jGu6yxPb.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as t,T as p}from"./TableCanvas-fyPLPpHP.js";import{a as n}from"./avatarFixtures-BGk17Hn6.js";const b={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar",tags:["!autodocs"]};function x(){const u=["s","m","l","xxl"].map((a,r)=>({id:r,size:a})),l=[{key:"size",name:"Размер",width:110,renderCell:({row:a})=>s.jsxDEV(t.Text,{children:a.size},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:29,columnNumber:32},this)},...[{key:"photo",name:"Фото",url:n[0].url},{key:"initials",name:"Инициалы"},{key:"custom",name:"customText",customText:"AI",url:n[0].url},{key:"broken",name:"Ошибка первой загрузки",url:"/canvas-images/missing.png"}].map(({key:a,name:r,...v})=>({key:a,name:r,width:150,copyData:"Анна Иванова",renderCell:({row:c})=>s.jsxDEV(t.Container,{padding:8,children:s.jsxDEV(t.Avatar,{name:"Анна Иванова",size:c.size,...v,tooltip:"Анна Иванова"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:52,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:51,columnNumber:9},this)}))];return s.jsxDEV(p,{rows:u,columnConfig:l,tableConfig:{rowHeight:104,containerStyle:{height:"490px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx",lineNumber:63,columnNumber:5},this)}const f=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize } from '@daisforge/ui/components/TableCanvas';
import { avatarItems } from './avatarFixtures';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx","AvatarContentAndSizesExample")}
`,e={name:"Содержимое и размеры",...C({code:f,type:"code",previewSource:"hidden"}),render:x};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarContentAndSizesExample
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const A=["ContentAndSizes"],S=Object.freeze(Object.defineProperty({__proto__:null,ContentAndSizes:e,__namedExportsOrder:A,default:b},Symbol.toStringTag,{value:"Module"}));export{S as C};
