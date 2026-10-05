import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-D4rmyDH8.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BxEDrj6n.js";import"./vendor-pjEbe7K_.js";import"./react-is-Clcustum.js";import"./styled-components-DLh7Loza.js";import"./@tanstack/react-virtual-CK5Nm0__.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BrevyeVk.js";import"./IconButton-DRGVI8Xz.js";import"./@salutejs/plasma-icons-C-KTBipy.js";import"./@salutejs/sdds-finai-CPXmgNvG.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-CT7J1Ydu.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Ce6xPdsp.js";import"./TextField-Bzm8NUH7.js";import"./sharedUtilsInputs-B9m87C-J.js";import"./AnalyticalWidget-C5URm50_.js";import"./Collapse-6c0Mf_8P.js";import"./react-data-grid-BZuhNkSa.js";import"./TableTabs-RrhGB_mV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-b_eDH5Y-.js";import"./ListOfFilters-BmwjC1-1.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CzuNGJoH.js";import"./EmptyState-BElEMty-.js";import"./MassActions-DJglkn3b.js";import"./Autocomplete-BXetjKVq.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
