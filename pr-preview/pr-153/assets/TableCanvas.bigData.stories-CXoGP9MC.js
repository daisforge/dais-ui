import{r as o,d as e}from"./react-D2T61mpp.js";import{S as Q}from"./StoryHint-D7Z2UPWM.js";import{T as X,C as h}from"./TableCanvas-CeBttP4k.js";import{T as Y}from"./TextField-C5Tl7ypA.js";import{af as Z,t as ee,A as w}from"./@salutejs/sdds-finai-CnvN9Ub_.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-3l8ykBQF.js";import"./styled-components-DovKJdjj.js";import"./react-is-Clcustum.js";import"./vendor-CFc4-7Jd.js";import"./@tanstack/react-virtual-DWoDfeV2.js";import"./tslib-DoU9Jm1N.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-Djzn6CKf.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CeVBMsH2.js";import"./IconButton-DE9Sh8zI.js";import"./Box-BLVowlXD.js";import"./AiAgentPopup-BEpt9dNu.js";import"./TextArea-BceZCdLD.js";import"./sharedUtilsInputs-cFXSU-6k.js";import"./sharedUtilsResizable-CFfwexD1.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-aZX8yLyR.js";import"./Collapse-CcEfL7lO.js";import"./react-data-grid-jVs33wBT.js";import"./TableTabs-Dbt4U854.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BTNKI3-N.js";import"./@glideappsfinal/glide-data-grid-CFO_0xaS.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DIKPpMft.js";import"./ListOfFilters-Dm4Pda3y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FNYxGGLD.js";import"./EmptyState-CfctcnUG.js";import"./MassActions-gkg95n9N.js";import"./Autocomplete-BknfDEPG.js";import"./ErrorPage-BsFbBpU0.js";const qe={title:"Локальные компоненты/TableCanvas/CellsMerging",tags:["!autodocs"],parameters:{docs:{description:{component:`Большой набор данных: до 1500 колонок и миллиона строк. Пример для проверки
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
самой странице стори).`}}}},I=["Иванов","Петрова","Сидоров","Кузнецова","Смирнов","Попова","Волков","Морозова"],$=20,F=10,z=5,se=$*F*z;function ae(t,r){const c=Math.max(1,Math.round(t/se));let n=0,g=0;const C=[],b=[];for(let l=0;l<$;l+=1){const u=`Дивизион ${l+1}`,d=[];for(let i=0;i<F;i+=1){const v=`Управление ${i+1}`,s=[];for(let m=0;m<z;m+=1){const f=`Команда ${m+1}`,N=[];for(let k=0;k<c;k+=1){const x=5e5+n*37%20*5e4,p=`${I[n%I.length]} ${n+1}`,E=Math.round(x*(.6+n*13%40/100));r?N.push({id:`e${n}`,employee:p,plan:x,fact:E}):b.push({id:`e${n}`,employee:p,plan:x,fact:E,division:u,unit:v,team:f}),n+=1,g+=1}r&&s.push({id:`d${l}u${i}t${m}`,team:f,subRows:N})}r&&d.push({id:`d${l}u${i}`,unit:v,subRows:s})}r&&C.push({id:`d${l}`,division:u,subRows:d})}return{rows:r?C:b,leaves:g}}function _(t){let r=2166136261;for(let c=0;c<t.length;c+=1)r^=t.charCodeAt(c),r=Math.imul(r,16777619);return r>>>0}function T(t,r){return(_(t)^Math.imul(r+1,2654435761))%1e3}function te(t){return t>750?"accent":t>500?"warning":t>250?"dark":"negative"}const W={plan:"",fact:""},P=100,re=(t,r)=>Math.abs(T(t,r))<P;function ie(t,r,c,n,g){const C=c?{error:{value:u=>(u.fact??0)<(u.plan??0)*.7}}:{},b=[{key:"division",name:"Дивизион",width:150},{key:"unit",name:"Управление",width:150},{key:"team",name:"Команда",width:140},{key:"employee",name:"Сотрудник",width:180},{key:"plan",name:"План",width:120,contentFormat:"number",...c&&{editingCell:{component:"inputNumber"}},...n&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"plan",valueInRow:u=>String(u.plan??""),filter:"startWith"}}},{key:"fact",name:"Факт",width:120,contentFormat:"number",...c&&{editingCell:{component:"inputNumber",...C}},...n&&{sortingType:"numberSort",filtering:{component:"input",keyInFilterState:"fact",valueInRow:u=>String(u.fact??""),filter:"startWith"}}}],l=Array.from({length:t},(u,d)=>{const i={key:`m${d}`,name:`M${d+1}`,width:84,...n&&{sortingType:"numberSort"},...c&&g&&{editingCell:{component:"inputString",editable:!1,error:{value:s=>re(s.id,d),tooltip:s=>`Значение ${T(s.id,d)} ниже порога ${P}`}}}};if(!r)return i.renderCell=({row:s})=>e.jsxDEV(h.Text,{children:s!=null&&s.id?String(T(s.id,d)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:248,columnNumber:11},this),i;const v=d%4;return v===0?i.renderCell=({row:s})=>e.jsxDEV(h.Container,{justifyContent:"center",alignItems:"center",children:e.jsxDEV(h.Text,{children:s!=null&&s.id?String(T(s.id,d)):""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:256,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:255,columnNumber:11},this):v===1?i.renderCell=({row:s})=>{const m=s!=null&&s.id?T(s.id,d):0;return e.jsxDEV(h.Container,{justifyContent:"center",alignItems:"center",children:e.jsxDEV(h.Badge,{pilled:!0,view:te(m),text:String(m)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:266,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:265,columnNumber:13},this)}:v===2?i.renderCell=({row:s,theme:m})=>e.jsxDEV(h.Container,{justifyContent:"flex-end",alignItems:"center",padding:{right:m.cellHorizontalPadding},children:e.jsxDEV(h.Text,{children:s!=null&&s.id?`${T(s.id,d)%100}%`:""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:277,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:272,columnNumber:11},this):i.renderCell=({row:s,theme:m})=>e.jsxDEV(h.Container,{justifyContent:"flex-start",alignItems:"center",padding:{left:m.cellHorizontalPadding},children:e.jsxDEV(h.Text,{children:s!=null&&s.id?"метка":""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:289,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:284,columnNumber:11},this),i});return[...b,...l]}const oe=t=>t.toLocaleString("ru-RU");function ne({commitsRef:t}){const[r,c]=o.useState({fps:0,commits:0,avgMs:0,maxMs:0});return o.useEffect(()=>{let n=0,g=0;const C=()=>{n+=1,g=requestAnimationFrame(C)};g=requestAnimationFrame(C);const b=setInterval(()=>{const l=t.current;t.current=[];const u=l.reduce((d,i)=>d+i,0);c({fps:n,commits:l.length,avgMs:l.length?Math.round(u/l.length*10)/10:0,maxMs:l.length?Math.round(Math.max(...l)*10)/10:0}),n=0},1e3);return()=>{cancelAnimationFrame(g),clearInterval(b)}},[t]),e.jsxDEV("span",{style:{fontFamily:"monospace",padding:"4px 10px",borderRadius:6,background:r.fps<40?"#ffe0e0":"#e6f4ea"},children:["FPS: ",e.jsxDEV("b",{children:r.fps},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:354,columnNumber:12},this)," · коммитов/с: ",e.jsxDEV("b",{children:r.commits},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:354,columnNumber:45},this)," · коммит сред: ",e.jsxDEV("b",{children:[r.avgMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:355,columnNumber:13},this)," · макс: ",e.jsxDEV("b",{children:[r.maxMs," мс"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:355,columnNumber:45},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:346,columnNumber:5},this)}const y={name:"Большой набор данных (строки × колонки)",render:()=>{const[t,r]=o.useState(1e3),[c,n]=o.useState("50000"),[g,C]=o.useState(5e4),[b,l]=o.useState(!0),[u,d]=o.useState(!0),[i,v]=o.useState(!1),[s,m]=o.useState(!1),[f,N]=o.useState(!1),[k,x]=o.useState(!1),[p,E]=o.useState(!1),D=o.useState(W),M=o.useState([]),[L,S]=o.useState(null),R=o.useRef([]),U=o.useCallback((a,V,J)=>{R.current.push(J)},[]),{rows:j,leaves:K}=o.useMemo(()=>ae(g,b),[g,b]);o.useEffect(()=>{S(null)},[j]);const O=L??j,G=o.useMemo(()=>ie(t,u,i,p,s),[t,u,i,p,s]),q=o.useMemo(()=>({containerStyle:{height:"70vh"},rowMarkers:{startIndex:1},rowSize:{showInControl:!0,default:"big"},resizableColumn:!0,columnsControl:{enable:!0,pinning:!0},...b?{subRows:{getSubRows:a=>a==null?void 0:a.subRows,rowKeyGetter:a=>a.id,view:"merged",mergedColumns:["division","unit","team"]}}:{},...i?{editing:{onRowsChange:a=>S(a),rowKeyGetter:a=>a.id,defaultEnabled:!0,...(f||k)&&{rowErrors:{indicatorColumn:f,...k&&{isErrorRow:a=>_(a.id)%10===0,tooltip:({isErrorRow:a,errorCellsCount:V})=>a?"Строка помечена целиком":`Ошибок в строке: ${V}`}}}}}:{},...p?{sorting:{state:M},filtering:{state:D,clearedValue:W}}:{}}),[b,i,f,k,p,M,D]);return e.jsxDEV("div",{children:[e.jsxDEV(Q,{children:"Пример на большом наборе данных: настройте число колонок и строк, включите нужные режимы и проверяйте выделение, скролл, сайдбар и редактирование. HUD справа показывает метрики производительности: FPS — кадров в секунду (ниже 40 подсвечивается красным); «коммитов/с» — сколько раз в секунду React перерендерил таблицу (при протяжке выделения каждый шаг мыши даёт один коммит); «коммит сред/макс» — среднее и максимальное время одного такого перерендера в миллисекундах, то есть цена реакции таблицы на одно действие."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:483,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 4px 12px",fontSize:13},children:[e.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Колонок: ",e.jsxDEV("b",{style:{minWidth:42},children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:505,columnNumber:22},void 0),e.jsxDEV("div",{style:{width:220},children:e.jsxDEV(Z,{value:t,min:1,max:1500,onChangeCommitted:a=>r(a)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:507,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:506,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:504,columnNumber:11},void 0),e.jsxDEV("span",{style:{display:"flex",gap:8,alignItems:"center"},children:["Строк:",e.jsxDEV("div",{style:{width:130},children:e.jsxDEV(Y,{value:c,type:"number",size:"s",onChange:a=>n(a.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:519,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:518,columnNumber:13},void 0),e.jsxDEV(ee,{size:"s",view:"secondary",onClick:()=>C(Math.max(1,Number(c)||1)),children:"Построить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:526,columnNumber:13},void 0),e.jsxDEV("span",{style:{opacity:.75},children:["(листьев: ",e.jsxDEV("b",{children:oe(K)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:534,columnNumber:25},void 0),")"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:533,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:516,columnNumber:11},void 0),e.jsxDEV(w,{label:"объединение (subRows merged)",checked:b,onChange:a=>l(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:538,columnNumber:11},void 0),e.jsxDEV(w,{label:"тяжёлые ячейки (Canvas.Badge)",checked:u,onChange:a=>d(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:544,columnNumber:11},void 0),e.jsxDEV(w,{label:"редактирование (error-ячейки)",checked:i,onChange:a=>v(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:550,columnNumber:11},void 0),e.jsxDEV(w,{label:"ошибки в M-колонках (с тултипом)",checked:s,disabled:!i,onChange:a=>m(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:556,columnNumber:11},void 0),e.jsxDEV(w,{label:"столбец-индикатор (rowErrors)",checked:f,disabled:!i,onChange:a=>N(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:563,columnNumber:11},void 0),e.jsxDEV(w,{label:"ошибка всей строки (каждая 10-я)",checked:k,disabled:!i,onChange:a=>x(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:570,columnNumber:11},void 0),e.jsxDEV(w,{label:"сортировка и фильтр в шапке",checked:p,onChange:a=>E(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:577,columnNumber:11},void 0),e.jsxDEV(ne,{commitsRef:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:583,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:494,columnNumber:9},void 0),e.jsxDEV(o.Profiler,{id:"big-data-table",onRender:U,children:e.jsxDEV(X,{tableConfig:q,columnConfig:G,rows:O},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:587,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:586,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.CellsMerging/TableCanvas.bigData.stories.tsx",lineNumber:482,columnNumber:7},void 0)}};var H,A,B;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(A=y.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Je=["BigDataExample"];export{y as BigDataExample,Je as __namedExportsOrder,qe as default};
