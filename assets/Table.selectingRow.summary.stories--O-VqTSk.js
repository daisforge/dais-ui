import{r as t,j as w}from"./react-DYHuXpTF.js";import{c as R}from"./tableData-DKA5H0bF.js";import S from"./DocStoryTemplate-CN0PPLJ2.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{c as b}from"./Table-Da0nMm5b.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BpmB3NYD.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./Switch-yg_3Nt0z.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./Box-Juih1CKQ.js";import"./Collapse-Cm4Vf7gU.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./react-data-grid-BzGHn5KJ.js";import"./TableTabs-CmYboMCL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BKOQQDDW.js";import"./Autocomplete-DCmEDwiz.js";const Se={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:S}}},h=`
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
`,u={...C({preCode:h,previewSource:"shown"}),name:'Общий Checkbox "Выбрано"',render:()=>{const[m]=t.useState(R),c=t.useMemo(()=>[{key:"id",name:"ID",resizable:!0,subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0}},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),n=t.useState(()=>new Set),[g,l]=n,a=e=>e.id!==2,p=e=>e.id===1;return w.jsx(b,{tableConfig:{containerStyle:{height:"700px"},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0,selecting:{state:n,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowShowCheckbox:a,rowCheckboxDisabled:p,summaryChecked:{checked:({rows:e,selectedRowsIds:o})=>o.size===e.length,indeterminate:({rows:e,selectedRowsIds:o,checkedAll:d})=>e.length>0&&o.size>0&&!d,onChange:({selectedRowsIds:e})=>{l(e)},getCountOfChecked:({selectedRowsIds:e})=>e.size}}},columnConfig:c,rows:m})}};var r,s,i;u.parameters={...u.parameters,docs:{...(r=u.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
