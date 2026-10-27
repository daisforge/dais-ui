import{r as i,j as v}from"./react-CAOzMBF_.js";import{F as A,C as T,U as C}from"./styled-components-DCFsnh-i.js";import{b as S,v as L}from"./constants-DatVHdkd.js";import"./vendor-DmWczWMC.js";import{c as R}from"./sharedUtilsDebug-BX_KjCjW.js";const b="xl",g=S,$=i.createContext({breakpoint:b,breakpointConfig:g}),f=e=>t=>`
    @media ${e} {
      ${t}
    }
  `,k=e=>({xs:{min:0,max:e.xs-1},s:{min:e.xs+1,max:e.s},m:{min:e.s+1,max:e.m},l:{min:e.m+1,max:e.l},xl:{min:e.l+1,max:e.xl},xxl:{min:e.xl+1,max:1e5}}),I=e=>{const t=k(e);return{up:n=>f(`(min-width: ${t[n].max+1}px)`),down:n=>f(`(max-width: ${t[n].min-1}px)`),only:n=>f(`(min-width: ${t[n].min}px) and (max-width: ${t[n].max}px)`),not:n=>f(`(max-width: ${t[n].min-1}px), (min-width: ${t[n].max+1}px)`),between:(n,o)=>f(`(min-width: ${t[n].min}px) and (max-width: ${t[o].max}px)`),exact:(n,o)=>f(`(min-width: ${n}px) and (max-width: ${o}px)`)}},Q=I(g),y=({breakpointConfig:e=g,children:t})=>v.jsx(A,{theme:{media:I(e)},children:t});try{y.displayName="MediaProvider",y.__docgenInfo={description:"",displayName:"MediaProvider",props:{breakpointConfig:{defaultValue:null,description:"",name:"breakpointConfig",required:!1,type:{name:"BreakpointConfig"}}}}}catch{}const G=({children:e,breakpointConfig:t=g})=>{const[n,o]=i.useState(b);i.useEffect(()=>{const s=Object.entries(t).map(([a,l])=>({key:a,mql:window.matchMedia(`(max-width: ${l}px)`)})),c=()=>{var l;const a=((l=s.find(({mql:u})=>u.matches))==null?void 0:l.key)||b;o(a)};return c(),s.forEach(({mql:a})=>{a.addEventListener("change",c)}),()=>{s.forEach(({mql:a})=>{a.removeEventListener("change",c)})}},[]);const r=i.useMemo(()=>({breakpoint:n,breakpointConfig:t}),[n,t]);return v.jsx($.Provider,{value:r,children:v.jsx(y,{breakpointConfig:t,children:e})})},J=()=>{const{breakpoint:e,breakpointConfig:t}=i.useContext($),n=i.useMemo(()=>({up:o=>t[e]>t[o],down:o=>t[e]<t[o],only:o=>t[e]===t[o],not:o=>t[e]!==t[o],between:(o,r)=>t[e]>t[o]&&t[e]<t[r]}),[e,t]);return{breakpoint:e,...n}};function X(e,t,n,o={}){const r={bubbles:!0,cancelable:!0,composed:!0,...o,detail:n},s=new CustomEvent(t,r);return e.dispatchEvent(s)}const F=typeof requestAnimationFrame=="function",O=typeof cancelAnimationFrame=="function",_=e=>F?requestAnimationFrame(e):setTimeout(e,0),D=e=>{O?cancelAnimationFrame(e):clearTimeout(e)},B=e=>{let t=null;return new ResizeObserver((n,o)=>{t!==null&&D(t),t=_(()=>{t=null,e(n,o)})})},Z=(e,t=200)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>{e(...o)},t)}},P=(e,t,n="")=>{const o=[],r=new Map;return e.forEach((s,c)=>{const a=`${n}-${c}`,l=s.value||a,u={...s,value:l};if(t&&r.set(l.toString(),t),s.items){const[d,h]=P(s.items,t,a);h.forEach((p,x)=>r.set(x,p)),u.items=d}o.push(u)}),[o,r]},ee=e=>i.useCallback((t,n)=>{const o=e.get(t.value);o==null||o(t,n)},[e]),N=["light","dark","highContrastLight","highContrastDark","betaCoreLight","betaCoreDark"],w=()=>{const e=document.documentElement.getAttribute("data-theme");return N.find(t=>t===e)??"light"},te=e=>e?T`
        && {
          ${e}
        }
      `:void 0;function j(e,t,n=0){const o=document.createElement("span");o.style.cssText=`
    font: ${t};
    visibility: hidden;
    position: absolute;
    white-space: pre;
    padding: 0;
    margin: 0;
    letter-spacing: ${n}px;
  `,o.textContent=e,document.body.appendChild(o);const r=o.offsetWidth;return document.body.removeChild(o),r}function ne(e,t,n=0){return e?j(e,t,n):0}const oe=(e,t)=>{const n=t.split(".");let o=e;for(const r of n)if(typeof o=="object"&&o!==null&&r in o)o=o[r];else return;return o},re=e=>L[e],se=()=>{const[e,t]=i.useState(()=>w()??"light");return i.useEffect(()=>{t(w());const n=new MutationObserver(()=>t(w()));return n.observe(document.documentElement,{childList:!1,attributes:!0,attributeFilter:["data-theme"],subtree:!1}),()=>{var o;return(o=n==null?void 0:n.disconnect)==null?void 0:o.call(n)}},[]),e},ae=(e,t=500,n)=>{const[o,r]=i.useState(n??e);return i.useEffect(()=>{const s=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(s)}},[e]),o},m=new Map,ie=e=>!e||m.get(e)==="loaded"?Promise.resolve():new Promise(t=>{const n=new Image;n.onload=()=>{m.set(e,"loaded"),t()},n.onerror=()=>{m.set(e,"error"),t()},n.src=e}),ce=(e,t=0)=>{const[n,o]=i.useState(()=>e?m.get(e)??"loading":"idle"),[r,s]=i.useState(0),c=i.useRef(e);c.current=e;const a=i.useCallback(()=>{e&&m.delete(e),s(l=>l+1)},[e]);return i.useEffect(()=>{if(!e){o("idle");return}const l=m.get(e);if(l){o(l);return}let u=!0,d;o("loading");const h=x=>{m.set(e,x);const E=()=>{u&&c.current===e&&o(x)};t>0?d=setTimeout(E,t):E()},p=new Image;return p.onload=()=>h("loaded"),p.onerror=()=>h("error"),p.src=e,()=>{u=!1,d&&clearTimeout(d)}},[e,r,t]),{status:n,isLoading:n==="loading",isLoaded:n==="loaded",isError:n==="error",reload:a}},le=typeof window<"u"&&"structuredClone"in window&&typeof window.structuredClone=="function"||typeof globalThis<"u"&&"structuredClone"in globalThis&&typeof globalThis.structuredClone=="function";function M(...e){return e.reduce((t,n)=>(!n||typeof n!="string"||(t=`${t} ${n}`),t),"")}const ue=M;function de(...e){const t=e.filter(Boolean);return t.length<=1?t[0]||null:function(o){for(const r of t)typeof r=="function"?r(o):r&&(r.current=o)}}const me=(e,t,n)=>t>n?n:t<e?e:t,fe=e=>e!=null&&e.lines&&e.lines>1?{display:"-webkit-box",WebkitLineClamp:e.lines,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"}:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},pe=T`
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`,he=(e,t=200)=>{let n=null,o=null,r=!1;const s=(...c)=>{n=c,r||(e(...c),r=!0,o=setTimeout(()=>{r=!1,n!==c&&s(...n),o=null},t))};return s.cancel=()=>{o&&(clearTimeout(o),r=!1,o=null)},s},W="0.3s",xe=`all ${W} ease`,z=C`
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,U=C`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.85); opacity: 0; }
`;T`
  animation: ${({$isOpen:e})=>e?z:U}
    ${({$duration:e="2.35s"})=>e}
    ${({$timing:e="ease"})=>e} forwards;
`;const ge=C`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,we=(e,t="vertical",n=!0)=>{const[o,r]=i.useState({vertical:!1,horizontal:!1});switch(i.useEffect(()=>{const s=e.current;if(!s)return;const c=()=>{if(!s)return;const l=s.scrollHeight>s.clientHeight,u=s.scrollWidth>s.clientWidth;r(d=>d.vertical!==l||d.horizontal!==u?{vertical:l,horizontal:u}:d)};c();let a;return n&&typeof ResizeObserver<"u"&&(a=B(c),a.observe(s)),()=>{a==null||a.disconnect()}},[e,n]),t){case"vertical":return o.vertical;case"horizontal":return o.horizontal;case"both":return o;default:return o.vertical}},ve=R("TABLE");export{ce as A,G as B,xe as D,fe as a,Q as b,B as c,Z as d,w as e,ue as f,te as g,J as h,we as i,oe as j,ee as k,ne as l,M as m,le as n,ge as o,P as p,se as q,X as r,de as s,he as t,ae as u,pe as v,ve as w,me as x,re as y,ie as z};
