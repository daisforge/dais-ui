import{d as t,r as d}from"./react-D2T61mpp.js";import{B}from"./Box-Vq8Q3-WK.js";import{s as a,c as X}from"./constants-B3b49qmU.js";import{aH as q,x as L,w as M,y as Y,p as O}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as r}from"./styled-components-DRZWVImu.js";import{z as T,I as W}from"./@salutejs/sdds-finai-DEWlHYGQ.js";import{T as H}from"./AnalyticalWidget-CEnZM3OP.js";import{f6 as J,a as K}from"./@salutejs/plasma-icons-CVXIcC6c.js";const c={m:{titleDescriptionGap:a.x2,sectionInnerGap:a.x4,sectionGap:a.x6,contentPaddingY:a.x6,contentPaddingX:"14px"},s:{titleDescriptionGap:a.x1,sectionInnerGap:a.x4,sectionGap:a.x4,contentPaddingY:a.x4,contentPaddingX:"10px"}},f={bg:()=>Y,radius:()=>X.l,titleColor:()=>L,descriptionColor:()=>M,shadow:()=>q},Q=r(T)`
  &.popover-root {
    padding: 0;
    border-radius: 10px;
    box-shadow: ${f.shadow};
  }
`,U=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({$size:e})=>c[e].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({$size:e})=>`${c[e].contentPaddingY} ${c[e].contentPaddingX}`};
  background: ${f.bg};
  border-radius: ${f.radius};
  overflow: hidden;
`,Z=r(B)`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'content actions'
    'bottom bottom';
  align-items: start;
  column-gap: ${({$size:e})=>c[e].sectionInnerGap};
`,ee=r.div`
  grid-area: content;
  min-width: 0;
`,oe=r.div`
  color: ${f.titleColor};
  min-width: 0;
`,ue=r.div`
  margin-top: ${({$size:e})=>c[e].titleDescriptionGap};
  color: ${f.descriptionColor};
  min-width: 0;
`,te=r.div`
  grid-area: actions;
  display: inline-flex;
  align-items: center;
  column-gap: ${({$size:e})=>c[e].sectionInnerGap};
`,ie=r.div`
  grid-area: bottom;
  margin-top: ${({$size:e})=>c[e].sectionInnerGap};
`,ne=r(B)`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
`,re=r(B)`
  flex-shrink: 0;
  min-width: 0;
`;function k({children:e,...o}){return t.jsxDEV(ne,{...o,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Body.tsx",lineNumber:5,columnNumber:10},this)}try{k.displayName="Body",k.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function E({children:e,...o}){return t.jsxDEV(re,{...o,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Footer.tsx",lineNumber:5,columnNumber:10},this)}try{E.displayName="Footer",E.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const I=d.createContext({onClose:null,size:"m"}),se=()=>d.useContext(I);function C({title:e,description:o,bottomBlock:u,showCloseButton:i=!0,onClose:s,...l}){const{onClose:m,size:n}=se(),h=s??m,v=i&&!!h,D=n==="s"?"BodyXS":"BodyM",b=n==="s"?"BodyXXS":"BodyXS",x=n==="s"?"xxs":"xs",N="xs",p=typeof o=="string"||typeof o=="number";return t.jsxDEV(Z,{$size:n,...l,children:[t.jsxDEV(ee,{children:[e&&t.jsxDEV(oe,{children:t.jsxDEV(H,{variant:D,bold:!0,lines:2,tooltipText:typeof e=="string"?e:void 0,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:39,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:38,columnNumber:11},this),o&&t.jsxDEV(ue,{$size:n,children:p?t.jsxDEV(H,{variant:b,lines:2,tooltipText:o,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:52,columnNumber:15},this):o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:50,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:36,columnNumber:7},this),v&&t.jsxDEV(te,{$size:n,children:t.jsxDEV(W,{onClick:h,size:x,view:"secondary",pin:"circle-circle",title:"Закрыть",children:t.jsxDEV(J,{size:N},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:75,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:68,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:67,columnNumber:9},this),u&&t.jsxDEV(ie,{$size:n,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:81,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/components/Header.tsx",lineNumber:35,columnNumber:5},this)}try{C.displayName="Header",C.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},bottomBlock:{defaultValue:null,description:`Нижний блок header на всю ширину.
Удобен для кастомных слотов, фильтров, тегов и другого дополнительного контента.`,name:"bottomBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopoverDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const F="s",S=["top-left","top-right","bottom-left","bottom-right"],ae=e=>{switch(e){case"top-end":return"top-left";case"top":case"top-start":return"top-right";case"bottom-end":return"bottom-left";case"bottom":case"bottom-start":case void 0:return"bottom-right";case"left-end":return"top-left";case"left":case"left-start":return"bottom-left";case"right-end":return"top-right";case"right":case"right-start":return"bottom-right";default:return"bottom-right"}},z=e=>[e],g=(e,o=F)=>{const u={};return e.includes("left")&&(u.transform="scaleX(-1)"),e.includes("top")&&(u.transform=u.transform?"scale(-1, -1)":"scaleY(-1)"),t.jsxDEV(K,{color:O,size:o,style:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/utils.tsx",lineNumber:74,columnNumber:5},void 0)},j=(e,o)=>({topLeft:(e==null?void 0:e.topLeft)||g("top-left",o),topRight:(e==null?void 0:e.topRight)||g("top-right",o),bottomLeft:(e==null?void 0:e.bottomLeft)||g("bottom-left",o),bottomRight:(e==null?void 0:e.bottomRight)||g("bottom-right",o)}),V=e=>({directions:z(e),icons:j(void 0,F),hiddenIcons:S.filter(o=>o!==e),minWidth:240,minHeight:120,iconSize:F}),de=(e,o)=>{if(!e)return e;if(e===!0)return V(o);const u=e,i=V(o),s=u.directions??i.directions??z(o),l=u.hiddenIcons??(u.directions?S.filter(m=>!s.includes(m)):i.hiddenIcons);return{...i,...u,directions:s,icons:j(u.icons,u.iconSize),hiddenIcons:l,iconSize:u.iconSize??i.iconSize}},ce=(e,o)=>de(e,ae(o)),le=d.forwardRef(({children:e,opened:o,defaultOpened:u=!1,onToggle:i,size:s="m",placement:l,hasTail:m=!0,resizable:n,target:h,...v},D)=>{const[b,x]=d.useState(u),N=o===void 0?b:o,p=d.useCallback(_=>{o===void 0&&x(_),i==null||i(_)},[i,o]),R=d.useCallback(()=>{p(!1)},[p]),y=l??"bottom",A=d.useMemo(()=>ce(n,y),[n,y]),w=o===void 0||i?R:null,$=d.useMemo(()=>({onClose:w,size:s}),[w,s]),G=t.jsxDEV(U,{$size:s,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/PopoverDF.tsx",lineNumber:65,columnNumber:21},void 0);return t.jsxDEV(I.Provider,{value:$,children:t.jsxDEV(Q,{...v,ref:D,target:h,opened:N,onToggle:p,size:s,placement:y,resizable:A,hasTail:m,children:G},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/PopoverDF.tsx",lineNumber:69,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopoverDF/PopoverDF.tsx",lineNumber:68,columnNumber:7},void 0)}),P=Object.assign(le,{Header:C,Body:k,Footer:E});P.displayName="PopoverDF";try{P.displayName="PopoverDF",P.__docgenInfo={description:"",displayName:"PopoverDF",props:{}}}catch{}export{P};
