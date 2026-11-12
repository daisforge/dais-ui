import{d as n,r as u}from"./react-D2T61mpp.js";import{g as _}from"./getFuncAsString-CPGdJoHN.js";import{s as T}from"./storySourceDoc-tVKyHcEN.js";import{a as L}from"./AiAgentPopup-xnLrr0ZX.js";import{db as D,A as N}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{J as F}from"./@salutejs/sdds-finai-R41yApkS.js";function m({children:r,lines:s=4,duration:d=300,easing:S="ease-in-out",expandLabel:C="Показать полностью",collapseLabel:R="Свернуть"}){const l=u.useRef(null),c=u.useRef(null),[a,p]=u.useState(!1),[A,x]=u.useState(!0),[j,B]=u.useState(!1),b=()=>{const e=c.current;return e?parseFloat(getComputedStyle(e).lineHeight)*s:0};u.useLayoutEffect(()=>{const e=c.current;if(!e)return;const t=()=>B(e.scrollHeight-b()>1);t();const g=new ResizeObserver(t);return g.observe(e),()=>g.disconnect()},[s,r]);const V=d>0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,z=()=>{const e=l.current,t=c.current;if(!(!e||!t)){if(!V){p(!a),x(a);return}if(e.style.height=`${e.getBoundingClientRect().height}px`,a){e.getBoundingClientRect(),e.style.height=`${b()}px`,p(!1);return}x(!1),p(!0),requestAnimationFrame(()=>{e.style.height=`${t.scrollHeight}px`})}},P=e=>{e.target===e.currentTarget&&(l.current&&(l.current.style.height=""),a||x(!0))};return n.jsxDEV("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8},children:[n.jsxDEV("div",{ref:l,style:{overflow:"hidden",transition:`height ${d}ms ${S}`},onTransitionEnd:P,children:n.jsxDEV(L,{variant:"BodyM",refTypography:c,style:A?{display:"-webkit-box",WebkitLineClamp:s,WebkitBoxOrient:"vertical",overflow:"hidden"}:void 0,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:116,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:108,columnNumber:7},this),j&&n.jsxDEV(F,{size:"s",view:"accent",onClick:z,children:a?R:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:134,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:100,columnNumber:5},this)}const w=`import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  backgroundPrimary,
  LinkButton,
  surfaceSolidCard,
  Typography,
} from '@daisforge/ui';

type ExpandableTextProps = {
  children: React.ReactNode;
  lines?: number;
  duration?: number;
  easing?: string;
  expandLabel?: string;
  collapseLabel?: string;
};

${_("packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx","ExpandableText")}

`,O={title:"Примеры/Сворачиваемый текст",tags:["!autodocs"],parameters:{layout:"fullscreen"}},i={name:"Сворачиваемый текст",...T({preCode:w,previewSource:"shown",type:"code"}),render(){const r={width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:N};return n.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:D},children:[n.jsxDEV("div",{style:r,children:n.jsxDEV(m,{lines:4,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:206,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:205,columnNumber:9},this),n.jsxDEV("div",{style:r,children:n.jsxDEV(m,{lines:4,children:"Короткий текст помещается целиком, кнопка не нужна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:211,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:210,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:196,columnNumber:7},this)}},o={name:"Настройка строк и анимации",args:{lines:3,duration:300,easing:"ease-in-out"},argTypes:{lines:{control:{type:"number",min:1}},duration:{control:{type:"number",min:0,step:50}},easing:{control:"select",options:["ease-in-out","ease","linear","cubic-bezier(0.2, 0, 0, 1)"]}},...T({preCode:w,previewSource:"shown",type:"code"}),render:({lines:r,duration:s,easing:d})=>n.jsxDEV("div",{style:{padding:24,background:D},children:n.jsxDEV("div",{style:{width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:N},children:n.jsxDEV(m,{lines:r,duration:s,easing:d,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:248,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:238,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:237,columnNumber:5},void 0)};var E,f,y;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Сворачиваемый текст',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render() {
    const cardStyle: React.CSSProperties = {
      width: 640,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: '32px 40px',
      borderRadius: 24,
      background: surfaceSolidCard
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 24,
      background: backgroundPrimary
    }}>
        <div style={cardStyle}>
          <ExpandableText lines={4}>
            {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
          </ExpandableText>
        </div>
        <div style={cardStyle}>
          <ExpandableText lines={4}>
            Короткий текст помещается целиком, кнопка не нужна.
          </ExpandableText>
        </div>
      </div>;
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,k,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Настройка строк и анимации',
  args: {
    lines: 3,
    duration: 300,
    easing: 'ease-in-out'
  },
  argTypes: {
    lines: {
      control: {
        type: 'number',
        min: 1
      }
    },
    duration: {
      control: {
        type: 'number',
        min: 0,
        step: 50
      }
    },
    easing: {
      control: 'select',
      options: ['ease-in-out', 'ease', 'linear', 'cubic-bezier(0.2, 0, 0, 1)']
    }
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ({
    lines,
    duration,
    easing
  }) => <div style={{
    padding: 24,
    background: backgroundPrimary
  }}>
      <div style={{
      width: 640,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: '32px 40px',
      borderRadius: 24,
      background: surfaceSolidCard
    }}>
        <ExpandableText lines={lines} duration={duration} easing={easing}>
          {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
        </ExpandableText>
      </div>
    </div>
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const W=["Default","Playground"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Playground:o,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{G as E};
