import{C as s,U as v}from"./styled-components-CD4KFY2h.js";import{e as w,b as T}from"./utils-BopI5f_-.js";import{cp as _,cq as S,cr as G,V as y,cs as R}from"./@salutejs/sdds-themes-DL6tmVfr.js";const A="linear-gradient(to top, rgb(19, 24, 27) 0%, rgba(19, 24, 27, 0) 100%)",E="linear-gradient(to top, rgb(6, 10, 12) 0%, rgba(6, 10, 12, 0) 100%)",g="linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",h="linear-gradient(to top, rgb(242, 245, 248) 0%, rgba(242, 245, 248, 0) 100%)",$="scroll-gradient",x=`--${$}-timeline`,f=`${$}-animation`,p=100,u=60,m="--block-gradient-left",k="--block-gradient-right",O="--block-gradient-bottom",I={light:{white:g,gray:h},dark:{white:A,gray:E},highContrastLight:{white:g,gray:h}},D=r=>{const o=w();return I[{light:"light",dark:"dark",highContrastLight:"highContrastLight",highContrastDark:"dark",betaCoreLight:"light",betaCoreDark:"dark"}[o]][r]},L=r=>{if(r===void 0)return{top:0,left:0,right:0,bottom:0};if(typeof r=="number")return{top:r,left:r,right:r,bottom:r};const{top:o,left:t,right:e,bottom:a,inline:i}=r;return{top:o??0,left:t??i??0,right:e??i??0,bottom:a??0}},B=r=>{const{left:o,right:t,bottom:e,top:a}=L(r);return s`
    scroll-timeline: ${x} block;
    padding-top: ${a}px;
    padding-right: ${t}px;
    padding-bottom: ${e}px;
    padding-left: ${o}px;
  `},N=(r,o)=>{const{left:t,right:e,bottom:a}=L(r),i=D(o);return s`
    content: '';
    display: block;
    position: sticky;
    bottom: 0;
    height: ${p}px;
    pointer-events: none;
    background: ${()=>i};
    margin-top: -${p}px;
    opacity: 0;
    animation: ${f} linear both;
    animation-timeline: ${x};

    margin-left: calc(0px - var(${m}, ${t}px));
    margin-right: calc(0px - var(${k}, ${e}px));
    transform: translateY(var(${O}, ${a}px));
    width: calc(
      100% + var(${m}, ${t}px) +
        var(${k}, ${e}px)
    );
    will-change: transform;

    ${T.exact(0,1279)(`
      height: ${u}px;
      margin-top: -${u}px;
    `)}
  `},H=s`
  @keyframes ${f} {
    0%,
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`,q=r=>{const{variant:o="white",padding:t}=r;return s`
    ${B(t)}

    &::after {
      ${N(t,o)}
    }

    ${H}
  `},c={width:"10px",height:"10px",borderRadius:`calc(${_}/1)`,isThin:!0,theme:"light"},K=({thumbColor:r,thumbColorHover:o,trackColor:t,trackColorHover:e,theme:a=c.theme})=>{const i=r??(a==="light"?y:R),n=t??"transparent";return{thumb:i,thumbHover:o??(a==="light"?S:G),track:n,trackHover:e??n}},M=({width:r=c.width,height:o=c.height,borderRadius:t=c.borderRadius,isThin:e=c.isThin,thumb:a,thumbHover:i,track:n,trackHover:l})=>s`
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
`,X=({width:r,height:o,borderRadius:t,isThin:e,thumbColor:a,thumbColorHover:i,trackColor:n,trackColorHover:l,theme:b}={})=>{const d=K({thumbColor:a,thumbColorHover:i,trackColor:n,trackColorHover:l,theme:b});return M({width:r,height:o,borderRadius:t,isThin:e,...d})},P=v`
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
`,V=({duration:r,timingFunction:o,iterationCount:t})=>s`
  animation-name: ${P};
  animation-duration: ${r};
  animation-timing-function: ${o};
  animation-iteration-count: ${t};
`,Y=({backgroundColor:r="transparent",borderColor:o="var(--on-light-outline-accent-minor, rgb(82, 186, 255))",borderColorFade:t="rgba(82, 186, 255, 0.42)",shadowColor:e="rgba(82, 186, 255, 0.24)",shadowColorFade:a="rgba(82, 186, 255, 0)",inset:i="-4px",borderRadius:n="16px",duration:l="1.4s",timingFunction:b="ease-in-out",iterationCount:d="infinite",pointerEventsNone:C=!0}={})=>s`
    ${s({"--tour-pulse-border-color":o,"--tour-pulse-border-color-fade":t,"--tour-pulse-shadow-color":e,"--tour-pulse-shadow-color-fade":a,inset:i,borderRadius:n,background:r,...C?{pointerEvents:"none"}:{}})}
    ${V({duration:l,timingFunction:b,iterationCount:d})}
  `;export{m as B,k as a,O as b,q as c,X as g,Y as t};
