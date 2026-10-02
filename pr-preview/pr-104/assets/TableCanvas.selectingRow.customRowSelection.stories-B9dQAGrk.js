import{r as c,d as x}from"./react-D2T61mpp.js";import{c as H}from"./tableData-DVJFoYoT.js";import J from"./DocStoryTemplate-CxsDc38I.js";import{s as N}from"./storySourceDoc-tVKyHcEN.js";import{T as G}from"./TableCanvas-9ua_C1Jc.js";const Q={title:"Локальные компоненты/TableCanvas/SelectingRow/Ручная настройка выбор строк",tags:["!autodocs"],parameters:{docs:{page:J}}},O=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,h={...N({preCode:O,previewSource:"shown"}),name:"Независимый выбор строк в иерархии",render:()=>{const[R]=c.useState(H),g=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),b=c.useState(()=>new Set);return x.jsxDEV(G,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},selecting:{state:b,rowKeyGetter:n=>n.id,selectingRules:{levels:[1,2]},showDefault:!0,summaryChecked:{checked({allRowsInLevels:n,selectedRowsIds:s}){return s.size>0&&n.length===s.size},indeterminate({checkedAll:n,allRowsInLevels:s,selectedRowsIds:e}){return!n&&e.size>0&&e.size<s.length},getCountOfChecked({selectedRowsIds:n}){return n.size},onChange({checkedAll:n,setSelectedRowsIds:s,allRowsInLevels:e,rowKeyGetter:u}){s(n?new Set:new Set(e.map(t=>u(t))))}},rowGetStates({row:n,selectedRows:s,rowKeyGetter:e,setSelectedRows:u,isRowSelectedCalculated:t}){return{checked:s.has(e(n)),indeterminate:!1,onChange(){u(l=>{const r=new Set(l);return r[t?"delete":"add"](e(n)),r})}}}}},columnConfig:g,rows:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.customRowSelection.stories.tsx",lineNumber:66,columnNumber:7},void 0)}},S={...N({preCode:O,previewSource:"shown"}),name:"Ручная настройка выбора строк с учетом disabled, hidden строк",render:()=>{const[R]=c.useState(H),g=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),b=c.useState(()=>new Set),n=e=>e.id!==2,s=e=>e.id.toString().endsWith("0001");return x.jsxDEV(G,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:b,rowKeyGetter:e=>e.id+e.issueType,selectingRules:{levels:[1,2,3]},showDefault:!0,summaryChecked:{checked({selectedRowsIds:e,getAllRowsInfo:u}){const{notHidden:t}=u();return e.size>0&&t.length===e.size},indeterminate({checkedAll:e,allRowsInLevels:u,selectedRowsIds:t}){return!e&&t.size>0&&t.size<u.length},getCountOfChecked({selectedRowsIds:e}){return e.size},onChange({checkedAll:e,clearButtonClicked:u,setSelectedRowsIds:t,getAllRowsInfo:l}){console.log("========clearButtonClicked:",u);const{notDisabledAndNotHidden:r,notDisabledAndNotHiddenAreSelected:C}=l();if(e){t(new Set);return}t(y=>{const d=C,a=new Set(y);return r.forEach(m=>{a[d?"delete":"add"](m)}),a})}},rowGetStates({isRowSelectedCalculated:e,getRowChildrenInfo:u,isHaveCheckboxCalculated:t,rowKeyGetter:l,selectedRows:r,row:C,setSelectedRows:y}){if(!t)return{showCheckbox:!1};const d=u(),a=!!d.all.length,m=d.notHidden,V=d.selected,f=a?!!m.length&&m.length===V.length:e;return{checked:f,indeterminate:a&&!f&&d.someChildrenIsSelected,onChange({getRowParentsInfo:L}){const{all:W,selected:F,notDisabledAndNotHidden:k,notHidden:p,someChildrenIsSelected:M}=u(),A=l(C),_=r.has(A),I=!!W.length,j=I?M&&F.length>=p.length:_;y(v=>{const o=new Set(v);if(!I)o[j?"delete":"add"](l(C));else{const i=k.every(w=>v.has(w));k.forEach(w=>{o[i?"delete":"add"](w)});const q=p.every(w=>o.has(w));o[q?"add":"delete"](A)}const{shouldBeSelected:P,shouldNotBeSelected:X}=L().getShouldBeSelectedInfo(o);return P.forEach(i=>o.add(i)),X.forEach(i=>o.delete(i)),o})}}},rowCheckboxDisabled:s,rowShowCheckbox:n}},columnConfig:g,rows:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Selecting/TableCanvas.selectingRow.customRowSelection.stories.tsx",lineNumber:188,columnNumber:7},void 0)}};var E,D,T;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(D=h.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var K,z,B;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(z=S.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const U=["CustomRowSelection","CustomRowSelectionWithDisabledAndHidden"],te=Object.freeze(Object.defineProperty({__proto__:null,CustomRowSelection:h,CustomRowSelectionWithDisabledAndHidden:S,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{te as T};
