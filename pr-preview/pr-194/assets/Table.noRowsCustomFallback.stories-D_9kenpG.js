import{r as m,b as e}from"./react-UEdzNlUe.js";import u from"./DocStoryTemplate-CVr_HXfF.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-yVZ__wCm.js";import{e as c}from"./Table-C71uzYkk.js";import{at as b}from"./@salutejs/plasma-icons-D87bzLqR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BJXHd15o.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BQ6ZyzFq.js";import"./@tanstack/react-virtual-BtAgCELQ.js";import"./WithTooltip-KJL26V4Q-DPY0jro6.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-CztTgQbP.js";import"./index-CMCAxAlJ.js";import"./@sddsjs/sdds_finai-DqiyF2lT.js";import"./@salutejs/sdds-finai-CCc2M82T.js";import"./Collapse-BpJhvNyY.js";import"./utils-1evaXQ7G.js";import"./constants-D9pWgtfS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CTo1laTQ.js";import"./TableTabs-Dl3ybQ3A.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dyw7_8zY.js";import"./@daisforge/glide-data-grid-Ddyz9bvl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-ttz439TP.js";import"./TextField-Bq_jSxbf.js";import"./sharedUtilsInputs-Z9Z1qut3.js";import"./TypographyWithAutoTooltip-BJOp4WMr.js";import"./Typography-wwPE7Tkw.js";import"./ListOfFilters-CVo-52s9.js";import"./FiltersActions-Cas8V8u-.js";import"./IconButton-BhVPULzs.js";import"./TooltipList-C3e9_bOk.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BNkFaJsn.js";import"./NumberFormat-CCkEtS_t.js";import"./EmptyState-BVPgIYqR.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-3P44Uq7b.js";import"./Autocomplete-BfJ_x4IL.js";const uo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const lo=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,lo as __namedExportsOrder,uo as default};
