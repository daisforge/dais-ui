import{r as t,j as e}from"./react-CAOzMBF_.js";import{c as R}from"./tableData-DVJFoYoT.js";import H from"./DocStoryTemplate-Cf946dgV.js";import{S as M}from"./StoryHint-AurwRlnz.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as I}from"./TableCanvas-DlX-Wh2b.js";import{t as h,a3 as c}from"./@salutejs/sdds-finai-CKhMjg07.js";const B={title:"Локальные компоненты/TableCanvas/HighlightActiveType",parameters:{docs:{page:H}},tags:["!autodocs"]},F=["row","disabled"],k=["range-cell","multi-range-cell","cell","disabled"],j=["big","medium","small"],N={big:48,medium:32,small:24},f=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],g=n=>n.id+n.issueType,_=`
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

`,l={...b({preCode:_,previewSource:"shown"}),render:()=>{const[n,r]=t.useState("row"),[o,a]=t.useState("range-cell"),[i,x]=t.useState("medium"),[d]=t.useState(R),O=t.useState(()=>new Set(d.filter(u=>[3,5].includes(Number(u.id))).map(g))),D=t.useMemo(()=>f,[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420,marginBottom:16},children:[e.jsxs("div",{children:["cellsSelection.mode (режим выделения)",e.jsx(c,{value:o,onChange:u=>a(u),items:k.map(u=>({label:u,value:u}))})]}),e.jsxs("div",{children:["highlightActiveType (подсветка строки)",e.jsx(c,{value:n,onChange:u=>r(u),items:F.map(u=>({label:u,value:u}))})]}),e.jsxs("div",{children:["Размер строки",e.jsx(c,{value:i,onChange:u=>x(u),items:j.map(u=>({label:u,value:u}))})]})]}),e.jsx(I,{tableConfig:{containerStyle:{height:"700px",maxWidth:980},rowSize:{default:i,showInControl:!1},cellsSelection:{mode:o},highlightActiveType:n,rowMarkers:{startIndex:1,width:N[i]},selecting:{state:O,rowKeyGetter:g}},columnConfig:D,rows:d},[n,o,i,"row-markers","summary-checkbox"].join("-"))]})}},s={name:"Контролируемая подсветка строки (controlled)",...b({preCode:_,previewSource:"shown"}),render:()=>{const[n]=t.useState(R),r=t.useMemo(()=>f,[]),o=t.useState(void 0),[a,i]=o;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[e.jsx(h,{onClick:()=>i(2),children:"Подсветить строку №3"}),e.jsx(h,{onClick:()=>i(void 0),children:"Сбросить подсветку строки"})]}),e.jsxs(M,{children:["Подсветка активной строки — ",e.jsx("b",{children:"controlled"})," через"," ",e.jsx("code",{children:"tableConfig.highlightActiveRow.state"}),". Кнопки задают/сбрасывают внешний стейт; клик по строке тоже обновляет его. Подсвеченная строка: ",e.jsx("b",{children:a??"—"}),"."]}),e.jsx(I,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:"row",rowMarkers:{startIndex:1},highlightActiveRow:{state:o}},columnConfig:r,rows:n})]})}};var m,S,w,p,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:`Playground: highlightActiveType (подсветка строки 'row'/'disabled') и
cellsSelection.mode (режим выделения ячеек) — независимые оси. Подсветка строки
«залипает» на кликнутой строке и темнеет, если строка выбрана чекбоксом.`,...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.description}}};var y,A,C,E,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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

        <StoryHint>
          Подсветка активной строки — <b>controlled</b> через{' '}
          <code>tableConfig.highlightActiveRow.state</code>. Кнопки
          задают/сбрасывают внешний стейт; клик по строке тоже обновляет его.
          Подсвеченная строка: <b>{highlightActiveRow ?? '—'}</b>.
        </StoryHint>

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
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:"Подсветкой активной строки можно управлять снаружи (controlled) через\nstate-кортеж `tableConfig.highlightActiveRow.state` ([value, setter]).\nЗначение — индекс строки (0-based) или undefined (нет подсветки).",...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};const P=["HighlightActiveTypePlayground","HighlightActiveRowControlled"],U=Object.freeze(Object.defineProperty({__proto__:null,HighlightActiveRowControlled:s,HighlightActiveTypePlayground:l,__namedExportsOrder:P,default:B},Symbol.toStringTag,{value:"Module"}));export{U as T};
