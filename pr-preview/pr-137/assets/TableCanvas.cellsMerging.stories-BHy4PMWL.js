import{r as c,d as u}from"./react-D2T61mpp.js";import we from"./DocStoryTemplate-Cq0URnfA.js";import{S as C}from"./StoryHint-D7Z2UPWM.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as E,C as m}from"./TableCanvas-CmZs2eF4.js";import{t as w,a3 as F}from"./@salutejs/sdds-finai-BwLjIrVs.js";const ye={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{page:we}}},fe=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],ve=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],Se=`
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
`,f={name:"mergeByCellValues: объединение по значению",...p({code:Se,type:"code",previewSource:"shown"}),render:()=>{const s=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],n=["Q1","Q2","Q3"],t=[];let a=1;for(const g of s)for(const N of n)t.push({id:a,role:g.role,dept:g.dept,period:N,plan:a*10,fact:a*8}),a+=1;const[i,r]=c.useState(t),o=c.useRef(i),[e,d]=c.useState("range-cell"),[l,b]=c.useState("disabled"),y=c.useMemo(()=>[{key:"role",name:"Роль (merge ×3)",width:220},{key:"dept",name:"Отдел (custom + merge ×3)",width:220,renderCell:({row:g,theme:N})=>u.jsxDEV(m.Container,{padding:8,alignItems:"center",justifyContent:"center",children:u.jsxDEV(m.Text,{color:N.textDark,children:g.dept},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:264,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:259,columnNumber:13},void 0),copyData:g=>g.dept,renderCellPreview:"cellEditorAsPreview"},{key:"period",name:"Период",width:120,editingCell:{component:"inputString"}},{key:"plan",name:"План",width:120,editingCell:{component:"inputNumber"}},{key:"fact",name:"Факт",width:120,editingCell:{component:"inputNumber"}}],[]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",gap:16,marginBottom:12},children:[u.jsxDEV(F,{target:"textfield-like",label:"Режим выделения",value:e,onChange:g=>d(g),items:fe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:296,columnNumber:11},void 0),u.jsxDEV(F,{target:"textfield-like",label:"Highlight active",value:l,onChange:g=>b(g),items:ve},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:303,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:295,columnNumber:9},void 0),u.jsxDEV(C,{children:"«Роль» и «Отдел» слиты блоками по три строки: значения в этих строках действительно одинаковые, объединение просто показывает их одной ячейкой. Остальные колонки обычные."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:312,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:l,rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},cellsSelection:{mode:e,enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:r,rowKeyGetter:g=>`${g.id}`,onEnableEditing:g=>{o.current=i,g()},onCancel:g=>{r(o.current),g()},onSave:g=>{g()}},resizableColumn:!0},columnConfig:y,rows:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:318,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:294,columnNumber:7},void 0)}},he=`
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
`,v={name:"mergeByCellValues: сортировка и фильтр",...p({code:he,type:"code",previewSource:"shown"}),render:()=>{const s=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],n=[];let t=1;for(const o of s)for(let e=0;e<3;e+=1)n.push({id:t,role:o.role,dept:o.dept,person:`Сотрудник ${t}`,plan:(13-t)*5}),t+=1;const a=c.useState([]),i=c.useState({role:"Все"}),r=[{key:"role",name:"Роль (mergeByCellValues)",width:260,sortingType:"stringSort",filtering:{component:"select",keyInFilterState:"role",valueInRow:o=>o.role,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},...s.map(o=>({value:o.role,text:o.role}))]},filter:{typeOfValue:"single",filteringType:(o,e)=>o==="Все"||e===o}}},{key:"dept",name:"Отдел (mergeByCellValues)",width:260,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Таблица сама сливает соседние одинаковые значения. Отсортируй по «Роль» — блоки соберутся, по «План» — распадутся; фильтр в шапке «Роли» тоже пересобирает блоки."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:534,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},sorting:{state:a},filtering:{state:i,filtersInfo:{role:{label:"Роль",clearedValue:"Все"}}}},columnConfig:r,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:539,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:533,columnNumber:7},void 0)}},Be=`
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
`,S={name:"mergeByCellValues: редактирование",...p({code:Be,type:"code",previewSource:"shown"}),render:()=>{const s=["Север","Юг","Запад","Восток","Центр","Урал"],n=[];let t=1;for(const e of s)for(let d=0;d<4;d+=1)n.push({id:t,region:e,team:`Команда ${Math.floor(d/2)+1}`,person:`Сотрудник ${t}`}),t+=1;const[a,i]=c.useState(n),r=c.useRef(a),o=[{key:"region",name:"Регион (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"team",name:"Команда (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"person",name:"Сотрудник",width:220,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Правка пересобирает блоки: измени «Регион» у блока, и он разъедется или сольётся с соседним. В данных значения просто повторяются, объединение — только способ показа."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:698,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["region","team"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:i,rowKeyGetter:e=>`${e.id}`,onEnableEditing:e=>{r.current=a,e()},onCancel:e=>{i(r.current),e()},onSave:e=>{e()}}},columnConfig:o,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:703,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:697,columnNumber:7},void 0)}},ke=`
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
`,h={name:"Select в объединённой ячейке",...p({code:ke,type:"code",previewSource:"shown"}),render:()=>{const s=["В работе","Готово","Отменено","На паузе"],n=["Иванов","Петров","Сидоров"],t=["Высокий","Средний","Низкий"],a=["Анализ","Разработка","Тест","Релиз"],i=[{id:1,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Анализ",task:"Задача 1"},{id:2,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Разработка",task:"Задача 2"},{id:3,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Тест",task:"Задача 3"},{id:4,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Релиз",task:"Задача 4"},{id:5,status:"Готово",owner:"Петров",priority:"Средний",stage:"Анализ",task:"Задача 5"},{id:6,status:"Готово",owner:"Петров",priority:"Средний",stage:"Разработка",task:"Задача 6"},{id:7,status:"Готово",owner:"Петров",priority:"Средний",stage:"Тест",task:"Задача 7"},{id:8,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Анализ",task:"Задача 8"},{id:9,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Релиз",task:"Задача 9"}],[r,o]=c.useState(i),e=c.useRef(r),d=[{key:"status",name:"Статус — низ/лево",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:s.map(l=>({text:l,value:l}))}}},{key:"owner",name:"Ответственный — низ/право",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"right"},editingCell:{component:"select",options:{type:"constant",options:n.map(l=>({text:l,value:l}))}}},{key:"priority",name:"Приоритет — центр/центр",width:200,mergedCellsAlign:{vertical:"center",horizontal:"center"},editingCell:{component:"select",options:{type:"constant",options:t.map(l=>({text:l,value:l}))}}},{key:"stage",name:"Этап (Select, НЕ слит)",width:200,editingCell:{component:"select",options:{type:"constant",options:a.map(l=>({text:l,value:l}))}}},{key:"task",name:"Задача (текст, не слит)",width:180,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Три select-колонки слиты, у каждой своё выравнивание: низ-лево, низ-право и центр. Кликни по блоку: редактор откроется там же, где подпись. У нижних список раскроется вверх, если над подписью хватает места, иначе вниз. «Этап» и «Задача» не слиты — для сравнения."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:974,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"560px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["status","owner","priority"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:o,rowKeyGetter:l=>`${l.id}`,onEnableEditing:l=>{e.current=r,l()},onCancel:l=>{o(e.current),l()},onSave:l=>{l()}}},columnConfig:d,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:980,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:973,columnNumber:7},void 0)}},De=`
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
`,B={name:"mergedCellsRegions: заголовки секций",...p({code:De,type:"code",previewSource:"shown"}),render:()=>{const s=[];let n=1;for(let e=0;e<3;e+=1){s.push({id:n++,kind:"header",label:`Секция ${e+1}`,a:`Секция ${e+1}`,b:`Секция ${e+1}`});for(let d=0;d<3;d+=1)s.push({id:n++,kind:"data",label:`Строка ${d+1}`,a:`A${e}${d}`,b:`B${e}${d}`})}const[t,a]=c.useState(s),i=c.useRef(t),r=c.useMemo(()=>t.filter(e=>e.kind==="header").map(e=>({rowKeys:[e.id],colKeys:["label","a","b"]})),[t]),o=[{key:"label",name:"Заголовок / Строка",width:220,editingCell:{component:"inputString"},renderCell:({row:e,theme:d})=>u.jsxDEV(m.Container,{padding:8,alignItems:"center",children:u.jsxDEV(m.Text,{color:d.textDark,children:e.label},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1189,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1188,columnNumber:11},void 0),renderCellPreview:"cellEditorAsPreview"},{key:"a",name:"A",width:200,editingCell:{component:"inputString"}},{key:"b",name:"B",width:200,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Строки-заголовки секций слиты на всю ширину списком регионов. Обычные строки редактируются как всегда; правка заголовка меняет всю его строку."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1211,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:r,rowKeyGetter:e=>e.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:a,rowKeyGetter:e=>`${e.id}`,onEnableEditing:e=>{i.current=t,e()},onCancel:e=>{a(i.current),e()},onSave:e=>{e()}}},columnConfig:o,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1216,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1210,columnNumber:7},void 0)}},Te=`
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
`,k={name:"mergedCellsRegions: прямоугольный блок",...p({code:Te,type:"code",previewSource:"shown"}),render:()=>{const s=Array.from({length:10},(e,d)=>({id:d+1,a:`A·${d}`,b:`B·${d}`,c:`C·${d}`,d:`D·${d}`})),[n,t]=c.useState(s),a=c.useRef(s),i=e=>e>=1&&e<=3,r=[{rowKeys:[2,3,4],colKeys:["a","b"]}],o=[{key:"a",name:"A (значение блока)",width:160,editingCell:{component:"inputString"},renderCell:({row:e,rowInd:d,theme:l})=>u.jsxDEV(m.Container,{padding:8,alignItems:"center",justifyContent:i(d)?"center":"flex-start",children:u.jsxDEV(m.Text,{color:l.textDark,children:i(d)?"Блок 2×3":e.a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1385,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1380,columnNumber:11},void 0),renderCellPreview:"cellEditorAsPreview"},{key:"b",name:"B",width:160,editingCell:{component:"inputString"}},{key:"c",name:"C",width:160,editingCell:{component:"inputString"}},{key:"d",name:"D",width:160,editingCell:{component:"inputString"}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Блок два на три задан регионом: ключи строк и ключи колонок. Кликни — выделится целиком; стрелки перепрыгивают блок; правка пишет во весь блок."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1415,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:r,rowKeyGetter:e=>e.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:t,rowKeyGetter:e=>`${e.id}`,onEnableEditing:e=>{a.current=n,e()},onCancel:e=>{t(a.current),e()},onSave:e=>{a.current=n,e()}}},columnConfig:o,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1420,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1414,columnNumber:7},void 0)}},Ae=`
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
`,D={name:"mergedCellsRegions: управление кнопками",...p({code:Ae,type:"code",previewSource:"shown"}),render:()=>{const s=[{dept:"Отдел A",role:"Аналитик",ids:[1,2,3]},{dept:"Отдел B",role:"Разработчик",ids:[4,5,6]},{dept:"Отдел C",role:"Тестировщик",ids:[7,8,9,10]}],n=[];for(const l of s)for(const b of l.ids)n.push({id:b,dept:l.dept,role:l.role,person:`Сотрудник ${b}`,plan:(11-b)*5});const[t,a]=c.useState([{rowKeys:[1,2,3],colKeys:["dept"]}]),[i,r]=c.useState([]),o=l=>JSON.stringify(l),e=l=>a(b=>b.some(y=>o(y)===o(l))?b.filter(y=>o(y)!==o(l)):[...b,l]),d=[{key:"dept",name:"Отдел",width:180,sortingType:"stringSort"},{key:"role",name:"Роль",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:180},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Объединениями управляют кнопки: список блоков хранится у потребителя. Отсортируй по «План» — блок с разъехавшимися строками перестанет рисоваться; сними сортировку — вернётся. Скрытие и перестановку колонок блоки переживают."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1629,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:[u.jsxDEV(w,{view:"secondary",size:"s",onClick:()=>e({rowKeys:[1,2,3],colKeys:["dept"]}),children:"Слить 1-3 (Отдел)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1638,columnNumber:11},void 0),u.jsxDEV(w,{view:"secondary",size:"s",onClick:()=>e({rowKeys:[4,5,6],colKeys:["dept"]}),children:"Слить 4-6 (Отдел)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1645,columnNumber:11},void 0),u.jsxDEV(w,{view:"secondary",size:"s",onClick:()=>e({rowKeys:[1,2,3],colKeys:["dept","role"],mergedCellsAlign:{horizontal:"center",vertical:"center"}}),children:"Прямоугольник 1-3 × Отдел+Роль (центр)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1652,columnNumber:11},void 0),u.jsxDEV(w,{view:"secondary",size:"s",onClick:()=>a([]),children:"Очистить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1665,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1635,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,sorting:{state:[i,r]},mergeCells:{mergedCellsRegions:t,rowKeyGetter:l=>l.id}},columnConfig:d,rows:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1669,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1628,columnNumber:7},void 0)}},Re=`
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
`,T={name:"Форматирование и свой рендер в блоке",...p({code:Re,type:"code",previewSource:"shown"}),render:()=>{const s=c.useMemo(()=>{const i=[{dept:"Отдел A",roles:["Аналитик","Разработчик"]},{dept:"Отдел B",roles:["Разработчик","Тестировщик"]},{dept:"Отдел C",roles:["Менеджер","Аналитик"]}],r=[];let o=1;for(const e of i)for(const d of e.roles)for(let l=0;l<2;l+=1)r.push({id:o,dept:e.dept,role:d,person:`Сотрудник ${o}`,plan:o%7*1e3+500.5,fact:o%5*900+250.25}),o+=1;return r},[]),[n,t]=c.useState([{rowKeys:[1,2],colKeys:["plan","fact"]}]),a=[{key:"dept",name:"Отдел (слит)",width:160},{key:"role",name:"Роль (свой рендер)",width:200,renderCell:({row:i})=>u.jsxDEV(m.Container,{padding:8,alignItems:"center",justifyContent:"center",children:u.jsxDEV(m.Badge,{text:i.role},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1878,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1873,columnNumber:11},void 0),copyData:i=>i.role,renderCellPreview:"cellEditorAsPreview"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План (число, вправо)",width:170,contentFormat:{type:"number",minimumFractionDigits:2,alignContent:"right"}},{key:"fact",name:"Факт (свой формат)",width:170,contentFormat:{customFormat:i=>`${i} ₽`}}];return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:"Блок показывает свою первую ячейку: у «Роли» — свой рендер (бейдж), у «Плана» — числовой формат. Слей «План+Факт» кнопкой: блок возьмёт значение и формат «Плана», формат «Факта» не участвует."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1906,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:8},children:[u.jsxDEV(w,{view:"secondary",size:"s",onClick:()=>t([{rowKeys:[1,2],colKeys:["plan","fact"]}]),children:"Слить План+Факт (строки 1-2)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1912,columnNumber:11},void 0),u.jsxDEV(w,{view:"secondary",size:"s",onClick:()=>t([]),children:"Очистить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1921,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1911,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["dept",{colKey:"role",value:i=>`${i.dept}:${i.role}`}],mergedCellsRegions:n,rowKeyGetter:i=>i.id}},columnConfig:a,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1925,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:1905,columnNumber:7},void 0)}},Ce=1e5,pe=1e3,Ee=50,I=(s,n)=>{const t=Math.floor(s/n)*n;return[t,Math.min(t+n,Ce)-1]},xe=(s,n,t)=>n==="region"?I(t,pe):n==="team"?I(t,Ee):null,A={name:"lazyRowSpan: ленивые блоки на 100 000 строк",...p({type:"code",previewSource:"shown"}),render:()=>{const s=c.useMemo(()=>Array.from({length:Ce},(t,a)=>({id:a,region:`Регион ${Math.floor(a/pe)+1}`,team:`Команда ${Math.floor(a/Ee)%20+1}`,person:`Сотрудник ${a+1}`,plan:100+a*37%900})),[]),n=c.useMemo(()=>[{key:"region",name:"Регион (lazyRowSpan ×1000)",width:220},{key:"team",name:"Команда (lazyRowSpan ×50)",width:220},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number"}],[]);return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:[u.jsxDEV("code",{children:"mergeCells.lazyRowSpan(row, colKey, rowInd)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2005,columnNumber:11},void 0)," возвращает первую и последнюю строку блока ячейки или ",u.jsxDEV("code",{children:"null"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2006,columnNumber:54},void 0),". Таблица вызывает его только для видимых ячеек, поэтому способ подходит для больших и ленивых данных, где обход всех строк (",u.jsxDEV("code",{children:"mergeByCellValues"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2009,columnNumber:11},void 0),") дорог. Здесь блоки считаются по номеру строки: регион — по 1000 строк, команда — по 50. Резолвер должен быть стабильной функцией."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2004,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},mergeCells:{lazyRowSpan:xe,mergedCellsAlign:{vertical:"top"}}},columnConfig:n,rows:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2013,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2003,columnNumber:7},void 0)}},Ne=["Север","Север","Север","Юг","Юг","Запад","Запад","Запад","Восток"].map((s,n)=>({id:n,region:s,person:`Сотрудник ${n+1}`,plan:100+n*37%900})),Me=(s,n,t,{rows:a})=>{var o,e;if(n!=="region")return null;let i=t,r=t;for(;((o=a[i-1])==null?void 0:o.region)===s.region;)i-=1;for(;((e=a[r+1])==null?void 0:e.region)===s.region;)r+=1;return r>i?[i,r]:null},R={name:"lazyRowSpan по соседям: с сортировкой",...p({type:"code",previewSource:"shown"}),render:()=>{const s=c.useMemo(()=>[{key:"region",name:"Регион",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number",sortingType:"numberSort"}],[]),n=c.useState([{columnKey:"region",direction:"DESC"}]);return u.jsxDEV("div",{children:[u.jsxDEV(C,{children:["Первый аргумент ",u.jsxDEV("code",{children:"lazyRowSpan"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2095,columnNumber:27},void 0)," — строка ячейки, в"," ",u.jsxDEV("code",{children:"ctx.rows"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2096,columnNumber:11},void 0)," — отображаемые строки в порядке на экране. Блок считается по соседям с тем же регионом, поэтому остаётся верным после сортировки: нажмите на заголовок колонки."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2094,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"420px"},sorting:{state:n},mergeCells:{lazyRowSpan:Me}},columnConfig:s,rows:Ne},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2100,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2093,columnNumber:7},void 0)}},Fe=`
import { Button } from '@daisforge/ui';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
import { useMemo, useState } from 'react';

type StickyRow = {
  id: number;
  dept: string;
  deptCustom: string;
  team: string;
  person: string;
};
type StickySummaryRow = { values: Record<string, string> };
type StickyVertical = 'top' | 'center' | 'bottom';

const STICKY_DEPTS = ['Продажи', 'Разработка', 'Поддержка', 'Финансы'];
const STICKY_TEAMS = ['Север', 'Юг', 'Запад'];
const STICKY_ROWS: StickyRow[] = Array.from({ length: 60 }, (_, i) => {
  const dept = STICKY_DEPTS[Math.floor(i / 15)] ?? '';
  return {
    id: i + 1,
    dept,
    deptCustom: dept,
    team: STICKY_TEAMS[Math.floor(i / 5) % STICKY_TEAMS.length] ?? '',
    person: \`Сотрудник \${i + 1}\`,
  };
});
const STICKY_SUMMARY: StickySummaryRow[] = [
  { values: { person: \`Всего: \${STICKY_ROWS.length}\` } },
];
const STICKY_FLEX_BY_VERTICAL = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
} as const;
`,Ie=["Продажи","Разработка","Поддержка","Финансы"],M=["Север","Юг","Запад"],be=Array.from({length:60},(s,n)=>{const t=Ie[Math.floor(n/15)]??"";return{id:n+1,dept:t,deptCustom:t,team:M[Math.floor(n/5)%M.length]??"",person:`Сотрудник ${n+1}`}}),Oe=[{values:{person:`Всего: ${be.length}`}}],_e={top:"flex-start",center:"center",bottom:"flex-end"},x={name:"Прилипание подписи в высоком блоке",...p({preCode:Fe,type:"code",previewSource:"shown"}),decorators:[s=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(C,{children:"Прокрути таблицу: содержимое всех колонок держится в видимой части блока по выбранному выравниванию, у конца блока уезжает вместе с ним и не обрезается. Свой renderCell выравнивает содержимое сам, отступы берёт из theme. Клик по «Команде» открывает Select."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2198,columnNumber:9},void 0),u.jsxDEV(s,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2204,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2197,columnNumber:7},void 0)],render:()=>{const[s,n]=c.useState("top"),[t,a]=c.useState(be),i=c.useMemo(()=>[{key:"dept",name:"Отдел (текст)",width:160},{key:"team",name:"Команда (Select)",width:180,editingCell:{component:"select",options:{type:"constant",options:M.map(r=>({text:r,value:r}))}}},{key:"deptCustom",name:"Отдел (свой renderCell)",width:200,renderCell:({row:r,theme:o})=>u.jsxDEV(m.Container,{direction:"column",justifyContent:_e[s],alignItems:"flex-start",gap:4,padding:{top:o.cellVerticalPadding,bottom:o.cellVerticalPadding,left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:[u.jsxDEV(m.Text,{color:o.textDark,children:r.deptCustom},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2243,columnNumber:15},void 0),u.jsxDEV(m.Badge,{text:"Отдел",view:"accent",size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2244,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2231,columnNumber:13},void 0)},{key:"person",name:"Сотрудник",width:200,renderSummaryCell:({row:r})=>r.values.person??""}],[s]);return u.jsxDEV("div",{children:[u.jsxDEV("div",{style:{display:"flex",gap:8,marginBottom:12},children:["top","center","bottom"].map(r=>u.jsxDEV(w,{size:"s",view:s===r?"accent":"secondary",onClick:()=>n(r),children:r},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2262,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2260,columnNumber:9},void 0),u.jsxDEV(E,{tableConfig:{containerStyle:{height:"480px"},rowMarkers:{startIndex:1},hoverEffects:{row:!0},summaryRows:{showDefault:!0,showInControl:!1},editing:{onRowsChange:r=>a([...r]),rowKeyGetter:r=>r.id,defaultEnabled:!0},mergeCells:{mergeByCellValues:["dept","deptCustom","team"],mergedCellsAlign:{vertical:s}}},columnConfig:i,bottomSummaryRows:Oe,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2272,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMerging.stories.tsx",lineNumber:2259,columnNumber:7},void 0)}};var O,_,V;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var K,P,z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(P=v.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var $,G,j;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(j=(G=S.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var L,H,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          низ-право и центр. Кликни по блоку: редактор откроется там же, где
          подпись. У нижних список раскроется вверх, если над подписью хватает
          места, иначе вниз. «Этап» и «Задача» не слиты — для сравнения.
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
}`,...(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Y,U,Q;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(U=B.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var X,J,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var q,ee,ue;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(ue=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ue.source}}};var ne,te,oe;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=T.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,le;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'lazyRowSpan: ленивые блоки на 100 000 строк',
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
      name: 'Регион (lazyRowSpan ×1000)',
      width: 220
    }, {
      key: 'team',
      name: 'Команда (lazyRowSpan ×50)',
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
          <code>mergeCells.lazyRowSpan(row, colKey, rowInd)</code> возвращает
          первую и последнюю строку блока ячейки или <code>null</code>. Таблица
          вызывает его только для видимых ячеек, поэтому способ подходит для
          больших и ленивых данных, где обход всех строк (
          <code>mergeByCellValues</code>) дорог. Здесь блоки считаются по номеру
          строки: регион — по 1000 строк, команда — по 50. Резолвер должен быть
          стабильной функцией.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        rowMarkers: {
          startIndex: 1
        },
        mergeCells: {
          lazyRowSpan: getLazyRowSpan,
          // Блоки длинные: подпись наверху блока, а не в его середине.
          mergedCellsAlign: {
            vertical: 'top'
          }
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(le=(se=A.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,ae,de;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'lazyRowSpan по соседям: с сортировкой',
  ...storySourceDoc({
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<SortableRow>[]>(() => [{
      key: 'region',
      name: 'Регион',
      width: 180,
      sortingType: 'stringSort'
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 200
    }, {
      key: 'plan',
      name: 'План',
      width: 120,
      contentFormat: 'number',
      sortingType: 'numberSort'
    }], []);
    const sortingState = useState<readonly SortColumn[]>([{
      columnKey: 'region',
      direction: 'DESC'
    }]);
    return <div>
        <StoryHint>
          Первый аргумент <code>lazyRowSpan</code> — строка ячейки, в{' '}
          <code>ctx.rows</code> — отображаемые строки в порядке на экране. Блок
          считается по соседям с тем же регионом, поэтому остаётся верным после
          сортировки: нажмите на заголовок колонки.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '420px'
        },
        sorting: {
          state: sortingState
        },
        mergeCells: {
          lazyRowSpan: getRegionRowSpan
        }
      }} columnConfig={columnConfig} rows={SORTABLE_ROWS} />
      </div>;
  }
}`,...(de=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ce,ge,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Прилипание подписи в высоком блоке',
  ...storySourceDoc({
    preCode: STICKY_CONTENT_PRE_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  decorators: [Story => <>
        <StoryHint>
          Прокрути таблицу: содержимое всех колонок держится в видимой части
          блока по выбранному выравниванию, у конца блока уезжает вместе с ним и
          не обрезается. Свой renderCell выравнивает содержимое сам, отступы
          берёт из theme. Клик по «Команде» открывает Select.
        </StoryHint>
        <Story />
      </>],
  render: () => {
    const [vertical, setVertical] = useState<StickyVertical>('top');
    const [rows, setRows] = useState<StickyRow[]>(STICKY_ROWS);
    const columns = useMemo((): ColumnConfig<StickyRow, StickySummaryRow>[] => [{
      key: 'dept',
      name: 'Отдел (текст)',
      width: 160
    }, {
      key: 'team',
      name: 'Команда (Select)',
      width: 180,
      editingCell: {
        component: 'select',
        options: {
          type: 'constant',
          options: STICKY_TEAMS.map(t => ({
            text: t,
            value: t
          }))
        }
      }
    }, {
      key: 'deptCustom',
      name: 'Отдел (свой renderCell)',
      width: 200,
      renderCell: ({
        row,
        theme
      }) => <Canvas.Container direction="column" justifyContent={STICKY_FLEX_BY_VERTICAL[vertical]} alignItems="flex-start" gap={4} padding={{
        top: theme.cellVerticalPadding,
        bottom: theme.cellVerticalPadding,
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}>
              <Canvas.Text color={theme.textDark}>{row.deptCustom}</Canvas.Text>
              <Canvas.Badge text="Отдел" view="accent" size="s" />
            </Canvas.Container>
    }, {
      key: 'person',
      name: 'Сотрудник',
      width: 200,
      renderSummaryCell: ({
        row
      }) => row.values['person'] ?? ''
    }], [vertical]);
    return <div>
        <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 12
      }}>
          {(['top', 'center', 'bottom'] as const).map(v => <Button key={v} size="s" view={vertical === v ? 'accent' : 'secondary'} onClick={() => setVertical(v)}>
              {v}
            </Button>)}
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '480px'
        },
        rowMarkers: {
          startIndex: 1
        },
        hoverEffects: {
          row: true
        },
        summaryRows: {
          showDefault: true,
          showInControl: false
        },
        editing: {
          onRowsChange: (next: StickyRow[]) => setRows([...next]),
          rowKeyGetter: (r: StickyRow) => r.id,
          defaultEnabled: true
        },
        mergeCells: {
          mergeByCellValues: ['dept', 'deptCustom', 'team'],
          mergedCellsAlign: {
            vertical
          }
        }
      }} columnConfig={columns} bottomSummaryRows={STICKY_SUMMARY} rows={rows} />
      </div>;
  }
}`,...(me=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};const Ve=["RowSpanBasic","DerivedGroupingSortFilter","SpanByWithEditing","MergedSelectEditing","Colspan","Rectangular","ControlledSpans","FormatInBlock","LazyRowSpanBlocks","LazyRowSpanSorted","StickyContent"],Le=Object.freeze(Object.defineProperty({__proto__:null,Colspan:B,ControlledSpans:D,DerivedGroupingSortFilter:v,FormatInBlock:T,LazyRowSpanBlocks:A,LazyRowSpanSorted:R,MergedSelectEditing:h,Rectangular:k,RowSpanBasic:f,SpanByWithEditing:S,StickyContent:x,__namedExportsOrder:Ve,default:ye},Symbol.toStringTag,{value:"Module"}));export{Le as C};
