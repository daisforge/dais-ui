import{r as h,j as t}from"./react-CAOzMBF_.js";import{g as k}from"./getFuncAsString-DnrLf2YT.js";import{s as I}from"./storySourceDoc-tVKyHcEN.js";import{A as i,a as dt}from"./AnalyticalWidget-CfQQ2-mb.js";import{C as ct}from"./Collapse-CblE70vy.js";import{u as w}from"./ListOfFilters-CMjwWdxj.js";import{H as O}from"./styled-components-DCFsnh-i.js";import{f as L,D as E,u as r,l as v,g as V,d as f,a as T}from"./utils-ChnhBB6l.js";import{a3 as pt,t as mt,a7 as D,F as A,a8 as rt,R as at}from"./@salutejs/sdds-finai-CKhMjg07.js";import{ck as j}from"./vendor-DmWczWMC.js";const gt={title:"Композиции/AnalyticalWidget",tags:["!autodocs"],parameters:{docs:{}},excludeStories:["CANVAS"],component:i},ft=`
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

  ${k("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${k("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,bt=`
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

  ${k("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${k("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,yt=`
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

  ${k("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","hasActiveFilterForButton")}

  ${k("packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx","generateButtonItems")}

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

`,ht=O.div`
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
`,S={...I({preCode:ft}),render:()=>{const[s,u]=h.useReducer(L,E),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),m=Array(3).fill(0),{filterList:c,filterListOpened:g}=w({filters:s,options:{blocks:d,tribes:b,allocation:y,filterButton:T,dotsButton:f},updateFilters:(e,n)=>u({[e]:n}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),o=c.map(e=>"groupLabel"in e?e.items.map(n=>({text:String(n.label),view:"default",hasClear:!1,onClick:n.onClick})):{text:String(e.label),view:"default",hasClear:!1,onClick:e.onClick}).flat();return t.jsx(ht,{children:t.jsx(j,{defaultSelected:["item_0"],children:t.jsxs("div",{style:{position:"relative",width:"min-content"},children:[t.jsx(i,{size:"l",headerSlot:t.jsx(i.Header,{title:"Analytic widget L",badge:"TA",subtitle:"Monthly report",rightSlot:t.jsx(A,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:t.jsx(rt,{hasBackground:!0,size:"xs",children:m.map((e,n)=>t.jsx(at,{value:`item_${n}`,label:`Label${n+1}`,size:"xs",view:"primary"},`item:${n}`))})}),infoTooltipText:"Info",href:"/"}),topSlot:t.jsx(A,{orientation:"vertical",mainAxisGap:8,children:t.jsx(i.Chips,{opened:g,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:o})}),contentSlot:t.jsx("div",{style:{minHeight:"fit-content"},children:v()}),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}}),t.jsx(i.DotsIconButton,{absolute:!0,dropdownProps:{items:V("dotsButton",f,c),onItemSelect(e){var n,a;u({dotsButton:s.dotsButton===((n=e.value)==null?void 0:n.toString())?"":((a=e.value)==null?void 0:a.toString())??""})}}})]})})})}},St=O.div`
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
`,x={...I({preCode:bt}),render:()=>{const[s,u]=h.useReducer(L,E),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),m=Array(3).fill(0),{filterList:c,filterListOpened:g}=w({filters:s,options:{blocks:d,tribes:b,allocation:y,filterButton:T,dotsButton:f},updateFilters:(e,n)=>u({[e]:n}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),o=c.map((e,n)=>"groupLabel"in e?e.items.map((a,l)=>({text:String(a.label),view:"default",hasClear:!1,onClick:a.onClick,key:`chip-key${n}-${l}-${a.label}`})):{text:String(e.label),view:"default",hasClear:!1,onClick:e.onClick,key:`chip-key-${n}-${e.label}`}).flat();return t.jsx(St,{children:t.jsx(j,{defaultSelected:["item_0"],children:t.jsxs("div",{style:{position:"relative",width:"min-content"},children:[t.jsx(i,{size:"m",headerSlot:t.jsx(i.Header,{title:"Analytic widget M",badge:"TA",subtitle:"Monthly report",rightSlot:t.jsx(A,{alignment:"center",mainAxisGap:"8px",style:{flexWrap:"nowrap"},children:t.jsx(rt,{hasBackground:!0,size:"xs",children:m.map((e,n)=>t.jsx(at,{value:`item_${n}`,label:`Label${n+1}`,size:"xs",view:"primary"},`item:${n}`))})}),infoTooltipText:"Info",href:"/"}),topSlot:t.jsx(A,{orientation:"vertical",mainAxisGap:8,children:t.jsx(i.Chips,{opened:g,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:o})}),contentSlot:t.jsx("div",{style:{minHeight:"fit-content"},children:v()}),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}}),t.jsx(i.DotsIconButton,{absolute:!0,dropdownProps:{items:V("dotsButton",f,c),onItemSelect(e){var n,a;u({dotsButton:s.dotsButton===((n=e.value)==null?void 0:n.toString())?"":((a=e.value)==null?void 0:a.toString())??""})}}})]})})})}},xt=O.div`
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
`,C={...I({preCode:yt}),render:()=>{const[s,u]=h.useReducer(L,E),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),{filterList:m,filterListOpened:c}=w({filters:s,options:{blocks:d,tribes:b,allocation:y,filterButton:T,dotsButton:f},updateFilters:(o,e)=>u({[o]:e}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),g=m.map(o=>"groupLabel"in o?o.items.map(e=>({text:String(e.label),view:"default",hasClear:!1,onClick:e.onClick})):{text:String(o.label),view:"default",hasClear:!1,onClick:o.onClick}).flat();return t.jsx(xt,{children:t.jsx(j,{defaultSelected:["item_0"],children:t.jsxs("div",{style:{position:"relative",width:"min-content"},children:[t.jsx(i,{size:"s",headerSlot:t.jsx(i.Header,{title:"Заголовок",badge:"TA",subtitle:"Подзаголовок здесь",infoTooltipText:"Info",href:"/"}),topSlot:t.jsx(A,{orientation:"vertical",mainAxisGap:8,children:t.jsx(i.Chips,{opened:c,isWrapped:!0,gap:"wide",isCommonChipStyles:!1,chips:g})}),contentSlot:t.jsx("div",{style:{minHeight:"fit-content"},children:v()}),classes:{topSlot:"myCustomClassForTopSlot",middleSlot:"myCustomClassForMiddleSlot",contentSlot:"myCustomClassForContentSlot",root:"myCustomClassForRoot"}}),t.jsx(i.DotsIconButton,{absolute:!0,dropdownProps:{items:V("dotsButton",f,m),onItemSelect(o){var e,n;u({dotsButton:s.dotsButton===((e=o.value)==null?void 0:e.toString())?"":((n=o.value)==null?void 0:n.toString())??""})}}})]})})})}},B={name:"Custom topSlot + rightSlot",render:()=>{const[s,u]=h.useReducer(L,E),d=r("blocks",10),b=r("tribes",15),y=r("allocation",10),[m,c]=h.useState("month"),{filterList:g}=w({filters:s,options:{blocks:d,tribes:b,allocation:y,filterButton:T,dotsButton:f},updateFilters:(l,p)=>u({[l]:p}),filtersInfo:{searchedV:{label:"Поиск",clearedValue:""},blocks:{label:"Блок",clearedValue:[]},tribes:{label:"Трайб",clearedValue:[]},allocation:{label:"Аллокация",clearedValue:""},year:{label:"Год",clearedValue:null},filterButton:{label:"Фильтр",clearedValue:""},dotsButton:{label:"Меню",clearedValue:""}}}),o=g.flatMap(l=>"groupLabel"in l?l.items.map(p=>({label:String(p.label),onClick:p.onClick})):[{label:String(l.label),onClick:l.onClick}]),e=o.length>0,n=h.useRef(o);e&&(n.current=o);const a=e?o:n.current;return t.jsx("div",{style:{padding:20,background:"grey"},children:t.jsxs("div",{style:{position:"relative",width:600,height:512},children:[t.jsx(i,{size:"l",headerSlot:t.jsx(i.Header,{title:"Custom topSlot",badge:"TA",subtitle:"Свои чипы + Select в rightSlot",infoTooltipText:"Info",rightSlot:t.jsx(pt,{size:"xs",value:m,onChange:l=>c(l),items:[{label:"Месяц",value:"month"},{label:"Квартал",value:"quarter"},{label:"Год",value:"year"}]})}),topSlot:t.jsx("div",{className:dt.selfSpacedTopSlot,children:t.jsx(ct,{isOpen:e,unMountOnClose:!0,children:t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,paddingTop:8},children:a.map((l,p)=>t.jsx("button",{type:"button",onClick:l.onClick,style:{padding:"2px 8px",borderRadius:12,background:"rgba(0, 0, 0, 0.06)",border:"none",fontSize:12,lineHeight:"16px",whiteSpace:"nowrap",cursor:"pointer"},children:l.label},`${l.label}-${p}`))})})}),contentSlot:t.jsx("div",{style:{minHeight:"fit-content"},children:v()})}),t.jsx(i.DotsIconButton,{absolute:!0,dropdownProps:{items:V("dotsButton",f,g),onItemSelect(l){var p,W;u({dotsButton:s.dotsButton===((p=l.value)==null?void 0:p.toString())?"":((W=l.value)==null?void 0:W.toString())??""})}}})]})})}},F={name:"Header: skeleton title/subtitle",render:()=>{const[s,u]=h.useState(!0);return t.jsxs("div",{style:{padding:20,background:"grey"},children:[t.jsx("div",{style:{marginBottom:12},children:t.jsx(mt,{size:"s",onClick:()=>u(d=>!d),children:s?"Загрузить данные":"Показать скелетон"})}),t.jsx("div",{style:{position:"relative",width:600,height:512},children:t.jsx(i,{size:"l",headerSlot:t.jsx(i.Header,{title:s?t.jsx(D,{size:"bodyM",style:{width:180}}):"Аналитический виджет",badge:s?void 0:"TA",subtitle:s?t.jsx(D,{size:"bodyXS",style:{width:120}}):"Данные за месяц",infoTooltipText:"Info"}),contentSlot:t.jsx("div",{style:{minHeight:"fit-content"},children:v()})})})]})}};var R,$,G,M,_;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=($=S.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(_=(M=S.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var z,H,P,U,N;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(H=x.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(N=(U=x.parameters)==null?void 0:U.docs)==null?void 0:N.description}}};var q,X,J,K,Q;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(X=C.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"ℹ️ Для просмотра примера нажми `Show code`.",...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,Z,tt,et,nt;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(tt=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:tt.source},description:{story:`Custom topSlot (свои чипы потребителя) + rightSlot.
Слева блок title/тег/ⓘ/subtitle с margin-right:16, справа генерик-rightSlot
(здесь Select), кнопка-троеточие — абсолютом от потребителя.`,...(nt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:nt.description}}};var ot,it,lt,st,ut;F.parameters={...F.parameters,docs:{...(ot=F.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(lt=(it=F.parameters)==null?void 0:it.docs)==null?void 0:lt.source},description:{story:`Скелетон title/subtitle: данные шапки приходят с бэкенда, на время загрузки
в title/subtitle прокидывается ReactNode (Skeleton) — рендерится как есть,
без типографики и тултипа. Кнопка «Загрузить» имитирует ответ бэка.`,...(ut=(st=F.parameters)==null?void 0:st.docs)==null?void 0:ut.description}}};const Ct=["AnalyticalWidgetL","AnalyticalWidgetM","AnalyticalWidgetS","AnalyticalWidgetCustomTopSlot","AnalyticalWidgetHeaderSkeleton"],It=Object.freeze(Object.defineProperty({__proto__:null,AnalyticalWidgetCustomTopSlot:B,AnalyticalWidgetHeaderSkeleton:F,AnalyticalWidgetL:S,AnalyticalWidgetM:x,AnalyticalWidgetS:C,__namedExportsOrder:Ct,default:gt},Symbol.toStringTag,{value:"Module"}));export{It as A};
