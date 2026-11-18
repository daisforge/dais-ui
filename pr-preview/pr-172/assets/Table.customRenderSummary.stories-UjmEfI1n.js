import{r,d as a}from"./react-Ch9mc9Aq.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BMnqrwnX.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BqT_x4Xo.js";import"./vendor-Ch15MtLz.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-Bq12dC3g.js";import"./@tanstack/react-virtual-Csp9i2bR.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DsQML19X.js";import"./IconButton-eOYKhOpS.js";import"./@salutejs/plasma-icons-BYYYccLM.js";import"./@salutejs/sdds-finai-DrNgC8XC.js";import"./@sddsjs/sdds_finai-BSDEmCin.js";import"./utils-CzOQd3gO.js";import"./constants-l0ilsueG.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B1SQihVo.js";import"./TextField-uO_Wxg3G.js";import"./sharedUtilsInputs-sKUSifhp.js";import"./AiAgentPopup-BnRwwsT1.js";import"./TextArea-DaNX-Ddd.js";import"./sharedUtilsResizable-CoFfWvJc.js";import"./Collapse-Bm3O7NKI.js";import"./react-data-grid-BUPZWLsC.js";import"./TableTabs-BFPUwQuo.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-z6FPpzH6.js";import"./@glideappsfinal/glide-data-grid-QHjQImj1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-6xwGqTPx.js";import"./ListOfFilters-Bnr4qN7z.js";import"./lodash.isequal-DQmZHUWu.js";import"./NumberFormat-BcqSWG7j.js";import"./EmptyState-CmZ09Z5o.js";import"./MassActions-BnnCiSrl.js";import"./Autocomplete-BEXnNUoH.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
