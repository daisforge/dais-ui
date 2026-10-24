import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-CDRG2fMx.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-YzRJBPMf.js";import"./vendor-DKgVyX2L.js";import"./react-is-Clcustum.js";import"./styled-components-QcKq8yyO.js";import"./@tanstack/react-virtual-DeJ2XhRM.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-yJ24-sMA.js";import"./IconButton-DzGtIrYh.js";import"./@salutejs/plasma-icons-B-uWCUvG.js";import"./@salutejs/sdds-finai-MgJxvWJH.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BaaPIBp8.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Chi_dMtZ.js";import"./TextField-C6dAK4iF.js";import"./sharedUtilsInputs-CTCmk_Eq.js";import"./AiAgentPopup-bCdyYi9W.js";import"./TextArea-DKagOhFu.js";import"./sharedUtilsResizable-_GDHoPjT.js";import"./Collapse-IBBAdzJy.js";import"./react-data-grid-Dag3u3m7.js";import"./TableTabs-hoMdNnWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DRRkL-9u.js";import"./@glideappsfinal/glide-data-grid-DYI0fUTl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-SCYYfULM.js";import"./ListOfFilters-ASzZ-zYH.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CAG3C_Yq.js";import"./EmptyState-isgyqG0r.js";import"./MassActions-cfj1yS0P.js";import"./Autocomplete-DIS1VcM6.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
