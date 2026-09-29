import{d as o,r as a}from"./react-D2T61mpp.js";import{B as w}from"./Box-D4caT0cR.js";import{s as t,c as _}from"./constants-BPUyiI8r.js";import{y as S,aI as G,x as $,w as j}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{H as i}from"./styled-components-5_LCUbRt.js";import{a as z,I as H}from"./@salutejs/sdds-finai-DjrWBgCD.js";import{bp as I}from"./vendor-9g8l4WhJ.js";import{T as A}from"./AnalyticalWidget-ChlFDHH2.js";import{eZ as R,fa as T}from"./@salutejs/plasma-icons-CsO0Zluk.js";import{b as M}from"./sharedUtilsResizable-IZRdYnaY.js";const r={l:{titleDescriptionGap:t.x1,sectionInnerGap:t.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:t.x8,rightBlockToCloseGap:t.x6,rightBlockMaxHeight:"32px"},m:{titleDescriptionGap:t.x1,sectionInnerGap:t.x4,sectionGap:"16px",contentPadding:"16px",subHeaderBottomGap:"0",rightBlockGap:t.x8,rightBlockToCloseGap:t.x6,rightBlockMaxHeight:"32px"},s:{titleDescriptionGap:t.x1,sectionInnerGap:t.x4,sectionGap:"12px",contentPadding:"12px",subHeaderBottomGap:"0",rightBlockGap:t.x8,rightBlockToCloseGap:t.x4,rightBlockMaxHeight:"24px"}},p={bg:()=>S,radius:()=>_.m,shadow:()=>G,titleColor:()=>$,descriptionColor:()=>j},q=i(z)`
  && .${I.root} {
    padding: 0;
  }
`,O=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({$size:u})=>r[u].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({$size:u})=>r[u].contentPadding};
  background: ${p.bg};
  border-radius: ${p.radius};
  box-shadow: ${p.shadow};
  overflow: hidden;
`,W=i(w)`
  flex-shrink: 0;
  min-width: 0;
`,X=i.div`
  display: flex;
  align-items: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
  min-width: 0;
`,L=i.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({$alignTitleToClose:u})=>u?"center":"flex-start"};
`,Z=i.div`
  color: ${p.titleColor};
  min-width: 0;
`,J=i.div`
  margin-top: ${({$size:u})=>r[u].titleDescriptionGap};
  color: ${p.descriptionColor};
  min-width: 0;
`,K=i.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  // Есть rightBlock — зазор до крестика 12/8 по размеру; нет rightBlock —
  // базовый отступ как раньше (s.x4), для ранней обрезки длинного title.
  margin-left: ${({$size:u,$hasRightBlock:e})=>e?r[u].rightBlockToCloseGap:r[u].sectionInnerGap};
  column-gap: ${({$size:u})=>r[u].sectionInnerGap};
`,Q=i.div`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-left: ${({$size:u})=>r[u].rightBlockGap};
  max-height: ${({$size:u})=>r[u].rightBlockMaxHeight};
  overflow: hidden;
`,U=i.div`
  margin-top: 8px;
  margin-bottom: ${({$size:u})=>r[u].subHeaderBottomGap};
  min-width: 0;
`,Y=i.div`
  flex-shrink: 0;
  margin-right: 12px;
`,uu=i(w)`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,eu=i(w)`
  flex-shrink: 0;
  min-width: 0;
`;function F({children:u,...e}){return o.jsxDEV(uu,{...e,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Body.tsx",lineNumber:5,columnNumber:10},this)}try{F.displayName="Body",F.__docgenInfo={description:"",displayName:"Body",props:{}}}catch{}function E({children:u,...e}){return o.jsxDEV(eu,{...e,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Footer.tsx",lineNumber:5,columnNumber:10},this)}try{E.displayName="Footer",E.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const V=a.createContext({onClose:null,size:"m"}),ou=()=>a.useContext(V);function C({title:u,description:e,subHeader:m,rightBlock:s,showCloseButton:c=!0,onBackButtonClick:l,onClose:h,...g}){const{onClose:b,size:n}=ou(),f=h??b,x=c&&!!f,B={s:"BodyXS",m:"BodyM",l:"H4"}[n],y=n==="l"?"BodyS":"BodyXS",d=n==="s"?"xxs":"xs",k="xs",D=typeof e=="string"||typeof e=="number",P=!e&&x;return o.jsxDEV(W,{$size:n,...g,children:[o.jsxDEV(X,{$size:n,$alignTitleToClose:P,children:[l&&o.jsxDEV(Y,{children:o.jsxDEV(H,{onClick:l,size:d,view:"secondary",pin:"circle-circle",title:"Назад",children:o.jsxDEV(R,{size:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:53,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:46,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:45,columnNumber:11},this),o.jsxDEV(L,{$alignTitleToClose:P,children:[u&&o.jsxDEV(Z,{children:o.jsxDEV(A,{variant:B,bold:!0,lines:2,tooltipText:typeof u=="string"?u:void 0,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:61,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:60,columnNumber:13},this),e&&o.jsxDEV(J,{$size:n,children:D?o.jsxDEV(A,{variant:y,lines:2,tooltipText:e,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:74,columnNumber:17},this):e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:72,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:58,columnNumber:9},this),s&&o.jsxDEV(Q,{$size:n,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:89,columnNumber:11},this),x&&o.jsxDEV(K,{$size:n,$hasRightBlock:!!s,children:o.jsxDEV(H,{onClick:f,size:d,view:"secondary",pin:"circle-circle",title:"Закрыть",children:o.jsxDEV(T,{size:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:103,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:96,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:95,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:43,columnNumber:7},this),m&&o.jsxDEV(U,{$size:n,children:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:110,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/components/Header.tsx",lineNumber:42,columnNumber:5},this)}try{C.displayName="Header",C.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"Заголовок в верхней левой части header.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст под заголовком в верхней левой части header.",name:"description",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"Кастомный контент, относящийся по смыслу к header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"Кастомный слот в правой части header, слева от крестика закрытия.\nПрижимается к крестику; если контент широкий — «давит» на title/description\n(уходят в многоточие с тултипом). Максимальная высота — как у крестика\n(32px при `size='l'` и `size='m'`, 24px при `size='s'`), ширина не\nограничена.",name:"rightBlock",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Показывать ли крестик закрытия в правой верхней части header.",name:"showCloseButton",required:!1,type:{name:"boolean"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка.",name:"onBackButtonClick",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Кастомный обработчик закрытия.\nЕсли не передан, будет использован обработчик закрытия из `PopupDF`.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}const iu=u=>{switch(u){case"top-left":case"top":case"left":return"bottom-right";case"top-right":case"right":return"bottom-left";case"bottom-left":case"bottom":return"top-right";case"bottom-right":return"top-left";case"center":case void 0:default:return"bottom-right"}},tu=(u,e)=>M(u,{corner:iu(e),minWidth:240,minHeight:120}),nu=a.forwardRef(({children:u,opened:e,defaultOpened:m=!1,onToggle:s,size:c="m",placement:l="center",resizable:h,...g},b)=>{const[n,f]=a.useState(m),x=e===void 0?n:e,N=a.useCallback(D=>{e===void 0&&f(D),s==null||s(D)},[s,e]),B=a.useCallback(()=>{N(!1)},[N]),y=a.useMemo(()=>tu(h,l),[l,h]),d=e===void 0||s?B:null,k=a.useMemo(()=>({onClose:d,size:c}),[d,c]);return o.jsxDEV(V.Provider,{value:k,children:o.jsxDEV(q,{...g,ref:b,isOpen:!1,opened:x,placement:l,resizable:y,children:o.jsxDEV(O,{$size:c,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:66,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:58,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PopupDF/PopupDF.tsx",lineNumber:57,columnNumber:7},void 0)}),v=Object.assign(nu,{Header:C,Body:F,Footer:E});v.displayName="PopupDF";try{v.displayName="PopupDF",v.__docgenInfo={description:"",displayName:"PopupDF",props:{}}}catch{}export{v as P};
