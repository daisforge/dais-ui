import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-26hG1TrD.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-XVJu3IY6.js";import{f as p}from"./Table-C68uzz8-.js";import{rR as b}from"./@salutejs/plasma-icons-JkzlaiDL.js";import"./vendor-CyXS_tQs.js";import"./react-is-Clcustum.js";import"./styled-components-3bXMFSHQ.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-DnjaWsie.js";import"./IconButton-DiyFTFnS.js";import"./@salutejs/sdds-finai-BZpI7CTf.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-Bkr6UfOV.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BCCWysg4.js";import"./sharedUtilsInputs-CvQTizR6.js";import"./AnalyticalWidget-DUHuklJc.js";import"./Collapse-D184fPcX.js";import"./react-data-grid-DzqnH8jo.js";import"./TableTabs-ZohOaFQT.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CIbX8ul8.js";import"./ListOfFilters-CgotcXd0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D61tPBny.js";import"./EmptyState-Ck1o6yH0.js";import"./MassActions-DshUilFx.js";import"./Autocomplete-BlwsM0ef.js";const J={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
