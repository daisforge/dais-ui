import{j as u,r as o}from"./react-CAOzMBF_.js";import{g as $}from"./getFuncAsString-DnrLf2YT.js";import{s as X}from"./storySourceDoc-tVKyHcEN.js";import{ck as h4,co as k4,cp as N,cq as v,cr as O4}from"./vendor-DmWczWMC.js";import{S as g}from"./Table-BQHrw1K6.js";import{u as E4}from"./ListOfFilters-CMjwWdxj.js";import{a as S4}from"./TextField-DpKf-85P.js";import{b as r,u as P4}from"./FiltersActions-BWfcXHB3.js";import{c as T4}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as R4}from"./styled-components-DCFsnh-i.js";import{u as M4}from"./utils-EIxGvR70.js";import{a8 as v4,t as L,m as W,I as j4,f as L4}from"./@salutejs/sdds-finai-CKhMjg07.js";import{s$ as V4}from"./@salutejs/plasma-icons-Do5ggeDI.js";const _4={title:"Композиции/FiltersActions",component:r,parameters:{docs:{toc:!0}},tags:["!autodocs"]},g4=(e,n)=>({...e,...n}),A4={searchedV:"",switcher:!1,blocks:[],tribes:[],allocation:"",brics:[]},z4={searchedV:"Поиск",blocks:"Блок",tribes:"Трайб",allocation:"Аллокация",switcher:"Switcher filter",brics:"Брикс"},I=(e,n=10)=>o.useMemo(()=>Array(n).fill(0).map((a,l)=>({label:`${z4[e]} ${l+1}`,value:l.toString()})),[e,n]),p={width:"168px",style:{flexShrink:0}},x={width:"auto",style:{minWidth:"168px",maxWidth:"700px",flex:1}},W4=R4.div({backgroundColor:"pink",borderRadius:T4,minHeight:400,padding:16,marginTop:16});function H4(){const[e,n]=o.useState([]),[a,l]=o.useState([]),[m,c]=o.useState(!1),F=o.useRef(null),B=[{label:"Блок 1",value:"1"},{label:"Блок 2",value:"2"},{label:"Блок 3",value:"3"}],b=[{label:"Трайб 1",value:"1"},{label:"Трайб 2",value:"2"},{label:"Трайб 3",value:"3"}],E=e.length>0||a.length>0;return u.jsx(r,{mainBlock:u.jsx(r.FiltersButtonWithPopover,{popoverProps:{ref:F},state:[m,c],title:"Фильтры",subtitle:"Кастомный таргет через renderTarget",redSquare:E,renderTarget:({onClick:C,isOpen:f,isRedDotVisible:D,RedDot:y})=>u.jsxs(j4,{onClick:C,size:"s",view:f?"accent":"secondary",style:{position:"relative"},children:[u.jsx(V4,{size:"s"}),u.jsx(y,{visible:D})]}),content:u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{width:"100%"},children:[u.jsx(W,{style:{marginBottom:"8px"},children:"Блок"}),u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:"Блок",value:e,onChange:n,items:B,listMaxHeight:"350px",portal:F,zIndex:"9001"})})]}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx(W,{style:{marginBottom:"8px"},children:"Трайб"}),u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:"Трайб",value:a,onChange:l,items:b,listMaxHeight:"350px",portal:F,zIndex:"9001"})})]})]})})})}function C4(){var m;const e=O4(),n=e==null?void 0:e.selectedSegmentItems[0],a=[{id:"item_0",bg:"pink",content:"Контент сегмента 1"},{id:"item_1",bg:"brown",content:"Контент сегмента 2"},{id:"item_2",bg:"darkgrey",content:"Контент сегмента 3"}],l=a.find(c=>c.id===n)||a[0];return u.jsxs(W4,{style:{backgroundColor:l?l.bg:"white"},children:[u.jsxs(L4,{children:["Segment ",(m=l==null?void 0:l.id)==null?void 0:m.split("_")[1]," "]}),u.jsx("p",{children:l==null?void 0:l.content})]})}const S={name:"FiltersActions с адаптивностью",...X({previewSource:"shown",preCode:`
    import {
      IconChevronLeft,
      IconChevronRight,
      Avatar,
      SplitView,
      backgroundPrimary,
      Badge,
      Button,
      ColumnConfig,
      Flow,
      H2,
      IconButton,
      s,
      Table,
      Widget,
      useDebouncedValue
    } from '@daisforge/ui';
    import React, { useMemo, useState } from 'react';

    type Filters = {
      searchedV: string;
      switcher: boolean;
      blocks: string[];
      tribes: string[];
      allocation: string;
      brics: string[];
    };

    const filtersReducer = (
      state: Filters,
      newState: Partial<Filters>
    ): Filters => ({
      ...state,
      ...newState,
    });

    const DEFAULT_FILTERS: Filters = {
      searchedV: '',
      switcher: false,
      blocks: [],
      tribes: [],
      allocation: '',
      brics: [],
    };

    const LABELS: { [key in keyof Filters]: string } = {
      searchedV: 'Поиск',
      blocks: 'Блок',
      tribes: 'Трайб',
      allocation: 'Аллокация',
      switcher: 'Switcher filter',
      brics: 'Брикс',
    };


    const COMBOBOX_MODIFICATION = {
      width: '168px',
      style: {
        flexShrink: 0, // Чтобы блок combobox не сжимался
      },
    };

    const SEARCH_MODIFICATION = {
      width: 'auto',
      style: {
        minWidth: '168px',
        maxWidth: '700px',
        flex: 1,
      },
    };

    const SegmentContentStyled = styled.div({
      backgroundColor: 'pink',
      borderRadius: borderRadiusS,
      minHeight: 400,
      padding: 16,
      marginTop: 16,
    });

    ${$("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","SegmentContentWrapper")}


        `}),render:()=>{const[e,n]=o.useReducer(g4,A4),[a,l]=o.useState({containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0}),m=o.useState(!1),[c,F]=o.useState(""),B=M4(c,300),b=o.useRef(null),E=I("blocks",10),C=I("tribes",10),f=I("allocation",10),D=I("brics",10),y=o.useCallback(t=>{l(t)},[l]),{filterList:w,filterListOpened:V,clearAll:M}=E4({filters:e,options:{blocks:E,tribes:C,allocation:f,brics:D},updateFilters:(t,i)=>n({[t]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},switcher:{label:"Чекбокс",clearedValue:!1},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},brics:{label:"Брикс",clearedValue:[]}},order:["switcher"]}),s=o.useMemo(()=>[{id:"segments",element:u.jsx(v4,{hasBackground:!0,size:"xs",style:{marginRight:"8px"},children:Array(3).fill(0).map((t,i)=>u.jsx(r.SegmentItem,{value:`item_${i}`,label:`Сегмент${i+1}`},`item:${i}`))})},{id:"search",element:u.jsx(S4,{value:e.searchedV,onChange:t=>n({searchedV:t.target.value}),autoComplete:"off",style:{marginRight:"8px"}})},{id:"switcher",element:u.jsx(r.SwitcherFilter,{checked:e.switcher,label:"Активные",onChange:t=>n({switcher:t.target.checked})}),metadata:{labelForSearchingInPopover:"switcher"}},{id:"blocks",element:u.jsx(r.TooltipList,{groupLabel:"Блок",fullWidth:!0,items:e.blocks.map(t=>{const i=E.find(h=>h.value===t);return i==null?void 0:i.label}).filter(t=>!!t),trigger:e.blocks.length>0?"hover":"none",mouseEnterDelay:750,frame:b,children:u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:e.blocks,onChange:t=>n({blocks:t}),items:E,listMaxHeight:"350px",portal:b,zIndex:"9001"})})}),metadata:{labelInPopoverFilter:"Blocks",labelForSearchingInPopover:"blocks"}},{id:"tribes",element:u.jsx(r.TooltipList,{groupLabel:"Трайб",fullWidth:!0,items:e.tribes.map(t=>{const i=C.find(h=>h.value===t);return i==null?void 0:i.label}).filter(t=>!!t),trigger:e.tribes.length>0?"hover":"none",mouseEnterDelay:750,frame:b,children:u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:e.tribes,onChange:t=>n({tribes:t}),items:C,listMaxHeight:"350px",portal:b,zIndex:"9001"})})}),metadata:{labelInPopoverFilter:"Tribes",labelForSearchingInPopover:"tribes"}},{id:"allocation",element:u.jsx(g,{placeholder:"Placeholder",size:"s",value:e.allocation,onChange:t=>n({allocation:t}),items:f,listMaxHeight:"350px",portal:b,zIndex:"9001"}),metadata:{labelInPopoverFilter:"Allocation",labelForSearchingInPopover:"allocation"}},{id:"brics",element:u.jsx(r.TooltipList,{groupLabel:"Брикс",fullWidth:!0,items:e.brics.map(t=>{const i=D.find(h=>h.value===t);return i==null?void 0:i.label}).filter(t=>!!t),trigger:e.brics.length>0?"hover":"none",mouseEnterDelay:750,frame:b,children:u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:e.brics,onChange:t=>n({brics:t}),items:D,listMaxHeight:"350px",portal:b,zIndex:"9001"})})}),metadata:{labelInPopoverFilter:"Brics",labelForSearchingInPopover:"brics"}},{id:"resetButton",element:u.jsx(r.ResetAllFiltersButton,{isVisible:w.length>0,onClick:M,disabled:w.length===0})}],[e.searchedV,e.switcher,e.blocks,e.tribes,e.allocation,e.brics,D,E,C,f,w.length,M]),d=o.useMemo(()=>({1754:{visible:["segments","search","switcher","blocks","tribes","allocation","resetButton"],inOverlay:["brics"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1578:{visible:["segments","search","switcher","blocks","tribes","resetButton"],inOverlay:["brics","allocation"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1486:{visible:["segments","search","switcher","blocks","resetButton"],inOverlay:["tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1260:{visible:["segments","search","switcher","resetButton"],inOverlay:["blocks","tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1068:{visible:["segments","search","resetButton"],inOverlay:["switcher","blocks","tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},960:{visible:["segments","search"],inOverlay:["switcher","blocks","allocation","tribes","brics"],hidden:["resetButton"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!0}},0:{visible:["segments","search"],inOverlay:["switcher","blocks","tribes","allocation","brics"],hidden:["resetButton"],modifications:{segments:{width:"auto"},search:x,blocks:p,tribes:p,allocation:p},customActions:{secondaryButtonVisible:!1,resetInPopoverFooter:!0}}}),[]),{visibleItems:A,overlayItems:k,modifications:f4,customActions:Q,hiddenItems:D4,getItemStyle:I4,hasActiveFilters:x4}=P4({items:s,width:a.availableMainBlockWidth,breakpoints:d}),H=x4(k,e),O=Q.secondaryButtonVisible??!0,j=Q.resetInPopoverFooter??!1,_=j?D4.find(t=>t.id==="resetButton"):A.find(t=>t.id==="resetButton"),y4=A.filter(t=>t.id!=="resetButton"),q=o.useMemo(()=>{if(!B.trim())return k;const t=B.toLowerCase();return k.filter(i=>{var h,G,J;return(J=(G=(h=i==null?void 0:i.metadata)==null?void 0:h.labelForSearchingInPopover)==null?void 0:G.toLowerCase())==null?void 0:J.includes(t)})},[k,B]),U=o.useMemo(()=>{const t=[{value:"action1",label:"Действие 1"},{value:"action2",label:"Действие 2"}];return O||t.push({value:"secondary",label:"Согласовать (второстепенное)"}),t},[O]),w4=o.useCallback(()=>u.jsxs(u.Fragment,{children:[u.jsx(r.DotsIconButton,{dropdownProps:{items:U},iconOrientation:"vertical"}),O&&u.jsx(L,{size:"s",view:"secondary",children:"Согласовать"}),u.jsx(L,{size:"s",view:"accent",children:"Создать"})]}),[O,U]);return u.jsxs(h4,{defaultSelected:["item_0"],children:[u.jsxs("div",{style:{marginBottom:16,padding:12,backgroundColor:"#f0f0f0",borderRadius:8,fontFamily:"monospace",fontSize:"12px",minHeight:"146px"},children:[u.jsx("div",{children:u.jsx("strong",{children:"📐 Размеры:"})}),u.jsxs("div",{children:["Available width: ",Math.round(a.availableMainBlockWidth),"px"]}),u.jsxs("div",{style:{marginTop:8},children:[u.jsx("strong",{children:"✅ Видимые:"})," ",A.map(t=>t.id).join(", ")]}),k.length>0&&u.jsxs("div",{style:{color:"orange"},children:[u.jsx("strong",{children:"📤 В popover:"})," ",k.map(t=>t.id).join(", "),H&&" 🔴"]}),u.jsxs("div",{style:{marginTop:8},children:[u.jsxs("div",{style:{color:O?"green":"red"},children:['🔘 Второстепенная кнопка "Согласовать" в правой части:'," ",O?"Видна":"В dropdown"]}),u.jsxs("div",{style:{color:j?"orange":"green"},children:["🔄 Reset кнопка:"," ",j?"В footer popover":"В mainBlock"]})]})]}),u.jsx(r,{containerProps:{$css:{maxWidth:"calc(100vw - 32px)"}},onResize:y,mainBlock:u.jsxs(u.Fragment,{children:[y4.map(t=>{const i=f4[t.id],h=I4(i,a.availableMainBlockWidth);return u.jsx("div",{style:{...h},children:t.element},t.id)}),u.jsx(r.FiltersButtonWithPopover,{popoverProps:{ref:b},state:m,title:"Ещё фильтры",subtitle:"Какой-то сабтайтл, если нужен.",redSquare:H,searchable:!0,searchValue:c,onSearchChange:F,content:u.jsx(u.Fragment,{children:q.map(t=>{var i,h;return u.jsxs("div",{style:{width:"100%"},children:[((i=t==null?void 0:t.metadata)==null?void 0:i.labelInPopoverFilter)&&u.jsx(W,{style:{marginBottom:"8px"},children:(h=t==null?void 0:t.metadata)==null?void 0:h.labelInPopoverFilter}),t.element]},t.id)})}),emptySearchContent:q.length===0&&c?u.jsx("div",{children:"По запросу ничего не найдено"}):null,footer:j&&_&&H?u.jsx("div",{style:{display:"flex",width:"100%",justifyContent:"end"},children:_.element}):void 0}),_&&!j&&u.jsx("div",{children:_.element})]}),listOfFilters:u.jsx(r.ListOfFilters,{clearAll:M,opened:V,items:w,showResetAllFiltersButton:!1}),activeButtonsBlock:w4()}),u.jsx(C4,{})]})}},P={name:"FiltersActions без адаптивности",...X({previewSource:"shown",preCode:`
    import { createRows, type Row } from './tableData';
    import {
      IconChevronLeft,
      IconChevronRight,
      Avatar,
      SplitView,
      backgroundPrimary,
      Badge,
      Button,
      ColumnConfig,
      Flow,
      H2,
      IconButton,
      s,
      Table,
      Widget,
    } from '@daisforge/ui';
    import React, { useMemo, useState } from 'react';

    type Filters = {
      searchedV: string;
      switcher: boolean;
      blocks: string[];
      tribes: string[];
      allocation: string;
      brics: string[];
    };

    const filtersReducer = (
      state: Filters,
      newState: Partial<Filters>
    ): Filters => ({
      ...state,
      ...newState,
    });

    const DEFAULT_FILTERS: Filters = {
      searchedV: '',
      switcher: false,
      blocks: [],
      tribes: [],
      allocation: '',
      brics: [],
    };

    const LABELS: { [key in keyof Filters]: string } = {
      searchedV: 'Поиск',
      blocks: 'Блок',
      tribes: 'Трайб',
      allocation: 'Аллокация',
      switcher: 'Switcher filter',
      brics: 'Брикс',
    };

    const useFetch = (
      key: 'blocks' | 'tribes' | 'allocation' | 'brics',
      num = 10
    ) =>
      useMemo(
        () =>
          Array(num)
            .fill(0)
            .map((_, i) => ({
              label: \`\${LABELS[key]} \${i + 1}\`,
              value: i.toString(),
            })),
        [key, num]
      );

    ${$("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","SegmentContentWrapper")}
        `}),render:()=>{const[e,n]=o.useReducer(g4,A4),[a,l]=o.useState(!1),m=o.useRef(null),c=I("blocks",10),F=I("tribes",10),B=I("allocation",10),b=I("brics",10),{filterList:E,filterListOpened:C,clearAll:f}=E4({filters:e,options:{blocks:c,tribes:F,allocation:B,brics:b},updateFilters:(s,d)=>n({[s]:d}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},switcher:{label:"Чекбокс",clearedValue:!1},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},brics:{label:"Брикс",clearedValue:[]}},order:["switcher"]}),D=o.useMemo(()=>[{id:"segments",element:u.jsx(v4,{hasBackground:!0,size:"xs",style:{marginRight:"8px"},children:Array(3).fill(0).map((s,d)=>u.jsx(r.SegmentItem,{value:`item_${d}`,label:`Сегмент ${d+1}`},`item:${d}`))})},{id:"search",element:u.jsx(r.TextFieldSearch,{value:e.searchedV,onChange:s=>n({searchedV:s.target.value}),autoComplete:"off",placeholder:"Поиск",style:{marginRight:"8px"}})},{id:"switcher",element:u.jsx(r.SwitcherFilter,{checked:e.switcher,label:"Активные",onChange:s=>n({switcher:s.target.checked})})},{id:"allocation",element:u.jsx(g,{size:"s",placeholder:"Allocation",value:e.allocation,onChange:s=>n({allocation:s}),items:B,listMaxHeight:"350px",portal:m,zIndex:"9001"})}],[e.searchedV,e.switcher,e.allocation,B]),y=o.useMemo(()=>[{id:"blocks",element:u.jsx(r.TooltipList,{groupLabel:"Блок",fullWidth:!0,items:e.blocks.map(s=>{const d=c.find(A=>A.value===s);return d==null?void 0:d.label}).filter(s=>!!s),trigger:e.blocks.length>0?"hover":"none",mouseEnterDelay:750,frame:m,children:u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{isTargetAmount:!0,size:"s",multiple:!0,value:e.blocks,onChange:s=>n({blocks:s}),items:c,listMaxHeight:"350px",portal:m,zIndex:"9001"})})}),metadata:{labelInPopoverFilter:"Blocks"}},{id:"tribes",element:u.jsx(r.TooltipList,{groupLabel:"Трайб",fullWidth:!0,items:e.tribes.map(s=>{const d=F.find(A=>A.value===s);return d==null?void 0:d.label}).filter(s=>!!s),trigger:e.tribes.length>0?"hover":"none",mouseEnterDelay:750,frame:m,children:u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{isTargetAmount:!0,size:"s",multiple:!0,value:e.tribes,onChange:s=>n({tribes:s}),items:F,listMaxHeight:"350px",portal:m,zIndex:"9001"})})}),metadata:{labelInPopoverFilter:"Tribes"}},{id:"brics",element:u.jsx(r.TooltipList,{groupLabel:"Брикс",fullWidth:!0,items:e.brics.map(s=>{const d=b.find(A=>A.value===s);return d==null?void 0:d.label}).filter(s=>!!s),trigger:e.brics.length>0?"hover":"none",mouseEnterDelay:750,frame:m,children:u.jsx("div",{style:{width:"100%"},children:u.jsx(g,{isTargetAmount:!0,size:"s",multiple:!0,value:e.brics,onChange:s=>n({brics:s}),items:b,listMaxHeight:"350px",portal:m,zIndex:"9001"})})}),metadata:{labelInPopoverFilter:"Brics"}}],[e.blocks,e.tribes,e.brics,b,c,F]),w=y.some(s=>s.id==="blocks"?e.blocks.length>0:s.id==="tribes"?e.tribes.length>0:s.id==="brics"?e.brics.length>0:!1),V=o.useMemo(()=>[{value:"action1",label:"Действие 1"},{value:"action2",label:"Действие 2"}],[]),M=o.useCallback(()=>u.jsxs(u.Fragment,{children:[u.jsx(r.DotsIconButton,{dropdownProps:{items:V},iconOrientation:"vertical"}),u.jsx(L,{size:"s",view:"secondary",children:"Согласовать"}),u.jsx(L,{size:"s",view:"accent",children:"Создать"})]}),[V]);return u.jsxs(h4,{defaultSelected:["item_0"],children:[u.jsx(r,{mainBlock:u.jsxs(u.Fragment,{children:[D.map(s=>u.jsx("div",{children:s.element},s.id)),u.jsx(r.FilterPopover,{popoverProps:{ref:m},state:[a,l],title:"Дополнительные фильтры",subtitle:"Фильтры с множественным выбором",redSquare:w,content:u.jsx(u.Fragment,{children:y.map(s=>{var d;return u.jsxs("div",{style:{width:"100%",marginBottom:"16px"},children:[u.jsx(W,{style:{marginBottom:"8px"},children:(d=s==null?void 0:s.metadata)==null?void 0:d.labelInPopoverFilter}),s.element]},s.id)})})}),u.jsx(r.ResetAllFiltersButton,{isVisible:E.length>0,onClick:f,disabled:E.length===0})]}),listOfFilters:u.jsx(r.ListOfFilters,{clearAll:f,opened:C,items:E,showResetAllFiltersButton:!1}),activeButtonsBlock:M()}),u.jsx(C4,{})]})}},T={name:"FiltersActions с кастомным таргетом Popover",...X({previewSource:"shown",preCode:`
    import {
      FiltersActions,
      IconButton,
      IconSettingsFilter,
      Combobox,
      BodyS,
    } from '@daisforge/ui';
    import React, { useRef, useState } from 'react';

    ${$("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","CustomTargetFiltersExample")}
        `}),render:()=>u.jsx(H4,{})},N4="500px !important",z=["Активный фильтр номер один","Активный фильтр номер два","Активный фильтр номер три","Активный фильтр номер четыре","Активный фильтр номер пять","Активный фильтр номер шесть"];function $4(){const[e,n]=o.useState(()=>z.map(()=>!1)),a=o.useCallback(c=>{n(F=>F.map((B,b)=>b===c?!B:B))},[]),l=o.useCallback(()=>{n(z.map(()=>!1))},[]),m=o.useMemo(()=>z.reduce((c,F,B)=>(e[B]&&c.push({id:B,label:F,onClick:()=>a(B)}),c),[]),[e,a]);return{activeFilters:e,toggleFilter:a,clearAll:l,items:m}}function X4(){const{activeFilters:e,toggleFilter:n,clearAll:a,items:l}=$4();return u.jsx("div",{style:{padding:16},children:u.jsx(r,{containerProps:{$css:{width:N4}},mainBlock:u.jsx(u.Fragment,{children:z.map((m,c)=>u.jsxs(L,{size:"xs",view:"secondary",type:"button","data-testid":`arrows-test-toggle-filter-${c}`,onClick:()=>n(c),children:[e[c]?"✓":"-",e[c]??1]},m))}),listOfFilters:u.jsx(r.ListOfFilters,{clearAll:a,opened:l.length>0,items:l,showResetAllFiltersButton:!1})})})}const R={name:"Список применённых фильтров: стрелки-скролл появляются сами при переполнении",parameters:{screenshot:{skip:!0}},render:()=>u.jsx(X4,{}),play:async({canvasElement:e})=>{const n=k4(e),a=()=>n.queryByLabelText("Следующий таб");await N(()=>{if(a())throw new Error("Стрелка «Следующий таб» не должна быть видна без активных фильтров")}),await v.click(n.getByTestId("arrows-test-toggle-filter-0")),await v.click(n.getByTestId("arrows-test-toggle-filter-1")),await v.click(n.getByTestId("arrows-test-toggle-filter-2")),await v.click(n.getByTestId("arrows-test-toggle-filter-3")),await v.click(n.getByTestId("arrows-test-toggle-filter-4")),await v.click(n.getByTestId("arrows-test-toggle-filter-5")),await N(()=>{if(!a())throw new Error("Стрелка «Следующий таб» не появилась сама после переполнения списка чипов активных фильтров")},{timeout:3e3}),await v.click(n.getByTestId("arrows-test-toggle-filter-2")),await v.click(n.getByTestId("arrows-test-toggle-filter-3")),await v.click(n.getByTestId("arrows-test-toggle-filter-4")),await v.click(n.getByTestId("arrows-test-toggle-filter-5")),await N(()=>{if(a())throw new Error("Стрелка «Следующий таб» осталась видна, хотя переполнения списка чипов больше нет")},{timeout:3e3})}};var K,Y,Z,u4,e4;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'FiltersActions с адаптивностью',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
    import {
      IconChevronLeft,
      IconChevronRight,
      Avatar,
      SplitView,
      backgroundPrimary,
      Badge,
      Button,
      ColumnConfig,
      Flow,
      H2,
      IconButton,
      s,
      Table,
      Widget,
      useDebouncedValue
    } from '@daisforge/ui';
    import React, { useMemo, useState } from 'react';

    type Filters = {
      searchedV: string;
      switcher: boolean;
      blocks: string[];
      tribes: string[];
      allocation: string;
      brics: string[];
    };

    const filtersReducer = (
      state: Filters,
      newState: Partial<Filters>
    ): Filters => ({
      ...state,
      ...newState,
    });

    const DEFAULT_FILTERS: Filters = {
      searchedV: '',
      switcher: false,
      blocks: [],
      tribes: [],
      allocation: '',
      brics: [],
    };

    const LABELS: { [key in keyof Filters]: string } = {
      searchedV: 'Поиск',
      blocks: 'Блок',
      tribes: 'Трайб',
      allocation: 'Аллокация',
      switcher: 'Switcher filter',
      brics: 'Брикс',
    };


    const COMBOBOX_MODIFICATION = {
      width: '168px',
      style: {
        flexShrink: 0, // Чтобы блок combobox не сжимался
      },
    };

    const SEARCH_MODIFICATION = {
      width: 'auto',
      style: {
        minWidth: '168px',
        maxWidth: '700px',
        flex: 1,
      },
    };

    const SegmentContentStyled = styled.div({
      backgroundColor: 'pink',
      borderRadius: borderRadiusS,
      minHeight: 400,
      padding: 16,
      marginTop: 16,
    });

    \${getFuncAsString('packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx', 'SegmentContentWrapper')}


        \`
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const [dimensions, setDimensions] = useState<FiltersActionsResizeDimensions>({
      containerWidth: 0,
      mainBlockWidth: 0,
      buttonsBlockWidth: 0,
      availableMainBlockWidth: 0
    });
    const stateAndSetterPopoverFilterOpened = useState(false);
    const [searchQueryInPopover, setSearchQueryInPopover] = useState('');
    const debouncedSearchQueryInPopover = useDebouncedValue(searchQueryInPopover, 300);

    /**
     * Реф контейнера поповера с фильтрами. Нужен для того, чтобы тултип и выпадающие списки
     * Combobox, которые будут отображаться в popover могли получить контейнер, где им отрисовываться
     */
    const popoverRef = useRef<HTMLDivElement>(null);

    // Опции для combobox'ов
    const blocksOptions = useFetch('blocks', 10);
    const tribesOptions = useFetch('tribes', 10);
    const allocationOptions = useFetch('allocation', 10);
    const bricsOptions = useFetch('brics', 10);

    // Обработчик Resize блока фильтров
    const handleResize = useCallback((newDimensions: FiltersActionsResizeDimensions) => {
      setDimensions(newDimensions);
    }, [setDimensions]);

    // Работа с фильтрами
    const {
      filterList,
      filterListOpened,
      clearAll
    } = useFiltersList({
      filters,
      options: {
        blocks: blocksOptions,
        tribes: tribesOptions,
        allocation: allocationOptions,
        brics: bricsOptions
      } as Record<keyof Filters, {
        label: string;
        value: string;
      }[]>,
      updateFilters: (key, newV) => updateFilters({
        [key]: newV
      }),
      filtersInfo: {
        searchedV: {
          label: 'Поиск',
          clearedValue: ''
        },
        switcher: {
          label: 'Чекбокс',
          clearedValue: false
        },
        blocks: {
          label: 'Блок',
          clearedValue: []
        },
        tribes: {
          label: 'Трайб',
          clearedValue: []
        },
        allocation: {
          label: 'Аллокация',
          clearedValue: ''
        },
        brics: {
          label: 'Брикс',
          clearedValue: []
        }
      },
      order: ['switcher'] // Первым отображаются switch кнопки
    });

    // Массив элементов левой части
    const allLeftItems: FilterItem[] = useMemo(() => [
    // 1. Сегменты
    {
      id: 'segments',
      element: <SegmentGroup hasBackground size="xs" style={{
        marginRight: '8px'
      }}>
              {Array(3).fill(0).map((_, i) => <FiltersActions.SegmentItem key={\`item:\${i}\`} value={\`item_\${i}\`} label={\`Сегмент\${i + 1}\`} />)}
            </SegmentGroup>
    },
    // 2. Поиск
    {
      id: 'search',
      element: <TextFieldSearch value={filters.searchedV} onChange={e => updateFilters({
        searchedV: e.target.value
      })} autoComplete="off" style={{
        marginRight: '8px'
      }} />
    },
    // 3. Чекбокс/Switcher
    {
      id: 'switcher',
      element: <FiltersActions.SwitcherFilter checked={filters.switcher} label="Активные" onChange={e => updateFilters({
        switcher: e.target.checked
      })} />,
      metadata: {
        // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
        labelForSearchingInPopover: 'switcher'
      }
    },
    // 4. Combobox 1 (множественный выбор)
    {
      id: 'blocks',
      element: <FiltersActions.TooltipList groupLabel="Блок" fullWidth items={filters.blocks.map(item => {
        const option = blocksOptions.find(opt => opt.value === item);
        return option?.label;
      }).filter((label): label is string => Boolean(label))} trigger={filters.blocks.length > 0 ? 'hover' : 'none'} mouseEnterDelay={750} frame={popoverRef} // Важно
      >
              <div style={{
          width: '100%'
        }}>
                <Combobox placeholder="Placeholder" isTargetAmount size="s" multiple value={filters.blocks} onChange={v => updateFilters({
            blocks: v
          })} items={blocksOptions} listMaxHeight="350px" portal={popoverRef} // Важно
          zIndex="9001" // Важно
          />
              </div>
            </FiltersActions.TooltipList>,
      metadata: {
        // Можно использовать для заголовков фильтров в Popover
        labelInPopoverFilter: 'Blocks',
        // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
        labelForSearchingInPopover: 'blocks'
      }
    },
    // 5. Combobox 2 (множественный выбор)
    {
      id: 'tribes',
      element: <FiltersActions.TooltipList groupLabel="Трайб" fullWidth items={filters.tribes.map(item => {
        const option = tribesOptions.find(opt => opt.value === item);
        return option?.label;
      }).filter((label): label is string => Boolean(label))} trigger={filters.tribes.length > 0 ? 'hover' : 'none'} mouseEnterDelay={750} frame={popoverRef} // Важно
      >
              {/* Важно делать обертку для регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div style={{
          width: '100%'
        }}>
                <Combobox placeholder="Placeholder" isTargetAmount size="s" multiple value={filters.tribes} onChange={v => updateFilters({
            tribes: v
          })} items={tribesOptions} listMaxHeight="350px" portal={popoverRef} // Важно
          zIndex="9001" // Важно
          />
              </div>
            </FiltersActions.TooltipList>,
      // Можно использовать для заголовков фильтров в Popover
      metadata: {
        labelInPopoverFilter: 'Tribes',
        // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
        labelForSearchingInPopover: 'tribes'
      }
    },
    // 6. Combobox 3 (одиночный выбор)
    {
      id: 'allocation',
      element: <Combobox placeholder="Placeholder" size="s" value={filters.allocation} onChange={v => updateFilters({
        allocation: v
      })} items={allocationOptions} listMaxHeight="350px" portal={popoverRef} zIndex="9001" />,
      // Можно использовать для заголовков фильтров в Popover
      metadata: {
        labelInPopoverFilter: 'Allocation',
        // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
        labelForSearchingInPopover: 'allocation'
      }
    },
    // 5. Combobox 4 (множественный выбор)
    {
      id: 'brics',
      element: <FiltersActions.TooltipList groupLabel="Брикс" fullWidth items={filters.brics.map(item => {
        const option = bricsOptions.find(opt => opt.value === item);
        return option?.label;
      }).filter((label): label is string => Boolean(label))} trigger={filters.brics.length > 0 ? 'hover' : 'none'} mouseEnterDelay={750} frame={popoverRef} // Важно
      >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div style={{
          width: '100%'
        }}>
                <Combobox placeholder="Placeholder" isTargetAmount size="s" multiple value={filters.brics} onChange={v => updateFilters({
            brics: v
          })} items={bricsOptions} listMaxHeight="350px" portal={popoverRef} // Важно
          zIndex="9001" // Важно
          />
              </div>
            </FiltersActions.TooltipList>,
      // Можно использовать для заголовков фильтров в Popover
      metadata: {
        labelInPopoverFilter: 'Brics',
        // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
        labelForSearchingInPopover: 'brics'
      }
    },
    // 7. Кнопка "Сбросить все"
    {
      id: 'resetButton',
      element: <FiltersActions.ResetAllFiltersButton isVisible={filterList.length > 0} onClick={clearAll} disabled={filterList.length === 0} />
    }], [filters.searchedV, filters.switcher, filters.blocks, filters.tribes, filters.allocation, filters.brics, bricsOptions, blocksOptions, tribesOptions, allocationOptions, filterList.length, clearAll]);

    // Конфигурация брейкпоинтов для адаптивности
    const breakpointsConfig: Record<number, AdaptiveFiltersBreakpointConfig> = useMemo(() => ({
      // >= 1754px: Все элементы видны
      1754: {
        visible: ['segments', 'search', 'switcher', 'blocks', 'tribes', 'allocation', 'resetButton'],
        inOverlay: ['brics'],
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: true,
          resetInPopoverFooter: false
        }
      },
      // >= 1578px: allocation в popup
      1578: {
        visible: ['segments', 'search', 'switcher', 'blocks', 'tribes', 'resetButton'],
        inOverlay: ['brics', 'allocation'],
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: true,
          resetInPopoverFooter: false
        }
      },
      // >= 1486px: tribes в popup
      1486: {
        visible: ['segments', 'search', 'switcher', 'blocks', 'resetButton'],
        inOverlay: ['tribes', 'allocation', 'brics'],
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: true,
          resetInPopoverFooter: false
        }
      },
      // >= 1260px: blocks в popup
      1260: {
        visible: ['segments', 'search', 'switcher', 'resetButton'],
        inOverlay: ['blocks', 'tribes', 'allocation', 'brics'],
        // ← blocks в popup
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: true,
          resetInPopoverFooter: false
        }
      },
      // >= 1068px: switcher в popup
      1068: {
        visible: ['segments', 'search', 'resetButton'],
        inOverlay: ['switcher', 'blocks', 'tribes', 'allocation', 'brics'],
        // ← switcher в popup
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: true,
          resetInPopoverFooter: false
        }
      },
      // >= 960px: ResetButton в footer popover
      960: {
        visible: ['segments', 'search'],
        inOverlay: ['switcher', 'blocks', 'allocation', 'tribes', 'brics'],
        hidden: ['resetButton'],
        // ← Технически скрыт из main, будет в footer popover
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: true,
          resetInPopoverFooter: true // ← ResetButton в footer popover
        }
      },
      // >= 960px: Вторая secondary кнопка cкрывается в dropdown
      0: {
        visible: ['segments', 'search'],
        inOverlay: ['switcher', 'blocks', 'tribes', 'allocation', 'brics'],
        hidden: ['resetButton'],
        // ← Технически скрыт из main, будет в footer popover
        modifications: {
          segments: {
            width: 'auto'
          },
          search: SEARCH_MODIFICATION,
          blocks: COMBOBOX_MODIFICATION,
          tribes: COMBOBOX_MODIFICATION,
          allocation: COMBOBOX_MODIFICATION
        },
        customActions: {
          secondaryButtonVisible: false,
          resetInPopoverFooter: true // ← ResetButton в footer popover
        }
      }
    }), []);

    // Адаптивность
    const {
      visibleItems,
      overlayItems,
      modifications,
      customActions,
      hiddenItems,
      getItemStyle,
      hasActiveFilters
    } = useAdaptiveFilters({
      items: allLeftItems,
      width: dimensions.availableMainBlockWidth,
      breakpoints: breakpointsConfig
    });

    // Проверяем активные фильтры в popup
    const hasActiveFilterInPopover = hasActiveFilters(overlayItems, filters);

    // Определяем видимость второстепенной кнопки
    const secondaryButtonVisible = customActions.secondaryButtonVisible ?? true;
    const resetInPopoverFooter = customActions.resetInPopoverFooter ?? false;
    const resetButtonItem = resetInPopoverFooter ? hiddenItems.find(item => item.id === 'resetButton') : visibleItems.find(item => item.id === 'resetButton');
    const visibleItemsWithoutResetFilterButton = visibleItems.filter(item => item.id !== 'resetButton');

    // Фильтрация элементов по поиску в Popover
    const filteredOverlayItems = useMemo(() => {
      if (!debouncedSearchQueryInPopover.trim()) return overlayItems;
      const query = debouncedSearchQueryInPopover.toLowerCase();
      return overlayItems.filter(item => item?.metadata?.labelForSearchingInPopover?.toLowerCase()?.includes(query));
    }, [overlayItems, debouncedSearchQueryInPopover]);

    // Элементы для dropdown (блок справа)
    const dropdownItems = useMemo(() => {
      const items = [{
        value: 'action1',
        label: 'Действие 1'
      }, {
        value: 'action2',
        label: 'Действие 2'
      }];

      // Если второстепенная кнопка скрыта - добавляем в dropdown
      if (!secondaryButtonVisible) {
        items.push({
          value: 'secondary',
          label: 'Согласовать (второстепенное)'
        });
      }
      return items;
    }, [secondaryButtonVisible]);
    const renderActiveButtonsBlock = useCallback(() => <>
          {/* Кнопка с троеточием */}
          <FiltersActions.DotsIconButton dropdownProps={{
        items: dropdownItems
      }} iconOrientation="vertical" />

          {/* Второстепенная кнопка (скрывается при < 600px) */}
          {secondaryButtonVisible && <Button size="s" view="secondary">
              Согласовать
            </Button>}

          {/* Целевая кнопка - всегда видна */}
          <Button size="s" view="accent">
            Создать
          </Button>
        </>, [secondaryButtonVisible, dropdownItems]);
    return <SegmentProvider defaultSelected={['item_0']}>
        {/* Индикатор состояния */}
        <div style={{
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        fontFamily: 'monospace',
        fontSize: '12px',
        minHeight: '146px'
      }}>
          <div>
            <strong>📐 Размеры:</strong>
          </div>
          <div>
            Available width: {Math.round(dimensions.availableMainBlockWidth)}px
          </div>
          <div style={{
          marginTop: 8
        }}>
            <strong>✅ Видимые:</strong>{' '}
            {visibleItems.map(i => i.id).join(', ')}
          </div>
          {overlayItems.length > 0 && <div style={{
          color: 'orange'
        }}>
              <strong>📤 В popover:</strong>{' '}
              {overlayItems.map(i => i.id).join(', ')}
              {hasActiveFilterInPopover && ' 🔴'}
            </div>}
          <div style={{
          marginTop: 8
        }}>
            <div style={{
            color: secondaryButtonVisible ? 'green' : 'red'
          }}>
              🔘 Второстепенная кнопка "Согласовать" в правой части:{' '}
              {secondaryButtonVisible ? 'Видна' : 'В dropdown'}
            </div>
            <div style={{
            color: resetInPopoverFooter ? 'orange' : 'green'
          }}>
              🔄 Reset кнопка:{' '}
              {resetInPopoverFooter ? 'В footer popover' : 'В mainBlock'}
            </div>
          </div>
        </div>

        <FiltersActions containerProps={{
        $css: {
          maxWidth: 'calc(100vw - 32px)'
        }
      }} onResize={handleResize} mainBlock={<>
              {/* Видимые элементы с модификациями (без кнопки сбросить фильтры, она правее кнопки фильтров) */}
              {visibleItemsWithoutResetFilterButton.map(item => {
          const itemMods = modifications[item.id];
          const style = getItemStyle(itemMods, dimensions.availableMainBlockWidth);
          return <div key={item.id} style={{
            ...style
          }}>
                    {item.element}
                  </div>;
        })}

              {/* Popover с фильтрами - кнопка фильтров встроена внутрь */}
              <FiltersActions.FiltersButtonWithPopover popoverProps={{
          // Передаем ref, чтобы Tooltip и Combobox, которые будут в Popover, передать frame и portal
          ref: popoverRef
        }} state={stateAndSetterPopoverFilterOpened} title="Ещё фильтры" subtitle="Какой-то сабтайтл, если нужен." redSquare={hasActiveFilterInPopover} searchable searchValue={searchQueryInPopover} onSearchChange={setSearchQueryInPopover} content={<>
                    {filteredOverlayItems.map(item => <div key={item.id} style={{
            width: '100%'
          }}>
                        {item?.metadata?.labelInPopoverFilter && <BodyS style={{
              marginBottom: '8px'
            }}>
                            {item?.metadata?.labelInPopoverFilter}
                          </BodyS>}
                        {item.element}
                      </div>)}
                  </>} emptySearchContent={filteredOverlayItems.length === 0 && searchQueryInPopover ? <div>По запросу ничего не найдено</div> : null} footer={resetInPopoverFooter && resetButtonItem && hasActiveFilterInPopover ? <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'end'
        }}>
                      {resetButtonItem.element}
                    </div> : undefined} />
              {/* Кнопка "Сбросить фильтры" за кнопкой фильтров */}
              {resetButtonItem && !resetInPopoverFooter && <div>{resetButtonItem.element}</div>}
            </>} listOfFilters={<FiltersActions.ListOfFilters clearAll={clearAll} opened={filterListOpened} items={filterList} showResetAllFiltersButton={false} />} activeButtonsBlock={renderActiveButtonsBlock()} />
        <SegmentContentWrapper />
      </SegmentProvider>;
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Пример истории с адаптивным поведением на основе ширины mainBlock\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(e4=(u4=S.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var t4,n4,s4,o4,i4;P.parameters={...P.parameters,docs:{...(t4=P.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  name: 'FiltersActions без адаптивности',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
    import { createRows, type Row } from './tableData';
    import {
      IconChevronLeft,
      IconChevronRight,
      Avatar,
      SplitView,
      backgroundPrimary,
      Badge,
      Button,
      ColumnConfig,
      Flow,
      H2,
      IconButton,
      s,
      Table,
      Widget,
    } from '@daisforge/ui';
    import React, { useMemo, useState } from 'react';

    type Filters = {
      searchedV: string;
      switcher: boolean;
      blocks: string[];
      tribes: string[];
      allocation: string;
      brics: string[];
    };

    const filtersReducer = (
      state: Filters,
      newState: Partial<Filters>
    ): Filters => ({
      ...state,
      ...newState,
    });

    const DEFAULT_FILTERS: Filters = {
      searchedV: '',
      switcher: false,
      blocks: [],
      tribes: [],
      allocation: '',
      brics: [],
    };

    const LABELS: { [key in keyof Filters]: string } = {
      searchedV: 'Поиск',
      blocks: 'Блок',
      tribes: 'Трайб',
      allocation: 'Аллокация',
      switcher: 'Switcher filter',
      brics: 'Брикс',
    };

    const useFetch = (
      key: 'blocks' | 'tribes' | 'allocation' | 'brics',
      num = 10
    ) =>
      useMemo(
        () =>
          Array(num)
            .fill(0)
            .map((_, i) => ({
              label: \\\`\\\${LABELS[key]} \\\${i + 1}\\\`,
              value: i.toString(),
            })),
        [key, num]
      );

    \${getFuncAsString('packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx', 'SegmentContentWrapper')}
        \`
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const [popupFilterOpened, setPopupFilterOpened] = useState(false);

    /**
     * Реф контейнера Popover с фильтрами. Нужен для того, чтобы тултип и выпадающие списки
     * Combobox, которые будут отображаться в popover могли получить контейнер, где им отрисовываться
     */
    const popoverRef = useRef<HTMLDivElement>(null);

    // Опции для combobox'ов
    const blocksOptions = useFetch('blocks', 10);
    const tribesOptions = useFetch('tribes', 10);
    const allocationOptions = useFetch('allocation', 10);
    const bricsOptions = useFetch('brics', 10);

    // Работа с фильтрами
    const {
      filterList,
      filterListOpened,
      clearAll
    } = useFiltersList({
      filters,
      options: {
        blocks: blocksOptions,
        tribes: tribesOptions,
        allocation: allocationOptions,
        brics: bricsOptions
      } as Record<keyof Filters, {
        label: string;
        value: string;
      }[]>,
      updateFilters: (key, newV) => updateFilters({
        [key]: newV
      }),
      filtersInfo: {
        searchedV: {
          label: 'Поиск',
          clearedValue: ''
        },
        switcher: {
          label: 'Чекбокс',
          clearedValue: false
        },
        blocks: {
          label: 'Блок',
          clearedValue: []
        },
        tribes: {
          label: 'Трайб',
          clearedValue: []
        },
        allocation: {
          label: 'Аллокация',
          clearedValue: ''
        },
        brics: {
          label: 'Брикс',
          clearedValue: []
        }
      },
      order: ['switcher'] // Первым отображаются switch кнопки
    });

    // Элементы, которые будут видны статически
    const visibleItems = useMemo(() => [
    // 1. Сегменты
    {
      id: 'segments',
      element: <SegmentGroup hasBackground size="xs" style={{
        marginRight: '8px'
      }}>
              {Array(3).fill(0).map((_, i) => <FiltersActions.SegmentItem key={\`item:\${i}\`} value={\`item_\${i}\`} label={\`Сегмент \${i + 1}\`} />)}
            </SegmentGroup>
    },
    // 2. Поиск
    {
      id: 'search',
      element: <FiltersActions.TextFieldSearch value={filters.searchedV} onChange={e => updateFilters({
        searchedV: e.target.value
      })} autoComplete="off" placeholder="Поиск" style={{
        marginRight: '8px'
      }} />
    },
    // 3. Чекбокс/Switcher
    {
      id: 'switcher',
      element: <FiltersActions.SwitcherFilter checked={filters.switcher} label="Активные" onChange={e => updateFilters({
        switcher: e.target.checked
      })} />
    },
    // 4. Combobox 3 (одиночный выбор)
    {
      id: 'allocation',
      element: <Combobox size="s" placeholder="Allocation" value={filters.allocation} onChange={v => updateFilters({
        allocation: v
      })} items={allocationOptions} listMaxHeight="350px" portal={popoverRef} zIndex="9001" />
    }], [filters.searchedV, filters.switcher, filters.allocation, allocationOptions]);

    // Элементы, которые будут в Popover (последние 3 чекбокса)
    const popoverItems = useMemo(() => [
    // 1. Combobox 1 (множественный выбор) - blocks
    {
      id: 'blocks',
      element: <FiltersActions.TooltipList groupLabel="Блок" fullWidth items={filters.blocks.map(item => {
        const option = blocksOptions.find(opt => opt.value === item);
        return option?.label;
      }).filter((label): label is string => Boolean(label))} trigger={filters.blocks.length > 0 ? 'hover' : 'none'} mouseEnterDelay={750} frame={popoverRef} // Важно
      >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div style={{
          width: '100%'
        }}>
                <Combobox isTargetAmount size="s" multiple value={filters.blocks} onChange={v => updateFilters({
            blocks: v
          })} items={blocksOptions} listMaxHeight="350px" portal={popoverRef} // Важно
          zIndex="9001" // Важно
          />
              </div>
            </FiltersActions.TooltipList>,
      metadata: {
        labelInPopoverFilter: 'Blocks'
      }
    },
    // 2. Combobox 2 (множественный выбор) - tribes
    {
      id: 'tribes',
      element: <FiltersActions.TooltipList groupLabel="Трайб" fullWidth items={filters.tribes.map(item => {
        const option = tribesOptions.find(opt => opt.value === item);
        return option?.label;
      }).filter((label): label is string => Boolean(label))} trigger={filters.tribes.length > 0 ? 'hover' : 'none'} mouseEnterDelay={750} frame={popoverRef} // Важно
      >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div style={{
          width: '100%'
        }}>
                <Combobox isTargetAmount size="s" multiple value={filters.tribes} onChange={v => updateFilters({
            tribes: v
          })} items={tribesOptions} listMaxHeight="350px" portal={popoverRef} // Важно
          zIndex="9001" // Важно
          />
              </div>
            </FiltersActions.TooltipList>,
      metadata: {
        labelInPopoverFilter: 'Tribes'
      }
    },
    // 3. Combobox 4 (множественный выбор) - brics
    {
      id: 'brics',
      element: <FiltersActions.TooltipList groupLabel="Брикс" fullWidth items={filters.brics.map(item => {
        const option = bricsOptions.find(opt => opt.value === item);
        return option?.label;
      }).filter((label): label is string => Boolean(label))} trigger={filters.brics.length > 0 ? 'hover' : 'none'} mouseEnterDelay={750} frame={popoverRef} // Важно
      >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div style={{
          width: '100%'
        }}>
                <Combobox isTargetAmount size="s" multiple value={filters.brics} onChange={v => updateFilters({
            brics: v
          })} items={bricsOptions} listMaxHeight="350px" portal={popoverRef} // Важно
          zIndex="9001" // Важно
          />
              </div>
            </FiltersActions.TooltipList>,
      metadata: {
        labelInPopoverFilter: 'Brics'
      }
    }], [filters.blocks, filters.tribes, filters.brics, bricsOptions, blocksOptions, tribesOptions]);

    // Проверяем активные фильтры в popover
    const hasActiveFilterInPopover = popoverItems.some(item => {
      if (item.id === 'blocks') return filters.blocks.length > 0;
      if (item.id === 'tribes') return filters.tribes.length > 0;
      if (item.id === 'brics') return filters.brics.length > 0;
      return false;
    });

    // Элементы для dropdown (блок справа)
    const dropdownItems = useMemo(() => [{
      value: 'action1',
      label: 'Действие 1'
    }, {
      value: 'action2',
      label: 'Действие 2'
    }], []);
    const renderActiveButtonsBlock = useCallback(() => <>
          {/* Кнопка с троеточием */}
          <FiltersActions.DotsIconButton dropdownProps={{
        items: dropdownItems
      }} iconOrientation="vertical" />

          {/* Второстепенная кнопка */}
          <Button size="s" view="secondary">
            Согласовать
          </Button>

          {/* Целевая кнопка */}
          <Button size="s" view="accent">
            Создать
          </Button>
        </>, [dropdownItems]);
    return <SegmentProvider defaultSelected={['item_0']}>
        <FiltersActions mainBlock={<>
              {/* Видимые элементы */}
              {visibleItems.map(item => <div key={item.id}>{item.element}</div>)}

              {/* Popover с фильтрами */}
              <FiltersActions.FilterPopover popoverProps={{
          // Передаем ref, чтобы Tooltip и Combobox, которые будут в Popover, передать frame и portal
          ref: popoverRef
        }} state={[popupFilterOpened, setPopupFilterOpened]} title="Дополнительные фильтры" subtitle="Фильтры с множественным выбором" redSquare={hasActiveFilterInPopover} content={<>
                    {popoverItems.map(item => <div key={item.id} style={{
            width: '100%',
            marginBottom: '16px'
          }}>
                        <BodyS style={{
              marginBottom: '8px'
            }}>
                          {item?.metadata?.labelInPopoverFilter}
                        </BodyS>
                        {item.element}
                      </div>)}
                  </>} />

              {/* Кнопка сбросить все */}
              <FiltersActions.ResetAllFiltersButton isVisible={filterList.length > 0} onClick={clearAll} disabled={filterList.length === 0} />
            </>} listOfFilters={<FiltersActions.ListOfFilters clearAll={clearAll} opened={filterListOpened} items={filterList} showResetAllFiltersButton={false} />} activeButtonsBlock={renderActiveButtonsBlock()} />
        <SegmentContentWrapper />
      </SegmentProvider>;
  }
}`,...(s4=(n4=P.parameters)==null?void 0:n4.docs)==null?void 0:s4.source},description:{story:"Пример использования FiltersActions без адаптивности с частичными фильтрами в Popover.\nОсновные фильтры видны статически, а последние 3 чекбокса (blocks, tribes, brics) скрыты в Popover кнопке.\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(i4=(o4=P.parameters)==null?void 0:o4.docs)==null?void 0:i4.description}}};var r4,l4,a4,c4,d4;T.parameters={...T.parameters,docs:{...(r4=T.parameters)==null?void 0:r4.docs,source:{originalSource:`{
  name: 'FiltersActions с кастомным таргетом Popover',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: \`
    import {
      FiltersActions,
      IconButton,
      IconSettingsFilter,
      Combobox,
      BodyS,
    } from '@daisforge/ui';
    import React, { useRef, useState } from 'react';

    \${getFuncAsString('packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx', 'CustomTargetFiltersExample')}
        \`
  }),
  render: () => <CustomTargetFiltersExample />
}`,...(a4=(l4=T.parameters)==null?void 0:l4.docs)==null?void 0:a4.source},description:{story:"Пример замены кнопки-таргета Popover собственным элементом через `renderTarget`.\nВместо дефолтной кнопки «Ещё фильтры» рендерится своя IconButton, при этом\nоткрытие Popover и красная точка-индикатор продолжают работать.\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(d4=(c4=T.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};var p4,m4,b4,B4,F4;R.parameters={...R.parameters,docs:{...(p4=R.parameters)==null?void 0:p4.docs,source:{originalSource:`{
  name: 'Список применённых фильтров: стрелки-скролл появляются сами при переполнении',
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <ScrollArrowsExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const getNextArrow = () => canvas.queryByLabelText('Следующий таб');

    // 1. Без активных фильтров стрелок нет
    await waitFor(() => {
      if (getNextArrow()) {
        throw new Error('Стрелка «Следующий таб» не должна быть видна без активных фильтров');
      }
    });

    // 2. Активируем несколько фильтров - список чипов переполняется.
    // Стрелка должна появиться САМА, без имитации скролла пользователем
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-0'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-1'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-2'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-3'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-4'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-5'));
    await waitFor(() => {
      if (!getNextArrow()) {
        throw new Error('Стрелка «Следующий таб» не появилась сама после переполнения списка чипов активных фильтров');
      }
    }, {
      timeout: 3000
    });

    // 3. Выключаем часть фильтров обратно - чипов снова мало, переполнения нет.
    // Стрелка должна пропасть САМА, без имитации скролла
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-2'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-3'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-4'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-5'));
    await waitFor(() => {
      if (getNextArrow()) {
        throw new Error('Стрелка «Следующий таб» осталась видна, хотя переполнения списка чипов больше нет');
      }
    }, {
      timeout: 3000
    });
  }
}`,...(b4=(m4=R.parameters)==null?void 0:m4.docs)==null?void 0:b4.source},description:{story:`Регрессионный DOM-тест (без скриншотов): стрелки-скролл в блоке применённых
фильтров должны появляться сами - без ручного скролла пользователем мышью/
трекпадом - как только чипы перестают помещаться по ширине, и пропадать
обратно, когда чипов снова становится мало.

Компонент маунтится без активных фильтров в контейнере фиксированной ширины
(500px - для предсказуемого переполнения). Затем через play включается
несколько фильтров: чипы переполняют список -> должна появиться стрелка
«Следующий таб». После часть фильтров выключается обратно: переполнение
исчезает -> стрелка должна пропасть - тоже сама, без скролла.`,...(F4=(B4=R.parameters)==null?void 0:B4.docs)==null?void 0:F4.description}}};const Q4=["FilterActionsStory","SimpleFiltersActionsStory","CustomTargetFiltersActionsStory","ScrollArrowsAppearWithoutManualScrollStory"],i0=Object.freeze(Object.defineProperty({__proto__:null,CustomTargetFiltersActionsStory:T,FilterActionsStory:S,ScrollArrowsAppearWithoutManualScrollStory:R,SimpleFiltersActionsStory:P,__namedExportsOrder:Q4,default:_4},Symbol.toStringTag,{value:"Module"}));export{i0 as F};
