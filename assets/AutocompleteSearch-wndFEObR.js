import{r as h,j as o}from"./react-DNGZQ4GM.js";import{E as l}from"./EmptyState-KjA_X5Eh.js";import{d6 as g,y as s,d0 as A,A as j}from"./@sddsjs/sdds_finai-DkwmD3gE.js";import{A as w}from"./Autocomplete-CDywWsDe.js";import{T as b}from"./Typography-CIXQr6Yl.js";import{q as m}from"./styled-components-D_Edv4_h.js";import{t as v}from"./@salutejs/plasma-icons-BJIYJCV4.js";const B=m(w)`
  && {
    .input-wrapper {
      background: ${()=>g};
      box-shadow: none;
    }
  }
`,c=m(b)`
  padding: 10px 12px;
  color: ${()=>s};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const d=({placeholder:t="Поиск",size:p="s",value:u,onChange:i,handlerClear:y,onClear:_,disabled:f,readOnly:S,beforeListTotal:e,beforeListTotalEntity:n,...x})=>{const a=h.useRef(0);return o.jsx(B,{value:u,placeholder:t,size:p,view:"default",onChange:i,disabled:f,readOnly:S,beforeList:(typeof e=="number"||e)&&a.current&&o.jsxs(c,{variant:"BodyS",children:["Найдено",n?` ${n}`:"",":"," ",typeof e=="number"?e:a.current]}),renderList:r=>(a.current=(r==null?void 0:r.length)??0,r!=null&&r.length?void 0:o.jsx(l,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:j,borderRadius:"10px",boxShadow:A,padding:"16px 0"}})),contentLeft:o.jsx(v,{color:s,size:p}),onClear:_??y,...x})};try{d.displayName="AutocompleteSearch",d.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{d as A};
