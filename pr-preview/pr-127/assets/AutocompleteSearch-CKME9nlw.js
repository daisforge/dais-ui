import{r as x,d as r}from"./react-D2T61mpp.js";import{E as A}from"./EmptyState-BmQ77qQD.js";import{T as N,y as i,bb as _,A as g}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{A as b}from"./Autocomplete-C26J2WCn.js";import{a as k}from"./AiAgentPopup-DL3ui1_j.js";import{H as p}from"./styled-components-C6nqWEvq.js";import{sL as w}from"./@salutejs/plasma-icons-lvaNTfmN.js";const v=p(b)`
  && {
    .input-wrapper {
      background: ${()=>N};
      box-shadow: none;
    }
  }
`,c=p(k)`
  padding: 10px 12px;
  color: ${()=>i};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:t="Поиск",size:n="s",value:m,onChange:d,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:o,beforeListTotalEntity:s,...y})=>{const a=x.useRef(0);return r.jsxDEV(v,{value:m,placeholder:t,size:n,view:"default",onChange:d,disabled:h,readOnly:S,beforeList:(typeof o=="number"||o)&&a.current&&r.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof o=="number"?o:a.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(a.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:r.jsxDEV(A,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:g,borderRadius:"10px",boxShadow:_,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:r.jsxDEV(w,{color:i,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,...y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
