import{r as t,j as a}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import{g as i}from"./getFuncAsString-DnrLf2YT.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{E as Y}from"./EmptyState-BCYMGuYF.js";import{T as l}from"./TableCanvas-DlX-Wh2b.js";import{a7 as Z}from"./@salutejs/sdds-finai-CKhMjg07.js";import{bD as ee}from"./vendor-DmWczWMC.js";const oe={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function ne(){const[r]=t.useState(m),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:u,rows:r})}function te(){const[r]=t.useState(m),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:u,rows:r})}function re(){const[r]=t.useState(m),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:u,rows:r})}function ae(){const[r]=t.useState(m),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:u,rows:r})}function ue(){const[r]=t.useState(m),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:u,rows:r})}function se(){const[r]=t.useState(m),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:"580px",closeOnSelect:!0,getDropdownItems:({column:e,row:o})=>[{value:"clone",label:`Клонировать "${o.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(e,o,n)=>{console.group("onItemSelect (custom props)"),console.debug("item:",e),console.debug("row:",o.row),console.groupEnd()}}},columnConfig:u,rows:r})}const le=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${i("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderDropdown")}
`,de=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${i("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderHandler")}
`,ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${i("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellDropdown")}
`,me=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${i("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellHandler")}
`,y={name:"Контекстное меню Dropdown (шапка таблицы)",...p({previewSource:"shown",code:le}),render:ne},v={name:"Контекстное меню, функция обработчик (шапка таблицы)",...p({previewSource:"shown",code:de}),render:te},w={name:"Контекстное меню Dropdown (cell таблицы)",...p({previewSource:"shown",code:ce}),render:re},b={name:"Контекстное меню, функция обработчик (cell таблицы)",...p({previewSource:"shown",code:me}),render:ae},pe=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${i("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,x={name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...p({previewSource:"shown",code:pe}),render:se},D={name:"Контекстное меню (все возможности)",render:ue},ie=[0,1,2,3].map(r=>({value:`__skeleton_${r}`,label:""})),Ce=()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[a.jsx(ee,{width:16,height:16,roundness:4}),a.jsx("div",{style:{width:150},children:a.jsx(Z,{size:"bodyS"})})]});function Q({shouldFail:r}){const[u]=t.useState(m),[e,o]=t.useState({status:"idle",items:[],key:null,row:null}),n=t.useRef(0),V=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),k=t.useCallback((s,d)=>{o({status:"loading",items:[],key:d,row:s});const X=r&&n.current===0;n.current+=1,new Promise((c,C)=>{setTimeout(()=>{if(X){C(new Error("network"));return}c([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(c=>o(C=>C.key===d?{...C,status:"success",items:c}:C),()=>o(c=>c.key===d?{...c,status:"error",items:[]}:c))},[r]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:d})=>k(s,`${s.id}:${d.name}`),getDropdownItems:({row:s,column:d})=>e.key!==`${s.id}:${d.name}`?[]:e.status==="loading"?ie:e.items,renderItem:e.status==="loading"?Ce:void 0,beforeList:e.status==="error"&&e.row?a.jsx("div",{style:{width:240,padding:8},children:a.jsx(Y,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&k(e.row,e.key)}}]})}):void 0,onItemSelect:s=>{String(s.value).startsWith("__skeleton")||alert(`Выбрано: ${s.label}`)}}},columnConfig:V,rows:u})}const U=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${i("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,g={name:"Async-подгрузка пунктов (успех)",...p({previewSource:"hidden",code:U}),render:()=>a.jsx(Q,{shouldFail:!1})},S={name:"Async-подгрузка пунктов (ошибка + ретрай)",...p({previewSource:"hidden",code:U}),render:()=>a.jsx(Q,{shouldFail:!0})};var f,E,M;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...(M=(E=y.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var T,$,A;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...(A=($=v.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var h,I,H;w.parameters={...w.parameters,docs:{...(h=w.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(H=(I=w.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var R,O,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,_,F;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode
  }),
  render: ExampleCustomDropdownProps
}`,...(F=(_=x.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var B,z,W;D.parameters={...D.parameters,docs:{...(B=D.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(W=(z=D.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var L,K,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(N=(K=g.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var q,G,J;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ye=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],fe=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:x,ContextOnCellAndOnHeaderMenuStory:D,ContextOnCellMenuAsyncErrorStory:S,ContextOnCellMenuAsyncSuccessStory:g,ContextOnCellMenuDropdownStory:w,ContextOnCellMenuStory:b,ContextOnHeaderMenuDropdownStory:y,ContextOnHeaderMenuStory:v,__namedExportsOrder:ye,default:oe},Symbol.toStringTag,{value:"Module"}));export{fe as T};
