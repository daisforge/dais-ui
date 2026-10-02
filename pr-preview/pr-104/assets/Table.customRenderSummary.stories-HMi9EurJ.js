import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CxsDc38I.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CAUi0lkO.js";import"./vendor-BvcVvwDD.js";import"./react-is-Clcustum.js";import"./styled-components-DkYsICcl.js";import"./@tanstack/react-virtual--HgHE1Sn.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Lx44sBMk.js";import"./IconButton-B-f_mams.js";import"./@salutejs/plasma-icons-BHNQraym.js";import"./@salutejs/sdds-finai-DbITWS7F.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DF4DmBGz.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BcIqMckQ.js";import"./TextField-BWD7zX4v.js";import"./sharedUtilsInputs-DGazgaCl.js";import"./AnalyticalWidget-CRYYR0GE.js";import"./Collapse-I35FON38.js";import"./react-data-grid-I5CoF-Sp.js";import"./TableTabs-B6Y8yfK5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DzV-HB9U.js";import"./ListOfFilters-BOwRI6CJ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BCzvae77.js";import"./EmptyState-C0ZZoZzv.js";import"./MassActions-B7v2fcG_.js";import"./Autocomplete-goMeYr4F.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
