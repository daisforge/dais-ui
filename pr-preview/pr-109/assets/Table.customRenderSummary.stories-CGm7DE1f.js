import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-gjBC_cpo.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DFX6z6A1.js";import"./vendor-B1FACA_r.js";import"./react-is-Clcustum.js";import"./styled-components-Czlu6qqr.js";import"./@tanstack/react-virtual-DrX0EFe1.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CH8xaauD.js";import"./IconButton-C-n7bJYM.js";import"./@salutejs/plasma-icons-CjbHVl0P.js";import"./@salutejs/sdds-finai--PuHMRoP.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-CKv0bhEo.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BmI589K5.js";import"./TextField-CahOn8UN.js";import"./sharedUtilsInputs-CiVsvasY.js";import"./AnalyticalWidget-DvMXWrwT.js";import"./Collapse-DXoZuUZL.js";import"./react-data-grid-DX8YTic5.js";import"./TableTabs-C8VF7wqq.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CljnP9UF.js";import"./ListOfFilters-DRScLidy.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BqQnF-7W.js";import"./EmptyState-C7Z_QCow.js";import"./MassActions-CqJY4Osk.js";import"./Autocomplete-Baz1F-1u.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
