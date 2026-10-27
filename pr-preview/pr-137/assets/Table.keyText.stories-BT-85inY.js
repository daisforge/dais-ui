import{r as o,j as i}from"./react-CAOzMBF_.js";import{c as m}from"./tableData-DVJFoYoT.js";import c from"./DocStoryTemplate-Cf946dgV.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as p}from"./Table-BQHrw1K6.js";const y={title:"Локальные компоненты/Table/KeyText",tags:["!autodocs"],parameters:{docs:{page:c}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),name:"Ключ текст",render:()=>{const[s]=o.useState(m),a=o.useMemo(()=>[{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:u})=>u.id}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return i.jsx(p,{tableConfig:{containerStyle:{height:700},keyText:!0},columnConfig:a,rows:s})}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Ключ текст',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'task',
      name: 'Title',
      keyText: {
        key: 'kek',
        name: 'Ключ - Title',
        renderCell: ({
          row
        }) => row.id
      }
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
      },
      keyText: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const f=["KeyTextTable"],x=Object.freeze(Object.defineProperty({__proto__:null,KeyTextTable:e,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{x as T};
