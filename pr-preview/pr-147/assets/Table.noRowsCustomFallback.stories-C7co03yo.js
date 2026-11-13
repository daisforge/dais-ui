import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-CY_fRKlk.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-BXA7zsuQ.js";import{f as p}from"./Table-D4grgb9E.js";import{rW as b}from"./@salutejs/plasma-icons-B9ywyW0D.js";import"./vendor-QHtJPMsQ.js";import"./react-is-Clcustum.js";import"./styled-components-DLu4QhXQ.js";import"./@tanstack/react-virtual-DFstSCii.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CTm0i2eM.js";import"./IconButton-CUyOUEE1.js";import"./@salutejs/sdds-finai-DzYR6xJW.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-ddnlLRAX.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-D3d1J1Jj.js";import"./sharedUtilsInputs-r9MqV5O3.js";import"./AiAgentPopup-CSh1rsxi.js";import"./TextArea-BggMZ-IT.js";import"./sharedUtilsResizable-hNh7pJcE.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-tosZzLU-.js";import"./react-data-grid-DaKbaKT_.js";import"./TableTabs-BRB3zTuq.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BuBZc4hO.js";import"./@glideappsfinal/glide-data-grid-BFTdisFW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BWjgL5te.js";import"./ListOfFilters-sEMLi4hR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B_WBCZ3D.js";import"./EmptyState-L8bFdNEn.js";import"./MassActions-BQtyLguK.js";import"./Autocomplete-QqjOjP43.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,f=e.jsxDEV(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),o={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:f},columnConfig:[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:s,noRowsFallback:i})=>{const[a]=m.useState([]);return e.jsxDEV(p,{tableConfig:{noRowsFallback:i,containerStyle:{height:500}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,n,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const eo=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,eo as __namedExportsOrder,oo as default};
