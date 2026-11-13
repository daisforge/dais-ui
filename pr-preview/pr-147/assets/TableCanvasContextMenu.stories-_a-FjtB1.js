import{r as a,d as s}from"./react-D2T61mpp.js";import{c as i}from"./tableData-DVJFoYoT.js";import{g as d}from"./getFuncAsString-B1yRgn90.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{E as ee}from"./EmptyState-lsJBGji3.js";import{T as l}from"./TableCanvas-_RIrcRpa.js";import{a7 as oe}from"./@salutejs/sdds-finai-QR_WCRdF.js";import{bE as ne}from"./vendor-BrHBSlJK.js";const ae={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function te(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:42,columnNumber:5},this)}function se(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:102,columnNumber:5},this)}function re(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:130,columnNumber:5},this)}function ue(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:192,columnNumber:5},this)}function le(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:221,columnNumber:5},this)}function ie(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:"580px",closeOnSelect:!0,getDropdownItems:({column:e,row:o})=>[{value:"clone",label:`Клонировать "${o.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(e,o,n)=>{console.group("onItemSelect (custom props)"),console.debug("item:",e),console.debug("row:",o.row),console.groupEnd()}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:305,columnNumber:5},this)}const me=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderDropdown")}
`,de=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderHandler")}
`,ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellDropdown")}
`,pe=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellHandler")}
`,C={name:"Контекстное меню Dropdown (шапка таблицы)",...m({previewSource:"shown",code:me}),render:te},b={name:"Контекстное меню, функция обработчик (шапка таблицы)",...m({previewSource:"shown",code:de}),render:se},v={name:"Контекстное меню Dropdown (cell таблицы)",...m({previewSource:"shown",code:ce}),render:re},y={name:"Контекстное меню, функция обработчик (cell таблицы)",...m({previewSource:"shown",code:pe}),render:ue},Ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,x={name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...m({previewSource:"shown",code:Ce}),render:ie},w={name:"Контекстное меню (все возможности)",render:le},be=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),ve=()=>s.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[s.jsxDEV(ne,{width:16,height:16,roundness:4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:474,columnNumber:5},void 0),s.jsxDEV("div",{style:{width:150},children:s.jsxDEV(oe,{size:"bodyS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:476,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:475,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:466,columnNumber:3},void 0);function U({shouldFail:t}){const[r]=a.useState(i),[e,o]=a.useState({status:"idle",items:[],key:null,row:null}),n=a.useRef(0),D=a.useRef(0),Y=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),g=a.useCallback((u,c)=>{o({status:"loading",items:[],key:c,row:u});const Z=t&&n.current===0;n.current+=1,D.current+=1;const M=D.current;new Promise((p,T)=>{setTimeout(()=>{if(Z){T(new Error("network"));return}p([{value:"copy",label:`Копировать «${u.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(p=>{M===D.current&&o(T=>({...T,status:"success",items:p}))},()=>{M===D.current&&o(p=>({...p,status:"error",items:[]}))})},[t]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:u,column:c})=>g(u,`${u.id}:${c.name}`),getDropdownItems:({row:u,column:c})=>e.key!==`${u.id}:${c.name}`?[]:e.status==="loading"?be:e.items,renderItem:e.status==="loading"?ve:void 0,beforeList:e.status==="error"&&e.row?s.jsxDEV("div",{style:{width:240,padding:8},children:s.jsxDEV(ee,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&g(e.row,e.key)}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:562,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:561,columnNumber:15},this):void 0,onItemSelect:u=>{String(u.value).startsWith("__skeleton")||alert(`Выбрано: ${u.label}`)}}},columnConfig:Y,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:547,columnNumber:5},this)}const X=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,k={name:"Async-подгрузка пунктов (успех)",...m({previewSource:"hidden",code:X}),render:()=>s.jsxDEV(U,{shouldFail:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:610,columnNumber:17},void 0)},f={name:"Async-подгрузка пунктов (ошибка + ретрай)",...m({previewSource:"hidden",code:X}),render:()=>s.jsxDEV(U,{shouldFail:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:619,columnNumber:17},void 0)};var S,E,h;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...(h=(E=C.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var N,$,A;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...(A=($=b.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,R,H;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(H=(R=v.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,P,j;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(j=(P=y.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var _,F,V;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode
  }),
  render: ExampleCustomDropdownProps
}`,...(V=(F=x.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var B,z,W;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(W=(z=w.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var L,q,K;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(K=(q=k.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ye=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],Se=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:x,ContextOnCellAndOnHeaderMenuStory:w,ContextOnCellMenuAsyncErrorStory:f,ContextOnCellMenuAsyncSuccessStory:k,ContextOnCellMenuDropdownStory:v,ContextOnCellMenuStory:y,ContextOnHeaderMenuDropdownStory:C,ContextOnHeaderMenuStory:b,__namedExportsOrder:ye,default:ae},Symbol.toStringTag,{value:"Module"}));export{Se as T};
