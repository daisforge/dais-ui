import{r as o,j as i}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import l from"./DocStoryTemplate-Cf946dgV.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BQHrw1K6.js";const p={title:"Локальные компоненты/Table/Virtualization",tags:["!autodocs"],parameters:{docs:{page:l}}},f=`
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
`,e={...u({preCode:f,previewSource:"shown"}),render:()=>{const[a]=o.useState(m),s=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"tr1",name:"TR"},{key:"complete",name:"% Complete"}],[]);return i.jsx(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:a})}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const y=["Virtualization"],T=Object.freeze(Object.defineProperty({__proto__:null,Virtualization:e,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{T};
