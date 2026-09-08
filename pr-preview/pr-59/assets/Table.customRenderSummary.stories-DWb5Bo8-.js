import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Dr38O55U.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DU9MbICi.js";import"./vendor-C-w11k8S.js";import"./react-is-Clcustum.js";import"./styled-components-Dp3rHGA3.js";import"./@tanstack/react-virtual-BuSs1H_i.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BtkZteOY.js";import"./IconButton-DdFXwzF4.js";import"./@salutejs/plasma-icons-CCz65j_O.js";import"./@salutejs/sdds-finai-DAnJwbl_.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-D9qeEgje.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BvxEXmQ2.js";import"./TextField-3NHyg2s_.js";import"./sharedUtilsInputs-Zhnb1w9_.js";import"./AnalyticalWidget-DafORMlE.js";import"./Collapse-7thSAqRT.js";import"./react-data-grid-CCr1SSii.js";import"./TableTabs-C6D4wdps.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CUFhA75p.js";import"./ListOfFilters-HH4CO5xD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CRsaIO4b.js";import"./EmptyState-DCWGSTwL.js";import"./MassActions-DoG5352n.js";import"./Autocomplete-llOM44ex.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
