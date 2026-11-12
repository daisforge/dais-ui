import{r as i,j as e}from"./react-CAOzMBF_.js";import{S as Q}from"./StoryHint-AurwRlnz.js";import{T as X,C as w}from"./TableCanvas-DOsQrCiP.js";import{T as Y}from"./TextField-DNzqWFXU.js";import{af as Z,t as ee,A as S}from"./@salutejs/sdds-finai-CrMFu5No.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-D7J-sht1.js";import"./styled-components-BAnxJVQm.js";import"./react-is-vVGXX3JE.js";import"./vendor-CvBXOjQ8.js";import"./@tanstack/react-virtual-Dq53HtnB.js";import"./tslib-DoU9Jm1N.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DBF9uERs.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-TstqH334.js";import"./IconButton-LdqUAZ_9.js";import"./Box-DBguVV_s.js";import"./AiAgentPopup-CVoyVKiT.js";import"./TextArea-1HIWWw50.js";import"./sharedUtilsInputs-CPKBfE6-.js";import"./sharedUtilsResizable-Bp8tiGu6.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-BOc_wEt1.js";import"./Collapse-DYelOQTz.js";import"./react-data-grid-C2AVEiS5.js";import"./TableTabs-BIBArlcM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C28hsfPC.js";import"./@glideappsfinal/glide-data-grid-Bcb-KcLM.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BG2H0NDG.js";import"./ListOfFilters-B5D6UrCc.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-DNTjpvSd.js";import"./EmptyState-CKFGDnr1.js";import"./MassActions-BzkjnVND.js";import"./Autocomplete-DbeeDON4.js";import"./ErrorPage-CMuyM_7q.js";const qe={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
производительности таблицы (выделение, скролл, сайдбар, редактирование) и
поведения фич на масштабе. Переключатели:

- «объединение»: строки как дерево subRows с merged-колонками иерархии
  либо плоский список без subRows вообще;
- «тяжёлые ячейки»: renderCell с Canvas.Badge и контейнерами либо
  максимально дешёвый Canvas.Text;
- «редактирование»: режим редактирования с error-правилом на колонке Факт;
- «ошибки в M-колонках»: error-правило с тултипом на каждой колонке
  показателей, чтобы нагрузить обход строк по всем колонкам;
- «столбец-индикатор»: служебный столбец rowErrors со счётчиком ошибок;
- «ошибка всей строки»: часть строк помечена целиком через isErrorRow.

Поверх таблицы HUD с метриками производительности (описание метрик — на
самой странице стори).`}}}},A=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],D=20,z=10,_=5,te=D*z*_;function re(s,n){const u=Math.max(1,Math.round(s/te));let a=0,g=0;const p=[],m=[];for(let l=0;l<D;l+=1){const d=`Дивизион ${l+1}`,c=[];for(let o=0;o<z;o+=1){const f=`Управление ${o+1}`,t=[];for(let h=0;h<_;h+=1){const b=`Команда ${h+1}`,y=[];for(let x=0;x<u;x+=1){const E=5e5+a*37%20*5e4,C=`${A[a%A.length]} ${a+1}`,v=Math.round(E*(.6+a*13%40/100));n?y.push({id:`e${a}`,employee:C,plan:E,fact:v}):m.push({id:`e${a}`,employee:C,plan:E,fact:v,division:d,unit:f,team:b}),a+=1,g+=1}n&&t.push({id:`d${l}u${o}t${h}`,team:b,subRows:y})}n&&c.push({id:`d${l}u${o}`,unit:f,subRows:t})}n&&p.push({id:`d${l}`,division:d,subRows:c})}return{rows:n?p:m,leaves:g}}function P(s){let n=2166136261;for(let u=0;u<s.length;u+=1)n^=s.charCodeAt(u),n=Math.imul(n,16777619);return n>>>0}function R(s,n){return(P(s)^Math.imul(n+1,2654435761))%1e3}function se(s){return s>750?"accent":s>500?"warning":s>250?"dark":"negative"}const B={plan:"",fact:""},L=100,ne=(s,n)=>Math.abs(R(s,n))<L;function oe(s,n,u,a,g){const p=u?{error:{value:d=>(d.fact??0)<(d.plan??0)*.7}}:{},m=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...u&&{editingCell:{component:"inputNumber"}},...a&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"plan",valueInRow:d=>String(d.plan??""),filter:"startWith"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...u&&{editingCell:{component:"inputNumber",...p}},...a&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"fact",valueInRow:d=>String(d.fact??""),filter:"startWith"}}}],l=Array.from({length:s},(d,c)=>{const o={key:`m${c}`,name:`M${c+1}`,width:84,...a&&{sortingType:"numberSort"},...u&&g&&{editingCell:{component:"inputString",editable:!1,error:{value:t=>ne(t.id,c),tooltip:t=>`Значение ${R(t.id,c)} ниже порога ${L}`}}}};if(!n)return o.renderCell=({row:t})=>e.jsx(w.Text,{children:t!=null&&t.id?String(R(t.id,c)):""}),o;const f=c%4;return f===0?o.renderCell=({row:t})=>e.jsx(w.Container,{justifyContent:"center",alignItems:"center",children:e.jsx(w.Text,{children:t!=null&&t.id?String(R(t.id,c)):""})}):f===1?o.renderCell=({row:t})=>{const h=t!=null&&t.id?R(t.id,c):0;return e.jsx(w.Container,{justifyContent:"center",alignItems:"center",children:e.jsx(w.Badge,{pilled:!0,view:se(h),text:String(h)})})}:f===2?o.renderCell=({row:t,theme:h})=>e.jsx(w.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:h.cellHorizontalPadding},children:e.jsx(w.Text,{children:t!=null&&t.id?`${R(t.id,c)%100}%`:""})}):o.renderCell=({row:t,theme:h})=>e.jsx(w.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:h.cellHorizontalPadding},children:e.jsx(w.Text,{children:t!=null&&t.id?"метка":""})}),o});return[...m,...l]}const ie=s=>s.toLocaleString("ru-RU");function ae({commitsRef:s}){const[n,u]=i.useState({fps:0,commits:0,avgMs:0,maxMs:0});return i.useEffect(()=>{let a=0,g=0;const p=()=>{a+=1,g=requestAnimationFrame(p)};g=requestAnimationFrame(p);const m=setInterval(()=>{const l=s.current;s.current=[];const d=l.reduce((c,o)=>c+o,0);u({fps:a,commits:l.length,avgMs:l.length?Math.round(d/l.length*10)/10:0,maxMs:l.length?Math.round(Math.max(...l)*10)/10:0}),a=0},1e3);return()=>{cancelAnimationFrame(g),clearInterval(m)}},[s]),e.jsxs("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:n.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",e.jsx("b",{children:n.fps})," · коммитов/с: ",e.jsx("b",{children:n.commits})," · коммит сред: ",e.jsxs("b",{children:[n.avgMs," мс"]})," · макс: ",e.jsxs("b",{children:[n.maxMs," мс"]})]})}const k={name:"Большой набор данных (строки × колонки)",render:()=>{const[s,n]=i.useState(1e3),[u,a]=i.useState("50000"),[g,p]=i.useState(5e4),[m,l]=i.useState(!0),[d,c]=i.useState(!0),[o,f]=i.useState(!1),[t,h]=i.useState(!1),[b,y]=i.useState(!1),[x,E]=i.useState(!1),[C,v]=i.useState(!1),M=i.useState(B),j=i.useState([]),[U,I]=i.useState(null),W=i.useRef([]),K=i.useCallback((r,H,J)=>{W.current.push(J)},[]),{rows:T,leaves:O}=i.useMemo(()=>re(g,m),[g,m]);i.useEffect(()=>{I(null)},[T]);const G=U??T,V=i.useMemo(()=>oe(s,d,o,C,t),[s,d,o,C,t]),q=i.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},rowSize:{showInControl:!0,default:"big"},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0},...m?{subRows:{getSubRows:r=>r==null?void 0:r.subRows,rowKeyGetter:r=>r.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...o?{editing:{onRowsChange:r=>I(r),rowKeyGetter:r=>r.id,defaultEnabled:!0,...(b||x)&&{rowErrors:{indicatorColumn:b,...x&&{isErrorRow:r=>P(r.id)%10===0,tooltip:({isErrorRow:r,errorCellsCount:H})=>r?"Строка помечена целиком":`Ошибок в строке: ${H}`}}}}}:{},...C?{sorting:{state:j},filtering:{state:M,clearedValue:B}}:{}}),[m,o,b,x,C,j,M]);return e.jsxs("div",{children:[e.jsx(Q,{children:"Пример на большом наборе данных: настройте число колонок и строк, включите нужные режимы и проверяйте выделение, скролл, сайдбар и редактирование. HUD справа показывает метрики производительности: FPS — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» — сколько раз в секунду React перерендерил таблицу (при протяжке выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» — среднее и максимальное время одного такого перерендера в миллисекундах, то есть цена реакции таблицы на одно действие."}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[e.jsxs("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",e.jsx("b",{style:{minWidth:42},children:s}),e.jsx("div",{style:{width:220},children:e.jsx(Z,{value:s,min:1,max:1500,onChangeCommitted:r=>n(r)})})]}),e.jsxs("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",e.jsx("div",{style:{width:130},children:e.jsx(Y,{value:u,type:"number",size:"s",onChange:r=>a(r.target.value)})}),e.jsx(ee,{size:"s",view:"secondary",onClick:()=>p(Math.max(1,Number(u)||1)),children:"Построить"}),e.jsxs("span",{style:{opacity:.75},children:["(листьев: ",e.jsx("b",{children:ie(O)}),")"]})]}),e.jsx(S,{label:"объединение (subRows merged)",checked:m,onChange:r=>l(r.target.checked)}),e.jsx(S,{label:"тяжёлые ячейки (Canvas.Badge)",checked:d,onChange:r=>c(r.target.checked)}),e.jsx(S,{label:"редактирование (error-ячейки)",checked:o,onChange:r=>f(r.target.checked)}),e.jsx(S,{label:"ошибки в M-колонках (с тултипом)",checked:t,disabled:!o,onChange:r=>h(r.target.checked)}),e.jsx(S,{label:"столбец-индикатор (rowErrors)",checked:b,disabled:!o,onChange:r=>y(r.target.checked)}),e.jsx(S,{label:"ошибка всей строки (каждая 10-я)",checked:x,disabled:!o,onChange:r=>E(r.target.checked)}),e.jsx(S,{label:"сортировка и фильтр в шапке",checked:C,onChange:r=>v(r.target.checked)}),e.jsx(ae,{commitsRef:W})]}),e.jsx(i.Profiler,{id:"big-data-table",onRender:K,children:e.jsx(X,{tableConfig:q,columnConfig:V,rows:G})})]})}};var $,F,N;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Большой набор данных (строки × колонки)',
  render: () => {
    const [cols, setCols] = useState(1000);
    const [rowInput, setRowInput] = useState('50000');
    const [rowTarget, setRowTarget] = useState(50000);
    const [withMerge, setWithMerge] = useState(true);
    const [heavyCells, setHeavyCells] = useState(true);
    const [withEditing, setWithEditing] = useState(false);
    const [withMeasureErrors, setWithMeasureErrors] = useState(false);
    const [withRowErrorsColumn, setWithRowErrorsColumn] = useState(false);
    const [withWholeRowErrors, setWithWholeRowErrors] = useState(false);
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
    const columns = useMemo(() => buildColumns(cols, heavyCells, withEditing, withHeaderButtons, withMeasureErrors), [cols, heavyCells, withEditing, withHeaderButtons, withMeasureErrors]);
    const tableConfig = useMemo(() => ({
      containerStyle: {
        height: '70vh'
      },
      rowMarkers: {
        startIndex: 1
      },
      // Размер строки переключается в настройках таблицы (шестерёнка справа):
      // от него зависят высота строк, ширина служебных колонок и размер иконки
      // индикатора ошибок.
      rowSize: {
        showInControl: true,
        default: 'big' as const
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
          rowKeyGetter: (r: Node) => r.id,
          defaultEnabled: true,
          ...((withRowErrorsColumn || withWholeRowErrors) && {
            rowErrors: {
              indicatorColumn: withRowErrorsColumn,
              ...(withWholeRowErrors && {
                // Каждая десятая строка помечена целиком.
                isErrorRow: (r: Node) => hashStr(r.id) % 10 === 0,
                tooltip: ({
                  isErrorRow,
                  errorCellsCount
                }: {
                  isErrorRow: boolean;
                  errorCellsCount: number;
                }) => isErrorRow ? 'Строка помечена целиком' : \`Ошибок в строке: \${errorCellsCount}\`
              })
            }
          })
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
    }), [withMerge, withEditing, withRowErrorsColumn, withWholeRowErrors, withHeaderButtons, sortingStateAndSetter, filteringStateAndSetter]);
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

          <Checkbox label="ошибки в M-колонках (с тултипом)" checked={withMeasureErrors} disabled={!withEditing} onChange={e => setWithMeasureErrors(e.target.checked)} />

          <Checkbox label="столбец-индикатор (rowErrors)" checked={withRowErrorsColumn} disabled={!withEditing} onChange={e => setWithRowErrorsColumn(e.target.checked)} />

          <Checkbox label="ошибка всей строки (каждая 10-я)" checked={withWholeRowErrors} disabled={!withEditing} onChange={e => setWithWholeRowErrors(e.target.checked)} />

          <Checkbox label="сортировка и фильтр в шапке" checked={withHeaderButtons} onChange={e => setWithHeaderButtons(e.target.checked)} />

          <PerfHudBadge commitsRef={commitsRef} />
        </div>

        <Profiler id="big-data-table" onRender={onRender}>
          <TableCanvas tableConfig={tableConfig} columnConfig={columns} rows={dataRows as Node[]} />
        </Profiler>
      </div>;
  }
}`,...(N=(F=k.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const Je=["BigDataExample"];export{k as BigDataExample,Je as __namedExportsOrder,qe as default};
