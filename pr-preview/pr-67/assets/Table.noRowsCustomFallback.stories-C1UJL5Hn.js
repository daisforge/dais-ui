import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-CavNiRmo.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-Bg7shm0b.js";import{f as p}from"./Table-rHnSGp-o.js";import{rT as b}from"./@salutejs/plasma-icons-BrsFlXba.js";import"./vendor-BSh-q9Ou.js";import"./react-is-Clcustum.js";import"./styled-components-CbgoXU45.js";import"./@tanstack/react-virtual-D4DYTxIh.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-DWCdugaM.js";import"./IconButton-CJw7yEkJ.js";import"./@salutejs/sdds-finai-BkbdvS5g.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CnArmH7g.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-VB4WAPL1.js";import"./sharedUtilsInputs-COjFvFwZ.js";import"./AnalyticalWidget-BTQ0VNFn.js";import"./Collapse-DJBsDA9p.js";import"./react-data-grid-CC8ALFI1.js";import"./TableTabs-RalHP3o0.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Col2MVTv.js";import"./ListOfFilters-D8GazY7Y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-v4lYr5cP.js";import"./EmptyState-G7_pvWiP.js";import"./MassActions-DJUm5kFh.js";import"./Autocomplete-C0nsjXn5.js";const K={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
