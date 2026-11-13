import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-D0oaI3x8.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-D2pkjCJU.js";import"./vendor-DVEkpSfm.js";import"./react-is-Clcustum.js";import"./styled-components-BwcDN0VQ.js";import"./@tanstack/react-virtual-QKKXMiPF.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-C10NCaF4.js";import"./IconButton-0-bGLwGL.js";import"./@salutejs/plasma-icons-Dnz85Se9.js";import"./@salutejs/sdds-finai-CFJHjh0G.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BNH8md_l.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DMWicdG1.js";import"./TextField-RYOwsFTp.js";import"./sharedUtilsInputs-BgiXh1bt.js";import"./AiAgentPopup-BgpRmpGp.js";import"./TextArea-xktLXpr3.js";import"./sharedUtilsResizable-BNgmxJw6.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-BaoxEAG-.js";import"./react-data-grid-f4RD294y.js";import"./TableTabs-DDjn5aiD.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ebz6jxNE.js";import"./@glideappsfinal/glide-data-grid-Ba9OKtrY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DOJ_L0RM.js";import"./ListOfFilters-mZOzwrPn.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DyFM9emz.js";import"./EmptyState-CmuP-NZx.js";import"./MassActions-UHp555wq.js";import"./Autocomplete-DTyvRaPY.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
