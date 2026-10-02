import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BvjsuRLP.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-zAVVxDV4.js";import"./vendor-DWj-TKO5.js";import"./react-is-Clcustum.js";import"./styled-components-B0IEQUpD.js";import"./@tanstack/react-virtual-B0dXp-LB.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BiPlnogl.js";import"./IconButton-1gOssj5s.js";import"./@salutejs/plasma-icons-LNSm6cYu.js";import"./@salutejs/sdds-finai-DUjmE73T.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CSDXMeGs.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-hmQcRD2u.js";import"./TextField-D87gW--t.js";import"./sharedUtilsInputs-Dz-qEfn5.js";import"./AnalyticalWidget-iQ2l6wI7.js";import"./Collapse-DETPqTA2.js";import"./react-data-grid-CEeDAoVs.js";import"./TableTabs-CRtWlmPJ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DgiOIT3S.js";import"./ListOfFilters-BLmLHECo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C-CkitMr.js";import"./EmptyState-B0MXEbXG.js";import"./MassActions-Cr6v13CY.js";import"./Autocomplete-Dv0_y6YK.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
