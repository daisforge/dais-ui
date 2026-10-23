import{r as n,d as e}from"./react-D2T61mpp.js";import{c as m}from"./tableData-DVJFoYoT.js";import G from"./DocStoryTemplate-CnJlkrRG.js";import{S as b}from"./StoryHint-D7Z2UPWM.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as v}from"./TableCanvas-DyecZ_qD.js";import{t as T,A as h,a3 as P}from"./@salutejs/sdds-finai-BWYHBdru.js";import{C as g}from"./@glideappsfinal/glide-data-grid-CX_t3Cwn.js";const $={title:"Локальные компоненты/TableCanvas/CellsSelection",tags:["!autodocs"],parameters:{docs:{page:G}}},L=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],N={current:void 0,rows:g.empty(),columns:g.empty()},S=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],E=`
import {
  type ColumnConfig,
  CompactSelection,
  type GridSelection,
  type CellsSelectionMode,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

const SELECTION_MODE_OPTIONS: Array<{ label: string; value: CellsSelectionMode }> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' },
];

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];

`,i={name:"Режимы выделения (cellsSelection.mode)",...C({preCode:E,previewSource:"shown"}),render:()=>{const[o]=n.useState(m),[l,s]=n.useState("range-cell"),a=n.useMemo(()=>S,[]);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{maxWidth:320,marginBottom:12},children:e.jsxDEV(P,{label:"Режим выделения",value:l,onChange:u=>s(u),items:L},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:101,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:100,columnNumber:9},void 0),e.jsxDEV(b,{children:[e.jsxDEV("b",{children:"range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:110,columnNumber:11},void 0)," — тянем мышкой диапазон ячеек."," ",e.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:111,columnNumber:11},void 0)," — то же + Ctrl/Cmd копит несколько диапазонов."," ",e.jsxDEV("b",{children:"cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:112,columnNumber:11},void 0)," — одиночная ячейка. ",e.jsxDEV("b",{children:"disabled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:112,columnNumber:43},void 0)," — выделение ячеек отключено.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:114,columnNumber:11},void 0),"Клик/драг по колонке нумерации → выделение строки (Ctrl — группа). Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно). Copy/Paste (Ctrl+C/V) работают по выделению."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:109,columnNumber:9},void 0),e.jsxDEV(v,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:l},rowMarkers:{startIndex:1},editing:{onRowsChange:()=>{},rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:a,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:120,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:99,columnNumber:7},void 0)}},r={name:"Контролируемое выделение извне (controlled)",...C({preCode:E,previewSource:"shown"}),render:()=>{const[o]=n.useState(m),l=n.useMemo(()=>S,[]),s=n.useState(N),[a,u]=s,f=a.current?`x=${a.current.range.x} y=${a.current.range.y} w=${a.current.range.width} h=${a.current.range.height}`:"нет выделения";return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[e.jsxDEV(T,{onClick:()=>u(N),children:"Сбросить выделение"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:163,columnNumber:11},void 0),e.jsxDEV(T,{onClick:()=>u({current:{cell:[1,0],range:{x:1,y:0,width:2,height:3},rangeStack:[]},rows:g.empty(),columns:g.empty()}),children:"Выделить Title:Priority (строки 1–3)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:166,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:155,columnNumber:9},void 0),e.jsxDEV(b,{children:["Выделение — ",e.jsxDEV("b",{children:"controlled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:184,columnNumber:23},void 0)," через"," ",e.jsxDEV("code",{children:"tableConfig.cellsSelection.state"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:185,columnNumber:11},void 0)," ([value, setter]). Кнопки задают/сбрасывают внешний стейт, таблица реагирует. Контролируется нативная ось (ячейки/диапазон/смежные строки и колонки); несмежный Ctrl-выбор — внутренний.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:189,columnNumber:11},void 0),"Текущее выделение: ",e.jsxDEV("b",{children:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:190,columnNumber:30},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:183,columnNumber:9},void 0),e.jsxDEV(v,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",state:s},rowMarkers:{startIndex:1}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:193,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:154,columnNumber:7},void 0)}},t={name:"Мультивыбор диапазонов (multi-range-cell)",...C({preCode:E,previewSource:"shown"}),render:()=>{const[o]=n.useState(m),l=n.useMemo(()=>S,[]),[s,a]=n.useState(null);return e.jsxDEV("div",{children:[e.jsxDEV(b,{children:[e.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:222,columnNumber:11},void 0),": тяни мышкой диапазон, затем ",e.jsxDEV("b",{children:"Ctrl/Cmd"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:222,columnNumber:64},void 0)," + клик/драг — докидывай ещё диапазоны. Заливка — у всех выделенных, рамка — у последнего (рамку у каждого включает"," ",e.jsxDEV("code",{children:"outlineEachRange"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:225,columnNumber:11},void 0),", см. ниже).",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:226,columnNumber:11},void 0),e.jsxDEV("b",{children:"Copy (Ctrl+C):"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:227,columnNumber:11},void 0)," работает, если разрозненный выбор в пределах"," ",e.jsxDEV("b",{children:"одной колонки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:228,columnNumber:11},void 0)," или ",e.jsxDEV("b",{children:"одной строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:228,columnNumber:36},void 0)," — промежутки схлопываются (значения копируются подряд), либо если куски складываются в сплошной прямоугольник. Разброс сразу по строкам и колонкам не копируется — в"," ",e.jsxDEV("b",{children:"notifications"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:231,columnNumber:11},void 0)," уходит ошибка (плашка ниже).",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:232,columnNumber:11},void 0),e.jsxDEV("b",{children:"Paste"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:233,columnNumber:11},void 0)," со схлопыванием промежутков — в режиме редактирования, см. ",e.jsxDEV("b",{children:"Copy-Paste-Fill"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:234,columnNumber:15},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:221,columnNumber:9},void 0),s&&e.jsxDEV("p",{style:{fontSize:13,marginBottom:8,padding:"6px 10px",borderRadius:6,background:"#fdecec",color:"#a33"},children:["notifications: ",s]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:238,columnNumber:11},void 0),e.jsxDEV(v,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1},notifications:{onNotification:u=>a(`[${u.type}/${u.level}] ${u.message} (${u.code})`)}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:252,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:220,columnNumber:7},void 0)}},c={name:"Рамка у каждого Ctrl-диапазона (outlineEachRange)",...C({preCode:E,previewSource:"shown"}),render:()=>{const[o]=n.useState(m),l=n.useMemo(()=>S,[]),[s,a]=n.useState(!0);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{marginBottom:12},children:e.jsxDEV(h,{checked:s,onChange:u=>a(u.target.checked),label:e.jsxDEV("div",{children:"cellsSelection.outlineEachRange"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:286,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:283,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:282,columnNumber:9},void 0),e.jsxDEV(b,{children:["Выдели диапазон, затем с ",e.jsxDEV("b",{children:"Ctrl/Cmd"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:291,columnNumber:36},void 0)," добавь ещё несколько. С опцией рамка есть у каждого диапазона (как в Google Sheets), без неё — только у последнего, остальные показаны заливкой.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:294,columnNumber:11},void 0),"Протяни новый диапазон поверх старого: поглощённый диапазон рамку не получает. У соседних диапазонов на стыке видна общая линия."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:290,columnNumber:9},void 0),e.jsxDEV(v,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell",outlineEachRange:s},rowMarkers:{startIndex:1}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:299,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:281,columnNumber:7},void 0)}},d={name:"Включение/выключение колонок и строк",...C({preCode:E,previewSource:"shown"}),render:()=>{const[o]=n.useState(m),l=n.useMemo(()=>S,[]),[s,a]=n.useState(!0),[u,f]=n.useState(!0);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:20,marginBottom:12},children:[e.jsxDEV(h,{checked:s,onChange:k=>a(k.target.checked),label:e.jsxDEV("div",{children:"enableColumnSelection"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:328,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:325,columnNumber:11},void 0),e.jsxDEV(h,{checked:u,onChange:k=>f(k.target.checked),label:e.jsxDEV("div",{children:"enableRowSelection"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:333,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:330,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:324,columnNumber:9},void 0),e.jsxDEV(b,{children:"Сними галочку — клик по шапке (колонки) или по колонке нумерации (строки) перестанет выделять. Выделение ячеек мышью при этом продолжает работать."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:337,columnNumber:9},void 0),e.jsxDEV(v,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",enableColumnSelection:s,enableRowSelection:u},rowMarkers:{startIndex:1}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:343,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:323,columnNumber:7},void 0)}};var p,D,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Режимы выделения (cellsSelection.mode)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    return <div>
        <div style={{
        maxWidth: 320,
        marginBottom: 12
      }}>
          <Select label="Режим выделения" value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} />
        </div>

        <StoryHint>
          <b>range-cell</b> — тянем мышкой диапазон ячеек.{' '}
          <b>multi-range-cell</b> — то же + Ctrl/Cmd копит несколько диапазонов.{' '}
          <b>cell</b> — одиночная ячейка. <b>disabled</b> — выделение ячеек
          отключено.
          <br />
          Клик/драг по колонке нумерации → выделение строки (Ctrl — группа).
          Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно).
          Copy/Paste (Ctrl+C/V) работают по выделению.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: selectionMode
        },
        rowMarkers: {
          startIndex: 1
        },
        editing: {
          onRowsChange: () => undefined,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var y,w,B;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Контролируемое выделение извне (controlled)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const gridSelectionState = useState<GridSelection>(EMPTY_SELECTION);
    const [gridSelection, setGridSelection] = gridSelectionState;
    const summary = gridSelection.current ? \`x=\${gridSelection.current.range.x} y=\${gridSelection.current.range.y} w=\${gridSelection.current.range.width} h=\${gridSelection.current.range.height}\` : 'нет выделения';
    return <div>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 12
      }}>
          <Button onClick={() => setGridSelection(EMPTY_SELECTION)}>
            Сбросить выделение
          </Button>
          <Button onClick={() => setGridSelection({
          current: {
            cell: [1, 0],
            range: {
              x: 1,
              y: 0,
              width: 2,
              height: 3
            },
            rangeStack: []
          },
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty()
        })}>
            Выделить Title:Priority (строки 1–3)
          </Button>
        </div>

        <StoryHint>
          Выделение — <b>controlled</b> через{' '}
          <code>tableConfig.cellsSelection.state</code> ([value, setter]).
          Кнопки задают/сбрасывают внешний стейт, таблица реагирует.
          Контролируется нативная ось (ячейки/диапазон/смежные строки и
          колонки); несмежный Ctrl-выбор — внутренний.
          <br />
          Текущее выделение: <b>{summary}</b>.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'range-cell',
          state: gridSelectionState
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,A,j;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Мультивыбор диапазонов (multi-range-cell)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    // Таблица сама тосты не рисует: ошибки copy/paste приходят в notifications,
    // показ — на стороне потребителя. Здесь показываем последнее событие плашкой.
    const [lastNotification, setLastNotification] = useState<string | null>(null);
    return <div>
        <StoryHint>
          <b>multi-range-cell</b>: тяни мышкой диапазон, затем <b>Ctrl/Cmd</b> +
          клик/драг — докидывай ещё диапазоны. Заливка — у всех выделенных,
          рамка — у последнего (рамку у каждого включает{' '}
          <code>outlineEachRange</code>, см. ниже).
          <br />
          <b>Copy (Ctrl+C):</b> работает, если разрозненный выбор в пределах{' '}
          <b>одной колонки</b> или <b>одной строки</b> — промежутки схлопываются
          (значения копируются подряд), либо если куски складываются в сплошной
          прямоугольник. Разброс сразу по строкам и колонкам не копируется — в{' '}
          <b>notifications</b> уходит ошибка (плашка ниже).
          <br />
          <b>Paste</b> со схлопыванием промежутков — в режиме редактирования,
          см. <b>Copy-Paste-Fill</b>.
        </StoryHint>

        {lastNotification && <p style={{
        fontSize: 13,
        marginBottom: 8,
        padding: '6px 10px',
        borderRadius: 6,
        background: '#fdecec',
        color: '#a33'
      }}>
            notifications: {lastNotification}
          </p>}

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'multi-range-cell'
        },
        rowMarkers: {
          startIndex: 1
        },
        notifications: {
          onNotification: event => setLastNotification(\`[\${event.type}/\${event.level}] \${event.message} (\${event.code})\`)
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(j=(A=t.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var V,M,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Рамка у каждого Ctrl-диапазона (outlineEachRange)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [outlineEachRange, setOutlineEachRange] = useState(true);
    return <div>
        <div style={{
        marginBottom: 12
      }}>
          <Checkbox checked={outlineEachRange} onChange={e => setOutlineEachRange(e.target.checked)} label={<div>cellsSelection.outlineEachRange</div>} />
        </div>

        <StoryHint>
          Выдели диапазон, затем с <b>Ctrl/Cmd</b> добавь ещё несколько. С
          опцией рамка есть у каждого диапазона (как в Google Sheets), без неё —
          только у последнего, остальные показаны заливкой.
          <br />
          Протяни новый диапазон поверх старого: поглощённый диапазон рамку не
          получает. У соседних диапазонов на стыке видна общая линия.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'multi-range-cell',
          outlineEachRange
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,I,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Включение/выключение колонок и строк',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [enableColumnSelection, setEnableColumnSelection] = useState(true);
    const [enableRowSelection, setEnableRowSelection] = useState(true);
    return <div>
        <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 12
      }}>
          <Checkbox checked={enableColumnSelection} onChange={e => setEnableColumnSelection(e.target.checked)} label={<div>enableColumnSelection</div>} />
          <Checkbox checked={enableRowSelection} onChange={e => setEnableRowSelection(e.target.checked)} label={<div>enableRowSelection</div>} />
        </div>

        <StoryHint>
          Сними галочку — клик по шапке (колонки) или по колонке нумерации
          (строки) перестанет выделять. Выделение ячеек мышью при этом
          продолжает работать.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'range-cell',
          enableColumnSelection,
          enableRowSelection
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const H=["SelectionModes","Controlled","MultiRangeSelect","OutlineEachRange","EnableToggles"],Q=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,EnableToggles:d,MultiRangeSelect:t,OutlineEachRange:c,SelectionModes:i,__namedExportsOrder:H,default:$},Symbol.toStringTag,{value:"Module"}));export{Q as C};
