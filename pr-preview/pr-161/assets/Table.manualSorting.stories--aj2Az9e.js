import{r,d}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-Doo9CTuq.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-BRR9bTnx.js";import"./vendor-aFf5tYwy.js";import"./react-is-Clcustum.js";import"./styled-components-CGUvt02A.js";import"./@tanstack/react-virtual-k3-5pk8r.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-DwDDAJkd.js";import"./IconButton-B-B3AQC6.js";import"./@salutejs/plasma-icons-CfbkFxsV.js";import"./@salutejs/sdds-finai-DHWxFeH-.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DYFUycLF.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DMGTp91_.js";import"./TextField-g4cwrqhr.js";import"./sharedUtilsInputs-8wkUDZmN.js";import"./AiAgentPopup-B-jiqUix.js";import"./TextArea-DMLD6qSb.js";import"./sharedUtilsResizable-DkclOuAT.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DM9OG5Il.js";import"./react-data-grid-BEGNQ37d.js";import"./TableTabs-CPZeQ2kr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D7GQIjcj.js";import"./@glideappsfinal/glide-data-grid-B49w_JG0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-D7cGCjU0.js";import"./ListOfFilters-3PoACkO-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BjkaFfzc.js";import"./EmptyState-C_McVLBd.js";import"./MassActions-CBsiKmsj.js";import"./Autocomplete-RKbmfr3_.js";const me={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
`,n={...w({preCode:R,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,i]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),a=r.useState([]),[m]=a;return r.useEffect(()=>{const o=m[0];if(!o){i(s);return}const g=[...s].sort((y,f)=>{const e=y[o.columnKey],t=f[o.columnKey];return typeof e=="number"&&typeof t=="number"?o.direction==="ASC"?e-t:t-e:typeof e=="string"&&typeof t=="string"&&e[0]&&t[0]?o.direction==="ASC"?e.localeCompare(t):t.localeCompare(e):0});i(g)},[m]),d.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:a,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sorting/Table.manualSorting.stories.tsx",lineNumber:122,columnNumber:7},void 0)}};var u,p,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const rows = useMemo(() => createRows(), []);
    const [sortedRows, setSortedRows] = useState(rows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort'
    }, {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort'
    }, {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort'
    }, {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort'
    }, {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort'
    }], []);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const [state] = sortingStateAndSetter;
    useEffect(() => {
      const sortColState = state[0];
      if (!sortColState) {
        setSortedRows(rows);
        return;
      }
      const sortRows = [...rows].sort((a, b) => {
        const aValue = a[sortColState.columnKey as keyof Row];
        const bValue = b[sortColState.columnKey as keyof Row];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortColState.direction === 'ASC' ? aValue - bValue : bValue - aValue;
        }
        if (typeof aValue === 'string' && typeof bValue === 'string' && aValue[0] && bValue[0]) {
          return sortColState.direction === 'ASC' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return 0;
      });
      setSortedRows(sortRows);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      sorting: {
        state: sortingStateAndSetter,
        manualSorting: true
      }
    }} columnConfig={columnConfig} rows={sortedRows} />;
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ue=["ManualSorting"];export{n as ManualSorting,ue as __namedExportsOrder,me as default};
