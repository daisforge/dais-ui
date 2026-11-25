import{r as u,b as e}from"./react-UEdzNlUe.js";import{c as A}from"./tableData-DKA5H0bF.js";import me from"./DocStoryTemplate-DfMfxqA4.js";import{S as F}from"./StoryHint-BUaqSKKR.js";import{s as v}from"./storySourceDoc-tVKyHcEN.js";import{T as S}from"./TableCanvas-CP_lKDQl.js";import{c as d,k as P,K as Ce}from"./@salutejs/sdds-finai-mlEHigyJ.js";import{C as b}from"./@daisforge/glide-data-grid-BxeGd1ye.js";const be={title:"Локальные компоненты/TableCanvas/CellsSelection",tags:["!autodocs"],parameters:{docs:{page:me}}},ve=[{label:"range-cell",value:"range-cell"},{label:"multi-range-cell",value:"multi-range-cell"},{label:"cell",value:"cell"},{label:"disabled",value:"disabled"}],G={current:void 0,rows:b.empty(),columns:b.empty()},j=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],V=`
import {
  type ColumnConfig,
  CompactSelection,
  type GridSelection,
  type CellsSelectionMode,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

const SELECTION_MODE_OPTIONS: Array<{ label: string; value: CellsSelectionMode }> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' },
];

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];

`,y={name:"Режимы выделения (cellsSelection.mode)",...v({preCode:V,previewSource:"shown"}),render:()=>{const[t]=u.useState(A),[a,n]=u.useState("range-cell"),o=u.useMemo(()=>j,[]);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{maxWidth:320,marginBottom:12},children:e.jsxDEV(Ce,{label:"Режим выделения",value:a,onChange:s=>n(s),items:ve},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:102,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:101,columnNumber:9},void 0),e.jsxDEV(F,{children:[e.jsxDEV("b",{children:"range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:111,columnNumber:11},void 0)," — тянем мышкой диапазон ячеек."," ",e.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:112,columnNumber:11},void 0)," — то же + Ctrl/Cmd копит несколько диапазонов."," ",e.jsxDEV("b",{children:"cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:113,columnNumber:11},void 0)," — одиночная ячейка. ",e.jsxDEV("b",{children:"disabled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:113,columnNumber:43},void 0)," — выделение ячеек отключено.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:115,columnNumber:11},void 0),"Клик/драг по колонке нумерации → выделение строки (Ctrl — группа). Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно). Copy/Paste (Ctrl+C/V) работают по выделению."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:110,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:a},rowMarkers:{startIndex:1},editing:{onRowsChange:()=>{},rowKeyGetter:s=>`${s.id}`,defaultEnabled:!0}},columnConfig:o,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:121,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:100,columnNumber:7},void 0)}},T={name:"Контролируемое выделение извне (controlled)",...v({preCode:V,previewSource:"shown"}),render:()=>{const[t]=u.useState(A),a=u.useMemo(()=>j,[]),n=u.useState(G),[o,s]=n,c=o.current?`x=${o.current.range.x} y=${o.current.range.y} w=${o.current.range.width} h=${o.current.range.height}`:"нет выделения";return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:[e.jsxDEV(d,{onClick:()=>s(G),children:"Сбросить выделение"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:164,columnNumber:11},void 0),e.jsxDEV(d,{onClick:()=>s({current:{cell:[1,0],range:{x:1,y:0,width:2,height:3},rangeStack:[]},rows:b.empty(),columns:b.empty()}),children:"Выделить Title:Priority (строки 1–3)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:167,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:156,columnNumber:9},void 0),e.jsxDEV(F,{children:["Выделение — ",e.jsxDEV("b",{children:"controlled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:185,columnNumber:23},void 0)," через"," ",e.jsxDEV("code",{children:"tableConfig.cellsSelection.state"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:186,columnNumber:11},void 0)," ([value, setter]). Кнопки задают/сбрасывают внешний стейт, таблица реагирует. Контролируется нативная ось (ячейки/диапазон/смежные строки и колонки); несмежный Ctrl-выбор — внутренний.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:190,columnNumber:11},void 0),"Текущее выделение: ",e.jsxDEV("b",{children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:191,columnNumber:30},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:184,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",state:n},rowMarkers:{startIndex:1}},columnConfig:a,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:194,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:155,columnNumber:7},void 0)}},h={name:"Мультивыбор диапазонов (multi-range-cell)",...v({preCode:V,previewSource:"shown"}),render:()=>{const[t]=u.useState(A),a=u.useMemo(()=>j,[]),[n,o]=u.useState(null);return e.jsxDEV("div",{children:[e.jsxDEV(F,{children:[e.jsxDEV("b",{children:"multi-range-cell"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:223,columnNumber:11},void 0),": тяни мышкой диапазон, затем ",e.jsxDEV("b",{children:"Ctrl/Cmd"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:223,columnNumber:64},void 0)," + клик/драг — докидывай ещё диапазоны. Заливка — у всех выделенных, рамка — у последнего (рамку у каждого включает"," ",e.jsxDEV("code",{children:"outlineEachRange"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:226,columnNumber:11},void 0),", см. ниже).",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:227,columnNumber:11},void 0),e.jsxDEV("b",{children:"Copy (Ctrl+C):"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:228,columnNumber:11},void 0)," работает, если разрозненный выбор в пределах"," ",e.jsxDEV("b",{children:"одной колонки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:229,columnNumber:11},void 0)," или ",e.jsxDEV("b",{children:"одной строки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:229,columnNumber:36},void 0)," — промежутки схлопываются (значения копируются подряд), либо если куски складываются в сплошной прямоугольник. Разброс сразу по строкам и колонкам не копируется — в"," ",e.jsxDEV("b",{children:"notifications"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:232,columnNumber:11},void 0)," уходит ошибка (плашка ниже).",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:233,columnNumber:11},void 0),e.jsxDEV("b",{children:"Paste"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:234,columnNumber:11},void 0)," со схлопыванием промежутков — в режиме редактирования, см. ",e.jsxDEV("b",{children:"Copy-Paste-Fill"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:235,columnNumber:15},void 0),"."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:222,columnNumber:9},void 0),n&&e.jsxDEV("p",{style:{fontSize:13,marginBottom:8,padding:"6px 10px",borderRadius:6,background:"#fdecec",color:"#a33"},children:["notifications: ",n]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:239,columnNumber:11},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell"},rowMarkers:{startIndex:1},notifications:{onNotification:s=>o(`[${s.type}/${s.level}] ${s.message} (${s.code})`)}},columnConfig:a,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:253,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:221,columnNumber:7},void 0)}},w={name:"Рамка у каждого Ctrl-диапазона (outlineEachRange)",...v({preCode:V,previewSource:"shown"}),render:()=>{const[t]=u.useState(A),a=u.useMemo(()=>j,[]),[n,o]=u.useState(!0);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{marginBottom:12},children:e.jsxDEV(P,{checked:n,onChange:s=>o(s.target.checked),label:e.jsxDEV("div",{children:"cellsSelection.outlineEachRange"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:287,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:284,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:283,columnNumber:9},void 0),e.jsxDEV(F,{children:["Выдели диапазон, затем с ",e.jsxDEV("b",{children:"Ctrl/Cmd"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:292,columnNumber:36},void 0)," добавь ещё несколько. С опцией рамка есть у каждого диапазона (как в Google Sheets), без неё — только у последнего, остальные показаны заливкой.",e.jsxDEV("br",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:295,columnNumber:11},void 0),"Протяни новый диапазон поверх старого: поглощённый диапазон рамку не получает. У соседних диапазонов на стыке видна общая линия."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:291,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"multi-range-cell",outlineEachRange:n},rowMarkers:{startIndex:1}},columnConfig:a,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:300,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:282,columnNumber:7},void 0)}},N={name:"Включение/выключение колонок и строк",...v({preCode:V,previewSource:"shown"}),render:()=>{const[t]=u.useState(A),a=u.useMemo(()=>j,[]),[n,o]=u.useState(!0),[s,c]=u.useState(!0);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:20,marginBottom:12},children:[e.jsxDEV(P,{checked:n,onChange:l=>o(l.target.checked),label:e.jsxDEV("div",{children:"enableColumnSelection"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:329,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:326,columnNumber:11},void 0),e.jsxDEV(P,{checked:s,onChange:l=>c(l.target.checked),label:e.jsxDEV("div",{children:"enableRowSelection"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:334,columnNumber:20},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:331,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:325,columnNumber:9},void 0),e.jsxDEV(F,{children:"Сними галочку — клик по шапке (колонки) или по колонке нумерации (строки) перестанет выделять. Выделение ячеек мышью при этом продолжает работать."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:338,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},cellsSelection:{mode:"range-cell",enableColumnSelection:n,enableRowSelection:s},rowMarkers:{startIndex:1}},columnConfig:a,rows:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:344,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:324,columnNumber:7},void 0)}},D={args:{replaceOnLoad:!1,extraRows:0},argTypes:{replaceOnLoad:{name:"Заменить таблицу оверлеем на время запроса"},extraRows:{name:"Дополнительные строки",control:{type:"select"},options:[0,100]}},name:"Серверная сортировка",...v({preCode:`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import { CompactSelection, type GridSelection, type SortColumn } from '@daisforge/ui/components/TableCanvas';`,type:"code",previewSource:"shown"}),render:({replaceOnLoad:t=!1,extraRows:a=0})=>{var E;const[n,o]=u.useState(!1),s=u.useMemo(()=>{const r=[{id:10,department:"Учёт",name:"Анна"},{id:20,department:"Учёт",name:"Борис"},{id:30,department:"Склад",name:"Вера"},{id:40,department:"Склад",name:"Глеб"},...Array.from({length:a},(g,m)=>({id:50+m,department:`Отдел ${m}`,name:`Сотрудник ${m}`}))];return n?r.reverse():r},[a,n]),c=u.useState({rows:b.empty(),columns:b.empty()}),[l,C]=u.useState([]),[p,R]=u.useState(!1),[f,I]=u.useState(!1),M=u.useMemo(()=>{const r={key:"department",name:"Отдел",width:130},g={key:"name",name:"Имя",width:150},m={key:"id",name:"ID",width:100,sortingType:"numberSort"};return f?[g,r,m]:[r,g,m]},[f]),{current:i}=c[0];return e.jsxDEV("div",{style:{display:"grid",gap:12},children:[e.jsxDEV("p",{children:"Выделите несколько ячеек. Запросите сортировку, затем примените ответ сервера."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:420,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:8},children:[e.jsxDEV(d,{disabled:p,onClick:()=>{var r;C([{columnKey:"id",direction:((r=l[0])==null?void 0:r.direction)==="DESC"?"ASC":"DESC"}]),R(!0)},children:"Запросить сортировку"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:425,columnNumber:11},void 0),e.jsxDEV(d,{disabled:!p,onClick:()=>{o(r=>!r),R(!1)},children:"Применить ответ"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:440,columnNumber:11},void 0),e.jsxDEV(d,{onClick:()=>I(r=>!r),children:f?"Вернуть порядок колонок":"Переместить имя в начало"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:449,columnNumber:11},void 0),l.length>0&&!p&&e.jsxDEV(d,{onClick:()=>{const r=s.findIndex(m=>m.id===20),g=M.findIndex(m=>m.key==="name");g<0||r<0||c[1]({rows:b.empty(),columns:b.empty(),current:{cell:[g,r],range:{x:g,y:r,width:1,height:1},rangeStack:[]}})},children:"Выделить Бориса"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:453,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:424,columnNumber:9},void 0),e.jsxDEV("output",{children:i?`ID ${(E=s[i.cell[1]])==null?void 0:E.id}, колонка ${i.cell[0]+1}, диапазон ${i.range.width} × ${i.range.height}`:"Выделение пусто"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:473,columnNumber:9},void 0),e.jsxDEV(S,{rows:s,columnConfig:M,tableConfig:{containerStyle:{height:280},loadingOverlay:{active:t&&p},sorting:{state:[l,C],manualSorting:!0},mergeCells:{mergeByCellValues:["department"]},cellsSelection:{rowKeyGetter:r=>r.id,state:c}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:480,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:419,columnNumber:7},void 0)}},$=[{key:"id",name:"ID",width:90,sortingType:"numberSort"},{key:"task",name:"Title",width:240,sortingType:"stringSort"},{key:"priority",name:"Priority",width:160,sortingType:"stringSort"},{key:"issueType",name:"Issue Type",width:160},{key:"complete",name:"% Complete",width:140,sortingType:"numberSort"}],k=25,O=Array.from({length:100},(t,a)=>({id:a,task:`Задача ${a}`,priority:a%2?"Средний":"Высокий",issueType:"Задача",complete:a%100})),de=`type TaskRow = { id: number; task: string; priority: string; issueType: string; complete: number };
const COLUMNS: readonly ColumnConfig<TaskRow>[] = ${JSON.stringify($,null,2)};
const allRows = Array.from({ length: 100 }, (_, id) => ({ id, task: 'Задача ' + id, priority: id % 2 ? 'Средний' : 'Высокий', issueType: 'Задача', complete: id % 100 }));
`,x={name:"Смена страницы и обновление данных",...v({preCode:`import { useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig, SortColumn } from '@daisforge/ui/components/TableCanvas';
const PAGE_SIZE = ${k};
${de}`,type:"code",previewSource:"shown"}),render:()=>{const[t,a]=u.useState([]),[n,o]=u.useState(0),[s,c]=u.useState(0),[l,C]=u.useState(()=>O.slice(0,k)),[p,R]=u.useState(new Set),f=i=>{o(i),C(O.slice(i*k,(i+1)*k)),c(E=>E+1)},I=()=>{C(i=>i.map(E=>({...E})))},M=()=>{C(i=>[...i].reverse()),c(i=>i+1)};return e.jsxDEV("div",{style:{display:"grid",gap:12},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxDEV(d,{size:"xs",disabled:n===0,onClick:()=>f(n-1),children:"← Страница"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:579,columnNumber:11},void 0),e.jsxDEV(d,{size:"xs",disabled:(n+1)*k>=O.length,onClick:()=>f(n+1),children:"Страница →"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:586,columnNumber:11},void 0),e.jsxDEV(d,{size:"xs",view:"secondary",onClick:I,children:"Live-рефетч того же состава (рамка живёт)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:593,columnNumber:11},void 0),e.jsxDEV(d,{size:"xs",view:"secondary",onClick:M,children:"Рефетч с новым составом (сброс)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:596,columnNumber:11},void 0),e.jsxDEV("span",{style:{alignSelf:"center",fontSize:12},children:["страница ",n+1," · выбрано строк: ",p.size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:599,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:578,columnNumber:9},void 0),e.jsxDEV("div",{style:{height:420},children:e.jsxDEV(S,{rows:l,columnConfig:$,tableConfig:{sorting:{state:[t,a]},cellsSelection:{dataRevision:s,rowKeyGetter:i=>i.id},selecting:{state:[p,R],rowKeyGetter:i=>i.id},rowMarkers:{}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:604,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:603,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:577,columnNumber:7},void 0)}},B={name:"Скрытие и перестановка колонок",...v({preCode:`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig } from '@daisforge/ui/components/TableCanvas';
${de}`,type:"code",previewSource:"shown"}),render:()=>{const[t,a]=u.useState(null),[n,o]=u.useState(!1),s=u.useMemo(()=>O.slice(0,30),[]),c=u.useMemo(()=>{let l=$.filter(C=>C.key!==t);return n&&(l=[...l].reverse()),l},[t,n]);return e.jsxDEV("div",{style:{display:"grid",gap:12},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxDEV(d,{size:"xs",view:"secondary",onClick:()=>a(l=>l==="priority"?null:"priority"),children:t?"Вернуть колонку Priority":"Скрыть колонку Priority"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:652,columnNumber:11},void 0),e.jsxDEV(d,{size:"xs",view:"secondary",onClick:()=>o(l=>!l),children:n?"Вернуть порядок колонок":"Обратный порядок колонок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:661,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:651,columnNumber:9},void 0),e.jsxDEV("div",{style:{height:420},children:e.jsxDEV(S,{rows:s,columnConfig:c,tableConfig:{cellsSelection:{rowKeyGetter:l=>l.id},rowMarkers:{}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:670,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:669,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsSelection/TableCanvas.cellsSelection.stories.tsx",lineNumber:650,columnNumber:7},void 0)}};var _,L,K;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Режимы выделения (cellsSelection.mode)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    return <div>
        <div style={{
        maxWidth: 320,
        marginBottom: 12
      }}>
          <Select label="Режим выделения" value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS} />
        </div>

        <StoryHint>
          <b>range-cell</b> — тянем мышкой диапазон ячеек.{' '}
          <b>multi-range-cell</b> — то же + Ctrl/Cmd копит несколько диапазонов.{' '}
          <b>cell</b> — одиночная ячейка. <b>disabled</b> — выделение ячеек
          отключено.
          <br />
          Клик/драг по колонке нумерации → выделение строки (Ctrl — группа).
          Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно).
          Copy/Paste (Ctrl+C/V) работают по выделению.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: selectionMode
        },
        rowMarkers: {
          startIndex: 1
        },
        editing: {
          onRowsChange: () => undefined,
          rowKeyGetter: r => \`\${r.id}\`,
          defaultEnabled: true
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(K=(L=y.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var z,H,W;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Контролируемое выделение извне (controlled)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const gridSelectionState = useState<GridSelection>(EMPTY_SELECTION);
    const [gridSelection, setGridSelection] = gridSelectionState;
    const summary = gridSelection.current ? \`x=\${gridSelection.current.range.x} y=\${gridSelection.current.range.y} w=\${gridSelection.current.range.width} h=\${gridSelection.current.range.height}\` : 'нет выделения';
    return <div>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 12
      }}>
          <Button onClick={() => setGridSelection(EMPTY_SELECTION)}>
            Сбросить выделение
          </Button>
          <Button onClick={() => setGridSelection({
          current: {
            cell: [1, 0],
            range: {
              x: 1,
              y: 0,
              width: 2,
              height: 3
            },
            rangeStack: []
          },
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty()
        })}>
            Выделить Title:Priority (строки 1–3)
          </Button>
        </div>

        <StoryHint>
          Выделение — <b>controlled</b> через{' '}
          <code>tableConfig.cellsSelection.state</code> ([value, setter]).
          Кнопки задают/сбрасывают внешний стейт, таблица реагирует.
          Контролируется нативная ось (ячейки/диапазон/смежные строки и
          колонки); несмежный Ctrl-выбор — внутренний.
          <br />
          Текущее выделение: <b>{summary}</b>.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'range-cell',
          state: gridSelectionState
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(W=(H=T.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var U,Z,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Мультивыбор диапазонов (multi-range-cell)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    // Таблица сама тосты не рисует: ошибки copy/paste приходят в notifications,
    // показ — на стороне потребителя. Здесь показываем последнее событие плашкой.
    const [lastNotification, setLastNotification] = useState<string | null>(null);
    return <div>
        <StoryHint>
          <b>multi-range-cell</b>: тяни мышкой диапазон, затем <b>Ctrl/Cmd</b> +
          клик/драг — докидывай ещё диапазоны. Заливка — у всех выделенных,
          рамка — у последнего (рамку у каждого включает{' '}
          <code>outlineEachRange</code>, см. ниже).
          <br />
          <b>Copy (Ctrl+C):</b> работает, если разрозненный выбор в пределах{' '}
          <b>одной колонки</b> или <b>одной строки</b> — промежутки схлопываются
          (значения копируются подряд), либо если куски складываются в сплошной
          прямоугольник. Разброс сразу по строкам и колонкам не копируется — в{' '}
          <b>notifications</b> уходит ошибка (плашка ниже).
          <br />
          <b>Paste</b> со схлопыванием промежутков — в режиме редактирования,
          см. <b>Copy-Paste-Fill</b>.
        </StoryHint>

        {lastNotification && <p style={{
        fontSize: 13,
        marginBottom: 8,
        padding: '6px 10px',
        borderRadius: 6,
        background: '#fdecec',
        color: '#a33'
      }}>
            notifications: {lastNotification}
          </p>}

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'multi-range-cell'
        },
        rowMarkers: {
          startIndex: 1
        },
        notifications: {
          onNotification: event => setLastNotification(\`[\${event.type}/\${event.level}] \${event.message} (\${event.code})\`)
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(Y=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var J,X,q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Рамка у каждого Ctrl-диапазона (outlineEachRange)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [outlineEachRange, setOutlineEachRange] = useState(true);
    return <div>
        <div style={{
        marginBottom: 12
      }}>
          <Checkbox checked={outlineEachRange} onChange={e => setOutlineEachRange(e.target.checked)} label={<div>cellsSelection.outlineEachRange</div>} />
        </div>

        <StoryHint>
          Выдели диапазон, затем с <b>Ctrl/Cmd</b> добавь ещё несколько. С
          опцией рамка есть у каждого диапазона (как в Google Sheets), без неё —
          только у последнего, остальные показаны заливкой.
          <br />
          Протяни новый диапазон поверх старого: поглощённый диапазон рамку не
          получает. У соседних диапазонов на стыке видна общая линия.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'multi-range-cell',
          outlineEachRange
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(q=(X=w.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Q,ee,ue;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Включение/выключение колонок и строк',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [enableColumnSelection, setEnableColumnSelection] = useState(true);
    const [enableRowSelection, setEnableRowSelection] = useState(true);
    return <div>
        <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 12
      }}>
          <Checkbox checked={enableColumnSelection} onChange={e => setEnableColumnSelection(e.target.checked)} label={<div>enableColumnSelection</div>} />
          <Checkbox checked={enableRowSelection} onChange={e => setEnableRowSelection(e.target.checked)} label={<div>enableRowSelection</div>} />
        </div>

        <StoryHint>
          Сними галочку — клик по шапке (колонки) или по колонке нумерации
          (строки) перестанет выделять. Выделение ячеек мышью при этом
          продолжает работать.
        </StoryHint>

        <TableCanvas tableConfig={{
        containerStyle: {
          height: '600px'
        },
        cellsSelection: {
          mode: 'range-cell',
          enableColumnSelection,
          enableRowSelection
        },
        rowMarkers: {
          startIndex: 1
        }
      }} columnConfig={columnConfig} rows={rows} />
      </div>;
  }
}`,...(ue=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ue.source}}};var ne,se,ae;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    replaceOnLoad: false,
    extraRows: 0
  },
  argTypes: {
    replaceOnLoad: {
      name: 'Заменить таблицу оверлеем на время запроса'
    },
    extraRows: {
      name: 'Дополнительные строки',
      control: {
        type: 'select'
      },
      options: [0, 100]
    }
  },
  name: 'Серверная сортировка',
  ...storySourceDoc({
    preCode: \`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import { CompactSelection, type GridSelection, type SortColumn } from '@daisforge/ui/components/TableCanvas';\`,
    type: 'code',
    previewSource: 'shown'
  }),
  render: ({
    replaceOnLoad = false,
    extraRows = 0
  }) => {
    const [reversed, setReversed] = useState(false);
    const rows = useMemo(() => {
      const records = [{
        id: 10,
        department: 'Учёт',
        name: 'Анна'
      }, {
        id: 20,
        department: 'Учёт',
        name: 'Борис'
      }, {
        id: 30,
        department: 'Склад',
        name: 'Вера'
      }, {
        id: 40,
        department: 'Склад',
        name: 'Глеб'
      }, ...Array.from({
        length: extraRows
      }, (_, i) => ({
        id: 50 + i,
        department: \`Отдел \${i}\`,
        name: \`Сотрудник \${i}\`
      }))];
      return reversed ? records.reverse() : records;
    }, [extraRows, reversed]);
    const selection = useState<GridSelection>({
      rows: CompactSelection.empty(),
      columns: CompactSelection.empty()
    });
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [waiting, setWaiting] = useState(false);
    const [nameFirst, setNameFirst] = useState(false);
    const columns = useMemo(() => {
      const department = {
        key: 'department',
        name: 'Отдел',
        width: 130
      };
      const name = {
        key: 'name',
        name: 'Имя',
        width: 150
      };
      const id = {
        key: 'id',
        name: 'ID',
        width: 100,
        sortingType: 'numberSort' as const
      };
      return nameFirst ? [name, department, id] : [department, name, id];
    }, [nameFirst]);
    const {
      current
    } = selection[0];
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <p>
          Выделите несколько ячеек. Запросите сортировку, затем примените ответ
          сервера.
        </p>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button disabled={waiting} onClick={() => {
          setSortColumns([{
            columnKey: 'id',
            direction: sortColumns[0]?.direction === 'DESC' ? 'ASC' : 'DESC'
          }]);
          setWaiting(true);
        }}>
            Запросить сортировку
          </Button>
          <Button disabled={!waiting} onClick={() => {
          setReversed(prev => !prev);
          setWaiting(false);
        }}>
            Применить ответ
          </Button>
          <Button onClick={() => setNameFirst(prev => !prev)}>
            {nameFirst ? 'Вернуть порядок колонок' : 'Переместить имя в начало'}
          </Button>
          {sortColumns.length > 0 && !waiting && <Button onClick={() => {
          const y = rows.findIndex(row => row.id === 20);
          const x = columns.findIndex(column => column.key === 'name');
          if (x < 0 || y < 0) return;
          selection[1]({
            rows: CompactSelection.empty(),
            columns: CompactSelection.empty(),
            current: {
              cell: [x, y],
              range: {
                x,
                y,
                width: 1,
                height: 1
              },
              rangeStack: []
            }
          });
        }}>
              Выделить Бориса
            </Button>}
        </div>
        <output>
          {current ? \`ID \${rows[current.cell[1]]?.id}, колонка \${current.cell[0] + 1}, диапазон \${current.range.width} × \${current.range.height}\` : 'Выделение пусто'}
        </output>
        <TableCanvas rows={rows} columnConfig={columns} tableConfig={{
        containerStyle: {
          height: 280
        },
        loadingOverlay: {
          active: replaceOnLoad && waiting
        },
        sorting: {
          state: [sortColumns, setSortColumns],
          manualSorting: true
        },
        mergeCells: {
          mergeByCellValues: ['department']
        },
        cellsSelection: {
          rowKeyGetter: row => row.id,
          state: selection
        }
      }} />
      </div>;
  }
}`,...(ae=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,le,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Смена страницы и обновление данных',
  ...storySourceDoc({
    preCode: \`import { useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig, SortColumn } from '@daisforge/ui/components/TableCanvas';
const PAGE_SIZE = \${PAGE_SIZE};
\${taskTableDataCode}\`,
    type: 'code',
    previewSource: 'shown'
  }),
  render: () => {
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [page, setPage] = useState(0);
    // Версия меняется при смене страницы или порядка записей.
    const [revision, setRevision] = useState(0);
    const [rows, setRows] = useState<TaskRow[]>(() => allRows.slice(0, PAGE_SIZE));
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
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var te,re,ce;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Скрытие и перестановка колонок',
  ...storySourceDoc({
    preCode: \`import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig } from '@daisforge/ui/components/TableCanvas';
\${taskTableDataCode}\`,
    type: 'code',
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
}`,...(ce=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};const Se=["SelectionModes","Controlled","MultiRangeSelect","OutlineEachRange","EnableToggles","ServerSort","ProjectionResetDemo","ColumnBreakDiagnostic"],we=Object.freeze(Object.defineProperty({__proto__:null,ColumnBreakDiagnostic:B,Controlled:T,EnableToggles:N,MultiRangeSelect:h,OutlineEachRange:w,ProjectionResetDemo:x,SelectionModes:y,ServerSort:D,__namedExportsOrder:Se,default:be},Symbol.toStringTag,{value:"Module"}));export{we as C};
