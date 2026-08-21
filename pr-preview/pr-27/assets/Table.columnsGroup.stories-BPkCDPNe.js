import{r as n,d as i}from"./react-D2T61mpp.js";import{c,d as r}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-CrulLpbR.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{f as d}from"./Table-OSsgTKt3.js";const g={title:"Локальные компоненты/Table/ColumnsGrouping",tags:["!autodocs"],parameters:{docs:{page:m}},args:{headerTreeLvl:Object.keys(r)[0]},argTypes:{headerTreeLvl:{description:"Уровни вложенности шапки таблицы",control:{type:"radio"},options:Object.keys(r)}}},f=`
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
`,e={...p({preCode:f,previewSource:"shown"}),args:{headerTreeLvl:"lvl3"},name:"Columns grouping",render:({headerTreeLvl:o})=>{const[l]=n.useState(c),u=n.useMemo(()=>[...r[o]??[]],[o]);return i.jsxDEV(d,{tableConfig:{containerStyle:{height:700},columnsControl:{enable:!0},resizableColumn:!0},columnConfig:u,rows:l},o,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.columnsGrouping/Table.columnsGroup.stories.tsx",lineNumber:70,columnNumber:7},void 0)}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  args: {
    headerTreeLvl: 'lvl3'
  },
  name: 'Columns grouping',
  render: ({
    headerTreeLvl
  }) => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(() => [...(dataObj[headerTreeLvl] ?? [])], [headerTreeLvl]);
    return <Table key={headerTreeLvl} tableConfig={{
      containerStyle: {
        height: 700
      },
      columnsControl: {
        enable: true
      },
      resizableColumn: true
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const b=["SimpleTable"],y=Object.freeze(Object.defineProperty({__proto__:null,SimpleTable:e,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{y as T};
