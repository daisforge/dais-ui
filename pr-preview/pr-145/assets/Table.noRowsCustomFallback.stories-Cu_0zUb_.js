import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-Boo91cU6.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-CPPJXK5A.js";import{f as p}from"./Table-fDyFR8C3.js";import{rW as b}from"./@salutejs/plasma-icons-Fhv4Zogl.js";import"./vendor-CP-3LOhZ.js";import"./react-is-Clcustum.js";import"./styled-components-F9gNCmp7.js";import"./@tanstack/react-virtual-CXQI6dVw.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BARjbImM.js";import"./IconButton-CF2zTq_R.js";import"./@salutejs/sdds-finai-Cr_C_vUG.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-ZMH-4y9w.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-vEgfIkTh.js";import"./sharedUtilsInputs-CB08XKuU.js";import"./AiAgentPopup-BFJ5tdao.js";import"./TextArea-CLwnt6tj.js";import"./sharedUtilsResizable-Di_quycW.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CUbswjLS.js";import"./react-data-grid-DJBfHfZO.js";import"./TableTabs-34bcTQnH.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-poitIDmC.js";import"./@glideappsfinal/glide-data-grid-DlTxrVjE.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-3WAeSy7K.js";import"./ListOfFilters-gDKj_046.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-bvrK9PkM.js";import"./EmptyState-BvRtTeiw.js";import"./MassActions-BW2K9Iec.js";import"./Autocomplete-CDigUiLB.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
