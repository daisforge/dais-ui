import{r as d,j as e}from"./react-CAOzMBF_.js";import y4 from"./DocStoryTemplate-Cf946dgV.js";import{S as m}from"./StoryHint-AurwRlnz.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as C,C as E}from"./TableCanvas-CXslNPgb.js";import{t as y,a3 as O}from"./@salutejs/sdds-finai-Bupqgw5V.js";const S4={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{page:y4}}},f4=[{label:"cell",value:"cell"},{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"disabled",value:"disabled"}],B4=[{label:"row",value:"row"},{label:"disabled",value:"disabled"}],h4=`
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
`,f={name:"mergeByCellValues: объединение по значению",...p({code:h4,type:"code",previewSource:"shown"}),render:()=>{const o=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],n=["Q1","Q2","Q3"],r=[];let i=1;for(const g of o)for(const T of n)r.push({id:i,role:g.role,dept:g.dept,period:T,plan:i*10,fact:i*8}),i+=1;const[t,c]=d.useState(r),s=d.useRef(t),[u,a]=d.useState("range-cell"),[l,w]=d.useState("disabled"),S=d.useMemo(()=>[{key:"role",name:"Роль (merge ×3)",width:220},{key:"dept",name:"Отдел (custom + merge ×3)",width:220,renderCell:({row:g,theme:T})=>e.jsx(E.Container,{padding:8,alignItems:"center",justifyContent:"center",children:e.jsx(E.Text,{color:T.textDark,children:g.dept})}),copyData:g=>g.dept,renderCellPreview:"cellEditorAsPreview"},{key:"period",name:"Период",width:120,editingCell:{component:"inputString"}},{key:"plan",name:"План",width:120,editingCell:{component:"inputNumber"}},{key:"fact",name:"Факт",width:120,editingCell:{component:"inputNumber"}}],[]);return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:16,marginBottom:12},children:[e.jsx(O,{target:"textfield-like",label:"Режим выделения",value:u,onChange:g=>a(g),items:f4}),e.jsx(O,{target:"textfield-like",label:"Highlight active",value:l,onChange:g=>w(g),items:B4})]}),e.jsx(m,{children:"«Роль» и «Отдел» слиты блоками по три строки: значения в этих строках действительно одинаковые, объединение просто показывает их одной ячейкой. Остальные колонки обычные."}),e.jsx(C,{tableConfig:{containerStyle:{height:"600px"},highlightActiveType:l,rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},cellsSelection:{mode:u,enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:c,rowKeyGetter:g=>`${g.id}`,onEnableEditing:g=>{s.current=t,g()},onCancel:g=>{c(s.current),g()},onSave:g=>{g()}},resizableColumn:!0},columnConfig:S,rows:t})]})}},A4=`
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
`,B={name:"mergeByCellValues: сортировка и фильтр",...p({code:A4,type:"code",previewSource:"shown"}),render:()=>{const o=[{role:"Аналитик",dept:"Отдел A"},{role:"Разработчик",dept:"Отдел B"},{role:"Тестировщик",dept:"Отдел C"},{role:"Менеджер",dept:"Отдел D"}],n=[];let r=1;for(const s of o)for(let u=0;u<3;u+=1)n.push({id:r,role:s.role,dept:s.dept,person:`Сотрудник ${r}`,plan:(13-r)*5}),r+=1;const i=d.useState([]),t=d.useState({role:"Все"}),c=[{key:"role",name:"Роль (mergeByCellValues)",width:260,sortingType:"stringSort",filtering:{component:"select",keyInFilterState:"role",valueInRow:s=>s.role,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},...o.map(s=>({value:s.role,text:s.role}))]},filter:{typeOfValue:"single",filteringType:(s,u)=>s==="Все"||u===s}}},{key:"dept",name:"Отдел (mergeByCellValues)",width:260,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return e.jsxs("div",{children:[e.jsx(m,{children:"Таблица сама сливает соседние одинаковые значения. Отсортируй по «Роль» — блоки соберутся, по «План» — распадутся; фильтр в шапке «Роли» тоже пересобирает блоки."}),e.jsx(C,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["role","dept"]},sorting:{state:i},filtering:{state:t,filtersInfo:{role:{label:"Роль",clearedValue:"Все"}}}},columnConfig:c,rows:n})]})}},b4=`
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
`,h={name:"mergeByCellValues: редактирование",...p({code:b4,type:"code",previewSource:"shown"}),render:()=>{const o=["Север","Юг","Запад","Восток","Центр","Урал"],n=[];let r=1;for(const u of o)for(let a=0;a<4;a+=1)n.push({id:r,region:u,team:`Команда ${Math.floor(a/2)+1}`,person:`Сотрудник ${r}`}),r+=1;const[i,t]=d.useState(n),c=d.useRef(i),s=[{key:"region",name:"Регион (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"team",name:"Команда (mergeByCellValues)",width:220,editingCell:{component:"inputString"}},{key:"person",name:"Сотрудник",width:220,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(m,{children:"Правка пересобирает блоки: измени «Регион» у блока, и он разъедется или сольётся с соседним. В данных значения просто повторяются, объединение — только способ показа."}),e.jsx(C,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["region","team"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:t,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{c.current=i,u()},onCancel:u=>{t(c.current),u()},onSave:u=>{u()}}},columnConfig:s,rows:i})]})}},R4=`
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
`,A={name:"Select в объединённой ячейке",...p({code:R4,type:"code",previewSource:"shown"}),render:()=>{const o=["В работе","Готово","Отменено","На паузе"],n=["Иванов","Петров","Сидоров"],r=["Высокий","Средний","Низкий"],i=["Анализ","Разработка","Тест","Релиз"],t=[{id:1,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Анализ",task:"Задача 1"},{id:2,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Разработка",task:"Задача 2"},{id:3,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Тест",task:"Задача 3"},{id:4,status:"В работе",owner:"Иванов",priority:"Высокий",stage:"Релиз",task:"Задача 4"},{id:5,status:"Готово",owner:"Петров",priority:"Средний",stage:"Анализ",task:"Задача 5"},{id:6,status:"Готово",owner:"Петров",priority:"Средний",stage:"Разработка",task:"Задача 6"},{id:7,status:"Готово",owner:"Петров",priority:"Средний",stage:"Тест",task:"Задача 7"},{id:8,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Анализ",task:"Задача 8"},{id:9,status:"Отменено",owner:"Сидоров",priority:"Низкий",stage:"Релиз",task:"Задача 9"}],[c,s]=d.useState(t),u=d.useRef(c),a=[{key:"status",name:"Статус — низ/лево",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"left"},editingCell:{component:"select",options:{type:"constant",options:o.map(l=>({text:l,value:l}))}}},{key:"owner",name:"Ответственный — низ/право",width:220,mergedCellsAlign:{vertical:"bottom",horizontal:"right"},editingCell:{component:"select",options:{type:"constant",options:n.map(l=>({text:l,value:l}))}}},{key:"priority",name:"Приоритет — центр/центр",width:200,mergedCellsAlign:{vertical:"center",horizontal:"center"},editingCell:{component:"select",options:{type:"constant",options:r.map(l=>({text:l,value:l}))}}},{key:"stage",name:"Этап (Select, НЕ слит)",width:200,editingCell:{component:"select",options:{type:"constant",options:i.map(l=>({text:l,value:l}))}}},{key:"task",name:"Задача (текст, не слит)",width:180,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(m,{children:"Три select-колонки слиты, у каждой своё выравнивание: низ-лево, низ-право и центр. Кликни по блоку: редактор откроется у выровненного края, у нижних список раскрывается вверх. «Этап» и «Задача» не слиты — для сравнения."}),e.jsx(C,{tableConfig:{containerStyle:{height:"560px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["status","owner","priority"]},cellsSelection:{mode:"range-cell"},editing:{onRowsChange:s,rowKeyGetter:l=>`${l.id}`,onEnableEditing:l=>{u.current=c,l()},onCancel:l=>{s(u.current),l()},onSave:l=>{l()}}},columnConfig:a,rows:c})]})}},D4=`
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
`,b={name:"mergedCellsRegions: заголовки секций",...p({code:D4,type:"code",previewSource:"shown"}),render:()=>{const o=[];let n=1;for(let u=0;u<3;u+=1){o.push({id:n++,kind:"header",label:`Секция ${u+1}`,a:`Секция ${u+1}`,b:`Секция ${u+1}`});for(let a=0;a<3;a+=1)o.push({id:n++,kind:"data",label:`Строка ${a+1}`,a:`A${u}${a}`,b:`B${u}${a}`})}const[r,i]=d.useState(o),t=d.useRef(r),c=d.useMemo(()=>r.filter(u=>u.kind==="header").map(u=>({rowKeys:[u.id],colKeys:["label","a","b"]})),[r]),s=[{key:"label",name:"Заголовок / Строка",width:220,editingCell:{component:"inputString"},renderCell:({row:u,theme:a})=>e.jsx(E.Container,{padding:8,alignItems:"center",children:e.jsx(E.Text,{color:a.textDark,children:u.label})}),renderCellPreview:"cellEditorAsPreview"},{key:"a",name:"A",width:200,editingCell:{component:"inputString"}},{key:"b",name:"B",width:200,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(m,{children:"Строки-заголовки секций слиты на всю ширину списком регионов. Обычные строки редактируются как всегда; правка заголовка меняет всю его строку."}),e.jsx(C,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:c,rowKeyGetter:u=>u.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:i,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{t.current=r,u()},onCancel:u=>{i(t.current),u()},onSave:u=>{u()}}},columnConfig:s,rows:r})]})}},v4=`
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
`,R={name:"mergedCellsRegions: прямоугольный блок",...p({code:v4,type:"code",previewSource:"shown"}),render:()=>{const o=Array.from({length:10},(u,a)=>({id:a+1,a:`A·${a}`,b:`B·${a}`,c:`C·${a}`,d:`D·${a}`})),[n,r]=d.useState(o),i=d.useRef(o),t=u=>u>=1&&u<=3,c=[{rowKeys:[2,3,4],colKeys:["a","b"]}],s=[{key:"a",name:"A (значение блока)",width:160,editingCell:{component:"inputString"},renderCell:({row:u,rowInd:a,theme:l})=>e.jsx(E.Container,{padding:8,alignItems:"center",justifyContent:t(a)?"center":"flex-start",children:e.jsx(E.Text,{color:l.textDark,children:t(a)?"Блок 2×3":u.a})}),renderCellPreview:"cellEditorAsPreview"},{key:"b",name:"B",width:160,editingCell:{component:"inputString"}},{key:"c",name:"C",width:160,editingCell:{component:"inputString"}},{key:"d",name:"D",width:160,editingCell:{component:"inputString"}}];return e.jsxs("div",{children:[e.jsx(m,{children:"Блок два на три задан регионом: ключи строк и ключи колонок. Кликни — выделится целиком; стрелки перепрыгивают блок; правка пишет во весь блок."}),e.jsx(C,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergedCellsRegions:c,rowKeyGetter:u=>u.id},cellsSelection:{mode:"range-cell",enableColumnSelection:!0},cellTransfer:{fillHandle:!0},editing:{onRowsChange:r,rowKeyGetter:u=>`${u.id}`,onEnableEditing:u=>{i.current=n,u()},onCancel:u=>{r(i.current),u()},onSave:u=>{i.current=n,u()}}},columnConfig:s,rows:n})]})}},x4=`
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
`,D={name:"mergedCellsRegions: управление кнопками",...p({code:x4,type:"code",previewSource:"shown"}),render:()=>{const o=[{dept:"Отдел A",role:"Аналитик",ids:[1,2,3]},{dept:"Отдел B",role:"Разработчик",ids:[4,5,6]},{dept:"Отдел C",role:"Тестировщик",ids:[7,8,9,10]}],n=[];for(const l of o)for(const w of l.ids)n.push({id:w,dept:l.dept,role:l.role,person:`Сотрудник ${w}`,plan:(11-w)*5});const[r,i]=d.useState([{rowKeys:[1,2,3],colKeys:["dept"]}]),[t,c]=d.useState([]),s=l=>JSON.stringify(l),u=l=>i(w=>w.some(S=>s(S)===s(l))?w.filter(S=>s(S)!==s(l)):[...w,l]),a=[{key:"dept",name:"Отдел",width:180,sortingType:"stringSort"},{key:"role",name:"Роль",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:180},{key:"plan",name:"План",width:110,sortingType:"numberSort"}];return e.jsxs("div",{children:[e.jsx(m,{children:"Объединениями управляют кнопки: список блоков хранится у потребителя. Отсортируй по «План» — блок с разъехавшимися строками перестанет рисоваться; сними сортировку — вернётся. Скрытие и перестановку колонок блоки переживают."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:[e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[1,2,3],colKeys:["dept"]}),children:"Слить 1-3 (Отдел)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[4,5,6],colKeys:["dept"]}),children:"Слить 4-6 (Отдел)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>u({rowKeys:[1,2,3],colKeys:["dept","role"],mergedCellsAlign:{horizontal:"center",vertical:"center"}}),children:"Прямоугольник 1-3 × Отдел+Роль (центр)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>i([]),children:"Очистить"})]}),e.jsx(C,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,sorting:{state:[t,c]},mergeCells:{mergedCellsRegions:r,rowKeyGetter:l=>l.id}},columnConfig:a,rows:n})]})}},k4=`
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
`,v={name:"Форматирование и свой рендер в блоке",...p({code:k4,type:"code",previewSource:"shown"}),render:()=>{const o=d.useMemo(()=>{const t=[{dept:"Отдел A",roles:["Аналитик","Разработчик"]},{dept:"Отдел B",roles:["Разработчик","Тестировщик"]},{dept:"Отдел C",roles:["Менеджер","Аналитик"]}],c=[];let s=1;for(const u of t)for(const a of u.roles)for(let l=0;l<2;l+=1)c.push({id:s,dept:u.dept,role:a,person:`Сотрудник ${s}`,plan:s%7*1e3+500.5,fact:s%5*900+250.25}),s+=1;return c},[]),[n,r]=d.useState([{rowKeys:[1,2],colKeys:["plan","fact"]}]),i=[{key:"dept",name:"Отдел (слит)",width:160},{key:"role",name:"Роль (свой рендер)",width:200,renderCell:({row:t})=>e.jsx(E.Container,{padding:8,alignItems:"center",justifyContent:"center",children:e.jsx(E.Badge,{text:t.role})}),copyData:t=>t.role,renderCellPreview:"cellEditorAsPreview"},{key:"person",name:"Сотрудник",width:170},{key:"plan",name:"План (число, вправо)",width:170,contentFormat:{type:"number",minimumFractionDigits:2,alignContent:"right"}},{key:"fact",name:"Факт (свой формат)",width:170,contentFormat:{customFormat:t=>`${t} ₽`}}];return e.jsxs("div",{children:[e.jsx(m,{children:"Блок показывает свою первую ячейку: у «Роли» — свой рендер (бейдж), у «Плана» — числовой формат. Слей «План+Факт» кнопкой: блок возьмёт значение и формат «Плана», формат «Факта» не участвует."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[e.jsx(y,{view:"secondary",size:"s",onClick:()=>r([{rowKeys:[1,2],colKeys:["plan","fact"]}]),children:"Слить План+Факт (строки 1-2)"}),e.jsx(y,{view:"secondary",size:"s",onClick:()=>r([]),children:"Очистить"})]}),e.jsx(C,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},columnsControl:{enable:!0},rowSize:{default:"medium",showInControl:!0},fullScreenEnabled:!0,mergeCells:{mergeByCellValues:["dept",{colKey:"role",value:t=>`${t.dept}:${t.role}`}],mergedCellsRegions:n,rowKeyGetter:t=>t.id}},columnConfig:i,rows:o})]})}},p4=1e5,C4=1e3,E4=50,M=(o,n)=>{const r=Math.floor(o/n)*n;return[r,Math.min(r+n,p4)-1]},F4=(o,n,r)=>n==="region"?M(r,C4):n==="team"?M(r,E4):null,x={name:"lazyRowSpan: ленивые блоки на 100 000 строк",...p({type:"code",previewSource:"shown"}),render:()=>{const o=d.useMemo(()=>Array.from({length:p4},(r,i)=>({id:i,region:`Регион ${Math.floor(i/C4)+1}`,team:`Команда ${Math.floor(i/E4)%20+1}`,person:`Сотрудник ${i+1}`,plan:100+i*37%900})),[]),n=d.useMemo(()=>[{key:"region",name:"Регион (lazyRowSpan ×1000)",width:220},{key:"team",name:"Команда (lazyRowSpan ×50)",width:220},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number"}],[]);return e.jsxs("div",{children:[e.jsxs(m,{children:[e.jsx("code",{children:"mergeCells.lazyRowSpan(row, colKey, rowInd)"})," возвращает первую и последнюю строку блока ячейки или ",e.jsx("code",{children:"null"}),". Таблица вызывает его только для видимых ячеек, поэтому способ подходит для больших и ленивых данных, где обход всех строк (",e.jsx("code",{children:"mergeByCellValues"}),") дорог. Здесь блоки считаются по номеру строки: регион — по 1000 строк, команда — по 50. Резолвер должен быть стабильной функцией."]}),e.jsx(C,{tableConfig:{containerStyle:{height:"600px"},rowMarkers:{startIndex:1},mergeCells:{lazyRowSpan:F4,mergedCellsAlign:{vertical:"top"}}},columnConfig:n,rows:o})]})}},T4=["Север","Север","Север","Юг","Юг","Запад","Запад","Запад","Восток"].map((o,n)=>({id:n,region:o,person:`Сотрудник ${n+1}`,plan:100+n*37%900})),I4=(o,n,r,{rows:i})=>{var s,u;if(n!=="region")return null;let t=r,c=r;for(;((s=i[t-1])==null?void 0:s.region)===o.region;)t-=1;for(;((u=i[c+1])==null?void 0:u.region)===o.region;)c+=1;return c>t?[t,c]:null},k={name:"lazyRowSpan по соседям: с сортировкой",...p({type:"code",previewSource:"shown"}),render:()=>{const o=d.useMemo(()=>[{key:"region",name:"Регион",width:180,sortingType:"stringSort"},{key:"person",name:"Сотрудник",width:200},{key:"plan",name:"План",width:120,contentFormat:"number",sortingType:"numberSort"}],[]),n=d.useState([{columnKey:"region",direction:"DESC"}]);return e.jsxs("div",{children:[e.jsxs(m,{children:["Первый аргумент ",e.jsx("code",{children:"lazyRowSpan"})," — строка ячейки, в"," ",e.jsx("code",{children:"ctx.rows"})," — отображаемые строки в порядке на экране. Блок считается по соседям с тем же регионом, поэтому остаётся верным после сортировки: нажмите на заголовок колонки."]}),e.jsx(C,{tableConfig:{containerStyle:{height:"420px"},sorting:{state:n},mergeCells:{lazyRowSpan:I4}},columnConfig:o,rows:T4})]})}},O4=`
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
`,M4=["Продажи","Разработка","Поддержка","Финансы"],I=["Север","Юг","Запад"],w4=Array.from({length:60},(o,n)=>{const r=M4[Math.floor(n/15)]??"";return{id:n+1,dept:r,deptCustom:r,team:I[Math.floor(n/5)%I.length]??"",person:`Сотрудник ${n+1}`}}),_4=[{values:{person:`Всего: ${w4.length}`}}],K4=[{key:"dept",name:"Отдел (текст)",width:160},{key:"team",name:"Команда (Select)",width:180,editingCell:{component:"select",options:{type:"constant",options:I.map(o=>({text:o,value:o}))}}},{key:"deptCustom",name:"Отдел (свой renderCell)",width:200,renderCell:({row:o,theme:n})=>e.jsx(E.Container,{padding:8,alignItems:"flex-start",children:e.jsx(E.Text,{color:n.textDark,children:o.deptCustom})})},{key:"person",name:"Сотрудник",width:200,renderSummaryCell:({row:o})=>o.values.person??""}],F={name:"Прилипание подписи в высоком блоке",...p({code:O4,type:"code",previewSource:"shown"}),render:()=>{const[o,n]=d.useState("top"),[r,i]=d.useState(w4);return e.jsxs("div",{children:[e.jsx(m,{children:"Прокрути таблицу: подпись «Отдела» и «Команды» держится в видимой части блока по выбранному выравниванию, у конца блока уезжает вместе с ним. Колонка со своим renderCell получает весь блок, её подпись уходит за край. Клик по «Команде» открывает Select."}),e.jsx("div",{style:{display:"flex",gap:8,marginBottom:12},children:["top","center","bottom"].map(t=>e.jsx(y,{size:"s",view:o===t?"accent":"secondary",onClick:()=>n(t),children:t},t))}),e.jsx(C,{tableConfig:{containerStyle:{height:"480px"},rowMarkers:{startIndex:1},hoverEffects:{row:!0},summaryRows:{showDefault:!0,showInControl:!1},editing:{onRowsChange:t=>i([...t]),rowKeyGetter:t=>t.id,defaultEnabled:!0},mergeCells:{mergeByCellValues:["dept","deptCustom","team"],mergedCellsAlign:{vertical:o}}},columnConfig:K4,bottomSummaryRows:_4,rows:r})]})}};var _,K,$;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(K=f.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var G,z,P;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(z=B.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var j,N,L;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(V=A.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var U,Y,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var J,Z,X;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var q,u4,e4;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(e4=(u4=D.parameters)==null?void 0:u4.docs)==null?void 0:e4.source}}};var n4,t4,o4;v.parameters={...v.parameters,docs:{...(n4=v.parameters)==null?void 0:n4.docs,source:{originalSource:`{
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
}`,...(d4=(a4=k.parameters)==null?void 0:a4.docs)==null?void 0:d4.source}}};var c4,g4,m4;F.parameters={...F.parameters,docs:{...(c4=F.parameters)==null?void 0:c4.docs,source:{originalSource:`{
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
}`,...(m4=(g4=F.parameters)==null?void 0:g4.docs)==null?void 0:m4.source}}};const $4=["RowSpanBasic","DerivedGroupingSortFilter","SpanByWithEditing","MergedSelectEditing","Colspan","Rectangular","ControlledSpans","FormatInBlock","LazyRowSpanBlocks","LazyRowSpanSorted","StickyContent"],H4=Object.freeze(Object.defineProperty({__proto__:null,Colspan:b,ControlledSpans:D,DerivedGroupingSortFilter:B,FormatInBlock:v,LazyRowSpanBlocks:x,LazyRowSpanSorted:k,MergedSelectEditing:A,Rectangular:R,RowSpanBasic:f,SpanByWithEditing:h,StickyContent:F,__namedExportsOrder:$4,default:S4},Symbol.toStringTag,{value:"Module"}));export{H4 as C};
