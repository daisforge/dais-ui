import{r as c,d as x}from"./react-D2T61mpp.js";import{c as H}from"./tableData-UCfjiBCh.js";import J from"./DocStoryTemplate-ote7_b2_.js";import{s as N}from"./storySourceDoc-tVKyHcEN.js";import{T as G}from"./TableCanvas-C2N62sQI.js";import"./vendor-DV2KdZ5r.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./FiltersActions-BbQnEM8y.js";import"./IconButton-Bi4w3gSS.js";import"./@salutejs/plasma-icons-BcApNSC-.js";import"./@salutejs/sdds-finai-5M_BRjMS.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-xPrEbuhT.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C4aqnFI9.js";import"./TextField-naKDiyN_.js";import"./sharedUtilsInputs-DNy6XTyt.js";import"./AnalyticalWidget-D_b3HOJg.js";import"./Collapse-CrltDd66.js";import"./Table-9qgl-XnZ.js";import"./react-data-grid-5SLMzt16.js";import"./TableTabs-DaZ06WG2.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-wS9D-jNy.js";import"./ListOfFilters-Di1xiA8f.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CzgSwCLw.js";import"./EmptyState-Bye1y-Qt.js";import"./MassActions-Bx1gs1mm.js";import"./Autocomplete-DY3elYeP.js";import"./TableGlide-iZMQoml1.js";import"./@glideappsfinal/glide-data-grid-C5jg3NuH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BbQU81Ux.js";const Be={title:"Локальные компоненты/TableCanvas/SelectingRow/Ручная настройка выбор строк",tags:["!autodocs"],parameters:{docs:{page:J}}},O=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,S={...N({preCode:O,previewSource:"shown"}),name:"Независимый выбор строк в иерархии",render:()=>{const[R]=c.useState(H),g=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),b=c.useState(()=>new Set);return x.jsxDEV(G,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},selecting:{state:b,rowKeyGetter:n=>n.id,selectingRules:{levels:[1,2]},showDefault:!0,summaryChecked:{checked({allRowsInLevels:n,selectedRowsIds:u}){return u.size>0&&n.length===u.size},indeterminate({checkedAll:n,allRowsInLevels:u,selectedRowsIds:e}){return!n&&e.size>0&&e.size<u.length},getCountOfChecked({selectedRowsIds:n}){return n.size},onChange({checkedAll:n,setSelectedRowsIds:u,allRowsInLevels:e,rowKeyGetter:o}){u(n?new Set:new Set(e.map(t=>o(t))))}},rowGetStates({row:n,selectedRows:u,rowKeyGetter:e,setSelectedRows:o,isRowSelectedCalculated:t}){return{checked:u.has(e(n)),indeterminate:!1,onChange(){o(l=>{const r=new Set(l);return r[t?"delete":"add"](e(n)),r})}}}}},columnConfig:g,rows:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.customRowSelection.stories.tsx",lineNumber:66,columnNumber:7},void 0)}},C={...N({preCode:O,previewSource:"shown"}),name:"Ручная настройка выбора строк с учетом disabled, hidden строк",render:()=>{const[R]=c.useState(H),g=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),b=c.useState(()=>new Set),n=e=>e.id!==2,u=e=>e.id.toString().endsWith("0001");return x.jsxDEV(G,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:b,rowKeyGetter:e=>e.id+e.issueType,selectingRules:{levels:[1,2,3]},showDefault:!0,summaryChecked:{checked({selectedRowsIds:e,getAllRowsInfo:o}){const{notHidden:t}=o();return e.size>0&&t.length===e.size},indeterminate({checkedAll:e,allRowsInLevels:o,selectedRowsIds:t}){return!e&&t.size>0&&t.size<o.length},getCountOfChecked({selectedRowsIds:e}){return e.size},onChange({checkedAll:e,clearButtonClicked:o,setSelectedRowsIds:t,getAllRowsInfo:l}){console.log("========clearButtonClicked:",o);const{notDisabledAndNotHidden:r,notDisabledAndNotHiddenAreSelected:h}=l();if(e){t(new Set);return}t(p=>{const d=h,i=new Set(p);return r.forEach(m=>{i[d?"delete":"add"](m)}),i})}},rowGetStates({isRowSelectedCalculated:e,getRowChildrenInfo:o,isHaveCheckboxCalculated:t,rowKeyGetter:l,selectedRows:r,row:h,setSelectedRows:p}){if(!t)return{showCheckbox:!1};const d=o(),i=!!d.all.length,m=d.notHidden,V=d.selected,y=i?!!m.length&&m.length===V.length:e;return{checked:y,indeterminate:i&&!y&&d.someChildrenIsSelected,onChange({getRowParentsInfo:L}){const{all:W,selected:F,notDisabledAndNotHidden:f,notHidden:k,someChildrenIsSelected:M}=o(),A=l(h),j=r.has(A),I=!!W.length,P=I?M&&F.length>=k.length:j;p(E=>{const s=new Set(E);if(!I)s[P?"delete":"add"](l(h));else{const a=f.every(w=>E.has(w));f.forEach(w=>{s[a?"delete":"add"](w)});const q=k.every(w=>s.has(w));s[q?"add":"delete"](A)}const{shouldBeSelected:_,shouldNotBeSelected:X}=L().getShouldBeSelectedInfo(s);return _.forEach(a=>s.add(a)),X.forEach(a=>s.delete(a)),s})}}},rowCheckboxDisabled:u,rowShowCheckbox:n}},columnConfig:g,rows:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.customRowSelection.stories.tsx",lineNumber:188,columnNumber:7},void 0)}};var v,D,K;S.parameters={...S.parameters,docs:{...(v=S.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
}`,...(K=(D=S.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var T,z,B;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    return <TableCanvas tableConfig={{
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
            clearButtonClicked,
            setSelectedRowsIds,
            getAllRowsInfo
          }) {
            // eslint-disable-next-line no-console
            console.log('========clearButtonClicked:', clearButtonClicked);
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
}`,...(B=(z=C.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const xe=["CustomRowSelection","CustomRowSelectionWithDisabledAndHidden"];export{S as CustomRowSelection,C as CustomRowSelectionWithDisabledAndHidden,xe as __namedExportsOrder,Be as default};
