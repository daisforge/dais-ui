import{r,j as a}from"./react-DNGZQ4GM.js";import{c as s}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-CIjOxglH.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{e as c}from"./Table-DkS74_Ap.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dp5lOscd.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BVeFqQYb.js";import"./@tanstack/react-virtual-YDfxzYL3.js";import"./WithTooltip-KJL26V4Q-D6M4H-sn.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-hXr06AUZ.js";import"./@salutejs/plasma-icons-Cqq3zXio.js";import"./index-0WdmXQbr.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-Cnm6FkwI.js";import"./Box-BKkW6WAc.js";import"./Collapse-C5wWRaBU.js";import"./utils-D8WPHrZl.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CdTfwxrA.js";import"./TableTabs-B4-ktLDB.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DtQPfSll.js";import"./@glideappsfinal/glide-data-grid-S2MyQhYl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B7rBkxde.js";import"./TextField-6naKsMBN.js";import"./sharedUtilsInputs-C0_NRSp2.js";import"./TypographyWithAutoTooltip-Cju-Nu1y.js";import"./Typography-BjVh6YV9.js";import"./ListOfFilters-B1s2HaSi.js";import"./FiltersActions-U8FmEHl2.js";import"./IconButton-DkyAo8ue.js";import"./TooltipList-BVqkwDIx.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CgEbMqyz.js";import"./NumberFormat-BljT1DEp.js";import"./EmptyState-BmKRlSr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3GAnQXt.js";import"./Autocomplete-jc_g5b5e.js";const ao={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},y=`
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
`,o={...l({preCode:y,previewSource:"shown"}),render:()=>{const[n]=r.useState(s),p=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:e})=>`${e.task} ${e.priority}`}],[]);return a.jsx(c,{tableConfig:{enableVirtualization:!1},columnConfig:p,rows:n})}};var t,i,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID'
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
    }, {
      key: 'total',
      name: 'Сумма title и priority',
      renderCell: ({
        row
      }) => \`\${row.task} \${row.priority}\`
    }], []);
    return <Table tableConfig={{
      enableVirtualization: false
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const so=["Summary"];export{o as Summary,so as __namedExportsOrder,ao as default};
