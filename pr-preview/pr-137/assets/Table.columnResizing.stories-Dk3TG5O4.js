import{r as n,j as a}from"./react-CAOzMBF_.js";import{c as l}from"./tableData-DVJFoYoT.js";import m from"./DocStoryTemplate-Cf946dgV.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{f as p}from"./Table-BQHrw1K6.js";const g={title:"Локальные компоненты/Table/ColumnResizing",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
`,e={...c({preCode:d,previewSource:"shown"}),name:"Изменение ширины колонки",render:()=>{const[s]=n.useState(l),i=n.useState([]),u=n.useMemo(()=>[{key:"id",name:"ID",resizable:!0,minWidth:200,width:300,maxWidth:500,sortingType:"stringSort"},{key:"task",name:"Title",resizable:!0,minWidth:200,sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort",resizable:!0},{key:"priority",name:"Priority",sortingType:"stringSort",resizable:!1}],[]);return a.jsx(p,{tableConfig:{containerStyle:{height:"700px"},columnsControl:{enable:!0,pinnedDefault:["task"]},resizableColumn:!0,sorting:{state:i}},columnConfig:u,rows:s})}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const S=["ColumnResizing"],h=Object.freeze(Object.defineProperty({__proto__:null,ColumnResizing:e,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{h as T};
