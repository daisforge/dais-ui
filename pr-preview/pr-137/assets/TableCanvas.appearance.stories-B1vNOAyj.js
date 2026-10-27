import{r as u,j as n}from"./react-CAOzMBF_.js";import{c as Z}from"./tableData-DVJFoYoT.js";import Y from"./DocStoryTemplate-Cf946dgV.js";import{s as X}from"./storySourceDoc-tVKyHcEN.js";import{S as a}from"./FiltersActions-BWfcXHB3.js";import{T as q}from"./TableCanvas-DlX-Wh2b.js";import{a3 as E}from"./@salutejs/sdds-finai-CKhMjg07.js";import{rf as T}from"./@salutejs/plasma-icons-Do5ggeDI.js";const J={title:"Локальные компоненты/TableCanvas/Appearance",tags:["!autodocs"],parameters:{docs:{page:Y}}},Q=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

// «Чистый» вид и зебра включаются в tableConfig.appearance:
// appearance: { variant: 'clean', zebra: true }
`,U=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],ee=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],ue=15,r={...X({preCode:Q,previewSource:"shown"}),name:"Чистый вид и зебра (прототип)",render:()=>{const[s,x]=u.useState(Z),[g,B]=u.useState("clean"),[h,R]=u.useState(!0),[y,P]=u.useState("row"),[S,W]=u.useState("range-cell"),[v,z]=u.useState(!0),[w,M]=u.useState(!0),[C,G]=u.useState(!0),[p,O]=u.useState(!0),[c,V]=u.useState(!0),l=u.useCallback(e=>c?{minWidth:e}:{width:e},[c]),[j,f]=u.useState(1),[m,_]=u.useState(ue),d=u.useCallback(e=>{var o;return((o=e.row.values.find(i=>i.columnId===e.column.key))==null?void 0:o.value)??""},[]),t=u.useMemo(()=>({id:{key:"id",name:"ID",...l(90),sortingType:"numberSort",resizable:!0,renderSummaryCell:d},task:{key:"task",name:"Title",...l(220),sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},renderSummaryCell:d},priority:{key:"priority",name:"Priority",...l(140),sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,o)=>e!=="All"?o===e:!0}}},issueType:{key:"issueType",name:"Issue Type",...l(150),sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"Bug",text:"Bug"},{value:"Improvement",text:"Improvement"},{value:"Epic",text:"Epic"},{value:"Story",text:"Story"}]},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,o)=>!e.length||e.some(i=>i===o)}}},developer:{key:"developer",name:"Developer",...l(180),sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},complete:{key:"complete",name:"% Complete",...l(140),sortingType:"numberSort",resizable:!0,editingCell:{component:"inputString"}}}),[d,l]),H=u.useMemo(()=>p?[t.id,t.task,{key:"params",name:"Параметры",children:[t.priority,t.issueType]},{key:"progress",name:"Выполнение",children:[t.developer,t.complete]}]:[t.id,t.task,t.priority,t.issueType,t.developer,t.complete],[t,p]),L=u.useState({priority:"All",issueType:["Bug","Story","Epic","Improvement"],developer:"",globalFilter:""}),K=u.useState([]),N=u.useState(()=>new Set),b=u.useCallback(e=>`${e.id}`,[]),$=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего задач: ${s.length}`}]}],[s]);return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-end",marginBottom:12},children:[n.jsx(E,{label:"cellsSelection.mode",value:S,onChange:e=>W(e),items:ee,style:{width:200}}),n.jsx(E,{label:"highlightActiveType",value:y,onChange:e=>P(e),items:U,style:{width:180}})]}),n.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",marginBottom:12},children:[n.jsx(a,{label:"appearance.variant = 'clean'",checked:g==="clean",onChange:()=>B(e=>e==="clean"?"default":"clean")}),n.jsx(a,{label:"appearance.zebra",checked:h,onChange:()=>R(e=>!e)}),n.jsx(a,{label:"Блок управления",checked:w,onChange:()=>M(e=>!e)}),n.jsx(a,{label:"Пагинация",checked:v,onChange:()=>z(e=>!e)}),n.jsx(a,{label:"Итоговая строка",checked:C,onChange:()=>G(e=>!e)}),n.jsx(a,{label:"Группировка шапки",checked:p,onChange:()=>O(e=>!e)}),n.jsx(a,{label:"Колонки на всю ширину",checked:c,onChange:()=>V(e=>!e)})]}),n.jsx(q,{tableConfig:{appearance:{variant:g,zebra:h},containerStyle:{height:"80vh"},fullScreenEnabled:!0,resizableColumn:!0,editing:{onRowsChange:x,rowKeyGetter:b},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:S},highlightActiveType:y,searching:{enabled:!0,debounceDelay:400},summaryRows:{showDefault:C,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,pinnedDefault:["id"]},rowMarkers:{startIndex:1},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},...v&&{pagination:{value:j,perPage:m,count:s.length,onChangePageValue(e,o){f(e??1),o()},onChange(e,o,i){f(o!==void 0&&o!==m?1:e??1),_(o??m),i()}}},controlBlock:{show:w,rightSideInner:[{text:"Скачать",contentLeft:n.jsx(T,{color:"inherit"}),"data-test-id":"download"}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Действие",contentLeft:n.jsx(T,{color:"inherit"}),"data-test-id":"mass-action"}]}},filtering:{state:L,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:N,rowKeyGetter:b,showDefault:!0},sorting:{state:K}},columnConfig:H,rows:s,bottomSummaryRows:$},c?"fill":"fixed")]})}};var A,k,D,F,I;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Чистый вид и зебра (прототип)',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [variant, setVariant] = useState<AppearanceVariant>('clean');
    const [zebra, setZebra] = useState(true);
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const [showPagination, setShowPagination] = useState(true);
    const [showControlBlock, setShowControlBlock] = useState(true);
    const [showSummaryRow, setShowSummaryRow] = useState(true);
    const [showColumnsGrouping, setShowColumnsGrouping] = useState(true);
    const [fillWidth, setFillWidth] = useState(true);

    // Колонка без width получает grow и растягивается: таблица сначала
    // подбирает ширину по содержимому, затем один раз делит остаток места
    // поровну. Число становится нижней границей ширины. С fillWidth=false
    // ширина фиксированная, справа остаётся пустое место.
    const columnWidth = useCallback((px: number) => fillWidth ? {
      minWidth: px
    } : {
      width: px
    }, [fillWidth]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(PER_PAGE);
    const renderSummaryCell = useCallback((props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) => props.row.values.find(el => el.columnId === props.column.key)?.value ?? '', []);

    // Листовые колонки одни и те же, группировка лишь оборачивает их в
    // верхний уровень шапки.
    const leafColumns = useMemo<Record<LeafColumnKey, ColumnConfig<Row, TSummaryRowData>>>(() => ({
      id: {
        key: 'id',
        name: 'ID',
        ...columnWidth(90),
        sortingType: 'numberSort',
        resizable: true,
        renderSummaryCell
      },
      task: {
        key: 'task',
        name: 'Title',
        ...columnWidth(220),
        sortingType: 'stringSort',
        resizable: true,
        editingCell: {
          component: 'inputString'
        },
        renderSummaryCell
      },
      priority: {
        key: 'priority',
        name: 'Priority',
        ...columnWidth(140),
        sortingType: 'stringSort',
        resizable: true,
        filtering: {
          component: 'select',
          selectOptions: {
            type: 'constant',
            options: [{
              value: 'All',
              text: 'All'
            }, {
              value: 'High',
              text: 'High'
            }, {
              value: 'Critical',
              text: 'Critical'
            }, {
              value: 'Medium',
              text: 'Medium'
            }, {
              value: 'Low',
              text: 'Low'
            }]
          },
          keyInFilterState: 'priority',
          valueInRow: r => r.priority,
          filter: {
            typeOfValue: 'single',
            filteringType: (fv, rv) => fv !== 'All' ? rv === fv : true
          }
        }
      },
      issueType: {
        key: 'issueType',
        name: 'Issue Type',
        ...columnWidth(150),
        sortingType: 'stringSort',
        resizable: true,
        filtering: {
          component: 'select',
          selectOptions: {
            type: 'constant',
            options: [{
              value: 'Bug',
              text: 'Bug'
            }, {
              value: 'Improvement',
              text: 'Improvement'
            }, {
              value: 'Epic',
              text: 'Epic'
            }, {
              value: 'Story',
              text: 'Story'
            }]
          },
          keyInFilterState: 'issueType',
          valueInRow: r => r.issueType,
          filter: {
            typeOfValue: 'multiple',
            filteringType: (fv, rv) => !fv.length || fv.some(fvCurr => fvCurr === rv)
          }
        }
      },
      developer: {
        key: 'developer',
        name: 'Developer',
        ...columnWidth(180),
        sortingType: 'stringSort',
        resizable: true,
        editingCell: {
          component: 'inputString'
        },
        filtering: {
          component: 'input',
          keyInFilterState: 'developer',
          valueInRow: r => r.developer,
          filter: 'startWith'
        }
      },
      complete: {
        key: 'complete',
        name: '% Complete',
        ...columnWidth(140),
        sortingType: 'numberSort',
        resizable: true,
        editingCell: {
          component: 'inputString'
        }
      }
    }), [renderSummaryCell, columnWidth]);
    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(() => showColumnsGrouping ? [leafColumns.id, leafColumns.task, {
      key: 'params',
      name: 'Параметры',
      children: [leafColumns.priority, leafColumns.issueType]
    }, {
      key: 'progress',
      name: 'Выполнение',
      children: [leafColumns.developer, leafColumns.complete]
    }] : [leafColumns.id, leafColumns.task, leafColumns.priority, leafColumns.issueType, leafColumns.developer, leafColumns.complete], [leafColumns, showColumnsGrouping]);

    // Фильтр по типу задачи задан сразу: так на стенде с самого начала видна
    // строка активных фильтров под блоком управления.
    const filteringStateAndSetter = useState({
      priority: 'All',
      issueType: ['Bug', 'Story', 'Epic', 'Improvement'],
      developer: '',
      globalFilter: ''
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const selectingRowStateAndSetter = useState((): ReadonlySet<string | number> => new Set());
    const rowKeyGetter = useCallback((r: Row) => \`\${r.id}\`, []);
    const bottomSummaryRows = useMemo<TSummaryRowData[]>(() => [{
      type: 'bottom',
      values: [{
        columnId: 'id',
        value: 'Итого'
      }, {
        columnId: 'task',
        value: \`Всего задач: \${rows.length}\`
      }]
    }], [rows]);
    return <div>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        marginBottom: 12
      }}>
          <Select label="cellsSelection.mode" value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} style={{
          width: 200
        }} />
          <Select label="highlightActiveType" value={highlightActiveType} onChange={value => setHighlightActiveType(value as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS} style={{
          width: 180
        }} />
        </div>
        <div style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 12
      }}>
          <Switch label="appearance.variant = 'clean'" checked={variant === 'clean'} onChange={() => setVariant(prev => prev === 'clean' ? 'default' : 'clean')} />
          <Switch label="appearance.zebra" checked={zebra} onChange={() => setZebra(prev => !prev)} />
          <Switch label="Блок управления" checked={showControlBlock} onChange={() => setShowControlBlock(prev => !prev)} />
          <Switch label="Пагинация" checked={showPagination} onChange={() => setShowPagination(prev => !prev)} />
          <Switch label="Итоговая строка" checked={showSummaryRow} onChange={() => setShowSummaryRow(prev => !prev)} />
          <Switch label="Группировка шапки" checked={showColumnsGrouping} onChange={() => setShowColumnsGrouping(prev => !prev)} />
          <Switch label="Колонки на всю ширину" checked={fillWidth} onChange={() => setFillWidth(prev => !prev)} />
        </div>

        <TableCanvas
      // растягивание колонок срабатывает один раз при первой раскладке,
      // поэтому при переключении таблица пересоздаётся
      key={fillWidth ? 'fill' : 'fixed'} tableConfig={{
        appearance: {
          variant,
          zebra
        },
        containerStyle: {
          height: '80vh'
        },
        fullScreenEnabled: true,
        resizableColumn: true,
        editing: {
          onRowsChange: setRows,
          rowKeyGetter
        },
        rowSize: {
          default: 'big',
          showInControl: true
        },
        cellsSelection: {
          mode: selectionMode
        },
        highlightActiveType,
        searching: {
          enabled: true,
          debounceDelay: 400
        },
        summaryRows: {
          showDefault: showSummaryRow,
          showInControl: true
        },
        columnsControl: {
          enable: true,
          hiding: true,
          pinning: true,
          reorderingAside: true,
          reorderingHeader: true,
          pinnedDefault: ['id']
        },
        rowMarkers: {
          startIndex: 1
        },
        subRows: {
          getSubRows: row => row?.subRows,
          rowKeyGetter: row => row.id
        },
        ...(showPagination && {
          pagination: {
            value: page,
            perPage,
            count: rows.length,
            onChangePageValue(value, scrollToTop) {
              setPage(value ?? 1);
              scrollToTop();
            },
            onChange(value, pageSize, scrollToTop) {
              setPage(pageSize !== undefined && pageSize !== perPage ? 1 : value ?? 1);
              setPerPage(pageSize ?? perPage);
              scrollToTop();
            }
          }
        }),
        controlBlock: {
          show: showControlBlock,
          rightSideInner: [{
            text: 'Скачать',
            contentLeft: <IconSb color="inherit" />,
            'data-test-id': 'download'
          }],
          massActionPanel: {
            buttons: [{
              type: 'button',
              view: 'secondary',
              text: 'Действие',
              contentLeft: <IconSb color="inherit" />,
              'data-test-id': 'mass-action'
            }]
          }
        },
        filtering: {
          state: filteringStateAndSetter,
          filtersInfo: {
            priority: {
              label: 'Priority',
              clearedValue: 'All'
            },
            issueType: {
              label: 'Issue Type',
              clearedValue: []
            },
            developer: {
              label: 'Developer',
              clearedValue: ''
            },
            globalFilter: {
              label: 'Global filter',
              clearedValue: ''
            }
          }
        },
        selecting: {
          state: selectingRowStateAndSetter,
          rowKeyGetter,
          showDefault: true
        },
        sorting: {
          state: sortingStateAndSetter
        }
      }} columnConfig={columnConfig} rows={rows} bottomSummaryRows={bottomSummaryRows} />
      </div>;
  }
}`,...(D=(k=r.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:`Таблица с блоком управления, фильтрами, пагинацией, группировкой шапки и
итоговой строкой. Переключатели над таблицей включают чистый вид и зебру.`,...(I=(F=r.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};const ne=["Appearance"],pe=Object.freeze(Object.defineProperty({__proto__:null,Appearance:r,__namedExportsOrder:ne,default:J},Symbol.toStringTag,{value:"Module"}));export{pe as A};
