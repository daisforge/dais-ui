import{r,d as u}from"./react-D2T61mpp.js";import{S as j}from"./StoryHint-D7Z2UPWM.js";import{T as V,C}from"./TableCanvas-CtN9-Wkl.js";import"./FiltersActions-BAviSjrc.js";import"./IconButton-DqT4pF3Z.js";import"./@salutejs/plasma-icons-SUK_4DAI.js";import"./styled-components-Dnx_VmVL.js";import"./react-is-Clcustum.js";import"./vendor-DRdPmPF8.js";import"./tslib-De9GV7Vy.js";import"./@salutejs/sdds-finai-CtWutX-K.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-BDAMTscM.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bks7vH88.js";import"./TextField-Bh-SP-RY.js";import"./sharedUtilsInputs-B7pZRdjy.js";import"./AnalyticalWidget-UDK8qW_e.js";import"./Collapse-DmNZX9CQ.js";import"./Table-CMy_q9p7.js";import"./react-data-grid-BD18LvXI.js";import"./TableTabs-DVCaDLhn.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BqXKGq6r.js";import"./ListOfFilters-DKhetrR9.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C-O8AMYF.js";import"./EmptyState-go56CFl3.js";import"./MassActions-UuNbVvGi.js";import"./Autocomplete-CfQvQAJB.js";import"./TableGlide-Cf414VDU.js";import"./@glideappsfinal/glide-data-grid-D0sUWFTa.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BZl-cadC.js";const De={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Изоляция причин лага селектинга (протяжка синей рамки мышью) на больших
данных. В чистом glide DataEditor на тех же объёмах выделение быстрое,
в обёртке заметно медленнее. Стори даёт матрицу 2x2 переключателей:

- «объединение»: строки как дерево subRows с merged-колонками иерархии
  либо плоский список без subRows вообще;
- «тяжёлые ячейки»: renderCell с Canvas.Badge и контейнерами либо
  максимально дешёвый Canvas.Text.

Поверх таблицы HUD: FPS, число React-коммитов в секунду и среднее время
коммита (Profiler actualDuration). При протяжке выделения каждый шаг мыши
даёт коммит, так что среднее время коммита показывает цену перерендера
обёртки на одно движение. Сравнение четырёх режимов отвечает, что именно
тормозит: merge, кастомные ячейки или сам перерендер по selection.`}}}},D=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],A=20,F=10,R=5,I=A*F*R;function $(s,a){const o=Math.max(1,Math.round(s/I));let l=0,d=0;const b=[],c=[];for(let n=0;n<A;n+=1){const i=`Дивизион ${n+1}`,g=[];for(let e=0;e<F;e+=1){const m=`Управление ${e+1}`,k=[];for(let f=0;f<R;f+=1){const p=`Команда ${f+1}`,E=[];for(let v=0;v<o;v+=1){const h=5e5+l*37%20*5e4,x=`${D[l%D.length]} ${l+1}`,y=Math.round(h*(.6+l*13%40/100));a?E.push({id:`e${l}`,employee:x,plan:h,fact:y}):c.push({id:`e${l}`,employee:x,plan:h,fact:y,division:i,unit:m,team:p}),l+=1,d+=1}a&&k.push({id:`d${n}u${e}t${f}`,team:p,subRows:E})}a&&g.push({id:`d${n}u${e}`,unit:m,subRows:k})}a&&b.push({id:`d${n}`,division:i,subRows:g})}return{rows:a?b:c,leaves:d}}function H(s){let a=2166136261;for(let o=0;o<s.length;o+=1)a^=s.charCodeAt(o),a=Math.imul(a,16777619);return a>>>0}function N(s,a){return(H(s)^Math.imul(a+1,2654435761))%1e3}function W(s){return s>750?"accent":s>500?"warning":s>250?"dark":"negative"}function _(s,a,o){const l=o?{error:{value:c=>(c.fact??0)<(c.plan??0)*.7}}:{},d=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...o&&{editingCell:{component:"inputNumber"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...o&&{editingCell:{component:"inputNumber",...l}}}],b=Array.from({length:s},(c,n)=>{const i={key:`m${n}`,name:`M${n+1}`,width:84};if(!a)return i.renderCell=({row:e})=>u.jsxDEV(C.Text,{children:e!=null&&e.id?String(N(e.id,n)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:193,columnNumber:11},this),i;const g=n%4;return g===0?i.renderCell=({row:e})=>u.jsxDEV(C.Container,{justifyContent:"center",alignItems:"center",children:u.jsxDEV(C.Text,{children:e!=null&&e.id?String(N(e.id,n)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:201,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:200,columnNumber:11},this):g===1?i.renderCell=({row:e})=>{const m=e!=null&&e.id?N(e.id,n):0;return u.jsxDEV(C.Container,{justifyContent:"center",alignItems:"center",children:u.jsxDEV(C.Badge,{pilled:!0,view:W(m),text:String(m)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:211,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:210,columnNumber:13},this)}:g===2?i.renderCell=({row:e,theme:m})=>u.jsxDEV(C.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:m.cellHorizontalPadding},children:u.jsxDEV(C.Text,{children:e!=null&&e.id?`${N(e.id,n)%100}%`:""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:222,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:217,columnNumber:11},this):i.renderCell=({row:e,theme:m})=>u.jsxDEV(C.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:m.cellHorizontalPadding},children:u.jsxDEV(C.Text,{children:e!=null&&e.id?"метка":""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:234,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:229,columnNumber:11},this),i});return[...d,...b]}const z=s=>s.toLocaleString("ru-RU");function U({commitsRef:s}){const[a,o]=r.useState({fps:0,commits:0,avgMs:0,maxMs:0});return r.useEffect(()=>{let l=0,d=0;const b=()=>{l+=1,d=requestAnimationFrame(b)};d=requestAnimationFrame(b);const c=setInterval(()=>{const n=s.current;s.current=[];const i=n.reduce((g,e)=>g+e,0);o({fps:l,commits:n.length,avgMs:n.length?Math.round(i/n.length*10)/10:0,maxMs:n.length?Math.round(Math.max(...n)*10)/10:0}),l=0},1e3);return()=>{cancelAnimationFrame(d),clearInterval(c)}},[s]),u.jsxDEV("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:a.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",u.jsxDEV("b",{children:a.fps},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:296,columnNumber:12},this)," · коммитов/с: ",u.jsxDEV("b",{children:a.commits},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:296,columnNumber:45},this)," · коммит сред: ",u.jsxDEV("b",{children:[a.avgMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:297,columnNumber:13},this)," · макс: ",u.jsxDEV("b",{children:[a.maxMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:297,columnNumber:45},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:288,columnNumber:5},this)}const T={name:"Стресс селектинга: изоляция причин",render:()=>{const[s,a]=r.useState(1e3),[o,l]=r.useState("50000"),[d,b]=r.useState(5e4),[c,n]=r.useState(!0),[i,g]=r.useState(!0),[e,m]=r.useState(!1),[k,f]=r.useState(null),p=r.useRef([]),E=r.useCallback((t,K,S)=>{p.current.push(S)},[]),{rows:v,leaves:h}=r.useMemo(()=>$(d,c),[d,c]);r.useEffect(()=>{f(null)},[v]);const x=k??v,y=r.useMemo(()=>_(s,i,e),[s,i,e]),P=r.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0,pinnedDefault:["employee"]},...c?{subRows:{getSubRows:t=>t==null?void 0:t.subRows,rowKeyGetter:t=>t.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...e?{editing:{onRowsChange:t=>f(t),rowKeyGetter:t=>t.id}}:{}}),[c,e]);return u.jsxDEV("div",{children:[u.jsxDEV(j,{children:"Потяните мышью большой диапазон ячеек и смотрите на HUD. Сравните четыре режима: объединение и тяжёлые ячейки вкл или выкл. Если лаг остаётся даже без объединения и на дешёвых ячейках, значит тормозит сам перерендер обёртки на каждое движение мыши, а не merge-код."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:372,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[u.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",u.jsxDEV("b",{style:{minWidth:42},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:390,columnNumber:22},void 0),u.jsxDEV("input",{type:"range",min:1,max:1500,value:s,onChange:t=>a(Number(t.target.value)),style:{width:220}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:391,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:389,columnNumber:11},void 0),u.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",u.jsxDEV("input",{type:"number",min:1,step:1e4,value:o,onChange:t=>l(t.target.value),style:{width:110}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:403,columnNumber:13},void 0),u.jsxDEV("button",{type:"button",onClick:()=>b(Math.max(1,Number(o)||1)),children:"Построить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:411,columnNumber:13},void 0),u.jsxDEV("span",{style:{opacity:.75},children:["(листьев: ",u.jsxDEV("b",{children:z(h)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:418,columnNumber:25},void 0),")"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:417,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:401,columnNumber:11},void 0),u.jsxDEV("label",{htmlFor:"selecting-perf-merge",style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxDEV("input",{id:"selecting-perf-merge",type:"checkbox",checked:c,onChange:t=>n(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:426,columnNumber:13},void 0),"объединение (subRows merged)"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:422,columnNumber:11},void 0),u.jsxDEV("label",{htmlFor:"selecting-perf-heavy",style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxDEV("input",{id:"selecting-perf-heavy",type:"checkbox",checked:i,onChange:t=>g(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:439,columnNumber:13},void 0),"тяжёлые ячейки (Canvas.Badge)"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:435,columnNumber:11},void 0),u.jsxDEV("label",{htmlFor:"selecting-perf-editing",style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxDEV("input",{id:"selecting-perf-editing",type:"checkbox",checked:e,onChange:t=>m(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:452,columnNumber:13},void 0),"редактирование (error-ячейки)"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:448,columnNumber:11},void 0),u.jsxDEV(U,{commitsRef:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:461,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:379,columnNumber:9},void 0),u.jsxDEV(r.Profiler,{id:"selecting-perf-table",onRender:E,children:u.jsxDEV(V,{tableConfig:P,columnConfig:y,rows:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:465,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:464,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.selectingPerf.stories.tsx",lineNumber:371,columnNumber:7},void 0)}};var w,M,B;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Стресс селектинга: изоляция причин',
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
        pinning: true,
        pinnedDefault: ['employee']
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
          Потяните мышью большой диапазон ячеек и смотрите на HUD. Сравните
          четыре режима: объединение и тяжёлые ячейки вкл или выкл. Если лаг
          остаётся даже без объединения и на дешёвых ячейках, значит тормозит
          сам перерендер обёртки на каждое движение мыши, а не merge-код.
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
            <input type="range" min={1} max={1500} value={cols} onChange={e => setCols(Number(e.target.value))} style={{
            width: 220
          }} />
          </span>

          <span style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}>
            Строк:
            <input type="number" min={1} step={10000} value={rowInput} onChange={e => setRowInput(e.target.value)} style={{
            width: 110
          }} />
            <button type="button" onClick={() => setRowTarget(Math.max(1, Number(rowInput) || 1))}>
              Построить
            </button>
            <span style={{
            opacity: 0.75
          }}>
              (листьев: <b>{fmt(leaves)}</b>)
            </span>
          </span>

          <label htmlFor="selecting-perf-merge" style={{
          display: 'flex',
          gap: 6,
          alignItems: 'center'
        }}>
            <input id="selecting-perf-merge" type="checkbox" checked={withMerge} onChange={e => setWithMerge(e.target.checked)} />
            объединение (subRows merged)
          </label>

          <label htmlFor="selecting-perf-heavy" style={{
          display: 'flex',
          gap: 6,
          alignItems: 'center'
        }}>
            <input id="selecting-perf-heavy" type="checkbox" checked={heavyCells} onChange={e => setHeavyCells(e.target.checked)} />
            тяжёлые ячейки (Canvas.Badge)
          </label>

          <label htmlFor="selecting-perf-editing" style={{
          display: 'flex',
          gap: 6,
          alignItems: 'center'
        }}>
            <input id="selecting-perf-editing" type="checkbox" checked={withEditing} onChange={e => setWithEditing(e.target.checked)} />
            редактирование (error-ячейки)
          </label>

          <PerfHudBadge commitsRef={commitsRef} />
        </div>

        <Profiler id="selecting-perf-table" onRender={onRender}>
          <TableCanvas tableConfig={tableConfig} columnConfig={columns} rows={dataRows as Node[]} />
        </Profiler>
      </div>;
  }
}`,...(B=(M=T.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const we=["SelectingPerf"];export{T as SelectingPerf,we as __namedExportsOrder,De as default};
