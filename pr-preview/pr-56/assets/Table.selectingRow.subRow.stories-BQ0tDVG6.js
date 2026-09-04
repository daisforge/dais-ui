import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import w from"./DocStoryTemplate-Ch8Ys4K9.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-DiZTK8vW.js";import"./vendor-Ypy2gq2s.js";import"./react-is-Clcustum.js";import"./styled-components-CYsj_fkL.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BfQRxBrO.js";import"./IconButton-CbD3YLCU.js";import"./@salutejs/plasma-icons-DVXBUOYV.js";import"./@salutejs/sdds-finai-vQ-sjrqe.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-Br1gGEiI.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BLx8jCVW.js";import"./TextField-BST07fwN.js";import"./sharedUtilsInputs-Cz3vbSor.js";import"./AnalyticalWidget-CJOC3EI5.js";import"./Collapse-CBmK7-8Z.js";import"./react-data-grid-BW5xANyX.js";import"./TableTabs-DyahmA2h.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BxCMG2Ni.js";import"./ListOfFilters-DXgIForT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D27L1Hl9.js";import"./EmptyState-TDZLcdeB.js";import"./MassActions-MZvu7lQb.js";import"./Autocomplete-wxUkMkak.js";const L={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
