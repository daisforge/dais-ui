import{r as c,j as e}from"./react-CAOzMBF_.js";import{bF as S,ct as j,cu as I,cg as p,ch as y,c7 as b}from"./vendor-Dh4d6dCz.js";import{a as v}from"./TextField-DU1R_gtM.js";import{G as D}from"./styles-COjB_x8Z.js";import{u as _}from"./utils-I85SwEfQ.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./sharedUtilsInputs-C3919g4u.js";import"./constants-ChwOYBdp.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./mixins-Ua4vegUS.js";import"./@salutejs/plasma-typo-CX7sK2fp.js";import"./sharedUtilsDebug-BX_KjCjW.js";const u=({children:s})=>e.jsx(I,{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},children:s}),w=c.memo(({icons:s})=>e.jsx(u,{children:s.map(n=>{const i=n[1];return e.jsx(j,{name:n[0],children:e.jsx(i,{})},n[0])})})),C=()=>{const[s,n]=c.useState([]);c.useEffect(()=>{S(()=>import("./IconButton-BY5jSHYi.js").then(r=>r.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(r=>{const t=Object.entries(r)??[],o=t==null?void 0:t.filter(l=>!["IconOldRoot","IconRoot","Icon","iconSectionsSet","iconOldSectionsSet","iconSectionsSetScalable"].includes(l[0])&&typeof l[1]=="function");n(o)})},[]);const[i,f]=c.useState(""),a=_(i,1200),g=c.useMemo(()=>{if(!a)return s;const r=a.toLowerCase();return s.filter(([t])=>t.toLowerCase().includes(r))},[s,a]);return s?e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx("h2",{children:"Пример использования основных свойств"}),e.jsx(u,{children:s.length>5&&[s[1],s[2],s[3]].map((r,t)=>{var m,h;const o=r,l=o[1],d=[{size:"xs",color:"red"},{size:"s",color:"green"},{size:"m",color:"blue"}];return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{children:`size="${(m=d[t])==null?void 0:m.size}"`}),e.jsx("div",{children:`color="${(h=d[t])==null?void 0:h.color}"`})]}),e.jsx(j,{name:o[0],children:e.jsx(l,{...d[t]})},o[0])]},o[0])})}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs("h2",{style:{display:"flex",gap:16,justifyContent:"space-between",alignItems:"center",textWrap:"nowrap",paddingBlock:12},children:["Все иконки",e.jsx(v,{style:{width:"100%"},value:i,onChange:r=>{f(r.target.value??"")}})]})}),e.jsx(w,{icons:g})]}):e.jsx("h3",{children:"Загрузка иконок..."})};function x(s){const n={a:"a",code:"code",h3:"h3",hr:"hr",pre:"pre",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{parameters:{layout:"centered"},title:"Images/Icons"}),`
`,e.jsx(b,{children:"Icons"}),`
`,e.jsxs(n.h3,{id:"более-удобный-поиск-иконки-в-документации-sdds-ссылка-на-документацию",children:["Более удобный поиск иконки в документации SDDS ",e.jsx(n.a,{href:"https://plasma.sberdevices.ru/icons/",rel:"nofollow",children:"(ссылка на документацию)"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { NeededIcon } from '@daisforge/ui/icons';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<NeededIcon size="s" color="inherit" />
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"пропсы",children:"Пропсы"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type Props = {
  // размер иконки
  size?: 'xs' | 's' | 'm',
  // цвет иконки
  color?: string,
  // css класс
  className?: string,
};
`})}),`
`,e.jsx(C,{})]})}function W(s={}){const{wrapper:n}={...p(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}export{W as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/IconButton-BY5jSHYi.js","assets/@salutejs/plasma-icons-CkR551sF.js","assets/react-CAOzMBF_.js","assets/styled-components-BD-2WP2k.js","assets/react-is-vVGXX3JE.js","assets/vendor-Dh4d6dCz.js","assets/@tanstack/react-virtual-4Nv0GpZT.js","assets/tslib-DoU9Jm1N.js","assets/vendor-CwzC1fIw.css","assets/@salutejs/sdds-finai-Yd8FRL4L.js","assets/@sddsjs/sdds_finai-Clnx3I02.js","assets/@sddsjs/sdds_finai-BtiYKlh-.css","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/utils-I85SwEfQ.js","assets/constants-ChwOYBdp.js","assets/sharedUtilsDebug-BX_KjCjW.js","assets/Box-V-E_7_e1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
