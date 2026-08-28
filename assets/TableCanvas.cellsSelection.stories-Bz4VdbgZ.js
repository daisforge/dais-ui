import{r as e,d as u}from"./react-D2T61mpp.js";import{c as m}from"./tableData-UCfjiBCh.js";import z from"./DocStoryTemplate-ote7_b2_.js";import{s as b}from"./storySourceDoc-tVKyHcEN.js";import{T as C}from"./TableCanvas-Dd9LnOYW.js";import{b as f,z as p,a2 as $}from"./@salutejs/sdds-finai-DjKHUVIR.js";import{C as d}from"./@glideappsfinal/glide-data-grid-C5jg3NuH.js";const U={title:"Локальные компоненты/TableCanvas/CellsSelection",tags:["!autodocs"],parameters:{docs:{page:z}}},W=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],k={current:void 0,rows:d.empty(),columns:d.empty()},S=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],v=`
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

`,i={name:"Режимы выделения (cellsSelection.mode)",...b({preCode:v,previewSource:"shown"}),render:()=>{const[o]=e.useState(m),[l,a]=e.useState("range-cell"),n=e.useMemo(()=>S,[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{maxWidth:320,marginBottom:12},children:u.jsxDEV($,{label:"Режим выделения",value:l,onChange:s=>a(s),items:W},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:105,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:104,columnNumber:9},void 0),u.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:[u.jsxDEV("b",{children:"range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:114,columnNumber:11},void 0)," — тянем мышкой диапазон ячеек."," ",u.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:115,columnNumber:11},void 0)," — то же + Ctrl/Cmd копит несколько диапазонов."," ",u.jsxDEV("b",{children:"cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:116,columnNumber:11},void 0)," — одиночная ячейка. ",u.jsxDEV("b",{children:"disabled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:116,columnNumber:43},void 0)," — выделение ячеек отключено.",u.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:118,columnNumber:11},void 0),"Клик/драг по колонке нумерации → выделение строки (Ctrl — группа). Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно). Copy/Paste (Ctrl+C/V) работают по выделению."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:113,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:l},rowMarkers:{startIndex:1},editing:{onRowsChange:()=>{},rowKeyGetter:s=>`${s.id}`,defaultEnabled:!0}},columnConfig:n,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:124,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:103,columnNumber:7},void 0)}},r={name:"Контролируемое выделение извне (controlled)",...b({preCode:v,previewSource:"shown"}),render:()=>{const[o]=e.useState(m),l=e.useMemo(()=>S,[]),a=e.useState(k),[n,s]=a,E=n.current?`x=${n.current.range.x} y=${n.current.range.y} w=${n.current.range.width} h=${n.current.range.height}`:"нет выделения";return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[u.jsxDEV(f,{onClick:()=>s(k),children:"Сбросить выделение"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:171,columnNumber:11},void 0),u.jsxDEV(f,{onClick:()=>s({current:{cell:[1,0],range:{x:1,y:0,width:2,height:3},rangeStack:[]},rows:d.empty(),columns:d.empty()}),children:"Выделить Title:Priority (строки 1–3)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:174,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:163,columnNumber:9},void 0),u.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:["Выделение — ",u.jsxDEV("b",{children:"controlled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:192,columnNumber:23},void 0)," через"," ",u.jsxDEV("code",{children:"tableConfig.cellsSelection.state"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:193,columnNumber:11},void 0)," ([value, setter]). Кнопки задают/сбрасывают внешний стейт, таблица реагирует. Контролируется нативная ось (ячейки/диапазон/смежные строки и колонки); несмежный Ctrl-выбор — внутренний.",u.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:197,columnNumber:11},void 0),"Текущее выделение: ",u.jsxDEV("b",{children:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:198,columnNumber:30},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:191,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",state:a},rowMarkers:{startIndex:1}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:201,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:162,columnNumber:7},void 0)}},t={name:"Мультивыбор диапазонов (multi-range-cell)",...b({preCode:v,previewSource:"shown"}),render:()=>{const[o]=e.useState(m),l=e.useMemo(()=>S,[]);return u.jsxDEV("div",{children:[u.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:[u.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:230,columnNumber:11},void 0),": тяни мышкой диапазон, затем ",u.jsxDEV("b",{children:"Ctrl/Cmd"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:230,columnNumber:64},void 0)," + клик/драг — докидывай ещё диапазоны. У всех выделенных — заливка и рамка.",u.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:233,columnNumber:11},void 0),u.jsxDEV("b",{children:"Copy (Ctrl+C):"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:234,columnNumber:11},void 0)," работает, если разрозненный выбор в пределах"," ",u.jsxDEV("b",{children:"одной колонки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:235,columnNumber:11},void 0)," или ",u.jsxDEV("b",{children:"одной строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:235,columnNumber:36},void 0)," — промежутки схлопываются (значения копируются подряд). Разброс сразу по строкам и колонкам не копируется.",u.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:238,columnNumber:11},void 0),u.jsxDEV("b",{children:"Paste"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:239,columnNumber:11},void 0)," со схлопыванием промежутков — в режиме редактирования, см. ",u.jsxDEV("b",{children:"Copy-Paste-Fill"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:240,columnNumber:15},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:229,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:243,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:228,columnNumber:7},void 0)}},c={name:"Включение/выключение колонок и строк",...b({preCode:v,previewSource:"shown"}),render:()=>{const[o]=e.useState(m),l=e.useMemo(()=>S,[]),[a,n]=e.useState(!0),[s,E]=e.useState(!0);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",gap:20,marginBottom:12},children:[u.jsxDEV(p,{checked:a,onChange:g=>n(g.target.checked),label:u.jsxDEV("div",{children:"enableColumnSelection"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:277,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:274,columnNumber:11},void 0),u.jsxDEV(p,{checked:s,onChange:g=>E(g.target.checked),label:u.jsxDEV("div",{children:"enableRowSelection"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:282,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:279,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:273,columnNumber:9},void 0),u.jsxDEV("p",{style:{fontSize:13,color:"#888",marginBottom:8},children:"Сними галочку — клик по шапке (колонки) или по колонке нумерации (строки) перестанет выделять. Выделение ячеек мышью при этом продолжает работать."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:286,columnNumber:9},void 0),u.jsxDEV(C,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",enableColumnSelection:a,enableRowSelection:s},rowMarkers:{startIndex:1}},columnConfig:l,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:292,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:272,columnNumber:7},void 0)}};var D,T,N,h,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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

        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          <b>range-cell</b> — тянем мышкой диапазон ячеек.{' '}
          <b>multi-range-cell</b> — то же + Ctrl/Cmd копит несколько диапазонов.{' '}
          <b>cell</b> — одиночная ячейка. <b>disabled</b> — выделение ячеек
          отключено.
          <br />
          Клик/драг по колонке нумерации → выделение строки (Ctrl — группа).
          Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно).
          Copy/Paste (Ctrl+C/V) работают по выделению.
        </p>

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
}`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source},description:{story:`cellsSelection.mode — режим фактического (нативного) выделения ячеек.
cell / range-cell (по умолчанию) / disabled. По нему работают copy/paste,
рамка, fill-handle, затемнение шапки/нумерации.`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var B,w,x,A,F;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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

        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          Выделение — <b>controlled</b> через{' '}
          <code>tableConfig.cellsSelection.state</code> ([value, setter]).
          Кнопки задают/сбрасывают внешний стейт, таблица реагирует.
          Контролируется нативная ось (ячейки/диапазон/смежные строки и
          колонки); несмежный Ctrl-выбор — внутренний.
          <br />
          Текущее выделение: <b>{summary}</b>.
        </p>

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
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:`Controlled-режим выделения: значение и сеттер живут снаружи (state-кортеж
tableConfig.cellsSelection.state). Можно программно задать/сбросить выделение.`,...(F=(A=r.parameters)==null?void 0:A.docs)==null?void 0:F.description}}};var M,j,V,O,I;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Мультивыбор диапазонов (multi-range-cell)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    return <div>
        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          <b>multi-range-cell</b>: тяни мышкой диапазон, затем <b>Ctrl/Cmd</b> +
          клик/драг — докидывай ещё диапазоны. У всех выделенных — заливка и
          рамка.
          <br />
          <b>Copy (Ctrl+C):</b> работает, если разрозненный выбор в пределах{' '}
          <b>одной колонки</b> или <b>одной строки</b> — промежутки схлопываются
          (значения копируются подряд). Разброс сразу по строкам и колонкам не
          копируется.
          <br />
          <b>Paste</b> со схлопыванием промежутков — в режиме редактирования,
          см. <b>Copy-Paste-Fill</b>.
        </p>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'multi-range-cell'
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(V=(j=t.parameters)==null?void 0:j.docs)==null?void 0:V.source},description:{story:`multi-range-cell — как range-cell, но Ctrl/Cmd докидывает несколько
прямоугольных диапазонов. Copy — для разрозненного выбора в
пределах одной колонки или одной строки (промежутки схлопываются).`,...(I=(O=t.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};var _,R,P,G,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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

        <p style={{
        fontSize: 13,
        color: '#888',
        marginBottom: 8
      }}>
          Сними галочку — клик по шапке (колонки) или по колонке нумерации
          (строки) перестанет выделять. Выделение ячеек мышью при этом
          продолжает работать.
        </p>

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
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:`enableColumnSelection / enableRowSelection — независимое включение/выключение
осей выделения колонок (по шапке) и строк (по нумерации). Выделение ячеек
(cellsSelection.mode) этими флагами не управляется.`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};const Y=["SelectionModes","Controlled","MultiRangeSelect","EnableToggles"],uu=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,EnableToggles:c,MultiRangeSelect:t,SelectionModes:i,__namedExportsOrder:Y,default:U},Symbol.toStringTag,{value:"Module"}));export{uu as C};
