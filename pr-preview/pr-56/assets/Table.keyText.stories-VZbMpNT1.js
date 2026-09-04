import{r as o,d as u}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import l from"./DocStoryTemplate-Ch8Ys4K9.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{f as p}from"./Table-DiZTK8vW.js";const y={title:"Локальные компоненты/Table/KeyText",tags:["!autodocs"],parameters:{docs:{page:l}}},d=`
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
`,e={...c({preCode:d,previewSource:"shown"}),name:"Ключ текст",render:()=>{const[s]=o.useState(m),a=o.useMemo(()=>[{key:"task",name:"Title",keyText:{key:"kek",name:"Ключ - Title",renderCell:({row:i})=>i.id}},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return u.jsxDEV(p,{tableConfig:{containerStyle:{height:700},keyText:!0},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.keyText/Table.keyText.stories.tsx",lineNumber:77,columnNumber:7},void 0)}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const T=["KeyTextTable"],x=Object.freeze(Object.defineProperty({__proto__:null,KeyTextTable:e,__namedExportsOrder:T,default:y},Symbol.toStringTag,{value:"Module"}));export{x as T};
