import{r as o,d as e}from"./react-D2T61mpp.js";import{i as R}from"./subRows.routes-DFB3f0R6.js";import{s as ee}from"./storySourceDoc-tVKyHcEN.js";import{A as b}from"./AnalyticalWidget-6MgVuQ7m.js";import{G as C}from"./GridDND-DwJTLNzR.js";import{S as W}from"./FiltersActions-Q-16UinG.js";import{u as L}from"./ListOfFilters-6MWU5yra.js";import{f as B,D as z,u as k,l as I,b as _,a as O}from"./utils-Dz_DkKM2.js";import{v as ie,u as se,F as V,a6 as Y,O as Z,b as N}from"./@salutejs/sdds-finai-CPdoK_07.js";import{c6 as F}from"./vendor-B0ELcGbr.js";const te=(s,l=200)=>{let n;return(...t)=>{clearTimeout(n),n=setTimeout(()=>{s(...t)},l)}},T=({id:s,onRemove:l})=>{const[n,t]=o.useReducer(B,z),d=k("blocks",10),c=k("tribes",15),h=k("allocation",10),v=Array(3).fill(0),x=Array(6).fill(0),[y,p]=o.useState(0),{filterList:a,filterListOpened:u}=L({filters:n,options:{blocks:d,tribes:c,allocation:h,filterButton:O,dotsButton:_},updateFilters:(D,m)=>t({[D]:m}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),f=a.map((D,m)=>"groupLabel"in D?D.items.map((w,i)=>({text:String(w.label),view:"default",hasClear:!1,onClick:w.onClick,key:`chip-key${m}-${i}-${w.label}`})):{text:String(D.label),view:"default",hasClear:!1,onClick:D.onClick,key:`chip-key${m}-${D.label}`}).flat();return e.jsxDEV(F,{children:e.jsxDEV(b,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:"l",headerSlot:e.jsxDEV(b.Header,{title:`Заголовок S${s.toString().split("").reverse().slice(0,3).join("")}`,badge:`S${s.toString().split("").reverse().slice(0,2).join("")}`,subtitle:"Подзаголовок",href:"/",rightSlot:e.jsxDEV(V,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(Y,{hasBackground:!0,size:"xs",children:v.map((D,m)=>e.jsxDEV(Z,{value:`item_${m}`,label:`Label${m+1}`,size:"xs",view:"secondary"},`item:${m}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:110,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:108,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:101,columnNumber:15},void 0),infoTooltipText:"Info"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:90,columnNumber:11},void 0),topSlot:f.length>0&&e.jsxDEV(V,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(b.Chips,{opened:u,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:128,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:127,columnNumber:13},void 0),middleSlot:e.jsxDEV(ie,{view:"divider",orientation:"horizontal",size:"xs",children:x.map((D,m)=>e.jsxDEV(se,{view:"divider",orientation:"horizontal",size:"xs",selected:m===y,tabIndex:0,onClick:()=>p(m),children:`Tab ${m+1}`},m,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:141,columnNumber:15},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:139,columnNumber:11},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:I()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:157,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:82,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetL.tsx",lineNumber:81,columnNumber:5},void 0)};try{T.displayName="WidgetL",T.__docgenInfo={description:"",displayName:"WidgetL",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const A=({id:s,onRemove:l})=>{const[n,t]=o.useReducer(B,z),d=k("blocks",10),c=k("tribes",15),h=k("allocation",10),v=Array(3).fill(0),{filterList:x,filterListOpened:y}=L({filters:n,options:{blocks:d,tribes:c,allocation:h,filterButton:O,dotsButton:_},updateFilters:(a,u)=>t({[a]:u}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),p=x.map((a,u)=>"groupLabel"in a?a.items.map((f,D)=>({text:String(f.label),view:"default",hasClear:!1,onClick:f.onClick,key:`chip-key${u}-${D}-${f.label}`})):{text:String(a.label),view:"default",hasClear:!1,onClick:a.onClick,key:`chip-key-${u}-${a.label}`}).flat();return e.jsxDEV(F,{defaultSelected:["item_0"],children:e.jsxDEV(b,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:"m",headerSlot:e.jsxDEV(b.Header,{title:`Заголовок S${s.toString().split("").reverse().slice(0,3).join("")}`,badge:`S${s.toString().split("").reverse().slice(0,2).join("")}`,subtitle:"Подзаголовок",rightSlot:e.jsxDEV(V,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(Y,{hasBackground:!0,size:"xs",children:v.map((a,u)=>e.jsxDEV(Z,{value:`item_${u}`,label:`Label${u+1}`,size:"xs",view:"secondary"},`item:${u}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:106,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:104,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:97,columnNumber:15},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:87,columnNumber:11},void 0),topSlot:p.length>0&&e.jsxDEV(V,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(b.Chips,{opened:y,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:124,columnNumber:13},void 0),contentSlot:e.jsxDEV("div",{style:{height:"fit-content"},children:I()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:136,columnNumber:11},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:79,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetM.tsx",lineNumber:78,columnNumber:5},void 0)};try{A.displayName="WidgetM",A.__docgenInfo={description:"",displayName:"WidgetM",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const j=({id:s,onRemove:l})=>{const[n,t]=o.useReducer(B,z),d=k("blocks",10),c=k("tribes",15),h=k("allocation",10),{filterList:v,filterListOpened:x}=L({filters:n,options:{blocks:d,tribes:c,allocation:h,filterButton:O,dotsButton:_},updateFilters:(p,a)=>t({[p]:a}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),y=v.map((p,a)=>"groupLabel"in p?p.items.map((u,f)=>({text:String(u.label),view:"default",hasClear:!1,onClick:u.onClick,key:`chip-key${a}-${f}-${u.label}`})):{text:String(p.label),view:"default",hasClear:!1,onClick:p.onClick,key:`chip-key-${a}-${p.label}`}).flat();return e.jsxDEV(F,{defaultSelected:["item_0"],children:e.jsxDEV(b,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:"s",headerSlot:e.jsxDEV(b.Header,{title:`Заголовок S${s.toString().split("").reverse().slice(0,2).join("")}`,badge:`S${s.toString().split("").reverse().slice(0,2).join("")}`,subtitle:"Подзаголовок",infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetS.tsx",lineNumber:82,columnNumber:11},void 0),topSlot:y.length>0&&e.jsxDEV(V,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(b.Chips,{opened:x,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetS.tsx",lineNumber:98,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetS.tsx",lineNumber:97,columnNumber:13},void 0),contentSlot:e.jsxDEV("div",{style:{height:"fit-content"},children:I()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetS.tsx",lineNumber:109,columnNumber:11},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetS.tsx",lineNumber:74,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/components/WidgetS.tsx",lineNumber:73,columnNumber:5},void 0)};try{j.displayName="WidgetS",j.__docgenInfo={description:"",displayName:"WidgetS",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const re={title:"Локальные компоненты/GridDND",component:C,tags:["!autodocs"],parameters:{layout:"fullscreen",msw:{handlers:[...R.handlers]}}},oe=`
import { GridDND } from '@daisforge/ui';

`,G={name:"Задержка активации D&D (dragActivationDelay)",render(){const s=o.useRef(null),[l]=o.useState([{id:"w1",type:"m"},{id:"w2",type:"s"},{id:"w3",type:"s"},{id:"w4",type:"m"},{id:"w5",type:"s"}]),n=o.useCallback((t,d)=>e.jsxDEV(C.ItemWrapper,{item:t,children:[t.type==="s"&&e.jsxDEV(j,{id:t.id,onRemove:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:56,columnNumber:33},this),t.type==="m"&&e.jsxDEV(A,{id:t.id,onRemove:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:57,columnNumber:33},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:55,columnNumber:9},this),[]);return e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{marginBottom:12,color:"#666",fontSize:14},children:"Зажмите карточку на 500мс для активации перетаскивания. Обводка появится только у зажатой карточки."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:65,columnNumber:9},this),e.jsxDEV("div",{style:{width:1200,background:"lightGray"},children:e.jsxDEV(C,{ref:s,items:l,isDraggable:!0,dragActivationDelay:500,compactType:"horizontal",children:n,onLayoutChange:(t,d,c)=>{console.debug("Layout changed:",t,c)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:70,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:69,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:64,columnNumber:7},this)}},S={name:"GridDND Classic",...ee({preCode:oe}),render(){const s=o.useRef(null),[l,n]=o.useState([]),[t,d]=o.useState(1660),[c,h]=o.useState(!0),[v,x]=o.useState(!0),[y,p]=o.useState(!0),[a,u]=o.useState("horizontal"),f=o.useCallback((i,r)=>e.jsxDEV(C.ItemWrapper,{item:i,actionsSlot:e.jsxDEV(b.DotsIconButton,{size:"xs",iconSize:"xs",dropdownProps:{items:[{label:"Удалить",value:"Удалить"}],onItemSelect(g){var $;(($=g.value)==null?void 0:$.toString().toLowerCase())==="удалить"&&r()}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:109,columnNumber:13},this),children:[i.type==="s"&&e.jsxDEV(j,{id:i.id,onRemove:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:122,columnNumber:33},this),i.type==="m"&&e.jsxDEV(A,{id:i.id,onRemove:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:123,columnNumber:33},this),i.type==="l"&&e.jsxDEV(T,{id:i.id,onRemove:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:124,columnNumber:33},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:106,columnNumber:9},this),[]),D=()=>{var r,g;const i=((r=s.current)==null?void 0:r.api.getOrder())||[];(g=s.current)==null||g.api.setOrder([...i].reverse())},m=o.useCallback(async i=>{try{console.log("💾 Saving items to server:",i),await fetch(R.ENDPOINTS.PUT_ITEMS,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:i})}),console.log("✅ Items saved successfully")}catch(r){console.error("❌ Failed to save items:",r)}},[]),w=o.useCallback(te(i=>{m(i)},800),[m]);return o.useEffect(()=>{(async()=>{try{const g=await(await fetch(R.ENDPOINTS.GET_ITEMS)).json();n(g.items)}catch(r){console.error("Failed to fetch items:",r)}finally{x(!1)}})()},[]),v?e.jsxDEV("div",{children:"Loading..."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:176,columnNumber:14},this):e.jsxDEV("div",{children:[e.jsxDEV("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:12},children:[e.jsxDEV("span",{children:["Width: ",t,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:189,columnNumber:11},this),e.jsxDEV("input",{type:"range",min:600,max:1890,step:10,value:t,onChange:i=>d(+i.target.value)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:190,columnNumber:11},this),e.jsxDEV(W,{onChange:i=>h(i.target.checked),label:"Activate DND",checked:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:198,columnNumber:11},this),e.jsxDEV(W,{onChange:i=>p(i.target.checked),label:"Activate Smart Compact",checked:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:203,columnNumber:11},this),e.jsxDEV(W,{onChange:i=>u(i.target.checked?"vertical":null),label:"Activate Compact Type Vertical",checked:a==="vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:208,columnNumber:11},this),e.jsxDEV(W,{onChange:i=>u(i.target.checked?"horizontal":null),label:"Activate Compact Type Horizontal",checked:a==="horizontal"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:215,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:181,columnNumber:9},this),e.jsxDEV("div",{style:{marginBottom:"30px",display:"flex",gap:"8px"},children:[e.jsxDEV(N,{onClick:()=>{var i;console.debug((i=s.current)==null?void 0:i.api.getOrderDetailed())},children:"Get Order Detail"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:230,columnNumber:11},this),e.jsxDEV(N,{onClick:()=>{var i;return console.debug("Current layout:",(i=s.current)==null?void 0:i.api.getOrder())},children:"Get Order"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:237,columnNumber:11},this),e.jsxDEV(N,{onClick:()=>{var i;return console.debug("Current template area:",(i=s.current)==null?void 0:i.api.getCurrentLayout())},children:"Get Current Layout"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:244,columnNumber:11},this),e.jsxDEV(N,{onClick:()=>{var i;return console.debug("All template areas:",(i=s.current)==null?void 0:i.api.getAllLayouts())},children:"Get All Layouts"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:254,columnNumber:11},this),e.jsxDEV(N,{onClick:()=>{var g;const i=prompt("Enter id"),r=prompt("Enter type (s, m, l)");!i||!r||!s.current||r!=="s"&&r!=="m"&&r!=="l"||(g=s.current)==null||g.api.addItem({id:i,type:r})},children:"+ Add widget"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:264,columnNumber:11},this),e.jsxDEV(N,{onClick:()=>D(),children:"Reorder"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:283,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:223,columnNumber:9},this),e.jsxDEV("div",{style:{width:t,background:"lightGray"},children:e.jsxDEV(C,{ref:s,items:l,compactType:"horizontal",smartCompact:y,children:f,onItemsChange:i=>console.debug("📦 Template Items changed:",i),onLayoutChange:(i,r,g)=>{console.group("📐 Template Layout changed:"),console.debug("Layout:",i),console.debug("All areas:",r),console.debug("Meta:",g),g.itemsOrderTyped&&(console.debug("🔄 Items order changed, saving..."),w(g.itemsOrderTyped)),console.groupEnd()},onBreakpointChange:(i,r)=>{console.group("📱 Template Breakpoint changed:"),console.debug("Breakpoint:",i),console.debug("Layout:",r),console.groupEnd()},isDraggable:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:287,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:286,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:180,columnNumber:7},this)}},ne=({id:s,type:l,onResize:n,onRemove:t})=>{const[d,c]=o.useState(0);return e.jsxDEV(b,{$css:{height:"100%",maxWidth:"unset !important",width:"100% !important"},size:l,headerSlot:e.jsxDEV(b.Header,{title:`Виджет ${s}`,badge:l.toUpperCase(),subtitle:"Самоизменяемый размер",infoTooltipText:"Кнопки внутри меняют type через onResize",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:343,columnNumber:9},void 0),contentSlot:e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12,height:"fit-content"},children:[e.jsxDEV("div",{className:"grid-dnd__no-drag",style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsxDEV(N,{size:"xs",onClick:()=>c(h=>h+1),children:["Counter: ",d]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:364,columnNumber:13},void 0),e.jsxDEV(N,{size:"xs",view:"secondary",disabled:l==="s",onClick:()=>n("s"),children:"→ S"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:367,columnNumber:13},void 0),e.jsxDEV(N,{size:"xs",view:"secondary",disabled:l==="m",onClick:()=>n("m"),children:"→ M"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:375,columnNumber:13},void 0),e.jsxDEV(N,{size:"xs",view:"secondary",disabled:l==="l",onClick:()=>n("l"),children:"→ L"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:383,columnNumber:13},void 0),e.jsxDEV(N,{size:"xs",view:"negative",onClick:t,children:"Remove"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:391,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:360,columnNumber:11},void 0),e.jsxDEV("div",{children:I()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:395,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:352,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:335,columnNumber:5},void 0)},E={name:"Самоизменение типа виджета (через onResize)",render(){const s=o.useRef(null),[l]=o.useState([{id:"w1",type:"s"},{id:"w2",type:"s"},{id:"w3",type:"m"},{id:"w4",type:"s"},{id:"w5",type:"s"},{id:"w6",type:"s"}]),n=o.useCallback((t,d,c)=>e.jsxDEV(C.ItemWrapper,{item:t,children:e.jsxDEV(ne,{id:t.id,type:t.type,onResize:c,onRemove:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:422,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:421,columnNumber:9},this),[]);return e.jsxDEV("div",{style:{padding:12},children:[e.jsxDEV("div",{style:{marginBottom:12,color:"#444",fontSize:13},children:["Зажми карточку на 500мс — активируется D&D. Кнопки «→ S/M/L» внутри виджета вызывают ",e.jsxDEV("code",{children:"onResize(type)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:437,columnNumber:28},this)," (3-й аргумент render-prop, пре-каррирован к ",e.jsxDEV("code",{children:"cfg.id"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:438,columnNumber:41},this),"). GridDND через",e.jsxDEV("code",{children:" api.setItemType "},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:439,columnNumber:11},this)," меняет размер и делает reflow. Счётчик не сбрасывается — React-инстансы не размонтируются."]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:435,columnNumber:9},this),e.jsxDEV("div",{style:{width:1200,background:"lightGray"},children:e.jsxDEV(C,{ref:s,items:l,isDraggable:!0,dragActivationDelay:500,compactType:"horizontal",children:n,onItemsChange:t=>console.debug("📦 items",t),onLayoutChange:(t,d,c)=>console.debug("📐 layout",t,c)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:443,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:442,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/GridDND/GridDND.stories.tsx",lineNumber:434,columnNumber:7},this)}};var M,P,H;G.parameters={...G.parameters,docs:{...(M=G.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Задержка активации D&D (dragActivationDelay)',
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items] = useState<GridDNDItems[]>([{
      id: 'w1',
      type: 'm'
    }, {
      id: 'w2',
      type: 's'
    }, {
      id: 'w3',
      type: 's'
    }, {
      id: 'w4',
      type: 'm'
    }, {
      id: 'w5',
      type: 's'
    }]);
    const renderItem = useCallback((item: GridDNDItemConfig, onRemove: () => void) => <GridDND.ItemWrapper item={item}>
          {item.type === 's' && <WidgetS id={item.id} onRemove={onRemove} />}
          {item.type === 'm' && <WidgetM id={item.id} onRemove={onRemove} />}
        </GridDND.ItemWrapper>, []);
    return <div>
        <div style={{
        marginBottom: 12,
        color: '#666',
        fontSize: 14
      }}>
          Зажмите карточку на 500мс для активации перетаскивания. Обводка
          появится только у зажатой карточки.
        </div>
        <div style={{
        width: 1200,
        background: 'lightGray'
      }}>
          <GridDND ref={gridRef} items={items} isDraggable dragActivationDelay={500} compactType="horizontal"
        // eslint-disable-next-line react/no-children-prop
        children={renderItem} onLayoutChange={(layout, _allAreas, meta) => {
          console.debug('Layout changed:', layout, meta);
        }} />
        </div>
      </div>;
  }
}`,...(H=(P=G.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var q,U,J;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'GridDND Classic',
  ...storySourceDoc({
    preCode
  }),
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items, setItems] = useState<GridDNDItems[]>([]);
    const [width, setWidth] = useState(1660);
    const [drag, setDrag] = useState(true);
    const [loading, setLoading] = useState(true);
    const [smartCompact, setSmartCompact] = useState(true);
    const [compactType, setCompactType] = useState<'vertical' | 'horizontal' | null>('horizontal');
    const renderItem = useCallback((item: GridDNDItemConfig, onRemove: () => void) => <GridDND.ItemWrapper item={item} actionsSlot={<AnalyticalWidget.DotsIconButton size="xs" iconSize="xs" dropdownProps={{
      items: [{
        label: 'Удалить',
        value: 'Удалить'
      }],
      onItemSelect(m) {
        if (m.value?.toString().toLowerCase() === 'удалить') onRemove();
      }
    }} />}>
          {item.type === 's' && <WidgetS id={item.id} onRemove={onRemove} />}
          {item.type === 'm' && <WidgetM id={item.id} onRemove={onRemove} />}
          {item.type === 'l' && <WidgetL id={item.id} onRemove={onRemove} />}
        </GridDND.ItemWrapper>, []);
    const handleReorder = () => {
      const currentOrder = gridRef.current?.api.getOrder() || [];
      // Перевернуть порядок
      gridRef.current?.api.setOrder([...currentOrder].reverse());
    };
    const saveItems = useCallback(async (newItems: GridDNDItems[]) => {
      try {
        console.log('💾 Saving items to server:', newItems);
        await fetch(gridDndRoutes.ENDPOINTS.PUT_ITEMS, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: newItems
          })
        });
        console.log('✅ Items saved successfully');
      } catch (error) {
        console.error('❌ Failed to save items:', error);
      }
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSave = useCallback(debounce((newItems: GridDNDItems[]) => {
      saveItems(newItems);
    }, 800), [saveItems]);

    // Загрузка initial items с сервера
    useEffect(() => {
      const fetchInitialItems = async () => {
        try {
          const response = await fetch(gridDndRoutes.ENDPOINTS.GET_ITEMS);
          const data = await response.json();
          setItems(data.items);
        } catch (error) {
          console.error('Failed to fetch items:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchInitialItems();
    }, []);
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12
      }}>
          <span>Width: {width}px</span>
          <input type="range" min={600} max={1890} step={10} value={width} onChange={e => setWidth(+e.target.value)} />
          <Switch onChange={e => setDrag(e.target.checked)} label="Activate DND" checked={drag} />
          <Switch onChange={e => setSmartCompact(e.target.checked)} label="Activate Smart Compact" checked={smartCompact} />
          <Switch onChange={e => setCompactType(e.target.checked ? 'vertical' : null)} label="Activate Compact Type Vertical" checked={compactType === 'vertical'} />
          <Switch onChange={e => setCompactType(e.target.checked ? 'horizontal' : null)} label="Activate Compact Type Horizontal" checked={compactType === 'horizontal'} />
        </div>
        <div style={{
        marginBottom: '30px',
        display: 'flex',
        gap: '8px'
      }}>
          <Button onClick={() => {
          console.debug(gridRef.current?.api.getOrderDetailed());
        }}>
            Get Order Detail
          </Button>
          <Button onClick={() => console.debug('Current layout:', gridRef.current?.api.getOrder())}>
            Get Order
          </Button>
          <Button onClick={() => console.debug('Current template area:', gridRef.current?.api.getCurrentLayout())}>
            Get Current Layout
          </Button>
          <Button onClick={() => console.debug('All template areas:', gridRef.current?.api.getAllLayouts())}>
            Get All Layouts
          </Button>
          <Button onClick={() => {
          const id = prompt('Enter id');
          const type = prompt('Enter type (s, m, l)');
          if (!id || !type || !gridRef.current || type !== 's' && type !== 'm' && type !== 'l') return;
          gridRef.current?.api.addItem({
            id,
            type
          });
        }}>
            + Add widget
          </Button>
          <Button onClick={() => handleReorder()}>Reorder</Button>
        </div>

        <div style={{
        width,
        background: 'lightGray'
      }}>
          <GridDND ref={gridRef} items={items} compactType="horizontal" smartCompact={smartCompact}
        // eslint-disable-next-line react/no-children-prop
        children={renderItem} onItemsChange={items => console.debug('📦 Template Items changed:', items)} onLayoutChange={(layout, allAreas, meta) => {
          console.group('📐 Template Layout changed:');
          console.debug('Layout:', layout);
          console.debug('All areas:', allAreas);
          console.debug('Meta:', meta);
          if (meta.itemsOrderTyped) {
            console.debug('🔄 Items order changed, saving...');
            debouncedSave(meta.itemsOrderTyped);
          }
          console.groupEnd();
        }} onBreakpointChange={(breakpoint: string, layout: unknown) => {
          console.group('📱 Template Breakpoint changed:');
          console.debug('Breakpoint:', breakpoint);
          console.debug('Layout:', layout);
          console.groupEnd();
        }} isDraggable={drag} />
        </div>
      </div>;
  }
}`,...(J=(U=S.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Самоизменение типа виджета (через onResize)',
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items] = useState<GridDNDItems[]>([{
      id: 'w1',
      type: 's'
    }, {
      id: 'w2',
      type: 's'
    }, {
      id: 'w3',
      type: 'm'
    }, {
      id: 'w4',
      type: 's'
    }, {
      id: 'w5',
      type: 's'
    }, {
      id: 'w6',
      type: 's'
    }]);
    const renderItem = useCallback((item: GridDNDItemConfig, onRemove: () => void, onResize: (type: 's' | 'm' | 'l') => void) => <GridDND.ItemWrapper item={item}>
          <ResizableAnalyticalWidget id={item.id} type={item.type} onResize={onResize} onRemove={onRemove} />
        </GridDND.ItemWrapper>, []);
    return <div style={{
      padding: 12
    }}>
        <div style={{
        marginBottom: 12,
        color: '#444',
        fontSize: 13
      }}>
          Зажми карточку на 500мс — активируется D&D. Кнопки «→ S/M/L» внутри
          виджета вызывают <code>onResize(type)</code> (3-й аргумент
          render-prop, пре-каррирован к <code>cfg.id</code>). GridDND через
          <code> api.setItemType </code> меняет размер и делает reflow. Счётчик
          не сбрасывается — React-инстансы не размонтируются.
        </div>
        <div style={{
        width: 1200,
        background: 'lightGray'
      }}>
          <GridDND ref={gridRef} items={items} isDraggable dragActivationDelay={500} compactType="horizontal"
        // eslint-disable-next-line react/no-children-prop
        children={renderItem} onItemsChange={next => console.debug('📦 items', next)} onLayoutChange={(layout, _all, meta) => console.debug('📐 layout', layout, meta)} />
        </div>
      </div>;
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ae=["DragDelay","GridDNDClassic","SelfResize"],fe=Object.freeze(Object.defineProperty({__proto__:null,DragDelay:G,GridDNDClassic:S,SelfResize:E,__namedExportsOrder:ae,default:re},Symbol.toStringTag,{value:"Module"}));export{fe as G};
