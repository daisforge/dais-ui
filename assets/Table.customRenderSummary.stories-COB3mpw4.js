import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CW0G7jtC.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CqpCFdmK.js";import"./vendor-DaS3N6lV.js";import"./react-is-Clcustum.js";import"./styled-components-By-Qua6E.js";import"./@tanstack/react-virtual-bE6tDT6W.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BPlwyOA9.js";import"./IconButton-DN_vLAqh.js";import"./@salutejs/plasma-icons-DYi7Td5X.js";import"./@salutejs/sdds-finai-CE284srQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-LFsJSXST.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CPQ5Zm8W.js";import"./TextField-C669WM3p.js";import"./sharedUtilsInputs-B_93GBuf.js";import"./AnalyticalWidget-Dwwt6g9d.js";import"./Collapse-DJnuAkJg.js";import"./react-data-grid-Ci-iu5WB.js";import"./TableTabs-BloZZaWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ck4cf0_p.js";import"./ListOfFilters-NZpGeeo8.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CMG8MZiW.js";import"./EmptyState-BJxE2lSo.js";import"./MassActions-DcWWP5Ns.js";import"./Autocomplete-A6BK-6Vg.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[m]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const K=["Summary"];export{e as Summary,K as __namedExportsOrder,J as default};
