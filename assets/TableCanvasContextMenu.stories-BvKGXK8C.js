import{r as t,j as a}from"./react-DYHuXpTF.js";import{c}from"./tableData-DKA5H0bF.js";import{g as p}from"./getFuncAsString-Db0amMg_.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{E as ee}from"./EmptyState-CtIdhIcs.js";import{T as l}from"./TableCanvas-D2iKJXJX.js";import{ad as oe}from"./@salutejs/sdds-finai-C2CeMSda.js";import{cC as ne}from"./vendor-4go4qBMz.js";const te={title:"Локальные компоненты/TableCanvas/ContextMenu",component:l,parameters:{docs:{}},tags:["!autodocs"]};function re(){const[r]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.key}`,label:`${e.key} lvl1 inside`}]},{value:`lvl2 ${e.key}`,label:`${e.key} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>{console.debug("Логика внешнего onHeaderContextMenu",e,o,n)}},columnConfig:u,rows:r})}function ae(){const[r]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n)},columnConfig:u,rows:r})}function ue(){const[r]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e,row:o})=>(console.debug(e,o,"getDropdownItems for onCellContextMenuDropdown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context",o),console.debug(n,"event"),console.groupEnd(),alert(`Selected ${e.label} for row ${o.row.id}`)}}},columnConfig:u,rows:r})}function se(){const[r]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")}},columnConfig:u,rows:r})}function le(){const[r]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{onCellContextMenu:(e,o,n)=>{console.debug(e,o,n,"onCellContextMenu")},onCellContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onCellContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}},onHeaderContextMenu:(e,o,n)=>console.debug(e,o,n),onHeaderContextMenuDropdown:{type:"dropdown",getDropdownItems:({column:e})=>[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}],onItemSelect:(e,o,n)=>{console.group("onItemSelect for onHeaderContextMenuDropdown"),console.debug(e,"item"),console.debug(o,"context"),console.debug(n,"event"),console.groupEnd()}}},columnConfig:u,rows:r})}function de({listWidth:r,tallRow:u,offsetFromCursor:e}){const[o]=t.useState(c),n=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return a.jsx(l,{tableConfig:{rowHeight:u?480:void 0,onCellContextMenuDropdown:{type:"dropdown",size:"s",listWidth:r,offset:e?[0,0]:void 0,closeOnSelect:!0,getDropdownItems:({column:d,row:i})=>[{value:"clone",label:`Клонировать "${i.task}"`},{value:"edit",label:"Редактировать"},{value:"nested",label:"Вложенные действия",items:[{value:"nested_1",label:"Действие 1"},{value:"nested_2",label:"Действие 2"}]},{value:"delete",label:"Удалить"}],onItemSelect:(d,i,k)=>{console.group("onItemSelect (custom props)"),console.debug("item:",d),console.debug("row:",i.row),console.groupEnd()}}},columnConfig:n,rows:o})}const ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderDropdown")}
`,me=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleHeaderHandler")}
`,pe=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellDropdown")}
`,ie=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCellHandler")}
`,v={name:"Контекстное меню Dropdown (шапка таблицы)",...m({previewSource:"shown",code:ce}),render:re},w={name:"Контекстное меню, функция обработчик (шапка таблицы)",...m({previewSource:"shown",code:me}),render:ae},b={name:"Контекстное меню Dropdown (cell таблицы)",...m({previewSource:"shown",code:pe}),render:ue},x={name:"Контекстное меню, функция обработчик (cell таблицы)",...m({previewSource:"shown",code:ie}),render:se},Ce=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","ExampleCustomDropdownProps")}
`,D={args:{listWidth:580,tallRow:!1,offsetFromCursor:!1},argTypes:{listWidth:{name:"Ширина меню ПКМ, px",control:"number"},tallRow:{name:"Высота строки 480 px",control:"boolean"},offsetFromCursor:{name:"Явный offset [0, 0]",control:"boolean"}},name:"Кастомные свойства Dropdown (size, listWidth, closeOnSelect)",...m({previewSource:"shown",code:Ce}),render:de},f={name:"Контекстное меню (все возможности)",render:le},ye=[0,1,2,3].map(r=>({value:`__skeleton_${r}`,label:""})),ve=()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[a.jsx(ne,{width:16,height:16,roundness:4}),a.jsx("div",{style:{width:150},children:a.jsx(oe,{size:"bodyS"})})]});function X({shouldFail:r}){const[u]=t.useState(c),[e,o]=t.useState({status:"idle",items:[],key:null,row:null}),n=t.useRef(0),d=t.useRef(0),i=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),k=t.useCallback((s,C)=>{o({status:"loading",items:[],key:C,row:s});const Z=r&&n.current===0;n.current+=1,d.current+=1;const T=d.current;new Promise((y,E)=>{setTimeout(()=>{if(Z){E(new Error("network"));return}y([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(y=>{T===d.current&&o(E=>({...E,status:"success",items:y}))},()=>{T===d.current&&o(y=>({...y,status:"error",items:[]}))})},[r]);return a.jsx(l,{tableConfig:{onCellContextMenuDropdown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:C})=>k(s,`${s.id}:${C.name}`),getDropdownItems:({row:s,column:C})=>e.key!==`${s.id}:${C.name}`?[]:e.status==="loading"?ye:e.items,renderItem:e.status==="loading"?ve:void 0,beforeList:e.status==="error"&&e.row?a.jsx("div",{style:{width:240,padding:8},children:a.jsx(ee,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&k(e.row,e.key)}}]})}):void 0,onItemSelect:s=>{String(s.value).startsWith("__skeleton")||alert(`Выбрано: ${s.label}`)}}},columnConfig:i,rows:u})}const Y=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${p("packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx","AsyncCellDropdownExample")}`,g={name:"Async-подгрузка пунктов (успех)",...m({previewSource:"hidden",code:Y}),render:()=>a.jsx(X,{shouldFail:!1})},S={name:"Async-подгрузка пунктов (ошибка + ретрай)",...m({previewSource:"hidden",code:Y}),render:()=>a.jsx(X,{shouldFail:!0})};var M,A,$;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode
  }),
  render: ExampleHeaderDropdown
}`,...($=(A=v.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var h,R,I;w.parameters={...w.parameters,docs:{...(h=w.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode
  }),
  render: ExampleHeaderHandler
}`,...(I=(R=w.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var H,O,P;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode
  }),
  render: ExampleCellDropdown
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var F,j,_;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode
  }),
  render: ExampleCellHandler
}`,...(_=(j=x.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var B,W,z;D.parameters={...D.parameters,docs:{...(B=D.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(W=D.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,q,K;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures
}`,...(K=(q=f.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var N,G,J;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,V;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const we=["ContextOnHeaderMenuDropdownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropdownStory","ContextOnCellMenuStory","ContextMenuCustomDropdownPropsStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],Te=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuCustomDropdownPropsStory:D,ContextOnCellAndOnHeaderMenuStory:f,ContextOnCellMenuAsyncErrorStory:S,ContextOnCellMenuAsyncSuccessStory:g,ContextOnCellMenuDropdownStory:b,ContextOnCellMenuStory:x,ContextOnHeaderMenuDropdownStory:v,ContextOnHeaderMenuStory:w,__namedExportsOrder:we,default:te},Symbol.toStringTag,{value:"Module"}));export{Te as T};
