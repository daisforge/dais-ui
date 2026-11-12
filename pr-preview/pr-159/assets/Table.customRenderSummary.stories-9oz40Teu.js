import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-lj8yVKf5.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-C280hpp2.js";import"./vendor-qc-3jPn0.js";import"./react-is-Clcustum.js";import"./styled-components-fZZISu-E.js";import"./@tanstack/react-virtual-cDSTPgpS.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BnZbuhdn.js";import"./IconButton-C7vIwJL1.js";import"./@salutejs/plasma-icons-CfT1Hno-.js";import"./@salutejs/sdds-finai-D1xekEXv.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BZEVkRCf.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CTzYqpSx.js";import"./TextField-COil20QB.js";import"./sharedUtilsInputs-CqBI3x81.js";import"./AiAgentPopup-DMxRNqnm.js";import"./TextArea-CKpv2CXk.js";import"./sharedUtilsResizable-BZiwV9dn.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CkUrJuHd.js";import"./react-data-grid-CNbViKFW.js";import"./TableTabs-D79cyaX_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-n_rkjHnk.js";import"./@glideappsfinal/glide-data-grid-B-1CjMCn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cqbiwema.js";import"./ListOfFilters-BhzbP0P2.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-S5rrm-jj.js";import"./EmptyState-BLWKmdtS.js";import"./MassActions-CXeHQUg5.js";import"./Autocomplete-DR4dqk8a.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
