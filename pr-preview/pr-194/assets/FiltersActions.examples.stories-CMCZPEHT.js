import{b as e,r as g}from"./react-UEdzNlUe.js";import{S as Y}from"./Combobox-BNkFaJsn.js";import{E as bs}from"./EmptyState-BVPgIYqR.js";import{P as ps}from"./PageTitle-CK0h6pWV.js";import{s as i}from"./constants-D9pWgtfS.js";import{cG as O,cE as xs,dN as vs,dO as J}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{b as d}from"./FiltersActions-Cas8V8u-.js";import{D as H}from"./DocPair-DZl9SYu9.js";import{M as ks,a as Es}from"./Measure-xndn83Cc.js";import{e as ws}from"./emptyStateImages-UAX5ldD7.js";import{d as L,t as l,I as Ds,a6 as Vs}from"./@salutejs/sdds-finai-CCc2M82T.js";import{de as js}from"./vendor-BJXHd15o.js";import{a7 as Bs}from"./@salutejs/plasma-icons-D87bzLqR.js";const ys={title:"Композиции/FiltersActions/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}},msw:{handlers:ws}}},Z=()=>{},o=({children:s})=>e.jsxDEV(l,{style:{color:xs,marginBottom:i.x8},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:38,columnNumber:3},void 0),ee={display:"grid",placeItems:"center",borderRadius:i.x8,border:`1px dashed ${J}`,color:J,backgroundColor:vs},se=(s,n=8)=>Array.from({length:n},(r,u)=>({label:`${s} ${u+1}`,value:`${s}-${u+1}`})),re=["Блок","Трайб","Аллокация","Брикс","Команда"],K=({name:s,selected:n=0})=>{const r=se(s),[u,t]=g.useState(r.slice(0,n).map(f=>f.value));return e.jsxDEV("div",{style:{width:168,flex:"none"},children:e.jsxDEV(Y,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:`Выберите ${s.toLowerCase()}`,items:r,value:u,onChange:f=>t(f),listMaxHeight:"300px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:63,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:62,columnNumber:5},void 0)},x=({label:s})=>{const[n,r]=g.useState(!1);return e.jsxDEV(d.SwitcherFilter,{label:s,checked:n,onChange:u=>r(u.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:80,columnNumber:10},void 0)},Cs=({labels:s=["Все","Мои","Архив"],slot:n=!1})=>e.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:i.x4},children:[n?e.jsxDEV(Ds,{size:"s",view:"secondary","aria-label":"Добавить сегмент",children:e.jsxDEV(Bs,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:87,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:86,columnNumber:7},void 0):null,e.jsxDEV(Vs,{hasBackground:!0,size:"xs",children:s.map((r,u)=>e.jsxDEV(d.SegmentItem,{value:`seg-${u}`,label:r},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:92,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:90,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:84,columnNumber:3},void 0),$=({value:s="",width:n})=>{const[r,u]=g.useState(s);return e.jsxDEV("div",{"data-m":"search",style:n?{width:n}:{flex:"1 1 168px",minWidth:168,maxWidth:600},children:e.jsxDEV(d.TextFieldSearch,{value:r,onChange:t=>u(t.target.value),onClear:()=>u(""),autoComplete:"off"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:103,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:102,columnNumber:5},void 0)},X=({name:s})=>{const n=se(s),[r,u]=g.useState([]);return e.jsxDEV("div",{children:[e.jsxDEV(l,{style:{marginBottom:i.x4},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:116,columnNumber:7},void 0),e.jsxDEV(Y,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:`Выберите ${s.toLowerCase()}`,items:n,value:r,onChange:t=>u(t)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:117,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:115,columnNumber:5},void 0)},m=({open:s=!1,indicator:n=!1,fields:r=["Брикс","Команда"],group:u=!1,text:t})=>{const f=g.useState(s),q=g.useRef(null);return e.jsxDEV(d.FiltersButtonWithPopover,{state:f,title:"Ещё фильтры",subtitle:u?"Фильтры, которые не поместились на панели":void 0,searchable:u,redSquare:n,buttonProps:t?{text:t}:void 0,popoverProps:{ref:q},content:e.jsxDEV(e.Fragment,{children:[r.map(N=>e.jsxDEV(X,{name:N},N,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:150,columnNumber:13},void 0)),u?e.jsxDEV("div",{style:{marginTop:i.x4,display:"grid",gap:i.x8},children:[e.jsxDEV(l,{style:{fontWeight:600},children:"Группа фильтров"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:154,columnNumber:15},void 0),e.jsxDEV(X,{name:"Статус"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:155,columnNumber:15},void 0),e.jsxDEV(X,{name:"Период"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:156,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:153,columnNumber:13},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:148,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:139,columnNumber:5},void 0)},Q=({slot:s=!1,more:n=!0,sec1:r=!0,sec2:u=!1,accent:t=!0})=>e.jsxDEV("div",{"data-m":"right",style:{display:"flex",gap:i.x8},children:[s?e.jsxDEV("div",{style:{...ee,height:40,padding:`0 ${i.x8}`},children:e.jsxDEV(l,{children:"Custom Slot"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:173,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:172,columnNumber:7},void 0):null,n?e.jsxDEV(d.DotsIconButton,{iconOrientation:"vertical",dropdownProps:{items:[{value:"a3",label:"Действие 3"},{value:"a4",label:"Действие 4"}]}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:177,columnNumber:7},void 0):null,u?e.jsxDEV(L,{size:"s",view:"secondary",children:"Выгрузить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:183,columnNumber:7},void 0):null,r?e.jsxDEV(L,{size:"s",view:"secondary",children:"Согласовать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:188,columnNumber:7},void 0):null,t?e.jsxDEV(L,{size:"s",view:"accent",children:"Создать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:193,columnNumber:7},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:170,columnNumber:3},void 0),c=(s,n)=>({id:s,label:n,onClick:Z}),Ss=[{groupId:"block",groupLabel:"Блок",items:[c("b1","Блок 1"),c("b2","Блок 2"),c("b3","Блок 3"),c("b4","Блок 4")]},{groupId:"tribe",groupLabel:"Трайб",items:[c("t1","Трайб корпоративного кредитования и лизинга")]},{groupId:"brics",groupLabel:"Брикс",items:[c("r1","Брикс 2"),c("r2","Брикс 5")]},c("active","Активные")],U=({items:s=Ss})=>e.jsxDEV(d.ListOfFilters,{opened:!0,items:s,clearAll:Z,showResetAllFiltersButton:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:216,columnNumber:3},void 0),a=({segment:s=!0,segmentSlot:n=!1,search:r=!0,filters:u="Filter",fields:t=2,selected:f=0,switchers:q=1,type:N="Filters+Reset",withReset:Ns=!1,reset:hs=!0,resetOutline:Fs=!1,indicator:ie=!1,right:ue={},row:As=!1,width:ne="100%"})=>e.jsxDEV("div",{"data-m":"fa",style:{width:ne,maxWidth:ne==="max-content"?void 0:"100%",borderRadius:i.x8,backgroundColor:O,paddingInline:i.x16},children:e.jsxDEV(js,{defaultSelected:["seg-0"],children:e.jsxDEV(d,{mainBlock:e.jsxDEV(e.Fragment,{children:[s?e.jsxDEV("div",{"data-m":"first",children:e.jsxDEV(Cs,{slot:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:263,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:262,columnNumber:15},void 0):null,r?e.jsxDEV($,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:266,columnNumber:23},void 0):null,u==="Filter"?Array.from({length:q},(G,_)=>e.jsxDEV(x,{label:["Активные","Мои","Срочные"][_]??"Свитчер"},_,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:268,columnNumber:61},void 0)):null,u==="Filter"?re.slice(0,t).map((G,_)=>e.jsxDEV(K,{name:G,selected:_===0?f:0},G,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:271,columnNumber:63},void 0)):null,u==="Custom"?e.jsxDEV("div",{style:{...ee,height:40,width:240},children:e.jsxDEV(l,{children:"Custom"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:275,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:274,columnNumber:15},void 0):null,u==="Filter"&&N==="Filters+Reset"?e.jsxDEV(m,{indicator:ie},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:278,columnNumber:65},void 0):null,u==="Button only"?e.jsxDEV(m,{indicator:ie,text:"Фильтры",fields:re},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:279,columnNumber:42},void 0):null,u!=="none"&&(Ns||N==="Reset only")?e.jsxDEV("div",{"data-m":"last",style:Fs?{outline:`1px dashed ${J}`,borderRadius:i.x4}:void 0,children:e.jsxDEV(d.ResetAllFiltersButton,{isVisible:hs,onClick:Z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:282,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:281,columnNumber:15},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:260,columnNumber:11},void 0),activeButtonsBlock:ue?e.jsxDEV(Q,{...ue},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:287,columnNumber:37},void 0):void 0,listOfFilters:As?e.jsxDEV(U,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:288,columnNumber:30},void 0):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:258,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:257,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:256,columnNumber:3},void 0),p={if:{arg:"Filters Block",truthy:!0}},h={if:{arg:"Right Block",truthy:!0}},F={name:"Живая настройка",args:{Segment:!0,Search:!0,"Filters Block":!0,View:"Filter","Switcher 1":!1,"Switcher 2":!1,Type:"Filters+Reset",ResetBtn:!1,Indicator:!1,"Right Block":!0,"Custom Slot":!1,MoreBtn:!0,"Secondary 1":!0,"Secondary 2":!1,AccentBtn:!0,RowActiveFltrs:!1},argTypes:{Segment:{control:"boolean",description:"Сегменты"},Search:{control:"boolean",description:"Поле поиска"},"Filters Block":{control:"boolean",description:"Блок фильтров"},View:{control:"inline-radio",options:["Filter","Button only","Custom"],description:"Вид блока фильтров",...p},"Switcher 1":{control:"boolean",description:"Фильтр-свитчер",...p},"Switcher 2":{control:"boolean",description:"Второй фильтр-свитчер",...p},Type:{control:"inline-radio",options:["Filters+Reset","Reset only"],description:"Набор кнопок блока фильтров",...p},ResetBtn:{control:"boolean",description:"Кнопка «Сбросить фильтры»",...p},Indicator:{control:"boolean",description:"Красная точка на кнопке фильтров",...p},"Right Block":{control:"boolean",description:"Блок кнопок справа"},"Custom Slot":{control:"boolean",description:"Слот перед кнопками",...h},MoreBtn:{control:"boolean",description:"Кнопка с тремя точками",...h},"Secondary 1":{control:"boolean",description:"Кнопка Secondary",...h},"Secondary 2":{control:"boolean",description:"Вторая кнопка Secondary",...h},AccentBtn:{control:"boolean",description:"Акцентная кнопка",...h},RowActiveFltrs:{control:"boolean",description:"Строка выбранных фильтров"}},render:s=>e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Панель рассчитана на широкий экран: если кнопки справа не видны, прокрутите пример вбок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:369,columnNumber:5},void 0),e.jsxDEV("div",{style:{overflowX:"auto",paddingBottom:i.x8},children:e.jsxDEV(a,{width:"max-content",withReset:!0,fields:1,segment:s.Segment,search:s.Search,filters:s["Filters Block"]?s.View:"none",switchers:Number(s["Switcher 1"])+Number(s["Switcher 2"]),type:s.Type,reset:s.ResetBtn,indicator:s.Indicator,right:s["Right Block"]?{slot:s["Custom Slot"],more:s.MoreBtn,sec1:s["Secondary 1"],sec2:s["Secondary 2"],accent:s.AccentBtn}:!1,row:s.RowActiveFltrs},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:371,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:370,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:368,columnNumber:5},void 0)},Rs=()=>e.jsxDEV("div",{children:[e.jsxDEV(ks,{gaps:[{a:'[data-m="pt"]',b:'[data-m="fa"]',dir:"v",tone:"outer"},{a:'[data-m="fa"]',b:'[data-m="content"]',dir:"v",tone:"outer"},{a:'[data-m="fa-top"]',b:'[data-m="search"]',dir:"v"},{a:'[data-m="last"]',b:'[data-m="right"]',dir:"h"}],children:[e.jsxDEV("div",{"data-m":"pt",children:e.jsxDEV(ps,{title:"Отчёты"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:413,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:412,columnNumber:7},void 0),e.jsxDEV("div",{style:{height:24}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:415,columnNumber:7},void 0),e.jsxDEV("div",{"data-m":"fa-top"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:416,columnNumber:7},void 0),e.jsxDEV(a,{segment:!1,fields:1,switchers:0,withReset:!0,right:{more:!0,sec1:!1,accent:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:417,columnNumber:7},void 0),e.jsxDEV("div",{style:{height:24}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:418,columnNumber:7},void 0),e.jsxDEV("div",{"data-m":"content",style:{...ee,height:80},children:e.jsxDEV(l,{children:"Контент страницы"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:420,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:419,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:404,columnNumber:5},void 0),e.jsxDEV(Es,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:423,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:403,columnNumber:3},void 0),A={name:"Отступы на живом компоненте",render:()=>e.jsxDEV(Rs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:429,columnNumber:17},void 0)},b={name:"Segment",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Segment включён"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:439,columnNumber:9},void 0),e.jsxDEV(a,{right:!1,fields:1,switchers:0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:440,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:438,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Segment выключен"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:443,columnNumber:9},void 0),e.jsxDEV(a,{right:!1,fields:1,switchers:0,segment:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:444,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:442,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:437,columnNumber:5},void 0)},v={name:"Search",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Search включён"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:455,columnNumber:9},void 0),e.jsxDEV(a,{right:!1,fields:1,switchers:0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:456,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:454,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Search выключен"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:459,columnNumber:9},void 0),e.jsxDEV(a,{right:!1,fields:1,switchers:0,search:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:460,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:458,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:453,columnNumber:5},void 0)},Ps=()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:i.x8,marginTop:i.x8},children:["Отчёт по закупкам","Платёжный календарь","План продаж"].map(s=>e.jsxDEV("div",{style:{padding:i.x12,borderRadius:i.x8,backgroundColor:O},children:e.jsxDEV(l,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:470,columnNumber:9},void 0)},s,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:469,columnNumber:7},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:467,columnNumber:3},void 0),Ts=()=>e.jsxDEV("div",{style:{marginTop:i.x8,borderRadius:i.x8,backgroundColor:O,padding:i.x8},children:["Название","Отчёт по закупкам","Платёжный календарь","План продаж"].map((s,n)=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:i.x8,padding:`${i.x6} ${i.x8}`,borderBottom:"1px solid rgba(8, 8, 8, 0.08)",color:n===0?xs:void 0},children:[e.jsxDEV(l,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:490,columnNumber:9},void 0),e.jsxDEV(l,{children:n===0?"Статус":"В работе"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:491,columnNumber:9},void 0),e.jsxDEV(l,{children:n===0?"Срок":"28.11.2026"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:492,columnNumber:9},void 0)]},s,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:479,columnNumber:7},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:477,columnNumber:3},void 0),k={name:"Пара: поиск",render:()=>e.jsxDEV(H,{goodText:"Поиск в FiltersActions над карточками и другим нетабличным контентом",badText:"Поиск в FiltersActions над таблицей: для таблицы поиск внутри таблицы",good:e.jsxDEV("div",{children:[e.jsxDEV(a,{segment:!1,fields:0,switchers:0,right:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:506,columnNumber:11},void 0),e.jsxDEV(Ps,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:507,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:505,columnNumber:9},void 0),bad:e.jsxDEV("div",{children:[e.jsxDEV(a,{segment:!1,fields:0,switchers:0,right:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:512,columnNumber:11},void 0),e.jsxDEV(Ts,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:513,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:511,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:501,columnNumber:5},void 0)},E={name:"Custom Slot у сегментов",render:()=>e.jsxDEV(a,{segmentSlot:!0,search:!1,fields:1,switchers:0,right:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:524,columnNumber:17},void 0)},Ms=()=>{const s=g.useRef(null);return e.jsxDEV("div",{ref:s,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"View = Placeholder"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:533,columnNumber:9},void 0),e.jsxDEV($,{width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:534,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:532,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"View = Value"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:537,columnNumber:9},void 0),e.jsxDEV($,{width:240,value:"Отчёт по продажам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:538,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:536,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Focused"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:541,columnNumber:9},void 0),e.jsxDEV("div",{ref:n=>{var r;(r=n==null?void 0:n.querySelector("input"))==null||r.focus({preventScroll:!0})},children:e.jsxDEV($,{width:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:547,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:542,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:540,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:531,columnNumber:5},void 0)},w={name:"Состояния поля поиска",render:()=>e.jsxDEV(Ms,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:556,columnNumber:17},void 0)},D={name:"View блока фильтров",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Filter"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:566,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,fields:2,withReset:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:567,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:565,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Button only"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:570,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,filters:"Button only",withReset:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:571,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:569,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Custom"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:574,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,filters:"Custom"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:575,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:573,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:564,columnNumber:5},void 0)},V={name:"Type: набор кнопок",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Filters+Reset"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:586,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,fields:2,withReset:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:587,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:585,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Reset only"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:590,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,fields:2,type:"Reset only"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:591,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:589,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:584,columnNumber:5},void 0)},j={name:"ResetBtn",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Кнопка видна"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:602,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,fields:2,withReset:!0,resetOutline:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:603,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:601,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Кнопка скрыта, место под ней сохраняется (пунктир)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:606,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,right:!1,fields:2,withReset:!0,reset:!1,resetOutline:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:607,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:605,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:600,columnNumber:5},void 0)},B={name:"Indicator",render:()=>e.jsxDEV("div",{style:{display:"flex",gap:i.x24,flexWrap:"wrap"},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Без индикатора"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:618,columnNumber:9},void 0),e.jsxDEV(m,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:619,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:617,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"С индикатором"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:622,columnNumber:9},void 0),e.jsxDEV(m,{indicator:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:623,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:621,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:616,columnNumber:5},void 0)},y={name:"Right Block",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Custom Slot, MoreBtn, Secondary 1 и AccentBtn"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:636,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,fields:1,switchers:0,right:{slot:!0,more:!0,sec1:!0,accent:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:637,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:635,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Только AccentBtn"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:640,columnNumber:9},void 0),e.jsxDEV(a,{segment:!1,search:!1,fields:1,switchers:0,right:{more:!1,sec1:!1,accent:!0}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:641,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:639,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:634,columnNumber:5},void 0)},C={name:"Пара: кнопки справа",render:()=>e.jsxDEV(H,{goodText:"Три точки, Secondary и акцентная кнопка: на экране не больше 3 кнопок",badText:"Четыре видимые кнопки",good:e.jsxDEV("div",{style:{display:"flex",gap:i.x8,justifyContent:"flex-end"},children:e.jsxDEV(Q,{more:!0,sec1:!0,accent:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:655,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:654,columnNumber:9},void 0),bad:e.jsxDEV("div",{style:{display:"flex",gap:i.x8,justifyContent:"flex-end",flexWrap:"wrap"},children:[e.jsxDEV(Q,{more:!1,sec1:!0,sec2:!0,accent:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:660,columnNumber:11},void 0),e.jsxDEV(L,{size:"s",view:"secondary",children:"Удалить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:661,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:659,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:650,columnNumber:5},void 0)},S={name:"Пара: свитчеры",render:()=>e.jsxDEV(H,{goodText:"Не больше 2 Switcher-filter в блоке",badText:"Три Switcher-filter на панели",good:e.jsxDEV("div",{style:{display:"flex",gap:i.x8,flexWrap:"wrap"},children:[e.jsxDEV(x,{label:"Активные"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:680,columnNumber:11},void 0),e.jsxDEV(x,{label:"Мои"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:681,columnNumber:11},void 0),e.jsxDEV(m,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:682,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:679,columnNumber:9},void 0),bad:e.jsxDEV("div",{style:{display:"flex",gap:i.x8,flexWrap:"wrap"},children:[e.jsxDEV(x,{label:"Активные"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:687,columnNumber:11},void 0),e.jsxDEV(x,{label:"Мои"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:688,columnNumber:11},void 0),e.jsxDEV(x,{label:"Срочные"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:689,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:686,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:675,columnNumber:5},void 0)},Is=()=>{const s=se("Блок"),[n,r]=g.useState(s.slice(0,3).map(u=>u.value));return e.jsxDEV("div",{style:{minHeight:150,paddingTop:90},children:e.jsxDEV(d.TooltipList,{groupLabel:"Блок",opened:!0,placement:"top",items:s.filter(u=>n.includes(u.value)).map(u=>u.label),children:e.jsxDEV("div",{style:{width:168},children:e.jsxDEV(Y,{size:"s",multiple:!0,isTargetAmount:!0,items:s,value:n,onChange:u=>r(u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:709,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:708,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:702,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:701,columnNumber:5},void 0)},R={name:"Поле Multiple с чипом «Выбрано N»",render:()=>e.jsxDEV(Is,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:718,columnNumber:17},void 0)},P={name:"Строка выбранных фильтров",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Группа с 2 тегами и (+N), длинный тег обрезан многоточием"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:728,columnNumber:9},void 0),e.jsxDEV("div",{style:{padding:i.x8,borderRadius:i.x8,backgroundColor:O},children:e.jsxDEV(U,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:730,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:729,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:727,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Строка не помещается: появляются стрелки прокрутки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:734,columnNumber:9},void 0),e.jsxDEV("div",{style:{width:420,maxWidth:"100%",padding:i.x8,borderRadius:i.x8,backgroundColor:O},children:e.jsxDEV(U,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:736,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:735,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:733,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:726,columnNumber:5},void 0)},T={name:"Popover «Ещё фильтры»",render:()=>e.jsxDEV("div",{style:{minHeight:500},children:e.jsxDEV(m,{open:!0,group:!0,fields:["Фильтр 1","Фильтр 2"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:749,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:748,columnNumber:5},void 0)},M={name:"Пара: что показываем в Popover",render:()=>e.jsxDEV("div",{style:{maxWidth:560},children:e.jsxDEV(H,{goodText:"В Popover только фильтры, спрятанные в кнопке «Ещё фильтры»",badText:"В Popover повторяется фильтр «Блок», который уже виден на панели",good:e.jsxDEV("div",{style:{minHeight:520},children:e.jsxDEV("div",{style:{display:"flex",gap:i.x8},children:[e.jsxDEV(K,{name:"Блок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:765,columnNumber:13},void 0),e.jsxDEV(m,{open:!0,fields:["Брикс","Команда"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:766,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:764,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:763,columnNumber:9},void 0),bad:e.jsxDEV("div",{style:{minHeight:520},children:e.jsxDEV("div",{style:{display:"flex",gap:i.x8},children:[e.jsxDEV(K,{name:"Блок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:773,columnNumber:13},void 0),e.jsxDEV(m,{open:!0,fields:["Блок","Брикс","Команда"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:774,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:772,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:771,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:759,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:758,columnNumber:5},void 0)},I={name:"Размер Popover",render:()=>e.jsxDEV("div",{style:{minHeight:500},children:e.jsxDEV(m,{open:!0,fields:["Брикс"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:787,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:786,columnNumber:5},void 0)},W={name:"Фильтры переезжают в Popover",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:i.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Широкая панель: три поля видны"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:799,columnNumber:9},void 0),e.jsxDEV(a,{width:860,segment:!1,search:!1,right:!1,fields:3,switchers:0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:800,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:798,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(o,{children:"Панель уже: два поля переехали в «Ещё фильтры», в одном из них выбрано значение, на кнопке индикатор"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:803,columnNumber:9},void 0),e.jsxDEV(a,{width:420,segment:!1,search:!1,right:!1,fields:1,switchers:0,indicator:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:804,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:802,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:797,columnNumber:5},void 0)},z={name:"Пустое состояние страницы",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:24},children:[e.jsxDEV(ps,{title:"Затраты",breadcrumbs:{items:[{title:"Главная",href:"#"},{title:"Отчёты",href:"#"},{title:"Затраты"}]}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:816,columnNumber:7},void 0),e.jsxDEV(a,{segment:!1,fields:2,selected:3,switchers:0,right:{more:!1,sec1:!1,accent:!0},row:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:820,columnNumber:7},void 0),e.jsxDEV(bs,{size:"l",variant:"not-found",title:"Ничего не нашлось",subtitle:"Попробуйте изменить или сбросить фильтры",buttons:[{type:"button",props:{text:"Сбросить фильтры",view:"accent"}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:821,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/FiltersActions/FiltersActions.examples.stories.tsx",lineNumber:815,columnNumber:5},void 0)};var oe,ae,te;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Живая настройка',
  args: {
    Segment: true,
    Search: true,
    'Filters Block': true,
    View: 'Filter',
    'Switcher 1': false,
    'Switcher 2': false,
    Type: 'Filters+Reset',
    ResetBtn: false,
    Indicator: false,
    'Right Block': true,
    'Custom Slot': false,
    MoreBtn: true,
    'Secondary 1': true,
    'Secondary 2': false,
    AccentBtn: true,
    RowActiveFltrs: false
  },
  argTypes: {
    Segment: {
      control: 'boolean',
      description: 'Сегменты'
    },
    Search: {
      control: 'boolean',
      description: 'Поле поиска'
    },
    'Filters Block': {
      control: 'boolean',
      description: 'Блок фильтров'
    },
    View: {
      control: 'inline-radio',
      options: ['Filter', 'Button only', 'Custom'],
      description: 'Вид блока фильтров',
      ...ifFilters
    },
    'Switcher 1': {
      control: 'boolean',
      description: 'Фильтр-свитчер',
      ...ifFilters
    },
    'Switcher 2': {
      control: 'boolean',
      description: 'Второй фильтр-свитчер',
      ...ifFilters
    },
    Type: {
      control: 'inline-radio',
      options: ['Filters+Reset', 'Reset only'],
      description: 'Набор кнопок блока фильтров',
      ...ifFilters
    },
    ResetBtn: {
      control: 'boolean',
      description: 'Кнопка «Сбросить фильтры»',
      ...ifFilters
    },
    Indicator: {
      control: 'boolean',
      description: 'Красная точка на кнопке фильтров',
      ...ifFilters
    },
    'Right Block': {
      control: 'boolean',
      description: 'Блок кнопок справа'
    },
    'Custom Slot': {
      control: 'boolean',
      description: 'Слот перед кнопками',
      ...ifRight
    },
    MoreBtn: {
      control: 'boolean',
      description: 'Кнопка с тремя точками',
      ...ifRight
    },
    'Secondary 1': {
      control: 'boolean',
      description: 'Кнопка Secondary',
      ...ifRight
    },
    'Secondary 2': {
      control: 'boolean',
      description: 'Вторая кнопка Secondary',
      ...ifRight
    },
    AccentBtn: {
      control: 'boolean',
      description: 'Акцентная кнопка',
      ...ifRight
    },
    RowActiveFltrs: {
      control: 'boolean',
      description: 'Строка выбранных фильтров'
    }
  },
  render: args =>
  // панель рассчитана на широкий экран: в колонке документации её можно прокрутить вбок
  <div>
    <Caption>Панель рассчитана на широкий экран: если кнопки справа не видны, прокрутите пример вбок</Caption>
    <div style={{
      overflowX: 'auto',
      paddingBottom: s.x8
    }}>
    <Panel width="max-content" withReset fields={1} segment={args.Segment} search={args.Search} filters={args['Filters Block'] ? args.View : 'none'} switchers={Number(args['Switcher 1']) + Number(args['Switcher 2'])} type={args.Type} reset={args.ResetBtn} indicator={args.Indicator} right={args['Right Block'] ? {
        slot: args['Custom Slot'],
        more: args.MoreBtn,
        sec1: args['Secondary 1'],
        sec2: args['Secondary 2'],
        accent: args.AccentBtn
      } : false} row={args.RowActiveFltrs} />
    </div>
    </div>
}`,...(te=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,de,me;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <SpacingView />
}`,...(me=(de=A.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ge,fe;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Segment',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Segment включён</Caption>
        <Panel right={false} fields={1} switchers={0} />
      </div>
      <div>
        <Caption>Segment выключен</Caption>
        <Panel right={false} fields={1} switchers={0} segment={false} />
      </div>
    </div>
}`,...(fe=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var pe,xe,Ne;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Search',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Search включён</Caption>
        <Panel right={false} fields={1} switchers={0} />
      </div>
      <div>
        <Caption>Search выключен</Caption>
        <Panel right={false} fields={1} switchers={0} search={false} />
      </div>
    </div>
}`,...(Ne=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var he,Fe,Ae;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Пара: поиск',
  render: () => <DocPair goodText="Поиск в FiltersActions над карточками и другим нетабличным контентом" badText="Поиск в FiltersActions над таблицей: для таблицы поиск внутри таблицы" good={<div>
          <Panel segment={false} fields={0} switchers={0} right={false} />
          <Cards />
        </div>} bad={<div>
          <Panel segment={false} fields={0} switchers={0} right={false} />
          <TableStub />
        </div>} />
}`,...(Ae=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var be,ve,ke;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Custom Slot у сегментов',
  render: () => <Panel segmentSlot search={false} fields={1} switchers={0} right={false} />
}`,...(ke=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Ee,we,De;w.parameters={...w.parameters,docs:{...(Ee=w.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Состояния поля поиска',
  render: () => <SearchStatesView />
}`,...(De=(we=w.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Ve,je,Be;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'View блока фильтров',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Filter</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset />
      </div>
      <div>
        <Caption>Button only</Caption>
        <Panel segment={false} search={false} right={false} filters="Button only" withReset />
      </div>
      <div>
        <Caption>Custom</Caption>
        <Panel segment={false} search={false} right={false} filters="Custom" />
      </div>
    </div>
}`,...(Be=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var ye,Ce,Se;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Type: набор кнопок',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Filters+Reset</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset />
      </div>
      <div>
        <Caption>Reset only</Caption>
        <Panel segment={false} search={false} right={false} fields={2} type="Reset only" />
      </div>
    </div>
}`,...(Se=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Re,Pe,Te;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'ResetBtn',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Кнопка видна</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset resetOutline />
      </div>
      <div>
        <Caption>Кнопка скрыта, место под ней сохраняется (пунктир)</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset reset={false} resetOutline />
      </div>
    </div>
}`,...(Te=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Me,Ie,We;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Indicator',
  render: () => <div style={{
    display: 'flex',
    gap: s.x24,
    flexWrap: 'wrap'
  }}>
      <div>
        <Caption>Без индикатора</Caption>
        <MoreFilters />
      </div>
      <div>
        <Caption>С индикатором</Caption>
        <MoreFilters indicator />
      </div>
    </div>
}`,...(We=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var ze,Oe,_e;y.parameters={...y.parameters,docs:{...(ze=y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Right Block',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Custom Slot, MoreBtn, Secondary 1 и AccentBtn</Caption>
        <Panel segment={false} search={false} fields={1} switchers={0} right={{
        slot: true,
        more: true,
        sec1: true,
        accent: true
      }} />
      </div>
      <div>
        <Caption>Только AccentBtn</Caption>
        <Panel segment={false} search={false} fields={1} switchers={0} right={{
        more: false,
        sec1: false,
        accent: true
      }} />
      </div>
    </div>
}`,...(_e=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Le,$e,He;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Пара: кнопки справа',
  render: () => <DocPair goodText="Три точки, Secondary и акцентная кнопка: на экране не больше 3 кнопок" badText="Четыре видимые кнопки" good={<div style={{
    display: 'flex',
    gap: s.x8,
    justifyContent: 'flex-end'
  }}>
          <Right more sec1 accent />
        </div>} bad={<div style={{
    display: 'flex',
    gap: s.x8,
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  }}>
          <Right more={false} sec1 sec2 accent />
          <Button size="s" view="secondary">
            Удалить
          </Button>
        </div>} />
}`,...(He=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var qe,Ge,Xe;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Пара: свитчеры',
  render: () => <DocPair goodText="Не больше 2 Switcher-filter в блоке" badText="Три Switcher-filter на панели" good={<div style={{
    display: 'flex',
    gap: s.x8,
    flexWrap: 'wrap'
  }}>
          <Switcher label="Активные" />
          <Switcher label="Мои" />
          <MoreFilters />
        </div>} bad={<div style={{
    display: 'flex',
    gap: s.x8,
    flexWrap: 'wrap'
  }}>
          <Switcher label="Активные" />
          <Switcher label="Мои" />
          <Switcher label="Срочные" />
        </div>} />
}`,...(Xe=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var Je,Ke,Qe;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Поле Multiple с чипом «Выбрано N»',
  render: () => <MultipleChipView />
}`,...(Qe=(Ke=R.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Ye,Ze;P.parameters={...P.parameters,docs:{...(Ue=P.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Строка выбранных фильтров',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Группа с 2 тегами и (+N), длинный тег обрезан многоточием</Caption>
        <div style={{
        padding: s.x8,
        borderRadius: s.x8,
        backgroundColor: surfaceSolidCard
      }}>
          <Row />
        </div>
      </div>
      <div>
        <Caption>Строка не помещается: появляются стрелки прокрутки</Caption>
        <div style={{
        width: 420,
        maxWidth: '100%',
        padding: s.x8,
        borderRadius: s.x8,
        backgroundColor: surfaceSolidCard
      }}>
          <Row />
        </div>
      </div>
    </div>
}`,...(Ze=(Ye=P.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var es,ss,is;T.parameters={...T.parameters,docs:{...(es=T.parameters)==null?void 0:es.docs,source:{originalSource:`{
  name: 'Popover «Ещё фильтры»',
  render: () => <div style={{
    minHeight: 500
  }}>
      <MoreFilters open group fields={['Фильтр 1', 'Фильтр 2']} />
    </div>
}`,...(is=(ss=T.parameters)==null?void 0:ss.docs)==null?void 0:is.source}}};var us,ns,rs;M.parameters={...M.parameters,docs:{...(us=M.parameters)==null?void 0:us.docs,source:{originalSource:`{
  name: 'Пара: что показываем в Popover',
  // в одну колонку: Popover шириной 360 px не помещается в половину колонки
  render: () => <div style={{
    maxWidth: 560
  }}>
    <DocPair goodText="В Popover только фильтры, спрятанные в кнопке «Ещё фильтры»" badText="В Popover повторяется фильтр «Блок», который уже виден на панели" good={<div style={{
      minHeight: 520
    }}>
          <div style={{
        display: 'flex',
        gap: s.x8
      }}>
            <Field name="Блок" />
            <MoreFilters open fields={['Брикс', 'Команда']} />
          </div>
        </div>} bad={<div style={{
      minHeight: 520
    }}>
          <div style={{
        display: 'flex',
        gap: s.x8
      }}>
            <Field name="Блок" />
            <MoreFilters open fields={['Блок', 'Брикс', 'Команда']} />
          </div>
        </div>} />
    </div>
}`,...(rs=(ns=M.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var os,as,ts;I.parameters={...I.parameters,docs:{...(os=I.parameters)==null?void 0:os.docs,source:{originalSource:`{
  name: 'Размер Popover',
  render: () => <div style={{
    minHeight: 500
  }}>
      <MoreFilters open fields={['Брикс']} />
    </div>
}`,...(ts=(as=I.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var ls,ds,ms;W.parameters={...W.parameters,docs:{...(ls=W.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  name: 'Фильтры переезжают в Popover',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Широкая панель: три поля видны</Caption>
        <Panel width={860} segment={false} search={false} right={false} fields={3} switchers={0} />
      </div>
      <div>
        <Caption>Панель уже: два поля переехали в «Ещё фильтры», в одном из них выбрано значение, на кнопке индикатор</Caption>
        <Panel width={420} segment={false} search={false} right={false} fields={1} switchers={0} indicator />
      </div>
    </div>
}`,...(ms=(ds=W.parameters)==null?void 0:ds.docs)==null?void 0:ms.source}}};var cs,gs,fs;z.parameters={...z.parameters,docs:{...(cs=z.parameters)==null?void 0:cs.docs,source:{originalSource:`{
  name: 'Пустое состояние страницы',
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <PageTitle title="Затраты" breadcrumbs={{
      items: [{
        title: 'Главная',
        href: '#'
      }, {
        title: 'Отчёты',
        href: '#'
      }, {
        title: 'Затраты'
      }]
    }} />
      <Panel segment={false} fields={2} selected={3} switchers={0} right={{
      more: false,
      sec1: false,
      accent: true
    }} row />
      <EmptyState size="l" variant="not-found" title="Ничего не нашлось" subtitle="Попробуйте изменить или сбросить фильтры" buttons={[{
      type: 'button',
      props: {
        text: 'Сбросить фильтры',
        view: 'accent'
      }
    }]} />
    </div>
}`,...(fs=(gs=z.parameters)==null?void 0:gs.docs)==null?void 0:fs.source}}};const Ws=["Playground","SpacingLive","Segment","SearchToggle","PairSearch","SegmentCustomSlot","SearchStates","FiltersBlockView","ButtonType","ResetBtn","Indicator","RightBlock","PairRightBlock","PairSwitchers","MultipleChip","RowActiveFltrs","PopoverOpen","PairPopover","PopoverResize","Adaptive","EmptyStatePage"],Ys=Object.freeze(Object.defineProperty({__proto__:null,Adaptive:W,ButtonType:V,EmptyStatePage:z,FiltersBlockView:D,Indicator:B,MultipleChip:R,PairPopover:M,PairRightBlock:C,PairSearch:k,PairSwitchers:S,Playground:F,PopoverOpen:T,PopoverResize:I,ResetBtn:j,RightBlock:y,RowActiveFltrs:P,SearchStates:w,SearchToggle:v,Segment:b,SegmentCustomSlot:E,SpacingLive:A,__namedExportsOrder:Ws,default:ys},Symbol.toStringTag,{value:"Module"}));export{W as A,V as B,Ys as E,D as F,B as I,R as M,F as P,j as R,A as S,b as a,v as b,k as c,E as d,w as e,y as f,C as g,S as h,P as i,T as j,M as k,I as l,z as m};
