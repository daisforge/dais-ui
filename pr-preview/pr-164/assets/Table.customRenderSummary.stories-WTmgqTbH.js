import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-DvUM61Pg.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-lyC942h-.js";import"./vendor-CYVD37V9.js";import"./react-is-Clcustum.js";import"./styled-components-C94YjM-8.js";import"./@tanstack/react-virtual-DYxCMooD.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-B0S9lToY.js";import"./IconButton-Bl9eVzQ1.js";import"./@salutejs/plasma-icons-Di_vIjuB.js";import"./@salutejs/sdds-finai-BT4-yN4n.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-OTWlClTX.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BDjyaOfr.js";import"./TextField-DJ8wqApr.js";import"./sharedUtilsInputs-O8EZTBuY.js";import"./AiAgentPopup-CS0gDDq9.js";import"./TextArea-Er2Rljvl.js";import"./sharedUtilsResizable-CQuiSWfk.js";import"./Collapse-CXaAgnpP.js";import"./react-data-grid-9BbtrEpY.js";import"./TableTabs-Bc0SII-y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DpiyFBdU.js";import"./@glideappsfinal/glide-data-grid-Pr7m0T0T.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BE-fJFxc.js";import"./ListOfFilters-C94OnlYQ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DQK6oHzg.js";import"./EmptyState-DN6TMa0i.js";import"./MassActions-CJNv5QLV.js";import"./Autocomplete-C-gIuhgS.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
