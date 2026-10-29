import{d as r,R as V}from"./react-D2T61mpp.js";import{y as P}from"./utils-BVL9FlQU.js";import{C as A}from"./react-hook-form--TL94tpB.js";import{T as X}from"./TextField-CxxXKDSK.js";import{s as v}from"./constants-DatVHdkd.js";import{C as G,H as c}from"./styled-components-DcK5R8Fb.js";import{bI as z}from"./vendor-Drxgg0rk.js";import{a2 as L,l as M}from"./@salutejs/sdds-finai-B5c9tUhj.js";import{u as O,d as J}from"./FormUtils-81Wt4mic.js";const n={hiddenInput:"form-group-box-hidden-text-field",groupBoxContainer:"form-group-box-container"},u={spaceX8:()=>v.x8,spaceX12:()=>v.x12},s=c(z)`
  --form-group-box-container-gap: ${u.spaceX8};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${u.spaceX8};

  & .${n.groupBoxContainer} {
    ${({$mode:e})=>e&&G`
        --form-group-box-container-gap: ${u.spaceX12};
      `}
    display: flex;
    flex-direction: ${({$mode:e})=>e??"column"};
    gap: var(--form-group-box-container-gap);
  }
`,m=c(L)`
  ${({$isError:e})=>e&&G`
      .radiobox-trigger {
        border: 1px solid red;
      }
    `}
`,l=c(X)`
  &&.${n.hiddenInput} {
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
`;try{s.displayName="FormRadioGroupStyled",s.__docgenInfo={description:"",displayName:"FormRadioGroupStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{m.displayName="FormRadioboxStyled",m.__docgenInfo={description:"",displayName:"FormRadioboxStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{l.displayName="HiddenTextField",l.__docgenInfo={description:"",displayName:"HiddenTextField",props:{}}}catch{}const p=({name:e,value:t,...a})=>r.jsxDEV(m,{...a,name:e,value:t,"data-component":"FormRadiobox"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadiobox.tsx",lineNumber:7,columnNumber:3},void 0);p.displayName="FormRadiobox";try{p.displayName="FormRadiobox",p.__docgenInfo={description:"",displayName:"FormRadiobox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},$isError:{defaultValue:null,description:"",name:"$isError",required:!1,type:{name:"boolean"}}}}}catch{}const C=({name:e,children:t,options:a,onChange:d,label:f,hintText:k,hintHasArrow:q=!0,hintTrigger:w="hover",titleCaption:x,radioGroupMode:T,size:B="s",...E})=>{const y=O(a),{control:$,rules:D,remOptions:I}=y;return r.jsxDEV(A,{control:$,name:e,rules:D,...I,render:({field:{onChange:S,value:g,...j},fieldState:{error:i}})=>r.jsxDEV(s,{...j,...E,$mode:T,children:[(f||x)&&r.jsxDEV(l,{required:J(a),label:f,value:g,hintHasArrow:q,hintText:k??"",hintTrigger:w,className:n.hiddenInput,titleCaption:x,size:B},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadioGroup.tsx",lineNumber:41,columnNumber:13},void 0),r.jsxDEV("div",{className:n.groupBoxContainer,children:V.Children.map(t,o=>{var F,b,_,R,N;if(V.isValidElement(o)){if(!(((F=o.props["data-component"])==null?void 0:F.toLowerCase())==="formradiobox"||((_=(b=o.type)==null?void 0:b.displayName)==null?void 0:_.toLowerCase())==="formradiobox"||((N=(R=o.type)==null?void 0:R.target)==null?void 0:N.displayName)==="formradiobox"))return o;const H=o.type;return r.jsxDEV(H,{...o.props,name:e,checked:o.props.value===g,onChange:h=>{S(h.target.value),d==null||d(h.target.value,y)},$isError:!!i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadioGroup.tsx",lineNumber:73,columnNumber:19},void 0)}return null})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadioGroup.tsx",lineNumber:53,columnNumber:11},void 0),r.jsxDEV(M,{color:P("negative"),children:i==null?void 0:i.message},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadioGroup.tsx",lineNumber:88,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadioGroup.tsx",lineNumber:39,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/formComponents/FormRadioGroupBox/FormRadioGroup.tsx",lineNumber:30,columnNumber:5},void 0)};try{C.displayName="FormRadioGroup",C.__docgenInfo={description:"",displayName:"FormRadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"RegisterOptions<FieldValues, Path<TFieldValues>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"THandleChange<string | number>"}},radioGroupMode:{defaultValue:null,description:"",name:"radioGroupMode",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"any"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"TextFieldProps"}},titleCaption:{defaultValue:null,description:"",name:"titleCaption",required:!0,type:{name:"TextFieldProps"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!0,type:{name:"TextFieldProps"}},hintTrigger:{defaultValue:{value:"hover"},description:"",name:"hintTrigger",required:!1,type:{name:"TextFieldProps"}},hintHasArrow:{defaultValue:{value:"true"},description:"",name:"hintHasArrow",required:!1,type:{name:"TextFieldProps"}},hintSize:{defaultValue:null,description:"",name:"hintSize",required:!0,type:{name:"TextFieldProps"}}}}}catch{}export{C as F,p as a};
