import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-B-riaFPz.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Cm1TIcJV.js";import"./vendor-C8VuHz3V.js";import"./react-is-Clcustum.js";import"./styled-components-BpVVkBzC.js";import"./@tanstack/react-virtual-CcbeDy_e.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BBJtG2uO.js";import"./IconButton-Cyh6jX5Y.js";import"./@salutejs/plasma-icons-98834dYt.js";import"./@salutejs/sdds-finai-Cz7rM39w.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DPKiBQxU.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CcNAFjSN.js";import"./TextField-xGwV4-46.js";import"./sharedUtilsInputs-DulBkLnq.js";import"./AiAgentPopup-BOwjLeH4.js";import"./TextArea-DkKRutyA.js";import"./sharedUtilsResizable-k1DpAbyC.js";import"./Collapse-BFOVUS3J.js";import"./react-data-grid-B83SeY1o.js";import"./TableTabs-BQl_O17u.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BxObiBTx.js";import"./@glideappsfinal/glide-data-grid-DwMYPKa3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CHikPvVh.js";import"./ListOfFilters-DVcNOz0_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cn72JuoI.js";import"./EmptyState-BvkbGYoG.js";import"./MassActions-CuunVsGn.js";import"./Autocomplete-BLX4iX7d.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
