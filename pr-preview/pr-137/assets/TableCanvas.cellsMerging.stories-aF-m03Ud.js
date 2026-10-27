import{r as d,j as e}from"./react-CAOzMBF_.js";import l4 from"./DocStoryTemplate-Cf946dgV.js";import{S as C}from"./StoryHint-AurwRlnz.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{T as w,C as m}from"./TableCanvas-DlX-Wh2b.js";import{t as y,a3 as T}from"./@salutejs/sdds-finai-CKhMjg07.js";const s4={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{page:l4}}},i4=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],a4=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],d4=`
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
`,f={name:"mergeByCellValues: объединение по значению",...E({code:d4,type:"code",previewSource:"shown"}),render:()=>{const l=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],s=["Q1","Q2","Q3"],r=[];let a=1;for(const g of l)for(const k of s)r.push({id:a,role:g.role,dept:g.dept,period:k,plan:a*10,fact:a*8}),a+=1;const[n,c]=d.useState(r),o=d.useRef(n),[u,i]=d.useState("range-cell"),[t,p]=d.useState("disabled"),S=d.useMemo(()=>[{key:"role",name:"Роль (merge ×3)",width:220},{key:"dept",name:"Отдел (custom + merge ×3)",width:220,renderCell:({row:g,theme:k})=>e.jsx(m.Container,{padding:8,alignItems:"center",justifyContent:"center",children:e.jsx(m.Text,{color:k.textDark,children:g.dept})}),copyData:g=>g.dept,renderCellPreview:"cellEditorAsPreview"},{key:"period",name:"Период",width:120,editingCell:{component:"inputString"}},{key:"plan",name:"План",width:120,editingCell:{component:"inputNumber"}},{key:"fact",name:"Факт",width:120,editingCell:{component:"inputNumber"}}],[]);return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:16,marginBottom:12},children:[e.jsx(T,{target:"textfield-like",label:"Режим выделения",value:u,onChange:g=>i(g),items:i4}),e.jsx(T,{target:"textfield-like",label:"Highlight active",value:t,onChange:g=>p(g),items:a4})]}),e.jsx(C,{children:"«Роль» и «Отдел» слиты блоками по три строки: значения в этих строках действительно одинаковые, объединение просто показывает их одной ячейкой. Остальные колонки обычные."}),e.jsx(w,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:t,rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},cellsSelection:{mode:u,enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:c,rowKeyGetter:g=>`${g.id}`,onEnableEditing:g=>{o.current=n,g()},onCancel:g=>{c(o.current),g()},onSave:g=>{g()}},resizableColumn:!0},columnConfig:S,rows:n})]})}},c4=`
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
`,B={name:"mergeByCellValues: сортировка и фильтр",...E({code:c4,type:"code",previewSource:"shown"}),render:()=>{const l=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],s=[];let r=1;for(const o of l)for(let u=0;u<3;u+=1)s.push({id:r,role:o.role,dept:o.dept,person:`Сотрудник ${r}`,plan:(13-r)*5}),r+=1;const a=d.useState([]),n=d.useState({role:"Все"}),c=[{key:"role",name:"Роль (mergeByCellValues)",width:260,sortingType:"stringSort",filtering:{component:"select",keyInFilterState:"role",valueInRow:o=>o.role,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},...l.map(o=>({value:o.role,text:o.role}))]},filter:{typeOfValue:"single",filteringType:(o,u)=>o==="Все"||u===o}}},{key:"dept",name:"Отдел (mergeByCellValues)",width:260,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return e.jsxs("div",{children:[e.jsx(C,{children:"Таблица сама сливает соседние одинаковые значения. Отсортируй по «Роль» — блоки соберутся, по «План» — распадутся; фильтр в шапке «Роли» тоже пересобирает блоки."}),e.jsx(w,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},sorting:{state:a},filtering:{state:n,filtersInfo:{role:{label:"Роль",clearedValue:"Все"}}}},columnConfig:c,rows:s})]})}},g4=`
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
`,h={name:"mergeByCellValues: редактирование",...E({code:g4,type:"code",previewSource:"shown"}),render:()=>{const l=["Север","Юг","Запад","Восток","Центр","Урал"],s=[];let r=1;for(const u of l)for(let i=0;i<4;i+=1)s.push({id:r,region:u,team:`Команда ${Math.floor(i/2)+1}`,person:`Сотрудник ${r}`}),r+=1;const[a,n]=d.useState(s),c=d.useRef(a),o=[{key:"region",name:"Регион (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"team",name:"Команда (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"person",name:"Сотрудник",width:220,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(C,{children:"Правка пересобирает блоки: измени «Регион» у блока, и он разъедется или сольётся с соседним. В данных значения просто повторяются, объединение — только способ показа."}),e.jsx(w,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["region","team"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:n,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{c.current=a,u()},onCancel:u=>{n(c.current),u()},onSave:u=>{u()}}},columnConfig:o,rows:a})]})}},m4=`
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
`,A={name:"Select в объединённой ячейке",...E({code:m4,type:"code",previewSource:"shown"}),render:()=>{const l=["В работе","Готово","Отменено","На паузе"],s=["Иванов","Петров","Сидоров"],r=["Высокий","Средний","Низкий"],a=["Анализ","Разработка","Тест","Релиз"],n=[{id:1,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Анализ",task:"Задача 1"},{id:2,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Разработка",task:"Задача 2"},{id:3,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Тест",task:"Задача 3"},{id:4,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Релиз",task:"Задача 4"},{id:5,status:"Готово",owner:"Петров",priority:"Средний",stage:"Анализ",task:"Задача 5"},{id:6,status:"Готово",owner:"Петров",priority:"Средний",stage:"Разработка",task:"Задача 6"},{id:7,status:"Готово",owner:"Петров",priority:"Средний",stage:"Тест",task:"Задача 7"},{id:8,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Анализ",task:"Задача 8"},{id:9,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Релиз",task:"Задача 9"}],[c,o]=d.useState(n),u=d.useRef(c),i=[{key:"status",name:"Статус — низ/лево",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:l.map(t=>({text:t,value:t}))}}},{key:"owner",name:"Ответственный — низ/право",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"right"},editingCell:{component:"select",options:{type:"constant",options:s.map(t=>({text:t,value:t}))}}},{key:"priority",name:"Приоритет — центр/центр",width:200,mergedCellsAlign:{vertical:"center",horizontal:"center"},editingCell:{component:"select",options:{type:"constant",options:r.map(t=>({text:t,value:t}))}}},{key:"stage",name:"Этап (Select, НЕ слит)",width:200,editingCell:{component:"select",options:{type:"constant",options:a.map(t=>({text:t,value:t}))}}},{key:"task",name:"Задача (текст, не слит)",width:180,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(C,{children:"Три select-колонки слиты, у каждой своё выравнивание: низ-лево, низ-право и центр. Кликни по блоку: редактор откроется у выровненного края, у нижних список раскрывается вверх. «Этап» и «Задача» не слиты — для сравнения."}),e.jsx(w,{tableConfig:{containerStyle:{height:"560px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["status","owner","priority"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:o,rowKeyGetter:t=>`${t.id}`,onEnableEditing:t=>{u.current=c,t()},onCancel:t=>{o(u.current),t()},onSave:t=>{t()}}},columnConfig:i,rows:c})]})}},p4=`
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
`,b={name:"mergedCellsRegions: заголовки секций",...E({code:p4,type:"code",previewSource:"shown"}),render:()=>{const l=[];let s=1;for(let u=0;u<3;u+=1){l.push({id:s++,kind:"header",label:`Секция ${u+1}`,a:`Секция ${u+1}`,b:`Секция ${u+1}`});for(let i=0;i<3;i+=1)l.push({id:s++,kind:"data",label:`Строка ${i+1}`,a:`A${u}${i}`,b:`B${u}${i}`})}const[r,a]=d.useState(l),n=d.useRef(r),c=d.useMemo(()=>r.filter(u=>u.kind==="header").map(u=>({rowKeys:[u.id],colKeys:["label","a","b"]})),[r]),o=[{key:"label",name:"Заголовок / Строка",width:220,editingCell:{component:"inputString"},renderCell:({row:u,theme:i})=>e.jsx(m.Container,{padding:8,alignItems:"center",children:e.jsx(m.Text,{color:i.textDark,children:u.label})}),renderCellPreview:"cellEditorAsPreview"},{key:"a",name:"A",width:200,editingCell:{component:"inputString"}},{key:"b",name:"B",width:200,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(C,{children:"Строки-заголовки секций слиты на всю ширину списком регионов. Обычные строки редактируются как всегда; правка заголовка меняет всю его строку."}),e.jsx(w,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:c,rowKeyGetter:u=>u.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:a,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{n.current=r,u()},onCancel:u=>{a(n.current),u()},onSave:u=>{u()}}},columnConfig:o,rows:r})]})}},C4=`
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
`,v={name:"mergedCellsRegions: прямоугольный блок",...E({code:C4,type:"code",previewSource:"shown"}),render:()=>{const l=Array.from({length:10},(u,i)=>({id:i+1,a:`A·${i}`,b:`B·${i}`,c:`C·${i}`,d:`D·${i}`})),[s,r]=d.useState(l),a=d.useRef(l),n=u=>u>=1&&u<=3,c=[{rowKeys:[2,3,4],colKeys:["a","b"]}],o=[{key:"a",name:"A (значение блока)",width:160,editingCell:{component:"inputString"},renderCell:({row:u,rowInd:i,theme:t})=>e.jsx(m.Container,{padding:8,alignItems:"center",justifyContent:n(i)?"center":"flex-start",children:e.jsx(m.Text,{color:t.textDark,children:n(i)?"Блок 2×3":u.a})}),renderCellPreview:"cellEditorAsPreview"},{key:"b",name:"B",width:160,editingCell:{component:"inputString"}},{key:"c",name:"C",width:160,editingCell:{component:"inputString"}},{key:"d",name:"D",width:160,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(C,{children:"Блок два на три задан регионом: ключи строк и ключи колонок. Кликни — выделится целиком; стрелки перепрыгивают блок; правка пишет во весь блок."}),e.jsx(w,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:c,rowKeyGetter:u=>u.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:r,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{a.current=s,u()},onCancel:u=>{r(a.current),u()},onSave:u=>{a.current=s,u()}}},columnConfig:o,rows:s})]})}},E4=`
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
`,R={name:"mergedCellsRegions: управление кнопками",...E({code:E4,type:"code",previewSource:"shown"}),render:()=>{const l=[{dept:"Отдел A",role:"Аналитик",ids:[1,2,3]},{dept:"Отдел B",role:"Разработчик",ids:[4,5,6]},{dept:"Отдел C",role:"Тестировщик",ids:[7,8,9,10]}],s=[];for(const t of l)for(const p of t.ids)s.push({id:p,dept:t.dept,role:t.role,person:`Сотрудник ${p}`,plan:(11-p)*5});const[r,a]=d.useState([{rowKeys:[1,2,3],colKeys:["dept"]}]),[n,c]=d.useState([]),o=t=>JSON.stringify(t),u=t=>a(p=>p.some(S=>o(S)===o(t))?p.filter(S=>o(S)!==o(t)):[...p,t]),i=[{key:"dept",name:"Отдел",width:180,sortingType:"stringSort"},{key:"role",name:"Роль",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:180},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return e.jsxs("div",{children:[e.jsx(C,{children:"Объединениями управляют кнопки: список блоков хранится у потребителя. Отсортируй по «План» — блок с разъехавшимися строками перестанет рисоваться; сними сортировку — вернётся. Скрытие и перестановку колонок блоки переживают."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:[e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[1,2,3],colKeys:["dept"]}),children:"Слить 1-3 (Отдел)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[4,5,6],colKeys:["dept"]}),children:"Слить 4-6 (Отдел)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[1,2,3],colKeys:["dept","role"],mergedCellsAlign:{horizontal:"center",vertical:"center"}}),children:"Прямоугольник 1-3 × Отдел+Роль (центр)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>a([]),children:"Очистить"})]}),e.jsx(w,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,sorting:{state:[n,c]},mergeCells:{mergedCellsRegions:r,rowKeyGetter:t=>t.id}},columnConfig:i,rows:s})]})}},w4=`
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
`,D={name:"Форматирование и свой рендер в блоке",...E({code:w4,type:"code",previewSource:"shown"}),render:()=>{const l=d.useMemo(()=>{const n=[{dept:"Отдел A",roles:["Аналитик","Разработчик"]},{dept:"Отдел B",roles:["Разработчик","Тестировщик"]},{dept:"Отдел C",roles:["Менеджер","Аналитик"]}],c=[];let o=1;for(const u of n)for(const i of u.roles)for(let t=0;t<2;t+=1)c.push({id:o,dept:u.dept,role:i,person:`Сотрудник ${o}`,plan:o%7*1e3+500.5,fact:o%5*900+250.25}),o+=1;return c},[]),[s,r]=d.useState([{rowKeys:[1,2],colKeys:["plan","fact"]}]),a=[{key:"dept",name:"Отдел (слит)",width:160},{key:"role",name:"Роль (свой рендер)",width:200,renderCell:({row:n})=>e.jsx(m.Container,{padding:8,alignItems:"center",justifyContent:"center",children:e.jsx(m.Badge,{text:n.role})}),copyData:n=>n.role,renderCellPreview:"cellEditorAsPreview"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План (число, вправо)",width:170,contentFormat:{type:"number",minimumFractionDigits:2,alignContent:"right"}},{key:"fact",name:"Факт (свой формат)",width:170,contentFormat:{customFormat:n=>`${n} ₽`}}];return e.jsxs("div",{children:[e.jsx(C,{children:"Блок показывает свою первую ячейку: у «Роли» — свой рендер (бейдж), у «Плана» — числовой формат. Слей «План+Факт» кнопкой: блок возьмёт значение и формат «Плана», формат «Факта» не участвует."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[e.jsx(y,{view:"secondary",size:"s",onClick:()=>r([{rowKeys:[1,2],colKeys:["plan","fact"]}]),children:"Слить План+Факт (строки 1-2)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>r([]),children:"Очистить"})]}),e.jsx(w,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["dept",{colKey:"role",value:n=>`${n.dept}:${n.role}`}],mergedCellsRegions:s,rowKeyGetter:n=>n.id}},columnConfig:a,rows:l})]})}},y4=`
import { useMemo, useState } from 'react';
import { Button } from '@daisforge/ui';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

type Row = {
  id: number;
  dept: string;
  deptCustom: string;
  team: string;
  person: string;
};
type SummaryRow = { values: Record<string, string> };

// Отдел: блоки по 15 строк, команда: по 5 строк внутри отдела.
const DEPTS = ['Продажи', 'Разработка', 'Поддержка', 'Финансы'];
const TEAMS = ['Север', 'Юг', 'Запад'];
const ROWS: Row[] = Array.from({ length: 60 }, (_, i) => {
  const dept = DEPTS[Math.floor(i / 15)];
  return {
    id: i + 1,
    dept,
    deptCustom: dept,
    team: TEAMS[Math.floor(i / 5) % TEAMS.length],
    person: \`Сотрудник \${i + 1}\`,
  };
});
const SUMMARY: SummaryRow[] = [{ values: { person: \`Всего: \${ROWS.length}\` } }];

type Vertical = 'top' | 'center' | 'bottom';

export const Example = () => {
  const [vertical, setVertical] = useState<Vertical>('top');
  const [rows, setRows] = useState<Row[]>(ROWS);

  const columns = useMemo(
    (): ColumnConfig<Row, SummaryRow>[] => [
      { key: 'dept', name: 'Отдел (текст)', width: 160 },
      {
        key: 'team',
        name: 'Команда (Select)',
        width: 180,
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: TEAMS.map((t) => ({ text: t, value: t })),
          },
        },
      },
      {
        key: 'deptCustom',
        name: 'Отдел (свой renderCell)',
        width: 200,
        // Кастомная отрисовка получает весь блок: прилипания у неё нет.
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="flex-start">
            <Canvas.Text color={theme.textDark}>{row.deptCustom}</Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'person',
        name: 'Сотрудник',
        width: 200,
        renderSummaryCell: ({ row }) => row.values.person ?? '',
      },
    ],
    [],
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {(['top', 'center', 'bottom'] as const).map((v) => (
          <Button
            key={v}
            size="s"
            view={vertical === v ? 'accent' : 'secondary'}
            onClick={() => setVertical(v)}
          >
            {v}
          </Button>
        ))}
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '480px' },
          rowMarkers: { startIndex: 1 },
          hoverEffects: { row: true },
          summaryRows: { showDefault: true, showInControl: false },
          editing: {
            onRowsChange: (next: Row[]) => setRows([...next]),
            rowKeyGetter: (r: Row) => r.id,
            defaultEnabled: true,
          },
          mergeCells: {
            mergeByCellValues: ['dept', 'deptCustom', 'team'],
            mergedCellsAlign: { vertical },
          },
        }}
        columnConfig={columns}
        bottomSummaryRows={SUMMARY}
        rows={rows}
      />
    </div>
  );
};
`,S4=["Продажи","Разработка","Поддержка","Финансы"],I=["Север","Юг","Запад"],r4=Array.from({length:60},(l,s)=>{const r=S4[Math.floor(s/15)]??"";return{id:s+1,dept:r,deptCustom:r,team:I[Math.floor(s/5)%I.length]??"",person:`Сотрудник ${s+1}`}}),f4=[{values:{person:`Всего: ${r4.length}`}}],B4=[{key:"dept",name:"Отдел (текст)",width:160},{key:"team",name:"Команда (Select)",width:180,editingCell:{component:"select",options:{type:"constant",options:I.map(l=>({text:l,value:l}))}}},{key:"deptCustom",name:"Отдел (свой renderCell)",width:200,renderCell:({row:l,theme:s})=>e.jsx(m.Container,{padding:8,alignItems:"flex-start",children:e.jsx(m.Text,{color:s.textDark,children:l.deptCustom})})},{key:"person",name:"Сотрудник",width:200,renderSummaryCell:({row:l})=>l.values.person??""}],x={name:"Прилипание подписи в высоком блоке",...E({code:y4,type:"code",previewSource:"shown"}),render:()=>{const[l,s]=d.useState("top"),[r,a]=d.useState(r4);return e.jsxs("div",{children:[e.jsx(C,{children:"Прокрути таблицу: подпись «Отдела» и «Команды» держится в видимой части блока по выбранному выравниванию, у конца блока уезжает вместе с ним. Колонка со своим renderCell получает весь блок, её подпись уходит за край. Клик по «Команде» открывает Select."}),e.jsx("div",{style:{display:"flex",gap:8,marginBottom:12},children:["top","center","bottom"].map(n=>e.jsx(y,{size:"s",view:l===n?"accent":"secondary",onClick:()=>s(n),children:n},n))}),e.jsx(w,{tableConfig:{containerStyle:{height:"480px"},rowMarkers:{startIndex:1},hoverEffects:{row:!0},summaryRows:{showDefault:!0,showInControl:!1},editing:{onRowsChange:n=>a([...n]),rowKeyGetter:n=>n.id,defaultEnabled:!0},mergeCells:{mergeByCellValues:["dept","deptCustom","team"],mergedCellsAlign:{vertical:l}}},columnConfig:B4,bottomSummaryRows:f4,rows:r})]})}};var F,O,M;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(O=f.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var _,K,G;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(K=B.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var P,$,N;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=($=h.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var j,z,H;A.parameters={...A.parameters,docs:{...(j=A.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(z=A.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var V,L,W;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(L=b.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,Y,Q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var J,X,q;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(q=(X=R.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Z,u4,e4;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(e4=(u4=D.parameters)==null?void 0:u4.docs)==null?void 0:e4.source}}};var n4,t4,o4;x.parameters={...x.parameters,docs:{...(n4=x.parameters)==null?void 0:n4.docs,source:{originalSource:`{
  name: 'Прилипание подписи в высоком блоке',
  ...storySourceDoc({
    code: STICKY_CONTENT_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const [vertical, setVertical] = useState<StickyVertical>('top');
    const [rows, setRows] = useState<StickyRow[]>(STICKY_ROWS);
    return <div>
        <StoryHint>
          Прокрути таблицу: подпись «Отдела» и «Команды» держится в видимой
          части блока по выбранному выравниванию, у конца блока уезжает вместе с
          ним. Колонка со своим renderCell получает весь блок, её подпись уходит
          за край. Клик по «Команде» открывает Select.
        </StoryHint>
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
      }} columnConfig={STICKY_COLUMNS} bottomSummaryRows={STICKY_SUMMARY} rows={rows} />
      </div>;
  }
}`,...(o4=(t4=x.parameters)==null?void 0:t4.docs)==null?void 0:o4.source}}};const h4=["RowSpanBasic","DerivedGroupingSortFilter","SpanByWithEditing","MergedSelectEditing","Colspan","Rectangular","ControlledSpans","FormatInBlock","StickyContent"],k4=Object.freeze(Object.defineProperty({__proto__:null,Colspan:b,ControlledSpans:R,DerivedGroupingSortFilter:B,FormatInBlock:D,MergedSelectEditing:A,Rectangular:v,RowSpanBasic:f,SpanByWithEditing:h,StickyContent:x,__namedExportsOrder:h4,default:s4},Symbol.toStringTag,{value:"Module"}));export{k4 as C};
