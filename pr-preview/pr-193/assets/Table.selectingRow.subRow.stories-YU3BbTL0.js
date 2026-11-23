import{r as t,b as l}from"./react-UEdzNlUe.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-CB_7t9Cx.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{e as b}from"./Table-D3Mm0M_U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-mKquPocI.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-ChsoKbNC.js";import"./@tanstack/react-virtual-QRzx54Th.js";import"./WithTooltip-KJL26V4Q-C9snA44b.js";import"./preload-helper-C_zUFXUY.js";import"./index-Cu4lwwaE.js";import"./index-Bq810BSt.js";import"./index-B3wCTA8J.js";import"./@sddsjs/sdds_finai-D-rO1ecf.js";import"./@salutejs/sdds-finai-CBl2Z6DX.js";import"./Box-tzqS-Nh4.js";import"./Collapse-Dk4xyTvf.js";import"./utils-BKJAJHmZ.js";import"./constants-Dyz8I1EV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-1TCGvzmd.js";import"./react-data-grid-CYj7lJMP.js";import"./TableTabs-C0CUs4D0.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-006Ssm5C.js";import"./@daisforge/glide-data-grid-CoDMDuM0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DZ1uL2Yj.js";import"./TextField-C-3ULIlg.js";import"./sharedUtilsInputs-DbZh-QRR.js";import"./TypographyWithAutoTooltip-skZwq5lh.js";import"./Typography-5KyJRrIU.js";import"./ListOfFilters-BlDMMOAw.js";import"./FiltersActions-CICr9Sel.js";import"./IconButton-CRMJuemm.js";import"./TooltipList-CTbOsFXH.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_QeVdxzl.js";import"./NumberFormat-B73BQGAM.js";import"./EmptyState-BoffFkaY.js";import"./unidentified@3x-B3KotUFa.js";import"./MassActions-D91OzxuB.js";import"./Autocomplete-CPscEsgX.js";const le={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
