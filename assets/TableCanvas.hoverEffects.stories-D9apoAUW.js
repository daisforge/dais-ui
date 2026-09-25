import{r as t,d as u}from"./react-D2T61mpp.js";import{c as T}from"./tableData-DVJFoYoT.js";import D from"./DocStoryTemplate-tvb6peuH.js";import{S as B}from"./StoryHint-D7Z2UPWM.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T as S}from"./TableCanvas-DsBJXw2Z.js";import{a2 as l}from"./@salutejs/sdds-finai-D4KNbPPv.js";const F={title:"Локальные компоненты/TableCanvas/HoverEffects",parameters:{docs:{page:D}},tags:["!autodocs"]},x=["row","disabled"],_={disabled:{},row:{row:!0}},I=["row","disabled"],M=["range-cell","multi-range-cell","cell","disabled"],A=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],d=o=>o.id+o.issueType,R=`
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

`,n={...w({preCode:P,previewSource:"shown"}),render:()=>{const[o,r]=t.useState("row"),[a,N]=t.useState("row"),[i,O]=t.useState("range-cell"),[c]=t.useState(T),k=t.useState(()=>new Set(c.filter(e=>[3,5].includes(Number(e.id))).map(d))),H=t.useMemo(()=>A,[]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV("div",{style:{display:"grid",gap:12,maxWidth:420,marginBottom:16},children:[u.jsxDEV("div",{children:["hoverEffects (эффекты при наведении)",u.jsxDEV(l,{value:o,onChange:e=>r(e),items:x.map(e=>({label:e,value:e}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:174,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:172,columnNumber:11},void 0),u.jsxDEV("div",{children:["highlightActiveType (залипшая активная строка)",u.jsxDEV(l,{value:a,onChange:e=>N(e),items:I.map(e=>({label:e,value:e}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:186,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:184,columnNumber:11},void 0),u.jsxDEV("div",{children:["cellsSelection.mode (режим выделения)",u.jsxDEV(l,{value:i,onChange:e=>O(e),items:M.map(e=>({label:e,value:e}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:200,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:198,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:169,columnNumber:9},void 0),u.jsxDEV(B,{children:["Водите мышью по строкам — data-ячейки подсвечиваются серым, служебные колонки (нумерация/чекбокс) — голубым, как при селектинге. Checkbox-строки (3 и 5) под курсором темнеют целиком. Клик по строке (активная строка / выделение) рисуется ",u.jsxDEV("b",{children:"поверх"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:217,columnNumber:50},void 0)," hover-подсветки и перекрывает её; после сброса выделения hover снова виден."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:213,columnNumber:9},void 0),u.jsxDEV(S,{tableConfig:{containerStyle:{height:"700px",maxWidth:980},hoverEffects:_[o],highlightActiveType:a,cellsSelection:{mode:i},rowMarkers:{startIndex:1},selecting:{state:k,rowKeyGetter:d}},columnConfig:H,rows:c},[o,a,i].join("-"),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:221,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:168,columnNumber:7},void 0)}},s={name:"Минимальное включение",...w({preCode:R,previewSource:"shown"}),render:()=>{const[o]=t.useState(T),r=t.useMemo(()=>A,[]);return u.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},hoverEffects:{row:!0}},columnConfig:r,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:257,columnNumber:7},void 0)}};var m,v,f,E,C;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:`Playground: hoverEffects.row (подсветка строки под курсором) вместе с
селектингом и highlightActiveType. Hover — самый нижний визуальный слой:
выделение ячеек/строк и «залипшая» активная строка рисуются поверх и
перекрывают его. Служебные колонки hovered-строки темнеют голубым (как при
селектинге), checkbox-строки под курсором темнеют целиком (как hover шапки).`,...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var h,p,b,g,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source},description:{story:"Минимальное включение: `tableConfig.hoverEffects: { row: true }` —\nhover-подсветка строки цветами из темы, без остальных фич.",...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};const V=["HoverEffectsPlayground","HoverEffectsRowSimple"],z=Object.freeze(Object.defineProperty({__proto__:null,HoverEffectsPlayground:n,HoverEffectsRowSimple:s,__namedExportsOrder:V,default:F},Symbol.toStringTag,{value:"Module"}));export{z as H};
