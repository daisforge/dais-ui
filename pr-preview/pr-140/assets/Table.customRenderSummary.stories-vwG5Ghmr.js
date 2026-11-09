import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-Bm_Oj0z3.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DmuAstj5.js";import"./vendor-D9yMgLPo.js";import"./react-is-Clcustum.js";import"./styled-components-OgUQMZXz.js";import"./@tanstack/react-virtual-BM_5ionr.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DxiicKfY.js";import"./IconButton-BXb68VkC.js";import"./@salutejs/plasma-icons-SFTiOUvf.js";import"./@salutejs/sdds-finai-BcE3eyQF.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-Cl6WWoGX.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CosW2s3A.js";import"./TextField-DraMCjNX.js";import"./sharedUtilsInputs-Ck5yP1gC.js";import"./AiAgentPopup-ZzlEkTA_.js";import"./TextArea-DyWT7sVd.js";import"./sharedUtilsResizable-BKQ41wCi.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-aXaFMJf0.js";import"./react-data-grid-uqI5kvQq.js";import"./TableTabs-RrUeWZbs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CEu6kBhT.js";import"./@glideappsfinal/glide-data-grid-j2h7MKwi.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-ChUxs4OT.js";import"./ListOfFilters-CLNHVD0N.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Ca_D337R.js";import"./EmptyState-DHOkVsTD.js";import"./MassActions-B_L53EAf.js";import"./Autocomplete-CJfd2ggv.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[m]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const ee=["Summary"];export{e as Summary,ee as __namedExportsOrder,Y as default};
