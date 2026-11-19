import{cb as E}from"./vendor-BjyhLeYF.js";import"./react-B60MRyL7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";const{useMemo:f,useEffect:v}=__STORYBOOK_MODULE_PREVIEW_API__,{global:M}=__STORYBOOK_MODULE_GLOBAL__,{logger:h}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",{document:l,window:B}=M,x=()=>B.matchMedia("(prefers-reduced-motion: reduce)").matches,O=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let t=e.find(n=>n.name===a);if(t)return t.value;if(a){let n=e.map(d=>d.name).join(", ");h.warn(E`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(S)},S=r=>{var a;let e=l.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=l.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let t=l.createElement("style");t.setAttribute("id",r),t.innerHTML=e,l.head.appendChild(t)}},A=(r,e,a)=>{var n;let t=l.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let d=l.createElement("style");d.setAttribute("id",r),d.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,o=l.getElementById(i);o?(n=o.parentElement)==null||n.insertBefore(d,o):l.head.appendChild(d)}},L=(r,e)=>{var c;let{globals:a,parameters:t}=e,n=(c=a[g])==null?void 0:c.value,d=t[g],i=f(()=>d.disable?"transparent":O(n,d.values,d.default),[d,n]),o=f(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>`
      ${s} {
        background: ${i} !important;
        ${x()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return v(()=>{let p=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){k(p);return}A(p,u,e.viewMode==="docs"?e.id:null)},[o,u,e]),r()},T=(r,e)=>{var y;let{globals:a,parameters:t}=e,n=t[g].grid,d=((y=a[g])==null?void 0:y.grid)===!0&&n.disable!==!0,{cellAmount:i,cellSize:o,opacity:s}=n,u=e.viewMode==="docs",c=t.layout===void 0||t.layout==="padded"?16:0,p=n.offsetX??(u?20:c),m=n.offsetY??(u?20:c),$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${o*i}px ${o*i}px`,`${o*i}px ${o*i}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${b} {
        background-size: ${_} !important;
        background-position: ${p}px ${m}px, ${p}px ${m}px, ${p}px ${m}px, ${p}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return v(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!d){k(b);return}w(b,$)},[d,$,e]),r()},K=[T,L],P={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},F={[g]:null};export{K as decorators,F as globals,P as parameters};
