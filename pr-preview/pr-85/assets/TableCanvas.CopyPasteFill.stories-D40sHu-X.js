import{r as t,d as e}from"./react-D2T61mpp.js";import{a as Y,B as F,P as X,T as Z,c as T}from"./tableData-DVJFoYoT.js";import ee from"./DocStoryTemplate-CA2vqHej.js";import{S as C}from"./StoryHint-D7Z2UPWM.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{C as c,T as b}from"./TableCanvas-CS8uzSWs.js";import{a2 as D}from"./@salutejs/sdds-finai-33CWxLUw.js";const ne={title:"Локальные компоненты/TableCanvas/Copy-Paste-Fill",tags:["!autodocs"],parameters:{docs:{page:ee}}},oe=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],ue=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],N="import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';",h=`const rows = [
  { id: 1, task: 'Task 1', priority: 'Critical', issueType: 'Bug', complete: 20 },
  { id: 2, task: 'Task 2', priority: 'High', issueType: 'Story', complete: 55 },
  { id: 3, task: 'Task 3', priority: 'Medium', issueType: 'Epic', complete: 80 },
];`,x=`const columnConfig: ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 80, editingCell: { component: 'inputNumber' } },
  { key: 'task', name: 'Title', width: 260, editingCell: { component: 'inputString' } },
  { key: 'priority', name: 'Priority', width: 180, editingCell: { component: 'inputString' } },
  { key: 'complete', name: '% Complete', width: 160, editingCell: { component: 'inputNumber' } },
];`,y={name:"Полный пример (все возможности)",...p({previewSource:"shown",code:`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

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
/>`}),render:()=>{t.useEffect(()=>{window.__TABLE_CANVAS_CLIPBOARD_DEBUG__=!0},[]);const[s,i]=t.useState(()=>Y()),[a,o]=t.useState("row"),[u,l]=t.useState("range-cell"),r=t.useMemo(()=>[{key:"block",name:"Блок",editingCell:{editable:n=>n.block===F[1],component:"select",options:{type:"constant",options:F.map(n=>({text:n,value:n}))}},subRow:{keyOfColumnInSubRow:n=>{switch(n){case 0:return"block";case 1:return"tribe";case 2:return"product";default:return"block"}},editingCell:{component:"inputString",inputProps:{placeholder:"Введите значение"}},isColumnWithArrow:!0}},{key:"blockActivity",name:"Активность блока",editingCell:{component:"inputString"},renderCell:({row:n})=>e.jsxDEV(c.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsxDEV(c.Badge,{text:n.blockActivity,view:n.blockActivity==="Активный"?"positive":"warning",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:185,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:184,columnNumber:13},void 0),copyData:n=>n.blockActivity??"",subRow:{keyOfColumnInSubRow:"blockActivity",editingCell:{component:"inputString"}}},{key:"tribe",name:"Трайб",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"tribeOptions"}},renderCell:({row:n,theme:E})=>e.jsxDEV(c.Container,{padding:8,children:e.jsxDEV(c.Text,{color:E.textDark,children:n.tribe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:210,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:209,columnNumber:13},void 0),copyData:n=>n.tribe??"",subRow:{keyOfColumnInSubRow:"tribe",editingCell:{component:"inputString"}}},{key:"product",name:"Продукт",editingCell:{component:"select",options:{type:"stateInRowContext",optionsKeyInRowContext:"productOptions"}},subRow:{keyOfColumnInSubRow:"product",editingCell:{component:"inputString"}}},{key:"q1",name:"Q1",editingCell:{component:"inputNumber"},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" ",minimumFractionDigits:2,maximumFractionDigits:2},subRow:{keyOfColumnInSubRow:"q1",editingCell:{component:"inputNumber"}}},{key:"q2",name:"Q2",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q2",editingCell:{component:"inputNumber"}}},{key:"q3",name:"Q3",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q3",editingCell:{component:"inputNumber"}}},{key:"q4",name:"Q4",contentFormat:"number",editingCell:{component:"inputNumber"},subRow:{keyOfColumnInSubRow:"q4",editingCell:{component:"inputNumber"}}}],[]),d=t.useMemo(()=>({tribeOptions:Z.map(n=>({text:n,value:n})),productOptions:X.map(n=>({text:n,value:n}))}),[]),m=t.useRef(null);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:12,maxWidth:760,marginBottom:12},children:[e.jsxDEV(D,{label:"Режим выделения",value:u,onChange:n=>l(n),items:ue},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:299,columnNumber:11},void 0),e.jsxDEV(D,{label:"highlightActiveType (подсветка)",value:a,onChange:n=>o(n),items:oe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:305,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:296,columnNumber:9},void 0),e.jsxDEV(C,{children:[e.jsxDEV("b",{children:"Copy:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:316,columnNumber:11},void 0)," работает всегда (Ctrl+C). ",e.jsxDEV("b",{children:"Paste/Fill:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:316,columnNumber:50},void 0)," только в режиме редактирования.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:318,columnNumber:11},void 0),e.jsxDEV("b",{children:"Выделение строк:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:319,columnNumber:11},void 0)," клик/драг по колонке нумерации — строка(и);"," ",e.jsxDEV("b",{children:"Ctrl/Cmd+клик"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:320,columnNumber:11},void 0)," по номерам — набор отдельных строк (группа). Скопированное (Ctrl+C) можно вставить (Ctrl+V) на выделенные строки.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:322,columnNumber:11},void 0),e.jsxDEV("b",{children:"Выделение колонок:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:323,columnNumber:11},void 0)," клик по шапке (Ctrl/Shift — мультивыбор), copy/paste по колонкам.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:325,columnNumber:11},void 0),e.jsxDEV("b",{children:"Колонки:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:326,columnNumber:11},void 0)," Блок (select, readonly часть), Активность (Canvas.Badge + copyData), Трайб (Canvas.Text + copyData + select), Продукт (select), Q1 (число + contentFormat), Q2-Q4 (число).",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:329,columnNumber:11},void 0),e.jsxDEV("b",{children:"Debug:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:330,columnNumber:11},void 0)," логи включены (DevTools → Verbose)."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:315,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"700px"},highlightActiveType:a,rowMarkers:{startIndex:1},cellsSelection:{mode:u,enableColumnSelection:!0},rowSize:{showInControl:!0,default:"big"},editing:{onEnableEditing(n){m.current=JSON.parse(JSON.stringify(s)),n()},onCancel(n){m.current&&i(m.current),n()},onSave(n){m.current=null,n()},onRowsChange:i,rowKeyGetter:n=>`${n.id}`,rowEditable:n=>n.block!==F[1]},subRows:{getSubRows:n=>n==null?void 0:n.subRows,rowKeyGetter:n=>n.id},resizableColumn:!0},columnConfig:r,rows:s,rowContextValue:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:333,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:295,columnNumber:7},void 0)}},w={name:"Перехват onBeforeCopy / onBeforePaste",...p({previewSource:"shown",code:`${N}

${h}

${x}

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
/>`}),render:()=>{const[s,i]=t.useState(T),a=t.useMemo(()=>[{key:"id",name:"ID",width:90,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"issueType",name:"Issue Type",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV(C,{children:[e.jsxDEV("b",{children:"onBeforeCopy:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:451,columnNumber:11},void 0)," при Ctrl+C в консоль выводятся скопированные данные, колонки и rawValue каждой ячейки.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:453,columnNumber:11},void 0),e.jsxDEV("b",{children:"onBeforePaste:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:454,columnNumber:11},void 0)," при Ctrl+V выводятся вставляемые данные и info о target-ячейках. Если вставляется больше 5 строк, вставка блокируется (return false)."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:450,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"500px"},rowSize:{default:"medium",showInControl:!0},cellTransfer:{onBeforeCopy:(o,u)=>{var l;return console.log("[onBeforeCopy] data:",o),console.log("[onBeforeCopy] колонки:",(l=u.cells[0])==null?void 0:l.map(r=>r.column.key)),console.log("[onBeforeCopy] rawValues:",u.cells.map(r=>r.map(d=>d.rawValue))),o},onBeforePaste:(o,u)=>(console.log("[onBeforePaste] data:",o),console.log("[onBeforePaste] target:",u.target),console.log("[onBeforePaste] targetCells:",u.targetCells.map(l=>l.map(r=>`${r.column.key} (${r.column.editingCell?"editable":"readonly"})`))),o.length>5?(console.warn("[onBeforePaste] Блокировка: больше 5 строк"),!1):o)},editing:{onRowsChange:i,rowKeyGetter:o=>`${o.id}`,defaultEnabled:!0},resizableColumn:!0},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:459,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:449,columnNumber:7},void 0)}},g={name:"copyData для кастомных ячеек",...p({previewSource:"shown",code:`import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

${h}

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
/>`}),render:()=>{const[s,i]=t.useState(T),a=t.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:240,editingCell:{component:"inputString"}},{key:"priority",name:"Priority (Badge + copyData)",width:220,editingCell:{component:"inputString"},renderCell:({row:o})=>e.jsxDEV(c.Container,{direction:"row",alignItems:"center",padding:8,children:e.jsxDEV(c.Badge,{text:o.priority,view:o.priority==="Critical"?"negative":"default",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:573,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:572,columnNumber:13},void 0),copyData:o=>o.priority??""},{key:"issueType",name:"Type (Text + copyData)",width:200,editingCell:{component:"inputString"},renderCell:({row:o,theme:u})=>e.jsxDEV(c.Container,{padding:8,children:e.jsxDEV(c.Text,{color:u.textDark,children:o.issueType},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:589,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:588,columnNumber:13},void 0),copyData:o=>o.issueType??""},{key:"complete",name:"% Complete",width:140,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV(C,{children:[e.jsxDEV("b",{children:"Priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:607,columnNumber:11},void 0)," — Canvas.Badge с ",e.jsxDEV("code",{children:"copyData"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:607,columnNumber:44},void 0),". ",e.jsxDEV("b",{children:"Type"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:607,columnNumber:67},void 0)," — Canvas.Text с ",e.jsxDEV("code",{children:"copyData"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:608,columnNumber:25},void 0),".",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:609,columnNumber:11},void 0),'Выделите ячейку Priority → Ctrl+C → вставьте в блокнот: скопируется текст бейджа (например "Critical"), а не пустая строка.']},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:606,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},editing:{onRowsChange:i,rowKeyGetter:o=>`${o.id}`,defaultEnabled:!0}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:614,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:605,columnNumber:7},void 0)}},f={name:"Валидация типов при вставке",...p({previewSource:"shown",code:`${N}

${h}

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
/>`}),render:()=>{t.useEffect(()=>{window.__TABLE_CANVAS_CLIPBOARD_DEBUG__=!0},[]);const[s,i]=t.useState(T),a=t.useMemo(()=>[{key:"id",name:"ID",width:80},{key:"task",name:"Title (строка)",width:240,editingCell:{component:"inputString"}},{key:"priority",name:"Priority (select)",width:180,editingCell:{component:"select",options:{type:"constant",options:[{value:"Critical",text:"Critical"},{value:"High",text:"High"},{value:"Medium",text:"Medium"},{value:"Low",text:"Low"}]}}},{key:"complete",name:"% Complete (число)",width:180,editingCell:{component:"inputNumber"},contentFormat:{type:"number",decimalSeparator:",",thousandSeparator:" "}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV(C,{children:[e.jsxDEV("b",{children:"Priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:728,columnNumber:11},void 0),' — select (Critical / High / Medium / Low). Вставка "Unknown" пропустится.',e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:730,columnNumber:11},void 0),e.jsxDEV("b",{children:"% Complete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:731,columnNumber:11},void 0),' — число. Вставка "hello" пропустится.',e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:732,columnNumber:11},void 0),e.jsxDEV("b",{children:"Title"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:733,columnNumber:11},void 0)," — строка, принимает всё.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:734,columnNumber:11},void 0),"Debug логи включены — смотрите"," ",e.jsxDEV("code",{children:"[TableCanvas/paste] skipped by validation"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:736,columnNumber:11},void 0)," в консоли."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:727,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},editing:{onRowsChange:i,rowKeyGetter:o=>`${o.id}`,defaultEnabled:!0}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:739,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:726,columnNumber:7},void 0)}},v={name:"Fill Handle — доступ к source row (onBeforeFill)",...p({previewSource:"shown",code:`${N}

${h}

${x}

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
/>`}),render:()=>{const[s,i]=t.useState(T),a=t.useRef(null),o=t.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"issueType",name:"Issue Type",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV(C,{children:["Выделите ячейку в колонке ",e.jsxDEV("b",{children:"% Complete"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:843,columnNumber:37},void 0)," и перетащите fill handle вниз.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:845,columnNumber:11},void 0),e.jsxDEV("b",{children:"onRowsChange"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:846,columnNumber:11},void 0)," получает ",e.jsxDEV("code",{children:"type: 'fill'"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:846,columnNumber:40},void 0)," и"," ",e.jsxDEV("code",{children:"fillMeta"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:847,columnNumber:11},void 0)," с source row, что позволяет дополнительно скопировать ",e.jsxDEV("b",{children:"priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:848,columnNumber:23},void 0)," из исходной строки."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:842,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"500px"},highlightActiveType:"range-cell",rowSize:{default:"medium",showInControl:!0},cellTransfer:{fillHandle:!0,onBeforeFill:(u,l)=>{var r,d;return console.log("[onBeforeFill] source row:",(d=(r=l.sourceCells[0])==null?void 0:r[0])==null?void 0:d.row),console.log("[onBeforeFill] data:",u),u}},editing:{onEnableEditing(u){a.current=JSON.parse(JSON.stringify(s)),u()},onCancel(u){a.current&&(i(a.current),a.current=null),u()},onRowsChange:(u,{indexes:l,column:r,type:d,fillMeta:m})=>{var n,E;if(d==="fill"&&m&&r.key==="complete"){const S=(E=(n=m.sourceCells[0])==null?void 0:n[0])==null?void 0:E.row;if(S){const U=u.map((R,J)=>l.includes(J)?{...R,priority:S.priority}:R);i(U);return}}i(u)},rowKeyGetter:u=>`${u.id}`,defaultEnabled:!1},resizableColumn:!0},columnConfig:o,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:851,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:841,columnNumber:7},void 0)}},k={name:"Кастомные хоткеи",...p({previewSource:"shown",code:`${N}

${h}

${x}

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
/>`}),render:()=>{const[s,i]=t.useState(T),a=t.useMemo(()=>[{key:"id",name:"ID",width:80,editingCell:{component:"inputNumber"}},{key:"task",name:"Title",width:260,editingCell:{component:"inputString"}},{key:"priority",name:"Priority",width:180,editingCell:{component:"inputString"}},{key:"complete",name:"% Complete",width:160,editingCell:{component:"inputNumber"}}],[]);return e.jsxDEV("div",{children:[e.jsxDEV(C,{children:["Copy: ",e.jsxDEV("b",{children:"Ctrl+Alt+C"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:975,columnNumber:17},void 0),". Paste: ",e.jsxDEV("b",{children:"Ctrl+Alt+V"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:975,columnNumber:43},void 0),".",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:976,columnNumber:11},void 0),"Обычные Ctrl+C / Ctrl+V для этой таблицы не работают — хук блокирует дефолт, когда задан кастомный хоткей."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:974,columnNumber:9},void 0),e.jsxDEV(b,{tableConfig:{containerStyle:{height:"400px"},rowSize:{default:"medium",showInControl:!0},cellTransfer:{hotkeys:{copy:{code:"KeyC",ctrl:!0,alt:!0},paste:{code:"KeyV",ctrl:!0,alt:!0}}},editing:{onRowsChange:i,rowKeyGetter:o=>`${o.id}`,defaultEnabled:!0}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:981,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CopyPasteFill/TableCanvas.CopyPasteFill.stories.tsx",lineNumber:973,columnNumber:7},void 0)}};var P,B,A;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(B=y.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var V,I,O;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(I=w.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var M,j,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(j=g.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var $,H,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(H=f.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,q,L;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(q=v.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,Q,W;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const te=["ClipboardFullDemo","InterceptCopyPaste","CopyDataExample","TypeCheckValidation","FillHandleWithSourceRow","CustomHotkeys"],me=Object.freeze(Object.defineProperty({__proto__:null,ClipboardFullDemo:y,CopyDataExample:g,CustomHotkeys:k,FillHandleWithSourceRow:v,InterceptCopyPaste:w,TypeCheckValidation:f,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{me as T};
