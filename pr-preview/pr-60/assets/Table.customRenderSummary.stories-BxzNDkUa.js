import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Ba5kH-9W.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CvvYSmQS.js";import"./vendor-DyskUa3R.js";import"./react-is-Clcustum.js";import"./styled-components-Dk5h8vLx.js";import"./@tanstack/react-virtual-C-_FPY_A.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-B6B7FuTp.js";import"./IconButton-CL8_KbII.js";import"./@salutejs/plasma-icons-DtkePaSU.js";import"./@salutejs/sdds-finai-D2mCi4R2.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-r6DIgRyT.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BBCb41Bg.js";import"./TextField-BrvaaFR-.js";import"./sharedUtilsInputs-BtXKx1xe.js";import"./AnalyticalWidget-BQmFY68y.js";import"./Collapse-BPaM4yD6.js";import"./react-data-grid-COE9myPN.js";import"./TableTabs-B5-_IRPI.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-tdAnuCbT.js";import"./ListOfFilters-M0zDez6D.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BT9ft-Ip.js";import"./EmptyState-Dq5R8LaK.js";import"./MassActions-CKhJJXtL.js";import"./Autocomplete-DYFSEIr8.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
