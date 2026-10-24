import{r,d as a}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-BYdnpZCY.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-kya4Xv3o.js";import"./vendor-CYEt32i_.js";import"./react-is-Clcustum.js";import"./styled-components-IqzAKK_s.js";import"./@tanstack/react-virtual-DRRuFJr3.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BR16IwQj.js";import"./IconButton-Dl8SMmMk.js";import"./@salutejs/plasma-icons-pfD28j8D.js";import"./@salutejs/sdds-finai-32zwYo9C.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CFRnpb77.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DrYQVeV7.js";import"./TextField-BSD0wz2P.js";import"./sharedUtilsInputs-BJDRWV8U.js";import"./AiAgentPopup-Do25XZz-.js";import"./TextArea-B9d14RRB.js";import"./sharedUtilsResizable-CPQ8HWoD.js";import"./Collapse-_6Pq7MeZ.js";import"./react-data-grid-Bx1mSA4W.js";import"./TableTabs-BMjqrlPg.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BjF36j5z.js";import"./@glideappsfinal/glide-data-grid-HMBxXGeW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BqRjtV6A.js";import"./ListOfFilters-Cis1z3PW.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bu7o2kss.js";import"./EmptyState-IqPSeUL3.js";import"./MassActions-DPpZGZqq.js";import"./Autocomplete-C8FwLa6a.js";const W={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
