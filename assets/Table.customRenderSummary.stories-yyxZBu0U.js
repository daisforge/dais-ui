import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CjcIKVa0.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Dik3w9-Z.js";import"./vendor-BotQo-m5.js";import"./react-is-Clcustum.js";import"./styled-components-CA2CAEjL.js";import"./@tanstack/react-virtual-Cn23thnX.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BGluu0EP.js";import"./IconButton-BLPpYxfQ.js";import"./@salutejs/plasma-icons-BBqnx34S.js";import"./@salutejs/sdds-finai-BtdE48Lf.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BIQM_xtj.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jWxNdqW7.js";import"./TextField-Dd9lYuZ2.js";import"./sharedUtilsInputs-v-GJdVCM.js";import"./AiAgentPopup-CHrWBtUf.js";import"./TextArea-hWn3946V.js";import"./sharedUtilsResizable-PvK4CQUI.js";import"./Collapse-BJMU9AEU.js";import"./react-data-grid-Dh_hmPqE.js";import"./TableTabs-B4MPujqJ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DplJOVzI.js";import"./@glideappsfinal/glide-data-grid-DbAheAp7.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DRWFcFum.js";import"./ListOfFilters-Bl-HrOwv.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DHVvTJRQ.js";import"./EmptyState-D2lYNppY.js";import"./MassActions-Bvm_gqoN.js";import"./Autocomplete-Ch9XmMC9.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
