import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CULZMprL.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DBrSESem.js";import"./vendor-D5ksoKVH.js";import"./react-is-Clcustum.js";import"./styled-components-D25eSAdU.js";import"./@tanstack/react-virtual-CcsrX5aI.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CiLziyST.js";import"./IconButton-DCipKgzy.js";import"./@salutejs/plasma-icons-BRkukb6y.js";import"./@salutejs/sdds-finai-G2aVpXbv.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-DY9d88UX.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-hGH9Ev5B.js";import"./TextField-Zdhnrw9a.js";import"./sharedUtilsInputs-CyrAJ58I.js";import"./AnalyticalWidget-B93Ec9oI.js";import"./Collapse-BbCxqkVZ.js";import"./react-data-grid-jPm4j1rq.js";import"./TableTabs-Bfy9HsUo.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DqNGPxPU.js";import"./ListOfFilters-Be1Y1HD9.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BUGjpCZS.js";import"./EmptyState-DhJ9FPgN.js";import"./MassActions-D_W-S-Ep.js";import"./Autocomplete-B8q4vCvI.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
