import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-UtH-duXE.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-K7Il2EkS.js";import{f as p}from"./Table-Bz0VcykR.js";import{rT as b}from"./@salutejs/plasma-icons-DyPj0Iee.js";import"./vendor-D08MglVR.js";import"./react-is-Clcustum.js";import"./styled-components-CTFzLbM-.js";import"./@tanstack/react-virtual-CgIZ_wAz.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BglMhrgl.js";import"./IconButton-BsCV_e20.js";import"./@salutejs/sdds-finai-DrIvEhSi.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-qtAWTuNG.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-B_DM-I_-.js";import"./sharedUtilsInputs-DWsZbv9S.js";import"./AnalyticalWidget-DAbx8ngp.js";import"./Collapse-PAHPVrsS.js";import"./react-data-grid-dIiI_upv.js";import"./TableTabs-zWNlykrc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DRx_v0tk.js";import"./ListOfFilters-5o34Jur6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CCa9xaNQ.js";import"./EmptyState-Cu5UyX-U.js";import"./MassActions-2bd3DErz.js";import"./Autocomplete-DEZhwBZw.js";const K={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const L=["NoRowsCustomFallback"];export{e as NoRowsCustomFallback,L as __namedExportsOrder,K as default};
