import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-BR6j66HK.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-7LHf_LaS.js";import{f as p}from"./Table-DPdSGxvk.js";import{rW as b}from"./@salutejs/plasma-icons-D_1o7NsP.js";import"./vendor-CVMKgdDh.js";import"./react-is-Clcustum.js";import"./styled-components-CwOMMRg3.js";import"./@tanstack/react-virtual-z_N2zvua.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bg9BaLXJ.js";import"./IconButton-BuxkyNh1.js";import"./@salutejs/sdds-finai-R41yApkS.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C8PgCSKo.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DC-k6U3f.js";import"./sharedUtilsInputs-D-pVOLaP.js";import"./AiAgentPopup-xnLrr0ZX.js";import"./TextArea-DTfy2aDO.js";import"./sharedUtilsResizable-BpgOMr3m.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-qVisV3-p.js";import"./react-data-grid-Du1mPBV9.js";import"./TableTabs-COSYENPy.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DPwqu_gq.js";import"./@glideappsfinal/glide-data-grid-BxUIQMdn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BfpkSLfw.js";import"./ListOfFilters-Bro5b20G.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B59TZBuU.js";import"./EmptyState-BrIpfyZO.js";import"./MassActions--yO2Ag9n.js";import"./Autocomplete-BfAxXuRc.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
