import{r as h,d as u}from"./react-D2T61mpp.js";import{b as Eu}from"./tableData-DVJFoYoT.js";import wu from"./DocStoryTemplate-C1WBAfeL.js";import{S as t}from"./StoryHint-D7Z2UPWM.js";import{s as ku}from"./storySourceDoc-tVKyHcEN.js";import{T as l}from"./TableCanvas-BCLHAdVM.js";import{T as vu}from"./TextField-Vt89hYQT.js";import{z as Tu}from"./@salutejs/sdds-finai-xsnoJ7gQ.js";const fu={title:"Локальные компоненты/TableCanvas/StickyRowsCols",tags:["!autodocs"],parameters:{docs:{page:wu}}},c=ku({preCode:`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,previewSource:"shown"}),F=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],Su=["Москва","Санкт-Петербург","Казань","Новосибирск","Екатеринбург"],V=["Кредиты","Депозиты","Карты","Ипотека","Страхование"],O=e=>e.reduce((o,r)=>o+r,0),_=e=>F.map((o,r)=>O(e.map(k=>k.months[r]??0)));function x(e=40){const o=Eu(7),r=Su.map(s=>{const i=Array.from({length:e},(C,b)=>({kind:"item",region:s,manager:`Менеджер ${b+1}`,product:V[b%V.length]??"",months:F.map(()=>Math.round(o()*900+100))}));return{subtotal:{kind:"subtotal",region:s,manager:"—",product:`Итого: ${s}`,months:_(i)},items:i}});return[{kind:"total",region:"Все регионы",manager:"—",product:"Итого по банку",months:_(r.map(({subtotal:s})=>s))},...r.flatMap(({subtotal:s,items:i})=>[s,...i])].map((s,i)=>({...s,id:i+1,total:O(s.months)}))}const A=e=>e.toLocaleString("ru-RU"),Ru={total:"rgba(46, 170, 220, 0.2)",subtotal:"rgba(46, 170, 220, 0.08)"},gu=({row:e})=>{const o=Ru[e.kind];return o?{bgCell:o}:void 0};function B({sortable:e=!1}={}){const o=e?"numberSort":void 0;return[{key:"id",name:"№",width:64,sortingType:o},{key:"region",name:"Регион",width:160,sortingType:e?"stringSort":void 0},{key:"manager",name:"Менеджер",width:140},{key:"product",name:"Продукт",width:180},...F.map((s,i)=>({key:`m${i+1}`,name:s,width:110,renderCell:({row:n})=>A(n.months[i]??0)})),{key:"total",name:"Год",width:130,sortingType:o,renderCell:({row:s})=>A(s.total)}].map(s=>({...s,themeOverride:gu}))}const d=x(),a=B(),m={height:"600px"},D=e=>e.kind!=="item",y={...c,name:"Липкие колонки",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Прокрутите вправо: колонка ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:181,columnNumber:36},void 0)," прилипает к левому краю, а"," ",u.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:182,columnNumber:9},void 0)," встаёт рядом с ней, когда доедет."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:180,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,stickyColumns:["region","total"]},columnConfig:a,rows:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:184,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:179,columnNumber:5},void 0)},E={...c,name:"Липкие строки",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог каждого региона, до которого вы доскроллили."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:201,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,stickyRows:D},columnConfig:a,rows:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:205,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:200,columnNumber:5},void 0)},w={...c,name:"Строки и колонки вместе",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Липкие колонки ",u.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:223,columnNumber:24},void 0)," и ",u.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:223,columnNumber:41},void 0),", липкие строки — общий итог и итог по Казани. Нумерация строк остаётся слева."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:222,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,rowMarkers:{startIndex:1},stickyColumns:["product","total"],stickyRows:e=>e.kind==="total"||e.kind==="subtotal"&&e.region==="Казань"},columnConfig:a,rows:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:226,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:221,columnNumber:5},void 0)},v={...c,name:"Вместе с закреплёнными колонками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Колонка ",u.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:248,columnNumber:17},void 0)," закреплена всегда (",u.jsxDEV("code",{children:"columnsControl.pinnedDefault"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:249,columnNumber:9},void 0),"), а ",u.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:249,columnNumber:55},void 0)," и"," ",u.jsxDEV("b",{children:"Июн"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:250,columnNumber:9},void 0)," прилипают правее неё. Закрепление можно менять в меню колонок."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:247,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,columnsControl:{enable:!0,pinning:!0,pinnedDefault:["id"]},stickyColumns:["product","m6"],stickyRows:e=>e.kind==="total"},columnConfig:a,rows:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:253,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:246,columnNumber:5},void 0)},Nu=[{key:"group-info",name:"Подразделение",children:a.slice(0,4)},{key:"group-h1",name:"1 полугодие",children:a.slice(4,10)},{key:"group-h2",name:"2 полугодие",children:a.slice(10,16)},...a.slice(16)],T={...c,name:"С группировкой колонок",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Группа в шапке разрывается на границе липкой зоны: ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:284,columnNumber:60},void 0)," ","остаётся под «Подразделением», а ",u.jsxDEV("b",{children:"Июл"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:285,columnNumber:42},void 0)," прилипает вместе с подписью своей группы."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:283,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,stickyColumns:["region","m7"],stickyRows:D},columnConfig:Nu,rows:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:288,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:282,columnNumber:5},void 0)},pu=B({sortable:!0}),hu=x(15),f={...c,name:"С сортировкой",render:()=>{const e=h.useState([]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Отсортируйте по ",u.jsxDEV("b",{children:"Году"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:313,columnNumber:27},void 0),": итоги переедут на новые места, но останутся липкими — строки задаются условием, а не номером."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:312,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,sorting:{state:e},stickyColumns:["region"],stickyRows:D},columnConfig:pu,rows:hu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:316,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:311,columnNumber:7},void 0)}},xu={total:64,subtotal:48},S={...c,name:"Разная высота строк",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк растёт ступенями, строки под ней уходят без зазоров."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:341,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,rowHeight:(e,o)=>xu[e.kind]??o.rowSizeValue,stickyColumns:["product"],stickyRows:D},columnConfig:a,rows:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:345,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:340,columnNumber:5},void 0)},Du=[{label:"Сумма по строкам",total:O(d.filter(e=>e.kind==="item").map(e=>e.total))}],Au=e=>({row:o})=>e==="product"?o.label:e==="total"?A(o.total):"",Fu=B().map(e=>({...e,renderSummaryCell:Au(e.key)})),R={...c,name:"С итоговой строкой снизу",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Итоги регионов прилипают сверху, а итоговая строка (",u.jsxDEV("code",{children:"bottomSummaryRows"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:391,columnNumber:9},void 0),") всегда закреплена снизу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:389,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,summaryRows:{showDefault:!0,showInControl:!0},stickyColumns:["product","total"],stickyRows:e=>e.kind==="subtotal"},columnConfig:Fu,rows:d,bottomSummaryRows:Du},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:393,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:388,columnNumber:5},void 0)},Ou=x(12),g={...c,name:"Со слитыми ячейками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает, название региона переезжает в прилипшую строку, а остаток блока прокручивается под ней."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:415,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["product"],stickyRows:e=>e.kind==="subtotal"&&e.region==="Санкт-Петербург"},columnConfig:a,rows:Ou},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:420,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:414,columnNumber:5},void 0)},N={...c,name:"20 000 строк",render:()=>{const[e]=h.useState(()=>x(4e3));return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"20 000 строк и 17 колонок: позиции считаются только по видимым строкам, поэтому прокрутка остаётся плавной."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:443,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:m,rowMarkers:{startIndex:1},stickyColumns:["region","total"],stickyRows:D},columnConfig:a,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:447,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:442,columnNumber:7},void 0)}},Bu=x(20),Vu=e=>new Set(e.split(/[,\s]+/).map(Number).filter(Number.isInteger)),p={...ku({previewSource:"hidden"}),name:"Песочница",render:()=>{const[e,o]=h.useState(["region","total"]),[r,k]=h.useState("1, 2, 23"),s=h.useMemo(()=>{const n=Vu(r);return C=>n.has(C.id)},[r]),i=(n,C)=>o(b=>C?[...b,n]:b.filter(yu=>yu!==n));return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxDEV(t,{children:["Укажите номера липких строк (колонка ",u.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:492,columnNumber:48},void 0),") и отметьте липкие колонки — таблица обновится сразу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:491,columnNumber:9},void 0),u.jsxDEV("div",{style:{width:320},children:u.jsxDEV(vu,{size:"s",label:"Липкие строки",labelPlacement:"outer",placeholder:"Например: 1, 2, 23",value:r,onChange:n=>k(n.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:496,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:495,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 20px"},children:a.map(({key:n,name:C})=>u.jsxDEV(Tu,{size:"s",label:typeof C=="string"?C:n,checked:e.includes(n),onChange:b=>i(n,b.target.checked)},n,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:507,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:505,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},stickyColumns:e,stickyRows:s},columnConfig:a,rows:Bu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:516,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:490,columnNumber:7},void 0)}};var j,M,I;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...source,
  name: 'Липкие колонки',
  render: () => <>
      <StoryHint>
        Прокрутите вправо: колонка <b>Регион</b> прилипает к левому краю, а{' '}
        <b>Год</b> встаёт рядом с ней, когда доедет.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      stickyColumns: ['region', 'total']
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(I=(M=y.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var H,L,W;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...source,
  name: 'Липкие строки',
  render: () => <>
      <StoryHint>
        Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог
        каждого региона, до которого вы доскроллили.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      stickyRows: isSubtotalOrTotal
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(W=(L=E.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,P,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...source,
  name: 'Строки и колонки вместе',
  render: () => <>
      <StoryHint>
        Липкие колонки <b>Продукт</b> и <b>Год</b>, липкие строки — общий итог и
        итог по Казани. Нумерация строк остаётся слева.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      rowMarkers: {
        startIndex: 1
      },
      stickyColumns: ['product', 'total'],
      stickyRows: row => row.kind === 'total' || row.kind === 'subtotal' && row.region === 'Казань'
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(Y=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var G,z,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...source,
  name: 'Вместе с закреплёнными колонками',
  render: () => <>
      <StoryHint>
        Колонка <b>№</b> закреплена всегда (
        <code>columnsControl.pinnedDefault</code>), а <b>Продукт</b> и{' '}
        <b>Июн</b> прилипают правее неё. Закрепление можно менять в меню
        колонок.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      columnsControl: {
        enable: true,
        pinning: true,
        pinnedDefault: ['id']
      },
      stickyColumns: ['product', 'm6'],
      stickyRows: row => row.kind === 'total'
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(K=(z=v.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var $,X,q;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...source,
  name: 'С группировкой колонок',
  render: () => <>
      <StoryHint>
        Группа в шапке разрывается на границе липкой зоны: <b>Регион</b>{' '}
        остаётся под «Подразделением», а <b>Июл</b> прилипает вместе с подписью
        своей группы.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      stickyColumns: ['region', 'm7'],
      stickyRows: isSubtotalOrTotal
    }} columnConfig={GROUPED_COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(q=(X=T.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,Q,Z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...source,
  name: 'С сортировкой',
  render: () => {
    const sortingState = useState<readonly SortColumn[]>([]);
    return <>
        <StoryHint>
          Отсортируйте по <b>Году</b>: итоги переедут на новые места, но
          останутся липкими — строки задаются условием, а не номером.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: CONTAINER_STYLE,
        sorting: {
          state: sortingState
        },
        stickyColumns: ['region'],
        stickyRows: isSubtotalOrTotal
      }} columnConfig={SORTABLE_COLUMNS} rows={SHORT_REPORT_ROWS} />
      </>;
  }
}`,...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var uu,eu,su;S.parameters={...S.parameters,docs:{...(uu=S.parameters)==null?void 0:uu.docs,source:{originalSource:`{
  ...source,
  name: 'Разная высота строк',
  render: () => <>
      <StoryHint>
        Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк
        растёт ступенями, строки под ней уходят без зазоров.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      rowHeight: (row, size) => ROW_HEIGHT_BY_KIND[row.kind] ?? size.rowSizeValue,
      stickyColumns: ['product'],
      stickyRows: isSubtotalOrTotal
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(su=(eu=S.parameters)==null?void 0:eu.docs)==null?void 0:su.source}}};var ou,nu,au;R.parameters={...R.parameters,docs:{...(ou=R.parameters)==null?void 0:ou.docs,source:{originalSource:`{
  ...source,
  name: 'С итоговой строкой снизу',
  render: () => <>
      <StoryHint>
        Итоги регионов прилипают сверху, а итоговая строка (
        <code>bottomSummaryRows</code>) всегда закреплена снизу.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      summaryRows: {
        showDefault: true,
        showInControl: true
      },
      stickyColumns: ['product', 'total'],
      stickyRows: row => row.kind === 'subtotal'
    }} columnConfig={COLUMNS_WITH_SUMMARY} rows={REPORT_ROWS} bottomSummaryRows={SUMMARY_ROWS} />
    </>
}`,...(au=(nu=R.parameters)==null?void 0:nu.docs)==null?void 0:au.source}}};var ru,iu,tu;g.parameters={...g.parameters,docs:{...(ru=g.parameters)==null?void 0:ru.docs,source:{originalSource:`{
  ...source,
  name: 'Со слитыми ячейками',
  render: () => <>
      <StoryHint>
        Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает,
        название региона переезжает в прилипшую строку, а остаток блока
        прокручивается под ней.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      mergeCells: {
        mergeByCellValues: ['region']
      },
      stickyColumns: ['product'],
      stickyRows: row => row.kind === 'subtotal' && row.region === 'Санкт-Петербург'
    }} columnConfig={COLUMNS} rows={MERGE_REPORT_ROWS} />
    </>
}`,...(tu=(iu=g.parameters)==null?void 0:iu.docs)==null?void 0:tu.source}}};var lu,cu,mu;N.parameters={...N.parameters,docs:{...(lu=N.parameters)==null?void 0:lu.docs,source:{originalSource:`{
  ...source,
  name: '20 000 строк',
  render: () => {
    const [rows] = useState(() => createReportRows(4000));
    return <>
        <StoryHint>
          20 000 строк и 17 колонок: позиции считаются только по видимым
          строкам, поэтому прокрутка остаётся плавной.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: CONTAINER_STYLE,
        rowMarkers: {
          startIndex: 1
        },
        stickyColumns: ['region', 'total'],
        stickyRows: isSubtotalOrTotal
      }} columnConfig={COLUMNS} rows={rows} />
      </>;
  }
}`,...(mu=(cu=N.parameters)==null?void 0:cu.docs)==null?void 0:mu.source}}};var du,Cu,bu;p.parameters={...p.parameters,docs:{...(du=p.parameters)==null?void 0:du.docs,source:{originalSource:`{
  ...storySourceDoc({
    previewSource: 'hidden'
  }),
  name: 'Песочница',
  render: () => {
    const [stickyColumns, setStickyColumns] = useState(['region', 'total']);
    const [stickyIdsText, setStickyIdsText] = useState('1, 2, 23');
    const stickyRows = useMemo(() => {
      const ids = parseIds(stickyIdsText);
      return (row: ReportRow) => ids.has(row.id);
    }, [stickyIdsText]);
    const toggleColumn = (key: string, checked: boolean) => setStickyColumns(current => checked ? [...current, key] : current.filter(item => item !== key));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <StoryHint>
          Укажите номера липких строк (колонка <b>№</b>) и отметьте липкие
          колонки — таблица обновится сразу.
        </StoryHint>
        <div style={{
        width: 320
      }}>
          <TextField size="s" label="Липкие строки" labelPlacement="outer" placeholder="Например: 1, 2, 23" value={stickyIdsText} onChange={event => setStickyIdsText(event.target.value)} />
        </div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 20px'
      }}>
          {COLUMNS.map(({
          key,
          name
        }) => <Checkbox key={key} size="s" label={typeof name === 'string' ? name : key} checked={stickyColumns.includes(key)} onChange={event => toggleColumn(key, event.target.checked)} />)}
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '520px'
        },
        rowMarkers: {
          startIndex: 1
        },
        stickyColumns,
        stickyRows
      }} columnConfig={COLUMNS} rows={PLAYGROUND_ROWS} />
      </div>;
  }
}`,...(bu=(Cu=p.parameters)==null?void 0:Cu.docs)==null?void 0:bu.source}}};const _u=["StickyColumns","StickyRows","RowsAndColumns","WithPinnedColumns","WithColumnGroups","WithSorting","VariableRowHeight","WithSummaryRows","WithMergedCells","LargeData","Playground"],Yu=Object.freeze(Object.defineProperty({__proto__:null,LargeData:N,Playground:p,RowsAndColumns:w,StickyColumns:y,StickyRows:E,VariableRowHeight:S,WithColumnGroups:T,WithMergedCells:g,WithPinnedColumns:v,WithSorting:f,WithSummaryRows:R,__namedExportsOrder:_u,default:fu},Symbol.toStringTag,{value:"Module"}));export{Yu as T};
