import{r,j as d}from"./react-CAOzMBF_.js";import{c as C}from"./tableData-DVJFoYoT.js";import b from"./DocStoryTemplate-B68YIrJ_.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{f as T}from"./Table-D060miWS.js";import"./vendor-Dh4d6dCz.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./FiltersActions-CRTH0PZ-.js";import"./IconButton-BY5jSHYi.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-I85SwEfQ.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-V-E_7_e1.js";import"./TextField-DU1R_gtM.js";import"./sharedUtilsInputs-C3919g4u.js";import"./AiAgentPopup-JQocNqtc.js";import"./TextArea-CeV4EuOw.js";import"./sharedUtilsResizable-CBJT9eg4.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CcEN_5QW.js";import"./react-data-grid-BG41yzHd.js";import"./TableTabs-BC4rHx7P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DTUuFrcP.js";import"./@glideappsfinal/glide-data-grid-gV_BbKzF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BDOhBaAU.js";import"./ListOfFilters-PPh84lG1.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-C_muNst-.js";import"./EmptyState-P7S2U46o.js";import"./MassActions-WHkWqihO.js";import"./Autocomplete-Ce-yJoLc.js";const mt={title:"Локальные компоненты/Table/Sorting/Manual",tags:["!autodocs"],parameters:{docs:{page:b}}},R=`
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
`,n={...w({preCode:R,previewSource:"shown"}),render:()=>{const s=r.useMemo(()=>C(),[]),[c,i]=r.useState(s),S=r.useMemo(()=>[{key:"id",name:"ID",sortingType:"numberSort"},{key:"task",name:"Title",sortingType:"stringSort"},{key:"priority",name:"Priority",sortingType:"stringSort"},{key:"issueType",name:"Issue Type",sortingType:"stringSort"},{key:"complete",name:"% Complete",sortingType:"numberSort"}],[]),a=r.useState([]),[m]=a;return r.useEffect(()=>{const o=m[0];if(!o){i(s);return}const g=[...s].sort((y,f)=>{const t=y[o.columnKey],e=f[o.columnKey];return typeof t=="number"&&typeof e=="number"?o.direction==="ASC"?t-e:e-t:typeof t=="string"&&typeof e=="string"&&t[0]&&e[0]?o.direction==="ASC"?t.localeCompare(e):e.localeCompare(t):0});i(g)},[m]),d.jsx(T,{tableConfig:{containerStyle:{height:"700px"},sorting:{state:a,manualSorting:!0}},columnConfig:S,rows:c})}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const pt=["ManualSorting"];export{n as ManualSorting,pt as __namedExportsOrder,mt as default};
