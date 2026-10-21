import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-JaCUi5cm.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-pnnyhfPF.js";import"./vendor-D8SvPeB8.js";import"./react-is-Clcustum.js";import"./styled-components-CJ1TKU9b.js";import"./@tanstack/react-virtual-CHOn-45g.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-D8SpiYoH.js";import"./IconButton-UZDxPSAX.js";import"./@salutejs/plasma-icons-Dk1azQG_.js";import"./@salutejs/sdds-finai-Vk8JBRCk.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BVW63fJ-.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B0HI5hbx.js";import"./TextField-CdY5Hnwo.js";import"./sharedUtilsInputs-Crb2Z_Sr.js";import"./AiAgentPopup-CIgPTIhc.js";import"./TextArea-szCP3JPH.js";import"./sharedUtilsResizable-BaTpkv1f.js";import"./Collapse-BR2s-FDz.js";import"./react-data-grid-C7ICYiA5.js";import"./TableTabs-DFviA_Xm.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Doh5h3Eu.js";import"./@glideappsfinal/glide-data-grid-Bcn9VpAa.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Dib4KGN5.js";import"./ListOfFilters-1oG7zJM3.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DR7kxr7a.js";import"./EmptyState-BzBvH8bw.js";import"./MassActions-cWYtSKhQ.js";import"./Autocomplete-j-UPM072.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
