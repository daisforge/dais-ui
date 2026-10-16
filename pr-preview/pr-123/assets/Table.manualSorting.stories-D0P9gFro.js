import{r,d}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-Gan0qpY_.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-B9jLVYK9.js";import"./vendor-B-F5BwiT.js";import"./react-is-Clcustum.js";import"./styled-components-DDYI5_us.js";import"./@tanstack/react-virtual-DxyRpwGh.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CjrDmxSG.js";import"./IconButton-Dq7gJENj.js";import"./@salutejs/plasma-icons-D7D3QVQt.js";import"./@salutejs/sdds-finai-Dz54xmeF.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-qATeXBvn.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BojFrSdk.js";import"./TextField-DsdfbVm4.js";import"./sharedUtilsInputs-fAnuP3eT.js";import"./AiAgentPopup-DcxLtyCU.js";import"./TextArea-Dy8zIiNX.js";import"./sharedUtilsResizable-Drv80g_5.js";import"./Collapse-CZ6vypm_.js";import"./react-data-grid-Ls6B6PvU.js";import"./TableTabs-B3UmUk-1.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BtsU5Rvy.js";import"./@glideappsfinal/glide-data-grid-B3gjTRnf.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-GtpT6NhR.js";import"./ListOfFilters-isImdyL1.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CLBLjy-0.js";import"./EmptyState-BCU1Cxr2.js";import"./MassActions-s0PrGFgF.js";import"./Autocomplete-BrtNEdWP.js";const ae={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
