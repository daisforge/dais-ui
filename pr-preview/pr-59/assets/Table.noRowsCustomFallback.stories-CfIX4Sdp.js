import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-Dr38O55U.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-BvxEXmQ2.js";import{f as p}from"./Table-DU9MbICi.js";import{rR as b}from"./@salutejs/plasma-icons-CCz65j_O.js";import"./vendor-C-w11k8S.js";import"./react-is-Clcustum.js";import"./styled-components-Dp3rHGA3.js";import"./@tanstack/react-virtual-BuSs1H_i.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BtkZteOY.js";import"./IconButton-DdFXwzF4.js";import"./@salutejs/sdds-finai-DAnJwbl_.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-D9qeEgje.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-3NHyg2s_.js";import"./sharedUtilsInputs-Zhnb1w9_.js";import"./AnalyticalWidget-DafORMlE.js";import"./Collapse-7thSAqRT.js";import"./react-data-grid-CCr1SSii.js";import"./TableTabs-C6D4wdps.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CUFhA75p.js";import"./ListOfFilters-HH4CO5xD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CRsaIO4b.js";import"./EmptyState-DCWGSTwL.js";import"./MassActions-DoG5352n.js";import"./Autocomplete-llOM44ex.js";const K={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
