import{j as r}from"./react-CAOzMBF_.js";import{C as N}from"./react-hook-form-BvKOnty6.js";import{q as h,bj as R,y as x,w as P}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as S,F as _,l as s}from"./@salutejs/sdds-finai-CKhMjg07.js";import{H as j}from"./styled-components-DCFsnh-i.js";import{g as O,u as E,c as I,a as k,b as G}from"./FormUtils-CCNmZwS8.js";import{T as L}from"./TextArea-FtPqzh-q.js";const $=j(S)`
  padding: 0;
  height: fit-content;
  color: ${()=>h};

  &:hover {
    background: transparent;
    color: ${()=>R};
  }
`,z=j(L)`
  .textarea-container {
    div:first-child {
      flex: 1;
    }
  }
`,f=({onClear:o,currentCount:t,maxCount:e,showClearButton:l=!0})=>{let n;return e&&(n=t>e?P:x),r.jsxs(_,{mainAxisGap:"8px",crossAxisGap:"8px",children:[t>0&&l&&r.jsx($,{view:"clear",onClick:o,children:r.jsx(s,{children:"Очистить"})}),e&&r.jsxs(_,{children:[r.jsx(s,{color:n,children:t}),r.jsx(s,{color:x,children:"/"}),r.jsx(s,{color:x,children:e})]})]})};try{f.displayName="RightContent",f.__docgenInfo={description:"",displayName:"RightContent",props:{onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},currentCount:{defaultValue:null,description:"",name:"currentCount",required:!0,type:{name:"number"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},showClearButton:{defaultValue:{value:"true"},description:"",name:"showClearButton",required:!1,type:{name:"boolean"}}}}}catch{}const v=({name:o,options:t,onChange:e,label:l,leftHelper:n="",onBlur:i,onFocus:D,view:C,showClearButton:V=!0,required:F,...u})=>{const c={...t,required:O({options:t,ruleName:"required"})?t==null?void 0:t.required:F},d=E(c),{control:b,rules:g,remOptions:A,setValue:T}=d,m=I({rule:g.maxLength,typeValue:"number"});return r.jsx(N,{control:b,name:o,...A,rules:g,render:({field:{name:X,onBlur:w,onChange:H,...p},fieldState:{error:y}})=>{var q;return r.jsx(z,{...p,label:l,labelPlacement:"outer",leftHelper:G(y,n),leftHelperPlacement:"inner",name:o,required:!!c.required||void 0,requiredPlacement:"right",hasRequiredIndicator:!!c.required||void 0,rightHelper:!p.disabled&&!u.disabled&&!u.readOnly&&r.jsx(f,{currentCount:((q=p.value)==null?void 0:q.length)||0,maxCount:m,onClear:()=>{T(o,"",{shouldDirty:!0}),e==null||e("",d)},showClearButton:V}),size:"s",view:k(y,C),onBlur:a=>{a.relatedTarget||(w(),i==null||i(a))},onChange:a=>{H(a.target.value),e==null||e(a.target.value,d)},onFocus:a=>{i==null||i(a)},...m!==void 0&&{maxLength:m},...u})}})};try{v.displayName="FormTextArea",v.__docgenInfo={description:"",displayName:"FormTextArea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"THandleChange<string>"}}}}}catch{}export{v as F};
