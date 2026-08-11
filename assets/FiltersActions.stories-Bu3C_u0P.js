import{d as e,r}from"./react-D2T61mpp.js";import{g as _}from"./getFuncAsString-NmEhMY7T.js";import{s as z}from"./storySourceDoc-tVKyHcEN.js";import{S as A}from"./Table-D8HUedaB.js";import{u as le}from"./ListOfFilters-C5Apgwx-.js";import{a as ke}from"./TextField-DnCCqDPb.js";import{b as o,u as Ee}from"./FiltersActions-Bchg31Hk.js";import{c as ge}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as Be}from"./styled-components-BEUoKpTk.js";import{u as De}from"./utils-CVuocYtt.js";import{a6 as ae,b as T,p as j,I as Ce,h as xe}from"./@salutejs/sdds-finai-DlWkRcaV.js";import{c6 as ce,ca as ye}from"./vendor-Q_a-vZxa.js";import{sN as Ne}from"./@salutejs/plasma-icons-CyB4sZm3.js";const Ie={title:"Композиции/FiltersActions",component:o,parameters:{docs:{toc:!0}},tags:["!autodocs"]},de=(s,n)=>({...s,...n}),me={searchedV:"",switcher:!1,blocks:[],tribes:[],allocation:"",brics:[]},we={searchedV:"Поиск",blocks:"Блок",tribes:"Трайб",allocation:"Аллокация",switcher:"Switcher filter",brics:"Брикс"},D=(s,n=10)=>r.useMemo(()=>Array(n).fill(0).map((p,c)=>({label:`${we[s]} ${c+1}`,value:c.toString()})),[s,n]),a={width:"168px",style:{flexShrink:0}},C={width:"auto",style:{minWidth:"168px",maxWidth:"700px",flex:1}},Oe=Be.div({backgroundColor:"pink",borderRadius:ge,minHeight:400,padding:16,marginTop:16});function Se(){const[s,n]=r.useState([]),[p,c]=r.useState([]),[d,F]=r.useState(!1),h=r.useRef(null),v=[{label:"Блок 1",value:"1"},{label:"Блок 2",value:"2"},{label:"Блок 3",value:"3"}],m=[{label:"Трайб 1",value:"1"},{label:"Трайб 2",value:"2"},{label:"Трайб 3",value:"3"}],f=s.length>0||p.length>0;return e.jsxDEV(o,{mainBlock:e.jsxDEV(o.FiltersButtonWithPopover,{popoverProps:{ref:h},state:[d,F],title:"Фильтры",subtitle:"Кастомный таргет через renderTarget",redSquare:f,renderTarget:({onClick:E,isOpen:g,isRedDotVisible:B,RedDot:x})=>e.jsxDEV(Ce,{onClick:E,size:"s",view:g?"accent":"secondary",style:{position:"relative"},children:[e.jsxDEV(Ne,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:167,columnNumber:15},this),e.jsxDEV(x,{visible:B},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:168,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:161,columnNumber:13},this),content:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{width:"100%"},children:[e.jsxDEV(j,{style:{marginBottom:"8px"},children:"Блок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:174,columnNumber:17},this),e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:"Блок",value:s,onChange:n,items:v,listMaxHeight:"350px",portal:h,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:176,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:175,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:173,columnNumber:15},this),e.jsxDEV("div",{style:{width:"100%"},children:[e.jsxDEV(j,{style:{marginBottom:"8px"},children:"Трайб"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:191,columnNumber:17},this),e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{size:"s",multiple:!0,isTargetAmount:!0,placeholder:"Трайб",value:p,onChange:c,items:m,listMaxHeight:"350px",portal:h,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:193,columnNumber:19},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:192,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:190,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:172,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:154,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:152,columnNumber:5},this)}function be(){var d;const s=ye(),n=s==null?void 0:s.selectedSegmentItems[0],p=[{id:"item_0",bg:"pink",content:"Контент сегмента 1"},{id:"item_1",bg:"brown",content:"Контент сегмента 2"},{id:"item_2",bg:"darkgrey",content:"Контент сегмента 3"}],c=p.find(F=>F.id===n)||p[0];return e.jsxDEV(Oe,{style:{backgroundColor:c?c.bg:"white"},children:[e.jsxDEV(xe,{children:["Segment ",(d=c==null?void 0:c.id)==null?void 0:d.split("_")[1]," "]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:232,columnNumber:7},this),e.jsxDEV("p",{children:c==null?void 0:c.content},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:233,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:227,columnNumber:5},this)}const w={name:"FiltersActions с адаптивностью",...z({previewSource:"shown",preCode:`
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

    ${_("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","SegmentContentWrapper")}


        `}),render:()=>{const[s,n]=r.useReducer(de,me),[p,c]=r.useState({containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0}),d=r.useState(!1),[F,h]=r.useState(""),v=De(F,300),m=r.useRef(null),f=D("blocks",10),E=D("tribes",10),g=D("allocation",10),B=D("brics",10),x=r.useCallback(u=>{c(u)},[c]),{filterList:y,filterListOpened:R,clearAll:V}=le({filters:s,options:{blocks:f,tribes:E,allocation:g,brics:B},updateFilters:(u,i)=>n({[u]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},switcher:{label:"Чекбокс",clearedValue:!1},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},brics:{label:"Брикс",clearedValue:[]}},order:["switcher"]}),t=r.useMemo(()=>[{id:"segments",element:e.jsxDEV(ae,{hasBackground:!0,size:"xs",style:{marginRight:"8px"},children:Array(3).fill(0).map((u,i)=>e.jsxDEV(o.SegmentItem,{value:`item_${i}`,label:`Сегмент${i+1}`},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:409,columnNumber:19},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:401,columnNumber:13},void 0)},{id:"search",element:e.jsxDEV(ke,{value:s.searchedV,onChange:u=>n({searchedV:u.target.value}),autoComplete:"off",style:{marginRight:"8px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:423,columnNumber:13},void 0)},{id:"switcher",element:e.jsxDEV(o.SwitcherFilter,{checked:s.switcher,label:"Активные",onChange:u=>n({switcher:u.target.checked})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:436,columnNumber:13},void 0),metadata:{labelForSearchingInPopover:"switcher"}},{id:"blocks",element:e.jsxDEV(o.TooltipList,{groupLabel:"Блок",fullWidth:!0,items:s.blocks.map(u=>{const i=f.find(b=>b.value===u);return i==null?void 0:i.label}).filter(u=>!!u),trigger:s.blocks.length>0?"hover":"none",mouseEnterDelay:750,frame:m,children:e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:s.blocks,onChange:u=>n({blocks:u}),items:f,listMaxHeight:"350px",portal:m,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:472,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:467,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:452,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Blocks",labelForSearchingInPopover:"blocks"}},{id:"tribes",element:e.jsxDEV(o.TooltipList,{groupLabel:"Трайб",fullWidth:!0,items:s.tribes.map(u=>{const i=E.find(b=>b.value===u);return i==null?void 0:i.label}).filter(u=>!!u),trigger:s.tribes.length>0?"hover":"none",mouseEnterDelay:750,frame:m,children:e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:s.tribes,onChange:u=>n({tribes:u}),items:E,listMaxHeight:"350px",portal:m,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:520,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:515,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:499,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Tribes",labelForSearchingInPopover:"tribes"}},{id:"allocation",element:e.jsxDEV(A,{placeholder:"Placeholder",size:"s",value:s.allocation,onChange:u=>n({allocation:u}),items:g,listMaxHeight:"350px",portal:m,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:547,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Allocation",labelForSearchingInPopover:"allocation"}},{id:"brics",element:e.jsxDEV(o.TooltipList,{groupLabel:"Брикс",fullWidth:!0,items:s.brics.map(u=>{const i=B.find(b=>b.value===u);return i==null?void 0:i.label}).filter(u=>!!u),trigger:s.brics.length>0?"hover":"none",mouseEnterDelay:750,frame:m,children:e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{placeholder:"Placeholder",isTargetAmount:!0,size:"s",multiple:!0,value:s.brics,onChange:u=>n({brics:u}),items:B,listMaxHeight:"350px",portal:m,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:589,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:584,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:570,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Brics",labelForSearchingInPopover:"brics"}},{id:"resetButton",element:e.jsxDEV(o.ResetAllFiltersButton,{isVisible:y.length>0,onClick:V,disabled:y.length===0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:616,columnNumber:13},void 0)}],[s.searchedV,s.switcher,s.blocks,s.tribes,s.allocation,s.brics,B,f,E,g,y.length,V]),l=r.useMemo(()=>({1754:{visible:["segments","search","switcher","blocks","tribes","allocation","resetButton"],inOverlay:["brics"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1578:{visible:["segments","search","switcher","blocks","tribes","resetButton"],inOverlay:["brics","allocation"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1486:{visible:["segments","search","switcher","blocks","resetButton"],inOverlay:["tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1260:{visible:["segments","search","switcher","resetButton"],inOverlay:["blocks","tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},1068:{visible:["segments","search","resetButton"],inOverlay:["switcher","blocks","tribes","allocation","brics"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!1}},960:{visible:["segments","search"],inOverlay:["switcher","blocks","allocation","tribes","brics"],hidden:["resetButton"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!0,resetInPopoverFooter:!0}},0:{visible:["segments","search"],inOverlay:["switcher","blocks","tribes","allocation","brics"],hidden:["resetButton"],modifications:{segments:{width:"auto"},search:C,blocks:a,tribes:a,allocation:a},customActions:{secondaryButtonVisible:!1,resetInPopoverFooter:!0}}}),[]),{visibleItems:k,overlayItems:N,modifications:pe,customActions:W,hiddenItems:Fe,getItemStyle:he,hasActiveFilters:fe}=Ee({items:t,width:p.availableMainBlockWidth,breakpoints:l}),L=fe(N,s),I=W.secondaryButtonVisible??!0,P=W.resetInPopoverFooter??!1,M=P?Fe.find(u=>u.id==="resetButton"):k.find(u=>u.id==="resetButton"),Ae=k.filter(u=>u.id!=="resetButton"),H=r.useMemo(()=>{if(!v.trim())return N;const u=v.toLowerCase();return N.filter(i=>{var b,X,Q;return(Q=(X=(b=i==null?void 0:i.metadata)==null?void 0:b.labelForSearchingInPopover)==null?void 0:X.toLowerCase())==null?void 0:Q.includes(u)})},[N,v]),$=r.useMemo(()=>{const u=[{value:"action1",label:"Действие 1"},{value:"action2",label:"Действие 2"}];return I||u.push({value:"secondary",label:"Согласовать (второстепенное)"}),u},[I]),ve=r.useCallback(()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o.DotsIconButton,{dropdownProps:{items:$},iconOrientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:852,columnNumber:11},void 0),I&&e.jsxDEV(T,{size:"s",view:"secondary",children:"Согласовать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:861,columnNumber:13},void 0),e.jsxDEV(T,{size:"s",view:"accent",children:"Создать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:867,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:850,columnNumber:9},void 0),[I,$]);return e.jsxDEV(ce,{defaultSelected:["item_0"],children:[e.jsxDEV("div",{style:{marginBottom:16,padding:12,backgroundColor:"#f0f0f0",borderRadius:8,fontFamily:"monospace",fontSize:"12px",minHeight:"146px"},children:[e.jsxDEV("div",{children:e.jsxDEV("strong",{children:"📐 Размеры:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:890,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:889,columnNumber:11},void 0),e.jsxDEV("div",{children:["Available width: ",Math.round(p.availableMainBlockWidth),"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:892,columnNumber:11},void 0),e.jsxDEV("div",{style:{marginTop:8},children:[e.jsxDEV("strong",{children:"✅ Видимые:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:896,columnNumber:13},void 0)," ",k.map(u=>u.id).join(", ")]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:895,columnNumber:11},void 0),N.length>0&&e.jsxDEV("div",{style:{color:"orange"},children:[e.jsxDEV("strong",{children:"📤 В popover:"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:901,columnNumber:15},void 0)," ",N.map(u=>u.id).join(", "),L&&" 🔴"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:900,columnNumber:13},void 0),e.jsxDEV("div",{style:{marginTop:8},children:[e.jsxDEV("div",{style:{color:I?"green":"red"},children:['🔘 Второстепенная кнопка "Согласовать" в правой части:'," ",I?"Видна":"В dropdown"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:907,columnNumber:13},void 0),e.jsxDEV("div",{style:{color:P?"orange":"green"},children:["🔄 Reset кнопка:"," ",P?"В footer popover":"В mainBlock"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:911,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:906,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:878,columnNumber:9},void 0),e.jsxDEV(o,{containerProps:{$css:{maxWidth:"calc(100vw - 32px)"}},onResize:x,mainBlock:e.jsxDEV(e.Fragment,{children:[Ae.map(u=>{const i=pe[u.id],b=he(i,p.availableMainBlockWidth);return e.jsxDEV("div",{style:{...b},children:u.element},u.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:932,columnNumber:19},void 0)}),e.jsxDEV(o.FiltersButtonWithPopover,{popoverProps:{ref:m},state:d,title:"Ещё фильтры",subtitle:"Какой-то сабтайтл, если нужен.",redSquare:L,searchable:!0,searchValue:F,onSearchChange:h,content:e.jsxDEV(e.Fragment,{children:H.map(u=>{var i,b;return e.jsxDEV("div",{style:{width:"100%"},children:[((i=u==null?void 0:u.metadata)==null?void 0:i.labelInPopoverFilter)&&e.jsxDEV(j,{style:{marginBottom:"8px"},children:(b=u==null?void 0:u.metadata)==null?void 0:b.labelInPopoverFilter},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:956,columnNumber:27},void 0),u.element]},u.id,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:954,columnNumber:23},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:952,columnNumber:19},void 0),emptySearchContent:H.length===0&&F?e.jsxDEV("div",{children:"По запросу ничего не найдено"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:967,columnNumber:21},void 0):null,footer:P&&M&&L?e.jsxDEV("div",{style:{display:"flex",width:"100%",justifyContent:"end"},children:M.element},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:974,columnNumber:21},void 0):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:939,columnNumber:15},void 0),M&&!P&&e.jsxDEV("div",{children:M.element},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:988,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:922,columnNumber:13},void 0),listOfFilters:e.jsxDEV(o.ListOfFilters,{clearAll:V,opened:R,items:y,showResetAllFiltersButton:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:993,columnNumber:13},void 0),activeButtonsBlock:ve()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:918,columnNumber:9},void 0),e.jsxDEV(be,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1002,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:876,columnNumber:7},void 0)}},O={name:"FiltersActions без адаптивности",...z({previewSource:"shown",preCode:`
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

    ${_("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","SegmentContentWrapper")}
        `}),render:()=>{const[s,n]=r.useReducer(de,me),[p,c]=r.useState(!1),d=r.useRef(null),F=D("blocks",10),h=D("tribes",10),v=D("allocation",10),m=D("brics",10),{filterList:f,filterListOpened:E,clearAll:g}=le({filters:s,options:{blocks:F,tribes:h,allocation:v,brics:m},updateFilters:(t,l)=>n({[t]:l}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},switcher:{label:"Чекбокс",clearedValue:!1},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},brics:{label:"Брикс",clearedValue:[]}},order:["switcher"]}),B=r.useMemo(()=>[{id:"segments",element:e.jsxDEV(ae,{hasBackground:!0,size:"xs",style:{marginRight:"8px"},children:Array(3).fill(0).map((t,l)=>e.jsxDEV(o.SegmentItem,{value:`item_${l}`,label:`Сегмент ${l+1}`},`item:${l}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1148,columnNumber:19},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1140,columnNumber:13},void 0)},{id:"search",element:e.jsxDEV(o.TextFieldSearch,{value:s.searchedV,onChange:t=>n({searchedV:t.target.value}),autoComplete:"off",placeholder:"Поиск",style:{marginRight:"8px"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1162,columnNumber:13},void 0)},{id:"switcher",element:e.jsxDEV(o.SwitcherFilter,{checked:s.switcher,label:"Активные",onChange:t=>n({switcher:t.target.checked})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1176,columnNumber:13},void 0)},{id:"allocation",element:e.jsxDEV(A,{size:"s",placeholder:"Allocation",value:s.allocation,onChange:t=>n({allocation:t}),items:v,listMaxHeight:"350px",portal:d,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1188,columnNumber:13},void 0)}],[s.searchedV,s.switcher,s.allocation,v]),x=r.useMemo(()=>[{id:"blocks",element:e.jsxDEV(o.TooltipList,{groupLabel:"Блок",fullWidth:!0,items:s.blocks.map(t=>{const l=F.find(k=>k.value===t);return l==null?void 0:l.label}).filter(t=>!!t),trigger:s.blocks.length>0?"hover":"none",mouseEnterDelay:750,frame:d,children:e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{isTargetAmount:!0,size:"s",multiple:!0,value:s.blocks,onChange:t=>n({blocks:t}),items:F,listMaxHeight:"350px",portal:d,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1237,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1232,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1216,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Blocks"}},{id:"tribes",element:e.jsxDEV(o.TooltipList,{groupLabel:"Трайб",fullWidth:!0,items:s.tribes.map(t=>{const l=h.find(k=>k.value===t);return l==null?void 0:l.label}).filter(t=>!!t),trigger:s.tribes.length>0?"hover":"none",mouseEnterDelay:750,frame:d,children:e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{isTargetAmount:!0,size:"s",multiple:!0,value:s.tribes,onChange:t=>n({tribes:t}),items:h,listMaxHeight:"350px",portal:d,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1281,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1276,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1260,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Tribes"}},{id:"brics",element:e.jsxDEV(o.TooltipList,{groupLabel:"Брикс",fullWidth:!0,items:s.brics.map(t=>{const l=m.find(k=>k.value===t);return l==null?void 0:l.label}).filter(t=>!!t),trigger:s.brics.length>0?"hover":"none",mouseEnterDelay:750,frame:d,children:e.jsxDEV("div",{style:{width:"100%"},children:e.jsxDEV(A,{isTargetAmount:!0,size:"s",multiple:!0,value:s.brics,onChange:t=>n({brics:t}),items:m,listMaxHeight:"350px",portal:d,zIndex:"9001"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1323,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1318,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1304,columnNumber:13},void 0),metadata:{labelInPopoverFilter:"Brics"}}],[s.blocks,s.tribes,s.brics,m,F,h]),y=x.some(t=>t.id==="blocks"?s.blocks.length>0:t.id==="tribes"?s.tribes.length>0:t.id==="brics"?s.brics.length>0:!1),R=r.useMemo(()=>[{value:"action1",label:"Действие 1"},{value:"action2",label:"Действие 2"}],[]),V=r.useCallback(()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o.DotsIconButton,{dropdownProps:{items:R},iconOrientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1373,columnNumber:11},void 0),e.jsxDEV(T,{size:"s",view:"secondary",children:"Согласовать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1381,columnNumber:11},void 0),e.jsxDEV(T,{size:"s",view:"accent",children:"Создать"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1386,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1371,columnNumber:9},void 0),[R]);return e.jsxDEV(ce,{defaultSelected:["item_0"],children:[e.jsxDEV(o,{mainBlock:e.jsxDEV(e.Fragment,{children:[B.map(t=>e.jsxDEV("div",{children:t.element},t.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1401,columnNumber:17},void 0)),e.jsxDEV(o.FilterPopover,{popoverProps:{ref:d},state:[p,c],title:"Дополнительные фильтры",subtitle:"Фильтры с множественным выбором",redSquare:y,content:e.jsxDEV(e.Fragment,{children:x.map(t=>{var l;return e.jsxDEV("div",{style:{width:"100%",marginBottom:"16px"},children:[e.jsxDEV(j,{style:{marginBottom:"8px"},children:(l=t==null?void 0:t.metadata)==null?void 0:l.labelInPopoverFilter},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1421,columnNumber:25},void 0),t.element]},t.id,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1417,columnNumber:23},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1415,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1405,columnNumber:15},void 0),e.jsxDEV(o.ResetAllFiltersButton,{isVisible:f.length>0,onClick:g,disabled:f.length===0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1432,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1398,columnNumber:13},void 0),listOfFilters:e.jsxDEV(o.ListOfFilters,{clearAll:g,opened:E,items:f,showResetAllFiltersButton:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1440,columnNumber:13},void 0),activeButtonsBlock:V()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1396,columnNumber:9},void 0),e.jsxDEV(be,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1449,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1395,columnNumber:7},void 0)}},S={name:"FiltersActions с кастомным таргетом Popover",...z({previewSource:"shown",preCode:`
    import {
      FiltersActions,
      IconButton,
      IconSettingsFilter,
      Combobox,
      BodyS,
    } from '@daisforge/ui';
    import React, { useRef, useState } from 'react';

    ${_("packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx","CustomTargetFiltersExample")}
        `}),render:()=>e.jsxDEV(Se,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx",lineNumber:1481,columnNumber:17},void 0)};var q,U,G,J,K;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(U=w.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:"Пример истории с адаптивным поведением на основе ширины mainBlock\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Y,Z,ee,ue,se;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Пример использования FiltersActions без адаптивности с частичными фильтрами в Popover.\nОсновные фильтры видны статически, а последние 3 чекбокса (blocks, tribes, brics) скрыты в Popover кнопке.\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(se=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:se.description}}};var te,ie,ne,oe,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:"Пример замены кнопки-таргета Popover собственным элементом через `renderTarget`.\nВместо дефолтной кнопки «Ещё фильтры» рендерится своя IconButton, при этом\nоткрытие Popover и красная точка-индикатор продолжают работать.\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};const Ve=["FilterActionsStory","SimpleFiltersActionsStory","CustomTargetFiltersActionsStory"],qe=Object.freeze(Object.defineProperty({__proto__:null,CustomTargetFiltersActionsStory:S,FilterActionsStory:w,SimpleFiltersActionsStory:O,__namedExportsOrder:Ve,default:Ie},Symbol.toStringTag,{value:"Module"}));export{qe as F};
