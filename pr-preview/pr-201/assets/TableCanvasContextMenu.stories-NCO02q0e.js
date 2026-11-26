import{r as a,b as r}from"./react-UEdzNlUe.js";import{c as m}from"./tableData-DKA5H0bF.js";import{g as c}from"./getFuncAsString-Db0amMg_.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{E as ee}from"./EmptyState-Bg5Oz7HU.js";import{T as l}from"./TableCanvas-D1ZGGXfu.js";import{ad as oe}from"./@salutejs/sdds-finai-DfKFI7EK.js";import{cA as ne}from"./vendor-2C5_55Sm.js";const ae={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function te(){const[t]=a.useState(m),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:42,columnNumber:5},this)}function re(){const[t]=a.useState(m),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:102,columnNumber:5},this)}function se(){const[t]=a.useState(m),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:130,columnNumber:5},this)}function ue(){const[t]=a.useState(m),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:192,columnNumber:5},this)}function le(){const[t]=a.useState(m),s=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:s,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:221,columnNumber:5},this)}function ie({listWidth:t,tallRow:s,offsetFromCursor:e}){const[o]=a.useState(m),n=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(l,{tableConfig:{rowHeight:s?480:void 0,onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:t,offset:e?[0,0]:void 0,closeOnSelect:!0,getDropdownItems:({column:i,row:p})=>[{value:"clone",label:`Клонировать "${p.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(i,p,T)=>{console.group("onItemSelect (custom props)"),console.debug("item:",i),console.debug("row:",p.row),console.groupEnd()}}},columnConfig:n,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:315,columnNumber:5},this)}const me=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderDropdown")}
`,de=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderHandler")}
`,ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellDropdown")}
`,pe=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellHandler")}
`,v={name:"Контекстное меню Dropdown (шапка таблицы)",...d({previewSource:"shown",code:me}),render:te},y={name:"Контекстное меню, функция обработчик (шапка таблицы)",...d({previewSource:"shown",code:de}),render:re},x={name:"Контекстное меню Dropdown (cell таблицы)",...d({previewSource:"shown",code:ce}),render:se},w={name:"Контекстное меню, функция обработчик (cell таблицы)",...d({previewSource:"shown",code:pe}),render:ue},Ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,f={args:{listWidth:580,tallRow:!1,offsetFromCursor:!1},argTypes:{listWidth:{name:"Ширина меню ПКМ, px",control:"number"},tallRow:{name:"Высота строки 480 px",control:"boolean"},offsetFromCursor:{name:"Явный offset [0, 0]",control:"boolean"}},name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...d({previewSource:"shown",code:Ce}),render:ie},k={name:"Контекстное меню (все возможности)",render:le},be=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),ve=()=>r.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[r.jsxDEV(ne,{width:16,height:16,roundness:4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:492,columnNumber:5},void 0),r.jsxDEV("div",{style:{width:150},children:r.jsxDEV(oe,{size:"bodyS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:494,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:493,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:484,columnNumber:3},void 0);function X({shouldFail:t}){const[s]=a.useState(m),[e,o]=a.useState({status:"idle",items:[],key:null,row:null}),n=a.useRef(0),i=a.useRef(0),p=a.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),T=a.useCallback((u,C)=>{o({status:"loading",items:[],key:C,row:u});const Z=t&&n.current===0;n.current+=1,i.current+=1;const S=i.current;new Promise((b,M)=>{setTimeout(()=>{if(Z){M(new Error("network"));return}b([{value:"copy",label:`Копировать «${u.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(b=>{S===i.current&&o(M=>({...M,status:"success",items:b}))},()=>{S===i.current&&o(b=>({...b,status:"error",items:[]}))})},[t]);return r.jsxDEV(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:u,column:C})=>T(u,`${u.id}:${C.name}`),getDropdownItems:({row:u,column:C})=>e.key!==`${u.id}:${C.name}`?[]:e.status==="loading"?be:e.items,renderItem:e.status==="loading"?ve:void 0,beforeList:e.status==="error"&&e.row?r.jsxDEV("div",{style:{width:240,padding:8},children:r.jsxDEV(ee,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&T(e.row,e.key)}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:580,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:579,columnNumber:15},this):void 0,onItemSelect:u=>{String(u.value).startsWith("__skeleton")||alert(`Выбрано: ${u.label}`)}}},columnConfig:p,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:565,columnNumber:5},this)}const Y=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,D={name:"Async-подгрузка пунктов (успех)",...d({previewSource:"hidden",code:Y}),render:()=>r.jsxDEV(X,{shouldFail:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:628,columnNumber:17},void 0)},g={name:"Async-подгрузка пунктов (ошибка + ретрай)",...d({previewSource:"hidden",code:Y}),render:()=>r.jsxDEV(X,{shouldFail:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx",lineNumber:637,columnNumber:17},void 0)};var E,h,N;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...(N=(h=v.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var A,$,R;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...(R=($=y.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var I,H,O;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var P,F,j;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(j=(F=w.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var _,V,B;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    listWidth: 580,
    tallRow: false,
    offsetFromCursor: false
  },
  argTypes: {
    listWidth: {
      name: 'Ширина меню ПКМ, px',
      control: 'number'
    },
    tallRow: {
      name: 'Высота строки 480 px',
      control: 'boolean'
    },
    offsetFromCursor: {
      name: 'Явный offset [0, 0]',
      control: 'boolean'
    }
  },
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode
  }),
  render: ExampleCustomDropdownProps
}`,...(B=(V=f.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var W,z,L;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(L=(z=k.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var q,K,G;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(G=(K=D.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ye=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],Se=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:f,ContextOnCellAndOnHeaderMenuStory:k,ContextOnCellMenuAsyncErrorStory:g,ContextOnCellMenuAsyncSuccessStory:D,ContextOnCellMenuDropdownStory:x,ContextOnCellMenuStory:w,ContextOnHeaderMenuDropdownStory:v,ContextOnHeaderMenuStory:y,__namedExportsOrder:ye,default:ae},Symbol.toStringTag,{value:"Module"}));export{Se as T};
