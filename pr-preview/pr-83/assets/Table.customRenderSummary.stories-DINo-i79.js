import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CX_3ca1d.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-PFy1RJPq.js";import"./vendor-BRS_RCGD.js";import"./react-is-Clcustum.js";import"./styled-components-BDsUHzM4.js";import"./@tanstack/react-virtual-BOKlFDDB.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CwmuHYUi.js";import"./IconButton-BuxJaALe.js";import"./@salutejs/plasma-icons-CqpItof1.js";import"./@salutejs/sdds-finai-C6-yEwaw.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DG6oaulO.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bf8EInUp.js";import"./TextField-DxUQGUUF.js";import"./sharedUtilsInputs-Cpdi3IZg.js";import"./AnalyticalWidget-Dleh_a8h.js";import"./Collapse-DhjFMKd4.js";import"./react-data-grid-WuC0WKMx.js";import"./TableTabs-P1b9LQ5B.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DM0M1j-Z.js";import"./ListOfFilters-DJjBwYUa.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CZOiG4cL.js";import"./EmptyState-l03kNJ6a.js";import"./MassActions-BhTP7mg9.js";import"./Autocomplete-BVpeESDb.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
