import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Bk3wOJ87.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-gOB4IGYA.js";import"./vendor-ChDLbh-g.js";import"./react-is-Clcustum.js";import"./styled-components-qgdzr3ie.js";import"./@tanstack/react-virtual-BuSkfkLN.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-DNQMxLei.js";import"./IconButton-DWjV5Nmy.js";import"./@salutejs/plasma-icons-CW9_2K5z.js";import"./@salutejs/sdds-finai-BBnADt4b.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BF1NMRjI.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bhr9pLA6.js";import"./TextField-DQGLlEy_.js";import"./sharedUtilsInputs-DQyeDr_g.js";import"./AnalyticalWidget-Uomu5oU2.js";import"./Collapse-CJ6YA1JY.js";import"./react-data-grid-f0Sezlr7.js";import"./TableTabs-Cxc3uK0I.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CLu3J-h6.js";import"./ListOfFilters-CjWloPrL.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C-sg79uI.js";import"./EmptyState-ge-u6Jvu.js";import"./MassActions-DUpCjrUM.js";import"./Autocomplete-C8wOHb-3.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
