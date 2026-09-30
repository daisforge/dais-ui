import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CJ-YaiSZ.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-EsFjCLTG.js";import"./vendor-DqQCmxmm.js";import"./react-is-Clcustum.js";import"./styled-components--zCpJVsD.js";import"./@tanstack/react-virtual-DgvNON5s.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bl3UKymH.js";import"./IconButton-C2q5tokh.js";import"./@salutejs/plasma-icons-f15osSgJ.js";import"./@salutejs/sdds-finai-BUrBKjr7.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CKZadLyT.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BoPQGwRr.js";import"./TextField-D524t277.js";import"./sharedUtilsInputs-BM-tpxmZ.js";import"./AnalyticalWidget-DV5tydln.js";import"./Collapse-CvUgWpxr.js";import"./react-data-grid-BswgtMy3.js";import"./TableTabs-B2CGtRSV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Cev9Uwq_.js";import"./ListOfFilters-CQp8fEJT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-yAyuYmOs.js";import"./EmptyState-DBprgn-p.js";import"./MassActions-Ct5flYR2.js";import"./Autocomplete-VnanL2lj.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
