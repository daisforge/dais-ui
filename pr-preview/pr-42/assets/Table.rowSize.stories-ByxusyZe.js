import{r as o,d as l}from"./react-D2T61mpp.js";import{c as u}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-DiJAdvEC.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{f as d}from"./Table-CglBQ-O2.js";const p={title:"Локальные компоненты/Table/RowSize",tags:["!autodocs"],parameters:{docs:{page:m}}},S=`
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
`,e={name:"Высота строк",...c({preCode:S,previewSource:"shown"}),render:()=>{const[s]=o.useState(u),a=o.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return l.jsxDEV(d,{tableConfig:{containerStyle:{height:"700px"},rowSize:{showInControl:!0,default:"small",available:["small","medium","big"],onRowSizeChange:i=>{console.debug("rowSize changed:",i)}}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.rowSize/Table.rowSize.stories.tsx",lineNumber:70,columnNumber:7},void 0)}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Высота строк',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      rowSize: {
        showInControl: true,
        default: 'small',
        available: ['small', 'medium', 'big'],
        onRowSizeChange: size => {
          // eslint-disable-next-line no-console
          console.debug('rowSize changed:', size);
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const f=["RowSize"],h=Object.freeze(Object.defineProperty({__proto__:null,RowSize:e,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{h as T};
