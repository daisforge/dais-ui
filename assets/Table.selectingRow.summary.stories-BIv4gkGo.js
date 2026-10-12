import{r as n,d as p}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import R from"./DocStoryTemplate-D0Pi0Ieo.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{f as C}from"./Table-DaRv6zK8.js";import"./vendor-By2mUyvN.js";import"./react-is-Clcustum.js";import"./styled-components-BPB167xT.js";import"./@tanstack/react-virtual-D5gG3S4Y.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CTR3Fm8A.js";import"./IconButton-CTpYu9_1.js";import"./@salutejs/plasma-icons-BcMtTKus.js";import"./@salutejs/sdds-finai-DyBnscko.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-wfCbPX6f.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BAebgheD.js";import"./TextField-DUnsPpPp.js";import"./sharedUtilsInputs-C-L8Cndb.js";import"./AiAgentPopup-C45Hk4IG.js";import"./TextArea-CFK6o8G3.js";import"./sharedUtilsResizable-Cjft9ACi.js";import"./Collapse-BrQHV_dN.js";import"./react-data-grid-DlRlWyaC.js";import"./TableTabs-BYpO7zOG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DnW94cb9.js";import"./@glideappsfinal/glide-data-grid-C-fDNxVh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BK2O0N_0.js";import"./ListOfFilters-D4S71X7u.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DY47eufi.js";import"./EmptyState-Cqx44C3J.js";import"./MassActions-DLMB1J6K.js";import"./Autocomplete-L9U2-Hkg.js";const re={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
}`,...(i=(r=u.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const ie=["SelectingRowSummary"];export{u as SelectingRowSummary,ie as __namedExportsOrder,re as default};
