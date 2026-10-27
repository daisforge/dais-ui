import{r as o,j as n}from"./react-CAOzMBF_.js";import{a as Y,B,P as X,T as Z,c as R}from"./tableData-DVJFoYoT.js";import nn from"./DocStoryTemplate-Cf946dgV.js";import{S as C}from"./StoryHint-AurwRlnz.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as d,T as w}from"./TableCanvas-DlX-Wh2b.js";import{a3 as D}from"./@salutejs/sdds-finai-CKhMjg07.js";const en={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill",tags:["!autodocs"],parameters:{docs:{page:nn}}},un=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],tn=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],k="import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';",v=`const rows = [
  { id: 1, task: 'Task 1', priority: 'Critical', issueType: 'Bug', complete: 20 },
  { id: 2, task: 'Task 2', priority: 'High', issueType: 'Story', complete: 55 },
  { id: 3, task: 'Task 3', priority: 'Medium', issueType: 'Epic', complete: 80 },
];`,A=`const columnConfig: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 80, editingCell: { component: 'inputNumber' } },
  { key: 'task', name: 'Title', width: 260, editingCell: { component: 'inputString' } },
  { key: 'priority', name: 'Priority', width: 180, editingCell: { component: 'inputString' } },
  { key: 'complete', name: '% Complete', width: 160, editingCell: { component: 'inputNumber' } },
];`,g={name:"Полный пример (все возможности)",...p({previewSource:"shown",code:`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const rows = [
  {
    id: 1,
    block: 'Платформа',
    blockActivity: 'Активный',
    q1: 100,
    q2: 120,
    subRows: [{ id: 11, block: 'Команда A', blockActivity: 'Активный', q1: 40 }],
  },
];

const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'block',
    name: 'Блок',
    editingCell: { component: 'inputString' },
    subRow: {
      keyOfColumnInSubRow: (lvl) => (lvl === 0 ? 'block' : 'tribe'),
      isColumnWithArrow: true,
      editingCell: { component: 'inputString' },
    },
  },
  {
    key: 'blockActivity',
    name: 'Активность',
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.blockActivity} size="s" />
      </Canvas.Container>
    ),
    copyData: (row) => row.blockActivity ?? '',
    editingCell: { component: 'inputString' },
  },
  { key: 'q1', name: 'Q1', contentFormat: 'number', editingCell: { component: 'inputNumber' } },
  { key: 'q2', name: 'Q2', contentFormat: 'number', editingCell: { component: 'inputNumber' } },
];

<TableCanvas
  tableConfig={{
    cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
    highlightActiveType: 'row',
    rowMarkers: { startIndex: 1 },
    subRows: { getSubRows: (row) => row.subRows, rowKeyGetter: (row) => row.id },
    editing: { onRowsChange: setRows, rowKeyGetter: (r) => \`\${r.id}\` },
    resizableColumn: true,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),render:()=>{o.useEffect(()=>{window.__TABLE_CANVAS_CLIPBOARD_DEBUG__=!0},[]);const[l,r]=o.useState(()=>Y()),[i,u]=o.useState("row"),[t,s]=o.useState("range-cell"),a=o.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:e=>e.block===B[1],component:"select",options:{type:"constant",options:B.map(e=>({text:e,value:e}))}},subRow:{keyOfColumnInSubRow:e=>{switch(e){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"},renderCell:({row:e})=>n.jsx(d.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsx(d.Badge,{text:e.blockActivity,view:e.blockActivity==="Активный"?"positive":"warning",size:"s"})}),copyData:e=>e.blockActivity??"",subRow:{keyOfColumnInSubRow:"blockActivity",editingCell:{component:"inputString"}}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"}},renderCell:({row:e,theme:E})=>n.jsx(d.Container,{padding:8,children:n.jsx(d.Text,{color:E.textDark,children:e.tribe})}),copyData:e=>e.tribe??"",subRow:{keyOfColumnInSubRow:"tribe",editingCell:{component:"inputString"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}},subRow:{keyOfColumnInSubRow:"product",editingCell:{component:"inputString"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber"},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber"}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),c=o.useMemo(()=>({tribeOptions:Z.map(e=>({text:e,value:e})),productOptions:X.map(e=>({text:e,value:e}))}),[]),m=o.useRef(null);return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[n.jsx(D,{label:"Режим выделения",value:t,onChange:e=>s(e),items:tn}),n.jsx(D,{label:"highlightActiveType (подсветка)",value:i,onChange:e=>u(e),items:un})]}),n.jsxs(C,{children:[n.jsx("b",{children:"Copy:"})," работает всегда (Ctrl+C). ",n.jsx("b",{children:"Paste/Fill:"})," только в режиме редактирования.",n.jsx("br",{}),n.jsx("b",{children:"Выделение строк:"})," клик/драг по колонке нумерации — строка(и);"," ",n.jsx("b",{children:"Ctrl/Cmd+клик"})," по номерам — набор отдельных строк (группа). Скопированное (Ctrl+C) можно вставить (Ctrl+V) на выделенные строки.",n.jsx("br",{}),n.jsx("b",{children:"Выделение колонок:"})," клик по шапке (Ctrl/Shift — мультивыбор), copy/paste по колонкам.",n.jsx("br",{}),n.jsx("b",{children:"Колонки:"})," Блок (select, readonly часть), Активность (Canvas.Badge + copyData), Трайб (Canvas.Text + copyData + select), Продукт (select), Q1 (число + contentFormat), Q2-Q4 (число).",n.jsx("br",{}),n.jsx("b",{children:"Debug:"})," логи включены (DevTools → Verbose)."]}),n.jsx(w,{tableConfig:{containerStyle:{height:"700px"},highlightActiveType:i,rowMarkers:{startIndex:1},cellsSelection:{mode:t,enableColumnSelection:!0},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(e){m.current=JSON.parse(JSON.stringify(l)),e()},onCancel(e){m.current&&r(m.current),e()},onSave(e){m.current=null,e()},onRowsChange:r,rowKeyGetter:e=>`${e.id}`,rowEditable:e=>e.block!==B[1]},subRows:{getSubRows:e=>e==null?void 0:e.subRows,rowKeyGetter:e=>e.id},resizableColumn:!0},columnConfig:a,rows:l,rowContextValue:c})]})}},y={name:"Перехват onBeforeCopy / onBeforePaste",...p({previewSource:"shown",code:`${k}

${v}

${A}

<TableCanvas
  tableConfig={{
    cellTransfer: {
      onBeforeCopy: (data, meta) => {
        console.log('copy', data, meta.cells);
        return data;
      },
      onBeforePaste: (data) => (data.length > 5 ? false : data),
    },
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \`\${r.id}\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),render:()=>{const[l,r]=o.useState(R),i=o.useMemo(()=>[{key:"id",name:"ID",width:90,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"issueType",name:"Issue Type",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return n.jsxs("div",{children:[n.jsxs(C,{children:[n.jsx("b",{children:"onBeforeCopy:"})," при Ctrl+C в консоль выводятся скопированные данные, колонки и rawValue каждой ячейки.",n.jsx("br",{}),n.jsx("b",{children:"onBeforePaste:"})," при Ctrl+V выводятся вставляемые данные и info о target-ячейках. Если вставляется больше 5 строк, вставка блокируется (return false)."]}),n.jsx(w,{tableConfig:{containerStyle:{height:"500px"},rowSize:{default:"medium",showInControl:!0},cellTransfer:{onBeforeCopy:(u,t)=>{var s;return console.log("[onBeforeCopy] data:",u),console.log("[onBeforeCopy] колонки:",(s=t.cells[0])==null?void 0:s.map(a=>a.column.key)),console.log("[onBeforeCopy] rawValues:",t.cells.map(a=>a.map(c=>c.rawValue))),u},onBeforePaste:(u,t)=>(console.log("[onBeforePaste] data:",u),console.log("[onBeforePaste] target:",t.target),console.log("[onBeforePaste] targetCells:",t.targetCells.map(s=>s.map(a=>`${a.column.key} (${a.column.editingCell?"editable":"readonly"})`))),u.length>5?(console.warn("[onBeforePaste] Блокировка: больше 5 строк"),!1):u)},editing:{onRowsChange:r,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0},resizableColumn:!0},columnConfig:i,rows:l})]})}},b={name:"copyData для кастомных ячеек",...p({previewSource:"shown",code:`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

${v}

const columnConfig: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'task', name: 'Title', width: 240 },
  {
    key: 'priority',
    name: 'Priority',
    width: 220,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.priority} size="s" />
      </Canvas.Container>
    ),
    copyData: (row) => row.priority ?? '',
  },
  { key: 'complete', name: '% Complete', width: 140 },
];

<TableCanvas
  tableConfig={{
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \`\${r.id}\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),render:()=>{const[l,r]=o.useState(R),i=o.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:240,editingCell:{component:"inputString"}},{key:"priority",name:"Priority (Badge + copyData)",width:220,editingCell:{component:"inputString"},renderCell:({row:u})=>n.jsx(d.Container,{direction:"row",alignItems:"center",padding:8,children:n.jsx(d.Badge,{text:u.priority,view:u.priority==="Critical"?"negative":"default",size:"s"})}),copyData:u=>u.priority??""},{key:"issueType",name:"Type (Text + copyData)",width:200,editingCell:{component:"inputString"},renderCell:({row:u,theme:t})=>n.jsx(d.Container,{padding:8,children:n.jsx(d.Text,{color:t.textDark,children:u.issueType})}),copyData:u=>u.issueType??""},{key:"complete",name:"% Complete",width:140,editingCell:{component:"inputNumber"}}],[]);return n.jsxs("div",{children:[n.jsxs(C,{children:[n.jsx("b",{children:"Priority"})," — Canvas.Badge с ",n.jsx("code",{children:"copyData"}),". ",n.jsx("b",{children:"Type"})," — Canvas.Text с ",n.jsx("code",{children:"copyData"}),".",n.jsx("br",{}),'Выделите ячейку Priority → Ctrl+C → вставьте в блокнот: скопируется текст бейджа (например "Critical"), а не пустая строка.']}),n.jsx(w,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},editing:{onRowsChange:r,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:i,rows:l})]})}},f={name:"Валидация типов при вставке",...p({previewSource:"shown",code:`${k}

${v}

const columnConfig: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'task', name: 'Title', width: 240, editingCell: { component: 'inputString' } },
  {
    key: 'priority',
    name: 'Priority',
    width: 180,
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: [
          { value: 'Critical', text: 'Critical' },
          { value: 'High', text: 'High' },
          { value: 'Medium', text: 'Medium' },
          { value: 'Low', text: 'Low' },
        ],
      },
    },
  },
  { key: 'complete', name: '% Complete', width: 180, editingCell: { component: 'inputNumber' } },
];

<TableCanvas
  tableConfig={{
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \`\${r.id}\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),render:()=>{o.useEffect(()=>{window.__TABLE_CANVAS_CLIPBOARD_DEBUG__=!0},[]);const[l,r]=o.useState(R),i=o.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Title (строка)",width:240,editingCell:{component:"inputString"}},{key:"priority",name:"Priority (select)",width:180,editingCell:{component:"select",options:{type:"constant",options:[{value:"Critical",text:"Critical"},{value:"High",text:"High"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}}},{key:"complete",name:"% Complete (число)",width:180,editingCell:{component:"inputNumber"},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" "}}],[]);return n.jsxs("div",{children:[n.jsxs(C,{children:[n.jsx("b",{children:"Priority"}),' — select (Critical / High / Medium / Low). Вставка "Unknown" пропустится.',n.jsx("br",{}),n.jsx("b",{children:"% Complete"}),' — число. Вставка "hello" пропустится.',n.jsx("br",{}),n.jsx("b",{children:"Title"})," — строка, принимает всё.",n.jsx("br",{}),"Debug логи включены — смотрите"," ",n.jsx("code",{children:"[TableCanvas/paste] skipped by validation"})," в консоли."]}),n.jsx(w,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},editing:{onRowsChange:r,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:i,rows:l})]})}},h={name:"Fill Handle — доступ к source row (onBeforeFill)",...p({previewSource:"shown",code:`${k}

${v}

${A}

<TableCanvas
  tableConfig={{
    cellTransfer: {
      fillHandle: true,
      onBeforeFill: (data, meta) => {
        console.log('source row', meta.sourceCells[0]?.[0]?.row);
        return data;
      },
    },
    editing: {
      rowKeyGetter: (r) => \`\${r.id}\`,
      onRowsChange: (newRows, { indexes, column, type, fillMeta }) => {
        if (type === 'fill' && fillMeta && column.key === 'complete') {
          const sourceRow = fillMeta.sourceCells[0]?.[0]?.row;
          if (sourceRow) {
            setRows(
              newRows.map((row, i) =>
                indexes.includes(i)
                  ? { ...row, priority: sourceRow.priority }
                  : row,
              ),
            );
            return;
          }
        }
        setRows(newRows);
      },
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),render:()=>{const[l,r]=o.useState(R),i=o.useRef(null),u=o.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"issueType",name:"Issue Type",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return n.jsxs("div",{children:[n.jsxs(C,{children:["Выделите ячейку в колонке ",n.jsx("b",{children:"% Complete"})," и перетащите fill handle вниз.",n.jsx("br",{}),n.jsx("b",{children:"onRowsChange"})," получает ",n.jsx("code",{children:"type: 'fill'"})," и"," ",n.jsx("code",{children:"fillMeta"})," с source row, что позволяет дополнительно скопировать ",n.jsx("b",{children:"priority"})," из исходной строки."]}),n.jsx(w,{tableConfig:{containerStyle:{height:"500px"},highlightActiveType:"range-cell",rowSize:{default:"medium",showInControl:!0},cellTransfer:{fillHandle:!0,onBeforeFill:(t,s)=>{var a,c;return console.log("[onBeforeFill] source row:",(c=(a=s.sourceCells[0])==null?void 0:a[0])==null?void 0:c.row),console.log("[onBeforeFill] data:",t),t}},editing:{onEnableEditing(t){i.current=JSON.parse(JSON.stringify(l)),t()},onCancel(t){i.current&&(r(i.current),i.current=null),t()},onRowsChange:(t,{indexes:s,column:a,type:c,fillMeta:m})=>{var e,E;if(c==="fill"&&m&&a.key==="complete"){const x=(E=(e=m.sourceCells[0])==null?void 0:e[0])==null?void 0:E.row;if(x){const U=t.map((T,J)=>s.includes(J)?{...T,priority:x.priority}:T);r(U);return}}r(t)},rowKeyGetter:t=>`${t.id}`,defaultEnabled:!1},resizableColumn:!0},columnConfig:u,rows:l})]})}},S={name:"Кастомные хоткеи",...p({previewSource:"shown",code:`${k}

${v}

${A}

<TableCanvas
  tableConfig={{
    cellTransfer: {
      hotkeys: {
        copy: { code: 'KeyC', ctrl: true, alt: true },
        paste: { code: 'KeyV', ctrl: true, alt: true },
      },
    },
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \`\${r.id}\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>`}),render:()=>{const[l,r]=o.useState(R),i=o.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return n.jsxs("div",{children:[n.jsxs(C,{children:["Copy: ",n.jsx("b",{children:"Ctrl+Alt+C"}),". Paste: ",n.jsx("b",{children:"Ctrl+Alt+V"}),".",n.jsx("br",{}),"Обычные Ctrl+C / Ctrl+V для этой таблицы не работают — хук блокирует дефолт, когда задан кастомный хоткей."]}),n.jsx(w,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},cellTransfer:{hotkeys:{copy:{code:"KeyC",ctrl:!0,alt:!0},paste:{code:"KeyV",ctrl:!0,alt:!0}}},editing:{onRowsChange:r,rowKeyGetter:u=>`${u.id}`,defaultEnabled:!0}},columnConfig:i,rows:l})]})}};var F,I,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Полный пример (все возможности)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const rows = [
  {
    id: 1,
    block: 'Платформа',
    blockActivity: 'Активный',
    q1: 100,
    q2: 120,
    subRows: [{ id: 11, block: 'Команда A', blockActivity: 'Активный', q1: 40 }],
  },
];

const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'block',
    name: 'Блок',
    editingCell: { component: 'inputString' },
    subRow: {
      keyOfColumnInSubRow: (lvl) => (lvl === 0 ? 'block' : 'tribe'),
      isColumnWithArrow: true,
      editingCell: { component: 'inputString' },
    },
  },
  {
    key: 'blockActivity',
    name: 'Активность',
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.blockActivity} size="s" />
      </Canvas.Container>
    ),
    copyData: (row) => row.blockActivity ?? '',
    editingCell: { component: 'inputString' },
  },
  { key: 'q1', name: 'Q1', contentFormat: 'number', editingCell: { component: 'inputNumber' } },
  { key: 'q2', name: 'Q2', contentFormat: 'number', editingCell: { component: 'inputNumber' } },
];

<TableCanvas
  tableConfig={{
    cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
    highlightActiveType: 'row',
    rowMarkers: { startIndex: 1 },
    subRows: { getSubRows: (row) => row.subRows, rowKeyGetter: (row) => row.id },
    editing: { onRowsChange: setRows, rowKeyGetter: (r) => \\\`\\\${r.id}\\\` },
    resizableColumn: true,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  render: () => {
    useEffect(() => {
      (window as unknown as Record<string, boolean>).__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
    }, []);
    const [rows, setRows] = useState(() => createRowsTree());
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const columns = useMemo((): readonly ColumnConfig<TreeRow>[] => [{
      key: 'block',
      name: 'Блок',
      editingCell: {
        editable: r => r.block === BLOCKS[1],
        component: 'select',
        options: {
          type: 'constant',
          options: BLOCKS.map(i => ({
            text: i,
            value: i
          }))
        }
      },
      subRow: {
        keyOfColumnInSubRow: lvl => {
          switch (lvl) {
            case 0:
              return 'block';
            case 1:
              return 'tribe';
            case 2:
              return 'product';
            default:
              return 'block';
          }
        },
        editingCell: {
          component: 'inputString',
          inputProps: {
            placeholder: 'Введите значение'
          }
        },
        isColumnWithArrow: true
      }
    }, {
      key: 'blockActivity',
      name: 'Активность блока',
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.blockActivity} view={row.blockActivity === 'Активный' ? 'positive' : 'warning'} size="s" />
            </Canvas.Container>,
      copyData: (row: TreeRow) => row.blockActivity ?? '',
      subRow: {
        keyOfColumnInSubRow: 'blockActivity',
        editingCell: {
          component: 'inputString'
        }
      }
    }, {
      key: 'tribe',
      name: 'Трайб',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'tribeOptions'
        }
      },
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Text color={theme.textDark}>{row.tribe}</Canvas.Text>
            </Canvas.Container>,
      copyData: (row: TreeRow) => row.tribe ?? '',
      subRow: {
        keyOfColumnInSubRow: 'tribe',
        editingCell: {
          component: 'inputString'
        }
      }
    }, {
      key: 'product',
      name: 'Продукт',
      editingCell: {
        component: 'select',
        options: {
          type: 'stateInRowContext',
          optionsKeyInRowContext: 'productOptions'
        }
      },
      subRow: {
        keyOfColumnInSubRow: 'product',
        editingCell: {
          component: 'inputString'
        }
      }
    }, {
      key: 'q1',
      name: 'Q1',
      editingCell: {
        component: 'inputNumber'
      },
      contentFormat: {
        type: 'number',
        decimalSeparator: ',',
        thousandSeparator: ' ',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      subRow: {
        keyOfColumnInSubRow: 'q1',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q2',
      name: 'Q2',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q2',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q3',
      name: 'Q3',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q3',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }, {
      key: 'q4',
      name: 'Q4',
      contentFormat: 'number',
      editingCell: {
        component: 'inputNumber'
      },
      subRow: {
        keyOfColumnInSubRow: 'q4',
        editingCell: {
          component: 'inputNumber'
        }
      }
    }], []);
    const rowContextValue = useMemo(() => ({
      tribeOptions: TRIBES.map(i => ({
        text: i,
        value: i
      })),
      productOptions: PRODUCTS.map(i => ({
        text: i,
        value: i
      }))
    }), []);
    const savedRowsRef = useRef<null | typeof rows>(null);
    return <div>
        <div style={{
        display: 'flex',
        gap: 12,
        maxWidth: 760,
        marginBottom: 12
      }}>
          <Select label="Режим выделения" value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} />
          <Select label="highlightActiveType (подсветка)" value={highlightActiveType} onChange={value => setHighlightActiveType(value as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS} />
        </div>

        <StoryHint>
          <b>Copy:</b> работает всегда (Ctrl+C). <b>Paste/Fill:</b> только в
          режиме редактирования.
          <br />
          <b>Выделение строк:</b> клик/драг по колонке нумерации — строка(и);{' '}
          <b>Ctrl/Cmd+клик</b> по номерам — набор отдельных строк (группа).
          Скопированное (Ctrl+C) можно вставить (Ctrl+V) на выделенные строки.
          <br />
          <b>Выделение колонок:</b> клик по шапке (Ctrl/Shift — мультивыбор),
          copy/paste по колонкам.
          <br />
          <b>Колонки:</b> Блок (select, readonly часть), Активность
          (Canvas.Badge + copyData), Трайб (Canvas.Text + copyData + select),
          Продукт (select), Q1 (число + contentFormat), Q2-Q4 (число).
          <br />
          <b>Debug:</b> логи включены (DevTools → Verbose).
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '700px'
        },
        // Подсветка строки — отдельная визуальная ось (Фаза 2+).
        highlightActiveType,
        // Нумерация строк: клик/драг по ней выделяет строку(и); Ctrl/Meta —
        // накопительный выбор отдельных строк. Copy/Paste работают по строкам.
        rowMarkers: {
          startIndex: 1
        },
        // Режим выделения ячеек: по нему работают copy/paste и рамка.
        // Выделение колонок по клику на шапку (по умолчанию включено).
        cellsSelection: {
          mode: selectionMode,
          enableColumnSelection: true
        },
        rowSize: {
          showInControl: true,
          default: 'big'
        },
        editing: {
          onEnableEditing(enableEditorMode) {
            savedRowsRef.current = JSON.parse(JSON.stringify(rows));
            enableEditorMode();
          },
          onCancel(disableEditorMode) {
            if (savedRowsRef.current) setRows(savedRowsRef.current);
            disableEditorMode();
          },
          onSave(disableEditorMode) {
            savedRowsRef.current = null;
            disableEditorMode();
          },
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          rowEditable: r => r.block !== BLOCKS[1]
        },
        subRows: {
          getSubRows: row => row?.subRows,
          rowKeyGetter: row => row.id
        },
        resizableColumn: true
      }} columnConfig={columns} rows={rows} rowContextValue={rowContextValue} />
      </div>;
  }
}`,...(P=(I=g.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var O,M,j;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Перехват onBeforeCopy / onBeforePaste',
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${CPF_IMPORTS}

\${CPF_ROWS}

\${CPF_COLUMNS}

<TableCanvas
  tableConfig={{
    cellTransfer: {
      onBeforeCopy: (data, meta) => {
        console.log('copy', data, meta.cells);
        return data;
      },
      onBeforePaste: (data) => (data.length > 5 ? false : data),
    },
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \\\`\\\${r.id}\\\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 90,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 260,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      width: 160,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <StoryHint>
          <b>onBeforeCopy:</b> при Ctrl+C в консоль выводятся скопированные
          данные, колонки и rawValue каждой ячейки.
          <br />
          <b>onBeforePaste:</b> при Ctrl+V выводятся вставляемые данные и info о
          target-ячейках. Если вставляется больше 5 строк, вставка блокируется
          (return false).
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '500px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        cellTransfer: {
          onBeforeCopy: (data, meta) => {
            console.log('[onBeforeCopy] data:', data);
            console.log('[onBeforeCopy] колонки:', meta.cells[0]?.map(c => c.column.key));
            console.log('[onBeforeCopy] rawValues:', meta.cells.map(row => row.map(c => c.rawValue)));
            return data;
          },
          onBeforePaste: (data, meta) => {
            console.log('[onBeforePaste] data:', data);
            console.log('[onBeforePaste] target:', meta.target);
            console.log('[onBeforePaste] targetCells:', meta.targetCells.map(row => row.map(c => \`\${c.column.key} (\${c.column.editingCell ? 'editable' : 'readonly'})\`)));
            if (data.length > 5) {
              console.warn('[onBeforePaste] Блокировка: больше 5 строк');
              return false;
            }
            return data;
          }
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        },
        resizableColumn: true
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(j=(M=y.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var N,_,$;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'copyData для кастомных ячеек',
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

\${CPF_ROWS}

const columnConfig: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'task', name: 'Title', width: 240 },
  {
    key: 'priority',
    name: 'Priority',
    width: 220,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.priority} size="s" />
      </Canvas.Container>
    ),
    copyData: (row) => row.priority ?? '',
  },
  { key: 'complete', name: '% Complete', width: 140 },
];

<TableCanvas
  tableConfig={{
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \\\`\\\${r.id}\\\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 240,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority (Badge + copyData)',
      width: 220,
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row
      }) => <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge text={row.priority} view={row.priority === 'Critical' ? 'negative' : 'default'} size="s" />
            </Canvas.Container>,
      copyData: (row: Row) => row.priority ?? ''
    }, {
      key: 'issueType',
      name: 'Type (Text + copyData)',
      width: 200,
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8}>
              <Canvas.Text color={theme.textDark}>{row.issueType}</Canvas.Text>
            </Canvas.Container>,
      copyData: (row: Row) => row.issueType ?? ''
    }, {
      key: 'complete',
      name: '% Complete',
      width: 140,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <StoryHint>
          <b>Priority</b> — Canvas.Badge с <code>copyData</code>. <b>Type</b> —
          Canvas.Text с <code>copyData</code>.
          <br />
          Выделите ячейку Priority → Ctrl+C → вставьте в блокнот: скопируется
          текст бейджа (например &quot;Critical&quot;), а не пустая строка.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...($=(_=b.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var H,K,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Валидация типов при вставке',
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${CPF_IMPORTS}

\${CPF_ROWS}

const columnConfig: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'task', name: 'Title', width: 240, editingCell: { component: 'inputString' } },
  {
    key: 'priority',
    name: 'Priority',
    width: 180,
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: [
          { value: 'Critical', text: 'Critical' },
          { value: 'High', text: 'High' },
          { value: 'Medium', text: 'Medium' },
          { value: 'Low', text: 'Low' },
        ],
      },
    },
  },
  { key: 'complete', name: '% Complete', width: 180, editingCell: { component: 'inputNumber' } },
];

<TableCanvas
  tableConfig={{
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \\\`\\\${r.id}\\\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  render: () => {
    useEffect(() => {
      (window as unknown as Record<string, boolean>).__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
    }, []);
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80
    }, {
      key: 'task',
      name: 'Title (строка)',
      width: 240,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority (select)',
      width: 180,
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: [{
            value: 'Critical',
            text: 'Critical'
          }, {
            value: 'High',
            text: 'High'
          }, {
            value: 'Medium',
            text: 'Medium'
          }, {
            value: 'Low',
            text: 'Low'
          }]
        }
      }
    }, {
      key: 'complete',
      name: '% Complete (число)',
      width: 180,
      editingCell: {
        component: 'inputNumber'
      },
      contentFormat: {
        type: 'number',
        decimalSeparator: ',',
        thousandSeparator: ' '
      }
    }], []);
    return <div>
        <StoryHint>
          <b>Priority</b> — select (Critical / High / Medium / Low). Вставка
          &quot;Unknown&quot; пропустится.
          <br />
          <b>% Complete</b> — число. Вставка &quot;hello&quot; пропустится.
          <br />
          <b>Title</b> — строка, принимает всё.
          <br />
          Debug логи включены — смотрите{' '}
          <code>[TableCanvas/paste] skipped by validation</code> в консоли.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(G=(K=f.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var q,V,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Fill Handle — доступ к source row (onBeforeFill)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${CPF_IMPORTS}

\${CPF_ROWS}

\${CPF_COLUMNS}

<TableCanvas
  tableConfig={{
    cellTransfer: {
      fillHandle: true,
      onBeforeFill: (data, meta) => {
        console.log('source row', meta.sourceCells[0]?.[0]?.row);
        return data;
      },
    },
    editing: {
      rowKeyGetter: (r) => \\\`\\\${r.id}\\\`,
      onRowsChange: (newRows, { indexes, column, type, fillMeta }) => {
        if (type === 'fill' && fillMeta && column.key === 'complete') {
          const sourceRow = fillMeta.sourceCells[0]?.[0]?.row;
          if (sourceRow) {
            setRows(
              newRows.map((row, i) =>
                indexes.includes(i)
                  ? { ...row, priority: sourceRow.priority }
                  : row,
              ),
            );
            return;
          }
        }
        setRows(newRows);
      },
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const savedRowsRef = useRef<Row[] | null>(null);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 260,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'issueType',
      name: 'Issue Type',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      width: 160,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <StoryHint>
          Выделите ячейку в колонке <b>% Complete</b> и перетащите fill handle
          вниз.
          <br />
          <b>onRowsChange</b> получает <code>type: &apos;fill&apos;</code> и{' '}
          <code>fillMeta</code> с source row, что позволяет дополнительно
          скопировать <b>priority</b> из исходной строки.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '500px'
        },
        highlightActiveType: 'range-cell',
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        cellTransfer: {
          fillHandle: true,
          onBeforeFill: (data, meta) => {
            console.log('[onBeforeFill] source row:', meta.sourceCells[0]?.[0]?.row);
            console.log('[onBeforeFill] data:', data);
            return data;
          }
        },
        editing: {
          onEnableEditing(enableEditorMode) {
            savedRowsRef.current = JSON.parse(JSON.stringify(rows));
            enableEditorMode();
          },
          onCancel(disableEditorMode) {
            if (savedRowsRef.current) {
              setRows(savedRowsRef.current);
              savedRowsRef.current = null;
            }
            disableEditorMode();
          },
          onRowsChange: (newRows, {
            indexes,
            column,
            type,
            fillMeta
          }) => {
            if (type === 'fill' && fillMeta && column.key === 'complete') {
              const sourceRow = fillMeta.sourceCells[0]?.[0]?.row as Row | undefined;
              if (sourceRow) {
                const updated = newRows.map((row, i) => indexes.includes(i) ? {
                  ...row,
                  priority: sourceRow.priority
                } : row);
                setRows(updated);
                return;
              }
            }
            setRows(newRows);
          },
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: false
        },
        resizableColumn: true
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(L=(V=h.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var z,Q,W;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Кастомные хоткеи',
  ...storySourceDoc({
    previewSource: 'shown',
    code: \`\${CPF_IMPORTS}

\${CPF_ROWS}

\${CPF_COLUMNS}

<TableCanvas
  tableConfig={{
    cellTransfer: {
      hotkeys: {
        copy: { code: 'KeyC', ctrl: true, alt: true },
        paste: { code: 'KeyV', ctrl: true, alt: true },
      },
    },
    editing: {
      onRowsChange: setRows,
      rowKeyGetter: (r) => \\\`\\\${r.id}\\\`,
      defaultEnabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>\`
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(() => [{
      key: 'id',
      name: 'ID',
      width: 80,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'task',
      name: 'Title',
      width: 260,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'priority',
      name: 'Priority',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'complete',
      name: '% Complete',
      width: 160,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <StoryHint>
          Copy: <b>Ctrl+Alt+C</b>. Paste: <b>Ctrl+Alt+V</b>.
          <br />
          Обычные Ctrl+C / Ctrl+V для этой таблицы не работают — хук блокирует
          дефолт, когда задан кастомный хоткей.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '400px'
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        cellTransfer: {
          hotkeys: {
            copy: {
              code: 'KeyC',
              ctrl: true,
              alt: true
            },
            paste: {
              code: 'KeyV',
              ctrl: true,
              alt: true
            }
          }
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(W=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const on=["ClipboardFullDemo","InterceptCopyPaste","CopyDataExample","TypeCheckValidation","FillHandleWithSourceRow","CustomHotkeys"],Cn=Object.freeze(Object.defineProperty({__proto__:null,ClipboardFullDemo:g,CopyDataExample:b,CustomHotkeys:S,FillHandleWithSourceRow:h,InterceptCopyPaste:y,TypeCheckValidation:f,__namedExportsOrder:on,default:en},Symbol.toStringTag,{value:"Module"}));export{Cn as T};
