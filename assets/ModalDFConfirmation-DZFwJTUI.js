import{r as s,R as h,d as o}from"./react-D2T61mpp.js";import{c,M as e,S as v}from"./ModalDF-BtvzjvMx.js";import{s as f}from"./constants-B3b49qmU.js";import{u as y,v as w,r as E,q as j,y as B,ce as V,cf as S,cg as _,ch as z}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as m}from"./styled-components-CdU5JEL5.js";import{F as G,b as p}from"./@salutejs/sdds-finai-D4ztozMT.js";const x={positive:()=>z,warning:()=>_,info:()=>S,negative:()=>V,default:()=>B},R={positive:j,warning:E,info:w,negative:y},$=m(e)`
  & .${c.container} {
    position: relative;
    overflow: hidden;
    padding-top: ${({$view:i})=>i?"76px":"0"};
  }

  & .${c.container}::after {
    content: '';
    position: absolute;
    z-index: -2;
    height: 804px;
    width: 804px;
    top: -610px;
    left: calc(50% - 402px);
    background: ${({$view:i})=>i?x[i]:x.default};
  }
`,H=m.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 35px;
  display: flex;
  justify-content: center;
`,I=m(v)`
  position: absolute;
  top: 16px;
  right: 16px;
`,W=s.forwardRef(({content:i,view:n,icon:a,...D},k)=>{const{header:N,body:u,bodyMarginBlock:F,mainButton:t,secondaryButton:r,footer:g}=i??{},M=!!(t||r),b=F??(typeof u=="string"?f.x4:void 0),C=s.Children.map(a,l=>{if(h.isValidElement(l))return s.cloneElement(l,{size:"m",color:n?R[n]:""})});return o.jsxDEV($,{ref:k,$view:n,...D,children:[o.jsxDEV(e.Main,{children:[o.jsxDEV(e.Header,{title:N,showServiceButtons:!(n&&a)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:99,columnNumber:11},void 0),o.jsxDEV(e.Content,{$css:{marginBlock:b},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:100,columnNumber:11},void 0),g??(M&&o.jsxDEV(e.Footer,{rightBlock:o.jsxDEV(G,{mainAxisGap:f.x4,children:[r&&o.jsxDEV(p,{view:"secondary",size:"s",...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:109,columnNumber:23},void 0),t&&o.jsxDEV(p,{view:"accent",size:"s",...t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:112,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:107,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:105,columnNumber:15},void 0))]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:98,columnNumber:9},void 0),n&&a&&o.jsxDEV(o.Fragment,{children:[o.jsxDEV(I,{hasBackground:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:121,columnNumber:13},void 0),o.jsxDEV(H,{children:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:122,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:120,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:97,columnNumber:7},void 0)}),P=e.Footer,d=Object.assign(W,{Footer:P});d.displayName="ModalDFConfirmation";try{d.displayName="ModalDFConfirmation",d.__docgenInfo={description:"",displayName:"ModalDFConfirmation",props:{}}}catch{}export{d as M};
