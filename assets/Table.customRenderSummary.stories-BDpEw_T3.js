import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Ct7n8Z2-.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CfO5bG1x.js";import"./vendor-Bjazpsej.js";import"./react-is-Clcustum.js";import"./styled-components-CcFBncWN.js";import"./@tanstack/react-virtual-CjXe7f87.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CrVXuaPL.js";import"./IconButton-zjaR6XE8.js";import"./@salutejs/plasma-icons-C2g29ePN.js";import"./@salutejs/sdds-finai-BWvk-VXZ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-Cc5cl8nn.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-1AoeLGbB.js";import"./TextField-ChmPcxhj.js";import"./sharedUtilsInputs-B_qH41VT.js";import"./AnalyticalWidget-D4iV3LDf.js";import"./Collapse-BlBc-Od7.js";import"./react-data-grid-CVHCJ5d_.js";import"./TableTabs-DNI1kDhd.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ja8yvnfy.js";import"./ListOfFilters-DyFPVz6p.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C2i8gTJC.js";import"./EmptyState-CogiwdGD.js";import"./MassActions-Dme6CKUh.js";import"./Autocomplete-CXBWXJEC.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const K=["Summary"];export{e as Summary,K as __namedExportsOrder,J as default};
