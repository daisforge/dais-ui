import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CwPMLG6P.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-DNniupUb.js";import"./vendor-COwMm0za.js";import"./react-is-Clcustum.js";import"./styled-components-CE-uo-6d.js";import"./@tanstack/react-virtual-Djp4Fi96.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-nV8CeMTC.js";import"./IconButton-CcBBhSiV.js";import"./@salutejs/plasma-icons-DTttYHJN.js";import"./@salutejs/sdds-finai-IQg76LzD.js";import"./@salutejs/sdds-themes-Vr3JnkPl.js";import"./utils-DNQYxIkO.js";import"./constants-v5_v1I5t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-KrQX0bHg.js";import"./TextField-DUu2W4KW.js";import"./sharedUtilsInputs-r7eF8f6G.js";import"./AiAgentPopup-B3AOKj3I.js";import"./TextArea-7Ax-7Aal.js";import"./sharedUtilsResizable-CfYaji3Z.js";import"./Collapse-DgjnN8dP.js";import"./react-data-grid-Bohr1s08.js";import"./TableTabs-DG-QM4lW.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BVLTvjZz.js";import"./@glideappsfinal/glide-data-grid-oedSHeBc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CVlK0W18.js";import"./ListOfFilters-D6GvcTFc.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DLKtafj0.js";import"./EmptyState-TJhjOHQE.js";import"./MassActions-Capyk4x4.js";import"./Autocomplete-aE86xpUc.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
