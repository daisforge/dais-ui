import{j as t}from"./react-DYHuXpTF.js";import{g as v}from"./getFuncAsString-CYIdLC6X.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{C as n,T as x}from"./TableCanvas-Ce8EJXt2.js";import{a as i}from"./avatarFixtures-BlEsqUJl.js";const f={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatar",tags:["!autodocs"],parameters:{screenshot:{allowedResourceErrors:["/canvas-images/missing.png"]}}};function y(){var s,o;const l=["s","m","l","xxl"].map((e,r)=>({id:r,size:e})),p=[{key:"size",name:"Размер",width:110,renderCell:({row:e})=>t.jsx(n.Text,{children:e.size})},...[{key:"photo",name:"Фото",url:(s=i[0])==null?void 0:s.url},{key:"initials",name:"Инициалы"},{key:"custom",name:"customText",customText:"AI",url:(o=i[0])==null?void 0:o.url},{key:"broken",name:"Ошибка первой загрузки",url:"/canvas-images/missing.png"}].map(({key:e,name:r,...d})=>({key:e,name:r,width:150,copyData:"Анна Иванова",renderCell:({row:C})=>t.jsx(n.Container,{padding:8,children:t.jsx(n.Avatar,{name:"Анна Иванова",size:C.size,...d,tooltip:"Анна Иванова"})})}))];return t.jsx(x,{rows:l,columnConfig:p,tableConfig:{rowHeight:104,containerStyle:{height:"490px"}}})}const A=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type AvatarSize } from '@daisforge/ui/components/TableCanvas';
import { avatarItems } from './avatarFixtures';

${v("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatar/CanvasAvatar.stories.tsx","AvatarContentAndSizesExample")}
`,a={name:"Содержимое и размеры",...g({code:A,type:"code",previewSource:"hidden"}),render:y};var m,u,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Содержимое и размеры',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarContentAndSizesExample
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const S=["ContentAndSizes"],j=Object.freeze(Object.defineProperty({__proto__:null,ContentAndSizes:a,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{j as C};
