import{r as _,j as p}from"./react-CAOzMBF_.js";import{y as x,T as f,ai as T,aj as g}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as h}from"./styled-components-DCFsnh-i.js";import{g as F}from"./sharedUtilsInputs-Cj-LRbcu.js";import{O as S}from"./@salutejs/sdds-finai-CKhMjg07.js";import{sL as u}from"./@salutejs/plasma-icons-Do5ggeDI.js";const o=_.forwardRef(({disabled:e,readOnly:r,contentRight:c,size:a="s",value:t,onClear:n,...s},d)=>p.jsx(S,{...s,ref:d,size:a,value:t,disabled:e,readOnly:r,contentRight:F({disabled:e,readOnly:r,value:t,onClear:n,size:a,contentRight:c})}));o.displayName="TextField";try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{}}}catch{}const i=h(o)`
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
`,l=_.forwardRef(({placeholder:e="Поиск",size:r="s",value:c,onChange:a,handlerClear:t,onClear:n,disabled:s,readOnly:d,...y},m)=>p.jsx(i,{ref:m,value:c,placeholder:e,size:r,onChange:a,disabled:s,readOnly:d,contentLeft:p.jsx(u,{color:x,size:r}),onClear:n??t,...y}));l.displayName="TextFieldSearch";try{i.displayName="StyledTextField",i.__docgenInfo={description:"",displayName:"StyledTextField",props:{}}}catch{}try{l.displayName="TextFieldSearch",l.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{}}}catch{}export{o as T,l as a};
