import{r as m,d as o}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-CXSs-ref.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-B948mfxh.js";import{f as p}from"./Table-H9tRhf3x.js";import{rV as b}from"./@salutejs/plasma-icons-pFROsTm3.js";import"./vendor-Dov7lcnd.js";import"./react-is-Clcustum.js";import"./styled-components-Ke_BiRQi.js";import"./@tanstack/react-virtual-CfZrfYDd.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-MK1pZ9bi.js";import"./IconButton-BTx9fPoE.js";import"./@salutejs/sdds-finai-DSVjdAOr.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-Dfe4gMUl.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-ja9Zil3K.js";import"./sharedUtilsInputs-CSOnbxJx.js";import"./AiAgentPopup-B7NgCFcX.js";import"./TextArea-BWH7ZCIq.js";import"./sharedUtilsResizable-fsLemrg8.js";import"./Collapse-CVQHosTk.js";import"./react-data-grid-DGggzB1_.js";import"./TableTabs-Cnlpv1qj.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Ce7Szx_B.js";import"./@glideappsfinal/glide-data-grid-CFj9HtB2.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-WI1kI17V.js";import"./ListOfFilters-msp9G5eS.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-2PVjWtNv.js";import"./EmptyState-DMBj4OH2.js";import"./MassActions-DM7DODfY.js";import"./Autocomplete-CNcJzkvk.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
