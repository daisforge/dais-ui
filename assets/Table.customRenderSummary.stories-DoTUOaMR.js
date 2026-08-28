import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-CI6eoUuG.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BeV-EcNh.js";import"./vendor-H482Df_i.js";import"./react-is-Clcustum.js";import"./styled-components-kNohFqZo.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-DpX5bnfb.js";import"./IconButton-Dfbyl-9e.js";import"./@salutejs/plasma-icons-Co7qeio2.js";import"./@salutejs/sdds-finai-0jwSobSd.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-DbCY1Z9_.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DsNuXb8L.js";import"./TextField-DX72kUcf.js";import"./sharedUtilsInputs-lcFqwZca.js";import"./AnalyticalWidget-DSB49XD8.js";import"./Collapse-iz8ikY5l.js";import"./react-data-grid-DCPnnyYy.js";import"./TableTabs-D0zJQre4.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CdHJx3AN.js";import"./ListOfFilters-h0_QR3gb.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D2Fp1WvL.js";import"./EmptyState-B9Pqf4Zj.js";import"./MassActions-LD6Xs8Wo.js";import"./Autocomplete-BY4gUMXJ.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
