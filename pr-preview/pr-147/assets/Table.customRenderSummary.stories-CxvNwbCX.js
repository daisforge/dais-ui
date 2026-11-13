import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-DMKGmJ6t.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-wSXlevnH.js";import"./vendor-BrHBSlJK.js";import"./react-is-Clcustum.js";import"./styled-components-VQhqWv3H.js";import"./@tanstack/react-virtual-VaQu0THI.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DzU-qPHL.js";import"./IconButton-BD7PJEK-.js";import"./@salutejs/plasma-icons-DKlbVZSX.js";import"./@salutejs/sdds-finai-QR_WCRdF.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-ClMPg-JA.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CAphnu1o.js";import"./TextField-DwCSXYU-.js";import"./sharedUtilsInputs-BVZR2bw_.js";import"./AiAgentPopup-D5lpE0cG.js";import"./TextArea-CET7FF04.js";import"./sharedUtilsResizable-C5_x6ZS8.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-xVOKAYjw.js";import"./react-data-grid-BRVMtBW9.js";import"./TableTabs-DDTQKVAd.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BnLJzudn.js";import"./@glideappsfinal/glide-data-grid-Diog_OOt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-D7mcEM-B.js";import"./ListOfFilters-D9lSiTp3.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FmU7LToq.js";import"./EmptyState-DsCjVhNT.js";import"./MassActions-BykgpjJe.js";import"./Autocomplete-DE8EekWl.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
