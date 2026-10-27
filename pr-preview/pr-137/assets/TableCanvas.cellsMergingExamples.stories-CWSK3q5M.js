import{r as p,j as v}from"./react-CAOzMBF_.js";import{b as Eu}from"./tableData-DVJFoYoT.js";import{S as V}from"./StoryHint-AurwRlnz.js";import{s as q}from"./storySourceDoc-tVKyHcEN.js";import{T as O}from"./TableCanvas-DlX-Wh2b.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-EIxGvR70.js";import"./styled-components-DCFsnh-i.js";import"./react-is-vVGXX3JE.js";import"./vendor-DmWczWMC.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CKhMjg07.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BWfcXHB3.js";import"./IconButton-ZoRfzXaJ.js";import"./Box-DvvYTz20.js";import"./TextField-DpKf-85P.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./AiAgentPopup-zRx4ytCb.js";import"./TextArea-FtPqzh-q.js";import"./sharedUtilsResizable-BjlCs3KG.js";import"./Table-BQHrw1K6.js";import"./Collapse-CblE70vy.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-C6Rr5Gy-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DbDA-PPi.js";import"./@glideappsfinal/glide-data-grid-BB_xclG6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DGAhIiuN.js";import"./ListOfFilters-CMjwWdxj.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BqjpJJQW.js";import"./EmptyState-BCYMGuYF.js";import"./MassActions-Csxbu-7r.js";import"./Autocomplete-DE_6PTST.js";import"./ErrorPage-CE3N0REk.js";const y4={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой пример потребителя: иерархические данные с объединёнными ячейками и весь
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
не рассыпаются. Сортировка самих колонок иерархии (блоками) пока не реализована.`}}}},U="",yu=[{name:"Розничный бизнес",units:[{name:"Управление продаж",teams:["Команда Север","Команда Юг"]},{name:"Управление сервиса",teams:["Команда Онлайн","Команда Офис"]}]},{name:"Корпоративный бизнес",units:[{name:"Управление КИБ",teams:["Команда Крупные","Команда СМБ"]},{name:"Управление факторинга",teams:["Команда Экспорт"]}]},{name:"Цифровые платформы",units:[{name:"Управление разработки",teams:["Команда Мобайл","Команда Веб"]},{name:"Управление данных",teams:["Команда ML"]}]}],j=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Соколова","Морозов","Лебедева","Козлов","Новикова"],Cu=()=>{const u=Eu(7),t=(e,i)=>Math.round((e+u()*(i-e))/1e3)*1e3;let n=0;return yu.map((e,i)=>({id:`dv${i}`,division:e.name,subRows:e.units.map((g,l)=>({id:`dv${i}u${l}`,unit:g.name,subRows:g.teams.map((s,m)=>({id:`dv${i}u${l}t${m}`,team:s,subRows:Array.from({length:12+Math.floor(u()*16)},()=>{const r=t(6e5,24e5),f={id:`e${n}`,employee:`${j[n%j.length]} ${n+1}`,plan:r,fact:Math.round(r*(.55+u()*.7)/1e3)*1e3,conversion:Math.round((12+u()*48)*10)/10,avgCheck:t(3e3,6e4)};return n+=1,f})}))}))}))},tu=(u,t={})=>{const n=[];return u.forEach(e=>{var g;const i={division:e.division??t.division,unit:e.unit??t.unit,team:e.team??t.team};if((g=e.subRows)!=null&&g.length)n.push(...tu(e.subRows,i));else{const l=i.division??"",s=i.unit??"",m=i.team??"";n.push({id:e.id,division:l,unit:s,team:m,employee:e.employee??"",plan:e.plan??0,fact:e.fact??0,conversion:e.conversion??0,avgCheck:e.avgCheck??0,divPath:l,unitPath:[l,s].join(U),teamPath:[l,s,m].join(U)})}}),n},nu=Cu(),ou=tu(nu),_={employee:"",plan:"",fact:"",conversion:"Все",avgCheck:""},T=u=>{const t=Number(u);return u.trim()!==""&&Number.isFinite(t)?t:null},wu=(u,t)=>{const{query:n,filters:e,sort:i,page:g,perPage:l}=t;let s=[...u];const m=n.trim().toLowerCase();m&&(s=s.filter(a=>[a.employee,a.team,a.unit,a.division].some(h=>h.toLowerCase().includes(m))||[a.plan,a.fact,a.avgCheck].some(h=>String(h).includes(m))));const r=e.employee.trim().toLowerCase();r&&(s=s.filter(a=>a.employee.toLowerCase().includes(r)));const f=T(e.plan);f!==null&&(s=s.filter(a=>a.plan>=f));const b=T(e.fact);b!==null&&(s=s.filter(a=>a.fact>=b));const C=T(e.avgCheck);C!==null&&(s=s.filter(a=>a.avgCheck>=C)),e.conversion==="low"?s=s.filter(a=>a.conversion<20):e.conversion==="mid"?s=s.filter(a=>a.conversion>=20&&a.conversion<=40):e.conversion==="high"&&(s=s.filter(a=>a.conversion>40));const w=i[0];if(w){const{columnKey:a,direction:h}=w,c=h==="ASC"?1:-1,o=new Map;s.forEach(d=>{const E=o.get(d.teamPath);E?E.push(d):o.set(d.teamPath,[d])}),o.forEach(d=>{d.sort((E,F)=>{const B=E[a],P=F[a];return typeof B=="number"&&typeof P=="number"?(B-P)*c:String(B).localeCompare(String(P))*c})}),s=Array.from(o.values()).flat()}const y=s.length,S=(g-1)*l;return{pageRows:s.slice(S,S+l),total:y}},hu=(u,t)=>[u.employee??"",t.division,t.unit,t.team,String(u.plan??""),String(u.fact??""),String(u.conversion??""),String(u.avgCheck??"")].join(" ").toLowerCase(),Su=(u,t)=>{const n=t.employee.trim().toLowerCase();if(n&&!(u.employee??"").toLowerCase().includes(n))return!1;const e=T(t.plan);if(e!==null&&(u.plan??0)<e)return!1;const i=T(t.fact);if(i!==null&&(u.fact??0)<i)return!1;const g=T(t.avgCheck);if(g!==null&&(u.avgCheck??0)<g)return!1;const l=u.conversion??0;return!(t.conversion==="low"&&!(l<20)||t.conversion==="mid"&&!(l>=20&&l<=40)||t.conversion==="high"&&!(l>40))},Q=u=>u.division??u.unit??u.team??"",vu=(u,t)=>{const{query:n,filters:e,sort:i,page:g,perPage:l}=t,s=n.trim().toLowerCase(),m=i[0],r=m==null?void 0:m.columnKey,f=(m==null?void 0:m.direction)==="ASC"?1:-1,b=["employee","plan","fact","conversion","avgCheck"],C=["division","unit","team"],w=!!r&&b.includes(r),y=!!r&&C.includes(r),S=(o,d)=>{var F,B,P;const E=[];return o.forEach(R=>{var $;const I={division:R.division??d.division,unit:R.unit??d.unit,team:R.team??d.team},A=R.subRows??[];if(A.length>0&&!(($=A[0])!=null&&$.subRows)){let D=A.filter(k=>s&&!hu(k,I).includes(s)?!1:Su(k,e));if(w&&(D=[...D].sort((k,fu)=>{const N=k[r],K=fu[r];return typeof N=="number"&&typeof K=="number"?(N-K)*f:String(N??"").localeCompare(String(K??""))*f})),!D.length)return;E.push({...R,subRows:D})}else if(A.length){const D=S(A,I);if(!D.length)return;E.push({...R,subRows:D})}}),y&&(r==="division"&&((F=E[0])==null?void 0:F.division)!==void 0||r==="unit"&&((B=E[0])==null?void 0:B.unit)!==void 0||r==="team"&&((P=E[0])==null?void 0:P.team)!==void 0)&&E.sort((I,A)=>Q(I).localeCompare(Q(A))*f),E},a=S(u,{division:"",unit:"",team:""}),h=a.length,c=(g-1)*l;return{pageTree:a.slice(c,c+l),totalDivisions:h}},bu=()=>{const[u,t]=p.useState(ou),[n,e]=p.useState(""),[i,g]=p.useState(_),[l,s]=p.useState([]),[m,r]=p.useState(1),[f,b]=p.useState(20),[C,w]=p.useState(new Set),y=p.useRef(null);p.useEffect(()=>{r(1)},[n,i,l]);const{pageRows:S,total:a}=p.useMemo(()=>wu(u,{query:n,filters:i,sort:l,page:m,perPage:f}),[u,n,i,l,m,f]);return{pageRows:S,shared:{containerStyle:{height:"78vh"},resizableColumn:!0,fullScreenEnabled:!0,rowMarkers:{startIndex:1},rowSize:{default:"medium",showInControl:!0},selecting:{state:[C,w],rowKeyGetter:o=>o.id,showDefault:!0,showInControl:!0},editing:{rowKeyGetter:o=>o.id,onRowsChange:o=>{const d=new Map(o.map(E=>[E.id,E]));t(E=>E.map(F=>d.get(F.id)??F))},onEnableEditing(o){y.current=u,o()},onCancel(o){y.current&&t(y.current),o()},onSave(o){y.current=null,o()}},mergeCells:{mergeByCellValues:[{colKey:"division",value:o=>o.divPath},{colKey:"unit",value:o=>o.unitPath},{colKey:"team",value:o=>o.teamPath}]},searching:{enabled:!0,manualSearching:!0,showSearchBlock:!0,placeholder:"Поиск по сотруднику, команде, сумме",searchQueryState:[n,e]},sorting:{state:[l,s],manualSorting:!0},filtering:{state:[i,g],manualFiltering:!0,filtersInfo:{employee:{label:"Сотрудник",clearedValue:""},plan:{label:"План (минимум)",clearedValue:""},fact:{label:"Факт (минимум)",clearedValue:""},conversion:{label:"Конверсия",clearedValue:"Все"},avgCheck:{label:"Средний чек (минимум)",clearedValue:""}}},pagination:{count:a,perPage:f,value:m,responsiveSlots:!0,onChangePageValue(o,d){typeof o=="number"&&(r(o),d())},onChange(o,d,E){typeof d=="number"&&d!==f?(b(d),r(1)):typeof o=="number"&&r(o),E()}}},flow:{total:a,perPage:f,page:m,query:n,sort:l,filters:i,selected:C.size}}},ru={key:"division",name:"Дивизион",width:190,rowsGrouping:{columnGroupLabel:"Дивизион"}},su={key:"unit",name:"Управление",width:210,rowsGrouping:{columnGroupLabel:"Управление"}},au={key:"team",name:"Команда",width:180,rowsGrouping:{columnGroupLabel:"Команда"},editingCell:{component:"inputString"}},iu={key:"employee",name:"Сотрудник",width:220,sortingType:"stringSort",searching:{valueInRow:u=>u.employee},filtering:{component:"input",filter:"includes",keyInFilterState:"employee",valueInRow:u=>u.employee}},lu={key:"plan",name:"План",width:150,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",searching:{valueInRow:u=>u.plan},filtering:{component:"input",filter:"includes",keyInFilterState:"plan",valueInRow:u=>u.plan}},cu={key:"fact",name:"Факт",width:150,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",searching:{valueInRow:u=>u.fact},filtering:{component:"input",filter:"includes",keyInFilterState:"fact",valueInRow:u=>u.fact}},mu={key:"conversion",name:"Конверсия, %",width:175,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",filtering:{component:"select",keyInFilterState:"conversion",valueInRow:u=>u.conversion,selectOptions:{type:"constant",options:[{value:"Все",text:"Все"},{value:"low",text:"до 20%"},{value:"mid",text:"20-40%"},{value:"high",text:"выше 40%"}]},filter:{typeOfValue:"single",filteringType:(u,t)=>{const n=Number(t);return u==="low"?n<20:u==="mid"?n>=20&&n<=40:u==="high"?n>40:!0}}}},du={key:"avgCheck",name:"Средний чек",width:185,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",filtering:{component:"input",filter:"includes",keyInFilterState:"avgCheck",valueInRow:u=>u.avgCheck}},Fu=`
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
`,x={name:"mergeByCellValues: пример с серверными данными",...q({code:Fu,type:"code",previewSource:"shown"}),render:()=>{const{pageRows:u,shared:t}=bu(),n=[ru,su,au,iu,{key:"results",name:"Результаты за квартал",children:[{key:"sales",name:"Продажи",children:[lu,cu]},{key:"eff",name:"Эффективность",children:[mu,du]}]}];return v.jsxs("div",{children:[v.jsx(V,{children:"Полный пример: страницы, поиск, сортировку и фильтры готовит «сервер» (здесь он эмулируется), таблица рисует полученную страницу и сливает колонки иерархии."}),v.jsx(O,{tableConfig:{...t,columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0,pinning:!0,pinnedDefault:["division","unit","team","employee"]}},columnConfig:n,rows:u})]})}},pu=()=>{const[u,t]=p.useState(new Set);return{selectedIds:u,setSelectedIds:t,commonConfig:{containerStyle:{height:"74vh"},resizableColumn:!0,fullScreenEnabled:!0,rowMarkers:{startIndex:1},rowSize:{default:"medium",showInControl:!0},columnsGrouping:{squashEmptyCells:!0},columnsControl:{enable:!0}}}},G=(u,t,n)=>({key:u,name:t,width:n,contentFormat:"number",editingCell:{component:"inputNumber"},sortingType:"numberSort",searching:{valueInRow:e=>e[u]??0},filtering:{component:"input",filter:"includes",keyInFilterState:u,valueInRow:e=>e[u]??0}}),Ru=[{key:"division",name:"Дивизион",width:190,sortingType:"stringSort"},{key:"unit",name:"Управление",width:210,sortingType:"stringSort"},{key:"team",name:"Команда",width:170,sortingType:"stringSort"},{key:"employee",name:"Сотрудник",width:220,sortingType:"stringSort",searching:{valueInRow:u=>u.employee??""},filtering:{component:"input",filter:"includes",keyInFilterState:"employee",valueInRow:u=>u.employee??""}},{key:"results",name:"Результаты за квартал",children:[{key:"sales",name:"Продажи",children:[G("plan","План",150),G("fact","Факт",150)]},{key:"eff",name:"Эффективность",children:[G("conversion","Конверсия, %",175),G("avgCheck","Средний чек",185)]}]}],gu=(u,t)=>u.map(n=>{var i;if((i=n.subRows)!=null&&i.length)return{...n,subRows:gu(n.subRows,t)};const e=t.get(n.id);return e?{...n,...e}:n}),Au=[ru,su,au,iu,{key:"results",name:"Результаты за квартал",children:[{key:"sales",name:"Продажи",children:[lu,cu]},{key:"eff",name:"Эффективность",children:[mu,du]}]}],Du=`
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
`,L={name:"subRows: дерево с пагинацией",...q({code:Du,type:"code",previewSource:"shown"}),render:()=>{const{selectedIds:u,setSelectedIds:t,commonConfig:n}=pu(),[e,i]=p.useState(nu),g=p.useRef(e),[l,s]=p.useState(""),[m,r]=p.useState(_),[f,b]=p.useState([]),[C,w]=p.useState(1),[y,S]=p.useState(2);p.useEffect(()=>{w(1)},[l,m,f]);const{pageTree:a,totalDivisions:h}=p.useMemo(()=>vu(e,{query:l,filters:m,sort:f,page:C,perPage:y}),[e,l,m,f,C,y]);return v.jsxs("div",{children:[v.jsx(V,{children:"Поиск, сортировка и фильтры включены и считаются на стороне примера: дерево фильтруется целиком, сортировка показателей идёт внутри команд, страницы — по оставшимся дивизионам."}),v.jsx(O,{tableConfig:{...n,searching:{enabled:!0,manualSearching:!0,showSearchBlock:!0,placeholder:"Поиск по сотруднику, команде, сумме",searchQueryState:[l,s]},sorting:{state:[f,b],manualSorting:!0},filtering:{state:[m,r],manualFiltering:!0,filtersInfo:{employee:{label:"Сотрудник",clearedValue:""},plan:{label:"План (минимум)",clearedValue:""},fact:{label:"Факт (минимум)",clearedValue:""},conversion:{label:"Конверсия",clearedValue:"Все"},avgCheck:{label:"Средний чек (минимум)",clearedValue:""}}},pagination:{count:h,perPage:y,perPageList:[1,2,3],value:C,responsiveSlots:!0,onChangePageValue(c,o){typeof c=="number"&&(w(c),o())},onChange(c,o,d){typeof o=="number"&&o!==y?(S(o),w(1)):typeof c=="number"&&w(c),d()}},selecting:{state:[u,t],rowKeyGetter:c=>c.id,showDefault:!0,showInControl:!0},editing:{rowKeyGetter:c=>c.id,onRowsChange:c=>{const o=new Map(c.map(d=>[d.id,d]));i(d=>gu(d,o))},onEnableEditing:c=>{g.current=e,c()},onCancel:c=>{i(g.current),c()},onSave:c=>{c()}},subRows:{getSubRows:c=>c==null?void 0:c.subRows,rowKeyGetter:c=>c.id,view:"merged",mergedColumns:["division","unit","team"]}},columnConfig:Ru,rows:a})]})}},Bu=`
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
`,M={name:"rowsGrouping: группировка пользователем",...q({code:Bu,type:"code",previewSource:"shown"}),render:()=>{const{selectedIds:u,setSelectedIds:t,commonConfig:n}=pu(),[e,i]=p.useState(ou),g=p.useRef(e),l=p.useState(["division","unit","team"]),s=p.useState([]),m=p.useState({..._});return v.jsxs("div",{children:[v.jsx(V,{children:"Встроенные поиск, сортировка и фильтры работают как обычно — данные фильтруются и сортируются до сборки групп; сортировка по группирующим колонкам отключена. Пагинации нет: чтобы собрать группы, таблице нужны все строки сразу."}),v.jsx(O,{tableConfig:{...n,searching:{enabled:!0,showSearchBlock:!0,placeholder:"Поиск по сотруднику, команде, сумме"},sorting:{state:s},filtering:{state:m,filtersInfo:{employee:{label:"Сотрудник",clearedValue:""},plan:{label:"План (минимум)",clearedValue:""},fact:{label:"Факт (минимум)",clearedValue:""},conversion:{label:"Конверсия",clearedValue:"Все"},avgCheck:{label:"Средний чек (минимум)",clearedValue:""}}},selecting:{state:[u,t],rowKeyGetter:r=>r.id,showDefault:!0,showInControl:!0},editing:{rowKeyGetter:r=>r.id,onRowsChange:r=>i(r),onEnableEditing:r=>{g.current=e,r()},onCancel:r=>{i(g.current),r()},onSave:r=>{r()}},rowsGrouping:{view:"merged",groupByState:l,rowKeyGetter:r=>r.id,groupButton:{},disableGroupColumnsSort:!0}},columnConfig:Au,rows:e})]})}};var z,H,W;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(H=x.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var J,X,Y;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,uu,eu;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(eu=(uu=M.parameters)==null?void 0:uu.docs)==null?void 0:eu.source}}};const C4=["Showcase","SubRowsMerged","GroupingMerged"];export{M as GroupingMerged,x as Showcase,L as SubRowsMerged,C4 as __namedExportsOrder,y4 as default};
