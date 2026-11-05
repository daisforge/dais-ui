import{r as n,j as u}from"./react-CAOzMBF_.js";import{c as C}from"./tableData-DVJFoYoT.js";import P from"./DocStoryTemplate-C1pHB4bf.js";import{S as E}from"./StoryHint-AurwRlnz.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{T as g}from"./TableCanvas-BwymtG6y.js";import{t as x,A as D,a3 as $}from"./@salutejs/sdds-finai-BQpWD0T8.js";import{C as b}from"./@glideappsfinal/glide-data-grid-wboW74Q1.js";const L={title:"Локальные компоненты/TableCanvas/CellsSelection",tags:["!autodocs"],parameters:{docs:{page:P}}},H=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],y={current:void 0,rows:b.empty(),columns:b.empty()},S=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],h=`
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

`,i={name:"Режимы выделения (cellsSelection.mode)",...m({preCode:h,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),[l,t]=n.useState("range-cell"),o=n.useMemo(()=>S,[]);return u.jsxs("div",{children:[u.jsx("div",{style:{maxWidth:320,marginBottom:12},children:u.jsx($,{label:"Режим выделения",value:l,onChange:e=>t(e),items:H})}),u.jsxs(E,{children:[u.jsx("b",{children:"range-cell"})," — тянем мышкой диапазон ячеек."," ",u.jsx("b",{children:"multi-range-cell"})," — то же + Ctrl/Cmd копит несколько диапазонов."," ",u.jsx("b",{children:"cell"})," — одиночная ячейка. ",u.jsx("b",{children:"disabled"})," — выделение ячеек отключено.",u.jsx("br",{}),"Клик/драг по колонке нумерации → выделение строки (Ctrl — группа). Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно). Copy/Paste (Ctrl+C/V) работают по выделению."]}),u.jsx(g,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:l},rowMarkers:{startIndex:1},editing:{onRowsChange:()=>{},rowKeyGetter:e=>`${e.id}`,defaultEnabled:!0}},columnConfig:o,rows:r})]})}},a={name:"Контролируемое выделение извне (controlled)",...m({preCode:h,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>S,[]),t=n.useState(y),[o,e]=t,p=o.current?`x=${o.current.range.x} y=${o.current.range.y} w=${o.current.range.width} h=${o.current.range.height}`:"нет выделения";return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[u.jsx(x,{onClick:()=>e(y),children:"Сбросить выделение"}),u.jsx(x,{onClick:()=>e({current:{cell:[1,0],range:{x:1,y:0,width:2,height:3},rangeStack:[]},rows:b.empty(),columns:b.empty()}),children:"Выделить Title:Priority (строки 1–3)"})]}),u.jsxs(E,{children:["Выделение — ",u.jsx("b",{children:"controlled"})," через"," ",u.jsx("code",{children:"tableConfig.cellsSelection.state"})," ([value, setter]). Кнопки задают/сбрасывают внешний стейт, таблица реагирует. Контролируется нативная ось (ячейки/диапазон/смежные строки и колонки); несмежный Ctrl-выбор — внутренний.",u.jsx("br",{}),"Текущее выделение: ",u.jsx("b",{children:p}),"."]}),u.jsx(g,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",state:t},rowMarkers:{startIndex:1}},columnConfig:l,rows:r})]})}},c={name:"Мультивыбор диапазонов (multi-range-cell)",...m({preCode:h,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>S,[]),[t,o]=n.useState(null);return u.jsxs("div",{children:[u.jsxs(E,{children:[u.jsx("b",{children:"multi-range-cell"}),": тяни мышкой диапазон, затем ",u.jsx("b",{children:"Ctrl/Cmd"})," + клик/драг — докидывай ещё диапазоны. Заливка — у всех выделенных, рамка — у последнего (рамку у каждого включает"," ",u.jsx("code",{children:"outlineEachRange"}),", см. ниже).",u.jsx("br",{}),u.jsx("b",{children:"Copy (Ctrl+C):"})," работает, если разрозненный выбор в пределах"," ",u.jsx("b",{children:"одной колонки"})," или ",u.jsx("b",{children:"одной строки"})," — промежутки схлопываются (значения копируются подряд), либо если куски складываются в сплошной прямоугольник. Разброс сразу по строкам и колонкам не копируется — в"," ",u.jsx("b",{children:"notifications"})," уходит ошибка (плашка ниже).",u.jsx("br",{}),u.jsx("b",{children:"Paste"})," со схлопыванием промежутков — в режиме редактирования, см. ",u.jsx("b",{children:"Copy-Paste-Fill"}),"."]}),t&&u.jsxs("p",{style:{fontSize:13,marginBottom:8,padding:"6px 10px",borderRadius:6,background:"#fdecec",color:"#a33"},children:["notifications: ",t]}),u.jsx(g,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1},notifications:{onNotification:e=>o(`[${e.type}/${e.level}] ${e.message} (${e.code})`)}},columnConfig:l,rows:r})]})}},s={name:"Рамка у каждого Ctrl-диапазона (outlineEachRange)",...m({preCode:h,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>S,[]),[t,o]=n.useState(!0);return u.jsxs("div",{children:[u.jsx("div",{style:{marginBottom:12},children:u.jsx(D,{checked:t,onChange:e=>o(e.target.checked),label:u.jsx("div",{children:"cellsSelection.outlineEachRange"})})}),u.jsxs(E,{children:["Выдели диапазон, затем с ",u.jsx("b",{children:"Ctrl/Cmd"})," добавь ещё несколько. С опцией рамка есть у каждого диапазона (как в Google Sheets), без неё — только у последнего, остальные показаны заливкой.",u.jsx("br",{}),"Протяни новый диапазон поверх старого: поглощённый диапазон рамку не получает. У соседних диапазонов на стыке видна общая линия."]}),u.jsx(g,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell",outlineEachRange:t},rowMarkers:{startIndex:1}},columnConfig:l,rows:r})]})}},d={name:"Включение/выключение колонок и строк",...m({preCode:h,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>S,[]),[t,o]=n.useState(!0),[e,p]=n.useState(!0);return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",gap:20,marginBottom:12},children:[u.jsx(D,{checked:t,onChange:B=>o(B.target.checked),label:u.jsx("div",{children:"enableColumnSelection"})}),u.jsx(D,{checked:e,onChange:B=>p(B.target.checked),label:u.jsx("div",{children:"enableRowSelection"})})]}),u.jsx(E,{children:"Сними галочку — клик по шапке (колонки) или по колонке нумерации (строки) перестанет выделять. Выделение ячеек мышью при этом продолжает работать."}),u.jsx(g,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",enableColumnSelection:t,enableRowSelection:e},rowMarkers:{startIndex:1}},columnConfig:l,rows:r})]})}};var w,F,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(F=i.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var f,v,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var M,k,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var R,T,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var I,_,G;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(_=d.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const U=["SelectionModes","Controlled","MultiRangeSelect","OutlineEachRange","EnableToggles"],Q=Object.freeze(Object.defineProperty({__proto__:null,Controlled:a,EnableToggles:d,MultiRangeSelect:c,OutlineEachRange:s,SelectionModes:i,__namedExportsOrder:U,default:L},Symbol.toStringTag,{value:"Module"}));export{Q as C};
