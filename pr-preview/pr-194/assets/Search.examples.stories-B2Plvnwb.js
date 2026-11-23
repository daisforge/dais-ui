import{b as e,r as o}from"./react-UEdzNlUe.js";import{A as Te}from"./AutocompleteSearch-DfWJzBor.js";import{T as S}from"./TextField-Bq_jSxbf.js";import{s as t}from"./constants-D9pWgtfS.js";import{cE as z,dP as Re}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{D as Le}from"./DocPair-DZl9SYu9.js";import{M as ze,a as qe}from"./Measure-xndn83Cc.js";import{e as He}from"./emptyStateImages-UAX5ldD7.js";import{a5 as We}from"./@salutejs/plasma-icons-D87bzLqR.js";import{a9 as P,t as R}from"./@salutejs/sdds-finai-CCc2M82T.js";import{df as O}from"./vendor-BJXHd15o.js";const _e={title:"Локальные компоненты/TextFieldSearch/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}},msw:{handlers:He}}},Be=[{label:"Москва"},{label:"Можайск"},{label:"Моздок"},{label:"Казань"},{label:"Самара"},{label:"Сочи"},{label:"Томск"}],Pe=["Бюджет на 2026 год","Отчёт по закупкам","Отчёт по продажам","План продаж","Платёжный календарь","Реестр договоров","Сверка с контрагентами"],m=({children:s})=>e.jsxDEV(R,{style:{color:z,marginBottom:t.x4},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:53,columnNumber:3},void 0),N=s=>({display:"grid",gap:t.x8,width:s,maxWidth:"100%"}),q=({text:s,query:i})=>{const a=i?s.toLowerCase().indexOf(i.toLowerCase()):-1;return a<0?e.jsxDEV("span",{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:69,columnNumber:12},void 0):e.jsxDEV("span",{children:[s.slice(0,a),e.jsxDEV("mark",{style:{backgroundColor:Re,color:"inherit",borderRadius:2},children:s.slice(a,a+i.length)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:76,columnNumber:7},void 0),s.slice(a+i.length)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:74,columnNumber:5},void 0)},h=({initial:s="",size:i="s",width:a=360,disabled:u,readOnly:d,withClear:c=!0,contentRight:r,focused:n})=>{const[g,f]=o.useState(s),B=o.useRef(null);return o.useEffect(()=>{var x,l;n&&((l=(x=B.current)==null?void 0:x.querySelector("input"))==null||l.focus({preventScroll:!0}))},[n]),e.jsxDEV("div",{ref:B,style:{width:a,maxWidth:"100%"},children:e.jsxDEV(S,{size:i,value:g,onChange:x=>f(x.target.value),onClear:c?()=>f(""):void 0,disabled:u,readOnly:d,contentRight:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:116,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:115,columnNumber:5},void 0)},p=({initial:s="",open:i=!1,size:a="s",width:u=360,height:d=190,total:c=!1,entity:r,highlight:n=!1})=>{const[g,f]=o.useState(s),[,B]=o.useState(0),x=o.useRef(null);return o.useLayoutEffect(()=>{var H,W;if(!i)return;(W=(H=x.current)==null?void 0:H.querySelector("input"))==null||W.dispatchEvent(new FocusEvent("focusin",{bubbles:!0}));const l=window.setTimeout(()=>B(Oe=>Oe+1),50);return()=>window.clearTimeout(l)},[i]),e.jsxDEV("div",{ref:x,style:{width:u,maxWidth:"100%",minHeight:i?d:void 0},children:e.jsxDEV(Te,{size:a,value:g,onChange:l=>f(l.target.value),onClear:()=>f(""),suggestions:Be,onSuggestionSelect:l=>f(l.label),beforeListTotal:c,beforeListTotalEntity:r,renderItem:n?l=>e.jsxDEV(q,{text:l.label,query:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:183,columnNumber:49},void 0):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:174,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:173,columnNumber:5},void 0)},Ie=(s,i)=>i==="Opened"?"Мо":i==="EmptyState"?"Тверь":s.View==="Value"?s.NameValue:"",Me=s=>{const i=s.Search==="Autocomplete Search",a=i?s.State:"Default",[u,d]=o.useState(Ie(s,a)),c=o.useRef(null),r=s.Size==="XS"?"xs":"s";return o.useLayoutEffect(()=>{var g;const n=(g=c.current)==null?void 0:g.querySelector("input");s.Focused?n==null||n.focus({preventScroll:!0}):a!=="Default"&&(n==null||n.dispatchEvent(new FocusEvent("focusin",{bubbles:!0})))},[s.Focused,a]),e.jsxDEV("div",{ref:c,style:{width:360,maxWidth:"100%",minHeight:i?240:void 0},children:i?e.jsxDEV(Te,{size:r,placeholder:s.NamePlaceholder,value:u,onChange:n=>d(n.target.value),onClear:()=>d(""),suggestions:Be,onSuggestionSelect:n=>d(n.label)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:233,columnNumber:9},void 0):e.jsxDEV(S,{size:r,placeholder:s.NamePlaceholder,value:u,onChange:n=>d(n.target.value),onClear:()=>d("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:243,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:231,columnNumber:5},void 0)},b={name:"Живая настройка",args:{Search:"Textfield Search",View:"Value",NamePlaceholder:"Поиск",NameValue:"Отчёт по продажам",Focused:!1,State:"Opened",Size:"S"},argTypes:{Search:{control:"inline-radio",options:["Textfield Search","Autocomplete Search"],description:"Вид поиска"},View:{control:"inline-radio",options:["Placeholder","Value"],description:"Подсказка или введённое значение"},NamePlaceholder:{control:"text",description:"Текст подсказки"},NameValue:{control:"text",description:"Введённое значение",if:{arg:"View",eq:"Value"}},Focused:{control:"boolean",description:"Фокус в поле"},State:{control:"inline-radio",options:["Default","Opened","EmptyState"],description:"Состояние Autocomplete Search. В Opened и EmptyState текст в поле задан примером",if:{arg:"Search",eq:"Autocomplete Search"}},Size:{control:"inline-radio",options:["S","XS"],description:"Размер поля"}},render:s=>e.jsxDEV(Me,{...s},JSON.stringify(s),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:296,columnNumber:21},void 0)},Xe=()=>{const[s,i]=o.useState("Отчёт"),a=Pe.filter(u=>u.toLowerCase().includes(s.toLowerCase()));return e.jsxDEV("div",{style:N(320),children:[e.jsxDEV(S,{value:s,onChange:u=>i(u.target.value),onClear:()=>i("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:307,columnNumber:7},void 0),e.jsxDEV(P,{children:a.map(u=>e.jsxDEV(O,{children:u},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:310,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:308,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:306,columnNumber:5},void 0)},E={name:"Textfield Search над списком",render:()=>e.jsxDEV(Xe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:319,columnNumber:17},void 0)},k={name:"Autocomplete Search с подсказками",render:()=>e.jsxDEV(p,{initial:"Мо",open:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:324,columnNumber:17},void 0)},Ge=[{a:"&",b:'[class*="StyledContentLeft"] .icon-root-container',dir:"h"},{a:'[class*="StyledContentLeft"] .icon-root-container',b:".input-scrollable-wrapper",dir:"h"},{a:".input-scrollable-wrapper",b:'[class*="StyledContentRight"] button',dir:"h"},{a:'[class*="StyledContentRight"] button',b:"&",dir:"h"}],v={name:"Отступы на живом компоненте",render:()=>e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"grid",gap:t.x16},children:["s","xs"].map(s=>e.jsxDEV("div",{children:[e.jsxDEV(m,{children:s==="s"?"Размер S, высота 40 px":"Размер XS, высота 32 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:343,columnNumber:13},void 0),e.jsxDEV(ze,{gaps:Ge,style:{width:360,maxWidth:"100%",marginBottom:t.x12},children:e.jsxDEV(h,{size:s,initial:"Отчёт по продажам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:345,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:344,columnNumber:13},void 0)]},s,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:342,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:340,columnNumber:7},void 0),e.jsxDEV(qe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:350,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:339,columnNumber:5},void 0)},w={name:"View",render:()=>e.jsxDEV("div",{style:N(360),children:[e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"View = Placeholder"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:362,columnNumber:9},void 0),e.jsxDEV(h,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:363,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:361,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"View = Value"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:366,columnNumber:9},void 0),e.jsxDEV(h,{initial:"Отчёт по продажам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:367,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:365,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:360,columnNumber:5},void 0)},D={name:"Focused",render:()=>e.jsxDEV(h,{focused:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:375,columnNumber:17},void 0)},V={name:"State",render:()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:t.x12},children:[e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"Default"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:385,columnNumber:9},void 0),e.jsxDEV(p,{width:250},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:386,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:384,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"Opened"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:389,columnNumber:9},void 0),e.jsxDEV(p,{width:250,initial:"Мо",open:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:390,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:388,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"EmptyState"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:393,columnNumber:9},void 0),e.jsxDEV(p,{width:250,initial:"Тверь",open:!0,height:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:394,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:392,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:383,columnNumber:5},void 0)},C={name:"Строка «Найдено»",render:()=>e.jsxDEV(p,{initial:"Мо",open:!0,total:!0,entity:"городов",height:230},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:402,columnNumber:17},void 0)},y={name:"Disabled и Read only",render:()=>e.jsxDEV("div",{style:N(360),children:[e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"Disabled"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:412,columnNumber:9},void 0),e.jsxDEV(h,{initial:"Отчёт по продажам",disabled:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:413,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:411,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(m,{children:"Read only"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:416,columnNumber:9},void 0),e.jsxDEV(h,{initial:"Отчёт по продажам",readOnly:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:417,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:415,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:410,columnNumber:5},void 0)},j={name:"Пара: очистка поля",render:()=>e.jsxDEV(Le,{goodText:"Крестик очистки справа, когда в поле есть значение",badText:"Поле без очистки или с другой иконкой вместо крестика",good:e.jsxDEV(h,{initial:"Отчёт по продажам",width:300},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:431,columnNumber:13},void 0),bad:e.jsxDEV("div",{style:{display:"grid",gap:t.x8},children:[e.jsxDEV(h,{initial:"Отчёт по продажам",width:300,withClear:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:434,columnNumber:11},void 0),e.jsxDEV(h,{initial:"Отчёт по продажам",width:300,withClear:!1,contentRight:e.jsxDEV(We,{size:"s",color:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:439,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:435,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:433,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:428,columnNumber:5},void 0)},F={name:"Ничего не нашлось",render:()=>e.jsxDEV(p,{initial:"Тверь",open:!0,height:240},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:449,columnNumber:17},void 0)},Je=()=>{const[s,i]=o.useState("2351"),a=["Договор 2351-А","Договор 2351-Б","Счёт 12351","Акт 4402","Заявка 2017"];return e.jsxDEV("div",{style:N(320),children:[e.jsxDEV(S,{value:s,onChange:u=>i(u.target.value),onClear:()=>i("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:458,columnNumber:7},void 0),e.jsxDEV(P,{children:a.filter(u=>u.toLowerCase().includes(s.toLowerCase())).map(u=>e.jsxDEV(O,{children:e.jsxDEV(q,{text:u,query:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:464,columnNumber:15},void 0)},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:463,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:459,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:457,columnNumber:5},void 0)},A={name:"Подсветка найденного текста",render:()=>e.jsxDEV(Je,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:474,columnNumber:17},void 0)},_=({query:s,highlight:i})=>e.jsxDEV("div",{style:{padding:t.x8,borderRadius:t.x4,border:"1px solid rgba(8, 8, 8, 0.12)"},children:[e.jsxDEV(R,{style:{color:z},children:"Город в карточке"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:485,columnNumber:5},void 0),e.jsxDEV(R,{children:i?e.jsxDEV(q,{text:"Москва",query:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:486,columnNumber:25},void 0):"Москва"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:486,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:478,columnNumber:3},void 0),T={name:"Пара: подсветка",render:()=>e.jsxDEV(Le,{goodText:"Подсветка в одном месте: только в выпадающем списке",badText:"Подсветка сразу в списке и в карточке",good:e.jsxDEV("div",{style:{display:"grid",gap:t.x12},children:[e.jsxDEV(_,{query:"Мо",highlight:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:498,columnNumber:11},void 0),e.jsxDEV(p,{initial:"Мо",open:!0,highlight:!0,width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:499,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:497,columnNumber:9},void 0),bad:e.jsxDEV("div",{style:{display:"grid",gap:t.x12},children:[e.jsxDEV(_,{query:"Мо",highlight:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:504,columnNumber:11},void 0),e.jsxDEV(p,{initial:"Мо",open:!0,highlight:!0,width:260},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:505,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:503,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:493,columnNumber:5},void 0)},I=s=>Pe.filter(i=>i.toLowerCase().includes(s.toLowerCase())),Qe=()=>{const[s,i]=o.useState(""),[a,u]=o.useState(""),[d,c]=o.useState("");return e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:t.x16},children:[e.jsxDEV("div",{style:N(300),children:[e.jsxDEV(m,{children:"Фильтрация при вводе"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:525,columnNumber:9},void 0),e.jsxDEV(S,{value:s,onChange:r=>i(r.target.value),onClear:()=>i("")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:526,columnNumber:9},void 0),e.jsxDEV(P,{children:I(s).map(r=>e.jsxDEV(O,{children:r},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:529,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:527,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:524,columnNumber:7},void 0),e.jsxDEV("div",{style:N(300),children:[e.jsxDEV(m,{children:"Фильтрация по Enter"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:534,columnNumber:9},void 0),e.jsxDEV(S,{value:a,placeholder:"Запрос и Enter",onChange:r=>u(r.target.value),onSearch:r=>c(r),onClear:()=>{u(""),c("")}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:535,columnNumber:9},void 0),e.jsxDEV(P,{children:I(d).map(r=>e.jsxDEV(O,{children:r},r,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:547,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:545,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:533,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:523,columnNumber:5},void 0)},L={name:"Фильтрация при вводе и по Enter",render:()=>e.jsxDEV(Qe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/Search/Search.examples.stories.tsx",lineNumber:557,columnNumber:17},void 0)};var M,X,G;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Живая настройка',
  args: {
    Search: 'Textfield Search',
    View: 'Value',
    NamePlaceholder: 'Поиск',
    NameValue: 'Отчёт по продажам',
    Focused: false,
    State: 'Opened',
    Size: 'S'
  },
  argTypes: {
    Search: {
      control: 'inline-radio',
      options: ['Textfield Search', 'Autocomplete Search'],
      description: 'Вид поиска'
    },
    View: {
      control: 'inline-radio',
      options: ['Placeholder', 'Value'],
      description: 'Подсказка или введённое значение'
    },
    NamePlaceholder: {
      control: 'text',
      description: 'Текст подсказки'
    },
    NameValue: {
      control: 'text',
      description: 'Введённое значение',
      if: {
        arg: 'View',
        eq: 'Value'
      }
    },
    Focused: {
      control: 'boolean',
      description: 'Фокус в поле'
    },
    State: {
      control: 'inline-radio',
      options: ['Default', 'Opened', 'EmptyState'],
      description: 'Состояние Autocomplete Search. В Opened и EmptyState текст в поле задан примером',
      if: {
        arg: 'Search',
        eq: 'Autocomplete Search'
      }
    },
    Size: {
      control: 'inline-radio',
      options: ['S', 'XS'],
      description: 'Размер поля'
    }
  },
  render: args => <PlaygroundView key={JSON.stringify(args)} {...args} />
}`,...(G=(X=b.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Y;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Textfield Search над списком',
  render: () => <TextfieldWithListView />
}`,...(Y=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var K,U,Z;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Autocomplete Search с подсказками',
  render: () => <AutocompleteDemo initial="Мо" open />
}`,...(Z=(U=k.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var $,ee,se;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <div>
      <div style={{
      display: 'grid',
      gap: s.x16
    }}>
        {(['s', 'xs'] as const).map(size => <div key={size}>
            <Caption>{size === 's' ? 'Размер S, высота 40 px' : 'Размер XS, высота 32 px'}</Caption>
            <Measure gaps={fieldGaps} style={{
          width: 360,
          maxWidth: '100%',
          marginBottom: s.x12
        }}>
              <SearchField size={size} initial="Отчёт по продажам" />
            </Measure>
          </div>)}
      </div>
      <MeasureLegend />
    </div>
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ie,ue,ae;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'View',
  render: () => <div style={column(360)}>
      <div>
        <Caption>View = Placeholder</Caption>
        <SearchField />
      </div>
      <div>
        <Caption>View = Value</Caption>
        <SearchField initial="Отчёт по продажам" />
      </div>
    </div>
}`,...(ae=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ae.source}}};var re,ne,oe;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Focused',
  render: () => <SearchField focused />
}`,...(oe=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var de,te,le;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'State',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: s.x12
  }}>
      <div>
        <Caption>Default</Caption>
        <AutocompleteDemo width={250} />
      </div>
      <div>
        <Caption>Opened</Caption>
        <AutocompleteDemo width={250} initial="Мо" open />
      </div>
      <div>
        <Caption>EmptyState</Caption>
        <AutocompleteDemo width={250} initial="Тверь" open height={240} />
      </div>
    </div>
}`,...(le=(te=V.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var me,ce,he;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Строка «Найдено»',
  render: () => <AutocompleteDemo initial="Мо" open total entity="городов" height={230} />
}`,...(he=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:he.source}}};var pe,ge,xe;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Disabled и Read only',
  render: () => <div style={column(360)}>
      <div>
        <Caption>Disabled</Caption>
        <SearchField initial="Отчёт по продажам" disabled />
      </div>
      <div>
        <Caption>Read only</Caption>
        <SearchField initial="Отчёт по продажам" readOnly />
      </div>
    </div>
}`,...(xe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var fe,Se,Ne;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Пара: очистка поля',
  render: () => <DocPair goodText="Крестик очистки справа, когда в поле есть значение" badText="Поле без очистки или с другой иконкой вместо крестика" good={<SearchField initial="Отчёт по продажам" width={300} />} bad={<div style={{
    display: 'grid',
    gap: s.x8
  }}>
          <SearchField initial="Отчёт по продажам" width={300} withClear={false} />
          <SearchField initial="Отчёт по продажам" width={300} withClear={false} contentRight={<IconTrash size="s" color={textSecondary} />} />
        </div>} />
}`,...(Ne=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var be,Ee,ke;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Ничего не нашлось',
  render: () => <AutocompleteDemo initial="Тверь" open height={240} />
}`,...(ke=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var ve,we,De;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Подсветка найденного текста',
  render: () => <HighlightListView />
}`,...(De=(we=A.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Ve,Ce,ye;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Пара: подсветка',
  render: () => <DocPair goodText="Подсветка в одном месте: только в выпадающем списке" badText="Подсветка сразу в списке и в карточке" good={<div style={{
    display: 'grid',
    gap: s.x12
  }}>
          <CityCard query="Мо" highlight={false} />
          <AutocompleteDemo initial="Мо" open highlight width={260} />
        </div>} bad={<div style={{
    display: 'grid',
    gap: s.x12
  }}>
          <CityCard query="Мо" highlight />
          <AutocompleteDemo initial="Мо" open highlight width={260} />
        </div>} />
}`,...(ye=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var je,Fe,Ae;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Фильтрация при вводе и по Enter',
  render: () => <FilteringView />
}`,...(Ae=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};const Ye=["Playground","TextfieldWithList","AutocompleteCities","SpacingLive","View","Focused","State","BeforeListTotal","States","PairClear","EmptyStateList","HighlightList","PairHighlight","Filtering"],os=Object.freeze(Object.defineProperty({__proto__:null,AutocompleteCities:k,BeforeListTotal:C,EmptyStateList:F,Filtering:L,Focused:D,HighlightList:A,PairClear:j,PairHighlight:T,Playground:b,SpacingLive:v,State:V,States:y,TextfieldWithList:E,View:w,__namedExportsOrder:Ye,default:_e},Symbol.toStringTag,{value:"Module"}));export{k as A,C as B,os as E,D as F,A as H,b as P,v as S,E as T,w as V,V as a,y as b,j as c,F as d,T as e,L as f};
