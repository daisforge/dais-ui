import{r as o,d as e}from"./react-D2T61mpp.js";import{c as O}from"./tableData-UCfjiBCh.js";import{g as W}from"./getFuncAsString-C1kndaLg.js";import{s as P}from"./storySourceDoc-tVKyHcEN.js";import{S as h}from"./SplitView-OVv7uJHg.js";import{f as U}from"./Table-C79Ltqdg.js";import{W as n}from"./Widget-D2tWWvq8.js";import{s}from"./constants-B3b49qmU.js";import{cx as R}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as X}from"./styled-components-C8vPRKee.js";import{f as H}from"./utils-C6gzzOja.js";import{B as f,F as d,I as x,a9 as L,b as c,i as $,v as Y,aa as Z,a as ee}from"./@salutejs/sdds-finai-CPdoK_07.js";import{eV as G,eW as M,p4 as ie}from"./@salutejs/plasma-icons-Dn1uY4zn.js";const _=X.div`
  position: sticky;
  top: 0;
  height: 72px;
  padding-top: 16px;
  margin-top: -16px;
  background-color: teal;
  z-index: 1;
`,se={title:"Композиции/SplitView",parameters:{docs:{toc:!0}},tags:["!autodocs"],component:h};function q({rows:m,setOpenedTask:i}){const t=o.useMemo(()=>[{key:"id",name:"id"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"}],[]);return e.jsxDEV(U,{tableConfig:{containerStyle:{height:700},onCellClick({row:p}){i(p)}},columnConfig:t,rows:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:88,columnNumber:5},this)}const a={name:"SplitView",...P({previewSource:"shown",preCode:`
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
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


${W("packages/storybook/src/stories/SplitView/SplitView.stories.tsx","SplitViewTableComponent")}


    `}),render:()=>{const[m]=o.useState(O),[i,t]=o.useState(null),[p,b]=o.useState(!1),[r,w]=o.useState(!1),{down:k}=H(),V=k("xl")?530:void 0,g=u=>{t(u),b(!0)},v=()=>{w(u=>!u)},N=()=>{w(!1),b(!1),setTimeout(()=>{t(null)},300)};return e.jsxDEV("div",{style:{backgroundColor:R},children:[e.jsxDEV(_,{children:"Header FinAI"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:165,columnNumber:9},void 0),e.jsxDEV(h,{$css:{marginInline:-16,paddingLeft:16},mainContent:e.jsxDEV("div",{style:{paddingBlock:s.x12},children:[e.jsxDEV($,{style:{paddingBlock:s.x8},children:"Основной контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:172,columnNumber:15},void 0),e.jsxDEV(q,{rows:m,setOpenedTask:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:173,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:171,columnNumber:13},void 0),sidebar:{isOpened:p,isFullScreened:r,minWidthPx:V,paddingLeftOnClosed:16,content:({avatarSize:u})=>e.jsxDEV(n,{containerType:r?"modal":"splitView",children:[e.jsxDEV(n.Header,{onClose:N,fullScreened:r,toggleFullScreened:v,title:`Обработка документов по ${i==null?void 0:i.id}`,titleLeftSlot:e.jsxDEV(L,{size:u,name:(i==null?void 0:i.task)??""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:195,columnNumber:21},void 0),rightBlock:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n.IconButtonDots,{size:"xs",iconSize:"xs",iconOrientation:"vertical",dropdownProps:{items:[{label:"label 1",value:"1"},{label:"label 2",value:"2"}]}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:199,columnNumber:23},void 0),e.jsxDEV(n.Divider,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:210,columnNumber:23},void 0),e.jsxDEV(d,{mainAxisGap:s.x2,children:[e.jsxDEV(x,{view:"secondary",size:"xs",children:e.jsxDEV(G,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:213,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:212,columnNumber:25},void 0),e.jsxDEV(x,{view:"secondary",size:"xs",children:e.jsxDEV(M,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:216,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:215,columnNumber:25},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:211,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:198,columnNumber:21},void 0),badge:{text:"Бейдж"},bottomBlock:e.jsxDEV("div",{style:{display:"flex",gap:s.x2},children:[e.jsxDEV(f,{size:"s",transparent:!0,view:"accent",text:"В работе"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:224,columnNumber:23},void 0),e.jsxDEV(f,{size:"s",transparent:!0,view:"negative",text:"2-й раз"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:230,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:223,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:189,columnNumber:17},void 0),e.jsxDEV(n.Content,{children:e.jsxDEV("div",{style:{height:"2000px",backgroundColor:"goldenrod"},children:e.jsxDEV("span",{style:{position:"absolute",right:0,width:"4px",backgroundColor:"teal"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:244,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:241,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:240,columnNumber:17},void 0),e.jsxDEV(n.Footer,{leftBlock:e.jsxDEV(d,{mainAxisGap:s.x4,children:[e.jsxDEV(c,{text:"Кнопка 1",size:"xs",view:"secondary"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:258,columnNumber:23},void 0),e.jsxDEV(n.IconButtonDots,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:259,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:257,columnNumber:21},void 0),rightBlock:e.jsxDEV(d,{mainAxisGap:s.x4,children:[e.jsxDEV(c,{text:"Кнопка",size:"xs",view:"secondary"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:264,columnNumber:23},void 0),e.jsxDEV(c,{text:"Главная кнопка",size:"xs",view:"accent"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:265,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:263,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:255,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:186,columnNumber:15},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:167,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:164,columnNumber:7},void 0)}},l={name:"SplitView + Tabs Icon Vertical",...P({previewSource:"shown",preCode:`
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
  Divider,
  Flow,
  H2,
  IconButton,
  IconTabItem,
  s,
  Table,
  Tabs,
  Widget,
} from '@daisforge/ui';
import { IconPlasma } from '@ui-kit/icons';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


${W("packages/storybook/src/stories/SplitView/SplitView.stories.tsx","SplitViewTableComponent")}


    `}),render:()=>{const[m]=o.useState(O),[i,t]=o.useState(null),[p,b]=o.useState(!1),[r,w]=o.useState(!1),[k,V]=o.useState(0),{down:g}=H(),v=g("xl")?530:void 0,N=[0,1,2,3,4],u=S=>{t(S),b(!0)},J=()=>{w(S=>!S)},K=()=>{w(!1),b(!1),setTimeout(()=>{t(null)},300)};return e.jsxDEV("div",{style:{backgroundColor:R},children:[e.jsxDEV(_,{children:"Header FinAI"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:352,columnNumber:9},void 0),e.jsxDEV(h,{$css:{marginInline:-16,paddingLeft:16},mainContent:e.jsxDEV("div",{style:{paddingBlock:s.x12},children:[e.jsxDEV($,{style:{paddingBlock:s.x8},children:"Основной контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:358,columnNumber:15},void 0),e.jsxDEV(q,{rows:m,setOpenedTask:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:359,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:357,columnNumber:13},void 0),sidebar:{isOpened:p,isFullScreened:r,minWidthPx:v,paddingLeftOnClosed:16,content:({avatarSize:S})=>e.jsxDEV("div",{style:{display:"flex",height:"100%"},children:[e.jsxDEV(Y,{orientation:"vertical",size:"s",view:"divider",style:{alignSelf:"flex-start",paddingTop:s.x8},children:N.map((Q,y)=>e.jsxDEV(Z,{selected:y===k,onClick:()=>V(y),orientation:"vertical",view:"divider",size:"s",tabIndex:0,style:{padding:`${s.x4} 10px ${s.x3} 10px`},children:e.jsxDEV(ie,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:390,columnNumber:23},void 0)},`tab:${Q}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:380,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:373,columnNumber:17},void 0),e.jsxDEV(ee,{orientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:396,columnNumber:17},void 0),e.jsxDEV(n,{containerType:r?"modal":"splitView",style:{flex:1,minWidth:0},children:[e.jsxDEV(n.Header,{onClose:K,fullScreened:r,toggleFullScreened:J,title:`Обработка документов по ${i==null?void 0:i.id}`,titleLeftSlot:e.jsxDEV(L,{size:S,name:(i==null?void 0:i.task)??""},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:409,columnNumber:23},void 0),rightBlock:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n.IconButtonDots,{size:"xs",iconSize:"xs",iconOrientation:"vertical",dropdownProps:{items:[{label:"label 1",value:"1"},{label:"label 2",value:"2"}]}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:413,columnNumber:25},void 0),e.jsxDEV(n.Divider,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:424,columnNumber:25},void 0),e.jsxDEV(d,{mainAxisGap:s.x2,children:[e.jsxDEV(x,{view:"secondary",size:"xs",children:e.jsxDEV(G,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:427,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:426,columnNumber:27},void 0),e.jsxDEV(x,{view:"secondary",size:"xs",children:e.jsxDEV(M,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:430,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:429,columnNumber:27},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:425,columnNumber:25},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:412,columnNumber:23},void 0),badge:{text:"Бейдж"},bottomBlock:e.jsxDEV("div",{style:{display:"flex",gap:s.x2},children:[e.jsxDEV(f,{size:"s",transparent:!0,view:"accent",text:"В работе"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:438,columnNumber:25},void 0),e.jsxDEV(f,{size:"s",transparent:!0,view:"negative",text:"2-й раз"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:444,columnNumber:25},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:437,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:403,columnNumber:19},void 0),e.jsxDEV(n.Content,{children:e.jsxDEV("div",{style:{height:"2000px",backgroundColor:"goldenrod"},children:["Кастомный слот — Tab ",k+1]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:455,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:454,columnNumber:19},void 0),e.jsxDEV(n.Footer,{leftBlock:e.jsxDEV(d,{mainAxisGap:s.x4,children:[e.jsxDEV(c,{text:"Кнопка 1",size:"xs",view:"secondary"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:468,columnNumber:25},void 0),e.jsxDEV(n.IconButtonDots,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:469,columnNumber:25},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:467,columnNumber:23},void 0),rightBlock:e.jsxDEV(d,{mainAxisGap:s.x4,children:[e.jsxDEV(c,{text:"Кнопка",size:"xs",view:"secondary"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:474,columnNumber:25},void 0),e.jsxDEV(c,{text:"Главная кнопка",size:"xs",view:"accent"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:475,columnNumber:25},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:473,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:465,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:399,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:371,columnNumber:15},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:354,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/SplitView/SplitView.stories.tsx",lineNumber:351,columnNumber:7},void 0)}};var D,E,F,I,B;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'SplitView',
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
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


\${getFuncAsString('packages/storybook/src/stories/SplitView/SplitView.stories.tsx', 'SplitViewTableComponent')}


    \`
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [openedTask, setOpenedTask] = useState<Row | null>(null);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
    const [sidebarIsFullScreened, setSidebarIsFullScreened] = useState(false);
    const {
      down
    } = useBreakpoint();
    const sidebarMinWidthPx = down('xl') ? 530 : undefined;
    const openTaskSidebar = (row: Row) => {
      setOpenedTask(row);
      setSidebarIsOpened(true);
    };
    const toggleFullScreen = () => {
      setSidebarIsFullScreened(prev => !prev);
    };
    const onSidebarEsc = () => {
      setSidebarIsFullScreened(false);
      setSidebarIsOpened(false);
      setTimeout(() => {
        setOpenedTask(null);
      }, 300);
    };
    return <div style={{
      backgroundColor: backgroundPrimary
    }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView
      // стилизация для примера
      $css={{
        marginInline: -16,
        paddingLeft: 16
      }} mainContent={<div style={{
        paddingBlock: s.x12
      }}>
              <H2 style={{
          paddingBlock: s.x8
        }}>Основной контент</H2>
              <SplitViewTableComponent rows={rows} setOpenedTask={openTaskSidebar} />
            </div>} sidebar={{
        isOpened: sidebarIsOpened,
        isFullScreened: sidebarIsFullScreened,
        minWidthPx: sidebarMinWidthPx,
        // стилизация для примера
        paddingLeftOnClosed: 16,
        content: ({
          avatarSize
        }: SplitViewSlotSizesProps) => <Widget containerType={sidebarIsFullScreened ? 'modal' : 'splitView'}>
                <Widget.Header onClose={onSidebarEsc} fullScreened={sidebarIsFullScreened} toggleFullScreened={toggleFullScreen} title={\`Обработка документов по \${openedTask?.id}\`} titleLeftSlot={<Avatar size={avatarSize} name={openedTask?.task ?? ''} />} rightBlock={<>
                      <Widget.IconButtonDots size="xs" iconSize="xs" iconOrientation="vertical" dropdownProps={{
              items: [{
                label: 'label 1',
                value: '1'
              }, {
                label: 'label 2',
                value: '2'
              }]
            }} />
                      <Widget.Divider />
                      <Flow mainAxisGap={s.x2}>
                        <IconButton view="secondary" size="xs">
                          <IconChevronLeft size="xs" />
                        </IconButton>
                        <IconButton view="secondary" size="xs">
                          <IconChevronRight size="xs" />
                        </IconButton>
                      </Flow>
                    </>} badge={{
            text: 'Бейдж'
          }} bottomBlock={<div style={{
            display: 'flex',
            gap: s.x2
          }}>
                      <Badge size="s" transparent view="accent" text="В работе" />
                      <Badge size="s" transparent view="negative" text="2-й раз" />
                    </div>} />

                <Widget.Content>
                  <div style={{
              height: '2000px',
              backgroundColor: 'goldenrod'
            }}>
                    <span style={{
                position: 'absolute',
                right: 0,
                width: '4px',
                backgroundColor: 'teal'
              }} />
                  </div>
                </Widget.Content>

                <Widget.Footer leftBlock={<Flow mainAxisGap={s.x4}>
                      <Button text="Кнопка 1" size="xs" view="secondary" />
                      <Widget.IconButtonDots size="xs" />
                    </Flow>} rightBlock={<Flow mainAxisGap={s.x4}>
                      <Button text="Кнопка" size="xs" view="secondary" />
                      <Button text="Главная кнопка" size="xs" view="accent" />
                    </Flow>} />
              </Widget>
      }} />
      </div>;
  }
}`,...(F=(E=a.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Кликните на любую ячейку таблицы для открытия SplitView.\n\n#####ℹ️ Для просмотра примера нажми `Show code`.",...(B=(I=a.parameters)==null?void 0:I.docs)==null?void 0:B.description}}};var C,T,j,z,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'SplitView + Tabs Icon Vertical',
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
  Divider,
  Flow,
  H2,
  IconButton,
  IconTabItem,
  s,
  Table,
  Tabs,
  Widget,
} from '@daisforge/ui';
import { IconPlasma } from '@ui-kit/icons';
import type { SplitViewSlotSizesProps } from '@daisforge/ui';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useMemo, useState } from 'react';


\${getFuncAsString('packages/storybook/src/stories/SplitView/SplitView.stories.tsx', 'SplitViewTableComponent')}


    \`
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [openedTask, setOpenedTask] = useState<Row | null>(null);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
    const [sidebarIsFullScreened, setSidebarIsFullScreened] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const {
      down
    } = useBreakpoint();
    const sidebarMinWidthPx = down('xl') ? 530 : undefined;
    const tabItems = [0, 1, 2, 3, 4];
    const openTaskSidebar = (row: Row) => {
      setOpenedTask(row);
      setSidebarIsOpened(true);
    };
    const toggleFullScreen = () => {
      setSidebarIsFullScreened(prev => !prev);
    };
    const onSidebarEsc = () => {
      setSidebarIsFullScreened(false);
      setSidebarIsOpened(false);
      setTimeout(() => {
        setOpenedTask(null);
      }, 300);
    };
    return <div style={{
      backgroundColor: backgroundPrimary
    }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView $css={{
        marginInline: -16,
        paddingLeft: 16
      }} mainContent={<div style={{
        paddingBlock: s.x12
      }}>
              <H2 style={{
          paddingBlock: s.x8
        }}>Основной контент</H2>
              <SplitViewTableComponent rows={rows} setOpenedTask={openTaskSidebar} />
            </div>} sidebar={{
        isOpened: sidebarIsOpened,
        isFullScreened: sidebarIsFullScreened,
        minWidthPx: sidebarMinWidthPx,
        paddingLeftOnClosed: 16,
        content: ({
          avatarSize
        }: SplitViewSlotSizesProps) => <div style={{
          display: 'flex',
          height: '100%'
        }}>
                {/* Tabs Icon Vertical S — СЛЕВА */}
                <Tabs orientation="vertical" size="s" view="divider" style={{
            alignSelf: 'flex-start',
            paddingTop: s.x8
          }}>
                  {tabItems.map((id, i) => <IconTabItem key={\`tab:\${id}\`} selected={i === activeTab} onClick={() => setActiveTab(i)} orientation="vertical" view="divider" size="s" tabIndex={0} style={{
              padding: \`\${s.x4} 10px \${s.x3} 10px\`
            }}>
                      <IconPlasma color="inherit" />
                    </IconTabItem>)}
                </Tabs>

                {/* Divider вертикальный между табами и Widget */}
                <Divider orientation="vertical" />

                {/* Основной контент Widget — СПРАВА */}
                <Widget containerType={sidebarIsFullScreened ? 'modal' : 'splitView'} style={{
            flex: 1,
            minWidth: 0
          }}>
                  <Widget.Header onClose={onSidebarEsc} fullScreened={sidebarIsFullScreened} toggleFullScreened={toggleFullScreen} title={\`Обработка документов по \${openedTask?.id}\`} titleLeftSlot={<Avatar size={avatarSize} name={openedTask?.task ?? ''} />} rightBlock={<>
                        <Widget.IconButtonDots size="xs" iconSize="xs" iconOrientation="vertical" dropdownProps={{
                items: [{
                  label: 'label 1',
                  value: '1'
                }, {
                  label: 'label 2',
                  value: '2'
                }]
              }} />
                        <Widget.Divider />
                        <Flow mainAxisGap={s.x2}>
                          <IconButton view="secondary" size="xs">
                            <IconChevronLeft size="xs" />
                          </IconButton>
                          <IconButton view="secondary" size="xs">
                            <IconChevronRight size="xs" />
                          </IconButton>
                        </Flow>
                      </>} badge={{
              text: 'Бейдж'
            }} bottomBlock={<div style={{
              display: 'flex',
              gap: s.x2
            }}>
                        <Badge size="s" transparent view="accent" text="В работе" />
                        <Badge size="s" transparent view="negative" text="2-й раз" />
                      </div>} />

                  <Widget.Content>
                    <div style={{
                height: '2000px',
                backgroundColor: 'goldenrod'
              }}>
                      Кастомный слот — Tab {activeTab + 1}
                    </div>
                  </Widget.Content>

                  <Widget.Footer leftBlock={<Flow mainAxisGap={s.x4}>
                        <Button text="Кнопка 1" size="xs" view="secondary" />
                        <Widget.IconButtonDots size="xs" />
                      </Flow>} rightBlock={<Flow mainAxisGap={s.x4}>
                        <Button text="Кнопка" size="xs" view="secondary" />
                        <Button text="Главная кнопка" size="xs" view="accent" />
                      </Flow>} />
                </Widget>
              </div>
      }} />
      </div>;
  }
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:`SplitView с вертикальными иконочными табами справа.
При включении табов контентная часть sidebar уменьшается.
Используется компонент Tabs/Icon/Vertical/Tabs S + Divider.

#####ℹ️ Для просмотра примера нажми \`Show code\`.`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};const ne=["SplitViewStory","SplitViewWithTabsStory"],ke=Object.freeze(Object.defineProperty({__proto__:null,SplitViewStory:a,SplitViewWithTabsStory:l,__namedExportsOrder:ne,default:se},Symbol.toStringTag,{value:"Module"}));export{ke as S};
