import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-i_n4MzU0.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-C0Bl8Oc4.js";import"./vendor-BdLrx4xP.js";import"./react-is-Clcustum.js";import"./styled-components-CTUN0MzM.js";import"./@tanstack/react-virtual-fAMsGsuS.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-C-x6J_Wr.js";import"./IconButton-DDIaO14-.js";import"./@salutejs/plasma-icons-Cg4Kk8KP.js";import"./@salutejs/sdds-finai-B7AZSacY.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-C6ISqs0d.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-67kQGb5v.js";import"./TextField-kBSu_94L.js";import"./sharedUtilsInputs-DkVfFsXj.js";import"./AnalyticalWidget-B7Nm-duK.js";import"./Collapse-DOEQGpdO.js";import"./react-data-grid-D-KN0ef4.js";import"./TableTabs-Mn1sla0h.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CISvImOT.js";import"./ListOfFilters-YHHkpvhm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C5Gr1eRd.js";import"./EmptyState-gJMnoHHF.js";import"./MassActions-nuCwql0J.js";import"./Autocomplete-D8CIOflW.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
