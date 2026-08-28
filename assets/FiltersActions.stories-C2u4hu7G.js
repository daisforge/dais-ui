import{d as u,r as o}from"./react-D2T61mpp.js";import{g as $}from"./getFuncAsString-C1kndaLg.js";import{s as X}from"./storySourceDoc-tVKyHcEN.js";import{c8 as f4,cc as N4,cd as H,ce as A,cf as I4}from"./vendor-DrvHogBM.js";import{S as B}from"./Table-Dq1UNsZq.js";import{u as E4}from"./ListOfFilters-DGvhrxSe.js";import{a as O4}from"./TextField-by6ErzMv.js";import{b as r,u as S4}from"./FiltersActions-4RoHiAyT.js";import{c as V4}from"./@salutejs/sdds-themes-DJNx_lJj.js";import{H as P4}from"./styled-components-C32trI5d.js";import{u as T4}from"./utils-D_Y70ijK.js";import{a8 as A4,b as M,p as z,I as R4,h as M4}from"./@salutejs/sdds-finai-CDRzBbTc.js";import{sV as j4}from"./@salutejs/plasma-icons-BnddfUBU.js";const L4={title:"Композиции/FiltersActions",component:r,parameters:{docs:{toc:!0}},tags:["!autodocs"]},B4=(e,t)=>({...e,...t}),v4={searchedV:"",switcher:!1,blocks:[],tribes:[],allocation:"",brics:[]},_4={searchedV:"Поиск",blocks:"Блок",tribes:"Трайб",allocation:"Аллокация",switcher:"Switcher filter",brics:"Брикс"},C=(e,t=10)=>o.useMemo(()=>Array(t).fill(0).map((a,l)=>({label:`${_4[e]} ${l+1}`,value:l.toString()})),[e,t]),m={width:"168px",style:{flexShrink:0}},x={width:"auto",style:{minWidth:"168px",maxWidth:"700px",flex:1}},z4=P4.div({backgroundColor:"pink",borderRadius:V4,minHeight:400,padding:16,marginTop:16});function W4(){const[e,t]=o.useState([]),[a,l]=o.useState([]),[b,c]=o.useState(!1),h=o.useRef(null),F=[{label:"Блок 1",value:"1"},{label:"Блок 2",value:"2"},{label:"Блок 3",value:"3"}],p=[{label:"Трайб 1",value:"1"},{label:"Трайб 2",value:"2"},{label:"Трайб 3",value:"3"}],E=e.length>0||a.length>0;return u.jsxDEV(r,{mainBlock:u.jsxDEV(r.FiltersButtonWithPopover,{popoverProps:{ref:h},state:[b,c],title:"Фильтры",subtitle:"Кастомный таргет через renderTarget",redSquare:E,renderTarget:({onClick:g,isOpen:k,isRedDotVisible:D,RedDot:y})=>u.jsxDEV(R4,{onClick:g,size:"s",view:k?"accent":"secondary",style:{position:"relative"},children:[u.jsxDEV(j4,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:168,columnNumber:15},this),u.jsxDEV(y,{visible:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:169,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:162,columnNumber:13},this),content:u.jsxDEV(u.Fragment,{children:[u.jsxDEV("div",{style:{width:"100%"},children:[u.jsxDEV(z,{style:{marginBottom:"8px"},children:"Блок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:175,columnNumber:17},this),u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:"Блок",value:e,onChange:t,items:F,listMaxHeight:"350px",portal:h,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:177,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:176,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:174,columnNumber:15},this),u.jsxDEV("div",{style:{width:"100%"},children:[u.jsxDEV(z,{style:{marginBottom:"8px"},children:"Трайб"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:192,columnNumber:17},this),u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:"Трайб",value:a,onChange:l,items:p,listMaxHeight:"350px",portal:h,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:194,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:193,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:191,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:173,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:155,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:153,columnNumber:5},this)}function g4(){var b;const e=I4(),t=e==null?void 0:e.selectedSegmentItems[0],a=[{id:"item_0",bg:"pink",content:"Контент сегмента 1"},{id:"item_1",bg:"brown",content:"Контент сегмента 2"},{id:"item_2",bg:"darkgrey",content:"Контент сегмента 3"}],l=a.find(c=>c.id===t)||a[0];return u.jsxDEV(z4,{style:{backgroundColor:l?l.bg:"white"},children:[u.jsxDEV(M4,{children:["Segment ",(b=l==null?void 0:l.id)==null?void 0:b.split("_")[1]," "]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:233,columnNumber:7},this),u.jsxDEV("p",{children:l==null?void 0:l.content},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:234,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:228,columnNumber:5},this)}const O={name:"FiltersActions с адаптивностью",...X({previewSource:"shown",preCode:`
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


        `}),render:()=>{const[e,t]=o.useReducer(B4,v4),[a,l]=o.useState({containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0}),b=o.useState(!1),[c,h]=o.useState(""),F=T4(c,300),p=o.useRef(null),E=C("blocks",10),g=C("tribes",10),k=C("allocation",10),D=C("brics",10),y=o.useCallback(s=>{l(s)},[l]),{filterList:w,filterListOpened:j,clearAll:T}=E4({filters:e,options:{blocks:E,tribes:g,allocation:k,brics:D},updateFilters:(s,n)=>t({[s]:n}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},switcher:{label:"Чекбокс",clearedValue:!1},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},brics:{label:"Брикс",clearedValue:[]}},order:["switcher"]}),i=o.useMemo(()=>[{id:"segments",element:u.jsxDEV(A4,{hasBackground:!0,size:"xs",style:{marginRight:"8px"},children:Array(3).fill(0).map((s,n)=>u.jsxDEV(r.SegmentItem,{value:`item_${n}`,label:`Сегмент${n+1}`},`item:${n}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:410,columnNumber:19},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:402,columnNumber:13},void 0)},{id:"search",element:u.jsxDEV(O4,{value:e.searchedV,onChange:s=>t({searchedV:s.target.value}),autoComplete:"off",style:{marginRight:"8px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:424,columnNumber:13},void 0)},{id:"switcher",element:u.jsxDEV(r.SwitcherFilter,{checked:e.switcher,label:"Активные",onChange:s=>t({switcher:s.target.checked})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:437,columnNumber:13},void 0),metadata:{labelForSearchingInPopover:"switcher"}},{id:"blocks",element:u.jsxDEV(r.TooltipList,{groupLabel:"Блок",fullWidth:!0,items:e.blocks.map(s=>{const n=E.find(f=>f.value===s);return n==null?void 0:n.label}).filter(s=>!!s),trigger:e.blocks.length>0?"hover":"none",mouseEnterDelay:750,frame:p,children:u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:e.blocks,onChange:s=>t({blocks:s}),items:E,listMaxHeight:"350px",portal:p,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:473,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:468,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:453,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Blocks",labelForSearchingInPopover:"blocks"}},{id:"tribes",element:u.jsxDEV(r.TooltipList,{groupLabel:"Трайб",fullWidth:!0,items:e.tribes.map(s=>{const n=g.find(f=>f.value===s);return n==null?void 0:n.label}).filter(s=>!!s),trigger:e.tribes.length>0?"hover":"none",mouseEnterDelay:750,frame:p,children:u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:e.tribes,onChange:s=>t({tribes:s}),items:g,listMaxHeight:"350px",portal:p,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:521,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:516,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:500,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Tribes",labelForSearchingInPopover:"tribes"}},{id:"allocation",element:u.jsxDEV(B,{placeholder:"Placeholder",size:"s",value:e.allocation,onChange:s=>t({allocation:s}),items:k,listMaxHeight:"350px",portal:p,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:548,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Allocation",labelForSearchingInPopover:"allocation"}},{id:"brics",element:u.jsxDEV(r.TooltipList,{groupLabel:"Брикс",fullWidth:!0,items:e.brics.map(s=>{const n=D.find(f=>f.value===s);return n==null?void 0:n.label}).filter(s=>!!s),trigger:e.brics.length>0?"hover":"none",mouseEnterDelay:750,frame:p,children:u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:e.brics,onChange:s=>t({brics:s}),items:D,listMaxHeight:"350px",portal:p,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:590,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:585,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:571,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Brics",labelForSearchingInPopover:"brics"}},{id:"resetButton",element:u.jsxDEV(r.ResetAllFiltersButton,{isVisible:w.length>0,onClick:T,disabled:w.length===0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:617,columnNumber:13},void 0)}],[e.searchedV,e.switcher,e.blocks,e.tribes,e.allocation,e.brics,D,E,g,k,w.length,T]),d=o.useMemo(()=>({1754:{visible:["segments","search","switcher","blocks","tribes","allocation","resetButton"],inOverlay:["brics"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1578:{visible:["segments","search","switcher","blocks","tribes","resetButton"],inOverlay:["brics","allocation"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1486:{visible:["segments","search","switcher","blocks","resetButton"],inOverlay:["tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1260:{visible:["segments","search","switcher","resetButton"],inOverlay:["blocks","tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1068:{visible:["segments","search","resetButton"],inOverlay:["switcher","blocks","tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},960:{visible:["segments","search"],inOverlay:["switcher","blocks","allocation","tribes","brics"],hidden:["resetButton"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!0}},0:{visible:["segments","search"],inOverlay:["switcher","blocks","tribes","allocation","brics"],hidden:["resetButton"],modifications:{segments:{width:"auto"},search:x,blocks:m,tribes:m,allocation:m},customActions:{secondaryButtonVisible:!1,resetInPopoverFooter:!0}}}),[]),{visibleItems:v,overlayItems:N,modifications:k4,customActions:Q,hiddenItems:D4,getItemStyle:C4,hasActiveFilters:x4}=S4({items:i,width:a.availableMainBlockWidth,breakpoints:d}),W=x4(N,e),I=Q.secondaryButtonVisible??!0,R=Q.resetInPopoverFooter??!1,L=R?D4.find(s=>s.id==="resetButton"):v.find(s=>s.id==="resetButton"),y4=v.filter(s=>s.id!=="resetButton"),q=o.useMemo(()=>{if(!F.trim())return N;const s=F.toLowerCase();return N.filter(n=>{var f,G,J;return(J=(G=(f=n==null?void 0:n.metadata)==null?void 0:f.labelForSearchingInPopover)==null?void 0:G.toLowerCase())==null?void 0:J.includes(s)})},[N,F]),U=o.useMemo(()=>{const s=[{value:"action1",label:"Действие 1"},{value:"action2",label:"Действие 2"}];return I||s.push({value:"secondary",label:"Согласовать (второстепенное)"}),s},[I]),w4=o.useCallback(()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r.DotsIconButton,{dropdownProps:{items:U},iconOrientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:853,columnNumber:11},void 0),I&&u.jsxDEV(M,{size:"s",view:"secondary",children:"Согласовать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:862,columnNumber:13},void 0),u.jsxDEV(M,{size:"s",view:"accent",children:"Создать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:868,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:851,columnNumber:9},void 0),[I,U]);return u.jsxDEV(f4,{defaultSelected:["item_0"],children:[u.jsxDEV("div",{style:{marginBottom:16,padding:12,backgroundColor:"#f0f0f0",borderRadius:8,fontFamily:"monospace",fontSize:"12px",minHeight:"146px"},children:[u.jsxDEV("div",{children:u.jsxDEV("strong",{children:"📐 Размеры:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:891,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:890,columnNumber:11},void 0),u.jsxDEV("div",{children:["Available width: ",Math.round(a.availableMainBlockWidth),"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:893,columnNumber:11},void 0),u.jsxDEV("div",{style:{marginTop:8},children:[u.jsxDEV("strong",{children:"✅ Видимые:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:897,columnNumber:13},void 0)," ",v.map(s=>s.id).join(", ")]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:896,columnNumber:11},void 0),N.length>0&&u.jsxDEV("div",{style:{color:"orange"},children:[u.jsxDEV("strong",{children:"📤 В popover:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:902,columnNumber:15},void 0)," ",N.map(s=>s.id).join(", "),W&&" 🔴"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:901,columnNumber:13},void 0),u.jsxDEV("div",{style:{marginTop:8},children:[u.jsxDEV("div",{style:{color:I?"green":"red"},children:['🔘 Второстепенная кнопка "Согласовать" в правой части:'," ",I?"Видна":"В dropdown"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:908,columnNumber:13},void 0),u.jsxDEV("div",{style:{color:R?"orange":"green"},children:["🔄 Reset кнопка:"," ",R?"В footer popover":"В mainBlock"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:912,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:907,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:879,columnNumber:9},void 0),u.jsxDEV(r,{containerProps:{$css:{maxWidth:"calc(100vw - 32px)"}},onResize:y,mainBlock:u.jsxDEV(u.Fragment,{children:[y4.map(s=>{const n=k4[s.id],f=C4(n,a.availableMainBlockWidth);return u.jsxDEV("div",{style:{...f},children:s.element},s.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:933,columnNumber:19},void 0)}),u.jsxDEV(r.FiltersButtonWithPopover,{popoverProps:{ref:p},state:b,title:"Ещё фильтры",subtitle:"Какой-то сабтайтл, если нужен.",redSquare:W,searchable:!0,searchValue:c,onSearchChange:h,content:u.jsxDEV(u.Fragment,{children:q.map(s=>{var n,f;return u.jsxDEV("div",{style:{width:"100%"},children:[((n=s==null?void 0:s.metadata)==null?void 0:n.labelInPopoverFilter)&&u.jsxDEV(z,{style:{marginBottom:"8px"},children:(f=s==null?void 0:s.metadata)==null?void 0:f.labelInPopoverFilter},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:957,columnNumber:27},void 0),s.element]},s.id,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:955,columnNumber:23},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:953,columnNumber:19},void 0),emptySearchContent:q.length===0&&c?u.jsxDEV("div",{children:"По запросу ничего не найдено"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:968,columnNumber:21},void 0):null,footer:R&&L&&W?u.jsxDEV("div",{style:{display:"flex",width:"100%",justifyContent:"end"},children:L.element},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:975,columnNumber:21},void 0):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:940,columnNumber:15},void 0),L&&!R&&u.jsxDEV("div",{children:L.element},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:989,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:923,columnNumber:13},void 0),listOfFilters:u.jsxDEV(r.ListOfFilters,{clearAll:T,opened:j,items:w,showResetAllFiltersButton:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:994,columnNumber:13},void 0),activeButtonsBlock:w4()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:919,columnNumber:9},void 0),u.jsxDEV(g4,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1003,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:877,columnNumber:7},void 0)}},S={name:"FiltersActions без адаптивности",...X({previewSource:"shown",preCode:`
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
        `}),render:()=>{const[e,t]=o.useReducer(B4,v4),[a,l]=o.useState(!1),b=o.useRef(null),c=C("blocks",10),h=C("tribes",10),F=C("allocation",10),p=C("brics",10),{filterList:E,filterListOpened:g,clearAll:k}=E4({filters:e,options:{blocks:c,tribes:h,allocation:F,brics:p},updateFilters:(i,d)=>t({[i]:d}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},switcher:{label:"Чекбокс",clearedValue:!1},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},brics:{label:"Брикс",clearedValue:[]}},order:["switcher"]}),D=o.useMemo(()=>[{id:"segments",element:u.jsxDEV(A4,{hasBackground:!0,size:"xs",style:{marginRight:"8px"},children:Array(3).fill(0).map((i,d)=>u.jsxDEV(r.SegmentItem,{value:`item_${d}`,label:`Сегмент ${d+1}`},`item:${d}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1149,columnNumber:19},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1141,columnNumber:13},void 0)},{id:"search",element:u.jsxDEV(r.TextFieldSearch,{value:e.searchedV,onChange:i=>t({searchedV:i.target.value}),autoComplete:"off",placeholder:"Поиск",style:{marginRight:"8px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1163,columnNumber:13},void 0)},{id:"switcher",element:u.jsxDEV(r.SwitcherFilter,{checked:e.switcher,label:"Активные",onChange:i=>t({switcher:i.target.checked})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1177,columnNumber:13},void 0)},{id:"allocation",element:u.jsxDEV(B,{size:"s",placeholder:"Allocation",value:e.allocation,onChange:i=>t({allocation:i}),items:F,listMaxHeight:"350px",portal:b,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1189,columnNumber:13},void 0)}],[e.searchedV,e.switcher,e.allocation,F]),y=o.useMemo(()=>[{id:"blocks",element:u.jsxDEV(r.TooltipList,{groupLabel:"Блок",fullWidth:!0,items:e.blocks.map(i=>{const d=c.find(v=>v.value===i);return d==null?void 0:d.label}).filter(i=>!!i),trigger:e.blocks.length>0?"hover":"none",mouseEnterDelay:750,frame:b,children:u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{isTargetAmount:!0,size:"s",multiple:!0,value:e.blocks,onChange:i=>t({blocks:i}),items:c,listMaxHeight:"350px",portal:b,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1238,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1233,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1217,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Blocks"}},{id:"tribes",element:u.jsxDEV(r.TooltipList,{groupLabel:"Трайб",fullWidth:!0,items:e.tribes.map(i=>{const d=h.find(v=>v.value===i);return d==null?void 0:d.label}).filter(i=>!!i),trigger:e.tribes.length>0?"hover":"none",mouseEnterDelay:750,frame:b,children:u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{isTargetAmount:!0,size:"s",multiple:!0,value:e.tribes,onChange:i=>t({tribes:i}),items:h,listMaxHeight:"350px",portal:b,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1282,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1277,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1261,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Tribes"}},{id:"brics",element:u.jsxDEV(r.TooltipList,{groupLabel:"Брикс",fullWidth:!0,items:e.brics.map(i=>{const d=p.find(v=>v.value===i);return d==null?void 0:d.label}).filter(i=>!!i),trigger:e.brics.length>0?"hover":"none",mouseEnterDelay:750,frame:b,children:u.jsxDEV("div",{style:{width:"100%"},children:u.jsxDEV(B,{isTargetAmount:!0,size:"s",multiple:!0,value:e.brics,onChange:i=>t({brics:i}),items:p,listMaxHeight:"350px",portal:b,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1324,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1319,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1305,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Brics"}}],[e.blocks,e.tribes,e.brics,p,c,h]),w=y.some(i=>i.id==="blocks"?e.blocks.length>0:i.id==="tribes"?e.tribes.length>0:i.id==="brics"?e.brics.length>0:!1),j=o.useMemo(()=>[{value:"action1",label:"Действие 1"},{value:"action2",label:"Действие 2"}],[]),T=o.useCallback(()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(r.DotsIconButton,{dropdownProps:{items:j},iconOrientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1374,columnNumber:11},void 0),u.jsxDEV(M,{size:"s",view:"secondary",children:"Согласовать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1382,columnNumber:11},void 0),u.jsxDEV(M,{size:"s",view:"accent",children:"Создать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1387,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1372,columnNumber:9},void 0),[j]);return u.jsxDEV(f4,{defaultSelected:["item_0"],children:[u.jsxDEV(r,{mainBlock:u.jsxDEV(u.Fragment,{children:[D.map(i=>u.jsxDEV("div",{children:i.element},i.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1402,columnNumber:17},void 0)),u.jsxDEV(r.FilterPopover,{popoverProps:{ref:b},state:[a,l],title:"Дополнительные фильтры",subtitle:"Фильтры с множественным выбором",redSquare:w,content:u.jsxDEV(u.Fragment,{children:y.map(i=>{var d;return u.jsxDEV("div",{style:{width:"100%",marginBottom:"16px"},children:[u.jsxDEV(z,{style:{marginBottom:"8px"},children:(d=i==null?void 0:i.metadata)==null?void 0:d.labelInPopoverFilter},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1422,columnNumber:25},void 0),i.element]},i.id,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1418,columnNumber:23},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1416,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1406,columnNumber:15},void 0),u.jsxDEV(r.ResetAllFiltersButton,{isVisible:E.length>0,onClick:k,disabled:E.length===0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1433,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1399,columnNumber:13},void 0),listOfFilters:u.jsxDEV(r.ListOfFilters,{clearAll:k,opened:g,items:E,showResetAllFiltersButton:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1441,columnNumber:13},void 0),activeButtonsBlock:T()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1397,columnNumber:9},void 0),u.jsxDEV(g4,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1450,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1396,columnNumber:7},void 0)}},V={name:"FiltersActions с кастомным таргетом Popover",...X({previewSource:"shown",preCode:`
    import {
      FiltersActions,
      IconButton,
      IconSettingsFilter,
      Combobox,
      BodyS,
    } from '@daisforge/ui';
    import React, { useRef, useState } from 'react';

    ${$("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","CustomTargetFiltersExample")}
        `}),render:()=>u.jsxDEV(W4,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1482,columnNumber:17},void 0)},H4="500px !important",_=["Активный фильтр номер один","Активный фильтр номер два","Активный фильтр номер три","Активный фильтр номер четыре","Активный фильтр номер пять","Активный фильтр номер шесть"];function $4(){const[e,t]=o.useState(()=>_.map(()=>!1)),a=o.useCallback(c=>{t(h=>h.map((F,p)=>p===c?!F:F))},[]),l=o.useCallback(()=>{t(_.map(()=>!1))},[]),b=o.useMemo(()=>_.reduce((c,h,F)=>(e[F]&&c.push({id:F,label:h,onClick:()=>a(F)}),c),[]),[e,a]);return{activeFilters:e,toggleFilter:a,clearAll:l,items:b}}function X4(){const{activeFilters:e,toggleFilter:t,clearAll:a,items:l}=$4();return u.jsxDEV("div",{style:{padding:16},children:u.jsxDEV(r,{containerProps:{$css:{width:H4}},mainBlock:u.jsxDEV(u.Fragment,{children:_.map((b,c)=>u.jsxDEV(M,{size:"xs",view:"secondary",type:"button","data-testid":`arrows-test-toggle-filter-${c}`,onClick:()=>t(c),children:[e[c]?"✓":"-",e[c]??1]},b,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1546,columnNumber:15},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1544,columnNumber:11},this),listOfFilters:u.jsxDEV(r.ListOfFilters,{clearAll:a,opened:l.length>0,items:l,showResetAllFiltersButton:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1561,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1541,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1540,columnNumber:5},this)}const P={name:"Список применённых фильтров: стрелки-скролл появляются сами при переполнении",parameters:{screenshot:{skip:!0}},render:()=>u.jsxDEV(X4,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1588,columnNumber:17},void 0),play:async({canvasElement:e})=>{const t=N4(e),a=()=>t.queryByLabelText("Следующий таб");await H(()=>{if(a())throw new Error("Стрелка «Следующий таб» не должна быть видна без активных фильтров")}),await A.click(t.getByTestId("arrows-test-toggle-filter-0")),await A.click(t.getByTestId("arrows-test-toggle-filter-1")),await A.click(t.getByTestId("arrows-test-toggle-filter-2")),await A.click(t.getByTestId("arrows-test-toggle-filter-3")),await A.click(t.getByTestId("arrows-test-toggle-filter-4")),await A.click(t.getByTestId("arrows-test-toggle-filter-5")),await H(()=>{if(!a())throw new Error("Стрелка «Следующий таб» не появилась сама после переполнения списка чипов активных фильтров")},{timeout:3e3}),await A.click(t.getByTestId("arrows-test-toggle-filter-2")),await A.click(t.getByTestId("arrows-test-toggle-filter-3")),await A.click(t.getByTestId("arrows-test-toggle-filter-4")),await A.click(t.getByTestId("arrows-test-toggle-filter-5")),await H(()=>{if(a())throw new Error("Стрелка «Следующий таб» осталась видна, хотя переполнения списка чипов больше нет")},{timeout:3e3})}};var K,Y,Z,u4,e4;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Пример истории с адаптивным поведением на основе ширины mainBlock\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(e4=(u4=O.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var s4,t4,i4,o4,n4;S.parameters={...S.parameters,docs:{...(s4=S.parameters)==null?void 0:s4.docs,source:{originalSource:`{
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
}`,...(i4=(t4=S.parameters)==null?void 0:t4.docs)==null?void 0:i4.source},description:{story:"Пример использования FiltersActions без адаптивности с частичными фильтрами в Popover.\nОсновные фильтры видны статически, а последние 3 чекбокса (blocks, tribes, brics) скрыты в Popover кнопке.\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(n4=(o4=S.parameters)==null?void 0:o4.docs)==null?void 0:n4.description}}};var r4,l4,a4,c4,d4;V.parameters={...V.parameters,docs:{...(r4=V.parameters)==null?void 0:r4.docs,source:{originalSource:`{
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
}`,...(a4=(l4=V.parameters)==null?void 0:l4.docs)==null?void 0:a4.source},description:{story:"Пример замены кнопки-таргета Popover собственным элементом через `renderTarget`.\nВместо дефолтной кнопки «Ещё фильтры» рендерится своя IconButton, при этом\nоткрытие Popover и красная точка-индикатор продолжают работать.\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(d4=(c4=V.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};var m4,b4,p4,F4,h4;P.parameters={...P.parameters,docs:{...(m4=P.parameters)==null?void 0:m4.docs,source:{originalSource:`{
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
}`,...(p4=(b4=P.parameters)==null?void 0:b4.docs)==null?void 0:p4.source},description:{story:`Регрессионный DOM-тест (без скриншотов): стрелки-скролл в блоке применённых
фильтров должны появляться сами - без ручного скролла пользователем мышью/
трекпадом - как только чипы перестают помещаться по ширине, и пропадать
обратно, когда чипов снова становится мало.

Компонент маунтится без активных фильтров в контейнере фиксированной ширины
(500px - для предсказуемого переполнения). Затем через play включается
несколько фильтров: чипы переполняют список -> должна появиться стрелка
«Следующий таб». После часть фильтров выключается обратно: переполнение
исчезает -> стрелка должна пропасть - тоже сама, без скролла.`,...(h4=(F4=P.parameters)==null?void 0:F4.docs)==null?void 0:h4.description}}};const Q4=["FilterActionsStory","SimpleFiltersActionsStory","CustomTargetFiltersActionsStory","ScrollArrowsAppearWithoutManualScrollStory"],nu=Object.freeze(Object.defineProperty({__proto__:null,CustomTargetFiltersActionsStory:V,FilterActionsStory:O,ScrollArrowsAppearWithoutManualScrollStory:P,SimpleFiltersActionsStory:S,__namedExportsOrder:Q4,default:L4},Symbol.toStringTag,{value:"Module"}));export{nu as F};
