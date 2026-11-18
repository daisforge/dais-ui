import{r,j as p}from"./react-CAOzMBF_.js";import{c as s}from"./tableData-DVJFoYoT.js";import u from"./DocStoryTemplate-B68YIrJ_.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{f as c}from"./Table-rfHjzRr_.js";import"./vendor-Dh4d6dCz.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-L39Pzilh.js";import"./IconButton-BY5jSHYi.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-I85SwEfQ.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-V-E_7_e1.js";import"./TextField-BWAgrZiy.js";import"./sharedUtilsInputs-DtFOWwEL.js";import"./AiAgentPopup-G5RwOl78.js";import"./TextArea-DRR0qQjv.js";import"./sharedUtilsResizable-CBJT9eg4.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CcEN_5QW.js";import"./react-data-grid-BG41yzHd.js";import"./TableTabs-BC4rHx7P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dlq94AYy.js";import"./@glideappsfinal/glide-data-grid-yuW1DWPs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DgrMAtAZ.js";import"./ListOfFilters-D2FGzmam.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-CT0qauC8.js";import"./EmptyState-KfqjaHUZ.js";import"./MassActions-CVTwrRbT.js";import"./Autocomplete-N-2iTeN5.js";const Y={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},y=`
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
`,o={...l({preCode:y,previewSource:"shown"}),render:()=>{const[m]=r.useState(s),a=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:e})=>`${e.task} ${e.priority}`}],[]);return p.jsx(c,{tableConfig:{enableVirtualization:!1},columnConfig:a,rows:m})}};var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const oo=["Summary"];export{o as Summary,oo as __namedExportsOrder,Y as default};
