import{r as A,d as e}from"./react-D2T61mpp.js";import{g as h}from"./getFuncAsString-C1kndaLg.js";import{s as V}from"./storySourceDoc-tVKyHcEN.js";import{A as s,c as ie}from"./AnalyticalWidget-DjcaR_dC.js";import{C as ne}from"./Collapse-JuJHcav5.js";import{u as w}from"./ListOfFilters-ByMlifTn.js";import{H as E}from"./styled-components-CSTO6C65.js";import{f as v,D as B,u as a,l as F,g as N,d as m,a as W}from"./utils-rUB6Sh9b.js";import{c8 as L}from"./vendor-CHGTV19P.js";import{F as S,a7 as Z,Q as ee}from"./@salutejs/sdds-finai-4F5vcRwZ.js";const oe={title:"Композиции/AnalyticalWidget",tags:["!autodocs"],parameters:{docs:{}},excludeStories:["CANVAS"],component:s},se=`
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

  ${h("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${h("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,le=`
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

  ${h("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${h("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,ae=`
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

  ${h("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${h("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,re=E.div`
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
`,b={...V({preCode:se}),render:()=>{const[r,u]=A.useReducer(v,B),p=a("blocks",10),g=a("tribes",15),f=a("allocation",10),d=Array(3).fill(0),{filterList:l,filterListOpened:c}=w({filters:r,options:{blocks:p,tribes:g,allocation:f,filterButton:W,dotsButton:m},updateFilters:(i,t)=>u({[i]:t}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),o=l.map(i=>"groupLabel"in i?i.items.map(t=>({text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick})):{text:String(i.label),view:"default",hasClear:!1,onClick:i.onClick}).flat();return e.jsxDEV(re,{children:e.jsxDEV(L,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"l",headerSlot:e.jsxDEV(s.Header,{title:"Analytic widget L",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(S,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(Z,{hasBackground:!0,size:"xs",children:d.map((i,t)=>e.jsxDEV(ee,{value:`item_${t}`,label:`Label${t+1}`,size:"xs",view:"primary"},`item:${t}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:414,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:412,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:405,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:400,columnNumber:17},void 0),topSlot:e.jsxDEV(S,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(s.Chips,{opened:c,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:432,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:431,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:F()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:442,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:397,columnNumber:13},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsxDEV(s.DotsIconButton,{dropdownProps:{items:N("dotsButton",m,l),onItemSelect(i){var t,n;u({dotsButton:r.dotsButton===((t=i.value)==null?void 0:t.toString())?"":((n=i.value)==null?void 0:n.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:464,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:457,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:391,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:390,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:389,columnNumber:7},void 0)}},ue=E.div`
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
`,y={...V({preCode:le}),render:()=>{const[r,u]=A.useReducer(v,B),p=a("blocks",10),g=a("tribes",15),f=a("allocation",10),d=Array(3).fill(0),{filterList:l,filterListOpened:c}=w({filters:r,options:{blocks:p,tribes:g,allocation:f,filterButton:W,dotsButton:m},updateFilters:(i,t)=>u({[i]:t}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),o=l.map((i,t)=>"groupLabel"in i?i.items.map((n,C)=>({text:String(n.label),view:"default",hasClear:!1,onClick:n.onClick,key:`chip-key${t}-${C}-${n.label}`})):{text:String(i.label),view:"default",hasClear:!1,onClick:i.onClick,key:`chip-key-${t}-${i.label}`}).flat();return e.jsxDEV(ue,{children:e.jsxDEV(L,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"m",headerSlot:e.jsxDEV(s.Header,{title:"Analytic widget M",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(S,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(Z,{hasBackground:!0,size:"xs",children:d.map((i,t)=>e.jsxDEV(ee,{value:`item_${t}`,label:`Label${t+1}`,size:"xs",view:"primary"},`item:${t}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:599,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:597,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:590,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:585,columnNumber:17},void 0),topSlot:e.jsxDEV(S,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(s.Chips,{opened:c,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:617,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:616,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:F()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:627,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:582,columnNumber:13},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsxDEV(s.DotsIconButton,{dropdownProps:{items:N("dotsButton",m,l),onItemSelect(i){var t,n;u({dotsButton:r.dotsButton===((t=i.value)==null?void 0:t.toString())?"":((n=i.value)==null?void 0:n.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:649,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:642,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:576,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:575,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:574,columnNumber:7},void 0)}},te=E.div`
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
`,k={...V({preCode:ae}),render:()=>{const[r,u]=A.useReducer(v,B),p=a("blocks",10),g=a("tribes",15),f=a("allocation",10),{filterList:d,filterListOpened:l}=w({filters:r,options:{blocks:p,tribes:g,allocation:f,filterButton:W,dotsButton:m},updateFilters:(o,i)=>u({[o]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),c=d.map(o=>"groupLabel"in o?o.items.map(i=>({text:String(i.label),view:"default",hasClear:!1,onClick:i.onClick})):{text:String(o.label),view:"default",hasClear:!1,onClick:o.onClick}).flat();return e.jsxDEV(te,{children:e.jsxDEV(L,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"s",headerSlot:e.jsxDEV(s.Header,{title:"Заголовок",badge:"TA",subtitle:"Подзаголовок здесь",infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:767,columnNumber:17},void 0),topSlot:e.jsxDEV(S,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(s.Chips,{opened:l,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:777,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:776,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:F()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:787,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:764,columnNumber:13},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsxDEV(s.DotsIconButton,{dropdownProps:{items:N("dotsButton",m,d),onItemSelect(o){var i,t;u({dotsButton:r.dotsButton===((i=o.value)==null?void 0:i.toString())?"":((t=o.value)==null?void 0:t.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:809,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:802,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:758,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:757,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:756,columnNumber:7},void 0)}},x={name:"Custom topSlot (свои чипы потребителя)",render:()=>{const[r,u]=A.useReducer(v,B),p=a("blocks",10),g=a("tribes",15),f=a("allocation",10),{filterList:d}=w({filters:r,options:{blocks:p,tribes:g,allocation:f,filterButton:W,dotsButton:m},updateFilters:(t,n)=>u({[t]:n}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),l=d.flatMap(t=>"groupLabel"in t?t.items.map(n=>({label:String(n.label),onClick:n.onClick})):[{label:String(t.label),onClick:t.onClick}]),c=l.length>0,o=A.useRef(l);c&&(o.current=l);const i=c?l:o.current;return e.jsxDEV(te,{children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(s,{size:"l",headerSlot:e.jsxDEV(s.Header,{title:"Custom topSlot",badge:"TA",subtitle:"Свои чипы потребителя",infoTooltipText:"Info"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:888,columnNumber:15},void 0),topSlot:e.jsxDEV("div",{className:ie.selfSpacedTopSlot,children:e.jsxDEV(ne,{isOpen:c,unMountOnClose:!0,children:e.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:4,paddingTop:8},children:i.map((t,n)=>e.jsxDEV("button",{type:"button",onClick:t.onClick,style:{padding:"2px 8px",borderRadius:12,background:"rgba(0, 0, 0, 0.06)",border:"none",fontSize:12,lineHeight:"16px",whiteSpace:"nowrap",cursor:"pointer"},children:t.label},`${t.label}-${n}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:907,columnNumber:23},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:898,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:897,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:896,columnNumber:15},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:F()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:931,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:885,columnNumber:11},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsxDEV(s.DotsIconButton,{dropdownProps:{items:N("dotsButton",m,d),onItemSelect(t){var n,C;u({dotsButton:r.dotsButton===((n=t.value)==null?void 0:n.toString())?"":((C=t.value)==null?void 0:C.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:935,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:934,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:884,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:883,columnNumber:7},void 0)}};var D,I,T,O,j;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
            <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}>
              <AnalyticalWidget.DotsIconButton dropdownProps={{
              items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
              onItemSelect(item) {
                updateFilters({
                  dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
                });
              }
            }} />
            </div>
          </div>
        </SegmentProvider>
      </GridContainerL>;
  }
}`,...(T=(I=b.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var R,$,G,_,M;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
            <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}>
              <AnalyticalWidget.DotsIconButton dropdownProps={{
              items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
              onItemSelect(item) {
                updateFilters({
                  dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
                });
              }
            }} />
            </div>
          </div>
        </SegmentProvider>
      </GridContainerM>;
  }
}`,...(G=($=y.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(M=(_=y.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var H,z,P,U,Q;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
            <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}>
              <AnalyticalWidget.DotsIconButton dropdownProps={{
              items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
              onItemSelect(item) {
                updateFilters({
                  dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
                });
              }
            }} />
            </div>
          </div>
        </SegmentProvider>
      </GridContainerS>;
  }
}`,...(P=(z=k.parameters)==null?void 0:z.docs)==null?void 0:P.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(Q=(U=k.parameters)==null?void 0:U.docs)==null?void 0:Q.description}}};var q,J,K,X,Y;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Custom topSlot (свои чипы потребителя)',
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
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
    return <GridContainerS>
        <div style={{
        position: 'relative',
        width: 'min-content'
      }}>
          <AnalyticalWidget size="l" headerSlot={<AnalyticalWidget.Header title="Custom topSlot" badge="TA" subtitle="Свои чипы потребителя" infoTooltipText="Info" />} topSlot={<div className={analyticalWidgetClassNames.selfSpacedTopSlot}>
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
          <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px'
        }}>
            <AnalyticalWidget.DotsIconButton dropdownProps={{
            items: generateButtonItems('dotsButton', dotsButtonOptions, filterList),
            onItemSelect(item) {
              updateFilters({
                dotsButton: filters.dotsButton === item.value?.toString() ? '' : item.value?.toString() ?? ''
              });
            }
          }} />
          </div>
        </div>
      </GridContainerS>;
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Кастомный контент в topSlot: потребитель рендерит свои чипы (не AnalyticalWidget.Chips).",...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const de=["AnalyticalWidgetL","AnalyticalWidgetM","AnalyticalWidgetS","AnalyticalWidgetCustomTopSlot"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AnalyticalWidgetCustomTopSlot:x,AnalyticalWidgetL:b,AnalyticalWidgetM:y,AnalyticalWidgetS:k,__namedExportsOrder:de,default:oe},Symbol.toStringTag,{value:"Module"}));export{Ae as A};
