import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-n8EPqSp1.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DegEDnTQ.js";import"./vendor-CaK76Snf.js";import"./react-is-Clcustum.js";import"./styled-components-BwCFaRkt.js";import"./@tanstack/react-virtual-BcD1q-CR.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DL7UWS5W.js";import"./IconButton-CHYS7OsY.js";import"./@salutejs/plasma-icons-V_8w2nmt.js";import"./@salutejs/sdds-finai-BV7J2o_s.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-C8ToVq-5.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D90at13y.js";import"./TextField-DtKHUcKj.js";import"./sharedUtilsInputs-DP_4d_Lv.js";import"./AiAgentPopup-DzpYWVjQ.js";import"./TextArea-DWNSOGny.js";import"./sharedUtilsResizable-BuoR3rVw.js";import"./Collapse-DEzgwEVz.js";import"./react-data-grid-n2ePWCSg.js";import"./TableTabs-B8dHQcob.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DPufX4Im.js";import"./@glideappsfinal/glide-data-grid-BxAXJixI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-QzcPISl2.js";import"./ListOfFilters-BWsJeJaB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DCguiR9a.js";import"./EmptyState-BlErGnbS.js";import"./MassActions-CHwRBAEJ.js";import"./Autocomplete-BRRkvWTY.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
