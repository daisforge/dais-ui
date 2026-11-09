import{r as h,j as o}from"./react-CAOzMBF_.js";import{E as l}from"./EmptyState-KfqjaHUZ.js";import{d7 as g,y as d,d1 as A,A as j}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{A as w}from"./Autocomplete-BmEc7HjM.js";import{a as b}from"./AiAgentPopup-CCsj2TVE.js";import{q as m}from"./styled-components-BD-2WP2k.js";import{sM as v}from"./@salutejs/plasma-icons-CkR551sF.js";const B=m(w)`
  && {
    .input-wrapper {
      background: ${()=>g};
      box-shadow: none;
    }
  }
`,c=m(b)`
  padding: 10px 12px;
  color: ${()=>d};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const s=({placeholder:t="Поиск",size:p="s",value:u,onChange:i,handlerClear:y,onClear:_,disabled:f,readOnly:S,beforeListTotal:e,beforeListTotalEntity:n,...x})=>{const a=h.useRef(0);return o.jsx(B,{value:u,placeholder:t,size:p,view:"default",onChange:i,disabled:f,readOnly:S,beforeList:(typeof e=="number"||e)&&a.current&&o.jsxs(c,{variant:"BodyS",children:["Найдено",n?` ${n}`:"",":"," ",typeof e=="number"?e:a.current]}),renderList:r=>(a.current=(r==null?void 0:r.length)??0,r!=null&&r.length?void 0:o.jsx(l,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:j,borderRadius:"10px",boxShadow:A,padding:"16px 0"}})),contentLeft:o.jsx(v,{color:d,size:p}),onClear:_??y,...x})};try{s.displayName="AutocompleteSearch",s.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{s as A};
