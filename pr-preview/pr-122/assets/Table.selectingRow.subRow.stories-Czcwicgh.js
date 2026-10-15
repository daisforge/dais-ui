import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-n8EPqSp1.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-DegEDnTQ.js";import"./vendor-CaK76Snf.js";import"./react-is-Clcustum.js";import"./styled-components-BwCFaRkt.js";import"./@tanstack/react-virtual-BcD1q-CR.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DL7UWS5W.js";import"./IconButton-CHYS7OsY.js";import"./@salutejs/plasma-icons-V_8w2nmt.js";import"./@salutejs/sdds-finai-BV7J2o_s.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-C8ToVq-5.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D90at13y.js";import"./TextField-DtKHUcKj.js";import"./sharedUtilsInputs-DP_4d_Lv.js";import"./AiAgentPopup-DzpYWVjQ.js";import"./TextArea-DWNSOGny.js";import"./sharedUtilsResizable-BuoR3rVw.js";import"./Collapse-DEzgwEVz.js";import"./react-data-grid-n2ePWCSg.js";import"./TableTabs-B8dHQcob.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DPufX4Im.js";import"./@glideappsfinal/glide-data-grid-BxAXJixI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-QzcPISl2.js";import"./ListOfFilters-BWsJeJaB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DCguiR9a.js";import"./EmptyState-BlErGnbS.js";import"./MassActions-CHwRBAEJ.js";import"./Autocomplete-BRRkvWTY.js";const oe={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const te=["SelectingRow"];export{o as SelectingRow,te as __namedExportsOrder,oe as default};
