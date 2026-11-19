import{r,j as a}from"./react-DNGZQ4GM.js";import{c as s}from"./tableData-DKA5H0bF.js";import u from"./DocStoryTemplate-CihOLcJg.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{e as c}from"./Table-C5cJymDf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-YLKf7ca7.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DgpxuAGO.js";import"./@tanstack/react-virtual-BaHWhgvr.js";import"./WithTooltip-KJL26V4Q-tULGdEQj.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-j2gYCLme.js";import"./@salutejs/plasma-icons-BuaDVQIV.js";import"./index-DkTc4jy4.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-ChtfndFI.js";import"./Box-Ba6bD7xl.js";import"./Collapse-DMgzmH3O.js";import"./utils-CJ5VTLFt.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-B7bWZIAA.js";import"./TableTabs-Cc5VYl1P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-COUNZWup.js";import"./@glideappsfinal/glide-data-grid-D4rqseF0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-Dw3sne4q.js";import"./sharedUiSearch-DR_G9VuT.js";import"./TextField-B2826P74.js";import"./sharedUtilsInputs-DgLMi5in.js";import"./TypographyWithAutoTooltip--uskoFla.js";import"./Typography-CitaFUXa.js";import"./ListOfFilters-DjxDso1q.js";import"./FiltersActions-4YYO6LZu.js";import"./IconButton-B7DLCuSp.js";import"./TooltipList-Dx9BjgjZ.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-LvNMf9h6.js";import"./NumberFormat-BMoxsDYG.js";import"./EmptyState-Dg8069Uy.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-DvFz2b-k.js";import"./Autocomplete-DIZ6r3L2.js";const so={title:"Локальные компоненты/Table/Custom render/Summary",tags:["!autodocs"],parameters:{docs:{page:u}}},y=`
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const uo=["Summary"];export{o as Summary,uo as __namedExportsOrder,so as default};
