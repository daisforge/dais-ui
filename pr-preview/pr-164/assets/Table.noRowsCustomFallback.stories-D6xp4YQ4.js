import{r as m,b as e}from"./react-B60MRyL7.js";import u from"./DocStoryTemplate-DmnAHCX7.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{B as p}from"./Box-UVnFPpqO.js";import{e as c}from"./Table-CegbLRas.js";import{an as b}from"./@salutejs/plasma-icons-Bl-ri76g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-qSGXd1Us.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BH12kIqh.js";import"./@tanstack/react-virtual-CQvpRoFv.js";import"./WithTooltip-KJL26V4Q-Bf1S2iVs.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-Cth5UJp1.js";import"./index-D3ChpMdG.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-B4W7VlQo.js";import"./Collapse-D79jXGjm.js";import"./utils-B7_zEzfW.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-DdOkLnO5.js";import"./TableTabs-PtysdENq.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D1AUYKr0.js";import"./@glideappsfinal/glide-data-grid-DdEoqChm.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-C_u5ZF-c.js";import"./TextField-X5vkWZJa.js";import"./sharedUtilsInputs-D3YGUQmt.js";import"./TypographyWithAutoTooltip-BNo6cJUf.js";import"./Typography-CJsT5EYe.js";import"./ListOfFilters-DV6d6SbJ.js";import"./FiltersActions-D_gtSzeF.js";import"./IconButton-D064SFCb.js";import"./TooltipList-Ur2omvrs.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C_H9aUMK.js";import"./NumberFormat-C79yXn_p.js";import"./EmptyState-BiVcrQEz.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-CiDaeXFw.js";import"./Autocomplete-CAO9LeTB.js";const uo={title:"Локальные компоненты/Table/No Rows Fallback/Custom",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
