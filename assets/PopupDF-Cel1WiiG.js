import{j as t,r as a}from"./react-CAOzMBF_.js";import{B as v}from"./Box-DBguVV_s.js";import{s as i,c as $}from"./constants-ChwOYBdp.js";import{A as j,cN as z,z as P,y as I}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as o}from"./styled-components-BAnxJVQm.js";import{q as N,I as w}from"./@salutejs/sdds-finai-CrMFu5No.js";import{bp as R}from"./vendor-CvBXOjQ8.js";import{T as G}from"./AiAgentPopup-DrReb3Ou.js";import{eZ as T,fa as V}from"./@salutejs/plasma-icons-DBF9uERs.js";import{b as q}from"./sharedUtilsResizable-Bp8tiGu6.js";const s={l:{titleDescriptionGap:i.x1,sectionInnerGap:i.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:i.x8,rightBlockToCloseGap:i.x6,rightBlockMaxHeight:"32px"},m:{titleDescriptionGap:i.x1,sectionInnerGap:i.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:i.x8,rightBlockToCloseGap:i.x6,rightBlockMaxHeight:"32px"},s:{titleDescriptionGap:i.x1,sectionInnerGap:i.x4,sectionGap:"12px",contentPadding:"12px",subHeaderBottomGap:"0",rightBlockGap:i.x8,rightBlockToCloseGap:i.x4,rightBlockMaxHeight:"24px"}},p={bg:()=>j,radius:()=>$.m,shadow:()=>z,titleColor:()=>P,descriptionColor:()=>I},M=o(N)`
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
`,L=o.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
`,Z=o.div`
  color: ${p.titleColor};
  min-width: 0;
`,J=o.div`
  margin-top: ${({$size:u})=>s[u].titleDescriptionGap};
  color: ${p.descriptionColor};
  min-width: 0;
`,K=o.div`
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
`;function F({children:u,...e}){return t.jsx(u4,{...e,children:u})}try{F.displayName="Body",F.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function _({children:u,...e}){return t.jsx(e4,{...e,children:u})}try{_.displayName="Footer",_.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const H=a.createContext({onClose:null,size:"m"}),t4=()=>a.useContext(H);function b({title:u,description:e,subHeader:h,rightBlock:r,showCloseButton:c=!0,onBackButtonClick:l,onClose:m,...g}){const{onClose:C,size:n}=t4(),x=m??C,f=c&&!!x,E={s:"BodyXS",m:"BodyM",l:"H4"}[n],A=n==="l"?"BodyS":"BodyXS",d=n==="s"?"xxs":"xs",B="xs",y=typeof e=="string"||typeof e=="number",S=!e&&f;return t.jsxs(W,{$size:n,...g,children:[t.jsxs(X,{$size:n,$alignTitleToClose:S,children:[l&&t.jsx(Y,{children:t.jsx(w,{onClick:l,size:d,view:"secondary",pin:"circle-circle",title:"Назад",children:t.jsx(T,{size:B})})}),t.jsxs(L,{$alignTitleToClose:S,children:[u&&t.jsx(Z,{children:t.jsx(G,{variant:E,bold:!0,lines:2,tooltipText:typeof u=="string"?u:void 0,children:u})}),e&&t.jsx(J,{$size:n,children:y?t.jsx(G,{variant:A,lines:2,tooltipText:e,children:e}):e})]}),r&&t.jsx(Q,{$size:n,children:r}),f&&t.jsx(K,{$size:n,$hasRightBlock:!!r,children:t.jsx(w,{onClick:x,size:d,view:"secondary",pin:"circle-circle",title:"Закрыть",children:t.jsx(V,{size:B})})})]}),h&&t.jsx(U,{$size:n,children:h})]})}try{b.displayName="Header",b.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"Кастомный контент, относящийся по смыслу к header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"Кастомный слот в правой части header, слева от крестика закрытия.\nПрижимается к крестику; если контент широкий — «давит» на title/description\n(уходят в многоточие с тултипом). Максимальная высота — как у крестика\n(32px при `size='l'` и `size='m'`, 24px при `size='s'`), ширина не\nограничена.",name:"rightBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка.",name:"onBackButtonClick",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopupDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const o4=u=>{switch(u){case"top-left":case"top":case"left":return"bottom-right";case"top-right":case"right":return"bottom-left";case"bottom-left":case"bottom":return"top-right";case"bottom-right":return"top-left";case"center":case void 0:default:return"bottom-right"}},i4=(u,e)=>q(u,{corner:o4(e),minWidth:240,minHeight:120}),n4=a.forwardRef(({children:u,opened:e,defaultOpened:h=!1,onToggle:r,size:c="m",placement:l="center",resizable:m,...g},C)=>{const[n,x]=a.useState(h),f=e===void 0?n:e,D=a.useCallback(y=>{e===void 0&&x(y),r==null||r(y)},[r,e]),E=a.useCallback(()=>{D(!1)},[D]),A=a.useMemo(()=>i4(m,l),[l,m]),d=e===void 0||r?E:null,B=a.useMemo(()=>({onClose:d,size:c}),[d,c]);return t.jsx(H.Provider,{value:B,children:t.jsx(M,{...g,ref:C,isOpen:!1,opened:f,placement:l,resizable:A,children:t.jsx(O,{$size:c,children:u})})})}),k=Object.assign(n4,{Header:b,Body:F,Footer:_});k.displayName="PopupDF";try{k.displayName="PopupDF",k.__docgenInfo={description:"",displayName:"PopupDF",props:{}}}catch{}export{k as P};
