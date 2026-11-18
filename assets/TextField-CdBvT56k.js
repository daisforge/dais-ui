import{r as l,j as p}from"./react-CAOzMBF_.js";import{y as x,d7 as f,d0 as T,d8 as g}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as h}from"./styled-components-BAnxJVQm.js";import{g as F}from"./sharedUtilsInputs-CObshIdX.js";import{O as S}from"./@salutejs/sdds-finai-CrMFu5No.js";import{sM as u}from"./@salutejs/plasma-icons-DBF9uERs.js";const o=l.forwardRef(({disabled:e,readOnly:r,contentRight:d,size:t="s",value:a,onClear:c,...n},s)=>p.jsx(S,{...n,ref:s,size:t,value:a,disabled:e,readOnly:r,contentRight:F({disabled:e,readOnly:r,value:a,onClear:c,size:t,contentRight:d})}));o.displayName="TextField";try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{}}}catch{}const i=h(o)`
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
`,_=l.forwardRef(({placeholder:e="Поиск",size:r="s",value:d,onChange:t,handlerClear:a,onClear:c,disabled:n,readOnly:s,...y},m)=>p.jsx(i,{ref:m,value:d,placeholder:e,size:r,onChange:t,disabled:n,readOnly:s,contentLeft:p.jsx(u,{color:x,size:r}),onClear:c??a,...y}));_.displayName="TextFieldSearch";try{i.displayName="StyledTextField",i.__docgenInfo={description:"",displayName:"StyledTextField",props:{}}}catch{}try{_.displayName="TextFieldSearch",_.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{}}}catch{}export{o as T,_ as a};
