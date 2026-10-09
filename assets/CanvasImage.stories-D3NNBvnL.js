import{d as e}from"./react-D2T61mpp.js";import{g as c}from"./getFuncAsString-jGu6yxPb.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{T as g,C as t}from"./TableCanvas-CvOPfgOa.js";const C="/dais-ui/assets/wide-Cc21x1_y.png",v={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasImage",tags:["!autodocs"]};function p(){const m=[{id:0,image:"Горы",src:C}],u=["cover","contain","fill"].map(s=>({key:s,name:s,width:170,copyData:o=>o.image,renderCell:({row:o,theme:l})=>e.jsxDEV(t.Container,{padding:8,children:e.jsxDEV(t.Container,{position:"relative",style:{width:88,height:88},tooltip:`${o.image}: ${s}`,children:[e.jsxDEV(t.Image,{src:o.src,fit:s,style:{width:88,height:88}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:40,columnNumber:11},this),e.jsxDEV(t.Rect,{position:"absolute",left:0,top:0,style:{width:88,height:88},borderColor:l.tokens.outlineAccent,borderWidth:1,zIndex:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:45,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:34,columnNumber:7},this)}));return e.jsxDEV(g,{rows:m,columnConfig:u,tableConfig:{rowHeight:104,containerStyle:{height:"160px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:59,columnNumber:5},this)}const b=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit } from '@daisforge/ui/components/TableCanvas';
import wideImage from '../CanvasAvatar/images/wide.png';

${c("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx","ImageFitsExample")}
`,a={name:"Режимы вписывания",...d({code:b,type:"code",previewSource:"hidden"}),render:p};var n,r,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Режимы вписывания',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: ImageFitsExample
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const h=["Fits"],E=Object.freeze(Object.defineProperty({__proto__:null,Fits:a,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{E as C};
