import{r as k,d as e}from"./react-D2T61mpp.js";import{b as Ku}from"./tableData-DVJFoYoT.js";import Zu from"./DocStoryTemplate-fMZZ290W.js";import{S as r}from"./StoryHint-D7Z2UPWM.js";import{s as Hu}from"./storySourceDoc-tVKyHcEN.js";import{T as t,C as a}from"./TableCanvas-wkKiHt_9.js";import{T as $u}from"./TextField-1s64aVQu.js";import{t as Xu,A as Qu}from"./@salutejs/sdds-finai-DvhCM2Xz.js";import{al as qu,t_ as Lu,iN as Ju}from"./@salutejs/plasma-icons-DoqG1pWM.js";const ue={title:"Локальные компоненты/TableCanvas/StickyRowsCols",tags:["!autodocs"],parameters:{docs:{page:Zu}}},d=Hu({preCode:`
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,previewSource:"shown"}),H=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],Uu=["Москва","Санкт-Петербург","Казань","Новосибирск","Екатеринбург"],M=["Кредиты","Депозиты","Карты","Ипотека","Страхование"],L=u=>u.reduce((s,o)=>s+o,0),z=u=>H.map((s,o)=>L(u.map(i=>i.months[o]??0)));function T(u=40){const s=Ku(7),o=Uu.map(n=>{const m=Array.from({length:u},(C,w)=>({kind:"item",region:n,manager:`Менеджер ${w+1}`,product:M[w%M.length]??"",months:H.map(()=>Math.round(s()*900+100))}));return{subtotal:{kind:"subtotal",region:n,manager:"—",product:`Итого: ${n}`,months:z(m)},items:m}});return[{kind:"total",region:"Все регионы",manager:"—",product:"Итого по банку",months:z(o.map(({subtotal:n})=>n))},...o.flatMap(({subtotal:n,items:m})=>[n,...m])].map((n,m)=>({...n,id:m+1,total:L(n.months)}))}const v=u=>u.toLocaleString("ru-RU"),Wu={total:"rgba(46, 170, 220, 0.2)",subtotal:"rgba(46, 170, 220, 0.08)"},ee=({row:u})=>{const s=Wu[u.kind];return s?{bgCell:s}:void 0},se={Москва:"accent","Санкт-Петербург":"positive",Казань:"warning",Новосибирск:"dark",Екатеринбург:"negative"},oe=48,G=1e3,E=u=>({direction:"row",alignItems:"center",columnGap:8,padding:{left:u.cellHorizontalPadding,right:u.cellHorizontalPadding},style:{width:"100%"}}),P=u=>u.baseFontStyle.replace(/^\d+/,"600"),ae=({row:u,theme:s})=>e.jsxDEV(a.Container,{...E(s),children:e.jsxDEV(a.Badge,{text:u.region,view:u.kind==="total"?"dark":se[u.region]??"default",size:u.kind==="item"?"s":"m",pilled:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:181,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:180,columnNumber:3},void 0),ne=({row:u,theme:s})=>e.jsxDEV(a.Container,{...E(s),children:u.kind==="item"?e.jsxDEV(a.Link,{onClick:()=>console.log("Открыть менеджера",u.manager),children:u.manager},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:196,columnNumber:7},void 0):e.jsxDEV(a.Text,{font:s.baseFontStyle,children:u.manager},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:204,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:194,columnNumber:3},void 0),ie=({row:u,theme:s})=>e.jsxDEV(a.Container,{...E(s),children:[e.jsxDEV(a.Icon,{icon:u.kind==="item"?e.jsxDEV(qu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:213,columnNumber:35},void 0):e.jsxDEV(Lu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:213,columnNumber:54},void 0),size:16,color:u.kind==="item"?s.tokens.textAccent:s.tokens.textWarning},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:212,columnNumber:5},void 0),e.jsxDEV(a.Text,{font:u.kind==="item"?s.baseFontStyle:P(s),children:u.product},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:219,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:211,columnNumber:3},void 0),re=u=>({row:s,theme:o})=>{const i=s.months[u]??0,n=Math.max(2,Math.round(Math.min(i,G)/G*oe));return e.jsxDEV(a.Container,{...E(o),children:[s.kind==="item"&&e.jsxDEV(a.Rect,{color:o.tokens.textAccent,style:{width:n,height:6}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:241,columnNumber:11},void 0),e.jsxDEV(a.Text,{font:s.kind==="item"?o.baseFontStyle:P(o),children:v(i)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:246,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:239,columnNumber:7},void 0)},K=L(T().filter(u=>u.kind==="item").map(u=>u.total))/(Uu.length*40),te=({row:u,theme:s})=>e.jsxDEV(a.Container,{...E(s),children:[e.jsxDEV(a.Text,{font:u.kind==="item"?s.baseFontStyle:P(s),children:v(u.total)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:266,columnNumber:5},void 0),u.kind!=="item"&&e.jsxDEV(a.Badge,{text:"Итог",view:"accent",size:"xs",transparent:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:272,columnNumber:7},void 0),u.kind==="item"&&e.jsxDEV(a.Badge,{text:u.total>=K?"Выше плана":"Ниже плана",view:u.total>=K?"positive":"negative",size:"xs",transparent:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:275,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:265,columnNumber:3},void 0),le=({row:u,theme:s})=>e.jsxDEV(a.Container,{...E(s),children:u.kind==="item"&&e.jsxDEV(a.Checkbox,{checked:u.id%3===0,size:16},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:289,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:287,columnNumber:3},void 0),ce=({row:u,theme:s,hovered:o})=>{const i=u.kind==="item"&&o.rowHover;return e.jsxDEV(a.Container,{...E(s),children:[u.kind!=="item"&&e.jsxDEV(a.Button,{view:"accent",size:"xs",onClick:()=>console.log("Детали",u.region),children:"Детали"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:300,columnNumber:9},void 0),i&&e.jsxDEV(a.Button,{view:"secondary",size:"xs",onClick:()=>console.log("Открыть",u.id),children:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:311,columnNumber:9},void 0),i&&e.jsxDEV(a.IconButton,{icon:e.jsxDEV(Ju,{color:"#1d1d1f",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:323,columnNumber:17},void 0),view:"clear",buttonSize:"xs",tooltip:"Просмотр"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:322,columnNumber:9},void 0),i&&e.jsxDEV(a.IconButton,{icon:e.jsxDEV(Lu,{color:"#1d1d1f",size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:331,columnNumber:17},void 0),view:"clear",buttonSize:"xs",tooltip:"В избранное"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:330,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:298,columnNumber:5},void 0)};function Y({sortable:u=!1}={}){const s=u?"numberSort":void 0;return[{key:"id",name:"№",width:64,sortingType:s},{key:"region",name:"Регион",width:180,sortingType:u?"stringSort":void 0,renderCell:ae},{key:"manager",name:"Менеджер",width:150,renderCell:ne},{key:"product",name:"Продукт",width:240,renderCell:ie},...H.map((n,m)=>({key:`m${m+1}`,name:n,width:130,renderCell:re(m)})),{key:"total",name:"Год",width:200,sortingType:s,renderCell:te},{key:"checked",name:"Сверено",width:110,renderCell:le},{key:"actions",name:"Действия",width:220,renderCell:ce}].map(n=>({...n,themeOverride:ee}))}const y=T(),c=Y(),b={height:"600px"},_=u=>u.kind!=="item",f={...d,name:"Липкие колонки",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Прокрутите вправо: колонка ",e.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:404,columnNumber:36},void 0)," прилипает к левому краю, а"," ",e.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:405,columnNumber:9},void 0)," встаёт рядом с ней, когда доедет."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:403,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,stickyColumns:["region","total"]},columnConfig:c,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:407,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:402,columnNumber:5},void 0)},de=new Set(["m1","m4","m7","m10"]),N={...d,name:"Липкие колонки по условию",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Колонки заданы функцией: липкими становятся первые месяцы кварталов. Прокрутите вправо — ",e.jsxDEV("b",{children:"Янв"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:428,columnNumber:29},void 0),", ",e.jsxDEV("b",{children:"Апр"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:428,columnNumber:41},void 0),", ",e.jsxDEV("b",{children:"Июл"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:428,columnNumber:53},void 0),", ",e.jsxDEV("b",{children:"Окт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:428,columnNumber:65},void 0)," по очереди встают у левого края."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:426,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:{height:"600px",width:"760px"},stickyColumns:u=>de.has(u.key)},columnConfig:c,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:431,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:425,columnNumber:5},void 0)},R={...d,name:"Липкие строки",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:"Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог каждого региона, до которого вы доскроллили."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:448,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,stickyRows:_},columnConfig:c,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:452,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:447,columnNumber:5},void 0)},g={...d,name:"Строки и колонки вместе",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Липкие колонки ",e.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:470,columnNumber:24},void 0)," и ",e.jsxDEV("b",{children:"Год"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:470,columnNumber:41},void 0),", липкие строки — общий итог и итог по Казани. Нумерация строк остаётся слева."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:469,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,rowMarkers:{startIndex:1},stickyColumns:["product","total"],stickyRows:u=>u.kind==="total"||u.kind==="subtotal"&&u.region==="Казань"},columnConfig:c,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:473,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:468,columnNumber:5},void 0)},S={...d,name:"Вместе с закреплёнными колонками",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Колонка ",e.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:495,columnNumber:17},void 0)," закреплена всегда (",e.jsxDEV("code",{children:"columnsControl.pinnedDefault"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:496,columnNumber:9},void 0),"), а ",e.jsxDEV("b",{children:"Продукт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:496,columnNumber:55},void 0)," и"," ",e.jsxDEV("b",{children:"Июн"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:497,columnNumber:9},void 0)," прилипают правее неё. Закрепление можно менять в меню колонок."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:494,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,columnsControl:{enable:!0,pinning:!0,pinnedDefault:["id"]},stickyColumns:["product","m6"],stickyRows:u=>u.kind==="total"},columnConfig:c,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:500,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:493,columnNumber:5},void 0)},me=[{key:"group-info",name:"Подразделение",children:c.slice(0,4)},{key:"group-h1",name:"1 полугодие",children:c.slice(4,10)},{key:"group-h2",name:"2 полугодие",children:c.slice(10,16)},...c.slice(16)],p={...d,name:"С группировкой колонок",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Группа в шапке разрывается на границе липкой зоны: ",e.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:531,columnNumber:60},void 0)," ","остаётся под «Подразделением», а ",e.jsxDEV("b",{children:"Июл"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:532,columnNumber:42},void 0)," прилипает вместе с подписью своей группы."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:530,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,stickyColumns:["region","m7"],stickyRows:_},columnConfig:me,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:535,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:529,columnNumber:5},void 0)},Ce=Y({sortable:!0}),be=T(15),h={...d,name:"С сортировкой",render:()=>{const u=k.useState([]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Отсортируйте по ",e.jsxDEV("b",{children:"Году"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:560,columnNumber:27},void 0),": итоги переедут на новые места, но останутся липкими — строки задаются условием, а не номером."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:559,columnNumber:9},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,sorting:{state:u},stickyColumns:["region"],stickyRows:_},columnConfig:Ce,rows:be},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:563,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:558,columnNumber:7},void 0)}},ke={total:64,subtotal:48},x={...d,name:"Разная высота строк",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:"Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк растёт ступенями, строки под ней уходят без зазоров."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:588,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,rowHeight:(u,s)=>ke[u.kind]??s.rowSizeValue,stickyColumns:["product"],stickyRows:_},columnConfig:c,rows:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:592,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:587,columnNumber:5},void 0)},ye=[{label:"Сумма по строкам",total:L(y.filter(u=>u.kind==="item").map(u=>u.total))}],ve=u=>({row:s})=>u==="product"?s.label:u==="total"?v(s.total):"",we=Y().map(u=>({...u,renderSummaryCell:ve(u.key)})),D={...d,name:"С итоговой строкой снизу",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Итоги регионов прилипают сверху, а итоговая строка (",e.jsxDEV("code",{children:"bottomSummaryRows"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:638,columnNumber:9},void 0),") всегда закреплена снизу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:636,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,summaryRows:{showDefault:!0,showInControl:!0},stickyColumns:["product","total"],stickyRows:u=>u.kind==="subtotal"},columnConfig:we,rows:y,bottomSummaryRows:ye},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:640,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:635,columnNumber:5},void 0)},Pu=T(12),Yu=c.map(u=>u.key==="region"?{...u,themeOverride:void 0,renderCell:void 0}:u),A={...d,name:"Со слитыми ячейками",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:"Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает, название региона переезжает в прилипшую строку, а остаток блока прокручивается под ней."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:669,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["product"],stickyRows:u=>u.kind==="subtotal"&&u.region==="Санкт-Петербург"},columnConfig:Yu,rows:Pu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:674,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:668,columnNumber:5},void 0)},F={...d,name:"Липкая колонка со слитыми ячейками",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Колонка ",e.jsxDEV("b",{children:"Регион"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:695,columnNumber:17},void 0)," слита по значениям и при этом липкая. Прокрутите вправо — слитые блоки регионов прилипают к левому краю целиком; прокрутите вниз — итоги регионов прилипают под шапкой, и название региона переезжает в прилипшую строку."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:694,columnNumber:7},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,mergeCells:{mergeByCellValues:["region"]},stickyColumns:["region"],stickyRows:u=>u.kind==="subtotal"},columnConfig:Yu,rows:Pu},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:700,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:693,columnNumber:5},void 0)},B={...d,name:"20 000 строк",render:()=>{const[u]=k.useState(()=>T(4e3));return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:"20 000 строк и 17 колонок: позиции считаются только по видимым строкам, поэтому прокрутка остаётся плавной."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:722,columnNumber:9},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,rowMarkers:{startIndex:1},stickyColumns:["region","total"],stickyRows:_},columnConfig:c,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:726,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:721,columnNumber:7},void 0)}},U=5e4,Ee=(u,s)=>(u*7+s*13)%89*10+100,Te=u=>{const o=`Регион ${Math.floor(u/U)+1}`;return u===0?{id:1,kind:"total",region:"Все регионы",product:"Итого"}:u%U===0?{id:u+1,kind:"subtotal",region:o,product:`Итого: ${o}`}:{id:u+1,kind:"item",region:o,product:M[u%M.length]??""}},W=(u,s)=>Array.from({length:s},(o,i)=>Te(u+i)),zu=[{key:"id",name:"№",width:100},{key:"region",name:"Регион",width:160},{key:"product",name:"Продукт",width:180},...H.map((u,s)=>({key:`m${s+1}`,name:u,width:110,renderCell:({row:o})=>v(Ee(o.id,s))}))].map(u=>({...u,themeOverride:({row:s})=>{const o=Wu[s.kind];return o?{bgCell:o}:void 0}})),fe=1e6,Ne=[0,25e4,5e5,75e4],V={...d,name:"1 000 000 строк, липкие по индексам",render:()=>{const[u]=k.useState(()=>W(0,fe));return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{children:["Миллион строк. Липкие строки переданы индексами (",e.jsxDEV("code",{children:"stickyRows: [0, 250000, …]"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:811,columnNumber:11},void 0),") — таблица не проходит по строкам вообще. Перетащите ползунок прокрутки вниз."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:809,columnNumber:9},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:b,stickyColumns:["region"],stickyRows:Ne},columnConfig:zu,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:814,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:808,columnNumber:7},void 0)}},I=U,O={...d,name:"Подгрузка чанками",render:()=>{const[u,s]=k.useState(()=>W(0,I)),o=k.useRef(0),[i,n]=k.useState(0),m=k.useCallback(C=>(o.current+=1,C.kind!=="item"),[]);k.useEffect(()=>n(o.current),[u]);const l=()=>s(C=>[...C,...W(C.length,I)]);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxDEV(r,{children:["Строки подгружаются чанками по ",v(I),". Липкие строки заданы предикатом; его результаты кешируются, поэтому после подгрузки он вызывается только для новых строк — счётчик растёт на размер чанка, а не на всю таблицу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:853,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsxDEV(Xu,{size:"s",view:"secondary",onClick:l,children:["Загрузить ещё ",v(I)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:860,columnNumber:11},void 0),e.jsxDEV("span",{children:["Строк: ",e.jsxDEV("b",{children:v(u.length)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:864,columnNumber:20},void 0)," · вызовов предиката:"," ",e.jsxDEV("b",{children:v(i)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:865,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:863,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:859,columnNumber:9},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:{height:"540px"},stickyColumns:["region"],stickyRows:m},columnConfig:zu,rows:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:868,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:852,columnNumber:7},void 0)}},Re=T(20),ge=u=>new Set(u.split(/[,\s]+/).map(Number).filter(Number.isInteger)),j={...Hu({previewSource:"hidden"}),name:"Песочница",render:()=>{const[u,s]=k.useState(["region","total"]),[o,i]=k.useState("1, 2, 23"),n=k.useMemo(()=>{const l=ge(o);return C=>l.has(C.id)},[o]),m=(l,C)=>s(w=>C?[...w,l]:w.filter(Gu=>Gu!==l));return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV(r,{children:["Укажите номера липких строк (колонка ",e.jsxDEV("b",{children:"№"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:912,columnNumber:48},void 0),") и отметьте липкие колонки — таблица обновится сразу."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:911,columnNumber:9},void 0),e.jsxDEV("div",{style:{width:320},children:e.jsxDEV($u,{size:"s",label:"Липкие строки",labelPlacement:"outer",placeholder:"Например: 1, 2, 23",value:o,onChange:l=>i(l.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:916,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:915,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 20px"},children:c.map(({key:l,name:C})=>e.jsxDEV(Qu,{size:"s",label:typeof C=="string"?C:l,checked:u.includes(l),onChange:w=>m(l,w.target.checked)},l,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:927,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:925,columnNumber:9},void 0),e.jsxDEV(t,{tableConfig:{containerStyle:{height:"520px"},rowMarkers:{startIndex:1},stickyColumns:u,stickyRows:n},columnConfig:c,rows:Re},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:936,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.StickyRowsCols/TableCanvas.stickyRowsCols.stories.tsx",lineNumber:910,columnNumber:7},void 0)}};var Z,$,X;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=($=f.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var Q,q,J;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(q=N.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var uu,eu,su;R.parameters={...R.parameters,docs:{...(uu=R.parameters)==null?void 0:uu.docs,source:{originalSource:`{
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
}`,...(su=(eu=R.parameters)==null?void 0:eu.docs)==null?void 0:su.source}}};var ou,au,nu;g.parameters={...g.parameters,docs:{...(ou=g.parameters)==null?void 0:ou.docs,source:{originalSource:`{
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
}`,...(nu=(au=g.parameters)==null?void 0:au.docs)==null?void 0:nu.source}}};var iu,ru,tu;S.parameters={...S.parameters,docs:{...(iu=S.parameters)==null?void 0:iu.docs,source:{originalSource:`{
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
}`,...(tu=(ru=S.parameters)==null?void 0:ru.docs)==null?void 0:tu.source}}};var lu,cu,du;p.parameters={...p.parameters,docs:{...(lu=p.parameters)==null?void 0:lu.docs,source:{originalSource:`{
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
}`,...(du=(cu=p.parameters)==null?void 0:cu.docs)==null?void 0:du.source}}};var mu,Cu,bu;h.parameters={...h.parameters,docs:{...(mu=h.parameters)==null?void 0:mu.docs,source:{originalSource:`{
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
}`,...(bu=(Cu=h.parameters)==null?void 0:Cu.docs)==null?void 0:bu.source}}};var ku,yu,vu;x.parameters={...x.parameters,docs:{...(ku=x.parameters)==null?void 0:ku.docs,source:{originalSource:`{
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
}`,...(vu=(yu=x.parameters)==null?void 0:yu.docs)==null?void 0:vu.source}}};var wu,Eu,Tu;D.parameters={...D.parameters,docs:{...(wu=D.parameters)==null?void 0:wu.docs,source:{originalSource:`{
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
}`,...(Tu=(Eu=D.parameters)==null?void 0:Eu.docs)==null?void 0:Tu.source}}};var fu,Nu,Ru;A.parameters={...A.parameters,docs:{...(fu=A.parameters)==null?void 0:fu.docs,source:{originalSource:`{
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
}`,...(Ru=(Nu=A.parameters)==null?void 0:Nu.docs)==null?void 0:Ru.source}}};var gu,Su,pu;F.parameters={...F.parameters,docs:{...(gu=F.parameters)==null?void 0:gu.docs,source:{originalSource:`{
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
}`,...(pu=(Su=F.parameters)==null?void 0:Su.docs)==null?void 0:pu.source}}};var hu,xu,Du;B.parameters={...B.parameters,docs:{...(hu=B.parameters)==null?void 0:hu.docs,source:{originalSource:`{
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
}`,...(Du=(xu=B.parameters)==null?void 0:xu.docs)==null?void 0:Du.source}}};var Au,Fu,Bu;V.parameters={...V.parameters,docs:{...(Au=V.parameters)==null?void 0:Au.docs,source:{originalSource:`{
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
}`,...(Bu=(Fu=V.parameters)==null?void 0:Fu.docs)==null?void 0:Bu.source}}};var Vu,Ou,ju;O.parameters={...O.parameters,docs:{...(Vu=O.parameters)==null?void 0:Vu.docs,source:{originalSource:`{
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
}`,...(ju=(Ou=O.parameters)==null?void 0:Ou.docs)==null?void 0:ju.source}}};var _u,Iu,Mu;j.parameters={...j.parameters,docs:{...(_u=j.parameters)==null?void 0:_u.docs,source:{originalSource:`{
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
}`,...(Mu=(Iu=j.parameters)==null?void 0:Iu.docs)==null?void 0:Mu.source}}};const Se=["StickyColumns","StickyColumnsByPredicate","StickyRows","RowsAndColumns","WithPinnedColumns","WithColumnGroups","WithSorting","VariableRowHeight","WithSummaryRows","WithMergedCells","StickyMergedColumn","LargeData","MillionRowsByIndexes","ChunkLoading","Playground"],je=Object.freeze(Object.defineProperty({__proto__:null,ChunkLoading:O,LargeData:B,MillionRowsByIndexes:V,Playground:j,RowsAndColumns:g,StickyColumns:f,StickyColumnsByPredicate:N,StickyMergedColumn:F,StickyRows:R,VariableRowHeight:x,WithColumnGroups:p,WithMergedCells:A,WithPinnedColumns:S,WithSorting:h,WithSummaryRows:D,__namedExportsOrder:Se,default:ue},Symbol.toStringTag,{value:"Module"}));export{je as T};
