import{j as r}from"./react-CAOzMBF_.js";import{C as N}from"./react-hook-form-BvKOnty6.js";import{q as H,dh as R,y as x,w as P}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{t as S,F as q,l as s}from"./@salutejs/sdds-finai-Yd8FRL4L.js";import{q as C}from"./styled-components-BD-2WP2k.js";import{g as O,u as E,c as I,a as k,b as G}from"./FormUtils-CCNmZwS8.js";import{T as L}from"./TextArea-D4SFwMIi.js";const $=C(S)`
  padding: 0;
  height: fit-content;
  color: ${()=>H};

  &:hover {
    background: transparent;
    color: ${()=>R};
  }
`,z=C(L)`
  .textarea-container {
    div:first-child {
      flex: 1;
    }
  }
`,f=({onClear:o,currentCount:t,maxCount:e,showClearButton:l=!0})=>{let n;return e&&(n=t>e?P:x),r.jsxs(q,{mainAxisGap:"8px",crossAxisGap:"8px",children:[t>0&&l&&r.jsx($,{view:"clear",onClick:o,children:r.jsx(s,{children:"Очистить"})}),e&&r.jsxs(q,{children:[r.jsx(s,{color:n,children:t}),r.jsx(s,{color:x,children:"/"}),r.jsx(s,{color:x,children:e})]})]})};try{f.displayName="RightContent",f.__docgenInfo={description:"",displayName:"RightContent",props:{onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},currentCount:{defaultValue:null,description:"",name:"currentCount",required:!0,type:{name:"number"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},showClearButton:{defaultValue:{value:"true"},description:"",name:"showClearButton",required:!1,type:{name:"boolean"}}}}}catch{}const v=({name:o,options:t,onChange:e,label:l,leftHelper:n="",onBlur:i,onFocus:D,view:V,showClearButton:j=!0,required:F,...u})=>{const c={...t,required:O({options:t,ruleName:"required"})?t==null?void 0:t.required:F},d=E(c),{control:b,rules:g,remOptions:A,setValue:T}=d,m=I({rule:g.maxLength,typeValue:"number"});return r.jsx(N,{control:b,name:o,...A,rules:g,render:({field:{name:X,onBlur:w,onChange:h,...p},fieldState:{error:y}})=>{var _;return r.jsx(z,{...p,label:l,labelPlacement:"outer",leftHelper:G(y,n),leftHelperPlacement:"inner",name:o,required:!!c.required||void 0,requiredPlacement:"right",hasRequiredIndicator:!!c.required||void 0,rightHelper:!p.disabled&&!u.disabled&&!u.readOnly&&r.jsx(f,{currentCount:((_=p.value)==null?void 0:_.length)||0,maxCount:m,onClear:()=>{T(o,"",{shouldDirty:!0}),e==null||e("",d)},showClearButton:j}),size:"s",view:k(y,V),onBlur:a=>{a.relatedTarget||(w(),i==null||i(a))},onChange:a=>{h(a.target.value),e==null||e(a.target.value,d)},onFocus:a=>{i==null||i(a)},...m!==void 0&&{maxLength:m},...u})}})};try{v.displayName="FormTextArea",v.__docgenInfo={description:"",displayName:"FormTextArea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"THandleChange<string>"}}}}}catch{}export{v as F};
