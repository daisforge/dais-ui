import{r as t,j as a}from"./react-CAOzMBF_.js";import{c as d}from"./tableData-DVJFoYoT.js";import{g as m}from"./getFuncAsString-SqWQ2qo2.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{E as ee}from"./EmptyState-CKFGDnr1.js";import{T as l}from"./TableCanvas-DOsQrCiP.js";import{a7 as oe}from"./@salutejs/sdds-finai-CrMFu5No.js";import{bE as ne}from"./vendor-CvBXOjQ8.js";const te={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function re(){const[r]=t.useState(d),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:u,rows:r})}function ae(){const[r]=t.useState(d),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:u,rows:r})}function ue(){const[r]=t.useState(d),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:u,rows:r})}function se(){const[r]=t.useState(d),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:u,rows:r})}function le(){const[r]=t.useState(d),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:u,rows:r})}function de(){const[r]=t.useState(d),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:"580px",closeOnSelect:!0,getDropdownItems:({column:e,row:o})=>[{value:"clone",label:`Клонировать "${o.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(e,o,n)=>{console.group("onItemSelect (custom props)"),console.debug("item:",e),console.debug("row:",o.row),console.groupEnd()}}},columnConfig:u,rows:r})}const ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${m("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderDropdown")}
`,me=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${m("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderHandler")}
`,pe=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${m("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellDropdown")}
`,ie=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${m("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellHandler")}
`,C={name:"Контекстное меню Dropdown (шапка таблицы)",...c({previewSource:"shown",code:ce}),render:re},y={name:"Контекстное меню, функция обработчик (шапка таблицы)",...c({previewSource:"shown",code:me}),render:ae},v={name:"Контекстное меню Dropdown (cell таблицы)",...c({previewSource:"shown",code:pe}),render:ue},w={name:"Контекстное меню, функция обработчик (cell таблицы)",...c({previewSource:"shown",code:ie}),render:se},Ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${m("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,b={name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...c({previewSource:"shown",code:Ce}),render:de},x={name:"Контекстное меню (все возможности)",render:le},ye=[0,1,2,3].map(r=>({value:`__skeleton_${r}`,label:""})),ve=()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[a.jsx(ne,{width:16,height:16,roundness:4}),a.jsx("div",{style:{width:150},children:a.jsx(oe,{size:"bodyS"})})]});function V({shouldFail:r}){const[u]=t.useState(d),[e,o]=t.useState({status:"idle",items:[],key:null,row:null}),n=t.useRef(0),S=t.useRef(0),Y=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),f=t.useCallback((s,p)=>{o({status:"loading",items:[],key:p,row:s});const Z=r&&n.current===0;n.current+=1,S.current+=1;const E=S.current;new Promise((i,k)=>{setTimeout(()=>{if(Z){k(new Error("network"));return}i([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(i=>{E===S.current&&o(k=>({...k,status:"success",items:i}))},()=>{E===S.current&&o(i=>({...i,status:"error",items:[]}))})},[r]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:p})=>f(s,`${s.id}:${p.name}`),getDropdownItems:({row:s,column:p})=>e.key!==`${s.id}:${p.name}`?[]:e.status==="loading"?ye:e.items,renderItem:e.status==="loading"?ve:void 0,beforeList:e.status==="error"&&e.row?a.jsx("div",{style:{width:240,padding:8},children:a.jsx(ee,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&f(e.row,e.key)}}]})}):void 0,onItemSelect:s=>{String(s.value).startsWith("__skeleton")||alert(`Выбрано: ${s.label}`)}}},columnConfig:Y,rows:u})}const X=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${m("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,D={name:"Async-подгрузка пунктов (успех)",...c({previewSource:"hidden",code:X}),render:()=>a.jsx(V,{shouldFail:!1})},g={name:"Async-подгрузка пунктов (ошибка + ретрай)",...c({previewSource:"hidden",code:X}),render:()=>a.jsx(V,{shouldFail:!0})};var M,T,$;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...($=(T=C.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var A,h,I;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...(I=(h=y.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var R,H,O;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(O=(H=v.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var P,j,_;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(_=(j=w.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var F,B,z;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode
  }),
  render: ExampleCustomDropdownProps
}`,...(z=(B=b.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var W,L,q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(q=(L=x.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var K,N,G;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(G=(N=D.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var J,Q,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const we=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],Me=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:b,ContextOnCellAndOnHeaderMenuStory:x,ContextOnCellMenuAsyncErrorStory:g,ContextOnCellMenuAsyncSuccessStory:D,ContextOnCellMenuDropdownStory:v,ContextOnCellMenuStory:w,ContextOnHeaderMenuDropdownStory:C,ContextOnHeaderMenuStory:y,__namedExportsOrder:we,default:te},Symbol.toStringTag,{value:"Module"}));export{Me as T};
