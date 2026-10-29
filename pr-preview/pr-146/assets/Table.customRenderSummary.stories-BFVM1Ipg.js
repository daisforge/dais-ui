import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-C4a7uvc5.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-Deb9Du_S.js";import"./vendor-BTgOIwj0.js";import"./react-is-Clcustum.js";import"./styled-components-PB4DoqG2.js";import"./@tanstack/react-virtual-B3EvV2UQ.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-C1nZhs7l.js";import"./IconButton-BCM0YFM1.js";import"./@salutejs/plasma-icons-IcEIFYts.js";import"./@salutejs/sdds-finai-CsahcQ0V.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-B84KHSWA.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DRjMmnr9.js";import"./TextField--v3J_G2n.js";import"./sharedUtilsInputs-CFlPlIWZ.js";import"./AiAgentPopup-D6JdqjAn.js";import"./TextArea-DlhM1poH.js";import"./sharedUtilsResizable-CyABPlSh.js";import"./Collapse-BUJKQXnc.js";import"./react-data-grid-DpCuKNZS.js";import"./TableTabs-DvrS0MvP.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BDLt1zMA.js";import"./@glideappsfinal/glide-data-grid-COOgAVL8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DuLvsSde.js";import"./ListOfFilters-CYjThT3P.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-AFwXkphx.js";import"./EmptyState-BubZ3CIh.js";import"./MassActions-Bb4P7pOw.js";import"./Autocomplete-BFYniy2H.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
