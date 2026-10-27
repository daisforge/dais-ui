import{r as c,j as r}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import{g as C}from"./getFuncAsString-DnrLf2YT.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{T as f,C as s}from"./TableCanvas-DlX-Wh2b.js";const T={title:"Локальные компоненты/TableCanvas/InfinityScroll",component:f,parameters:{docs:{},screenshot:{skip:!0}},tags:["!autodocs"]};function w(e){const{indexForStart:a=0,countOfNewRows:o=200,timeout:n=1e3}=e??{};return new Promise(i=>{const l=p(a,o);setTimeout(()=>i(l),n)})}const x=[{key:"id",name:"ID"},{key:"task",name:"Title",renderCell:({row:e})=>r.jsx(s.Text,{children:e.task??"—"})},{key:"priority",name:"Priority",renderCell:({row:e})=>r.jsx(s.Text,{children:e.priority??"—"})},{key:"issueType",name:"Issue Type",renderCell:({row:e})=>r.jsx(s.Text,{children:e.issueType??"—"})},{key:"developer",name:"Developer",renderCell:({row:e})=>r.jsx(s.Text,{children:e.developer??"—"})}];function b(){const[e,a]=c.useState(()=>p(0,50)),[o,n]=c.useState(!1),i=c.useCallback(async l=>{if(o)return;n(!0);const g=await w({indexForStart:l.length,countOfNewRows:50,timeout:2e3});a(y=>[...y,...g]),n(!1)},[o]);return r.jsx(f,{tableConfig:{containerStyle:{height:700},infinityScroll:{rowThreshold:5,onTrigger:i,isLoading:o,hasMore:e.length<6e3}},columnConfig:x,rows:e})}const R=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useCallback, useState } from 'react';

${C("packages/storybook/src/stories/TableCanvas/TableCanvas.InfinityScroll/TableCanvasInfinityScroll.stories.tsx","ExampleRegionMode")}
`,t={name:"Region Mode (default)",...S({previewSource:"shown",code:R}),render:b};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Region Mode (default)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: regionModePreCode
  }),
  render: ExampleRegionMode
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["RegionModeStory"],D=Object.freeze(Object.defineProperty({__proto__:null,RegionModeStory:t,__namedExportsOrder:v,default:T},Symbol.toStringTag,{value:"Module"}));export{D as T};
