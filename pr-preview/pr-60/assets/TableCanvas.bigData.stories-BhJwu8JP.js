import{r,d as e}from"./react-D2T61mpp.js";import{S as I}from"./StoryHint-D7Z2UPWM.js";import{T as $,C}from"./TableCanvas-Dt8xRfXR.js";import{T as H}from"./TextField-ARi4EvId.js";import{af as z,b as P,z as w}from"./@salutejs/sdds-finai-D2mCi4R2.js";import"./FiltersActions-Gpsa9ZE5.js";import"./IconButton-CL8_KbII.js";import"./@salutejs/plasma-icons-DtkePaSU.js";import"./styled-components-Dk5h8vLx.js";import"./react-is-Clcustum.js";import"./vendor-DyskUa3R.js";import"./@tanstack/react-virtual-C-_FPY_A.js";import"./tslib-De9GV7Vy.js";import"./utils-r6DIgRyT.js";import"./constants-Ci5uyz-N.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BBCb41Bg.js";import"./AnalyticalWidget-s5EaFQsy.js";import"./Collapse-BPaM4yD6.js";import"./Table-BiGP4Hng.js";import"./react-data-grid-COE9myPN.js";import"./TableTabs-DGWc8_Mi.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-BfIq2Fs7.js";import"./ListOfFilters-C7F3Id8G.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-4yxCEElD.js";import"./sharedUtilsInputs-DdKXEku7.js";import"./EmptyState-Dq5R8LaK.js";import"./MassActions-BKuDN-gA.js";import"./Autocomplete-LhH3FtBb.js";import"./TableGlide-D_5H3XZ9.js";import"./@glideappsfinal/glide-data-grid-BEk6toGU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-8qzLcSq4.js";const Fu={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
производительности таблицы (выделение, скролл, сайдбар, редактирование) и
поведения фич на масштабе. Переключатели:

- «объединение»: строки как дерево subRows с merged-колонками иерархии
  либо плоский список без subRows вообще;
- «тяжёлые ячейки»: renderCell с Canvas.Badge и контейнерами либо
  максимально дешёвый Canvas.Text;
- «редактирование»: режим редактирования с error-правилом на колонке Факт.

Поверх таблицы HUD с метриками производительности (описание метрик — на
самой странице стори).`}}}},y=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],F=20,R=10,S=5,W=F*R*S;function _(s,n){const l=Math.max(1,Math.round(s/W));let o=0,m=0;const g=[],d=[];for(let a=0;a<F;a+=1){const t=`Дивизион ${a+1}`,c=[];for(let u=0;u<R;u+=1){const b=`Управление ${u+1}`,E=[];for(let v=0;v<S;v+=1){const h=`Команда ${v+1}`,D=[];for(let f=0;f<l;f+=1){const p=5e5+o*37%20*5e4,k=`${y[o%y.length]} ${o+1}`,x=Math.round(p*(.6+o*13%40/100));n?D.push({id:`e${o}`,employee:k,plan:p,fact:x}):d.push({id:`e${o}`,employee:k,plan:p,fact:x,division:t,unit:b,team:h}),o+=1,m+=1}n&&E.push({id:`d${a}u${u}t${v}`,team:h,subRows:D})}n&&c.push({id:`d${a}u${u}`,unit:b,subRows:E})}n&&g.push({id:`d${a}`,division:t,subRows:c})}return{rows:n?g:d,leaves:m}}function U(s){let n=2166136261;for(let l=0;l<s.length;l+=1)n^=s.charCodeAt(l),n=Math.imul(n,16777619);return n>>>0}function T(s,n){return(U(s)^Math.imul(n+1,2654435761))%1e3}function K(s){return s>750?"accent":s>500?"warning":s>250?"dark":"negative"}function G(s,n,l){const o=l?{error:{value:d=>(d.fact??0)<(d.plan??0)*.7}}:{},m=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...l&&{editingCell:{component:"inputNumber"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...l&&{editingCell:{component:"inputNumber",...o}}}],g=Array.from({length:s},(d,a)=>{const t={key:`m${a}`,name:`M${a+1}`,width:84};if(!n)return t.renderCell=({row:u})=>e.jsxDEV(C.Text,{children:u!=null&&u.id?String(T(u.id,a)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:195,columnNumber:11},this),t;const c=a%4;return c===0?t.renderCell=({row:u})=>e.jsxDEV(C.Container,{justifyContent:"center",alignItems:"center",children:e.jsxDEV(C.Text,{children:u!=null&&u.id?String(T(u.id,a)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:203,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:202,columnNumber:11},this):c===1?t.renderCell=({row:u})=>{const b=u!=null&&u.id?T(u.id,a):0;return e.jsxDEV(C.Container,{justifyContent:"center",alignItems:"center",children:e.jsxDEV(C.Badge,{pilled:!0,view:K(b),text:String(b)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:213,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:212,columnNumber:13},this)}:c===2?t.renderCell=({row:u,theme:b})=>e.jsxDEV(C.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:b.cellHorizontalPadding},children:e.jsxDEV(C.Text,{children:u!=null&&u.id?`${T(u.id,a)%100}%`:""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:224,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:219,columnNumber:11},this):t.renderCell=({row:u,theme:b})=>e.jsxDEV(C.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:b.cellHorizontalPadding},children:e.jsxDEV(C.Text,{children:u!=null&&u.id?"метка":""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:236,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:231,columnNumber:11},this),t});return[...m,...g]}const O=s=>s.toLocaleString("ru-RU");function q({commitsRef:s}){const[n,l]=r.useState({fps:0,commits:0,avgMs:0,maxMs:0});return r.useEffect(()=>{let o=0,m=0;const g=()=>{o+=1,m=requestAnimationFrame(g)};m=requestAnimationFrame(g);const d=setInterval(()=>{const a=s.current;s.current=[];const t=a.reduce((c,u)=>c+u,0);l({fps:o,commits:a.length,avgMs:a.length?Math.round(t/a.length*10)/10:0,maxMs:a.length?Math.round(Math.max(...a)*10)/10:0}),o=0},1e3);return()=>{cancelAnimationFrame(m),clearInterval(d)}},[s]),e.jsxDEV("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:n.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",e.jsxDEV("b",{children:n.fps},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:298,columnNumber:12},this)," · коммитов/с: ",e.jsxDEV("b",{children:n.commits},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:298,columnNumber:45},this)," · коммит сред: ",e.jsxDEV("b",{children:[n.avgMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:299,columnNumber:13},this)," · макс: ",e.jsxDEV("b",{children:[n.maxMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:299,columnNumber:45},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:290,columnNumber:5},this)}const N={name:"Большой набор данных (строки × колонки)",render:()=>{const[s,n]=r.useState(1e3),[l,o]=r.useState("50000"),[m,g]=r.useState(5e4),[d,a]=r.useState(!0),[t,c]=r.useState(!0),[u,b]=r.useState(!1),[E,v]=r.useState(null),h=r.useRef([]),D=r.useCallback((i,L,V)=>{h.current.push(V)},[]),{rows:f,leaves:p}=r.useMemo(()=>_(m,d),[m,d]);r.useEffect(()=>{v(null)},[f]);const k=E??f,x=r.useMemo(()=>G(s,t,u),[s,t,u]),j=r.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0},...d?{subRows:{getSubRows:i=>i==null?void 0:i.subRows,rowKeyGetter:i=>i.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...u?{editing:{onRowsChange:i=>v(i),rowKeyGetter:i=>i.id}}:{}}),[d,u]);return e.jsxDEV("div",{children:[e.jsxDEV(I,{children:"Пример на большом наборе данных: настройте число колонок и строк, включите нужные режимы и проверяйте выделение, скролл, сайдбар и редактирование. HUD справа показывает метрики производительности: FPS — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» — сколько раз в секунду React перерендерил таблицу (при протяжке выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» — среднее и максимальное время одного такого перерендера в миллисекундах, то есть цена реакции таблицы на одно действие."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:373,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[e.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",e.jsxDEV("b",{style:{minWidth:42},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:395,columnNumber:22},void 0),e.jsxDEV("div",{style:{width:220},children:e.jsxDEV(z,{value:s,min:1,max:1500,onChangeCommitted:i=>n(i)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:397,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:396,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:394,columnNumber:11},void 0),e.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",e.jsxDEV("div",{style:{width:130},children:e.jsxDEV(H,{value:l,type:"number",size:"s",onChange:i=>o(i.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:409,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:408,columnNumber:13},void 0),e.jsxDEV(P,{size:"s",view:"secondary",onClick:()=>g(Math.max(1,Number(l)||1)),children:"Построить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:416,columnNumber:13},void 0),e.jsxDEV("span",{style:{opacity:.75},children:["(листьев: ",e.jsxDEV("b",{children:O(p)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:424,columnNumber:25},void 0),")"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:423,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:406,columnNumber:11},void 0),e.jsxDEV(w,{label:"объединение (subRows merged)",checked:d,onChange:i=>a(i.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:428,columnNumber:11},void 0),e.jsxDEV(w,{label:"тяжёлые ячейки (Canvas.Badge)",checked:t,onChange:i=>c(i.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:434,columnNumber:11},void 0),e.jsxDEV(w,{label:"редактирование (error-ячейки)",checked:u,onChange:i=>b(i.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:440,columnNumber:11},void 0),e.jsxDEV(q,{commitsRef:h},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:446,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:384,columnNumber:9},void 0),e.jsxDEV(r.Profiler,{id:"big-data-table",onRender:D,children:e.jsxDEV($,{tableConfig:j,columnConfig:x,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:450,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:449,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:372,columnNumber:7},void 0)}};var B,A,M;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Большой набор данных (строки × колонки)',
  render: () => {
    const [cols, setCols] = useState(1000);
    const [rowInput, setRowInput] = useState('50000');
    const [rowTarget, setRowTarget] = useState(50000);
    const [withMerge, setWithMerge] = useState(true);
    const [heavyCells, setHeavyCells] = useState(true);
    const [withEditing, setWithEditing] = useState(false);
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
    const columns = useMemo(() => buildColumns(cols, heavyCells, withEditing), [cols, heavyCells, withEditing]);
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
      } : {})
    }), [withMerge, withEditing]);
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

          <PerfHudBadge commitsRef={commitsRef} />
        </div>

        <Profiler id="big-data-table" onRender={onRender}>
          <TableCanvas tableConfig={tableConfig} columnConfig={columns} rows={dataRows as Node[]} />
        </Profiler>
      </div>;
  }
}`,...(M=(A=N.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const Ru=["BigDataExample"];export{N as BigDataExample,Ru as __namedExportsOrder,Fu as default};
