import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Wm_DR9ad.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-0kFC3Lal.js";import"./vendor-F9ObjaJa.js";import"./react-is-Clcustum.js";import"./styled-components-BMg9-w0p.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-VPyCTpwQ.js";import"./IconButton-DtffuIcG.js";import"./@salutejs/plasma-icons-0EXslhhn.js";import"./@salutejs/sdds-finai-JjQwskGp.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-D8HIcZbA.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jzJQgHn_.js";import"./TextField-dKvNb_uj.js";import"./sharedUtilsInputs-hJpo1uD8.js";import"./AnalyticalWidget-DDWbMLm3.js";import"./Collapse-B_tGtmJE.js";import"./react-data-grid-0aEugMiS.js";import"./TableTabs-CZrGv2cT.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DqvL-REi.js";import"./ListOfFilters-JYePQffA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DV38PmQn.js";import"./EmptyState-K4WfN0Gq.js";import"./MassActions-IwqK17tj.js";import"./Autocomplete-D0SEBI5J.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
