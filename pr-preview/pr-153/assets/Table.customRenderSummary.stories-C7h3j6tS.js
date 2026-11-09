import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-D389G43V.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CRVW7HiH.js";import"./vendor-5YaLwWPx.js";import"./react-is-Clcustum.js";import"./styled-components-QSCCnPb-.js";import"./@tanstack/react-virtual-CREzRtDS.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Dje76o57.js";import"./IconButton-NZ7CEyKM.js";import"./@salutejs/plasma-icons-BYipvGmh.js";import"./@salutejs/sdds-finai-CPvhdUt1.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-qvqoIA2H.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-0w5iF82H.js";import"./TextField-DqvL3Zc8.js";import"./sharedUtilsInputs-LUebY2e5.js";import"./AiAgentPopup-DqteTfsM.js";import"./TextArea-YGicpwCL.js";import"./sharedUtilsResizable-Bqwz7o91.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DtIQJpWx.js";import"./react-data-grid-YkKxh9rN.js";import"./TableTabs-DLc6Fg37.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C9GSTiBm.js";import"./@glideappsfinal/glide-data-grid-CMGU-CCU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DgaubpC5.js";import"./ListOfFilters-unJUCV45.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DPYPxXZH.js";import"./EmptyState-C4_cwPpk.js";import"./MassActions-CwmTlBIc.js";import"./Autocomplete-BT7QMbQ9.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const ee=["Summary"];export{e as Summary,ee as __namedExportsOrder,Y as default};
