import{r as t,b as l}from"./react-UEdzNlUe.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-DfMfxqA4.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{e as b}from"./Table-J5447vDR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-D2r4jgZf.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./WithTooltip-KJL26V4Q-BRGrnt4v.js";import"./preload-helper-ByAByWgw.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./index-DNoHAM3Q.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./Box-Dwqy9xB3.js";import"./Collapse-CfxT3MfK.js";import"./utils-DSJLiokB.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CWYH4jgn.js";import"./react-data-grid-CAmlt0FZ.js";import"./TableTabs-sXTgrZFv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B-ht5zvk.js";import"./@daisforge/glide-data-grid-BxeGd1ye.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./lodash.isequal-mFNAsUE8.js";import"./sharedUiSearch-CslEffuB.js";import"./TextField-D1vs_4gQ.js";import"./sharedUtilsInputs-vGW80U8K.js";import"./TypographyWithAutoTooltip-C6LiYAcO.js";import"./Typography-BcqUTUcc.js";import"./ListOfFilters-CfZE6HZ4.js";import"./FiltersActions-DvfQMuqi.js";import"./IconButton-Dl3DqcX6.js";import"./TooltipList-CeWvqtLg.js";import"./Combobox-DpIc9uqy.js";import"./NumberFormat--slBuKRg.js";import"./EmptyState-BVqyGup2.js";import"./unidentified@3x-Dft7iYeR.js";import"./MassActions-aqeDoqBV.js";import"./Autocomplete-BQvgClIG.js";const le={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
`,o={...d({preCode:S,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),p=e=>e.id!==2,a=e=>e.id==="10001";return l.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:a,rowShowCheckbox:p}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.subRow.stories.tsx",lineNumber:82,columnNumber:7},void 0)}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
