import{r as t,b as w}from"./react-UEdzNlUe.js";import{c as b}from"./tableData-DKA5H0bF.js";import R from"./DocStoryTemplate-C0WUym9P.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{c as C}from"./Table-DmgNHxje.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-2C5_55Sm.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./WithTooltip-KJL26V4Q-BF3u1lCM.js";import"./preload-helper-CZSX44HQ.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./Switch-DFPex1Sn.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./Box-BOi9y4XS.js";import"./Collapse-x0oUGUsB.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BrITifw3.js";import"./react-data-grid-BbizCO0_.js";import"./TableTabs-D50d6bjv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-49WcSE6j.js";import"./@daisforge/glide-data-grid-BJ4Aa3YT.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DVq71_y6.js";import"./TextField-C3soC6iE.js";import"./sharedUtilsInputs-ClkwfHQU.js";import"./TypographyWithAutoTooltip-CjmFlsPI.js";import"./Typography-B9B0TAuB.js";import"./ListOfFilters-BXR-FESh.js";import"./FiltersActions-GRRqYmwA.js";import"./IconButton-DV8DLcRq.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-nc4UMpNq.js";import"./EmptyState-D6V-mWG6.js";import"./unidentified@3x-C9E9sVoM.js";import"./MassActions-BsNW0YeI.js";import"./Autocomplete-DWI5pJkD.js";const Re={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
`,u={...S({preCode:g,previewSource:"shown"}),name:'Общий Checkbox "Выбрано"',render:()=>{const[m]=t.useState(b),c=t.useMemo(()=>[{key:"id",name:"ID",resizable:!0,subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0}},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),n=t.useState(()=>new Set),[h,l]=n,a=e=>e.id!==2,d=e=>e.id===1;return w.jsxDEV(C,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0,selecting:{state:n,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowShowCheckbox:a,rowCheckboxDisabled:d,summaryChecked:{checked:({rows:e,selectedRowsIds:o})=>o.size===e.length,indeterminate:({rows:e,selectedRowsIds:o,checkedAll:p})=>e.length>0&&o.size>0&&!p,onChange:({selectedRowsIds:e})=>{l(e)},getCountOfChecked:({selectedRowsIds:e})=>e.size}}},columnConfig:c,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.summary.stories.tsx",lineNumber:83,columnNumber:7},void 0)}};var r,s,i;u.parameters={...u.parameters,docs:{...(r=u.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=u.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Se=["SelectingRowSummary"];export{u as SelectingRowSummary,Se as __namedExportsOrder,Re as default};
