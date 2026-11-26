import{r,j as d}from"./react-DYHuXpTF.js";import{c as C}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-BHnLMKCH.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{c as T}from"./Table-C_DGHpTp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-DQaMhftP.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./Switch-BJtGJ7E8.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-BHH5Fs72.js";import"./Box-DwiKSnnX.js";import"./Collapse-mn0OPShb.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DAdkqmmH.js";import"./react-data-grid-BAmL3Ore.js";import"./TableTabs-xg-axVyL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C3Xjc3-S.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-B0aoQ6gP.js";import"./TextField-WPWvh7a6.js";import"./sharedUtilsInputs-DA0RRQ70.js";import"./TypographyWithAutoTooltip-CtrkPLGH.js";import"./Typography-DEItZ0E3.js";import"./ListOfFilters-DEV2tGcA.js";import"./FiltersActions-B5_R_0AW.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-CYbTJlTb.js";import"./EmptyState-DDJZV3Q6.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-uR19bOd1.js";import"./Autocomplete-CuNqi1cT.js";const dt={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
`,n={...w({preCode:R,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,i]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),a=r.useState([]),[m]=a;return r.useEffect(()=>{const e=m[0];if(!e){i(s);return}const g=[...s].sort((y,f)=>{const t=y[e.columnKey],o=f[e.columnKey];return typeof t=="number"&&typeof o=="number"?e.direction==="ASC"?t-o:o-t:typeof t=="string"&&typeof o=="string"&&t[0]&&o[0]?e.direction==="ASC"?t.localeCompare(o):o.localeCompare(t):0});i(g)},[m]),d.jsx(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:a,manualSorting:!0}},columnConfig:S,rows:c})}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const Ct=["ManualSorting"];export{n as ManualSorting,Ct as __namedExportsOrder,dt as default};
