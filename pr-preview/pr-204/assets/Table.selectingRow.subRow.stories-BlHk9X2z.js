import{r as t,b as p}from"./react-UEdzNlUe.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-B1u7dqTk.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{c as b}from"./Table-CbHVwnkL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./WithTooltip-KJL26V4Q-EsghDtie.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./Switch-qQzmLoyi.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BvdYvZ49.js";import"./react-data-grid-DOd4FWtH.js";import"./TableTabs-D8Dn7Hjz.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-ciLugbIZ.js";import"./TextField-D7c24dZh.js";import"./sharedUtilsInputs-C44yd4VS.js";import"./Typography-CbUXrNRB.js";import"./ListOfFilters-BAMQEU-g.js";import"./FiltersActions-DfAicICl.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-kE1ol754.js";import"./EmptyState-B43KQCqF.js";import"./unidentified@3x-B3LEnvq5.js";import"./MassActions-Dt9VO86v.js";import"./Autocomplete-2PUvk-Tm.js";const ue={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
`,o={...d({preCode:S,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),a=e=>e.id!==2,l=e=>e.id==="10001";return p.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:l,rowShowCheckbox:a}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.subRow.stories.tsx",lineNumber:82,columnNumber:7},void 0)}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const me=["SelectingRow"];export{o as SelectingRow,me as __namedExportsOrder,ue as default};
