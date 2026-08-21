import{d as n,r as c}from"./react-D2T61mpp.js";import{I as x,a as E,D as z,B as P,M as H}from"./@salutejs/sdds-finai-ogK2RFsf.js";import{P as A,i6 as O,jw as R,jx as X,f6 as L}from"./@salutejs/plasma-icons-pFu65Sbu.js";import{s as u,c as Y,d as U}from"./constants-B3b49qmU.js";import{H as m,C as V}from"./styled-components-k3SMx5Eo.js";import{C as W}from"./Container-r_gNKX_T.js";import{y as $,cd as G,T as M,x as J,aD as K,w as Q}from"./@salutejs/sdds-themes-DMMPng_c.js";import{B as f}from"./Box-Ls87w_Gy.js";import{ba as Z,bb as ee}from"./vendor-Bxn4nphO.js";const o={container:"modalDF_container",root:"modalDF_root",left:"modalDF_left",main:"modalDF_main-container",serviceButtons:"modalDF_service-buttons",header:"modalDF_header",headerTitlesContainer:"modalDF_header-title-container",backIconButton:"modalDF_back-icon-button",headerTitlesBox:"modalDF_header-titles-box",headerTitle:"modalDF_header-title",headerSubTitle:"modalDF_header-subTitle",headerRightBlock:"modalDF_header-right-block",footer:"modalDF_footer",mainFooterLeft:"modalDF_footer-left",mainFooterRight:"modalDF_footer-right",content:"modalDF_content"},g=({iconSize:e,...i})=>n.jsxDEV(x,{view:"secondary",size:"xs",pin:"circle-circle",className:o.backIconButton,...i,children:n.jsxDEV(A,{size:"xs",...i.size==="s"&&{size:i.size},...e&&{size:e}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/BackIconButton.tsx",lineNumber:19,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/BackIconButton.tsx",lineNumber:12,columnNumber:3},void 0);try{g.displayName="BackIconButton",g.__docgenInfo={description:"",displayName:"BackIconButton",props:{}}}catch{}const oe={spaceX4:()=>u.x4},j=m(E).attrs({length:"16px",orientation:"vertical"})`
  margin-inline: ${oe.spaceX4};
`,y=({dropdownProps:e,iconSize:i,...a})=>{const t=n.jsxDEV(x,{view:"secondary",size:"xs",...a,children:n.jsxDEV(O,{size:"xs",...a.size==="s"&&{size:a.size},...i&&{size:i}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/DotsIconButton.tsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/DotsIconButton.tsx",lineNumber:14,columnNumber:5},void 0);return e?n.jsxDEV(z,{...e,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/DotsIconButton.tsx",lineNumber:27,columnNumber:10},void 0):t};try{y.displayName="DotsIconButton",y.__docgenInfo={description:"",displayName:"DotsIconButton",props:{}}}catch{}const s={spaceX:()=>u.x8,spaceY:()=>u.x8,spaceX24:()=>u.x24,spaceX8:()=>u.x8,spaceX1:()=>u.x1,spaceX12:()=>u.x12,borderRadius:()=>Y.m,bg:()=>$},ne=m(W).attrs({className:o.root})`
  &,
  & * {
    box-sizing: border-box;
  }

  & {
    view-transition-name: ${o.root};
    display: grid; // для появления скролла у нужного компонента (Main)

    min-width: 400px;
    max-width: calc(${U.xl-32}px - 32px);
    max-height: calc(100vh - 32px);

    position: relative;
    background: ${s.bg};
    box-shadow: ${()=>G};
    border-radius: ${s.borderRadius};
    ${()=>M}
    // для оберток компонента Container (для корректной высоты блока)
        & > div:not(.${o.left}):not(.${o.main}) {
      max-height: inherit;
    }

    &:not(:has(.${o.left})) {
      .${o.main} {
        margin-left: ${s.spaceX};
      }
    }

    ${({$fullScreened:e})=>e&&V`
        width: calc(100vw - 32px);
        height: calc(100vh - 32px);
      `}
  }
`,I=V`
  overflow: hidden;

  margin-block: ${s.spaceY};

  // отступы модального окна сверху и снизу
  max-height: calc(100% - ${s.spaceY} - ${s.spaceY});

  &:not(:has(.${o.content})) {
    overflow-y: scroll;

    & .${o.header} {
      position: sticky;
      background-color: ${s.bg};
      top: 0px;
    }
  }
`,ie=m(f).attrs({className:o.left})`
  &.${o.left} {
    margin-left: ${s.spaceX};
    ${I}

    display: flex; // для корректного появления скролла у контента блока (у контента flex-grow:1;)
    flex-direction: column;

    & .${o.header} {
      & .${o.serviceButtons} {
        display: none;
      }
    }

    & .${o.content} {
    }
  }
`,ae=m(f).attrs({className:o.main})`
  &.${o.main} {
    margin-right: ${s.spaceX};
    ${I}

    height: 100%;
    /* border-radius: 0px ${s.borderRadius} ${s.borderRadius} 0px; */

    display: flex;
    flex-direction: column;
  }
`,te=m(f).attrs({className:o.header})`
  &.${o.header} {
    flex-shrink: 0;
    height: fit-content;
    min-height: ${s.spaceX24};

    padding-bottom: ${s.spaceY};

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${s.spaceX12};

    & .${o.headerTitlesContainer} {
      display: flex;
      gap: ${s.spaceX8};
      align-content: flex-start;
    }

    & .${o.headerTitlesBox} {
      display: flex;
      flex-direction: column;
      row-gap: ${s.spaceX1};
      & .${o.headerTitle} {
        padding: 0px;
        margin: 0px;
        color: ${()=>J};
        ${()=>K};
      }
      & .${o.headerSubTitle} {
        padding: 0px;
        margin: 0px;
        color: ${()=>Q};
        ${()=>M};
      }
    }

    & .${o.backIconButton} {
      flex-shrink: 0;
    }

    & .${o.headerRightBlock} {
      display: flex;
      height: fit-content;
      align-items: center;

      margin-bottom: auto;
    }
  }
`,se=m(f).attrs({className:o.content})`
  & {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,re=m(f).attrs({className:o.footer})`
  &.${o.footer} {
    flex-shrink: 0;
    height: fit-content;

    padding-top: ${s.spaceX};

    display: flex;
    justify-content: space-between;
  }
`;function D({leftBlock:e,rightBlock:i,...a}){return n.jsxDEV(re,{...a,children:[n.jsxDEV("div",{className:o.mainFooterLeft,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Footer.tsx",lineNumber:8,columnNumber:7},this),n.jsxDEV("div",{className:o.mainFooterRight,children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Footer.tsx",lineNumber:9,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Footer.tsx",lineNumber:7,columnNumber:5},this)}try{D.displayName="Footer",D.__docgenInfo={description:"",displayName:"Footer",props:{leftBlock:{defaultValue:null,description:"",name:"leftBlock",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"",name:"rightBlock",required:!1,type:{name:"ReactNode"}}}}}catch{}const S=c.createContext(!1),T=c.createContext(null),q=c.createContext(null),v=({children:e,fullScreened:i,toggleFullScreen:a,onClose:t})=>n.jsxDEV(q.Provider,{value:t??null,children:n.jsxDEV(S.Provider,{value:i,children:n.jsxDEV(T.Provider,{value:a,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ctxs.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ctxs.tsx",lineNumber:21,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ctxs.tsx",lineNumber:19,columnNumber:3},void 0);try{v.displayName="CtxsProviders",v.__docgenInfo={description:"",displayName:"CtxsProviders",props:{fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!0,type:{name:"boolean"}},toggleFullScreen:{defaultValue:null,description:"",name:"toggleFullScreen",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const F=m(f).attrs({className:o.serviceButtons})`
  display: inline-flex;
  column-gap: ${u.x2};
  background-color: ${({hasBackground:e})=>e?$:"transparent"};
`,b=({hasBackground:e=!0,...i})=>{const a=c.useContext(S),t=c.useContext(T),r=c.useContext(q),l=a!==null,d=a?R:X;return n.jsxDEV(F,{hasBackground:e,...i,children:[l&&n.jsxDEV(x,{onClick:t??void 0,size:"xs",view:"secondary",pin:"circle-circle",title:a?"Выйти из полноэкранного режима":"На весь экран",children:n.jsxDEV(d,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx",lineNumber:49,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx",lineNumber:40,columnNumber:9},void 0),n.jsxDEV(x,{onClick:r??void 0,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",children:n.jsxDEV(L,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx",lineNumber:59,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx",lineNumber:52,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx",lineNumber:38,columnNumber:5},void 0)};try{F.displayName="StyledServiceButtons",F.__docgenInfo={description:"компонент скрывается, если компонент вставлен внутрь [`StyledLeft`](../styled.ts)",displayName:"StyledServiceButtons",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{b.displayName="ServiceButtons",b.__docgenInfo={description:"",displayName:"ServiceButtons",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string | ComponentType<any>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"string | ComponentType<any>"}}}}}catch{}const le=m(P).attrs({view:"light"})`
  // margin-left: ${u.x8};
`;function _({title:e,badge:i,subTitle:a,rightBlock:t,onBackClick:r,showServiceButtons:l=!0,showBackButton:d=!1,...p}){return n.jsxDEV(te,{...p,children:[n.jsxDEV("div",{className:o.headerTitlesContainer,children:[d&&n.jsxDEV(g,{onClick:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:31,columnNumber:28},this),n.jsxDEV("div",{className:o.headerTitlesBox,children:[e&&n.jsxDEV("h3",{className:o.headerTitle,children:[e,i&&n.jsxDEV(n.Fragment,{children:["  ",n.jsxDEV(le,{view:"light",...i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:39,columnNumber:19},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:37,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:34,columnNumber:13},this),a&&n.jsxDEV("p",{className:o.headerSubTitle,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:44,columnNumber:24},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:32,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:30,columnNumber:7},this),n.jsxDEV("div",{className:o.headerRightBlock,children:[t,t&&n.jsxDEV(j,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:50,columnNumber:24},this),l&&n.jsxDEV(b,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:51,columnNumber:32},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:47,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/components/Header.tsx",lineNumber:29,columnNumber:5},this)}try{_.displayName="Header",_.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"any"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"",name:"rightBlock",required:!1,type:{name:"ReactNode"}},onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"() => void"}},showBackButton:{defaultValue:{value:"false"},description:"",name:"showBackButton",required:!1,type:{name:"boolean"}}}}}catch{}const w=e=>{const i=e.closeOnOverlayClick??!0;return{closeOnOverlayClick:i,closeOnEsc:!0,overlay:n.jsxDEV(Z,{onOverlayClick:a=>{var t;e!=null&&e.onOverlayClick?e.onOverlayClick(a):i&&((t=e==null?void 0:e.onClose)==null||t.call(e))},zIndex:e.zIndexOverlay??"9000",backgroundColorProperty:"#060A0C47"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/constants.tsx",lineNumber:11,columnNumber:7},void 0),hasBody:!1}};try{w.displayName="defProps",w.__docgenInfo={description:"",displayName:"defProps",props:{fullScreen:{defaultValue:null,description:"",name:"fullScreen",required:!1,type:{name:"boolean | { defaultEnabled?: boolean; saveStateAfterClosing?: boolean; onFullScreen?: () => void; onExitFullScreen?: () => void; }"}},contentContainerProps:{defaultValue:null,description:"",name:"contentContainerProps",required:!1,type:{name:"ContainerProps"}},zIndexOverlay:{defaultValue:null,description:"",name:"zIndexOverlay",required:!1,type:{name:"string"}}}}}catch{}function de(e){const i=[o.left,o.main];return!!e&&Array.isArray(e)&&i.every(a=>e.some(t=>{var r,l,d;return(d=(l=(r=t==null?void 0:t.type)==null?void 0:r.attrs)==null?void 0:l[1].className)==null?void 0:d.includes(a)}))}const C=e=>e?typeof e=="object"?e.defaultEnabled??!1:!1:null,ce=(e,i)=>{const[a,t]=c.useState(()=>C(e)),r=e&&typeof e=="object"&&e.saveStateAfterClosing;c.useEffect(()=>{!i&&!r&&t(C(e))},[i]);const l=c.useCallback(()=>{var p;if(!e)return;const d=()=>t(h=>{var k,N;return typeof e!="boolean"&&(h?(N=e==null?void 0:e.onExitFullScreen)==null||N.call(e):(k=e==null?void 0:e.onFullScreen)==null||k.call(e)),!h});document.startViewTransition||d(),(p=document.startViewTransition)==null||p.call(document,d)},[]);return{fullScreened:a,toggleFullScreen:l}},ue=c.forwardRef((e,i)=>{const{fullScreen:a,contentContainerProps:t,children:r,...l}=e,{fullScreened:d,toggleFullScreen:p}=ce(a,l.opened),h=de(r),k=h?{split:!0,view:"30/70"}:{stretch:!0},N=h?r:n.jsxDEV("div",{children:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ModalDF.tsx",lineNumber:41,columnNumber:49},void 0);return n.jsxDEV(ee,{children:n.jsxDEV(v,{onClose:l.onClose,fullScreened:d,toggleFullScreen:p,children:n.jsxDEV(H,{ref:i,...w(e),...l,children:n.jsxDEV(ne,{className:o.container,$fullScreened:!!d,roundedInner:!1,...k,...t,children:N},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ModalDF.tsx",lineNumber:53,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ModalDF.tsx",lineNumber:52,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ModalDF.tsx",lineNumber:45,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/ModalDF/ModalDF.tsx",lineNumber:44,columnNumber:7},void 0)}),B=Object.assign(ue,{Left:ie,Main:ae,Header:_,Footer:D,Content:se,Divider:j,ServiceButtons:b,DotsIconButton:y,BackIconButton:g});B.displayName="ModalDF";try{B.displayName="ModalDF",B.__docgenInfo={description:"",displayName:"ModalDF",props:{}}}catch{}export{B as M,b as S,o as c};
