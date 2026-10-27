import{r as o,j as l}from"./react-CAOzMBF_.js";import{c as i}from"./tableData-DVJFoYoT.js";import q from"./DocStoryTemplate-Cf946dgV.js";import{g as J}from"./getFuncAsString-DnrLf2YT.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{E as Q}from"./EmptyState-BCYMGuYF.js";import{f as p}from"./Table-BQHrw1K6.js";import{a7 as U}from"./@salutejs/sdds-finai-CKhMjg07.js";import{bD as V}from"./vendor-DmWczWMC.js";const Y={title:"Локальные компоненты/Table/ContextMenu",tags:["!autodocs"],parameters:{docs:{page:q}}},k=`
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
`,y={...c({preCode:k,previewSource:"shown"}),name:"Контекстное меню DropDown (шапка таблицы)",render:()=>{const[t]=o.useState(i),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(p,{tableConfig:{onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(r,"event"),console.groupEnd()}}},columnConfig:u,rows:t})}},C={...c({preCode:k,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (шапка таблицы)",render:()=>{const[t]=o.useState(i),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(p,{tableConfig:{onHeaderContextMenu:(e,n,r)=>console.debug(e,n,r)},columnConfig:u,rows:t})}},g={...c({preCode:k,previewSource:"shown"}),name:"Контекстное меню DropDown (cell таблицы)",render:()=>{const[t]=o.useState(i),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(p,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context",n.row),console.debug(r,"event"),console.groupEnd(),n.selectCell()}}},columnConfig:u,rows:t})}},D={...c({preCode:k,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (cell таблицы)",render:()=>{const[t]=o.useState(i),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(p,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")}},columnConfig:u,rows:t})}},v={...c({preCode:k,previewSource:"shown"}),name:"Контекстное меню, all features (cell / header таблицы)",render:()=>{const[t]=o.useState(i),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(p,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")},onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(r,"event"),console.groupEnd()}},onHeaderContextMenu:(e,n)=>console.debug(e,n),onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(r,"event"),console.groupEnd()}}},columnConfig:u,rows:t})}},ee=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),ne=()=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[l.jsx(V,{width:16,height:16,roundness:4}),l.jsx("div",{style:{width:150},children:l.jsx(U,{size:"bodyS"})})]});function K({shouldFail:t}){const[u]=o.useState(i),[e,n]=o.useState({status:"idle",items:[],key:null,row:null}),r=o.useRef(0),X=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),x=o.useCallback((s,a)=>{n({status:"loading",items:[],key:a,row:s});const Z=t&&r.current===0;r.current+=1,new Promise((m,d)=>{setTimeout(()=>{if(Z){d(new Error("network"));return}m([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(m=>n(d=>d.key===a?{...d,status:"success",items:m}:d),()=>n(m=>m.key===a?{...m,status:"error",items:[]}:m))},[t]);return l.jsx(p,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:a})=>x(s,`${s.id}:${a.key}`),getDropDownItems:({row:s,column:a})=>e.key!==`${s.id}:${a.key}`?[]:e.status==="loading"?ee:e.items,renderItem:e.status==="loading"?ne:void 0,beforeList:e.status==="error"&&e.row?l.jsx("div",{style:{width:240,padding:8},children:l.jsx(Q,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&x(e.row,e.key)}}]})}):void 0,onItemSelect:(s,a)=>{String(s.value).startsWith("__skeleton")||(a.selectCell(),alert(`Выбрано: ${s.label}`))}}},columnConfig:X,rows:u})}const N=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

${J("packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx","AsyncCellDropdownExample")}`,w={name:"Async-подгрузка пунктов (успех)",...c({previewSource:"hidden",code:N}),render:()=>l.jsx(K,{shouldFail:!1})},b={name:"Async-подгрузка пунктов (ошибка + ретрай)",...c({previewSource:"hidden",code:N}),render:()=>l.jsx(K,{shouldFail:!0})};var S,f,M;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(f=y.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var T,I,$;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(I=C.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var E,A,h;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(h=(A=g.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var R,O,_;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(O=D.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var j,F,H;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var B,P,L;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(L=(P=w.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var z,W,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(G=(W=b.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const oe=["ContextOnHeaderMenuDropDownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropDownStory","ContextOnCellMenuStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],pe=Object.freeze(Object.defineProperty({__proto__:null,ContextOnCellAndOnHeaderMenuStory:v,ContextOnCellMenuAsyncErrorStory:b,ContextOnCellMenuAsyncSuccessStory:w,ContextOnCellMenuDropDownStory:g,ContextOnCellMenuStory:D,ContextOnHeaderMenuDropDownStory:y,ContextOnHeaderMenuStory:C,__namedExportsOrder:oe,default:Y},Symbol.toStringTag,{value:"Module"}));export{pe as T};
