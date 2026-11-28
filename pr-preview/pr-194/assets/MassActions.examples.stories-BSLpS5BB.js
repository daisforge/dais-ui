import{b as e,r as h}from"./react-UEdzNlUe.js";import{L as os}from"./LeftPanel-DJgS_rNU.js";import{M as k}from"./MassActions-Bsnp-_01.js";import{M as rs}from"./MassActionsStatic-OGBVn6MY.js";import{s as u}from"./constants-Brx3fuKM.js";import{cI as U,dN as ts,dO as ee,cE as ss}from"./@sddsjs/sdds_finai-rO2iU-Jd.js";import{M as ds,a as cs}from"./Measure-xndn83Cc.js";import{V as G}from"./ViewportFrame-CMbg3TfH.js";import{S as ms,a as ls,w as ps}from"./ScreenSwitch-CtFfRbV-.js";import{k as H,I as gs,s as se,J as xs}from"./@salutejs/sdds-finai-Z0nbsN1t.js";import{c as hs,a6 as J}from"./@salutejs/plasma-icons-BxPMDQ8m.js";const fs={title:"Локальные компоненты/MassActions/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}}}},q="локальные-компоненты-massactions-для-дизайнеров--",z=()=>{},E=({children:s})=>e.jsxDEV(H,{style:{color:ss,marginBottom:u.x8},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:39,columnNumber:3},void 0),ne={display:"grid",placeItems:"center",borderRadius:u.x8,border:`1px dashed ${ee}`,color:ee,backgroundColor:ts},o=(s,i={})=>({type:"button",view:"secondary",text:s,onClick:z,...i}),c=s=>({type:"button",view:"accent",text:s,onClick:z}),K=["Экспорт","Копировать","Переместить","Архивировать","Заморозить"],ns=s=>Array.from(s.querySelectorAll("div")).find(i=>{const n=getComputedStyle(i);return n.position==="absolute"&&n.borderTopWidth==="2px"}),is=s=>Array.from(s.querySelectorAll("button")).filter(i=>i.getBoundingClientRect().left>-1e3),d=({width:s="100%",height:i=140,count:n=9,total:g=12,maxCount:t,checkbox:a=!0,label:m,buttons:A=[o("Нецелевое 2"),o("Нецелевое 1"),c("Целевое действие")],collapsed:M=!1,openMore:x=!1,children:l})=>{const r=h.useRef(null);return h.useLayoutEffect(()=>{if(!M&&!x)return;const N=window.setTimeout(()=>{var v,b;const f=r.current&&ns(r.current);if(!f)return;const p=is(f);M&&((v=p[p.length-1])==null||v.click()),x&&((b=p.find(w=>!w.innerText.trim()&&w!==p[p.length-1]))==null||b.click())},700);return()=>window.clearTimeout(N)},[M,x]),e.jsxDEV("div",{ref:r,style:{position:"relative",width:s,maxWidth:"100%",height:i,borderRadius:u.x8,backgroundColor:U},children:[l,e.jsxDEV(k,{containerRef:r,selectedCount:n,leftSection:e.jsxDEV(k.Counter,{selectedCount:n,maxCount:t,label:m,showCheckbox:a,checked:n>=g,indeterminate:n>0&&n<g,onCheckboxChange:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:148,columnNumber:11},void 0),buttons:A},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:144,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:132,columnNumber:5},void 0)},D={decorators:[ps],name:"Живая настройка",args:{...ls,Selected:9,Checkbox:!0,Label:"Выбрано",Buttons:2,Primary:!0,Icons:!1,Disabled:!1,Width:900},argTypes:{...ms,Selected:{control:{type:"number",min:1,max:999},description:"Число выбранных объектов"},Checkbox:{control:"boolean",description:"Чекбокс в счётчике"},Label:{control:"text",description:"Текст счётчика"},Buttons:{control:{type:"range",min:0,max:5,step:1},description:"Кнопки нецелевых действий (Secondary)"},Primary:{control:"boolean",description:"Кнопка целевого действия (Primary) справа"},Icons:{control:"boolean",description:"Иконки в кнопках действий"},Disabled:{control:"boolean",description:"Первая кнопка заблокирована, подсказка при наведении"},Width:{control:{type:"range",min:360,max:1200,step:20},description:"Ширина контентного блока, px. Кнопки, которые не помещаются, уходят в «Ещё»"}},render:s=>{const i=s.Icons?{contentLeft:e.jsxDEV(J,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:209,columnNumber:46},void 0)}:{},n=K.slice(0,s.Buttons).map((g,t)=>o(g,s.Disabled&&t===0?{...i,disabled:!0,disabledTooltipProps:{text:"Действие недоступно для выбранных объектов"}}:i));return s.Primary&&n.push({...c("Отправить"),...i}),e.jsxDEV(d,{width:s.Width,count:s.Selected,total:Math.max(s.Selected,12),checkbox:s.Checkbox,label:s.Label,buttons:n},`${s.Width}-${s.Buttons}-${s.Primary}-${s.Icons}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:224,columnNumber:7},void 0)}},us=({width:s})=>{const i=h.useRef(null),[n,g]=h.useState();h.useLayoutEffect(()=>{let a="";const m=()=>{var Z;const x=i.current,l=x&&ns(x);if(!x||!l)return;const r=(X,as)=>X==null?void 0:X.setAttribute("data-m",as),N=is(l),f=l.querySelector('[class*="Checkbox-styles__StyledTriggerWrapper"]'),p=(Z=f==null?void 0:f.parentElement)==null?void 0:Z.parentElement;r(l,"panel"),r(f,"checkbox"),r(p==null?void 0:p.nextElementSibling,"label"),r(l.querySelector(".int-container"),"count"),r(l.querySelector(".plasma-divider-vertical"),"divider"),r(N[0],"b1"),r(N[1],"b2"),r(N[N.length-1],"collapse");const v=x.getBoundingClientRect(),b=l.getBoundingClientRect(),w={left:b.left-v.left,top:b.top-v.top,width:b.width,height:b.height},Q=JSON.stringify(w);Q!==a&&(a=Q,g(w))},A=window.setInterval(m,250),M=window.setTimeout(()=>window.clearInterval(A),4e3);return()=>{window.clearInterval(A),window.clearTimeout(M)}},[]);const t=(a,m)=>e.jsxDEV("span",{"data-m":a,style:{position:"absolute",pointerEvents:"none",...m}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:290,columnNumber:5},void 0);return e.jsxDEV("div",{style:{padding:20,width:s},children:[e.jsxDEV(ds,{gaps:n?[{a:'[data-m="panel"]',b:"&",dir:"v",tone:"outer"},{a:'[data-m="edge-l"]',b:'[data-m="checkbox"]',dir:"h"},{a:'[data-m="checkbox"]',b:'[data-m="label"]',dir:"h"},{a:'[data-m="label"]',b:'[data-m="count"]',dir:"h"},{a:'[data-m="count"]',b:'[data-m="divider"]',dir:"h"},{a:'[data-m="divider"]',b:'[data-m="b1"]',dir:"h"},{a:'[data-m="b1"]',b:'[data-m="b2"]',dir:"h"},{a:'[data-m="collapse"]',b:'[data-m="edge-r"]',dir:"h"},{a:'[data-m="edge-t"]',b:'[data-m="b1"]',dir:"v"},{a:'[data-m="b1"]',b:'[data-m="edge-b"]',dir:"v"}]:[],children:e.jsxDEV("div",{ref:i,style:{position:"relative"},children:[e.jsxDEV(d,{height:150,buttons:[o("Нецелевое 2"),o("Нецелевое 1"),c("Целевое действие")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:314,columnNumber:11},void 0),n?e.jsxDEV(e.Fragment,{children:[t("edge-l",{left:n.left+2,top:n.top,width:0,height:n.height}),t("edge-r",{left:n.left+n.width-2,top:n.top,width:0,height:n.height}),t("edge-t",{left:n.left,top:n.top+2,width:n.width,height:0}),t("edge-b",{left:n.left,top:n.top+n.height-2,width:n.width,height:0})]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:316,columnNumber:13},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:313,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:295,columnNumber:7},void 0),e.jsxDEV(cs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:325,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:294,columnNumber:5},void 0)},y={name:"Замер в окне 1440 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV(us,{width:900},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:333,columnNumber:17},void 0)},C={name:"Замер в окне 1280 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV(us,{width:900},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:339,columnNumber:17},void 0)},S={name:"Отступы на живом компоненте",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:u.x16},children:[e.jsxDEV(G,{storyId:`${q}spacing-1440`,width:1440,visibleWidth:940,height:250,caption:"Окно 1440 px: кнопки S, высота панели 68 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:346,columnNumber:7},void 0),e.jsxDEV(G,{storyId:`${q}spacing-1280`,width:1280,visibleWidth:940,height:250,caption:"Окно 1280 px: кнопки XS, высота панели 60 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:347,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:345,columnNumber:5},void 0)},bs=()=>e.jsxDEV("div",{style:{display:"grid",gap:u.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(E,{children:"Рядом с Left Panel"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:357,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:u.x8,height:180},children:[e.jsxDEV("div",{style:{...ne,width:240,flex:"none"},children:e.jsxDEV(H,{children:"Left Panel"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:360,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:359,columnNumber:9},void 0),e.jsxDEV("div",{style:{flex:1,minWidth:0},children:e.jsxDEV(d,{height:180,buttons:[o("Экспорт"),c("Отправить")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:363,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:362,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:358,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:356,columnNumber:5},void 0),e.jsxDEV("div",{children:[e.jsxDEV(E,{children:"Рядом с открытым Split-view"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:368,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:u.x8,height:180},children:[e.jsxDEV("div",{style:{flex:1,minWidth:0},children:e.jsxDEV(d,{height:180,buttons:[o("Экспорт"),c("Отправить")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:371,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:370,columnNumber:9},void 0),e.jsxDEV("div",{style:{...ne,width:280,flex:"none"},children:e.jsxDEV(H,{children:"Split-view"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:374,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:373,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:369,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:367,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:355,columnNumber:3},void 0),V={name:"По центру контент-области",render:()=>e.jsxDEV(bs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:383,columnNumber:17},void 0)},j={name:"Состав, окно 1440 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV("div",{style:{padding:20},children:e.jsxDEV(d,{width:720,height:120,buttons:[o("Нецелевое 2"),o("Нецелевое 1"),o("Нецелевое 3"),c("Целевое действие")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:393,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:392,columnNumber:5},void 0)},B={name:"Состав",render:()=>e.jsxDEV(G,{storyId:`${q}anatomy-scene`,width:1440,visibleWidth:760,height:160},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:404,columnNumber:17},void 0)},F={name:"Collapsed",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:u.x16},children:[e.jsxDEV("div",{children:[e.jsxDEV(E,{children:"Collapsed = no"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:414,columnNumber:9},void 0),e.jsxDEV(d,{height:110},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:415,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:413,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(E,{children:"Свёрнутая панель"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:418,columnNumber:9},void 0),e.jsxDEV(d,{height:110,collapsed:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:419,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:417,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:412,columnNumber:5},void 0)},Y=["Договор поставки","Счёт на оплату","Акт сверки","Заявка на закупку","Отчёт за квартал"],As=()=>{const s=h.useRef(null),[i,n]=h.useState(["Счёт на оплату"]),g=a=>n(m=>m.includes(a)?m.filter(A=>A!==a):[...m,a]),t=i.length===Y.length;return e.jsxDEV("div",{ref:s,style:{position:"relative",height:330,padding:u.x16,borderRadius:u.x8,backgroundColor:U},children:[e.jsxDEV("div",{style:{display:"grid",gap:u.x8},children:Y.map(a=>e.jsxDEV(xs,{label:a,checked:i.includes(a),onChange:()=>g(a)},a,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:440,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:438,columnNumber:7},void 0),e.jsxDEV(k,{containerRef:s,selectedCount:i.length,leftSection:e.jsxDEV(k.Counter,{selectedCount:i.length,showCheckbox:!0,checked:t,indeterminate:i.length>0&&!t,onCheckboxChange:()=>n(i.length>0&&!t?[...Y]:[])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:447,columnNumber:11},void 0),buttons:[o("Экспорт"),c("Отправить")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:443,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:437,columnNumber:5},void 0)},I={name:"Появление и скрытие",render:()=>e.jsxDEV(As,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:463,columnNumber:17},void 0)},ie=({children:s})=>e.jsxDEV("div",{style:{display:"inline-flex",padding:`${u.x12} ${u.x16}`,borderRadius:u.x8,backgroundColor:U},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:469,columnNumber:3},void 0),P={name:"Чекбокс в счётчике",render:()=>e.jsxDEV("div",{style:{display:"flex",gap:u.x24,flexWrap:"wrap"},children:[e.jsxDEV("div",{children:[e.jsxDEV(E,{children:"Выбрана часть объектов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:479,columnNumber:9},void 0),e.jsxDEV(ie,{children:e.jsxDEV(k.Counter,{selectedCount:3,showCheckbox:!0,indeterminate:!0,onCheckboxChange:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:481,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:480,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:478,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV(E,{children:"Выбраны все объекты"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:485,columnNumber:9},void 0),e.jsxDEV(ie,{children:e.jsxDEV(k.Counter,{selectedCount:12,showCheckbox:!0,checked:!0,onCheckboxChange:z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:487,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:486,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:484,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:477,columnNumber:5},void 0)},L={name:"Предел числа",render:()=>e.jsxDEV(d,{height:110,count:150,total:300,maxCount:99},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:496,columnNumber:17},void 0)},W={name:"Кнопки в «Ещё», окно 1440 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV("div",{style:{padding:20},children:e.jsxDEV(d,{width:600,height:330,openMore:!0,buttons:[...K.map(s=>o(s)),c("Отправить")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:506,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:505,columnNumber:5},void 0)},T={name:"Кнопки в «Ещё»",render:()=>e.jsxDEV(G,{storyId:`${q}compression-scene`,width:1440,visibleWidth:640,height:370,caption:"Контентный блок 600 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:519,columnNumber:5},void 0)},$={name:"Пять кнопок, окно 1440 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV("div",{style:{padding:20},children:e.jsxDEV(d,{width:1e3,height:120,buttons:[...K.slice(0,4).map(s=>o(s)),c("Отправить")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:528,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:527,columnNumber:5},void 0)},R={name:"Пять кнопок",render:()=>e.jsxDEV(G,{storyId:`${q}five-buttons-scene`,width:1440,visibleWidth:1040,height:160,caption:"Контентный блок 1000 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:540,columnNumber:5},void 0)},_={name:"Блокировка кнопки",render:()=>e.jsxDEV(d,{height:200,count:1,total:4,buttons:[o("Сравнить версии",{contentLeft:e.jsxDEV(J,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:555,columnNumber:24},void 0),disabled:!0,disabledTooltipProps:{text:"Выберите 2 версии, чтобы их сравнить",opened:!0}}),c("Отправить на согласование")]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:549,columnNumber:5},void 0)},Ns=()=>{const[s,i]=h.useState(!1);return e.jsxDEV("div",{style:{display:"flex",height:380},children:e.jsxDEV(os,{collapseState:[s,i],expandedContent:e.jsxDEV("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:u.x8},children:[e.jsxDEV(H,{style:{color:ss},children:"Содержимое Left Panel"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:576,columnNumber:13},void 0),e.jsxDEV(rs,{show:!0,children:[e.jsxDEV(gs,{size:"s",view:"secondary",children:e.jsxDEV(hs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:579,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:578,columnNumber:15},void 0),e.jsxDEV(se,{text:"Label",contentLeft:e.jsxDEV(J,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:581,columnNumber:49},void 0),size:"s",view:"secondary",style:{flexGrow:1}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:581,columnNumber:15},void 0),e.jsxDEV(se,{text:"Label",contentLeft:e.jsxDEV(J,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:582,columnNumber:49},void 0),size:"s",view:"secondary",style:{flexGrow:1}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:582,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:577,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:575,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:572,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:571,columnNumber:5},void 0)},O={name:"Mass Actions в Left Panel",render:()=>e.jsxDEV(Ns,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/MassActions/MassActions.examples.stories.tsx",lineNumber:593,columnNumber:17},void 0)};var ue,ae,oe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    Selected: 9,
    Checkbox: true,
    Label: 'Выбрано',
    Buttons: 2,
    Primary: true,
    Icons: false,
    Disabled: false,
    Width: 900
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    Selected: {
      control: {
        type: 'number',
        min: 1,
        max: 999
      },
      description: 'Число выбранных объектов'
    },
    Checkbox: {
      control: 'boolean',
      description: 'Чекбокс в счётчике'
    },
    Label: {
      control: 'text',
      description: 'Текст счётчика'
    },
    Buttons: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      },
      description: 'Кнопки нецелевых действий (Secondary)'
    },
    Primary: {
      control: 'boolean',
      description: 'Кнопка целевого действия (Primary) справа'
    },
    Icons: {
      control: 'boolean',
      description: 'Иконки в кнопках действий'
    },
    Disabled: {
      control: 'boolean',
      description: 'Первая кнопка заблокирована, подсказка при наведении'
    },
    Width: {
      control: {
        type: 'range',
        min: 360,
        max: 1200,
        step: 20
      },
      description: 'Ширина контентного блока, px. Кнопки, которые не помещаются, уходят в «Ещё»'
    }
  },
  render: args => {
    const icon = args.Icons ? {
      contentLeft: <IconPlasma color="inherit" />
    } : {};
    const buttons: MassActionsButtonProps[] = ACTIONS.slice(0, args.Buttons).map((text, i) => secondary(text, args.Disabled && i === 0 ? {
      ...icon,
      disabled: true,
      disabledTooltipProps: {
        text: 'Действие недоступно для выбранных объектов'
      }
    } : icon));
    if (args.Primary) {
      buttons.push({
        ...primary('Отправить'),
        ...icon
      } as MassActionsButtonProps);
    }
    return <Scene key={\`\${args.Width}-\${args.Buttons}-\${args.Primary}-\${args.Icons}\`} width={args.Width} count={args.Selected} total={Math.max(args.Selected, 12)} checkbox={args.Checkbox} label={args.Label} buttons={buttons} />;
  }
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,te,de;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Замер в окне 1440 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <MeasuredScene width={900} />
}`,...(de=(te=y.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ce,me,le;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Замер в окне 1280 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <MeasuredScene width={900} />
}`,...(le=(me=C.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var pe,ge,xe;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <ViewportFrame storyId={\`\${ID}spacing-1440\`} width={1440} visibleWidth={940} height={250} caption="Окно 1440 px: кнопки S, высота панели 68 px" />
      <ViewportFrame storyId={\`\${ID}spacing-1280\`} width={1280} visibleWidth={940} height={250} caption="Окно 1280 px: кнопки XS, высота панели 60 px" />
    </div>
}`,...(xe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,fe,be;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'По центру контент-области',
  render: () => <CenterView />
}`,...(be=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Ae,Ne,ke;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Состав, окно 1440 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    padding: 20
  }}>
      <Scene width={720} height={120} buttons={[secondary('Нецелевое 2'), secondary('Нецелевое 1'), secondary('Нецелевое 3'), primary('Целевое действие')]} />
    </div>
}`,...(ke=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var Ee,Me,ve;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:"{\n  name: 'Состав',\n  render: () => <ViewportFrame storyId={`${ID}anatomy-scene`} width={1440} visibleWidth={760} height={160} />\n}",...(ve=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:ve.source}}};var we,De,ye;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Collapsed',
  render: () => <div style={{
    display: 'grid',
    gap: s.x16
  }}>
      <div>
        <Caption>Collapsed = no</Caption>
        <Scene height={110} />
      </div>
      <div>
        <Caption>Свёрнутая панель</Caption>
        <Scene height={110} collapsed />
      </div>
    </div>
}`,...(ye=(De=F.parameters)==null?void 0:De.docs)==null?void 0:ye.source}}};var Ce,Se,Ve;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Появление и скрытие',
  render: () => <ShowHideView />
}`,...(Ve=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var je,Be,Fe;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Чекбокс в счётчике',
  render: () => <div style={{
    display: 'flex',
    gap: s.x24,
    flexWrap: 'wrap'
  }}>
      <div>
        <Caption>Выбрана часть объектов</Caption>
        <CounterBox>
          <MassActions.Counter selectedCount={3} showCheckbox indeterminate onCheckboxChange={noop} />
        </CounterBox>
      </div>
      <div>
        <Caption>Выбраны все объекты</Caption>
        <CounterBox>
          <MassActions.Counter selectedCount={12} showCheckbox checked onCheckboxChange={noop} />
        </CounterBox>
      </div>
    </div>
}`,...(Fe=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Ie,Pe,Le;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Предел числа',
  render: () => <Scene height={110} count={150} total={300} maxCount={99} />
}`,...(Le=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var We,Te,$e;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Кнопки в «Ещё», окно 1440 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    padding: 20
  }}>
      <Scene width={600} height={330} openMore buttons={[...ACTIONS.map(text => secondary(text)), primary('Отправить')]} />
    </div>
}`,...($e=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Re,_e,Oe;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Кнопки в «Ещё»',
  render: () => <ViewportFrame storyId={\`\${ID}compression-scene\`} width={1440} visibleWidth={640} height={370} caption="Контентный блок 600 px" />
}`,...(Oe=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source}}};var Ge,qe,ze;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Пять кнопок, окно 1440 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    padding: 20
  }}>
      <Scene width={1000} height={120} buttons={[...ACTIONS.slice(0, 4).map(text => secondary(text)), primary('Отправить')]} />
    </div>
}`,...(ze=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var He,Je,Xe;R.parameters={...R.parameters,docs:{...(He=R.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Пять кнопок',
  render: () => <ViewportFrame storyId={\`\${ID}five-buttons-scene\`} width={1440} visibleWidth={1040} height={160} caption="Контентный блок 1000 px" />
}`,...(Xe=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Ue,Ke;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Блокировка кнопки',
  render: () => <Scene height={200} count={1} total={4} buttons={[secondary('Сравнить версии', {
    contentLeft: <IconPlasma color="inherit" />,
    disabled: true,
    disabledTooltipProps: {
      text: 'Выберите 2 версии, чтобы их сравнить',
      opened: true
    }
  }), primary('Отправить на согласование')]} />
}`,...(Ke=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Qe,Ze,es;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'Mass Actions в Left Panel',
  render: () => <LeftPanelView />
}`,...(es=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};const ks=["Playground","Spacing1440","Spacing1280","SpacingLive","CenterWithPanels","AnatomyScene","Anatomy","Collapsed","ShowHide","CheckboxStates","CounterMax","CompressionScene","Compression","FiveButtonsScene","FiveButtons","Disabled","LeftPanelFooter"],Fs=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:B,AnatomyScene:j,CenterWithPanels:V,CheckboxStates:P,Collapsed:F,Compression:T,CompressionScene:W,CounterMax:L,Disabled:_,FiveButtons:R,FiveButtonsScene:$,LeftPanelFooter:O,Playground:D,ShowHide:I,Spacing1280:C,Spacing1440:y,SpacingLive:S,__namedExportsOrder:ks,default:fs},Symbol.toStringTag,{value:"Module"}));export{B as A,V as C,_ as D,Fs as E,R as F,O as L,D as P,S,F as a,I as b,P as c,L as d,T as e};
