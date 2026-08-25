import{r as t,d as i}from"./react-D2T61mpp.js";import{c as h}from"./tableData-UCfjiBCh.js";import g from"./DocStoryTemplate-Amd1X9tE.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as p}from"./Table-Bs48fGjK.js";import{a2 as T}from"./@salutejs/sdds-finai-LXsiMrF6.js";const y={title:"Локальные компоненты/Table/HighlightActiveType",tags:["!autodocs"],parameters:{docs:{page:g}}},b=`
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
`,o={...d({preCode:b,previewSource:"hidden"}),render:()=>{const[u]=t.useState(h),[n,c]=t.useState("row"),m=t.useMemo(()=>[{key:"id",name:i.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:"id"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:61,columnNumber:13},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]),r=t.useRef(null);return t.useEffect(()=>{setTimeout(()=>{var e;(e=r.current)==null||e.selectCell({idx:0,rowIdx:1})},1e3)},[]),i.jsxDEV(i.Fragment,{children:["Выбрать тип выделения",i.jsxDEV(T,{value:n,onChange:e=>c(e),items:["row","cell","disabled"].map(e=>({label:e,value:e}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:101,columnNumber:9},void 0),i.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:109,columnNumber:9},void 0),i.jsxDEV(p,{tableConfig:{containerStyle:{height:700},highlightActiveType:n},refTable:r,columnConfig:m,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:110,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.highlightActiveType/Table.highlightActiveType.stories.tsx",lineNumber:99,columnNumber:7},void 0)}};var s,l,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const f=["HighlightActiveTypeTable"],S=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveTypeTable:o,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{S as T};
