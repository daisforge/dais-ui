import{r,b as a}from"./react-B60MRyL7.js";import{c as p}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-CkkSfJnP.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{e as c}from"./Table-mS3yBKw8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-XfTeUJpE.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-D98J-t6t.js";import"./@tanstack/react-virtual-x3DCBAvN.js";import"./WithTooltip-KJL26V4Q-DjtuYyC3.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-DOrxotJ8.js";import"./@salutejs/plasma-icons-DZ_qGP0a.js";import"./index-CFmWNdNb.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-D8xS8sHk.js";import"./Box-QuskhUSb.js";import"./Collapse-CN78cPJP.js";import"./utils-DKVFVmUS.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CbKJ8Xc_.js";import"./TableTabs-DLlWKgNM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Ci75rTFY.js";import"./@glideappsfinal/glide-data-grid-BqXwzbnk.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-CHBPekjk.js";import"./TextField-CBiCiUMp.js";import"./sharedUtilsInputs-Ujbxbbaa.js";import"./TypographyWithAutoTooltip-CQBksfgh.js";import"./Typography-BCWCJaUP.js";import"./ListOfFilters-j_YZsInD.js";import"./FiltersActions-B9lffWVe.js";import"./IconButton-CYvWJ9E3.js";import"./TooltipList-Cutfk6au.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CLyIj3Wh.js";import"./NumberFormat-DOwy79Y_.js";import"./EmptyState-UM83DCUu.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-BE2sZqJw.js";import"./Autocomplete-D6CK_f1R.js";const ae={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
