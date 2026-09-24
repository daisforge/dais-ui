import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-UtH-duXE.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DMUsCkPm.js";import"./vendor-D08MglVR.js";import"./react-is-Clcustum.js";import"./styled-components-CTFzLbM-.js";import"./@tanstack/react-virtual-CgIZ_wAz.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BhIvXH-V.js";import"./IconButton-BsCV_e20.js";import"./@salutejs/plasma-icons-DyPj0Iee.js";import"./@salutejs/sdds-finai-DrIvEhSi.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-qtAWTuNG.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-K7Il2EkS.js";import"./TextField-DWnp3UMH.js";import"./sharedUtilsInputs-BVbUkBmn.js";import"./AnalyticalWidget-CTvKTxk1.js";import"./Collapse-PAHPVrsS.js";import"./react-data-grid-dIiI_upv.js";import"./TableTabs-zWNlykrc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DM6jtwKy.js";import"./ListOfFilters-BcLMv8Nv.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-woSxZZsT.js";import"./EmptyState-Cu5UyX-U.js";import"./MassActions-FZqMf3Vy.js";import"./Autocomplete-CaLb_VL2.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[m]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const K=["Summary"];export{e as Summary,K as __namedExportsOrder,J as default};
