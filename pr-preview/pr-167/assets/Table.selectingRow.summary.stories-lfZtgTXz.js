import{r as t,b as w}from"./react-B60MRyL7.js";import{c as b}from"./tableData-DKA5H0bF.js";import R from"./DocStoryTemplate-CP6YPNYf.js";import{s as S}from"./storySourceDoc-tVKyHcEN.js";import{e as C}from"./Table-BsATGSzR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BjyhLeYF.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";import"./WithTooltip-KJL26V4Q-D-zwhmkZ.js";import"./preload-helper-BUAZWbk6.js";import"./index-Cu4lwwaE.js";import"./index-TL0b5yJv.js";import"./@salutejs/plasma-icons-B_5a5nWb.js";import"./index-DENfdpz2.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-NC4lN6Af.js";import"./Box--F0xJqmw.js";import"./Collapse-CvmNuHeJ.js";import"./utils-DU2v-Kn3.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-uMNe3011.js";import"./TableTabs-CeiuIDe5.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B-sUn46p.js";import"./@glideappsfinal/glide-data-grid-CKeaAZno.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-BwgHAUTB.js";import"./TextField-CGTh6kAa.js";import"./sharedUtilsInputs-B878LDVL.js";import"./TypographyWithAutoTooltip-DZRMakA4.js";import"./Typography-DEV1YILe.js";import"./ListOfFilters-DnpjyhAh.js";import"./FiltersActions-Cp5W4vvP.js";import"./IconButton-SVhgWQko.js";import"./TooltipList-BlFBxf18.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrIt19Sz.js";import"./NumberFormat-0Wv51lwB.js";import"./EmptyState-B_7W5YtK.js";import"./unidentified@3x-CJfTaq4R.js";import"./MassActions-RRA17cRW.js";import"./Autocomplete-CE19l179.js";const Re={title:'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',tags:["!autodocs"],parameters:{docs:{page:R}}},g=`
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
