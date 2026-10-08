import{d as e}from"./react-D2T61mpp.js";import{g as c}from"./getFuncAsString-CiehoYHv.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as g,C as r}from"./TableCanvas-Cqd_sxAx.js";const C="/dais-ui/pr-preview/pr-115/assets/wide-Cc21x1_y.png",p={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasImage",tags:["!autodocs"]};function v(){const m=[{id:0,image:"Горы",src:C}],u=["cover","contain","fill"].map(s=>({key:s,name:s,width:170,copyData:o=>o.image,renderCell:({row:o,theme:l})=>e.jsxDEV(r.Container,{padding:8,children:e.jsxDEV(r.Container,{position:"relative",style:{width:88,height:88},tooltip:`${o.image}: ${s}`,children:[e.jsxDEV(r.Image,{src:o.src,fit:s,style:{width:88,height:88}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:40,columnNumber:11},this),e.jsxDEV(r.Rect,{position:"absolute",left:0,top:0,style:{width:88,height:88},borderColor:l.tokens.outlineAccent,borderWidth:1,zIndex:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:45,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:34,columnNumber:7},this)}));return e.jsxDEV(g,{rows:m,columnConfig:u,tableConfig:{rowHeight:104,containerStyle:{height:"160px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:59,columnNumber:5},this)}const b=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit } from '@daisforge/ui/components/TableCanvas';
import wideImage from '../CanvasAvatar/images/wide.png';

${c("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx","ImageFitsExample")}
`,a={name:"Режимы вписывания",...d({code:b,type:"code",previewSource:"hidden"}),render:v};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Режимы вписывания',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: ImageFitsExample
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["Fits"],w=Object.freeze(Object.defineProperty({__proto__:null,Fits:a,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{w as C};
