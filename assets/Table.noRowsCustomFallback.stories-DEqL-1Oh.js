import{r as m,d as o}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-CjcIKVa0.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-jWxNdqW7.js";import{f as p}from"./Table-BObdDF5l.js";import{rV as b}from"./@salutejs/plasma-icons-BBqnx34S.js";import"./vendor-BotQo-m5.js";import"./react-is-Clcustum.js";import"./styled-components-CA2CAEjL.js";import"./@tanstack/react-virtual-Cn23thnX.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bc0T9GDE.js";import"./IconButton-ccomzgm8.js";import"./@salutejs/sdds-finai-DvlGEIcs.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-lmXrkf06.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DaP7JZ9U.js";import"./sharedUtilsInputs-CDqI7A4e.js";import"./AiAgentPopup-Cl3oV_0K.js";import"./TextArea-DTfC3AhM.js";import"./sharedUtilsResizable-Ce6zImS-.js";import"./Collapse-BZa4thMs.js";import"./react-data-grid-Dh_hmPqE.js";import"./TableTabs-EBnzc4eT.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B-K6_N6p.js";import"./@glideappsfinal/glide-data-grid-UoDXzAhD.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BBtmJd28.js";import"./ListOfFilters-D4vV_N0U.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-voKNkuBc.js";import"./EmptyState-tBnEXlI6.js";import"./MassActions-BNCPXkKu.js";import"./Autocomplete-DB-Vke8k.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
