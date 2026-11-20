import{r as a,j as e}from"./react-DYHuXpTF.js";import p from"./DocStoryTemplate-C-m25YlE.js";import{s as u}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-C_lQk7q2.js";import{e as c}from"./Table-BeuILg_U.js";import{an as d}from"./@salutejs/plasma-icons-D-o9abDl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dy04e7eT.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./WithTooltip-KJL26V4Q-Dieti3TI.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./index-Cg1cr4lG.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./Collapse-zZc0zAuA.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-iaz8oMts.js";import"./TableTabs-BAGPZAp9.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C7GT6790.js";import"./@glideappsfinal/glide-data-grid-D3ux9yp-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B-Mi-ge4.js";import"./TextField-B64q6SkT.js";import"./sharedUtilsInputs-D_r5tJpr.js";import"./TypographyWithAutoTooltip-BrSLYzYH.js";import"./Typography-DwPpYq8F.js";import"./ListOfFilters-BWzVY63S.js";import"./FiltersActions-CwL8ss_u.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-DlOTHXMi.js";import"./EmptyState-v2opkloV.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-Cmd7hIQM.js";import"./Autocomplete-BQ1WJ6gc.js";const po={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:p}}},f=`
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
`,y=e.jsx(l,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"}),o={...u({preCode:f,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:y},columnConfig:[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(d,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:i,noRowsFallback:m})=>{const[s]=a.useState([]);return e.jsx(c,{tableConfig:{noRowsFallback:m,containerStyle:{height:500}},columnConfig:i,rows:s})}};var t,r,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
