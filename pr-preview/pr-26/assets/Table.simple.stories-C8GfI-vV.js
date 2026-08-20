import{r as s,d as e}from"./react-D2T61mpp.js";import{c as S}from"./tableData-UCfjiBCh.js";import x from"./DocStoryTemplate-BF-2hrN9.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{f as g}from"./Table-DhRPQ3-X.js";import{T as m}from"./TextField-B0zq11mB.js";import{rL as v}from"./@salutejs/plasma-icons-Bgg_GZ9Y.js";const N={title:"Локальные компоненты/Table/SimpleTable",tags:["!autodocs"],parameters:{docs:{page:x}}},w=`
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
`,t={...y({preCode:w,previewSource:"shown"}),name:"Simple Table",render:()=>{const[n]=s.useState(S),l=s.useMemo(()=>[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(v,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:64,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:57,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxDEV(g,{tableConfig:{containerStyle:{height:700}},columnConfig:l,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:89,columnNumber:7},void 0)}};function E(n){return`${n.column.key}×${n.row}`}const i={...y({preCode:w,previewSource:"shown"}),name:"MillionCells",render:()=>{const[n,l]=s.useState(5e6),[a,T]=s.useState(30),h=s.useMemo(()=>Array.from({length:n},(o,r)=>r),[n]),k=s.useMemo(()=>{const o=[];for(let r=0;r<a;r+=1){const u=String(r);o.push({key:u,name:u,width:150,resizable:!0,renderCell:E})}return o},[a]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{display:"flex",gap:8},children:["columnsCount",e.jsxDEV(m,{value:a,min:1,width:300,type:"number",onChange:o=>T(+o.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:137,columnNumber:11},void 0),"rowsCount",e.jsxDEV(m,{value:n,min:1,width:300,type:"number",onChange:o=>l(+o.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:145,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:135,columnNumber:9},void 0),e.jsxDEV(g,{tableConfig:{containerStyle:{height:"80dvh"},fullScreenEnabled:!0},columnConfig:k,rows:h},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:154,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.simple/Table.simple.stories.tsx",lineNumber:134,columnNumber:7},void 0)}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Simple Table',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              id
              <IconSber size="xs" color="inherit" />
            </div>
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
      key: 'complete',
      name: '% Complete'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,f,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'MillionCells',
  render: () => {
    const [rowsCount, setRowsCount] = useState(5000000);
    const [columnsCount, setColumnsCount] = useState(30);
    const rows: any[] = useMemo(() => Array.from({
      length: rowsCount
    }, (_, i) => i), [rowsCount]);
    const columns = useMemo(() => {
      const columns: ColumnConfig<any>[] = [];
      for (let i = 0; i < columnsCount; i += 1) {
        const key = String(i);
        columns.push({
          key,
          name: key,
          width: 150,
          resizable: true,
          renderCell: renderCoordinates
        });
      }
      return columns;
    }, [columnsCount]);
    return <>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          columnsCount
          <TextField value={columnsCount} min={1} width={300} type="number" onChange={e => setColumnsCount(+e.target.value)} />
          rowsCount
          <TextField value={rowsCount} min={1} width={300} type="number" onChange={e => setRowsCount(+e.target.value)} />
        </div>

        <Table tableConfig={{
        containerStyle: {
          height: '80dvh'
        },
        fullScreenEnabled: true
      }} columnConfig={columns} rows={rows} />
      </>;
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const j=["SimpleTable","MillionCells"],O=Object.freeze(Object.defineProperty({__proto__:null,MillionCells:i,SimpleTable:t,__namedExportsOrder:j,default:N},Symbol.toStringTag,{value:"Module"}));export{O as T};
