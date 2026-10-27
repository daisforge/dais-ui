import{r as n,j as u}from"./react-CAOzMBF_.js";import{c as C}from"./tableData-DVJFoYoT.js";import I from"./DocStoryTemplate-Cf946dgV.js";import{S as m}from"./StoryHint-AurwRlnz.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{T as S}from"./TableCanvas-DlX-Wh2b.js";import{t as h,A as y,a3 as R}from"./@salutejs/sdds-finai-CKhMjg07.js";import{C as d}from"./@glideappsfinal/glide-data-grid-BB_xclG6.js";const _={title:"Локальные компоненты/TableCanvas/CellsSelection",tags:["!autodocs"],parameters:{docs:{page:I}}},P=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],D={current:void 0,rows:d.empty(),columns:d.empty()},g=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],b=`
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

`,i={name:"Режимы выделения (cellsSelection.mode)",...E({preCode:b,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),[l,o]=n.useState("range-cell"),t=n.useMemo(()=>g,[]);return u.jsxs("div",{children:[u.jsx("div",{style:{maxWidth:320,marginBottom:12},children:u.jsx(R,{label:"Режим выделения",value:l,onChange:e=>o(e),items:P})}),u.jsxs(m,{children:[u.jsx("b",{children:"range-cell"})," — тянем мышкой диапазон ячеек."," ",u.jsx("b",{children:"multi-range-cell"})," — то же + Ctrl/Cmd копит несколько диапазонов."," ",u.jsx("b",{children:"cell"})," — одиночная ячейка. ",u.jsx("b",{children:"disabled"})," — выделение ячеек отключено.",u.jsx("br",{}),"Клик/драг по колонке нумерации → выделение строки (Ctrl — группа). Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно). Copy/Paste (Ctrl+C/V) работают по выделению."]}),u.jsx(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:l},rowMarkers:{startIndex:1},editing:{onRowsChange:()=>{},rowKeyGetter:e=>`${e.id}`,defaultEnabled:!0}},columnConfig:t,rows:r})]})}},s={name:"Контролируемое выделение извне (controlled)",...E({preCode:b,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>g,[]),o=n.useState(D),[t,e]=o,p=t.current?`x=${t.current.range.x} y=${t.current.range.y} w=${t.current.range.width} h=${t.current.range.height}`:"нет выделения";return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[u.jsx(h,{onClick:()=>e(D),children:"Сбросить выделение"}),u.jsx(h,{onClick:()=>e({current:{cell:[1,0],range:{x:1,y:0,width:2,height:3},rangeStack:[]},rows:d.empty(),columns:d.empty()}),children:"Выделить Title:Priority (строки 1–3)"})]}),u.jsxs(m,{children:["Выделение — ",u.jsx("b",{children:"controlled"})," через"," ",u.jsx("code",{children:"tableConfig.cellsSelection.state"})," ([value, setter]). Кнопки задают/сбрасывают внешний стейт, таблица реагирует. Контролируется нативная ось (ячейки/диапазон/смежные строки и колонки); несмежный Ctrl-выбор — внутренний.",u.jsx("br",{}),"Текущее выделение: ",u.jsx("b",{children:p}),"."]}),u.jsx(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",state:o},rowMarkers:{startIndex:1}},columnConfig:l,rows:r})]})}},a={name:"Мультивыбор диапазонов (multi-range-cell)",...E({preCode:b,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>g,[]),[o,t]=n.useState(null);return u.jsxs("div",{children:[u.jsxs(m,{children:[u.jsx("b",{children:"multi-range-cell"}),": тяни мышкой диапазон, затем ",u.jsx("b",{children:"Ctrl/Cmd"})," + клик/драг — докидывай ещё диапазоны. У всех выделенных — заливка и рамка.",u.jsx("br",{}),u.jsx("b",{children:"Copy (Ctrl+C):"})," работает, если разрозненный выбор в пределах"," ",u.jsx("b",{children:"одной колонки"})," или ",u.jsx("b",{children:"одной строки"})," — промежутки схлопываются (значения копируются подряд), либо если куски складываются в сплошной прямоугольник. Разброс сразу по строкам и колонкам не копируется — в"," ",u.jsx("b",{children:"notifications"})," уходит ошибка (плашка ниже).",u.jsx("br",{}),u.jsx("b",{children:"Paste"})," со схлопыванием промежутков — в режиме редактирования, см. ",u.jsx("b",{children:"Copy-Paste-Fill"}),"."]}),o&&u.jsxs("p",{style:{fontSize:13,marginBottom:8,padding:"6px 10px",borderRadius:6,background:"#fdecec",color:"#a33"},children:["notifications: ",o]}),u.jsx(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1},notifications:{onNotification:e=>t(`[${e.type}/${e.level}] ${e.message} (${e.code})`)}},columnConfig:l,rows:r})]})}},c={name:"Включение/выключение колонок и строк",...E({preCode:b,previewSource:"shown"}),render:()=>{const[r]=n.useState(C),l=n.useMemo(()=>g,[]),[o,t]=n.useState(!0),[e,p]=n.useState(!0);return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",gap:20,marginBottom:12},children:[u.jsx(y,{checked:o,onChange:B=>t(B.target.checked),label:u.jsx("div",{children:"enableColumnSelection"})}),u.jsx(y,{checked:e,onChange:B=>p(B.target.checked),label:u.jsx("div",{children:"enableRowSelection"})})]}),u.jsx(m,{children:"Сними галочку — клик по шапке (колонки) или по колонке нумерации (строки) перестанет выделять. Выделение ячеек мышью при этом продолжает работать."}),u.jsx(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",enableColumnSelection:o,enableRowSelection:e},rowMarkers:{startIndex:1}},columnConfig:l,rows:r})]})}};var x,w,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var A,F,v;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(v=(F=s.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var j,M,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          клик/драг — докидывай ещё диапазоны. У всех выделенных — заливка и
          рамка.
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
}`,...(k=(M=a.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var T,N,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const $=["SelectionModes","Controlled","MultiRangeSelect","EnableToggles"],V=Object.freeze(Object.defineProperty({__proto__:null,Controlled:s,EnableToggles:c,MultiRangeSelect:a,SelectionModes:i,__namedExportsOrder:$,default:_},Symbol.toStringTag,{value:"Module"}));export{V as C};
