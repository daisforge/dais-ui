import{r,R as b,j as t}from"./react-CAOzMBF_.js";import{c as f,M as e,S as C}from"./ModalDF-DIfvprhr.js";import{s as x}from"./constants-DatVHdkd.js";import{w as D,x as S,v as _,u as k,A as w,cn as z,co as G,cp as N,cq as R}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as c}from"./styled-components-DCFsnh-i.js";import{F as $,t as m}from"./@salutejs/sdds-finai-CKhMjg07.js";const g={positive:()=>R,warning:()=>N,info:()=>G,negative:()=>z,default:()=>w},E={positive:k,warning:_,info:S,negative:D},H=c(e)`
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
`,I=c.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 35px;
  display: flex;
  justify-content: center;
`,W=c(C)`
  position: absolute;
  top: 16px;
  right: 16px;
`,A=r.forwardRef(({content:o,view:n,icon:a,...u},h)=>{const{header:v,body:l,bodyMarginBlock:y,mainButton:i,secondaryButton:s,footer:j}=o??{},F=!!(i||s),M=y??(typeof l=="string"?x.x4:void 0),B=r.Children.map(a,p=>{if(b.isValidElement(p))return r.cloneElement(p,{size:"m",color:n?E[n]:""})});return t.jsxs(H,{ref:h,$view:n,...u,children:[t.jsxs(e.Main,{children:[t.jsx(e.Header,{title:v,showServiceButtons:!(n&&a)}),t.jsx(e.Content,{$css:{marginBlock:M},children:l}),j??(F&&t.jsx(e.Footer,{rightBlock:t.jsxs($,{mainAxisGap:x.x4,children:[s&&t.jsx(m,{view:"secondary",size:"s",...s}),i&&t.jsx(m,{view:"accent",size:"s",...i})]})}))]}),n&&a&&t.jsxs(t.Fragment,{children:[t.jsx(W,{hasBackground:!1}),t.jsx(I,{children:B})]})]})}),P=e.Footer,d=Object.assign(A,{Footer:P});d.displayName="ModalDFConfirmation";try{d.displayName="ModalDFConfirmation",d.__docgenInfo={description:"",displayName:"ModalDFConfirmation",props:{}}}catch{}export{d as M};
