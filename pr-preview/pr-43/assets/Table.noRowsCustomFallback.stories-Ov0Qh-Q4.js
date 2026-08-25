import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-CnzecF6z.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-B-ol_qS-.js";import{f as p}from"./Table-C0yVNBma.js";import{rR as b}from"./@salutejs/plasma-icons-G-biVy7u.js";import"./vendor-DY5usBm2.js";import"./react-is-Clcustum.js";import"./styled-components-DfDfQ8Bw.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-B0YLSqmO.js";import"./IconButton-Dx27Zlrb.js";import"./@salutejs/sdds-finai-Bu6ldGV4.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-CNDOUHoR.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BqNAFg17.js";import"./sharedUtilsInputs-Kk-tfiXm.js";import"./AnalyticalWidget-BP96HtED.js";import"./Collapse-Da6Z5fm9.js";import"./react-data-grid-Co3kgQQK.js";import"./TableTabs-lW6x_M2S.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DWcqroLw.js";import"./ListOfFilters-DYxrmvMb.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-6S9bMZIS.js";import"./EmptyState-Bg1UZSVl.js";import"./MassActions-BjP3cRDz.js";import"./Autocomplete-BoYnVQWd.js";const J={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
