import{j as o,R as q}from"./react-CAOzMBF_.js";import{y as E}from"./utils-EIxGvR70.js";import{C as z}from"./react-hook-form-BvKOnty6.js";import{T as D}from"./TextField-DpKf-85P.js";import{s as T}from"./constants-DatVHdkd.js";import{C as v,H as c}from"./styled-components-DCFsnh-i.js";import{bI as L}from"./vendor-DmWczWMC.js";import{a2 as M,l as O}from"./@salutejs/sdds-finai-CKhMjg07.js";import{u as k,d as J}from"./FormUtils-CCNmZwS8.js";const i={hiddenInput:"form-group-box-hidden-text-field",groupBoxContainer:"form-group-box-container"},l={spaceX8:()=>T.x8,spaceX12:()=>T.x12},s=c(L)`
  --form-group-box-container-gap: ${l.spaceX8};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${l.spaceX8};

  & .${i.groupBoxContainer} {
    ${({$mode:e})=>e&&v`
        --form-group-box-container-gap: ${l.spaceX12};
      `}
    display: flex;
    flex-direction: ${({$mode:e})=>e??"column"};
    gap: var(--form-group-box-container-gap);
  }
`,p=c(M)`
  ${({$isError:e})=>e&&v`
      .radiobox-trigger {
        border: 1px solid red;
      }
    `}
`,u=c(D)`
  &&.${i.hiddenInput} {
    .input-wrapper,
    .input-wrapper * {
      pointer-events: none;
      max-height: 0;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
  }
  & > div {
    margin-bottom: 0;
  }
`;try{s.displayName="FormRadioGroupStyled",s.__docgenInfo={description:"",displayName:"FormRadioGroupStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="FormRadioboxStyled",p.__docgenInfo={description:"",displayName:"FormRadioboxStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{u.displayName="HiddenTextField",u.__docgenInfo={description:"",displayName:"HiddenTextField",props:{}}}catch{}const m=({name:e,value:n,...a})=>o.jsx(p,{...a,name:e,value:n,"data-component":"FormRadiobox"});m.displayName="FormRadiobox";try{m.displayName="FormRadiobox",m.__docgenInfo={description:"",displayName:"FormRadiobox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},$isError:{defaultValue:null,description:"",name:"$isError",required:!1,type:{name:"boolean"}}}}}catch{}const C=({name:e,children:n,options:a,onChange:d,label:f,hintText:N,hintHasArrow:w=!0,hintTrigger:$="hover",titleCaption:x,radioGroupMode:G,size:I="s",...S})=>{const y=k(a),{control:j,rules:H,remOptions:P}=y;return o.jsx(z,{control:j,name:e,rules:H,...P,render:({field:{onChange:A,value:g,...X},fieldState:{error:t}})=>o.jsxs(s,{...X,...S,$mode:G,children:[(f||x)&&o.jsx(u,{required:J(a),label:f,value:g,hintHasArrow:w,hintText:N??"",hintTrigger:$,className:i.hiddenInput,titleCaption:x,size:I}),o.jsx("div",{className:i.groupBoxContainer,children:q.Children.map(n,r=>{var _,F,b,h,R;if(q.isValidElement(r)){if(!(((_=r.props["data-component"])==null?void 0:_.toLowerCase())==="formradiobox"||((b=(F=r.type)==null?void 0:F.displayName)==null?void 0:b.toLowerCase())==="formradiobox"||((R=(h=r.type)==null?void 0:h.target)==null?void 0:R.displayName)==="formradiobox"))return r;const B=r.type;return o.jsx(B,{...r.props,name:e,checked:r.props.value===g,onChange:V=>{A(V.target.value),d==null||d(V.target.value,y)},$isError:!!t})}return null})}),o.jsx(O,{color:E("negative"),children:t==null?void 0:t.message})]})})};try{C.displayName="FormRadioGroup",C.__docgenInfo={description:"",displayName:"FormRadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"THandleChange<string | number>"}},radioGroupMode:{defaultValue:null,description:"",name:"radioGroupMode",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"any"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TextFieldProps"}},titleCaption:{defaultValue:null,description:"",name:"titleCaption",required:!0,type:{name:"TextFieldProps"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!0,type:{name:"TextFieldProps"}},hintTrigger:{defaultValue:{value:"hover"},description:"",name:"hintTrigger",required:!1,type:{name:"TextFieldProps"}},hintHasArrow:{defaultValue:{value:"true"},description:"",name:"hintHasArrow",required:!1,type:{name:"TextFieldProps"}},hintSize:{defaultValue:null,description:"",name:"hintSize",required:!0,type:{name:"TextFieldProps"}}}}}catch{}export{C as F,m as a};
