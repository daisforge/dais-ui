import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BJYKC5Gb.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CaDwFBWF.js";import"./vendor-af4H1Khz.js";import"./react-is-Clcustum.js";import"./styled-components-cxPSmI4v.js";import"./@tanstack/react-virtual-BRMCaKA7.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DcDYCbxn.js";import"./IconButton-DScE8jH8.js";import"./@salutejs/plasma-icons-BvYWJbfI.js";import"./@salutejs/sdds-finai-BvUK3AZp.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-D5lelgp6.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Tzc9IyP5.js";import"./TextField-BfEBHK7r.js";import"./sharedUtilsInputs-yJDewjCo.js";import"./AiAgentPopup-C5VXRr-a.js";import"./TextArea-CA5KWdb8.js";import"./sharedUtilsResizable-CzdjlV46.js";import"./Collapse-Cok_ChCq.js";import"./react-data-grid-DyFn7V8H.js";import"./TableTabs-BmgUT5sN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DoC9QqkY.js";import"./@glideappsfinal/glide-data-grid-Cc-v43VA.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CWODhH2X.js";import"./ListOfFilters-BzwsOWvp.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-86oIHKy1.js";import"./EmptyState-WdUpfxwI.js";import"./MassActions-8V0URAHP.js";import"./Autocomplete-Yvu_n9sy.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
