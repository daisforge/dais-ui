import{r as t,j as o}from"./react-CAOzMBF_.js";import{c as d}from"./tableData-DVJFoYoT.js";import m from"./DocStoryTemplate-B68YIrJ_.js";import{s as g}from"./storySourceDoc-tVKyHcEN.js";import{S as y}from"./FiltersActions-5d-NjgVi.js";import{f as p}from"./Table-Bvlo4DK2.js";const f={title:"Локальные компоненты/Table/IsLoading",tags:["!autodocs"],parameters:{docs:{page:m},screenshot:{skip:!0,skipReason:"Пробел покрытия: пока нет фиксированного состояния загрузчика и проверок в play"}}},b=`
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
`,e={...g({preCode:b,previewSource:"shown"}),name:"IsLoading",render:()=>{const[i]=t.useState(d),[n,a]=t.useState(!1),l=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"}],[]);return o.jsxs(o.Fragment,{children:[o.jsx(y,{style:{width:"fit-content"},label:n?"Скрыть overlay":"Показать overlay",checked:n,onChange:()=>a(c=>!c)}),o.jsx(p,{tableConfig:{containerStyle:{height:500},isLoading:{boolean:!0,skeletonRowsCount:5},loadingOverlay:{active:n,showSubtitleDelay:3e3,subtitle:"Данные обрабатываются, обычно это занимает не более 10 секунд"}},columnConfig:l,rows:i})]})}};var u,s,r;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const C=["IsLoading"],k=Object.freeze(Object.defineProperty({__proto__:null,IsLoading:e,__namedExportsOrder:C,default:f},Symbol.toStringTag,{value:"Module"}));export{k as T};
