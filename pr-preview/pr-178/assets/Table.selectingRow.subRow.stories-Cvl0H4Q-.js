import{r as t,b as l}from"./react-B60MRyL7.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-CkkSfJnP.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{e as b}from"./Table-mS3yBKw8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-XfTeUJpE.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-D98J-t6t.js";import"./@tanstack/react-virtual-x3DCBAvN.js";import"./WithTooltip-KJL26V4Q-DjtuYyC3.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-DOrxotJ8.js";import"./@salutejs/plasma-icons-DZ_qGP0a.js";import"./index-CFmWNdNb.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-D8xS8sHk.js";import"./Box-QuskhUSb.js";import"./Collapse-CN78cPJP.js";import"./utils-DKVFVmUS.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CbKJ8Xc_.js";import"./TableTabs-DLlWKgNM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Ci75rTFY.js";import"./@glideappsfinal/glide-data-grid-BqXwzbnk.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-CHBPekjk.js";import"./TextField-CBiCiUMp.js";import"./sharedUtilsInputs-Ujbxbbaa.js";import"./TypographyWithAutoTooltip-CQBksfgh.js";import"./Typography-BCWCJaUP.js";import"./ListOfFilters-j_YZsInD.js";import"./FiltersActions-B9lffWVe.js";import"./IconButton-CYvWJ9E3.js";import"./TooltipList-Cutfk6au.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CLyIj3Wh.js";import"./NumberFormat-DOwy79Y_.js";import"./EmptyState-UM83DCUu.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-BE2sZqJw.js";import"./Autocomplete-D6CK_f1R.js";const le={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
