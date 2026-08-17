import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-B5vw54Tl.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-1Tfpc0dH.js";import"./vendor-DAeWXVFZ.js";import"./react-is-Clcustum.js";import"./styled-components-Dv4eU0M2.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BAO4f8xk.js";import"./IconButton-DwHugSoI.js";import"./@salutejs/plasma-icons-DT_ZNXTc.js";import"./@salutejs/sdds-finai-BgKKvavs.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BKj8eomO.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Cnr41X_W.js";import"./TextField-Cy2yQ6kB.js";import"./sharedUtilsInputs-DwXaRU5M.js";import"./AnalyticalWidget-DSQoVeSt.js";import"./Collapse-Cm7v2G0B.js";import"./react-data-grid-BsdX0Dj6.js";import"./TableTabs-Bhx9_QRR.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-_JgDoTdO.js";import"./ListOfFilters-LYTZ3V_l.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ktP3G9r6.js";import"./EmptyState-9NF6aOUa.js";import"./MassActions-fQFLXngd.js";import"./Autocomplete-DEpORJTX.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
