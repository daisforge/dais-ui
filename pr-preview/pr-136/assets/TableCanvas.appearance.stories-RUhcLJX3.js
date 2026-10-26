import{r as u,d as n}from"./react-D2T61mpp.js";import{c as Z}from"./tableData-DVJFoYoT.js";import Y from"./DocStoryTemplate-Da-hjSuj.js";import{s as X}from"./storySourceDoc-tVKyHcEN.js";import{S as r}from"./FiltersActions-BSKQczkC.js";import{T as q}from"./TableCanvas-CBEOD9lf.js";import{a3 as T}from"./@salutejs/sdds-finai-DZvjLWsU.js";import{rf as k}from"./@salutejs/plasma-icons-DxvG4K4R.js";const J={title:"Локальные компоненты/TableCanvas/Appearance",tags:["!autodocs"],parameters:{docs:{page:Y}}},Q=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

// «Чистый» вид и зебра включаются в tableConfig.appearance:
// appearance: { variant: 'clean', zebra: true }
`,U=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],ee=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],ue=15,l={...X({preCode:Q,previewSource:"shown"}),name:"Чистый вид и зебра (прототип)",render:()=>{const[i,I]=u.useState(Z),[g,B]=u.useState("clean"),[b,N]=u.useState(!0),[v,R]=u.useState("row"),[h,P]=u.useState("range-cell"),[y,V]=u.useState(!0),[C,W]=u.useState(!0),[S,z]=u.useState(!0),[p,M]=u.useState(!0),[c,G]=u.useState(!0),o=u.useCallback(e=>c?{minWidth:e}:{width:e},[c]),[O,f]=u.useState(1),[m,j]=u.useState(ue),d=u.useCallback(e=>{var a;return((a=e.row.values.find(s=>s.columnId===e.column.key))==null?void 0:a.value)??""},[]),t=u.useMemo(()=>({id:{key:"id",name:"ID",...o(90),sortingType:"numberSort",resizable:!0,renderSummaryCell:d},task:{key:"task",name:"Title",...o(220),sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},renderSummaryCell:d},priority:{key:"priority",name:"Priority",...o(140),sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,a)=>e!=="All"?a===e:!0}}},issueType:{key:"issueType",name:"Issue Type",...o(150),sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"Bug",text:"Bug"},{value:"Improvement",text:"Improvement"},{value:"Epic",text:"Epic"},{value:"Story",text:"Story"}]},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,a)=>!e.length||e.some(s=>s===a)}}},developer:{key:"developer",name:"Developer",...o(180),sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},complete:{key:"complete",name:"% Complete",...o(140),sortingType:"numberSort",resizable:!0,editingCell:{component:"inputString"}}}),[d,o]),_=u.useMemo(()=>p?[t.id,t.task,{key:"params",name:"Параметры",children:[t.priority,t.issueType]},{key:"progress",name:"Выполнение",children:[t.developer,t.complete]}]:[t.id,t.task,t.priority,t.issueType,t.developer,t.complete],[t,p]),H=u.useState({priority:"All",issueType:["Bug","Story","Epic","Improvement"],developer:"",globalFilter:""}),L=u.useState([]),K=u.useState(()=>new Set),w=u.useCallback(e=>`${e.id}`,[]),$=u.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего задач: ${i.length}`}]}],[i]);return n.jsxDEV("div",{children:[n.jsxDEV("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-end",marginBottom:12},children:[n.jsxDEV(T,{label:"cellsSelection.mode",value:h,onChange:e=>P(e),items:ee,style:{width:200}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:287,columnNumber:11},void 0),n.jsxDEV(T,{label:"highlightActiveType",value:v,onChange:e=>R(e),items:U,style:{width:180}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:294,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:278,columnNumber:9},void 0),n.jsxDEV("div",{style:{display:"flex",gap:16,flexWrap:"wrap",marginBottom:12},children:[n.jsxDEV(r,{label:"appearance.variant = 'clean'",checked:g==="clean",onChange:()=>B(e=>e==="clean"?"default":"clean")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:312,columnNumber:11},void 0),n.jsxDEV(r,{label:"appearance.zebra",checked:b,onChange:()=>N(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:319,columnNumber:11},void 0),n.jsxDEV(r,{label:"Блок управления",checked:C,onChange:()=>W(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:324,columnNumber:11},void 0),n.jsxDEV(r,{label:"Пагинация",checked:y,onChange:()=>V(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:329,columnNumber:11},void 0),n.jsxDEV(r,{label:"Итоговая строка",checked:S,onChange:()=>z(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:334,columnNumber:11},void 0),n.jsxDEV(r,{label:"Группировка шапки",checked:p,onChange:()=>M(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:339,columnNumber:11},void 0),n.jsxDEV(r,{label:"Колонки на всю ширину",checked:c,onChange:()=>G(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:344,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:304,columnNumber:9},void 0),n.jsxDEV(q,{tableConfig:{appearance:{variant:g,zebra:b},containerStyle:{height:"80vh"},fullScreenEnabled:!0,resizableColumn:!0,editing:{onRowsChange:I,rowKeyGetter:w},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:h},highlightActiveType:v,searching:{enabled:!0,debounceDelay:400},summaryRows:{showDefault:S,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,pinnedDefault:["id"]},rowMarkers:{startIndex:1},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},...y&&{pagination:{value:O,perPage:m,count:i.length,onChangePageValue(e,a){f(e??1),a()},onChange(e,a,s){f(a!==void 0&&a!==m?1:e??1),j(a??m),s()}}},controlBlock:{show:C,rightSideInner:[{text:"Скачать",contentLeft:n.jsxDEV(k,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:418,columnNumber:32},void 0),"data-test-id":"download"}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Действие",contentLeft:n.jsxDEV(k,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:428,columnNumber:34},void 0),"data-test-id":"mass-action"}]}},filtering:{state:H,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:K,rowKeyGetter:w,showDefault:!0},sorting:{state:L}},columnConfig:_,rows:i,bottomSummaryRows:$},c?"fill":"fixed",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:351,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:277,columnNumber:7},void 0)}};var E,A,D,x,F;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:`Таблица с блоком управления, фильтрами, пагинацией, группировкой шапки и
итоговой строкой. Переключатели над таблицей включают чистый вид и зебру.`,...(F=(x=l.parameters)==null?void 0:x.docs)==null?void 0:F.description}}};const ne=["Appearance"],pe=Object.freeze(Object.defineProperty({__proto__:null,Appearance:l,__namedExportsOrder:ne,default:J},Symbol.toStringTag,{value:"Module"}));export{pe as A};
