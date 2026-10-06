import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-JszTZfrB.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DeGegnP_.js";import"./vendor-DnzZ9UTZ.js";import"./react-is-Clcustum.js";import"./styled-components-Duv-lZes.js";import"./@tanstack/react-virtual-DuiQXsFz.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Cwc0W2vh.js";import"./IconButton-BB0DmyOh.js";import"./@salutejs/plasma-icons-CBo6sATl.js";import"./@salutejs/sdds-finai-BZdsFt-V.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-Cd1k1OL_.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B2j6LtZn.js";import"./TextField-BJCUtEBi.js";import"./sharedUtilsInputs-0v1fRA_K.js";import"./AnalyticalWidget-CybUWx0S.js";import"./Collapse-DVtw0dkZ.js";import"./react-data-grid-C4_2LtGD.js";import"./TableTabs-B-wJKzTx.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-QKSWR09t.js";import"./ListOfFilters-hTa6q2LU.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ugXt7Wlh.js";import"./EmptyState-T6Y8UEI6.js";import"./MassActions-B_MLl_V3.js";import"./Autocomplete-B8J1D44R.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
