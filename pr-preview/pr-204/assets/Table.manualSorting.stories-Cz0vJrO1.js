import{r,b as d}from"./react-UEdzNlUe.js";import{c as C}from"./tableData-DKA5H0bF.js";import b from"./DocStoryTemplate-dlps2y2w.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{c as T}from"./Table-Cf-n1Fri.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BS4HA21f.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-i6nmInMm.js";import"./@tanstack/react-virtual-Do9j7-rI.js";import"./WithTooltip-KJL26V4Q-DGSPfzzr.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-Dp_h01wN.js";import"./Switch-BuolD6i3.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-CQUafN5B.js";import"./Box-BL0rBjAw.js";import"./Collapse-CC7IlkPv.js";import"./utils-BHv61rGQ.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CXvNxvo1.js";import"./react-data-grid-B8yTbZ7j.js";import"./TableTabs-xSJydO6T.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-D3tdf9Ln.js";import"./TextField-kUI-NAJ6.js";import"./sharedUtilsInputs-BnPXibK3.js";import"./Typography-COUeQAIi.js";import"./ListOfFilters-X2JO-7Cv.js";import"./FiltersActions-BFYsTofB.js";import"./IconButton-CfYF5BDV.js";import"./Tooltip-Cv5b2n02.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CX_cVg0L.js";import"./NumberFormat-DoznmbgT.js";import"./EmptyState-BQvIQUz-.js";import"./unidentified@3x-B3LEnvq5.js";import"./MassActions-j40wKOEt.js";import"./Autocomplete-DXJoRD1w.js";const St={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
`,n={...w({preCode:R,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,i]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),a=r.useState([]),[m]=a;return r.useEffect(()=>{const o=m[0];if(!o){i(s);return}const g=[...s].sort((y,f)=>{const t=y[o.columnKey],e=f[o.columnKey];return typeof t=="number"&&typeof e=="number"?o.direction==="ASC"?t-e:e-t:typeof t=="string"&&typeof e=="string"&&t[0]&&e[0]?o.direction==="ASC"?t.localeCompare(e):e.localeCompare(t):0});i(g)},[m]),d.jsxDEV(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:a,manualSorting:!0}},columnConfig:S,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.sorting/Table.manualSorting.stories.tsx",lineNumber:122,columnNumber:7},void 0)}};var u,p,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const gt=["ManualSorting"];export{n as ManualSorting,gt as __namedExportsOrder,St as default};
