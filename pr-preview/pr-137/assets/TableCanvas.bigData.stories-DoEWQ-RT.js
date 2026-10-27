import{r as o,j as u}from"./react-CAOzMBF_.js";import{S as Q}from"./StoryHint-AurwRlnz.js";import{T as X,C as g}from"./TableCanvas-DlX-Wh2b.js";import{T as Y}from"./TextField-DpKf-85P.js";import{af as Z,t as u4,A as f}from"./@salutejs/sdds-finai-CKhMjg07.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-EIxGvR70.js";import"./styled-components-DCFsnh-i.js";import"./react-is-vVGXX3JE.js";import"./vendor-DmWczWMC.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BWfcXHB3.js";import"./IconButton-ZoRfzXaJ.js";import"./Box-DvvYTz20.js";import"./AiAgentPopup-zRx4ytCb.js";import"./TextArea-FtPqzh-q.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./sharedUtilsResizable-BjlCs3KG.js";import"./Table-BQHrw1K6.js";import"./Collapse-CblE70vy.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-C6Rr5Gy-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DbDA-PPi.js";import"./@glideappsfinal/glide-data-grid-BB_xclG6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DGAhIiuN.js";import"./ListOfFilters-CMjwWdxj.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-BqjpJJQW.js";import"./EmptyState-BCYMGuYF.js";import"./MassActions-Csxbu-7r.js";import"./Autocomplete-DE_6PTST.js";import"./ErrorPage-CE3N0REk.js";const V4={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
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
самой странице стори).`}}}},I=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],N=20,z=10,_=5,e4=N*z*_;function t4(n,r){const c=Math.max(1,Math.round(n/e4));let i=0,m=0;const C=[],h=[];for(let a=0;a<N;a+=1){const l=`Дивизион ${a+1}`,d=[];for(let s=0;s<z;s+=1){const p=`Управление ${s+1}`,e=[];for(let E=0;E<_;E+=1){const A=`Команда ${E+1}`,D=[];for(let w=0;w<c;w+=1){const b=5e5+i*37%20*5e4,B=`${I[i%I.length]} ${i+1}`,S=Math.round(b*(.6+i*13%40/100));r?D.push({id:`e${i}`,employee:B,plan:b,fact:S}):h.push({id:`e${i}`,employee:B,plan:b,fact:S,division:l,unit:p,team:A}),i+=1,m+=1}r&&e.push({id:`d${a}u${s}t${E}`,team:A,subRows:D})}r&&d.push({id:`d${a}u${s}`,unit:p,subRows:e})}r&&C.push({id:`d${a}`,division:l,subRows:d})}return{rows:r?C:h,leaves:m}}function P(n){let r=2166136261;for(let c=0;c<n.length;c+=1)r^=n.charCodeAt(c),r=Math.imul(r,16777619);return r>>>0}function x(n,r){return(P(n)^Math.imul(r+1,2654435761))%1e3}function n4(n){return n>750?"accent":n>500?"warning":n>250?"dark":"negative"}const W={plan:"",fact:""},L=100,r4=(n,r)=>Math.abs(x(n,r))<L;function s4(n,r,c,i,m){const C=c?{error:{value:l=>(l.fact??0)<(l.plan??0)*.7}}:{},h=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...c&&{editingCell:{component:"inputNumber"}},...i&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"plan",valueInRow:l=>String(l.plan??""),filter:"startWith"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...c&&{editingCell:{component:"inputNumber",...C}},...i&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"fact",valueInRow:l=>String(l.fact??""),filter:"startWith"}}}],a=Array.from({length:n},(l,d)=>{const s={key:`m${d}`,name:`M${d+1}`,width:84,...i&&{sortingType:"numberSort"},...c&&m&&{editingCell:{component:"inputString",editable:!1,error:{value:e=>r4(e.id,d),tooltip:e=>`Значение ${x(e.id,d)} ниже порога ${L}`}}}};if(!r)return s.renderCell=({row:e})=>u.jsx(g.Text,{children:e!=null&&e.id?String(x(e.id,d)):""}),s;const p=d%4;return p===0?s.renderCell=({row:e})=>u.jsx(g.Container,{justifyContent:"center",alignItems:"center",children:u.jsx(g.Text,{children:e!=null&&e.id?String(x(e.id,d)):""})}):p===1?s.renderCell=({row:e})=>{const E=e!=null&&e.id?x(e.id,d):0;return u.jsx(g.Container,{justifyContent:"center",alignItems:"center",children:u.jsx(g.Badge,{pilled:!0,view:n4(E),text:String(E)})})}:p===2?s.renderCell=({row:e,theme:E})=>u.jsx(g.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:E.cellHorizontalPadding},children:u.jsx(g.Text,{children:e!=null&&e.id?`${x(e.id,d)%100}%`:""})}):s.renderCell=({row:e,theme:E})=>u.jsx(g.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:E.cellHorizontalPadding},children:u.jsx(g.Text,{children:e!=null&&e.id?"метка":""})}),s});return[...h,...a]}const o4=n=>n.toLocaleString("ru-RU");function i4({commitsRef:n}){const[r,c]=o.useState({fps:0,commits:0,avgMs:0,maxMs:0});return o.useEffect(()=>{let i=0,m=0;const C=()=>{i+=1,m=requestAnimationFrame(C)};m=requestAnimationFrame(C);const h=setInterval(()=>{const a=n.current;n.current=[];const l=a.reduce((d,s)=>d+s,0);c({fps:i,commits:a.length,avgMs:a.length?Math.round(l/a.length*10)/10:0,maxMs:a.length?Math.round(Math.max(...a)*10)/10:0}),i=0},1e3);return()=>{cancelAnimationFrame(m),clearInterval(h)}},[n]),u.jsxs("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:r.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",u.jsx("b",{children:r.fps})," · коммитов/с: ",u.jsx("b",{children:r.commits})," · коммит сред: ",u.jsxs("b",{children:[r.avgMs," мс"]})," · макс: ",u.jsxs("b",{children:[r.maxMs," мс"]})]})}const R={name:"Большой набор данных (строки × колонки)",render:()=>{const[n,r]=o.useState(1e3),[c,i]=o.useState("50000"),[m,C]=o.useState(5e4),[h,a]=o.useState(!0),[l,d]=o.useState(!0),[s,p]=o.useState(!1),[e,E]=o.useState(!1),[A,D]=o.useState(!1),[w,b]=o.useState(!1),[B,S]=o.useState(!1),F=o.useState(W),y=o.useState([]),[U,v]=o.useState(null),k=o.useRef([]),K=o.useCallback((t,j,J)=>{k.current.push(J)},[]),{rows:M,leaves:O}=o.useMemo(()=>t4(m,h),[m,h]);o.useEffect(()=>{v(null)},[M]);const G=U??M,V=o.useMemo(()=>s4(n,l,s,B,e),[n,l,s,B,e]),q=o.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},rowSize:{showInControl:!0,default:"big"},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0},...h?{subRows:{getSubRows:t=>t==null?void 0:t.subRows,rowKeyGetter:t=>t.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...s?{editing:{onRowsChange:t=>v(t),rowKeyGetter:t=>t.id,defaultEnabled:!0,...(A||w)&&{rowErrors:{indicatorColumn:A,...w&&{isErrorRow:t=>P(t.id)%10===0,tooltip:({isErrorRow:t,errorCellsCount:j})=>t?"Строка помечена целиком":`Ошибок в строке: ${j}`}}}}}:{},...B?{sorting:{state:y},filtering:{state:F,clearedValue:W}}:{}}),[h,s,A,w,B,y,F]);return u.jsxs("div",{children:[u.jsx(Q,{children:"Пример на большом наборе данных: настройте число колонок и строк, включите нужные режимы и проверяйте выделение, скролл, сайдбар и редактирование. HUD справа показывает метрики производительности: FPS — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» — сколько раз в секунду React перерендерил таблицу (при протяжке выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» — среднее и максимальное время одного такого перерендера в миллисекундах, то есть цена реакции таблицы на одно действие."}),u.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[u.jsxs("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",u.jsx("b",{style:{minWidth:42},children:n}),u.jsx("div",{style:{width:220},children:u.jsx(Z,{value:n,min:1,max:1500,onChangeCommitted:t=>r(t)})})]}),u.jsxs("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",u.jsx("div",{style:{width:130},children:u.jsx(Y,{value:c,type:"number",size:"s",onChange:t=>i(t.target.value)})}),u.jsx(u4,{size:"s",view:"secondary",onClick:()=>C(Math.max(1,Number(c)||1)),children:"Построить"}),u.jsxs("span",{style:{opacity:.75},children:["(листьев: ",u.jsx("b",{children:o4(O)}),")"]})]}),u.jsx(f,{label:"объединение (subRows merged)",checked:h,onChange:t=>a(t.target.checked)}),u.jsx(f,{label:"тяжёлые ячейки (Canvas.Badge)",checked:l,onChange:t=>d(t.target.checked)}),u.jsx(f,{label:"редактирование (error-ячейки)",checked:s,onChange:t=>p(t.target.checked)}),u.jsx(f,{label:"ошибки в M-колонках (с тултипом)",checked:e,disabled:!s,onChange:t=>E(t.target.checked)}),u.jsx(f,{label:"столбец-индикатор (rowErrors)",checked:A,disabled:!s,onChange:t=>D(t.target.checked)}),u.jsx(f,{label:"ошибка всей строки (каждая 10-я)",checked:w,disabled:!s,onChange:t=>b(t.target.checked)}),u.jsx(f,{label:"сортировка и фильтр в шапке",checked:B,onChange:t=>S(t.target.checked)}),u.jsx(i4,{commitsRef:k})]}),u.jsx(o.Profiler,{id:"big-data-table",onRender:K,children:u.jsx(X,{tableConfig:q,columnConfig:V,rows:G})})]})}};var T,H,$;R.parameters={...R.parameters,docs:{...(T=R.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(H=R.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const q4=["BigDataExample"];export{R as BigDataExample,q4 as __namedExportsOrder,V4 as default};
