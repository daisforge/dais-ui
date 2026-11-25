import{j as f,r as l}from"./react-DYHuXpTF.js";import{t as H,i as V,d as T,a as y,h as U,e as G,f as J}from"./utils-DbMTrPCQ.js";import{M as K}from"./ModalDF-C-bZ-Kmu.js";import{s as A}from"./constants-Des9Datc.js";import{di as Q,dj as R,dk as z,G as Y,dh as Z}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as uu}from"./styled-components-C3-Vg48S.js";const P=({children:e,isFullScreened:u,fullScreenedModalDFProps:t})=>{if(!u)return e;const r=typeof(t==null?void 0:t.fullScreen)=="object"?t.fullScreen:void 0;return f.jsx(K,{opened:!0,closeOnOverlayClick:!1,...t,fullScreen:{...r,defaultEnabled:!0},children:e})};try{P.displayName="SplitViewFullscreenWrapper",P.__docgenInfo={description:"",displayName:"SplitViewFullscreenWrapper",props:{isFullScreened:{defaultValue:null,description:"",name:"isFullScreened",required:!0,type:{name:"boolean"}},fullScreenedModalDFProps:{defaultValue:null,description:"",name:"fullScreenedModalDFProps",required:!0,type:{name:"any"}}}}}catch{}const eu=({sidebarIsClosed:e,isResizingRef:u,onTransitionEndExt:t})=>{const[r,n]=l.useState(()=>e);l.useEffect(()=>{e&&n(!0)},[e]);const o=l.useCallback(d=>{t&&t(d),!e&&!u.current&&r&&n(!1)},[r,u,t,e]);return{isClosingOrClosedOrOpening:r,onTransitionEnd:o}},h="SplitView__",i={container:`${h}container`,separator:`${h}separator`,separatorButton:`${h}separator-button`,mainBlock:`${h}main-block`,sidebarBlock:`${h}sidebar-block`,sidebarBlockIsResizing:`${h}sidebar-block-is-resizing`,sidebarIsClosingOrClosedOrOpening:`${h}sidebar-is-closing-closed-opening`,sidebarBlockFullScreenContentContainer:`${h}sidebar-block__full-screen-content-container`,sidebarBlockInModal:`${h}sidebar-block-in-modal`},L=32,I=12,a={mainWidthVar:"--main-width",separatorWidthVar:"--separator-width",sidebarWidthVar:"--sidebar-width",sidebarWidthInPxVar:"--sidebar-width-in-px",gapBetweenBlocksDefaultWidth:L,separatorButtonDefaultWidth:I,separatorDefaultWidth:L+I,sidebarWidths:{minWidthPx:600,adaptive1280MinWidthPx:440,maxWidthPercent:70,defaultWidthPercent:30}},M=(e,u)=>e/100*u,tu=(e,u)=>e/u*100,au=({setSizes:e,isResizingRef:u,containerRef:t,sidebarMinWidthPx:r,sidebarMaxWidthPercent:n,onResize:o})=>{const d=l.useCallback(()=>{var s;document.body.style.cursor="col-resize",u.current=!0,(s=t.current)==null||s.classList.toggle(i.sidebarBlockIsResizing,!0)},[t,u]);return l.useEffect(()=>{const s=()=>{var c;document.body.style.cursor="auto",u.current=!1,(c=t.current)==null||c.classList.toggle(i.sidebarBlockIsResizing,!1)},C=H(c=>{if(!u.current||!t.current)return;c.preventDefault();const b=c.clientX,g=t.current.getBoundingClientRect(),p=g.width-a.separatorDefaultWidth,x=(g.right-b-a.separatorButtonDefaultWidth/2)/p*100,w=tu(r,p),W=V(w,x,n),v=100-W,B=W*p/100,$=v*p/100,S={main:v,mainPx:$,sidebar:W,sidebarPx:B};e(S),o==null||o(S)},150);return window.addEventListener("mousemove",C),window.addEventListener("mouseup",s),()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",s)}},[t,u,o,e,n,r]),{startResizing:d}},iu=({setSizes:e,containerRef:u,sidebarMinWidthPx:t,sidebarMaxWidthPercent:r,onResize:n})=>{l.useEffect(()=>{const d=T(m=>{const c=m.contentRect.width-a.separatorDefaultWidth;e(b=>{const g=M(b.sidebar,c),E=M(r,c),p=V(t,g,E),x={...b,sidebarPx:p};return n==null||n(x),x})},1e3),s=new ResizeObserver(m=>{m.forEach(d)});return u.current&&s.observe(u.current),()=>{s.disconnect()}},[u,e,r,t])},D={spaceX4:()=>A.x4,spaceX16:()=>A.x16},ru=(e,u,t,r=a.sidebarWidths.minWidthPx)=>{const n=u?{...e,main:100,separator:`${t??0}px`,sidebar:0}:{...e,separator:`${a.separatorDefaultWidth}px`},{main:o,sidebar:d,sidebarPx:s,separator:m}=n;return{[a.mainWidthVar]:`${o}fr`,[a.sidebarWidthVar]:d===0?"minmax(0px, 0fr)":`minmax(${r}px, ${d}fr)`,[a.separatorWidthVar]:m,...s!==void 0&&{[a.sidebarWidthInPxVar]:`${s}px`}}},nu=`
      border-top-right-radius: ${D.spaceX4};
      border-bottom-right-radius: ${D.spaceX4};
      `,su=uu.div.attrs({className:i.container})`
  * {
    box-sizing: border-box;
  }
  display: grid;
  position: relative;
  z-index: 0;
  grid-template-columns:
    var(${a.mainWidthVar}) var(${a.separatorWidthVar})
    var(${a.sidebarWidthVar});
  transition: grid-template-columns 0.2s ease-in-out,
    margin-right 0.2s ease-in-out;

  flex-grow: 1;

  & .${i.mainBlock} {
    overflow-x: hidden;
  }

  & .${i.separator}, & .${i.sidebarBlock} {
    --split-view-header-height: ${({$headerHeight:e})=>e!==void 0?`${e}px`:"var(--global-header-height, 72px)"};
    --split-view-bottom-gap: var(--page-layout-padding-bottom, 32px);

    ${y.down("l")`
      --split-view-bottom-gap: var(--page-layout-padding-bottom, 24px);
    `}

    position: sticky;
    top: var(--split-view-header-height);
    height: calc(
      100vh - var(--split-view-header-height) - var(--split-view-bottom-gap)
    );
    overflow-x: hidden;
  }

  & .${i.separator} {
    align-self: start;
    z-index: 1;

    & .${i.separatorButton} {
      margin-left: ${a.gapBetweenBlocksDefaultWidth}px;
      position: relative;
      border: none;
      padding: 0;
      width: ${a.separatorDefaultWidth-a.gapBetweenBlocksDefaultWidth}px;
      height: 100%;
      background-color: ${()=>Q};
      border-radius: ${D.spaceX4} 0 0 ${D.spaceX4};

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        width: 4px;
        height: ${D.spaceX16};
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
  &.${i.sidebarBlockIsResizing} {
    & .${i.separatorButton}:before {
      background-color: ${()=>z};
    }
  }

  .${i.sidebarBlock} {
    z-index: 0;
    align-self: start;
    background-color: ${()=>Y};
    box-shadow: ${()=>Z};
    ${y.up("xl")(nu)};
  }
  // для предотвращения сжатия внутр контента sidebar при открытии и закрытии
  .${i.sidebarIsClosingOrClosedOrOpening} > * {
    width: var(${a.sidebarWidthInPxVar});
  }

  ${({$insidePageLayout:e,$sidebarIsClosed:u})=>e&&(u?"margin-right: 0;":`
    margin-right: calc(-1 * var(--page-layout-padding-inline, 32px));

    ${y.down("l")`
      margin-right: calc(-1 * var(--page-layout-padding-inline, 24px));
    `}
  `)}

  ${({$css:e})=>e}
`,ou=e=>({avatarSize:e?"m":"l"}),du=(e,u)=>u??(e?a.sidebarWidths.adaptive1280MinWidthPx:a.sidebarWidths.minWidthPx),lu=(e,u)=>typeof e=="function"?e(u):e,j=({mainContent:e,sidebar:u,style:t,refContainer:r,$css:n,onTransitionEnd:o,onResize:d,headerHeight:s,insidePageLayout:m=!1,disableMediaAdaptive:C=!1,...c})=>{const b=l.useRef(!1),g=l.useRef(null),{down:E}=U(),p=!C&&E("xl"),{minWidthPx:x,maxWidthPercent:w=a.sidebarWidths.maxWidthPercent,defaultWidthPercent:k=a.sidebarWidths.defaultWidthPercent}=u??{},W=u==null?void 0:u.content,v=du(p,x),B=l.useMemo(()=>ou(p),[p]),$=l.useMemo(()=>lu(W,B),[W,B]),[S,O]=l.useState(()=>{const _=V(0,k,Math.min(w,100));return{main:100-_,sidebar:_}}),F=!(u!=null&&u.isOpened),{startResizing:q}=au({setSizes:O,containerRef:g,isResizingRef:b,sidebarMaxWidthPercent:w,sidebarMinWidthPx:v,onResize:d});iu({setSizes:O,containerRef:g,sidebarMaxWidthPercent:w,sidebarMinWidthPx:v,onResize:d});const{isClosingOrClosedOrOpening:N,onTransitionEnd:X}=eu({sidebarIsClosed:F,isResizingRef:b,onTransitionEndExt:o});return f.jsxs(su,{ref:J(g,r),style:{...ru(S,F,u==null?void 0:u.paddingLeftOnClosed,v),...t},$css:n,$headerHeight:s,$insidePageLayout:m,$sidebarIsClosed:F,onTransitionEnd:X,...c,children:[f.jsx("div",{className:i.mainBlock,children:e}),f.jsx("div",{className:i.separator,children:f.jsx("button",{className:i.separatorButton,type:"button",onMouseDown:q,children:"Разделитель"})}),f.jsx("div",{className:G(i.sidebarBlock,N&&i.sidebarIsClosingOrClosedOrOpening,(u==null?void 0:u.isFullScreened)&&i.sidebarBlockInModal),children:f.jsx(P,{isFullScreened:u==null?void 0:u.isFullScreened,fullScreenedModalDFProps:u==null?void 0:u.fullScreenedModalDFProps,children:$})})]})};try{j.displayName="SplitView",j.__docgenInfo={description:"",displayName:"SplitView",props:{mainContent:{defaultValue:null,description:"Prop для основного контента (слева)",name:"mainContent",required:!0,type:{name:"ReactNode"}},sidebar:{defaultValue:null,description:"Prop свойств sidebar-а (справа), в том числе и контента",name:"sidebar",required:!1,type:{name:"{ content: SplitViewAdaptiveContent; isOpened?: boolean; isFullScreened?: boolean; fullScreenedModalDFProps?: ModalDFProps; defaultWidthPercent?: number; maxWidthPercent?: number; minWidthPx?: number; paddingLeftOnClosed?: number; }"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:"Отключает принудительный адаптив компонента на viewport <= 1280px.\n@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.\n@remarks При `true` компонент использует desktop-размеры для `sidebar.content` и desktop min-width sidebar, если `sidebar.minWidthPx` не передан.\nПоведение сохраняется даже на viewport <= 1280px.\nЭто временный escape hatch, не основной сценарий использования.",name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},refContainer:{defaultValue:null,description:"",name:"refContainer",required:!1,type:{name:"Ref<HTMLDivElement>"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"(data: SplVSizes) => void"}},headerHeight:{defaultValue:null,description:`Высота шапки в пикселях. Если передан — используется как приоритет для sticky top и расчёта высоты.
Если не передан — берётся из CSS-переменной --global-header-height (fallback 72px).`,name:"headerHeight",required:!1,type:{name:"number"}},insidePageLayout:{defaultValue:{value:"false"},description:`Компенсация padding-inline от PageLayout.
При true контейнер SplitView получает отрицательный margin-right,
чтобы sidebar прижимался к правому краю viewport.`,name:"insidePageLayout",required:!1,type:{name:"boolean"}}}}}catch{}export{j as S,a,i as s};
