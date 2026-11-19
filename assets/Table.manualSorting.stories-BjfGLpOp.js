import{r,j as d}from"./react-DNGZQ4GM.js";import{c as C}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-BVKLQcam.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{e as T}from"./Table-CLU8EiQJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-D0kRSEyZ.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-B2Euy7F3.js";import"./@tanstack/react-virtual-BMRZReVx.js";import"./WithTooltip-KJL26V4Q-DmYH2O2Q.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-mtwU-xhz.js";import"./@salutejs/plasma-icons-CyCZXKIi.js";import"./index-ChNwZ-Li.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./@salutejs/sdds-finai-CTfk_qKV.js";import"./Box-C7bn7Vor.js";import"./Collapse-DJQXB-S_.js";import"./utils-7sb7r4ay.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CXBejiga.js";import"./TableTabs-BHejy9n4.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BHSmjU_O.js";import"./@glideappsfinal/glide-data-grid-DDGyHJjW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-CIBppFsz.js";import"./TextField-DpANoGFF.js";import"./sharedUtilsInputs-04PyxkHI.js";import"./TypographyWithAutoTooltip-D2KyJ3uF.js";import"./Typography-C1XIPscs.js";import"./ListOfFilters-CtA3cmfs.js";import"./FiltersActions-MFwki4_2.js";import"./IconButton-C1E4pz8y.js";import"./TooltipList-BKC8WC44.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CYVukoKk.js";import"./NumberFormat-BcUnw3yr.js";import"./EmptyState-Cjd9SZHm.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-D3mEmrXD.js";import"./Autocomplete-Bjb9HDRp.js";const dt={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
