import{r as m,d as e}from"./react-D2T61mpp.js";import u from"./DocStoryTemplate-C2lVLKWV.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as c}from"./Box-a_ZxBekU.js";import{f as p}from"./Table-B92nXydU.js";import{rW as b}from"./@salutejs/plasma-icons-DBwPuxT_.js";import"./vendor-C2wfsRrl.js";import"./react-is-Clcustum.js";import"./styled-components-ClAFA1pS.js";import"./@tanstack/react-virtual-Cxq0PS7B.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Cmf1HmdR.js";import"./IconButton-DeWJOMej.js";import"./@salutejs/sdds-finai-mb0_wFqo.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-B1BgiuVf.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BjiTsV6X.js";import"./sharedUtilsInputs-BHgzGTRE.js";import"./AiAgentPopup-esetPzD1.js";import"./TextArea-D0ReWZFC.js";import"./sharedUtilsResizable-HEc-nR9h.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-O6nU6Hfe.js";import"./react-data-grid-CH1UaqJV.js";import"./TableTabs-wcVNwTrN.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BcK1DyIg.js";import"./@glideappsfinal/glide-data-grid-ivCXHXtO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DgTmRMhl.js";import"./ListOfFilters-BFjaWVZN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DP7BgNDX.js";import"./EmptyState--CB9xCUL.js";import"./MassActions-DN5qFUTC.js";import"./Autocomplete-Dr5YKrqX.js";const oo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
