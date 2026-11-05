import{r as a,j as e}from"./react-CAOzMBF_.js";import u from"./DocStoryTemplate-C1pHB4bf.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{B as l}from"./Box-XTw4vK77.js";import{f as c}from"./Table-DzjWun1G.js";import{rV as d}from"./@salutejs/plasma-icons-BtDXuAzo.js";import"./vendor-COUnKIk6.js";import"./react-is-vVGXX3JE.js";import"./styled-components-C1B15yVD.js";import"./@tanstack/react-virtual-B1itPQWL.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BC8BYxSQ.js";import"./IconButton-cRL0IAtx.js";import"./@salutejs/sdds-finai-BQpWD0T8.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-CyEBHczw.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-CrPunC8v.js";import"./sharedUtilsInputs-Du34ehWd.js";import"./AiAgentPopup-DR_B1Obh.js";import"./TextArea-CqL1mOTI.js";import"./sharedUtilsResizable-CkVuP6HL.js";import"./Collapse-Dj6imdg8.js";import"./react-data-grid-BQEIwlEM.js";import"./TableTabs-XTpYqiJK.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Z66gDIhg.js";import"./@glideappsfinal/glide-data-grid-wboW74Q1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-_XLPlX4C.js";import"./ListOfFilters-CrNgZJBY.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-DNQiAvzm.js";import"./EmptyState-D8Y0_SYG.js";import"./MassActions-OOnnrfFA.js";import"./Autocomplete-zsB5S45X.js";const Y={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},f=`
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
