import{j as e}from"./react-CAOzMBF_.js";import{g as l}from"./getFuncAsString-BlcJv7wu.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as u,C as s}from"./TableCanvas-BiviJwJT.js";const g="/dais-ui/assets/wide-Cc21x1_y.png",C={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasImage",tags:["!autodocs"]};function v(){const m=[{id:0,image:"Горы",src:g}],c=["cover","contain","fill"].map(t=>({key:t,name:t,width:170,copyData:o=>o.image,renderCell:({row:o,theme:d})=>e.jsx(s.Container,{padding:8,children:e.jsxs(s.Container,{position:"relative",style:{width:88,height:88},tooltip:`${o.image}: ${t}`,children:[e.jsx(s.Image,{src:o.src,fit:t,style:{width:88,height:88}}),e.jsx(s.Rect,{position:"absolute",left:0,top:0,style:{width:88,height:88},borderColor:d.tokens.outlineAccent,borderWidth:1,zIndex:1})]})})}));return e.jsx(u,{rows:m,columnConfig:c,tableConfig:{rowHeight:104,containerStyle:{height:"160px"}}})}const h=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit } from '@daisforge/ui/components/TableCanvas';
import wideImage from '../CanvasAvatar/images/wide.png';

${l("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx","ImageFitsExample")}
`,a={name:"Режимы вписывания",...p({code:h,type:"code",previewSource:"hidden"}),render:v};var n,r,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Режимы вписывания',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: ImageFitsExample
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const x=["Fits"],S=Object.freeze(Object.defineProperty({__proto__:null,Fits:a,__namedExportsOrder:x,default:C},Symbol.toStringTag,{value:"Module"}));export{S as C};
