import{r,b as a}from"./react-UEdzNlUe.js";import{c as p}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-dlps2y2w.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{c}from"./Table-Cf-n1Fri.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BS4HA21f.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-i6nmInMm.js";import"./@tanstack/react-virtual-Do9j7-rI.js";import"./WithTooltip-KJL26V4Q-DGSPfzzr.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-Dp_h01wN.js";import"./Switch-BuolD6i3.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-CQUafN5B.js";import"./Box-BL0rBjAw.js";import"./Collapse-CC7IlkPv.js";import"./utils-BHv61rGQ.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CXvNxvo1.js";import"./react-data-grid-B8yTbZ7j.js";import"./TableTabs-xSJydO6T.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-D3tdf9Ln.js";import"./TextField-kUI-NAJ6.js";import"./sharedUtilsInputs-BnPXibK3.js";import"./Typography-COUeQAIi.js";import"./ListOfFilters-X2JO-7Cv.js";import"./FiltersActions-BFYsTofB.js";import"./IconButton-CfYF5BDV.js";import"./Tooltip-Cv5b2n02.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CX_cVg0L.js";import"./NumberFormat-DoznmbgT.js";import"./EmptyState-BQvIQUz-.js";import"./unidentified@3x-B3LEnvq5.js";import"./MassActions-j40wKOEt.js";import"./Autocomplete-DXJoRD1w.js";const ie={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
