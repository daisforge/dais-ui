import{r as i,b as B}from"./react-UEdzNlUe.js";import{c as H}from"./tableData-DKA5H0bF.js";import q from"./DocStoryTemplate-CPH7segy.js";import{s as G}from"./storySourceDoc-tVKyHcEN.js";import{c as N}from"./Table-B1-dMqB5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vendor-2C5_55Sm.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./WithTooltip-KJL26V4Q-4UYDCAo9.js";import"./preload-helper-Ba06O5E_.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./Switch-DFPex1Sn.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./Box-BOi9y4XS.js";import"./Collapse-x0oUGUsB.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BrITifw3.js";import"./react-data-grid-BbizCO0_.js";import"./TableTabs-D50d6bjv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CI4FMNNd.js";import"./@daisforge/glide-data-grid-Dg1H6o5e.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DskPYv1g.js";import"./TextField-DCC7M3EV.js";import"./sharedUtilsInputs-ClkwfHQU.js";import"./TypographyWithAutoTooltip-BLlDrrGC.js";import"./Typography-oCC8R11s.js";import"./ListOfFilters-DE3BWyo9.js";import"./FiltersActions-ChfrRSQd.js";import"./IconButton-DV8DLcRq.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-CbUcUi70.js";import"./EmptyState-BpkiV8od.js";import"./unidentified@3x-Ca_hkon8.js";import"./MassActions-D1Zke9vC.js";import"./Autocomplete-lYVCXn-g.js";const je={title:"Локальные компоненты/Table/SelectingRow/Ручная настройка выбор строк",tags:["!autodocs"],parameters:{docs:{page:q}}},O=`
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
`,h={...G({preCode:O,previewSource:"shown"}),name:"Независимый выбор строк в иерархии",render:()=>{const[C]=i.useState(H),p=i.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),R=i.useState(()=>new Set);return B.jsxDEV(N,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},selecting:{state:R,rowKeyGetter:n=>n.id,selectingRules:{levels:[1,2]},showDefault:!0,summaryChecked:{checked({allRowsInLevels:n,selectedRowsIds:u}){return u.size>0&&n.length===u.size},indeterminate({checkedAll:n,allRowsInLevels:u,selectedRowsIds:e}){return!n&&e.size>0&&e.size<u.length},getCountOfChecked({selectedRowsIds:n}){return n.size},onChange({checkedAll:n,setSelectedRowsIds:u,allRowsInLevels:e,rowKeyGetter:t}){u(n?new Set:new Set(e.map(o=>t(o))))}},rowGetStates({row:n,selectedRows:u,rowKeyGetter:e,setSelectedRows:t,isRowSelectedCalculated:o}){return{checked:u.has(e(n)),indeterminate:!1,onChange(){t(l=>{const d=new Set(l);return d[o?"delete":"add"](e(n)),d})}}}}},columnConfig:p,rows:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.customRowSelection.stories.tsx",lineNumber:80,columnNumber:7},void 0)}},S={...G({preCode:O,previewSource:"shown"}),name:"Ручная настройка выбора строк с учетом disabled, hidden строк",render:()=>{const[C]=i.useState(H),p=i.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),R=i.useState(()=>new Set),n=e=>e.id!==2,u=e=>e.id.toString().endsWith("0001");return B.jsxDEV(N,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:R,rowKeyGetter:e=>e.id+e.issueType,selectingRules:{levels:[1,2,3]},showDefault:!0,summaryChecked:{checked({selectedRowsIds:e,getAllRowsInfo:t}){const{notHidden:o}=t();return e.size>0&&o.length===e.size},indeterminate({checkedAll:e,allRowsInLevels:t,selectedRowsIds:o}){return!e&&o.size>0&&o.size<t.length},getCountOfChecked({selectedRowsIds:e}){return e.size},onChange({checkedAll:e,setSelectedRowsIds:t,getAllRowsInfo:o}){const{notDisabledAndNotHidden:l,notDisabledAndNotHiddenAreSelected:d}=o();if(e){t(new Set);return}t(w=>{const g=d,r=new Set(w);return l.forEach(m=>{r[g?"delete":"add"](m)}),r})}},rowGetStates({isRowSelectedCalculated:e,getRowChildrenInfo:t,isHaveCheckboxCalculated:o,rowKeyGetter:l,selectedRows:d,row:w,setSelectedRows:g}){if(!o)return{showCheckbox:!1};const r=t(),m=!!r.all.length,b=r.notHidden,V=r.selected,f=m?!!b.length&&b.length===V.length:e;return{checked:f,indeterminate:m&&!f&&r.someChildrenIsSelected,onChange({getRowParentsInfo:F}){const{all:L,selected:W,notDisabledAndNotHidden:y,notHidden:k,someChildrenIsSelected:M}=t(),I=l(w),j=d.has(I),A=!!L.length,P=A?M&&W.length>=k.length:j;g(E=>{const s=new Set(E);if(!A)s[P?"delete":"add"](l(w));else{const c=y.every(a=>E.has(a));y.forEach(a=>{s[c?"delete":"add"](a)});const Z=k.every(a=>s.has(a));s[Z?"add":"delete"](I)}const{shouldBeSelected:_,shouldNotBeSelected:X}=F().getShouldBeSelectedInfo(s);return _.forEach(c=>s.add(c)),X.forEach(c=>s.delete(c)),s})}}},rowCheckboxDisabled:u,rowShowCheckbox:n}},columnConfig:p,rows:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.customRowSelection.stories.tsx",lineNumber:201,columnNumber:7},void 0)}};var D,v,K;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Независимый выбор строк в иерархии',
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
        rowKeyGetter: r => r.id,
        selectingRules: {
          levels: [1, 2]
        },
        showDefault: true,
        summaryChecked: {
          checked({
            allRowsInLevels,
            selectedRowsIds
          }) {
            return selectedRowsIds.size > 0 && allRowsInLevels.length === selectedRowsIds.size;
          },
          indeterminate({
            checkedAll,
            allRowsInLevels,
            selectedRowsIds
          }) {
            return !checkedAll && selectedRowsIds.size > 0 && selectedRowsIds.size < allRowsInLevels.length;
          },
          getCountOfChecked({
            selectedRowsIds
          }) {
            return selectedRowsIds.size;
          },
          onChange({
            checkedAll,
            setSelectedRowsIds,
            allRowsInLevels,
            rowKeyGetter
          }) {
            if (!checkedAll) {
              setSelectedRowsIds(new Set(...[allRowsInLevels.map(r => rowKeyGetter(r))]));
            } else {
              setSelectedRowsIds(new Set());
            }
          }
        },
        rowGetStates({
          row,
          selectedRows,
          rowKeyGetter,
          setSelectedRows,
          isRowSelectedCalculated
        }) {
          return {
            checked: selectedRows.has(rowKeyGetter(row)),
            indeterminate: false,
            onChange() {
              setSelectedRows(prev => {
                const newV = new Set(prev);
                newV[isRowSelectedCalculated ? 'delete' : 'add'](rowKeyGetter(row));
                return newV;
              });
            }
          };
        }
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(K=(v=h.parameters)==null?void 0:v.docs)==null?void 0:K.source}}};var z,T,x;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Ручная настройка выбора строк с учетом disabled, hidden строк',
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
    const rowCheckboxDisabled = (r: Row) => r.id.toString().endsWith('0001');
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
        selectingRules: {
          levels: [1, 2, 3]
        },
        showDefault: true,
        summaryChecked: {
          checked({
            selectedRowsIds,
            getAllRowsInfo
          }) {
            const {
              notHidden
            } = getAllRowsInfo();
            return selectedRowsIds.size > 0 && notHidden.length === selectedRowsIds.size;
          },
          indeterminate({
            checkedAll,
            allRowsInLevels,
            selectedRowsIds
          }) {
            return !checkedAll && selectedRowsIds.size > 0 && selectedRowsIds.size < allRowsInLevels.length;
          },
          getCountOfChecked({
            selectedRowsIds
          }) {
            return selectedRowsIds.size;
          },
          onChange({
            checkedAll,
            setSelectedRowsIds,
            getAllRowsInfo
          }) {
            const {
              notDisabledAndNotHidden,
              notDisabledAndNotHiddenAreSelected
            } = getAllRowsInfo();
            if (checkedAll) {
              setSelectedRowsIds(new Set());
              return;
            }
            setSelectedRowsIds(prevSelecteds => {
              const needToDelete = notDisabledAndNotHiddenAreSelected;
              const newSelecteds = new Set(prevSelecteds);
              notDisabledAndNotHidden.forEach(rKey => {
                newSelecteds[needToDelete ? 'delete' : 'add'](rKey);
              });
              return newSelecteds;
            });
          }
        },
        rowGetStates({
          isRowSelectedCalculated,
          getRowChildrenInfo,
          isHaveCheckboxCalculated,
          rowKeyGetter,
          selectedRows,
          row,
          setSelectedRows
        }) {
          if (!isHaveCheckboxCalculated) return {
            showCheckbox: false
          };
          const rowInfo = getRowChildrenInfo();
          const hasChildren = !!rowInfo.all.length;
          const allVisible = rowInfo.notHidden;
          const allSelected = rowInfo.selected;
          const checked = !hasChildren ? isRowSelectedCalculated : !!allVisible.length && allVisible.length === allSelected.length;
          return {
            checked,
            indeterminate: hasChildren && !checked && rowInfo.someChildrenIsSelected,
            onChange({
              getRowParentsInfo
            }) {
              const {
                all,
                selected,
                notDisabledAndNotHidden,
                notHidden,
                someChildrenIsSelected
              } = getRowChildrenInfo();
              const rowKey = rowKeyGetter(row);
              const rowIsChecked = selectedRows.has(rowKey);
              const hasChildren = !!all.length;
              const checked = !hasChildren ? rowIsChecked : someChildrenIsSelected && selected.length >= notHidden.length;
              setSelectedRows(prevSelecteds => {
                const newSelecteds = new Set(prevSelecteds);
                // обработка самой строки если она без дочерних строк
                if (!hasChildren) {
                  newSelecteds[checked ? 'delete' : 'add'](rowKeyGetter(row));
                } else {
                  // обработка дочерних строк
                  // не полагаемся на checked, чтобы обработать логику выбора сразу при checked и indeterminate
                  const needToAdd = notDisabledAndNotHidden.every(rKey => prevSelecteds.has(rKey));
                  notDisabledAndNotHidden.forEach(rKey => {
                    newSelecteds[needToAdd ? 'delete' : 'add'](rKey);
                  });

                  // обработка самой строки. Проверка всех детей для того, чтобы определить выбирать ли текущую строку
                  const rowChidlrenSelectedAll = notHidden.every(rKey => newSelecteds.has(rKey));
                  newSelecteds[rowChidlrenSelectedAll ? 'add' : 'delete'](rowKey);
                }

                // обработка родительских строк
                const {
                  shouldBeSelected,
                  shouldNotBeSelected
                } = getRowParentsInfo().getShouldBeSelectedInfo(newSelecteds);
                shouldBeSelected.forEach(rKey => newSelecteds.add(rKey));
                shouldNotBeSelected.forEach(rKey => newSelecteds.delete(rKey));
                return newSelecteds;
              });
            }
          };
        },
        rowCheckboxDisabled,
        rowShowCheckbox
      }
    }} columnConfig={columns} rows={rows} />;
  }
}`,...(x=(T=S.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const Pe=["CustomRowSelection","CustomRowSelectionWithDisabledAndHidden"];export{h as CustomRowSelection,S as CustomRowSelectionWithDisabledAndHidden,Pe as __namedExportsOrder,je as default};
