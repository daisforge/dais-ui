import{r as G,d as t}from"./react-D2T61mpp.js";import{d as V}from"./utils-wd_ojxIy.js";import{C as c,W as i,H as E}from"./styled-components-B3ojS1U6.js";import{cq as P,cj as j,cr as R,ck as B,cs as q,ci as W,ct as M,cl as A,x as F,aI as O,cu as b,cv as y}from"./@salutejs/sdds-themes-p9DCXULv.js";import{g as m}from"./mixins-gFCUWQ-8.js";import{m as H,c as z}from"./@salutejs/plasma-typo-D0R30cUy.js";import{s as v}from"./EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme-uTSVIbRM.js";import{s as _}from"./@salutejs-ds/sdds_finai_high_contrast-DoAS7YWi.js";import{s as k,a as D}from"./@salutejs-ds/sdds_finai_beta_core-CRX1TY7Q.js";const r="dais-ui__",n="notification-wrapper",X="notification-text",h="notification-title",s={wrapper:`${r}notification`,positive:`${r}notification--positive`,negative:`${r}notification--negative`,warning:`${r}notification--warning`,info:`${r}notification--info`,hasBackground:`${r}notification--has-background`,hasTitleColor:`${r}notification--has-title-color`,hasBorderColor:`${r}notification--has-border-color`},U={positive:{background:A,borderColor:M},negative:{background:W,borderColor:q},warning:{background:B,borderColor:R},info:{background:j,borderColor:P}},N=()=>Object.entries(U).map(([e,a])=>{const o=s[e];return c`
        /* Фон (если нет hasBackground) */
        .${s.wrapper}.${o}:not(.${s.hasBackground}) {
          .${n} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${X}, .${h} {
            z-index: 1;
          }

          .${n}::after {
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
          .${h} {
            color: ${F};
          }
        }

        /* Обводка */
        .${s.wrapper}.${o} {
          .${n} {
            border: 1px solid ${a.borderColor};
            box-shadow: ${O};
          }
        }
      `}).flat(),Y="tooltip--fullWidth",J=i(H),K=i(z),Q=i(b),T=i`
  * {
    ${()=>m({theme:"light"})}
  }
`,C=i`
  * {
    ${()=>m({theme:"dark"})}
  }
`,S=i`
  * {
    ${()=>N()}
  }
`,x=c`
  .popover-wrapper:has(> .${Y}) {
    width: 100%;
  }
`,l=i`
  ${x}
`,Z=i(y),ee=i(v),ae=i(_),te=i(k),ie=i(D);function L(e,a){return e.join(`
`).replace(/:root/g,a)}const $={light:b,dark:y,highContrastLight:v,highContrastDark:_,betaCoreLight:k,betaCoreDark:D},oe={light:Q,dark:Z,highContrastLight:ee,highContrastDark:ae,betaCoreLight:te,betaCoreDark:ie},p=({theme:e="light"})=>{G.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const a=oe[e],o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(J,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:125,columnNumber:7},void 0),t.jsxDEV(K,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:126,columnNumber:7},void 0),t.jsxDEV(a,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:127,columnNumber:7},void 0),o?t.jsxDEV(T,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:129,columnNumber:9},void 0):t.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:131,columnNumber:9},void 0),t.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:133,columnNumber:7},void 0),t.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:134,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:124,columnNumber:5},void 0)},re=i`
  ${({$theme:e,$scopeSelector:a})=>a?L($[e],a):""}
`,f=({theme:e="light",scopeSelector:a})=>{const o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(re,{$theme:e,$scopeSelector:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:176,columnNumber:7},void 0),o?t.jsxDEV(T,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:178,columnNumber:9},void 0):t.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:180,columnNumber:9},void 0),t.jsxDEV(l,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:182,columnNumber:7},void 0),t.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:183,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:175,columnNumber:5},void 0)},u=({isLightBase:e,theme:a})=>c`
  ${L($[a],"&")}
  ${m({theme:e?"light":"dark"})}
  ${x}
  ${N()}
`,d=E.div`
  ${({isLightBase:e,activeTheme:a})=>u({isLightBase:e,theme:a})}
`,g=({theme:e="light",className:a,children:o,...I})=>{const w=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxDEV(d,{className:V("TestRootIsolatedThemeProviderLayout",a),...I,isLightBase:w,activeTheme:e,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:226,columnNumber:5},void 0)};try{l.displayName="GlobalPopoverStyles",l.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="GlobalStyle",p.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{f.displayName="TestGlobalIsolatedStyleWithReplace",f.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{u.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",u.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{d.displayName="StyledTestRootIsolatedThemeProviderLayout",d.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{g.displayName="TestRootIsolatedThemeProviderLayout",g.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}export{p as G,s as c};
