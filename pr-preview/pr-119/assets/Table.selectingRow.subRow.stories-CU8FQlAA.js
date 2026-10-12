import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-CRhVkSSa.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-DMsl_asr.js";import"./vendor-Dyxex4G2.js";import"./react-is-Clcustum.js";import"./styled-components-6RO4idrj.js";import"./@tanstack/react-virtual-1rhIG8s3.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-fVDuaCL0.js";import"./IconButton-Ddh-5EVO.js";import"./@salutejs/plasma-icons-BD2BLRHB.js";import"./@salutejs/sdds-finai-BYfzdLjN.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-BljJKfDf.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_u9fLc1.js";import"./TextField-BHN1wQJv.js";import"./sharedUtilsInputs-DWNMqfjd.js";import"./AiAgentPopup-CA7ltgC_.js";import"./TextArea-B5ga9leA.js";import"./sharedUtilsResizable-B3T8qHbg.js";import"./Collapse-Bfwy5CbO.js";import"./react-data-grid-BxN3VegY.js";import"./TableTabs-DiK6S-8p.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cq7o-sTL.js";import"./@glideappsfinal/glide-data-grid-CXZvspA6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DtgT8M4N.js";import"./ListOfFilters-CzZyLocN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DeYAKL_F.js";import"./EmptyState-Jp9ecwfB.js";import"./MassActions-CtXp3uUT.js";import"./Autocomplete-8jMU0-ZO.js";const oe={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
`,o={...d({preCode:S,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(p),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),a=e=>e.id!==2,l=e=>e.id==="10001";return c.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:l,rowShowCheckbox:a}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.subRow.stories.tsx",lineNumber:82,columnNumber:7},void 0)}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const te=["SelectingRow"];export{o as SelectingRow,te as __namedExportsOrder,oe as default};
