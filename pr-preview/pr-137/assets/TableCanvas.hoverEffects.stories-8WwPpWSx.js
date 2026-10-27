import{r as o,j as e}from"./react-CAOzMBF_.js";import{c as w}from"./tableData-DVJFoYoT.js";import D from"./DocStoryTemplate-Cf946dgV.js";import{S as _}from"./StoryHint-AurwRlnz.js";import{s as A}from"./storySourceDoc-tVKyHcEN.js";import{T}from"./TableCanvas-DlX-Wh2b.js";import{a3 as l}from"./@salutejs/sdds-finai-CKhMjg07.js";const I={title:"Локальные компоненты/TableCanvas/HoverEffects",parameters:{docs:{page:D}},tags:["!autodocs"]},x=["row","disabled"],M={disabled:{},row:{row:!0}},N=["row","disabled"],R=["range-cell","multi-range-cell","cell","disabled"],O=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],d=t=>t.id+t.issueType,k=`
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type HoverEffectsConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];
const getRowSelectionKey = (row: Row) => row.id + row.issueType;

`,P=`
import { useMemo, useState } from 'react';
import { Select } from '@daisforge/ui/components/Select';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type HoverEffectsConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Варианты значения tableConfig.hoverEffects для селекта.
type HoverEffectsOption = 'disabled' | 'row';

const HOVER_EFFECTS_OPTIONS: readonly HoverEffectsOption[] = ['row', 'disabled'];

// Каждый вариант это готовое значение tableConfig.hoverEffects.
const HOVER_EFFECTS_BY_OPTION: Record<HoverEffectsOption, HoverEffectsConfig> = {
  disabled: {},
  row: { row: true },
};

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: readonly HighlightActiveType[] = [
  'row',
  'disabled',
];

const SELECTION_MODE_OPTIONS: readonly CellsSelectionMode[] = [
  'range-cell',
  'multi-range-cell',
  'cell',
  'disabled',
];

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];
const getRowSelectionKey = (row: Row) => row.id + row.issueType;

`,n={...A({preCode:P,previewSource:"shown"}),render:()=>{const[t,r]=o.useState("row"),[s,B]=o.useState("row"),[a,F]=o.useState("range-cell"),[c]=o.useState(w),H=o.useState(()=>new Set(c.filter(u=>[3,5].includes(Number(u.id))).map(d))),b=o.useMemo(()=>O,[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420,marginBottom:16},children:[e.jsxs("div",{children:["hoverEffects (эффекты при наведении)",e.jsx(l,{value:t,onChange:u=>r(u),items:x.map(u=>({label:u,value:u}))})]}),e.jsxs("div",{children:["highlightActiveType (залипшая активная строка)",e.jsx(l,{value:s,onChange:u=>B(u),items:N.map(u=>({label:u,value:u}))})]}),e.jsxs("div",{children:["cellsSelection.mode (режим выделения)",e.jsx(l,{value:a,onChange:u=>F(u),items:R.map(u=>({label:u,value:u}))})]})]}),e.jsxs(_,{children:["Водите мышью по строкам — data-ячейки подсвечиваются серым, служебные колонки (нумерация/чекбокс) — голубым, как при селектинге. Checkbox-строки (3 и 5) под курсором темнеют целиком. Клик по строке (активная строка / выделение) рисуется ",e.jsx("b",{children:"поверх"})," hover-подсветки и перекрывает её; после сброса выделения hover снова виден."]}),e.jsx(T,{tableConfig:{containerStyle:{height:"700px",maxWidth:980},hoverEffects:M[t],highlightActiveType:s,cellsSelection:{mode:a},rowMarkers:{startIndex:1},selecting:{state:H,rowKeyGetter:d}},columnConfig:b,rows:c},[t,s,a].join("-"))]})}},i={name:"Минимальное включение",...A({preCode:k,previewSource:"shown"}),render:()=>{const[t]=o.useState(w),r=o.useMemo(()=>O,[]);return e.jsx(T,{tableConfig:{containerStyle:{height:"600px"},hoverEffects:{row:!0}},columnConfig:r,rows:t})}};var m,p,E,C,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: playgroundPreCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [hoverOption, setHoverOption] = useState<HoverEffectsOption>('row');
    const [highlightActiveType, setHighlightActiveType] = useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] = useState<CellsSelectionMode>('range-cell');
    const [rows] = useState(createRows);
    const selectingStateAndSetter = useState<ReadonlySet<string | number>>(() => new Set(rows.filter(row => [3, 5].includes(Number(row.id))).map(getRowSelectionKey)));
    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(() => COLUMN_CONFIG, []);
    return <>
        <div style={{
        display: 'grid',
        gap: 12,
        maxWidth: 420,
        marginBottom: 16
      }}>
          <div>
            hoverEffects (эффекты при наведении)
            <Select value={hoverOption} onChange={value => setHoverOption(value as HoverEffectsOption)} items={HOVER_EFFECTS_OPTIONS.map(item => ({
            label: item,
            value: item
          }))} />
          </div>

          <div>
            highlightActiveType (залипшая активная строка)
            <Select value={highlightActiveType} onChange={value => setHighlightActiveType(value as HighlightActiveType)} items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map(item => ({
            label: item,
            value: item
          }))} />
          </div>

          <div>
            cellsSelection.mode (режим выделения)
            <Select value={selectionMode} onChange={value => setSelectionMode(value as CellsSelectionMode)} items={SELECTION_MODE_OPTIONS.map(item => ({
            label: item,
            value: item
          }))} />
          </div>
        </div>

        <StoryHint>
          Водите мышью по строкам — data-ячейки подсвечиваются серым, служебные
          колонки (нумерация/чекбокс) — голубым, как при селектинге.
          Checkbox-строки (3 и 5) под курсором темнеют целиком. Клик по строке
          (активная строка / выделение) рисуется <b>поверх</b> hover-подсветки и
          перекрывает её; после сброса выделения hover снова виден.
        </StoryHint>

        <TableCanvas key={[hoverOption, highlightActiveType, selectionMode].join('-')} tableConfig={{
        containerStyle: {
          height: '700px',
          maxWidth: 980
        },
        hoverEffects: HOVER_EFFECTS_BY_OPTION[hoverOption],
        highlightActiveType,
        cellsSelection: {
          mode: selectionMode
        },
        rowMarkers: {
          startIndex: 1
        },
        selecting: {
          state: selectingStateAndSetter,
          rowKeyGetter: getRowSelectionKey
        }
      }} columnConfig={columnConfig} rows={rows} />
      </>;
  }
}`,...(E=(p=n.parameters)==null?void 0:p.docs)==null?void 0:E.source},description:{story:`Playground: hoverEffects.row (подсветка строки под курсором) вместе с
селектингом и highlightActiveType. Hover — самый нижний визуальный слой:
выделение ячеек/строк и «залипшая» активная строка рисуются поверх и
перекрывают его. Служебные колонки hovered-строки темнеют голубым (как при
селектинге), checkbox-строки под курсором темнеют целиком (как hover шапки).`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.description}}};var g,v,y,f,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Минимальное включение',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(() => COLUMN_CONFIG, []);
    return <TableCanvas tableConfig={{
      containerStyle: {
        height: '600px'
      },
      hoverEffects: {
        row: true
      }
    }} columnConfig={columnConfig} rows={rows} />;
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Минимальное включение: `tableConfig.hoverEffects: { row: true }` —\nhover-подсветка строки цветами из темы, без остальных фич.",...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};const j=["HoverEffectsPlayground","HoverEffectsRowSimple"],z=Object.freeze(Object.defineProperty({__proto__:null,HoverEffectsPlayground:n,HoverEffectsRowSimple:i,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{z as H};
