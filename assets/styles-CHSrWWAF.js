import{r as w,j as a}from"./react-CAOzMBF_.js";import{f as j}from"./utils-D7J-sht1.js";import{A as c,$ as o,q as R}from"./styled-components-BAnxJVQm.js";import{cJ as G,cC as B,cK as q,cD as V,cL as E,cB as A,cM as M,cE as O,z as W,cN as F,cO as f,cP as v,cQ as y,cR as T,cS as b,cT as C}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{g as h}from"./mixins-DAqqInVM.js";import{m as H,c as z}from"./@salutejs/plasma-typo-_m8jB2K3.js";const i="dais-ui__",l="notification-wrapper",X="notification-text",p="notification-title",s={wrapper:`${i}notification`,positive:`${i}notification--positive`,negative:`${i}notification--negative`,warning:`${i}notification--warning`,info:`${i}notification--info`,hasBackground:`${i}notification--has-background`,hasTitleColor:`${i}notification--has-title-color`,hasBorderColor:`${i}notification--has-border-color`},J={positive:{background:O,borderColor:M},negative:{background:A,borderColor:E},warning:{background:V,borderColor:q},info:{background:B,borderColor:G}},L=()=>Object.entries(J).map(([e,t])=>{const r=s[e];return c`
        /* Фон (если нет hasBackground) */
        .${s.wrapper}.${r}:not(.${s.hasBackground}) {
          .${l} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${X}, .${p} {
            z-index: 1;
          }

          .${l}::after {
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
        .${s.wrapper}.${r}:not(.${s.hasTitleColor}) {
          .${p} {
            color: ${W};
          }
        }

        /* Обводка */
        .${s.wrapper}.${r} {
          .${l} {
            border: 1px solid ${t.borderColor};
            box-shadow: ${F};
          }
        }
      `}).flat(),K="tooltip--fullWidth",Q=o(H),U=o(z),Y=o(f),S=o`
  * {
    ${()=>h({theme:"light"})}
  }
`,$=o`
  * {
    ${()=>h({theme:"dark"})}
  }
`,k=o`
  * {
    ${()=>L()}
  }
`,D=c`
  .popover-wrapper:has(> .${K}) {
    width: 100%;
  }
`,n=o`
  ${D}
`,Z=o(v),ee=o(y),te=o(T),ae=o(b),oe=o(C);function I(e,t){return e.join(`
`).replace(/:root/g,t)}const x={light:f,dark:v,highContrastLight:y,highContrastDark:T,betaCoreLight:b,betaCoreDark:C},re={light:Y,dark:Z,highContrastLight:ee,highContrastDark:te,betaCoreLight:ae,betaCoreDark:oe},g=({theme:e="light"})=>{w.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const t=re[e],r=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxs(a.Fragment,{children:[a.jsx(Q,{}),a.jsx(U,{}),a.jsx(t,{}),r?a.jsx(S,{}):a.jsx($,{}),a.jsx(n,{}),a.jsx(k,{})]})},ie=o`
  ${({$theme:e,$scopeSelector:t})=>t?I(x[e],t):""}
`,m=({theme:e="light",scopeSelector:t})=>{const r=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxs(a.Fragment,{children:[a.jsx(ie,{$theme:e,$scopeSelector:t}),r?a.jsx(S,{}):a.jsx($,{}),a.jsx(n,{}),a.jsx(k,{})]})},d=({isLightBase:e,theme:t})=>c`
  ${I(x[t],"&")}
  ${h({theme:e?"light":"dark"})}
  ${D}
  ${L()}
`,u=R.div`
  ${({isLightBase:e,activeTheme:t})=>d({isLightBase:e,theme:t})}
`,_=({theme:e="light",className:t,children:r,...N})=>{const P=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsx(u,{className:j("TestRootIsolatedThemeProviderLayout",t),...N,isLightBase:P,activeTheme:e,children:r})};try{n.displayName="GlobalPopoverStyles",n.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="GlobalStyle",g.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{m.displayName="TestGlobalIsolatedStyleWithReplace",m.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{d.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",d.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{u.displayName="StyledTestRootIsolatedThemeProviderLayout",u.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{_.displayName="TestRootIsolatedThemeProviderLayout",_.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}export{g as G,s as c};
