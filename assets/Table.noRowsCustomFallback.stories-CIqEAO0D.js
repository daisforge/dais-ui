import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-Bme21wT9.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-CitqhT9G.js";import{f as p}from"./Table-Dajk0qU1.js";import{rW as b}from"./@salutejs/plasma-icons-mUOaTdkJ.js";import"./vendor-jKDXUmZd.js";import"./react-is-Clcustum.js";import"./styled-components-C-2FT2Y_.js";import"./@tanstack/react-virtual-BL7Z2DTU.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-ySQOjUky.js";import"./IconButton-C34W8Xlr.js";import"./@salutejs/sdds-finai-2OaCELfD.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-DGo4h_8X.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-B2DK8Tlw.js";import"./sharedUtilsInputs-DUggyGWA.js";import"./AiAgentPopup-ez1EOhl_.js";import"./TextArea-DAogKOhb.js";import"./sharedUtilsResizable-BtHRt7CX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-Czo-gPkq.js";import"./react-data-grid-vHXAngDo.js";import"./TableTabs-BR2wpqa_.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CjiQ7HcO.js";import"./@glideappsfinal/glide-data-grid-DyX1mTEK.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Bxu4l5jE.js";import"./ListOfFilters-BMEfS4fM.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BY7tmH8k.js";import"./EmptyState-SKKypKMz.js";import"./MassActions-DgEkGaEh.js";import"./Autocomplete-B5f6t8DA.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
