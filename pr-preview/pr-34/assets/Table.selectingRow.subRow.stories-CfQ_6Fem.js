import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-3mARu1O0.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-B0HDLHqg.js";import"./vendor-CU5ziH9B.js";import"./react-is-Clcustum.js";import"./styled-components-C2-iHwga.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-B8zt8bB8.js";import"./IconButton-DPR_ukLc.js";import"./@salutejs/plasma-icons-D-R_Budg.js";import"./@salutejs/sdds-finai-BQeC6SeV.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BirD9jxl.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ByNVn8-r.js";import"./TextField-D82Varqr.js";import"./sharedUtilsInputs-KeXhuMoe.js";import"./AnalyticalWidget-Hv7UbJHv.js";import"./Collapse-F6iqm9AX.js";import"./react-data-grid-BVC0CKzW.js";import"./TableTabs-DEIYlZJs.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DXpbjhFg.js";import"./ListOfFilters-H5DY2wLA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BOLQfakc.js";import"./EmptyState-B8EUr35z.js";import"./MassActions-CaR4rnCh.js";import"./Autocomplete--u8UpWgB.js";const L={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
