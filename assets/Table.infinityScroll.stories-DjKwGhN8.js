import{r,d as g}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-ote7_b2_.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{f as S}from"./Table-C5U8j0VY.js";const T={title:"Локальные компоненты/Table/InfinityScroll",tags:["!autodocs"],parameters:{docs:{page:w},screenshot:{skip:!0}}},b=`
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
`;function h(s){const{indexForStart:n=0,countOfNewRows:i=200,timeout:e=1e3}=s??{};return new Promise(t=>{const a=m(n,i);setTimeout(()=>t(a),e)})}const o={...y({preCode:b,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"}],[]),[n,i]=r.useState(()=>m(0,50)),[e,t]=r.useState(!1),a=r.useCallback(async d=>{if(e)return;t(!0);const f=await h({indexForStart:d.length,countOfNewRows:50,timeout:2e3});i(p=>[...p,...f]),t(!1)},[e]);return g.jsxDEV(S,{tableConfig:{containerStyle:{height:700},infinityScroll:{scrollThreshold:50,onTrigger:a,isLoading:e,hasMore:n.length<6e3}},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.infinityScroll/Table.infinityScroll.stories.tsx",lineNumber:120,columnNumber:7},void 0)}};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columns: readonly ColumnConfig<Row>[] = useMemo(() => [{
      key: 'id',
      name: 'ID'
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
      key: 'developer',
      name: 'Developer'
    }], []);
    const [rows, setRows] = useState(() => createRows(0, 50));
    const [isLoading, setIsLoading] = useState(false);
    const onTrigger = useCallback(async (rows: Row[]) => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      const newData = await loadMoreRows<Row>({
        indexForStart: rows.length,
        countOfNewRows: 50,
        timeout: 2000
      });
      setRows(prev => [...prev, ...newData]);
      setIsLoading(false);
    }, [isLoading]);
    return <Table tableConfig={{
      containerStyle: {
        height: 700
      },
      infinityScroll: {
        scrollThreshold: 50,
        onTrigger,
        isLoading,
        hasMore: rows.length < 6000
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const k=["InfinityScroll"],v=Object.freeze(Object.defineProperty({__proto__:null,InfinityScroll:o,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{v as T};
