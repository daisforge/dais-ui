import{r,d}from"./react-D2T61mpp.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-CrvtEn2a.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-CcZ0ds_H.js";import"./vendor-Cerwdjts.js";import"./react-is-Clcustum.js";import"./styled-components-DhAJwv5z.js";import"./@tanstack/react-virtual-_irdOaea.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-g6L0vwIk.js";import"./IconButton-DFMykKti.js";import"./@salutejs/plasma-icons-Dhq832vT.js";import"./@salutejs/sdds-finai-DztqpKP7.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BElZzUmp.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DV_u0Ftj.js";import"./TextField-HUZgltLn.js";import"./sharedUtilsInputs-0JObiuav.js";import"./AiAgentPopup-D3kyWGJG.js";import"./TextArea-D2LyAITr.js";import"./sharedUtilsResizable-B0q5Zavu.js";import"./Collapse-CcsxObAw.js";import"./react-data-grid-BzvGL-VS.js";import"./TableTabs-B3ToYV3h.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CBLdPq7f.js";import"./ListOfFilters-BHHIPZib.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-QJCyNH_R.js";import"./EmptyState-BMpkaTQs.js";import"./MassActions-SmVYtLju.js";import"./Autocomplete-D1xCL2Jp.js";const ne={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const se=["ManualSorting"];export{n as ManualSorting,se as __namedExportsOrder,ne as default};
