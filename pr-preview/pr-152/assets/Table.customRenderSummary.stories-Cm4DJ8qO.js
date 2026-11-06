import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-DZsWkZ-A.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DeGjIAjL.js";import"./vendor-OMIM6ypg.js";import"./react-is-Clcustum.js";import"./styled-components-C7d6cAn3.js";import"./@tanstack/react-virtual-CgyeR3FS.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DhvOppJl.js";import"./IconButton-DtoSl8Bw.js";import"./@salutejs/plasma-icons-4hohajim.js";import"./@salutejs/sdds-finai-Bon1pPd2.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-Bu2A5x6d.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D3IwMqIN.js";import"./TextField-X1gOdWS9.js";import"./sharedUtilsInputs-CzqRv-X_.js";import"./AiAgentPopup-BTKgTZx9.js";import"./TextArea-BXsaEElA.js";import"./sharedUtilsResizable-451amboB.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-D9TBSft0.js";import"./react-data-grid-asFtuhvm.js";import"./TableTabs-GjFYQ1yc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Boy_gxo4.js";import"./@glideappsfinal/glide-data-grid-Cun82X6B.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cl3VzNM-.js";import"./ListOfFilters-ClSxBvCe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DFgdTL6D.js";import"./EmptyState-UY_vm-Yh.js";import"./MassActions-C4WNK7LE.js";import"./Autocomplete-CGdJJ2BB.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
