import{r as a,j as e}from"./react-DYHuXpTF.js";import u from"./DocStoryTemplate-DXKmSnyp.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-2OtfpzOT.js";import{c as l}from"./Table-DS_ifQdK.js";import{an as d}from"./@salutejs/plasma-icons-EIkzXMi-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-4go4qBMz.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-DDsYmQNq.js";import"./@tanstack/react-virtual-BBX7Noea.js";import"./WithTooltip-KJL26V4Q-vPnt8NfR.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CAE-Y7vG.js";import"./Switch-KECbQF2z.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-C2CeMSda.js";import"./Collapse-DvjEILT3.js";import"./utils-Cr0_bERK.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CPV7JIIy.js";import"./TableTabs-DAZ_3Byo.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-DIJ_h18-.js";import"./TextField-CYooKCoB.js";import"./sharedUtilsInputs-Cv7WBy-o.js";import"./Typography-ComT6ZJz.js";import"./ListOfFilters-BUydk7WI.js";import"./FiltersActions-6Mh-YlfW.js";import"./IconButton-DsDRIEsy.js";import"./Tooltip-B7z40_Hf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CO4by0Sc.js";import"./NumberFormat-Yp9-4Qey.js";import"./EmptyState-DRm7_2iP.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CFR-QT8K.js";import"./Autocomplete-BQgFMGME.js";const io={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},f=`
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
`,y=e.jsx(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"}),o={...p({preCode:f,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:y},columnConfig:[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(d,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:i,noRowsFallback:s})=>{const[m]=a.useState([]);return e.jsx(l,{tableConfig:{noRowsFallback:s,containerStyle:{height:500}},columnConfig:i,rows:m})}};var t,r,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const so=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,so as __namedExportsOrder,io as default};
