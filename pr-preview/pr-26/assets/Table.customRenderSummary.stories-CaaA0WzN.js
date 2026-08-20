import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-BF-2hrN9.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DhRPQ3-X.js";import"./vendor-CxqVO1eN.js";import"./react-is-Clcustum.js";import"./styled-components--DGtfFZ_.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BB7wGjGo.js";import"./IconButton-IIyNEnki.js";import"./@salutejs/plasma-icons-Bgg_GZ9Y.js";import"./@salutejs/sdds-finai-O6aB6XRK.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-Dq7DOKe0.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-_3jV5Wqs.js";import"./TextField-B0zq11mB.js";import"./sharedUtilsInputs-BCuGArux.js";import"./AnalyticalWidget-Cemolxg4.js";import"./Collapse-DcE9k8Sk.js";import"./react-data-grid-C6YLd9u2.js";import"./TableTabs-BFfCJPwv.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-xbNKTiYm.js";import"./ListOfFilters-BoOfB_Ye.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D87OJDP1.js";import"./EmptyState-D0DIF487.js";import"./MassActions-Phu5kWIJ.js";import"./Autocomplete-CUsXLTin.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const J=["Summary"];export{e as Summary,J as __namedExportsOrder,q as default};
