import{r as a,j as e}from"./react-CAOzMBF_.js";import u from"./DocStoryTemplate-Cf946dgV.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-DvvYTz20.js";import{f as c}from"./Table-glhZzvtX.js";import{rV as d}from"./@salutejs/plasma-icons-Do5ggeDI.js";import"./vendor-DmWczWMC.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DspWfuQa.js";import"./IconButton-DrFnI92n.js";import"./@salutejs/sdds-finai-Bupqgw5V.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-BRhO4Lv3.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BnC5Fgj6.js";import"./sharedUtilsInputs-C1mIJypF.js";import"./AiAgentPopup-lBYgWuVg.js";import"./TextArea-qBaIkj1x.js";import"./sharedUtilsResizable-CmwXdA8D.js";import"./Collapse-BWM9xDkM.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-BoRZJG4K.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CHkkl-bX.js";import"./@glideappsfinal/glide-data-grid-Bu0bvcrP.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-JvzeJz24.js";import"./ListOfFilters-BFq5NFJ5.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BpXHEye7.js";import"./EmptyState-2uV3UnBw.js";import"./MassActions-CNpB92nV.js";import"./Autocomplete-Cta89g6q.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},f=`
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
`,y=e.jsx(l,{$css:{gridColumn:"1/-1",display:"flex",justifyContent:"center",alignItems:"center"},children:"Нет данных"}),o={...p({preCode:f,previewSource:"shown"}),name:'Кастомизация контента "Нет данных"',args:{noRowsFallback:{custom:y},columnConfig:[{key:"id",name:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:["id",e.jsx(d,{size:"xs",color:"inherit"})]})},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}]},render:({columnConfig:i,noRowsFallback:s})=>{const[m]=a.useState([]);return e.jsx(c,{tableConfig:{noRowsFallback:s,containerStyle:{height:500}},columnConfig:i,rows:m})}};var t,n,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const oo=["NoRowsCustomFallback"];export{o as NoRowsCustomFallback,oo as __namedExportsOrder,Y as default};
