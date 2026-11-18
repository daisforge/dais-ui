import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-Cwqzt8X1.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BGMTlz3N.js";import"./vendor-_h_CmnQT.js";import"./react-is-Clcustum.js";import"./styled-components-D7_wlBS0.js";import"./@tanstack/react-virtual-CcuGNpaY.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CUl-30xN.js";import"./IconButton-1zm3PcIF.js";import"./@salutejs/plasma-icons-DqqhxnUT.js";import"./@salutejs/sdds-finai-DVA7rxuT.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-Bn7MlwCC.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CD7Aw3Vn.js";import"./TextField-Cl3BpbLe.js";import"./sharedUtilsInputs-C8WGQWoK.js";import"./AiAgentPopup-DhCqOGu8.js";import"./TextArea-Dnzmn0hS.js";import"./sharedUtilsResizable-Cd1FcKHo.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DYZwTQPf.js";import"./react-data-grid-z26-RGk0.js";import"./TableTabs-DFjtZzMH.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B6iX8Zsl.js";import"./@glideappsfinal/glide-data-grid-BJ3WSbWl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Bg1dBHP-.js";import"./ListOfFilters-83wzDvCR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Dp_zSVPt.js";import"./EmptyState-DqVxoijd.js";import"./MassActions-F1B1Aj2X.js";import"./Autocomplete-DbqNs3I_.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
