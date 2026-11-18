import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-BYIkUkCL.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-u9qHjX1M.js";import"./vendor-BmL46prH.js";import"./react-is-Clcustum.js";import"./styled-components-CyOceNjt.js";import"./@tanstack/react-virtual-CEJoHVNI.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Dyd3IBCR.js";import"./IconButton-DnjPgYWr.js";import"./@salutejs/plasma-icons-DbUQJRbT.js";import"./@salutejs/sdds-finai-B4e86Xc-.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-6kvC9zOe.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-HfshwQ72.js";import"./TextField-B5y9QDFM.js";import"./sharedUtilsInputs-BvS9K6em.js";import"./AiAgentPopup-Bf5wrkF2.js";import"./TextArea-Y9HRalI1.js";import"./sharedUtilsResizable-ClSuuCqy.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-BiF_WNR3.js";import"./react-data-grid-DB-YTYp0.js";import"./TableTabs-U-NZ5xBR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DMe8iO05.js";import"./@glideappsfinal/glide-data-grid-DrEf5ZRY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-M0RFhQCH.js";import"./ListOfFilters-Dt2RHk5_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-hkp5RqES.js";import"./EmptyState-CdAMnbo3.js";import"./MassActions-BU_SJFeA.js";import"./Autocomplete-DbJ6Z6Fj.js";const te={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
