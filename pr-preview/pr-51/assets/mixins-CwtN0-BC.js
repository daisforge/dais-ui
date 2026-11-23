import{A as s,W as w}from"./styled-components-CDfPITHT.js";import{b as S,a as G}from"./utils-Booj3GAg.js";import{ck as y,cl as A}from"./vendor-DKFmtNka.js";import{o as R,cT as O,cU as E,cV as D,cW as I}from"./@sddsjs/sdds_finai-CqI1dsZV.js";const B="linear-gradient(to top, rgb(19, 24, 27) 0%, rgba(19, 24, 27, 0) 100%)",N="linear-gradient(to top, rgb(6, 10, 12) 0%, rgba(6, 10, 12, 0) 100%)",h="linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",m="linear-gradient(to top, rgb(242, 245, 248) 0%, rgba(242, 245, 248, 0) 100%)",u="scroll-gradient",x=`--${u}-timeline`,f=`${u}-animation`,k=100,$=60,K="--block-gradient-top",g="--block-gradient-left",p="--block-gradient-right",_="--block-gradient-bottom",H={light:{white:h,gray:m},dark:{white:B,gray:N},highContrastLight:{white:h,gray:m}},M=r=>{const o=S();return H[{light:"light",dark:"dark",highContrastLight:"highContrastLight",highContrastDark:"dark",betaCoreLight:"light",betaCoreDark:"dark"}[o]][r]},L=r=>{if(r===void 0)return{top:0,left:0,right:0,bottom:0};if(typeof r=="number")return{top:r,left:r,right:r,bottom:r};const{top:o,left:t,right:e,bottom:a,inline:i}=r;return{top:o??0,left:t??i??0,right:e??i??0,bottom:a??0}},P=r=>{const{left:o,right:t,bottom:e,top:a}=L(r);return s`
    scroll-timeline: ${x} block;
    padding-top: ${a}px;
    padding-right: ${t}px;
    padding-bottom: ${e}px;
    padding-left: ${o}px;
  `},W=(r,o)=>{const{left:t,right:e,bottom:a}=L(r),i=M(o);return s`
    content: '';
    display: block;
    position: sticky;
    bottom: 0;
    height: ${k}px;
    pointer-events: none;
    background: ${()=>i};
    margin-top: -${k}px;
    opacity: 0;
    animation: ${f} linear both;
    animation-timeline: ${x};

    margin-left: calc(0px - var(${g}, ${t}px));
    margin-right: calc(0px - var(${p}, ${e}px));
    transform: translateY(var(${_}, ${a}px));
    width: calc(
      100% + var(${g}, ${t}px) +
        var(${p}, ${e}px)
    );
    will-change: transform;

    ${G.exact(0,1279)(`
      height: ${$}px;
      margin-top: -${$}px;
    `)}
  `},V=s`
  @keyframes ${f} {
    0%,
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`,F=r=>{const{variant:o="white",padding:t}=r;return s`
    ${P(t)}

    &::after {
      ${W(t,o)}
    }

    ${V}
  `},c={width:"10px",height:"10px",borderRadius:`calc(${R}/1)`,isThin:!0,theme:"light"},T=({thumbColor:r,thumbColorHover:o,trackColor:t,trackColorHover:e,theme:a=c.theme})=>{const i=r??(a==="light"?D:I),n=t??"transparent";return{thumb:i,thumbHover:o??(a==="light"?O:E),track:n,trackHover:e??n}},v=({width:r=c.width,height:o=c.height,borderRadius:t=c.borderRadius,isThin:e=c.isThin,thumb:a,thumbHover:i,track:n,trackHover:l})=>s`
  /* Только для Firefox */
  @supports (scrollbar-width: thin) and (not selector(::-webkit-scrollbar)) {
    scrollbar-width: ${e?"thin":"auto"};
    scrollbar-color: ${a} ${n};
  }

  /* Для WebKit (Chrome, Safari, Edge). &[class] усиливает специфичность */
  &[class]::-webkit-scrollbar,
  &::-webkit-scrollbar {
    width: ${r};
    height: ${o};
  }

  &[class]::-webkit-scrollbar-track,
  &::-webkit-scrollbar-track {
    background: ${()=>n};
    border-radius: ${t};
    margin-block: 6px;
  }

  &[class]::-webkit-scrollbar-track:hover,
  &::-webkit-scrollbar-track:hover {
    background: ${()=>l};
    border-radius: ${t};
    margin-block: 6px;
  }

  &[class]::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb {
    background: ${()=>a};
    transition: background 0.2s ease;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  &[class]::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:hover {
    transition: background 0.2s ease;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    background: ${()=>i};
    background-clip: padding-box;
  }
`,j=()=>{const r=T({});return v({...r})},U=({width:r,height:o,borderRadius:t,isThin:e,thumbColor:a,thumbColorHover:i,trackColor:n,trackColorHover:l,theme:b}={})=>{const d=T({thumbColor:a,thumbColorHover:i,trackColor:n,trackColorHover:l,theme:b});return v({width:r,height:o,borderRadius:t,isThin:e,...d})},z=w`
  0%,
  100% {
    box-shadow:
      0 0 0 2px var(--tour-pulse-border-color),
      0 0 0 6px var(--tour-pulse-shadow-color);
  }

  50% {
    box-shadow:
      0 0 0 3px var(--tour-pulse-border-color-fade),
      0 0 0 12px var(--tour-pulse-shadow-color-fade);
  }
`,Q=({duration:r,timingFunction:o,iterationCount:t})=>s`
  animation-name: ${z};
  animation-duration: ${r};
  animation-timing-function: ${o};
  animation-iteration-count: ${t};
`,X=({backgroundColor:r="transparent",borderColor:o="var(--on-light-outline-accent-minor, rgb(82, 186, 255))",borderColorFade:t="rgba(82, 186, 255, 0.42)",shadowColor:e="rgba(82, 186, 255, 0.24)",shadowColorFade:a="rgba(82, 186, 255, 0)",inset:i="-4px",borderRadius:n="16px",duration:l="1.4s",timingFunction:b="ease-in-out",iterationCount:d="infinite",pointerEventsNone:C=!0}={})=>s`
    ${s({"--tour-pulse-border-color":o,"--tour-pulse-border-color-fade":t,"--tour-pulse-shadow-color":e,"--tour-pulse-shadow-color-fade":a,inset:i,borderRadius:n,background:r,...C?{pointerEvents:"none"}:{}})}
    ${Q({duration:l,timingFunction:b,iterationCount:d})}
  `,rr=Object.freeze(Object.defineProperty({__proto__:null,BLOCK_GRADIENT_SCROLL_CLASSNAME:u,BLOCK_GRADIENT_VAR_BOTTOM:_,BLOCK_GRADIENT_VAR_LEFT:g,BLOCK_GRADIENT_VAR_RIGHT:p,BLOCK_GRADIENT_VAR_TOP:K,BlockGradientScrollMixin:F,addFocus:y,getCustomScrollbar:U,getDefaultScrollbar:j,mediaQuery:A,tourPulseMixin:X},Symbol.toStringTag,{value:"Module"}));export{g as B,p as a,_ as b,F as c,u as d,K as e,j as f,U as g,rr as m,X as t};
