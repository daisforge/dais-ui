import{j as t,r as i}from"./react-DYHuXpTF.js";import{g as m}from"./getFuncAsString-CYIdLC6X.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{C as p,T as A}from"./TableCanvas-Dj6KubGG.js";import{dj as y,dk as c}from"./vendor-DQaMhftP.js";import{b as v,a as l,c as h}from"./avatarFixtures-BlEsqUJl.js";const E={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasAvatarGroup",tags:["!autodocs"],parameters:{msw:{handlers:[y.get("/canvas-images/virtual/:person",async({params:u})=>{const s=v[Number(u.person)%v.length];if(!s)return new c(null,{status:404});const a=await fetch(s);return new c(await a.arrayBuffer(),{headers:{"Content-Type":"image/png"}})})]}}};function T(){const u=i.useMemo(()=>{const a=[{label:"5 → 3 +2",items:l,total:5,visible:3},{label:"2 загружено из 5",items:l.slice(0,2),total:5,visible:3},{label:"Пустая группа",items:[],total:0,visible:3},{label:"Известен только total",items:[],total:5,visible:3},{label:"visibleCount=0",items:l,total:5,visible:0}];return Array.from({length:700},(e,o)=>{const n=a[o%a.length];if(!n)throw new Error("Нет сценария для строки");return{...n,id:o,label:`Строка ${o+1}: ${n.label}`,items:n.items.map((g,f)=>({...g,url:`/canvas-images/virtual/${f}?row=${o}`}))}})},[]),s=i.useMemo(()=>[{key:"label",name:"Строка и сценарий",width:280},...[200,60].map(a=>({key:`team-${a}`,name:a===60?"Узко":"Группа",width:a,copyData:e=>h(e.items,e.total),renderCell:({row:e})=>t.jsx(p.Container,{padding:8,children:t.jsx(p.AvatarGroup,{items:e.items,totalCount:e.total,visibleCount:e.visible})})}))],[]);return t.jsx(A,{rows:u,columnConfig:s,tableConfig:{rowHeight:44,containerStyle:{height:"360px"}}})}function j(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"700 строк с локальными PNG-фотографиями и разным количеством участников в обычной и узкой колонках. У каждой строки свои URL фотографий — прокрутите таблицу, чтобы увидеть загрузку новых изображений."}),t.jsx(T,{})]})}const G=`
import React, { useMemo } from 'react';
import { Canvas, TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { avatarCopyText, avatarItems } from '../CanvasAvatar/avatarFixtures';

${m("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx","VirtualTable")}
${m("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasAvatarGroup/CanvasAvatarGroup.stories.tsx","AvatarGroupExample")}
`,r={name:"Количество участников, узкая колонка и прокрутка",...x({code:G,type:"code",previewSource:"hidden"}),render:j};var C,b,d;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Количество участников, узкая колонка и прокрутка',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: AvatarGroupExample
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const S=["Virtualized"],M=Object.freeze(Object.defineProperty({__proto__:null,Virtualized:r,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{M as C};
