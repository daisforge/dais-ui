import{r as k,b as a}from"./react-UEdzNlUe.js";import{e as R}from"./utils-DSJLiokB.js";import{A as f,$ as i,q}from"./styled-components-C6Uw7ovB.js";import{cX as B,cQ as A,cY as M,cR as F,cZ as O,cP as W,c_ as H,cS as z,F as X,c$ as Y,d0 as v,d1 as N,d2 as D,d3 as S,d4 as T,d5 as x}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{g as p}from"./mixins-BMP4vRj7.js";import{m as Q,c as U}from"./@salutejs/plasma-typo-BSN-VHOu.js";const r="dais-ui__",d="notification-wrapper",Z="notification-text",_="notification-title",s={wrapper:`${r}notification`,positive:`${r}notification--positive`,negative:`${r}notification--negative`,warning:`${r}notification--warning`,info:`${r}notification--info`,hasBackground:`${r}notification--has-background`,hasTitleColor:`${r}notification--has-title-color`,hasBorderColor:`${r}notification--has-border-color`},J={positive:{background:z,borderColor:H},negative:{background:W,borderColor:O},warning:{background:F,borderColor:M},info:{background:A,borderColor:B}},C=()=>Object.entries(J).map(([e,t])=>{const o=s[e];return f`
        /* Фон (если нет hasBackground) */
        .${s.wrapper}.${o}:not(.${s.hasBackground}) {
          .${d} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${Z}, .${_} {
            z-index: 1;
          }

          .${d}::after {
            content: '';
            position: absolute;
            z-index: 0;
            height: 600px;
            width: 600px;
            top: 0;
            right: 0;
            transform: translate(50%, -80%);
            background: ${t.background};
            pointer-events: none;
          }
        }

        /* Цвет текста (если нет hasTitle) */
        .${s.wrapper}.${o}:not(.${s.hasTitleColor}) {
          .${_} {
            color: ${X};
          }
        }

        /* Обводка */
        .${s.wrapper}.${o} {
          .${d} {
            border: 1px solid ${t.borderColor};
            box-shadow: ${Y};
          }
        }
      `}).flat(),L="tooltip--fullWidth",w=i(Q),$=i(U),K=i(v),G=i`
  * {
    ${()=>p({theme:"light"})}
  }
`,g=i`
  * {
    ${()=>p({theme:"dark"})}
  }
`,E=i`
  * {
    ${()=>C()}
  }
`,b=f`
  .popover-wrapper:has(> .${L}) {
    width: 100%;
  }
`,l=i`
  ${b}
`,V=i(N),ee=i(D),ae=i(S),te=i(T),ie=i(x),oe=()=>(k.useEffect(()=>(document.documentElement.setAttribute("data-theme","dark"),()=>{document.documentElement.removeAttribute("data-theme")}),[]),a.jsxDEV(a.Fragment,{children:[a.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:65,columnNumber:7},void 0),a.jsxDEV($,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:66,columnNumber:7},void 0),a.jsxDEV(V,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:67,columnNumber:7},void 0),a.jsxDEV(g,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:68,columnNumber:7},void 0),a.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:69,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:64,columnNumber:5},void 0));function y(e,t){return e.join(`
`).replace(/:root/g,t)}const I={light:v,dark:N,highContrastLight:D,highContrastDark:S,betaCoreLight:T,betaCoreDark:x},re={light:K,dark:V,highContrastLight:ee,highContrastDark:ae,betaCoreLight:te,betaCoreDark:ie},c=({theme:e="light"})=>{k.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const t=re[e],o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxDEV(a.Fragment,{children:[a.jsxDEV(w,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:125,columnNumber:7},void 0),a.jsxDEV($,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:126,columnNumber:7},void 0),a.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:127,columnNumber:7},void 0),o?a.jsxDEV(G,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:129,columnNumber:9},void 0):a.jsxDEV(g,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:131,columnNumber:9},void 0),a.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:133,columnNumber:7},void 0),a.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:134,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:124,columnNumber:5},void 0)},se=i`
  ${({$theme:e,$scopeSelector:t})=>t?y(I[e],t):""}
`,m=({theme:e="light",scopeSelector:t})=>{const o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxDEV(a.Fragment,{children:[a.jsxDEV(se,{$theme:e,$scopeSelector:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:176,columnNumber:7},void 0),o?a.jsxDEV(G,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:178,columnNumber:9},void 0):a.jsxDEV(g,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:180,columnNumber:9},void 0),a.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:182,columnNumber:7},void 0),a.jsxDEV(E,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:183,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:175,columnNumber:5},void 0)},n=({isLightBase:e,theme:t})=>f`
  ${y(I[t],"&")}
  ${p({theme:e?"light":"dark"})}
  ${b}
  ${C()}
`,u=q.div`
  ${({isLightBase:e,activeTheme:t})=>n({isLightBase:e,theme:t})}
`,h=({theme:e="light",className:t,children:o,...j})=>{const P=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxDEV(u,{className:R("TestRootIsolatedThemeProviderLayout",t),...j,isLightBase:P,activeTheme:e,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:226,columnNumber:5},void 0)};try{l.displayName="GlobalPopoverStyles",l.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="GlobalStyle",c.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{m.displayName="TestGlobalIsolatedStyleWithReplace",m.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{n.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",n.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{u.displayName="StyledTestRootIsolatedThemeProviderLayout",u.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{h.displayName="TestRootIsolatedThemeProviderLayout",h.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}const he=Object.freeze(Object.defineProperty({__proto__:null,DarkGlobalStyle:oe,GlobalPopoverStyles:l,GlobalStyle:c,StyledTestRootIsolatedThemeProviderLayout:u,TOOLTIP_FULL_WIDTH_CLASS:L,TestGlobalIsolatedStyleWithReplace:m,TestRootIsolatedThemeProviderLayout:h,scopeTheme:y,styledTestRootIsolatedThemeProviderLayoutMixin:n,testGlobalPopoverStylesMixin:b},Symbol.toStringTag,{value:"Module"}));export{oe as D,c as G,u as S,L as T,l as a,m as b,s as c,h as d,n as e,he as f,y as s,b as t};
