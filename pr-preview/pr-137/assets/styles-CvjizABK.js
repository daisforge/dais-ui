import{r as P,j as a}from"./react-CAOzMBF_.js";import{f as j}from"./utils-EIxGvR70.js";import{C as c,W as o,H as G}from"./styled-components-DCFsnh-i.js";import{cu as R,co as B,cv as V,cp as q,cw as E,cn as W,cx as M,cq as A,z as F,aK as O,cy as f,cz as v}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{g as h}from"./mixins-BSrWhZL1.js";import{m as H,c as z}from"./@salutejs/plasma-typo-D-UgegI7.js";import{s as y}from"./EXTERNAL_PACKAGE_MODULE_sdds_finai_high_contrast__light_theme-uTSVIbRM.js";import{s as T}from"./@salutejs-ds/sdds_finai_high_contrast-DoAS7YWi.js";import{s as b,a as C}from"./@salutejs-ds/sdds_finai_beta_core-CRX1TY7Q.js";const i="dais-ui__",l="notification-wrapper",X="notification-text",p="notification-title",s={wrapper:`${i}notification`,positive:`${i}notification--positive`,negative:`${i}notification--negative`,warning:`${i}notification--warning`,info:`${i}notification--info`,hasBackground:`${i}notification--has-background`,hasTitleColor:`${i}notification--has-title-color`,hasBorderColor:`${i}notification--has-border-color`},K={positive:{background:A,borderColor:M},negative:{background:W,borderColor:E},warning:{background:q,borderColor:V},info:{background:B,borderColor:R}},L=()=>Object.entries(K).map(([e,t])=>{const r=s[e];return c`
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
            color: ${F};
          }
        }

        /* Обводка */
        .${s.wrapper}.${r} {
          .${l} {
            border: 1px solid ${t.borderColor};
            box-shadow: ${O};
          }
        }
      `}).flat(),U="tooltip--fullWidth",Y=o(H),J=o(z),Q=o(f),S=o`
  * {
    ${()=>h({theme:"light"})}
  }
`,k=o`
  * {
    ${()=>h({theme:"dark"})}
  }
`,D=o`
  * {
    ${()=>L()}
  }
`,$=c`
  .popover-wrapper:has(> .${U}) {
    width: 100%;
  }
`,n=o`
  ${$}
`,Z=o(v),ee=o(y),te=o(T),ae=o(b),oe=o(C);function I(e,t){return e.join(`
`).replace(/:root/g,t)}const x={light:f,dark:v,highContrastLight:y,highContrastDark:T,betaCoreLight:b,betaCoreDark:C},re={light:Q,dark:Z,highContrastLight:ee,highContrastDark:te,betaCoreLight:ae,betaCoreDark:oe},g=({theme:e="light"})=>{P.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const t=re[e],r=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxs(a.Fragment,{children:[a.jsx(Y,{}),a.jsx(J,{}),a.jsx(t,{}),r?a.jsx(S,{}):a.jsx(k,{}),a.jsx(n,{}),a.jsx(D,{})]})},ie=o`
  ${({$theme:e,$scopeSelector:t})=>t?I(x[e],t):""}
`,m=({theme:e="light",scopeSelector:t})=>{const r=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsxs(a.Fragment,{children:[a.jsx(ie,{$theme:e,$scopeSelector:t}),r?a.jsx(S,{}):a.jsx(k,{}),a.jsx(n,{}),a.jsx(D,{})]})},d=({isLightBase:e,theme:t})=>c`
  ${I(x[t],"&")}
  ${h({theme:e?"light":"dark"})}
  ${$}
  ${L()}
`,u=G.div`
  ${({isLightBase:e,activeTheme:t})=>d({isLightBase:e,theme:t})}
`,_=({theme:e="light",className:t,children:r,...N})=>{const w=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return a.jsx(u,{className:j("TestRootIsolatedThemeProviderLayout",t),...N,isLightBase:w,activeTheme:e,children:r})};try{n.displayName="GlobalPopoverStyles",n.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="GlobalStyle",g.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{m.displayName="TestGlobalIsolatedStyleWithReplace",m.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{d.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",d.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{u.displayName="StyledTestRootIsolatedThemeProviderLayout",u.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{_.displayName="TestRootIsolatedThemeProviderLayout",_.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}export{g as G,s as c};
