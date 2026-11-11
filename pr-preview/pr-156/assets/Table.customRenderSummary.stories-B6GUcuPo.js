import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CCVtLeWJ.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Dn4e6a_f.js";import"./vendor-DQE_v-3P.js";import"./react-is-Clcustum.js";import"./styled-components-CnJDq8_Y.js";import"./@tanstack/react-virtual-COmxIx-H.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-1J-LPDqQ.js";import"./IconButton-BFdcKLV4.js";import"./@salutejs/plasma-icons-C5hAfewY.js";import"./@salutejs/sdds-finai-DEVB1MHB.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-sHkSbqrk.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D70Wu-J-.js";import"./TextField-C1W7ideM.js";import"./sharedUtilsInputs-CyoADmmX.js";import"./AiAgentPopup-faVYCYUm.js";import"./TextArea-iDWuvbHG.js";import"./sharedUtilsResizable-L-WgumPX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-Bzr6KiQY.js";import"./react-data-grid-C31jW-aJ.js";import"./TableTabs-CdEhKw9I.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-zK0ChlDe.js";import"./@glideappsfinal/glide-data-grid-Dgm4acPN.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BgqBx9fg.js";import"./ListOfFilters-Cc0Ak2v7.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-vI2bNhRH.js";import"./EmptyState-Dx4mvkmG.js";import"./MassActions-CPoHLjzo.js";import"./Autocomplete-A4RSkvAu.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
