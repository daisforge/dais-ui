import{r as s,d as e}from"./react-D2T61mpp.js";import{c as y}from"./tableData-UCfjiBCh.js";import H from"./DocStoryTemplate-Dt6KH5ne.js";import{S as O}from"./StoryHint-D7Z2UPWM.js";import{s as w}from"./storySourceDoc-tVKyHcEN.js";import{T as S}from"./TableCanvas-Z8xOVZVd.js";import{a2 as l}from"./@salutejs/sdds-finai-BaaqQyG7.js";const x={title:"Локальные компоненты/TableCanvas/HoverEffects",parameters:{docs:{page:H}},tags:["!autodocs"]},_=["row","row-custom-color","disabled"],I={disabled:{},row:{row:!0},"row-custom-color":{row:{color:"#FFF6E5"}}},M=["row","disabled"],R=["range-cell","multi-range-cell","cell","disabled"],A=[{key:"id",name:"ID",width:90},{key:"task",name:"Title",width:260},{key:"priority",name:"Priority",width:180},{key:"issueType",name:"Issue Type",width:180},{key:"complete",name:"% Complete",width:160}],d=o=>o.id+o.issueType,N=`
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

`,n={...w({preCode:N,previewSource:"shown"}),render:()=>{const[o,r]=s.useState("row"),[a,k]=s.useState("row"),[i,D]=s.useState("range-cell"),[c]=s.useState(y),B=s.useState(()=>new Set(c.filter(u=>[3,5].includes(Number(u.id))).map(d))),F=s.useMemo(()=>A,[]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{display:"grid",gap:12,maxWidth:420,marginBottom:16},children:[e.jsxDEV("div",{children:["hoverEffects (эффекты при наведении)",e.jsxDEV(l,{value:o,onChange:u=>r(u),items:_.map(u=>({label:u,value:u}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:128,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:126,columnNumber:11},void 0),e.jsxDEV("div",{children:["highlightActiveType (залипшая активная строка)",e.jsxDEV(l,{value:a,onChange:u=>k(u),items:M.map(u=>({label:u,value:u}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:140,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:138,columnNumber:11},void 0),e.jsxDEV("div",{children:["cellsSelection.mode (режим выделения)",e.jsxDEV(l,{value:i,onChange:u=>D(u),items:R.map(u=>({label:u,value:u}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:154,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:152,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:123,columnNumber:9},void 0),e.jsxDEV(O,{children:["Водите мышью по строкам — data-ячейки подсвечиваются серым, служебные колонки (нумерация/чекбокс) — голубым, как при селектинге. Checkbox-строки (3 и 5) под курсором темнеют целиком. Клик по строке (активная строка / выделение) рисуется ",e.jsxDEV("b",{children:"поверх"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:171,columnNumber:50},void 0)," hover-подсветки и перекрывает её; после сброса выделения hover снова виден."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:167,columnNumber:9},void 0),e.jsxDEV(S,{tableConfig:{containerStyle:{height:"700px",maxWidth:980},hoverEffects:I[o],highlightActiveType:a,cellsSelection:{mode:i},rowMarkers:{startIndex:1},selecting:{state:B,rowKeyGetter:d}},columnConfig:F,rows:c},[o,a,i].join("-"),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:175,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:122,columnNumber:7},void 0)}},t={name:"Минимальное включение",...w({preCode:N,previewSource:"shown"}),render:()=>{const[o]=s.useState(y),r=s.useMemo(()=>A,[]);return e.jsxDEV(S,{tableConfig:{containerStyle:{height:"600px"},hoverEffects:{row:!0}},columnConfig:r,rows:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.HoverEffects/TableCanvas.hoverEffects.stories.tsx",lineNumber:211,columnNumber:7},void 0)}};var m,v,f,E,C;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode,
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
селектинге), checkbox-строки под курсором темнеют целиком (как hover шапки).`,...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var h,p,b,g,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source},description:{story:"Минимальное включение: `tableConfig.hoverEffects: { row: true }` —\nhover-подсветка строки цветами из темы, без остальных фич.",...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.description}}};const V=["HoverEffectsPlayground","HoverEffectsRowSimple"],Y=Object.freeze(Object.defineProperty({__proto__:null,HoverEffectsPlayground:n,HoverEffectsRowSimple:t,__namedExportsOrder:V,default:x},Symbol.toStringTag,{value:"Module"}));export{Y as H};
