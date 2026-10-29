import{r as m,d as o}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-h6L55mj3.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-xj2JZS06.js";import{f as p}from"./Table-BojYrzz-.js";import{rV as b}from"./@salutejs/plasma-icons-DhN4W4fR.js";import"./vendor-Drxgg0rk.js";import"./react-is-Clcustum.js";import"./styled-components-DcK5R8Fb.js";import"./@tanstack/react-virtual-jg8eP7gb.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-MagC-eOi.js";import"./IconButton-CWM8CfCh.js";import"./@salutejs/sdds-finai-B5c9tUhj.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BVL9FlQU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-CxxXKDSK.js";import"./sharedUtilsInputs-fFIdmTGL.js";import"./AiAgentPopup-B1ZXYUQU.js";import"./TextArea-DOJDfK-7.js";import"./sharedUtilsResizable-C3pkB6lf.js";import"./Collapse-2gLAuci-.js";import"./react-data-grid-Cj6te99D.js";import"./TableTabs-CHblTDPr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BdzHcb2z.js";import"./@glideappsfinal/glide-data-grid-zQj-MghF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CDyjwP5Z.js";import"./ListOfFilters-BJAVLEss.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-I4Yo8Ep8.js";import"./EmptyState-BFDsDepI.js";import"./MassActions-w5ew8M1R.js";import"./Autocomplete-C7B6LVYI.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
