import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-h6L55mj3.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BojYrzz-.js";import"./vendor-Drxgg0rk.js";import"./react-is-Clcustum.js";import"./styled-components-DcK5R8Fb.js";import"./@tanstack/react-virtual-jg8eP7gb.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-MagC-eOi.js";import"./IconButton-CWM8CfCh.js";import"./@salutejs/plasma-icons-DhN4W4fR.js";import"./@salutejs/sdds-finai-B5c9tUhj.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BVL9FlQU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-xj2JZS06.js";import"./TextField-CxxXKDSK.js";import"./sharedUtilsInputs-fFIdmTGL.js";import"./AiAgentPopup-B1ZXYUQU.js";import"./TextArea-DOJDfK-7.js";import"./sharedUtilsResizable-C3pkB6lf.js";import"./Collapse-2gLAuci-.js";import"./react-data-grid-Cj6te99D.js";import"./TableTabs-CHblTDPr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BdzHcb2z.js";import"./@glideappsfinal/glide-data-grid-zQj-MghF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CDyjwP5Z.js";import"./ListOfFilters-BJAVLEss.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-I4Yo8Ep8.js";import"./EmptyState-BFDsDepI.js";import"./MassActions-w5ew8M1R.js";import"./Autocomplete-C7B6LVYI.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
