import{r as S,d as e}from"./react-D2T61mpp.js";import{g as b}from"./getFuncAsString-C1kndaLg.js";import{s as C}from"./storySourceDoc-tVKyHcEN.js";import{A as l}from"./AnalyticalWidget-D5_iniP6.js";import{u as w}from"./ListOfFilters-DU4gIMgx.js";import{H as v}from"./styled-components-C8vPRKee.js";import{f as F,D as B,u as a,l as W,g as N,d as y,a as V}from"./utils-Dz_DkKM2.js";import{c6 as E}from"./vendor-B0ELcGbr.js";import{v as Q,u as X,F as A,a6 as J,O as K}from"./@salutejs/sdds-finai-CPdoK_07.js";const Y={title:"Композиции/AnalyticalWidget",tags:["!autodocs"],parameters:{docs:{}},excludeStories:["CANVAS"],component:l},Z=`
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  TabItem,
  Tabs,
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

  ${b("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${b("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,ee=`
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  TabItem,
  Tabs,
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

  ${b("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${b("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,te=`
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  TabItem,
  Tabs,
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

  ${b("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${b("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,ie=v.div`
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
`,p={...C({preCode:Z}),render:()=>{const[r,u]=S.useReducer(F,B),x=a("blocks",10),k=a("tribes",15),h=a("allocation",10),d=Array(3).fill(0),c=Array(6).fill(0),[m,s]=S.useState(0),{filterList:t,filterListOpened:n}=w({filters:r,options:{blocks:x,tribes:k,allocation:h,filterButton:V,dotsButton:y},updateFilters:(o,i)=>u({[o]:i}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}});return e.jsxDEV(ie,{children:e.jsxDEV(E,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(l,{size:"l",headerSlot:e.jsxDEV(l.Header,{title:"Analytic widget L",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(A,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(J,{hasBackground:!0,size:"xs",children:d.map((o,i)=>e.jsxDEV(K,{value:`item_${i}`,label:`Label${i+1}`,size:"xs",view:"primary"},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:400,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:398,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:391,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:386,columnNumber:17},void 0),topSlot:e.jsxDEV(A,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(l.Chips,{opened:n,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:t.map(o=>"groupLabel"in o?o.items.map(i=>({text:String(i.label),view:"default",hasClear:!1,onClick:i.onClick})):{text:String(o.label),view:"default",hasClear:!1,onClick:o.onClick}).flat()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:418,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:417,columnNumber:17},void 0),middleSlot:e.jsxDEV(Q,{style:{width:"100%"},view:"divider",orientation:"horizontal",size:"xs",children:c.map((o,i)=>e.jsxDEV(X,{view:"divider",orientation:"horizontal",size:"xs",selected:i===m,tabIndex:0,onClick:()=>s(i),children:i===0?"Длинное наименование данных":`Label${i+1}`},`item:${i}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:454,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:445,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:W()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:472,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:383,columnNumber:13},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"16px",right:"16px"},children:e.jsxDEV(l.DotsIconButton,{size:"xs",iconSize:"xs",dropdownProps:{items:N("dotsButton",y,t),onItemSelect(o){var i,L;u({dotsButton:r.dotsButton===((i=o.value)==null?void 0:i.toString())?"":((L=o.value)==null?void 0:L.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:494,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:487,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:377,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:376,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:375,columnNumber:7},void 0)}},ne=v.div`
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
`,g={...C({preCode:ee}),render:()=>{const[r,u]=S.useReducer(F,B),x=a("blocks",10),k=a("tribes",15),h=a("allocation",10),d=Array(3).fill(0),{filterList:c,filterListOpened:m}=w({filters:r,options:{blocks:x,tribes:k,allocation:h,filterButton:V,dotsButton:y},updateFilters:(s,t)=>u({[s]:t}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}});return e.jsxDEV(ne,{children:e.jsxDEV(E,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(l,{size:"m",headerSlot:e.jsxDEV(l.Header,{title:"Analytic widget M",badge:"TA",subtitle:"Monthly report",rightSlot:e.jsxDEV(A,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:e.jsxDEV(J,{hasBackground:!0,size:"xs",children:d.map((s,t)=>e.jsxDEV(K,{value:`item_${t}`,label:`Label${t+1}`,size:"xs",view:"primary"},`item:${t}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:610,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:608,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:601,columnNumber:21},void 0),infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:596,columnNumber:17},void 0),topSlot:e.jsxDEV(A,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(l.Chips,{opened:m,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:c.map((s,t)=>"groupLabel"in s?s.items.map((n,o)=>({text:String(n.label),view:"default",hasClear:!1,onClick:n.onClick,key:`chip-key${t}-${o}-${n.label}`})):{text:String(s.label),view:"default",hasClear:!1,onClick:s.onClick,key:`chip-key-${t}-${s.label}`}).flat()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:628,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:627,columnNumber:17},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:W()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:657,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:593,columnNumber:13},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"16px",right:"16px"},children:e.jsxDEV(l.DotsIconButton,{size:"xs",iconSize:"xs",dropdownProps:{items:N("dotsButton",y,c),onItemSelect(s){var t,n;u({dotsButton:r.dotsButton===((t=s.value)==null?void 0:t.toString())?"":((n=s.value)==null?void 0:n.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:679,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:672,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:587,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:586,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:585,columnNumber:7},void 0)}},oe=v.div`
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
`,f={...C({preCode:te}),render:()=>{const[r,u]=S.useReducer(F,B),x=a("blocks",10),k=a("tribes",15),h=a("allocation",10),{filterList:d,filterListOpened:c}=w({filters:r,options:{blocks:x,tribes:k,allocation:h,filterButton:V,dotsButton:y},updateFilters:(t,n)=>u({[t]:n}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),m=d.map(t=>"groupLabel"in t?t.items.map(n=>({text:String(n.label),view:"default",hasClear:!1,onClick:n.onClick})):{text:String(t.label),view:"default",hasClear:!1,onClick:t.onClick}).flat(),s=m.length>0;return e.jsxDEV(oe,{children:e.jsxDEV(E,{defaultSelected:["item_0"],children:e.jsxDEV("div",{style:{position:"relative",width:"min-content"},children:[e.jsxDEV(l,{size:"s",headerSlot:e.jsxDEV(l.Header,{title:"Заголовок",badge:"TA",subtitle:"Подзаголовок здесь",infoTooltipText:"Info",href:"/"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:801,columnNumber:17},void 0),topSlot:s&&e.jsxDEV(A,{orientation:"vertical",mainAxisGap:8,children:e.jsxDEV(l.Chips,{opened:c,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:812,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:811,columnNumber:19},void 0),contentSlot:e.jsxDEV("div",{style:{minHeight:"fit-content"},children:W()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:823,columnNumber:17},void 0),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:798,columnNumber:13},void 0),e.jsxDEV("div",{style:{position:"absolute",top:"16px",right:"16px"},children:e.jsxDEV(l.DotsIconButton,{size:"xs",iconSize:"xs",dropdownProps:{items:N("dotsButton",y,d),onItemSelect(t){var n,o;u({dotsButton:r.dotsButton===((n=t.value)==null?void 0:n.toString())?"":((o=t.value)==null?void 0:o.toString())??""})}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:845,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:838,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:792,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:791,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AnalyticalWidget/AnalyticalWidget.stories.tsx",lineNumber:790,columnNumber:7},void 0)}};var I,D,T,O,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...storySourceDoc({
    preCode: preCodeL
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const someItems = Array(3).fill(0);
    const tabItems = Array(6).fill(0);
    const [tabIndex, setTabIndex] = useState(0);
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
                  <AnalyticalWidget.Chips opened={filterListOpened} isWrapped gap="wide" isCommonChipStyles={false} chips={filterList.map(item => {
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
            }).flat()} />
                </Flow>} middleSlot={<Tabs style={{
            width: '100%'
          }} view="divider" orientation="horizontal" size="xs">
                  {tabItems.map((_, i) => <TabItem view="divider" orientation="horizontal"
            // eslint-disable-next-line react/no-array-index-key
            key={\`item:\${i}\`} size="xs" selected={i === tabIndex} tabIndex={0} onClick={() => setTabIndex(i)}>
                      {i === 0 ? 'Длинное наименование данных' : \`Label\${i + 1}\`}
                    </TabItem>)}
                </Tabs>} contentSlot={<div style={{
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
            top: '16px',
            right: '16px'
          }}>
              <AnalyticalWidget.DotsIconButton size="xs" iconSize="xs" dropdownProps={{
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
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(j=(O=p.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var $,z,G,R,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
                  <AnalyticalWidget.Chips opened={filterListOpened} isWrapped gap="wide" isCommonChipStyles={false} chips={filterList.map((item, index) => {
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
            }).flat()} />
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
            top: '16px',
            right: '16px'
          }}>
              <AnalyticalWidget.DotsIconButton size="xs" iconSize="xs" dropdownProps={{
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
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var M,H,P,U,q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    const isHaveChips = chipsList.length > 0;
    return <GridContainerS>
        <SegmentProvider defaultSelected={['item_0']}>
          <div style={{
          position: 'relative',
          width: 'min-content'
        }}>
            <AnalyticalWidget size="s" headerSlot={<AnalyticalWidget.Header title="Заголовок" badge="TA" subtitle="Подзаголовок здесь" infoTooltipText="Info" href="/" />} topSlot={isHaveChips && <Flow orientation="vertical" mainAxisGap={8}>
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
            top: '16px',
            right: '16px'
          }}>
              <AnalyticalWidget.DotsIconButton size="xs" iconSize="xs" dropdownProps={{
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
}`,...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(q=(U=f.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};const se=["AnalyticalWidgetL","AnalyticalWidgetM","AnalyticalWidgetS"],fe=Object.freeze(Object.defineProperty({__proto__:null,AnalyticalWidgetL:p,AnalyticalWidgetM:g,AnalyticalWidgetS:f,__namedExportsOrder:se,default:Y},Symbol.toStringTag,{value:"Module"}));export{fe as A};
