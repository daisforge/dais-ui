import{r as _,d as r}from"./react-D2T61mpp.js";import{E as x}from"./EmptyState-UY_vm-Yh.js";import{d7 as A,y as i,d1 as N,A as g}from"./@sddsjs/sdds_finai-DNELm_9o.js";import{A as k}from"./Autocomplete-CGdJJ2BB.js";import{a as b}from"./AiAgentPopup-Ude0sE_h.js";import{q as p}from"./styled-components-C7d6cAn3.js";import{sM as w}from"./@salutejs/plasma-icons-4hohajim.js";const v=p(k)`
  && {
    .input-wrapper {
      background: ${()=>A};
      box-shadow: none;
    }
  }
`,c=p(b)`
  padding: 10px 12px;
  color: ${()=>i};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:t="Поиск",size:n="s",value:d,onChange:m,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:o,beforeListTotalEntity:s,...y})=>{const a=_.useRef(0);return r.jsxDEV(v,{value:d,placeholder:t,size:n,view:"default",onChange:m,disabled:h,readOnly:S,beforeList:(typeof o=="number"||o)&&a.current&&r.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof o=="number"?o:a.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(a.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:r.jsxDEV(x,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:g,borderRadius:"10px",boxShadow:N,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:r.jsxDEV(w,{color:i,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,...y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
