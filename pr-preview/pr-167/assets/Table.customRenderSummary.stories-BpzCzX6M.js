import{r,b as a}from"./react-B60MRyL7.js";import{c as p}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-CP6YPNYf.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{e as c}from"./Table-BsATGSzR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BjyhLeYF.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";import"./WithTooltip-KJL26V4Q-D-zwhmkZ.js";import"./preload-helper-BUAZWbk6.js";import"./index-Cu4lwwaE.js";import"./index-TL0b5yJv.js";import"./@salutejs/plasma-icons-B_5a5nWb.js";import"./index-DENfdpz2.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-NC4lN6Af.js";import"./Box--F0xJqmw.js";import"./Collapse-CvmNuHeJ.js";import"./utils-DU2v-Kn3.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-uMNe3011.js";import"./TableTabs-CeiuIDe5.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B-sUn46p.js";import"./@glideappsfinal/glide-data-grid-CKeaAZno.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-BwgHAUTB.js";import"./TextField-CGTh6kAa.js";import"./sharedUtilsInputs-B878LDVL.js";import"./TypographyWithAutoTooltip-DZRMakA4.js";import"./Typography-DEV1YILe.js";import"./ListOfFilters-DnpjyhAh.js";import"./FiltersActions-Cp5W4vvP.js";import"./IconButton-SVhgWQko.js";import"./TooltipList-BlFBxf18.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrIt19Sz.js";import"./NumberFormat-0Wv51lwB.js";import"./EmptyState-B_7W5YtK.js";import"./unidentified@3x-CJfTaq4R.js";import"./MassActions-RRA17cRW.js";import"./Autocomplete-CE19l179.js";const ae={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[n]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,i,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const pe=["Summary"];export{e as Summary,pe as __namedExportsOrder,ae as default};
