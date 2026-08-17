import{d as o,r as p}from"./react-D2T61mpp.js";import{B as H}from"./Box-Cnr41X_W.js";import{s as d,c as z}from"./constants-B3b49qmU.js";import{y as I,aH as R,x as G,w as T,p as q}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as n}from"./styled-components-Dv4eU0M2.js";import{bD as M}from"./vendor-DAeWXVFZ.js";import{a5 as L,I as A}from"./@salutejs/sdds-finai-BgKKvavs.js";import{T as V}from"./AnalyticalWidget-DSQoVeSt.js";import{eV as O,f6 as W,a as X}from"./@salutejs/plasma-icons-DT_ZNXTc.js";const l={m:{titleDescriptionGap:d.x2,sectionInnerGap:d.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:d.x3,rightBlockToCloseGap:d.x6,rightBlockMaxHeight:"32px"},s:{titleDescriptionGap:d.x1,sectionInnerGap:d.x4,sectionGap:"12px",contentPadding:"12px",subHeaderBottomGap:"0",rightBlockGap:d.x2,rightBlockToCloseGap:d.x4,rightBlockMaxHeight:"24px"}},g={bg:()=>I,radius:()=>z.m,shadow:()=>R,titleColor:()=>G,descriptionColor:()=>T},Y=n(L)`
  && .${M.root} {
    padding: 0;
  }
`,J=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({$size:u})=>l[u].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({$size:u})=>l[u].contentPadding};
  background: ${g.bg};
  border-radius: ${g.radius};
  box-shadow: ${g.shadow};
  overflow: hidden;
`,K=n(H)`
  flex-shrink: 0;
  min-width: 0;
`,Q=n.div`
  display: flex;
  align-items: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
  min-width: 0;
`,U=n.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
`,Z=n.div`
  color: ${g.titleColor};
  min-width: 0;
`,uu=n.div`
  margin-top: ${({$size:u})=>l[u].titleDescriptionGap};
  color: ${g.descriptionColor};
  min-width: 0;
`,eu=n.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  // Есть rightBlock — зазор до крестика 12/8 по размеру; нет rightBlock —
  // базовый отступ как раньше (s.x4), для ранней обрезки длинного title.
  margin-left: ${({$size:u,$hasRightBlock:e})=>e?l[u].rightBlockToCloseGap:l[u].sectionInnerGap};
  column-gap: ${({$size:u})=>l[u].sectionInnerGap};
`,ou=n.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-left: ${({$size:u})=>l[u].rightBlockGap};
  max-height: ${({$size:u})=>l[u].rightBlockMaxHeight};
  overflow: hidden;
`,tu=n.div`
  margin-top: 8px;
  margin-bottom: ${({$size:u})=>l[u].subHeaderBottomGap};
  min-width: 0;
`,iu=n.div`
  flex-shrink: 0;
  margin-right: 12px;
`,nu=n(H)`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,su=n(H)`
  flex-shrink: 0;
  min-width: 0;
`;function C({children:u,...e}){return o.jsxDEV(nu,{...e,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Body.tsx",lineNumber:5,columnNumber:10},this)}try{C.displayName="Body",C.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function E({children:u,...e}){return o.jsxDEV(su,{...e,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Footer.tsx",lineNumber:5,columnNumber:10},this)}try{E.displayName="Footer",E.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const j=p.createContext({onClose:null,size:"m"}),ru=()=>p.useContext(j);function v({title:u,description:e,subHeader:t,rightBlock:s,showCloseButton:i=!0,onBackButtonClick:a,onClose:m,...h}){const{onClose:c,size:r}=ru(),k=m??c,D=i&&!!k,b=r==="s"?"BodyXS":"BodyM",y="BodyXS",N=r==="s"?"xxs":"xs",f="xs",F=typeof e=="string"||typeof e=="number",x=!e&&D;return o.jsxDEV(K,{$size:r,...h,children:[o.jsxDEV(Q,{$size:r,$alignTitleToClose:x,children:[a&&o.jsxDEV(iu,{children:o.jsxDEV(A,{onClick:a,size:N,view:"secondary",pin:"circle-circle",title:"Назад",children:o.jsxDEV(O,{size:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:52,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:45,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:44,columnNumber:11},this),o.jsxDEV(U,{$alignTitleToClose:x,children:[u&&o.jsxDEV(Z,{children:o.jsxDEV(V,{variant:b,bold:!0,lines:2,tooltipText:typeof u=="string"?u:void 0,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:60,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:59,columnNumber:13},this),e&&o.jsxDEV(uu,{$size:r,children:F?o.jsxDEV(V,{variant:y,lines:2,tooltipText:e,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:73,columnNumber:17},this):e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:71,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:57,columnNumber:9},this),s&&o.jsxDEV(ou,{$size:r,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:88,columnNumber:11},this),D&&o.jsxDEV(eu,{$size:r,$hasRightBlock:!!s,children:o.jsxDEV(A,{onClick:k,size:N,view:"secondary",pin:"circle-circle",title:"Закрыть",children:o.jsxDEV(W,{size:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:102,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:95,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:94,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:42,columnNumber:7},this),t&&o.jsxDEV(tu,{$size:r,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:109,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:41,columnNumber:5},this)}try{v.displayName="Header",v.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"Кастомный контент, относящийся по смыслу к header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"Кастомный слот в правой части header, слева от крестика закрытия.\nПрижимается к крестику; если контент широкий — «давит» на title/description\n(уходят в многоточие с тултипом). Максимальная высота — как у крестика\n(32px при `size='m'`, 24px при `size='s'`), ширина не ограничена.",name:"rightBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка.",name:"onBackButtonClick",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopupDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const w="s",_=["top-left","top-right","bottom-left","bottom-right"],au=u=>{switch(u){case"top-left":case"top":case"left":return"bottom-right";case"top-right":case"right":return"bottom-left";case"bottom-left":case"bottom":return"top-right";case"bottom-right":return"top-left";case"center":case void 0:default:return"bottom-right"}},S=u=>[u],B=(u,e=w)=>{const t={};return u.includes("left")&&(t.transform="scaleX(-1)"),u.includes("top")&&(t.transform=t.transform?"scale(-1, -1)":"scaleY(-1)"),o.jsxDEV(X,{color:q,size:e,style:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/utils.tsx",lineNumber:62,columnNumber:5},void 0)},$=(u,e)=>({topLeft:(u==null?void 0:u.topLeft)||B("top-left",e),topRight:(u==null?void 0:u.topRight)||B("top-right",e),bottomLeft:(u==null?void 0:u.bottomLeft)||B("bottom-left",e),bottomRight:(u==null?void 0:u.bottomRight)||B("bottom-right",e)}),lu=(u,e)=>{if(!u)return u;const t=au(e),s=c=>({directions:S(c),icons:$(void 0,w),hiddenIcons:_.filter(r=>r!==c),minWidth:240,minHeight:120,iconSize:w});if(u===!0)return s(t);const i=u,a=s(t),m=i.directions??a.directions??S(t),h=i.hiddenIcons??(i.directions?_.filter(c=>!m.includes(c)):a.hiddenIcons);return{...a,...i,directions:m,icons:$(i.icons,i.iconSize),hiddenIcons:h,iconSize:i.iconSize??a.iconSize}},cu=p.forwardRef(({children:u,opened:e,defaultOpened:t=!1,onToggle:s,size:i="m",placement:a="center",resizable:m,...h},c)=>{const[r,k]=p.useState(t),D=e===void 0?r:e,b=p.useCallback(x=>{e===void 0&&k(x),s==null||s(x)},[s,e]),y=p.useCallback(()=>{b(!1)},[b]),N=p.useMemo(()=>lu(m,a),[a,m]),f=e===void 0||s?y:null,F=p.useMemo(()=>({onClose:f,size:i}),[f,i]);return o.jsxDEV(j.Provider,{value:F,children:o.jsxDEV(Y,{...h,ref:c,isOpen:!1,opened:D,placement:a,resizable:N,children:o.jsxDEV(J,{$size:i,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:66,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:58,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:57,columnNumber:7},void 0)}),P=Object.assign(cu,{Header:v,Body:C,Footer:E});P.displayName="PopupDF";try{P.displayName="PopupDF",P.__docgenInfo={description:"",displayName:"PopupDF",props:{}}}catch{}export{P};
