import{r,b as a}from"./react-UEdzNlUe.js";import{c as p}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-CTkYF0De.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{c}from"./Table-BXCaKsQR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DX-rrd2O.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BSCswbR3.js";import"./@tanstack/react-virtual-Z5qLdlzb.js";import"./WithTooltip-KJL26V4Q-DcXzCKCN.js";import"./preload-helper-D_QroZNQ.js";import"./index-Cu4lwwaE.js";import"./index-CTuxd491.js";import"./Switch-OG9YqfkE.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-C9AHDOh5.js";import"./Box-3Z-m9LhI.js";import"./Collapse-DxXZ8FX5.js";import"./utils-BfZGf093.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CGioElEJ.js";import"./react-data-grid-RlxbDazV.js";import"./TableTabs-DfbZiZGK.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BkBItzIh.js";import"./@daisforge/glide-data-grid-Wm3ldDBT.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-WSVmxtub.js";import"./TextField-tPdr40MJ.js";import"./sharedUtilsInputs-DVbCzzFV.js";import"./TypographyWithAutoTooltip-BoevugKD.js";import"./Typography-ECIfOeen.js";import"./ListOfFilters-DTFMRxtN.js";import"./FiltersActions-C1G2Wud3.js";import"./IconButton-DZJTAkfX.js";import"./TooltipList-WyihhvAI.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BJUVgxKS.js";import"./NumberFormat-BTqmTjfQ.js";import"./EmptyState-c_sJR1Bo.js";import"./unidentified@3x-COcUX83p.js";import"./MassActions-DRrmSh4N.js";import"./Autocomplete-Dh8j0tgJ.js";const ae={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
