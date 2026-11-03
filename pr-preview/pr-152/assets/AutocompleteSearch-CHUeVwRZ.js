import{r as _,d as r}from"./react-D2T61mpp.js";import{E as x}from"./EmptyState-BzsT5sKM.js";import{af as A,y as i,a9 as N,A as g}from"./@sddsjs/sdds_finai-CivTlObr.js";import{A as k}from"./Autocomplete-B9Fnn-vk.js";import{a as b}from"./AiAgentPopup-BZq9S3Sj.js";import{q as p}from"./styled-components-BMGTmUgW.js";import{sM as w}from"./@salutejs/plasma-icons-DDZ7vpYp.js";const v=p(k)`
  && {
    .input-wrapper {
      background: ${()=>A};
      box-shadow: none;
    }
  }
`,c=p(b)`
  padding: 10px 12px;
  color: ${()=>i};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:a="Поиск",size:n="s",value:m,onChange:d,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:o,beforeListTotalEntity:s,...y})=>{const t=_.useRef(0);return r.jsxDEV(v,{value:m,placeholder:a,size:n,view:"default",onChange:d,disabled:h,readOnly:S,beforeList:(typeof o=="number"||o)&&t.current&&r.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof o=="number"?o:t.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(t.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:r.jsxDEV(x,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:g,borderRadius:"10px",boxShadow:N,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:r.jsxDEV(w,{color:i,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,...y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
