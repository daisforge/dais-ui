import{r as m,d as o}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-zj6qwwHt.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-D-OropPv.js";import{f as p}from"./Table-EDuNNmAx.js";import{rV as b}from"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./vendor-DyX3yqNp.js";import"./react-is-Clcustum.js";import"./styled-components-ccjJug2H.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DVjRvx_V.js";import"./IconButton-B6fBl0RH.js";import"./@salutejs/sdds-finai-BZMI6rrq.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DQxdQErP.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-B06lPu0j.js";import"./sharedUtilsInputs-C4q_4wW6.js";import"./AiAgentPopup-BF883L56.js";import"./TextArea-DEHVnrFs.js";import"./sharedUtilsResizable-Blk5Lffw.js";import"./Collapse-CRdO4IOl.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-9JF0xyYS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-VNYg_ft2.js";import"./@glideappsfinal/glide-data-grid-DnsAjn7G.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BwAIJ8LG.js";import"./ListOfFilters-pYdsR6Ez.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C1AZtyWa.js";import"./EmptyState-BYB-8O_0.js";import"./MassActions-GVs0Rq-V.js";import"./Autocomplete-Dx-Tpj-_.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,f=o.jsxDEV(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),e={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:f},columnConfig:[{key:"id",name:o.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",o.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:t,noRowsFallback:i})=>{const[a]=m.useState([]);return o.jsxDEV(p,{tableConfig:{noRowsFallback:i,containerStyle:{height:500}},columnConfig:t,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Кастомизация контента "Нет данных"',
  args: {
    noRowsFallback: {
      custom: CustomFallback
    },
    columnConfig: [{
      key: 'id',
      name: <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
            id
            <IconSber size="xs" color="inherit" />
          </div>
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
    }]
  },
  render: ({
    columnConfig,
    noRowsFallback
  }) => {
    const [rows] = useState<Row[]>([]);
    return <Table tableConfig={{
      noRowsFallback,
      containerStyle: {
        height: 500
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const ee=["NoRowsCustomFallback"];export{e as NoRowsCustomFallback,ee as __namedExportsOrder,Y as default};
