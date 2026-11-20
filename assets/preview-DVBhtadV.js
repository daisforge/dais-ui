import{d4 as E}from"./vendor-Dy04e7eT.js";import"./react-DYHuXpTF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";const{useMemo:f,useEffect:v}=__STORYBOOK_MODULE_PREVIEW_API__,{global:M}=__STORYBOOK_MODULE_GLOBAL__,{logger:h}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",{document:l,window:B}=M,x=()=>B.matchMedia("(prefers-reduced-motion: reduce)").matches,O=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(d=>d.value===r))return r;let t=e.find(d=>d.name===a);if(t)return t.value;if(a){let d=e.map(o=>o.name).join(", ");h.warn(E`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${d}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(S)},S=r=>{var a;let e=l.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=l.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let t=l.createElement("style");t.setAttribute("id",r),t.innerHTML=e,l.head.appendChild(t)}},A=(r,e,a)=>{var d;let t=l.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let o=l.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,n=l.getElementById(i);n?(d=n.parentElement)==null||d.insertBefore(o,n):l.head.appendChild(o)}},L=(r,e)=>{var c;let{globals:a,parameters:t}=e,d=(c=a[g])==null?void 0:c.value,o=t[g],i=f(()=>o.disable?"transparent":O(d,o.values,o.default),[o,d]),n=f(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>`
      ${s} {
        background: ${i} !important;
        ${x()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return v(()=>{let p=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!n){k(p);return}A(p,u,e.viewMode==="docs"?e.id:null)},[n,u,e]),r()},T=(r,e)=>{var y;let{globals:a,parameters:t}=e,d=t[g].grid,o=((y=a[g])==null?void 0:y.grid)===!0&&d.disable!==!0,{cellAmount:i,cellSize:n,opacity:s}=d,u=e.viewMode==="docs",c=t.layout===void 0||t.layout==="padded"?16:0,p=d.offsetX??(u?20:c),m=d.offsetY??(u?20:c),$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${n*i}px ${n*i}px`,`${n*i}px ${n*i}px`,`${n}px ${n}px`,`${n}px ${n}px`].join(", ");return`
      ${b} {
        background-size: ${_} !important;
        background-position: ${p}px ${m}px, ${p}px ${m}px, ${p}px ${m}px, ${p}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[n]);return v(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){k(b);return}w(b,$)},[o,$,e]),r()},K=[T,L],P={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},F={[g]:null};export{K as decorators,F as globals,P as parameters};
