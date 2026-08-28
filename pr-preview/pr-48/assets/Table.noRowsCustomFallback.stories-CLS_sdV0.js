import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-BCVoxXef.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-BRgSb72-.js";import{f as p}from"./Table-Coos7vn0.js";import{rR as b}from"./@salutejs/plasma-icons-CT3auX7M.js";import"./vendor-BCtyWDpp.js";import"./react-is-Clcustum.js";import"./styled-components-DX8vlra3.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-B_R_7QV1.js";import"./IconButton-tXGbBwdv.js";import"./@salutejs/sdds-finai-CtB5qeOi.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-CHCHZ6kC.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BT0br7pC.js";import"./sharedUtilsInputs-E3hguDnU.js";import"./AnalyticalWidget-CRwLcQHW.js";import"./Collapse-Hqsw_Qk2.js";import"./react-data-grid-DVnoNyqM.js";import"./TableTabs-D7jLgkKo.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-cSTo0M2f.js";import"./ListOfFilters-DRLpvTSI.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-TOeAMrkU.js";import"./EmptyState-nH3mac_g.js";import"./MassActions-Dr4Bw81-.js";import"./Autocomplete-QU_N67Il.js";const J={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const K=["NoRowsCustomFallback"];export{e as NoRowsCustomFallback,K as __namedExportsOrder,J as default};
