import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-B9ZOV5v0.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-KKQBqSrD.js";import"./vendor-B2v8DMVc.js";import"./react-is-Clcustum.js";import"./styled-components-Dg4_4Hb_.js";import"./@tanstack/react-virtual-D_A8jBfn.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BJyHTpS4.js";import"./IconButton-D_BdFAk2.js";import"./@salutejs/plasma-icons-DXylCXcG.js";import"./@salutejs/sdds-finai-CFeISCe0.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BW2hFEws.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CMFY3u9L.js";import"./TextField-BhUZWjXq.js";import"./sharedUtilsInputs-Cbp0pnEG.js";import"./AnalyticalWidget-CTXycwfs.js";import"./Collapse-DHO7f23Y.js";import"./react-data-grid-BVgl53SS.js";import"./TableTabs-CXT9Y7BQ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DsmB907o.js";import"./ListOfFilters-Dn39WUhS.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-YhmLLEhX.js";import"./EmptyState-dv266yLL.js";import"./MassActions-C_WS2vRK.js";import"./Autocomplete-CXcR8tPS.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
