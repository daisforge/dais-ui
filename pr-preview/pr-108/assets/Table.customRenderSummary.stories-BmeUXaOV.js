import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-C1WBAfeL.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BwiqDg7N.js";import"./vendor-y6J4V6et.js";import"./react-is-Clcustum.js";import"./styled-components-DJiEvwJZ.js";import"./@tanstack/react-virtual-by8lNOKG.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BPtI425u.js";import"./IconButton-DscvSHWG.js";import"./@salutejs/plasma-icons-DVfRkl1w.js";import"./@salutejs/sdds-finai-xsnoJ7gQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CzqykYZG.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BXL7hkL7.js";import"./TextField-Vt89hYQT.js";import"./sharedUtilsInputs-Dcs7ppj8.js";import"./AnalyticalWidget-C7YKVzeW.js";import"./Collapse-B8YzBrEG.js";import"./react-data-grid-ClyGA73Q.js";import"./TableTabs-CGM386qX.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CuK77JjL.js";import"./ListOfFilters-vgQIOnki.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-5QnB3AFE.js";import"./EmptyState-i_1zDRlP.js";import"./MassActions-CFgRVdrn.js";import"./Autocomplete-CHvdx506.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
