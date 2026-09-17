import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BuSM3w1r.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BCf7tdbs.js";import"./vendor-DJU5N2B7.js";import"./react-is-Clcustum.js";import"./styled-components-BNpt5jar.js";import"./@tanstack/react-virtual-BolgHukU.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BRVtPRmD.js";import"./IconButton-CcHWT3eC.js";import"./@salutejs/plasma-icons-DHjMz4Sp.js";import"./@salutejs/sdds-finai-Be0QV20K.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CvlI6AWW.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DVQsDzEi.js";import"./TextField-VnOJB2-L.js";import"./sharedUtilsInputs-DVOV_UZp.js";import"./AnalyticalWidget-CISrZFfS.js";import"./Collapse-BNAkxNH3.js";import"./react-data-grid-GLoasi1p.js";import"./TableTabs-6UwgWZX0.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CeLIysmj.js";import"./ListOfFilters-BpH_fkY0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DcLI9GnU.js";import"./EmptyState-Db9UL0jC.js";import"./MassActions-oyzrm0ai.js";import"./Autocomplete-DnNgD-wl.js";const J={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
