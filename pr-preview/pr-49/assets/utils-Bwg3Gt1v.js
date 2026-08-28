import{r as a,d as b}from"./react-D2T61mpp.js";import{F as I,C,U as T}from"./styled-components-DEDUmVg1.js";import{b as A,v as L}from"./constants-BudGGuoE.js";import{c as S}from"./sharedUtilsDebug-BX_KjCjW.js";const v="xl",g=A,k=a.createContext({breakpoint:v,breakpointConfig:g}),f=e=>t=>`
    @media ${e} {
      ${t}
    }
  `,N=e=>({xs:{min:0,max:e.xs-1},s:{min:e.xs+1,max:e.s},m:{min:e.s+1,max:e.m},l:{min:e.m+1,max:e.l},xl:{min:e.l+1,max:e.xl},xxl:{min:e.xl+1,max:1e5}}),$=e=>{const t=N(e);return{up:n=>f(`(min-width: ${t[n].max+1}px)`),down:n=>f(`(max-width: ${t[n].min-1}px)`),only:n=>f(`(min-width: ${t[n].min}px) and (max-width: ${t[n].max}px)`),not:n=>f(`(max-width: ${t[n].min-1}px), (min-width: ${t[n].max+1}px)`),between:(n,o)=>f(`(min-width: ${t[n].min}px) and (max-width: ${t[o].max}px)`),exact:(n,o)=>f(`(min-width: ${n}px) and (max-width: ${o}px)`)}},Y=$(g),y=({breakpointConfig:e=g,children:t})=>b.jsxDEV(I,{theme:{media:$(e)},children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/utils/breakpoint/MediaProvider.tsx",lineNumber:12,columnNumber:3},void 0);try{y.displayName="MediaProvider",y.__docgenInfo={description:"",displayName:"MediaProvider",props:{breakpointConfig:{defaultValue:null,description:"",name:"breakpointConfig",required:!1,type:{name:"BreakpointConfig"}}}}}catch{}const K=({children:e,breakpointConfig:t=g})=>{const[n,o]=a.useState(v);a.useEffect(()=>{const i=Object.entries(t).map(([s,l])=>({key:s,mql:window.matchMedia(`(max-width: ${l}px)`)})),c=()=>{var l;const s=((l=i.find(({mql:u})=>u.matches))==null?void 0:l.key)||v;o(s)};return c(),i.forEach(({mql:s})=>{s.addEventListener("change",c)}),()=>{i.forEach(({mql:s})=>{s.removeEventListener("change",c)})}},[]);const r=a.useMemo(()=>({breakpoint:n,breakpointConfig:t}),[n,t]);return b.jsxDEV(k.Provider,{value:r,children:b.jsxDEV(y,{breakpointConfig:t,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/utils/breakpoint/BreakpointProvider.tsx",lineNumber:51,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/utils/breakpoint/BreakpointProvider.tsx",lineNumber:50,columnNumber:5},void 0)},Q=()=>{const{breakpoint:e,breakpointConfig:t}=a.useContext(k),n=a.useMemo(()=>({up:o=>t[e]>t[o],down:o=>t[e]<t[o],only:o=>t[e]===t[o],not:o=>t[e]!==t[o],between:(o,r)=>t[e]>t[o]&&t[e]<t[r]}),[e,t]);return{breakpoint:e,...n}};function G(e,t,n,o={}){const r={bubbles:!0,cancelable:!0,composed:!0,...o,detail:n},i=new CustomEvent(t,r);return e.dispatchEvent(i)}const R=typeof requestAnimationFrame=="function",D=typeof cancelAnimationFrame=="function",B=e=>R?requestAnimationFrame(e):setTimeout(e,0),F=e=>{D?cancelAnimationFrame(e):clearTimeout(e)},P=e=>{let t=null;return new ResizeObserver((n,o)=>{t!==null&&F(t),t=B(()=>{t=null,e(n,o)})})},J=(e,t=200)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>{e(...o)},t)}},O=(e,t,n="")=>{const o=[],r=new Map;return e.forEach((i,c)=>{const s=`${n}-${c}`,l=i.value||s,u={...i,value:l};if(t&&r.set(l.toString(),t),i.items){const[d,h]=O(i.items,t,s);h.forEach((p,x)=>r.set(x,p)),u.items=d}o.push(u)}),[o,r]},X=e=>a.useCallback((t,n)=>{const o=e.get(t.value);o==null||o(t,n)},[e]),w=()=>{const e=document.documentElement.getAttribute("data-theme");return e==="dark"?"dark":e==="highContrastLight"?"highContrastLight":e==="betaCoreLight"?"betaCoreLight":"light"},Z=e=>e?C`
        && {
          ${e}
        }
      `:void 0;function _(e,t,n=0){const o=document.createElement("span");o.style.cssText=`
    font: ${t};
    visibility: hidden;
    position: absolute;
    white-space: pre;
    padding: 0;
    margin: 0;
    letter-spacing: ${n}px;
  `,o.textContent=e,document.body.appendChild(o);const r=o.offsetWidth;return document.body.removeChild(o),r}function ee(e,t,n=0){return e?_(e,t,n):0}const te=(e,t)=>{const n=t.split(".");let o=e;for(const r of n)if(typeof o=="object"&&o!==null&&r in o)o=o[r];else return;return o},ne=e=>L[e],oe=()=>{const[e,t]=a.useState(()=>w()??"light");return a.useEffect(()=>{t(w());const n=new MutationObserver(()=>t(w()));return n.observe(document.documentElement,{childList:!1,attributes:!0,attributeFilter:["data-theme"],subtree:!1}),()=>{var o;return(o=n==null?void 0:n.disconnect)==null?void 0:o.call(n)}},[]),e},re=(e,t=500,n)=>{const[o,r]=a.useState(n??e);return a.useEffect(()=>{const i=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(i)}},[e]),o},m=new Map,ie=e=>!e||m.get(e)==="loaded"?Promise.resolve():new Promise(t=>{const n=new Image;n.onload=()=>{m.set(e,"loaded"),t()},n.onerror=()=>{m.set(e,"error"),t()},n.src=e}),se=(e,t=0)=>{const[n,o]=a.useState(()=>e?m.get(e)??"loading":"idle"),[r,i]=a.useState(0),c=a.useRef(e);c.current=e;const s=a.useCallback(()=>{e&&m.delete(e),i(l=>l+1)},[e]);return a.useEffect(()=>{if(!e){o("idle");return}const l=m.get(e);if(l){o(l);return}let u=!0,d;o("loading");const h=x=>{m.set(e,x);const E=()=>{u&&c.current===e&&o(x)};t>0?d=setTimeout(E,t):E()},p=new Image;return p.onload=()=>h("loaded"),p.onerror=()=>h("error"),p.src=e,()=>{u=!1,d&&clearTimeout(d)}},[e,r,t]),{status:n,isLoading:n==="loading",isLoaded:n==="loaded",isError:n==="error",reload:s}},ae=typeof window<"u"&&"structuredClone"in window&&typeof window.structuredClone=="function"||typeof globalThis<"u"&&"structuredClone"in globalThis&&typeof globalThis.structuredClone=="function";function M(...e){return e.reduce((t,n)=>(!n||typeof n!="string"||(t=`${t} ${n}`),t),"")}const ce=M;function le(...e){const t=e.filter(Boolean);return t.length<=1?t[0]||null:function(o){for(const r of t)typeof r=="function"?r(o):r&&(r.current=o)}}const ue=(e,t,n)=>t>n?n:t<e?e:t,de=e=>e!=null&&e.lines&&e.lines>1?{display:"-webkit-box",WebkitLineClamp:e.lines,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"}:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},me=C`
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`,fe=(e,t=200)=>{let n=null,o=null,r=!1;const i=(...c)=>{n=c,r||(e(...c),r=!0,o=setTimeout(()=>{r=!1,n!==c&&i(...n),o=null},t))};return i.cancel=()=>{o&&(clearTimeout(o),r=!1,o=null)},i},V="0.3s",pe=`all ${V} ease`,j=T`
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,z=T`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.85); opacity: 0; }
`;C`
  animation: ${({$isOpen:e})=>e?j:z}
    ${({$duration:e="2.35s"})=>e}
    ${({$timing:e="ease"})=>e} forwards;
`;const he=T`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,xe=(e,t="vertical",n=!0)=>{const[o,r]=a.useState({vertical:!1,horizontal:!1});switch(a.useEffect(()=>{const i=e.current;if(!i)return;const c=()=>{if(!i)return;const l=i.scrollHeight>i.clientHeight,u=i.scrollWidth>i.clientWidth;r(d=>d.vertical!==l||d.horizontal!==u?{vertical:l,horizontal:u}:d)};c();let s;return n&&typeof ResizeObserver<"u"&&(s=P(c),s.observe(i)),()=>{s==null||s.disconnect()}},[e,n]),t){case"vertical":return o.vertical;case"horizontal":return o.horizontal;case"both":return o;default:return o.vertical}},ge=S("TABLE");export{ge as A,K as B,pe as D,Y as a,w as b,P as c,ce as d,de as e,Q as f,Z as g,xe as h,te as i,X as j,ee as k,ae as l,M as m,he as n,oe as o,O as p,G as q,le as r,ue as s,fe as t,re as u,me as v,ne as w,J as x,ie as y,se as z};
