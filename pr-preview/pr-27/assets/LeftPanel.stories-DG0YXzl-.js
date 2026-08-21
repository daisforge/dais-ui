import{r as x,d as e}from"./react-D2T61mpp.js";import{s as I}from"./storySourceDoc-tVKyHcEN.js";import{B as y}from"./Box-CkHcZR3q.js";import{L as v}from"./LeftPanel-CObiyUr5.js";import{a as R}from"./TextField-v-3Q2lXL.js";import{a as $}from"./AnalyticalWidget-DjcaR_dC.js";import{W as t}from"./Widget-DiXg6vTp.js";import{s as o,c as L}from"./constants-B3b49qmU.js";import{y as j,cL as n,cK as l}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as T}from"./styled-components-CSTO6C65.js";import{I as i,D as H,a7 as G,Q as O,p as g,a8 as E,E as _,W as M,b as P,i as A,g as q}from"./@salutejs/sdds-finai-4F5vcRwZ.js";import{jY as r,sz as K,ky as Q,oN as Y}from"./@salutejs/plasma-icons-C9J8k7cv.js";import{c8 as J,bu as U,ca as V}from"./vendor-CHGTV19P.js";const X={title:"Композиции/LeftPanel",tags:["!autodocs"],parameters:{docs:{toc:!0},layout:"fullscreen"},component:v},Z=`
    import { useState } from 'react';
    import {
        IconGroupOutline,
    } from '@daisforge/ui/icons';
    import {
        Box,
        Button,
        H2,
        IconButton,
        LeftPanel,
        Widget,
    } from '@daisforge/ui';
    import type { LeftPanelSlotSizesProps } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
`,b={name:"LeftPanel со слотами",...I({preCode:Z}),render:()=>{const[k,c]=x.useState(!1),[d,a]=x.useState(360),h=s=>{c(s),a(s?void 0:360)},f=s=>{a(s)};return e.jsxDEV("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:"#f5f5f5"},children:[e.jsxDEV(v,{maxWidth:360,widthState:[d,a],onResize:f,onToggleCollapse:h,collapseState:[k,c],expandedContent:e.jsxDEV(t,{$css:{overflow:"hidden"},children:[e.jsxDEV(t.Header,{title:"Title",$css:{overflow:"hidden"},bottomBlock:e.jsxDEV(y,{style:{padding:o.x8,borderRadius:L.s,border:`1px solid ${n}`,color:n,backgroundColor:l},children:e.jsxDEV(g,{children:"Widget.Header bottomBlock"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:136,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:127,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:121,columnNumber:15},void 0),e.jsxDEV(t.Content,{children:e.jsxDEV(y,{style:{padding:o.x8,borderRadius:L.s,border:`1px solid ${n}`,color:n,backgroundColor:l,height:"800px"},children:e.jsxDEV(g,{children:"Widget.Content"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:152,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:142,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:141,columnNumber:15},void 0),e.jsxDEV(t.Footer,{children:e.jsxDEV(y,{style:{padding:o.x8,borderRadius:L.s,border:`1px solid ${n}`,color:n,width:"100%",backgroundColor:l},children:e.jsxDEV(g,{children:"Widget.Footer"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:167,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:157,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:156,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:119,columnNumber:13},void 0),collapsedContent:({buttonSize:s})=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(i,{size:s,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:l,color:n},children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:184,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:175,columnNumber:15},void 0),e.jsxDEV(i,{size:s,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:l,color:n},children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:195,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:186,columnNumber:15},void 0),e.jsxDEV(i,{size:s,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:l,color:n},children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:206,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:197,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:174,columnNumber:13},void 0),collapsedFooterContent:({buttonSize:s})=>e.jsxDEV(i,{size:s,view:"accent",style:{border:`1px solid ${n}`,backgroundColor:l,color:n},children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:221,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:212,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:106,columnNumber:9},void 0),e.jsxDEV("div",{style:{flex:1,padding:o.x8,boxShadow:"var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)",backgroundColor:j,borderRadius:o.x8},children:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxDEV(A,{style:{marginBottom:o.x8},children:"Контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:242,columnNumber:13},void 0),e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d&&e.jsxDEV(q,{style:{marginRight:o.x8},children:[d,"px"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:251,columnNumber:25},void 0),e.jsxDEV(P,{onClick:()=>h(!k),children:"Открыть/Закрыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:252,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:244,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:235,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:225,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:98,columnNumber:7},void 0)}},ee=`
    import { useState } from 'react';
    import {
        IconHierarchy,
        IconSearch,
    } from '@daisforge/ui/icons';
    import {
        Box,
        Button,
        Dropdown,
        H2,
        IconButton,
        LeftPanel,
        LeftPanelProps,
        List,
        ListItem,
        SegmentGroup,
        SegmentItem,
        SegmentProvider,
        TextFieldSearch,
        Widget,
    } from '@daisforge/ui';
     import type { LeftPanelSlotSizesProps } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
     import styled from 'styled-components';

`,ue=T(V)`
  & .cell-content {
    width: 100%;
  }
`,p={name:"Example",...I({preCode:ee}),render:()=>{const k=[{label:"label",value:"label1"},{label:"label",value:"label2"}],c=[{label:"Основной план",value:"label1"},{label:"План блока",value:"label2"},{label:"Персональный план",value:"label3"},{label:"Журнал публикаций",value:"label4"}],[d,a]=x.useState(!1),[h,f]=x.useState(360),s=x.useRef(null),N=u=>{a(u),f(u?void 0:360)},z=()=>{N(!1),requestAnimationFrame(()=>{var u;(u=s.current)==null||u.focus()})};return e.jsxDEV("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:"#f5f5f5"},children:[e.jsxDEV(v,{maxWidth:360,widthState:[h,f],onToggleCollapse:N,collapseState:[d,a],expandedContent:({buttonSize:u})=>e.jsxDEV(t,{$css:{overflow:"hidden"},children:[e.jsxDEV(t.Header,{title:"Title",badge:{text:"badge",size:"s"},$css:{overflow:"hidden",columnGap:"56px !important"},subTitle:e.jsxDEV(g,{children:"description"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:388,columnNumber:27},void 0),bottomBlock:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(J,{defaultSelected:["item_0"],children:e.jsxDEV(G,{style:{marginBottom:o.x8},hasBackground:!0,size:u,stretch:!0,children:k.map((W,m)=>e.jsxDEV(O,{view:"secondary",value:`item_${m}`,label:`Label ${m+1}`,size:u},`item:${m}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:400,columnNumber:27},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:393,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:392,columnNumber:21},void 0),e.jsxDEV("div",{style:{display:"flex",gap:o.x4},children:[e.jsxDEV(R,{size:u,ref:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:419,columnNumber:23},void 0),e.jsxDEV(i,{size:u,view:"secondary",style:{aspectRatio:"1 / 1"},children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:425,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:420,columnNumber:23},void 0),e.jsxDEV(i,{size:u,view:"secondary",style:{aspectRatio:"1 / 1"},children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:432,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:427,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:412,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:390,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:381,columnNumber:15},void 0),e.jsxDEV(t.Content,{children:e.jsxDEV(E,{children:c.map((W,m)=>e.jsxDEV(ue,{children:e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxDEV($,{variant:"BodyM",children:"Текст"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:456,columnNumber:27},void 0),e.jsxDEV(_,{size:"s",view:"default",children:e.jsxDEV(Y,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:458,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:457,columnNumber:27},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:450,columnNumber:25},void 0),e.jsxDEV(M,{size:"s",view:"clear",stretching:"filled",children:e.jsxDEV(U,{type:"arrow",title:"Короткий текст тут",children:e.jsxDEV(E,{view:"default",size:"s",variant:"tight",children:e.jsxDEV(V,{children:["Aaa +"," ",m%2===0?"aaaaa aaaaaaaaa aaaaaaa aaaaaaaaa".repeat(10):""]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:467,columnNumber:31},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:466,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:462,columnNumber:27},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:461,columnNumber:25},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:443,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:442,columnNumber:21},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:440,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:439,columnNumber:15},void 0),e.jsxDEV(t.Footer,{children:e.jsxDEV(P,{size:u,view:"secondary",stretching:"filled",children:"Какая-то кнопка"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:486,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:485,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:380,columnNumber:13},void 0),collapsedContent:({buttonSize:u})=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(i,{size:u,view:"secondary",onClick:z,children:e.jsxDEV(K,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:500,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:495,columnNumber:15},void 0),e.jsxDEV(i,{size:u,view:"secondary",children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:503,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:502,columnNumber:15},void 0),e.jsxDEV(i,{size:u,view:"secondary",children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:506,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:505,columnNumber:15},void 0),e.jsxDEV(H,{items:c,portal:"document",children:e.jsxDEV(i,{size:u,view:"secondary",children:e.jsxDEV(Q,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:510,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:509,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:508,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:494,columnNumber:13},void 0),collapsedFooterContent:({buttonSize:u})=>e.jsxDEV(i,{size:u,view:"secondary",children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:518,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:517,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:370,columnNumber:9},void 0),e.jsxDEV("div",{style:{flex:1,padding:o.x8,boxShadow:"var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)",backgroundColor:j,borderRadius:o.x8},children:e.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxDEV(A,{style:{marginBottom:o.x8},children:"Контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:539,columnNumber:13},void 0),e.jsxDEV(P,{onClick:()=>N(!d),children:"Открыть/Закрыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:541,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:532,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:522,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/LeftPanel/LeftPanel.stories.tsx",lineNumber:362,columnNumber:7},void 0)}};var D,w,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'LeftPanel со слотами',
  ...storySourceDoc({
    preCode: preCodeSlots
  }),
  render: () => {
    // Состояние отвечает за открытие/закрытие панели
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [width, setWidth] = useState<number | undefined>(360);

    // Вызывается при переключении панели
    const handleToggle = (next: boolean) => {
      setIsCollapsed(next);
      if (next) {
        setWidth(undefined);
      } else {
        setWidth(360);
      }
    };

    // Вызывается для получения изменений ширины
    const handleResize = (width: number) => {
      setWidth(width);
    };
    return <div style={{
      height: '100vh',
      padding: '20px',
      display: 'flex',
      backgroundColor: '#f5f5f5'
    }}>
        <LeftPanel
      // Максимальная ширина
      maxWidth={360}
      // State для управления ширины
      widthState={[width, setWidth]}
      // Коллбэк, вызывается при смене состояния
      onResize={handleResize}
      // Коллбэк, вызывается при смене состояния
      onToggleCollapse={handleToggle}
      // Управление состоянием панели
      collapseState={[isCollapsed, setIsCollapsed]}
      // Slot для раскрытой панели (рекомендуется использовать widget)
      expandedContent={<Widget $css={{
        overflow: 'hidden'
      }}>
              {/* Заголовок виджета */}
              <Widget.Header title="Title" $css={{
          overflow: 'hidden'
        }} bottomBlock={<Box style={{
          padding: s.x8,
          borderRadius: br.s,
          border: \`1px solid \${surfaceInfo}\`,
          color: surfaceInfo,
          backgroundColor: surfaceAccentMinor
        }}>
                    <BodyS>Widget.Header bottomBlock</BodyS>
                  </Box>} />
              {/* Основной контент со скроллом */}
              <Widget.Content>
                <Box style={{
            padding: s.x8,
            borderRadius: br.s,
            border: \`1px solid \${surfaceInfo}\`,
            color: surfaceInfo,
            backgroundColor: surfaceAccentMinor,
            height: '800px'
          }}>
                  <BodyS>Widget.Content</BodyS>
                </Box>
              </Widget.Content>
              {/* Нижняя часть виджета */}
              <Widget.Footer>
                <Box style={{
            padding: s.x8,
            borderRadius: br.s,
            border: \`1px solid \${surfaceInfo}\`,
            color: surfaceInfo,
            width: '100%',
            backgroundColor: surfaceAccentMinor
          }}>
                  <BodyS>Widget.Footer</BodyS>
                </Box>
              </Widget.Footer>
            </Widget>}
      // Контент в свернутом состоянии
      collapsedContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <>
              <IconButton size={buttonSize} view="accent" style={{
          border: \`1px solid \${surfaceInfo}\`,
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo
        }}>
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="accent" style={{
          border: \`1px solid \${surfaceInfo}\`,
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo
        }}>
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="accent" style={{
          border: \`1px solid \${surfaceInfo}\`,
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo
        }}>
                <IconGroupOutline />
              </IconButton>
            </>}
      // Нижняя часть в свернутом состоянии
      collapsedFooterContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <IconButton size={buttonSize} view="accent" style={{
        border: \`1px solid \${surfaceInfo}\`,
        backgroundColor: surfaceAccentMinor,
        color: surfaceInfo
      }}>
              <IconGroupOutline />
            </IconButton>} />
        <div style={{
        flex: 1,
        padding: s.x8,
        boxShadow: 'var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)',
        backgroundColor: surfaceSolidCard,
        borderRadius: s.x8
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <H2 style={{
            marginBottom: s.x8
          }}>Контент</H2>
            {/* Кнопка управления панелью */}
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
              {width && <H4 style={{
              marginRight: s.x8
            }}>{width}px</H4>}
              <Button onClick={() => handleToggle(!isCollapsed)}>
                Открыть/Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(B=(w=b.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,F,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => {
    // Данные для кнопок
    const items = [{
      label: 'label',
      value: 'label1'
    }, {
      label: 'label',
      value: 'label2'
    }];

    // Данные для списка
    const contentItems = [{
      label: 'Основной план',
      value: 'label1'
    }, {
      label: 'План блока',
      value: 'label2'
    }, {
      label: 'Персональный план',
      value: 'label3'
    }, {
      label: 'Журнал публикаций',
      value: 'label4'
    }];

    // Состояние отвечает за открытие/закрытие панели
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [width, setWidth] = useState<number | undefined>(360);

    // Реф для поля поиска
    const searchRef = useRef<HTMLInputElement>(null);

    // Вызывается при переключении панели
    const handleToggle = (next: boolean) => {
      setIsCollapsed(next);
      if (next) {
        setWidth(undefined);
      } else {
        setWidth(360);
      }
    };

    // Открывает панель и фокусирует поле поиска
    const handleSearchClick = () => {
      handleToggle(false);
      requestAnimationFrame(() => {
        searchRef.current?.focus();
      });
    };
    return <div style={{
      height: '100vh',
      padding: '20px',
      display: 'flex',
      backgroundColor: '#f5f5f5'
    }}>
        <LeftPanel
      // Максимальная ширина
      maxWidth={360} widthState={[width, setWidth]}
      // Коллбэк, вызывается при смене состояния
      onToggleCollapse={handleToggle}
      // Управление состоянием панели
      collapseState={[isCollapsed, setIsCollapsed]}
      // Slot для раскрытой панели (рекомендуется использовать widget)
      expandedContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <Widget $css={{
        overflow: 'hidden'
      }}>
              <Widget.Header title="Title" badge={{
          text: 'badge',
          size: 's'
        }} $css={{
          overflow: 'hidden',
          columnGap: '56px !important'
        }} subTitle={<BodyS>description</BodyS>} bottomBlock={<>
                    {/* Группа переключателей */}
                    <SegmentProvider defaultSelected={['item_0']}>
                      <SegmentGroup style={{
              marginBottom: s.x8
            }} hasBackground size={buttonSize} stretch>
                        {items.map((_, i) => <SegmentItem view="secondary"
              // eslint-disable-next-line react/no-array-index-key
              key={\`item:\${i}\`} value={\`item_\${i}\`} label={\`Label \${i + 1}\`} size={buttonSize} />)}
                      </SegmentGroup>
                    </SegmentProvider>

                    <div style={{
            display: 'flex',
            gap: s.x4
          }}>
                      {/* Поле поиска и кнопки */}
                      <TextFieldSearch size={buttonSize} ref={searchRef} />
                      <IconButton size={buttonSize} view="secondary" style={{
              aspectRatio: '1 / 1'
            }}>
                        <IconGroupOutline />
                      </IconButton>
                      <IconButton size={buttonSize} view="secondary" style={{
              aspectRatio: '1 / 1'
            }}>
                        <IconGroupOutline />
                      </IconButton>
                    </div>
                  </>} />
              {/* Основной список */}
              <Widget.Content>
                <List>
                  {contentItems.map((_, index) => <FullWidthListItem>
                      <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                        <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                          <Typography variant="BodyM">Текст</Typography>
                          <EmbedIconButton size="s" view="default">
                            <IconPinFill size="xs" />
                          </EmbedIconButton>
                        </div>
                        <Accordion size="s" view="clear" stretching="filled">
                          <AccordionItem type="arrow" title="Короткий текст тут">
                            <List view="default" size="s" variant="tight">
                              <ListItem>
                                Aaa +{' '}
                                {index % 2 === 0 ? 'aaaaa aaaaaaaaa aaaaaaa aaaaaaaaa'.repeat(
                        // eslint-disable-next-line prettier/prettier
                        10) : ''}
                              </ListItem>
                            </List>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </FullWidthListItem>)}
                </List>
              </Widget.Content>
              {/* Нижняя часть виджета */}
              <Widget.Footer>
                <Button size={buttonSize} view="secondary" stretching="filled">
                  Какая-то кнопка
                </Button>
              </Widget.Footer>
            </Widget>}
      // Slot для контента закрытой панели
      collapsedContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <>
              <IconButton size={buttonSize} view="secondary" onClick={handleSearchClick}>
                <IconSearch />
              </IconButton>
              <IconButton size={buttonSize} view="secondary">
                <IconGroupOutline />
              </IconButton>
              <IconButton size={buttonSize} view="secondary">
                <IconGroupOutline />
              </IconButton>
              <Dropdown items={contentItems} portal="document">
                <IconButton size={buttonSize} view="secondary">
                  <IconHierarchy />
                </IconButton>
              </Dropdown>
            </>}
      //   Slot для ниженй части закрытой панели
      collapsedFooterContent={({
        buttonSize
      }: LeftPanelSlotSizesProps) => <IconButton size={buttonSize} view="secondary">
              <IconGroupOutline />
            </IconButton>} />
        <div style={{
        flex: 1,
        padding: s.x8,
        boxShadow: 'var(--shadow-down-soft-s, 0px 4px 14px -4px #08080814,0px 1px 4px -1px #0000000A)',
        backgroundColor: surfaceSolidCard,
        borderRadius: s.x8
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <H2 style={{
            marginBottom: s.x8
          }}>Контент</H2>
            {/* Кнопка управления панелью */}
            <Button onClick={() => handleToggle(!isCollapsed)}>
              Открыть/Закрыть
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...(S=(F=p.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const ne=["LeftPanelSlots","LeftPanelExample"],xe=Object.freeze(Object.defineProperty({__proto__:null,LeftPanelExample:p,LeftPanelSlots:b,__namedExportsOrder:ne,default:X},Symbol.toStringTag,{value:"Module"}));export{xe as L};
