import{r as o,d as r}from"./react-D2T61mpp.js";import{c}from"./tableData-DVJFoYoT.js";import J from"./DocStoryTemplate-DMKGmJ6t.js";import{g as Q}from"./getFuncAsString-B1yRgn90.js";import{s as i}from"./storySourceDoc-tVKyHcEN.js";import{E as U}from"./EmptyState-DsCjVhNT.js";import{f as m}from"./Table-wSXlevnH.js";import{a7 as Y}from"./@salutejs/sdds-finai-QR_WCRdF.js";import{bE as ee}from"./vendor-BrHBSlJK.js";const ne={title:"Локальные компоненты/Table/ContextMenu",tags:["!autodocs"],parameters:{docs:{page:J}}},w=`
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`,p={...i({preCode:w,previewSource:"shown"}),name:"Контекстное меню DropDown (шапка таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(m,{tableConfig:{onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(u,"event"),console.groupEnd()}}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:89,columnNumber:7},void 0)}},y={...i({preCode:w,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (шапка таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(m,{tableConfig:{onHeaderContextMenu:(e,n,u)=>console.debug(e,n,u)},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:170,columnNumber:7},void 0)}},b={...i({preCode:w,previewSource:"shown"}),name:"Контекстное меню DropDown (cell таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(m,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context",n.row),console.debug(u,"event"),console.groupEnd(),n.selectCell()}}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:227,columnNumber:7},void 0)}},C={...i({preCode:w,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (cell таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(m,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:316,columnNumber:7},void 0)}},g={...i({preCode:w,previewSource:"shown"}),name:"Контекстное меню, all features (cell / header таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(m,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")},onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(u,"event"),console.groupEnd()}},onHeaderContextMenu:(e,n)=>console.debug(e,n),onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(u,"event"),console.groupEnd()}}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:374,columnNumber:7},void 0)}},oe=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),te=()=>r.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[r.jsxDEV(ee,{width:16,height:16,roundness:4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:466,columnNumber:5},void 0),r.jsxDEV("div",{style:{width:150},children:r.jsxDEV(Y,{size:"bodyS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:468,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:467,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:458,columnNumber:3},void 0);function G({shouldFail:t}){const[l]=o.useState(c),[e,n]=o.useState({status:"idle",items:[],key:null,row:null}),u=o.useRef(0),k=o.useRef(0),X=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),f=o.useCallback((s,a)=>{n({status:"loading",items:[],key:a,row:s});const Z=t&&u.current===0;u.current+=1,k.current+=1;const T=k.current;new Promise((d,x)=>{setTimeout(()=>{if(Z){x(new Error("network"));return}d([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(d=>{T===k.current&&n(x=>({...x,status:"success",items:d}))},()=>{T===k.current&&n(d=>({...d,status:"error",items:[]}))})},[t]);return r.jsxDEV(m,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:a})=>f(s,`${s.id}:${a.key}`),getDropDownItems:({row:s,column:a})=>e.key!==`${s.id}:${a.key}`?[]:e.status==="loading"?oe:e.items,renderItem:e.status==="loading"?te:void 0,beforeList:e.status==="error"&&e.row?r.jsxDEV("div",{style:{width:240,padding:8},children:r.jsxDEV(U,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&f(e.row,e.key)}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:554,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:553,columnNumber:15},this):void 0,onItemSelect:(s,a)=>{String(s.value).startsWith("__skeleton")||(a.selectCell(),alert(`Выбрано: ${s.label}`))}}},columnConfig:X,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:539,columnNumber:5},this)}const K=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

${Q("packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx","AsyncCellDropdownExample")}`,v={name:"Async-подгрузка пунктов (успех)",...i({previewSource:"hidden",code:K}),render:()=>r.jsxDEV(G,{shouldFail:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:603,columnNumber:17},void 0)},D={name:"Async-подгрузка пунктов (ошибка + ретрай)",...i({previewSource:"hidden",code:K}),render:()=>r.jsxDEV(G,{shouldFail:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:612,columnNumber:17},void 0)};var M,S,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контекстное меню DropDown (шапка таблицы)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      onHeaderContextMenuDropDown: {
        type: 'dropdown',
        getDropDownItems: ({
          columnLabel
        }) => [{
          value: \`lvl1 \${columnLabel}\`,
          label: \`\${columnLabel} lvl1\`,
          items: [{
            value: \`lvl1_inside \${columnLabel}\`,
            label: \`\${columnLabel} lvl1 inside\`
          }]
        }, {
          value: \`lvl2 \${columnLabel}\`,
          label: \`\${columnLabel} lvl2\`
        }],
        onItemSelect: (item, context, event) => {
          console.group('onItemSelect for onCellContextMenuDropDown');
          console.debug(item, 'item');
          console.debug(context, 'context');
          console.debug(event, 'event');
          console.groupEnd();
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,$,h;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      onHeaderContextMenu: (e, columnLabel, closestTarget) => console.debug(e, columnLabel, closestTarget)
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(h=($=y.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var N,A,R;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контекстное меню DropDown (cell таблицы)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      onCellContextMenuDropDown: {
        type: 'dropdown',
        getDropDownItems: ({
          column,
          row
        }) => {
          console.debug(column, row, 'getDropDownItems for onCellContextMenuDropDown');
          return [{
            value: \`lvl1 \${column.name}\`,
            label: \`\${column.name} lvl1\`,
            items: [{
              value: \`lvl1_inside \${column.name}\`,
              label: \`\${column.name} lvl1 inside\`
            }]
          }, {
            value: \`lvl2 \${column.name}\`,
            label: \`\${column.name} lvl2\`
          }];
        },
        onItemSelect: (item, context, event) => {
          console.group('onItemSelect for onCellContextMenuDropDown');
          console.debug(item, 'item');
          console.debug(context, 'context', context.row);
          console.debug(event, 'event');
          console.groupEnd();
          context.selectCell();
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(R=(A=b.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,_,j;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      onCellContextMenu: (args, event) => {
        console.debug(args, event, 'onCellContextMenu');
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(j=(_=C.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var F,H,B;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Контекстное меню, all features (cell / header таблицы)',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'developer',
      name: 'Developer'
    }, {
      key: 'tr1',
      name: 'TR'
    }, {
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      onCellContextMenu: (args, event) => {
        console.debug(args, event, 'onCellContextMenu');
      },
      onCellContextMenuDropDown: {
        type: 'dropdown',
        getDropDownItems: ({
          column,
          row
        }) => {
          console.debug(column, row, 'getDropDownItems for onCellContextMenuDropDown');
          return [{
            value: \`lvl1 \${column.name}\`,
            label: \`\${column.name} lvl1\`,
            items: [{
              value: \`lvl1_inside \${column.name}\`,
              label: \`\${column.name} lvl1 inside\`
            }]
          }, {
            value: \`lvl2 \${column.name}\`,
            label: \`\${column.name} lvl2\`
          }];
        },
        onItemSelect: (item, context, event) => {
          console.group('onItemSelect for onCellContextMenuDropDown');
          console.debug(item, 'item');
          console.debug(context, 'context');
          console.debug(event, 'event');
          console.groupEnd();
        }
      },
      onHeaderContextMenu: (e, closestTarget) => console.debug(e, closestTarget),
      onHeaderContextMenuDropDown: {
        type: 'dropdown',
        getDropDownItems: ({
          columnLabel
        }) => [{
          value: \`lvl1 \${columnLabel}\`,
          label: \`\${columnLabel} lvl1\`,
          items: [{
            value: \`lvl1_inside \${columnLabel}\`,
            label: \`\${columnLabel} lvl1 inside\`
          }]
        }, {
          value: \`lvl2 \${columnLabel}\`,
          label: \`\${columnLabel} lvl2\`
        }],
        onItemSelect: (item, context, event) => {
          console.group('onItemSelect for onCellContextMenuDropDown');
          console.debug(item, 'item');
          console.debug(context, 'context');
          console.debug(event, 'event');
          console.groupEnd();
        }
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(B=(H=g.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var P,V,L;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(L=(V=v.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var z,q,W;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(W=(q=D.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const re=["ContextOnHeaderMenuDropDownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropDownStory","ContextOnCellMenuStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],ye=Object.freeze(Object.defineProperty({__proto__:null,ContextOnCellAndOnHeaderMenuStory:g,ContextOnCellMenuAsyncErrorStory:D,ContextOnCellMenuAsyncSuccessStory:v,ContextOnCellMenuDropDownStory:b,ContextOnCellMenuStory:C,ContextOnHeaderMenuDropDownStory:p,ContextOnHeaderMenuStory:y,__namedExportsOrder:re,default:ne},Symbol.toStringTag,{value:"Module"}));export{ye as T};
