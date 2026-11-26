import{r as h,j as o}from"./react-DYHuXpTF.js";import{E as l}from"./EmptyState-B787XssQ.js";import{dd as g,E as s,dh as A,G as j}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{A as w}from"./Autocomplete-DCmEDwiz.js";import{T as b}from"./Typography-DrjV5Wmt.js";import{q as m}from"./styled-components-BADHLMuD.js";import{p as v}from"./@salutejs/plasma-icons-CbqEe6UO.js";const B=m(w)`
  && {
    .input-wrapper {
      background: ${()=>g};
      box-shadow: none;
    }
  }
`,p=m(b)`
  padding: 10px 12px;
  color: ${()=>s};
`;try{p.displayName="StyledBeforeList",p.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const d=({placeholder:t="Поиск",size:c="s",value:u,onChange:i,handlerClear:_,onClear:y,disabled:f,readOnly:S,beforeListTotal:e,beforeListTotalEntity:n,...x})=>{const a=h.useRef(0);return o.jsx(B,{value:u,placeholder:t,size:c,view:"default",onChange:i,disabled:f,readOnly:S,beforeList:(typeof e=="number"||e)&&a.current&&o.jsxs(p,{variant:"BodyS",children:["Найдено",n?` ${n}`:"",":"," ",typeof e=="number"?e:a.current]}),renderList:r=>(a.current=(r==null?void 0:r.length)??0,r!=null&&r.length?void 0:o.jsx(l,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:j,borderRadius:"10px",boxShadow:A,padding:"16px 0"}})),contentLeft:o.jsx(v,{color:s,size:c}),onClear:y??_,...x})};try{d.displayName="AutocompleteSearch",d.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{d as A};
