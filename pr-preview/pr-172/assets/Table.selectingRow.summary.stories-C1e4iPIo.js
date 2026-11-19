import{r as t,b as w}from"./react-UEdzNlUe.js";import{c as b}from"./tableData-DKA5H0bF.js";import R from"./DocStoryTemplate-BT387RgP.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{e as C}from"./Table-BppiMsXu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DnY5x8t2.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C2sulCCv.js";import"./@tanstack/react-virtual-BA3RmMS7.js";import"./WithTooltip-KJL26V4Q-Cluo7wsc.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-BS0iAW2I.js";import"./index-BX5D65Tl.js";import"./@sddsjs/sdds_finai-D-xd8Ig6.js";import"./@salutejs/sdds-finai-2QW4XiOx.js";import"./Box-CmkBCCp8.js";import"./Collapse-cxu7l_pA.js";import"./utils-NDBGknB_.js";import"./constants-DTh3jAtl.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-67FHeKcG.js";import"./react-data-grid-gn-LnSw-.js";import"./TableTabs-CfJtCWr8.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dc6dleod.js";import"./@glideappsfinal/glide-data-grid-2J2Wx1jC.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-D5RtHXQZ.js";import"./sharedUiSearch-CoeTfsOr.js";import"./TextField-DXOe7TwE.js";import"./sharedUtilsInputs-BEEVjYrl.js";import"./TypographyWithAutoTooltip-DyfRXyRD.js";import"./Typography-CTBLgXaA.js";import"./ListOfFilters-CClYEnvR.js";import"./FiltersActions-41lXv-ok.js";import"./IconButton-pD4wRJBG.js";import"./TooltipList-DyLslyRz.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DkYs5ioR.js";import"./NumberFormat-KGmYOFb9.js";import"./EmptyState-Clcxu70W.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-BUdib6KL.js";import"./Autocomplete-BHfvRrfM.js";const Se={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
}`,...(i=(s=u.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Ce=["SelectingRowSummary"];export{u as SelectingRowSummary,Ce as __namedExportsOrder,Se as default};
