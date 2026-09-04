import{r as y,d as a}from"./react-D2T61mpp.js";import{d as V}from"./utils-BOxIorbb.js";import{C as m,W as i,H as E}from"./styled-components-BlJZcR1N.js";import{cm as P,cf as j,cn as R,cg as B,co as q,ce as M,cp as W,ch as A,x as F,aH as O,cq as v,cr as _}from"./@salutejs/sdds-themes-CZ516YZq.js";import{g as h}from"./mixins-fxTNGh2g.js";import{m as H,c as z}from"./@salutejs/plasma-typo-CtivOc85.js";import{s as k}from"./EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme-Bu0hKhen.js";import{s as D}from"./@salutejs-ds/sdds_finai_high_contrast-CPXOkEAe.js";import{s as N,a as T}from"./@salutejs-ds/sdds_finai_beta_core-CRX1TY7Q.js";const r="dais-ui__",u="notification-wrapper",X="notification-text",p="notification-title",s={wrapper:`${r}notification`,positive:`${r}notification--positive`,negative:`${r}notification--negative`,warning:`${r}notification--warning`,info:`${r}notification--info`,hasBackground:`${r}notification--has-background`,hasTitleColor:`${r}notification--has-title-color`,hasBorderColor:`${r}notification--has-border-color`},U={positive:{background:A,borderColor:W},negative:{background:M,borderColor:q},warning:{background:B,borderColor:R},info:{background:j,borderColor:P}},C=()=>Object.entries(U).map(([e,t])=>{const o=s[e];return m`
        /* Фон (если нет hasBackground) */
        .${s.wrapper}.${o}:not(.${s.hasBackground}) {
          .${u} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${X}, .${p} {
            z-index: 1;
          }

          .${u}::after {
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
          .${p} {
            color: ${F};
          }
        }

        /* Обводка */
        .${s.wrapper}.${o} {
          .${u} {
            border: 1px solid ${t.borderColor};
            box-shadow: ${O};
          }
        }
      `}).flat(),Y="tooltip--fullWidth",J=i(H),K=i(z),Q=i(v),S=i`
  * {
    ${()=>h({theme:"light"})}
  }
`,x=i`
  * {
    ${()=>h({theme:"dark"})}
  }
`,L=i`
  * {
    ${()=>C()}
  }
`,$=m`
  .popover-wrapper:has(> .${Y}) {
    width: 100%;
  }
`,l=i`
  ${$}
`,Z=i(_),ee=i(k),ae=i(D),te=i(N),ie=i(T);function w(e,t){return e.join(`
`).replace(/:root/g,t)}const I={light:v,dark:_,highContrastLight:k,highContrastDark:D,betaCoreLight:N,betaCoreDark:T},oe={light:Q,dark:Z,highContrastLight:ee,highContrastDark:ae,betaCoreLight:te,betaCoreDark:ie},f=({theme:e="light"})=>{y.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const t=oe[e],o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxDEV(a.Fragment,{children:[a.jsxDEV(J,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:125,columnNumber:7},void 0),a.jsxDEV(K,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:126,columnNumber:7},void 0),a.jsxDEV(t,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:127,columnNumber:7},void 0),o?a.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:129,columnNumber:9},void 0):a.jsxDEV(x,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:131,columnNumber:9},void 0),a.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:133,columnNumber:7},void 0),a.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:134,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:124,columnNumber:5},void 0)},g=({theme:e="light",scopeSelector:t})=>{const o=y.useMemo(()=>t?i`
      ${w(I[e],t)}
      `:()=>null,[t,e]),n=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxDEV(a.Fragment,{children:[a.jsxDEV(o,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:166,columnNumber:7},void 0),n?a.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:168,columnNumber:9},void 0):a.jsxDEV(x,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:170,columnNumber:9},void 0),a.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:172,columnNumber:7},void 0),a.jsxDEV(L,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:173,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:165,columnNumber:5},void 0)},d=({isLightBase:e,theme:t})=>m`
  ${w(I[t],"&")}
  ${h({theme:e?"light":"dark"})}
  ${$}
  ${C()}
`,c=E.div`
  ${({isLightBase:e,activeTheme:t})=>d({isLightBase:e,theme:t})}
`,b=({theme:e="light",className:t,children:o,...n})=>{const G=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxDEV(c,{className:V("TestRootIsolatedThemeProviderLayout",t),...n,isLightBase:G,activeTheme:e,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:216,columnNumber:5},void 0)};try{l.displayName="GlobalPopoverStyles",l.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="GlobalStyle",f.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{g.displayName="TestGlobalIsolatedStyleWithReplace",g.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{d.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",d.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{c.displayName="StyledTestRootIsolatedThemeProviderLayout",c.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{b.displayName="TestRootIsolatedThemeProviderLayout",b.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}export{f as G,s as c};
