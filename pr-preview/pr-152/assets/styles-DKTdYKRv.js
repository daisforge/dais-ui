import{r as G,d as t}from"./react-D2T61mpp.js";import{f as V}from"./utils-Bu2A5x6d.js";import{A as c,$ as i,q as E}from"./styled-components-C7d6cAn3.js";import{cJ as P,cC as R,cK as j,cD as B,cL as q,cB as A,cM as M,cE as O,z as W,cN as F,cO as b,cP as y,cQ as _,cR as v,cS as k,cT as D}from"./@sddsjs/sdds_finai-DNELm_9o.js";import{g as m}from"./mixins-s9kImxFh.js";import{m as H,c as z}from"./@salutejs/plasma-typo-ZBxqy6Yk.js";const r="dais-ui__",n="notification-wrapper",X="notification-text",h="notification-title",l={wrapper:`${r}notification`,positive:`${r}notification--positive`,negative:`${r}notification--negative`,warning:`${r}notification--warning`,info:`${r}notification--info`,hasBackground:`${r}notification--has-background`,hasTitleColor:`${r}notification--has-title-color`,hasBorderColor:`${r}notification--has-border-color`},J={positive:{background:O,borderColor:M},negative:{background:A,borderColor:q},warning:{background:B,borderColor:j},info:{background:R,borderColor:P}},N=()=>Object.entries(J).map(([e,a])=>{const o=l[e];return c`
        /* Фон (если нет hasBackground) */
        .${l.wrapper}.${o}:not(.${l.hasBackground}) {
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
        .${l.wrapper}.${o}:not(.${l.hasTitleColor}) {
          .${h} {
            color: ${W};
          }
        }

        /* Обводка */
        .${l.wrapper}.${o} {
          .${n} {
            border: 1px solid ${a.borderColor};
            box-shadow: ${F};
          }
        }
      `}).flat(),K="tooltip--fullWidth",Q=i(H),U=i(z),Y=i(b),T=i`
  * {
    ${()=>m({theme:"light"})}
  }
`,S=i`
  * {
    ${()=>m({theme:"dark"})}
  }
`,C=i`
  * {
    ${()=>N()}
  }
`,L=c`
  .popover-wrapper:has(> .${K}) {
    width: 100%;
  }
`,s=i`
  ${L}
`,Z=i(y),ee=i(_),ae=i(v),te=i(k),ie=i(D);function x(e,a){return e.join(`
`).replace(/:root/g,a)}const $={light:b,dark:y,highContrastLight:_,highContrastDark:v,betaCoreLight:k,betaCoreDark:D},oe={light:Y,dark:Z,highContrastLight:ee,highContrastDark:ae,betaCoreLight:te,betaCoreDark:ie},p=({theme:e="light"})=>{G.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const a=oe[e],o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(Q,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:125,columnNumber:7},void 0),t.jsxDEV(U,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:126,columnNumber:7},void 0),t.jsxDEV(a,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:127,columnNumber:7},void 0),o?t.jsxDEV(T,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:129,columnNumber:9},void 0):t.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:131,columnNumber:9},void 0),t.jsxDEV(s,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:133,columnNumber:7},void 0),t.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:134,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:124,columnNumber:5},void 0)},re=i`
  ${({$theme:e,$scopeSelector:a})=>a?x($[e],a):""}
`,f=({theme:e="light",scopeSelector:a})=>{const o=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(re,{$theme:e,$scopeSelector:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:176,columnNumber:7},void 0),o?t.jsxDEV(T,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:178,columnNumber:9},void 0):t.jsxDEV(S,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:180,columnNumber:9},void 0),t.jsxDEV(s,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:182,columnNumber:7},void 0),t.jsxDEV(C,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:183,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:175,columnNumber:5},void 0)},u=({isLightBase:e,theme:a})=>c`
  ${x($[a],"&")}
  ${m({theme:e?"light":"dark"})}
  ${L}
  ${N()}
`,d=E.div`
  ${({isLightBase:e,activeTheme:a})=>u({isLightBase:e,theme:a})}
`,g=({theme:e="light",className:a,children:o,...w})=>{const I=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxDEV(d,{className:V("TestRootIsolatedThemeProviderLayout",a),...w,isLightBase:I,activeTheme:e,children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/styles/DefaultGlobalStyle.tsx",lineNumber:226,columnNumber:5},void 0)};try{s.displayName="GlobalPopoverStyles",s.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="GlobalStyle",p.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{f.displayName="TestGlobalIsolatedStyleWithReplace",f.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{u.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",u.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{d.displayName="StyledTestRootIsolatedThemeProviderLayout",d.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{g.displayName="TestRootIsolatedThemeProviderLayout",g.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}export{p as G,l as c};
