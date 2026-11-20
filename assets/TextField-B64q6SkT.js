import{r as l,j as p}from"./react-DYHuXpTF.js";import{E as x,dm as f,df as T,dn as g}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{q as h}from"./styled-components-D3uL8AgQ.js";import{g as F}from"./sharedUtilsInputs-D_r5tJpr.js";import{s as S}from"./@salutejs/sdds-finai-CW-5BJnR.js";import{t as u}from"./@salutejs/plasma-icons-D-o9abDl.js";const o=l.forwardRef(({disabled:e,readOnly:r,contentRight:d,size:t="s",value:a,onClear:c,...n},s)=>p.jsx(S,{...n,ref:s,size:t,value:a,disabled:e,readOnly:r,contentRight:F({disabled:e,readOnly:r,value:a,onClear:c,size:t,contentRight:d})}));o.displayName="TextField";try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{}}}catch{}const i=h(o)`
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
`,_=l.forwardRef(({placeholder:e="Поиск",size:r="s",value:d,onChange:t,handlerClear:a,onClear:c,disabled:n,readOnly:s,...m},y)=>p.jsx(i,{ref:y,value:d,placeholder:e,size:r,onChange:t,disabled:n,readOnly:s,contentLeft:p.jsx(u,{color:x,size:r}),onClear:c??a,...m}));_.displayName="TextFieldSearch";try{i.displayName="StyledTextField",i.__docgenInfo={description:"",displayName:"StyledTextField",props:{}}}catch{}try{_.displayName="TextFieldSearch",_.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{}}}catch{}export{o as T,_ as a};
