import{r as m,b as e}from"./react-UEdzNlUe.js";import u from"./DocStoryTemplate-Bp_65ajo.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-CnSr-EOZ.js";import{c as p}from"./Table-wJ2To5vy.js";import{an as b}from"./@salutejs/plasma-icons-BvdYvZ49.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./WithTooltip-KJL26V4Q-C3cIqsfP.js";import"./preload-helper-DjLIBw6y.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./Switch-qQzmLoyi.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./Collapse-dO_AAhkR.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-DOd4FWtH.js";import"./TableTabs-Bz53VcLG.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-CJDcUmRZ.js";import"./TextField-C6nfyspX.js";import"./sharedUtilsInputs-vr_YQm4s.js";import"./Typography-BgGeEQHX.js";import"./ListOfFilters-Dq1K2btf.js";import"./FiltersActions-oXAbODPA.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BRWfFtoA.js";import"./EmptyState-DBsaH2wj.js";import"./unidentified@3x-BWP3gjky.js";import"./MassActions-B4Evdu4R.js";import"./Autocomplete-B7hG-rhm.js";const so={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,k=e.jsxDEV(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),o={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:k},columnConfig:[{key:"id",name:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:s,noRowsFallback:i})=>{const[a]=m.useState([]);return e.jsxDEV(p,{tableConfig:{noRowsFallback:i,containerStyle:{height:500}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,n,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const io=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,io as __namedExportsOrder,so as default};
