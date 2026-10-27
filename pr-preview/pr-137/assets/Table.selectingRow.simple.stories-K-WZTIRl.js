import{r as t,j as u}from"./react-CAOzMBF_.js";import{c as l}from"./tableData-DVJFoYoT.js";import m from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as p}from"./Table-BQHrw1K6.js";const S={title:"Локальные компоненты/Table/SelectingRow/Простой пример",tags:["!autodocs"],parameters:{docs:{page:m}}},w=`
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
`,o={...d({preCode:w,previewSource:"shown"}),name:"Простой пример",render:()=>{const[a]=t.useState(l),i=t.useMemo(()=>[{key:"id",name:"ID"},{key:"issueType",name:"issue"},{key:"developer",name:"Developer"}],[]),c=t.useState(()=>new Set);return u.jsx(p,{tableConfig:{containerStyle:{height:"700px"},selecting:{rowCheckboxDisabled:e=>e.id===2,rowShowCheckbox:e=>e.id!==3,state:c,rowKeyGetter:e=>e.id+e.issueType}},columnConfig:i,rows:a})}};var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простой пример',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'issueType',
      name: 'issue'
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      selecting: {
        rowCheckboxDisabled: row => row.id === 2,
        rowShowCheckbox: row => row.id !== 3,
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const g=["SelectingRow"],R=Object.freeze(Object.defineProperty({__proto__:null,SelectingRow:o,__namedExportsOrder:g,default:S},Symbol.toStringTag,{value:"Module"}));export{R as S};
