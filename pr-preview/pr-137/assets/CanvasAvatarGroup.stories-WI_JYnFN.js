import{j as t,r as i}from"./react-CAOzMBF_.js";import{g as m}from"./getFuncAsString-DnrLf2YT.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{C as p,T as x}from"./TableCanvas-DlX-Wh2b.js";import{cc as A,ce as y}from"./vendor-DmWczWMC.js";import{b as c,a as l,c as h}from"./avatarFixtures-yf9-zUnd.js";const E={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatarGroup",tags:["!autodocs"],parameters:{msw:{handlers:[A.get("/canvas-images/virtual/:person",async({params:o})=>{const n=c[Number(o.person)%c.length],a=await fetch(n);return new y(await a.arrayBuffer(),{headers:{"Content-Type":"image/png"}})})]}}};function T(){const o=i.useMemo(()=>{const a=[{label:"5 → 3 +2",items:l,total:5,visible:3},{label:"2 загружено из 5",items:l.slice(0,2),total:5,visible:3},{label:"Пустая группа",items:[],total:0,visible:3},{label:"Известен только total",items:[],total:5,visible:3},{label:"visibleCount=0",items:l,total:5,visible:0}];return Array.from({length:700},(e,s)=>{const u=a[s%a.length];return{...u,id:s,label:`Строка ${s+1}: ${u.label}`,items:u.items.map((d,g)=>({...d,url:`/canvas-images/virtual/${g}?row=${s}`}))}})},[]),n=i.useMemo(()=>[{key:"label",name:"Строка и сценарий",width:280},...[200,60].map(a=>({key:`team-${a}`,name:a===60?"Узко":"Группа",width:a,copyData:e=>h(e.items,e.total),renderCell:({row:e})=>t.jsx(p.Container,{padding:8,children:t.jsx(p.AvatarGroup,{items:e.items,totalCount:e.total,visibleCount:e.visible})})}))],[]);return t.jsx(x,{rows:o,columnConfig:n,tableConfig:{rowHeight:44,containerStyle:{height:"360px"}}})}function G(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"700 строк с локальными PNG-фотографиями и разным количеством участников в обычной и узкой колонках. У каждой строки свои URL фотографий — прокрутите таблицу, чтобы увидеть загрузку новых изображений."}),t.jsx(T,{})]})}const j=`
import React, { useMemo } from 'react';
import { Canvas, TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { avatarCopyText, avatarItems } from '../CanvasAvatar/avatarFixtures';

${m("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx","VirtualTable")}
${m("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx","AvatarGroupExample")}
`,r={name:"Количество участников, узкая колонка и прокрутка",...f({code:j,type:"code",previewSource:"hidden"}),render:G};var v,C,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Количество участников, узкая колонка и прокрутка',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarGroupExample
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const S=["Virtualized"],M=Object.freeze(Object.defineProperty({__proto__:null,Virtualized:r,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{M as C};
