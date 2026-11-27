import{j as o,R as V}from"./react-DYHuXpTF.js";import{k as B}from"./utils-Cr0_bERK.js";import{C as E}from"./react-hook-form-B7X3zJ5q.js";import{a as k}from"./TextField-CYooKCoB.js";import{s as T}from"./constants-YnncqoDz.js";import{A as C,q as c}from"./styled-components-DDsYmQNq.js";import{cz as D}from"./vendor-4go4qBMz.js";import{_ as L,k as M}from"./@salutejs/sdds-finai-C2CeMSda.js";import{u as O,d as J}from"./FormUtils-DWtIQttk.js";const i={hiddenInput:"form-group-box-hidden-text-field",groupBoxContainer:"form-group-box-container"},l={spaceX8:()=>T.x8,spaceX12:()=>T.x12},s=c(D)`
  --form-group-box-container-gap: ${l.spaceX8};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${l.spaceX8};

  & .${i.groupBoxContainer} {
    ${({$mode:e})=>e&&C`
        --form-group-box-container-gap: ${l.spaceX12};
      `}
    display: flex;
    flex-direction: ${({$mode:e})=>e??"column"};
    gap: var(--form-group-box-container-gap);
  }
`,p=c(L)`
  ${({$isError:e})=>e&&C`
      .radiobox-trigger {
        border: 1px solid red;
      }
    `}
`,u=c(k)`
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
`;try{s.displayName="FormRadioGroupStyled",s.__docgenInfo={description:"",displayName:"FormRadioGroupStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="FormRadioboxStyled",p.__docgenInfo={description:"",displayName:"FormRadioboxStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{u.displayName="HiddenTextField",u.__docgenInfo={description:"",displayName:"HiddenTextField",props:{}}}catch{}const m=({name:e,value:n,...a})=>o.jsx(p,{...a,name:e,value:n,"data-component":"FormRadiobox"});m.displayName="FormRadiobox";try{m.displayName="FormRadiobox",m.__docgenInfo={description:"",displayName:"FormRadiobox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},$isError:{defaultValue:null,description:"",name:"$isError",required:!1,type:{name:"boolean"}}}}}catch{}const v=({name:e,children:n,options:a,onChange:d,label:f,hintText:N,hintHasArrow:w=!0,hintTrigger:$="hover",titleCaption:x,radioGroupMode:G,size:S="s",...j})=>{const y=O(a),{control:I,rules:A,remOptions:P}=y;return o.jsx(E,{control:I,name:e,rules:A,...P,render:({field:{onChange:H,value:g,...X},fieldState:{error:t}})=>o.jsxs(s,{...X,...j,$mode:G,children:[(f||x)&&o.jsx(u,{required:J(a),label:f,value:g,hintHasArrow:w,hintText:N??"",hintTrigger:$,className:i.hiddenInput,titleCaption:x,size:S}),o.jsx("div",{className:i.groupBoxContainer,children:V.Children.map(n,r=>{var _,F,b,h,R;if(V.isValidElement(r)){if(!(((_=r.props["data-component"])==null?void 0:_.toLowerCase())==="formradiobox"||((b=(F=r.type)==null?void 0:F.displayName)==null?void 0:b.toLowerCase())==="formradiobox"||((R=(h=r.type)==null?void 0:h.target)==null?void 0:R.displayName)==="formradiobox"))return r;const z=r.type;return o.jsx(z,{...r.props,name:e,checked:r.props.value===g,onChange:q=>{H(q.target.value),d==null||d(q.target.value,y)},$isError:!!t})}return null})}),o.jsx(M,{color:B("negative"),children:t==null?void 0:t.message})]})})};try{v.displayName="FormRadioGroup",v.__docgenInfo={description:"",displayName:"FormRadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"THandleChange<string | number>"}},radioGroupMode:{defaultValue:null,description:"",name:"radioGroupMode",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"any"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TextFieldProps"}},titleCaption:{defaultValue:null,description:"",name:"titleCaption",required:!0,type:{name:"TextFieldProps"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!0,type:{name:"TextFieldProps"}},hintTrigger:{defaultValue:{value:"hover"},description:"",name:"hintTrigger",required:!1,type:{name:"TextFieldProps"}},hintHasArrow:{defaultValue:{value:"true"},description:"",name:"hintHasArrow",required:!1,type:{name:"TextFieldProps"}},hintSize:{defaultValue:null,description:"",name:"hintSize",required:!0,type:{name:"TextFieldProps"}}}}}catch{}export{v as F,m as a};
