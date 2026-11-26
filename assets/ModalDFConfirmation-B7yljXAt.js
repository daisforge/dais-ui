import{r,R as M,j as t}from"./react-DYHuXpTF.js";import{c as f,M as e,S as C}from"./ModalDF-CecuEoIW.js";import{s as x}from"./constants-YnncqoDz.js";import{C as b,D,B as S,A as k,G,cR as R,cS as w,cT as z,cU as N}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{q as c}from"./styled-components-DDsYmQNq.js";import{F as $,t as m}from"./@salutejs/sdds-finai-C2CeMSda.js";const g={positive:()=>N,warning:()=>z,info:()=>w,negative:()=>R,default:()=>G},E={positive:k,warning:S,info:D,negative:b},I=c(e)`
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
`,A=r.forwardRef(({content:o,view:a,icon:n,...u},h)=>{const{header:_,body:l,bodyMarginBlock:y,mainButton:i,secondaryButton:s,footer:j}=o??{},v=!!(i||s),F=y??(typeof l=="string"?x.x4:void 0),B=r.Children.map(n,p=>{if(M.isValidElement(p))return r.cloneElement(p,{size:"m",color:a?E[a]:""})});return t.jsxs(I,{ref:h,$view:a,...u,children:[t.jsxs(e.Main,{children:[t.jsx(e.Header,{title:_,showServiceButtons:!(a&&n)}),t.jsx(e.Content,{$css:{marginBlock:F},children:l}),j??(v&&t.jsx(e.Footer,{rightBlock:t.jsxs($,{mainAxisGap:x.x4,children:[s&&t.jsx(m,{view:"secondary",size:"s",...s}),i&&t.jsx(m,{view:"accent",size:"s",...i})]})}))]}),a&&n&&t.jsxs(t.Fragment,{children:[t.jsx(q,{hasBackground:!1}),t.jsx(W,{children:B})]})]})}),H=e.Footer,d=Object.assign(A,{Footer:H});d.displayName="ModalDFConfirmation";try{d.displayName="ModalDFConfirmation",d.__docgenInfo={description:"",displayName:"ModalDFConfirmation",props:{}}}catch{}export{d as M,H as a};
