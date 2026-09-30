import{d as e}from"./react-D2T61mpp.js";import{g as d}from"./getFuncAsString-CutrYSlh.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{T as v,C as r}from"./TableCanvas-xjZ2J5tT.js";import{d as o}from"./avatarFixtures-DfuDoRIk.js";const C={title:"Локальные компоненты/TableCanvas/CanvasElements/CanvasImage",tags:["!autodocs"]};function p(){const l=[{id:0,image:"wide",src:o({width:192,height:96})},{id:1,image:"tall",src:o({width:96,height:192,variant:1})},{id:2,image:"transparent",src:o({width:192,height:96,transparent:!0,variant:2})}],u=["cover","contain","fill"].map(s=>({key:s,name:s,width:170,copyData:t=>t.image,renderCell:({row:t,theme:c})=>e.jsxDEV(r.Container,{padding:8,children:e.jsxDEV(r.Container,{position:"relative",style:{width:88,height:88},tooltip:`${t.image}: ${s}`,children:[e.jsxDEV(r.Image,{src:t.src,fit:s,style:{width:88,height:88}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:58,columnNumber:11},this),e.jsxDEV(r.Rect,{position:"absolute",left:0,top:0,style:{width:88,height:88},borderColor:c.tokens.outlineAccent,borderWidth:1,zIndex:1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:63,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:53,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:52,columnNumber:7},this)}));return e.jsxDEV(v,{rows:l,columnConfig:u,tableConfig:{rowHeight:104,containerStyle:{height:"390px"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx",lineNumber:77,columnNumber:5},this)}const h=`
import React from 'react';
import { Canvas, TableCanvas, type ColumnConfig, type ImageFit } from '@daisforge/ui/components/TableCanvas';
import { createAvatarImage } from '../CanvasAvatar/avatarFixtures';

${d("packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasImage/CanvasImage.stories.tsx","ImageFitsExample")}
`,a={name:"Режимы вписывания",...g({code:h,type:"code",previewSource:"hidden"}),render:p};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Режимы вписывания',
  ...storySourceDoc({
    code: exampleCode,
    type: 'code',
    previewSource: 'hidden'
  }),
  render: ImageFitsExample
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const b=["Fits"],E=Object.freeze(Object.defineProperty({__proto__:null,Fits:a,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{E as C};
