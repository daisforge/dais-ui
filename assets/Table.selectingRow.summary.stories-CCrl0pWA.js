import{r as n,d as p}from"./react-D2T61mpp.js";import{c as b}from"./tableData-DVJFoYoT.js";import R from"./DocStoryTemplate-Bme21wT9.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{f as C}from"./Table-Dajk0qU1.js";import"./vendor-jKDXUmZd.js";import"./react-is-Clcustum.js";import"./styled-components-C-2FT2Y_.js";import"./@tanstack/react-virtual-BL7Z2DTU.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-ySQOjUky.js";import"./IconButton-C34W8Xlr.js";import"./@salutejs/plasma-icons-mUOaTdkJ.js";import"./@salutejs/sdds-finai-2OaCELfD.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-DGo4h_8X.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CitqhT9G.js";import"./TextField-B2DK8Tlw.js";import"./sharedUtilsInputs-DUggyGWA.js";import"./AiAgentPopup-ez1EOhl_.js";import"./TextArea-DAogKOhb.js";import"./sharedUtilsResizable-BtHRt7CX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-Czo-gPkq.js";import"./react-data-grid-vHXAngDo.js";import"./TableTabs-BR2wpqa_.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CjiQ7HcO.js";import"./@glideappsfinal/glide-data-grid-DyX1mTEK.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Bxu4l5jE.js";import"./ListOfFilters-BMEfS4fM.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BY7tmH8k.js";import"./EmptyState-SKKypKMz.js";import"./MassActions-DgEkGaEh.js";import"./Autocomplete-B5f6t8DA.js";const ie={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
`,u={...S({preCode:g,previewSource:"shown"}),name:'Общий Checkbox "Выбрано"',render:()=>{const[m]=n.useState(b),c=n.useMemo(()=>[{key:"id",name:"ID",resizable:!0,subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0}},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),t=n.useState(()=>new Set),[h,l]=t,a=e=>e.id!==2,d=e=>e.id===1;return p.jsxDEV(C,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0,selecting:{state:t,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowShowCheckbox:a,rowCheckboxDisabled:d,summaryChecked:{checked:({rows:e,selectedRowsIds:o})=>o.size===e.length,indeterminate:({rows:e,selectedRowsIds:o,checkedAll:w})=>e.length>0&&o.size>0&&!w,onChange:({selectedRowsIds:e})=>{l(e)},getCountOfChecked:({selectedRowsIds:e})=>e.size}}},columnConfig:c,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.summary.stories.tsx",lineNumber:83,columnNumber:7},void 0)}};var s,r,i;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(r=u.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const me=["SelectingRowSummary"];export{u as SelectingRowSummary,me as __namedExportsOrder,ie as default};
