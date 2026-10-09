import{r as m,d as o}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-qx-PZ3pk.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-B3n0ev6h.js";import{f as p}from"./Table-Q65CvKOT.js";import{rT as b}from"./@salutejs/plasma-icons-B39iMR5e.js";import"./vendor-m8ptr2NK.js";import"./react-is-Clcustum.js";import"./styled-components-B4nx6Z04.js";import"./@tanstack/react-virtual-T6w5YrM7.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-H5ntWuON.js";import"./IconButton-CbjzGPcl.js";import"./@salutejs/sdds-finai-CKzZmfdH.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-0LQegF5b.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DERuA4Nu.js";import"./sharedUtilsInputs-BJdvlc2m.js";import"./AiAgentPopup-DVfjVdJ6.js";import"./TextArea-2f258Naa.js";import"./sharedUtilsResizable-BGoHR4Ou.js";import"./Collapse-DUmKgMT1.js";import"./react-data-grid-DKzBhZuS.js";import"./TableTabs-D6SEcbTs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-fqZQHYan.js";import"./@glideappsfinal/glide-data-grid-DGM0WF9M.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSjJSxVv.js";import"./ListOfFilters-B6QAAqwx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BhoeGIjn.js";import"./EmptyState-C0F7Jmuu.js";import"./MassActions-Cro695pV.js";import"./Autocomplete-B4Ne9UH9.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,f=o.jsxDEV(c,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:43,columnNumber:3},void 0),e={...l({preCode:d,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:f},columnConfig:[{key:"id",name:o.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",o.jsxDEV(b,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:73,columnNumber:11},void 0)},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:t,noRowsFallback:i})=>{const[a]=m.useState([]);return o.jsxDEV(p,{tableConfig:{noRowsFallback:i,containerStyle:{height:500}},columnConfig:t,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.noRowsFallback/Table.noRowsCustomFallback.stories.tsx",lineNumber:106,columnNumber:7},void 0)}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const ee=["NoRowsCustomFallback"];export{e as NoRowsCustomFallback,ee as __namedExportsOrder,Y as default};
