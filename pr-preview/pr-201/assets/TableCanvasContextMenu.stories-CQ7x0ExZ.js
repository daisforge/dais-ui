import{r as a,b as s}from"./react-UEdzNlUe.js";import{c as i}from"./tableData-DKA5H0bF.js";import{g as d}from"./getFuncAsString-BhLC6Urd.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{E as ee}from"./EmptyState-C6cgbOX4.js";import{T as l}from"./TableCanvas-C1QAd6B1.js";import{ad as oe}from"./@salutejs/sdds-finai-C9AHDOh5.js";import{cA as ne}from"./vendor-DX-rrd2O.js";const ae={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function te(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:42,columnNumber:5},this)}function se(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:102,columnNumber:5},this)}function re(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:130,columnNumber:5},this)}function ue(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:192,columnNumber:5},this)}function le(){const[t]=a.useState(i),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:221,columnNumber:5},this)}function ie({listWidth:t}){const[r]=a.useState(i),e=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:t,closeOnSelect:!0,getDropdownItems:({column:o,row:n})=>[{value:"clone",label:`Клонировать "${n.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(o,n,c)=>{console.group("onItemSelect (custom props)"),console.debug("item:",o),console.debug("row:",n.row),console.groupEnd()}}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:305,columnNumber:5},this)}const me=`
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
`,b={name:"Контекстное меню Dropdown (шапка таблицы)",...m({previewSource:"shown",code:me}),render:te},v={name:"Контекстное меню, функция обработчик (шапка таблицы)",...m({previewSource:"shown",code:de}),render:se},y={name:"Контекстное меню Dropdown (cell таблицы)",...m({previewSource:"shown",code:ce}),render:re},x={name:"Контекстное меню, функция обработчик (cell таблицы)",...m({previewSource:"shown",code:pe}),render:ue},Ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,w={args:{listWidth:580},argTypes:{listWidth:{name:"Ширина меню ПКМ, px",control:"number"}},name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...m({previewSource:"shown",code:Ce}),render:ie},k={name:"Контекстное меню (все возможности)",render:le},be=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),ve=()=>s.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[s.jsxDEV(ne,{width:16,height:16,roundness:4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:478,columnNumber:5},void 0),s.jsxDEV("div",{style:{width:150},children:s.jsxDEV(oe,{size:"bodyS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:480,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:479,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:470,columnNumber:3},void 0);function U({shouldFail:t}){const[r]=a.useState(i),[e,o]=a.useState({status:"idle",items:[],key:null,row:null}),n=a.useRef(0),c=a.useRef(0),Y=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),T=a.useCallback((u,p)=>{o({status:"loading",items:[],key:p,row:u});const Z=t&&n.current===0;n.current+=1,c.current+=1;const M=c.current;new Promise((C,g)=>{setTimeout(()=>{if(Z){g(new Error("network"));return}C([{value:"copy",label:`Копировать «${u.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(C=>{M===c.current&&o(g=>({...g,status:"success",items:C}))},()=>{M===c.current&&o(C=>({...C,status:"error",items:[]}))})},[t]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:u,column:p})=>T(u,`${u.id}:${p.name}`),getDropdownItems:({row:u,column:p})=>e.key!==`${u.id}:${p.name}`?[]:e.status==="loading"?be:e.items,renderItem:e.status==="loading"?ve:void 0,beforeList:e.status==="error"&&e.row?s.jsxDEV("div",{style:{width:240,padding:8},children:s.jsxDEV(ee,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&T(e.row,e.key)}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:566,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:565,columnNumber:15},this):void 0,onItemSelect:u=>{String(u.value).startsWith("__skeleton")||alert(`Выбрано: ${u.label}`)}}},columnConfig:Y,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:551,columnNumber:5},this)}const X=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${d("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,D={name:"Async-подгрузка пунктов (успех)",...m({previewSource:"hidden",code:X}),render:()=>s.jsxDEV(U,{shouldFail:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:614,columnNumber:17},void 0)},f={name:"Async-подгрузка пунктов (ошибка + ретрай)",...m({previewSource:"hidden",code:X}),render:()=>s.jsxDEV(U,{shouldFail:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:623,columnNumber:17},void 0)};var S,E,h;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...(h=(E=b.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var N,A,$;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...($=(A=v.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var I,R,H;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(H=(R=y.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,P,j;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(j=(P=x.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var _,F,V;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    listWidth: 580
  },
  argTypes: {
    listWidth: {
      name: 'Ширина меню ПКМ, px',
      control: 'number'
    }
  },
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode
  }),
  render: ExampleCustomDropdownProps
}`,...(V=(F=w.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var B,W,z;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(z=(W=k.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,q,K;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(K=(q=D.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ye=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],Se=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:w,ContextOnCellAndOnHeaderMenuStory:k,ContextOnCellMenuAsyncErrorStory:f,ContextOnCellMenuAsyncSuccessStory:D,ContextOnCellMenuDropdownStory:y,ContextOnCellMenuStory:x,ContextOnHeaderMenuDropdownStory:b,ContextOnHeaderMenuStory:v,__namedExportsOrder:ye,default:ae},Symbol.toStringTag,{value:"Module"}));export{Se as T};
