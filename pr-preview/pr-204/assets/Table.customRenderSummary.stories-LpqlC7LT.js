import{r,b as a}from"./react-UEdzNlUe.js";import{c as p}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-B1u7dqTk.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{c}from"./Table-CbHVwnkL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BjJ6Dniq.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./WithTooltip-KJL26V4Q-EsghDtie.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./Switch-qQzmLoyi.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BvdYvZ49.js";import"./react-data-grid-DOd4FWtH.js";import"./TableTabs-D8Dn7Hjz.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-ciLugbIZ.js";import"./TextField-D7c24dZh.js";import"./sharedUtilsInputs-C44yd4VS.js";import"./Typography-CbUXrNRB.js";import"./ListOfFilters-BAMQEU-g.js";import"./FiltersActions-DfAicICl.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-kE1ol754.js";import"./EmptyState-B43KQCqF.js";import"./unidentified@3x-B3LEnvq5.js";import"./MassActions-Dt9VO86v.js";import"./Autocomplete-2PUvk-Tm.js";const ie={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
`,e={...l({preCode:d,previewSource:"shown"}),render:()=>{const[n]=r.useState(p),s=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:o})=>`${o.task} ${o.priority}`}],[]);return a.jsxDEV(c,{tableConfig:{enableVirtualization:!1},columnConfig:s,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.customRender/Table.customRenderSummary.stories.tsx",lineNumber:80,columnNumber:7},void 0)}};var t,i,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const me=["Summary"];export{e as Summary,me as __namedExportsOrder,ie as default};
