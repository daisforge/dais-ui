import{r as n,d as p}from"./react-D2T61mpp.js";import{c as b}from"./tableData-UCfjiBCh.js";import R from"./DocStoryTemplate-B9ZOV5v0.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{f as C}from"./Table-C3fnYdDS.js";import"./vendor-B2v8DMVc.js";import"./react-is-Clcustum.js";import"./styled-components-Dg4_4Hb_.js";import"./@tanstack/react-virtual-D_A8jBfn.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-EJjArG69.js";import"./IconButton-D_BdFAk2.js";import"./@salutejs/plasma-icons-DXylCXcG.js";import"./@salutejs/sdds-finai-CFeISCe0.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BW2hFEws.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CMFY3u9L.js";import"./TextField-B2aP98fm.js";import"./sharedUtilsInputs-ATFMnCck.js";import"./AnalyticalWidget-BEBEHeKz.js";import"./Collapse-DHO7f23Y.js";import"./react-data-grid-BVgl53SS.js";import"./TableTabs-DMeS3Kym.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Bc9322W9.js";import"./ListOfFilters-BbUZBsP5.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BkRyCqVI.js";import"./EmptyState-B4zxuuoq.js";import"./MassActions-Cztqnj05.js";import"./Autocomplete-Xxk6JLxU.js";const ue={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
`,u={...S({preCode:g,previewSource:"shown"}),name:'Общий Checkbox "Выбрано"',render:()=>{const[c]=n.useState(b),m=n.useMemo(()=>[{key:"id",name:"ID",resizable:!0,subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0}},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),t=n.useState(()=>new Set),[h,l]=t,a=e=>e.id!==2,d=e=>e.id===1;return p.jsxDEV(C,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0,selecting:{state:t,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowShowCheckbox:a,rowCheckboxDisabled:d,summaryChecked:{checked:({rows:e,selectedRowsIds:o})=>o.size===e.length,indeterminate:({rows:e,selectedRowsIds:o,checkedAll:w})=>e.length>0&&o.size>0&&!w,onChange:({selectedRowsIds:e})=>{l(e)},getCountOfChecked:({selectedRowsIds:e})=>e.size}}},columnConfig:m,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.summary.stories.tsx",lineNumber:83,columnNumber:7},void 0)}};var s,r,i;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Общий Checkbox "Выбрано"',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      resizable: true,
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      }
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
    const [_, setSelectedRows] = selectingRowStateAndSetter;
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === 1;
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      resizableColumn: true,
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: [1, 2]
        },
        rowShowCheckbox,
        rowCheckboxDisabled,
        summaryChecked: {
          checked: ({
            rows,
            selectedRowsIds
          }) =>
          // Любая логика для включения Checkbox
          // ...
          selectedRowsIds.size === rows.length,
          indeterminate: ({
            rows,
            selectedRowsIds,
            checkedAll
          }) => {
            // Любая логика для отображения indeterminate у Checkbox
            // ...
            const isIndet = rows.length > 0 && selectedRowsIds.size > 0 && !checkedAll;
            return isIndet;
          },
          onChange: ({
            selectedRowsIds
          }) => {
            // Любая логика для обработки события изменения состояния выбора строки
            // ...
            setSelectedRows(selectedRowsIds);
          },
          getCountOfChecked: ({
            selectedRowsIds
          }) =>
          // Любая логика для отображения количества выбранных строк
          // ...
          selectedRowsIds.size
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(i=(r=u.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const oe=["SelectingRowSummary"];export{u as SelectingRowSummary,oe as __namedExportsOrder,ue as default};
