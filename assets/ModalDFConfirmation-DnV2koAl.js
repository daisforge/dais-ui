import{r,R as M,j as t}from"./react-DNGZQ4GM.js";import{c as f,M as e,S as b}from"./ModalDF-BPlf-7dJ.js";import{s as x}from"./constants-DHlp9b4t.js";import{w as C,x as D,v as S,u as k,A as w,cz as z,cA as G,cB as N,cC as R}from"./@sddsjs/sdds_finai-DkwmD3gE.js";import{q as c}from"./styled-components-D_Edv4_h.js";import{F as $,b as m}from"./@salutejs/sdds-finai-BuI7JyX1.js";const g={positive:()=>R,warning:()=>N,info:()=>G,negative:()=>z,default:()=>w},E={positive:k,warning:S,info:D,negative:C},I=c(e)`
  & .${f.container} {
    position: relative;
    overflow: hidden;
    padding-top: ${({$view:o})=>o?"76px":"0"};
  }

  & .${f.container}::after {
    content: '';
    position: absolute;
    z-index: -2;
    height: 804px;
    width: 804px;
    top: -610px;
    left: calc(50% - 402px);
    background: ${({$view:o})=>o?g[o]:g.default};
  }
`,W=c.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 35px;
  display: flex;
  justify-content: center;
`,A=c(b)`
  position: absolute;
  top: 16px;
  right: 16px;
`,q=r.forwardRef(({content:o,view:n,icon:a,...u},h)=>{const{header:_,body:l,bodyMarginBlock:v,mainButton:i,secondaryButton:s,footer:y}=o??{},j=!!(i||s),F=v??(typeof l=="string"?x.x4:void 0),B=r.Children.map(a,p=>{if(M.isValidElement(p))return r.cloneElement(p,{size:"m",color:n?E[n]:""})});return t.jsxs(I,{ref:h,$view:n,...u,children:[t.jsxs(e.Main,{children:[t.jsx(e.Header,{title:_,showServiceButtons:!(n&&a)}),t.jsx(e.Content,{$css:{marginBlock:F},children:l}),y??(j&&t.jsx(e.Footer,{rightBlock:t.jsxs($,{mainAxisGap:x.x4,children:[s&&t.jsx(m,{view:"secondary",size:"s",...s}),i&&t.jsx(m,{view:"accent",size:"s",...i})]})}))]}),n&&a&&t.jsxs(t.Fragment,{children:[t.jsx(A,{hasBackground:!1}),t.jsx(W,{children:B})]})]})}),H=e.Footer,d=Object.assign(q,{Footer:H});d.displayName="ModalDFConfirmation";try{d.displayName="ModalDFConfirmation",d.__docgenInfo={description:"",displayName:"ModalDFConfirmation",props:{}}}catch{}export{d as M};
