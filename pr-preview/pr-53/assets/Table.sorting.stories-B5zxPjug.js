import{r as o,d as g}from"./react-D2T61mpp.js";import{c as y}from"./tableData-UCfjiBCh.js";import S from"./DocStoryTemplate-DqVM6KeB.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f}from"./Table-0VJnv_iN.js";const b={title:"Локальные компоненты/Table/Sorting/Simple",parameters:{docs:{page:S}},tags:["!autodocs"]},T=`
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
`,e={...d({preCode:T,previewSource:"shown"}),render:()=>{const[i]=o.useState(y),a=o.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:(l,m)=>{const n={Critical:2,High:3,Medium:4,Low:5},c=n[l.priority]??0,p=n[m.priority]??0;return c-p}},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),u=o.useState([]);return g.jsxDEV(f,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:u}},columnConfig:a,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sorting/Table.sorting.stories.tsx",lineNumber:98,columnNumber:7},void 0)}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort'
    }, {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort'
    }, {
      key: 'priority',
      name: 'Priority',
      // custom sorting
      sortingType: (a: Row, b: Row) => {
        const values = {
          Critical: 2,
          High: 3,
          Medium: 4,
          Low: 5
        };
        const aValue = values[a.priority as keyof typeof values] ?? 0;
        const bValue = values[b.priority as keyof typeof values] ?? 0;
        return aValue - bValue;
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort'
    }, {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort'
    }], []);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      sorting: {
        state: sortingStateAndSetter
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const C=["Sorting"],R=Object.freeze(Object.defineProperty({__proto__:null,Sorting:e,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{R as T};
