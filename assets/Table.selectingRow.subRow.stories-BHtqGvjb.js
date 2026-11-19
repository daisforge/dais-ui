import{r as t,j as l}from"./react-DNGZQ4GM.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-CIjOxglH.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{e as S}from"./Table-DkS74_Ap.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dp5lOscd.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BVeFqQYb.js";import"./@tanstack/react-virtual-YDfxzYL3.js";import"./WithTooltip-KJL26V4Q-D6M4H-sn.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-hXr06AUZ.js";import"./@salutejs/plasma-icons-Cqq3zXio.js";import"./index-0WdmXQbr.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-Cnm6FkwI.js";import"./Box-BKkW6WAc.js";import"./Collapse-C5wWRaBU.js";import"./utils-D8WPHrZl.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CdTfwxrA.js";import"./TableTabs-B4-ktLDB.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DtQPfSll.js";import"./@glideappsfinal/glide-data-grid-S2MyQhYl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B7rBkxde.js";import"./TextField-6naKsMBN.js";import"./sharedUtilsInputs-C0_NRSp2.js";import"./TypographyWithAutoTooltip-Cju-Nu1y.js";import"./Typography-BjVh6YV9.js";import"./ListOfFilters-B1s2HaSi.js";import"./FiltersActions-U8FmEHl2.js";import"./IconButton-DkyAo8ue.js";import"./TooltipList-BVqkwDIx.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CgEbMqyz.js";import"./NumberFormat-BljT1DEp.js";import"./EmptyState-BmKRlSr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3GAnQXt.js";import"./Autocomplete-jc_g5b5e.js";const le={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},b=`
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
`,o={...d({preCode:b,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),p=e=>e.id!==2,a=e=>e.id==="10001";return l.jsx(S,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:a,rowShowCheckbox:p}},columnConfig:u,rows:i})}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const ce=["SelectingRow"];export{o as SelectingRow,ce as __namedExportsOrder,le as default};
