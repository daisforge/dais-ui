import{r as u,d as o}from"./react-D2T61mpp.js";import m from"./DocStoryTemplate-DBkZldVw.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-cM6oiJLU.js";import{f as p}from"./Table-Dc-6FW5x.js";import{rT as b}from"./@salutejs/plasma-icons-CASXnT9E.js";import"./vendor-BKzBKp-G.js";import"./react-is-Clcustum.js";import"./styled-components-B0QSSFGC.js";import"./@tanstack/react-virtual-yxDq1gd0.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-D8H2yrCS.js";import"./IconButton-D7rFhGwi.js";import"./@salutejs/sdds-finai-Dt-uBSnb.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DryTuyeA.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DLx88NRH.js";import"./sharedUtilsInputs-CydhYski.js";import"./AnalyticalWidget-D639izQ-.js";import"./Collapse-VP6s-DVe.js";import"./react-data-grid-at35Z1Ou.js";import"./TableTabs-CnwRaqs5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C6t7MqEJ.js";import"./ListOfFilters-BKVXVFhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BTyZAsLJ.js";import"./EmptyState-BIS3MJyj.js";import"./MassActions-B5B7bNv0.js";import"./Autocomplete-BccisocP.js";const K={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:m}}},d=`
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
