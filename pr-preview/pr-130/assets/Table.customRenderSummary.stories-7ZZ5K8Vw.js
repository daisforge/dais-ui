import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-DCysDipa.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CW1POAcS.js";import"./vendor-BjkZKBJ9.js";import"./react-is-Clcustum.js";import"./styled-components-DWPxO3a9.js";import"./@tanstack/react-virtual-CIOHzlHP.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BoC-8SOr.js";import"./IconButton-rY8Us0ma.js";import"./@salutejs/plasma-icons-DcAgON_Z.js";import"./@salutejs/sdds-finai-C9g5nEPG.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjufAae2.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BL5k83Qv.js";import"./TextField-erzztdsv.js";import"./sharedUtilsInputs-DPzVM0xx.js";import"./AiAgentPopup-GUmh_M4X.js";import"./TextArea-B8QDmYJe.js";import"./sharedUtilsResizable-CFLK8Unr.js";import"./Collapse-B0_nnnDs.js";import"./react-data-grid-vaUsH3Yu.js";import"./TableTabs-CrHSD7Vb.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B7c2Dg7-.js";import"./@glideappsfinal/glide-data-grid-COzVhdar.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BMT36f3p.js";import"./ListOfFilters-B_inEgG7.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CPepKp-_.js";import"./EmptyState-DCJJR-3o.js";import"./MassActions-BDtqJn10.js";import"./Autocomplete-BkUDz7Uo.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
