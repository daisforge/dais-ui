import{r as g,d as h}from"./react-D2T61mpp.js";import{b as Eu}from"./tableData-UCfjiBCh.js";import{S as K}from"./StoryHint-D7Z2UPWM.js";import{s as q}from"./storySourceDoc-tVKyHcEN.js";import{T as O}from"./TableCanvas-DGNToxcW.js";import"./FiltersActions-BcPC5tlA.js";import"./IconButton-CYx5m0ft.js";import"./@salutejs/plasma-icons-DH_et0Tb.js";import"./styled-components-BlJZcR1N.js";import"./react-is-Clcustum.js";import"./vendor-Ca3Rcr5K.js";import"./tslib-De9GV7Vy.js";import"./@salutejs/sdds-finai-BaaqQyG7.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-BOxIorbb.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CsOzBWtM.js";import"./TextField-Cv5gnzPi.js";import"./sharedUtilsInputs-CmFty-7o.js";import"./AnalyticalWidget-D8Q0DXRg.js";import"./Collapse-bo3y3zGA.js";import"./Table-CVM1c2rG.js";import"./react-data-grid-Db8xSdWG.js";import"./TableTabs-3d7-vUiX.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-10XYhfcZ.js";import"./ListOfFilters-HU-n75dk.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cr0Censf.js";import"./EmptyState-ClfJf7Jw.js";import"./MassActions-C8FUeNyw.js";import"./Autocomplete-CEyrEhAi.js";import"./TableGlide-DGoQglmW.js";import"./@glideappsfinal/glide-data-grid-n9e9_XCI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-B5MF8Emi.js";const g4={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой пример потребителя: иерархические данные с объединёнными ячейками и весь
набор фич сразу — пагинация, сортировка, фильтры, поиск, resize, закрепление,
чекбоксы, размер строки, настройка колонок, fullscreen, редактирование.

Потребитель владеет деревом (дивизион / управление / команда / сотрудник),
разворачивает его в строки-листья и кладёт путь предков в поля-ключи
(divPath / unitPath / teamPath). Колонки-предки объединяются по этим ключам
через mergeByCellValues, поэтому одинаковые имена в разных ветках не сливаются.

Пагинация, сортировка, фильтры и поиск помечены manual и считаются здесь же
(эмуляция бэка). Таблица рисует полученную страницу и объединяет ячейки.

Закрепление колонок и группы шапки включены вместе: по умолчанию группы
отключают закрепление, явный columnsControl.pinning: true включает его
обратно. Группы стоят только над показателями, чтобы шапка групп не
пересекала границу закреплённой области.

Сортируются листья внутри команды, порядок команд не меняется — поэтому блоки
не рассыпаются. Сортировка самих колонок иерархии (блоками) пока не реализована.`}}}},U="",Cu=[{name:"Розничный бизнес",units:[{name:"Управление продаж",teams:["Команда Север","Команда Юг"]},{name:"Управление сервиса",teams:["Команда Онлайн","Команда Офис"]}]},{name:"Корпоративный бизнес",units:[{name:"Управление КИБ",teams:["Команда Крупные","Команда СМБ"]},{name:"Управление факторинга",teams:["Команда Экспорт"]}]},{name:"Цифровые платформы",units:[{name:"Управление разработки",teams:["Команда Мобайл","Команда Веб"]},{name:"Управление данных",teams:["Команда ML"]}]}],j=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Соколова","Морозов","Лебедева","Козлов","Новикова"],yu=()=>{const u=Eu(7),n=(e,i)=>Math.round((e+u()*(i-e))/1e3)*1e3;let t=0;return Cu.map((e,i)=>({id:`dv${i}`,division:e.name,subRows:e.units.map((p,l)=>({id:`dv${i}u${l}`,unit:p.name,subRows:p.teams.map((s,m)=>({id:`dv${i}u${l}t${m}`,team:s,subRows:Array.from({length:12+Math.floor(u()*16)},()=>{const r=n(6e5,24e5),f={id:`e${t}`,employee:`${j[t%j.length]} ${t+1}`,plan:r,fact:Math.round(r*(.55+u()*.7)/1e3)*1e3,conversion:Math.round((12+u()*48)*10)/10,avgCheck:n(3e3,6e4)};return t+=1,f})}))}))}))},nu=(u,n={})=>{const t=[];return u.forEach(e=>{var p;const i={division:e.division??n.division,unit:e.unit??n.unit,team:e.team??n.team};if((p=e.subRows)!=null&&p.length)t.push(...nu(e.subRows,i));else{const l=i.division??"",s=i.unit??"",m=i.team??"";t.push({id:e.id,division:l,unit:s,team:m,employee:e.employee??"",plan:e.plan??0,fact:e.fact??0,conversion:e.conversion??0,avgCheck:e.avgCheck??0,divPath:l,unitPath:[l,s].join(U),teamPath:[l,s,m].join(U)})}}),t},tu=yu(),ou=nu(tu),_={employee:"",plan:"",fact:"",conversion:"Все",avgCheck:""},T=u=>{const n=Number(u);return u.trim()!==""&&Number.isFinite(n)?n:null},bu=(u,n)=>{const{query:t,filters:e,sort:i,page:p,perPage:l}=n;let s=[...u];const m=t.trim().toLowerCase();m&&(s=s.filter(a=>[a.employee,a.team,a.unit,a.division].some(w=>w.toLowerCase().includes(m))||[a.plan,a.fact,a.avgCheck].some(w=>String(w).includes(m))));const r=e.employee.trim().toLowerCase();r&&(s=s.filter(a=>a.employee.toLowerCase().includes(r)));const f=T(e.plan);f!==null&&(s=s.filter(a=>a.plan>=f));const S=T(e.fact);S!==null&&(s=s.filter(a=>a.fact>=S));const y=T(e.avgCheck);y!==null&&(s=s.filter(a=>a.avgCheck>=y)),e.conversion==="low"?s=s.filter(a=>a.conversion<20):e.conversion==="mid"?s=s.filter(a=>a.conversion>=20&&a.conversion<=40):e.conversion==="high"&&(s=s.filter(a=>a.conversion>40));const b=i[0];if(b){const{columnKey:a,direction:w}=b,c=w==="ASC"?1:-1,o=new Map;s.forEach(d=>{const E=o.get(d.teamPath);E?E.push(d):o.set(d.teamPath,[d])}),o.forEach(d=>{d.sort((E,F)=>{const B=E[a],P=F[a];return typeof B=="number"&&typeof P=="number"?(B-P)*c:String(B).localeCompare(String(P))*c})}),s=Array.from(o.values()).flat()}const C=s.length,v=(p-1)*l;return{pageRows:s.slice(v,v+l),total:C}},wu=(u,n)=>[u.employee??"",n.division,n.unit,n.team,String(u.plan??""),String(u.fact??""),String(u.conversion??""),String(u.avgCheck??"")].join(" ").toLowerCase(),vu=(u,n)=>{const t=n.employee.trim().toLowerCase();if(t&&!(u.employee??"").toLowerCase().includes(t))return!1;const e=T(n.plan);if(e!==null&&(u.plan??0)<e)return!1;const i=T(n.fact);if(i!==null&&(u.fact??0)<i)return!1;const p=T(n.avgCheck);if(p!==null&&(u.avgCheck??0)<p)return!1;const l=u.conversion??0;return!(n.conversion==="low"&&!(l<20)||n.conversion==="mid"&&!(l>=20&&l<=40)||n.conversion==="high"&&!(l>40))},Q=u=>u.division??u.unit??u.team??"",hu=(u,n)=>{const{query:t,filters:e,sort:i,page:p,perPage:l}=n,s=t.trim().toLowerCase(),m=i[0],r=m==null?void 0:m.columnKey,f=(m==null?void 0:m.direction)==="ASC"?1:-1,S=["employee","plan","fact","conversion","avgCheck"],y=["division","unit","team"],b=!!r&&S.includes(r),C=!!r&&y.includes(r),v=(o,d)=>{var F,B,P;const E=[];return o.forEach(R=>{var $;const k={division:R.division??d.division,unit:R.unit??d.unit,team:R.team??d.team},D=R.subRows??[];if(D.length>0&&!(($=D[0])!=null&&$.subRows)){let A=D.filter(I=>s&&!wu(I,k).includes(s)?!1:vu(I,e));if(b&&(A=[...A].sort((I,fu)=>{const L=I[r],V=fu[r];return typeof L=="number"&&typeof V=="number"?(L-V)*f:String(L??"").localeCompare(String(V??""))*f})),!A.length)return;E.push({...R,subRows:A})}else if(D.length){const A=v(D,k);if(!A.length)return;E.push({...R,subRows:A})}}),C&&(r==="division"&&((F=E[0])==null?void 0:F.division)!==void 0||r==="unit"&&((B=E[0])==null?void 0:B.unit)!==void 0||r==="team"&&((P=E[0])==null?void 0:P.team)!==void 0)&&E.sort((k,D)=>Q(k).localeCompare(Q(D))*f),E},a=v(u,{division:"",unit:"",team:""}),w=a.length,c=(p-1)*l;return{pageTree:a.slice(c,c+l),totalDivisions:w}},Su=()=>{const[u,n]=g.useState(ou),[t,e]=g.useState(""),[i,p]=g.useState(_),[l,s]=g.useState([]),[m,r]=g.useState(1),[f,S]=g.useState(20),[y,b]=g.useState(new Set),C=g.useRef(null);g.useEffect(()=>{r(1)},[t,i,l]);const{pageRows:v,total:a}=g.useMemo(()=>bu(u,{query:t,filters:i,sort:l,page:m,perPage:f}),[u,t,i,l,m,f]);return{pageRows:v,shared:{containerStyle:{height:"78vh"},resizableColumn:!0,fullScreenEnabled:!0,rowMarkers:{startIndex:1},rowSize:{default:"medium",showInControl:!0},selecting:{state:[y,b],rowKeyGetter:o=>o.id,showDefault:!0,showInControl:!0},editing:{rowKeyGetter:o=>o.id,onRowsChange:o=>{const d=new Map(o.map(E=>[E.id,E]));n(E=>E.map(F=>d.get(F.id)??F))},onEnableEditing(o){C.current=u,o()},onCancel(o){C.current&&n(C.current),o()},onSave(o){C.current=null,o()}},mergeCells:{mergeByCellValues:[{colKey:"division",value:o=>o.divPath},{colKey:"unit",value:o=>o.unitPath},{colKey:"team",value:o=>o.teamPath}]},searching:{enabled:!0,manualSearching:!0,showSearchBlock:!0,placeholder:"Поиск по сотруднику, команде, сумме",searchQueryState:[t,e]},sorting:{state:[l,s],manualSorting:!0},filtering:{state:[i,p],manualFiltering:!0,filtersInfo:{employee:{label:"Сотрудник",clearedValue:""},plan:{label:"План (минимум)",clearedValue:""},fact:{label:"Факт (минимум)",clearedValue:""},conversion:{label:"Конверсия",clearedValue:"Все"},avgCheck:{label:"Средний чек (минимум)",clearedValue:""}}},pagination:{count:a,perPage:f,value:m,responsiveSlots:!0,onChangePageValue(o,d){typeof o=="number"&&(r(o),d())},onChange(o,d,E){typeof d=="number"&&d!==f?(S(d),r(1)):typeof o=="number"&&r(o),E()}}},flow:{total:a,perPage:f,page:m,query:t,sort:l,filters:i,selected:y.size}}},ru={key:"division",name:"Дивизион",width:190,rowsGrouping:{columnGroupLabel:"Дивизион"}},su={key:"unit",name:"Управление",width:210,rowsGrouping:{columnGroupLabel:"Управление"}},au={key:"team",name:"Команда",width:180,rowsGrouping:{columnGroupLabel:"Команда"},editingCell:{component:"inputString"}},iu={key:"employee",name:"Сотрудник",width:220,sortingType:"stringSort",searching:{valueInRow:u=>u.employee},filtering:{component:"input",filter:"includes",keyInFilterState:"employee",valueInRow:u=>u.employee}},lu={key:"plan",name:"План",width:150,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",searching:{valueInRow:u=>u.plan},filtering:{component:"input",filter:"includes",keyInFilterState:"plan",valueInRow:u=>u.plan}},cu={key:"fact",name:"Факт",width:150,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",searching:{valueInRow:u=>u.fact},filtering:{component:"input",filter:"includes",keyInFilterState:"fact",valueInRow:u=>u.fact}},mu={key:"conversion",name:"Конверсия, %",width:175,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",filtering:{component:"select",keyInFilterState:"conversion",valueInRow:u=>u.conversion,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},{value:"low",text:"до 20%"},{value:"mid",text:"20-40%"},{value:"high",text:"выше 40%"}]},filter:{typeOfValue:"single",filteringType:(u,n)=>{const t=Number(n);return u==="low"?t<20:u==="mid"?t>=20&&t<=40:u==="high"?t>40:!0}}}},du={key:"avgCheck",name:"Средний чек",width:185,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",filtering:{component:"input",filter:"includes",keyInFilterState:"avgCheck",valueInRow:u=>u.avgCheck}},Fu=`
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Строка-лист: сотрудник, показатели и путь предков, продублированный в строке.
// Ключи пути (divPath/unitPath/teamPath) учитывают предков — по ним
// объединяются колонки-предки, одинаковые имена в разных ветках не сливаются.
type Row = {
  id: string;
  division: string;
  unit: string;
  team: string;
  employee: string;
  plan: number;
  fact: number;
  divPath: string;
  unitPath: string;
  teamPath: string;
};

// Оргструктура «от бэка»: дивизион -> управление -> команда -> сотрудники.
const ORG = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
    ],
  },
];
const SURNAMES = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов'];

const buildRows = (): Row[] => {
  const out: Row[] = [];
  let g = 0;
  for (const div of ORG) {
    for (const unit of div.units) {
      for (const team of unit.teams) {
        // По 12 сотрудников в команде — крупные блоки под merge и пагинацию.
        for (let i = 0; i < 12; i += 1) {
          const plan = 600000 + ((g * 37) % 18) * 100000;
          out.push({
            id: \`e\${g}\`,
            division: div.name,
            unit: unit.name,
            team,
            employee: \`\${SURNAMES[g % SURNAMES.length]} \${g + 1}\`,
            plan,
            fact: Math.round(plan * 0.8),
            divPath: div.name,
            unitPath: [div.name, unit.name].join('/'),
            teamPath: [div.name, unit.name, team].join('/'),
          });
          g += 1;
        }
      }
    }
  }
  return out;
};

const DATA: readonly Row[] = buildRows();

type Filters = { employee: string; plan: string };
const CLEARED_FILTERS: Filters = { employee: '', plan: '' };

// Эмуляция бэка: поиск -> фильтры -> сортировка внутри команды -> срез страницы.
const selectPage = (
  all: readonly Row[],
  params: {
    query: string;
    filters: Filters;
    sort: readonly SortColumn[];
    page: number;
    perPage: number;
  },
): { pageRows: Row[]; total: number } => {
  const { query, filters, sort, page, perPage } = params;
  let data = [...all];

  // Глобальный поиск: строка ищется по тексту всей иерархии.
  const q = query.trim().toLowerCase();
  if (q) {
    data = data.filter((r) =>
      [r.employee, r.team, r.unit, r.division].some((v) =>
        v.toLowerCase().includes(q),
      ),
    );
  }

  // Колоночные фильтры: подстрока по сотруднику и минимум по плану.
  const emp = filters.employee.trim().toLowerCase();
  if (emp) data = data.filter((r) => r.employee.toLowerCase().includes(emp));
  const minPlan = Number(filters.plan);
  if (filters.plan.trim() !== '' && Number.isFinite(minPlan)) {
    data = data.filter((r) => r.plan >= minPlan);
  }

  // Сортировка ВНУТРИ команды: строки одной команды остаются соседними,
  // порядок блоков команд сохраняется — объединения не рассыпаются.
  const primary = sort[0];
  if (primary) {
    const dir = primary.direction === 'ASC' ? 1 : -1;
    const groups = new Map<string, Row[]>();
    data.forEach((r) => {
      const arr = groups.get(r.teamPath);
      if (arr) arr.push(r);
      else groups.set(r.teamPath, [r]);
    });
    groups.forEach((arr) =>
      arr.sort((a, b) => {
        const av = a[primary.columnKey as keyof Row];
        const bv = b[primary.columnKey as keyof Row];
        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * dir;
        }
        return String(av).localeCompare(String(bv)) * dir;
      }),
    );
    data = Array.from(groups.values()).flat();
  }

  const total = data.length;
  const start = (page - 1) * perPage;
  return { pageRows: data.slice(start, start + perPage), total };
};

// Колонки иерархии без групповой шапки (мы их закрепляем), показатели — под ней.
const colDivision: ColumnConfig<Row> = {
  key: 'division',
  name: 'Дивизион',
  width: 190,
};
const colUnit: ColumnConfig<Row> = {
  key: 'unit',
  name: 'Управление',
  width: 210,
};
const colTeam: ColumnConfig<Row> = {
  key: 'team',
  name: 'Команда',
  width: 180,
  // Правка объединённой ячейки записывается во все строки блока,
  // и весь блок показывает новое имя.
  editingCell: { component: 'inputString' },
};
const colEmployee: ColumnConfig<Row> = {
  key: 'employee',
  name: 'Сотрудник',
  width: 220,
  sortingType: 'stringSort',
  searching: { valueInRow: (r) => r.employee },
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'employee',
    valueInRow: (r) => r.employee,
  },
};
const colPlan: ColumnConfig<Row> = {
  key: 'plan',
  name: 'План',
  width: 150,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'plan',
    valueInRow: (r) => r.plan,
  },
};
const colFact: ColumnConfig<Row> = {
  key: 'fact',
  name: 'Факт',
  width: 150,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
};

const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
  colDivision,
  colUnit,
  colTeam,
  colEmployee,
  {
    key: 'results',
    name: 'Результаты за квартал',
    children: [colPlan, colFact],
  },
];

export const Example = () => {
  // Полный «серверный» набор в стейте — чтобы поддержать редактирование.
  const [allRows, setAllRows] = useState<readonly Row[]>(DATA);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Снимок для отмены редактирования.
  const savedRowsRef = useRef<readonly Row[] | null>(null);

  // Любое изменение выборки возвращает на первую страницу.
  useEffect(() => {
    setPage(1);
  }, [query, filters, sort]);

  const { pageRows, total } = useMemo(
    () => selectPage(allRows, { query, filters, sort, page, perPage }),
    [allRows, query, filters, sort, page, perPage],
  );

  // Правки прилетают на ТЕКУЩУЮ страницу; вливаем их обратно в полный набор.
  const handleRowsChange = (updatedPage: readonly Row[]) => {
    const byId = new Map(updatedPage.map((r) => [r.id, r]));
    setAllRows((prev) => prev.map((r) => byId.get(r.id) ?? r));
  };

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '78vh' },
        resizableColumn: true,
        fullScreenEnabled: true,
        rowMarkers: { startIndex: 1 },
        rowSize: { default: 'medium', showInControl: true },
        columnsGrouping: { squashEmptyCells: true },
        columnsControl: {
          enable: true,
          // Группы шапки по умолчанию отключают закрепление колонок,
          // явный pinning: true включает его обратно.
          pinning: true,
          pinnedDefault: ['division', 'unit', 'team', 'employee'],
        },
        // Объединение колонок-предков по ключу пути.
        mergeCells: {
          mergeByCellValues: [
            { colKey: 'division', value: (r) => r.divPath },
            { colKey: 'unit', value: (r) => r.unitPath },
            { colKey: 'team', value: (r) => r.teamPath },
          ],
        },
        // Ключ строки должен быть стабильным между страницами: по нему живут
        // выделение и возврат правок.
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: (r) => r.id,
          showDefault: true,
          showInControl: true,
        },
        editing: {
          rowKeyGetter: (r) => r.id,
          onRowsChange: handleRowsChange,
          onEnableEditing: (enable) => {
            savedRowsRef.current = allRows;
            enable();
          },
          onCancel: (disable) => {
            if (savedRowsRef.current) setAllRows(savedRowsRef.current);
            disable();
          },
          onSave: (disable) => {
            savedRowsRef.current = null;
            disable();
          },
        },
        // Поиск/сортировка/фильтрация/пагинация — manual: считает потребитель.
        searching: {
          enabled: true,
          manualSearching: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде',
          searchQueryState: [query, setQuery],
        },
        sorting: { state: [sort, setSort], manualSorting: true },
        filtering: {
          state: [filters, setFilters],
          manualFiltering: true,
          filtersInfo: {
            employee: { label: 'Сотрудник', clearedValue: '' },
            plan: { label: 'План (минимум)', clearedValue: '' },
          },
        },
        pagination: {
          count: total,
          perPage,
          value: page,
          responsiveSlots: true,
          onChangePageValue: (nextPage, scrollToTop) => {
            if (typeof nextPage === 'number') {
              setPage(nextPage);
              scrollToTop();
            }
          },
          onChange: (nextPage, nextPerPage, scrollToTop) => {
            // Смена «показывать по» возвращает на первую страницу, чтобы не
            // оказаться за пределами уменьшившегося числа страниц.
            if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
              setPerPage(nextPerPage);
              setPage(1);
            } else if (typeof nextPage === 'number') {
              setPage(nextPage);
            }
            scrollToTop();
          },
        },
      }}
      columnConfig={columnConfig}
      rows={pageRows}
    />
  );
};
`,N={name:"mergeByCellValues: пример с серверными данными",...q({code:Fu,type:"code",previewSource:"shown"}),render:()=>{const{pageRows:u,shared:n}=Su(),t=[ru,su,au,iu,{key:"results",name:"Результаты за квартал",children:[{key:"sales",name:"Продажи",children:[lu,cu]},{key:"eff",name:"Эффективность",children:[mu,du]}]}];return h.jsxDEV("div",{children:[h.jsxDEV(K,{children:"Полный пример: страницы, поиск, сортировку и фильтры готовит «сервер» (здесь он эмулируется), таблица рисует полученную страницу и сливает колонки иерархии."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1080,columnNumber:9},void 0),h.jsxDEV(O,{tableConfig:{...n,columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,pinning:!0,pinnedDefault:["division","unit","team","employee"]}},columnConfig:t,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1085,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1079,columnNumber:7},void 0)}},gu=()=>{const[u,n]=g.useState(new Set);return{selectedIds:u,setSelectedIds:n,commonConfig:{containerStyle:{height:"74vh"},resizableColumn:!0,fullScreenEnabled:!0,rowMarkers:{startIndex:1},rowSize:{default:"medium",showInControl:!0},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0}}}},x=(u,n,t)=>({key:u,name:n,width:t,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",searching:{valueInRow:e=>e[u]??0},filtering:{component:"input",filter:"includes",keyInFilterState:u,valueInRow:e=>e[u]??0}}),Ru=[{key:"division",name:"Дивизион",width:190,sortingType:"stringSort"},{key:"unit",name:"Управление",width:210,sortingType:"stringSort"},{key:"team",name:"Команда",width:170,sortingType:"stringSort"},{key:"employee",name:"Сотрудник",width:220,sortingType:"stringSort",searching:{valueInRow:u=>u.employee??""},filtering:{component:"input",filter:"includes",keyInFilterState:"employee",valueInRow:u=>u.employee??""}},{key:"results",name:"Результаты за квартал",children:[{key:"sales",name:"Продажи",children:[x("plan","План",150),x("fact","Факт",150)]},{key:"eff",name:"Эффективность",children:[x("conversion","Конверсия, %",175),x("avgCheck","Средний чек",185)]}]}],pu=(u,n)=>u.map(t=>{var i;if((i=t.subRows)!=null&&i.length)return{...t,subRows:pu(t.subRows,n)};const e=n.get(t.id);return e?{...t,...e}:t}),Du=[ru,su,au,iu,{key:"results",name:"Результаты за квартал",children:[{key:"sales",name:"Продажи",children:[lu,cu]},{key:"eff",name:"Эффективность",children:[mu,du]}]}],Au=`
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Узел дерева: узлы-предки несут своё поле (division/unit/team), листья — строки с показателями.
type Node = {
  id: string;
  division?: string;
  unit?: string;
  team?: string;
  employee?: string;
  plan?: number;
  fact?: number;
  subRows?: Node[];
};

const ORG = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
    ],
  },
];
const SURNAMES = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов'];

// Дерево «от бэка»: дивизион -> управление -> команда -> сотрудники (листья).
let g = 0;
const TREE: Node[] = ORG.map((div, di) => ({
  id: \`dv\${di}\`,
  division: div.name,
  subRows: div.units.map((unit, ui) => ({
    id: \`dv\${di}u\${ui}\`,
    unit: unit.name,
    subRows: unit.teams.map((teamName, ti) => ({
      id: \`dv\${di}u\${ui}t\${ti}\`,
      team: teamName,
      subRows: Array.from({ length: 12 }, () => {
        const plan = 600000 + ((g * 37) % 18) * 100000;
        const leaf: Node = {
          id: \`e\${g}\`,
          employee: \`\${SURNAMES[g % SURNAMES.length]} \${g + 1}\`,
          plan,
          fact: Math.round(plan * 0.8),
        };
        g += 1;
        return leaf;
      }),
    })),
  })),
}));

type Filters = { employee: string; plan: string; fact: string };
const CLEARED_FILTERS: Filters = { employee: '', plan: '', fact: '' };
const parseMin = (s: string): number | null => {
  const n = Number(s);
  return s.trim() !== '' && Number.isFinite(n) ? n : null;
};

// Поиск/фильтры/сортировка считаются по дереву: лист остаётся, если проходит
// поиск и фильтры; пустые ветки вырезаем. Сортировка показателей идёт внутри команды
// (блоки целые), сортировка колонок иерархии переставляет ветки уровня по имени.
const selectTreePage = (
  tree: readonly Node[],
  params: {
    query: string;
    filters: Filters;
    sort: readonly SortColumn[];
    page: number;
    perPage: number;
  },
): { pageTree: Node[]; totalDivisions: number } => {
  const { query, filters, sort, page, perPage } = params;
  const q = query.trim().toLowerCase();
  const primary = sort[0];
  const sortKey = primary?.columnKey;
  const dir = primary?.direction === 'ASC' ? 1 : -1;
  const measureKeys = ['employee', 'plan', 'fact'];
  const hierarchyKeys = ['division', 'unit', 'team'];
  const sortByMeasure = !!sortKey && measureKeys.includes(sortKey);
  const sortByHierarchy = !!sortKey && hierarchyKeys.includes(sortKey);

  const nodeName = (n: Node) => n.division ?? n.unit ?? n.team ?? '';

  const walk = (
    nodes: readonly Node[],
    anc: { division: string; unit: string; team: string },
  ): Node[] => {
    const out: Node[] = [];
    nodes.forEach((n) => {
      const nextAnc = {
        division: n.division ?? anc.division,
        unit: n.unit ?? anc.unit,
        team: n.team ?? anc.team,
      };
      const children = n.subRows ?? [];
      const childrenAreLeaves = children.length > 0 && !children[0]?.subRows;

      if (childrenAreLeaves) {
        // Уровень команды: отбираем листья по поиску и фильтрам.
        let leaves = children.filter((leaf) => {
          const text = [
            leaf.employee ?? '',
            nextAnc.division,
            nextAnc.unit,
            nextAnc.team,
            String(leaf.plan ?? ''),
            String(leaf.fact ?? ''),
          ]
            .join(' ')
            .toLowerCase();
          if (q && !text.includes(q)) return false;
          const emp = filters.employee.trim().toLowerCase();
          if (emp && !(leaf.employee ?? '').toLowerCase().includes(emp)) {
            return false;
          }
          const minPlan = parseMin(filters.plan);
          if (minPlan !== null && (leaf.plan ?? 0) < minPlan) return false;
          const minFact = parseMin(filters.fact);
          if (minFact !== null && (leaf.fact ?? 0) < minFact) return false;
          return true;
        });
        // Сортировка показателей: только внутри команды, порядок блоков не меняется.
        if (sortByMeasure) {
          leaves = [...leaves].sort((a, b) => {
            const av = a[sortKey as keyof Node];
            const bv = b[sortKey as keyof Node];
            if (typeof av === 'number' && typeof bv === 'number') {
              return (av - bv) * dir;
            }
            return String(av ?? '').localeCompare(String(bv ?? '')) * dir;
          });
        }
        if (!leaves.length) return;
        out.push({ ...n, subRows: leaves });
      } else if (children.length) {
        // Промежуточный уровень: сначала обрабатываем детей, пустые ветки гасим.
        const kept = walk(children, nextAnc);
        if (!kept.length) return;
        out.push({ ...n, subRows: kept });
      }
    });

    // Сортировка колонки иерархии: переставляем только тот уровень,
    if (sortByHierarchy) {
    // чьё поле выбрано для сортировки.
      const levelMatches =
        (sortKey === 'division' && out[0]?.division !== undefined) ||
        (sortKey === 'unit' && out[0]?.unit !== undefined) ||
        (sortKey === 'team' && out[0]?.team !== undefined);
      if (levelMatches) {
        out.sort((a, b) => nodeName(a).localeCompare(nodeName(b)) * dir);
      }
    }
    return out;
  };

  const filtered = walk(tree, { division: '', unit: '', team: '' });
  const totalDivisions = filtered.length;
  const start = (page - 1) * perPage;
  return { pageTree: filtered.slice(start, start + perPage), totalDivisions };
};

const columns: readonly ColumnConfig<Node>[] = [
  // Колонки иерархии: sortingType включает стрелку, по ней переставляем ветки.
  { key: 'division', name: 'Дивизион', width: 190, sortingType: 'stringSort' },
  { key: 'unit', name: 'Управление', width: 210, sortingType: 'stringSort' },
  { key: 'team', name: 'Команда', width: 170, sortingType: 'stringSort' },
  {
    key: 'employee',
    name: 'Сотрудник',
    width: 220,
    sortingType: 'stringSort',
    searching: { valueInRow: (r) => r.employee ?? '' },
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'employee',
      valueInRow: (r) => r.employee ?? '',
    },
  },
  {
    key: 'plan',
    name: 'План',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'plan',
      valueInRow: (r) => r.plan ?? 0,
    },
  },
  {
    key: 'fact',
    name: 'Факт',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'fact',
      valueInRow: (r) => r.fact ?? 0,
    },
  },
];

// Правки показателей листа записываем обратно в дерево, лист находим по id.
const updateTreeLeaves = (
  nodes: readonly Node[],
  byId: Map<string, Node>,
): Node[] =>
  nodes.map((n) => {
    if (n.subRows?.length) {
      return { ...n, subRows: updateTreeLeaves(n.subRows, byId) };
    }
    const upd = byId.get(n.id);
    return upd ? { ...n, ...upd } : n;
  });

export const Example = () => {
  const [tree, setTree] = useState<readonly Node[]>(TREE);
  // Снимок дерева для отмены редактирования.
  const beforeEditRef = useRef(tree);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Поиск/сортировка/фильтры — manual, считаются по дереву в selectTreePage.
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);
  // Пагинация по верхним блокам (дивизионам): потребитель владеет деревом и
  // отдаёт страницу целых поддеревьев — блоки не рвутся на границе страницы.
  // Единица «показывать по» — дивизион, поэтому список свой: perPageList.
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);

  // Любое изменение выборки возвращает на первую страницу.
  useEffect(() => {
    setPage(1);
  }, [query, filters, sort]);

  const { pageTree, totalDivisions } = useMemo(
    () => selectTreePage(tree, { query, filters, sort, page, perPage }),
    [tree, query, filters, sort, page, perPage],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '74vh' },
        resizableColumn: true,
        fullScreenEnabled: true,
        rowMarkers: { startIndex: 1 },
        rowSize: { default: 'medium', showInControl: true },
        columnsControl: { enable: true },
        // Поиск/сортировка/фильтры — manual: считает потребитель по дереву.
        searching: {
          enabled: true,
          manualSearching: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде, сумме',
          searchQueryState: [query, setQuery],
        },
        sorting: { state: [sort, setSort], manualSorting: true },
        filtering: {
          state: [filters, setFilters],
          manualFiltering: true,
          filtersInfo: {
            employee: { label: 'Сотрудник', clearedValue: '' },
            plan: { label: 'План (минимум)', clearedValue: '' },
            fact: { label: 'Факт (минимум)', clearedValue: '' },
          },
        },
        pagination: {
          // count — число дивизионов после фильтра, а не число строк.
          count: totalDivisions,
          perPage,
          // Свой список «показывать по»: единица здесь — дивизион, а не строка.
          perPageList: [1, 2],
          value: page,
          responsiveSlots: true,
          onChangePageValue: (nextPage, scrollToTop) => {
            if (typeof nextPage === 'number') {
              setPage(nextPage);
              scrollToTop();
            }
          },
          onChange: (nextPage, nextPerPage, scrollToTop) => {
            if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
              setPerPage(nextPerPage);
              setPage(1);
            } else if (typeof nextPage === 'number') {
              setPage(nextPage);
            }
            scrollToTop();
          },
        },
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: (r) => r.id,
          showDefault: true,
          showInControl: true,
        },
        editing: {
          rowKeyGetter: (r) => r.id,
          onRowsChange: (updated) => {
            const byId = new Map(updated.map((r) => [r.id, r]));
            setTree((prev) => updateTreeLeaves(prev, byId));
          },
          onEnableEditing: (enable) => {
            beforeEditRef.current = tree;
            enable();
          },
          onCancel: (disable) => {
            setTree(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
        // Структуру задаёт дерево потребителя; колонки уровней сливаются по
        // границам групп, чекбокс и индекс — один на дивизион.
        subRows: {
          getSubRows: (row) => row?.subRows,
          rowKeyGetter: (row) => row.id,
          view: 'merged',
          mergedColumns: ['division', 'unit', 'team'],
        },
      }}
      columnConfig={columns}
      rows={pageTree as Node[]}
    />
  );
};
`,M={name:"subRows: дерево с пагинацией",...q({code:Au,type:"code",previewSource:"shown"}),render:()=>{const{selectedIds:u,setSelectedIds:n,commonConfig:t}=gu(),[e,i]=g.useState(tu),p=g.useRef(e),[l,s]=g.useState(""),[m,r]=g.useState(_),[f,S]=g.useState([]),[y,b]=g.useState(1),[C,v]=g.useState(2);g.useEffect(()=>{b(1)},[l,m,f]);const{pageTree:a,totalDivisions:w}=g.useMemo(()=>hu(e,{query:l,filters:m,sort:f,page:y,perPage:C}),[e,l,m,f,y,C]);return h.jsxDEV("div",{children:[h.jsxDEV(K,{children:"Поиск, сортировка и фильтры включены и считаются на стороне примера: дерево фильтруется целиком, сортировка показателей идёт внутри команд, страницы — по оставшимся дивизионам."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1614,columnNumber:9},void 0),h.jsxDEV(O,{tableConfig:{...t,searching:{enabled:!0,manualSearching:!0,showSearchBlock:!0,placeholder:"Поиск по сотруднику, команде, сумме",searchQueryState:[l,s]},sorting:{state:[f,S],manualSorting:!0},filtering:{state:[m,r],manualFiltering:!0,filtersInfo:{employee:{label:"Сотрудник",clearedValue:""},plan:{label:"План (минимум)",clearedValue:""},fact:{label:"Факт (минимум)",clearedValue:""},conversion:{label:"Конверсия",clearedValue:"Все"},avgCheck:{label:"Средний чек (минимум)",clearedValue:""}}},pagination:{count:w,perPage:C,perPageList:[1,2,3],value:y,responsiveSlots:!0,onChangePageValue(c,o){typeof c=="number"&&(b(c),o())},onChange(c,o,d){typeof o=="number"&&o!==C?(v(o),b(1)):typeof c=="number"&&b(c),d()}},selecting:{state:[u,n],rowKeyGetter:c=>c.id,showDefault:!0,showInControl:!0},editing:{rowKeyGetter:c=>c.id,onRowsChange:c=>{const o=new Map(c.map(d=>[d.id,d]));i(d=>pu(d,o))},onEnableEditing:c=>{p.current=e,c()},onCancel:c=>{i(p.current),c()},onSave:c=>{c()}},subRows:{getSubRows:c=>c==null?void 0:c.subRows,rowKeyGetter:c=>c.id,view:"merged",mergedColumns:["division","unit","team"]}},columnConfig:Ru,rows:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1619,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1613,columnNumber:7},void 0)}},Bu=`
import { useRef, useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Плоские листья на входе, дерево строит сама таблица по groupByState.
type Row = {
  id: string;
  division: string;
  unit: string;
  team: string;
  employee: string;
  plan: number;
  fact: number;
};

const ORG = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
    ],
  },
];
const SURNAMES = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов'];

const buildRows = (): Row[] => {
  const out: Row[] = [];
  let g = 0;
  for (const div of ORG) {
    for (const unit of div.units) {
      for (const team of unit.teams) {
        for (let i = 0; i < 12; i += 1) {
          const plan = 600000 + ((g * 37) % 18) * 100000;
          out.push({
            id: \`e\${g}\`,
            division: div.name,
            unit: unit.name,
            team,
            employee: \`\${SURNAMES[g % SURNAMES.length]} \${g + 1}\`,
            plan,
            fact: Math.round(plan * 0.8),
          });
          g += 1;
        }
      }
    }
  }
  return out;
};

const DATA: readonly Row[] = buildRows();

// columnGroupLabel делает колонку доступной в селекторе группировки
// (кнопка groupButton).
const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'division',
    name: 'Дивизион',
    width: 190,
    rowsGrouping: { columnGroupLabel: 'Дивизион' },
  },
  {
    key: 'unit',
    name: 'Управление',
    width: 210,
    rowsGrouping: { columnGroupLabel: 'Управление' },
  },
  {
    key: 'team',
    name: 'Команда',
    width: 180,
    rowsGrouping: { columnGroupLabel: 'Команда' },
  },
  {
    key: 'employee',
    name: 'Сотрудник',
    width: 220,
    sortingType: 'stringSort',
    searching: { valueInRow: (r) => r.employee },
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'employee',
      valueInRow: (r) => r.employee,
    },
  },
  {
    key: 'plan',
    name: 'План',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'plan',
      valueInRow: (r) => r.plan,
    },
  },
  {
    key: 'fact',
    name: 'Факт',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'fact',
      valueInRow: (r) => r.fact,
    },
  },
];

export const Example = () => {
  const [rows, setRows] = useState<readonly Row[]>(DATA);
  // Снимок строк для отмены редактирования.
  const beforeEditRef = useRef(rows);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Порядок ключей задаёт порядок уровней: сначала дивизион, внутри него
  // управление, внутри — команда.
  const groupByState = useState<string[]>(['division', 'unit', 'team']);
  const sortState = useState<readonly SortColumn[]>([]);
  // В стейте должен быть ключ каждого фильтра из колонок. Фильтр без своего
  // ключа получит пустое значение и может отсеять все строки.
  const filteringState = useState<{
    employee: string;
    plan: string;
    fact: string;
  }>({
    employee: '',
    plan: '',
    fact: '',
  });

  // Пагинации здесь нет: чтобы собрать группы, таблице нужны все строки сразу.
  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '74vh' },
        resizableColumn: true,
        fullScreenEnabled: true,
        rowMarkers: { startIndex: 1 },
        rowSize: { default: 'medium', showInControl: true },
        columnsControl: { enable: true },
        // Встроенные (не manual) поиск/сортировка/фильтры: считает сама таблица
        // на входных листьях до сборки групп.
        searching: {
          enabled: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде, сумме',
        },
        sorting: { state: sortState },
        filtering: {
          state: filteringState,
          filtersInfo: {
            employee: { label: 'Сотрудник', clearedValue: '' },
            plan: { label: 'План (минимум)', clearedValue: '' },
            fact: { label: 'Факт (минимум)', clearedValue: '' },
          },
        },
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: (r) => r.id,
          showDefault: true,
          showInControl: true,
        },
        editing: {
          rowKeyGetter: (r) => r.id,
          onRowsChange: (updated) => setRows(updated as Row[]),
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
        rowsGrouping: {
          view: 'merged',
          groupByState,
          rowKeyGetter: (r) => r.id,
          // Селектор группировки в блоке управления: пользователь сам выбирает,
          // по каким колонкам группировать.
          groupButton: {},
          // Гасим сортировку у группирующих колонок, чтобы она не конфликтовала
          // с порядком групп.
          disableGroupColumnsSort: true,
        },
      }}
      columnConfig={columns}
      rows={rows as Row[]}
    />
  );
};
`,G={name:"rowsGrouping: группировка пользователем",...q({code:Bu,type:"code",previewSource:"shown"}),render:()=>{const{selectedIds:u,setSelectedIds:n,commonConfig:t}=gu(),[e,i]=g.useState(ou),p=g.useRef(e),l=g.useState(["division","unit","team"]),s=g.useState([]),m=g.useState({..._});return h.jsxDEV("div",{children:[h.jsxDEV(K,{children:"Встроенные поиск, сортировка и фильтры работают как обычно — данные фильтруются и сортируются до сборки групп; сортировка по группирующим колонкам отключена. Пагинации нет: чтобы собрать группы, таблице нужны все строки сразу."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1943,columnNumber:9},void 0),h.jsxDEV(O,{tableConfig:{...t,searching:{enabled:!0,showSearchBlock:!0,placeholder:"Поиск по сотруднику, команде, сумме"},sorting:{state:s},filtering:{state:m,filtersInfo:{employee:{label:"Сотрудник",clearedValue:""},plan:{label:"План (минимум)",clearedValue:""},fact:{label:"Факт (минимум)",clearedValue:""},conversion:{label:"Конверсия",clearedValue:"Все"},avgCheck:{label:"Средний чек (минимум)",clearedValue:""}}},selecting:{state:[u,n],rowKeyGetter:r=>r.id,showDefault:!0,showInControl:!0},editing:{rowKeyGetter:r=>r.id,onRowsChange:r=>i(r),onEnableEditing:r=>{p.current=e,r()},onCancel:r=>{i(p.current),r()},onSave:r=>{r()}},rowsGrouping:{view:"merged",groupByState:l,rowKeyGetter:r=>r.id,groupButton:{},disableGroupColumnsSort:!0}},columnConfig:Du,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1949,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.cellsMergingExamples.stories.tsx",lineNumber:1942,columnNumber:7},void 0)}};var z,H,W;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'mergeByCellValues: пример с серверными данными',
  ...storySourceDoc({
    code: SHOWCASE_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const {
      pageRows,
      shared
    } = useShowcase();

    // Колонки иерархии без групповой шапки (мы их закрепляем), показатели — под 3-уровневой шапкой
    // (Результаты -> Продажи -> План/Факт). Группы только над показателями, чтобы шапка
    // групп не пересекала границу закреплённой области.
    const columnConfig: ColumnOrColumnGroupConfig<LeafRow>[] = [colDivision, colUnit, colTeam, colEmployee, {
      key: 'results',
      name: 'Результаты за квартал',
      children: [{
        key: 'sales',
        name: 'Продажи',
        children: [colPlan, colFact]
      }, {
        key: 'eff',
        name: 'Эффективность',
        children: [colConversion, colAvgCheck]
      }]
    }];
    return <div>
        <StoryHint>
          Полный пример: страницы, поиск, сортировку и фильтры готовит «сервер»
          (здесь он эмулируется), таблица рисует полученную страницу и сливает
          колонки иерархии.
        </StoryHint>
        <TableCanvas tableConfig={{
        ...shared,
        columnsGrouping: {
          squashEmptyCells: true
        },
        columnsControl: {
          enable: true,
          // Группы шапки по умолчанию отключают закрепление — включаем явно.
          pinning: true,
          pinnedDefault: ['division', 'unit', 'team', 'employee']
        }
      }} columnConfig={columnConfig} rows={pageRows} />
      </div>;
  }
}`,...(W=(H=N.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var J,X,Y;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'subRows: дерево с пагинацией',
  ...storySourceDoc({
    code: SUB_ROWS_MERGED_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const {
      selectedIds,
      setSelectedIds,
      commonConfig
    } = useBuiltinFeatures();
    const [tree, setTree] = useState<readonly ShowcaseNode[]>(TREE);
    const beforeEditRef = useRef(tree);
    // Поиск, сортировка и фильтры — manual (как в плоской стори), но считаются по
    // дереву в selectTreePage.
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
    const [sort, setSort] = useState<readonly SortColumn[]>([]);
    // Пагинация по верхним блокам (дивизионам): потребитель владеет деревом и
    // отдаёт страницу целых поддеревьев — блоки не рвутся на границе страницы.
    // Единица «показывать по» — дивизион, поэтому список свой: perPageList.
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(2);

    // Любое изменение выборки возвращает на первую страницу.
    useEffect(() => {
      setPage(1);
    }, [query, filters, sort]);
    const {
      pageTree,
      totalDivisions
    } = useMemo(() => selectTreePage(tree, {
      query,
      filters,
      sort,
      page,
      perPage
    }), [tree, query, filters, sort, page, perPage]);
    return <div>
        <StoryHint>
          Поиск, сортировка и фильтры включены и считаются на стороне примера:
          дерево фильтруется целиком, сортировка показателей идёт внутри команд,
          страницы — по оставшимся дивизионам.
        </StoryHint>
        <TableCanvas tableConfig={{
        ...commonConfig,
        searching: {
          enabled: true,
          manualSearching: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде, сумме',
          searchQueryState: [query, setQuery]
        },
        sorting: {
          state: [sort, setSort],
          manualSorting: true
        },
        filtering: {
          state: [filters, setFilters],
          manualFiltering: true,
          filtersInfo: {
            employee: {
              label: 'Сотрудник',
              clearedValue: ''
            },
            plan: {
              label: 'План (минимум)',
              clearedValue: ''
            },
            fact: {
              label: 'Факт (минимум)',
              clearedValue: ''
            },
            conversion: {
              label: 'Конверсия',
              clearedValue: 'Все'
            },
            avgCheck: {
              label: 'Средний чек (минимум)',
              clearedValue: ''
            }
          }
        },
        pagination: {
          count: totalDivisions,
          perPage,
          // Свой список «показывать по»: единица здесь — дивизион, а не строка.
          perPageList: [1, 2, 3],
          value: page,
          responsiveSlots: true,
          onChangePageValue(nextPage, scrollToTop) {
            if (typeof nextPage === 'number') {
              setPage(nextPage);
              scrollToTop();
            }
          },
          onChange(nextPage, nextPerPage, scrollToTop) {
            if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
              setPerPage(nextPerPage);
              setPage(1);
            } else if (typeof nextPage === 'number') {
              setPage(nextPage);
            }
            scrollToTop();
          }
        },
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: r => r.id,
          showDefault: true,
          showInControl: true
        },
        editing: {
          rowKeyGetter: r => r.id,
          onRowsChange: updated => {
            const byId = new Map(updated.map(r => [r.id, r]));
            setTree(prev => updateTreeLeaves(prev, byId));
          },
          onEnableEditing: enable => {
            beforeEditRef.current = tree;
            enable();
          },
          onCancel: disable => {
            setTree(beforeEditRef.current);
            disable();
          },
          onSave: disable => {
            disable();
          }
        },
        subRows: {
          getSubRows: row => row?.subRows,
          rowKeyGetter: row => row.id,
          view: 'merged',
          mergedColumns: ['division', 'unit', 'team']
        }
      }} columnConfig={NODE_COLUMNS} rows={pageTree as ShowcaseNode[]} />
      </div>;
  }
}`,...(Y=(X=M.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,uu,eu;G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'rowsGrouping: группировка пользователем',
  ...storySourceDoc({
    code: GROUPING_MERGED_CODE,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const {
      selectedIds,
      setSelectedIds,
      commonConfig
    } = useBuiltinFeatures();
    const [rows, setRows] = useState<readonly LeafRow[]>(DATA);
    const beforeEditRef = useRef(rows);
    const groupByState = useState<string[]>(['division', 'unit', 'team']);
    const sortState = useState<readonly SortColumn[]>([]);
    // Ключи стейта обязаны покрывать все фильтры колонок: селект «Конверсия»
    // без своего ключа получил бы пустое значение и отсеял бы все строки.
    const filteringState = useState<Filters>({
      ...CLEARED_FILTERS
    });
    return <div>
        <StoryHint>
          Встроенные поиск, сортировка и фильтры работают как обычно — данные
          фильтруются и сортируются до сборки групп; сортировка по группирующим
          колонкам отключена. Пагинации нет: чтобы собрать группы, таблице нужны
          все строки сразу.
        </StoryHint>
        <TableCanvas tableConfig={{
        ...commonConfig,
        // Встроенные (не manual) поиск/сортировка/фильтры: считает сама
        // таблица на входных листьях ДО сборки групп.
        searching: {
          enabled: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде, сумме'
        },
        sorting: {
          state: sortState
        },
        filtering: {
          state: filteringState,
          filtersInfo: {
            employee: {
              label: 'Сотрудник',
              clearedValue: ''
            },
            plan: {
              label: 'План (минимум)',
              clearedValue: ''
            },
            fact: {
              label: 'Факт (минимум)',
              clearedValue: ''
            },
            conversion: {
              label: 'Конверсия',
              clearedValue: 'Все'
            },
            avgCheck: {
              label: 'Средний чек (минимум)',
              clearedValue: ''
            }
          }
        },
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: r => r.id,
          showDefault: true,
          showInControl: true
        },
        editing: {
          rowKeyGetter: r => r.id,
          onRowsChange: updated => setRows(updated as LeafRow[]),
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
        rowsGrouping: {
          view: 'merged',
          groupByState,
          rowKeyGetter: r => r.id,
          // Селектор группировки в блоке управления: пользователь сам выбирает,
          // по каким колонкам группировать (Дивизион/Управление/Команда).
          groupButton: {},
          // Гасим сортировку у группирующих колонок, чтобы она не конфликтовала
          // с порядком групп.
          disableGroupColumnsSort: true
        }
      }} columnConfig={LEAF_COLUMNS} rows={rows as LeafRow[]} />
      </div>;
  }
}`,...(eu=(uu=G.parameters)==null?void 0:uu.docs)==null?void 0:eu.source}}};const p4=["Showcase","SubRowsMerged","GroupingMerged"];export{G as GroupingMerged,N as Showcase,M as SubRowsMerged,p4 as __namedExportsOrder,g4 as default};
