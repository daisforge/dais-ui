import{r as i,d as e}from"./react-D2T61mpp.js";import{c as E}from"./tableData-UCfjiBCh.js";import I from"./DocStoryTemplate-BNfNA-EK.js";import{s as f}from"./storySourceDoc-tVKyHcEN.js";import{T as k}from"./TableCanvas-BZWzZoRR.js";import{b as d,a1 as c}from"./@salutejs/sdds-finai-DgM3hqau.js";const _={title:"Локальные компоненты/TableCanvas/HighlightActiveType",parameters:{docs:{page:I}},tags:["!autodocs"]},O=["row","disabled"],B=["range-cell","multi-range-cell","cell","disabled"],M=["big","medium","small"],F={big:48,medium:32,small:24},N=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],g=t=>t.id+t.issueType,x=`
import {
  type ColumnConfig,
  type HighlightActiveType,
  type CellsSelectionMode,
  type SIZE_GLIDE_INSTANCE as RowSize,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: readonly HighlightActiveType[] = [
  'row',
  'disabled',
];
const SELECTION_MODE_OPTIONS: readonly CellsSelectionMode[] = [
  'range-cell',
  'multi-range-cell',
  'cell',
  'disabled',
];
const ROW_SIZE_OPTIONS: readonly RowSize[] = ['big', 'medium', 'small'];
const ROW_MARKER_WIDTH_BY_SIZE: Record<RowSize, number> = {
  big: 48,
  medium: 32,
  small: 24,
};
const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];
const getRowSelectionKey = (row: Row) => row.id + row.issueType;

`,s={...f({preCode:x,previewSource:"shown"}),render:()=>{const[t,l]=i.useState("row"),[o,r]=i.useState("range-cell"),[n,D]=i.useState("medium"),[h]=i.useState(E),R=i.useState(()=>new Set(h.filter(u=>[3,5].includes(Number(u.id))).map(g))),H=i.useMemo(()=>N,[]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{display:"grid",gap:12,maxWidth:420,marginBottom:16},children:[e.jsxDEV("div",{children:["cellsSelection.mode (режим выделения)",e.jsxDEV(c,{value:o,onChange:u=>r(u),items:B.map(u=>({label:u,value:u}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:135,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:133,columnNumber:11},void 0),e.jsxDEV("div",{children:["highlightActiveType (подсветка строки)",e.jsxDEV(c,{value:t,onChange:u=>l(u),items:O.map(u=>({label:u,value:u}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:149,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:147,columnNumber:11},void 0),e.jsxDEV("div",{children:["Размер строки",e.jsxDEV(c,{value:n,onChange:u=>D(u),items:M.map(u=>({label:u,value:u}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:163,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:161,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:130,columnNumber:9},void 0),e.jsxDEV(k,{tableConfig:{containerStyle:{height:"700px",maxWidth:980},rowSize:{default:n,showInControl:!1},cellsSelection:{mode:o},highlightActiveType:t,rowMarkers:{startIndex:1,width:F[n]},selecting:{state:R,rowKeyGetter:g}},columnConfig:H,rows:h},[t,o,n,"row-markers","summary-checkbox"].join("-"),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:174,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:129,columnNumber:7},void 0)}},a={name:"Контролируемая подсветка строки (controlled)",...f({preCode:x,previewSource:"shown"}),render:()=>{const[t]=i.useState(E),l=i.useMemo(()=>N,[]),o=i.useState(void 0),[r,n]=o;return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[e.jsxDEV(d,{onClick:()=>n(2),children:"Подсветить строку №3"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:235,columnNumber:11},void 0),e.jsxDEV(d,{onClick:()=>n(void 0),children:"Сбросить подсветку строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:238,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:227,columnNumber:9},void 0),e.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:["Подсветка активной строки — ",e.jsxDEV("b",{children:"controlled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:244,columnNumber:39},void 0)," через"," ",e.jsxDEV("code",{children:"tableConfig.highlightActiveRow.state"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:245,columnNumber:11},void 0),". Кнопки задают/сбрасывают внешний стейт; клик по строке тоже обновляет его. Подсвеченная строка: ",e.jsxDEV("b",{children:r??"—"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:247,columnNumber:32},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:243,columnNumber:9},void 0),e.jsxDEV(k,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:"row",rowMarkers:{startIndex:1},highlightActiveRow:{state:o}},columnConfig:l,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:250,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HighlightActiveType/TableCanvas.highlightActiveType.stories.tsx",lineNumber:226,columnNumber:7},void 0)}};var m,v,b,T,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const [rowSize, setRowSize] = useState<RowSize>('medium');
    const [rows] = useState(createRows);
    const selectingStateAndSetter = useState<ReadonlySet<string | number>>(() => new Set(rows.filter(row => [3, 5].includes(Number(row.id))).map(getRowSelectionKey)));
    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(() => COLUMN_CONFIG, []);
    return <>
        <div style={{
        display: 'grid',
        gap: 12,
        maxWidth: 420,
        marginBottom: 16
      }}>
          <div>
            cellsSelection.mode (режим выделения)
            <Select value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS.map(item => ({
            label: item,
            value: item
          }))} />
          </div>

          <div>
            highlightActiveType (подсветка строки)
            <Select value={highlightActiveType} onChange={value => setHighlightActiveType(value as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map(item => ({
            label: item,
            value: item
          }))} />
          </div>

          <div>
            Размер строки
            <Select value={rowSize} onChange={value => setRowSize(value as RowSize)} items={ROW_SIZE_OPTIONS.map(item => ({
            label: item,
            value: item
          }))} />
          </div>
        </div>

        <TableCanvas key={[highlightActiveType, selectionMode, rowSize, 'row-markers', 'summary-checkbox'].join('-')} tableConfig={{
        containerStyle: {
          height: '700px',
          maxWidth: 980
        },
        rowSize: {
          default: rowSize,
          showInControl: false
        },
        cellsSelection: {
          mode: selectionMode
        },
        highlightActiveType,
        rowMarkers: {
          startIndex: 1,
          width: ROW_MARKER_WIDTH_BY_SIZE[rowSize]
        },
        selecting: {
          state: selectingStateAndSetter,
          rowKeyGetter: getRowSelectionKey
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:`Playground: highlightActiveType (подсветка строки 'row'/'disabled') и
cellsSelection.mode (режим выделения ячеек) — независимые оси. Подсветка строки
«залипает» на кликнутой строке и темнеет, если строка выбрана чекбоксом.`,...(p=(T=s.parameters)==null?void 0:T.docs)==null?void 0:p.description}}};var y,C,A,w,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Контролируемая подсветка строки (controlled)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(() => COLUMN_CONFIG, []);
    const highlightActiveRowState = useState<number | undefined>(undefined);
    const [highlightActiveRow, setHighlightActiveRow] = highlightActiveRowState;
    return <>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 12
      }}>
          <Button onClick={() => setHighlightActiveRow(2)}>
            Подсветить строку №3
          </Button>
          <Button onClick={() => setHighlightActiveRow(undefined)}>
            Сбросить подсветку строки
          </Button>
        </div>

        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          Подсветка активной строки — <b>controlled</b> через{' '}
          <code>tableConfig.highlightActiveRow.state</code>. Кнопки
          задают/сбрасывают внешний стейт; клик по строке тоже обновляет его.
          Подсвеченная строка: <b>{highlightActiveRow ?? '—'}</b>.
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        highlightActiveType: 'row',
        rowMarkers: {
          startIndex: 1
        },
        highlightActiveRow: {
          state: highlightActiveRowState
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(A=(C=a.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"Подсветкой активной строки можно управлять снаружи (controlled) через\nstate-кортеж `tableConfig.highlightActiveRow.state` ([value, setter]).\nЗначение — индекс строки (0-based) или undefined (нет подсветки).",...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};const j=["HighlightActiveTypePlayground","HighlightActiveRowControlled"],K=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveRowControlled:a,HighlightActiveTypePlayground:s,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{K as T};
