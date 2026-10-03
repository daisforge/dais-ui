import{r as d,d as u}from"./react-D2T61mpp.js";import{b as Au}from"./tableData-DVJFoYoT.js";import Fu from"./DocStoryTemplate-C1WBAfeL.js";import{S as t}from"./StoryHint-D7Z2UPWM.js";import{s as pu}from"./storySourceDoc-tVKyHcEN.js";import{T as l}from"./TableCanvas-CwcxGxA3.js";import{T as Bu}from"./TextField-Ccfdl-sb.js";import{b as Ou,z as Vu}from"./@salutejs/sdds-finai-xsnoJ7gQ.js";const _u={title:"Локальные компоненты/TableCanvas/StickyRowsCols",tags:["!autodocs"],parameters:{docs:{page:Fu}}},m=pu({preCode:`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,previewSource:"shown"}),_=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],ju=["Москва","Санкт-Петербург","Казань","Новосибирск","Екатеринбург"],V=["Кредиты","Депозиты","Карты","Ипотека","Страхование"],M=e=>e.reduce((s,o)=>s+o,0),H=e=>_.map((s,o)=>M(e.map(b=>b.months[o]??0)));function F(e=40){const s=Au(7),o=ju.map(n=>{const r=Array.from({length:e},(c,w)=>({kind:"item",region:n,manager:`Менеджер ${w+1}`,product:V[w%V.length]??"",months:_.map(()=>Math.round(s()*900+100))}));return{subtotal:{kind:"subtotal",region:n,manager:"—",product:`Итого: ${n}`,months:H(r)},items:r}});return[{kind:"total",region:"Все регионы",manager:"—",product:"Итого по банку",months:H(o.map(({subtotal:n})=>n))},...o.flatMap(({subtotal:n,items:r})=>[n,...r])].map((n,r)=>({...n,id:r+1,total:M(n.months)}))}const k=e=>e.toLocaleString("ru-RU"),hu={total:"rgba(46, 170, 220, 0.2)",subtotal:"rgba(46, 170, 220, 0.08)"},Iu=({row:e})=>{const s=hu[e.kind];return s?{bgCell:s}:void 0};function L({sortable:e=!1}={}){const s=e?"numberSort":void 0;return[{key:"id",name:"№",width:64,sortingType:s},{key:"region",name:"Регион",width:160,sortingType:e?"stringSort":void 0},{key:"manager",name:"Менеджер",width:140},{key:"product",name:"Продукт",width:180},..._.map((n,r)=>({key:`m${r+1}`,name:n,width:110,renderCell:({row:a})=>k(a.months[r]??0)})),{key:"total",name:"Год",width:130,sortingType:s,renderCell:({row:n})=>k(n.total)}].map(n=>({...n,themeOverride:Iu}))}const y=F(),i=L(),C={height:"600px"},B=e=>e.kind!=="item",E={...m,name:"Липкие колонки",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Прокрутите вправо: колонка ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:188,columnNumber:36},void 0)," прилипает к левому краю, а"," ",u.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:189,columnNumber:9},void 0)," встаёт рядом с ней, когда доедет."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:187,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,stickyColumns:["region","total"]},columnConfig:i,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:191,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:186,columnNumber:5},void 0)},v={...m,name:"Липкие строки",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог каждого региона, до которого вы доскроллили."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:208,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,stickyRows:B},columnConfig:i,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:212,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:207,columnNumber:5},void 0)},T={...m,name:"Строки и колонки вместе",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Липкие колонки ",u.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:230,columnNumber:24},void 0)," и ",u.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:230,columnNumber:41},void 0),", липкие строки — общий итог и итог по Казани. Нумерация строк остаётся слева."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:229,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,rowMarkers:{startIndex:1},stickyColumns:["product","total"],stickyRows:e=>e.kind==="total"||e.kind==="subtotal"&&e.region==="Казань"},columnConfig:i,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:233,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:228,columnNumber:5},void 0)},f={...m,name:"Вместе с закреплёнными колонками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Колонка ",u.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:255,columnNumber:17},void 0)," закреплена всегда (",u.jsxDEV("code",{children:"columnsControl.pinnedDefault"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:256,columnNumber:9},void 0),"), а ",u.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:256,columnNumber:55},void 0)," и"," ",u.jsxDEV("b",{children:"Июн"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:257,columnNumber:9},void 0)," прилипают правее неё. Закрепление можно менять в меню колонок."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:254,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,columnsControl:{enable:!0,pinning:!0,pinnedDefault:["id"]},stickyColumns:["product","m6"],stickyRows:e=>e.kind==="total"},columnConfig:i,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:260,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:253,columnNumber:5},void 0)},Mu=[{key:"group-info",name:"Подразделение",children:i.slice(0,4)},{key:"group-h1",name:"1 полугодие",children:i.slice(4,10)},{key:"group-h2",name:"2 полугодие",children:i.slice(10,16)},...i.slice(16)],S={...m,name:"С группировкой колонок",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Группа в шапке разрывается на границе липкой зоны: ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:291,columnNumber:60},void 0)," ","остаётся под «Подразделением», а ",u.jsxDEV("b",{children:"Июл"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:292,columnNumber:42},void 0)," прилипает вместе с подписью своей группы."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:290,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,stickyColumns:["region","m7"],stickyRows:B},columnConfig:Mu,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:295,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:289,columnNumber:5},void 0)},Lu=L({sortable:!0}),Hu=F(15),R={...m,name:"С сортировкой",render:()=>{const e=d.useState([]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Отсортируйте по ",u.jsxDEV("b",{children:"Году"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:320,columnNumber:27},void 0),": итоги переедут на новые места, но останутся липкими — строки задаются условием, а не номером."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:319,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,sorting:{state:e},stickyColumns:["region"],stickyRows:B},columnConfig:Lu,rows:Hu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:323,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:318,columnNumber:7},void 0)}},Uu={total:64,subtotal:48},g={...m,name:"Разная высота строк",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк растёт ступенями, строки под ней уходят без зазоров."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:348,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,rowHeight:(e,s)=>Uu[e.kind]??s.rowSizeValue,stickyColumns:["product"],stickyRows:B},columnConfig:i,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:352,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:347,columnNumber:5},void 0)},Wu=[{label:"Сумма по строкам",total:M(y.filter(e=>e.kind==="item").map(e=>e.total))}],Pu=e=>({row:s})=>e==="product"?s.label:e==="total"?k(s.total):"",Yu=L().map(e=>({...e,renderSummaryCell:Pu(e.key)})),N={...m,name:"С итоговой строкой снизу",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Итоги регионов прилипают сверху, а итоговая строка (",u.jsxDEV("code",{children:"bottomSummaryRows"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:398,columnNumber:9},void 0),") всегда закреплена снизу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:396,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,summaryRows:{showDefault:!0,showInControl:!0},stickyColumns:["product","total"],stickyRows:e=>e.kind==="subtotal"},columnConfig:Yu,rows:y,bottomSummaryRows:Wu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:400,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:395,columnNumber:5},void 0)},Gu=F(12),p={...m,name:"Со слитыми ячейками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает, название региона переезжает в прилипшую строку, а остаток блока прокручивается под ней."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:422,columnNumber:7},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["product"],stickyRows:e=>e.kind==="subtotal"&&e.region==="Санкт-Петербург"},columnConfig:i,rows:Gu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:427,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:421,columnNumber:5},void 0)},h={...m,name:"20 000 строк",render:()=>{const[e]=d.useState(()=>F(4e3));return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:"20 000 строк и 17 колонок: позиции считаются только по видимым строкам, поэтому прокрутка остаётся плавной."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:450,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,rowMarkers:{startIndex:1},stickyColumns:["region","total"],stickyRows:B},columnConfig:i,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:454,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:449,columnNumber:7},void 0)}},j=5e4,zu=(e,s)=>(e*7+s*13)%89*10+100,Ku=e=>{const o=`Регион ${Math.floor(e/j)+1}`;return e===0?{id:1,kind:"total",region:"Все регионы",product:"Итого"}:e%j===0?{id:e+1,kind:"subtotal",region:o,product:`Итого: ${o}`}:{id:e+1,kind:"item",region:o,product:V[e%V.length]??""}},I=(e,s)=>Array.from({length:s},(o,b)=>Ku(e+b)),xu=[{key:"id",name:"№",width:100},{key:"region",name:"Регион",width:160},{key:"product",name:"Продукт",width:180},..._.map((e,s)=>({key:`m${s+1}`,name:e,width:110,renderCell:({row:o})=>k(zu(o.id,s))}))].map(e=>({...e,themeOverride:({row:s})=>{const o=hu[s.kind];return o?{bgCell:o}:void 0}})),Zu=1e6,$u=[0,25e4,5e5,75e4],x={...m,name:"1 000 000 строк, липкие по индексам",render:()=>{const[e]=d.useState(()=>I(0,Zu));return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(t,{children:["Миллион строк. Липкие строки переданы индексами (",u.jsxDEV("code",{children:"stickyRows: [0, 250000, …]"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:539,columnNumber:11},void 0),") — таблица не проходит по строкам вообще. Перетащите ползунок прокрутки вниз."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:537,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:C,stickyColumns:["region"],stickyRows:$u},columnConfig:xu,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:542,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:536,columnNumber:7},void 0)}},O=j,D={...m,name:"Подгрузка чанками",render:()=>{const[e,s]=d.useState(()=>I(0,O)),o=d.useRef(0),[b,n]=d.useState(0),r=d.useCallback(c=>(o.current+=1,c.kind!=="item"),[]);d.useEffect(()=>n(o.current),[e]);const a=()=>s(c=>[...c,...I(c.length,O)]);return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[u.jsxDEV(t,{children:["Строки подгружаются чанками по ",k(O),". Липкие строки заданы предикатом; его результаты кешируются, поэтому после подгрузки он вызывается только для новых строк — счётчик растёт на размер чанка, а не на всю таблицу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:581,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[u.jsxDEV(Ou,{size:"s",view:"secondary",onClick:a,children:["Загрузить ещё ",k(O)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:588,columnNumber:11},void 0),u.jsxDEV("span",{children:["Строк: ",u.jsxDEV("b",{children:k(e.length)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:592,columnNumber:20},void 0)," · вызовов предиката:"," ",u.jsxDEV("b",{children:k(b)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:593,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:591,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:587,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:{height:"540px"},stickyColumns:["region"],stickyRows:r},columnConfig:xu,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:596,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:580,columnNumber:7},void 0)}},Xu=F(20),qu=e=>new Set(e.split(/[,\s]+/).map(Number).filter(Number.isInteger)),A={...pu({previewSource:"hidden"}),name:"Песочница",render:()=>{const[e,s]=d.useState(["region","total"]),[o,b]=d.useState("1, 2, 23"),n=d.useMemo(()=>{const a=qu(o);return c=>a.has(c.id)},[o]),r=(a,c)=>s(w=>c?[...w,a]:w.filter(Du=>Du!==a));return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxDEV(t,{children:["Укажите номера липких строк (колонка ",u.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:640,columnNumber:48},void 0),") и отметьте липкие колонки — таблица обновится сразу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:639,columnNumber:9},void 0),u.jsxDEV("div",{style:{width:320},children:u.jsxDEV(Bu,{size:"s",label:"Липкие строки",labelPlacement:"outer",placeholder:"Например: 1, 2, 23",value:o,onChange:a=>b(a.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:644,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:643,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 20px"},children:i.map(({key:a,name:c})=>u.jsxDEV(Vu,{size:"s",label:typeof c=="string"?c:a,checked:e.includes(a),onChange:w=>r(a,w.target.checked)},a,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:655,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:653,columnNumber:9},void 0),u.jsxDEV(l,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},stickyColumns:e,stickyRows:n},columnConfig:i,rows:Xu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:664,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:638,columnNumber:7},void 0)}};var U,W,P;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(W=E.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var Y,G,z;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(z=(G=v.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var K,Z,$;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var X,q,J;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,uu,eu;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(eu=(uu=S.parameters)==null?void 0:uu.docs)==null?void 0:eu.source}}};var su,ou,nu;R.parameters={...R.parameters,docs:{...(su=R.parameters)==null?void 0:su.docs,source:{originalSource:`{
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
}`,...(nu=(ou=R.parameters)==null?void 0:ou.docs)==null?void 0:nu.source}}};var au,ru,iu;g.parameters={...g.parameters,docs:{...(au=g.parameters)==null?void 0:au.docs,source:{originalSource:`{
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
}`,...(iu=(ru=g.parameters)==null?void 0:ru.docs)==null?void 0:iu.source}}};var tu,lu,cu;N.parameters={...N.parameters,docs:{...(tu=N.parameters)==null?void 0:tu.docs,source:{originalSource:`{
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
}`,...(cu=(lu=N.parameters)==null?void 0:lu.docs)==null?void 0:cu.source}}};var mu,du,Cu;p.parameters={...p.parameters,docs:{...(mu=p.parameters)==null?void 0:mu.docs,source:{originalSource:`{
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
}`,...(Cu=(du=p.parameters)==null?void 0:du.docs)==null?void 0:Cu.source}}};var bu,ku,yu;h.parameters={...h.parameters,docs:{...(bu=h.parameters)==null?void 0:bu.docs,source:{originalSource:`{
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
}`,...(yu=(ku=h.parameters)==null?void 0:ku.docs)==null?void 0:yu.source}}};var wu,Eu,vu;x.parameters={...x.parameters,docs:{...(wu=x.parameters)==null?void 0:wu.docs,source:{originalSource:`{
  ...source,
  name: '1 000 000 строк, липкие по индексам',
  render: () => {
    const [rows] = useState(() => createBigRows(0, MILLION));
    return <>
        <StoryHint>
          Миллион строк. Липкие строки переданы индексами (
          <code>stickyRows: [0, 250000, …]</code>) — таблица не проходит по
          строкам вообще. Перетащите ползунок прокрутки вниз.
        </StoryHint>
        <TableCanvas tableConfig={{
        containerStyle: CONTAINER_STYLE,
        stickyColumns: ['region'],
        stickyRows: MILLION_STICKY_ROWS
      }} columnConfig={BIG_COLUMNS} rows={rows} />
      </>;
  }
}`,...(vu=(Eu=x.parameters)==null?void 0:Eu.docs)==null?void 0:vu.source}}};var Tu,fu,Su;D.parameters={...D.parameters,docs:{...(Tu=D.parameters)==null?void 0:Tu.docs,source:{originalSource:`{
  ...source,
  name: 'Подгрузка чанками',
  render: () => {
    const [rows, setRows] = useState(() => createBigRows(0, CHUNK_SIZE));
    const predicateCalls = useRef(0);
    const [callsShown, setCallsShown] = useState(0);
    const isSticky = useCallback((row: BigRow) => {
      predicateCalls.current += 1;
      return row.kind !== 'item';
    }, []);
    useEffect(() => setCallsShown(predicateCalls.current), [rows]);
    const loadChunk = () => setRows(current => [...current, ...createBigRows(current.length, CHUNK_SIZE)]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <StoryHint>
          Строки подгружаются чанками по {formatNumber(CHUNK_SIZE)}. Липкие
          строки заданы предикатом; его результаты кешируются, поэтому после
          подгрузки он вызывается только для новых строк — счётчик растёт на
          размер чанка, а не на всю таблицу.
        </StoryHint>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <Button size="s" view="secondary" onClick={loadChunk}>
            Загрузить ещё {formatNumber(CHUNK_SIZE)}
          </Button>
          <span>
            Строк: <b>{formatNumber(rows.length)}</b> · вызовов предиката:{' '}
            <b>{formatNumber(callsShown)}</b>
          </span>
        </div>
        <TableCanvas tableConfig={{
        containerStyle: {
          height: '540px'
        },
        stickyColumns: ['region'],
        stickyRows: isSticky
      }} columnConfig={BIG_COLUMNS} rows={rows} />
      </div>;
  }
}`,...(Su=(fu=D.parameters)==null?void 0:fu.docs)==null?void 0:Su.source}}};var Ru,gu,Nu;A.parameters={...A.parameters,docs:{...(Ru=A.parameters)==null?void 0:Ru.docs,source:{originalSource:`{
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
}`,...(Nu=(gu=A.parameters)==null?void 0:gu.docs)==null?void 0:Nu.source}}};const Ju=["StickyColumns","StickyRows","RowsAndColumns","WithPinnedColumns","WithColumnGroups","WithSorting","VariableRowHeight","WithSummaryRows","WithMergedCells","LargeData","MillionRowsByIndexes","ChunkLoading","Playground"],i4=Object.freeze(Object.defineProperty({__proto__:null,ChunkLoading:D,LargeData:h,MillionRowsByIndexes:x,Playground:A,RowsAndColumns:T,StickyColumns:E,StickyRows:v,VariableRowHeight:g,WithColumnGroups:S,WithMergedCells:p,WithPinnedColumns:f,WithSorting:R,WithSummaryRows:N,__namedExportsOrder:Ju,default:_u},Symbol.toStringTag,{value:"Module"}));export{i4 as T};
