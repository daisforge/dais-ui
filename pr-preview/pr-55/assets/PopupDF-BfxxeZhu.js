import{d as o,r as p}from"./react-D2T61mpp.js";import{B as H}from"./Box-jzJQgHn_.js";import{s as a,c as j}from"./constants-DM2G2kGu.js";import{y as I,aH as R,x as T,w as M,p as q}from"./@salutejs/sdds-themes-CZ516YZq.js";import{H as s}from"./styled-components-BMg9-w0p.js";import{bH as L}from"./vendor-F9ObjaJa.js";import{a6 as O,I as V}from"./@salutejs/sdds-finai-JjQwskGp.js";import{T as _}from"./AnalyticalWidget-DDWbMLm3.js";import{eZ as W,fa as X,a as Y}from"./@salutejs/plasma-icons-0EXslhhn.js";const c={l:{titleDescriptionGap:a.x1,sectionInnerGap:a.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:a.x8,rightBlockToCloseGap:a.x6,rightBlockMaxHeight:"32px"},m:{titleDescriptionGap:a.x1,sectionInnerGap:a.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:a.x8,rightBlockToCloseGap:a.x6,rightBlockMaxHeight:"32px"},s:{titleDescriptionGap:a.x1,sectionInnerGap:a.x4,sectionGap:"12px",contentPadding:"12px",subHeaderBottomGap:"0",rightBlockGap:a.x8,rightBlockToCloseGap:a.x4,rightBlockMaxHeight:"24px"}},x={bg:()=>I,radius:()=>j.m,shadow:()=>R,titleColor:()=>T,descriptionColor:()=>M},Z=s(O)`
  && .${L.root} {
    padding: 0;
  }
`,J=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({$size:e})=>c[e].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({$size:e})=>c[e].contentPadding};
  background: ${x.bg};
  border-radius: ${x.radius};
  box-shadow: ${x.shadow};
  overflow: hidden;
`,K=s(H)`
  flex-shrink: 0;
  min-width: 0;
`,Q=s.div`
  display: flex;
  align-items: ${({$alignTitleToClose:e})=>e?"center":"flex-start"};
  min-width: 0;
`,U=s.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({$alignTitleToClose:e})=>e?"center":"flex-start"};
`,ee=s.div`
  color: ${x.titleColor};
  min-width: 0;
`,ue=s.div`
  margin-top: ${({$size:e})=>c[e].titleDescriptionGap};
  color: ${x.descriptionColor};
  min-width: 0;
`,oe=s.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  // Есть rightBlock — зазор до крестика 12/8 по размеру; нет rightBlock —
  // базовый отступ как раньше (s.x4), для ранней обрезки длинного title.
  margin-left: ${({$size:e,$hasRightBlock:u})=>u?c[e].rightBlockToCloseGap:c[e].sectionInnerGap};
  column-gap: ${({$size:e})=>c[e].sectionInnerGap};
`,te=s.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-left: ${({$size:e})=>c[e].rightBlockGap};
  max-height: ${({$size:e})=>c[e].rightBlockMaxHeight};
  overflow: hidden;
`,ie=s.div`
  margin-top: 8px;
  margin-bottom: ${({$size:e})=>c[e].subHeaderBottomGap};
  min-width: 0;
`,ne=s.div`
  flex-shrink: 0;
  margin-right: 12px;
`,se=s(H)`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,re=s(H)`
  flex-shrink: 0;
  min-width: 0;
`;function C({children:e,...u}){return o.jsxDEV(se,{...u,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Body.tsx",lineNumber:5,columnNumber:10},this)}try{C.displayName="Body",C.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function E({children:e,...u}){return o.jsxDEV(re,{...u,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Footer.tsx",lineNumber:5,columnNumber:10},this)}try{E.displayName="Footer",E.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const $=p.createContext({onClose:null,size:"m"}),ae=()=>p.useContext($);function v({title:e,description:u,subHeader:t,rightBlock:r,showCloseButton:i=!0,onBackButtonClick:l,onClose:m,...h}){const{onClose:d,size:n}=ae(),g=m??d,k=i&&!!g,y={s:"BodyXS",m:"BodyM",l:"H4"}[n],F=n==="l"?"BodyS":"BodyXS",f=n==="s"?"xxs":"xs",D="xs",b=typeof u=="string"||typeof u=="number",A=!u&&k;return o.jsxDEV(K,{$size:n,...h,children:[o.jsxDEV(Q,{$size:n,$alignTitleToClose:A,children:[l&&o.jsxDEV(ne,{children:o.jsxDEV(V,{onClick:l,size:f,view:"secondary",pin:"circle-circle",title:"Назад",children:o.jsxDEV(W,{size:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:53,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:46,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:45,columnNumber:11},this),o.jsxDEV(U,{$alignTitleToClose:A,children:[e&&o.jsxDEV(ee,{children:o.jsxDEV(_,{variant:y,bold:!0,lines:2,tooltipText:typeof e=="string"?e:void 0,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:61,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:60,columnNumber:13},this),u&&o.jsxDEV(ue,{$size:n,children:b?o.jsxDEV(_,{variant:F,lines:2,tooltipText:u,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:74,columnNumber:17},this):u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:72,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:58,columnNumber:9},this),r&&o.jsxDEV(te,{$size:n,children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:89,columnNumber:11},this),k&&o.jsxDEV(oe,{$size:n,$hasRightBlock:!!r,children:o.jsxDEV(V,{onClick:g,size:f,view:"secondary",pin:"circle-circle",title:"Закрыть",children:o.jsxDEV(X,{size:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:103,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:96,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:95,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:43,columnNumber:7},this),t&&o.jsxDEV(ie,{$size:n,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:110,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:42,columnNumber:5},this)}try{v.displayName="Header",v.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"Кастомный контент, относящийся по смыслу к header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"Кастомный слот в правой части header, слева от крестика закрытия.\nПрижимается к крестику; если контент широкий — «давит» на title/description\n(уходят в многоточие с тултипом). Максимальная высота — как у крестика\n(32px при `size='l'` и `size='m'`, 24px при `size='s'`), ширина не\nограничена.",name:"rightBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка.",name:"onBackButtonClick",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopupDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const w="s",S=["top-left","top-right","bottom-left","bottom-right"],le=e=>{switch(e){case"top-left":case"top":case"left":return"bottom-right";case"top-right":case"right":return"bottom-left";case"bottom-left":case"bottom":return"top-right";case"bottom-right":return"top-left";case"center":case void 0:default:return"bottom-right"}},z=e=>[e],N=(e,u=w)=>{const t={};return e.includes("left")&&(t.transform="scaleX(-1)"),e.includes("top")&&(t.transform=t.transform?"scale(-1, -1)":"scaleY(-1)"),o.jsxDEV(Y,{color:q,size:u,style:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/utils.tsx",lineNumber:62,columnNumber:5},void 0)},G=(e,u)=>({topLeft:(e==null?void 0:e.topLeft)||N("top-left",u),topRight:(e==null?void 0:e.topRight)||N("top-right",u),bottomLeft:(e==null?void 0:e.bottomLeft)||N("bottom-left",u),bottomRight:(e==null?void 0:e.bottomRight)||N("bottom-right",u)}),ce=(e,u)=>{if(!e)return e;const t=le(u),r=d=>({directions:z(d),icons:G(void 0,w),hiddenIcons:S.filter(n=>n!==d),minWidth:240,minHeight:120,iconSize:w});if(e===!0)return r(t);const i=e,l=r(t),m=i.directions??l.directions??z(t),h=i.hiddenIcons??(i.directions?S.filter(d=>!m.includes(d)):l.hiddenIcons);return{...l,...i,directions:m,icons:G(i.icons,i.iconSize),hiddenIcons:h,iconSize:i.iconSize??l.iconSize}},de=p.forwardRef(({children:e,opened:u,defaultOpened:t=!1,onToggle:r,size:i="m",placement:l="center",resizable:m,...h},d)=>{const[n,g]=p.useState(t),k=u===void 0?n:u,B=p.useCallback(b=>{u===void 0&&g(b),r==null||r(b)},[r,u]),y=p.useCallback(()=>{B(!1)},[B]),F=p.useMemo(()=>ce(m,l),[l,m]),f=u===void 0||r?y:null,D=p.useMemo(()=>({onClose:f,size:i}),[f,i]);return o.jsxDEV($.Provider,{value:D,children:o.jsxDEV(Z,{...h,ref:d,isOpen:!1,opened:k,placement:l,resizable:F,children:o.jsxDEV(J,{$size:i,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:66,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:58,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:57,columnNumber:7},void 0)}),P=Object.assign(de,{Header:v,Body:C,Footer:E});P.displayName="PopupDF";try{P.displayName="PopupDF",P.__docgenInfo={description:"",displayName:"PopupDF",props:{}}}catch{}export{P};
