import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-DiJAdvEC.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-B55i4OlY.js";import{f as p}from"./Table-CglBQ-O2.js";import{rL as b}from"./@salutejs/plasma-icons-Dv1GxiBC.js";import"./vendor-B9_16pJt.js";import"./react-is-Clcustum.js";import"./styled-components-DsyoZJDS.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-O5t9w8O4.js";import"./IconButton-BKcoDZsO.js";import"./@salutejs/sdds-finai-IZHEqlfF.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-D0DbmO16.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DFKursCu.js";import"./sharedUtilsInputs-CGph2UpZ.js";import"./AnalyticalWidget-DLYuQFti.js";import"./Collapse-Caa0z_Ow.js";import"./react-data-grid-CD7lGWrv.js";import"./TableTabs-DPTpudh-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BB99zeRt.js";import"./ListOfFilters-CRZsNuJw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DbkvCu90.js";import"./EmptyState-C5WIHYMF.js";import"./MassActions-Cnw9OCOO.js";import"./Autocomplete-CjMKfftZ.js";const q={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
