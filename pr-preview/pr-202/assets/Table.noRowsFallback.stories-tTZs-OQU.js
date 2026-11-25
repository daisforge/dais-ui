import{r as i,b as o}from"./react-UEdzNlUe.js";import c from"./DocStoryTemplate-Blra9LRy.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{c as m}from"./Table-B_dWxauH.js";import{an as b}from"./@salutejs/plasma-icons-CGioElEJ.js";const d={title:"Локальные компоненты/Table/No Rows Fallback/Simple",tags:["!autodocs"],parameters:{docs:{page:c}}},p=`
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
`,e={...u({preCode:p,previewSource:"shown"}),name:"Нет данных",args:{noRowsFallback:!0,columnConfig:[{key:"id",name:o.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",o.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsFallback.stories.tsx",lineNumber:66,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsFallback.stories.tsx",lineNumber:59,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},argTypes:{noRowsFallback:{control:"boolean"}},render:({noRowsFallback:r,columnConfig:t})=>{const[l]=i.useState([]);return o.jsxDEV(m,{tableConfig:{containerStyle:{height:700},noRowsFallback:r},columnConfig:t,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsFallback.stories.tsx",lineNumber:97,columnNumber:7},void 0)}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Нет данных',
  args: {
    noRowsFallback: true,
    columnConfig: [{
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
    }]
  },
  argTypes: {
    noRowsFallback: {
      control: 'boolean'
    }
  },
  render: ({
    noRowsFallback,
    columnConfig
  }) => {
    const [rows] = useState<Row[]>([]);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      noRowsFallback
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const k=["NoRowsFallback"],R=Object.freeze(Object.defineProperty({__proto__:null,NoRowsFallback:e,__namedExportsOrder:k,default:d},Symbol.toStringTag,{value:"Module"}));export{R as T};
