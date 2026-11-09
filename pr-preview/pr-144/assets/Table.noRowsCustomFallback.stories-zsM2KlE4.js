import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-DDxNlXvE.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-CGDj7ORg.js";import{f as p}from"./Table-CLuq2r_G.js";import{rW as b}from"./@salutejs/plasma-icons-BGlmN6_-.js";import"./vendor-CgwLAOzt.js";import"./react-is-Clcustum.js";import"./styled-components-U1h2EGhV.js";import"./@tanstack/react-virtual-_mtQm2SE.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bhr7wpvG.js";import"./IconButton-C7JOyHb5.js";import"./@salutejs/sdds-finai-DBBbtUOz.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-ParcUs9H.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-TTDGbZXl.js";import"./sharedUtilsInputs-Ds36U5zn.js";import"./AiAgentPopup-Bv5A7AJd.js";import"./TextArea-BJ5AU7KW.js";import"./sharedUtilsResizable-Y09-4PJ-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CUrhIkN9.js";import"./react-data-grid-BveG54b5.js";import"./TableTabs-B18J2TQL.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CpbVbvPN.js";import"./@glideappsfinal/glide-data-grid-D-UmZydu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CLvEXBOx.js";import"./ListOfFilters-DosdwQNl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B54ll3if.js";import"./EmptyState-Dc82nemv.js";import"./MassActions-A5XUKhxz.js";import"./Autocomplete-DSNOWxVh.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
