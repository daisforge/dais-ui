import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-BF-2hrN9.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-DhRPQ3-X.js";import"./vendor-CxqVO1eN.js";import"./react-is-Clcustum.js";import"./styled-components--DGtfFZ_.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BB7wGjGo.js";import"./IconButton-IIyNEnki.js";import"./@salutejs/plasma-icons-Bgg_GZ9Y.js";import"./@salutejs/sdds-finai-O6aB6XRK.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-Dq7DOKe0.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-_3jV5Wqs.js";import"./TextField-B0zq11mB.js";import"./sharedUtilsInputs-BCuGArux.js";import"./AnalyticalWidget-Cemolxg4.js";import"./Collapse-DcE9k8Sk.js";import"./react-data-grid-C6YLd9u2.js";import"./TableTabs-BFfCJPwv.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-xbNKTiYm.js";import"./ListOfFilters-BoOfB_Ye.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D87OJDP1.js";import"./EmptyState-D0DIF487.js";import"./MassActions-Phu5kWIJ.js";import"./Autocomplete-CUsXLTin.js";const L={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
`,o={...d({preCode:S,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(p),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),a=e=>e.id!==2,l=e=>e.id==="10001";return c.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:l,rowShowCheckbox:a}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.subRow.stories.tsx",lineNumber:82,columnNumber:7},void 0)}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'issueType',
      name: 'issue',
      subRow: {
        keyOfColumnInSubRow: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === '10001';
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      resizableColumn: true,
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: [1, 2]
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Q=["SelectingRow"];export{o as SelectingRow,Q as __namedExportsOrder,L as default};
