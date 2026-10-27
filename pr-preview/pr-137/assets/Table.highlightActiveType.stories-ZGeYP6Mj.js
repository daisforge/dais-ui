import{r as n,j as t}from"./react-CAOzMBF_.js";import{c as p}from"./tableData-DVJFoYoT.js";import g from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as y}from"./Table-BQHrw1K6.js";import{a3 as f}from"./@salutejs/sdds-finai-CKhMjg07.js";const h={title:"Локальные компоненты/Table/HighlightActiveType",tags:["!autodocs"],parameters:{docs:{page:g}}},T=`
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
`,o={...d({preCode:T,previewSource:"hidden"}),render:()=>{const[u]=n.useState(p),[i,c]=n.useState("row"),m=n.useMemo(()=>[{key:"id",name:t.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:"id"})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),r=n.useRef(null);return n.useEffect(()=>{setTimeout(()=>{var e;(e=r.current)==null||e.selectCell({idx:0,rowIdx:1})},1e3)},[]),t.jsxs(t.Fragment,{children:["Выбрать тип выделения",t.jsx(f,{value:i,onChange:e=>c(e),items:["row","cell","disabled"].map(e=>({label:e,value:e}))}),t.jsx("br",{}),t.jsx(y,{tableConfig:{containerStyle:{height:700},highlightActiveType:i},refTable:r,columnConfig:m,rows:u})]})}};var s,l,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'hidden'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              id
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
    const refTable = useRef<DataGridHandle>(null);
    useEffect(() => {
      setTimeout(() => {
        refTable.current?.selectCell({
          idx: 0,
          rowIdx: 1
        });
      }, 1000);
    }, []);
    return <>
        Выбрать тип выделения
        <Select value={highlightActiveType} onChange={v => setHighlightActiveType(v as HighlightActiveType)} items={['row', 'cell', 'disabled'].map(i => ({
        label: i,
        value: i
      }))} />
        <br />
        <Table tableConfig={{
        containerStyle: {
          height: 700
        },
        highlightActiveType
      }} refTable={refTable} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const b=["HighlightActiveTypeTable"],k=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveTypeTable:o,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{k as T};
