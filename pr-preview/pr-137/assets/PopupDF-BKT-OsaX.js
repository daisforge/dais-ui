import{j as t,r as a}from"./react-CAOzMBF_.js";import{B as v}from"./Box-DvvYTz20.js";import{s as i,c as $}from"./constants-DatVHdkd.js";import{A as j,aK as z,z as P,y as I}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as o}from"./styled-components-DCFsnh-i.js";import{q as N,I as S}from"./@salutejs/sdds-finai-CKhMjg07.js";import{bo as R}from"./vendor-DmWczWMC.js";import{T as w}from"./AiAgentPopup-zRx4ytCb.js";import{eZ as T,fa as V}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{b as q}from"./sharedUtilsResizable-BjlCs3KG.js";const s={l:{titleDescriptionGap:i.x1,sectionInnerGap:i.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:i.x8,rightBlockToCloseGap:i.x6,rightBlockMaxHeight:"32px"},m:{titleDescriptionGap:i.x1,sectionInnerGap:i.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:i.x8,rightBlockToCloseGap:i.x6,rightBlockMaxHeight:"32px"},s:{titleDescriptionGap:i.x1,sectionInnerGap:i.x4,sectionGap:"12px",contentPadding:"12px",subHeaderBottomGap:"0",rightBlockGap:i.x8,rightBlockToCloseGap:i.x4,rightBlockMaxHeight:"24px"}},p={bg:()=>j,radius:()=>$.m,shadow:()=>z,titleColor:()=>P,descriptionColor:()=>I},M=o(N)`
  && .${R.root} {
    padding: 0;
  }
`,O=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({$size:u})=>s[u].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({$size:u})=>s[u].contentPadding};
  background: ${p.bg};
  border-radius: ${p.radius};
  box-shadow: ${p.shadow};
  overflow: hidden;
`,W=o(v)`
  flex-shrink: 0;
  min-width: 0;
`,X=o.div`
  display: flex;
  align-items: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
  min-width: 0;
`,K=o.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
`,L=o.div`
  color: ${p.titleColor};
  min-width: 0;
`,Z=o.div`
  margin-top: ${({$size:u})=>s[u].titleDescriptionGap};
  color: ${p.descriptionColor};
  min-width: 0;
`,J=o.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  // Есть rightBlock — зазор до крестика 12/8 по размеру; нет rightBlock —
  // базовый отступ как раньше (s.x4), для ранней обрезки длинного title.
  margin-left: ${({$size:u,$hasRightBlock:e})=>e?s[u].rightBlockToCloseGap:s[u].sectionInnerGap};
  column-gap: ${({$size:u})=>s[u].sectionInnerGap};
`,Q=o.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-left: ${({$size:u})=>s[u].rightBlockGap};
  max-height: ${({$size:u})=>s[u].rightBlockMaxHeight};
  overflow: hidden;
`,U=o.div`
  margin-top: 8px;
  margin-bottom: ${({$size:u})=>s[u].subHeaderBottomGap};
  min-width: 0;
`,Y=o.div`
  flex-shrink: 0;
  margin-right: 12px;
`,u4=o(v)`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,e4=o(v)`
  flex-shrink: 0;
  min-width: 0;
`;function F({children:u,...e}){return t.jsx(u4,{...e,children:u})}try{F.displayName="Body",F.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function b({children:u,...e}){return t.jsx(e4,{...e,children:u})}try{b.displayName="Footer",b.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const G=a.createContext({onClose:null,size:"m"}),t4=()=>a.useContext(G);function _({title:u,description:e,subHeader:h,rightBlock:r,showCloseButton:c=!0,onBackButtonClick:l,onClose:m,...g}){const{onClose:C,size:n}=t4(),x=m??C,f=c&&!!x,E={s:"BodyXS",m:"BodyM",l:"H4"}[n],A=n==="l"?"BodyS":"BodyXS",d=n==="s"?"xxs":"xs",B="xs",y=typeof e=="string"||typeof e=="number",H=!e&&f;return t.jsxs(W,{$size:n,...g,children:[t.jsxs(X,{$size:n,$alignTitleToClose:H,children:[l&&t.jsx(Y,{children:t.jsx(S,{onClick:l,size:d,view:"secondary",pin:"circle-circle",title:"Назад",children:t.jsx(T,{size:B})})}),t.jsxs(K,{$alignTitleToClose:H,children:[u&&t.jsx(L,{children:t.jsx(w,{variant:E,bold:!0,lines:2,tooltipText:typeof u=="string"?u:void 0,children:u})}),e&&t.jsx(Z,{$size:n,children:y?t.jsx(w,{variant:A,lines:2,tooltipText:e,children:e}):e})]}),r&&t.jsx(Q,{$size:n,children:r}),f&&t.jsx(J,{$size:n,$hasRightBlock:!!r,children:t.jsx(S,{onClick:x,size:d,view:"secondary",pin:"circle-circle",title:"Закрыть",children:t.jsx(V,{size:B})})})]}),h&&t.jsx(U,{$size:n,children:h})]})}try{_.displayName="Header",_.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"Кастомный контент, относящийся по смыслу к header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"Кастомный слот в правой части header, слева от крестика закрытия.\nПрижимается к крестику; если контент широкий — «давит» на title/description\n(уходят в многоточие с тултипом). Максимальная высота — как у крестика\n(32px при `size='l'` и `size='m'`, 24px при `size='s'`), ширина не\nограничена.",name:"rightBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка.",name:"onBackButtonClick",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopupDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const o4=u=>{switch(u){case"top-left":case"top":case"left":return"bottom-right";case"top-right":case"right":return"bottom-left";case"bottom-left":case"bottom":return"top-right";case"bottom-right":return"top-left";case"center":case void 0:default:return"bottom-right"}},i4=(u,e)=>q(u,{corner:o4(e),minWidth:240,minHeight:120}),n4=a.forwardRef(({children:u,opened:e,defaultOpened:h=!1,onToggle:r,size:c="m",placement:l="center",resizable:m,...g},C)=>{const[n,x]=a.useState(h),f=e===void 0?n:e,D=a.useCallback(y=>{e===void 0&&x(y),r==null||r(y)},[r,e]),E=a.useCallback(()=>{D(!1)},[D]),A=a.useMemo(()=>i4(m,l),[l,m]),d=e===void 0||r?E:null,B=a.useMemo(()=>({onClose:d,size:c}),[d,c]);return t.jsx(G.Provider,{value:B,children:t.jsx(M,{...g,ref:C,isOpen:!1,opened:f,placement:l,resizable:A,children:t.jsx(O,{$size:c,children:u})})})}),k=Object.assign(n4,{Header:_,Body:F,Footer:b});k.displayName="PopupDF";try{k.displayName="PopupDF",k.__docgenInfo={description:"",displayName:"PopupDF",props:{}}}catch{}export{k as P};
