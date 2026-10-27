import{r as Y,j as e}from"./react-CAOzMBF_.js";import{s as n}from"./storySourceDoc-tVKyHcEN.js";import{B as i}from"./BlockTitle-C-OG5RUU.js";import{B as z}from"./Box-DvvYTz20.js";import{s as t,c as D}from"./constants-DatVHdkd.js";import{cR as r,A as u,bb as s,cQ as E,cT as f}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{L as Z}from"./LeftPanel-bnl-ylDT.js";import{W as b}from"./Widget-CvkMap1n.js";import{I as l,D as ee,a8 as oe,R as te,a9 as ie,t as j,s as v,v as le,m as P}from"./@salutejs/sdds-finai-CKhMjg07.js";import{k0 as C,sL as ne,kC as re,pc as T,ia as ue}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{ck as se,cm as ae}from"./vendor-DmWczWMC.js";const a=()=>{const o=[{label:"label",value:"label1"},{label:"label",value:"label2"}],k=[{label:"Основной план",value:"label1"},{label:"План блока",value:"label2"},{label:"Персональный план",value:"label3"},{label:"Журнал публикаций",value:"label4"}],[U,w]=Y.useState(!1),X=d=>{w(d)};return e.jsx(Z,{maxWidth:360,onToggleCollapse:X,collapseState:[U,w],expandedContent:e.jsxs(b,{$css:{overflow:"hidden"},children:[e.jsx(b.Header,{title:"Title",$css:{overflow:"hidden",padding:0},bottomBlock:e.jsx(e.Fragment,{children:e.jsx(se,{defaultSelected:["item_0"],children:e.jsx(oe,{hasBackground:!0,size:"xs",stretch:!0,children:o.map((d,y)=>e.jsx(te,{view:"secondary",value:`item_${y}`,label:`Label ${y+1}`,size:"s"},`item:${y}`))})})})}),e.jsx(b.Content,{children:e.jsx(ie,{children:k.map(d=>e.jsx(ae,{style:{cursor:"pointer"},children:d.label},d.value))})}),e.jsx(b.Footer,{children:e.jsx(j,{view:"secondary",stretching:"filled",children:"Какая-то кнопка"})})]}),collapsedContent:e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"s",view:"secondary",children:e.jsx(ne,{})}),e.jsx(l,{size:"s",view:"secondary",children:e.jsx(C,{})}),e.jsx(l,{size:"s",view:"secondary",children:e.jsx(C,{})}),e.jsx(ee,{items:k,children:e.jsx(l,{size:"s",view:"secondary",children:e.jsx(re,{})})})]}),collapsedFooterContent:e.jsx(l,{size:"s",view:"secondary",children:e.jsx(C,{})})})},de={title:"Композиции/BlockTitle",tags:["!autodocs"],parameters:{docs:{toc:!0},layout:"fullscreen"},component:i},B=({buttonSize:o,actionIconSize:k})=>e.jsxs("div",{style:{display:"flex",gap:t.x4},children:[e.jsx(l,{size:o,view:"secondary",children:e.jsx(ue,{size:k,color:"inherit"})}),e.jsx(j,{size:o,view:"secondary",children:"Label"}),e.jsx(j,{size:o,view:"accent",children:"Label"})]}),ce=`
    import { useState } from 'react';
    import {
        Box,
        Button,
        IconButton,
        BlockTitle,
        type BlockTitleSlotSizesProps
    } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
`,c={name:"BlockTitle Slots",...n({preCode:ce}),render:()=>e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:r},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:t.x8,boxShadow:s,backgroundColor:u,borderRadius:t.x8},children:e.jsx(i,{title:"Title",description:"description",titleSize:"H5",titleLeftSlot:({titleIconSize:o})=>e.jsx(T,{size:o}),titleRightSlot:({titleIconSize:o})=>e.jsx(T,{size:o}),topSlot:e.jsx(z,{style:{padding:t.x8,borderRadius:D.s,border:`1px solid ${f}`,color:f,backgroundColor:E},children:e.jsx(P,{children:"BlockTitle topSlot"})}),rightSlot:e.jsx(z,{style:{padding:t.x8,borderRadius:D.s,border:`1px solid ${f}`,color:f,backgroundColor:E,width:"200px"},children:e.jsx(P,{children:"BlockTitle rightSlot"})})})})]})},m=`
    import { useState } from 'react';
    import {
        Box,
        Button,
        IconButton,
        BlockTitle,
        type BlockTitleSlotSizesProps
    } from '@daisforge/ui';
     import { br, s } from '@daisforge/ui/constants';
`,p={name:"BlockTitle Example",...n({preCode:m}),render:()=>e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:r},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:t.x8,boxShadow:s,backgroundColor:u,borderRadius:t.x8},children:e.jsx(i,{title:"Страница",titleSize:"H4",topSlot:({titleBadgeSize:o})=>e.jsxs("div",{style:{display:"flex",gap:t.x2},children:[e.jsx(v,{size:o,view:"light",text:"Обновил: 12345678"}),e.jsx(v,{size:o,view:"light",text:"Дата изменения: 03.06.2025, 09:00"}),e.jsx(le,{size:"xs",view:"accent",text:"Описание"})]}),rightSlot:B})})]})},x={name:"BlockTitle с Badge",...n({preCode:m}),render:()=>e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:r},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:t.x8,boxShadow:s,backgroundColor:u,borderRadius:t.x8},children:e.jsx(i,{title:"Title",description:"Description",titleRightSlot:({titleBadgeSize:o})=>e.jsx(v,{size:o,view:"default",text:"Label",style:{marginLeft:"12px"}}),rightSlot:B})})]})},g={name:"BlockTitle с кнопкой назад",...n({preCode:m}),render:()=>e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:r},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:t.x8,boxShadow:s,backgroundColor:u,borderRadius:t.x8},children:e.jsx(i,{title:"Title",titleSize:"H3",description:"Description",onBackButtonClick:()=>alert("onBackClick"),titleRightSlot:({titleBadgeSize:o})=>e.jsx(v,{size:o,view:"default",text:"Label",style:{marginLeft:"12px"}}),rightSlot:B})})]})},h={name:"BlockTitle с кнопкой назад и иконкой",...n({preCode:m}),render:()=>e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:r},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:t.x8,boxShadow:s,backgroundColor:u,borderRadius:t.x8},children:e.jsx(i,{title:"Title",description:"Description",onBackButtonClick:()=>alert("onBackClick"),titleRightSlot:({titleIconSize:o})=>e.jsx(T,{size:o}),rightSlot:B})})]})},pe="Отчёт по операционной эффективности подразделений за третий квартал 2025 года с разбивкой по регионам и продуктам",S={name:"BlockTitle с настройкой тултипа заголовка",...n({preCode:m}),render:()=>e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:r},children:[e.jsx(a,{}),e.jsx("div",{style:{flex:1,padding:t.x8,boxShadow:s,backgroundColor:u,borderRadius:t.x8},children:e.jsx(i,{title:pe,description:"Наведите на заголовок — тултип ограничен по ширине и раскрывается вниз",titleTooltipProps:{maxWidth:"300px",placement:"bottom-start"},rightSlot:B})})]})};var R,A,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'BlockTitle Slots',
  ...storySourceDoc({
    preCode: preCodeSlots
  }),
  render: () => <div style={{
    height: '100vh',
    padding: '20px',
    display: 'flex',
    backgroundColor: lightBackgroundPrimary
  }}>
      {/* Компонент левой панели */}
      <LeftPanelBlock />
      <div style={{
      flex: 1,
      padding: s.x8,
      boxShadow: shadowDownSoftS,
      backgroundColor: surfaceSolidCard,
      borderRadius: s.x8
    }}>
        <BlockTitle title="Title" description="description" titleSize="H5"
      /* Правая и левая иконки */ titleLeftSlot={({
        titleIconSize
      }: BlockTitleSlotSizesProps) => <IconPlasma size={titleIconSize} />} titleRightSlot={({
        titleIconSize
      }: BlockTitleSlotSizesProps) => <IconPlasma size={titleIconSize} />}
      /* Кастомный блок сверху */ topSlot={<Box style={{
        padding: s.x8,
        borderRadius: br.s,
        border: \`1px solid \${surfaceInfo}\`,
        color: surfaceInfo,
        backgroundColor: surfaceAccentMinor
      }}>
              <BodyS>BlockTitle topSlot</BodyS>
            </Box>}
      /* Правая часть */ rightSlot={<Box style={{
        padding: s.x8,
        borderRadius: br.s,
        border: \`1px solid \${surfaceInfo}\`,
        color: surfaceInfo,
        backgroundColor: surfaceAccentMinor,
        width: '200px'
      }}>
              <BodyS>BlockTitle rightSlot</BodyS>
            </Box>} />
      </div>
    </div>
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var F,L,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'BlockTitle Example',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => <div style={{
    height: '100vh',
    padding: '20px',
    display: 'flex',
    backgroundColor: lightBackgroundPrimary
  }}>
      {/* Компонент левой панели */}
      <LeftPanelBlock />
      <div style={{
      flex: 1,
      padding: s.x8,
      boxShadow: shadowDownSoftS,
      backgroundColor: surfaceSolidCard,
      borderRadius: s.x8
    }}>
        <BlockTitle title="Страница" titleSize="H4"
      /* Кастомный блок сверху */ topSlot={({
        titleBadgeSize
      }: BlockTitleSlotSizesProps) => <div style={{
        display: 'flex',
        gap: s.x2
      }}>
              <Badge size={titleBadgeSize} view="light" text="Обновил: 12345678" />
              <Badge size={titleBadgeSize} view="light" text="Дата изменения: 03.06.2025, 09:00" />
              <Chip size="xs" view="accent" text="Описание" />
            </div>}
      /* Правая часть */ rightSlot={renderRightActionsSlot} />
      </div>
    </div>
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,$,H;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'BlockTitle с Badge',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => <div style={{
    height: '100vh',
    padding: '20px',
    display: 'flex',
    backgroundColor: lightBackgroundPrimary
  }}>
      <LeftPanelBlock />
      <div style={{
      flex: 1,
      padding: s.x8,
      boxShadow: shadowDownSoftS,
      backgroundColor: surfaceSolidCard,
      borderRadius: s.x8
    }}>
        <BlockTitle title="Title" description="Description" titleRightSlot={({
        titleBadgeSize
      }: BlockTitleSlotSizesProps) => <Badge size={titleBadgeSize} view="default" text="Label" style={{
        marginLeft: '12px'
      }} />} rightSlot={renderRightActionsSlot} />
      </div>
    </div>
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var O,M,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'BlockTitle с кнопкой назад',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => <div style={{
    height: '100vh',
    padding: '20px',
    display: 'flex',
    backgroundColor: lightBackgroundPrimary
  }}>
      <LeftPanelBlock />
      <div style={{
      flex: 1,
      padding: s.x8,
      boxShadow: shadowDownSoftS,
      backgroundColor: surfaceSolidCard,
      borderRadius: s.x8
    }}>
        <BlockTitle title="Title" titleSize="H3" description="Description"
      // eslint-disable-next-line no-alert
      onBackButtonClick={() => alert('onBackClick')} titleRightSlot={({
        titleBadgeSize
      }: BlockTitleSlotSizesProps) => <Badge size={titleBadgeSize} view="default" text="Label" style={{
        marginLeft: '12px'
      }} />} rightSlot={renderRightActionsSlot} />
      </div>
    </div>
}`,...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var Q,V,q;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'BlockTitle с кнопкой назад и иконкой',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => <div style={{
    height: '100vh',
    padding: '20px',
    display: 'flex',
    backgroundColor: lightBackgroundPrimary
  }}>
      <LeftPanelBlock />
      <div style={{
      flex: 1,
      padding: s.x8,
      boxShadow: shadowDownSoftS,
      backgroundColor: surfaceSolidCard,
      borderRadius: s.x8
    }}>
        <BlockTitle title="Title" description="Description"
      // eslint-disable-next-line no-alert
      onBackButtonClick={() => alert('onBackClick')} titleRightSlot={({
        titleIconSize
      }: BlockTitleSlotSizesProps) => <IconPlasma size={titleIconSize} />} rightSlot={renderRightActionsSlot} />
      </div>
    </div>
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,K,N;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'BlockTitle с настройкой тултипа заголовка',
  ...storySourceDoc({
    preCode: preCodeExample
  }),
  render: () => <div style={{
    height: '100vh',
    padding: '20px',
    display: 'flex',
    backgroundColor: lightBackgroundPrimary
  }}>
      <LeftPanelBlock />
      <div style={{
      flex: 1,
      padding: s.x8,
      boxShadow: shadowDownSoftS,
      backgroundColor: surfaceSolidCard,
      borderRadius: s.x8
    }}>
        <BlockTitle title={longTitle} description="Наведите на заголовок — тултип ограничен по ширине и раскрывается вниз"
      /* Ограничиваем ширину тултипа и задаём его позицию */ titleTooltipProps={{
        maxWidth: '300px',
        placement: 'bottom-start'
      }} rightSlot={renderRightActionsSlot} />
      </div>
    </div>
}`,...(N=(K=S.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const xe=["BlockTitleSlots","BlockTitleExample","BlockTitleWithBadge","BlockTitleWithBackButton","BlockTitleWithBackButtonAndIcon","BlockTitleWithTooltipProps"],je=Object.freeze(Object.defineProperty({__proto__:null,BlockTitleExample:p,BlockTitleSlots:c,BlockTitleWithBackButton:g,BlockTitleWithBackButtonAndIcon:h,BlockTitleWithBadge:x,BlockTitleWithTooltipProps:S,__namedExportsOrder:xe,default:de},Symbol.toStringTag,{value:"Module"}));export{je as B};
