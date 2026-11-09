import{r,R as M,j as t}from"./react-CAOzMBF_.js";import{c as f,M as e,S as C}from"./ModalDF-DGdz2a6t.js";import{s as x}from"./constants-ChwOYBdp.js";import{w as b,x as D,v as S,u as k,A as w,cB as z,cC as E,cD as G,cE as N}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as c}from"./styled-components-BAnxJVQm.js";import{F as R,t as m}from"./@salutejs/sdds-finai-CrMFu5No.js";const g={positive:()=>N,warning:()=>G,info:()=>E,negative:()=>z,default:()=>w},$={positive:k,warning:S,info:D,negative:b},I=c(e)`
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
`,q=c(C)`
  position: absolute;
  top: 16px;
  right: 16px;
`,A=r.forwardRef(({content:o,view:n,icon:a,...u},h)=>{const{header:_,body:l,bodyMarginBlock:v,mainButton:i,secondaryButton:s,footer:y}=o??{},j=!!(i||s),F=v??(typeof l=="string"?x.x4:void 0),B=r.Children.map(a,p=>{if(M.isValidElement(p))return r.cloneElement(p,{size:"m",color:n?$[n]:""})});return t.jsxs(I,{ref:h,$view:n,...u,children:[t.jsxs(e.Main,{children:[t.jsx(e.Header,{title:_,showServiceButtons:!(n&&a)}),t.jsx(e.Content,{$css:{marginBlock:F},children:l}),y??(j&&t.jsx(e.Footer,{rightBlock:t.jsxs(R,{mainAxisGap:x.x4,children:[s&&t.jsx(m,{view:"secondary",size:"s",...s}),i&&t.jsx(m,{view:"accent",size:"s",...i})]})}))]}),n&&a&&t.jsxs(t.Fragment,{children:[t.jsx(q,{hasBackground:!1}),t.jsx(W,{children:B})]})]})}),H=e.Footer,d=Object.assign(A,{Footer:H});d.displayName="ModalDFConfirmation";try{d.displayName="ModalDFConfirmation",d.__docgenInfo={description:"",displayName:"ModalDFConfirmation",props:{}}}catch{}export{d as M};
