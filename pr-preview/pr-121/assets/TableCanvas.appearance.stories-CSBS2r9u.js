import{r as n,d as u}from"./react-D2T61mpp.js";import{c as K}from"./tableData-DVJFoYoT.js";import W from"./DocStoryTemplate-CiZBbkqd.js";import{s as $}from"./storySourceDoc-tVKyHcEN.js";import{S as o}from"./FiltersActions-_AunRRCL.js";import{T as Z}from"./TableCanvas-CY453SAV.js";import{a3 as w}from"./@salutejs/sdds-finai-DN-VTvmQ.js";import{rf as f}from"./@salutejs/plasma-icons-BFHaPNub.js";const Y={title:"Локальные компоненты/TableCanvas/Appearance",tags:["!autodocs"],parameters:{docs:{page:W}}},X=`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

// «Чистый» вид и зебра включаются в tableConfig.appearance:
// appearance: { variant: 'clean', zebra: true }
`,q=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],J=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],Q=15,r={...$({preCode:X,previewSource:"shown"}),name:"Чистый вид и зебра (прототип)",render:()=>{const[l,x]=n.useState(K),[m,I]=n.useState("clean"),[d,B]=n.useState(!0),[g,N]=n.useState("row"),[v,R]=n.useState("range-cell"),[b,F]=n.useState(!0),[y,P]=n.useState(!0),[C,V]=n.useState(!0),[i,z]=n.useState(!0),[M,h]=n.useState(1),[c,G]=n.useState(Q),p=n.useCallback(e=>{var a;return((a=e.row.values.find(s=>s.columnId===e.column.key))==null?void 0:a.value)??""},[]),t=n.useMemo(()=>({id:{key:"id",name:"ID",width:90,sortingType:"numberSort",resizable:!0,renderSummaryCell:p},task:{key:"task",name:"Title",width:220,sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},renderSummaryCell:p},priority:{key:"priority",name:"Priority",width:140,sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"All",text:"All"},{value:"High",text:"High"},{value:"Critical",text:"Critical"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]},keyInFilterState:"priority",valueInRow:e=>e.priority,filter:{typeOfValue:"single",filteringType:(e,a)=>e!=="All"?a===e:!0}}},issueType:{key:"issueType",name:"Issue Type",width:150,sortingType:"stringSort",resizable:!0,filtering:{component:"select",selectOptions:{type:"constant",options:[{value:"Bug",text:"Bug"},{value:"Improvement",text:"Improvement"},{value:"Epic",text:"Epic"},{value:"Story",text:"Story"}]},keyInFilterState:"issueType",valueInRow:e=>e.issueType,filter:{typeOfValue:"multiple",filteringType:(e,a)=>!e.length||e.some(s=>s===a)}}},developer:{key:"developer",name:"Developer",width:180,sortingType:"stringSort",resizable:!0,editingCell:{component:"inputString"},filtering:{component:"input",keyInFilterState:"developer",valueInRow:e=>e.developer,filter:"startWith"}},complete:{key:"complete",name:"% Complete",width:140,sortingType:"numberSort",resizable:!0,editingCell:{component:"inputString"}}}),[p]),O=n.useMemo(()=>i?[t.id,t.task,{key:"params",name:"Параметры",children:[t.priority,t.issueType]},{key:"progress",name:"Выполнение",children:[t.developer,t.complete]}]:[t.id,t.task,t.priority,t.issueType,t.developer,t.complete],[t,i]),_=n.useState({priority:"All",issueType:["Bug","Story","Epic","Improvement"],developer:"",globalFilter:""}),j=n.useState([]),H=n.useState(()=>new Set),S=n.useCallback(e=>`${e.id}`,[]),L=n.useMemo(()=>[{type:"bottom",values:[{columnId:"id",value:"Итого"},{columnId:"task",value:`Всего задач: ${l.length}`}]}],[l]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-end",marginBottom:12},children:[u.jsxDEV(w,{label:"cellsSelection.mode",value:v,onChange:e=>R(e),items:J,style:{width:200}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:280,columnNumber:11},void 0),u.jsxDEV(w,{label:"highlightActiveType",value:g,onChange:e=>N(e),items:q,style:{width:180}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:287,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:271,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:16,flexWrap:"wrap",marginBottom:12},children:[u.jsxDEV(o,{label:"appearance.variant = 'clean'",checked:m==="clean",onChange:()=>I(e=>e==="clean"?"default":"clean")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:305,columnNumber:11},void 0),u.jsxDEV(o,{label:"appearance.zebra",checked:d,onChange:()=>B(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:312,columnNumber:11},void 0),u.jsxDEV(o,{label:"Блок управления",checked:y,onChange:()=>P(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:317,columnNumber:11},void 0),u.jsxDEV(o,{label:"Пагинация",checked:b,onChange:()=>F(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:322,columnNumber:11},void 0),u.jsxDEV(o,{label:"Итоговая строка",checked:C,onChange:()=>V(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:327,columnNumber:11},void 0),u.jsxDEV(o,{label:"Группировка шапки",checked:i,onChange:()=>z(e=>!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:332,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:297,columnNumber:9},void 0),u.jsxDEV(Z,{tableConfig:{appearance:{variant:m,zebra:d},containerStyle:{height:"80vh"},fullScreenEnabled:!0,resizableColumn:!0,editing:{onRowsChange:x,rowKeyGetter:S},rowSize:{default:"big",showInControl:!0},cellsSelection:{mode:v},highlightActiveType:g,searching:{enabled:!0,debounceDelay:400},summaryRows:{showDefault:C,showInControl:!0},columnsControl:{enable:!0,hiding:!0,pinning:!0,reorderingAside:!0,reorderingHeader:!0,pinnedDefault:["id"]},rowMarkers:{startIndex:1},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},...b&&{pagination:{value:M,perPage:c,count:l.length,onChangePageValue(e,a){h(e??1),a()},onChange(e,a,s){h(a!==void 0&&a!==c?1:e??1),G(a??c),s()}}},controlBlock:{show:y,rightSideInner:[{text:"Скачать",contentLeft:u.jsxDEV(f,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:403,columnNumber:32},void 0),"data-test-id":"download"}],massActionPanel:{buttons:[{type:"button",view:"secondary",text:"Действие",contentLeft:u.jsxDEV(f,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:413,columnNumber:34},void 0),"data-test-id":"mass-action"}]}},filtering:{state:_,filtersInfo:{priority:{label:"Priority",clearedValue:"All"},issueType:{label:"Issue Type",clearedValue:[]},developer:{label:"Developer",clearedValue:""},globalFilter:{label:"Global filter",clearedValue:""}}},selecting:{state:H,rowKeyGetter:S,showDefault:!0},sorting:{state:j}},columnConfig:O,rows:l,bottomSummaryRows:L},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:339,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Appearance/TableCanvas.appearance.stories.tsx",lineNumber:270,columnNumber:7},void 0)}};var T,k,E,A,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(PER_PAGE);
    const renderSummaryCell = useCallback((props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) => props.row.values.find(el => el.columnId === props.column.key)?.value ?? '', []);

    // Листовые колонки одни и те же, группировка лишь оборачивает их в
    // верхний уровень шапки.
    const leafColumns = useMemo<Record<LeafColumnKey, ColumnConfig<Row, TSummaryRowData>>>(() => ({
      id: {
        key: 'id',
        name: 'ID',
        width: 90,
        sortingType: 'numberSort',
        resizable: true,
        renderSummaryCell
      },
      task: {
        key: 'task',
        name: 'Title',
        width: 220,
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
        width: 140,
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
        width: 150,
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
        width: 180,
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
        width: 140,
        sortingType: 'numberSort',
        resizable: true,
        editingCell: {
          component: 'inputString'
        }
      }
    }), [renderSummaryCell]);
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
        </div>

        <TableCanvas tableConfig={{
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
}`,...(E=(k=r.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:`Стенд «чистого» вида: все элементы, у которых есть рамки и линии,
собраны в одной таблице, чтобы смотреть их вместе с appearance.variant и
зеброй: блок управления с редактированием, активные фильтры, пагинация,
многоуровневая шапка, дерево строк и итоговая строка. Сайдбары и нижняя
панель с чистым видом использоваться не будут, их на стенде нет.`,...(D=(A=r.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};const U=["Appearance"],le=Object.freeze(Object.defineProperty({__proto__:null,Appearance:r,__namedExportsOrder:U,default:Y},Symbol.toStringTag,{value:"Module"}));export{le as A};
