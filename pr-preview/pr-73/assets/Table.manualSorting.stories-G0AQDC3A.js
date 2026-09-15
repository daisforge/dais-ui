import{r,d}from"./react-D2T61mpp.js";import{c as C}from"./tableData-UCfjiBCh.js";import b from"./DocStoryTemplate-DBkZldVw.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-Dc-6FW5x.js";import"./vendor-BKzBKp-G.js";import"./react-is-Clcustum.js";import"./styled-components-B0QSSFGC.js";import"./@tanstack/react-virtual-yxDq1gd0.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-D8H2yrCS.js";import"./IconButton-D7rFhGwi.js";import"./@salutejs/plasma-icons-CASXnT9E.js";import"./@salutejs/sdds-finai-Dt-uBSnb.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DryTuyeA.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-cM6oiJLU.js";import"./TextField-DLx88NRH.js";import"./sharedUtilsInputs-CydhYski.js";import"./AnalyticalWidget-D639izQ-.js";import"./Collapse-VP6s-DVe.js";import"./react-data-grid-at35Z1Ou.js";import"./TableTabs-CnwRaqs5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C6t7MqEJ.js";import"./ListOfFilters-BKVXVFhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BTyZAsLJ.js";import"./EmptyState-BIS3MJyj.js";import"./MassActions-B5B7bNv0.js";import"./Autocomplete-BccisocP.js";const oe={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
`,n={...w({preCode:R,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,a]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),i=r.useState([]),[m]=i;return r.useEffect(()=>{const o=m[0];if(!o){a(s);return}const g=[...s].sort((y,f)=>{const e=y[o.columnKey],t=f[o.columnKey];return typeof e=="number"&&typeof t=="number"?o.direction==="ASC"?e-t:t-e:typeof e=="string"&&typeof t=="string"&&e[0]&&t[0]?o.direction==="ASC"?e.localeCompare(t):t.localeCompare(e):0});a(g)},[m]),d.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:i,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sorting/Table.manualSorting.stories.tsx",lineNumber:122,columnNumber:7},void 0)}};var u,l,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const re=["ManualSorting"];export{n as ManualSorting,re as __namedExportsOrder,oe as default};
