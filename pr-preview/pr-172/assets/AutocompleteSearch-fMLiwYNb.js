import{r as y,d as o}from"./react-Ch9mc9Aq.js";import{E as _}from"./EmptyState-CmZ09Z5o.js";import{zr as N,As as i,xN as A,yK as g}from"./@sddsjs/sdds_finai-BSDEmCin.js";import{A as k}from"./Autocomplete-BEXnNUoH.js";import{a as b}from"./AiAgentPopup-BnRwwsT1.js";import{q as p}from"./styled-components-Bq12dC3g.js";import{sM as w}from"./@salutejs/plasma-icons-BYYYccLM.js";const v=p(k)`
  && {
    .input-wrapper {
      background: ${()=>N};
      box-shadow: none;
    }
  }
`,c=p(b)`
  padding: 10px 12px;
  color: ${()=>i};
`;try{c.displayName="StyledBeforeList",c.__docgenInfo={description:"",displayName:"StyledBeforeList",props:{}}}catch{}const u=({placeholder:t="Поиск",size:n="s",value:m,onChange:d,handlerClear:l,onClear:f,disabled:h,readOnly:S,beforeListTotal:r,beforeListTotalEntity:s,...x})=>{const a=y.useRef(0);return o.jsxDEV(v,{value:m,placeholder:t,size:n,view:"default",onChange:d,disabled:h,readOnly:S,beforeList:(typeof r=="number"||r)&&a.current&&o.jsxDEV(c,{variant:"BodyS",children:["Найдено",s?` ${s}`:"",":"," ",typeof r=="number"?r:a.current]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:43,columnNumber:11},void 0),renderList:e=>(a.current=(e==null?void 0:e.length)??0,e!=null&&e.length?void 0:o.jsxDEV(_,{size:"s",title:"Ничего не нашлось",variant:"not-result",$css:{background:g,borderRadius:"10px",boxShadow:A,padding:"16px 0"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:54,columnNumber:11},void 0)),contentLeft:o.jsxDEV(w,{color:i,size:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:67,columnNumber:20},void 0),onClear:f??l,...x},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.tsx",lineNumber:32,columnNumber:5},void 0)};try{u.displayName="AutocompleteSearch",u.__docgenInfo={description:"",displayName:"AutocompleteSearch",props:{}}}catch{}export{u as A};
