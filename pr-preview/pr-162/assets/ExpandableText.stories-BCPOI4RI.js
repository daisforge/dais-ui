import{d as n,r as u}from"./react-D2T61mpp.js";import{g as L}from"./getFuncAsString-BgZ4npH_.js";import{s as D}from"./storySourceDoc-tVKyHcEN.js";import{a as _}from"./AiAgentPopup-DfNbinHF.js";import{db as N,A as w}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{J as F}from"./@salutejs/sdds-finai-C2nSo9ZF.js";function b({children:r,lines:t=4,duration:l=300,easing:C="ease-in-out",expandLabel:R="Показать полностью",collapseLabel:A="Свернуть"}){const s=u.useRef(null),c=u.useRef(null),[a,p]=u.useState(!1),[x,m]=u.useState(!0),[j,B]=u.useState(!1),g=()=>{const e=c.current;return e?parseFloat(getComputedStyle(e).lineHeight)*t:0};u.useLayoutEffect(()=>{const e=c.current;if(!e)return;const i=()=>B(e.scrollHeight-g()>1);i();const E=new ResizeObserver(i);return E.observe(e),()=>E.disconnect()},[t,r]);const V=l>0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,z=()=>{const e=s.current,i=c.current;if(!(!e||!i)){if(!V){p(!a),m(a);return}if(e.style.height=`${e.getBoundingClientRect().height}px`,a){e.getBoundingClientRect(),e.style.height=`${g()}px`,p(!1);return}m(!1),p(!0),requestAnimationFrame(()=>{e.style.height=`${i.scrollHeight}px`})}},P=e=>{if(e.target===e.currentTarget){if(a){s.current&&(s.current.style.height="");return}m(!0)}};return u.useLayoutEffect(()=>{x&&s.current&&(s.current.style.height="")},[x]),n.jsxDEV("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8},children:[n.jsxDEV("div",{ref:s,style:{overflow:"hidden",transition:`height ${l}ms ${C}`},onTransitionEnd:P,children:n.jsxDEV(_,{variant:"BodyM",refTypography:c,style:x?{display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical",overflow:"hidden"}:void 0,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:125,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:117,columnNumber:7},this),j&&n.jsxDEV(F,{size:"s",view:"accent",onClick:z,children:a?A:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:143,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:109,columnNumber:5},this)}const S=`import React, { useLayoutEffect, useRef, useState } from 'react';
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

${L("packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx","ExpandableText")}

`,O={title:"Примеры/Сворачиваемый текст",tags:["!autodocs"],parameters:{layout:"fullscreen"}},o={name:"Сворачиваемый текст",...D({preCode:S,previewSource:"shown",type:"code"}),render(){const r={width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:w};return n.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:N},children:[n.jsxDEV("div",{style:r,children:n.jsxDEV(b,{lines:4,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:215,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:214,columnNumber:9},this),n.jsxDEV("div",{style:r,children:n.jsxDEV(b,{lines:4,children:"Короткий текст помещается целиком, кнопка не нужна."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:220,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:219,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:205,columnNumber:7},this)}},d={name:"Настройка строк и анимации",args:{lines:3,duration:300,easing:"ease-in-out"},argTypes:{lines:{control:{type:"number",min:1}},duration:{control:{type:"number",min:0,step:50}},easing:{control:"select",options:["ease-in-out","ease","linear","cubic-bezier(0.2, 0, 0, 1)"]}},...D({preCode:S,previewSource:"shown",type:"code"}),render:({lines:r,duration:t,easing:l})=>n.jsxDEV("div",{style:{padding:24,background:N},children:n.jsxDEV("div",{style:{width:640,maxWidth:"100%",boxSizing:"border-box",padding:"32px 40px",borderRadius:24,background:w},children:n.jsxDEV(b,{lines:r,duration:t,easing:l,children:"Длинный текст, который можно свернуть и развернуть. ".repeat(14)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:257,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:247,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx",lineNumber:246,columnNumber:5},void 0)};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,v,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(v=d.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const W=["Default","Playground"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Playground:d,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{G as E};
