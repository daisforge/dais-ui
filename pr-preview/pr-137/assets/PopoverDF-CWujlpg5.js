import{j as o,r as d}from"./react-CAOzMBF_.js";import{B as S}from"./Box-DvvYTz20.js";import{s as a,c as k}from"./constants-DatVHdkd.js";import{aK as q,z as L,y as M,A as Y,r as O}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as i}from"./styled-components-DCFsnh-i.js";import{G as T,I as W}from"./@salutejs/sdds-finai-CKhMjg07.js";import{T as j}from"./AiAgentPopup-zRx4ytCb.js";import{fa as K,a as J}from"./@salutejs/plasma-icons-Do5ggeDI.js";const c={m:{titleDescriptionGap:a.x2,sectionInnerGap:a.x4,sectionGap:a.x6,contentPaddingY:a.x6,contentPaddingX:"14px"},s:{titleDescriptionGap:a.x1,sectionInnerGap:a.x4,sectionGap:a.x4,contentPaddingY:a.x4,contentPaddingX:"10px"}},f={bg:()=>Y,radius:()=>k.l,titleColor:()=>L,descriptionColor:()=>M,shadow:()=>q},Q=i(T)`
  &.popover-root {
    padding: 0;
    border-radius: 10px;
    box-shadow: ${f.shadow};
  }
`,U=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({$size:t})=>c[t].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({$size:t})=>`${c[t].contentPaddingY} ${c[t].contentPaddingX}`};
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
  column-gap: ${({$size:t})=>c[t].sectionInnerGap};
`,tt=i.div`
  grid-area: content;
  min-width: 0;
`,et=i.div`
  color: ${f.titleColor};
  min-width: 0;
`,ut=i.div`
  margin-top: ${({$size:t})=>c[t].titleDescriptionGap};
  color: ${f.descriptionColor};
  min-width: 0;
`,ot=i.div`
  grid-area: actions;
  display: inline-flex;
  align-items: center;
  column-gap: ${({$size:t})=>c[t].sectionInnerGap};
`,nt=i.div`
  grid-area: bottom;
  margin-top: ${({$size:t})=>c[t].sectionInnerGap};
`,rt=i(S)`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
`,it=i(S)`
  flex-shrink: 0;
  min-width: 0;
`;function D({children:t,...e}){return o.jsx(rt,{...e,children:t})}try{D.displayName="Body",D.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function _({children:t,...e}){return o.jsx(it,{...e,children:t})}try{_.displayName="Footer",_.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const A=d.createContext({onClose:null,size:"m"}),st=()=>d.useContext(A);function E({title:t,description:e,bottomBlock:u,showCloseButton:n=!0,onClose:s,...l}){const{onClose:p,size:r}=st(),h=s??p,y=n&&!!h,x=r==="s"?"BodyXS":"BodyM",C=r==="s"?"BodyXXS":"BodyXS",B=r==="s"?"xxs":"xs",b="xs",m=typeof e=="string"||typeof e=="number";return o.jsxs(Z,{$size:r,...l,children:[o.jsxs(tt,{children:[t&&o.jsx(et,{children:o.jsx(j,{variant:x,bold:!0,lines:2,tooltipText:typeof t=="string"?t:void 0,children:t})}),e&&o.jsx(ut,{$size:r,children:m?o.jsx(j,{variant:C,lines:2,tooltipText:e,children:e}):e})]}),y&&o.jsx(ot,{$size:r,children:o.jsx(W,{onClick:h,size:B,view:"secondary",pin:"circle-circle",title:"Закрыть",children:o.jsx(K,{size:b})})}),u&&o.jsx(nt,{$size:r,children:u})]})}try{E.displayName="Header",E.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},bottomBlock:{defaultValue:null,description:`Нижний блок header на всю ширину.
Удобен для кастомных слотов, фильтров, тегов и другого дополнительного контента.`,name:"bottomBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopoverDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const F="s",R=["top-left","top-right","bottom-left","bottom-right"],at=t=>{switch(t){case"top-end":return"top-left";case"top":case"top-start":return"top-right";case"bottom-end":return"bottom-left";case"bottom":case"bottom-start":case void 0:return"bottom-right";case"left-end":return"top-left";case"left":case"left-start":return"bottom-left";case"right-end":return"top-right";case"right":case"right-start":return"bottom-right";default:return"bottom-right"}},$=t=>[t],g=(t,e=F)=>{const u={};return t.includes("left")&&(u.transform="scaleX(-1)"),t.includes("top")&&(u.transform=u.transform?"scale(-1, -1)":"scaleY(-1)"),o.jsx(J,{color:O,size:e,style:u})},H=(t,e)=>({topLeft:(t==null?void 0:t.topLeft)||g("top-left",e),topRight:(t==null?void 0:t.topRight)||g("top-right",e),bottomLeft:(t==null?void 0:t.bottomLeft)||g("bottom-left",e),bottomRight:(t==null?void 0:t.bottomRight)||g("bottom-right",e)}),z=t=>({directions:$(t),icons:H(void 0,F),hiddenIcons:R.filter(e=>e!==t),minWidth:240,minHeight:120,iconSize:F}),dt=(t,e)=>{if(!t)return t;if(t===!0)return z(e);const u=t,n=z(e),s=u.directions??n.directions??$(e),l=u.hiddenIcons??(u.directions?R.filter(p=>!s.includes(p)):n.hiddenIcons);return{...n,...u,directions:s,icons:H(u.icons,u.iconSize),hiddenIcons:l,iconSize:u.iconSize??n.iconSize}},ct=(t,e)=>dt(t,at(e)),lt=d.forwardRef(({children:t,opened:e,defaultOpened:u=!1,onToggle:n,size:s="m",placement:l,hasTail:p=!0,resizable:r,target:h,...y},x)=>{const[C,B]=d.useState(u),b=e===void 0?C:e,m=d.useCallback(w=>{e===void 0&&B(w),n==null||n(w)},[n,e]),G=d.useCallback(()=>{m(!1)},[m]),v=l??"bottom",N=d.useMemo(()=>ct(r,v),[r,v]),P=e===void 0||n?G:null,V=d.useMemo(()=>({onClose:P,size:s}),[P,s]),X=o.jsx(U,{$size:s,children:t});return o.jsx(A.Provider,{value:V,children:o.jsx(Q,{...y,ref:x,target:h,opened:b,onToggle:m,size:s,placement:v,resizable:N,hasTail:p,children:X})})}),I=Object.assign(lt,{Header:E,Body:D,Footer:_});I.displayName="PopoverDF";try{I.displayName="PopoverDF",I.__docgenInfo={description:"",displayName:"PopoverDF",props:{}}}catch{}export{I as P};
