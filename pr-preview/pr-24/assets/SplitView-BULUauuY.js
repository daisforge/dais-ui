import{d as g,r as l}from"./react-D2T61mpp.js";import{t as H,s as y,x as T,a as F,f as U,d as G,r as J}from"./utils-nQz3OA2C.js";import{M as K}from"./ModalDF-DTktDTkR.js";import{s as A}from"./constants-B3b49qmU.js";import{bn as Q,cz as R,cA as z,y as Y,b8 as Z}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as uu}from"./styled-components--Gqam1Xr.js";const $=({children:e,isFullScreened:u,fullScreenedModalDFProps:t})=>{if(!u)return e;const n=typeof(t==null?void 0:t.fullScreen)=="object"?t.fullScreen:void 0;return g.jsxDEV(K,{opened:!0,closeOnOverlayClick:!1,...t,fullScreen:{...n,defaultEnabled:!0},children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/components/SplitViewFullscreenWrapper.tsx",lineNumber:23,columnNumber:5},void 0)};try{$.displayName="SplitViewFullscreenWrapper",$.__docgenInfo={description:"",displayName:"SplitViewFullscreenWrapper",props:{isFullScreened:{defaultValue:null,description:"",name:"isFullScreened",required:!0,type:{name:"boolean"}},fullScreenedModalDFProps:{defaultValue:null,description:"",name:"fullScreenedModalDFProps",required:!0,type:{name:"any"}}}}}catch{}const eu=({sidebarIsClosed:e,isResizingRef:u,onTransitionEndExt:t})=>{const[n,r]=l.useState(()=>e);l.useEffect(()=>{e&&r(!0)},[e]);const o=l.useCallback(d=>{t&&t(d),!e&&!u.current&&n&&r(!1)},[n,u,t,e]);return{isClosingOrClosedOrOpening:n,onTransitionEnd:o}},f="SplitView__",a={container:`${f}container`,separator:`${f}separator`,separatorButton:`${f}separator-button`,mainBlock:`${f}main-block`,sidebarBlock:`${f}sidebar-block`,sidebarBlockIsResizing:`${f}sidebar-block-is-resizing`,sidebarIsClosingOrClosedOrOpening:`${f}sidebar-is-closing-closed-opening`,sidebarBlockInModal:`${f}sidebar-block-in-modal`},_=32,L=12,i={mainWidthVar:"--main-width",separatorWidthVar:"--separator-width",sidebarWidthVar:"--sidebar-width",sidebarWidthInPxVar:"--sidebar-width-in-px",gapBetweenBlocksDefaultWidth:_,separatorButtonDefaultWidth:L,separatorDefaultWidth:_+L,sidebarWidths:{minWidthPx:600,adaptive1280MinWidthPx:440,maxWidthPercent:70,defaultWidthPercent:30}},I=(e,u)=>e/100*u,tu=(e,u)=>e/u*100,iu=({setSizes:e,isResizingRef:u,containerRef:t,sidebarMinWidthPx:n,sidebarMaxWidthPercent:r,onResize:o})=>{const d=l.useCallback(()=>{var s;document.body.style.cursor="col-resize",u.current=!0,(s=t.current)==null||s.classList.toggle(a.sidebarBlockIsResizing,!0)},[t,u]);return l.useEffect(()=>{const s=()=>{var c;document.body.style.cursor="auto",u.current=!1,(c=t.current)==null||c.classList.toggle(a.sidebarBlockIsResizing,!1)},D=H(c=>{if(!u.current||!t.current)return;c.preventDefault();const b=c.clientX,h=t.current.getBoundingClientRect(),p=h.width-i.separatorDefaultWidth,x=(h.right-b-i.separatorButtonDefaultWidth/2)/p*100,S=tu(n,p),w=y(S,x,r),v=100-w,V=w*p/100,k=v*p/100,C={main:v,mainPx:k,sidebar:w,sidebarPx:V};e(C),o==null||o(C)},150);return window.addEventListener("mousemove",D),window.addEventListener("mouseup",s),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",s)}},[t,u,o,e,r,n]),{startResizing:d}},au=({setSizes:e,containerRef:u,sidebarMinWidthPx:t,sidebarMaxWidthPercent:n,onResize:r})=>{l.useEffect(()=>{const d=T(m=>{const c=m.contentRect.width-i.separatorDefaultWidth;e(b=>{const h=I(b.sidebar,c),W=I(n,c),p=y(t,h,W),x={...b,sidebarPx:p};return r==null||r(x),x})},1e3),s=new ResizeObserver(m=>{m.forEach(d)});return u.current&&s.observe(u.current),()=>{s.disconnect()}},[u,e,n,t])},E={spaceX4:()=>A.x4,spaceX16:()=>A.x16},nu=(e,u,t,n=i.sidebarWidths.minWidthPx)=>{const r=u?{...e,main:100,separator:`${t??0}px`,sidebar:0}:{...e,separator:`${i.separatorDefaultWidth}px`},{main:o,sidebar:d,sidebarPx:s,separator:m}=r;return{[i.mainWidthVar]:`${o}fr`,[i.sidebarWidthVar]:d===0?"minmax(0px, 0fr)":`minmax(${n}px, ${d}fr)`,[i.separatorWidthVar]:m,...s!==void 0&&{[i.sidebarWidthInPxVar]:`${s}px`}}},ru=`
      border-top-right-radius: ${E.spaceX4};
      border-bottom-right-radius: ${E.spaceX4};
      `,su=uu.div.attrs({className:a.container})`
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
    --split-view-header-height: ${({$headerHeight:e})=>e!==void 0?`${e}px`:"var(--global-header-height, 72px)"};
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
          background-color: ${()=>z};
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
      background-color: ${()=>z};
    }
  }

  .${a.sidebarBlock} {
    z-index: 0;
    align-self: start;
    background-color: ${()=>Y};
    box-shadow: ${()=>Z};
    ${F.up("xl")(ru)};
  }
  // для предотвращения сжатия внутр контента sidebar при открытии и закрытии
  .${a.sidebarIsClosingOrClosedOrOpening} > * {
    width: var(${i.sidebarWidthInPxVar});
  }

  ${({$insidePageLayout:e,$sidebarIsClosed:u})=>e&&(u?"margin-right: 0;":`
    margin-right: calc(-1 * var(--page-layout-padding-inline, 32px));

    ${F.down("l")`
      margin-right: calc(-1 * var(--page-layout-padding-inline, 24px));
    `}
  `)}

  ${({$css:e})=>e}
`,ou=e=>({avatarSize:e?"m":"l"}),du=(e,u)=>u??(e?i.sidebarWidths.adaptive1280MinWidthPx:i.sidebarWidths.minWidthPx),lu=(e,u)=>typeof e=="function"?e(u):e,M=({mainContent:e,sidebar:u,style:t,refContainer:n,$css:r,onTransitionEnd:o,onResize:d,headerHeight:s,insidePageLayout:m=!1,disableMediaAdaptive:D=!1,...c})=>{const b=l.useRef(!1),h=l.useRef(null),{down:W}=U(),p=!D&&W("xl"),{minWidthPx:x,maxWidthPercent:S=i.sidebarWidths.maxWidthPercent,defaultWidthPercent:P=i.sidebarWidths.defaultWidthPercent}=u??{},w=u==null?void 0:u.content,v=du(p,x),V=l.useMemo(()=>ou(p),[p]),k=l.useMemo(()=>lu(w,V),[w,V]),[C,N]=l.useState(()=>{const O=y(0,P,Math.min(S,100));return{main:100-O,sidebar:O}}),B=!(u!=null&&u.isOpened),{startResizing:j}=iu({setSizes:N,containerRef:h,isResizingRef:b,sidebarMaxWidthPercent:S,sidebarMinWidthPx:v,onResize:d});au({setSizes:N,containerRef:h,sidebarMaxWidthPercent:S,sidebarMinWidthPx:v,onResize:d});const{isClosingOrClosedOrOpening:q,onTransitionEnd:X}=eu({sidebarIsClosed:B,isResizingRef:b,onTransitionEndExt:o});return g.jsxDEV(su,{ref:J(h,n),style:{...nu(C,B,u==null?void 0:u.paddingLeftOnClosed,v),...t},$css:r,$headerHeight:s,$insidePageLayout:m,$sidebarIsClosed:B,onTransitionEnd:X,...c,children:[g.jsxDEV("div",{className:a.mainBlock,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:113,columnNumber:7},void 0),g.jsxDEV("div",{className:a.separator,children:g.jsxDEV("button",{className:a.separatorButton,type:"button",onMouseDown:j,children:"Разделитель"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:116,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:115,columnNumber:7},void 0),g.jsxDEV("div",{className:G(a.sidebarBlock,q&&a.sidebarIsClosingOrClosedOrOpening,(u==null?void 0:u.isFullScreened)&&a.sidebarBlockInModal),children:g.jsxDEV($,{isFullScreened:u==null?void 0:u.isFullScreened,fullScreenedModalDFProps:u==null?void 0:u.fullScreenedModalDFProps,children:k},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:131,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:124,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/SplitView/SplitView.tsx",lineNumber:95,columnNumber:5},void 0)};try{M.displayName="SplitView",M.__docgenInfo={description:"",displayName:"SplitView",props:{mainContent:{defaultValue:null,description:"Prop для основного контента (слева)",name:"mainContent",required:!0,type:{name:"ReactNode"}},sidebar:{defaultValue:null,description:"Prop свойств sidebar-а (справа), в том числе и контента",name:"sidebar",required:!1,type:{name:"{ content: SplitViewAdaptiveContent; isOpened?: boolean; isFullScreened?: boolean; fullScreenedModalDFProps?: ModalDFProps; defaultWidthPercent?: number; maxWidthPercent?: number; minWidthPx?: number; paddingLeftOnClosed?: number; }"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для `sidebar.content` и desktop min-width sidebar, если `sidebar.minWidthPx` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},refContainer:{defaultValue:null,description:"",name:"refContainer",required:!1,type:{name:"Ref<HTMLDivElement>"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"(data: SplVSizes) => void"}},headerHeight:{defaultValue:null,description:`Высота шапки в пикселях. Если передан — используется как приоритет для sticky top и расчёта высоты.
Если не передан — берётся из CSS-переменной --global-header-height (fallback 72px).`,name:"headerHeight",required:!1,type:{name:"number"}},insidePageLayout:{defaultValue:{value:"false"},description:`Компенсация padding-inline от PageLayout.
При true контейнер SplitView получает отрицательный margin-right,
чтобы sidebar прижимался к правому краю viewport.`,name:"insidePageLayout",required:!1,type:{name:"boolean"}}}}}catch{}export{M as S};
