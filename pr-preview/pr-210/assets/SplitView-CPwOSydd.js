import{b as g,r as l}from"./react-UEdzNlUe.js";import{t as H,j as y,d as T,b as F,i as U,f as G,h as J}from"./utils-JpoKTq_4.js";import{M as K}from"./ModalDF--MCRAtAI.js";import{s as _}from"./constants-YnncqoDz.js";import{di as Q,dj as R,dk as A,G as Y,dh as Z}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{q as ee}from"./styled-components-DEOLQzLG.js";const $=({children:u,isFullScreened:e,fullScreenedModalDFProps:t})=>{if(!e)return u;const n=typeof(t==null?void 0:t.fullScreen)=="object"?t.fullScreen:void 0;return g.jsxDEV(K,{opened:!0,closeOnOverlayClick:!1,...t,fullScreen:{...n,defaultEnabled:!0},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/components/SplitViewFullscreenWrapper.tsx",lineNumber:23,columnNumber:5},void 0)};try{$.displayName="SplitViewFullscreenWrapper",$.__docgenInfo={description:"",displayName:"SplitViewFullscreenWrapper",props:{isFullScreened:{defaultValue:null,description:"",name:"isFullScreened",required:!0,type:{name:"boolean"}},fullScreenedModalDFProps:{defaultValue:null,description:"",name:"fullScreenedModalDFProps",required:!0,type:{name:"any"}}}}}catch{}const ue=({sidebarIsClosed:u,isResizingRef:e,onTransitionEndExt:t})=>{const[n,r]=l.useState(()=>u);l.useEffect(()=>{u&&r(!0)},[u]);const o=l.useCallback(d=>{t&&t(d),!u&&!e.current&&n&&r(!1)},[n,e,t,u]);return{isClosingOrClosedOrOpening:n,onTransitionEnd:o}},m="SplitView__",a={container:`${m}container`,separator:`${m}separator`,separatorButton:`${m}separator-button`,mainBlock:`${m}main-block`,sidebarBlock:`${m}sidebar-block`,sidebarBlockIsResizing:`${m}sidebar-block-is-resizing`,sidebarIsClosingOrClosedOrOpening:`${m}sidebar-is-closing-closed-opening`,sidebarBlockFullScreenContentContainer:`${m}sidebar-block__full-screen-content-container`,sidebarBlockInModal:`${m}sidebar-block-in-modal`},z=32,L=12,i={mainWidthVar:"--main-width",separatorWidthVar:"--separator-width",sidebarWidthVar:"--sidebar-width",sidebarWidthInPxVar:"--sidebar-width-in-px",gapBetweenBlocksDefaultWidth:z,separatorButtonDefaultWidth:L,separatorDefaultWidth:z+L,sidebarWidths:{minWidthPx:600,adaptive1280MinWidthPx:440,maxWidthPercent:70,defaultWidthPercent:30}},I=(u,e)=>u/100*e,te=(u,e)=>u/e*100,ie=({setSizes:u,isResizingRef:e,containerRef:t,sidebarMinWidthPx:n,sidebarMaxWidthPercent:r,onResize:o})=>{const d=l.useCallback(()=>{var s;document.body.style.cursor="col-resize",e.current=!0,(s=t.current)==null||s.classList.toggle(a.sidebarBlockIsResizing,!0)},[t,e]);return l.useEffect(()=>{const s=()=>{var c;document.body.style.cursor="auto",e.current=!1,(c=t.current)==null||c.classList.toggle(a.sidebarBlockIsResizing,!1)},D=H(c=>{if(!e.current||!t.current)return;c.preventDefault();const b=c.clientX,f=t.current.getBoundingClientRect(),p=f.width-i.separatorDefaultWidth,x=(f.right-b-i.separatorButtonDefaultWidth/2)/p*100,S=te(n,p),w=y(S,x,r),v=100-w,C=w*p/100,k=v*p/100,V={main:v,mainPx:k,sidebar:w,sidebarPx:C};u(V),o==null||o(V)},150);return window.addEventListener("mousemove",D),window.addEventListener("mouseup",s),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",s)}},[t,e,o,u,r,n]),{startResizing:d}},ae=({setSizes:u,containerRef:e,sidebarMinWidthPx:t,sidebarMaxWidthPercent:n,onResize:r})=>{l.useEffect(()=>{const d=T(h=>{const c=h.contentRect.width-i.separatorDefaultWidth;u(b=>{const f=I(b.sidebar,c),W=I(n,c),p=y(t,f,W),x={...b,sidebarPx:p};return r==null||r(x),x})},1e3),s=new ResizeObserver(h=>{h.forEach(d)});return e.current&&s.observe(e.current),()=>{s.disconnect()}},[e,u,n,t])},E={spaceX4:()=>_.x4,spaceX16:()=>_.x16},ne=(u,e,t,n=i.sidebarWidths.minWidthPx)=>{const r=e?{...u,main:100,separator:`${t??0}px`,sidebar:0}:{...u,separator:`${i.separatorDefaultWidth}px`},{main:o,sidebar:d,sidebarPx:s,separator:h}=r;return{[i.mainWidthVar]:`${o}fr`,[i.sidebarWidthVar]:d===0?"minmax(0px, 0fr)":`minmax(${n}px, ${d}fr)`,[i.separatorWidthVar]:h,...s!==void 0&&{[i.sidebarWidthInPxVar]:`${s}px`}}},re=`
      border-top-right-radius: ${E.spaceX4};
      border-bottom-right-radius: ${E.spaceX4};
      `,se=ee.div.attrs({className:a.container})`
  * {
    box-sizing: border-box;
  }
  display: grid;
  position: relative;
  z-index: 0;
  grid-template-columns:
    var(${i.mainWidthVar}) var(${i.separatorWidthVar})
    var(${i.sidebarWidthVar});
  transition: grid-template-columns 0.2s ease-in-out,
    margin-right 0.2s ease-in-out;

  flex-grow: 1;

  & .${a.mainBlock} {
    overflow-x: hidden;
  }

  & .${a.separator}, & .${a.sidebarBlock} {
    --split-view-header-height: ${({$headerHeight:u})=>u!==void 0?`${u}px`:"var(--global-header-height, 72px)"};
    --split-view-bottom-gap: var(--page-layout-padding-bottom, 32px);

    ${F.down("l")`
      --split-view-bottom-gap: var(--page-layout-padding-bottom, 24px);
    `}

    position: sticky;
    top: var(--split-view-header-height);
    height: calc(
      100vh - var(--split-view-header-height) - var(--split-view-bottom-gap)
    );
    overflow-x: hidden;
  }

  & .${a.separator} {
    align-self: start;
    z-index: 1;

    & .${a.separatorButton} {
      margin-left: ${i.gapBetweenBlocksDefaultWidth}px;
      position: relative;
      border: none;
      padding: 0;
      width: ${i.separatorDefaultWidth-i.gapBetweenBlocksDefaultWidth}px;
      height: 100%;
      background-color: ${()=>Q};
      border-radius: ${E.spaceX4} 0 0 ${E.spaceX4};

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        width: 4px;
        height: ${E.spaceX16};
        border-radius: 95px;
        background-color: ${()=>R};
      }
      &:hover {
        &::before {
          background-color: ${()=>A};
        }
      }

      cursor: col-resize;

      // скрываем текст
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &.${a.sidebarBlockIsResizing} {
    & .${a.separatorButton}:before {
      background-color: ${()=>A};
    }
  }

  .${a.sidebarBlock} {
    z-index: 0;
    align-self: start;
    background-color: ${()=>Y};
    box-shadow: ${()=>Z};
    ${F.up("xl")(re)};
  }
  // для предотвращения сжатия внутр контента sidebar при открытии и закрытии
  .${a.sidebarIsClosingOrClosedOrOpening} > * {
    width: var(${i.sidebarWidthInPxVar});
  }

  ${({$insidePageLayout:u,$sidebarIsClosed:e})=>u&&(e?"margin-right: 0;":`
    margin-right: calc(-1 * var(--page-layout-padding-inline, 32px));

    ${F.down("l")`
      margin-right: calc(-1 * var(--page-layout-padding-inline, 24px));
    `}
  `)}

  ${({$css:u})=>u}
`,oe=u=>({avatarSize:u?"m":"l"}),de=(u,e)=>e??(u?i.sidebarWidths.adaptive1280MinWidthPx:i.sidebarWidths.minWidthPx),le=(u,e)=>typeof u=="function"?u(e):u,M=({mainContent:u,sidebar:e,style:t,refContainer:n,$css:r,onTransitionEnd:o,onResize:d,headerHeight:s,insidePageLayout:h=!1,disableMediaAdaptive:D=!1,...c})=>{const b=l.useRef(!1),f=l.useRef(null),{down:W}=U(),p=!D&&W("xl"),{minWidthPx:x,maxWidthPercent:S=i.sidebarWidths.maxWidthPercent,defaultWidthPercent:P=i.sidebarWidths.defaultWidthPercent}=e??{},w=e==null?void 0:e.content,v=de(p,x),C=l.useMemo(()=>oe(p),[p]),k=l.useMemo(()=>le(w,C),[w,C]),[V,N]=l.useState(()=>{const O=y(0,P,Math.min(S,100));return{main:100-O,sidebar:O}}),B=!(e!=null&&e.isOpened),{startResizing:j}=ie({setSizes:N,containerRef:f,isResizingRef:b,sidebarMaxWidthPercent:S,sidebarMinWidthPx:v,onResize:d});ae({setSizes:N,containerRef:f,sidebarMaxWidthPercent:S,sidebarMinWidthPx:v,onResize:d});const{isClosingOrClosedOrOpening:q,onTransitionEnd:X}=ue({sidebarIsClosed:B,isResizingRef:b,onTransitionEndExt:o});return g.jsxDEV(se,{ref:J(f,n),style:{...ne(V,B,e==null?void 0:e.paddingLeftOnClosed,v),...t},$css:r,$headerHeight:s,$insidePageLayout:h,$sidebarIsClosed:B,onTransitionEnd:X,...c,children:[g.jsxDEV("div",{className:a.mainBlock,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:113,columnNumber:7},void 0),g.jsxDEV("div",{className:a.separator,children:g.jsxDEV("button",{className:a.separatorButton,type:"button",onMouseDown:j,children:"Разделитель"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:116,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:115,columnNumber:7},void 0),g.jsxDEV("div",{className:G(a.sidebarBlock,q&&a.sidebarIsClosingOrClosedOrOpening,(e==null?void 0:e.isFullScreened)&&a.sidebarBlockInModal),children:g.jsxDEV($,{isFullScreened:e==null?void 0:e.isFullScreened,fullScreenedModalDFProps:e==null?void 0:e.fullScreenedModalDFProps,children:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:131,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:124,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:95,columnNumber:5},void 0)};try{M.displayName="SplitView",M.__docgenInfo={description:"",displayName:"SplitView",props:{mainContent:{defaultValue:null,description:"Prop для основного контента (слева)",name:"mainContent",required:!0,type:{name:"ReactNode"}},sidebar:{defaultValue:null,description:"Prop свойств sidebar-а (справа), в том числе и контента",name:"sidebar",required:!1,type:{name:"{ content: SplitViewAdaptiveContent; isOpened?: boolean; isFullScreened?: boolean; fullScreenedModalDFProps?: ModalDFProps; defaultWidthPercent?: number; maxWidthPercent?: number; minWidthPx?: number; paddingLeftOnClosed?: number; }"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для `sidebar.content` и desktop min-width sidebar, если `sidebar.minWidthPx` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},refContainer:{defaultValue:null,description:"",name:"refContainer",required:!1,type:{name:"Ref<HTMLDivElement>"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"(data: SplVSizes) => void"}},headerHeight:{defaultValue:null,description:`Высота шапки в пикселях. Если передан — используется как приоритет для sticky top и расчёта высоты.
Если не передан — берётся из CSS-переменной --global-header-height (fallback 72px).`,name:"headerHeight",required:!1,type:{name:"number"}},insidePageLayout:{defaultValue:{value:"false"},description:`Компенсация padding-inline от PageLayout.
При true контейнер SplitView получает отрицательный margin-right,
чтобы sidebar прижимался к правому краю viewport.`,name:"insidePageLayout",required:!1,type:{name:"boolean"}}}}}catch{}export{M as S,i as a,a as s};
