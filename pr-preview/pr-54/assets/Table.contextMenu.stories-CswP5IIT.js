import{r as o,d as r}from"./react-D2T61mpp.js";import{c}from"./tableData-UCfjiBCh.js";import Z from"./DocStoryTemplate-oNxBpJHV.js";import{g as q}from"./getFuncAsString-Bp1PYzKJ.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{E as J}from"./EmptyState-DZsb6oHt.js";import{f as d}from"./Table-BYXdvXsQ.js";import{a7 as Q}from"./@salutejs/sdds-finai-BMyiwTu5.js";import{bs as U}from"./vendor-1keUuV-j.js";const Y={title:"Локальные компоненты/Table/ContextMenu",tags:["!autodocs"],parameters:{docs:{page:Z}}},k=`
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
`,y={...m({preCode:k,previewSource:"shown"}),name:"Контекстное меню DropDown (шапка таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(d,{tableConfig:{onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(u,"event"),console.groupEnd()}}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:89,columnNumber:7},void 0)}},b={...m({preCode:k,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (шапка таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(d,{tableConfig:{onHeaderContextMenu:(e,n,u)=>console.debug(e,n,u)},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:170,columnNumber:7},void 0)}},C={...m({preCode:k,previewSource:"shown"}),name:"Контекстное меню DropDown (cell таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(d,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context",n.row),console.debug(u,"event"),console.groupEnd(),n.selectCell()}}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:227,columnNumber:7},void 0)}},g={...m({preCode:k,previewSource:"shown"}),name:"Контекстное меню, функция обработчик (cell таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(d,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:316,columnNumber:7},void 0)}},D={...m({preCode:k,previewSource:"shown"}),name:"Контекстное меню, all features (cell / header таблицы)",render:()=>{const[t]=o.useState(c),l=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return r.jsxDEV(d,{tableConfig:{onCellContextMenu:(e,n)=>{console.debug(e,n,"onCellContextMenu")},onCellContextMenuDropDown:{type:"dropdown",getDropDownItems:({column:e,row:n})=>(console.debug(e,n,"getDropDownItems for onCellContextMenuDropDown"),[{value:`lvl1 ${e.name}`,label:`${e.name} lvl1`,items:[{value:`lvl1_inside ${e.name}`,label:`${e.name} lvl1 inside`}]},{value:`lvl2 ${e.name}`,label:`${e.name} lvl2`}]),onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(u,"event"),console.groupEnd()}},onHeaderContextMenu:(e,n)=>console.debug(e,n),onHeaderContextMenuDropDown:{type:"dropdown",getDropDownItems:({columnLabel:e})=>[{value:`lvl1 ${e}`,label:`${e} lvl1`,items:[{value:`lvl1_inside ${e}`,label:`${e} lvl1 inside`}]},{value:`lvl2 ${e}`,label:`${e} lvl2`}],onItemSelect:(e,n,u)=>{console.group("onItemSelect for onCellContextMenuDropDown"),console.debug(e,"item"),console.debug(n,"context"),console.debug(u,"event"),console.groupEnd()}}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:374,columnNumber:7},void 0)}},ee=[0,1,2,3].map(t=>({value:`__skeleton_${t}`,label:""})),ne=()=>r.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[r.jsxDEV(U,{width:16,height:16,roundness:4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:466,columnNumber:5},void 0),r.jsxDEV("div",{style:{width:150},children:r.jsxDEV(Q,{size:"bodyS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:468,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:467,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:458,columnNumber:3},void 0);function W({shouldFail:t}){const[l]=o.useState(c),[e,n]=o.useState({status:"idle",items:[],key:null,row:null}),u=o.useRef(0),K=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"developer",name:"Developer"}],[]),x=o.useCallback((s,a)=>{n({status:"loading",items:[],key:a,row:s});const X=t&&u.current===0;u.current+=1,new Promise((i,p)=>{setTimeout(()=>{if(X){p(new Error("network"));return}i([{value:"copy",label:`Копировать «${s.task}»`},{value:"edit",label:"Редактировать"},{value:"delete",label:"Удалить"}])},1200)}).then(i=>n(p=>p.key===a?{...p,status:"success",items:i}:p),()=>n(i=>i.key===a?{...i,status:"error",items:[]}:i))},[t]);return r.jsxDEV(d,{tableConfig:{onCellContextMenuDropDown:{type:"dropdown",listWidth:"240px",onOpen:({row:s,column:a})=>x(s,`${s.id}:${a.key}`),getDropDownItems:({row:s,column:a})=>e.key!==`${s.id}:${a.key}`?[]:e.status==="loading"?ee:e.items,renderItem:e.status==="loading"?ne:void 0,beforeList:e.status==="error"&&e.row?r.jsxDEV("div",{style:{width:240,padding:8},children:r.jsxDEV(J,{size:"s",variant:"no-content",title:"Не удалось загрузить",subtitle:"Проверьте соединение и повторите",buttons:[{type:"button",props:{text:"Обновить",view:"secondary",onClick:()=>e.row&&e.key&&x(e.row,e.key)}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:549,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:548,columnNumber:15},this):void 0,onItemSelect:(s,a)=>{String(s.value).startsWith("__skeleton")||(a.selectCell(),alert(`Выбрано: ${s.label}`))}}},columnConfig:K,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:534,columnNumber:5},this)}const G=`
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, Table } from '@daisforge/ui';
import React, { useMemo, useState } from 'react';

${q("packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx","AsyncCellDropdownExample")}`,v={name:"Async-подгрузка пунктов (успех)",...m({previewSource:"hidden",code:G}),render:()=>r.jsxDEV(W,{shouldFail:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:598,columnNumber:17},void 0)},w={name:"Async-подгрузка пунктов (ошибка + ретрай)",...m({previewSource:"hidden",code:G}),render:()=>r.jsxDEV(W,{shouldFail:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx",lineNumber:607,columnNumber:17},void 0)};var f,T,M;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(M=(T=y.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var S,E,I;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(E=b.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var $,h,N;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(h=C.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var A,R,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,j,F;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(j=D.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var H,B,P;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />
}`,...(P=(B=v.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,L,z;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code
  }),
  render: () => <AsyncCellDropdownExample shouldFail />
}`,...(z=(L=w.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const oe=["ContextOnHeaderMenuDropDownStory","ContextOnHeaderMenuStory","ContextOnCellMenuDropDownStory","ContextOnCellMenuStory","ContextOnCellAndOnHeaderMenuStory","ContextOnCellMenuAsyncSuccessStory","ContextOnCellMenuAsyncErrorStory"],de=Object.freeze(Object.defineProperty({__proto__:null,ContextOnCellAndOnHeaderMenuStory:D,ContextOnCellMenuAsyncErrorStory:w,ContextOnCellMenuAsyncSuccessStory:v,ContextOnCellMenuDropDownStory:C,ContextOnCellMenuStory:g,ContextOnHeaderMenuDropDownStory:y,ContextOnHeaderMenuStory:b,__namedExportsOrder:oe,default:Y},Symbol.toStringTag,{value:"Module"}));export{de as T};
