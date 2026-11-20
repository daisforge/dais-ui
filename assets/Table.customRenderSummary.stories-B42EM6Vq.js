import{r,j as a}from"./react-DYHuXpTF.js";import{c as s}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-C-m25YlE.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{e as c}from"./Table-vpV5cLBA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dy04e7eT.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./WithTooltip-KJL26V4Q-Dieti3TI.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./index-Cg1cr4lG.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./react-data-grid-iaz8oMts.js";import"./TableTabs-aQ644jDa.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CHzGVAOt.js";import"./@glideappsfinal/glide-data-grid-D3ux9yp-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DepFlUD_.js";import"./TextField-DKmO_cMT.js";import"./sharedUtilsInputs-CoiSiHAi.js";import"./TypographyWithAutoTooltip-CmTNIxSr.js";import"./Typography-AqY240Xv.js";import"./ListOfFilters-KCLAf91I.js";import"./FiltersActions-CwxatVRF.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-ByzSbtjI.js";import"./EmptyState-v2opkloV.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BNJT1oBV.js";import"./Autocomplete-CBzySec7.js";const ao={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},y=`
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
`,o={...l({preCode:y,previewSource:"shown"}),render:()=>{const[n]=r.useState(s),p=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"total",name:"Сумма title и priority",renderCell:({row:e})=>`${e.task} ${e.priority}`}],[]);return a.jsx(c,{tableConfig:{enableVirtualization:!1},columnConfig:p,rows:n})}};var t,i,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const so=["Summary"];export{o as Summary,so as __namedExportsOrder,ao as default};
