import{j as a,r as d}from"./react-CAOzMBF_.js";import{I as x,r as A,D as P,s as O,M as R}from"./@salutejs/sdds-finai-CKhMjg07.js";import{P as M,ia as X,jA as L,jB as H,fa as Y}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{s as u,c as U,d as W}from"./constants-DatVHdkd.js";import{H as m,C as D}from"./styled-components-DCFsnh-i.js";import{C as G}from"./Container-C5dULQPk.js";import{A as w,cm as J,V as I,z as K,aE as Q,y as Z}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{B as f}from"./Box-DvvYTz20.js";import{bp as E,bq as ee}from"./vendor-DmWczWMC.js";const t={container:"modalDF_container",root:"modalDF_root",left:"modalDF_left",main:"modalDF_main-container",serviceButtons:"modalDF_service-buttons",header:"modalDF_header",headerTitlesContainer:"modalDF_header-title-container",backIconButton:"modalDF_back-icon-button",headerTitlesBox:"modalDF_header-titles-box",headerTitle:"modalDF_header-title",headerSubTitle:"modalDF_header-subTitle",headerRightBlock:"modalDF_header-right-block",footer:"modalDF_footer",mainFooterLeft:"modalDF_footer-left",mainFooterRight:"modalDF_footer-right",content:"modalDF_content"},_=({iconSize:e,...o})=>a.jsx(x,{view:"secondary",size:"xs",pin:"circle-circle",className:t.backIconButton,...o,children:a.jsx(M,{size:"xs",...o.size==="s"&&{size:o.size},...e&&{size:e}})});try{_.displayName="BackIconButton",_.__docgenInfo={description:"",displayName:"BackIconButton",props:{}}}catch{}const te={spaceX4:()=>u.x4},S=m(A).attrs({length:"16px",orientation:"vertical"})`
  margin-inline: ${te.spaceX4};
`,C=({dropdownProps:e,iconSize:o,...n})=>{const s=a.jsx(x,{view:"secondary",size:"xs",...n,children:a.jsx(X,{size:"xs",...n.size==="s"&&{size:n.size},...o&&{size:o}})});return e?a.jsx(P,{...e,children:s}):s};try{C.displayName="DotsIconButton",C.__docgenInfo={description:"",displayName:"DotsIconButton",props:{}}}catch{}const r={spaceX:()=>u.x8,spaceY:()=>u.x8,spaceX24:()=>u.x24,spaceX8:()=>u.x8,spaceX1:()=>u.x1,spaceX12:()=>u.x12,borderRadius:()=>U.m,bg:()=>w},ae=m(G).attrs({className:t.root})`
  &,
  & * {
    box-sizing: border-box;
  }

  & {
    view-transition-name: ${t.root};
    display: grid; // для появления скролла у нужного компонента (Main)

    min-width: 400px;
    max-width: calc(${W.xl-32}px - 32px);
    max-height: calc(100vh - 32px);

    position: relative;
    background: ${r.bg};
    box-shadow: ${()=>J};
    border-radius: ${r.borderRadius};
    ${()=>I}
    // для оберток компонента Container (для корректной высоты блока)
        & > div:not(.${t.left}):not(.${t.main}) {
      max-height: inherit;
    }

    &:not(:has(.${t.left})) {
      .${t.main} {
        margin-left: ${r.spaceX};
      }
    }

    ${({$fullScreened:e})=>e&&D`
        width: calc(100vw - 32px);
        height: calc(100vh - 32px);
      `}
  }
`,V=D`
  overflow: hidden;

  margin-block: ${r.spaceY};

  // отступы модального окна сверху и снизу
  max-height: calc(100% - ${r.spaceY} - ${r.spaceY});

  &:not(:has(.${t.content})) {
    overflow-y: scroll;

    & .${t.header} {
      position: sticky;
      background-color: ${r.bg};
      top: 0px;
    }
  }
`,oe=m(f).attrs({className:t.left})`
  &.${t.left} {
    margin-left: ${r.spaceX};
    ${V}

    display: flex; // для корректного появления скролла у контента блока (у контента flex-grow:1;)
    flex-direction: column;

    & .${t.header} {
      & .${t.serviceButtons} {
        display: none;
      }
    }

    & .${t.content} {
    }
  }
`,ne=m(f).attrs({className:t.main})`
  &.${t.main} {
    margin-right: ${r.spaceX};
    ${V}

    height: 100%;
    /* border-radius: 0px ${r.borderRadius} ${r.borderRadius} 0px; */

    display: flex;
    flex-direction: column;
  }
`,se=m(f).attrs({className:t.header})`
  &.${t.header} {
    flex-shrink: 0;
    height: fit-content;
    min-height: ${r.spaceX24};

    padding-bottom: ${r.spaceY};

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${r.spaceX12};

    & .${t.headerTitlesContainer} {
      display: flex;
      gap: ${r.spaceX8};
      align-content: flex-start;
    }

    & .${t.headerTitlesBox} {
      display: flex;
      flex-direction: column;
      row-gap: ${r.spaceX1};
      & .${t.headerTitle} {
        padding: 0px;
        margin: 0px;
        color: ${()=>K};
        ${()=>Q};
      }
      & .${t.headerSubTitle} {
        padding: 0px;
        margin: 0px;
        color: ${()=>Z};
        ${()=>I};
      }
    }

    & .${t.backIconButton} {
      flex-shrink: 0;
    }

    & .${t.headerRightBlock} {
      display: flex;
      height: fit-content;
      align-items: center;

      margin-bottom: auto;
    }
  }
`,re=m(f).attrs({className:t.content})`
  & {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,ie=m(f).attrs({className:t.footer})`
  &.${t.footer} {
    flex-shrink: 0;
    height: fit-content;

    padding-top: ${r.spaceX};

    display: flex;
    justify-content: space-between;
  }
`;function b({leftBlock:e,rightBlock:o,...n}){return a.jsxs(ie,{...n,children:[a.jsx("div",{className:t.mainFooterLeft,children:e}),a.jsx("div",{className:t.mainFooterRight,children:o})]})}try{b.displayName="Footer",b.__docgenInfo={description:"",displayName:"Footer",props:{leftBlock:{defaultValue:null,description:"",name:"leftBlock",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"",name:"rightBlock",required:!1,type:{name:"ReactNode"}}}}}catch{}const q=d.createContext(!1),T=d.createContext(null),z=d.createContext(null),$=({children:e,fullScreened:o,toggleFullScreen:n,onClose:s})=>a.jsx(z.Provider,{value:s??null,children:a.jsx(q.Provider,{value:o,children:a.jsx(T.Provider,{value:n,children:e})})});try{$.displayName="CtxsProviders",$.__docgenInfo={description:"",displayName:"CtxsProviders",props:{fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!0,type:{name:"boolean"}},toggleFullScreen:{defaultValue:null,description:"",name:"toggleFullScreen",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const B=m(f).attrs({className:t.serviceButtons})`
  display: inline-flex;
  column-gap: ${u.x2};
  background-color: ${({hasBackground:e})=>e?w:"transparent"};
`,v=({hasBackground:e=!0,...o})=>{const n=d.useContext(q),s=d.useContext(T),i=d.useContext(z),l=n!==null,c=n?L:H;return a.jsxs(B,{hasBackground:e,...o,children:[l&&a.jsx(x,{onClick:s??void 0,size:"xs",view:"secondary",pin:"circle-circle",title:n?"Выйти из полноэкранного режима":"На весь экран",children:a.jsx(c,{size:"xs"})}),a.jsx(x,{onClick:i??void 0,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",children:a.jsx(Y,{size:"xs"})})]})};try{B.displayName="StyledServiceButtons",B.__docgenInfo={description:"компонент скрывается, если компонент вставлен внутрь [`StyledLeft`](../styled.ts)",displayName:"StyledServiceButtons",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{v.displayName="ServiceButtons",v.__docgenInfo={description:"",displayName:"ServiceButtons",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string | ComponentType<any>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"string | ComponentType<any>"}}}}}catch{}const le=m(O).attrs({view:"light"})`
  // margin-left: ${u.x8};
`;function F({title:e,badge:o,subTitle:n,rightBlock:s,onBackClick:i,showServiceButtons:l=!0,showBackButton:c=!1,...p}){return a.jsxs(se,{...p,children:[a.jsxs("div",{className:t.headerTitlesContainer,children:[c&&a.jsx(_,{onClick:i}),a.jsxs("div",{className:t.headerTitlesBox,children:[e&&a.jsxs("h3",{className:t.headerTitle,children:[e,o&&a.jsxs(a.Fragment,{children:["  ",a.jsx(le,{view:"light",...o})]})]}),n&&a.jsx("p",{className:t.headerSubTitle,children:n})]})]}),a.jsxs("div",{className:t.headerRightBlock,children:[s,s&&a.jsx(S,{}),l&&a.jsx(v,{})]})]})}try{F.displayName="Header",F.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"any"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}},rightBlock:{defaultValue:null,description:"",name:"rightBlock",required:!1,type:{name:"ReactNode"}},onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"() => void"}},showBackButton:{defaultValue:{value:"false"},description:"",name:"showBackButton",required:!1,type:{name:"boolean"}}}}}catch{}const j=e=>{const o=e.closeOnOverlayClick??!0;return{closeOnOverlayClick:o,closeOnEsc:!0,overlay:a.jsx(E,{onOverlayClick:n=>{var s;e!=null&&e.onOverlayClick?e.onOverlayClick(n):o&&((s=e==null?void 0:e.onClose)==null||s.call(e))},zIndex:e.zIndexOverlay??"9000",backgroundColorProperty:"#060A0C47"}),hasBody:!1}};try{j.displayName="defProps",j.__docgenInfo={description:"",displayName:"defProps",props:{fullScreen:{defaultValue:null,description:"",name:"fullScreen",required:!1,type:{name:"boolean | { defaultEnabled?: boolean; saveStateAfterClosing?: boolean; onFullScreen?: () => void; onExitFullScreen?: () => void; }"}},contentContainerProps:{defaultValue:null,description:"",name:"contentContainerProps",required:!1,type:{name:"ContainerProps"}},zIndexOverlay:{defaultValue:null,description:"",name:"zIndexOverlay",required:!1,type:{name:"string"}}}}}catch{}function ce(e){const o=[t.left,t.main];return!!e&&Array.isArray(e)&&o.every(n=>e.some(s=>{var i,l,c;return(c=(l=(i=s==null?void 0:s.type)==null?void 0:i.attrs)==null?void 0:l[1].className)==null?void 0:c.includes(n)}))}const N=e=>e?typeof e=="object"?e.defaultEnabled??!1:!1:null,de=(e,o)=>{const[n,s]=d.useState(()=>N(e)),i=e&&typeof e=="object"&&e.saveStateAfterClosing;d.useEffect(()=>{!o&&!i&&s(N(e))},[o]);const l=d.useCallback(()=>{var p;if(!e)return;const c=()=>s(h=>{var y,g;return typeof e!="boolean"&&(h?(g=e==null?void 0:e.onExitFullScreen)==null||g.call(e):(y=e==null?void 0:e.onFullScreen)==null||y.call(e)),!h});document.startViewTransition||c(),(p=document.startViewTransition)==null||p.call(document,c)},[]);return{fullScreened:n,toggleFullScreen:l}},ue=d.forwardRef((e,o)=>{const{fullScreen:n,contentContainerProps:s,children:i,...l}=e,{fullScreened:c,toggleFullScreen:p}=de(n,l.opened),h=ce(i),y=h?{split:!0,view:"30/70"}:{stretch:!0},g=h?i:a.jsx("div",{children:i});return a.jsx(ee,{children:a.jsx($,{onClose:l.onClose,fullScreened:c,toggleFullScreen:p,children:a.jsx(R,{ref:o,...j(e),...l,children:a.jsx(ae,{className:t.container,$fullScreened:!!c,roundedInner:!1,...y,...s,children:g})})})})}),k=Object.assign(ue,{Left:oe,Main:ne,Header:F,Footer:b,Content:re,Divider:S,ServiceButtons:v,DotsIconButton:C,BackIconButton:_});k.displayName="ModalDF";try{k.displayName="ModalDF",k.__docgenInfo={description:"",displayName:"ModalDF",props:{}}}catch{}export{k as M,v as S,t as c};
