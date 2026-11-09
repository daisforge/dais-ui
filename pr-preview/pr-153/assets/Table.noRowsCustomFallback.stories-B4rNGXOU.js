import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-DTkyiz2F.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-BLVowlXD.js";import{f as p}from"./Table-aZX8yLyR.js";import{rW as b}from"./@salutejs/plasma-icons-Djzn6CKf.js";import"./vendor-CFc4-7Jd.js";import"./react-is-Clcustum.js";import"./styled-components-DovKJdjj.js";import"./@tanstack/react-virtual-DWoDfeV2.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CeVBMsH2.js";import"./IconButton-DE9Sh8zI.js";import"./@salutejs/sdds-finai-CnvN9Ub_.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-3l8ykBQF.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-C5Tl7ypA.js";import"./sharedUtilsInputs-cFXSU-6k.js";import"./AiAgentPopup-BEpt9dNu.js";import"./TextArea-BceZCdLD.js";import"./sharedUtilsResizable-CFfwexD1.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CcEfL7lO.js";import"./react-data-grid-jVs33wBT.js";import"./TableTabs-Dbt4U854.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BTNKI3-N.js";import"./@glideappsfinal/glide-data-grid-CFO_0xaS.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DIKPpMft.js";import"./ListOfFilters-Dm4Pda3y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FNYxGGLD.js";import"./EmptyState-CfctcnUG.js";import"./MassActions-gkg95n9N.js";import"./Autocomplete-BknfDEPG.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
