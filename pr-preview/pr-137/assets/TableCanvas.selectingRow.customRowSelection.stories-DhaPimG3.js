import{r as c,j as H}from"./react-CAOzMBF_.js";import{c as x}from"./tableData-DVJFoYoT.js";import J from"./DocStoryTemplate-Cf946dgV.js";import{s as G}from"./storySourceDoc-tVKyHcEN.js";import{T as O}from"./TableCanvas-DlX-Wh2b.js";const Q={title:"Локальные компоненты/TableCanvas/SelectingRow/Ручная настройка выбор строк",tags:["!autodocs"],parameters:{docs:{page:J}}},N=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,h={...G({preCode:N,previewSource:"shown"}),name:"Независимый выбор строк в иерархии",render:()=>{const[R]=c.useState(x),g=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),b=c.useState(()=>new Set);return H.jsx(O,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},selecting:{state:b,rowKeyGetter:n=>n.id,selectingRules:{levels:[1,2]},showDefault:!0,summaryChecked:{checked({allRowsInLevels:n,selectedRowsIds:o}){return o.size>0&&n.length===o.size},indeterminate({checkedAll:n,allRowsInLevels:o,selectedRowsIds:e}){return!n&&e.size>0&&e.size<o.length},getCountOfChecked({selectedRowsIds:n}){return n.size},onChange({checkedAll:n,setSelectedRowsIds:o,allRowsInLevels:e,rowKeyGetter:u}){o(n?new Set:new Set(e.map(t=>u(t))))}},rowGetStates({row:n,selectedRows:o,rowKeyGetter:e,setSelectedRows:u,isRowSelectedCalculated:t}){return{checked:o.has(e(n)),indeterminate:!1,onChange(){u(l=>{const d=new Set(l);return d[t?"delete":"add"](e(n)),d})}}}}},columnConfig:g,rows:R})}},S={...G({preCode:N,previewSource:"shown"}),name:"Ручная настройка выбора строк с учетом disabled, hidden строк",render:()=>{const[R]=c.useState(x),g=c.useMemo(()=>[{key:"id",name:"ID",subRow:{keyOfColumnInSubRow:"id",isColumnWithArrow:!0},resizable:!0},{key:"issueType",name:"issue",subRow:{keyOfColumnInSubRow:"issueType"}},{key:"developer",name:"Developer"}],[]),b=c.useState(()=>new Set),n=e=>e.id!==2,o=e=>e.id.toString().endsWith("0001");return H.jsx(O,{tableConfig:{containerStyle:{height:"700px"},resizableColumn:!0,subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},selecting:{state:b,rowKeyGetter:e=>e.id+e.issueType,selectingRules:{levels:[1,2,3]},showDefault:!0,summaryChecked:{checked({selectedRowsIds:e,getAllRowsInfo:u}){const{notHidden:t}=u();return e.size>0&&t.length===e.size},indeterminate({checkedAll:e,allRowsInLevels:u,selectedRowsIds:t}){return!e&&t.size>0&&t.size<u.length},getCountOfChecked({selectedRowsIds:e}){return e.size},onChange({checkedAll:e,clearButtonClicked:u,setSelectedRowsIds:t,getAllRowsInfo:l}){console.log("========clearButtonClicked:",u);const{notDisabledAndNotHidden:d,notDisabledAndNotHiddenAreSelected:C}=l();if(e){t(new Set);return}t(y=>{const r=C,i=new Set(y);return d.forEach(m=>{i[r?"delete":"add"](m)}),i})}},rowGetStates({isRowSelectedCalculated:e,getRowChildrenInfo:u,isHaveCheckboxCalculated:t,rowKeyGetter:l,selectedRows:d,row:C,setSelectedRows:y}){if(!t)return{showCheckbox:!1};const r=u(),i=!!r.all.length,m=r.notHidden,L=r.selected,f=i?!!m.length&&m.length===L.length:e;return{checked:f,indeterminate:i&&!f&&r.someChildrenIsSelected,onChange({getRowParentsInfo:V}){const{all:W,selected:F,notDisabledAndNotHidden:k,notHidden:A,someChildrenIsSelected:j}=u(),p=l(C),M=d.has(p),I=!!W.length,_=I?j&&F.length>=A.length:M;y(E=>{const s=new Set(E);if(!I)s[_?"delete":"add"](l(C));else{const a=k.every(w=>E.has(w));k.forEach(w=>{s[a?"delete":"add"](w)});const q=A.every(w=>s.has(w));s[q?"add":"delete"](p)}const{shouldBeSelected:P,shouldNotBeSelected:X}=V().getShouldBeSelectedInfo(s);return P.forEach(a=>s.add(a)),X.forEach(a=>s.delete(a)),s})}}},rowCheckboxDisabled:o,rowShowCheckbox:n}},columnConfig:g,rows:R})}};var v,D,K;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(D=h.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var z,B,T;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(B=S.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const U=["CustomRowSelection","CustomRowSelectionWithDisabledAndHidden"],te=Object.freeze(Object.defineProperty({__proto__:null,CustomRowSelection:h,CustomRowSelectionWithDisabledAndHidden:S,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{te as T};
