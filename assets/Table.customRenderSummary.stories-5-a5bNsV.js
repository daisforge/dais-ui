import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Cfhok6MY.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Di2fEJCk.js";import"./vendor-CSAr92if.js";import"./react-is-Clcustum.js";import"./styled-components-ZBTAG_Yl.js";import"./@tanstack/react-virtual-B8iA4ZKy.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BKFtPxyb.js";import"./IconButton-b3a_3ixI.js";import"./@salutejs/plasma-icons-okGG1xc8.js";import"./@salutejs/sdds-finai-DjVIg8A-.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-CYEse6yn.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jB8XDFU9.js";import"./TextField-DBFBb3W8.js";import"./sharedUtilsInputs-B-me6R4C.js";import"./AnalyticalWidget-CLSSgCQw.js";import"./Collapse-H8U_Ale8.js";import"./react-data-grid-B6EFrvhw.js";import"./TableTabs-BXVZBURa.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CS_ICbFc.js";import"./ListOfFilters-cpcetn1F.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DoOkwcp3.js";import"./EmptyState-CKBYiGrU.js";import"./MassActions-CFvZieSq.js";import"./Autocomplete-CJ0yZAju.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
