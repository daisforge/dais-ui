import{r as t,d as c}from"./react-D2T61mpp.js";import{c as p}from"./tableData-DVJFoYoT.js";import w from"./DocStoryTemplate-C8-atugo.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{f as b}from"./Table-Dp9VDEh7.js";import"./vendor-CNADM64k.js";import"./react-is-Clcustum.js";import"./styled-components-BgHfMvxH.js";import"./@tanstack/react-virtual-BSHnyjh7.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-BiKzT8rz.js";import"./IconButton-xwYe75ww.js";import"./@salutejs/plasma-icons-CNxBuWJ1.js";import"./@salutejs/sdds-finai-BEm6Z2Pr.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-CKn6Yuqm.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CNu36ura.js";import"./TextField-DBpK6G19.js";import"./sharedUtilsInputs-rprt-bQ0.js";import"./AiAgentPopup-nd5JpRDn.js";import"./TextArea-BvBISU5C.js";import"./sharedUtilsResizable-CT3CPyAy.js";import"./Collapse-BCNOa_3J.js";import"./react-data-grid-Cp9Ct-OV.js";import"./TableTabs-D4j17SEq.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CLIv2zZ-.js";import"./@glideappsfinal/glide-data-grid-D0QSDvg1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BJ4l-5wL.js";import"./ListOfFilters-D6A52LDg.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gh1Gph.js";import"./EmptyState-BPfWoJpy.js";import"./MassActions-BxRUHtUx.js";import"./Autocomplete-Dq1woIgD.js";const oe={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
