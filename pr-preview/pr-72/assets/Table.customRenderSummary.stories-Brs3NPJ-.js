import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-DzYQ9TYg.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BjvK_Bio.js";import"./vendor-CG28KnHz.js";import"./react-is-Clcustum.js";import"./styled-components-qe2QC9YJ.js";import"./@tanstack/react-virtual-DzByvrD7.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CIZi69_k.js";import"./IconButton-CYtyWigL.js";import"./@salutejs/plasma-icons-D8Td9xg-.js";import"./@salutejs/sdds-finai-ir0_aBO1.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CAyeBJPZ.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bjp-QdnC.js";import"./TextField-DItmXp8g.js";import"./sharedUtilsInputs-B0tA7d5A.js";import"./AnalyticalWidget-C7mTb1d7.js";import"./Collapse-DPI2n5nh.js";import"./react-data-grid-BXegpmHc.js";import"./TableTabs-CQ_0rqpV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DHYiwQ0D.js";import"./ListOfFilters-D2GenVS0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DBX2pIbD.js";import"./EmptyState-C6bkYL6A.js";import"./MassActions-Cg0jnma4.js";import"./Autocomplete-BFhJ3y1E.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
