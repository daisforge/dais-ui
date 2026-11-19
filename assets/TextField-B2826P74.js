import{r as l,j as s}from"./react-DNGZQ4GM.js";import{y as x,d6 as f,c$ as T,d7 as g}from"./@sddsjs/sdds_finai-DkwmD3gE.js";import{q as h}from"./styled-components-DgpxuAGO.js";import{g as F}from"./sharedUtilsInputs-DgLMi5in.js";import{r as S}from"./@salutejs/sdds-finai-ChtfndFI.js";import{t as u}from"./@salutejs/plasma-icons-BuaDVQIV.js";const o=l.forwardRef(({disabled:e,readOnly:r,contentRight:c,size:t="s",value:a,onClear:d,...n},p)=>s.jsx(S,{...n,ref:p,size:t,value:a,disabled:e,readOnly:r,contentRight:F({disabled:e,readOnly:r,value:a,onClear:d,size:t,contentRight:c})}));o.displayName="TextField";try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{}}}catch{}const i=h(o)`
  && {
    .input-wrapper {
      background: ${()=>f};
      box-shadow: none;
    }

    &:not([readonly]) .input-wrapper:hover {
      background: ${()=>T};
    }

    &:not([readonly]) .input-wrapper:active {
      background: ${()=>g};
    }
  }
`,_=l.forwardRef(({placeholder:e="Поиск",size:r="s",value:c,onChange:t,handlerClear:a,onClear:d,disabled:n,readOnly:p,...y},m)=>s.jsx(i,{ref:m,value:c,placeholder:e,size:r,onChange:t,disabled:n,readOnly:p,contentLeft:s.jsx(u,{color:x,size:r}),onClear:d??a,...y}));_.displayName="TextFieldSearch";try{i.displayName="StyledTextField",i.__docgenInfo={description:"",displayName:"StyledTextField",props:{}}}catch{}try{_.displayName="TextFieldSearch",_.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{}}}catch{}export{o as T,_ as a};
