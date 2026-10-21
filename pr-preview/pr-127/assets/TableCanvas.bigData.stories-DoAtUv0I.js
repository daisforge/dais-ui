import{r as i,d as u}from"./react-D2T61mpp.js";import{S as P}from"./StoryHint-D7Z2UPWM.js";import{T as _,C as v}from"./TableCanvas-BM21vy2M.js";import{T as L}from"./TextField-eUu_EFI_.js";import{af as U,t as K,A as T}from"./@salutejs/sdds-finai-BWYHBdru.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjF6Dnvr.js";import"./styled-components-C6nqWEvq.js";import"./react-is-Clcustum.js";import"./vendor-DIjqEUEl.js";import"./@tanstack/react-virtual-BrusU8ao.js";import"./tslib-DoU9Jm1N.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-lvaNTfmN.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-Ckc-8Z8F.js";import"./IconButton-D4JlXDHj.js";import"./Box-B7h5WACJ.js";import"./AiAgentPopup-D5grDdCA.js";import"./TextArea-zE2me0u4.js";import"./sharedUtilsInputs-cVlg4cVe.js";import"./sharedUtilsResizable-DAkmtp1h.js";import"./Table-rulM7ZbW.js";import"./Collapse-CpJlFoZJ.js";import"./react-data-grid-sYi6Azdk.js";import"./TableTabs-CfOO1eZV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BdZMuz5a.js";import"./@glideappsfinal/glide-data-grid-CX_t3Cwn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DpKuPtSC.js";import"./ListOfFilters-B94hvRdM.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-xDXRp2T_.js";import"./EmptyState-Bj8JSa3k.js";import"./MassActions-Om5LLvfi.js";import"./Autocomplete-BEFqgdwN.js";import"./ErrorPage-D7FE6ATJ.js";const Wu={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
производительности таблицы (выделение, скролл, сайдбар, редактирование) и
поведения фич на масштабе. Переключатели:

- «объединение»: строки как дерево subRows с merged-колонками иерархии
  либо плоский список без subRows вообще;
- «тяжёлые ячейки»: renderCell с Canvas.Badge и контейнерами либо
  максимально дешёвый Canvas.Text;
- «редактирование»: режим редактирования с error-правилом на колонке Факт.

Поверх таблицы HUD с метриками производительности (описание метрик — на
самой странице стори).`}}}},y=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],F=20,j=10,V=5,G=F*j*V;function O(s,n){const m=Math.max(1,Math.round(s/G));let r=0,g=0;const C=[],b=[];for(let a=0;a<F;a+=1){const l=`Дивизион ${a+1}`,c=[];for(let o=0;o<j;o+=1){const e=`Управление ${o+1}`,d=[];for(let h=0;h<V;h+=1){const p=`Команда ${h+1}`,E=[];for(let k=0;k<m;k+=1){const f=5e5+r*37%20*5e4,D=`${y[r%y.length]} ${r+1}`,x=Math.round(f*(.6+r*13%40/100));n?E.push({id:`e${r}`,employee:D,plan:f,fact:x}):b.push({id:`e${r}`,employee:D,plan:f,fact:x,division:l,unit:e,team:p}),r+=1,g+=1}n&&d.push({id:`d${a}u${o}t${h}`,team:p,subRows:E})}n&&c.push({id:`d${a}u${o}`,unit:e,subRows:d})}n&&C.push({id:`d${a}`,division:l,subRows:c})}return{rows:n?C:b,leaves:g}}function q(s){let n=2166136261;for(let m=0;m<s.length;m+=1)n^=s.charCodeAt(m),n=Math.imul(n,16777619);return n>>>0}function N(s,n){return(q(s)^Math.imul(n+1,2654435761))%1e3}function J(s){return s>750?"accent":s>500?"warning":s>250?"dark":"negative"}const A={plan:"",fact:""};function Q(s,n,m,r){const g=m?{error:{value:a=>(a.fact??0)<(a.plan??0)*.7}}:{},C=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...m&&{editingCell:{component:"inputNumber"}},...r&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"plan",valueInRow:a=>String(a.plan??""),filter:"startWith"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...m&&{editingCell:{component:"inputNumber",...g}},...r&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"fact",valueInRow:a=>String(a.fact??""),filter:"startWith"}}}],b=Array.from({length:s},(a,l)=>{const c={key:`m${l}`,name:`M${l+1}`,width:84,...r&&{sortingType:"numberSort"}};if(!n)return c.renderCell=({row:e})=>u.jsxDEV(v.Text,{children:e!=null&&e.id?String(N(e.id,l)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:221,columnNumber:11},this),c;const o=l%4;return o===0?c.renderCell=({row:e})=>u.jsxDEV(v.Container,{justifyContent:"center",alignItems:"center",children:u.jsxDEV(v.Text,{children:e!=null&&e.id?String(N(e.id,l)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:229,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:228,columnNumber:11},this):o===1?c.renderCell=({row:e})=>{const d=e!=null&&e.id?N(e.id,l):0;return u.jsxDEV(v.Container,{justifyContent:"center",alignItems:"center",children:u.jsxDEV(v.Badge,{pilled:!0,view:J(d),text:String(d)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:239,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:238,columnNumber:13},this)}:o===2?c.renderCell=({row:e,theme:d})=>u.jsxDEV(v.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:d.cellHorizontalPadding},children:u.jsxDEV(v.Text,{children:e!=null&&e.id?`${N(e.id,l)%100}%`:""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:250,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:245,columnNumber:11},this):c.renderCell=({row:e,theme:d})=>u.jsxDEV(v.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:d.cellHorizontalPadding},children:u.jsxDEV(v.Text,{children:e!=null&&e.id?"метка":""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:262,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:257,columnNumber:11},this),c});return[...C,...b]}const X=s=>s.toLocaleString("ru-RU");function Y({commitsRef:s}){const[n,m]=i.useState({fps:0,commits:0,avgMs:0,maxMs:0});return i.useEffect(()=>{let r=0,g=0;const C=()=>{r+=1,g=requestAnimationFrame(C)};g=requestAnimationFrame(C);const b=setInterval(()=>{const a=s.current;s.current=[];const l=a.reduce((c,o)=>c+o,0);m({fps:r,commits:a.length,avgMs:a.length?Math.round(l/a.length*10)/10:0,maxMs:a.length?Math.round(Math.max(...a)*10)/10:0}),r=0},1e3);return()=>{cancelAnimationFrame(g),clearInterval(b)}},[s]),u.jsxDEV("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:n.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",u.jsxDEV("b",{children:n.fps},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:324,columnNumber:12},this)," · коммитов/с: ",u.jsxDEV("b",{children:n.commits},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:324,columnNumber:45},this)," · коммит сред: ",u.jsxDEV("b",{children:[n.avgMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:325,columnNumber:13},this)," · макс: ",u.jsxDEV("b",{children:[n.maxMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:325,columnNumber:45},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:316,columnNumber:5},this)}const w={name:"Большой набор данных (строки × колонки)",render:()=>{const[s,n]=i.useState(1e3),[m,r]=i.useState("50000"),[g,C]=i.useState(5e4),[b,a]=i.useState(!0),[l,c]=i.useState(!0),[o,e]=i.useState(!1),[d,h]=i.useState(!1),p=i.useState(A),E=i.useState([]),[k,f]=i.useState(null),D=i.useRef([]),x=i.useCallback((t,Z,z)=>{D.current.push(z)},[]),{rows:B,leaves:I}=i.useMemo(()=>O(g,b),[g,b]);i.useEffect(()=>{f(null)},[B]);const H=k??B,$=i.useMemo(()=>Q(s,l,o,d),[s,l,o,d]),W=i.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0},...b?{subRows:{getSubRows:t=>t==null?void 0:t.subRows,rowKeyGetter:t=>t.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...o?{editing:{onRowsChange:t=>f(t),rowKeyGetter:t=>t.id}}:{},...d?{sorting:{state:E},filtering:{state:p,clearedValue:A}}:{}}),[b,o,d,E,p]);return u.jsxDEV("div",{children:[u.jsxDEV(P,{children:"Пример на большом наборе данных: настройте число колонок и строк, включите нужные режимы и проверяйте выделение, скролл, сайдбар и редактирование. HUD справа показывает метрики производительности: FPS — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» — сколько раз в секунду React перерендерил таблицу (при протяжке выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» — среднее и максимальное время одного такого перерендера в миллисекундах, то есть цена реакции таблицы на одно действие."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:417,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[u.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",u.jsxDEV("b",{style:{minWidth:42},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:439,columnNumber:22},void 0),u.jsxDEV("div",{style:{width:220},children:u.jsxDEV(U,{value:s,min:1,max:1500,onChangeCommitted:t=>n(t)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:441,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:440,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:438,columnNumber:11},void 0),u.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",u.jsxDEV("div",{style:{width:130},children:u.jsxDEV(L,{value:m,type:"number",size:"s",onChange:t=>r(t.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:453,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:452,columnNumber:13},void 0),u.jsxDEV(K,{size:"s",view:"secondary",onClick:()=>C(Math.max(1,Number(m)||1)),children:"Построить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:460,columnNumber:13},void 0),u.jsxDEV("span",{style:{opacity:.75},children:["(листьев: ",u.jsxDEV("b",{children:X(I)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:468,columnNumber:25},void 0),")"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:467,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:450,columnNumber:11},void 0),u.jsxDEV(T,{label:"объединение (subRows merged)",checked:b,onChange:t=>a(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:472,columnNumber:11},void 0),u.jsxDEV(T,{label:"тяжёлые ячейки (Canvas.Badge)",checked:l,onChange:t=>c(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:478,columnNumber:11},void 0),u.jsxDEV(T,{label:"редактирование (error-ячейки)",checked:o,onChange:t=>e(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:484,columnNumber:11},void 0),u.jsxDEV(T,{label:"сортировка и фильтр в шапке",checked:d,onChange:t=>h(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:490,columnNumber:11},void 0),u.jsxDEV(Y,{commitsRef:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:496,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:428,columnNumber:9},void 0),u.jsxDEV(i.Profiler,{id:"big-data-table",onRender:x,children:u.jsxDEV(_,{tableConfig:W,columnConfig:$,rows:H},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:500,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:499,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:416,columnNumber:7},void 0)}};var S,M,R;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Большой набор данных (строки × колонки)',
  render: () => {
    const [cols, setCols] = useState(1000);
    const [rowInput, setRowInput] = useState('50000');
    const [rowTarget, setRowTarget] = useState(50000);
    const [withMerge, setWithMerge] = useState(true);
    const [heavyCells, setHeavyCells] = useState(true);
    const [withEditing, setWithEditing] = useState(false);
    const [withHeaderButtons, setWithHeaderButtons] = useState(false);
    const filteringStateAndSetter = useState(CLEARED_FILTERS);
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    // Правки пользователя поверх сгенерированных данных (режим редактирования).
    const [editedRows, setEditedRows] = useState<Node[] | null>(null);
    const commitsRef = useRef<number[]>([]);
    const onRender = useCallback((_id: string, _phase: string, actualDuration: number) => {
      commitsRef.current.push(actualDuration);
    }, []);
    const {
      rows: builtRows,
      leaves
    } = useMemo(() => buildData(rowTarget, withMerge), [rowTarget, withMerge]);
    useEffect(() => {
      setEditedRows(null);
    }, [builtRows]);
    const dataRows = editedRows ?? builtRows;
    const columns = useMemo(() => buildColumns(cols, heavyCells, withEditing, withHeaderButtons), [cols, heavyCells, withEditing, withHeaderButtons]);
    const tableConfig = useMemo(() => ({
      containerStyle: {
        height: '70vh'
      },
      rowMarkers: {
        startIndex: 1
      },
      resizableColumn: true,
      columnsControl: {
        enable: true,
        pinning: true
      },
      ...(withMerge ? {
        subRows: {
          getSubRows: (row: Node) => row?.subRows,
          rowKeyGetter: (row: Node) => row.id,
          view: 'merged' as const,
          mergedColumns: ['division', 'unit', 'team']
        }
      } : {}),
      ...(withEditing ? {
        editing: {
          onRowsChange: (next: Node[]) => setEditedRows(next),
          rowKeyGetter: (r: Node) => r.id
        }
      } : {}),
      ...(withHeaderButtons ? {
        sorting: {
          state: sortingStateAndSetter
        },
        filtering: {
          state: filteringStateAndSetter,
          clearedValue: CLEARED_FILTERS
        }
      } : {})
    }), [withMerge, withEditing, withHeaderButtons, sortingStateAndSetter, filteringStateAndSetter]);
    return <div>
        <StoryHint>
          Пример на большом наборе данных: настройте число колонок и строк,
          включите нужные режимы и проверяйте выделение, скролл, сайдбар и
          редактирование. HUD справа показывает метрики производительности: FPS
          — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» —
          сколько раз в секунду React перерендерил таблицу (при протяжке
          выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» —
          среднее и максимальное время одного такого перерендера в
          миллисекундах, то есть цена реакции таблицы на одно действие.
        </StoryHint>

        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '8px 4px 12px',
        fontSize: 13
      }}>
          <span style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}>
            Колонок: <b style={{
            minWidth: 42
          }}>{cols}</b>
            <div style={{
            width: 220
          }}>
              <Slider value={cols} min={1} max={1500} onChangeCommitted={value => setCols(value)} />
            </div>
          </span>

          <span style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}>
            Строк:
            <div style={{
            width: 130
          }}>
              <TextField value={rowInput} type="number" size="s" onChange={e => setRowInput(e.target.value)} />
            </div>
            <Button size="s" view="secondary" onClick={() => setRowTarget(Math.max(1, Number(rowInput) || 1))}>
              Построить
            </Button>
            <span style={{
            opacity: 0.75
          }}>
              (листьев: <b>{fmt(leaves)}</b>)
            </span>
          </span>

          <Checkbox label="объединение (subRows merged)" checked={withMerge} onChange={e => setWithMerge(e.target.checked)} />

          <Checkbox label="тяжёлые ячейки (Canvas.Badge)" checked={heavyCells} onChange={e => setHeavyCells(e.target.checked)} />

          <Checkbox label="редактирование (error-ячейки)" checked={withEditing} onChange={e => setWithEditing(e.target.checked)} />

          <Checkbox label="сортировка и фильтр в шапке" checked={withHeaderButtons} onChange={e => setWithHeaderButtons(e.target.checked)} />

          <PerfHudBadge commitsRef={commitsRef} />
        </div>

        <Profiler id="big-data-table" onRender={onRender}>
          <TableCanvas tableConfig={tableConfig} columnConfig={columns} rows={dataRows as Node[]} />
        </Profiler>
      </div>;
  }
}`,...(R=(M=w.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const zu=["BigDataExample"];export{w as BigDataExample,zu as __namedExportsOrder,Wu as default};
