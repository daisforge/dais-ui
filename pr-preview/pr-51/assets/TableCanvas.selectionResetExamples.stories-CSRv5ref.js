import{r as o,b as e}from"./react-UEdzNlUe.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{T as D}from"./TableCanvas-BgFrXb2W.js";import{c as r}from"./@salutejs/sdds-finai-CkM2RoIx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./styled-components-CDfPITHT.js";import"./react-is-CJ4CjPIR.js";import"./vendor-DKFmtNka.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BPwY6D5E.js";import"./@daisforge/glide-data-grid-C5QNdvCg.js";import"./preload-helper-ByAByWgw.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./lodash.isequal-mFNAsUE8.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-n6-p8m07.js";import"./Typography-Bd5O8uMr.js";import"./ListOfFilters-BqHqasHC.js";import"./Table-CBJ48TmF.js";import"./react-data-grid-zJbN7yQ-.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-DXsvH6cQ.js";import"./unidentified@3x-Dft7iYeR.js";import"./MassActions-ii-BrK4d.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-DuuTPhvY.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-DkH6fLVA.js";const xe={title:"Локальные компоненты/TableCanvas/CellsSelection/Сброс выделения",tags:["!autodocs"]},y=[{key:"id",name:"ID",width:90,sortingType:"numberSort"},{key:"task",name:"Title",width:240,sortingType:"stringSort"},{key:"priority",name:"Priority",width:160,sortingType:"stringSort"},{key:"issueType",name:"Issue Type",width:160},{key:"complete",name:"% Complete",width:140,sortingType:"numberSort"}],c=25,p=Array.from({length:100},(t,i)=>({id:i,task:`Задача ${i}`,priority:i%2?"Средний":"Высокий",issueType:"Задача",complete:i%100})),N=`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig, SortColumn } from '@daisforge/ui/components/TableCanvas';
type Row = { id: number; task: string; priority: string; issueType: string; complete: number };
const COLUMNS: readonly ColumnConfig<Row>[] = ${JSON.stringify(y,null,2)};
const PAGE_SIZE = 25;
const allRows = Array.from({ length: 100 }, (_, id) => ({ id, task: 'Задача ' + id, priority: id % 2 ? 'Средний' : 'Высокий', issueType: 'Задача', complete: id % 100 }));
`,m={name:"Сброс при смене данных (демо)",...h({preCode:N,previewSource:"shown"}),render:()=>{const[t,i]=o.useState([]),[n,C]=o.useState(0),[v,l]=o.useState(0),[u,a]=o.useState(()=>p.slice(0,c)),[w,R]=o.useState(new Set),g=s=>{C(s),a(p.slice(s*c,(s+1)*c)),l(b=>b+1)},B=()=>{a(s=>s.map(b=>({...b})))},A=()=>{a(s=>[...s].reverse()),l(s=>s+1)};return e.jsxDEV("div",{style:{display:"grid",gap:12},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxDEV(r,{size:"xs",disabled:n===0,onClick:()=>g(n-1),children:"← Страница"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:91,columnNumber:11},void 0),e.jsxDEV(r,{size:"xs",disabled:(n+1)*c>=p.length,onClick:()=>g(n+1),children:"Страница →"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:98,columnNumber:11},void 0),e.jsxDEV(r,{size:"xs",view:"secondary",onClick:B,children:"Live-рефетч того же состава (рамка живёт)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:105,columnNumber:11},void 0),e.jsxDEV(r,{size:"xs",view:"secondary",onClick:A,children:"Рефетч с новым составом (сброс)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:108,columnNumber:11},void 0),e.jsxDEV("span",{style:{alignSelf:"center",fontSize:12},children:["страница ",n+1," · выбрано строк: ",w.size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:111,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:90,columnNumber:9},void 0),e.jsxDEV("div",{style:{height:420},children:e.jsxDEV(D,{rows:u,columnConfig:y,tableConfig:{sorting:{state:[t,i]},cellsSelection:{dataRevision:v,rowKeyGetter:s=>s.id},selecting:{state:[w,R],rowKeyGetter:s=>s.id},rowMarkers:{}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:116,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:115,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:89,columnNumber:7},void 0)}},d={name:"Диагностика: колонки при активном выделении",...h({preCode:N,previewSource:"shown"}),render:()=>{const[t,i]=o.useState(null),[n,C]=o.useState(!1),v=o.useMemo(()=>p.slice(0,30),[]),l=o.useMemo(()=>{let u=y.filter(a=>a.key!==t);return n&&(u=[...u].reverse()),u},[t,n]);return e.jsxDEV("div",{style:{display:"grid",gap:12},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxDEV(r,{size:"xs",view:"secondary",onClick:()=>i(u=>u==="priority"?null:"priority"),children:t?"Вернуть колонку Priority":"Скрыть колонку Priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:157,columnNumber:11},void 0),e.jsxDEV(r,{size:"xs",view:"secondary",onClick:()=>C(u=>!u),children:n?"Вернуть порядок колонок":"Обратный порядок колонок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:166,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:156,columnNumber:9},void 0),e.jsxDEV("div",{style:{height:420},children:e.jsxDEV(D,{rows:v,columnConfig:l,tableConfig:{cellsSelection:{rowKeyGetter:u=>u.id},rowMarkers:{}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:175,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:174,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.selectionResetExamples.stories.tsx",lineNumber:155,columnNumber:7},void 0)}};var f,E,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Сброс при смене данных (демо)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [page, setPage] = useState(0);
    // Версия меняется при смене страницы или порядка записей.
    const [revision, setRevision] = useState(0);
    const [rows, setRows] = useState<Row[]>(() => allRows.slice(0, PAGE_SIZE));
    const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(new Set());
    const goToPage = (next: number) => {
      setPage(next);
      setRows(allRows.slice(next * PAGE_SIZE, (next + 1) * PAGE_SIZE));
      setRevision(r => r + 1);
    };

    // Фоновое обновление сохраняет порядок и ключи записей.
    const refetchSame = () => {
      setRows(prev => prev.map(r => ({
        ...r
      })));
    };
    const refetchChanged = () => {
      setRows(prev => [...prev].reverse());
      setRevision(r => r + 1);
    };
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button size="xs" disabled={page === 0} onClick={() => goToPage(page - 1)}>
            ← Страница
          </Button>
          <Button size="xs" disabled={(page + 1) * PAGE_SIZE >= allRows.length} onClick={() => goToPage(page + 1)}>
            Страница →
          </Button>
          <Button size="xs" view="secondary" onClick={refetchSame}>
            Live-рефетч того же состава (рамка живёт)
          </Button>
          <Button size="xs" view="secondary" onClick={refetchChanged}>
            Рефетч с новым составом (сброс)
          </Button>
          <span style={{
          alignSelf: 'center',
          fontSize: 12
        }}>
            страница {page + 1} · выбрано строк: {selectedRows.size}
          </span>
        </div>
        <div style={{
        height: 420
      }}>
          <TableCanvas rows={rows} columnConfig={COLUMNS} tableConfig={{
          sorting: {
            state: [sortColumns, setSortColumns]
          },
          cellsSelection: {
            dataRevision: revision,
            rowKeyGetter: row => row.id
          },
          selecting: {
            state: [selectedRows, setSelectedRows],
            rowKeyGetter: row => row.id
          },
          rowMarkers: {}
        }} />
        </div>
      </div>;
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var k,x,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Диагностика: колонки при активном выделении',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [hiddenKey, setHiddenKey] = useState<string | null>(null);
    const [swapped, setSwapped] = useState(false);
    const rows = useMemo(() => allRows.slice(0, 30), []);
    const columns = useMemo(() => {
      let cols = COLUMNS.filter(c => c.key !== hiddenKey);
      if (swapped) {
        cols = [...cols].reverse();
      }
      return cols;
    }, [hiddenKey, swapped]);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button size="xs" view="secondary" onClick={() => setHiddenKey(k => k === 'priority' ? null : 'priority')}>
            {hiddenKey ? 'Вернуть колонку Priority' : 'Скрыть колонку Priority'}
          </Button>
          <Button size="xs" view="secondary" onClick={() => setSwapped(s => !s)}>
            {swapped ? 'Вернуть порядок колонок' : 'Обратный порядок колонок'}
          </Button>
        </div>
        <div style={{
        height: 420
      }}>
          <TableCanvas rows={rows} columnConfig={columns} tableConfig={{
          cellsSelection: {
            rowKeyGetter: row => row.id
          },
          rowMarkers: {}
        }} />
        </div>
      </div>;
  }
}`,...(T=(x=d.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const Te=["ProjectionResetDemo","ColumnBreakDiagnostic"];export{d as ColumnBreakDiagnostic,m as ProjectionResetDemo,Te as __namedExportsOrder,xe as default};
