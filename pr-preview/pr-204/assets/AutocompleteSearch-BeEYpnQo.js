import{r as x,b as r}from"./react-UEdzNlUe.js";import{E as y}from"./EmptyState-CXzoECXD.js";import{dd as N,E as p,dh as g,G as A}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{A as k}from"./Autocomplete-BBCZ5dWD.js";import{T as b}from"./Typography-iY6IgvJ3.js";import{q as i}from"./styled-components-BDqbx52B.js";import{p as w}from"./@salutejs/plasma-icons-BF2rNVOT.js";const v=i(k)`
  && {
    .input-wrapper {
      background: ${()=>N};
      box-shadow: none;
    }
  }
`,c=i(b)`
  padding: 10px 12px;
  color: ${()=>p};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:t="Поиск",size:n="s",value:d,onChange:m,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:o,beforeListTotalEntity:s,..._})=>{const a=x.useRef(0);return r.jsxDEV(v,{value:d,placeholder:t,size:n,view:"default",onChange:m,disabled:h,readOnly:S,beforeList:(typeof o=="number"||o)&&a.current&&r.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof o=="number"?o:a.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(a.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:r.jsxDEV(y,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:A,borderRadius:"10px",boxShadow:g,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:r.jsxDEV(w,{color:p,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,..._},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
