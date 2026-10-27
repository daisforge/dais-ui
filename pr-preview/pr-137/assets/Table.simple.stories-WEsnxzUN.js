import{r as t,j as e}from"./react-CAOzMBF_.js";import{c as T}from"./tableData-DVJFoYoT.js";import v from"./DocStoryTemplate-Cf946dgV.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{f as w}from"./Table-BQHrw1K6.js";import{T as m}from"./TextField-DpKf-85P.js";import{rV as k}from"./@salutejs/plasma-icons-Do5ggeDI.js";const j={title:"Локальные компоненты/Table/SimpleTable",tags:["!autodocs"],parameters:{docs:{page:v}}},S=`
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
`,s={...g({preCode:S,previewSource:"shown"}),name:"Simple Table",render:()=>{const[n]=t.useState(T),i=t.useMemo(()=>[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(k,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsx(w,{tableConfig:{containerStyle:{height:700}},columnConfig:i,rows:n})}};function M(n){return`${n.column.key}×${n.row}`}const l={...g({preCode:S,previewSource:"shown"}),name:"MillionCells",render:()=>{const[n,i]=t.useState(5e6),[a,h]=t.useState(30),b=t.useMemo(()=>Array.from({length:n},(o,r)=>r),[n]),x=t.useMemo(()=>{const o=[];for(let r=0;r<a;r+=1){const u=String(r);o.push({key:u,name:u,width:150,resizable:!0,renderCell:M})}return o},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:8},children:["columnsCount",e.jsx(m,{value:a,min:1,width:300,type:"number",onChange:o=>h(+o.target.value)}),"rowsCount",e.jsx(m,{value:n,min:1,width:300,type:"number",onChange:o=>i(+o.target.value)})]}),e.jsx(w,{tableConfig:{containerStyle:{height:"80dvh"},fullScreenEnabled:!0},columnConfig:x,rows:b})]})}};var c,d,C;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(C=(d=s.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var p,y,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const R=["SimpleTable","MillionCells"],D=Object.freeze(Object.defineProperty({__proto__:null,MillionCells:l,SimpleTable:s,__namedExportsOrder:R,default:j},Symbol.toStringTag,{value:"Module"}));export{D as T};
