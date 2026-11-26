import{r as a,j as e}from"./react-DYHuXpTF.js";import p from"./DocStoryTemplate-BHnLMKCH.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-DwiKSnnX.js";import{c as l}from"./Table-C_DGHpTp.js";import{an as d}from"./@salutejs/plasma-icons-DAdkqmmH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DQaMhftP.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./Switch-BJtGJ7E8.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-BHH5Fs72.js";import"./Collapse-mn0OPShb.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-BAmL3Ore.js";import"./TableTabs-xg-axVyL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C3Xjc3-S.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B0aoQ6gP.js";import"./TextField-WPWvh7a6.js";import"./sharedUtilsInputs-DA0RRQ70.js";import"./TypographyWithAutoTooltip-CtrkPLGH.js";import"./Typography-DEItZ0E3.js";import"./ListOfFilters-DEV2tGcA.js";import"./FiltersActions-B5_R_0AW.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-CYbTJlTb.js";import"./EmptyState-DDJZV3Q6.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-uR19bOd1.js";import"./Autocomplete-CuNqi1cT.js";const po={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:p}}},f=`
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
`,y=e.jsx(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"}),o={...u({preCode:f,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:y},columnConfig:[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(d,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:i,noRowsFallback:m})=>{const[s]=a.useState([]);return e.jsx(l,{tableConfig:{noRowsFallback:m,containerStyle:{height:500}},columnConfig:i,rows:s})}};var t,r,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const uo=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,uo as __namedExportsOrder,po as default};
