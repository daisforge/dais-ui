import{r as t,j as l}from"./react-DYHuXpTF.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-C-m25YlE.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{e as S}from"./Table-BeuILg_U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-Dy04e7eT.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./WithTooltip-KJL26V4Q-Dieti3TI.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./index-Cg1cr4lG.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./react-data-grid-iaz8oMts.js";import"./TableTabs-BAGPZAp9.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C7GT6790.js";import"./@glideappsfinal/glide-data-grid-D3ux9yp-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B-Mi-ge4.js";import"./TextField-B64q6SkT.js";import"./sharedUtilsInputs-D_r5tJpr.js";import"./TypographyWithAutoTooltip-BrSLYzYH.js";import"./Typography-DwPpYq8F.js";import"./ListOfFilters-BWzVY63S.js";import"./FiltersActions-CwL8ss_u.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-DlOTHXMi.js";import"./EmptyState-v2opkloV.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-Cmd7hIQM.js";import"./Autocomplete-BQ1WJ6gc.js";const le={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},b=`
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
`,o={...d({preCode:b,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),p=e=>e.id!==2,a=e=>e.id==="10001";return l.jsx(S,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:a,rowShowCheckbox:p}},columnConfig:u,rows:i})}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'issueType',
      name: 'issue',
      subRow: {
        keyOfColumnInSubRow: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === '10001';
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      resizableColumn: true,
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: [1, 2]
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const ce=["SelectingRow"];export{o as SelectingRow,ce as __namedExportsOrder,le as default};
