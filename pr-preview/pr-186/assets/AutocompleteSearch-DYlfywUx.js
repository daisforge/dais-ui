import{r as x,b as r}from"./react-UEdzNlUe.js";import{E as y}from"./EmptyState-D043bTLp.js";import{dm as g,E as i,dg as N,G as A}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{A as k}from"./Autocomplete-BZdAUz1o.js";import{T as b}from"./Typography-BA5qaSRD.js";import{q as m}from"./styled-components-CDfPITHT.js";import{t as w}from"./@salutejs/plasma-icons-BPl9HMYM.js";const v=m(k)`
  && {
    .input-wrapper {
      background: ${()=>g};
      box-shadow: none;
    }
  }
`,c=m(b)`
  padding: 10px 12px;
  color: ${()=>i};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:t="Поиск",size:n="s",value:p,onChange:d,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:o,beforeListTotalEntity:s,..._})=>{const a=x.useRef(0);return r.jsxDEV(v,{value:p,placeholder:t,size:n,view:"default",onChange:d,disabled:h,readOnly:S,beforeList:(typeof o=="number"||o)&&a.current&&r.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof o=="number"?o:a.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(a.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:r.jsxDEV(y,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:A,borderRadius:"10px",boxShadow:N,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:r.jsxDEV(w,{color:i,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,..._},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
