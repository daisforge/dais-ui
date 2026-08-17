import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-B5vw54Tl.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-Cnr41X_W.js";import{f as p}from"./Table-1Tfpc0dH.js";import{rL as b}from"./@salutejs/plasma-icons-DT_ZNXTc.js";import"./vendor-DAeWXVFZ.js";import"./react-is-Clcustum.js";import"./styled-components-Dv4eU0M2.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BAO4f8xk.js";import"./IconButton-DwHugSoI.js";import"./@salutejs/sdds-finai-BgKKvavs.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BKj8eomO.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-Cy2yQ6kB.js";import"./sharedUtilsInputs-DwXaRU5M.js";import"./AnalyticalWidget-DSQoVeSt.js";import"./Collapse-Cm7v2G0B.js";import"./react-data-grid-BsdX0Dj6.js";import"./TableTabs-Bhx9_QRR.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-_JgDoTdO.js";import"./ListOfFilters-LYTZ3V_l.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ktP3G9r6.js";import"./EmptyState-9NF6aOUa.js";import"./MassActions-fQFLXngd.js";import"./Autocomplete-DEpORJTX.js";const q={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
`,f=o.jsxDEV(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),e={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:f},columnConfig:[{key:"id",name:o.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",o.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:t,noRowsFallback:i})=>{const[a]=u.useState([]);return o.jsxDEV(p,{tableConfig:{noRowsFallback:i,containerStyle:{height:500}},columnConfig:t,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const J=["NoRowsCustomFallback"];export{e as NoRowsCustomFallback,J as __namedExportsOrder,q as default};
