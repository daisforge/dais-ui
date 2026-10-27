import{r as h,j as o}from"./react-CAOzMBF_.js";import{E as l}from"./EmptyState-BCYMGuYF.js";import{T as g,y as d,bb as A,A as b}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{A as j}from"./Autocomplete-DE_6PTST.js";import{a as w}from"./AiAgentPopup-zRx4ytCb.js";import{H as m}from"./styled-components-DCFsnh-i.js";import{sL as v}from"./@salutejs/plasma-icons-Do5ggeDI.js";const B=m(j)`
  && {
    .input-wrapper {
      background: ${()=>g};
      box-shadow: none;
    }
  }
`,c=m(w)`
  padding: 10px 12px;
  color: ${()=>d};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const s=({placeholder:t="Поиск",size:p="s",value:u,onChange:i,handlerClear:y,onClear:f,disabled:S,readOnly:_,beforeListTotal:e,beforeListTotalEntity:n,...x})=>{const a=h.useRef(0);return o.jsx(B,{value:u,placeholder:t,size:p,view:"default",onChange:i,disabled:S,readOnly:_,beforeList:(typeof e=="number"||e)&&a.current&&o.jsxs(c,{variant:"BodyS",children:["Найдено",n?` ${n}`:"",":"," ",typeof e=="number"?e:a.current]}),renderList:r=>(a.current=(r==null?void 0:r.length)??0,r!=null&&r.length?void 0:o.jsx(l,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:b,borderRadius:"10px",boxShadow:A,padding:"16px 0"}})),contentLeft:o.jsx(v,{color:d,size:p}),onClear:f??y,...x})};try{s.displayName="AutocompleteSearch",s.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{s as A};
