import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BCTeHdf-.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CXltTo73.js";import"./vendor-YHRYeQna.js";import"./react-is-Clcustum.js";import"./styled-components-egl4WZWx.js";import"./@tanstack/react-virtual-DiLt45p2.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CCQLkCc5.js";import"./IconButton-D1tbsOLX.js";import"./@salutejs/plasma-icons-BuYXq1qK.js";import"./@salutejs/sdds-finai-DNMRn4Q7.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-BE2UrxrW.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CIjdXmm7.js";import"./TextField-B3OkzgZj.js";import"./sharedUtilsInputs-Q6RYrUIJ.js";import"./AnalyticalWidget-CNgldML7.js";import"./Collapse-ClewjDaJ.js";import"./react-data-grid-CMFZnrfx.js";import"./TableTabs-Cw637UQ4.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-jPIV2kYM.js";import"./ListOfFilters-Czjv0wf6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Dc-ong2v.js";import"./EmptyState-DYaqjN5q.js";import"./MassActions-BvKP2GEJ.js";import"./Autocomplete-CABHmnkJ.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
