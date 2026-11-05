import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BVrHFT75.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-BmCtJZgM.js";import"./vendor-6eBWuSjz.js";import"./react-is-Clcustum.js";import"./styled-components-BMGTmUgW.js";import"./@tanstack/react-virtual-MDtUeDVT.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-Bd7TxczU.js";import"./IconButton-CVfJD9ZB.js";import"./@salutejs/plasma-icons-DDZ7vpYp.js";import"./@salutejs/sdds-finai-Bq94c94L.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-Mo0b1AE1.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-RIpr-WH3.js";import"./TextField-D0-SE7LU.js";import"./sharedUtilsInputs-DJN6M3V5.js";import"./AiAgentPopup-DEEphtwC.js";import"./TextArea-BY846Dna.js";import"./sharedUtilsResizable-BHwU7PNv.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DCuD2Q45.js";import"./react-data-grid-C5E-kGD5.js";import"./TableTabs-CPhmfmwG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-HF4-ajsi.js";import"./@glideappsfinal/glide-data-grid-BR6y2PD1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-ChGoYK2c.js";import"./ListOfFilters-DMVFL3da.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-yEuURSWU.js";import"./EmptyState-BetWUex8.js";import"./MassActions-CtkkkBbe.js";import"./Autocomplete-zticeCZD.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const ee=["Summary"];export{e as Summary,ee as __namedExportsOrder,Y as default};
