import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-fem7FPN4.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-RvW8Zx2O.js";import"./vendor-DUKY-ZmD.js";import"./react-is-Clcustum.js";import"./styled-components-DexUWfrL.js";import"./@tanstack/react-virtual-Cr0lIrFi.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-D-_B-hw1.js";import"./IconButton-2EYMx7xU.js";import"./@salutejs/plasma-icons-Dih4v0gS.js";import"./@salutejs/sdds-finai-BlXmPeRI.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-B7bM75xW.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DzoDF2Cl.js";import"./TextField-DTWtGsZA.js";import"./sharedUtilsInputs-nTDdyG6d.js";import"./AiAgentPopup-B3a2_caC.js";import"./TextArea-CRKH8gvq.js";import"./sharedUtilsResizable-BNivU2A4.js";import"./Collapse-dGbLemZS.js";import"./react-data-grid-UAUG1bC3.js";import"./TableTabs-COpRDDVL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CR1B7ydz.js";import"./@glideappsfinal/glide-data-grid-B3ucdcmY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DiIgDDKz.js";import"./ListOfFilters-L7YV_Ybl.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-odUQWjcD.js";import"./EmptyState-Bicjyxvj.js";import"./MassActions-BRGBzJ8j.js";import"./Autocomplete-BBqSmVvF.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
