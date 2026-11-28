import{r,b as d}from"./react-UEdzNlUe.js";import{c as C}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-Igcbn0Jb.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{e as T}from"./Table-CrycrOhe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BZ4xHhIu.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./Switch-BLwU7d6k.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./Box-1ilqKMuH.js";import"./Collapse-BumLdPOr.js";import"./utils-Dxt9aEaB.js";import"./constants-Brx3fuKM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";import"./react-data-grid-B2lTycfS.js";import"./TableTabs-DK3E2Tjx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-DfMFGjDK.js";import"./TextField-zS5TeN3S.js";import"./sharedUtilsInputs-CU9inT7Z.js";import"./Typography-LZqKnjkf.js";import"./ListOfFilters-BwM87NcY.js";import"./FiltersActions-BKFvIl-i.js";import"./IconButton-DGP6Lkn6.js";import"./Tooltip-EuRIJkYt.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Q8JqGQSC.js";import"./NumberFormat-DGNiwVXJ.js";import"./EmptyState-m9Bn6vD9.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-Bsnp-_01.js";import"./Autocomplete-fJfjzeXV.js";const Se={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ge=["ManualSorting"];export{n as ManualSorting,ge as __namedExportsOrder,Se as default};
