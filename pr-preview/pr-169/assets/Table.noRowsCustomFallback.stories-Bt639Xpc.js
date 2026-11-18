import{r as m,b as e}from"./react-B60MRyL7.js";import u from"./DocStoryTemplate-D6aow9No.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-bkXdsxp1.js";import{e as c}from"./Table-083CXwdv.js";import{an as b}from"./@salutejs/plasma-icons-BjqIpdkS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-ABAm7dM9.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./index-DtotkDJi.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./Collapse-BC9SztdT.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-a6lPhyw4.js";import"./TableTabs-BBnsWNxR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ChPFQkuL.js";import"./@glideappsfinal/glide-data-grid-IkMVqKbI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-TSxCSIM4.js";import"./Typography-CJGygKvw.js";import"./ListOfFilters-DSU0i5Yu.js";import"./FiltersActions-Can4TMvq.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-HkKixVLR.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-uOLFOmZC.js";import"./Autocomplete-D4Dg924L.js";const lo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,k=e.jsxDEV(p,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),o={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:k},columnConfig:[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:i,noRowsFallback:s})=>{const[a]=m.useState([]);return e.jsxDEV(c,{tableConfig:{noRowsFallback:s,containerStyle:{height:500}},columnConfig:i,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,t,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const po=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,po as __namedExportsOrder,lo as default};
