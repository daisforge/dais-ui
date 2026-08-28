import{r as k,d as e}from"./react-D2T61mpp.js";import{g as v}from"./getFuncAsString-C1kndaLg.js";import{s as D}from"./storySourceDoc-tVKyHcEN.js";import{A as o,c as de}from"./AnalyticalWidget-Wj7S5_Z8.js";import{C as ce}from"./Collapse-CZI72KSB.js";import{u as F}from"./ListOfFilters-DGvhrxSe.js";import{H as L}from"./styled-components-C32trI5d.js";import{f as N,D as W,u as r,l as B,g as E,d as f,a as V}from"./utils-BHDbbSeK.js";import{a2 as me,b as pe,a7 as O,F as w,a8 as re,Q as ue}from"./@salutejs/sdds-finai-CDRzBbTc.js";import{c8 as T}from"./vendor-DrvHogBM.js";const ge={title:"Композиции/AnalyticalWidget",tags:["!autodocs"],parameters:{docs:{}},excludeStories:["CANVAS"],component:o},fe=`
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  SegmentItem,
  AnalyticalWidget,
  textInfo
} from '@daisforge/ui';
import type { ItemOrGroup } from '@daisforge/ui';

import React, { useMemo, useReducer, useState } from 'react';

type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: '',
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню',
};

const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
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

  ${v("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${v("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

  const GridContainerL = styled.div\`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 512px);
    grid-auto-flow: dense;
    width: 100%;
    max-width: 1556px;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;

\`;

`,be=`
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  SegmentItem,
  AnalyticalWidget,
  textInfo
} from '@daisforge/ui';
import type { ItemOrGroup } from '@daisforge/ui';

import React, { useMemo, useReducer, useState } from 'react';

type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: '',
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню',
};

const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
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

  ${v("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${v("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

  const GridContainerL = styled.div\`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 248px);
    grid-auto-flow: dense;
    width: 100%;
    max-width: 1556px;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;

\`;

`,ye=`
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  SegmentItem,
  AnalyticalWidget,
  textInfo
} from '@daisforge/ui';
import type { ItemOrGroup } from '@daisforge/ui';

import React, { useMemo, useReducer, useState } from 'react';

type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: '',
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню',
};

const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
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

  ${v("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${v("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

  const GridContainerL = styled.div\`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 248px);
    grid-auto-flow: dense;
    width: 100%;
    max-width: 1556px;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;

\`;

`,ke=L.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 512px);
  grid-auto-flow: dense;
  width: 100%;
  max-width: 1556px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;

  @media (min-width: 1440px) and (max-width: 1919px) {
    grid-auto-rows: minmax(0, 512px);
  }

  @media (min-width: 1920px) {
    grid-auto-rows: minmax(0, 512px);
  }

  @media (max-width: 1200px) {
    grid-auto-rows: minmax(0, 512px);
  }
`,h={...D({preCode:fe}),render:()=>{const[l,a]=k.useReducer(N,W),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),p=Array(3).fill(0),{filterList:c,filterListOpened:g}=F({filters:l,options:{blocks:d,tribes:b,allocation:y,filterButton:V,dotsButton:f},updateFilters:(t,i)=>a({[t]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),n=c.map(t=>"groupLabel"in t?t.items.map(i=>({text:String(i.label),view:"default",hasClear:!1,onClick:i.onClick})):{text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick}).flat();return e.jsxDEV(ke,{children:e.jsxDEV(T,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(o,{size:"l",headerSlot:e.jsxDEV(o.Header,{title:"Analytic widget L",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(w,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(re,{hasBackground:!0,size:"xs",children:p.map((t,i)=>e.jsxDEV(ue,{value:`item_${i}`,label:`Label${i+1}`,size:"xs",view:"primary"},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:417,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:415,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:408,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:403,columnNumber:17},void 0),topSlot:e.jsxDEV(w,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(o.Chips,{opened:g,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:435,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:434,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:B()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:445,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:400,columnNumber:13},void 0),e.jsxDEV(o.DotsIconButton,{absolute:!0,dropdownProps:{items:E("dotsButton",f,c),onItemSelect(t){var i,u;a({dotsButton:l.dotsButton===((i=t.value)==null?void 0:i.toString())?"":((u=t.value)==null?void 0:u.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:460,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:394,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:393,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:392,columnNumber:7},void 0)}},he=L.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 248px);
  grid-auto-flow: dense;
  width: 100%;
  max-width: 1556px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;

  @media (min-width: 1440px) and (max-width: 1919px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (min-width: 1920px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (max-width: 1200px) {
    grid-auto-rows: minmax(0, 248px);
  }
`,x={...D({preCode:be}),render:()=>{const[l,a]=k.useReducer(N,W),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),p=Array(3).fill(0),{filterList:c,filterListOpened:g}=F({filters:l,options:{blocks:d,tribes:b,allocation:y,filterButton:V,dotsButton:f},updateFilters:(t,i)=>a({[t]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),n=c.map((t,i)=>"groupLabel"in t?t.items.map((u,s)=>({text:String(u.label),view:"default",hasClear:!1,onClick:u.onClick,key:`chip-key${i}-${s}-${u.label}`})):{text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick,key:`chip-key-${i}-${t.label}`}).flat();return e.jsxDEV(he,{children:e.jsxDEV(T,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(o,{size:"m",headerSlot:e.jsxDEV(o.Header,{title:"Analytic widget M",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(w,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(re,{hasBackground:!0,size:"xs",children:p.map((t,i)=>e.jsxDEV(ue,{value:`item_${i}`,label:`Label${i+1}`,size:"xs",view:"primary"},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:595,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:593,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:586,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:581,columnNumber:17},void 0),topSlot:e.jsxDEV(w,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(o.Chips,{opened:g,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:613,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:612,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:B()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:623,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:578,columnNumber:13},void 0),e.jsxDEV(o.DotsIconButton,{absolute:!0,dropdownProps:{items:E("dotsButton",f,c),onItemSelect(t){var i,u;a({dotsButton:l.dotsButton===((i=t.value)==null?void 0:i.toString())?"":((u=t.value)==null?void 0:u.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:638,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:572,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:571,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:570,columnNumber:7},void 0)}},xe=L.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 248px);
  grid-auto-flow: dense;
  width: 100%;
  max-width: 1556px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;

  @media (min-width: 1440px) and (max-width: 1919px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (min-width: 1920px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (max-width: 1200px) {
    grid-auto-rows: minmax(0, 248px);
  }
`,A={...D({preCode:ye}),render:()=>{const[l,a]=k.useReducer(N,W),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),{filterList:p,filterListOpened:c}=F({filters:l,options:{blocks:d,tribes:b,allocation:y,filterButton:V,dotsButton:f},updateFilters:(n,t)=>a({[n]:t}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),g=p.map(n=>"groupLabel"in n?n.items.map(t=>({text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick})):{text:String(n.label),view:"default",hasClear:!1,onClick:n.onClick}).flat();return e.jsxDEV(xe,{children:e.jsxDEV(T,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(o,{size:"s",headerSlot:e.jsxDEV(o.Header,{title:"Заголовок",badge:"TA",subtitle:"Подзаголовок здесь",infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:756,columnNumber:17},void 0),topSlot:e.jsxDEV(w,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(o.Chips,{opened:c,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:766,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:765,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:B()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:776,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:753,columnNumber:13},void 0),e.jsxDEV(o.DotsIconButton,{absolute:!0,dropdownProps:{items:E("dotsButton",f,p),onItemSelect(n){var t,i;a({dotsButton:l.dotsButton===((t=n.value)==null?void 0:t.toString())?"":((i=n.value)==null?void 0:i.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:791,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:747,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:746,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:745,columnNumber:7},void 0)}},S={name:"Custom topSlot + rightSlot",render:()=>{const[l,a]=k.useReducer(N,W),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),[p,c]=k.useState("month"),{filterList:g}=F({filters:l,options:{blocks:d,tribes:b,allocation:y,filterButton:V,dotsButton:f},updateFilters:(s,m)=>a({[s]:m}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),n=g.flatMap(s=>"groupLabel"in s?s.items.map(m=>({label:String(m.label),onClick:m.onClick})):[{label:String(s.label),onClick:s.onClick}]),t=n.length>0,i=k.useRef(n);t&&(i.current=n);const u=t?n:i.current;return e.jsxDEV("div",{style:{padding:20,background:"grey"},children:e.jsxDEV("div",{style:{position:"relative",width:600,height:512},children:[e.jsxDEV(o,{size:"l",headerSlot:e.jsxDEV(o.Header,{title:"Custom topSlot",badge:"TA",subtitle:"Свои чипы + Select в rightSlot",infoTooltipText:"Info",rightSlot:e.jsxDEV(me,{size:"xs",value:p,onChange:s=>c(s),items:[{label:"Месяц",value:"month"},{label:"Квартал",value:"quarter"},{label:"Год",value:"year"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:881,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:875,columnNumber:15},void 0),topSlot:e.jsxDEV("div",{className:de.selfSpacedTopSlot,children:e.jsxDEV(ce,{isOpen:t,unMountOnClose:!0,children:e.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:4,paddingTop:8},children:u.map((s,m)=>e.jsxDEV("button",{type:"button",onClick:s.onClick,style:{padding:"2px 8px",borderRadius:12,background:"rgba(0, 0, 0, 0.06)",border:"none",fontSize:12,lineHeight:"16px",whiteSpace:"nowrap",cursor:"pointer"},children:s.label},`${s.label}-${m}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:906,columnNumber:23},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:897,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:896,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:895,columnNumber:15},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:B()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:930,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:872,columnNumber:11},void 0),e.jsxDEV(o.DotsIconButton,{absolute:!0,dropdownProps:{items:E("dotsButton",f,g),onItemSelect(s){var m,I;a({dotsButton:l.dotsButton===((m=s.value)==null?void 0:m.toString())?"":((I=s.value)==null?void 0:I.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:933,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:871,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:870,columnNumber:7},void 0)}},C={name:"Header: skeleton title/subtitle",render:()=>{const[l,a]=k.useState(!0);return e.jsxDEV("div",{style:{padding:20,background:"grey"},children:[e.jsxDEV("div",{style:{marginBottom:12},children:e.jsxDEV(pe,{size:"s",onClick:()=>a(d=>!d),children:l?"Загрузить данные":"Показать скелетон"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:970,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:969,columnNumber:9},void 0),e.jsxDEV("div",{style:{position:"relative",width:600,height:512},children:e.jsxDEV(o,{size:"l",headerSlot:e.jsxDEV(o.Header,{title:l?e.jsxDEV(O,{size:"bodyM",style:{width:180}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:981,columnNumber:21},void 0):"Аналитический виджет",badge:l?void 0:"TA",subtitle:l?e.jsxDEV(O,{size:"bodyXS",style:{width:120}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:989,columnNumber:21},void 0):"Данные за месяц",infoTooltipText:"Info"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:978,columnNumber:15},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:B()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:998,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:975,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:974,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:968,columnNumber:7},void 0)}};var j,R,$,G,M;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: preCodeL
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const someItems = Array(3).fill(0);
    const {
      filterList,
      filterListOpened
    } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions
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
        year: {
          label: 'Год',
          clearedValue: null
        },
        filterButton: {
          label: 'Фильтр',
          clearedValue: ''
        },
        dotsButton: {
          label: 'Меню',
          clearedValue: ''
        }
      }
    });
    const chipsList = filterList.map(item => {
      if ('groupLabel' in item) {
        return item.items.map(innerItem => ({
          text: String(innerItem.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: innerItem.onClick
        }));
      }
      return {
        text: String(item.label),
        view: 'default' as const,
        hasClear: false as const,
        onClick: item.onClick
      };
    }).flat();
    return <GridContainerL>
        <SegmentProvider defaultSelected={['item_0']}>
          <div style={{
          position: 'relative',
          width: 'min-content'
        }}>
            <AnalyticalWidget size="l" headerSlot={<AnalyticalWidget.Header title="Analytic widget L" badge="TA" subtitle="Monthly report" rightSlot={<Flow alignment="center" mainAxisGap="8px" style={{
            flexWrap: 'nowrap'
          }}>
                      <SegmentGroup hasBackground size="xs">
                        {someItems.map((_, i) => <SegmentItem
              // eslint-disable-next-line react/no-array-index-key
              key={\`item:\${i}\`} value={\`item_\${i}\`} label={\`Label\${i + 1}\`} size="xs" view="primary" />)}
                      </SegmentGroup>
                    </Flow>} infoTooltipText="Info" href="/" />} topSlot={<Flow orientation="vertical" mainAxisGap={8}>
                  <AnalyticalWidget.Chips opened={filterListOpened} isWrapped gap="wide" isCommonChipStyles={false} chips={chipsList} />
                </Flow>} contentSlot={<div style={{
            minHeight: 'fit-content'
          }}>
                  {longText()}
                </div>} classes={{
            topSlot: 'myCustomClassForTopSlot',
            middleSlot: 'myCustomClassForMiddleSlot',
            contentSlot: 'myCustomClassForContentSlot',
            root: 'myCustomClassForRoot'
          }} />
            <AnalyticalWidget.DotsIconButton absolute dropdownProps={{
            items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
            onItemSelect(item) {
              updateFilters({
                dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
              });
            }
          }} />
          </div>
        </SegmentProvider>
      </GridContainerL>;
  }
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(M=(G=h.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var _,z,H,P,U;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: preCodeM
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const someItems = Array(3).fill(0);
    const {
      filterList,
      filterListOpened
    } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions
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
        year: {
          label: 'Год',
          clearedValue: null
        },
        filterButton: {
          label: 'Фильтр',
          clearedValue: ''
        },
        dotsButton: {
          label: 'Меню',
          clearedValue: ''
        }
      }
    });
    const chipsList = filterList.map((item, index) => {
      if ('groupLabel' in item) {
        return item.items.map((innerItem, innerIdex) => ({
          text: String(innerItem.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: innerItem.onClick,
          key: \`chip-key\${index}-\${innerIdex}-\${innerItem.label}\`
        }));
      }
      return {
        text: String(item.label),
        view: 'default' as const,
        hasClear: false as const,
        onClick: item.onClick,
        key: \`chip-key-\${index}-\${item.label}\`
      };
    }).flat();
    return <GridContainerM>
        <SegmentProvider defaultSelected={['item_0']}>
          <div style={{
          position: 'relative',
          width: 'min-content'
        }}>
            <AnalyticalWidget size="m" headerSlot={<AnalyticalWidget.Header title="Analytic widget M" badge="TA" subtitle="Monthly report" rightSlot={<Flow alignment="center" mainAxisGap="8px" style={{
            flexWrap: 'nowrap'
          }}>
                      <SegmentGroup hasBackground size="xs">
                        {someItems.map((_, i) => <SegmentItem
              // eslint-disable-next-line react/no-array-index-key
              key={\`item:\${i}\`} value={\`item_\${i}\`} label={\`Label\${i + 1}\`} size="xs" view="primary" />)}
                      </SegmentGroup>
                    </Flow>} infoTooltipText="Info" href="/" />} topSlot={<Flow orientation="vertical" mainAxisGap={8}>
                  <AnalyticalWidget.Chips opened={filterListOpened} isWrapped gap="wide" isCommonChipStyles={false} chips={chipsList} />
                </Flow>} contentSlot={<div style={{
            minHeight: 'fit-content'
          }}>
                  {longText()}
                </div>} classes={{
            topSlot: 'myCustomClassForTopSlot',
            middleSlot: 'myCustomClassForMiddleSlot',
            contentSlot: 'myCustomClassForContentSlot',
            root: 'myCustomClassForRoot'
          }} />
            <AnalyticalWidget.DotsIconButton absolute dropdownProps={{
            items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
            onItemSelect(item) {
              updateFilters({
                dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
              });
            }
          }} />
          </div>
        </SegmentProvider>
      </GridContainerM>;
  }
}`,...(H=(z=x.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var q,X,Q,J,K;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: preCodeS
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const {
      filterList,
      filterListOpened
    } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions
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
        year: {
          label: 'Год',
          clearedValue: null
        },
        filterButton: {
          label: 'Фильтр',
          clearedValue: ''
        },
        dotsButton: {
          label: 'Меню',
          clearedValue: ''
        }
      }
    });
    const chipsList = filterList.map(item => {
      if ('groupLabel' in item) {
        return item.items.map(innerItem => ({
          text: String(innerItem.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: innerItem.onClick
        }));
      }
      return {
        text: String(item.label),
        view: 'default' as const,
        hasClear: false as const,
        onClick: item.onClick
      };
    }).flat();
    return <GridContainerS>
        <SegmentProvider defaultSelected={['item_0']}>
          <div style={{
          position: 'relative',
          width: 'min-content'
        }}>
            <AnalyticalWidget size="s" headerSlot={<AnalyticalWidget.Header title="Заголовок" badge="TA" subtitle="Подзаголовок здесь" infoTooltipText="Info" href="/" />} topSlot={<Flow orientation="vertical" mainAxisGap={8}>
                  <AnalyticalWidget.Chips opened={filterListOpened} isWrapped gap="wide" isCommonChipStyles={false} chips={chipsList} />
                </Flow>} contentSlot={<div style={{
            minHeight: 'fit-content'
          }}>
                  {longText()}
                </div>} classes={{
            topSlot: 'myCustomClassForTopSlot',
            middleSlot: 'myCustomClassForMiddleSlot',
            contentSlot: 'myCustomClassForContentSlot',
            root: 'myCustomClassForRoot'
          }} />
            <AnalyticalWidget.DotsIconButton absolute dropdownProps={{
            items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
            onItemSelect(item) {
              updateFilters({
                dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
              });
            }
          }} />
          </div>
        </SegmentProvider>
      </GridContainerS>;
  }
}`,...(Q=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Q.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(K=(J=A.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Y,Z,ee,te,ie;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Custom topSlot + rightSlot',
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const [period, setPeriod] = useState('month');
    const {
      filterList
    } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions
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
        year: {
          label: 'Год',
          clearedValue: null
        },
        filterButton: {
          label: 'Фильтр',
          clearedValue: ''
        },
        dotsButton: {
          label: 'Меню',
          clearedValue: ''
        }
      }
    });
    const customChips = filterList.flatMap(item => 'groupLabel' in item ? item.items.map(inner => ({
      label: String(inner.label),
      onClick: inner.onClick
    })) : [{
      label: String(item.label),
      onClick: item.onClick
    }]);
    const hasChips = customChips.length > 0;
    const lastRef = useRef(customChips);
    if (hasChips) {
      lastRef.current = customChips;
    }
    const renderedChips = hasChips ? customChips : lastRef.current;
    return <div style={{
      padding: 20,
      background: 'grey'
    }}>
        <div style={{
        position: 'relative',
        width: 600,
        height: 512
      }}>
          <AnalyticalWidget size="l" headerSlot={<AnalyticalWidget.Header title="Custom topSlot" badge="TA" subtitle="Свои чипы + Select в rightSlot" infoTooltipText="Info" rightSlot={<Select size="xs" value={period} onChange={v => setPeriod(v as string)} items={[{
          label: 'Месяц',
          value: 'month'
        }, {
          label: 'Квартал',
          value: 'quarter'
        }, {
          label: 'Год',
          value: 'year'
        }]} />} />} topSlot={<div className={analyticalWidgetClassNames.selfSpacedTopSlot}>
                <Collapse isOpen={hasChips} unMountOnClose>
                  <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              paddingTop: 8
            }}>
                    {renderedChips.map((chip, index) => <button type="button"
              // eslint-disable-next-line react/no-array-index-key
              key={\`\${chip.label}-\${index}\`} onClick={chip.onClick} style={{
                padding: '2px 8px',
                borderRadius: 12,
                background: 'rgba(0, 0, 0, 0.06)',
                border: 'none',
                fontSize: 12,
                lineHeight: '16px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}>
                        {chip.label}
                      </button>)}
                  </div>
                </Collapse>
              </div>} contentSlot={<div style={{
          minHeight: 'fit-content'
        }}>{longText()}</div>} />
          <AnalyticalWidget.DotsIconButton absolute dropdownProps={{
          items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
          onItemSelect(item) {
            updateFilters({
              dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
            });
          }
        }} />
        </div>
      </div>;
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`Custom topSlot (свои чипы потребителя) + rightSlot.
Слева блок title/тег/ⓘ/subtitle с margin-right:16, справа генерик-rightSlot
(здесь Select), кнопка-троеточие — абсолютом от потребителя.`,...(ie=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ie.description}}};var ne,oe,se,le,ae;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Header: skeleton title/subtitle',
  render: () => {
    const [loading, setLoading] = useState(true);
    return <div style={{
      padding: 20,
      background: 'grey'
    }}>
        <div style={{
        marginBottom: 12
      }}>
          <Button size="s" onClick={() => setLoading(v => !v)}>
            {loading ? 'Загрузить данные' : 'Показать скелетон'}
          </Button>
        </div>
        <div style={{
        position: 'relative',
        width: 600,
        height: 512
      }}>
          <AnalyticalWidget size="l" headerSlot={<AnalyticalWidget.Header title={loading ? <LineSkeleton size="bodyM" style={{
          width: 180
        }} /> : 'Аналитический виджет'} badge={loading ? undefined : 'TA'} subtitle={loading ? <LineSkeleton size="bodyXS" style={{
          width: 120
        }} /> : 'Данные за месяц'} infoTooltipText="Info" />} contentSlot={<div style={{
          minHeight: 'fit-content'
        }}>{longText()}</div>} />
        </div>
      </div>;
  }
}`,...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source},description:{story:`Скелетон title/subtitle: данные шапки приходят с бэкенда, на время загрузки
в title/subtitle прокидывается ReactNode (Skeleton) — рендерится как есть,
без типографики и тултипа. Кнопка «Загрузить» имитирует ответ бэка.`,...(ae=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ae.description}}};const Ae=["AnalyticalWidgetL","AnalyticalWidgetM","AnalyticalWidgetS","AnalyticalWidgetCustomTopSlot","AnalyticalWidgetHeaderSkeleton"],De=Object.freeze(Object.defineProperty({__proto__:null,AnalyticalWidgetCustomTopSlot:S,AnalyticalWidgetHeaderSkeleton:C,AnalyticalWidgetL:h,AnalyticalWidgetM:x,AnalyticalWidgetS:A,__namedExportsOrder:Ae,default:ge},Symbol.toStringTag,{value:"Module"}));export{De as A};
