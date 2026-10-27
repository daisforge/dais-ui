import{r as c,j as e}from"./react-CAOzMBF_.js";import{bE as S,cs as p,ct as I,cf as j,cg as y,c6 as b}from"./vendor-DmWczWMC.js";import{a as v}from"./TextField-DpKf-85P.js";import{G as D}from"./styles-CvjizABK.js";import{u as _}from"./utils-EIxGvR70.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./sharedUtilsInputs-Cj-LRbcu.js";import"./constants-DatVHdkd.js";import"./@salutejs/sdds-finai-CKhMjg07.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./mixins-BSrWhZL1.js";import"./@salutejs/plasma-typo-D-UgegI7.js";import"./EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme-uTSVIbRM.js";import"./@salutejs-ds/sdds_finai_high_contrast-DoAS7YWi.js";import"./@salutejs-ds/sdds_finai_beta_core-CRX1TY7Q.js";import"./sharedUtilsDebug-BX_KjCjW.js";const u=({children:n})=>e.jsx(I,{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},children:n}),w=c.memo(({icons:n})=>e.jsx(u,{children:n.map(s=>{const i=s[1];return e.jsx(p,{name:s[0],children:e.jsx(i,{})},s[0])})})),C=()=>{const[n,s]=c.useState([]);c.useEffect(()=>{S(()=>import("./IconButton-ZoRfzXaJ.js").then(r=>r.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(r=>{const t=Object.entries(r)??[],o=t==null?void 0:t.filter(l=>!["IconOldRoot","IconRoot","Icon","iconSectionsSet","iconOldSectionsSet","iconSectionsSetScalable"].includes(l[0])&&typeof l[1]=="function");s(o)})},[]);const[i,f]=c.useState(""),a=_(i,1200),g=c.useMemo(()=>{if(!a)return n;const r=a.toLowerCase();return n.filter(([t])=>t.toLowerCase().includes(r))},[n,a]);return n?e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx("h2",{children:"Пример использования основных свойств"}),e.jsx(u,{children:n.length>5&&[n[1],n[2],n[3]].map((r,t)=>{var m,h;const o=r,l=o[1],d=[{size:"xs",color:"red"},{size:"s",color:"green"},{size:"m",color:"blue"}];return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{children:`size="${(m=d[t])==null?void 0:m.size}"`}),e.jsx("div",{children:`color="${(h=d[t])==null?void 0:h.color}"`})]}),e.jsx(p,{name:o[0],children:e.jsx(l,{...d[t]})},o[0])]},o[0])})}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs("h2",{style:{display:"flex",gap:16,justifyContent:"space-between",alignItems:"center",textWrap:"nowrap",paddingBlock:12},children:["Все иконки",e.jsx(v,{style:{width:"100%"},value:i,onChange:r=>{f(r.target.value??"")}})]})}),e.jsx(w,{icons:g})]}):e.jsx("h3",{children:"Загрузка иконок..."})};function x(n){const s={a:"a",code:"code",h3:"h3",hr:"hr",pre:"pre",...j(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{parameters:{layout:"centered"},title:"Images/Icons"}),`
`,e.jsx(b,{children:"Icons"}),`
`,e.jsxs(s.h3,{id:"более-удобный-поиск-иконки-в-документации-sdds-ссылка-на-документацию",children:["Более удобный поиск иконки в документации SDDS ",e.jsx(s.a,{href:"https://plasma.sberdevices.ru/icons/",rel:"nofollow",children:"(ссылка на документацию)"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h3,{id:"использование",children:"Использование"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { NeededIcon } from '@daisforge/ui/icons';
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<NeededIcon size="s" color="inherit" />
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h3,{id:"пропсы",children:"Пропсы"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`type Props = {
  // размер иконки
  size?: 'xs' | 's' | 'm',
  // цвет иконки
  color?: string,
  // css класс
  className?: string,
};
`})}),`
`,e.jsx(C,{})]})}function J(n={}){const{wrapper:s}={...j(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(x,{...n})}):x(n)}export{J as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/IconButton-ZoRfzXaJ.js","assets/@salutejs/plasma-icons-Do5ggeDI.js","assets/react-CAOzMBF_.js","assets/styled-components-DCFsnh-i.js","assets/react-is-vVGXX3JE.js","assets/vendor-DmWczWMC.js","assets/@tanstack/react-virtual-vLM_tzFQ.js","assets/tslib-DoU9Jm1N.js","assets/vendor-CwzC1fIw.css","assets/@salutejs/sdds-finai-CKhMjg07.js","assets/@salutejs/sdds-themes-DPwMcFh9.js","assets/@salutejs/sdds-themes-DEM7LVTo.css","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/utils-EIxGvR70.js","assets/constants-DatVHdkd.js","assets/sharedUtilsDebug-BX_KjCjW.js","assets/Box-DvvYTz20.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
