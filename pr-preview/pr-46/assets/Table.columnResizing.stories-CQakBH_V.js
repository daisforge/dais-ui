import{r as n,d as a}from"./react-D2T61mpp.js";import{c as l}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-Dt6KH5ne.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{f as g}from"./Table-D4798a1r.js";const p={title:"Локальные компоненты/Table/ColumnResizing",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
`,e={...c({preCode:d,previewSource:"shown"}),name:"Изменение ширины колонки",render:()=>{const[s]=n.useState(l),i=n.useState([]),u=n.useMemo(()=>[{key:"id",name:"ID",resizable:!0,minWidth:200,width:300,maxWidth:500,sortingType:"stringSort"},{key:"task",name:"Title",resizable:!0,minWidth:200,sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort",resizable:!0},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!1}],[]);return a.jsxDEV(g,{tableConfig:{containerStyle:{height:"700px"},columnsControl:{enable:!0,pinnedDefault:["task"]},resizableColumn:!0,sorting:{state:i}},columnConfig:u,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnResizing/Table.columnResizing.stories.tsx",lineNumber:88,columnNumber:7},void 0)}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Изменение ширины колонки',
  render: () => {
    const [rows] = useState(createRows);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      resizable: true,
      minWidth: 200,
      width: 300,
      maxWidth: 500,
      sortingType: 'stringSort'
    }, {
      key: 'task',
      name: 'Title',
      resizable: true,
      minWidth: 200,
      sortingType: 'stringSort'
    }, {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort',
      resizable: true
    }, {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
      resizable: false
    }], []);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      columnsControl: {
        enable: true,
        pinnedDefault: ['task']
      },
      resizableColumn: true,
      sorting: {
        state: sortingStateAndSetter
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const S=["ColumnResizing"],h=Object.freeze(Object.defineProperty({__proto__:null,ColumnResizing:e,__namedExportsOrder:S,default:p},Symbol.toStringTag,{value:"Module"}));export{h as T};
