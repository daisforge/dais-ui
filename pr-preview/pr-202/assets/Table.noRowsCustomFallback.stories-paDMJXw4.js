import{r as m,b as e}from"./react-UEdzNlUe.js";import u from"./DocStoryTemplate-Blra9LRy.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-3Z-m9LhI.js";import{c as p}from"./Table-B_dWxauH.js";import{an as b}from"./@salutejs/plasma-icons-CGioElEJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DX-rrd2O.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BSCswbR3.js";import"./@tanstack/react-virtual-Z5qLdlzb.js";import"./WithTooltip-KJL26V4Q-B0rJQ3Lg.js";import"./preload-helper-KkJ3rXAN.js";import"./index-Cu4lwwaE.js";import"./index-CTuxd491.js";import"./Switch-OG9YqfkE.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-C9AHDOh5.js";import"./Collapse-DxXZ8FX5.js";import"./utils-BfZGf093.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-RlxbDazV.js";import"./TableTabs-DfbZiZGK.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-_DIZBm_z.js";import"./@daisforge/glide-data-grid-Eux6Vb-1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-WSVmxtub.js";import"./TextField-tPdr40MJ.js";import"./sharedUtilsInputs-DVbCzzFV.js";import"./TypographyWithAutoTooltip-CSTt0Pjh.js";import"./Typography-CyjBKn0V.js";import"./ListOfFilters-CsmFvqK-.js";import"./FiltersActions-D8Y9RimT.js";import"./IconButton-DZJTAkfX.js";import"./TooltipList-WyihhvAI.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BJUVgxKS.js";import"./NumberFormat-BTqmTjfQ.js";import"./EmptyState-2zoUZvlk.js";import"./unidentified@3x-DnyuMWBO.js";import"./MassActions-CDoC4_U1.js";import"./Autocomplete-Dh8j0tgJ.js";const uo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,k=e.jsxDEV(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),o={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:k},columnConfig:[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:i,noRowsFallback:s})=>{const[a]=m.useState([]);return e.jsxDEV(p,{tableConfig:{noRowsFallback:s,containerStyle:{height:500}},columnConfig:i,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,t,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const lo=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,lo as __namedExportsOrder,uo as default};
