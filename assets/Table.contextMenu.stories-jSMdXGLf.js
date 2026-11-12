import{r as o,j as l}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import Q from"./DocStoryTemplate-DUx_jmLE.js";import{g as U}from"./getFuncAsString-SqWQ2qo2.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{E as V}from"./EmptyState-BCVYrGwr.js";import{f as i}from"./Table-DEW4FVpB.js";import{a7 as Y}from"./@salutejs/sdds-finai-CrMFu5No.js";import{bE as ee}from"./vendor-CvBXOjQ8.js";const ne={title:"Локальные компоненты/Table/ContextMenu",tags:["!autodocs"],parameters:{docs:{page:Q}}},b=`
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
`,d={...c({preCode:b,previewSource:"shown"}),name:"Контекстное меню DropDown (шапка таблицы)",render:()=>{const[t]=o.useState(m),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(i,{tableConfig:{onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(r,"event"),console.groupEnd()}}},columnConfig:u,rows:t})}},y={...c({preCode:b,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (шапка таблицы)",render:()=>{const[t]=o.useState(m),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(i,{tableConfig:{onHeaderContextMenu:(e,n,r)=>console.debug(e,n,r)},columnConfig:u,rows:t})}},C={...c({preCode:b,previewSource:"shown"}),name:"Контекстное меню DropDown (cell таблицы)",render:()=>{const[t]=o.useState(m),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(i,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context",n.row),console.debug(r,"event"),console.groupEnd(),n.selectCell()}}},columnConfig:u,rows:t})}},g={...c({preCode:b,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (cell таблицы)",render:()=>{const[t]=o.useState(m),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(i,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")}},columnConfig:u,rows:t})}},v={...c({preCode:b,previewSource:"shown"}),name:"Контекстное меню, all features (cell / header таблицы)",render:()=>{const[t]=o.useState(m),u=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return l.jsx(i,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")},onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(r,"event"),console.groupEnd()}},onHeaderContextMenu:(e,n)=>console.debug(e,n),onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,r)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(r,"event"),console.groupEnd()}}},columnConfig:u,rows:t})}},oe=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),te=()=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[l.jsx(ee,{width:16,height:16,roundness:4}),l.jsx("div",{style:{width:150},children:l.jsx(Y,{size:"bodyS"})})]});function N({shouldFail:t}){const[u]=o.useState(m),[e,n]=o.useState({status:"idle",items:[],key:null,row:null}),r=o.useRef(0),k=o.useRef(0),Z=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),S=o.useCallback((s,a)=>{n({status:"loading",items:[],key:a,row:s});const J=t&&r.current===0;r.current+=1,k.current+=1;const f=k.current;new Promise((p,x)=>{setTimeout(()=>{if(J){x(new Error("network"));return}p([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(p=>{f===k.current&&n(x=>({...x,status:"success",items:p}))},()=>{f===k.current&&n(p=>({...p,status:"error",items:[]}))})},[t]);return l.jsx(i,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:a})=>S(s,`${s.id}:${a.key}`),getDropDownItems:({row:s,column:a})=>e.key!==`${s.id}:${a.key}`?[]:e.status==="loading"?oe:e.items,renderItem:e.status==="loading"?te:void 0,beforeList:e.status==="error"&&e.row?l.jsx("div",{style:{width:240,padding:8},children:l.jsx(V,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&S(e.row,e.key)}}]})}):void 0,onItemSelect:(s,a)=>{String(s.value).startsWith("__skeleton")||(a.selectCell(),alert(`Выбрано: ${s.label}`))}}},columnConfig:Z,rows:u})}const X=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

${U("packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx","AsyncCellDropdownExample")}`,D={name:"Async-подгрузка пунктов (успех)",...c({previewSource:"hidden",code:X}),render:()=>l.jsx(N,{shouldFail:!1})},w={name:"Async-подгрузка пунктов (ошибка + ретрай)",...c({previewSource:"hidden",code:X}),render:()=>l.jsx(N,{shouldFail:!0})};var M,T,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var $,E,A;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(A=(E=y.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var R,h,O;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(h=C.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var _,j,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(j=g.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var H,B,P;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(B=v.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var L,z,q;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(q=(z=D.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var W,G,K;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(K=(G=w.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const le=["ContextOnHeaderMenuDropDownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropDownStory","ContextOnCellMenuStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],ye=Object.freeze(Object.defineProperty({__proto__:null,ContextOnCellAndOnHeaderMenuStory:v,ContextOnCellMenuAsyncErrorStory:w,ContextOnCellMenuAsyncSuccessStory:D,ContextOnCellMenuDropDownStory:C,ContextOnCellMenuStory:g,ContextOnHeaderMenuDropDownStory:d,ContextOnHeaderMenuStory:y,__namedExportsOrder:le,default:ne},Symbol.toStringTag,{value:"Module"}));export{ye as T};
