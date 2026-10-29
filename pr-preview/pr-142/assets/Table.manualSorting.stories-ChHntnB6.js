import{r,d}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-BZYLyq8m.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-C6ylUQN9.js";import"./vendor-BA2uJqm3.js";import"./react-is-Clcustum.js";import"./styled-components-DI0RiSri.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CqtjD7fq.js";import"./IconButton-BybKUD7Y.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjrMZFsU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ZOkrcsKi.js";import"./TextField-DZKR2GVq.js";import"./sharedUtilsInputs-CnW24mU9.js";import"./AiAgentPopup-ByfmyI4w.js";import"./TextArea-BI7NPZWg.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-EpzcYvI8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DKhcFH5P.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DC9JYQJ1.js";import"./ListOfFilters-BaD6Bsow.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gQLxCm.js";import"./EmptyState-BKK3EFcw.js";import"./MassActions-CHP0YYiG.js";import"./Autocomplete-CeKUjrvz.js";const ae={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const me=["ManualSorting"];export{n as ManualSorting,me as __namedExportsOrder,ae as default};
