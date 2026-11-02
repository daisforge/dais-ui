import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-DLqtHX-Y.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-ZJt8loOl.js";import"./vendor-DsJm5J9r.js";import"./react-is-Clcustum.js";import"./styled-components-CdOoB4R7.js";import"./@tanstack/react-virtual-BBPhu5yM.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-o7Dj69L1.js";import"./IconButton-DCmVIxR1.js";import"./@salutejs/plasma-icons-BLyieaPl.js";import"./@salutejs/sdds-finai-BCIh097j.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CRlWCL2r.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DcXSiQMW.js";import"./TextField-DlliMlb0.js";import"./sharedUtilsInputs-wjdCuRkj.js";import"./AiAgentPopup-BJ59xZDz.js";import"./TextArea-BKKyyb49.js";import"./sharedUtilsResizable-BoQDxoHn.js";import"./Collapse-Cm8bDoVu.js";import"./react-data-grid-BhaJNV-A.js";import"./TableTabs-Dn6cREH4.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-vE6vm-5r.js";import"./@glideappsfinal/glide-data-grid-CG3lFAfU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-qGSWt9RK.js";import"./ListOfFilters-DsIa8YUA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B6twWRwI.js";import"./EmptyState--zCuzU-c.js";import"./MassActions-BpT6S0G3.js";import"./Autocomplete-DPfSp2TP.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[m]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Y=["Summary"];export{e as Summary,Y as __namedExportsOrder,W as default};
