import{r as x,b as r}from"./react-UEdzNlUe.js";import{E as y}from"./EmptyState-BVPgIYqR.js";import{cZ as N,cE as i,cS as g,cG as A}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{A as k}from"./Autocomplete-BfJ_x4IL.js";import{T as b}from"./Typography-wwPE7Tkw.js";import{q as p}from"./styled-components-BQ6ZyzFq.js";import{h as w}from"./@salutejs/plasma-icons-D87bzLqR.js";const v=p(k)`
  && {
    .input-wrapper {
      background: ${()=>N};
      box-shadow: none;
    }
  }
`,c=p(b)`
  padding: 10px 12px;
  color: ${()=>i};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:t="Поиск",size:n="s",value:m,onChange:d,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:o,beforeListTotalEntity:s,..._})=>{const a=x.useRef(0);return r.jsxDEV(v,{value:m,placeholder:t,size:n,view:"default",onChange:d,disabled:h,readOnly:S,beforeList:(typeof o=="number"||o)&&a.current&&r.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof o=="number"?o:a.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(a.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:r.jsxDEV(y,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:A,borderRadius:"10px",boxShadow:g,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:r.jsxDEV(w,{color:i,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,..._},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
