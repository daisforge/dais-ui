import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CrvtEn2a.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CcZ0ds_H.js";import"./vendor-Cerwdjts.js";import"./react-is-Clcustum.js";import"./styled-components-DhAJwv5z.js";import"./@tanstack/react-virtual-_irdOaea.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-g6L0vwIk.js";import"./IconButton-DFMykKti.js";import"./@salutejs/plasma-icons-Dhq832vT.js";import"./@salutejs/sdds-finai-DztqpKP7.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BElZzUmp.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DV_u0Ftj.js";import"./TextField-HUZgltLn.js";import"./sharedUtilsInputs-0JObiuav.js";import"./AiAgentPopup-D3kyWGJG.js";import"./TextArea-D2LyAITr.js";import"./sharedUtilsResizable-B0q5Zavu.js";import"./Collapse-CcsxObAw.js";import"./react-data-grid-BzvGL-VS.js";import"./TableTabs-B3ToYV3h.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CBLdPq7f.js";import"./ListOfFilters-BHHIPZib.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-QJCyNH_R.js";import"./EmptyState-BMpkaTQs.js";import"./MassActions-SmVYtLju.js";import"./Autocomplete-D1xCL2Jp.js";const L={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const Q=["Summary"];export{e as Summary,Q as __namedExportsOrder,L as default};
