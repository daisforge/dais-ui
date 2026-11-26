import{r as _,j as s}from"./react-DYHuXpTF.js";import{E as x,dd as f,dl as T,dm as g}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{q as h}from"./styled-components-DDsYmQNq.js";import{g as F}from"./sharedUtilsInputs-Cv7WBy-o.js";import{N as S}from"./@salutejs/sdds-finai-C2CeMSda.js";import{p as u}from"./@salutejs/plasma-icons-EIkzXMi-.js";const o=_.forwardRef(({disabled:e,readOnly:r,contentRight:d,size:t="s",value:a,onClear:c,...n},p)=>s.jsx(S,{...n,ref:p,size:t,value:a,disabled:e,readOnly:r,contentRight:F({disabled:e,readOnly:r,value:a,onClear:c,size:t,contentRight:d})}));o.displayName="TextField";try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{}}}catch{}const i=h(o)`
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
`,l=_.forwardRef(({placeholder:e="Поиск",size:r="s",value:d,onChange:t,handlerClear:a,onClear:c,disabled:n,readOnly:p,...m},y)=>s.jsx(i,{ref:y,value:d,placeholder:e,size:r,onChange:t,disabled:n,readOnly:p,contentLeft:s.jsx(u,{color:x,size:r}),onClear:c??a,...m}));l.displayName="TextFieldSearch";try{i.displayName="StyledTextField",i.__docgenInfo={description:"",displayName:"StyledTextField",props:{}}}catch{}try{l.displayName="TextFieldSearch",l.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{}}}catch{}export{l as T,o as a};
