import{j as o,r as d}from"./react-DNGZQ4GM.js";import{B as S}from"./Box-C7bn7Vor.js";import{s as a,c as k}from"./constants-v491TRlQ.js";import{cN as q,z as L,y as M,A as Y,r as O}from"./@sddsjs/sdds_finai-QK2Yc4fI.js";import{q as i}from"./styled-components-B2Euy7F3.js";import{l as T,I as W}from"./@salutejs/sdds-finai-CTfk_qKV.js";import{T as j}from"./TypographyWithAutoTooltip-D2KyJ3uF.js";import{e as J,a as K}from"./@salutejs/plasma-icons-CyCZXKIi.js";const c={m:{titleDescriptionGap:a.x2,sectionInnerGap:a.x4,sectionGap:a.x6,contentPaddingY:a.x6,contentPaddingX:"14px"},s:{titleDescriptionGap:a.x1,sectionInnerGap:a.x4,sectionGap:a.x4,contentPaddingY:a.x4,contentPaddingX:"10px"}},f={bg:()=>Y,radius:()=>k.l,titleColor:()=>L,descriptionColor:()=>M,shadow:()=>q},Q=i(T)`
  &.popover-root {
    padding: 0;
    border-radius: 10px;
    box-shadow: ${f.shadow};
  }
`,U=i.div`
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
`,Z=i(S)`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'content actions'
    'bottom bottom';
  align-items: start;
  column-gap: ${({$size:e})=>c[e].sectionInnerGap};
`,ee=i.div`
  grid-area: content;
  min-width: 0;
`,te=i.div`
  color: ${f.titleColor};
  min-width: 0;
`,ue=i.div`
  margin-top: ${({$size:e})=>c[e].titleDescriptionGap};
  color: ${f.descriptionColor};
  min-width: 0;
`,oe=i.div`
  grid-area: actions;
  display: inline-flex;
  align-items: center;
  column-gap: ${({$size:e})=>c[e].sectionInnerGap};
`,ne=i.div`
  grid-area: bottom;
  margin-top: ${({$size:e})=>c[e].sectionInnerGap};
`,re=i(S)`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
`,ie=i(S)`
  flex-shrink: 0;
  min-width: 0;
`;function v({children:e,...t}){return o.jsx(re,{...t,children:e})}try{v.displayName="Body",v.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function D({children:e,...t}){return o.jsx(ie,{...t,children:e})}try{D.displayName="Footer",D.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const A=d.createContext({onClose:null,size:"m"}),se=()=>d.useContext(A);function E({title:e,description:t,bottomBlock:u,showCloseButton:n=!0,onClose:s,...l}){const{onClose:p,size:r}=se(),h=s??p,y=n&&!!h,x=r==="s"?"BodyXS":"BodyM",C=r==="s"?"BodyXXS":"BodyXS",B=r==="s"?"xxs":"xs",_="xs",m=typeof t=="string"||typeof t=="number";return o.jsxs(Z,{$size:r,...l,children:[o.jsxs(ee,{children:[e&&o.jsx(te,{children:o.jsx(j,{variant:x,bold:!0,lines:2,tooltipText:typeof e=="string"?e:void 0,children:e})}),t&&o.jsx(ue,{$size:r,children:m?o.jsx(j,{variant:C,lines:2,tooltipText:t,children:t}):t})]}),y&&o.jsx(oe,{$size:r,children:o.jsx(W,{onClick:h,size:B,view:"secondary",pin:"circle-circle",title:"Закрыть",children:o.jsx(J,{size:_})})}),u&&o.jsx(ne,{$size:r,children:u})]})}try{E.displayName="Header",E.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},bottomBlock:{defaultValue:null,description:`Нижний блок header на всю ширину.
Удобен для кастомных слотов, фильтров, тегов и другого дополнительного контента.`,name:"bottomBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopoverDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const F="s",R=["top-left","top-right","bottom-left","bottom-right"],ae=e=>{switch(e){case"top-end":return"top-left";case"top":case"top-start":return"top-right";case"bottom-end":return"bottom-left";case"bottom":case"bottom-start":case void 0:return"bottom-right";case"left-end":return"top-left";case"left":case"left-start":return"bottom-left";case"right-end":return"top-right";case"right":case"right-start":return"bottom-right";default:return"bottom-right"}},$=e=>[e],g=(e,t=F)=>{const u={};return e.includes("left")&&(u.transform="scaleX(-1)"),e.includes("top")&&(u.transform=u.transform?"scale(-1, -1)":"scaleY(-1)"),o.jsx(K,{color:O,size:t,style:u})},N=(e,t)=>({topLeft:(e==null?void 0:e.topLeft)||g("top-left",t),topRight:(e==null?void 0:e.topRight)||g("top-right",t),bottomLeft:(e==null?void 0:e.bottomLeft)||g("bottom-left",t),bottomRight:(e==null?void 0:e.bottomRight)||g("bottom-right",t)}),z=e=>({directions:$(e),icons:N(void 0,F),hiddenIcons:R.filter(t=>t!==e),minWidth:240,minHeight:120,iconSize:F}),de=(e,t)=>{if(!e)return e;if(e===!0)return z(t);const u=e,n=z(t),s=u.directions??n.directions??$(t),l=u.hiddenIcons??(u.directions?R.filter(p=>!s.includes(p)):n.hiddenIcons);return{...n,...u,directions:s,icons:N(u.icons,u.iconSize),hiddenIcons:l,iconSize:u.iconSize??n.iconSize}},ce=(e,t)=>de(e,ae(t)),le=d.forwardRef(({children:e,opened:t,defaultOpened:u=!1,onToggle:n,size:s="m",placement:l,hasTail:p=!0,resizable:r,target:h,...y},x)=>{const[C,B]=d.useState(u),_=t===void 0?C:t,m=d.useCallback(w=>{t===void 0&&B(w),n==null||n(w)},[n,t]),G=d.useCallback(()=>{m(!1)},[m]),b=l??"bottom",H=d.useMemo(()=>ce(r,b),[r,b]),P=t===void 0||n?G:null,V=d.useMemo(()=>({onClose:P,size:s}),[P,s]),X=o.jsx(U,{$size:s,children:e});return o.jsx(A.Provider,{value:V,children:o.jsx(Q,{...y,ref:x,target:h,opened:_,onToggle:m,size:s,placement:b,resizable:H,hasTail:p,children:X})})}),I=Object.assign(le,{Header:E,Body:v,Footer:D});I.displayName="PopoverDF";try{I.displayName="PopoverDF",I.__docgenInfo={description:"",displayName:"PopoverDF",props:{}}}catch{}export{I as P};
