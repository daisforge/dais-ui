import{r as a,d as s}from"./react-D2T61mpp.js";import{c as d}from"./tableData-UCfjiBCh.js";import{g as p}from"./getFuncAsString-C1kndaLg.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{E as Y}from"./EmptyState-xJTZH32N.js";import{T as l}from"./TableCanvas-Lx52Eqqy.js";import{ac as Z}from"./@salutejs/sdds-finai-rsluPq8z.js";import{bq as ee}from"./vendor-CwjClrU-.js";const oe={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function ne(){const[t]=a.useState(d),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:42,columnNumber:5},this)}function ae(){const[t]=a.useState(d),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:102,columnNumber:5},this)}function te(){const[t]=a.useState(d),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:130,columnNumber:5},this)}function se(){const[t]=a.useState(d),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:192,columnNumber:5},this)}function re(){const[t]=a.useState(d),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:221,columnNumber:5},this)}function ue(){const[t]=a.useState(d),r=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:"580px",closeOnSelect:!0,getDropdownItems:({column:e,row:o})=>[{value:"clone",label:`Клонировать "${o.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(e,o,n)=>{console.group("onItemSelect (custom props)"),console.debug("item:",e),console.debug("row:",o.row),console.groupEnd()}}},columnConfig:r,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:305,columnNumber:5},this)}const le=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderDropdown")}
`,ie=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderHandler")}
`,me=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellDropdown")}
`,de=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellHandler")}
`,b={name:"Контекстное меню Dropdown (шапка таблицы)",...c({previewSource:"shown",code:le}),render:ne},v={name:"Контекстное меню, функция обработчик (шапка таблицы)",...c({previewSource:"shown",code:ie}),render:ae},y={name:"Контекстное меню Dropdown (cell таблицы)",...c({previewSource:"shown",code:me}),render:te},x={name:"Контекстное меню, функция обработчик (cell таблицы)",...c({previewSource:"shown",code:de}),render:se},ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,w={name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...c({previewSource:"shown",code:ce}),render:ue},k={name:"Контекстное меню (все возможности)",render:re},pe=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),Ce=()=>s.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[s.jsxDEV(ee,{width:16,height:16,roundness:4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:474,columnNumber:5},void 0),s.jsxDEV("div",{style:{width:150},children:s.jsxDEV(Z,{size:"bodyS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:476,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:475,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:466,columnNumber:3},void 0);function J({shouldFail:t}){const[r]=a.useState(d),[e,o]=a.useState({status:"idle",items:[],key:null,row:null}),n=a.useRef(0),U=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),T=a.useCallback((u,i)=>{o({status:"loading",items:[],key:i,row:u});const X=t&&n.current===0;n.current+=1,new Promise((m,C)=>{setTimeout(()=>{if(X){C(new Error("network"));return}m([{value:"copy",label:`Копировать «${u.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(m=>o(C=>C.key===i?{...C,status:"success",items:m}:C),()=>o(m=>m.key===i?{...m,status:"error",items:[]}:m))},[t]);return s.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:u,column:i})=>T(u,`${u.id}:${i.name}`),getDropdownItems:({row:u,column:i})=>e.key!==`${u.id}:${i.name}`?[]:e.status==="loading"?pe:e.items,renderItem:e.status==="loading"?Ce:void 0,beforeList:e.status==="error"&&e.row?s.jsxDEV("div",{style:{width:240,padding:8},children:s.jsxDEV(Y,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&T(e.row,e.key)}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:557,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:556,columnNumber:15},this):void 0,onItemSelect:u=>{String(u.value).startsWith("__skeleton")||alert(`Выбрано: ${u.label}`)}}},columnConfig:U,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:542,columnNumber:5},this)}const Q=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,D={name:"Async-подгрузка пунктов (успех)",...c({previewSource:"hidden",code:Q}),render:()=>s.jsxDEV(J,{shouldFail:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:605,columnNumber:17},void 0)},f={name:"Async-подгрузка пунктов (ошибка + ретрай)",...c({previewSource:"hidden",code:Q}),render:()=>s.jsxDEV(J,{shouldFail:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:614,columnNumber:17},void 0)};var g,M,S;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...(S=(M=b.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,h,N;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...(N=(h=v.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var $,A,I;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(I=(A=y.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var H,R,O;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(O=(R=x.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var P,j,_;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode
  }),
  render: ExampleCustomDropdownProps
}`,...(_=(j=w.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var F,V,B;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(B=(V=k.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var z,W,L;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(L=(W=D.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var q,K,G;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(G=(K=f.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const be=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],ge=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:w,ContextOnCellAndOnHeaderMenuStory:k,ContextOnCellMenuAsyncErrorStory:f,ContextOnCellMenuAsyncSuccessStory:D,ContextOnCellMenuDropdownStory:y,ContextOnCellMenuStory:x,ContextOnHeaderMenuDropdownStory:b,ContextOnHeaderMenuStory:v,__namedExportsOrder:be,default:oe},Symbol.toStringTag,{value:"Module"}));export{ge as T};
