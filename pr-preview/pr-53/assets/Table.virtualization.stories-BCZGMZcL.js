import{r as o,d as s}from"./react-D2T61mpp.js";import{c as l}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-nM3c5QAh.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DwWe8DVW.js";const p={title:"Локальные компоненты/Table/Virtualization",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
`,e={...u({preCode:d,previewSource:"shown"}),render:()=>{const[a]=o.useState(l),i=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return s.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:i,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.virtualization/Table.virtualization.stories.tsx",lineNumber:83,columnNumber:7},void 0)}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
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
      enableVirtualization: false
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const f=["Virtualization"],T=Object.freeze(Object.defineProperty({__proto__:null,Virtualization:e,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{T};
