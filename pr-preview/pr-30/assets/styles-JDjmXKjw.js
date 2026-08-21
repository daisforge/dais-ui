import{r as b,d as t}from"./react-D2T61mpp.js";import{d as I}from"./utils-D6duxx9X.js";import{C as m,W as i,H as G}from"./styled-components-0ntxfV3u.js";import{cm as V,cf as E,cn as P,cg as j,co as R,ce as q,cp as B,ch as M,x as W,aH as A,cq as v,cr as k}from"./@salutejs/sdds-themes-DMMPng_c.js";import{g as h}from"./mixins-CYGAQ7Ug.js";import{m as F,c as O}from"./@salutejs/plasma-typo-2r2YTX2b.js";import{s as _}from"./EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme-Bu0hKhen.js";import{s as N}from"./@salutejs-ds/sdds_finai_high_contrast-CPXOkEAe.js";const r="dais-ui__",u="notification-wrapper",H="notification-text",p="notification-title",s={wrapper:`${r}notification`,positive:`${r}notification--positive`,negative:`${r}notification--negative`,warning:`${r}notification--warning`,info:`${r}notification--info`,hasBackground:`${r}notification--has-background`,hasTitleColor:`${r}notification--has-title-color`,hasBorderColor:`${r}notification--has-border-color`},z={positive:{background:M,borderColor:B},negative:{background:q,borderColor:R},warning:{background:j,borderColor:P},info:{background:E,borderColor:V}},D=()=>Object.entries(z).map(([e,a])=>{const o=s[e];return m`
        /* Фон (если нет hasBackground) */
        .${s.wrapper}.${o}:not(.${s.hasBackground}) {
          .${u} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${H}, .${p} {
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
            background: ${a.background};
            pointer-events: none;
          }
        }

        /* Цвет текста (если нет hasTitle) */
        .${s.wrapper}.${o}:not(.${s.hasTitleColor}) {
          .${p} {
            color: ${W};
          }
        }

        /* Обводка */
        .${s.wrapper}.${o} {
          .${u} {
            border: 1px solid ${a.borderColor};
            box-shadow: ${A};
          }
        }
      `}).flat(),X="tooltip--fullWidth",U=i(F),Y=i(O),J=i(v),T=i`
  * {
    ${()=>h({theme:"light"})}
  }
`,S=i`
  * {
    ${()=>h({theme:"dark"})}
  }
`,x=i`
  * {
    ${()=>D()}
  }
`,C=m`
  .popover-wrapper:has(> .${X}) {
    width: 100%;
  }
`,l=i`
  ${C}
`,K=i(k),Q=i(_),Z=i(N);function $(e,a){return e.join(`
`).replace(/:root/g,a)}const L={light:v,dark:k,highContrastLight:_,highContrastDark:N},ee={light:J,dark:K,highContrastLight:Q,highContrastDark:Z},f=({theme:e="light"})=>{b.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const a=ee[e],o=e==="light"||e==="highContrastLight";return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(U,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:114,columnNumber:7},void 0),t.jsxDEV(Y,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:115,columnNumber:7},void 0),t.jsxDEV(a,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:116,columnNumber:7},void 0),o?t.jsxDEV(T,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:118,columnNumber:9},void 0):t.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:120,columnNumber:9},void 0),t.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:122,columnNumber:7},void 0),t.jsxDEV(x,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:123,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:113,columnNumber:5},void 0)},g=({theme:e="light",scopeSelector:a})=>{const o=b.useMemo(()=>a?i`
      ${$(L[e],a)}
      `:()=>null,[a,e]),n=e==="light"||e==="highContrastLight";return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(o,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:152,columnNumber:7},void 0),n?t.jsxDEV(T,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:154,columnNumber:9},void 0):t.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:156,columnNumber:9},void 0),t.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:158,columnNumber:7},void 0),t.jsxDEV(x,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:159,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:151,columnNumber:5},void 0)},d=({isLightBase:e,theme:a})=>m`
  ${$(L[a],"&")}
  ${h({theme:e?"light":"dark"})}
  ${C}
  ${D()}
`,c=G.div`
  ${({isLightBase:e,activeTheme:a})=>d({isLightBase:e,theme:a})}
`,y=({theme:e="light",className:a,children:o,...n})=>{const w=e==="light"||e==="highContrastLight";return t.jsxDEV(c,{className:I("TestRootIsolatedThemeProviderLayout",a),...n,isLightBase:w,activeTheme:e,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:199,columnNumber:5},void 0)};try{l.displayName="GlobalPopoverStyles",l.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="GlobalStyle",f.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'}]}}}}}catch{}try{g.displayName="TestGlobalIsolatedStyleWithReplace",g.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{d.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",d.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'}]}}}}}catch{}try{c.displayName="StyledTestRootIsolatedThemeProviderLayout",c.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{y.displayName="TestRootIsolatedThemeProviderLayout",y.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'}]}}}}}catch{}export{f as G,s as c};
