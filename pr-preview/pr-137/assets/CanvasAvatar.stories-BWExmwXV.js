import{j as t}from"./react-CAOzMBF_.js";import{g as d}from"./getFuncAsString-DnrLf2YT.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{C as o,T as v}from"./TableCanvas-DlX-Wh2b.js";import{a as r}from"./avatarFixtures-yf9-zUnd.js";const x={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar",tags:["!autodocs"]};function g(){const u=["s","m","l","xxl"].map((e,n)=>({id:n,size:e})),c=[{key:"size",name:"Размер",width:110,renderCell:({row:e})=>t.jsx(o.Text,{children:e.size})},...[{key:"photo",name:"Фото",url:r[0].url},{key:"initials",name:"Инициалы"},{key:"custom",name:"customText",customText:"AI",url:r[0].url},{key:"broken",name:"Ошибка первой загрузки",url:"/canvas-images/missing.png"}].map(({key:e,name:n,...l})=>({key:e,name:n,width:150,copyData:"Анна Иванова",renderCell:({row:p})=>t.jsx(o.Container,{padding:8,children:t.jsx(o.Avatar,{name:"Анна Иванова",size:p.size,...l,tooltip:"Анна Иванова"})})}))];return t.jsx(v,{rows:u,columnConfig:c,tableConfig:{rowHeight:104,containerStyle:{height:"490px"}}})}const f=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize } from '@daisforge/ui/components/TableCanvas';
import { avatarItems } from './avatarFixtures';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx","AvatarContentAndSizesExample")}
`,a={name:"Содержимое и размеры",...C({code:f,type:"code",previewSource:"hidden"}),render:g};var s,i,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarContentAndSizesExample
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const y=["ContentAndSizes"],T=Object.freeze(Object.defineProperty({__proto__:null,ContentAndSizes:a,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{T as C};
