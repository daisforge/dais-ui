import{r as c,j as e}from"./react-CAOzMBF_.js";import y4 from"./DocStoryTemplate-B68YIrJ_.js";import{S as p}from"./StoryHint-AurwRlnz.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{T as E,C as m}from"./TableCanvas-DKUbojT1.js";import{t as y,a3 as O}from"./@salutejs/sdds-finai-Yd8FRL4L.js";const S4={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{page:y4}}},f4=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],B4=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],h4=`
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
`,f={name:"mergeByCellValues: объединение по значению",...C({code:h4,type:"code",previewSource:"shown"}),render:()=>{const l=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],n=["Q1","Q2","Q3"],t=[];let a=1;for(const g of l)for(const F of n)t.push({id:a,role:g.role,dept:g.dept,period:F,plan:a*10,fact:a*8}),a+=1;const[i,r]=c.useState(t),o=c.useRef(i),[u,d]=c.useState("range-cell"),[s,w]=c.useState("disabled"),S=c.useMemo(()=>[{key:"role",name:"Роль (merge ×3)",width:220},{key:"dept",name:"Отдел (custom + merge ×3)",width:220,renderCell:({row:g,theme:F})=>e.jsx(m.Container,{padding:8,alignItems:"center",justifyContent:"center",children:e.jsx(m.Text,{color:F.textDark,children:g.dept})}),copyData:g=>g.dept,renderCellPreview:"cellEditorAsPreview"},{key:"period",name:"Период",width:120,editingCell:{component:"inputString"}},{key:"plan",name:"План",width:120,editingCell:{component:"inputNumber"}},{key:"fact",name:"Факт",width:120,editingCell:{component:"inputNumber"}}],[]);return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:16,marginBottom:12},children:[e.jsx(O,{target:"textfield-like",label:"Режим выделения",value:u,onChange:g=>d(g),items:f4}),e.jsx(O,{target:"textfield-like",label:"Highlight active",value:s,onChange:g=>w(g),items:B4})]}),e.jsx(p,{children:"«Роль» и «Отдел» слиты блоками по три строки: значения в этих строках действительно одинаковые, объединение просто показывает их одной ячейкой. Остальные колонки обычные."}),e.jsx(E,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:s,rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},cellsSelection:{mode:u,enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:r,rowKeyGetter:g=>`${g.id}`,onEnableEditing:g=>{o.current=i,g()},onCancel:g=>{r(o.current),g()},onSave:g=>{g()}},resizableColumn:!0},columnConfig:S,rows:i})]})}},A4=`
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
`,B={name:"mergeByCellValues: сортировка и фильтр",...C({code:A4,type:"code",previewSource:"shown"}),render:()=>{const l=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],n=[];let t=1;for(const o of l)for(let u=0;u<3;u+=1)n.push({id:t,role:o.role,dept:o.dept,person:`Сотрудник ${t}`,plan:(13-t)*5}),t+=1;const a=c.useState([]),i=c.useState({role:"Все"}),r=[{key:"role",name:"Роль (mergeByCellValues)",width:260,sortingType:"stringSort",filtering:{component:"select",keyInFilterState:"role",valueInRow:o=>o.role,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},...l.map(o=>({value:o.role,text:o.role}))]},filter:{typeOfValue:"single",filteringType:(o,u)=>o==="Все"||u===o}}},{key:"dept",name:"Отдел (mergeByCellValues)",width:260,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return e.jsxs("div",{children:[e.jsx(p,{children:"Таблица сама сливает соседние одинаковые значения. Отсортируй по «Роль» — блоки соберутся, по «План» — распадутся; фильтр в шапке «Роли» тоже пересобирает блоки."}),e.jsx(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},sorting:{state:a},filtering:{state:i,filtersInfo:{role:{label:"Роль",clearedValue:"Все"}}}},columnConfig:r,rows:n})]})}},b4=`
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
`,h={name:"mergeByCellValues: редактирование",...C({code:b4,type:"code",previewSource:"shown"}),render:()=>{const l=["Север","Юг","Запад","Восток","Центр","Урал"],n=[];let t=1;for(const u of l)for(let d=0;d<4;d+=1)n.push({id:t,region:u,team:`Команда ${Math.floor(d/2)+1}`,person:`Сотрудник ${t}`}),t+=1;const[a,i]=c.useState(n),r=c.useRef(a),o=[{key:"region",name:"Регион (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"team",name:"Команда (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"person",name:"Сотрудник",width:220,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(p,{children:"Правка пересобирает блоки: измени «Регион» у блока, и он разъедется или сольётся с соседним. В данных значения просто повторяются, объединение — только способ показа."}),e.jsx(E,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["region","team"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:i,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{r.current=a,u()},onCancel:u=>{i(r.current),u()},onSave:u=>{u()}}},columnConfig:o,rows:a})]})}},D4=`
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
`,A={name:"Select в объединённой ячейке",...C({code:D4,type:"code",previewSource:"shown"}),render:()=>{const l=["В работе","Готово","Отменено","На паузе"],n=["Иванов","Петров","Сидоров"],t=["Высокий","Средний","Низкий"],a=["Анализ","Разработка","Тест","Релиз"],i=[{id:1,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Анализ",task:"Задача 1"},{id:2,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Разработка",task:"Задача 2"},{id:3,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Тест",task:"Задача 3"},{id:4,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Релиз",task:"Задача 4"},{id:5,status:"Готово",owner:"Петров",priority:"Средний",stage:"Анализ",task:"Задача 5"},{id:6,status:"Готово",owner:"Петров",priority:"Средний",stage:"Разработка",task:"Задача 6"},{id:7,status:"Готово",owner:"Петров",priority:"Средний",stage:"Тест",task:"Задача 7"},{id:8,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Анализ",task:"Задача 8"},{id:9,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Релиз",task:"Задача 9"}],[r,o]=c.useState(i),u=c.useRef(r),d=[{key:"status",name:"Статус — низ/лево",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:l.map(s=>({text:s,value:s}))}}},{key:"owner",name:"Ответственный — низ/право",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"right"},editingCell:{component:"select",options:{type:"constant",options:n.map(s=>({text:s,value:s}))}}},{key:"priority",name:"Приоритет — центр/центр",width:200,mergedCellsAlign:{vertical:"center",horizontal:"center"},editingCell:{component:"select",options:{type:"constant",options:t.map(s=>({text:s,value:s}))}}},{key:"stage",name:"Этап (Select, НЕ слит)",width:200,editingCell:{component:"select",options:{type:"constant",options:a.map(s=>({text:s,value:s}))}}},{key:"task",name:"Задача (текст, не слит)",width:180,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(p,{children:"Три select-колонки слиты, у каждой своё выравнивание: низ-лево, низ-право и центр. Кликни по блоку: редактор откроется там же, где подпись. У нижних список раскроется вверх, если над подписью хватает места, иначе вниз. «Этап» и «Задача» не слиты — для сравнения."}),e.jsx(E,{tableConfig:{containerStyle:{height:"560px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["status","owner","priority"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:o,rowKeyGetter:s=>`${s.id}`,onEnableEditing:s=>{u.current=r,s()},onCancel:s=>{o(u.current),s()},onSave:s=>{s()}}},columnConfig:d,rows:r})]})}},R4=`
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
`,b={name:"mergedCellsRegions: заголовки секций",...C({code:R4,type:"code",previewSource:"shown"}),render:()=>{const l=[];let n=1;for(let u=0;u<3;u+=1){l.push({id:n++,kind:"header",label:`Секция ${u+1}`,a:`Секция ${u+1}`,b:`Секция ${u+1}`});for(let d=0;d<3;d+=1)l.push({id:n++,kind:"data",label:`Строка ${d+1}`,a:`A${u}${d}`,b:`B${u}${d}`})}const[t,a]=c.useState(l),i=c.useRef(t),r=c.useMemo(()=>t.filter(u=>u.kind==="header").map(u=>({rowKeys:[u.id],colKeys:["label","a","b"]})),[t]),o=[{key:"label",name:"Заголовок / Строка",width:220,editingCell:{component:"inputString"},renderCell:({row:u,theme:d})=>e.jsx(m.Container,{padding:8,alignItems:"center",children:e.jsx(m.Text,{color:d.textDark,children:u.label})}),renderCellPreview:"cellEditorAsPreview"},{key:"a",name:"A",width:200,editingCell:{component:"inputString"}},{key:"b",name:"B",width:200,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(p,{children:"Строки-заголовки секций слиты на всю ширину списком регионов. Обычные строки редактируются как всегда; правка заголовка меняет всю его строку."}),e.jsx(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:r,rowKeyGetter:u=>u.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:a,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{i.current=t,u()},onCancel:u=>{a(i.current),u()},onSave:u=>{u()}}},columnConfig:o,rows:t})]})}},v4=`
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
`,D={name:"mergedCellsRegions: прямоугольный блок",...C({code:v4,type:"code",previewSource:"shown"}),render:()=>{const l=Array.from({length:10},(u,d)=>({id:d+1,a:`A·${d}`,b:`B·${d}`,c:`C·${d}`,d:`D·${d}`})),[n,t]=c.useState(l),a=c.useRef(l),i=u=>u>=1&&u<=3,r=[{rowKeys:[2,3,4],colKeys:["a","b"]}],o=[{key:"a",name:"A (значение блока)",width:160,editingCell:{component:"inputString"},renderCell:({row:u,rowInd:d,theme:s})=>e.jsx(m.Container,{padding:8,alignItems:"center",justifyContent:i(d)?"center":"flex-start",children:e.jsx(m.Text,{color:s.textDark,children:i(d)?"Блок 2×3":u.a})}),renderCellPreview:"cellEditorAsPreview"},{key:"b",name:"B",width:160,editingCell:{component:"inputString"}},{key:"c",name:"C",width:160,editingCell:{component:"inputString"}},{key:"d",name:"D",width:160,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(p,{children:"Блок два на три задан регионом: ключи строк и ключи колонок. Кликни — выделится целиком; стрелки перепрыгивают блок; правка пишет во весь блок."}),e.jsx(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:r,rowKeyGetter:u=>u.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:t,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{a.current=n,u()},onCancel:u=>{t(a.current),u()},onSave:u=>{a.current=n,u()}}},columnConfig:o,rows:n})]})}},x4=`
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
`,R={name:"mergedCellsRegions: управление кнопками",...C({code:x4,type:"code",previewSource:"shown"}),render:()=>{const l=[{dept:"Отдел A",role:"Аналитик",ids:[1,2,3]},{dept:"Отдел B",role:"Разработчик",ids:[4,5,6]},{dept:"Отдел C",role:"Тестировщик",ids:[7,8,9,10]}],n=[];for(const s of l)for(const w of s.ids)n.push({id:w,dept:s.dept,role:s.role,person:`Сотрудник ${w}`,plan:(11-w)*5});const[t,a]=c.useState([{rowKeys:[1,2,3],colKeys:["dept"]}]),[i,r]=c.useState([]),o=s=>JSON.stringify(s),u=s=>a(w=>w.some(S=>o(S)===o(s))?w.filter(S=>o(S)!==o(s)):[...w,s]),d=[{key:"dept",name:"Отдел",width:180,sortingType:"stringSort"},{key:"role",name:"Роль",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:180},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return e.jsxs("div",{children:[e.jsx(p,{children:"Объединениями управляют кнопки: список блоков хранится у потребителя. Отсортируй по «План» — блок с разъехавшимися строками перестанет рисоваться; сними сортировку — вернётся. Скрытие и перестановку колонок блоки переживают."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:[e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[1,2,3],colKeys:["dept"]}),children:"Слить 1-3 (Отдел)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[4,5,6],colKeys:["dept"]}),children:"Слить 4-6 (Отдел)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[1,2,3],colKeys:["dept","role"],mergedCellsAlign:{horizontal:"center",vertical:"center"}}),children:"Прямоугольник 1-3 × Отдел+Роль (центр)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>a([]),children:"Очистить"})]}),e.jsx(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,sorting:{state:[i,r]},mergeCells:{mergedCellsRegions:t,rowKeyGetter:s=>s.id}},columnConfig:d,rows:n})]})}},k4=`
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
`,v={name:"Форматирование и свой рендер в блоке",...C({code:k4,type:"code",previewSource:"shown"}),render:()=>{const l=c.useMemo(()=>{const i=[{dept:"Отдел A",roles:["Аналитик","Разработчик"]},{dept:"Отдел B",roles:["Разработчик","Тестировщик"]},{dept:"Отдел C",roles:["Менеджер","Аналитик"]}],r=[];let o=1;for(const u of i)for(const d of u.roles)for(let s=0;s<2;s+=1)r.push({id:o,dept:u.dept,role:d,person:`Сотрудник ${o}`,plan:o%7*1e3+500.5,fact:o%5*900+250.25}),o+=1;return r},[]),[n,t]=c.useState([{rowKeys:[1,2],colKeys:["plan","fact"]}]),a=[{key:"dept",name:"Отдел (слит)",width:160},{key:"role",name:"Роль (свой рендер)",width:200,renderCell:({row:i})=>e.jsx(m.Container,{padding:8,alignItems:"center",justifyContent:"center",children:e.jsx(m.Badge,{text:i.role})}),copyData:i=>i.role,renderCellPreview:"cellEditorAsPreview"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План (число, вправо)",width:170,contentFormat:{type:"number",minimumFractionDigits:2,alignContent:"right"}},{key:"fact",name:"Факт (свой формат)",width:170,contentFormat:{customFormat:i=>`${i} ₽`}}];return e.jsxs("div",{children:[e.jsx(p,{children:"Блок показывает свою первую ячейку: у «Роли» — свой рендер (бейдж), у «Плана» — числовой формат. Слей «План+Факт» кнопкой: блок возьмёт значение и формат «Плана», формат «Факта» не участвует."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[e.jsx(y,{view:"secondary",size:"s",onClick:()=>t([{rowKeys:[1,2],colKeys:["plan","fact"]}]),children:"Слить План+Факт (строки 1-2)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>t([]),children:"Очистить"})]}),e.jsx(E,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["dept",{colKey:"role",value:i=>`${i.dept}:${i.role}`}],mergedCellsRegions:n,rowKeyGetter:i=>i.id}},columnConfig:a,rows:l})]})}},p4=1e5,C4=1e3,E4=50,M=(l,n)=>{const t=Math.floor(l/n)*n;return[t,Math.min(t+n,p4)-1]},T4=(l,n,t)=>n==="region"?M(t,C4):n==="team"?M(t,E4):null,x={name:"lazyRowSpan: ленивые блоки на 100 000 строк",...C({type:"code",previewSource:"shown"}),render:()=>{const l=c.useMemo(()=>Array.from({length:p4},(t,a)=>({id:a,region:`Регион ${Math.floor(a/C4)+1}`,team:`Команда ${Math.floor(a/E4)%20+1}`,person:`Сотрудник ${a+1}`,plan:100+a*37%900})),[]),n=c.useMemo(()=>[{key:"region",name:"Регион (lazyRowSpan ×1000)",width:220},{key:"team",name:"Команда (lazyRowSpan ×50)",width:220},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number"}],[]);return e.jsxs("div",{children:[e.jsxs(p,{children:[e.jsx("code",{children:"mergeCells.lazyRowSpan(row, colKey, rowInd)"})," возвращает первую и последнюю строку блока ячейки или ",e.jsx("code",{children:"null"}),". Таблица вызывает его только для видимых ячеек, поэтому способ подходит для больших и ленивых данных, где обход всех строк (",e.jsx("code",{children:"mergeByCellValues"}),") дорог. Здесь блоки считаются по номеру строки: регион — по 1000 строк, команда — по 50. Резолвер должен быть стабильной функцией."]}),e.jsx(E,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},mergeCells:{lazyRowSpan:T4,mergedCellsAlign:{vertical:"top"}}},columnConfig:n,rows:l})]})}},F4=["Север","Север","Север","Юг","Юг","Запад","Запад","Запад","Восток"].map((l,n)=>({id:n,region:l,person:`Сотрудник ${n+1}`,plan:100+n*37%900})),I4=(l,n,t,{rows:a})=>{var o,u;if(n!=="region")return null;let i=t,r=t;for(;((o=a[i-1])==null?void 0:o.region)===l.region;)i-=1;for(;((u=a[r+1])==null?void 0:u.region)===l.region;)r+=1;return r>i?[i,r]:null},k={name:"lazyRowSpan по соседям: с сортировкой",...C({type:"code",previewSource:"shown"}),render:()=>{const l=c.useMemo(()=>[{key:"region",name:"Регион",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number",sortingType:"numberSort"}],[]),n=c.useState([{columnKey:"region",direction:"DESC"}]);return e.jsxs("div",{children:[e.jsxs(p,{children:["Первый аргумент ",e.jsx("code",{children:"lazyRowSpan"})," — строка ячейки, в"," ",e.jsx("code",{children:"ctx.rows"})," — отображаемые строки в порядке на экране. Блок считается по соседям с тем же регионом, поэтому остаётся верным после сортировки: нажмите на заголовок колонки."]}),e.jsx(E,{tableConfig:{containerStyle:{height:"420px"},sorting:{state:n},mergeCells:{lazyRowSpan:I4}},columnConfig:l,rows:F4})]})}},O4=`
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
`,M4=["Продажи","Разработка","Поддержка","Финансы"],I=["Север","Юг","Запад"],w4=Array.from({length:60},(l,n)=>{const t=M4[Math.floor(n/15)]??"";return{id:n+1,dept:t,deptCustom:t,team:I[Math.floor(n/5)%I.length]??"",person:`Сотрудник ${n+1}`}}),_4=[{values:{person:`Всего: ${w4.length}`}}],K4={top:"flex-start",center:"center",bottom:"flex-end"},T={name:"Прилипание подписи в высоком блоке",...C({preCode:O4,type:"code",previewSource:"shown"}),decorators:[l=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Прокрути таблицу: содержимое всех колонок держится в видимой части блока по выбранному выравниванию, у конца блока уезжает вместе с ним и не обрезается. Свой renderCell выравнивает содержимое сам, отступы берёт из theme. Клик по «Команде» открывает Select."}),e.jsx(l,{})]})],render:()=>{const[l,n]=c.useState("top"),[t,a]=c.useState(w4),i=c.useMemo(()=>[{key:"dept",name:"Отдел (текст)",width:160},{key:"team",name:"Команда (Select)",width:180,editingCell:{component:"select",options:{type:"constant",options:I.map(r=>({text:r,value:r}))}}},{key:"deptCustom",name:"Отдел (свой renderCell)",width:200,renderCell:({row:r,theme:o})=>e.jsxs(m.Container,{direction:"column",justifyContent:K4[l],alignItems:"flex-start",gap:4,padding:{top:o.cellVerticalPadding,bottom:o.cellVerticalPadding,left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:[e.jsx(m.Text,{color:o.textDark,children:r.deptCustom}),e.jsx(m.Badge,{text:"Отдел",view:"accent",size:"s"})]})},{key:"person",name:"Сотрудник",width:200,renderSummaryCell:({row:r})=>r.values.person??""}],[l]);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",gap:8,marginBottom:12},children:["top","center","bottom"].map(r=>e.jsx(y,{size:"s",view:l===r?"accent":"secondary",onClick:()=>n(r),children:r},r))}),e.jsx(E,{tableConfig:{containerStyle:{height:"480px"},rowMarkers:{startIndex:1},hoverEffects:{row:!0},summaryRows:{showDefault:!0,showInControl:!1},editing:{onRowsChange:r=>a([...r]),rowKeyGetter:r=>r.id,defaultEnabled:!0},mergeCells:{mergeByCellValues:["dept","deptCustom","team"],mergedCellsAlign:{vertical:l}}},columnConfig:i,bottomSummaryRows:_4,rows:t})]})}};var _,K,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(K=f.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var z,$,G;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=($=B.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var j,N,L;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(N=h.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var H,V,W;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(V=A.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,U,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var X,J,Z;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var q,u4,e4;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(e4=(u4=R.parameters)==null?void 0:u4.docs)==null?void 0:e4.source}}};var n4,t4,o4;v.parameters={...v.parameters,docs:{...(n4=v.parameters)==null?void 0:n4.docs,source:{originalSource:`{
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
}`,...(o4=(t4=v.parameters)==null?void 0:t4.docs)==null?void 0:o4.source}}};var r4,l4,s4;x.parameters={...x.parameters,docs:{...(r4=x.parameters)==null?void 0:r4.docs,source:{originalSource:`{
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
}`,...(s4=(l4=x.parameters)==null?void 0:l4.docs)==null?void 0:s4.source}}};var i4,a4,d4;k.parameters={...k.parameters,docs:{...(i4=k.parameters)==null?void 0:i4.docs,source:{originalSource:`{
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
}`,...(d4=(a4=k.parameters)==null?void 0:a4.docs)==null?void 0:d4.source}}};var c4,g4,m4;T.parameters={...T.parameters,docs:{...(c4=T.parameters)==null?void 0:c4.docs,source:{originalSource:`{
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
}`,...(m4=(g4=T.parameters)==null?void 0:g4.docs)==null?void 0:m4.source}}};const P4=["RowSpanBasic","DerivedGroupingSortFilter","SpanByWithEditing","MergedSelectEditing","Colspan","Rectangular","ControlledSpans","FormatInBlock","LazyRowSpanBlocks","LazyRowSpanSorted","StickyContent"],H4=Object.freeze(Object.defineProperty({__proto__:null,Colspan:b,ControlledSpans:R,DerivedGroupingSortFilter:B,FormatInBlock:v,LazyRowSpanBlocks:x,LazyRowSpanSorted:k,MergedSelectEditing:A,Rectangular:D,RowSpanBasic:f,SpanByWithEditing:h,StickyContent:T,__namedExportsOrder:P4,default:S4},Symbol.toStringTag,{value:"Module"}));export{H4 as C};
