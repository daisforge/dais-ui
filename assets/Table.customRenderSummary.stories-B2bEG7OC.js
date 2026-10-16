import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CjcIKVa0.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-otctFhJH.js";import"./vendor-BotQo-m5.js";import"./react-is-Clcustum.js";import"./styled-components-CA2CAEjL.js";import"./@tanstack/react-virtual-Cn23thnX.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BG1m5ecA.js";import"./IconButton-ccomzgm8.js";import"./@salutejs/plasma-icons-BBqnx34S.js";import"./@salutejs/sdds-finai-DvlGEIcs.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-lmXrkf06.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jWxNdqW7.js";import"./TextField-uvLqCBaN.js";import"./sharedUtilsInputs-BuNImMni.js";import"./AiAgentPopup-CU9O7uYM.js";import"./TextArea-BaXPoh1X.js";import"./sharedUtilsResizable-Ce6zImS-.js";import"./Collapse-BZa4thMs.js";import"./react-data-grid-Dh_hmPqE.js";import"./TableTabs-OEWva7WB.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CFctrN7O.js";import"./@glideappsfinal/glide-data-grid-UoDXzAhD.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CjVzndaA.js";import"./ListOfFilters-DzzWqn9J.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DrcZ5VDx.js";import"./EmptyState-C8AxMOvY.js";import"./MassActions-Ba_OgvlJ.js";import"./Autocomplete-C3YojNFY.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
