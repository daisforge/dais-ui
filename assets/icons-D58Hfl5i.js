import{r as i,j as e}from"./react-DYHuXpTF.js";import{dd as x}from"./vendor-Dy04e7eT.js";import{I as j,d as S,M as I,T as y}from"./WithTooltip-KJL26V4Q-Dieti3TI.js";import{_ as b}from"./preload-helper-DeA7wft2.js";import{a as v}from"./TextField-B64q6SkT.js";import{G as _}from"./styles-C2B1zlNN.js";import{u as D}from"./utils-C324mS39.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./sharedUtilsInputs-D_r5tJpr.js";import"./constants-3UB8ZrMK.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./mixins-B-KtyBBW.js";import"./@salutejs/plasma-typo-skLLGk1-.js";import"./sharedUtilsDebug-BX_KjCjW.js";const u=({children:s})=>e.jsx(S,{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},children:s}),w=i.memo(({icons:s})=>e.jsx(u,{children:s.map(n=>{const c=n[1];return e.jsx(j,{name:n[0],children:e.jsx(c,{})},n[0])})})),C=()=>{const[s,n]=i.useState([]);i.useEffect(()=>{b(()=>import("./index-DnFXHMF6.js").then(r=>r.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(r=>{const t=Object.entries(r)??[],o=t==null?void 0:t.filter(l=>!["IconOldRoot","IconRoot","Icon","iconSectionsSet","iconOldSectionsSet","iconSectionsSetScalable"].includes(l[0])&&typeof l[1]=="function");n(o)})},[]);const[c,f]=i.useState(""),a=D(c,1200),g=i.useMemo(()=>{if(!a)return s;const r=a.toLowerCase();return s.filter(([t])=>t.toLowerCase().includes(r))},[s,a]);return s?e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx("h2",{children:"Пример использования основных свойств"}),e.jsx(u,{children:s.length>5&&[s[1],s[2],s[3]].map((r,t)=>{var m,h;const o=r,l=o[1],d=[{size:"xs",color:"red"},{size:"s",color:"green"},{size:"m",color:"blue"}];return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{children:`size="${(m=d[t])==null?void 0:m.size}"`}),e.jsx("div",{children:`color="${(h=d[t])==null?void 0:h.color}"`})]}),e.jsx(j,{name:o[0],children:e.jsx(l,{...d[t]})},o[0])]},o[0])})}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs("h2",{style:{display:"flex",gap:16,justifyContent:"space-between",alignItems:"center",textWrap:"nowrap",paddingBlock:12},children:["Все иконки",e.jsx(v,{style:{width:"100%"},value:c,onChange:r=>{f(r.target.value??"")}})]})}),e.jsx(w,{icons:g})]}):e.jsx("h3",{children:"Загрузка иконок..."})};function p(s){const n={a:"a",code:"code",h3:"h3",hr:"hr",pre:"pre",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(I,{parameters:{layout:"centered"},title:"Images/Icons"}),`
`,e.jsx(y,{children:"Icons"}),`
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
`,e.jsx(C,{})]})}function U(s={}){const{wrapper:n}={...x(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(p,{...s})}):p(s)}export{U as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DnFXHMF6.js","assets/@salutejs/plasma-icons-D-o9abDl.js","assets/react-DYHuXpTF.js","assets/_commonjsHelpers-BosuxZz1.js","assets/styled-components-D3uL8AgQ.js","assets/react-is-CT-rZfBU.js","assets/vendor-Dy04e7eT.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/@tanstack/react-virtual-DpbU78q1.js","assets/vendor-CwzC1fIw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
