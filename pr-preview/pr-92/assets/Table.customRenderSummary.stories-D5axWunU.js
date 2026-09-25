import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-Cd124LaY.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BFp9KCfd.js";import"./vendor-BQJg2Bc2.js";import"./react-is-Clcustum.js";import"./styled-components-CFcez-o8.js";import"./@tanstack/react-virtual-gmWiB3nU.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-UbM5QGtM.js";import"./IconButton-CO3KTSJX.js";import"./@salutejs/plasma-icons-G6-ZG7jG.js";import"./@salutejs/sdds-finai-elLnKBVN.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CZEILeU8.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BsiCI7Vx.js";import"./TextField-BlzaUtN7.js";import"./sharedUtilsInputs-YKrX7dgb.js";import"./AnalyticalWidget-eY3oyLAo.js";import"./Collapse-YXtPTr3r.js";import"./react-data-grid-x7qfIVV4.js";import"./TableTabs-Dcr5HJT_.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CsQvuk3C.js";import"./ListOfFilters-DhP46kgO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAii4OyS.js";import"./EmptyState-dW3dK5SZ.js";import"./MassActions-CZbGWPfX.js";import"./Autocomplete-3PvFmJGH.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
