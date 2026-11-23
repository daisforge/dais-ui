import{b as e,r as d}from"./react-UEdzNlUe.js";import{L as se}from"./LeftPanel-C5GOUKZ9.js";import{M as fs}from"./MassActionsStatic-DlLtRVuq.js";import{T as Es}from"./TextField-Bq_jSxbf.js";import{W,w as P}from"./Widget-BQF5Z08S.js";import{s as M}from"./constants-D9pWgtfS.js";import{cE as ne,cS as vs,cG as Ds,dN as ws,dO as te}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{D as Ss}from"./DocPair-DZl9SYu9.js";import{M as Q,a as Vs}from"./Measure-xndn83Cc.js";import{V as de}from"./ViewportFrame-CMbg3TfH.js";import{S as js,a as Cs,w as ys,b as Bs}from"./ScreenSwitch-CtFfRbV-.js";import{z as As,I as p,D as Fs,t as K,d as ae,m as Hs,a8 as Rs,B as Ts,a9 as zs,a6 as Is,S as Ms}from"./@salutejs/sdds-finai-CCc2M82T.js";import{h as ps,a7 as _,a9 as _s,a8 as ue,a6 as gs,c as xs}from"./@salutejs/plasma-icons-D87bzLqR.js";import{df as $s,de as Os}from"./vendor-BJXHd15o.js";const Ws={title:"Композиции/LeftPanel/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}}}},b="lp-doc-panel",L="lp-doc-expanded",bs="lp-doc-collapsed",Ns="lp-doc-center",Y="lp-doc-footer-feature",hs=["Основной план","План блока","Персональный план","Журнал публикаций","Сводный отчёт","Черновики","Шаблоны","Архив планов","Заявки","Согласования","Отчёт за квартал","Отчёт за год","Справочники","Настройки доступа","История изменений","Корзина"],Gs={padding:M.x4,borderRadius:M.x2,border:`1px dashed ${te}`,color:te,backgroundColor:ws},Us=({children:s})=>e.jsxDEV("div",{style:Gs,children:e.jsxDEV(K,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:108,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:107,columnNumber:3},void 0),g=({children:s})=>e.jsxDEV("div",{style:{marginTop:8,font:"400 12px/16px sans-serif",color:"#5c636b"},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:113,columnNumber:3},void 0),c=({count:s=6})=>e.jsxDEV(zs,{children:hs.slice(0,s).map(n=>e.jsxDEV($s,{children:n},n,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:121,columnNumber:7},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:119,columnNumber:3},void 0),t=({children:s})=>e.jsxDEV("div",{className:Ns,style:{flex:1,minWidth:0,padding:16,borderRadius:16,backgroundColor:Ds,boxShadow:vs},children:s??e.jsxDEV(K,{style:{color:ne},children:"Центральный блок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:139,columnNumber:18},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:128,columnNumber:3},void 0),m=({height:s=400,children:n})=>e.jsxDEV("div",{style:{display:"flex",height:s},children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:145,columnNumber:3},void 0),Ps=({size:s,labels:n=["Label","Label"]})=>e.jsxDEV(Os,{defaultSelected:["item_0"],children:e.jsxDEV(Is,{hasBackground:!0,size:s,stretch:!0,children:n.map((a,u)=>e.jsxDEV(Ms,{view:"secondary",value:`item_${u}`,label:a,size:s},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:169,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:167,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:166,columnNumber:3},void 0),N=(s,n=e.jsxDEV(ue,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:184,columnNumber:21},void 0),a="secondary")=>e.jsxDEV(p,{size:s,view:a,style:{aspectRatio:"1 / 1"},children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:187,columnNumber:3},void 0),o=s=>n=>{const a=s.lButton===!0?N(n):s.lButton||null,u=s.rButton===!0?N(n):s.rButton||null,f=s.botSlot===!0?e.jsxDEV(Us,{children:"Bot Slot"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:196,columnNumber:26},void 0):s.botSlot||null;return e.jsxDEV("div",{style:{display:"grid",gap:M.x8},children:[s.segment?e.jsxDEV(Ps,{size:n,labels:s.segmentLabels},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:200,columnNumber:20},void 0):null,s.search!==!1?e.jsxDEV("div",{style:{display:"flex",gap:M.x4},children:[e.jsxDEV("div",{style:{flex:1,minWidth:0},children:e.jsxDEV(Es,{size:n,placeholder:"Поиск"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:204,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:203,columnNumber:11},void 0),a,u]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:202,columnNumber:9},void 0):null,f]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:199,columnNumber:5},void 0)},Xs={overflow:"hidden",columnGap:"56px !important"},r=s=>({buttonSize:n})=>{const a=s.header!==!1,u=s.subHeader?s.subHeader(n):null;return e.jsxDEV(W,{$css:{overflow:"hidden"},children:[a||u?e.jsxDEV(W.Header,{title:a?s.title??"Title":void 0,titleSize:s.titleSize??"H4",badge:a&&s.badge?{text:"Label",size:"s",transparent:!0}:void 0,subTitle:a&&s.description?"Description":void 0,bottomBlock:u&&s.reserveToggle?e.jsxDEV("div",{style:{paddingRight:48},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:248,columnNumber:17},void 0):u,$css:a?Xs:{overflow:"hidden",[`& .${P.headerBottomBlock}`]:{marginTop:0}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:241,columnNumber:11},void 0):null,e.jsxDEV(W.Content,{children:s.body??e.jsxDEV(c,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:263,columnNumber:36},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:263,columnNumber:9},void 0),s.footer?e.jsxDEV(W.Footer,{children:s.footer(n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:264,columnNumber:21},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:239,columnNumber:7},void 0)},$=s=>e.jsxDEV(ae,{size:s,view:"secondary",stretching:"filled",children:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:270,columnNumber:3},void 0),q=(s=[e.jsxDEV(ps,{},"search",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:278,columnNumber:7},void 0),e.jsxDEV(ue,{},"group",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:279,columnNumber:7},void 0),e.jsxDEV(_,{},"plus",!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:280,columnNumber:7},void 0)])=>({buttonSize:n})=>e.jsxDEV(e.Fragment,{children:s.map((a,u)=>e.jsxDEV(p,{size:n,view:"secondary",children:a},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:287,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:284,columnNumber:5},void 0),x=({buttonSize:s})=>e.jsxDEV(p,{className:Y,size:s,view:"secondary",children:e.jsxDEV(ue,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:296,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:295,columnNumber:3},void 0),i=({collapsed:s=!1,width:n=320,adaptive:a=!1,containerProps:u,...f})=>{const h=d.useState(s),O=d.useState(s?void 0:n);return e.jsxDEV(se,{disableMediaAdaptive:!a,collapseState:h,widthState:O,containerProps:{...u,className:b},contentProps:{className:L},collapsedContentProps:{className:bs},...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:320,columnNumber:5},void 0)},J={title:"Title",badge:!0,description:!0,subHeader:o({segment:!0,lButton:!0,rButton:!0}),footer:$},Ys=s=>{const n=d.useState(s.Collapsed),a=d.useState(s.Collapsed?void 0:360),[,u]=n,[,f]=a;return d.useEffect(()=>{u(s.Collapsed),f(s.Collapsed?72:360)},[s.Collapsed,u,f]),e.jsxDEV(m,{height:520,children:[e.jsxDEV(se,{disableMediaAdaptive:(s[Bs]??"Текущий")==="Текущий",collapseState:n,widthState:a,showResizeable:s.Resize,showToggleButton:s.ShowCollapse,containerProps:{className:b},expandedContent:r({header:s.Header,title:s.Text,titleSize:s.TitleSize,badge:s["R Badge"],description:s.Description,reserveToggle:!s.Header&&s.ShowCollapse,subHeader:s.SubHeader?o({segment:s.Segment,search:s["Search bar"],lButton:s["L Button"],rButton:s["R Button"],botSlot:s["Bot Slot"]}):void 0,body:e.jsxDEV(c,{count:10},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:401,columnNumber:17},void 0),footer:s.Footer?$:void 0}),collapsedContent:s.Features?q():null,collapsedFooterContent:s["Footer Features"]?x:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:377,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:407,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:376,columnNumber:5},void 0)},k={decorators:[ys],name:"Живая настройка",args:{...Cs,Collapsed:!1,Resize:!0,Header:!0,SubHeader:!0,Footer:!0,ShowCollapse:!0,TitleSize:"H4",Text:"Title","R Badge":!0,Description:!0,Segment:!0,"Search bar":!0,"L Button":!0,"R Button":!0,"Bot Slot":!1,Features:!0,"Footer Features":!0},argTypes:{...js,Collapsed:{control:"boolean",description:"Свёрнутый вид"},Resize:{control:"boolean",description:"Полоска ресайза на правой границе"},Header:{control:"boolean",description:"Шапка панели"},SubHeader:{control:"boolean",description:"Блок под шапкой: сегмент, поиск, кнопки"},Footer:{control:"boolean",description:"Блок внизу панели"},ShowCollapse:{control:"boolean",description:"Кнопка сворачивания"},TitleSize:{control:"inline-radio",options:["H3","H4","H5"],description:"Размер заголовка",if:{arg:"Header",truthy:!0}},Text:{control:"text",description:"Текст заголовка",if:{arg:"Header",truthy:!0}},"R Badge":{control:"boolean",description:"Бадж справа от заголовка",if:{arg:"Header",truthy:!0}},Description:{control:"boolean",description:"Описание под заголовком",if:{arg:"Header",truthy:!0}},Segment:{control:"boolean",description:"Сегмент над поиском",if:{arg:"SubHeader",truthy:!0}},"Search bar":{control:"boolean",description:"Строка поиска с кнопками",if:{arg:"SubHeader",truthy:!0}},"L Button":{control:"boolean",description:"Левая кнопка справа от поиска",if:{arg:"Search bar",truthy:!0}},"R Button":{control:"boolean",description:"Правая кнопка справа от поиска",if:{arg:"Search bar",truthy:!0}},"Bot Slot":{control:"boolean",description:"Кастомный слот под поиском",if:{arg:"SubHeader",truthy:!0}},Features:{control:"boolean",description:"Кнопки фич в свёрнутом виде"},"Footer Features":{control:"boolean",description:"Кнопки фич внизу свёрнутой панели"}},render:s=>e.jsxDEV(Ys,{...s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:504,columnNumber:21},void 0)},ie=`.${b} > div:last-child`,Ks=`.${b} > div:first-child`,G=`.${bs} button`,qs=[{a:`.${b}`,b:`.${Ns}`,dir:"h",tone:"outer"},{a:"&",b:`.${L} .${P.header}`,dir:"v"},{a:"&",b:`.${L} .${P.headerTitlesBox}`,dir:"h"},{a:`.${L} .${P.headerBottomBlock}`,b:ie,dir:"h"},{a:`.${L} .${P.slotBlock}`,b:"&",dir:"v"}],Js=[{a:"&",b:G,dir:"h"},{a:`.${Y}`,b:ie,dir:"h"},{a:Ks,b:"&",dir:"h"},{a:`.${Y}`,b:"&",dir:"v"}],Qs=[{a:"&",b:G,dir:"v"},{a:"&",b:G,dir:"h"},{a:G,b:"&",dir:"h"},{a:`.${Y}`,b:"&",dir:"v"}],Z=({text:s,children:n})=>{const a=d.useRef(null),[u,f]=d.useState();return d.useLayoutEffect(()=>{var oe;const h=(oe=a.current)==null?void 0:oe.querySelector(`.${b}`);if(!h)return;const O=()=>f(Math.round(h.getBoundingClientRect().width)),re=new ResizeObserver(O);return re.observe(h),O(),()=>re.disconnect()},[]),e.jsxDEV("div",{ref:a,children:[n,e.jsxDEV(g,{children:[s,": ",u??"…"," px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:564,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:562,columnNumber:5},void 0)},Ls="lp-doc-measure",Zs=`.${Ls} ${ie} { z-index: 0 !important; }`,ks=()=>e.jsxDEV("div",{className:Ls,style:{minHeight:"100vh",boxSizing:"border-box",padding:24,backgroundColor:"#f4f5f7"},children:[e.jsxDEV("style",{children:Zs},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:588,columnNumber:5},void 0),e.jsxDEV("div",{style:{display:"flex",gap:40,alignItems:"flex-start"},children:[e.jsxDEV(Z,{text:"Развёрнутая",children:e.jsxDEV(Q,{gaps:qs,style:{display:"flex",width:420,height:420},children:[e.jsxDEV(i,{adaptive:!0,width:300,expandedContent:r({title:"Title",description:!0,subHeader:o({rButton:!0}),body:e.jsxDEV(c,{count:3},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:602,columnNumber:21},void 0),footer:$})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:595,columnNumber:11},void 0),e.jsxDEV(t,{children:e.jsxDEV("span",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:607,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:606,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:591,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:590,columnNumber:7},void 0),e.jsxDEV(Z,{text:"Свёрнутая с Resize",children:e.jsxDEV(Q,{gaps:Js,style:{display:"flex",width:"fit-content",height:420},children:e.jsxDEV(i,{adaptive:!0,collapsed:!0,containerProps:{style:{marginRight:0}},collapsedFooterContent:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:616,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:612,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:611,columnNumber:7},void 0),e.jsxDEV(Z,{text:"Свёрнутая без Resize",children:e.jsxDEV(Q,{gaps:Qs,style:{display:"flex",width:"fit-content",height:420},children:e.jsxDEV(i,{adaptive:!0,collapsed:!0,showResizeable:!1,containerProps:{style:{marginRight:0}},collapsedFooterContent:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:629,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:625,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:624,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:589,columnNumber:5},void 0),e.jsxDEV(Vs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:639,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:579,columnNumber:3},void 0),E={name:"Замер в окне 1440 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV(ks,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:646,columnNumber:17},void 0)},v={name:"Замер в окне 1280 px",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV(ks,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:652,columnNumber:17},void 0)},D={name:"Отступы на живом компоненте",render:()=>e.jsxDEV("div",{style:{display:"grid",gap:32},children:[e.jsxDEV(de,{storyId:"композиции-leftpanel-для-дизайнеров--spacing-1440",width:1440,height:540,visibleWidth:860,caption:"Окно шириной 1440 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:659,columnNumber:7},void 0),e.jsxDEV(de,{storyId:"композиции-leftpanel-для-дизайнеров--spacing-1280",width:1280,height:540,visibleWidth:860,caption:"Окно шириной 1280 px: свёрнутая панель 56 px, внешний отступ 16 px, кнопки и поиск XS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:666,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:658,columnNumber:5},void 0)},le=s=>e.jsxDEV(m,{children:[e.jsxDEV(i,{collapsed:s,width:240,expandedContent:r({subHeader:o({rButton:!0}),footer:$}),collapsedContent:q(),collapsedFooterContent:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:681,columnNumber:5},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:691,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:680,columnNumber:3},void 0),w={name:"Collapsed",render:()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:24},children:[e.jsxDEV("div",{children:[le(!1),e.jsxDEV(g,{children:"Collapsed = Off"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:707,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:705,columnNumber:7},void 0),e.jsxDEV("div",{children:[le(!0),e.jsxDEV(g,{children:"Collapsed = On"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:711,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:709,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:698,columnNumber:5},void 0)},S={name:"Header",render:()=>e.jsxDEV("div",{style:{display:"flex",height:200},children:["H3","H4","H5"].map(s=>e.jsxDEV(i,{width:260,showResizeable:!1,expandedContent:r({title:s,titleSize:s,badge:!0,description:!0,body:e.jsxDEV("span",{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:733,columnNumber:19},void 0)})},s,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:724,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:722,columnNumber:5},void 0)},V={name:"Sub-header",render:()=>e.jsxDEV(m,{children:[e.jsxDEV(i,{width:360,expandedContent:r({subHeader:o({segment:!0,lButton:!0,rButton:!0})})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:747,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:753,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:746,columnNumber:5},void 0)},j={name:"Body со скроллом",render:()=>e.jsxDEV(m,{children:[e.jsxDEV(i,{width:320,expandedContent:r({subHeader:o({rButton:!0}),body:e.jsxDEV(c,{count:16},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:768,columnNumber:17},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:764,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:771,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:763,columnNumber:5},void 0)},C={name:"Footer",render:()=>e.jsxDEV(m,{children:[e.jsxDEV(i,{width:320,expandedContent:r({subHeader:o({rButton:!0}),body:e.jsxDEV(c,{count:16},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:786,columnNumber:17},void 0),footer:$})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:782,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:790,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:781,columnNumber:5},void 0)},y={name:"Свёрнутый вид",render:()=>e.jsxDEV(m,{children:[e.jsxDEV(i,{collapsed:!0,expandedContent:r(J),collapsedContent:q(),collapsedFooterContent:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:801,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:807,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:800,columnNumber:5},void 0)},en=Array.from({length:10},(s,n)=>({indicator:n+1,height:"44px"})),B={name:"Шаги в свёрнутом виде",render:()=>e.jsxDEV(m,{height:540,children:[e.jsxDEV(i,{collapsed:!0,expandedContent:r(J),collapsedContent:e.jsxDEV("div",{style:{display:"flex",justifyContent:"center"},children:e.jsxDEV(As,{orientation:"vertical",hasContent:"none",items:en,current:2,size:"m"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:829,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:828,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:824,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:839,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:823,columnNumber:5},void 0)},sn=()=>{const s=d.useState(!1),n=d.useState(360),[a]=s,[u]=n;return e.jsxDEV(m,{height:420,children:[e.jsxDEV(se,{disableMediaAdaptive:!0,collapseState:s,widthState:n,containerProps:{className:b},expandedContent:r(J),collapsedContent:q(),collapsedFooterContent:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:854,columnNumber:7},void 0),e.jsxDEV(t,{children:[e.jsxDEV(Ts,{children:[a?"Панель свёрнута":"Панель развёрнута",", ширина"," ",Math.round(u??72)," px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:864,columnNumber:9},void 0),e.jsxDEV(K,{style:{marginTop:8,color:ne},children:"Потяните полоску на правой границе панели"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:868,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:863,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:853,columnNumber:5},void 0)},A={name:"Ресайз",render:()=>e.jsxDEV(sn,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:878,columnNumber:17},void 0)},nn=[{key:"reports",title:"Отчёты",children:[{key:"r1",title:"Отчёт за январь"},{key:"r2",title:"Отчёт за февраль"},{key:"r3",title:"Отчёт за март"}]},{key:"plans",title:"Планы",children:[{key:"p1",title:"Основной план"},{key:"p2",title:"Персональный план"}]},{key:"journal",title:"Журнал публикаций"}],U=["r1","r2","r3","p1","p2","journal"],an=["reports","plans",...U],l=e.jsxDEV(ae,{text:"Label",contentLeft:e.jsxDEV(gs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:910,columnNumber:18},void 0),size:"s",view:"secondary",style:{flexGrow:1}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:908,columnNumber:3},void 0),X=e.jsxDEV(p,{size:"s",view:"secondary",children:e.jsxDEV(xs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:918,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:917,columnNumber:3},void 0),ee=e.jsxDEV(p,{size:"s",view:"secondary",children:e.jsxDEV(gs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:923,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:922,columnNumber:3},void 0),un=()=>{const[s,n]=d.useState(["reports","r1","r2","r3"]),a=U.filter(u=>s.includes(u)).length;return e.jsxDEV(m,{height:480,children:[e.jsxDEV(i,{width:360,expandedContent:r({subHeader:o({rButton:!0}),body:e.jsxDEV("div",{style:{display:"grid",gap:M.x4},children:[e.jsxDEV(Hs,{size:"m",label:"Выбрать всё",checked:a===U.length,indeterminate:a>0&&a<U.length,onChange:u=>n(u.target.checked?an:[])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:939,columnNumber:15},void 0),e.jsxDEV(Rs,{size:"s",items:nn,checkable:!0,defaultExpandAll:!0,checkedKeys:s,onTreeCheck:u=>n(u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:946,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:938,columnNumber:13},void 0),footer:()=>e.jsxDEV(fs,{position:"static",show:a>0,children:[X,l,l]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:957,columnNumber:13},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:933,columnNumber:7},void 0),e.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:965,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:932,columnNumber:5},void 0)},F={name:"Mass Actions: выбрать всё",render:()=>e.jsxDEV(un,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:972,columnNumber:17},void 0)},rn=[["Одна кнопка",l],["Две кнопки",e.jsxDEV(e.Fragment,{children:[l,l]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:981,columnNumber:5},void 0)],["«Ещё» и кнопка",e.jsxDEV(e.Fragment,{children:[X,l]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:988,columnNumber:5},void 0)],["«Ещё» и две кнопки",e.jsxDEV(e.Fragment,{children:[X,l,l]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:995,columnNumber:5},void 0)],["«Ещё», IconButton и кнопка",e.jsxDEV(e.Fragment,{children:[X,ee,l]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1003,columnNumber:5},void 0)],["Две IconButton и кнопка",e.jsxDEV(e.Fragment,{children:[ee,ee,l]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1011,columnNumber:5},void 0)]],H={name:"Mass Actions: комбинации кнопок",render:()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:rn.map(([s,n])=>e.jsxDEV("div",{children:[e.jsxDEV(fs,{position:"static",children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1031,columnNumber:11},void 0),e.jsxDEV(g,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1032,columnNumber:11},void 0)]},s,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1030,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1022,columnNumber:5},void 0)},me=(s,n)=>e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",height:220},children:e.jsxDEV(i,{width:320,showResizeable:!1,expandedContent:r({subHeader:s,body:e.jsxDEV(c,{count:3},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1049,columnNumber:17},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1044,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1043,columnNumber:5},void 0),e.jsxDEV(g,{children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1053,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1042,columnNumber:3},void 0),R={name:"Кнопки в Sub-header",render:()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:24},children:[me(s=>o({rButton:N(s,e.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1069,columnNumber:49},void 0),"accent")})(s),"Одна акцентная кнопка"),me(s=>o({lButton:N(s,e.jsxDEV(xs,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1075,columnNumber:39},void 0)),rButton:N(s,e.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1076,columnNumber:39},void 0),"accent")})(s),"Действий больше 2: «...» с выпадающим списком и главное действие")]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1060,columnNumber:5},void 0)},ce=s=>e.jsxDEV("div",{style:{display:"flex",height:240},children:[e.jsxDEV(i,{width:240,showResizeable:!1,expandedContent:r({subHeader:n=>o({rButton:N(n,e.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1093,columnNumber:49},void 0),s)})(n),body:e.jsxDEV(c,{count:2},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1094,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1088,columnNumber:5},void 0),e.jsxDEV(t,{children:e.jsxDEV(ae,{size:"s",view:"accent",text:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1098,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1097,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1087,columnNumber:3},void 0),T={name:"Пара: акцентная кнопка",render:()=>e.jsxDEV(Ss,{goodText:"На странице уже есть акцентная кнопка: в Sub-header кнопка Dark",badText:"Две акцентные кнопки на странице",good:ce("dark"),bad:ce("accent")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1106,columnNumber:5},void 0)},z={name:"Segment над поиском или под поиском",render:()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:24},children:[e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",height:260},children:e.jsxDEV(i,{width:320,showResizeable:!1,expandedContent:r({title:"Список",subHeader:s=>o({lButton:!0,rButton:!0,botSlot:e.jsxDEV(Ps,{size:s,labels:["Области","Объекты"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1138,columnNumber:28},void 0)})(s),body:e.jsxDEV(c,{count:3},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1140,columnNumber:21},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1129,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1128,columnNumber:9},void 0),e.jsxDEV(g,{children:"Поиск общий: сегменты под поиском, в Bot Slot"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1144,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1127,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",height:260},children:e.jsxDEV(i,{width:320,showResizeable:!1,expandedContent:r({title:"Список",subHeader:o({segment:!0,segmentLabels:["Области","Объекты"],lButton:!0,rButton:!0}),body:e.jsxDEV(c,{count:3},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1159,columnNumber:21},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1148,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1147,columnNumber:9},void 0),e.jsxDEV(g,{children:"Поиск раздельный: сегменты над поиском"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1163,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1146,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1120,columnNumber:5},void 0)},on=hs.slice(0,4).map((s,n)=>({label:s,value:`item_${n}`})),I={name:"Иконка дерева в свёрнутом виде",render:()=>e.jsxDEV(m,{children:[e.jsxDEV(i,{collapsed:!0,expandedContent:r(J),collapsedContent:({buttonSize:s})=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(p,{size:s,view:"secondary",children:e.jsxDEV(ps,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1186,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1185,columnNumber:13},void 0),e.jsxDEV(p,{size:s,view:"secondary",children:e.jsxDEV(_,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1189,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1188,columnNumber:13},void 0),e.jsxDEV(Fs,{items:on,portal:"document",placement:"right-start",children:e.jsxDEV(p,{size:s,view:"secondary",children:e.jsxDEV(_s,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1193,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1192,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1191,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1184,columnNumber:11},void 0),collapsedFooterContent:x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1180,columnNumber:7},void 0),e.jsxDEV(t,{children:e.jsxDEV(K,{style:{color:ne},children:"Нажмите на иконку дерева в свёрнутой панели"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1201,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1200,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/LeftPanel/LeftPanel.examples.stories.tsx",lineNumber:1179,columnNumber:5},void 0)};var fe,pe,ge;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    Collapsed: false,
    Resize: true,
    Header: true,
    SubHeader: true,
    Footer: true,
    ShowCollapse: true,
    TitleSize: 'H4',
    Text: 'Title',
    'R Badge': true,
    Description: true,
    Segment: true,
    'Search bar': true,
    'L Button': true,
    'R Button': true,
    'Bot Slot': false,
    Features: true,
    'Footer Features': true
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    Collapsed: {
      control: 'boolean',
      description: 'Свёрнутый вид'
    },
    Resize: {
      control: 'boolean',
      description: 'Полоска ресайза на правой границе'
    },
    Header: {
      control: 'boolean',
      description: 'Шапка панели'
    },
    SubHeader: {
      control: 'boolean',
      description: 'Блок под шапкой: сегмент, поиск, кнопки'
    },
    Footer: {
      control: 'boolean',
      description: 'Блок внизу панели'
    },
    ShowCollapse: {
      control: 'boolean',
      description: 'Кнопка сворачивания'
    },
    TitleSize: {
      control: 'inline-radio',
      options: ['H3', 'H4', 'H5'],
      description: 'Размер заголовка',
      if: {
        arg: 'Header',
        truthy: true
      }
    },
    Text: {
      control: 'text',
      description: 'Текст заголовка',
      if: {
        arg: 'Header',
        truthy: true
      }
    },
    'R Badge': {
      control: 'boolean',
      description: 'Бадж справа от заголовка',
      if: {
        arg: 'Header',
        truthy: true
      }
    },
    Description: {
      control: 'boolean',
      description: 'Описание под заголовком',
      if: {
        arg: 'Header',
        truthy: true
      }
    },
    Segment: {
      control: 'boolean',
      description: 'Сегмент над поиском',
      if: {
        arg: 'SubHeader',
        truthy: true
      }
    },
    'Search bar': {
      control: 'boolean',
      description: 'Строка поиска с кнопками',
      if: {
        arg: 'SubHeader',
        truthy: true
      }
    },
    'L Button': {
      control: 'boolean',
      description: 'Левая кнопка справа от поиска',
      if: {
        arg: 'Search bar',
        truthy: true
      }
    },
    'R Button': {
      control: 'boolean',
      description: 'Правая кнопка справа от поиска',
      if: {
        arg: 'Search bar',
        truthy: true
      }
    },
    'Bot Slot': {
      control: 'boolean',
      description: 'Кастомный слот под поиском',
      if: {
        arg: 'SubHeader',
        truthy: true
      }
    },
    Features: {
      control: 'boolean',
      description: 'Кнопки фич в свёрнутом виде'
    },
    'Footer Features': {
      control: 'boolean',
      description: 'Кнопки фич внизу свёрнутой панели'
    }
  },
  render: args => <PlaygroundView {...args} />
}`,...(ge=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var xe,be,Ne;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Замер в окне 1440 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <SpacingWindow />
}`,...(Ne=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var he,Pe,Le;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Замер в окне 1280 px',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <SpacingWindow />
}`,...(Le=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var ke,Ee,ve;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <div style={{
    display: 'grid',
    gap: 32
  }}>
      <ViewportFrame storyId="композиции-leftpanel-для-дизайнеров--spacing-1440" width={1440} height={540} visibleWidth={860} caption="Окно шириной 1440 px" />
      <ViewportFrame storyId="композиции-leftpanel-для-дизайнеров--spacing-1280" width={1280} height={540} visibleWidth={860} caption="Окно шириной 1280 px: свёрнутая панель 56 px, внешний отступ 16 px, кнопки и поиск XS" />
    </div>
}`,...(ve=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var De,we,Se;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Collapsed',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 24
  }}>
      <div>
        {collapsedPair(false)}
        <Caption>Collapsed = Off</Caption>
      </div>
      <div>
        {collapsedPair(true)}
        <Caption>Collapsed = On</Caption>
      </div>
    </div>
}`,...(Se=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ve,je,Ce;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Header',
  render: () => <div style={{
    display: 'flex',
    height: 200
  }}>
      {(['H3', 'H4', 'H5'] as const).map(size => <Panel key={size} width={260} showResizeable={false} expandedContent={expanded({
      title: size,
      titleSize: size,
      badge: true,
      description: true,
      body: <span />
    })} />)}
    </div>
}`,...(Ce=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var ye,Be,Ae;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Sub-header',
  render: () => <Page>
      <Panel width={360} expandedContent={expanded({
      subHeader: subHeader({
        segment: true,
        lButton: true,
        rButton: true
      })
    })} />
      <Center />
    </Page>
}`,...(Ae=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Fe,He,Re;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Body со скроллом',
  render: () => <Page>
      <Panel width={320} expandedContent={expanded({
      subHeader: subHeader({
        rButton: true
      }),
      body: <ItemsList count={16} />
    })} />
      <Center />
    </Page>
}`,...(Re=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Te,ze,Ie;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Footer',
  render: () => <Page>
      <Panel width={320} expandedContent={expanded({
      subHeader: subHeader({
        rButton: true
      }),
      body: <ItemsList count={16} />,
      footer: footerButton
    })} />
      <Center />
    </Page>
}`,...(Ie=(ze=C.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Me,_e,$e;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Свёрнутый вид',
  render: () => <Page>
      <Panel collapsed expandedContent={expanded(standard)} collapsedContent={features()} collapsedFooterContent={footerFeatures} />
      <Center />
    </Page>
}`,...($e=(_e=y.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Oe,We,Ge;B.parameters={...B.parameters,docs:{...(Oe=B.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Шаги в свёрнутом виде',
  render: () => <Page height={540}>
      <Panel collapsed expandedContent={expanded(standard)} collapsedContent={<div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
            <Steps orientation="vertical" hasContent="none" items={STEP_ITEMS} current={2} size="m" />
          </div>} />
      <Center />
    </Page>
}`,...(Ge=(We=B.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var Ue,Xe,Ye;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Ресайз',
  render: () => <ResizeView />
}`,...(Ye=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ke,qe,Je;F.parameters={...F.parameters,docs:{...(Ke=F.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Mass Actions: выбрать всё',
  render: () => <MassActionsView />
}`,...(Je=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Qe,Ze,es;H.parameters={...H.parameters,docs:{...(Qe=H.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'Mass Actions: комбинации кнопок',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: 24
  }}>
      {COMBINATIONS.map(([caption, content]) => <div key={caption}>
          <MassActionsStatic position="static">{content}</MassActionsStatic>
          <Caption>{caption}</Caption>
        </div>)}
    </div>
}`,...(es=(Ze=H.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,ns,as;R.parameters={...R.parameters,docs:{...(ss=R.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  name: 'Кнопки в Sub-header',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24
  }}>
      {buttonsPanel(size => subHeader({
      rButton: iconButton(size, <IconPlus />, 'accent')
    })(size), 'Одна акцентная кнопка')}
      {buttonsPanel(size => subHeader({
      lButton: iconButton(size, <IconDotsVerticalCenteredOutline />),
      rButton: iconButton(size, <IconPlus />, 'accent')
    })(size), 'Действий больше 2: «...» с выпадающим списком и главное действие')}
    </div>
}`,...(as=(ns=R.parameters)==null?void 0:ns.docs)==null?void 0:as.source}}};var us,is,rs;T.parameters={...T.parameters,docs:{...(us=T.parameters)==null?void 0:us.docs,source:{originalSource:`{
  name: 'Пара: акцентная кнопка',
  render: () => <DocPair goodText="На странице уже есть акцентная кнопка: в Sub-header кнопка Dark" badText="Две акцентные кнопки на странице" good={accentPage('dark')} bad={accentPage('accent')} />
}`,...(rs=(is=T.parameters)==null?void 0:is.docs)==null?void 0:rs.source}}};var os,ts,ds;z.parameters={...z.parameters,docs:{...(os=z.parameters)==null?void 0:os.docs,source:{originalSource:`{
  name: 'Segment над поиском или под поиском',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24
  }}>
      <div>
        <div style={{
        display: 'flex',
        height: 260
      }}>
          <Panel width={320} showResizeable={false} expandedContent={expanded({
          title: 'Список',
          subHeader: size => subHeader({
            lButton: true,
            rButton: true,
            botSlot: <Segment size={size} labels={['Области', 'Объекты']} />
          })(size),
          body: <ItemsList count={3} />
        })} />
        </div>
        <Caption>Поиск общий: сегменты под поиском, в Bot Slot</Caption>
      </div>
      <div>
        <div style={{
        display: 'flex',
        height: 260
      }}>
          <Panel width={320} showResizeable={false} expandedContent={expanded({
          title: 'Список',
          subHeader: subHeader({
            segment: true,
            segmentLabels: ['Области', 'Объекты'],
            lButton: true,
            rButton: true
          }),
          body: <ItemsList count={3} />
        })} />
        </div>
        <Caption>Поиск раздельный: сегменты над поиском</Caption>
      </div>
    </div>
}`,...(ds=(ts=z.parameters)==null?void 0:ts.docs)==null?void 0:ds.source}}};var ls,ms,cs;I.parameters={...I.parameters,docs:{...(ls=I.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  name: 'Иконка дерева в свёрнутом виде',
  render: () => <Page>
      <Panel collapsed expandedContent={expanded(standard)} collapsedContent={({
      buttonSize
    }: LeftPanelSlotSizesProps) => <>
            <IconButton size={buttonSize} view="secondary">
              <IconSearch />
            </IconButton>
            <IconButton size={buttonSize} view="secondary">
              <IconPlus />
            </IconButton>
            <Dropdown items={TREE_MENU} portal="document" placement="right-start">
              <IconButton size={buttonSize} view="secondary">
                <IconHierarchy />
              </IconButton>
            </Dropdown>
          </>} collapsedFooterContent={footerFeatures} />
      <Center>
        <BodyS style={{
        color: textSecondary
      }}>
          Нажмите на иконку дерева в свёрнутой панели
        </BodyS>
      </Center>
    </Page>
}`,...(cs=(ms=I.parameters)==null?void 0:ms.docs)==null?void 0:cs.source}}};const tn=["Playground","Spacing1440","Spacing1280","SpacingLive","Collapsed","Header","SubHeader","BodyScroll","Footer","CollapsedView","CollapsedSteps","Resize","MassActionsSelectAll","MassActionsButtons","SubHeaderButtons","PairAccent","SegmentPlacement","TreeCollapsed"],En=Object.freeze(Object.defineProperty({__proto__:null,BodyScroll:j,Collapsed:w,CollapsedSteps:B,CollapsedView:y,Footer:C,Header:S,MassActionsButtons:H,MassActionsSelectAll:F,PairAccent:T,Playground:k,Resize:A,SegmentPlacement:z,Spacing1280:v,Spacing1440:E,SpacingLive:D,SubHeader:V,SubHeaderButtons:R,TreeCollapsed:I,__namedExportsOrder:tn,default:Ws},Symbol.toStringTag,{value:"Module"}));export{j as B,w as C,En as E,C as F,S as H,F as M,k as P,A as R,D as S,I as T,V as a,y as b,B as c,H as d,T as e,R as f,z as g};
