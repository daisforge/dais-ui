import{r as C,d as u}from"./react-D2T61mpp.js";import{b as Hu}from"./tableData-DVJFoYoT.js";import Uu from"./DocStoryTemplate-C1WBAfeL.js";import{S as r}from"./StoryHint-D7Z2UPWM.js";import{s as Vu}from"./storySourceDoc-tVKyHcEN.js";import{T as i}from"./TableCanvas-DuuY_pKr.js";import{T as Wu}from"./TextField-Bd7lhmEf.js";import{b as Pu,z as Yu}from"./@salutejs/sdds-finai-xsnoJ7gQ.js";const Gu={title:"Локальные компоненты/TableCanvas/StickyRowsCols",tags:["!autodocs"],parameters:{docs:{page:Uu}}},l=Vu({preCode:`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,previewSource:"shown"}),I=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],zu=["Москва","Санкт-Петербург","Казань","Новосибирск","Екатеринбург"],j=["Кредиты","Депозиты","Карты","Ипотека","Страхование"],H=e=>e.reduce((s,o)=>s+o,0),W=e=>I.map((s,o)=>H(e.map(b=>b.months[o]??0)));function O(e=40){const s=Hu(7),o=zu.map(n=>{const c=Array.from({length:e},(m,E)=>({kind:"item",region:n,manager:`Менеджер ${E+1}`,product:j[E%j.length]??"",months:I.map(()=>Math.round(s()*900+100))}));return{subtotal:{kind:"subtotal",region:n,manager:"—",product:`Итого: ${n}`,months:W(c)},items:c}});return[{kind:"total",region:"Все регионы",manager:"—",product:"Итого по банку",months:W(o.map(({subtotal:n})=>n))},...o.flatMap(({subtotal:n,items:c})=>[n,...c])].map((n,c)=>({...n,id:c+1,total:H(n.months)}))}const y=e=>e.toLocaleString("ru-RU"),_u={total:"rgba(46, 170, 220, 0.2)",subtotal:"rgba(46, 170, 220, 0.08)"},Ku=({row:e})=>{const s=_u[e.kind];return s?{bgCell:s}:void 0};function U({sortable:e=!1}={}){const s=e?"numberSort":void 0;return[{key:"id",name:"№",width:64,sortingType:s},{key:"region",name:"Регион",width:160,sortingType:e?"stringSort":void 0},{key:"manager",name:"Менеджер",width:140},{key:"product",name:"Продукт",width:180},...I.map((n,c)=>({key:`m${c+1}`,name:n,width:110,renderCell:({row:a})=>y(a.months[c]??0)})),{key:"total",name:"Год",width:130,sortingType:s,renderCell:({row:n})=>y(n.total)}].map(n=>({...n,themeOverride:Ku}))}const k=O(),t=U(),d={height:"600px"},V=e=>e.kind!=="item",w={...l,name:"Липкие колонки",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Прокрутите вправо: колонка ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:188,columnNumber:36},void 0)," прилипает к левому краю, а"," ",u.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:189,columnNumber:9},void 0)," встаёт рядом с ней, когда доедет."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:187,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,stickyColumns:["region","total"]},columnConfig:t,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:191,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:186,columnNumber:5},void 0)},Zu=new Set(["m1","m4","m7","m10"]),v={...l,name:"Липкие колонки по условию",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Колонки заданы функцией: липкими становятся первые месяцы кварталов. Прокрутите вправо — ",u.jsxDEV("b",{children:"Янв"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:212,columnNumber:29},void 0),", ",u.jsxDEV("b",{children:"Апр"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:212,columnNumber:41},void 0),", ",u.jsxDEV("b",{children:"Июл"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:212,columnNumber:53},void 0),", ",u.jsxDEV("b",{children:"Окт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:212,columnNumber:65},void 0)," по очереди встают у левого края."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:210,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:{height:"600px",width:"760px"},stickyColumns:e=>Zu.has(e.key)},columnConfig:t,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:215,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:209,columnNumber:5},void 0)},T={...l,name:"Липкие строки",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:"Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог каждого региона, до которого вы доскроллили."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:232,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,stickyRows:V},columnConfig:t,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:236,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:231,columnNumber:5},void 0)},f={...l,name:"Строки и колонки вместе",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Липкие колонки ",u.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:254,columnNumber:24},void 0)," и ",u.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:254,columnNumber:41},void 0),", липкие строки — общий итог и итог по Казани. Нумерация строк остаётся слева."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:253,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,rowMarkers:{startIndex:1},stickyColumns:["product","total"],stickyRows:e=>e.kind==="total"||e.kind==="subtotal"&&e.region==="Казань"},columnConfig:t,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:257,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:252,columnNumber:5},void 0)},S={...l,name:"Вместе с закреплёнными колонками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Колонка ",u.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:279,columnNumber:17},void 0)," закреплена всегда (",u.jsxDEV("code",{children:"columnsControl.pinnedDefault"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:280,columnNumber:9},void 0),"), а ",u.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:280,columnNumber:55},void 0)," и"," ",u.jsxDEV("b",{children:"Июн"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:281,columnNumber:9},void 0)," прилипают правее неё. Закрепление можно менять в меню колонок."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:278,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,columnsControl:{enable:!0,pinning:!0,pinnedDefault:["id"]},stickyColumns:["product","m6"],stickyRows:e=>e.kind==="total"},columnConfig:t,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:284,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:277,columnNumber:5},void 0)},$u=[{key:"group-info",name:"Подразделение",children:t.slice(0,4)},{key:"group-h1",name:"1 полугодие",children:t.slice(4,10)},{key:"group-h2",name:"2 полугодие",children:t.slice(10,16)},...t.slice(16)],R={...l,name:"С группировкой колонок",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Группа в шапке разрывается на границе липкой зоны: ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:315,columnNumber:60},void 0)," ","остаётся под «Подразделением», а ",u.jsxDEV("b",{children:"Июл"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:316,columnNumber:42},void 0)," прилипает вместе с подписью своей группы."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:314,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,stickyColumns:["region","m7"],stickyRows:V},columnConfig:$u,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:319,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:313,columnNumber:5},void 0)},Qu=U({sortable:!0}),Xu=O(15),g={...l,name:"С сортировкой",render:()=>{const e=C.useState([]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Отсортируйте по ",u.jsxDEV("b",{children:"Году"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:344,columnNumber:27},void 0),": итоги переедут на новые места, но останутся липкими — строки задаются условием, а не номером."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:343,columnNumber:9},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,sorting:{state:e},stickyColumns:["region"],stickyRows:V},columnConfig:Qu,rows:Xu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:347,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:342,columnNumber:7},void 0)}},qu={total:64,subtotal:48},N={...l,name:"Разная высота строк",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:"Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк растёт ступенями, строки под ней уходят без зазоров."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:372,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,rowHeight:(e,s)=>qu[e.kind]??s.rowSizeValue,stickyColumns:["product"],stickyRows:V},columnConfig:t,rows:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:376,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:371,columnNumber:5},void 0)},Ju=[{label:"Сумма по строкам",total:H(k.filter(e=>e.kind==="item").map(e=>e.total))}],u4=e=>({row:s})=>e==="product"?s.label:e==="total"?y(s.total):"",e4=U().map(e=>({...e,renderSummaryCell:u4(e.key)})),p={...l,name:"С итоговой строкой снизу",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Итоги регионов прилипают сверху, а итоговая строка (",u.jsxDEV("code",{children:"bottomSummaryRows"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:422,columnNumber:9},void 0),") всегда закреплена снизу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:420,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,summaryRows:{showDefault:!0,showInControl:!0},stickyColumns:["product","total"],stickyRows:e=>e.kind==="subtotal"},columnConfig:e4,rows:k,bottomSummaryRows:Ju},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:424,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:419,columnNumber:5},void 0)},ju=O(12),Iu=t.map(e=>e.key==="region"?{...e,themeOverride:void 0}:e),h={...l,name:"Со слитыми ячейками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:"Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает, название региона переезжает в прилипшую строку, а остаток блока прокручивается под ней."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:451,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["product"],stickyRows:e=>e.kind==="subtotal"&&e.region==="Санкт-Петербург"},columnConfig:Iu,rows:ju},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:456,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:450,columnNumber:5},void 0)},x={...l,name:"Липкая колонка со слитыми ячейками",render:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Колонка ",u.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:477,columnNumber:17},void 0)," слита по значениям и при этом липкая. Прокрутите вправо — слитые блоки регионов прилипают к левому краю целиком; прокрутите вниз — итоги регионов прилипают под шапкой, и название региона переезжает в прилипшую строку."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:476,columnNumber:7},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["region"],stickyRows:e=>e.kind==="subtotal"},columnConfig:Iu,rows:ju},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:482,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:475,columnNumber:5},void 0)},D={...l,name:"20 000 строк",render:()=>{const[e]=C.useState(()=>O(4e3));return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:"20 000 строк и 17 колонок: позиции считаются только по видимым строкам, поэтому прокрутка остаётся плавной."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:504,columnNumber:9},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,rowMarkers:{startIndex:1},stickyColumns:["region","total"],stickyRows:V},columnConfig:t,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:508,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:503,columnNumber:7},void 0)}},M=5e4,s4=(e,s)=>(e*7+s*13)%89*10+100,o4=e=>{const o=`Регион ${Math.floor(e/M)+1}`;return e===0?{id:1,kind:"total",region:"Все регионы",product:"Итого"}:e%M===0?{id:e+1,kind:"subtotal",region:o,product:`Итого: ${o}`}:{id:e+1,kind:"item",region:o,product:j[e%j.length]??""}},L=(e,s)=>Array.from({length:s},(o,b)=>o4(e+b)),Mu=[{key:"id",name:"№",width:100},{key:"region",name:"Регион",width:160},{key:"product",name:"Продукт",width:180},...I.map((e,s)=>({key:`m${s+1}`,name:e,width:110,renderCell:({row:o})=>y(s4(o.id,s))}))].map(e=>({...e,themeOverride:({row:s})=>{const o=_u[s.kind];return o?{bgCell:o}:void 0}})),n4=1e6,a4=[0,25e4,5e5,75e4],A={...l,name:"1 000 000 строк, липкие по индексам",render:()=>{const[e]=C.useState(()=>L(0,n4));return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r,{children:["Миллион строк. Липкие строки переданы индексами (",u.jsxDEV("code",{children:"stickyRows: [0, 250000, …]"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:593,columnNumber:11},void 0),") — таблица не проходит по строкам вообще. Перетащите ползунок прокрутки вниз."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:591,columnNumber:9},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:d,stickyColumns:["region"],stickyRows:a4},columnConfig:Mu,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:596,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:590,columnNumber:7},void 0)}},_=M,F={...l,name:"Подгрузка чанками",render:()=>{const[e,s]=C.useState(()=>L(0,_)),o=C.useRef(0),[b,n]=C.useState(0),c=C.useCallback(m=>(o.current+=1,m.kind!=="item"),[]);C.useEffect(()=>n(o.current),[e]);const a=()=>s(m=>[...m,...L(m.length,_)]);return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[u.jsxDEV(r,{children:["Строки подгружаются чанками по ",y(_),". Липкие строки заданы предикатом; его результаты кешируются, поэтому после подгрузки он вызывается только для новых строк — счётчик растёт на размер чанка, а не на всю таблицу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:635,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[u.jsxDEV(Pu,{size:"s",view:"secondary",onClick:a,children:["Загрузить ещё ",y(_)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:642,columnNumber:11},void 0),u.jsxDEV("span",{children:["Строк: ",u.jsxDEV("b",{children:y(e.length)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:646,columnNumber:20},void 0)," · вызовов предиката:"," ",u.jsxDEV("b",{children:y(b)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:647,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:645,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:641,columnNumber:9},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:{height:"540px"},stickyColumns:["region"],stickyRows:c},columnConfig:Mu,rows:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:650,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:634,columnNumber:7},void 0)}},r4=O(20),i4=e=>new Set(e.split(/[,\s]+/).map(Number).filter(Number.isInteger)),B={...Vu({previewSource:"hidden"}),name:"Песочница",render:()=>{const[e,s]=C.useState(["region","total"]),[o,b]=C.useState("1, 2, 23"),n=C.useMemo(()=>{const a=i4(o);return m=>a.has(m.id)},[o]),c=(a,m)=>s(E=>m?[...E,a]:E.filter(Lu=>Lu!==a));return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxDEV(r,{children:["Укажите номера липких строк (колонка ",u.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:694,columnNumber:48},void 0),") и отметьте липкие колонки — таблица обновится сразу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:693,columnNumber:9},void 0),u.jsxDEV("div",{style:{width:320},children:u.jsxDEV(Wu,{size:"s",label:"Липкие строки",labelPlacement:"outer",placeholder:"Например: 1, 2, 23",value:o,onChange:a=>b(a.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:698,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:697,columnNumber:9},void 0),u.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 20px"},children:t.map(({key:a,name:m})=>u.jsxDEV(Yu,{size:"s",label:typeof m=="string"?m:a,checked:e.includes(a),onChange:E=>c(a,E.target.checked)},a,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:709,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:707,columnNumber:9},void 0),u.jsxDEV(i,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},stickyColumns:e,stickyRows:n},columnConfig:t,rows:r4},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:718,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:692,columnNumber:7},void 0)}};var P,Y,G;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var z,K,Z;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...source,
  name: 'Липкие колонки по условию',
  render: () => <>
      <StoryHint>
        Колонки заданы функцией: липкими становятся первые месяцы кварталов.
        Прокрутите вправо — <b>Янв</b>, <b>Апр</b>, <b>Июл</b>, <b>Окт</b> по
        очереди встают у левого края.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: {
        height: '600px',
        width: '760px'
      },
      stickyColumns: column => QUARTER_START_MONTHS.has(column.key)
    }} columnConfig={COLUMNS} rows={REPORT_ROWS} />
    </>
}`,...(Z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var $,Q,X;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var q,J,uu;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(uu=(J=f.parameters)==null?void 0:J.docs)==null?void 0:uu.source}}};var eu,su,ou;S.parameters={...S.parameters,docs:{...(eu=S.parameters)==null?void 0:eu.docs,source:{originalSource:`{
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
}`,...(ou=(su=S.parameters)==null?void 0:su.docs)==null?void 0:ou.source}}};var nu,au,ru;R.parameters={...R.parameters,docs:{...(nu=R.parameters)==null?void 0:nu.docs,source:{originalSource:`{
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
}`,...(ru=(au=R.parameters)==null?void 0:au.docs)==null?void 0:ru.source}}};var iu,tu,lu;g.parameters={...g.parameters,docs:{...(iu=g.parameters)==null?void 0:iu.docs,source:{originalSource:`{
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
}`,...(lu=(tu=g.parameters)==null?void 0:tu.docs)==null?void 0:lu.source}}};var cu,mu,du;N.parameters={...N.parameters,docs:{...(cu=N.parameters)==null?void 0:cu.docs,source:{originalSource:`{
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
}`,...(du=(mu=N.parameters)==null?void 0:mu.docs)==null?void 0:du.source}}};var Cu,bu,ku;p.parameters={...p.parameters,docs:{...(Cu=p.parameters)==null?void 0:Cu.docs,source:{originalSource:`{
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
}`,...(ku=(bu=p.parameters)==null?void 0:bu.docs)==null?void 0:ku.source}}};var yu,Eu,wu;h.parameters={...h.parameters,docs:{...(yu=h.parameters)==null?void 0:yu.docs,source:{originalSource:`{
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
    }} columnConfig={MERGE_COLUMNS} rows={MERGE_REPORT_ROWS} />
    </>
}`,...(wu=(Eu=h.parameters)==null?void 0:Eu.docs)==null?void 0:wu.source}}};var vu,Tu,fu;x.parameters={...x.parameters,docs:{...(vu=x.parameters)==null?void 0:vu.docs,source:{originalSource:`{
  ...source,
  name: 'Липкая колонка со слитыми ячейками',
  render: () => <>
      <StoryHint>
        Колонка <b>Регион</b> слита по значениям и при этом липкая. Прокрутите
        вправо — слитые блоки регионов прилипают к левому краю целиком;
        прокрутите вниз — итоги регионов прилипают под шапкой, и название
        региона переезжает в прилипшую строку.
      </StoryHint>
      <TableCanvas tableConfig={{
      containerStyle: CONTAINER_STYLE,
      mergeCells: {
        mergeByCellValues: ['region']
      },
      stickyColumns: ['region'],
      stickyRows: row => row.kind === 'subtotal'
    }} columnConfig={MERGE_COLUMNS} rows={MERGE_REPORT_ROWS} />
    </>
}`,...(fu=(Tu=x.parameters)==null?void 0:Tu.docs)==null?void 0:fu.source}}};var Su,Ru,gu;D.parameters={...D.parameters,docs:{...(Su=D.parameters)==null?void 0:Su.docs,source:{originalSource:`{
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
}`,...(gu=(Ru=D.parameters)==null?void 0:Ru.docs)==null?void 0:gu.source}}};var Nu,pu,hu;A.parameters={...A.parameters,docs:{...(Nu=A.parameters)==null?void 0:Nu.docs,source:{originalSource:`{
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
}`,...(hu=(pu=A.parameters)==null?void 0:pu.docs)==null?void 0:hu.source}}};var xu,Du,Au;F.parameters={...F.parameters,docs:{...(xu=F.parameters)==null?void 0:xu.docs,source:{originalSource:`{
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
}`,...(Au=(Du=F.parameters)==null?void 0:Du.docs)==null?void 0:Au.source}}};var Fu,Bu,Ou;B.parameters={...B.parameters,docs:{...(Fu=B.parameters)==null?void 0:Fu.docs,source:{originalSource:`{
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
}`,...(Ou=(Bu=B.parameters)==null?void 0:Bu.docs)==null?void 0:Ou.source}}};const t4=["StickyColumns","StickyColumnsByPredicate","StickyRows","RowsAndColumns","WithPinnedColumns","WithColumnGroups","WithSorting","VariableRowHeight","WithSummaryRows","WithMergedCells","StickyMergedColumn","LargeData","MillionRowsByIndexes","ChunkLoading","Playground"],E4=Object.freeze(Object.defineProperty({__proto__:null,ChunkLoading:F,LargeData:D,MillionRowsByIndexes:A,Playground:B,RowsAndColumns:f,StickyColumns:w,StickyColumnsByPredicate:v,StickyMergedColumn:x,StickyRows:T,VariableRowHeight:N,WithColumnGroups:R,WithMergedCells:h,WithPinnedColumns:S,WithSorting:g,WithSummaryRows:p,__namedExportsOrder:t4,default:Gu},Symbol.toStringTag,{value:"Module"}));export{E4 as T};
