import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-Dc5os1k_.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-B0hbDIQB.js";import"./vendor-DmOaMQgq.js";import"./react-is-Clcustum.js";import"./styled-components-DxDblDlN.js";import"./@tanstack/react-virtual-CE7K6atN.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-C8lT496U.js";import"./IconButton-B6KT3SPz.js";import"./@salutejs/plasma-icons-kRecvqzW.js";import"./@salutejs/sdds-finai-CDu6sm0L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-D0gu5Dum.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CY1Gq-hH.js";import"./TextField-BrGgRh7l.js";import"./sharedUtilsInputs-CtTTe5Mv.js";import"./AiAgentPopup-DzEkbvBy.js";import"./TextArea-CezwBxM1.js";import"./sharedUtilsResizable-CfH9ukSX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-BB9JaWWM.js";import"./react-data-grid-ajcSguO0.js";import"./TableTabs-B_9VrSTn.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ChlXFi8F.js";import"./@glideappsfinal/glide-data-grid-0W8PLdVa.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DLpgCNtO.js";import"./ListOfFilters-C9g1E-4n.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B8yO4Myp.js";import"./EmptyState-1wW5aXZI.js";import"./MassActions-azz88F5G.js";import"./Autocomplete-BzouyPKb.js";const te={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const re=["SelectingRow"];export{o as SelectingRow,re as __namedExportsOrder,te as default};
