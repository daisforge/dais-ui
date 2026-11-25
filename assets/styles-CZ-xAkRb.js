import{r as b,j as t}from"./react-DYHuXpTF.js";import{e as B}from"./utils-DbMTrPCQ.js";import{A as m,$ as o,q as E}from"./styled-components-C3-Vg48S.js";import{cX as V,cQ as A,cY as M,cR as F,cZ as O,cP as W,c_ as H,cS as z,F as X,c$ as Y,d0 as T,d1 as C,d2 as S,d3 as L,d4 as k,d5 as $}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{g}from"./mixins-DrNwYYo9.js";import{m as Q,c as U}from"./@salutejs/plasma-typo-DzO5zgdv.js";const i="dais-ui__",u="notification-wrapper",Z="notification-text",y="notification-title",s={wrapper:`${i}notification`,positive:`${i}notification--positive`,negative:`${i}notification--negative`,warning:`${i}notification--warning`,info:`${i}notification--info`,hasBackground:`${i}notification--has-background`,hasTitleColor:`${i}notification--has-title-color`,hasBorderColor:`${i}notification--has-border-color`},J={positive:{background:z,borderColor:H},negative:{background:W,borderColor:O},warning:{background:F,borderColor:M},info:{background:A,borderColor:V}},D=()=>Object.entries(J).map(([e,a])=>{const r=s[e];return m`
        /* Фон (если нет hasBackground) */
        .${s.wrapper}.${r}:not(.${s.hasBackground}) {
          .${u} {
            overflow: hidden;
          }

          .notification-buttons-wrapper,
          .${Z}, .${y} {
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
        .${s.wrapper}.${r}:not(.${s.hasTitleColor}) {
          .${y} {
            color: ${X};
          }
        }

        /* Обводка */
        .${s.wrapper}.${r} {
          .${u} {
            border: 1px solid ${a.borderColor};
            box-shadow: ${Y};
          }
        }
      `}).flat(),x="tooltip--fullWidth",I=o(Q),j=o(U),K=o(T),N=o`
  * {
    ${()=>g({theme:"light"})}
  }
`,_=o`
  * {
    ${()=>g({theme:"dark"})}
  }
`,P=o`
  * {
    ${()=>D()}
  }
`,f=m`
  .popover-wrapper:has(> .${x}) {
    width: 100%;
  }
`,n=o`
  ${f}
`,w=o(C),ee=o(S),te=o(L),ae=o(k),oe=o($),re=()=>(b.useEffect(()=>(document.documentElement.setAttribute("data-theme","dark"),()=>{document.documentElement.removeAttribute("data-theme")}),[]),t.jsxs(t.Fragment,{children:[t.jsx(I,{}),t.jsx(j,{}),t.jsx(w,{}),t.jsx(_,{}),t.jsx(n,{})]}));function v(e,a){return e.join(`
`).replace(/:root/g,a)}const G={light:T,dark:C,highContrastLight:S,highContrastDark:L,betaCoreLight:k,betaCoreDark:$},ie={light:K,dark:w,highContrastLight:ee,highContrastDark:te,betaCoreLight:ae,betaCoreDark:oe},c=({theme:e="light"})=>{b.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const a=ie[e],r=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxs(t.Fragment,{children:[t.jsx(I,{}),t.jsx(j,{}),t.jsx(a,{}),r?t.jsx(N,{}):t.jsx(_,{}),t.jsx(n,{}),t.jsx(P,{})]})},se=o`
  ${({$theme:e,$scopeSelector:a})=>a?v(G[e],a):""}
`,h=({theme:e="light",scopeSelector:a})=>{const r=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsxs(t.Fragment,{children:[t.jsx(se,{$theme:e,$scopeSelector:a}),r?t.jsx(N,{}):t.jsx(_,{}),t.jsx(n,{}),t.jsx(P,{})]})},l=({isLightBase:e,theme:a})=>m`
  ${v(G[a],"&")}
  ${g({theme:e?"light":"dark"})}
  ${f}
  ${D()}
`,d=E.div`
  ${({isLightBase:e,activeTheme:a})=>l({isLightBase:e,theme:a})}
`,p=({theme:e="light",className:a,children:r,...R})=>{const q=e==="light"||e==="highContrastLight"||e==="betaCoreLight";return t.jsx(d,{className:B("TestRootIsolatedThemeProviderLayout",a),...R,isLightBase:q,activeTheme:e,children:r})};try{n.displayName="GlobalPopoverStyles",n.__docgenInfo={description:"",displayName:"GlobalPopoverStyles",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="GlobalStyle",c.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{h.displayName="TestGlobalIsolatedStyleWithReplace",h.__docgenInfo={description:"",displayName:"TestGlobalIsolatedStyleWithReplace",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},scopeSelector:{defaultValue:null,description:`Селектор для скоупинга темы.
@example ".rootContainerOfMicroFront"`,name:"scopeSelector",required:!0,type:{name:"string"}}}}}catch{}try{l.displayName="styledTestRootIsolatedThemeProviderLayoutMixin",l.__docgenInfo={description:"",displayName:"styledTestRootIsolatedThemeProviderLayoutMixin",props:{isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}try{d.displayName="StyledTestRootIsolatedThemeProviderLayout",d.__docgenInfo={description:"",displayName:"StyledTestRootIsolatedThemeProviderLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},isLightBase:{defaultValue:null,description:"",name:"isLightBase",required:!0,type:{name:"boolean"}},activeTheme:{defaultValue:null,description:"",name:"activeTheme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="TestRootIsolatedThemeProviderLayout",p.__docgenInfo={description:"",displayName:"TestRootIsolatedThemeProviderLayout",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"highContrastLight"'},{value:'"highContrastDark"'},{value:'"betaCoreLight"'},{value:'"betaCoreDark"'}]}}}}}catch{}const pe=Object.freeze(Object.defineProperty({__proto__:null,DarkGlobalStyle:re,GlobalPopoverStyles:n,GlobalStyle:c,StyledTestRootIsolatedThemeProviderLayout:d,TOOLTIP_FULL_WIDTH_CLASS:x,TestGlobalIsolatedStyleWithReplace:h,TestRootIsolatedThemeProviderLayout:p,scopeTheme:v,styledTestRootIsolatedThemeProviderLayoutMixin:l,testGlobalPopoverStylesMixin:f},Symbol.toStringTag,{value:"Module"}));export{re as D,c as G,d as S,x as T,n as a,h as b,s as c,p as d,l as e,pe as f,v as s,f as t};
