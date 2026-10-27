import{r as n,d as p}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import R from"./DocStoryTemplate-zj6qwwHt.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{f as C}from"./Table-CZMNYuQe.js";import"./vendor-DyX3yqNp.js";import"./react-is-Clcustum.js";import"./styled-components-ccjJug2H.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CHnGKLvF.js";import"./IconButton-B6fBl0RH.js";import"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./@salutejs/sdds-finai-BZMI6rrq.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DQxdQErP.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D-OropPv.js";import"./TextField-B06lPu0j.js";import"./sharedUtilsInputs-C4q_4wW6.js";import"./AiAgentPopup-BMtv-lao.js";import"./TextArea-DEHVnrFs.js";import"./sharedUtilsResizable-Blk5Lffw.js";import"./Collapse-CRdO4IOl.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-9JF0xyYS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BKnG5Y7Q.js";import"./@glideappsfinal/glide-data-grid-DnsAjn7G.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BwAIJ8LG.js";import"./ListOfFilters-DJ5D-8FQ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C1AZtyWa.js";import"./EmptyState-D-0LAguT.js";import"./MassActions-CWFlHe5c.js";import"./Autocomplete-Dx-Tpj-_.js";const re={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
