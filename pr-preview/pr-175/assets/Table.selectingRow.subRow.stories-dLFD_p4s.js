import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-C56_C9UH.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-iheHnHNI.js";import"./vendor-csoeu4t0.js";import"./react-is-Clcustum.js";import"./styled-components-CiaFtu7t.js";import"./@tanstack/react-virtual-BmCgWJBo.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-03Z86Vmi.js";import"./IconButton-MjMVEQyz.js";import"./@salutejs/plasma-icons-CILhqZ3Q.js";import"./@salutejs/sdds-finai-m9LnI6h0.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BUHDtJ8W.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BzLT_6pU.js";import"./TextField-cQ97M_HA.js";import"./sharedUtilsInputs-JyaYWgi3.js";import"./AiAgentPopup-DkQFK3QA.js";import"./TextArea-BWx0l4v0.js";import"./sharedUtilsResizable-BLrxSaLI.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CSdQZIcp.js";import"./react-data-grid-B0devEy1.js";import"./TableTabs-C1MheQAE.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DTd-07VT.js";import"./@glideappsfinal/glide-data-grid-mwxJbNAq.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BphkPQdK.js";import"./ListOfFilters-SCXKa-jP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BbYwd1Eb.js";import"./EmptyState-CdqbsMyg.js";import"./MassActions-DWx2j14b.js";import"./Autocomplete-BMGiBQyi.js";const te={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
`,o={...d({preCode:S,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(p),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),a=e=>e.id!==2,l=e=>e.id==="10001";return c.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:l,rowShowCheckbox:a}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.subRow.stories.tsx",lineNumber:82,columnNumber:7},void 0)}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const re=["SelectingRow"];export{o as SelectingRow,re as __namedExportsOrder,te as default};
