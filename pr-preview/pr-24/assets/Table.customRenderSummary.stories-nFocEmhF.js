import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-HaaPJ6-T.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-dS_q2168.js";import"./vendor-LViC24RH.js";import"./react-is-Clcustum.js";import"./styled-components--Gqam1Xr.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-CFKT28Lb.js";import"./IconButton-CWauitIv.js";import"./@salutejs/plasma-icons-Cpu0f1vH.js";import"./@salutejs/sdds-finai-Bz9xN3Et.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-nQz3OA2C.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-f_gtZhFV.js";import"./TextField-Bobgd_vN.js";import"./sharedUtilsInputs-7dfKMe2h.js";import"./AnalyticalWidget-fF7YSteX.js";import"./Collapse-BYtMXauB.js";import"./react-data-grid-EXl_r6YN.js";import"./TableTabs-D8GUesNj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CrB1z4ug.js";import"./ListOfFilters-CkdwTuPm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-5OggL8Cr.js";import"./EmptyState-NNrQ6HtT.js";import"./MassActions-nIvtPmoU.js";import"./Autocomplete-CNjyvMJW.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
