import{r as t,b as p}from"./react-UEdzNlUe.js";import{c}from"./tableData-DKA5H0bF.js";import w from"./DocStoryTemplate-Igcbn0Jb.js";import{s as d}from"./storySourceDoc-tVKyHcEN.js";import{e as b}from"./Table-CrycrOhe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-BZ4xHhIu.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./Switch-BLwU7d6k.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./Box-1ilqKMuH.js";import"./Collapse-BumLdPOr.js";import"./utils-Dxt9aEaB.js";import"./constants-Brx3fuKM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";import"./react-data-grid-B2lTycfS.js";import"./TableTabs-DK3E2Tjx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-DfMFGjDK.js";import"./TextField-zS5TeN3S.js";import"./sharedUtilsInputs-CU9inT7Z.js";import"./Typography-LZqKnjkf.js";import"./ListOfFilters-BwM87NcY.js";import"./FiltersActions-BKFvIl-i.js";import"./IconButton-DGP6Lkn6.js";import"./Tooltip-EuRIJkYt.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Q8JqGQSC.js";import"./NumberFormat-DGNiwVXJ.js";import"./EmptyState-m9Bn6vD9.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-Bsnp-_01.js";import"./Autocomplete-fJfjzeXV.js";const ue={title:"Локальные компоненты/Table/SelectingRow/Многоуровневая таблица",tags:["!autodocs"],parameters:{docs:{page:w}}},S=`
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
`,o={...d({preCode:S,previewSource:"shown"}),name:"Многоуровневая таблица",render:()=>{const[i]=t.useState(c),u=t.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),m=t.useState(()=>new Set),a=e=>e.id!==2,l=e=>e.id==="10001";return p.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:m,rowKeyGetter:e=>e.id+e.issueType,showDefault:!0,selectingRules:{levels:[1,2]},rowCheckboxDisabled:l,rowShowCheckbox:a}},columnConfig:u,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.subRow.stories.tsx",lineNumber:82,columnNumber:7},void 0)}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);
    const columns = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      subRow: {
        keyOfColumnInSubRow: 'id',
        isColumnWithArrow: true
      },
      resizable: true
    }, {
      key: 'issueType',
      name: 'issue',
      subRow: {
        keyOfColumnInSubRow: 'issueType'
      }
    }, {
      key: 'developer',
      name: 'Developer'
    }], []);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === '10001';
    return <Table tableConfig={{
      containerStyle: {
        height: '700px'
      },
      resizableColumn: true,
      subRows: {
        getSubRows: row => row?.subRows,
        rowKeyGetter: row => row.id
      },
      selecting: {
        state: selectingRowStateAndSetter,
        rowKeyGetter: r => r.id + r.issueType,
        showDefault: true,
        selectingRules: {
          levels: [1, 2]
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const me=["SelectingRow"];export{o as SelectingRow,me as __namedExportsOrder,ue as default};
