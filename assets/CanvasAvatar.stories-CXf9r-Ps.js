import{j as t}from"./react-CAOzMBF_.js";import{g as d}from"./getFuncAsString-SqWQ2qo2.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as n,T as v}from"./TableCanvas-DOsQrCiP.js";import{a as s}from"./avatarFixtures-BlEsqUJl.js";const g={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar",tags:["!autodocs"],parameters:{screenshot:{allowedResourceErrors:["/canvas-images/missing.png"]}}};function x(){const u=["s","m","l","xxl"].map((e,r)=>({id:r,size:e})),c=[{key:"size",name:"Размер",width:110,renderCell:({row:e})=>t.jsx(n.Text,{children:e.size})},...[{key:"photo",name:"Фото",url:s[0].url},{key:"initials",name:"Инициалы"},{key:"custom",name:"customText",customText:"AI",url:s[0].url},{key:"broken",name:"Ошибка первой загрузки",url:"/canvas-images/missing.png"}].map(({key:e,name:r,...l})=>({key:e,name:r,width:150,copyData:"Анна Иванова",renderCell:({row:p})=>t.jsx(n.Container,{padding:8,children:t.jsx(n.Avatar,{name:"Анна Иванова",size:p.size,...l,tooltip:"Анна Иванова"})})}))];return t.jsx(v,{rows:u,columnConfig:c,tableConfig:{rowHeight:104,containerStyle:{height:"490px"}}})}const f=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize } from '@daisforge/ui/components/TableCanvas';
import { avatarItems } from './avatarFixtures';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx","AvatarContentAndSizesExample")}
`,a={name:"Содержимое и размеры",...C({code:f,type:"code",previewSource:"hidden"}),render:x};var o,i,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarContentAndSizesExample
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const y=["ContentAndSizes"],E=Object.freeze(Object.defineProperty({__proto__:null,ContentAndSizes:a,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{E as C};
