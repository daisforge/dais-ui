import{r as o,j as g}from"./react-CAOzMBF_.js";import{c as y}from"./tableData-DVJFoYoT.js";import S from"./DocStoryTemplate-Cf946dgV.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f}from"./Table-BQHrw1K6.js";const T={title:"Локальные компоненты/Table/Sorting/Simple",parameters:{docs:{page:S}},tags:["!autodocs"]},C=`
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
`,e={...d({preCode:C,previewSource:"shown"}),render:()=>{const[i]=o.useState(y),a=o.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:(c,m)=>{const t={Critical:2,High:3,Medium:4,Low:5},l=t[c.priority]??0,p=t[m.priority]??0;return l-p}},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),u=o.useState([]);return g.jsx(f,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:u}},columnConfig:a,rows:i})}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["Sorting"],v=Object.freeze(Object.defineProperty({__proto__:null,Sorting:e,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{v as T};
