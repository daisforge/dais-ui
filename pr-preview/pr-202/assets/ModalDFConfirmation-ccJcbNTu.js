import{r as s,R as h,b as o}from"./react-UEdzNlUe.js";import{c,M as e,S as v}from"./ModalDF-D7Qur-3v.js";import{s as f}from"./constants-3UB8ZrMK.js";import{C as _,D as w,B as y,A as E,G as j,cP as B,cQ as V,cR as S,cS as G}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{q as m}from"./styled-components-CDfPITHT.js";import{F as R,c as p}from"./@salutejs/sdds-finai-CkM2RoIx.js";const x={positive:()=>G,warning:()=>S,info:()=>V,negative:()=>B,default:()=>j},z={positive:E,warning:y,info:w,negative:_},$=m(e)`
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
`,I=m.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 35px;
  display: flex;
  justify-content: center;
`,W=m(v)`
  position: absolute;
  top: 16px;
  right: 16px;
`,P=s.forwardRef(({content:i,view:n,icon:a,...D},k)=>{const{header:N,body:l,bodyMarginBlock:F,mainButton:t,secondaryButton:r,footer:M}=i??{},g=!!(t||r),b=F??(typeof l=="string"?f.x4:void 0),C=s.Children.map(a,u=>{if(h.isValidElement(u))return s.cloneElement(u,{size:"m",color:n?z[n]:""})});return o.jsxDEV($,{ref:k,$view:n,...D,children:[o.jsxDEV(e.Main,{children:[o.jsxDEV(e.Header,{title:N,showServiceButtons:!(n&&a)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:99,columnNumber:11},void 0),o.jsxDEV(e.Content,{$css:{marginBlock:b},children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:100,columnNumber:11},void 0),M??(g&&o.jsxDEV(e.Footer,{rightBlock:o.jsxDEV(R,{mainAxisGap:f.x4,children:[r&&o.jsxDEV(p,{view:"secondary",size:"s",...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:109,columnNumber:23},void 0),t&&o.jsxDEV(p,{view:"accent",size:"s",...t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:112,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:107,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:105,columnNumber:15},void 0))]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:98,columnNumber:9},void 0),n&&a&&o.jsxDEV(o.Fragment,{children:[o.jsxDEV(W,{hasBackground:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:121,columnNumber:13},void 0),o.jsxDEV(I,{children:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:122,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:120,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx",lineNumber:97,columnNumber:7},void 0)}),q=e.Footer,d=Object.assign(P,{Footer:q});d.displayName="ModalDFConfirmation";try{d.displayName="ModalDFConfirmation",d.__docgenInfo={description:"",displayName:"ModalDFConfirmation",props:{}}}catch{}export{d as M,q as a};
