import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-CGbvb4bP.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DgJhKE0t.js";import"./vendor-DvO6Ud8q.js";import"./react-is-Clcustum.js";import"./styled-components-peerelvn.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-C6NIshpU.js";import"./IconButton-CgOIaK3y.js";import"./@salutejs/plasma-icons-BHcaROEp.js";import"./@salutejs/sdds-finai-DNM8nTh9.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C3gQRkR2.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CTSbJM1M.js";import"./TextField-BH7LVt6d.js";import"./sharedUtilsInputs-BrK1Paqr.js";import"./AnalyticalWidget-CU0fGKHE.js";import"./Collapse-u4wVL0Hd.js";import"./react-data-grid-DHlXR-SI.js";import"./TableTabs-BQcrBoiU.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-tnsqPowb.js";import"./ListOfFilters-jO6wYvaR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B-YDOR27.js";import"./EmptyState-CT6G56J8.js";import"./MassActions-Nk31J562.js";import"./Autocomplete-BSaHYmPm.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[m]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
    }, {
      key: 'task',
      name: 'Title'
    }, {
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'issueType',
      name: 'Issue Type'
    }, {
      key: 'complete',
      name: '% Complete'
    }, {
      key: 'total',
      name: 'Сумма title и priority',
      renderCell: ({
        row
      }) => \`\${row.task} \${row.priority}\`
    }], []);
    return <Table tableConfig={{
      enableVirtualization: false
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const J=["Summary"];export{e as Summary,J as __namedExportsOrder,q as default};
