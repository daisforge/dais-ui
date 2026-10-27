import{r as i,j as o}from"./react-CAOzMBF_.js";import c from"./DocStoryTemplate-Cf946dgV.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{f as m}from"./Table-BQHrw1K6.js";import{rV as p}from"./@salutejs/plasma-icons-Do5ggeDI.js";const y={title:"Локальные компоненты/Table/No Rows Fallback/Simple",tags:["!autodocs"],parameters:{docs:{page:c}}},d=`
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
`,e={...u({preCode:d,previewSource:"shown"}),name:"Нет данных",args:{noRowsFallback:!0,columnConfig:[{key:"id",name:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",o.jsx(p,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},argTypes:{noRowsFallback:{control:"boolean"}},render:({noRowsFallback:s,columnConfig:a})=>{const[l]=i.useState([]);return o.jsx(m,{tableConfig:{containerStyle:{height:700},noRowsFallback:s},columnConfig:a,rows:l})}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const f=["NoRowsFallback"],S=Object.freeze(Object.defineProperty({__proto__:null,NoRowsFallback:e,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{S as T};
