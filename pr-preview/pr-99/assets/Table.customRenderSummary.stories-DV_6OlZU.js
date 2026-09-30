import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-DMJIpEmh.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BNxqISqq.js";import"./vendor-UFIhjNPk.js";import"./react-is-Clcustum.js";import"./styled-components-vJ5gF4dv.js";import"./@tanstack/react-virtual-CflRcPU8.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-m0G4p300.js";import"./IconButton-DDMC6EAF.js";import"./@salutejs/plasma-icons-B7nkY3-R.js";import"./@salutejs/sdds-finai-Dfshpr1a.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-C8O2K0LF.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Vd46RZiz.js";import"./TextField-D1TMsBSe.js";import"./sharedUtilsInputs-B_G63hni.js";import"./AnalyticalWidget-D2OyqWVD.js";import"./Collapse-BP0DHnDC.js";import"./react-data-grid-DQyPhxFA.js";import"./TableTabs-BUGlZDFV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DsB7mngZ.js";import"./ListOfFilters-CvruXlRn.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CHRsLV0g.js";import"./EmptyState-CZu6aIJN.js";import"./MassActions-CTyl32S0.js";import"./Autocomplete-MMmmtVKM.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
