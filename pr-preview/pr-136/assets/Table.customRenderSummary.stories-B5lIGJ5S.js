import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-Da-hjSuj.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-wo081aF0.js";import"./vendor-DmlXfB6n.js";import"./react-is-Clcustum.js";import"./styled-components-D3BTJ4t7.js";import"./@tanstack/react-virtual-DB5Ptt1B.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BSKQczkC.js";import"./IconButton-DLyedcFD.js";import"./@salutejs/plasma-icons-DxvG4K4R.js";import"./@salutejs/sdds-finai-DZvjLWsU.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DhqjlIh0.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D80y1dEe.js";import"./TextField-63cBokie.js";import"./sharedUtilsInputs-BVDtnJRn.js";import"./AiAgentPopup-BoxL_VdV.js";import"./TextArea-BXtZqJLt.js";import"./sharedUtilsResizable-xdFtCAfj.js";import"./Collapse-C3r8kOlu.js";import"./react-data-grid-BYgM0Lfk.js";import"./TableTabs-CTFd2v_f.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cbbw3gi7.js";import"./@glideappsfinal/glide-data-grid-CEvIAez4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSU2ns8g.js";import"./ListOfFilters-BnF0fElF.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAqumv_3.js";import"./EmptyState-Bg4DWaYr.js";import"./MassActions-BxR_ht5-.js";import"./Autocomplete-Cx4MSU0r.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
