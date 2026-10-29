import{r,d as u}from"./react-D2T61mpp.js";import{S as Q}from"./StoryHint-D7Z2UPWM.js";import{T as X,C as E}from"./TableCanvas-CzdfFMq5.js";import{T as Y}from"./TextField-5Z6uB_zk.js";import{af as Z,t as uu,A as D}from"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjrMZFsU.js";import"./styled-components-DI0RiSri.js";import"./react-is-Clcustum.js";import"./vendor-BA2uJqm3.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CN_Yestb.js";import"./IconButton-BybKUD7Y.js";import"./Box-ZOkrcsKi.js";import"./AiAgentPopup-CSGTF_or.js";import"./TextArea-BAx2TiTa.js";import"./sharedUtilsInputs-BqRMLZOH.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Table-BvntNGkm.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-EpzcYvI8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BuT-UB3z.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DS0ygo6L.js";import"./ListOfFilters-BUFa79Jo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BQN_3J49.js";import"./EmptyState-BKK3EFcw.js";import"./MassActions-Dl_2Mlrm.js";import"./Autocomplete-CkEHXmTV.js";import"./ErrorPage-4f41r735.js";const Gu={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
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
самой странице стори).`}}}},F=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],H=20,$=10,z=5,eu=H*$*z;function su(a,n){const c=Math.max(1,Math.round(a/eu));let i=0,C=0;const g=[],b=[];for(let o=0;o<H;o+=1){const l=`Дивизион ${o+1}`,d=[];for(let t=0;t<$;t+=1){const h=`Управление ${t+1}`,e=[];for(let m=0;m<z;m+=1){const f=`Команда ${m+1}`,x=[];for(let p=0;p<c;p+=1){const w=5e5+i*37%20*5e4,v=`${F[i%F.length]} ${i+1}`,T=Math.round(w*(.6+i*13%40/100));n?x.push({id:`e${i}`,employee:v,plan:w,fact:T}):b.push({id:`e${i}`,employee:v,plan:w,fact:T,division:l,unit:h,team:f}),i+=1,C+=1}n&&e.push({id:`d${o}u${t}t${m}`,team:f,subRows:x})}n&&d.push({id:`d${o}u${t}`,unit:h,subRows:e})}n&&g.push({id:`d${o}`,division:l,subRows:d})}return{rows:n?g:b,leaves:C}}function _(a){let n=2166136261;for(let c=0;c<a.length;c+=1)n^=a.charCodeAt(c),n=Math.imul(n,16777619);return n>>>0}function k(a,n){return(_(a)^Math.imul(n+1,2654435761))%1e3}function au(a){return a>750?"accent":a>500?"warning":a>250?"dark":"negative"}const j={plan:"",fact:""},P=100,nu=(a,n)=>Math.abs(k(a,n))<P;function tu(a,n,c,i,C){const g=c?{error:{value:l=>(l.fact??0)<(l.plan??0)*.7}}:{},b=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...c&&{editingCell:{component:"inputNumber"}},...i&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"plan",valueInRow:l=>String(l.plan??""),filter:"startWith"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...c&&{editingCell:{component:"inputNumber",...g}},...i&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"fact",valueInRow:l=>String(l.fact??""),filter:"startWith"}}}],o=Array.from({length:a},(l,d)=>{const t={key:`m${d}`,name:`M${d+1}`,width:84,...i&&{sortingType:"numberSort"},...c&&C&&{editingCell:{component:"inputString",editable:!1,error:{value:e=>nu(e.id,d),tooltip:e=>`Значение ${k(e.id,d)} ниже порога ${P}`}}}};if(!n)return t.renderCell=({row:e})=>u.jsxDEV(E.Text,{children:e!=null&&e.id?String(k(e.id,d)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:248,columnNumber:11},this),t;const h=d%4;return h===0?t.renderCell=({row:e})=>u.jsxDEV(E.Container,{justifyContent:"center",alignItems:"center",children:u.jsxDEV(E.Text,{children:e!=null&&e.id?String(k(e.id,d)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:256,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:255,columnNumber:11},this):h===1?t.renderCell=({row:e})=>{const m=e!=null&&e.id?k(e.id,d):0;return u.jsxDEV(E.Container,{justifyContent:"center",alignItems:"center",children:u.jsxDEV(E.Badge,{pilled:!0,view:au(m),text:String(m)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:266,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:265,columnNumber:13},this)}:h===2?t.renderCell=({row:e,theme:m})=>u.jsxDEV(E.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:m.cellHorizontalPadding},children:u.jsxDEV(E.Text,{children:e!=null&&e.id?`${k(e.id,d)%100}%`:""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:277,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:272,columnNumber:11},this):t.renderCell=({row:e,theme:m})=>u.jsxDEV(E.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:m.cellHorizontalPadding},children:u.jsxDEV(E.Text,{children:e!=null&&e.id?"метка":""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:289,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:284,columnNumber:11},this),t});return[...b,...o]}const ru=a=>a.toLocaleString("ru-RU");function iu({commitsRef:a}){const[n,c]=r.useState({fps:0,commits:0,avgMs:0,maxMs:0});return r.useEffect(()=>{let i=0,C=0;const g=()=>{i+=1,C=requestAnimationFrame(g)};C=requestAnimationFrame(g);const b=setInterval(()=>{const o=a.current;a.current=[];const l=o.reduce((d,t)=>d+t,0);c({fps:i,commits:o.length,avgMs:o.length?Math.round(l/o.length*10)/10:0,maxMs:o.length?Math.round(Math.max(...o)*10)/10:0}),i=0},1e3);return()=>{cancelAnimationFrame(C),clearInterval(b)}},[a]),u.jsxDEV("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:n.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",u.jsxDEV("b",{children:n.fps},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:351,columnNumber:12},this)," · коммитов/с: ",u.jsxDEV("b",{children:n.commits},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:351,columnNumber:45},this)," · коммит сред: ",u.jsxDEV("b",{children:[n.avgMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:352,columnNumber:13},this)," · макс: ",u.jsxDEV("b",{children:[n.maxMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:352,columnNumber:45},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:343,columnNumber:5},this)}const B={name:"Большой набор данных (строки × колонки)",render:()=>{const[a,n]=r.useState(1e3),[c,i]=r.useState("50000"),[C,g]=r.useState(5e4),[b,o]=r.useState(!0),[l,d]=r.useState(!0),[t,h]=r.useState(!1),[e,m]=r.useState(!1),[f,x]=r.useState(!1),[p,w]=r.useState(!1),[v,T]=r.useState(!1),A=r.useState(j),N=r.useState([]),[L,y]=r.useState(null),M=r.useRef([]),U=r.useCallback((s,R,J)=>{M.current.push(J)},[]),{rows:S,leaves:K}=r.useMemo(()=>su(C,b),[C,b]);r.useEffect(()=>{y(null)},[S]);const O=L??S,G=r.useMemo(()=>tu(a,l,t,v,e),[a,l,t,v,e]),q=r.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},rowSize:{showInControl:!0,default:"big"},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0},...b?{subRows:{getSubRows:s=>s==null?void 0:s.subRows,rowKeyGetter:s=>s.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...t?{editing:{onRowsChange:s=>y(s),rowKeyGetter:s=>s.id,defaultEnabled:!0,...(f||p)&&{rowErrors:{indicatorColumn:f,...p&&{isErrorRow:s=>_(s.id)%10===0,tooltip:({isErrorRow:s,errorCellsCount:R})=>s?"Строка помечена целиком":`Ошибок в строке: ${R}`}}}}}:{},...v?{sorting:{state:N},filtering:{state:A,clearedValue:j}}:{}}),[b,t,f,p,v,N,A]);return u.jsxDEV("div",{children:[u.jsxDEV(Q,{children:"Пример на большом наборе данных: настройте число колонок и строк, включите нужные режимы и проверяйте выделение, скролл, сайдбар и редактирование. HUD справа показывает метрики производительности: FPS — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» — сколько раз в секунду React перерендерил таблицу (при протяжке выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» — среднее и максимальное время одного такого перерендера в миллисекундах, то есть цена реакции таблицы на одно действие."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:480,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[u.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",u.jsxDEV("b",{style:{minWidth:42},children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:502,columnNumber:22},void 0),u.jsxDEV("div",{style:{width:220},children:u.jsxDEV(Z,{value:a,min:1,max:1500,onChangeCommitted:s=>n(s)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:504,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:503,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:501,columnNumber:11},void 0),u.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",u.jsxDEV("div",{style:{width:130},children:u.jsxDEV(Y,{value:c,type:"number",size:"s",onChange:s=>i(s.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:516,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:515,columnNumber:13},void 0),u.jsxDEV(uu,{size:"s",view:"secondary",onClick:()=>g(Math.max(1,Number(c)||1)),children:"Построить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:523,columnNumber:13},void 0),u.jsxDEV("span",{style:{opacity:.75},children:["(листьев: ",u.jsxDEV("b",{children:ru(K)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:531,columnNumber:25},void 0),")"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:530,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:513,columnNumber:11},void 0),u.jsxDEV(D,{label:"объединение (subRows merged)",checked:b,onChange:s=>o(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:535,columnNumber:11},void 0),u.jsxDEV(D,{label:"тяжёлые ячейки (Canvas.Badge)",checked:l,onChange:s=>d(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:541,columnNumber:11},void 0),u.jsxDEV(D,{label:"редактирование (error-ячейки)",checked:t,onChange:s=>h(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:547,columnNumber:11},void 0),u.jsxDEV(D,{label:"ошибки в M-колонках (с тултипом)",checked:e,disabled:!t,onChange:s=>m(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:553,columnNumber:11},void 0),u.jsxDEV(D,{label:"столбец-индикатор (rowErrors)",checked:f,disabled:!t,onChange:s=>x(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:560,columnNumber:11},void 0),u.jsxDEV(D,{label:"ошибка всей строки (каждая 10-я)",checked:p,disabled:!t,onChange:s=>w(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:567,columnNumber:11},void 0),u.jsxDEV(D,{label:"сортировка и фильтр в шапке",checked:v,onChange:s=>T(s.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:574,columnNumber:11},void 0),u.jsxDEV(iu,{commitsRef:M},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:580,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:491,columnNumber:9},void 0),u.jsxDEV(r.Profiler,{id:"big-data-table",onRender:U,children:u.jsxDEV(X,{tableConfig:q,columnConfig:G,rows:O},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:584,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:583,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:479,columnNumber:7},void 0)}};var V,I,W;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(I=B.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const qu=["BigDataExample"];export{B as BigDataExample,qu as __namedExportsOrder,Gu as default};
