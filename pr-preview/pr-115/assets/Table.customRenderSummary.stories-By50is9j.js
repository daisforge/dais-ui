import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CDaExnrR.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Dd0lYFQC.js";import"./vendor-noKLAXN_.js";import"./react-is-Clcustum.js";import"./styled-components-DsU3CkJN.js";import"./@tanstack/react-virtual-ig-F83uS.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DYZGbHuA.js";import"./IconButton-C85mx186.js";import"./@salutejs/plasma-icons-QFvtg1-5.js";import"./@salutejs/sdds-finai-Clok5FAG.js";import"./@salutejs/sdds-themes-Cf5iJiw2.js";import"./utils-DLtG-Te-.js";import"./constants-BMyuY-FV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CN128sBO.js";import"./TextField-C3fWSe6C.js";import"./sharedUtilsInputs-C_Cv9hqb.js";import"./AiAgentPopup-CYN8WGkp.js";import"./TextArea-pBQSvsEG.js";import"./sharedUtilsResizable-D10n0Xmq.js";import"./Collapse-H2XGdmeX.js";import"./react-data-grid-CmKMVQyO.js";import"./TableTabs-CLaHsbx8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-D7XH6J8Z.js";import"./@glideappsfinal/glide-data-grid-DMPhaI5m.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-hs83Lol-.js";import"./ListOfFilters-DMj5O6Fm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-GhC7b36o.js";import"./EmptyState-CraKoVrH.js";import"./MassActions-Cybk3zsC.js";import"./Autocomplete-DKHt-6T2.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
