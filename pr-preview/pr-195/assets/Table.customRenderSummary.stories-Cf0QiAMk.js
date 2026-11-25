import{r,b as a}from"./react-UEdzNlUe.js";import{c as p}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-BQuTbhJ9.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{e as c}from"./Table-Bv8Pwua5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-D2r4jgZf.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./WithTooltip-KJL26V4Q-BPvjFL52.js";import"./preload-helper-Bxleko46.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./index-DNoHAM3Q.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./Box-Dwqy9xB3.js";import"./Collapse-CfxT3MfK.js";import"./utils-DSJLiokB.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CWYH4jgn.js";import"./react-data-grid-CAmlt0FZ.js";import"./TableTabs-BhiREyQV.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Bl7R6d_D.js";import"./@daisforge/glide-data-grid-CqXa0sMs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-jYsui9xG.js";import"./TextField-DY_3SUsf.js";import"./sharedUtilsInputs-BU2vEk4Q.js";import"./TypographyWithAutoTooltip-DZuGy65L.js";import"./Typography-BcqUTUcc.js";import"./ListOfFilters-BNt9cjoS.js";import"./FiltersActions-Krl8-0nE.js";import"./IconButton-Dl3DqcX6.js";import"./TooltipList-CeWvqtLg.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DpIc9uqy.js";import"./NumberFormat-Bk22GTCO.js";import"./EmptyState-B-hUVo_D.js";import"./unidentified@3x-DFu65eL-.js";import"./MassActions-DU9pfthw.js";import"./Autocomplete-CdNTXPjM.js";const ae={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},d=`
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const pe=["Summary"];export{e as Summary,pe as __namedExportsOrder,ae as default};
