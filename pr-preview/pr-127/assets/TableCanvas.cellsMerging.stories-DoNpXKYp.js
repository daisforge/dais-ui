import{r as d,d as u}from"./react-D2T61mpp.js";import ie from"./DocStoryTemplate-CnJlkrRG.js";import{S as C}from"./StoryHint-D7Z2UPWM.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as E,C as w}from"./TableCanvas-Ep532FRu.js";import{t as b,a3 as x}from"./@salutejs/sdds-finai-BWYHBdru.js";const ae={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{page:ie}}},de=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],ce=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],ge=`
import { useMemo, useRef, useState } from 'react';
import { Select } from '@daisforge/ui';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  role: string;
  dept: string;
  period: string;
  plan: number;
  fact: number;
};

// role/dept повторяются в данных блоками по 3 строки — объединение
// выводится из повторяющихся значений, данные не мутируются.
const GROUPS = [
  { role: 'Аналитик', dept: 'Отдел A' },
  { role: 'Разработчик', dept: 'Отдел B' },
  { role: 'Тестировщик', dept: 'Отдел C' },
  { role: 'Менеджер', dept: 'Отдел D' },
];
const PERIODS = ['Q1', 'Q2', 'Q3'];
const INITIAL_ROWS: Row[] = [];
let counter = 1;
for (const g of GROUPS) {
  for (const p of PERIODS) {
    INITIAL_ROWS.push({
      id: counter,
      role: g.role,
      dept: g.dept,
      period: p,
      plan: counter * 10,
      fact: counter * 8,
    });
    counter += 1;
  }
}

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'cell', value: 'cell' },
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'disabled', value: 'disabled' },
];

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: Array<{
  label: string;
  value: HighlightActiveType;
}> = [
  { label: 'row', value: 'row' },
  { label: 'disabled', value: 'disabled' },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const beforeEditRef = useRef(rows);
  const [selectionMode, setSelectionMode] =
    useState<CellsSelectionMode>('range-cell');
  const [highlightActiveType, setHighlightActiveType] =
    useState<HighlightActiveType>('disabled');

  const columns = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'role', name: 'Роль (merge ×3)', width: 220 },
      {
        key: 'dept',
        name: 'Отдел (custom + merge ×3)',
        width: 220,
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="center" justifyContent="center">
            <Canvas.Text color={theme.textDark}>{row.dept}</Canvas.Text>
          </Canvas.Container>
        ),
        copyData: (row) => row.dept,
        // У canvas-колонок превью по умолчанию выключено — включаем явно.
        renderCellPreview: 'cellEditorAsPreview',
      },
      { key: 'period', name: 'Период', width: 120, editingCell: { component: 'inputString' } },
      { key: 'plan', name: 'План', width: 120, editingCell: { component: 'inputNumber' } },
      { key: 'fact', name: 'Факт', width: 120, editingCell: { component: 'inputNumber' } },
    ],
    [],
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
        <Select
          target="textfield-like"
          label="Режим выделения"
          value={selectionMode}
          onChange={(v) => setSelectionMode(v as CellsSelectionMode)}
          items={SELECTION_MODE_OPTIONS}
        />
        <Select
          target="textfield-like"
          label="Highlight active"
          value={highlightActiveType}
          onChange={(v) => setHighlightActiveType(v as HighlightActiveType)}
          items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS}
        />
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '600px' },
          highlightActiveType,
          rowMarkers: { startIndex: 1 },
          columnsControl: { enable: true },
          rowSize: { default: 'medium', showInControl: true },
          fullScreenEnabled: true,
          mergeCells: { mergeByCellValues: ['role', 'dept'] },
          cellsSelection: { mode: selectionMode, enableColumnSelection: true },
          cellTransfer: { fillHandle: true },
          editing: {
            onRowsChange: setRows,
            rowKeyGetter: (r) => \`\${r.id}\`,
            onEnableEditing: (enable) => {
              beforeEditRef.current = rows;
              enable();
            },
            onCancel: (disable) => {
              setRows(beforeEditRef.current);
              disable();
            },
            onSave: (disable) => {
              disable();
            },
          },
          resizableColumn: true,
        }}
        columnConfig={columns}
        rows={rows}
      />
    </div>
  );
};
`,y={name:"mergeByCellValues: объединение по значению",...p({code:ge,type:"code",previewSource:"shown"}),render:()=>{const a=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],s=["Q1","Q2","Q3"],o=[];let l=1;for(const g of a)for(const T of s)o.push({id:l,role:g.role,dept:g.dept,period:T,plan:l*10,fact:l*8}),l+=1;const[r,c]=d.useState(o),t=d.useRef(r),[e,i]=d.useState("range-cell"),[n,m]=d.useState("disabled"),f=d.useMemo(()=>[{key:"role",name:"Роль (merge ×3)",width:220},{key:"dept",name:"Отдел (custom + merge ×3)",width:220,renderCell:({row:g,theme:T})=>u.jsxDEV(w.Container,{padding:8,alignItems:"center",justifyContent:"center",children:u.jsxDEV(w.Text,{color:T.textDark,children:g.dept},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:264,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:259,columnNumber:13},void 0),copyData:g=>g.dept,renderCellPreview:"cellEditorAsPreview"},{key:"period",name:"Период",width:120,editingCell:{component:"inputString"}},{key:"plan",name:"План",width:120,editingCell:{component:"inputNumber"}},{key:"fact",name:"Факт",width:120,editingCell:{component:"inputNumber"}}],[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",gap:16,marginBottom:12},children:[u.jsxDEV(x,{target:"textfield-like",label:"Режим выделения",value:e,onChange:g=>i(g),items:de},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:296,columnNumber:11},void 0),u.jsxDEV(x,{target:"textfield-like",label:"Highlight active",value:n,onChange:g=>m(g),items:ce},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:303,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:295,columnNumber:9},void 0),u.jsxDEV(C,{children:"«Роль» и «Отдел» слиты блоками по три строки: значения в этих строках действительно одинаковые, объединение просто показывает их одной ячейкой. Остальные колонки обычные."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:312,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:n,rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},cellsSelection:{mode:e,enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:c,rowKeyGetter:g=>`${g.id}`,onEnableEditing:g=>{t.current=r,g()},onCancel:g=>{c(t.current),g()},onSave:g=>{g()}},resizableColumn:!0},columnConfig:f,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:318,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:294,columnNumber:7},void 0)}},me=`
import { useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  role: string;
  dept: string;
  person: string;
  plan: number;
};

const GROUPS = [
  { role: 'Аналитик', dept: 'Отдел A' },
  { role: 'Разработчик', dept: 'Отдел B' },
  { role: 'Тестировщик', dept: 'Отдел C' },
  { role: 'Менеджер', dept: 'Отдел D' },
];
const ALL: Row[] = [];
let counter = 1;
for (const g of GROUPS) {
  for (let p = 0; p < 3; p += 1) {
    ALL.push({
      id: counter,
      role: g.role,
      dept: g.dept,
      person: \`Сотрудник \${counter}\`,
      plan: (13 - counter) * 5,
    });
    counter += 1;
  }
}

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'role',
    name: 'Роль (mergeByCellValues)',
    width: 260,
    sortingType: 'stringSort',
    filtering: {
      component: 'select',
      keyInFilterState: 'role',
      valueInRow: (r) => r.role,
      selectOptions: {
        type: 'constant',
        options: [
          { value: 'Все', text: 'Все' },
          ...GROUPS.map((g) => ({ value: g.role, text: g.role })),
        ],
      },
      filter: {
        typeOfValue: 'single',
        filteringType: (fv, rv) => fv === 'Все' || rv === fv,
      },
    },
  },
  {
    key: 'dept',
    name: 'Отдел (mergeByCellValues)',
    width: 260,
    sortingType: 'stringSort',
  },
  { key: 'person', name: 'Сотрудник', width: 170 },
  { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
];

export const Example = () => {
  const sortState = useState<readonly SortColumn[]>([]);
  const filteringState = useState<{ role: string }>({ role: 'Все' });

  // Обёртка сама объединяет role/dept по подряд идущим одинаковым значениям.
  // Sort/filter встроенные, блоки пересобираются автоматически.
  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '520px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: { mergeByCellValues: ['role', 'dept'] },
        sorting: { state: sortState },
        filtering: {
          state: filteringState,
          filtersInfo: { role: { label: 'Роль', clearedValue: 'Все' } },
        },
      }}
      columnConfig={columns}
      rows={ALL}
    />
  );
};
`,v={name:"mergeByCellValues: сортировка и фильтр",...p({code:me,type:"code",previewSource:"shown"}),render:()=>{const a=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],s=[];let o=1;for(const t of a)for(let e=0;e<3;e+=1)s.push({id:o,role:t.role,dept:t.dept,person:`Сотрудник ${o}`,plan:(13-o)*5}),o+=1;const l=d.useState([]),r=d.useState({role:"Все"}),c=[{key:"role",name:"Роль (mergeByCellValues)",width:260,sortingType:"stringSort",filtering:{component:"select",keyInFilterState:"role",valueInRow:t=>t.role,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},...a.map(t=>({value:t.role,text:t.role}))]},filter:{typeOfValue:"single",filteringType:(t,e)=>t==="Все"||e===t}}},{key:"dept",name:"Отдел (mergeByCellValues)",width:260,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Таблица сама сливает соседние одинаковые значения. Отсортируй по «Роль» — блоки соберутся, по «План» — распадутся; фильтр в шапке «Роли» тоже пересобирает блоки."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:534,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},sorting:{state:l},filtering:{state:r,filtersInfo:{role:{label:"Роль",clearedValue:"Все"}}}},columnConfig:c,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:539,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:533,columnNumber:7},void 0)}},Ce=`
import { useRef, useState } from 'react';
import {
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = { id: number; region: string; team: string; person: string };

// 6 регионов × 4 строки: регион слит блоками по 4, команда — по 2 (вложенно).
const REGIONS = ['Север', 'Юг', 'Запад', 'Восток', 'Центр', 'Урал'];
const INITIAL_ROWS: Row[] = [];
let c = 1;
for (const region of REGIONS) {
  for (let t = 0; t < 4; t += 1) {
    INITIAL_ROWS.push({
      id: c,
      region,
      team: \`Команда \${Math.floor(t / 2) + 1}\`,
      person: \`Сотрудник \${c}\`,
    });
    c += 1;
  }
}

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'region',
    name: 'Регион (mergeByCellValues)',
    width: 220,
    editingCell: { component: 'inputString' },
  },
  {
    key: 'team',
    name: 'Команда (mergeByCellValues)',
    width: 220,
    editingCell: { component: 'inputString' },
  },
  {
    key: 'person',
    name: 'Сотрудник',
    width: 220,
    editingCell: { component: 'inputString' },
  },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const beforeEditRef = useRef(rows);

  // Правка значения перестраивает блоки: объединение выводится из данных.
  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '600px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: { mergeByCellValues: ['region', 'team'] },
        cellsSelection: { mode: 'range-cell' },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`,S={name:"mergeByCellValues: редактирование",...p({code:Ce,type:"code",previewSource:"shown"}),render:()=>{const a=["Север","Юг","Запад","Восток","Центр","Урал"],s=[];let o=1;for(const e of a)for(let i=0;i<4;i+=1)s.push({id:o,region:e,team:`Команда ${Math.floor(i/2)+1}`,person:`Сотрудник ${o}`}),o+=1;const[l,r]=d.useState(s),c=d.useRef(l),t=[{key:"region",name:"Регион (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"team",name:"Команда (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"person",name:"Сотрудник",width:220,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Правка пересобирает блоки: измени «Регион» у блока, и он разъедется или сольётся с соседним. В данных значения просто повторяются, объединение — только способ показа."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:698,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["region","team"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:r,rowKeyGetter:e=>`${e.id}`,onEnableEditing:e=>{c.current=l,e()},onCancel:e=>{r(c.current),e()},onSave:e=>{e()}}},columnConfig:t,rows:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:703,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:697,columnNumber:7},void 0)}},pe=`
import { useRef, useState } from 'react';
import {
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  status: string;
  owner: string;
  priority: string;
  stage: string;
  task: string;
};

const STATUSES = ['В работе', 'Готово', 'Отменено', 'На паузе'];
const OWNERS = ['Иванов', 'Петров', 'Сидоров'];
const PRIORITIES = ['Высокий', 'Средний', 'Низкий'];
// Неслитый Select (per-row) — для проверки обычных ячеек рядом со слитыми.
const STAGES = ['Анализ', 'Разработка', 'Тест', 'Релиз'];

// Блоки разной высоты: 4 строки, 3 строки, 2 строки. Все три select-колонки
// слиты синхронно (одинаковые границы).
const INITIAL_ROWS: Row[] = [
  { id: 1, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Анализ', task: 'Задача 1' },
  { id: 2, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Разработка', task: 'Задача 2' },
  { id: 3, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Тест', task: 'Задача 3' },
  { id: 4, status: 'В работе', owner: 'Иванов', priority: 'Высокий', stage: 'Релиз', task: 'Задача 4' },
  { id: 5, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Анализ', task: 'Задача 5' },
  { id: 6, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Разработка', task: 'Задача 6' },
  { id: 7, status: 'Готово', owner: 'Петров', priority: 'Средний', stage: 'Тест', task: 'Задача 7' },
  { id: 8, status: 'Отменено', owner: 'Сидоров', priority: 'Низкий', stage: 'Анализ', task: 'Задача 8' },
  { id: 9, status: 'Отменено', owner: 'Сидоров', priority: 'Низкий', stage: 'Релиз', task: 'Задача 9' },
];

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'status',
    name: 'Статус — низ/лево',
    width: 220,
    // Выравнивание контента блока: вертикаль низ, горизонталь лево.
    mergedCellsAlign: { vertical: 'bottom', horizontal: 'left' },
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: STATUSES.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'owner',
    name: 'Ответственный — низ/право',
    width: 220,
    mergedCellsAlign: { vertical: 'bottom', horizontal: 'right' },
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: OWNERS.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'priority',
    name: 'Приоритет — центр/центр',
    width: 200,
    mergedCellsAlign: { vertical: 'center', horizontal: 'center' },
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: PRIORITIES.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'stage',
    name: 'Этап (Select, НЕ слит)',
    width: 200,
    editingCell: {
      component: 'select',
      options: {
        type: 'constant',
        options: STAGES.map((s) => ({ text: s, value: s })),
      },
    },
  },
  {
    key: 'task',
    name: 'Задача (текст, не слит)',
    width: 180,
    editingCell: { component: 'inputString' },
  },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const beforeEditRef = useRef(rows);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '560px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['status', 'owner', 'priority'],
        },
        cellsSelection: { mode: 'range-cell' },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`,B={name:"Select в объединённой ячейке",...p({code:pe,type:"code",previewSource:"shown"}),render:()=>{const a=["В работе","Готово","Отменено","На паузе"],s=["Иванов","Петров","Сидоров"],o=["Высокий","Средний","Низкий"],l=["Анализ","Разработка","Тест","Релиз"],r=[{id:1,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Анализ",task:"Задача 1"},{id:2,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Разработка",task:"Задача 2"},{id:3,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Тест",task:"Задача 3"},{id:4,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Релиз",task:"Задача 4"},{id:5,status:"Готово",owner:"Петров",priority:"Средний",stage:"Анализ",task:"Задача 5"},{id:6,status:"Готово",owner:"Петров",priority:"Средний",stage:"Разработка",task:"Задача 6"},{id:7,status:"Готово",owner:"Петров",priority:"Средний",stage:"Тест",task:"Задача 7"},{id:8,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Анализ",task:"Задача 8"},{id:9,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Релиз",task:"Задача 9"}],[c,t]=d.useState(r),e=d.useRef(c),i=[{key:"status",name:"Статус — низ/лево",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:a.map(n=>({text:n,value:n}))}}},{key:"owner",name:"Ответственный — низ/право",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"right"},editingCell:{component:"select",options:{type:"constant",options:s.map(n=>({text:n,value:n}))}}},{key:"priority",name:"Приоритет — центр/центр",width:200,mergedCellsAlign:{vertical:"center",horizontal:"center"},editingCell:{component:"select",options:{type:"constant",options:o.map(n=>({text:n,value:n}))}}},{key:"stage",name:"Этап (Select, НЕ слит)",width:200,editingCell:{component:"select",options:{type:"constant",options:l.map(n=>({text:n,value:n}))}}},{key:"task",name:"Задача (текст, не слит)",width:180,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Три select-колонки слиты, у каждой своё выравнивание: низ-лево, низ-право и центр. Кликни по блоку: редактор откроется у выровненного края, у нижних список раскрывается вверх. «Этап» и «Задача» не слиты — для сравнения."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:974,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"560px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["status","owner","priority"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:t,rowKeyGetter:n=>`${n.id}`,onEnableEditing:n=>{e.current=c,n()},onCancel:n=>{t(e.current),n()},onSave:n=>{n()}}},columnConfig:i,rows:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:980,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:973,columnNumber:7},void 0)}},Ee=`
import { useMemo, useRef, useState } from 'react';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  kind: 'header' | 'data';
  label: string;
  a: string;
  b: string;
};

// Правило блока: данные одинаковы во всех его ячейках. Блок показывает свою
// левую верхнюю видимую ячейку, а после закрепления или перестановки колонок
// ею может стать другая колонка — заголовок при этом останется видимым.
const buildRows = (): Row[] => {
  const out: Row[] = [];
  let id = 1;
  for (let s = 0; s < 3; s += 1) {
    out.push({
      id: id++,
      kind: 'header',
      label: \`Секция \${s + 1}\`,
      a: \`Секция \${s + 1}\`,
      b: \`Секция \${s + 1}\`,
    });
    for (let r = 0; r < 3; r += 1) {
      out.push({
        id: id++,
        kind: 'data',
        label: \`Строка \${r + 1}\`,
        a: \`A\${s}\${r}\`,
        b: \`B\${s}\${r}\`,
      });
    }
  }
  return out;
};

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'label',
    name: 'Заголовок / Строка',
    width: 220,
    editingCell: { component: 'inputString' },
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={8} alignItems="center">
        <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
      </Canvas.Container>
    ),
    // У canvas-колонок превью по умолчанию выключено — включаем явно.
    renderCellPreview: 'cellEditorAsPreview',
  },
  { key: 'a', name: 'A', width: 200, editingCell: { component: 'inputString' } },
  { key: 'b', name: 'B', width: 200, editingCell: { component: 'inputString' } },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(buildRows);
  const beforeEditRef = useRef(rows);

  // Заголовки секций через controlled-список regions: каждая header-строка
  // сливает все 3 колонки (label, a, b). Строки находятся по id.
  const regions = useMemo(
    () =>
      rows
        .filter((r) => r.kind === 'header')
        .map((r) => ({ rowKeys: [r.id], colKeys: ['label', 'a', 'b'] })),
    [rows],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '520px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: (r) => r.id,
        },
        cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
        cellTransfer: { fillHandle: true },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`,h={name:"mergedCellsRegions: заголовки секций",...p({code:Ee,type:"code",previewSource:"shown"}),render:()=>{const a=[];let s=1;for(let e=0;e<3;e+=1){a.push({id:s++,kind:"header",label:`Секция ${e+1}`,a:`Секция ${e+1}`,b:`Секция ${e+1}`});for(let i=0;i<3;i+=1)a.push({id:s++,kind:"data",label:`Строка ${i+1}`,a:`A${e}${i}`,b:`B${e}${i}`})}const[o,l]=d.useState(a),r=d.useRef(o),c=d.useMemo(()=>o.filter(e=>e.kind==="header").map(e=>({rowKeys:[e.id],colKeys:["label","a","b"]})),[o]),t=[{key:"label",name:"Заголовок / Строка",width:220,editingCell:{component:"inputString"},renderCell:({row:e,theme:i})=>u.jsxDEV(w.Container,{padding:8,alignItems:"center",children:u.jsxDEV(w.Text,{color:i.textDark,children:e.label},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1189,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1188,columnNumber:11},void 0),renderCellPreview:"cellEditorAsPreview"},{key:"a",name:"A",width:200,editingCell:{component:"inputString"}},{key:"b",name:"B",width:200,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Строки-заголовки секций слиты на всю ширину списком регионов. Обычные строки редактируются как всегда; правка заголовка меняет всю его строку."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1211,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:c,rowKeyGetter:e=>e.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:l,rowKeyGetter:e=>`${e.id}`,onEnableEditing:e=>{r.current=o,e()},onCancel:e=>{l(r.current),e()},onSave:e=>{e()}}},columnConfig:t,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1216,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1210,columnNumber:7},void 0)}},we=`
import { useRef, useState } from 'react';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = { id: number; a: string; b: string; c: string; d: string };

const INITIAL_ROWS: Row[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  a: \`A·\${i}\`,
  b: \`B·\${i}\`,
  c: \`C·\${i}\`,
  d: \`D·\${i}\`,
}));

// Блок 2×3: колонки A,B × строки 2..4 (rowInd 1..3, id 2..4). Задаётся
// controlled-списком mergeCells.mergedCellsRegions (id строк + ключи колонок).
const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;
const regions = [{ rowKeys: [2, 3, 4], colKeys: ['a', 'b'] }];

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'a',
    name: 'A (значение блока)',
    width: 160,
    editingCell: { component: 'inputString' },
    renderCell: ({ row, rowInd, theme }) => (
      <Canvas.Container
        padding={8}
        alignItems="center"
        justifyContent={inBlock(rowInd) ? 'center' : 'flex-start'}
      >
        <Canvas.Text color={theme.textDark}>
          {inBlock(rowInd) ? 'Блок 2×3' : row.a}
        </Canvas.Text>
      </Canvas.Container>
    ),
    // У canvas-колонок превью по умолчанию выключено — включаем явно.
    renderCellPreview: 'cellEditorAsPreview',
  },
  { key: 'b', name: 'B', width: 160, editingCell: { component: 'inputString' } },
  { key: 'c', name: 'C', width: 160, editingCell: { component: 'inputString' } },
  { key: 'd', name: 'D', width: 160, editingCell: { component: 'inputString' } },
];

export const Example = () => {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  // Снимок «сохранённого» состояния: отмена = потребитель откатывает свой стейт.
  const savedRef = useRef<Row[]>(INITIAL_ROWS);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '520px' },
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true },
        rowSize: { default: 'medium', showInControl: true },
        fullScreenEnabled: true,
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: (r) => r.id,
        },
        cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
        cellTransfer: { fillHandle: true },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: (r) => \`\${r.id}\`,
          // Отмена/сохранение данных — на стороне потребителя: снимок при
          // входе, восстановление по «Отменить», фиксация по «Сохранить».
          onEnableEditing: (enable) => {
            savedRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(savedRef.current);
            disable();
          },
          onSave: (disable) => {
            savedRef.current = rows;
            disable();
          },
        },
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
};
`,D={name:"mergedCellsRegions: прямоугольный блок",...p({code:we,type:"code",previewSource:"shown"}),render:()=>{const a=Array.from({length:10},(e,i)=>({id:i+1,a:`A·${i}`,b:`B·${i}`,c:`C·${i}`,d:`D·${i}`})),[s,o]=d.useState(a),l=d.useRef(a),r=e=>e>=1&&e<=3,c=[{rowKeys:[2,3,4],colKeys:["a","b"]}],t=[{key:"a",name:"A (значение блока)",width:160,editingCell:{component:"inputString"},renderCell:({row:e,rowInd:i,theme:n})=>u.jsxDEV(w.Container,{padding:8,alignItems:"center",justifyContent:r(i)?"center":"flex-start",children:u.jsxDEV(w.Text,{color:n.textDark,children:r(i)?"Блок 2×3":e.a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1385,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1380,columnNumber:11},void 0),renderCellPreview:"cellEditorAsPreview"},{key:"b",name:"B",width:160,editingCell:{component:"inputString"}},{key:"c",name:"C",width:160,editingCell:{component:"inputString"}},{key:"d",name:"D",width:160,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Блок два на три задан регионом: ключи строк и ключи колонок. Кликни — выделится целиком; стрелки перепрыгивают блок; правка пишет во весь блок."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1415,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:c,rowKeyGetter:e=>e.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:o,rowKeyGetter:e=>`${e.id}`,onEnableEditing:e=>{l.current=s,e()},onCancel:e=>{o(l.current),e()},onSave:e=>{l.current=s,e()}}},columnConfig:t,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1420,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1414,columnNumber:7},void 0)}},be=`
import { useState } from 'react';
import { Button } from '@daisforge/ui';
import {
  type ColumnConfig,
  type MergedCellsRegion,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  dept: string;
  role: string;
  person: string;
  plan: number;
};

const GROUPS = [
  { dept: 'Отдел A', role: 'Аналитик', ids: [1, 2, 3] },
  { dept: 'Отдел B', role: 'Разработчик', ids: [4, 5, 6] },
  { dept: 'Отдел C', role: 'Тестировщик', ids: [7, 8, 9, 10] },
];
const ROWS: Row[] = [];
for (const g of GROUPS) {
  for (const id of g.ids) {
    ROWS.push({
      id,
      dept: g.dept,
      role: g.role,
      person: \`Сотрудник \${id}\`,
      plan: (11 - id) * 5,
    });
  }
}

const columns: readonly ColumnConfig<Row>[] = [
  { key: 'dept', name: 'Отдел', width: 180, sortingType: 'stringSort' },
  { key: 'role', name: 'Роль', width: 180, sortingType: 'stringSort' },
  { key: 'person', name: 'Сотрудник', width: 180 },
  { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
];

export const Example = () => {
  // Объединения — во внешнем стейте: список регионов по id строк и ключам
  // колонок. Блоки привязаны к ключам, поэтому переживают скрытие и перестановку
  // колонок; если сортировка разорвала строки региона, он не рисуется — как
  // ограничение сортировки в Excel.
  const [regions, setRegions] = useState<MergedCellsRegion[]>([
    { rowKeys: [1, 2, 3], colKeys: ['dept'] },
  ]);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);

  const keyOf = (r: MergedCellsRegion) => JSON.stringify(r);
  const toggle = (r: MergedCellsRegion) =>
    setRegions((prev) =>
      prev.some((s) => keyOf(s) === keyOf(r))
        ? prev.filter((s) => keyOf(s) !== keyOf(r))
        : [...prev, r],
    );

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
        <Button
          view="secondary"
          size="s"
          onClick={() => toggle({ rowKeys: [1, 2, 3], colKeys: ['dept'] })}
        >
          Слить 1-3 (Отдел)
        </Button>
        <Button
          view="secondary"
          size="s"
          onClick={() => toggle({ rowKeys: [4, 5, 6], colKeys: ['dept'] })}
        >
          Слить 4-6 (Отдел)
        </Button>
        <Button
          view="secondary"
          size="s"
          onClick={() => toggle({ rowKeys: [1, 2, 3], colKeys: ['dept', 'role'], mergedCellsAlign: { horizontal: 'center', vertical: 'center' } })}
        >
          Прямоугольник 1-3 × Отдел+Роль (центр)
        </Button>
        <Button view="secondary" size="s" onClick={() => setRegions([])}>
          Очистить
        </Button>
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '520px' },
          rowMarkers: { startIndex: 1 },
          columnsControl: { enable: true },
          rowSize: { default: 'medium', showInControl: true },
          fullScreenEnabled: true,
          sorting: { state: [sort, setSort] },
          mergeCells: {
            mergedCellsRegions: regions,
            rowKeyGetter: (r) => r.id,
          },
        }}
        columnConfig={columns}
        rows={ROWS}
      />
    </div>
  );
};
`,k={name:"mergedCellsRegions: управление кнопками",...p({code:be,type:"code",previewSource:"shown"}),render:()=>{const a=[{dept:"Отдел A",role:"Аналитик",ids:[1,2,3]},{dept:"Отдел B",role:"Разработчик",ids:[4,5,6]},{dept:"Отдел C",role:"Тестировщик",ids:[7,8,9,10]}],s=[];for(const n of a)for(const m of n.ids)s.push({id:m,dept:n.dept,role:n.role,person:`Сотрудник ${m}`,plan:(11-m)*5});const[o,l]=d.useState([{rowKeys:[1,2,3],colKeys:["dept"]}]),[r,c]=d.useState([]),t=n=>JSON.stringify(n),e=n=>l(m=>m.some(f=>t(f)===t(n))?m.filter(f=>t(f)!==t(n)):[...m,n]),i=[{key:"dept",name:"Отдел",width:180,sortingType:"stringSort"},{key:"role",name:"Роль",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:180},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Объединениями управляют кнопки: список блоков хранится у потребителя. Отсортируй по «План» — блок с разъехавшимися строками перестанет рисоваться; сними сортировку — вернётся. Скрытие и перестановку колонок блоки переживают."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1629,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:[u.jsxDEV(b,{view:"secondary",size:"s",onClick:()=>e({rowKeys:[1,2,3],colKeys:["dept"]}),children:"Слить 1-3 (Отдел)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1638,columnNumber:11},void 0),u.jsxDEV(b,{view:"secondary",size:"s",onClick:()=>e({rowKeys:[4,5,6],colKeys:["dept"]}),children:"Слить 4-6 (Отдел)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1645,columnNumber:11},void 0),u.jsxDEV(b,{view:"secondary",size:"s",onClick:()=>e({rowKeys:[1,2,3],colKeys:["dept","role"],mergedCellsAlign:{horizontal:"center",vertical:"center"}}),children:"Прямоугольник 1-3 × Отдел+Роль (центр)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1652,columnNumber:11},void 0),u.jsxDEV(b,{view:"secondary",size:"s",onClick:()=>l([]),children:"Очистить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1665,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1635,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,sorting:{state:[r,c]},mergeCells:{mergedCellsRegions:o,rowKeyGetter:n=>n.id}},columnConfig:i,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1669,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1628,columnNumber:7},void 0)}},fe=`
import { useState } from 'react';
import { Button } from '@daisforge/ui';
import {
  Canvas,
  type ColumnConfig,
  type MergedCellsRegion,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  dept: string;
  role: string;
  person: string;
  plan: number;
  fact: number;
};

// dept/role повторяются в данных: 3 отдела, в каждом 2 роли по 2 сотрудника.
const DEPTS = [
  { dept: 'Отдел A', roles: ['Аналитик', 'Разработчик'] },
  { dept: 'Отдел B', roles: ['Разработчик', 'Тестировщик'] },
  { dept: 'Отдел C', roles: ['Менеджер', 'Аналитик'] },
];
const ROWS: Row[] = [];
let id = 1;
for (const d of DEPTS) {
  for (const role of d.roles) {
    for (let i = 0; i < 2; i += 1) {
      ROWS.push({
        id,
        dept: d.dept,
        role,
        person: \`Сотрудник \${id}\`,
        plan: (id % 7) * 1000 + 500.5,
        fact: (id % 5) * 900 + 250.25,
      });
      id += 1;
    }
  }
}

export const Example = () => {
  const [regions, setRegions] = useState<MergedCellsRegion[]>([
    { rowKeys: [1, 2], colKeys: ['plan', 'fact'] },
  ]);

  const columns: readonly ColumnConfig<Row>[] = [
    { key: 'dept', name: 'Отдел (слит)', width: 160 },
    {
      key: 'role',
      name: 'Роль (свой рендер)',
      width: 200,
      // Свой canvas-рендер: в блоке рисуется верхняя-левая ячейка, контент
      // растягивается на весь прямоугольник блока.
      renderCell: ({ row }) => (
        <Canvas.Container padding={8} alignItems="center" justifyContent="center">
          <Canvas.Badge text={row.role} />
        </Canvas.Container>
      ),
      copyData: (row) => row.role,
      // У колонок со своим рендером предпросмотр по умолчанию выключен.
      renderCellPreview: 'cellEditorAsPreview',
    },
    { key: 'person', name: 'Сотрудник', width: 170 },
    {
      key: 'plan',
      name: 'План (число, вправо)',
      width: 170,
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 2,
        alignContent: 'right',
      },
    },
    {
      key: 'fact',
      name: 'Факт (свой формат)',
      width: 170,
      contentFormat: { customFormat: (v) => \`\${v} ₽\` },
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <Button
          view="secondary"
          size="s"
          onClick={() =>
            setRegions([{ rowKeys: [1, 2], colKeys: ['plan', 'fact'] }])
          }
        >
          Слить План+Факт (строки 1-2)
        </Button>
        <Button view="secondary" size="s" onClick={() => setRegions([])}>
          Очистить
        </Button>
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '520px' },
          rowMarkers: { startIndex: 1 },
          columnsControl: { enable: true },
          rowSize: { default: 'medium', showInControl: true },
          fullScreenEnabled: true,
          mergeCells: {
            mergeByCellValues: [
              'dept',
              // Составной ключ: «Разработчик» из разных отделов не сольётся
              // в один блок, слияние обрывается на границе отдела.
              { colKey: 'role', value: (r) => \`\${r.dept}:\${r.role}\` },
            ],
            mergedCellsRegions: regions,
            rowKeyGetter: (r) => r.id,
          },
        }}
        columnConfig={columns}
        rows={ROWS}
      />
    </div>
  );
};
`,A={name:"Форматирование и свой рендер в блоке",...p({code:fe,type:"code",previewSource:"shown"}),render:()=>{const a=d.useMemo(()=>{const r=[{dept:"Отдел A",roles:["Аналитик","Разработчик"]},{dept:"Отдел B",roles:["Разработчик","Тестировщик"]},{dept:"Отдел C",roles:["Менеджер","Аналитик"]}],c=[];let t=1;for(const e of r)for(const i of e.roles)for(let n=0;n<2;n+=1)c.push({id:t,dept:e.dept,role:i,person:`Сотрудник ${t}`,plan:t%7*1e3+500.5,fact:t%5*900+250.25}),t+=1;return c},[]),[s,o]=d.useState([{rowKeys:[1,2],colKeys:["plan","fact"]}]),l=[{key:"dept",name:"Отдел (слит)",width:160},{key:"role",name:"Роль (свой рендер)",width:200,renderCell:({row:r})=>u.jsxDEV(w.Container,{padding:8,alignItems:"center",justifyContent:"center",children:u.jsxDEV(w.Badge,{text:r.role},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1878,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1873,columnNumber:11},void 0),copyData:r=>r.role,renderCellPreview:"cellEditorAsPreview"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План (число, вправо)",width:170,contentFormat:{type:"number",minimumFractionDigits:2,alignContent:"right"}},{key:"fact",name:"Факт (свой формат)",width:170,contentFormat:{customFormat:r=>`${r} ₽`}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Блок показывает свою первую ячейку: у «Роли» — свой рендер (бейдж), у «Плана» — числовой формат. Слей «План+Факт» кнопкой: блок возьмёт значение и формат «Плана», формат «Факта» не участвует."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1906,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:8},children:[u.jsxDEV(b,{view:"secondary",size:"s",onClick:()=>o([{rowKeys:[1,2],colKeys:["plan","fact"]}]),children:"Слить План+Факт (строки 1-2)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1912,columnNumber:11},void 0),u.jsxDEV(b,{view:"secondary",size:"s",onClick:()=>o([]),children:"Очистить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1921,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1911,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["dept",{colKey:"role",value:r=>`${r.dept}:${r.role}`}],mergedCellsRegions:s,rowKeyGetter:r=>r.id}},columnConfig:l,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1925,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1905,columnNumber:7},void 0)}},re=1e5,se=1e3,le=50,N=(a,s)=>{const o=Math.floor(a/s)*s;return[o,Math.min(o+s,re)-1]},ye=(a,s)=>a==="region"?N(s,se):a==="team"?N(s,le):null,R={name:"getRowSpan: ленивые блоки на 100 000 строк",...p({type:"code",previewSource:"shown"}),render:()=>{const a=d.useMemo(()=>Array.from({length:re},(o,l)=>({id:l,region:`Регион ${Math.floor(l/se)+1}`,team:`Команда ${Math.floor(l/le)%20+1}`,person:`Сотрудник ${l+1}`,plan:100+l*37%900})),[]),s=d.useMemo(()=>[{key:"region",name:"Регион (getRowSpan ×1000)",width:220},{key:"team",name:"Команда (getRowSpan ×50)",width:220},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number"}],[]);return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:[u.jsxDEV("code",{children:"mergeCells.getRowSpan(colKey, rowInd)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2005,columnNumber:11},void 0)," возвращает первую и последнюю строку блока ячейки или ",u.jsxDEV("code",{children:"null"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2006,columnNumber:45},void 0),". Таблица вызывает его только для видимых ячеек, поэтому способ подходит для больших и ленивых данных, где обход всех строк (",u.jsxDEV("code",{children:"mergeByCellValues"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2008,columnNumber:49},void 0),") дорог. Здесь блоки считаются по номеру строки: регион — по 1000 строк, команда — по 50. Резолвер должен быть стабильной функцией."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2004,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},mergeCells:{getRowSpan:ye,mergedCellsAlign:{vertical:"top"}}},columnConfig:s,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2012,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2003,columnNumber:7},void 0)}};var M,I,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'mergeByCellValues: объединение по значению',
  ...storySourceDoc({
    code: ROW_SPAN_BASIC_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type MRow = {
      id: number;
      role: string;
      dept: string;
      period: string;
      plan: number;
      fact: number;
    };
    const GROUPS = [{
      role: 'Аналитик',
      dept: 'Отдел A'
    }, {
      role: 'Разработчик',
      dept: 'Отдел B'
    }, {
      role: 'Тестировщик',
      dept: 'Отдел C'
    }, {
      role: 'Менеджер',
      dept: 'Отдел D'
    }];
    const PERIODS = ['Q1', 'Q2', 'Q3'];
    const initialRows: MRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (const p of PERIODS) {
        initialRows.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          period: p,
          plan: counter * 10,
          fact: counter * 8
        });
        counter += 1;
      }
    }
    const [rows, setRows] = useState<MRow[]>(initialRows);
    const beforeEditRef = useRef(rows);
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('disabled');
    const columns = useMemo<readonly ColumnConfig<MRow>[]>(() => [{
      key: 'role',
      name: 'Роль (merge ×3)',
      width: 220
    }, {
      key: 'dept',
      name: 'Отдел (custom + merge ×3)',
      width: 220,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8} alignItems="center" justifyContent="center">
              <Canvas.Text color={theme.textDark}>{row.dept}</Canvas.Text>
            </Canvas.Container>,
      copyData: row => row.dept,
      // У canvas-колонок превью по умолчанию выключено — включаем явно.
      renderCellPreview: 'cellEditorAsPreview'
    }, {
      key: 'period',
      name: 'Период',
      width: 120,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'plan',
      name: 'План',
      width: 120,
      editingCell: {
        component: 'inputNumber'
      }
    }, {
      key: 'fact',
      name: 'Факт',
      width: 120,
      editingCell: {
        component: 'inputNumber'
      }
    }], []);
    return <div>
        <div style={{
        display: 'flex',
        gap: 16,
        marginBottom: 12
      }}>
          <Select target="textfield-like" label="Режим выделения" value={selectionMode} onChange={v => setSelectionMode(v as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} />
          <Select target="textfield-like" label="Highlight active" value={highlightActiveType} onChange={v => setHighlightActiveType(v as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS} />
        </div>

        <StoryHint>
          «Роль» и «Отдел» слиты блоками по три строки: значения в этих строках
          действительно одинаковые, объединение просто показывает их одной
          ячейкой. Остальные колонки обычные.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        highlightActiveType,
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['role', 'dept']
        },
        cellsSelection: {
          mode: selectionMode,
          enableColumnSelection: true
        },
        cellTransfer: {
          fillHandle: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          onEnableEditing: enable => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: disable => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: disable => {
            disable();
          }
        },
        resizableColumn: true
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(F=(I=y.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var O,V,_;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'mergeByCellValues: сортировка и фильтр',
  ...storySourceDoc({
    code: DERIVED_GROUPING_SORT_FILTER_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type GRow = {
      id: number;
      role: string;
      dept: string;
      person: string;
      plan: number;
    };
    const GROUPS = [{
      role: 'Аналитик',
      dept: 'Отдел A'
    }, {
      role: 'Разработчик',
      dept: 'Отдел B'
    }, {
      role: 'Тестировщик',
      dept: 'Отдел C'
    }, {
      role: 'Менеджер',
      dept: 'Отдел D'
    }];
    const ALL: GRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (let p = 0; p < 3; p += 1) {
        ALL.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          person: \`Сотрудник \${counter}\`,
          plan: (13 - counter) * 5
        });
        counter += 1;
      }
    }
    const sortState = useState<readonly SortColumn[]>([]);
    const filteringState = useState<{
      role: string;
    }>({
      role: 'Все'
    });
    const columns: readonly ColumnConfig<GRow>[] = [{
      key: 'role',
      name: 'Роль (mergeByCellValues)',
      width: 260,
      sortingType: 'stringSort',
      filtering: {
        component: 'select',
        keyInFilterState: 'role',
        valueInRow: r => r.role,
        selectOptions: {
          type: 'constant',
          options: [{
            value: 'Все',
            text: 'Все'
          }, ...GROUPS.map(g => ({
            value: g.role,
            text: g.role
          }))]
        },
        filter: {
          typeOfValue: 'single',
          filteringType: (fv, rv) => fv === 'Все' || rv === fv
        }
      }
    }, {
      key: 'dept',
      name: 'Отдел (mergeByCellValues)',
      width: 260,
      sortingType: 'stringSort'
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 170
    }, {
      key: 'plan',
      name: 'План',
      width: 110,
      sortingType: 'numberSort'
    }];
    return <div>
        <StoryHint>
          Таблица сама сливает соседние одинаковые значения. Отсортируй по
          «Роль» — блоки соберутся, по «План» — распадутся; фильтр в шапке
          «Роли» тоже пересобирает блоки.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['role', 'dept']
        },
        sorting: {
          state: sortState
        },
        filtering: {
          state: filteringState,
          filtersInfo: {
            role: {
              label: 'Роль',
              clearedValue: 'Все'
            }
          }
        }
      }} columnConfig={columns} rows={ALL} />
      </div>;
  }
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var K,G,$;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'mergeByCellValues: редактирование',
  ...storySourceDoc({
    code: SPAN_BY_WITH_EDITING_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type ERow = {
      id: number;
      region: string;
      team: string;
      person: string;
    };
    const REGIONS = ['Север', 'Юг', 'Запад', 'Восток', 'Центр', 'Урал'];
    const initial: ERow[] = [];
    let c = 1;
    for (const region of REGIONS) {
      for (let t = 0; t < 4; t += 1) {
        initial.push({
          id: c,
          region,
          team: \`Команда \${Math.floor(t / 2) + 1}\`,
          person: \`Сотрудник \${c}\`
        });
        c += 1;
      }
    }
    const [rows, setRows] = useState<ERow[]>(initial);
    const beforeEditRef = useRef(rows);
    const columns: readonly ColumnConfig<ERow>[] = [{
      key: 'region',
      name: 'Регион (mergeByCellValues)',
      width: 220,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'team',
      name: 'Команда (mergeByCellValues)',
      width: 220,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 220,
      editingCell: {
        component: 'inputString'
      }
    }];
    return <div>
        <StoryHint>
          Правка пересобирает блоки: измени «Регион» у блока, и он разъедется
          или сольётся с соседним. В данных значения просто повторяются,
          объединение — только способ показа.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['region', 'team']
        },
        cellsSelection: {
          mode: 'range-cell'
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          onEnableEditing: enable => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: disable => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: disable => {
            disable();
          }
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...($=(G=S.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var P,z,j;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Select в объединённой ячейке',
  ...storySourceDoc({
    code: MERGED_SELECT_EDITING_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type SRow = {
      id: number;
      status: string;
      owner: string;
      priority: string;
      stage: string;
      task: string;
    };
    const STATUSES = ['В работе', 'Готово', 'Отменено', 'На паузе'];
    const OWNERS = ['Иванов', 'Петров', 'Сидоров'];
    const PRIORITIES = ['Высокий', 'Средний', 'Низкий'];
    // Неслитый Select (per-row) — для проверки обычных ячеек рядом со слитыми.
    const STAGES = ['Анализ', 'Разработка', 'Тест', 'Релиз'];
    // Блоки разной высоты: 4 строки, 3 строки, 2 строки. Все три select-колонки
    // слиты синхронно (одинаковые границы), чтобы сравнить выравнивание на разной
    // высоте блока.
    const initial: SRow[] = [{
      id: 1,
      status: 'В работе',
      owner: 'Иванов',
      priority: 'Высокий',
      stage: 'Анализ',
      task: 'Задача 1'
    },
    // prettier-ignore
    {
      id: 2,
      status: 'В работе',
      owner: 'Иванов',
      priority: 'Высокий',
      stage: 'Разработка',
      task: 'Задача 2'
    },
    // prettier-ignore
    {
      id: 3,
      status: 'В работе',
      owner: 'Иванов',
      priority: 'Высокий',
      stage: 'Тест',
      task: 'Задача 3'
    },
    // prettier-ignore
    {
      id: 4,
      status: 'В работе',
      owner: 'Иванов',
      priority: 'Высокий',
      stage: 'Релиз',
      task: 'Задача 4'
    },
    // prettier-ignore
    {
      id: 5,
      status: 'Готово',
      owner: 'Петров',
      priority: 'Средний',
      stage: 'Анализ',
      task: 'Задача 5'
    },
    // prettier-ignore
    {
      id: 6,
      status: 'Готово',
      owner: 'Петров',
      priority: 'Средний',
      stage: 'Разработка',
      task: 'Задача 6'
    },
    // prettier-ignore
    {
      id: 7,
      status: 'Готово',
      owner: 'Петров',
      priority: 'Средний',
      stage: 'Тест',
      task: 'Задача 7'
    },
    // prettier-ignore
    {
      id: 8,
      status: 'Отменено',
      owner: 'Сидоров',
      priority: 'Низкий',
      stage: 'Анализ',
      task: 'Задача 8'
    },
    // prettier-ignore
    {
      id: 9,
      status: 'Отменено',
      owner: 'Сидоров',
      priority: 'Низкий',
      stage: 'Релиз',
      task: 'Задача 9'
    } // prettier-ignore
    ];
    const [rows, setRows] = useState<SRow[]>(initial);
    const beforeEditRef = useRef(rows);
    const columns: readonly ColumnConfig<SRow>[] = [{
      key: 'status',
      name: 'Статус — низ/лево',
      width: 220,
      // Выравнивание контента блока: вертикаль низ, горизонталь лево.
      mergedCellsAlign: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: STATUSES.map(s => ({
            text: s,
            value: s
          }))
        }
      }
    }, {
      key: 'owner',
      name: 'Ответственный — низ/право',
      width: 220,
      mergedCellsAlign: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: OWNERS.map(s => ({
            text: s,
            value: s
          }))
        }
      }
    }, {
      key: 'priority',
      name: 'Приоритет — центр/центр',
      width: 200,
      mergedCellsAlign: {
        vertical: 'center',
        horizontal: 'center'
      },
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: PRIORITIES.map(s => ({
            text: s,
            value: s
          }))
        }
      }
    }, {
      key: 'stage',
      name: 'Этап (Select, НЕ слит)',
      width: 200,
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: STAGES.map(s => ({
            text: s,
            value: s
          }))
        }
      }
    }, {
      key: 'task',
      name: 'Задача (текст, не слит)',
      width: 180,
      editingCell: {
        component: 'inputString'
      }
    }];
    return <div>
        <StoryHint>
          Три select-колонки слиты, у каждой своё выравнивание: низ-лево,
          низ-право и центр. Кликни по блоку: редактор откроется у выровненного
          края, у нижних список раскрывается вверх. «Этап» и «Задача» не слиты —
          для сравнения.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '560px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['status', 'owner', 'priority']
        },
        cellsSelection: {
          mode: 'range-cell'
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          onEnableEditing: enable => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: disable => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: disable => {
            disable();
          }
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(j=(z=B.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var L,H,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'mergedCellsRegions: заголовки секций',
  ...storySourceDoc({
    code: COLSPAN_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type MRow = {
      id: number;
      kind: 'header' | 'data';
      label: string;
      a: string;
      b: string;
    };
    const initialRows: MRow[] = [];
    let id = 1;
    for (let s = 0; s < 3; s += 1) {
      // Правило блока: данные одинаковы во всех его ячейках. Блок показывает
      // свою левую верхнюю видимую ячейку, а после закрепления или перестановки
      // колонок ею может стать другая колонка — заголовок при этом останется
      // видимым.
      initialRows.push({
        id: id++,
        kind: 'header',
        label: \`Секция \${s + 1}\`,
        a: \`Секция \${s + 1}\`,
        b: \`Секция \${s + 1}\`
      });
      for (let r = 0; r < 3; r += 1) {
        initialRows.push({
          id: id++,
          kind: 'data',
          label: \`Строка \${r + 1}\`,
          a: \`A\${s}\${r}\`,
          b: \`B\${s}\${r}\`
        });
      }
    }
    const [rows, setRows] = useState<MRow[]>(initialRows);
    const beforeEditRef = useRef(rows);

    // Заголовки секций через controlled-список regions: каждая header-строка
    // сливает все 3 колонки (label, a, b). Строки находятся по id.
    const regions = useMemo(() => rows.filter(r => r.kind === 'header').map(r => ({
      rowKeys: [r.id],
      colKeys: ['label', 'a', 'b']
    })), [rows]);
    const columns: readonly ColumnConfig<MRow>[] = [{
      key: 'label',
      name: 'Заголовок / Строка',
      width: 220,
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container padding={8} alignItems="center">
            <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
          </Canvas.Container>,
      // У canvas-колонок превью по умолчанию выключено — включаем явно.
      renderCellPreview: 'cellEditorAsPreview'
    }, {
      key: 'a',
      name: 'A',
      width: 200,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'b',
      name: 'B',
      width: 200,
      editingCell: {
        component: 'inputString'
      }
    }];
    return <div>
        <StoryHint>
          Строки-заголовки секций слиты на всю ширину списком регионов. Обычные
          строки редактируются как всегда; правка заголовка меняет всю его
          строку.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: r => r.id
        },
        cellsSelection: {
          mode: 'range-cell',
          enableColumnSelection: true
        },
        cellTransfer: {
          fillHandle: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          onEnableEditing: enable => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: disable => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: disable => {
            disable();
          }
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var U,Q,Y;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'mergedCellsRegions: прямоугольный блок',
  ...storySourceDoc({
    code: RECTANGULAR_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type MRow = {
      id: number;
      a: string;
      b: string;
      c: string;
      d: string;
    };
    const initialRows: MRow[] = Array.from({
      length: 10
    }, (_, i) => ({
      id: i + 1,
      a: \`A·\${i}\`,
      b: \`B·\${i}\`,
      c: \`C·\${i}\`,
      d: \`D·\${i}\`
    }));
    const [rows, setRows] = useState<MRow[]>(initialRows);
    // Снимок «сохранённого» состояния: отмена = потребитель откатывает свой стейт.
    const savedRef = useRef<MRow[]>(initialRows);

    // Блок 2×3: колонки A,B × строки 2..4 (rowInd 1..3, id 2..4). Задаётся
    // controlled-списком mergeCells.mergedCellsRegions (id строк + ключи колонок).
    const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;
    const regions = [{
      rowKeys: [2, 3, 4],
      colKeys: ['a', 'b']
    }];
    const columns: readonly ColumnConfig<MRow>[] = [{
      key: 'a',
      name: 'A (значение блока)',
      width: 160,
      editingCell: {
        component: 'inputString'
      },
      renderCell: ({
        row,
        rowInd,
        theme
      }) => <Canvas.Container padding={8} alignItems="center" justifyContent={inBlock(rowInd) ? 'center' : 'flex-start'}>
            <Canvas.Text color={theme.textDark}>
              {inBlock(rowInd) ? 'Блок 2×3' : row.a}
            </Canvas.Text>
          </Canvas.Container>,
      // У canvas-колонок превью по умолчанию выключено — включаем явно.
      renderCellPreview: 'cellEditorAsPreview'
    }, {
      key: 'b',
      name: 'B',
      width: 160,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'c',
      name: 'C',
      width: 160,
      editingCell: {
        component: 'inputString'
      }
    }, {
      key: 'd',
      name: 'D',
      width: 160,
      editingCell: {
        component: 'inputString'
      }
    }];
    return <div>
        <StoryHint>
          Блок два на три задан регионом: ключи строк и ключи колонок. Кликни —
          выделится целиком; стрелки перепрыгивают блок; правка пишет во весь
          блок.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: r => r.id
        },
        cellsSelection: {
          mode: 'range-cell',
          enableColumnSelection: true
        },
        cellTransfer: {
          fillHandle: true
        },
        editing: {
          onRowsChange: setRows,
          rowKeyGetter: r => \`\${r.id}\`,
          // Отмена/сохранение данных — на стороне потребителя: снимок при
          // входе, восстановление по «Отменить», фиксация по «Сохранить».
          onEnableEditing: enable => {
            savedRef.current = rows;
            enable();
          },
          onCancel: disable => {
            setRows(savedRef.current);
            disable();
          },
          onSave: disable => {
            savedRef.current = rows;
            disable();
          }
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(Y=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var J,Z,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'mergedCellsRegions: управление кнопками',
  ...storySourceDoc({
    code: CONTROLLED_SPANS_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type CRow = {
      id: number;
      dept: string;
      role: string;
      person: string;
      plan: number;
    };
    const GROUPS = [{
      dept: 'Отдел A',
      role: 'Аналитик',
      ids: [1, 2, 3]
    }, {
      dept: 'Отдел B',
      role: 'Разработчик',
      ids: [4, 5, 6]
    }, {
      dept: 'Отдел C',
      role: 'Тестировщик',
      ids: [7, 8, 9, 10]
    }];
    const rows: CRow[] = [];
    for (const g of GROUPS) {
      for (const id of g.ids) {
        rows.push({
          id,
          dept: g.dept,
          role: g.role,
          person: \`Сотрудник \${id}\`,
          plan: (11 - id) * 5
        });
      }
    }
    const [regions, setRegions] = useState<MergedCellsRegion[]>([{
      rowKeys: [1, 2, 3],
      colKeys: ['dept']
    }]);
    const [sort, setSort] = useState<readonly SortColumn[]>([]);
    const keyOf = (r: MergedCellsRegion) => JSON.stringify(r);
    const toggle = (r: MergedCellsRegion) => setRegions(prev => prev.some(s => keyOf(s) === keyOf(r)) ? prev.filter(s => keyOf(s) !== keyOf(r)) : [...prev, r]);
    const columns: readonly ColumnConfig<CRow>[] = [{
      key: 'dept',
      name: 'Отдел',
      width: 180,
      sortingType: 'stringSort'
    }, {
      key: 'role',
      name: 'Роль',
      width: 180,
      sortingType: 'stringSort'
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 180
    }, {
      key: 'plan',
      name: 'План',
      width: 110,
      sortingType: 'numberSort'
    }];
    return <div>
        <StoryHint>
          Объединениями управляют кнопки: список блоков хранится у потребителя.
          Отсортируй по «План» — блок с разъехавшимися строками перестанет
          рисоваться; сними сортировку — вернётся. Скрытие и перестановку
          колонок блоки переживают.
        </StoryHint>
        <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 8,
        flexWrap: 'wrap'
      }}>
          <Button view="secondary" size="s" onClick={() => toggle({
          rowKeys: [1, 2, 3],
          colKeys: ['dept']
        })}>
            Слить 1-3 (Отдел)
          </Button>
          <Button view="secondary" size="s" onClick={() => toggle({
          rowKeys: [4, 5, 6],
          colKeys: ['dept']
        })}>
            Слить 4-6 (Отдел)
          </Button>
          <Button view="secondary" size="s" onClick={() => toggle({
          rowKeys: [1, 2, 3],
          colKeys: ['dept', 'role'],
          mergedCellsAlign: {
            horizontal: 'center',
            vertical: 'center'
          }
        })}>
            Прямоугольник 1-3 × Отдел+Роль (центр)
          </Button>
          <Button view="secondary" size="s" onClick={() => setRegions([])}>
            Очистить
          </Button>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        sorting: {
          state: [sort, setSort]
        },
        mergeCells: {
          mergedCellsRegions: regions,
          rowKeyGetter: r => r.id
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(X=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var q,ee,ue;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Форматирование и свой рендер в блоке',
  ...storySourceDoc({
    code: FORMAT_IN_BLOCK_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    type FRow = {
      id: number;
      dept: string;
      role: string;
      person: string;
      plan: number;
      fact: number;
    };
    const rows = useMemo(() => {
      const depts = [{
        dept: 'Отдел A',
        roles: ['Аналитик', 'Разработчик']
      }, {
        dept: 'Отдел B',
        roles: ['Разработчик', 'Тестировщик']
      }, {
        dept: 'Отдел C',
        roles: ['Менеджер', 'Аналитик']
      }];
      const out: FRow[] = [];
      let rowId = 1;
      for (const d of depts) {
        for (const role of d.roles) {
          for (let i = 0; i < 2; i += 1) {
            out.push({
              id: rowId,
              dept: d.dept,
              role,
              person: \`Сотрудник \${rowId}\`,
              plan: rowId % 7 * 1000 + 500.5,
              fact: rowId % 5 * 900 + 250.25
            });
            rowId += 1;
          }
        }
      }
      return out;
    }, []);
    const [regions, setRegions] = useState<MergedCellsRegion[]>([{
      rowKeys: [1, 2],
      colKeys: ['plan', 'fact']
    }]);
    const columns: readonly ColumnConfig<FRow>[] = [{
      key: 'dept',
      name: 'Отдел (слит)',
      width: 160
    }, {
      key: 'role',
      name: 'Роль (свой рендер)',
      width: 200,
      // Свой canvas-рендер: в блоке рисуется верхняя-левая ячейка, контент
      // растягивается на весь прямоугольник блока.
      renderCell: ({
        row
      }) => <Canvas.Container padding={8} alignItems="center" justifyContent="center">
            <Canvas.Badge text={row.role} />
          </Canvas.Container>,
      copyData: row => row.role,
      // У колонок со своим рендером предпросмотр по умолчанию выключен.
      renderCellPreview: 'cellEditorAsPreview'
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 170
    }, {
      key: 'plan',
      name: 'План (число, вправо)',
      width: 170,
      contentFormat: {
        type: 'number',
        minimumFractionDigits: 2,
        alignContent: 'right'
      }
    }, {
      key: 'fact',
      name: 'Факт (свой формат)',
      width: 170,
      contentFormat: {
        customFormat: v => \`\${v} ₽\`
      }
    }];
    return <div>
        <StoryHint>
          Блок показывает свою первую ячейку: у «Роли» — свой рендер (бейдж), у
          «Плана» — числовой формат. Слей «План+Факт» кнопкой: блок возьмёт
          значение и формат «Плана», формат «Факта» не участвует.
        </StoryHint>
        <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 8
      }}>
          <Button view="secondary" size="s" onClick={() => setRegions([{
          rowKeys: [1, 2],
          colKeys: ['plan', 'fact']
        }])}>
            Слить План+Факт (строки 1-2)
          </Button>
          <Button view="secondary" size="s" onClick={() => setRegions([])}>
            Очистить
          </Button>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        columnsControl: {
          enable: true
        },
        rowSize: {
          default: 'medium',
          showInControl: true
        },
        fullScreenEnabled: true,
        mergeCells: {
          mergeByCellValues: ['dept',
          // Составной ключ: «Разработчик» из разных отделов не сольётся
          // в один блок, слияние обрывается на границе отдела.
          {
            colKey: 'role',
            value: r => \`\${r.dept}:\${r.role}\`
          }],
          mergedCellsRegions: regions,
          rowKeyGetter: r => r.id
        }
      }} columnConfig={columns} rows={rows} />
      </div>;
  }
}`,...(ue=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ue.source}}};var ne,te,oe;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'getRowSpan: ленивые блоки на 100 000 строк',
  ...storySourceDoc({
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const rows = useMemo<LazyRow[]>(() => Array.from({
      length: LAZY_ROWS_COUNT
    }, (_, index) => ({
      id: index,
      region: \`Регион \${Math.floor(index / REGION_BLOCK) + 1}\`,
      team: \`Команда \${Math.floor(index / TEAM_BLOCK) % 20 + 1}\`,
      person: \`Сотрудник \${index + 1}\`,
      plan: 100 + index * 37 % 900
    })), []);
    const columnConfig = useMemo<readonly ColumnConfig<LazyRow>[]>(() => [{
      key: 'region',
      name: 'Регион (getRowSpan ×1000)',
      width: 220
    }, {
      key: 'team',
      name: 'Команда (getRowSpan ×50)',
      width: 220
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 200
    }, {
      key: 'plan',
      name: 'План',
      width: 120,
      contentFormat: 'number'
    }], []);
    return <div>
        <StoryHint>
          <code>mergeCells.getRowSpan(colKey, rowInd)</code> возвращает первую и
          последнюю строку блока ячейки или <code>null</code>. Таблица вызывает
          его только для видимых ячеек, поэтому способ подходит для больших и
          ленивых данных, где обход всех строк (<code>mergeByCellValues</code>)
          дорог. Здесь блоки считаются по номеру строки: регион — по 1000 строк,
          команда — по 50. Резолвер должен быть стабильной функцией.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        rowMarkers: {
          startIndex: 1
        },
        mergeCells: {
          getRowSpan: getLazyRowSpan,
          // Блоки длинные: подпись наверху блока, а не в его середине.
          mergedCellsAlign: {
            vertical: 'top'
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(oe=(te=R.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ve=["RowSpanBasic","DerivedGroupingSortFilter","SpanByWithEditing","MergedSelectEditing","Colspan","Rectangular","ControlledSpans","FormatInBlock","GetRowSpanLazy"],Re=Object.freeze(Object.defineProperty({__proto__:null,Colspan:h,ControlledSpans:k,DerivedGroupingSortFilter:v,FormatInBlock:A,GetRowSpanLazy:R,MergedSelectEditing:B,Rectangular:D,RowSpanBasic:y,SpanByWithEditing:S,__namedExportsOrder:ve,default:ae},Symbol.toStringTag,{value:"Module"}));export{Re as C};
