import{r,b as d}from"./react-UEdzNlUe.js";import{c as C}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-CB_7t9Cx.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{e as T}from"./Table-D3Mm0M_U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-mKquPocI.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-ChsoKbNC.js";import"./@tanstack/react-virtual-QRzx54Th.js";import"./WithTooltip-KJL26V4Q-C9snA44b.js";import"./preload-helper-C_zUFXUY.js";import"./index-Cu4lwwaE.js";import"./index-Bq810BSt.js";import"./index-B3wCTA8J.js";import"./@sddsjs/sdds_finai-D-rO1ecf.js";import"./@salutejs/sdds-finai-CBl2Z6DX.js";import"./Box-tzqS-Nh4.js";import"./Collapse-Dk4xyTvf.js";import"./utils-BKJAJHmZ.js";import"./constants-Dyz8I1EV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-1TCGvzmd.js";import"./react-data-grid-CYj7lJMP.js";import"./TableTabs-C0CUs4D0.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-006Ssm5C.js";import"./@daisforge/glide-data-grid-CoDMDuM0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DZ1uL2Yj.js";import"./TextField-C-3ULIlg.js";import"./sharedUtilsInputs-DbZh-QRR.js";import"./TypographyWithAutoTooltip-skZwq5lh.js";import"./Typography-5KyJRrIU.js";import"./ListOfFilters-BlDMMOAw.js";import"./FiltersActions-CICr9Sel.js";import"./IconButton-CRMJuemm.js";import"./TooltipList-CTbOsFXH.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_QeVdxzl.js";import"./NumberFormat-B73BQGAM.js";import"./EmptyState-BoffFkaY.js";import"./unidentified@3x-B3KotUFa.js";import"./MassActions-D91OzxuB.js";import"./Autocomplete-CPscEsgX.js";const dt={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
`,n={...w({preCode:R,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,i]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),a=r.useState([]),[m]=a;return r.useEffect(()=>{const o=m[0];if(!o){i(s);return}const g=[...s].sort((y,f)=>{const t=y[o.columnKey],e=f[o.columnKey];return typeof t=="number"&&typeof e=="number"?o.direction==="ASC"?t-e:e-t:typeof t=="string"&&typeof e=="string"&&t[0]&&e[0]?o.direction==="ASC"?t.localeCompare(e):e.localeCompare(t):0});i(g)},[m]),d.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:a,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sorting/Table.manualSorting.stories.tsx",lineNumber:122,columnNumber:7},void 0)}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
