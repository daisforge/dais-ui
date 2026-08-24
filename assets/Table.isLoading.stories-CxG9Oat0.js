import{r as i,d as o}from"./react-D2T61mpp.js";import{c as d}from"./tableData-UCfjiBCh.js";import m from"./DocStoryTemplate-CASIwyN3.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{S as b}from"./FiltersActions-C1KnNl62.js";import{f}from"./Table-D4FiL9uw.js";const y={title:"Локальные компоненты/Table/IsLoading",tags:["!autodocs"],parameters:{docs:{page:m},screenshot:{skip:!0}}},p=`
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
`,e={...g({preCode:p,previewSource:"shown"}),name:"IsLoading",render:()=>{const[t]=i.useState(d),[n,u]=i.useState(!1),l=i.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(b,{style:{width:"fit-content"},label:n?"Скрыть overlay":"Показать overlay",checked:n,onChange:()=>u(c=>!c)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.isLoading/Table.isLoading.stories.tsx",lineNumber:74,columnNumber:9},void 0),o.jsxDEV(f,{tableConfig:{containerStyle:{height:500},isLoading:{boolean:!0,skeletonRowsCount:5},loadingOverlay:{active:n,showSubtitleDelay:3e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.isLoading/Table.isLoading.stories.tsx",lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.isLoading/Table.isLoading.stories.tsx",lineNumber:73,columnNumber:7},void 0)}};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'IsLoading',
  render: () => {
    const [rows] = useState(createRows);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] = useState(false);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }], []);
    return <>
        <Switch style={{
        width: 'fit-content'
      }} label={isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'} checked={isVisibleLoadingOverlay} onChange={() => setIsVisibleLoadingOverlay(prev => !prev)} />
        <Table tableConfig={{
        containerStyle: {
          height: 500
        },
        isLoading: {
          boolean: true,
          skeletonRowsCount: 5
        },
        loadingOverlay: {
          active: isVisibleLoadingOverlay,
          showSubtitleDelay: 3000,
          subtitle: 'Данные обрабатываются, обычно это занимает не более 10 секунд'
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const v=["IsLoading"],T=Object.freeze(Object.defineProperty({__proto__:null,IsLoading:e,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{T};
