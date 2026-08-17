import{r as c,d as B}from"./react-D2T61mpp.js";import{c as H}from"./tableData-UCfjiBCh.js";import q from"./DocStoryTemplate-CGbvb4bP.js";import{s as G}from"./storySourceDoc-tVKyHcEN.js";import{f as N}from"./Table-DgJhKE0t.js";import"./vendor-DvO6Ud8q.js";import"./react-is-Clcustum.js";import"./styled-components-peerelvn.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-C6NIshpU.js";import"./IconButton-CgOIaK3y.js";import"./@salutejs/plasma-icons-BHcaROEp.js";import"./@salutejs/sdds-finai-DNM8nTh9.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C3gQRkR2.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CTSbJM1M.js";import"./TextField-BH7LVt6d.js";import"./sharedUtilsInputs-BrK1Paqr.js";import"./AnalyticalWidget-CU0fGKHE.js";import"./Collapse-u4wVL0Hd.js";import"./react-data-grid-DHlXR-SI.js";import"./TableTabs-BQcrBoiU.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-tnsqPowb.js";import"./ListOfFilters-jO6wYvaR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B-YDOR27.js";import"./EmptyState-CT6G56J8.js";import"./MassActions-Nk31J562.js";import"./Autocomplete-BSaHYmPm.js";const De={title:"Локальные компоненты/Table/SelectingRow/Ручная настройка выбор строк",tags:["!autodocs"],parameters:{docs:{page:q}}},O=`
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
`,m={...G({preCode:O,previewSource:"shown"}),name:"Независимый выбор строк в иерархии",render:()=>{const[C]=c.useState(H),R=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),g=c.useState(()=>new Set);return B.jsxDEV(N,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},selecting:{state:g,rowKeyGetter:n=>n.id,selectingRules:{levels:[1,2]},showDefault:!0,summaryChecked:{checked({allRowsInLevels:n,selectedRowsIds:u}){return u.size>0&&n.length===u.size},indeterminate({checkedAll:n,allRowsInLevels:u,selectedRowsIds:e}){return!n&&e.size>0&&e.size<u.length},getCountOfChecked({selectedRowsIds:n}){return n.size},onChange({checkedAll:n,setSelectedRowsIds:u,allRowsInLevels:e,rowKeyGetter:t}){u(n?new Set:new Set(e.map(o=>t(o))))}},rowGetStates({row:n,selectedRows:u,rowKeyGetter:e,setSelectedRows:t,isRowSelectedCalculated:o}){return{checked:u.has(e(n)),indeterminate:!1,onChange(){t(l=>{const d=new Set(l);return d[o?"delete":"add"](e(n)),d})}}}}},columnConfig:R,rows:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.customRowSelection.stories.tsx",lineNumber:80,columnNumber:7},void 0)}},S={...G({preCode:O,previewSource:"shown"}),name:"Ручная настройка выбора строк с учетом disabled, hidden строк",render:()=>{const[C]=c.useState(H),R=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),g=c.useState(()=>new Set),n=e=>e.id!==2,u=e=>e.id.toString().endsWith("0001");return B.jsxDEV(N,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:g,rowKeyGetter:e=>e.id+e.issueType,selectingRules:{levels:[1,2,3]},showDefault:!0,summaryChecked:{checked({selectedRowsIds:e,getAllRowsInfo:t}){const{notHidden:o}=t();return e.size>0&&o.length===e.size},indeterminate({checkedAll:e,allRowsInLevels:t,selectedRowsIds:o}){return!e&&o.size>0&&o.size<t.length},getCountOfChecked({selectedRowsIds:e}){return e.size},onChange({checkedAll:e,setSelectedRowsIds:t,getAllRowsInfo:o}){const{notDisabledAndNotHidden:l,notDisabledAndNotHiddenAreSelected:d}=o();if(e){t(new Set);return}t(w=>{const b=d,r=new Set(w);return l.forEach(h=>{r[b?"delete":"add"](h)}),r})}},rowGetStates({isRowSelectedCalculated:e,getRowChildrenInfo:t,isHaveCheckboxCalculated:o,rowKeyGetter:l,selectedRows:d,row:w,setSelectedRows:b}){if(!o)return{showCheckbox:!1};const r=t(),h=!!r.all.length,p=r.notHidden,V=r.selected,f=h?!!p.length&&p.length===V.length:e;return{checked:f,indeterminate:h&&!f&&r.someChildrenIsSelected,onChange({getRowParentsInfo:F}){const{all:L,selected:W,notDisabledAndNotHidden:y,notHidden:k,someChildrenIsSelected:M}=t(),I=l(w),j=d.has(I),A=!!L.length,P=A?M&&W.length>=k.length:j;b(E=>{const s=new Set(E);if(!A)s[P?"delete":"add"](l(w));else{const i=y.every(a=>E.has(a));y.forEach(a=>{s[i?"delete":"add"](a)});const Z=k.every(a=>s.has(a));s[Z?"add":"delete"](I)}const{shouldBeSelected:_,shouldNotBeSelected:X}=F().getShouldBeSelectedInfo(s);return _.forEach(i=>s.add(i)),X.forEach(i=>s.delete(i)),s})}}},rowCheckboxDisabled:u,rowShowCheckbox:n}},columnConfig:R,rows:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Table/Table.selecting/Table.selectingRow.customRowSelection.stories.tsx",lineNumber:201,columnNumber:7},void 0)}};var D,v,K;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(K=(v=m.parameters)==null?void 0:v.docs)==null?void 0:K.source}}};var z,T,x;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(x=(T=S.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const ve=["CustomRowSelection","CustomRowSelectionWithDisabledAndHidden"];export{m as CustomRowSelection,S as CustomRowSelectionWithDisabledAndHidden,ve as __namedExportsOrder,De as default};
