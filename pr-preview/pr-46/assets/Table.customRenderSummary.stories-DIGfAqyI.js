import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-UCfjiBCh.js";import u from"./DocStoryTemplate-Dt6KH5ne.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-CVM1c2rG.js";import"./vendor-Ca3Rcr5K.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BcPC5tlA.js";import"./IconButton-CYx5m0ft.js";import"./@salutejs/plasma-icons-DH_et0Tb.js";import"./@salutejs/sdds-finai-BaaqQyG7.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-BOxIorbb.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CsOzBWtM.js";import"./TextField-Cv5gnzPi.js";import"./sharedUtilsInputs-CmFty-7o.js";import"./AnalyticalWidget-D8Q0DXRg.js";import"./Collapse-bo3y3zGA.js";import"./react-data-grid-Db8xSdWG.js";import"./TableTabs-3d7-vUiX.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-10XYhfcZ.js";import"./ListOfFilters-HU-n75dk.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cr0Censf.js";import"./EmptyState-ClfJf7Jw.js";import"./MassActions-C8FUeNyw.js";import"./Autocomplete-CEyrEhAi.js";const q={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
