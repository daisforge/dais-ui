import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-qSq0pd_i.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-D--hp4s0.js";import"./vendor-Cn9f_vf9.js";import"./react-is-Clcustum.js";import"./styled-components-rplWZAgX.js";import"./@tanstack/react-virtual-CP07bF08.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DJqehWV8.js";import"./IconButton-CipKBvsh.js";import"./@salutejs/plasma-icons-BaISJh78.js";import"./@salutejs/sdds-finai-DndbtfIu.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DHlQT5zI.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DeNQ8Slc.js";import"./TextField-CRbIlnvR.js";import"./sharedUtilsInputs-C82K2v0R.js";import"./AiAgentPopup-CqmS21P_.js";import"./TextArea-MlAk76rK.js";import"./sharedUtilsResizable-dmFf3dH5.js";import"./Collapse-CyQzpe5_.js";import"./react-data-grid-R-brS_Re.js";import"./TableTabs-Cc6qxnzs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BdKwzIcM.js";import"./@glideappsfinal/glide-data-grid-7iGQeAP3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CJjZLYrn.js";import"./ListOfFilters-B_J2gAbK.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cd4jurPz.js";import"./EmptyState-BnrsqZSN.js";import"./MassActions-CRr4zqZV.js";import"./Autocomplete-CKUnNaab.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[m]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Y=["Summary"];export{e as Summary,Y as __namedExportsOrder,W as default};
