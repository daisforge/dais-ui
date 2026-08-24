import{r as A,d as e}from"./react-D2T61mpp.js";import{g as C}from"./getFuncAsString-C1kndaLg.js";import{s as E}from"./storySourceDoc-tVKyHcEN.js";import{A as s,c as ne}from"./AnalyticalWidget-B6JDUIc_.js";import{C as oe}from"./Collapse-JuJHcav5.js";import{u as v}from"./ListOfFilters-CutD4aMv.js";import{H as L}from"./styled-components-CSTO6C65.js";import{f as B,D as F,u as l,l as N,g as W,d as g,a as V}from"./utils-rUB6Sh9b.js";import{a2 as se,F as w,a7 as te,Q as ie}from"./@salutejs/sdds-finai-4F5vcRwZ.js";import{c8 as D}from"./vendor-CHGTV19P.js";const le={title:"Композиции/AnalyticalWidget",tags:["!autodocs"],parameters:{docs:{}},excludeStories:["CANVAS"],component:s},ae=`
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

  ${C("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${C("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,re=`
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

  ${C("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${C("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,ue=`
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

  ${C("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${C("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,de=L.div`
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
`,k={...E({preCode:ae}),render:()=>{const[a,r]=A.useReducer(B,F),f=l("blocks",10),b=l("tribes",15),y=l("allocation",10),m=Array(3).fill(0),{filterList:d,filterListOpened:p}=v({filters:a,options:{blocks:f,tribes:b,allocation:y,filterButton:V,dotsButton:g},updateFilters:(t,i)=>r({[t]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),n=d.map(t=>"groupLabel"in t?t.items.map(i=>({text:String(i.label),view:"default",hasClear:!1,onClick:i.onClick})):{text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick}).flat();return e.jsxDEV(de,{children:e.jsxDEV(D,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"l",headerSlot:e.jsxDEV(s.Header,{title:"Analytic widget L",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(w,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(te,{hasBackground:!0,size:"xs",children:m.map((t,i)=>e.jsxDEV(ie,{value:`item_${i}`,label:`Label${i+1}`,size:"xs",view:"primary"},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:415,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:413,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:406,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:401,columnNumber:17},void 0),topSlot:e.jsxDEV(w,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(s.Chips,{opened:p,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:433,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:432,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:N()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:443,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:398,columnNumber:13},void 0),e.jsxDEV(s.DotsIconButton,{absolute:!0,dropdownProps:{items:W("dotsButton",g,d),onItemSelect(t){var i,u;r({dotsButton:a.dotsButton===((i=t.value)==null?void 0:i.toString())?"":((u=t.value)==null?void 0:u.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:458,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:392,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:391,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:390,columnNumber:7},void 0)}},ce=L.div`
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
`,h={...E({preCode:re}),render:()=>{const[a,r]=A.useReducer(B,F),f=l("blocks",10),b=l("tribes",15),y=l("allocation",10),m=Array(3).fill(0),{filterList:d,filterListOpened:p}=v({filters:a,options:{blocks:f,tribes:b,allocation:y,filterButton:V,dotsButton:g},updateFilters:(t,i)=>r({[t]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),n=d.map((t,i)=>"groupLabel"in t?t.items.map((u,o)=>({text:String(u.label),view:"default",hasClear:!1,onClick:u.onClick,key:`chip-key${i}-${o}-${u.label}`})):{text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick,key:`chip-key-${i}-${t.label}`}).flat();return e.jsxDEV(ce,{children:e.jsxDEV(D,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"m",headerSlot:e.jsxDEV(s.Header,{title:"Analytic widget M",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(w,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(te,{hasBackground:!0,size:"xs",children:m.map((t,i)=>e.jsxDEV(ie,{value:`item_${i}`,label:`Label${i+1}`,size:"xs",view:"primary"},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:593,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:591,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:584,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:579,columnNumber:17},void 0),topSlot:e.jsxDEV(w,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(s.Chips,{opened:p,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:611,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:610,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:N()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:621,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:576,columnNumber:13},void 0),e.jsxDEV(s.DotsIconButton,{absolute:!0,dropdownProps:{items:W("dotsButton",g,d),onItemSelect(t){var i,u;r({dotsButton:a.dotsButton===((i=t.value)==null?void 0:i.toString())?"":((u=t.value)==null?void 0:u.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:636,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:570,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:569,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:568,columnNumber:7},void 0)}},me=L.div`
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
`,x={...E({preCode:ue}),render:()=>{const[a,r]=A.useReducer(B,F),f=l("blocks",10),b=l("tribes",15),y=l("allocation",10),{filterList:m,filterListOpened:d}=v({filters:a,options:{blocks:f,tribes:b,allocation:y,filterButton:V,dotsButton:g},updateFilters:(n,t)=>r({[n]:t}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),p=m.map(n=>"groupLabel"in n?n.items.map(t=>({text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick})):{text:String(n.label),view:"default",hasClear:!1,onClick:n.onClick}).flat();return e.jsxDEV(me,{children:e.jsxDEV(D,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"s",headerSlot:e.jsxDEV(s.Header,{title:"Заголовок",badge:"TA",subtitle:"Подзаголовок здесь",infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:754,columnNumber:17},void 0),topSlot:e.jsxDEV(w,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(s.Chips,{opened:d,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:764,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:763,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:N()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:774,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:751,columnNumber:13},void 0),e.jsxDEV(s.DotsIconButton,{absolute:!0,dropdownProps:{items:W("dotsButton",g,m),onItemSelect(n){var t,i;r({dotsButton:a.dotsButton===((t=n.value)==null?void 0:t.toString())?"":((i=n.value)==null?void 0:i.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:789,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:745,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:744,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:743,columnNumber:7},void 0)}},S={name:"Custom topSlot + rightSlot",render:()=>{const[a,r]=A.useReducer(B,F),f=l("blocks",10),b=l("tribes",15),y=l("allocation",10),[m,d]=A.useState("month"),{filterList:p}=v({filters:a,options:{blocks:f,tribes:b,allocation:y,filterButton:V,dotsButton:g},updateFilters:(o,c)=>r({[o]:c}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),n=p.flatMap(o=>"groupLabel"in o?o.items.map(c=>({label:String(c.label),onClick:c.onClick})):[{label:String(o.label),onClick:o.onClick}]),t=n.length>0,i=A.useRef(n);t&&(i.current=n);const u=t?n:i.current;return e.jsxDEV("div",{style:{padding:20,background:"grey"},children:e.jsxDEV("div",{style:{position:"relative",width:600,height:512},children:[e.jsxDEV(s,{size:"l",headerSlot:e.jsxDEV(s.Header,{title:"Custom topSlot",badge:"TA",subtitle:"Свои чипы + Select в rightSlot",infoTooltipText:"Info",rightSlot:e.jsxDEV(se,{size:"xs",value:m,onChange:o=>d(o),items:[{label:"Месяц",value:"month"},{label:"Квартал",value:"quarter"},{label:"Год",value:"year"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:879,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:873,columnNumber:15},void 0),topSlot:e.jsxDEV("div",{className:ne.selfSpacedTopSlot,children:e.jsxDEV(oe,{isOpen:t,unMountOnClose:!0,children:e.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:4,paddingTop:8},children:u.map((o,c)=>e.jsxDEV("button",{type:"button",onClick:o.onClick,style:{padding:"2px 8px",borderRadius:12,background:"rgba(0, 0, 0, 0.06)",border:"none",fontSize:12,lineHeight:"16px",whiteSpace:"nowrap",cursor:"pointer"},children:o.label},`${o.label}-${c}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:904,columnNumber:23},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:895,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:894,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:893,columnNumber:15},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:N()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:928,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:870,columnNumber:11},void 0),e.jsxDEV(s.DotsIconButton,{absolute:!0,dropdownProps:{items:W("dotsButton",g,p),onItemSelect(o){var c,I;r({dotsButton:a.dotsButton===((c=o.value)==null?void 0:c.toString())?"":((I=o.value)==null?void 0:I.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:931,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:869,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:868,columnNumber:7},void 0)}};var T,O,j,R,$;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(O=k.parameters)==null?void 0:O.docs)==null?void 0:j.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...($=(R=k.parameters)==null?void 0:R.docs)==null?void 0:$.description}}};var G,_,M,P,z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=(_=h.parameters)==null?void 0:_.docs)==null?void 0:M.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.description}}};var H,U,q,Q,J;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(U=x.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(J=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:J.description}}};var K,X,Y,Z,ee;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Custom topSlot (свои чипы потребителя) + rightSlot.
Слева блок title/тег/ⓘ/subtitle с margin-right:16, справа генерик-rightSlot
(здесь Select), кнопка-троеточие — абсолютом от потребителя.`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const pe=["AnalyticalWidgetL","AnalyticalWidgetM","AnalyticalWidgetS","AnalyticalWidgetCustomTopSlot"],we=Object.freeze(Object.defineProperty({__proto__:null,AnalyticalWidgetCustomTopSlot:S,AnalyticalWidgetL:k,AnalyticalWidgetM:h,AnalyticalWidgetS:x,__namedExportsOrder:pe,default:le},Symbol.toStringTag,{value:"Module"}));export{we as A};
