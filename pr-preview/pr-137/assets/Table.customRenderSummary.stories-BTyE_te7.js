import{r,j as p}from"./react-CAOzMBF_.js";import{c as s}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-Cf946dgV.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-IHr9AgFh.js";import"./vendor-DmWczWMC.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DC5OcLmm.js";import"./IconButton-DrFnI92n.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./@salutejs/sdds-finai-Bupqgw5V.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-BRhO4Lv3.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DvvYTz20.js";import"./TextField-DIWm63dp.js";import"./sharedUtilsInputs-BEaEboVP.js";import"./AiAgentPopup-1SjAhyCf.js";import"./TextArea-XMbR00Hf.js";import"./sharedUtilsResizable-CmwXdA8D.js";import"./Collapse-BWM9xDkM.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-BoRZJG4K.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B5SQpGfi.js";import"./@glideappsfinal/glide-data-grid-B6Bq93xZ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B_fYt99y.js";import"./ListOfFilters-fm7QmTqx.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-CfsVK-wQ.js";import"./EmptyState-B4-5g1DV.js";import"./MassActions-BM0rVr1a.js";import"./Autocomplete-MjUZ7zQX.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},y=`
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
`,e={...l({preCode:y,previewSource:"shown"}),render:()=>{const[m]=r.useState(s),a=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return p.jsx(c,{tableConfig:{enableVirtualization:!1},columnConfig:a,rows:m})}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const Y=["Summary"];export{e as Summary,Y as __namedExportsOrder,W as default};
