import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-fXsRFEYa.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-S7696BPp.js";import"./vendor-nSnuiptw.js";import"./react-is-Clcustum.js";import"./styled-components-DsZNNs-w.js";import"./@tanstack/react-virtual-CAA0jjtQ.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-nBCTBnD3.js";import"./IconButton-CbPE_gWK.js";import"./@salutejs/plasma-icons-B_eXmh7u.js";import"./@salutejs/sdds-finai-CSFR0wVB.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CHPzWAFN.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-JCo3npGg.js";import"./TextField-D7ZIctgB.js";import"./sharedUtilsInputs-DXjvF4h5.js";import"./AiAgentPopup-BuoscS2N.js";import"./TextArea-9kPq7Mwk.js";import"./sharedUtilsResizable-D3z9f6ge.js";import"./Collapse-dtWSPupa.js";import"./react-data-grid-C6hzsMmi.js";import"./TableTabs-BgUcvYrN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CWOrlegB.js";import"./@glideappsfinal/glide-data-grid-CdjXxGhJ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BefrI-5j.js";import"./ListOfFilters-BQ0OPniP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-8FbLn3N1.js";import"./EmptyState-CvzOjQ3o.js";import"./MassActions-RUCSa28k.js";import"./Autocomplete-CtDF64kr.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Y=["Summary"];export{e as Summary,Y as __namedExportsOrder,W as default};
