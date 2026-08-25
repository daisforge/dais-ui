import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Amd1X9tE.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Bs48fGjK.js";import"./vendor-79A0Y1rr.js";import"./react-is-Clcustum.js";import"./styled-components-CyG4-HBp.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BXGpy_er.js";import"./IconButton-DRWW6GK4.js";import"./@salutejs/plasma-icons-DyDFzmWf.js";import"./@salutejs/sdds-finai-LXsiMrF6.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-CejOy8O0.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-u6CfKOrq.js";import"./TextField-vOV0PS1h.js";import"./sharedUtilsInputs-m__6t1dv.js";import"./AnalyticalWidget-B1z2BPO9.js";import"./Collapse-CSOL2Z_x.js";import"./react-data-grid-DC6FgrCZ.js";import"./TableTabs-C1osjsBt.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-k3PIClVY.js";import"./ListOfFilters-C6akdsJO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DNgz4QV8.js";import"./EmptyState-bMxO47Pd.js";import"./MassActions-DCvKq-ih.js";import"./Autocomplete-Bm7R9QtZ.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
