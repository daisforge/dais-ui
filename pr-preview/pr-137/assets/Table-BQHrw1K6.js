import{R as bt,j as s,r as h}from"./react-CAOzMBF_.js";import{a as oa,S as wr}from"./FiltersActions-BWfcXHB3.js";import{B as Y}from"./Box-DvvYTz20.js";import{C as ds}from"./Collapse-CblE70vy.js";import{c as Ii,h as sa,i as ia,j as la,m as jr,u as aa,p as Ei,k as ua,l as da,n as Dr,t as ca,v as pa,o as cs,q as ma,r as ha,s as Ms}from"./utils-EIxGvR70.js";import{fa as ln,gH as fa,hX as ps,s$ as Ti,ia as ya,la as Ai,oY as ki,lB as ga,ii as Di,oX as xa,oV as Oi,sL as nr,eW as ba,eQ as Sa,qU as wa,qX as Ca,qW as _a,R as Ra,N as va,uA as Ia,hc as ms,hi as Vi,ig as Ea,ic as Ta,e_ as Aa,wW as Fr,wU as Pr,i9 as ka,hf as Da,hg as Oa,t1 as Va,jA as $a,jB as Na,iB as Ba}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{y as La,x as $i,w as Ni,I as Oe,p as ja,z as Fa,A as vt,r as hs,G as Pa,D as Ha,E as fs,t as Ze,J as Cr,F as Vt,l as Bi,K as qa,b as Ma,S as Ga,N as Wa,m as Li}from"./@salutejs/sdds-finai-CKhMjg07.js";import{D as za}from"./react-data-grid-BKw4Q-W8.js";import{H as B,C as P,U as ji}from"./styled-components-DCFsnh-i.js";import{as as Ka,ar as _r,V as ys,A as Rr,p as vr,y as he,q as Fi,z as gs,cA as Ua,cw as Pi,s as Hr,i as Xa,a as Hi,r as Ir,cB as Ja,cC as Gs,cD as Ya,Y as xs,ai as Qa,bb as Za,x as qi,ax as an,b3 as Ws,X as eu,g as tu,cE as nu,aI as ru}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as ou,u as su}from"./TableTabs-C6Rr5Gy-.js";import{T as Yt}from"./TableGlide-DbDA-PPi.js";import{E as Mi,S as Gi,a as Wi}from"./sharedUiSearch-DGAhIiuN.js";import{T as Er,a as iu}from"./TextField-DpKf-85P.js";import{T as bs,a as lu}from"./AiAgentPopup-zRx4ytCb.js";import{u as zi}from"./ListOfFilters-CMjwWdxj.js";import{i as au}from"./lodash.isequal-DxetvuAY.js";import{s as qr}from"./constants-DatVHdkd.js";import{bD as zs,bE as uu,r as du}from"./vendor-DmWczWMC.js";import{N as cu}from"./NumberFormat-BqjpJJQW.js";import{E as pu}from"./EmptyState-BCYMGuYF.js";import{c as mu}from"./sharedUtilsDebug-BX_KjCjW.js";import{M as hu}from"./MassActions-Csxbu-7r.js";import{A as fu}from"./Autocomplete-DE_6PTST.js";const Ki=h.createContext(null),Mr=e=>{const t=h.useContext(Ki);if(!t)throw new Error("useTableResizeObserver must be used within TableResizeObserverProvider");const n=h.useRef(e);n.current=e,h.useEffect(()=>{const r=o=>{n.current(o)};return t.subscribe(r)},[t])},Gr=({children:e,element:t})=>{const n=h.useRef(null),r=h.useRef(new Set),o=h.useRef(null),a=h.useRef(null);h.useEffect(()=>{if(n.current&&a.current!==t&&(n.current.disconnect(),n.current=null),!t){a.current=null;return}a.current=t;const u=y=>{const f=y[0];f&&(o.current=f.contentRect.width,r.current.forEach(w=>{try{w(y)}catch(g){console.error("Error in resize observer callback:",g)}}))};n.current=Ii(u),n.current.observe(t);const p=t.getBoundingClientRect().width;if(p>0){o.current=p;const y=[{contentRect:{width:p,height:0}}];r.current.forEach(f=>{try{f(y)}catch(w){console.error("Error in initial resize observer callback:",w)}})}return()=>{n.current&&(n.current.disconnect(),n.current=null),a.current=null}},[t]);const l=h.useCallback(u=>(r.current.add(u),()=>{r.current.delete(u)}),[]),i=h.useCallback(()=>o.current,[]),d=h.useMemo(()=>({subscribe:l,getCurrentWidth:i}),[l,i]);return s.jsx(Ki.Provider,{value:d,children:e})},Wr=({children:e,refTableContainer:t})=>{const[n,r]=bt.useState((t==null?void 0:t.current)??null);return bt.useLayoutEffect(()=>{t!=null&&t.current&&r(t.current)},[t]),s.jsx(Gr,{element:n,children:e})};try{Mr.displayName="useTableResizeObserver",Mr.__docgenInfo={description:"",displayName:"useTableResizeObserver",props:{}}}catch{}try{Gr.displayName="TableResizeObserverProvider",Gr.__docgenInfo={description:"",displayName:"TableResizeObserverProvider",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}}}}}catch{}try{Wr.displayName="TableResizeObserverProviderWrapper",Wr.__docgenInfo={description:"",displayName:"TableResizeObserverProviderWrapper",props:{refTableContainer:{defaultValue:null,description:"",name:"refTableContainer",required:!0,type:{name:"React.MutableRefObject<HTMLDivElement>"}}}}}catch{}const Ui=h.createContext({rowSize:"big"}),Tr=()=>{const e=h.useContext(Ui);if(!e)throw new Error("useRowContext must be used within a Provider");return e},Xi=h.createContext(null),Ji=h.createContext(null),yu=()=>{const e=h.useContext(Xi),t=h.useContext(Ji);if(e===void 0||t===void 0)throw new Error("useExpandedRowsContext must be used within a Provider");return{expandedRowsIds:e,setExpandedRowsIds:t}},Yi=h.createContext({}),We=()=>{const e=h.useContext(Yi);if(!e)throw new Error("useHeaderContext must be used within a Provider");return e},Qi=h.createContext(null),Zi=()=>{const e=h.useContext(Qi);if(!e)throw new Error("useContextMenu used outside Provider");return e},el=h.createContext(null),gu=()=>{const e=h.useContext(el);if(!e)throw new Error("useSearchContext must be used within a Provider");return e},tl=h.createContext(null),Ss=()=>{const e=h.useContext(tl);if(!e)throw new Error("useSidebar used outside Provider");return e},nl=h.createContext(null),Mt=()=>{const e=h.useContext(nl);if(!e)throw new Error("useTableCollapse used outside Provider");return e},zr=({children:e,headerCtxV:t,rowCtxV:n,expandedRowCtxV:r,searchCtxV:o,contextMenuCtxV:a,sideBarCtxV:l,tableCollapseCtxV:i})=>s.jsx(Yi.Provider,{value:t,children:s.jsx(Ui.Provider,{value:n,children:s.jsx(Xi.Provider,{value:r[0],children:s.jsx(Ji.Provider,{value:r[1],children:s.jsx(el.Provider,{value:o,children:s.jsx(Qi.Provider,{value:a,children:s.jsx(tl.Provider,{value:l,children:s.jsx(nl.Provider,{value:i,children:e})})})})})})})}),rl=h.createContext(null),ol=()=>{const e=h.useContext(rl);if(e===void 0)throw new Error("вне провайдера контекст - refTableContext");return e},sl=h.createContext(null),un=()=>{const e=h.useContext(sl);if(e===void 0)throw new Error("вне провайдера контекст - refTableContext");return e??void 0},il=h.createContext(null),xu=()=>{const e=h.useContext(il);if(e===void 0)throw new Error("вне провайдера контекст - refTableContext");return e??void 0};try{zr.displayName="ContextProviders",zr.__docgenInfo={description:"",displayName:"ContextProviders",props:{headerCtxV:{defaultValue:null,description:"",name:"headerCtxV",required:!0,type:{name:"HeaderContextValueTypeInstance<ObjectForExtending>"}},rowCtxV:{defaultValue:null,description:"",name:"rowCtxV",required:!0,type:{name:"RowContextV"}},expandedRowCtxV:{defaultValue:null,description:"",name:"expandedRowCtxV",required:!0,type:{name:"[ExpandedRowsContextV, React.Dispatch<React.SetStateAction<ExpandedRowsContextV>>]"}},searchCtxV:{defaultValue:null,description:"",name:"searchCtxV",required:!0,type:{name:"SearchContextValue"}},contextMenuCtxV:{defaultValue:null,description:"",name:"contextMenuCtxV",required:!0,type:{name:"ContextMenuContextV<RowType, SummaryRowType>"}},sideBarCtxV:{defaultValue:null,description:"",name:"sideBarCtxV",required:!0,type:{name:"SidebarContextValue"}},tableCollapseCtxV:{defaultValue:null,description:"",name:"tableCollapseCtxV",required:!0,type:{name:"TableCollapseContextValue"}}}}}catch{}try{TableResizeObserverProvider.displayName="TableResizeObserverProvider",TableResizeObserverProvider.__docgenInfo={description:"",displayName:"TableResizeObserverProvider",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}}}}}catch{}try{TableResizeObserverProviderWrapper.displayName="TableResizeObserverProviderWrapper",TableResizeObserverProviderWrapper.__docgenInfo={description:"",displayName:"TableResizeObserverProviderWrapper",props:{refTableContainer:{defaultValue:null,description:"",name:"refTableContainer",required:!0,type:{name:"React.MutableRefObject<HTMLDivElement>"}}}}}catch{}try{useTableResizeObserver.displayName="useTableResizeObserver",useTableResizeObserver.__docgenInfo={description:"",displayName:"useTableResizeObserver",props:{}}}catch{}const $t={level:"level",parent:"parent"},bu={levels:1},Ee="checkbox-row",Ce="checkbox-column-custom",ll="checbox-header-column-custom",Su="checbox-summary-column-custom",xe={IS_HAVE:"SERVICE_IS_HAVE_DETAIL",IS_HAVE_EXPANDED:"SERVICE_IS_HAVE_EXPANDED",IS_DETAIL_PANEL_ROW:"SERVICE_IS_DETAIL_PANEL_ROW",ROW_DATA:"SERVICE_ROW_DATA",ROW_DETAIL_RENDER:"SERVICE_ROW_DETAIL_RENDER",ROW_DETAIL_RENDER_EDITING:"SERVICE_ROW_DETAIL_RENDER_EDITING",EXPAND_ICON_BUTTON_PROPS:"SERVICE_EXPAND_ICON_BUTTON_PROPS",EXPAND_ICON_CLOSED:"SERVICE_EXPAND_ICON_CLOSED",EXPAND_ICON_OPENED:"SERVICE_EXPAND_ICON_OPENED",ROW_DETAIL_IS_EDITABLE:"SERVICE_ROW_DETAIL_IS_EDITABLE"},ws=e=>!!(e!=null&&e[xe.IS_HAVE]),wu=e=>!!(e!=null&&e[xe.IS_HAVE_EXPANDED]),ct=e=>!!(e!=null&&e[xe.IS_DETAIL_PANEL_ROW]),Cu=(e,t,n)=>ct(e)&&!(n===Ee?t===1:t===0)?{isEmptyCell:!0}:{isEmtpyCell:!1},_u=e=>e==null?void 0:e[xe.ROW_DATA],Ru=e=>e==null?void 0:e[xe.ROW_DETAIL_RENDER],vu=({indexZeroColKey:e,currIndex:t,arrOfCols:n})=>{const r=e===Ee?t===1:t===0,o=e===Ee?n.length-1:n.length;return r?o:0},Iu=(e,t)=>t?typeof t.detailHeight=="function"?t.detailHeight(e):t.detailHeight:200,Eu=e=>{Object.values(xe).forEach(t=>{delete e[t]})},Tu=({indexZeroColKey:e,currIndex:t,arr:n,columnColSpan:r})=>o=>o.type==="ROW"&&ct(o.row)?vu({indexZeroColKey:e,currIndex:t,arrOfCols:n}):r==null?void 0:r(o),Ks=(e,t)=>e==null?void 0:e[t==="closed"?xe.EXPAND_ICON_CLOSED:xe.EXPAND_ICON_OPENED],Au=e=>e==null?void 0:e[xe.EXPAND_ICON_BUTTON_PROPS],dn="treeId",Ct="subRows",Kr={level:"level",parent:"parent",customProps:"customProps"};function ku(e){return e?e.split(`.${Ct}.`).length-1:0}function rr(e){const t=e==null?void 0:e[dn];return{treeId:t,lvl:ku(t)}}function Cs(e,t){return e?typeof e=="boolean"?e:e({keyText:t}):!1}const Du=e=>typeof(e==null?void 0:e[Kr.level])<"u"||typeof(e==null?void 0:e[Kr.customProps])<"u",Ou=e=>[dn].some(t=>typeof(e==null?void 0:e[t])<"u"),Vu=e=>{[dn].forEach(t=>{delete e[t]})},$u=e=>{Object.values(Kr).forEach(t=>{delete e[t]})};function _t(e){if(ct(e))return{...e.SERVICE_ROW_DATA};const t={...e};return Du(t)&&$u(t),Ou(t)&&Vu(t),ws(t)&&Eu(t),t}const Nu=(e,t)=>typeof e>"u"?t:typeof e=="boolean"?[e,null]:e,Ur=B(La)`
  & .has-chips .textfield-input-text-ellipsis {
    color: transparent;
  }
`,lt={tableSidebarFilterSearchBlock:"rdg-table-sidebar-filter-search",tableSidebarFilterItem:"rdg-table-sidebar-filter-item",tableSidebarFilterLabel:"rdg-table-sidebar-filter-label",tableSidebarFilterControl:"rdg-table-sidebar-filter-control"},qe={TOGGLE_GROUP:"toggle-group",RESET_GROUPS:"reset-groups",CUSTOM_ITEM_SELECT:"custom-item-select",CHANGE_ROW_SIZE:"change-row-size",TOGGLE_SIDEBAR_TAB:"toggle-sidebar-tab",CLOSE_SIDEBAR:"close-sidebar",PIN_COLUMN:"pin-column",UNPIN_COLUMN:"unpin-column",HIDE_COLUMN:"hide-column",SHOW_COLUMN:"show-column"},Us={headerColor:{light:"#ECF6FC",dark:"#071A26",highContrastLight:"#CFE5F2",betaCoreLight:"#EFF8FF",highContrastDark:"#071A26",betaCoreDark:Yt.bgHeader.betaCoreDark},editableCellColor:{light:"#FFF6E5",dark:"#211807",highContrastLight:"#F1DDB8",betaCoreLight:"#FFF6E5",highContrastDark:"#211807",betaCoreDark:Yt.bgEditableCell.betaCoreDark},editableCellHoverColor:{light:"#FFF4E0",dark:"#2A1F09",highContrastLight:"#E8D4AD",betaCoreLight:"#FFF4E0",highContrastDark:"#2A1F09",betaCoreDark:Yt.bgEditableCellHovered.betaCoreDark},editedSuccessfullyCellColor:{light:"#EDF8FF",dark:"#0A1924",highContrastLight:"#DAE8F1",betaCoreLight:"#EDF8FF",highContrastDark:"#0A1924",betaCoreDark:Yt.editedSuccessfullyCellColor.betaCoreDark},editedSuccessfullyCellHoverColor:{light:"#E6F5FF",dark:"#0C1E2C",highContrastLight:"#D0E0ED",betaCoreLight:"#E6F5FF",highContrastDark:"#0C1E2C",betaCoreDark:Yt.editedSuccessfullyCellHoverColor.betaCoreDark}},Bu=()=>{const e=Object.fromEntries(Object.keys(Us).map(o=>[o,`--${o}`])),t=Object.keys(e).map(o=>[o,`var(${e[o]})`]),n=Object.fromEntries(t);return{customColorTokensKeys:e,customColorTokens:n,customColorGlobalVars:o=>t.map(([l])=>{const i=l;return`${e[i]}: ${Us[i][o]};`}).join(`
`)}},ae={small:{rowHeight:41,cell:{"padding-block":"8px","padding-inline":"16px"},editorCell:{"padding-block":"0px","padding-inline":"0px"},input:"xs",icon:"xs",combobox:"xs",checkboxOfCombobox:"s",switch:"s",font:()=>ys},medium:{rowHeight:49,cell:{"padding-block":"12px","padding-inline":"16px"},editorCell:{"padding-block":"0px","padding-inline":"0px"},input:"s",icon:"s",combobox:"s",checkboxOfCombobox:"m",switch:"s",font:()=>_r},big:{rowHeight:57,cell:{"padding-block":"16px","padding-inline":"16px"},editorCell:{"padding-block":"0px","padding-inline":"0px"},input:"s",icon:"m",combobox:"s",checkboxOfCombobox:"l",switch:"l",font:()=>Ka}},{customColorTokensKeys:Lu,customColorTokens:ju,customColorGlobalVars:Fu}=Bu(),_s={...Lu,zIndexCell:"--zIndexCell"},xt={...ju,zIndexCell:`var(${_s.zIndexCell})`},z={headerColor:xt.headerColor,rowHoverColor:Ua,textColor:gs,headerTextColor:he,selectCellColor:Fi,editableCellColor:xt.editableCellColor,editableCellHoverColor:xt.editableCellHoverColor,editedSuccessfullyCellColor:xt.editedSuccessfullyCellColor,editedSuccessfullyCellHoverColor:xt.editedSuccessfullyCellHoverColor,white:Rr,border:vr,red:Pi},we=8,at=.5,al="lvl-1-row",tn="detail-panel-row",ul="row-idx-",Xr=`${ul}0`,dl={small:"200px",medium:"240px",big:"320px"},Xs={small:"192px",medium:"232px",big:"232px"},cl="0.3s",Gt=`all ${cl} ease-out`,or=at,It={tableSidebarLayout:"rdg-table-sidebar-layout",tableSidebarTableContainer:"rdg-table-sidebar-layout-table-container",tableSidebarToggleIcon:"rdg-table-sidebar-layout__toggle-icon",tableSidebarInner:"rdg-table-sidebar-layout__sidebar-inner",tableSidebarContent:"rdg-table-sidebar-layout__sidebar-content",tableSidebarToggleButton:"rdg-table-sidebar-layout__toggle-button",tableSidebarCloseButton:"rdg-table-sidebar-layout__close-button"},Rs=`all ${or}s ease`,Pu=ji`
  from {  opacity: 0; }
  to {  opacity: 1; }
`,Hu=(e,t)=>P`
    border-radius: 0px ${e?we:0}px ${t?we:0}px 0px;
  `,qu=B(Y)({height:"32px",display:"flex",alignItems:"center",fontSize:"18px",fontWeight:"600",lineHeight:"28px",letterSpacing:"0px",gap:"16px",minWidth:"0px",marginRight:"16px"}),Mu=B(Y)`
  --table-sidebar-toggle-panel-width: 44px;
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid ${()=>vr};
  border-left: none;
  box-sizing: border-box;

  overflow-x: hidden;
  transition: ${Rs};
  will-change: width, min-width;
  background-color: ${()=>Rr};
  max-width: calc(
    ${({$contentWidth:e})=>e}px +
      var(--table-sidebar-toggle-panel-width)
  );

  & .${It.tableSidebarCloseButton} {
    width: 32px;
    aspect-ratio: 1 / 1;
    margin-left: auto;
  }

  ${({isOpen:e,$contentWidth:t})=>e?P`
          flex-grow: 1;
          width: calc(
            ${t}px + var(--table-sidebar-toggle-panel-width)
          );
          min-width: calc(
            ${t}px + var(--table-sidebar-toggle-panel-width)
          );
        `:P`
          width: var(--table-sidebar-toggle-panel-width);
          min-width: var(--table-sidebar-toggle-panel-width);
        `}
  ${({$borderRightTopRadiusRounded:e,$borderRightBottomRadiusRounded:t})=>Hu(e,t)}
`,Gu=B(Y)`
  width: var(--table-sidebar-toggle-panel-width);
  min-width: var(--table-sidebar-toggle-panel-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-left: 1px solid ${vr};

  background-color: ${Rr};
  padding: 0;
  margin-bottom: ${Hr};
  /* margin-top: ${Xa}; */
  margin-top: ${Hr};
  gap: ${Hi};

  & .${It.tableSidebarToggleButton} {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & .${It.tableSidebarToggleIcon} {
      transition: ${Rs};
      transform: ${({isOpen:e})=>e?"scaleX(-1)":""};
    }
  }
`,Wu=B(Y)`
  min-width: ${({isOpen:e,$contentWidth:t})=>e?`${t}px`:"0"};
  padding: ${Hr};
  flex-grow: 1;

  transition: ${Rs};
  /* ширину схлопываем только после анимации закрытия, чтобы контент не дёргался */
  transition-delay: ${({isOpen:e})=>e?"0s":`${or}s`};
  overflow-y: auto;

  & .${It.tableSidebarContent} {
    overflow: hidden;
    height: 100%;
    opacity: 0;
    ${({isOpen:e})=>e?P`
            visibility: visible;
            animation: ${Pu};
            animation-delay: 0.1s;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
          `:P`
            /* контент прячем только ПОСЛЕ анимации закрытия,
               иначе он исчезает раньше, чем сайдбар схлопнется */
            opacity: 1;
            visibility: hidden;
            animation: none;
            transition: visibility 0s linear ${or}s;
          `}
  }

  ${({isOpen:e})=>e?`
        pointer-events: auto;
      `:`
        pointer-events: none;
      `}
`,zu=B.div`
  --table-sidebar-layout-header: 32px;
  --table-sidebar-layout-header-margin-bottom: 16px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Ku=B.div`
  height: var(--table-sidebar-layout-header);
  display: flex;
  align-items: center;
  margin-bottom: var(--table-sidebar-layout-header-margin-bottom);
`,Uu=B.div`
  height: calc(
    100% - var(--table-sidebar-layout-header) -
      var(--table-sidebar-layout-header-margin-bottom)
  );
  display: flex;
  flex-direction: column;
`,Xu=B(Ni)`
  width: var(--table-sidebar-toggle-panel-width, 44px);
  height: 40px;
  &&::after {
    left: -1px;
  }
`,Ju=B($i)`
  width: 100%;
  flex-direction: column;
  & > button {
    display: none;
  }
  & .tabs-clip-show-all {
    padding: 0;
  }
  &::after {
    width: 0;
  }
`,Jr=({title:e,titleRightSlot:t,domMetadata:n,children:r})=>{const{toggle:o}=Ss();return s.jsxs(zu,{children:[s.jsxs(Ku,{children:[s.jsxs(qu,{children:[s.jsx(bs,{variant:"H4",bold:!0,lines:1,tooltipText:e,tooltipProps:{placement:"top"},children:e}),t]}),s.jsx("div",{className:It.tableSidebarCloseButton,children:s.jsx(Oe,{onClick:a=>{var l;o(),(l=n==null?void 0:n.onClick)==null||l.call(n,a,{action:qe.CLOSE_SIDEBAR})},size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",children:s.jsx(ln,{size:"xs"})})})]}),s.jsx(Uu,{children:r})]})};try{Jr.displayName="SidebarContentLayout",Jr.__docgenInfo={description:"",displayName:"SidebarContentLayout",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleRightSlot:{defaultValue:null,description:"",name:"titleRightSlot",required:!1,type:{name:"React.ReactNode"}},domMetadata:{defaultValue:null,description:"",name:"domMetadata",required:!1,type:{name:"DomMetadata"}}}}}catch{}const pl={recalculateWidth:"Table::recalculateWidth"},ml=750,Ge=({children:e,...t})=>{const n=xu();return s.jsx(ja,{trigger:"hover",usePortal:!0,hasArrow:!0,frame:n,mouseEnterDelay:ml,...t,children:e})};try{Ge.displayName="TableTooltip",Ge.__docgenInfo={description:"",displayName:"TableTooltip",props:{}}}catch{}const Yr=({tabs:e,activeTabId:t,onTabChange:n})=>s.jsx(Ju,{view:"divider",orientation:"vertical",size:"xs",children:e.filter(r=>r.showInSidebar).map(r=>{var o,a;return s.jsx(Ge,{text:r.label,placement:"left",trigger:"hover",hasArrow:!0,mouseEnterDelay:ml,children:s.jsx(Xu,{view:"divider",orientation:"vertical",size:"xs",selected:r.id===t,tabIndex:0,contentLeft:h.isValidElement(r.icon)&&r.icon,onClick:l=>{var i,d;n(r.id),(d=(i=r.domMetadata)==null?void 0:i.onClick)==null||d.call(i,l,{action:qe.TOGGLE_SIDEBAR_TAB,tabId:r.id})},style:{justifyContent:"center"},className:(o=r.domMetadata)==null?void 0:o.className,...(a=r.domMetadata)==null?void 0:a.dataAttributes},r.id)},`tooltip-${r.id}`)})});try{Yr.displayName="SidebarTabs",Yr.__docgenInfo={description:"",displayName:"SidebarTabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"SidebarTab[]"}},activeTabId:{defaultValue:null,description:"",name:"activeTabId",required:!0,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const Yu=({activeTabId:e,sidebarTabs:t,children:n,defaultActiveTabId:r,activeTabState:o,onActiveTabChange:a,$borderRightBottomRadiusRounded:l,$borderRightTopRadiusRounded:i})=>{const{isOpen:d,toggle:u,width:p}=Ss(),y=r&&t.some(b=>b.id===r&&b.showInSidebar)?r:null,[f,w]=h.useState(y??(d?e:null)),g=o==null?void 0:o[1],x=o?o[0]:f,C=b=>{g?g(b):w(b),a==null||a(b,b?t.find(S=>S.id===b):void 0)},c=b=>{C(b),(!d||x===b)&&u()};h.useEffect(()=>{let b=null;return!d&&x!==null&&(b=setTimeout(()=>{C(null)},300)),()=>{b&&clearTimeout(b)}},[d]),h.useEffect(()=>{!d&&x!==null&&C(null)},[]);const m=x?t.find(b=>b.id===x):null;return s.jsxs(Mu,{isOpen:d,$contentWidth:p,$borderRightTopRadiusRounded:i,$borderRightBottomRadiusRounded:l,children:[s.jsx(Gu,{isOpen:d,as:"div","aria-label":d?"Скрыть сайдбар":"Показать сайдбар",children:s.jsx(Yr,{tabs:t,activeTabId:x,onTabChange:c})}),s.jsx(Wu,{isOpen:d,$contentWidth:p,children:s.jsx("div",{className:It.tableSidebarContent,children:s.jsx(Jr,{title:(m==null?void 0:m.title)??(m==null?void 0:m.label)??"",titleRightSlot:m==null?void 0:m.titleRightSlot,domMetadata:m==null?void 0:m.domMetadata,children:(m==null?void 0:m.content)||n})})},x)]})},dt={rootControlBlock:"rdg-control-block-container",rightControlBlock:"rdg-control-block-right",searchControlBlock:"rdg-control-block-search",leftControlBlock:"rdg-control-block-left"},L={tableContainer:"rdg-container-all",tableContainerFullScreened:"rdg-container-all__full-screened",table:"rdg",tableCardsViewContainer:"rdg-cards-view-container",tableRowsViewContainer:"rdg-rows-view-container",cell:"rdg-cell",cellPinnedLeft:"rdg-cell-frozen",row:"rdg-row",editingCell:"rdg-editor-container",editableCell:"rdg-editable-cell",editedSuccessfullyCell:"rdg-edited-successfully-cell",editedWithErrorCell:"rdg-edited-with-error-cell",summaryRow:"rdg-summary-row",bottomSummaryRow:"rdg-bottom-summary-row",topSummaryRow:"rdg-top-summary-row",headerRow:"rdg-header-row",headerCellFilterSorting:"rdg-header-cell__filter-sorting",headerCellLeftIcons:"rdg-header-cell__left-icons",headerCellTextContent:"rdg-header-cell__text-content",headerCellRightIcons:"rdg-header-cell__right-icons",headerCellFilterIsActive:"rdg-header-cell__filter-sorting--is-filter-active",headerCellFilterIsAvailable:"rdg-header-cell__filter-sorting--is-filter-available",headerCellSortingIsActive:"rdg-header-cell__filter-sorting--is-sorting-active",headerCellSortingIsAvailable:"rdg-header-cell__filter-sorting--is-sorting-available",headerCellContainer:"rdg-header-cell__container",...ou,...dt,...It,...lt},Qr="pinned-right-col",Qu=8,on=16,Zu=`calc(100dvh - ${on*2}px)`,ed=`calc(100dvh - ${on*2+Qu*2}px)`,Ie={MARGIN:`${on}px`,BOX_SHADOW:`${on*4}px`,HEIGHT_TABLE_CONTAINER:Zu,HEIGHT_TABLE:ed,WIDTH_TABLE_CONTAINER:`calc(100vw - ${on*2}px)`},ve={xs:4,s:4},td={xs:32,s:40},nd={textQuickJump:"Перейти к",textPerPage:"Показывать по"},Zr="s",Pe={xs:33,s:41},ke={xs:670,s:800},rd={xs:[{minWidth:ke.xs-ve.xs*2,slots:9,hasQuickJump:!0},{minWidth:ke.xs-Pe.xs-ve.xs*2,slots:8,hasQuickJump:!0},{minWidth:ke.xs-Pe.xs*2-ve.xs*2,slots:7,hasQuickJump:!0},{minWidth:ke.xs-Pe.xs*3-ve.xs*2,slots:1,hasQuickJump:!0},{minWidth:ke.xs-Pe.xs*6-ve.xs*2,slots:1,hasQuickJump:!0},{minWidth:ke.xs-Pe.xs*7-ve.xs*2,slots:1,hasQuickJump:!1},{minWidth:0,slots:1}],s:[{minWidth:ke.s-ve.s*2,slots:7,hasQuickJump:!0},{minWidth:ke.s-Pe.s-ve.s*2,slots:8,hasQuickJump:!0},{minWidth:ke.s-Pe.s*2-ve.s*2,slots:7,hasQuickJump:!0},{minWidth:ke.s-Pe.s*3-ve.s*2,slots:1,hasQuickJump:!0},{minWidth:ke.s-Pe.s*6-ve.s*2,slots:1,hasQuickJump:!0},{minWidth:ke.s-Pe.s*7-ve.s*2,slots:1,hasQuickJump:!1},{minWidth:0,slots:1,hasQuickJump:!1}]},od=(e,t)=>{const n=rd[e];if(!n)return[void 0,!0];const r=n.find(o=>t>=o.minWidth);return[r==null?void 0:r.slots,(r==null?void 0:r.hasQuickJump)??!0]},sd=(e,t)=>e?td[t??Zr]+ve[t??Zr]*2:0,Tt="row-instruments-column-key",St="row-instruments-column-cellclass",eo="row-instruments-column-header-cellclass",id="row-instruments-column-summary-cellclass",wt="row-instruments-active",Or=56,sr=B(Fa)({"@keyframes scalex":{from:{scale:"1.15"},to:{scale:"1"}},animation:"scalex 0.5s ease both"});try{sr.displayName="AnimatedCounter",sr.__docgenInfo={description:"",displayName:"AnimatedCounter",props:{}}}catch{}const to={childGroups:"childGroups",groupKey:"groupKey",groupParents:"groupParents"},et="_group-col",hl="groupingRows",fl="GROUPING_ROWS_TRIGGER",ne={cellContent:"cell-content",expandDetailButton:"expand-detail",expandTreeButton:"expand-tree",selectArrowContainer:"cell-select-arrow-container",selectArrow:"cell-select-arrow",subRowCell:"cell-subrow",editableCellWithExpandButton:"cell-edit-with-expand-button",cellWithExpandButton:"cell-with-expand-button"};function ir(e){const t=e;return!!(t.childGroups&&t.childRows&&t.groupKey)}const Js=({text:e})=>s.jsx("span",{className:ne.cellContent,title:e,children:e}),lr=({rowsGrouping:e,renderCellProps:t,groupByArr:n,groupedColRenderers:r,col:o})=>{var d,u;const{row:a,column:l,tabIndex:i}=t;if(o.key===et){if(ir(a)){const{groupKey:y}=a;if((d=r==null?void 0:r.rowsGrouping)!=null&&d.renderGroupCell){const f=a;return(u=r==null?void 0:r.rowsGrouping)==null?void 0:u.renderGroupCell({...f,column:l,tabIndex:i})}return typeof y<"u"?s.jsx(Js,{text:y}):null}const p=a[n[n.length-1]??0];return r!=null&&r.renderCell?r.renderCell({...t,parentGroupKey:p,groupByArr:n}):typeof p<"u"?s.jsx(Js,{text:p}):null}if(ir(a)){if(!e)return null;const p=a;return e.renderGroupCell?e.renderGroupCell({...p,column:l,tabIndex:i}):null}return o.renderCell?o.renderCell(t):a[o.key]};try{lr.displayName="RowsGroupingRenderCell",lr.__docgenInfo={description:"",displayName:"RowsGroupingRenderCell",props:{col:{defaultValue:null,description:"",name:"col",required:!0,type:{name:"ColumnConfig<RowType, SummaryRowType>"}},rowsGrouping:{defaultValue:null,description:"",name:"rowsGrouping",required:!0,type:{name:"ColumnRowsGrouping<RowType, SummaryRowType>"}},renderCellProps:{defaultValue:null,description:"",name:"renderCellProps",required:!0,type:{name:"RenderCellProps<RowType, SummaryRowType>"}},groupByArr:{defaultValue:null,description:"",name:"groupByArr",required:!0,type:{name:"string[]"}},groupedColRenderers:{defaultValue:null,description:"",name:"groupedColRenderers",required:!0,type:{name:'Partial<Pick<NonNullable<Partial<Pick<ColumnConfig<RowType>, "name" | "width" | "minWidth" | "maxWidth" | "resizable" | "renderSummaryCell">> & { ...; }>, "rowsGrouping" | "renderCell">>'}}}}}catch{}function no({rowsGroupingIsActiveInConfig:e,groupByArr:t,columnConfig:n,tableConfigGroupedColumnProps:r,pinnedCols:o}){if(!e||!t||t.length===0)return n;const{renderCell:a,rowsGrouping:l,...i}=r??{},d={renderCell:a,rowsGrouping:l},u={key:et,name:"Группировка",frozen:o.length>0,dragable:!1,...i};return[u,...n].filter(y=>!t.some(f=>f===y.key)).map(y=>{const{rowsGrouping:f,renderCell:w,...g}=y;return{...g,renderCell:x=>s.jsx(lr,{renderCellProps:x,rowsGrouping:f,col:y,groupByArr:t,groupedColRenderers:d}),subRow:{isColumnWithArrow:y.key===u.key,renderSubRowCell:x=>s.jsx(lr,{renderCellProps:x,rowsGrouping:f,col:y,groupByArr:t,groupedColRenderers:d})}}})}try{no.displayName="getColsAfterRowsGrouping",no.__docgenInfo={description:"",displayName:"getColsAfterRowsGrouping",props:{rowsGroupingIsActiveInConfig:{defaultValue:null,description:"",name:"rowsGroupingIsActiveInConfig",required:!0,type:{name:"boolean"}},groupByArr:{defaultValue:null,description:"",name:"groupByArr",required:!0,type:{name:"string[]"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},tableConfigGroupedColumnProps:{defaultValue:null,description:"",name:"tableConfigGroupedColumnProps",required:!0,type:{name:'Partial<Pick<ColumnConfig<RowType>, "name" | "width" | "minWidth" | "maxWidth" | "resizable" | "renderSummaryCell">> & { renderCell?: (props: RenderCellProps<...> & { ...; }) => ReactNode; rowsGrouping?: Pick<...>; }'}},pinnedCols:{defaultValue:null,description:"",name:"pinnedCols",required:!0,type:{name:"string[]"}}}}}catch{}function ld(e,t){const n=e==null?void 0:e[to.groupKey];if(!n)return t.rowKeyGetter(e);const r=(e==null?void 0:e[to.groupParents])??"";return r?`${r}-$$$-${n}`:n}function ad(e){return{getSubRows:t=>t==null?void 0:t[to.childGroups],rowKeyGetter:t=>ld(t,e)}}const ud=()=>({"& .reset-groups-btn > div > div":{justifyContent:"center","& > div":{maxWidth:"fit-content","& *":{fontWeight:600}}}}),Ys=({checked:e})=>s.jsx(vt,{size:"m",style:{pointerEvents:"none"},checked:e,onChange:()=>{}}),Qs=({text:e})=>s.jsx(sr,{className:"counter",count:Number(e),size:"xs",view:"accent"},e),dd=B.span({color:he,marginLeft:"0.25rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),ro=({isActivatedRowsGrouping:e,columnConfig:t,groupedCols:n,setGroupedCols:r,tableConfig:o})=>{var u,p;const{getGroupedCount:a,onItemSelect:l,defaultCustomItems:i}=((u=o==null?void 0:o.rowsGrouping)==null?void 0:u.groupButton)??{},d=(p=o==null?void 0:o.rowsGrouping)==null?void 0:p.domMetadata;return h.useMemo(()=>{if(!e||!n)return{rowsGroupingButtonProps:{}};const y={visible:[],hidden:[]},f=t.filter(C=>{const c=C.rowsGrouping?C.rowsGrouping.groupByColumn??!0:!1;return y[c?"visible":"hidden"].push(C.key),c}).map(C=>{var S;const c=(n==null?void 0:n.findIndex(_=>_===C.key))??-1,m=c>-1,b=((S=C.rowsGrouping)==null?void 0:S.columnGroupLabel)??C.key;return{value:C.key,label:b,contentLeft:s.jsx(Ys,{checked:m}),...m&&{contentRight:s.jsx(Qs,{text:c+1})}}}),w=(i??[]).map(C=>{y.visible.push(C.value.toString());const c=(n==null?void 0:n.findIndex(b=>b===C.value))??-1,m=c>-1;return{contentLeft:s.jsx(Ys,{checked:m}),...m&&{contentRight:s.jsx(Qs,{text:c+1})},...C}});f.push(...w),f.push({label:"Сбросить все",value:"reset",className:"reset-groups-btn",contentLeft:s.jsx(ln,{color:"inherit"})});const g=a?a({currCount:n.length,groupedCols:n,columns:y}):n.length;return{rowsGroupingButtonProps:{text:"Группировать",contentLeft:s.jsx(fa,{color:"inherit"}),view:"default",contentRight:g>0&&s.jsx(dd,{children:g.toString()}),dropdown:{onItemSelect(C){var c,m;if(r){if(l){l({item:C,setGroupedCols:r,columns:y}),(c=d==null?void 0:d.onClick)==null||c.call(d,void 0,{action:qe.CUSTOM_ITEM_SELECT,columnKey:C.value});return}if(C.value==="reset"){r([]),(m=d==null?void 0:d.onClick)==null||m.call(d,void 0,{action:qe.RESET_GROUPS});return}if(C.value===fl)return;r(b=>{var R;const S=[...b],_=S.findIndex(E=>E===C.value),I=_===-1;return _>-1?S.splice(_,1):S.push(`${C.value}`),(R=d==null?void 0:d.onClick)==null||R.call(d,void 0,{action:qe.TOGGLE_GROUP,columnKey:C.value,enabled:I}),S})}},items:f,closeOnSelect:!1,$css:ud()},itemID:hl,className:d==null?void 0:d.className,...d==null?void 0:d.dataAttributes}}},[t,n,e,r])};try{ro.displayName="useGetRowsGroupingBtnProps",ro.__docgenInfo={description:"",displayName:"useGetRowsGroupingBtnProps",props:{tableConfig:{defaultValue:null,description:"",name:"tableConfig",required:!0,type:{name:"TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>"}},isActivatedRowsGrouping:{defaultValue:null,description:"",name:"isActivatedRowsGrouping",required:!0,type:{name:"boolean"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},groupedCols:{defaultValue:null,description:"",name:"groupedCols",required:!0,type:{name:"string[]"}},setGroupedCols:{defaultValue:null,description:"",name:"setGroupedCols",required:!0,type:{name:"any"}}}}}catch{}function cd(e,t){return e.reduce((r,o)=>{const a=t(o);return typeof r[a]>"u"?r[a]=[o]:r[a].push(o),r},{})}function pd(e,t,n){return Object.entries(e).map(([r,o])=>{var l;const a={[(n==null?void 0:n.labelKey)??"groupLabel"]:r,[(n==null?void 0:n.itemsKey)??"childGroups"]:o,...(l=n==null?void 0:n.additionalPropertiesForGroup)==null?void 0:l.call(n,r,o)};return t?t(a):a})}function md(e,t){return cd(e,n=>n[t])}function hd({tableConfig:e={},rows:t}){const{rowsGrouping:n}=e,r=!!n,[o,a]=h.useState(!0),[l,i]=h.useState(!0),[d,u]=(n==null?void 0:n.groupByState)??[],[p]=h.useMemo(()=>{if(!r||!d||d.length===0)return[t,t.length];const y=(f,[w,...g],x,C)=>{if(typeof w>"u")return[f,f.length];let c=0;const m={},b={},S=Object.entries(md(f,w));for(const[_,I]of S){const[R,E]=g.length===0?[I,I.length]:y(I,g,x+c+1,`${C?`${C}-$$$-`:""}${_}`);m[_]=R,b[_]=I,c+=E+1}return[pd(m,n.groupRowReplaceTo,{additionalPropertiesForGroup:_=>({groupKey:_,groupByKey:w,childRows:b==null?void 0:b[_],groupParents:C})}),c]};return y(t,d,0,"")},[d,t,r]);return{groupedRows:p,groupedCols:d,setGroupedCols:u,rowsGroupingIsActiveInConfig:r,isRowsGroupingLabelVisible:o,setIsRowsGroupingLabelVisible:a,isRowsGroupingCounterVisible:l,setIsRowsGroupingCounterVisible:i}}const ar=(e,t,n,r,o,a,l)=>Array.prototype.concat.apply(e==null?void 0:e.reduce((i,d)=>{const u=r||1,p=o||null;if(l&&!l(u,d,p))return i;const y={...d,[$t.level]:u,[$t.parent]:p,customProps:(a==null?void 0:a(u,d,p))??{}};return i.push(y),i},[]),e==null?void 0:e.map(i=>ar(t(i)||[],t,n,(r||1)+1,n(i),a,l))),fd=(e,t,n)=>{const r=new Map;if(!e)return{allParents:r};const o=a=>{var u;const l=n(a),i=(u=t.find(p=>n(p)===l))==null?void 0:u.parent;if(!i)return;const d=n(i);r.set(d,i),o(i)};return o(e),{allParents:r}},yl=e=>({...e,levels:(e==null?void 0:e.levels)??bu.levels}),gl=h.createContext(void 0),oo=({children:e,...t})=>s.jsx(gl.Provider,{value:t,children:e});function vs(){const e=h.useContext(gl);if(e===void 0)throw new Error("useSelectingRowContext must be used within DataGrid cells");return e}const xl=h.createContext(void 0),Qt=(e,t)=>typeof t=="number"?e===t:t==="all"?!0:typeof t=="function"?t(e):t.some(n=>n===e),so=({children:e,...t})=>{const{flattenedRowsArrAndMap:n,selectingRowConfig:r,selectedRows:o,setSelectedRows:a,rowKeyGetter:l,rowsGroupingIsActive:i}=vs(),{flattenedRows:d,flattenedRowsMap:u}=n??{},p=!!d&&!!u,{row:y}=t,{selectingRowsIsActive:f,selectingRules:w,rowCheckboxDisabled:g,rowShowCheckbox:x}=r,C=yl(w),{levels:c}=C,{isRowSelected:m,isIndeterminate:b,isRowSelectionDisabled:S,isHaveCheckbox:_,onChange:I}=(()=>{var Q,Z,U;if(!f||!l||!p||ct(y)||!o||!a)return{isRowSelected:!1,isIndeterminate:!1,isRowSelectionDisabled:!1,isHaveCheckbox:!1,onChange:null};if(i&&ir(y)){const ee=y.childRows.reduce((le,D)=>{const M=o==null?void 0:o.has(l(_t(D)));return le+(M?1:0)},0),j=!!y.childRows.length&&ee===y.childRows.length,F=!j&&ee>0,X=(Z=(Q=r.groupedRow)==null?void 0:Q.getStates)==null?void 0:Z.call(Q,{checkedCalculated:j,indeterminateCalculated:F,row:y,selectedRows:o,selectedChildCount:ee,childCount:y.childRows.length});return{isHaveCheckbox:(X==null?void 0:X.showCheckbox)??!0,isRowSelected:(X==null?void 0:X.checked)??j,isIndeterminate:(X==null?void 0:X.indeterminate)??F,isRowSelectionDisabled:(X==null?void 0:X.checkboxDisabled)??!1,onChange:null}}const v=u.get(l(y)),A=(v==null?void 0:v[$t.level])??1,T=(v==null?void 0:v[$t.parent])??null,V=Qt(A,c),$=_t(y),H=!!(o!=null&&o.has(l($))),W=()=>{const ee={all:[],disabled:[],notDisabled:[],notDisabledAndNotHidden:[],notDisabledAndNotHiddenAreSelected:!1,hidden:[],notHidden:[],selected:[],notSelected:[],someChildrenIsSelected:!1};return V&&(ar([y],F=>F==null?void 0:F[Ct],F=>F,void 0,void 0,(F,X)=>({rowKey:l(X)}),(F,X,le)=>{if(F===1)return!1;const D=l(X),M=u.get(D),N=(M==null?void 0:M.level)??1;if(!Qt(N,c))return!1;ee.all.push(X);const J=o.has(D);ee[o.has(D)?"selected":"notSelected"].push(D);const oe=(x==null?void 0:x(X,N,le))??!0;ee[oe?"notHidden":"hidden"].push(D);const ie=(g==null?void 0:g(X,N,le))??!1;return ee[ie?"disabled":"notDisabled"].push(D),oe&&!ie&&(ee.notDisabledAndNotHidden.push(D),ee.notDisabledAndNotHidden.length===1&&J&&(ee.notDisabledAndNotHiddenAreSelected=!0),J||(ee.notDisabledAndNotHiddenAreSelected=!1)),!0}),ee.selected.length&&(ee.someChildrenIsSelected=!0)),ee},q=ee=>{const j=W().all;return!!j.length&&j.some(X=>!!(o!=null&&o.has(l(X))))},K=()=>H?!1:q(),se=(()=>{var ee;return r!=null&&r.rowCheckboxDisabled?(ee=r==null?void 0:r.rowCheckboxDisabled)==null?void 0:ee.call(r,y,A,T):!1})(),O=r.rowShowCheckbox?V&&r.rowShowCheckbox(y,A,T):Qt(A,c),k=K(),G=(U=r==null?void 0:r.rowGetStates)==null?void 0:U.call(r,{isHaveCheckboxCalculated:O,isRowSelectedCalculated:H,isIndeterminateCalculated:k,isRowSelectionDisabled:se,row:y,rowKeyGetter:l,flattenedRowsMap:u,selectedRows:o,level:A,parent:T,getRowChildrenInfo:W,rowShowCheckbox:x,rowCheckboxDisabled:g,setSelectedRows:a});return{isHaveCheckbox:(G==null?void 0:G.showCheckbox)??O,isRowSelected:(G==null?void 0:G.checked)??H,isIndeterminate:(G==null?void 0:G.indeterminate)??k,isRowSelectionDisabled:(G==null?void 0:G.checkboxDisabled)??se,onChange:(G==null?void 0:G.onChange)??null}})(),R=h.useCallback(()=>{var q;if(!f||!o||!u||!a||!l||!p)return;if(i&&ir(y)){const K=()=>a(se=>{const O=new Set(se);return y.childRows.forEach(k=>O[m?"delete":"add"](l(_t(k)))),O});if((q=r.groupedRow)!=null&&q.onChange){r.groupedRow.onChange({row:y,setSelectedRows:a,checked:m,indeterminate:b,checkboxDisabled:S,showCheckbox:_,defaultSetter:K});return}K();return}const v=u.get(l(y)),A=c===1,{allParents:T}=A?{allParents:new Map}:fd(v,d,l),V=()=>{const K=Array.from(T),se=O=>K.reduce((k,[G,Q])=>{const Z=l(Q),U=u.get(Z),ee=(U==null?void 0:U[$t.level])??1,j=Qt(ee,c);return(Q==null?void 0:Q[Ct]).every(le=>O==null?void 0:O.has(l(le)))&&j?(k.shouldBeSelected.push(G),k):(k.shouldNotBeSelected.push(G),k)},{shouldBeSelected:[],shouldNotBeSelected:[]});return{all:K.map(([O,k])=>k),getShouldBeSelectedInfo:se}},$=A?[y]:ar([y],K=>K==null?void 0:K[Ct],K=>K),H=K=>{const se=l(K),O=u.get(se),k=(O==null?void 0:O[$t.level])??1;return Qt(k,c)},W=()=>a(K=>{const se=!!(K!=null&&K.has(l(y))),O=new Set([...K]);$.forEach(Z=>{const U=l(Z);if(se){O.delete(U);return}H(Z)&&O.add(l(Z))});const{getShouldBeSelectedInfo:k}=V(),{shouldBeSelected:G,shouldNotBeSelected:Q}=k(O);return G.forEach(Z=>O.add(Z)),Q.forEach(Z=>O.delete(Z)),O});if(I){I({allParentsMap:T,isRowInLevels:H,defaultSetter:W,getRowParentsInfo:V});return}W()},[f,o,u,a,l,p,i,y,c,d,I,r.groupedRow,m,b,S,_]),E=h.useMemo(()=>({isRowSelected:m,isIndeterminate:b,isRowSelectionDisabled:S,isHaveCheckbox:_,onChange:R}),[_,m,b,S,R]);return s.jsx(xl.Provider,{value:E,children:e})},yd=()=>{const e=h.useContext(xl);if(e===void 0)throw new Error("useSelectingCheckBoxCellContext must be used within DataGrid cells");return e};try{oo.displayName="SelectingContextProvider",oo.__docgenInfo={description:"",displayName:"SelectingContextProvider",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"RowType[]"}},selectingRowConfig:{defaultValue:null,description:"",name:"selectingRowConfig",required:!0,type:{name:"SelectingRowConfig<RowType, RowIdType> & { selectingRowsIsActive: boolean; }"}},flattenedRowsArrAndMap:{defaultValue:null,description:"",name:"flattenedRowsArrAndMap",required:!0,type:{name:"FlattenedRowsArrAndMap<RowType, RowIdType>"}},selectedRows:{defaultValue:null,description:"",name:"selectedRows",required:!0,type:{name:"ReadonlySet<string | number>"}},setSelectedRows:{defaultValue:null,description:"",name:"setSelectedRows",required:!0,type:{name:"any"}},rowKeyGetter:{defaultValue:null,description:"",name:"rowKeyGetter",required:!0,type:{name:"(row: RowType) => RowIdType"}},rowsGroupingIsActive:{defaultValue:null,description:"",name:"rowsGroupingIsActive",required:!0,type:{name:"boolean"}},isRowsGroupingLabelVisible:{defaultValue:null,description:"",name:"isRowsGroupingLabelVisible",required:!0,type:{name:"boolean"}},setIsRowsGroupingLabelVisible:{defaultValue:null,description:"",name:"setIsRowsGroupingLabelVisible",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},isRowsGroupingCounterVisible:{defaultValue:null,description:"",name:"isRowsGroupingCounterVisible",required:!0,type:{name:"boolean"}},setIsRowsGroupingCounterVisible:{defaultValue:null,description:"",name:"setIsRowsGroupingCounterVisible",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},isSelectingRowLabelVisible:{defaultValue:null,description:"",name:"isSelectingRowLabelVisible",required:!0,type:{name:"boolean"}},setIsSelectingRowLabelVisible:{defaultValue:null,description:"",name:"setIsSelectingRowLabelVisible",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},isSelectingRowCounterVisible:{defaultValue:null,description:"",name:"isSelectingRowCounterVisible",required:!0,type:{name:"boolean"}},setIsSelectingRowCounterVisible:{defaultValue:null,description:"",name:"setIsSelectingRowCounterVisible",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},controlBlock:{defaultValue:null,description:"",name:"controlBlock",required:!1,type:{name:"{ domMetadata?: DomMetadata; }"}},sidebar:{defaultValue:null,description:"",name:"sidebar",required:!1,type:{name:"{ domMetadata?: DomMetadata; }"}}}}}catch{}try{so.displayName="SelectingCheckBoxCellContextProvider",so.__docgenInfo={description:"",displayName:"SelectingCheckBoxCellContextProvider",props:{}}}catch{}const ur=({isHaveRightDivider:e,hideCheckbox:t=!1,renderOnlyCheckbox:n=!1,onChangeHandlerRef:r})=>{var U,ee;const{down:o}=sa(),l=o("xl")?"BodyXS":"BodyS",{rows:i,flattenedRowsArrAndMap:d,selectingRowConfig:u,selectedRows:p,setSelectedRows:y,rowKeyGetter:f,isSelectingRowLabelVisible:w,isSelectingRowCounterVisible:g,controlBlock:x}=vs(),{selectingRowsIsActive:C,selectingRules:c,summaryChecked:m,summaryCheckedUncontrolled:b,rowCheckboxDisabled:S,rowShowCheckbox:_,disableSummaryCheckboxInHeader:I,hideSummaryCheckboxInHeader:R,summaryCounterMaxCount:E}=u,v=b==null?void 0:b.onChange;if(!C||!f||!p||n&&R||!n&&(u!=null&&u.hideSummaryCheckbox))return null;const{levels:A=1}=c??{},{flattenedRows:T}=d??{},{allRowsOnLevel:V,checkedAll:$}=(()=>{let j=[];return!T||!p?{checkedAll:!1,allRowsOnLevel:j}:A===1?(j=i,{checkedAll:j.length>0&&p.size===j.length,allRowsOnLevel:j}):A==="all"?(j=T,{checkedAll:j.length>0&&p.size===j.length,allRowsOnLevel:j}):(j=T.filter(F=>{if(typeof A=="number"){const X=A;return(F.level??1)===(X??1)}return typeof A=="function"?A(F.level??1):A.some(X=>X===(F.level??1))}),{checkedAll:j.length>0&&j.length===p.size,allRowsOnLevel:j})})(),H=()=>{const j={all:V,disabled:[],notDisabled:[],notDisabledAndNotHidden:[],notDisabledAndNotHiddenAreSelected:!1,hidden:[],notHidden:[],selected:[],notSelected:[],someChildrenIsSelected:!1};return V.forEach(({level:F,parent:X,...le})=>{const D=f(le),M=p.has(D);j[M?"selected":"notSelected"].push(D);const N=(_==null?void 0:_(le,F,X))??!0;j[N?"notHidden":"hidden"].push(D);const J=(S==null?void 0:S(le,F,X))??!1;j[J?"disabled":"notDisabled"].push(D),N&&!J&&(j.notDisabledAndNotHidden.push(D),j.notDisabledAndNotHidden.length===1&&M&&(j.notDisabledAndNotHiddenAreSelected=!0),M||(j.notDisabledAndNotHiddenAreSelected=!1))}),j.selected.length&&(j.someChildrenIsSelected=!0),j},W=()=>({rows:i,flattenedRows:T??[],selectedRowsIds:p??new Set,setSelectedRowsIds:y??(()=>{}),rowKeyGetter:f,rowCheckboxDisabled:S,rowShowCheckbox:_,allRowsInLevels:V,getAllRowsInfo:H}),q=(()=>{if(typeof m<"u"){let j=!1;return typeof m.checked=="boolean"?j=m.checked:j=m.checked(W()),j}return $})(),K=m?typeof m.indeterminate=="boolean"?m.indeterminate:m.indeterminate({checkedAll:q,...W()}):p&&p.size!==0&&!q,{isHaveCounter:se,count:O}=(()=>{if(m){const F=m.getCountOfChecked(W());return{isHaveCounter:F>0,count:F}}const j=p&&typeof p.size=="number"&&p.size||0;return{isHaveCounter:j>0,count:j}})(),k=typeof E=="number"&&O>E?`${E}+`:`${O}`,G=(()=>{if(!p||p.size===0)return"0px";const j=k.length;return`${Math.max(16,7.1+j*6.1)+4}px`})(),Q=j=>{if(m){m.onChange({...W(),checkedAll:q,setSelectedRowsIds:y??(()=>{}),...j});return}if(!(!y||!f)){if(q||j!=null&&j.clearButtonClicked){y(new Set);return}y(new Set(V.map(F=>f(F))))}};r!=null&&r.current&&(r.current=Q);const Z=s.jsx(vt,{checked:q,indeterminate:K,disabled:n&&I,onChange:j=>{v==null||v(j),Q()},label:!n&&w&&"Выбрано"});return n?Z:s.jsxs(Y,{$css:{display:"flex",alignItems:"center","& .divider":{paddingLeft:"1px",marginLeft:"16px"}},className:(U=x==null?void 0:x.domMetadata)==null?void 0:U.className,...(ee=x==null?void 0:x.domMetadata)==null?void 0:ee.dataAttributes,children:[!t&&Z,t&&w&&s.jsx(lu,{variant:l,children:"Выбрано"}),s.jsx(ds,{duration:.3,orientation:"horizontal",isOpen:se&&g,sizeOnOpen:G,unMountOnClose:!0,extContainerCss:{overflow:"visible",display:"flex",justifyContent:"flex-end"},intContainerCss:{always:{opacity:"0",transition:".3s ease"},onOpen:{opacity:1}},children:se&&g&&s.jsx(sr,{className:"counter",view:"accent",size:"xs",count:O,maxCount:E,style:{marginBottom:"3px"}},O)}),e&&s.jsx(hs,{className:"divider",orientation:"vertical",length:"16px"})]})};try{ur.displayName="SummaryCheckbox",ur.__docgenInfo={description:"",displayName:"SummaryCheckbox",props:{isHaveRightDivider:{defaultValue:null,description:"",name:"isHaveRightDivider",required:!0,type:{name:"boolean"}},hideCheckbox:{defaultValue:{value:"false"},description:"",name:"hideCheckbox",required:!1,type:{name:"boolean"}},renderOnlyCheckbox:{defaultValue:{value:"false"},description:"",name:"renderOnlyCheckbox",required:!1,type:{name:"boolean"}},onChangeHandlerRef:{defaultValue:null,description:"",name:"onChangeHandlerRef",required:!1,type:{name:"MutableRefObject<(arg: { clearButtonClicked: true; checkedAll: true; }) => void>"}}}}}catch{}function io(e){return s.jsx(ur,{isHaveRightDivider:!1,renderOnlyCheckbox:!0})}try{io.displayName="CheckboxHeaderCell",io.__docgenInfo={description:"",displayName:"CheckboxHeaderCell",props:{}}}catch{}function lo(e){const{isHaveCheckbox:t,isRowSelected:n,isIndeterminate:r,isRowSelectionDisabled:o,onChange:a}=yd();return t?s.jsx(vt,{className:"select-row-checkbox",indeterminate:r,checked:n,disabled:o,onChange:a}):null}const je={key:Ee,name:"",width:56,minWidth:56,maxWidth:56,cellClass:Ce,headerCellClass:`${Ce} ${ll}`,summaryCellClass:`${Ce} ${Su}`,resizable:!1,sortable:!1,frozen:!0,renderCell(e){return s.jsx(lo,{...e})},renderHeaderCell(e){return s.jsx(io,{...e})}};try{lo.displayName="CheckboxFormatter",lo.__docgenInfo={description:"",displayName:"CheckboxFormatter",props:{}}}catch{}const Qe=(e,t)=>P`
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${()=>`border${t?`-${t}`:""}: 1px solid ${e??z.selectCellColor};`}
    z-index: 1;
    pointer-events: none;
  }
`,bl=P`
  &[aria-selected='true'] {
    ${Qe()}
  }
`,gd=P`
  &.${L.editableCell}:not(.${L.editingCell}) {
    background-color: ${z.editableCellColor};
  }

  &:hover.${L.editableCell}:not(.${L.editingCell}) {
    background-color: ${z.editableCellHoverColor};
  }
`,xd=P`
  &.${L.editedWithErrorCell}:not(.${L.editingCell}):not(
      [aria-selected='true']
    ) {
    ${()=>Qe(Pi)}
  }
`,bd=P`
  &.${L.editedSuccessfullyCell}:not(.${L.editingCell}):not(
      [aria-selected='true']
    ) {
    background-color: ${z.editedSuccessfullyCellColor};

    &:hover {
      background-color: ${z.editedSuccessfullyCellHoverColor};
    }
  }
`,Sd=P`
  content: '';
  position: absolute;
  right: 0px;
  width: 1px;
  background-color: ${z.border};
`,wd=e=>e?P`
        & .rdg-cell {
          border-right: 1px solid ${z.border};
        }
      `:P`
        & .rdg-cell:not(:last-of-type):not(:only-of-type)::after {
          ${Sd}
          top: 50%;
          transform: translate(0, -50%);
          height: calc(100% - 15px);
          border-radius: 2px;
        }
      `,Sl=`.${L.headerCellRightIcons}`,Xn=`.${L.headerCellFilterIsActive}`,Nt=`.${L.headerCellFilterIsAvailable}`,Jn=`.${L.headerCellSortingIsActive}`,Bt=`.${L.headerCellSortingIsAvailable}`,Cd=P`
  ${Sl} {
    flex-shrink: 0;
    display: flex;
    opacity: 0;
    width: 0;
    transition: ${Gt};
    margin-left: auto;
    gap: 4px;
    background-color: ${z.headerColor};
    min-width: 0;

    /* Активная сортировка или активная фильтрация */
    &:has(${Xn}, ${Jn}) {
      opacity: 1;

      /* Обе фичи доступны */
      &:has(${Nt}):has(${Bt}) {
        width: 36px;
        & ${Xn}, & ${Jn} {
          opacity: 1;
          width: 16px;
        }
      }

      /* Только фильтр активен */
      &:has(${Xn}):not(:has(${Jn})) {
        width: 16px;
        gap: 0;
        & ${Bt} {
          opacity: 0;
          width: 0;
        }
      }

      /* Только сортировка активна */
      &:has(${Jn}):not(:has(${Xn})) {
        width: 16px;
        gap: 0;
        transition: none;
        & ${Nt} {
          transition: none;
          opacity: 0;
          width: 0;
        }
      }
    }
  }
`,_d=P`
  &:hover,
  &[aria-selected='true'] {
    ${Sl} {
      opacity: 1;

      /* Обе иконки доступны */
      &:has(${Nt}):has(${Bt}) {
        width: 36px;
        gap: 4px;
        & ${Nt}, & ${Bt} {
          opacity: 1;
          width: 16px;
        }
      }

      /* Только сортировка доступна */
      &:has(${Bt}):not(:has(${Nt})) {
        width: 16px;
        gap: 0;
      }

      /* Только фильтр доступен */
      &:has(${Nt}):not(:has(${Bt})) {
        width: 16px;
        gap: 0;
      }
    }
  }
`,dr=`:has(.${L.cell}[aria-selected='true'])`,Vr=`.${L.row}:not(.${L.headerRow}):not(.${L.summaryRow})`,wl=`.${L.topSummaryRow}${dr}`,Rd=`${wl}:nth-child(1 of .${L.topSummaryRow})`,vd=`.${L.topSummaryRow}:has(+ .${L.topSummaryRow} > .${L.cell}[aria-selected='true'])`,Is=`.${L.bottomSummaryRow}${dr}`,Id=`${Is} + .${L.bottomSummaryRow}`,Ed=`${Is}:nth-last-child(1 of .${L.bottomSummaryRow})`,Td=P`
  ${Vr}${dr} {
    &.${Xr} {
      .${L.cell} {
        ${()=>Qe(void 0,"top")};
      }
    }
    &:not(.${Xr}) {
      .${L.cell} {
        border-top: 1px solid ${z.selectCellColor};
      }
    }
    & + ${Vr} {
      .${L.cell} {
        border-top: 1px solid ${z.selectCellColor};
      }
    }
    &:nth-last-child(1 of ${Vr}) {
      .${L.cell} {
        border-block-end: 1px solid ${z.selectCellColor};
      }
    }
    & {
      .${L.cell} {
        &:first-of-type {
          ${()=>Qe(void 0,"left")};
        }
        &:last-of-type {
          ${()=>Qe(void 0,"right")};
        }
      }
    }
  }
  .${L.headerRow} {
    .${L.cell} {
      ${bl}
    }
  }

  ${vd}, ${wl} {
    .${L.cell} {
      border-block-end-color: ${z.selectCellColor};
    }
  }

  ${Rd} {
    .${L.cell} {
      ${()=>Qe(void 0,"top")};
    }
  }

  ${Is}, ${Id} {
    .${L.cell} {
      border-block-start-color: ${z.selectCellColor};
    }
  }
  ${Ed} {
    .${L.cell} {
      ${()=>Qe(void 0,"bottom")};
    }
  }

  .${L.summaryRow}${dr} {
    .${L.cell} {
      &:first-of-type {
        ${()=>Qe(void 0,"left")};
      }
      &:last-of-type {
        ${()=>Qe(void 0,"right")};
      }
    }
  }
`,Ad=P`
  /* var */
  ${_s.zIndexCell}: 0;

  z-index: ${xt.zIndexCell};

  &.${L.cellPinnedLeft}, &.${Qr} {
    z-index: calc(${xt.zIndexCell} + 1);
  }
`,kd=P`
  ${_s.zIndexCell}: 1;
`,Dd=P`
  --digit-max: 50;
  --digit-1: 0;
  --digit-2: 0;
  --current-z-index: calc(var(--digit-max) - (var(--digit-1) + var(--digit-2)));

  z-index: var(--current-z-index);

  /* Get element order */
  &:nth-of-type(10n + 0) {
    --digit-1: 0;
  }
  &:nth-of-type(10n + 1) {
    --digit-1: 1;
  }
  &:nth-of-type(10n + 2) {
    --digit-1: 2;
  }
  &:nth-of-type(10n + 3) {
    --digit-1: 3;
  }
  &:nth-of-type(10n + 4) {
    --digit-1: 4;
  }
  &:nth-of-type(10n + 5) {
    --digit-1: 5;
  }
  &:nth-of-type(10n + 6) {
    --digit-1: 6;
  }
  &:nth-of-type(10n + 7) {
    --digit-1: 7;
  }
  &:nth-of-type(10n + 8) {
    --digit-1: 8;
  }
  &:nth-of-type(10n + 9) {
    --digit-1: 9;
  }

  &:nth-of-type(-n + 10) {
    --digit-2: 0;
  }
  &:nth-of-type(n + 10):nth-of-type(-n + 20) {
    --digit-2: 10;
  }
  &:nth-of-type(n + 20):nth-of-type(-n + 30) {
    --digit-2: 20;
  }
  &:nth-of-type(n + 30):nth-of-type(-n + 40) {
    --digit-2: 30;
  }
  &:nth-of-type(n + 40):nth-of-type(-n + 50) {
    --digit-2: 40;
  }
  &:nth-of-type(n + 50):nth-of-type(-n + 60) {
    --digit-2: 50;
  }
  &:nth-of-type(n + 60):nth-of-type(-n + 70) {
    --digit-2: 60;
  }
  &:nth-of-type(n + 70):nth-of-type(-n + 80) {
    --digit-2: 70;
  }
  &:nth-of-type(n + 80):nth-of-type(-n + 90) {
    --digit-2: 80;
  }
  &:nth-of-type(n + 90):nth-of-type(-n + 100) {
    --digit-2: 90;
  }
  &:nth-of-type(n + 100):nth-of-type(-n + 110) {
    --digit-2: 100;
  }
`,Cl=(e="right")=>`${e==="left"?"-":""}48px 24px 48px -8px rgba(0, 0, 0, 0.04)`,Od=e=>P(ae[e].font()),ao=({maxHeight:e}={})=>P`
  transition: grid-template-rows ${at}s ease,
    max-height ${e??at}s linear,
    border-radius ${at+.2}s ease, border-color ${at+.2}s ease;
`,Vd=(e,t,n,r)=>P`
    border-radius: ${e?we:0}px ${t?we:0}px ${r?we:0}px
      ${n?we:0}px;
  `,$d=()=>P(xs),Nd=P`
  > .rdg-header-row,
  > .rdg-row {
    transition: line-height 0.5s ease, font-size 0.5s ease,
      line-height 0.5s ease, padding 0.5s ease;
  }

  > .rdg-header-row {
    .rdg-cell * {
    }
  }
`,Bd=P`
  // Tooltips
  && .popover-root > * {
    --plasma-tooltip-background-color: ${()=>Gs};
    --plasma-popover-arrow-background: ${()=>Gs};
    --plasma-tooltip-color: ${()=>Ya};
  }
`,Ld=e=>P`
  /* custom tokens */
  ${()=>P`
    ${Fu(e)}
  `}

  /* data-grid tokens */
  --rdg-color: ${z.textColor};
  --rdg-border-color: ${z.border};
  --rdg-summary-border-color: ${z.border};
  --rdg-background-color: ${z.white};

  --rdg-selection-color: transparent; // задаем через :before element, так как нужен border-radius, поэтому здесь зануляем

  --rdg-header-background-color: ${z.headerColor};
  --rdg-header-draggable-background-color: ${z.headerColor};

  --rdg-row-hover-background-color: ${z.rowHoverColor};
  --rdg-row-selected-background-color: ${z.white};
  --rdg-row-selected-hover-background-color: ${z.headerColor};

  --rdg-checkbox-color: hsl(207deg 100% 29%);
  --rdg-checkbox-focus-color: hsl(207deg 100% 69%);
  --rdg-checkbox-disabled-border-color: #ccc;
  --rdg-checkbox-disabled-background-color: #ddd;

  --rdg-cell-frozen-box-shadow: ${Cl()};
`,Zs=P`
  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background-color: ${z.white};
    &:vertical {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
    &:horizontal {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &-track {
      margin: 0px;
      &:hover {
        margin: 0px;
      }
      &:vertical {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        border-left: 1px solid ${z.border};
      }
      &:horizontal {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        border-top: 1px solid ${z.border};
      }
    }

    &-thumb {
      background-color: ${()=>Ir};
      background-clip: content-box;
      cursor: pointer;
      &:hover {
        background-color: ${()=>he};
      }

      &:vertical {
        border-left: 4px solid transparent;
        border-right: 3px solid transparent;

        border-top-left-radius: 7px; // 10
        border-bottom-left-radius: 7px; // 10

        border-top-right-radius: 6.25px; //9.25
        border-bottom-right-radius: 6.25px; //9.25
      }
      &:horizontal {
        border-top: 4px solid transparent;
        border-bottom: 3px solid transparent;

        border-top-left-radius: 7px; // 10
        border-top-right-radius: 7px; // 10

        border-bottom-left-radius: 6.25px; //9.25
        border-bottom-right-radius: 6.25px; //9.25
      }
    }

    &-corner {
      border-left: 1px solid ${z.border};
      border-bottom-right-radius: 50px;
    }
  }
`,jd=P`
  &
    .${Ce},
    &
    .rdg-header-row
    .${Ce},
    .rdg-row
    .${Ce},
    &
    .rdg-summary-row
    .${Ce} {
    display: flex;
    justify-content: center;
    align-items: center;

    border-inline-end: 1px solid ${z.border};
  }

  /* Убираем границу справа у чекбокса, если активна колонка row instruments */
  &
    .${Ce}.${wt},
    &
    .rdg-header-row
    .${Ce}.${wt},
    .rdg-row
    .${Ce}.${wt},
    &
    .rdg-summary-row
    .${Ce}.${wt} {
    border-inline-end: 0px;
  }

  & .rdg-header-row .${ll} {
    &::after {
      display: none;
    }
  }
`,Fd=P`
  & .${eo} {
    border-inline-end: 0px solid ${z.border} !important;
  }
  &
    .${St},
    &
    .rdg-header-row
    .${St},
    .rdg-row
    .${St},
    &
    .rdg-summary-row
    .${St} {
    display: flex;
    justify-content: center;
    align-items: center;

    border-inline-end: 1px solid ${z.border};
  }

  // отключаем divider  у колонки перед rowInstruments column
  & .rdg-header-row .rdg-cell:has(+ .${eo}) {
    &::after {
      display: none;
    }
  }
`,ei={allRows:P`
    &.${Qr} {
      position: sticky;
      right: 0;

      &:nth-child(1 of &) {
        box-shadow: ${Cl("left")};
      }
    }
  `,header:P`
    &.${Qr} {
      background-color: ${z.headerColor};

      z-index: calc(var(--current-z-index) + 100);
    }
  `},Pd=P`
  position: fixed;
  z-index: 9000; // как у модальных окон sdds
  top: 0;
  left: 0;
  margin: ${Ie.MARGIN};
  width: ${Ie.WIDTH_TABLE_CONTAINER};
  max-width: ${Ie.WIDTH_TABLE_CONTAINER};
  min-width: ${Ie.WIDTH_TABLE_CONTAINER};
  height: ${Ie.HEIGHT_TABLE_CONTAINER};
  max-height: ${Ie.HEIGHT_TABLE_CONTAINER};
  min-height: ${Ie.HEIGHT_TABLE_CONTAINER};
  padding: 8px;
  background-color: ${z.white};
  border-radius: 16px;

  box-shadow: 0px 0px 0px ${Ie.BOX_SHADOW} ${()=>Ja};

  // ::before - используется как overlay
  &::before {
    content: '';
    position: absolute;
    z-index: -1;

    top: -${Ie.MARGIN};
    left: -${Ie.MARGIN};
    width: 100dvw;
    height: 100dvh;
  }

  & > .rdg {
    ${()=>ao({maxHeight:0})};
  }
`,Hd=B.div`
  // Collapsing таблицы
  // Для collapse таблицы плавное изменений высот
  ${({$isEnabledCollapse:e})=>e&&P`
      transition: height 0.5s ease, max-height 0.5s ease;
    `}
  // Для свернутой таблицы активируем overflow: hidden (чтобы блоки пагинации и др. не было видно)
  ${({$isCollapsed:e})=>P`
    overflow: ${e?"hidden":"unset"};
  `}

  // RightSidebar
  & .${L.tableSidebarLayout} {
    position: relative;

    // Collapsing (если есть RightSidebar)
    // Для collapse таблицы плавное изменений высот
    ${({$isEnabledCollapse:e})=>e&&P`
        transition: height 0.5s ease, max-height 0.5s ease, opacity 0.5s ease;
      `}
    display: flex;

    & .${L.tableSidebarTableContainer} {
      ${()=>ao()}
      flex-grow: 1;
      min-width: 0;
    }
  }

  & {
    box-sizing: border-box;
    position: relative;
  }

  ${({$activeView:e,$isHaveRowHeightAnimation:t,$columnsGroupingIsActive:n,$borderLeftTopRadiusRounded:r,$borderRightTopRadiusRounded:o,$borderLeftBottomRadiusRounded:a,$borderRightBottomRadiusRounded:l,$rowHeight:i,$highlightActiveType:d,$activeTheme:u,$css:p})=>e==="cards"?P`
        ${Zs}
        & .${L.tableCardsViewContainer} {
          transition: opacity 2s ease, max-height 0.3s ease;
          border: 1px solid transparent;
        }
      `:P`
      // Tooltips
      ${Bd}
      // Будет необходимо возможно для тултипов в controlBlock
      /* & {
        z-index: 1;
        overflow: visible;
      } */
      
      & .rdg {
        border: 1px solid var(--rdg-border-color);
        ${Zs}
        ${Ld(u)}
        ${()=>ao()}
    
            ${t&&Nd}
    
            // --------------------------- styles ---------------------------
            ${Vd(r,o,a,l)}
    

    
            
        & .rdg-cell {
          align-content: center;

          ${Ad}

          &:not(.${Ce}) {
            border-inline-end: 0px;
          }

          ${Od(i)}

          padding-block: ${ae[i].cell["padding-block"]};
          padding-inline: ${ae[i].cell["padding-inline"]};

          border-block-end: 0px;

          // В режиме редактирования padding для элементов редактирования
          &.rdg-editor-container.rdg-editable-cell {
            & .input-wrapper {
              padding-block: ${ae[i].cell["padding-block"]};
              padding-inline: ${ae[i].cell["padding-inline"]};
            }
          }

          & .${ne.editableCellWithExpandButton} {
            padding-right: ${ae[i].cell["padding-inline"]};
          }

          & .${ne.cellWithExpandButton} .${ne.selectArrowContainer} {
            padding-right: ${ae[i].cell["padding-inline"]};
          }

          &.rdg-editable-cell {
            // Стили иконки селекта скопированные из компонента селект атомарной либы
            & .${ne.selectArrow} {
              margin-left: 12px;
              margin-right: -2px;
              margin-block: -1px;
            }
          }

          &.expanded-row-cell {
          }
          ${ei.allRows}

          ${gd}
          ${bd}
          ${xd}
          ${d==="cell"&&bl}
        }

        & .rdg-editor-container {
          padding-block: ${ae[i].editorCell["padding-block"]};
          padding-inline: ${ae[i].editorCell["padding-inline"]};
        }

        // fullheight for rowDetailPanel
        & .rdg-row.${tn} .rdg-cell > * {
          height: 100%;
        }

        & .rdg-header-row {
          z-index: 5;
          & .rdg-cell {
            contain: strict; // Важно! Анимация показа иконок (фильтр/сортировка) может влиять на родителя, в частности, когда pined колонка сжата в минимум. Свойство используется для предотвращения этого. внутренний flex контейнер НИКАК не может повлиять на ширину своего родителя.
            display: flex;
            width: 100%;
            min-width: 0;
            overflow: hidden;

            .${L.headerCellLeftIcons} {
              flex-shrink: 0;
              margin-right: 6px;
              display: inline-flex;
              gap: 4px;
              color: ${()=>Ir};
            }

            .${L.headerCellContainer} {
              display: flex;
              max-height: 16px;
              position: relative;
              width: 100%;
              min-width: 0;
            }

            .${L.headerCellTextContent} {
              display: flex;
              align-items: center;
              flex-shrink: 1;
              min-width: 0; // разрешаем сжатие
              margin-right: 6px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              transition: flex 0.2s ease; // анимация сжатия
            }

            ${Cd}

            ${_d}

            color: ${z.headerTextColor};
            border-block-end: 1px solid ${z.border};

            align-content: start;
            ${()=>$d()}
            ${Dd}
                        ${ei.header}
    
                        overflow: hidden;

            padding-block: 8px !important;
            padding-inline: 16px;

            border-inline-end: 0px;

            &.rdg-cell-draggable {
              cursor: -webkit-grab;
              cursor: -moz-grab;
              cursor: -o-grab;
              cursor: -ms-grab;
              cursor: grab;

              &:active {
                cursor: -webkit-grabbing;
                cursor: -moz-grabbing;
                cursor: -o-grabbing;
                cursor: -ms-grabbing;
                cursor: grabbing;
              }
            }
          }
          ${()=>wd(n)}

          // для строк шапки не последнего уровня и которые занимают более 1 строки - align-content: center;
                    &:not(:last-of-type):not(:only-of-type) {
            & .rdg-cell:not(.rdg-cell[aria-rowspan='1']) {
              align-content: center;
            }
          }
        }

        // ------------------------------- ↓ border for rows -------------------------------
        /* у последней строки (не summaryRow) добавляем border-bottom с помощью box-shadow 
        - чтобы был отступ снизу и никак не влиял на родителя - на расчет наличия scroll в таблице)
        - чтобы при обычных сценариях он не был виден. Был виден только,
        когда от посл строки до итоговой строки (или конца таблицы) еще много пустого свободного места)
        */

        & :nth-last-child(1 of .rdg-row:not(.rdg-bottom-summary-row)) {
          .rdg-cell {
            box-shadow: 0 1px 0px 0px ${z.border};
          }
        }

        // у всех строк 1 уровня вложенности кроме первой ставим border-top
        & .rdg-row.${al}:not(.${Xr}) {
          & .rdg-cell {
            border-block-start: 1px solid ${z.border};
          }
        }

        ${d==="row"&&Td}

        // ↓ detail panel row borders
        & .rdg-row {
          // border-top - для всех detail-panel-row
          &.${tn}
            .rdg-cell:not(.${Ce}) {
            border-block-start: 1px solid ${z.border};
          }

          // border-top - для всех строк, которые после detail-panel-row
          &.${tn} + .rdg-row {
            .rdg-cell:not(.${Ce}) {
              border-block-start: 1px solid ${z.border};
            }
          }
        }

        // ------------------------------- ↑ border for rows -------------------------------
        // delete hover for detailPanelRow
        & .rdg-row.${tn}:hover {
          background-color: inherit;
        }

        & .rdg-summary-row {
          background-color: ${z.headerColor};
          & .rdg-cell {
            ${kd}
          }

          &.rdg-top-summary-row {
            & .rdg-cell {
              border-block-start: 0px;
              border-block-end: 1px solid var(--rdg-summary-border-color);
            }
          }
          &.rdg-bottom-summary-row {
            & .rdg-cell {
              border-block-start: 1px solid var(--rdg-summary-border-color);
              border-block-end: 0px;
            }
          }
        }
        ${jd}
        ${Fd}

                // style for pre-header
            & .rdg-header-row:has(+ .rdg-header-row) {
          & .rdg-cell {
            text-align: center;
          }
        }
        ${p}
      }
    `}
  & {
    ${({$containerCss:e})=>e}
    ${({$fullScreened:e})=>e&&Pd}
  }
`,Ve=41,uo=33,co=350,$r=316,ti=(e,t,n,r,o,a,l,i,d="inside")=>{if(i)return"0px";const u=e??co,p=typeof u=="number"&&u<$r?$r:u;if(typeof p=="number"||typeof p=="string"){const y=typeof p=="number"?`${p}px`:p,f=t?Ve:0,w=d==="above"?Ve:0,g=n?uo:0,x=o===0?sd(r,a):o,c=(l?f*2:f)+w+g+x;return`max(${$r}px, calc(${y} - ${c}px))`}},qd=(e,t,n,r,o,a,l,i,d,u,p="inside")=>{if(o){const g=ti(Ie.HEIGHT_TABLE,n,r,a,l,i,d,u,p);return{height:g,maxHeight:g}}const y=g=>ti(g,n,r,a,l,i,d,u,p),f=y(e),w=t===void 0?f:y(t);return{height:f,maxHeight:w}};function cr({row:e,column:t,columnConfig:n,onRowChange:r}){var w,g,x,C;const o=Tr(),a=(w=t==null?void 0:t.editingCell)==null?void 0:w.selectProps,l=n.editingCell,i=e[t.key],d=typeof l.component=="function"||l.component==="inputNumber"||l.component==="inputString"?[]:(l==null?void 0:l.options.type)==="constant"?l==null?void 0:l.options.options:(o==null?void 0:o[l==null?void 0:l.options.optionsKeyInRowContext])??[],u=((C=(x=(g=d.find(c=>c.value===i))==null?void 0:g.value)==null?void 0:x.toString)==null?void 0:C.call(x))??"",p=h.useRef(null),y=un();h.useEffect(()=>{setTimeout(()=>{var c,m;(m=(c=p.current)==null?void 0:c.click)==null||m.call(c)},0)},[]);const f=[...d.map(c=>({value:c.value.toString(),label:c.text.toString()}))];return s.jsx(Ur,{ref:p,portal:y,value:u,size:ae[o.rowSize].combobox,onChange:c=>{typeof c=="string"&&r({...e,[t.key]:c},!0)},view:"clear",items:f,...a})}try{cr.displayName="SelectEditor",cr.__docgenInfo={description:"",displayName:"SelectEditor",props:{columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"ColumnConfig<TRow, TSummaryRow>"}}}}}catch{}const po=B(cu)`
  ${({$align:e})=>e&&P`
      & input {
        text-align: ${e};
      }
    `}
`;try{po.displayName="StyledNumberFormat",po.__docgenInfo={description:"",displayName:"StyledNumberFormat",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function pr(e){e==null||e.focus(),e==null||e.select()}function mr({row:e,column:t,onRowChange:n,onClose:r}){var l;const{rowSize:o}=Tr(),a=(l=t==null?void 0:t.editingCell)==null?void 0:l.inputProps;return s.jsx(Er,{size:ae[o].input,view:"clear",ref:pr,value:e[t.key],onChange:i=>n({...e,[t.key]:i.target.value}),onBlur:()=>r(!0,!1),...a})}function hr({row:e,column:t,onRowChange:n,onClose:r,formatOptions:o}){var g;const{rowSize:a}=Tr(),l=(g=t==null?void 0:t.editingCell)==null?void 0:g.inputProps,i=()=>{const x={type:"number",decimalSeparator:",",thousandSeparator:" ",minimumFractionDigits:0,maximumFractionDigits:0,alignContent:"left"};return!o||o==="number"?x:"type"in o&&o.type==="number"?{...x,...o}:x},{decimalSeparator:d,thousandSeparator:u,minimumFractionDigits:p,maximumFractionDigits:y,alignContent:f}=i(),w=(x,C)=>{C&&n({...e,[t.key]:C.floatValue??C.formattedValue})};return s.jsx(po,{ref:pr,size:ae[a].input,value:e[t.key],onChange:w,decimalSeparator:d,thousandSeparator:u,decimalScale:y,fixedDecimalScale:p!==void 0,allowNegative:!0,onBlur:()=>r(!0,!1),$align:f,view:"clear",...l})}try{pr.displayName="autoFocusAndSelect",pr.__docgenInfo={description:"",displayName:"autoFocusAndSelect",props:{}}}catch{}try{mr.displayName="TextEditorString",mr.__docgenInfo={description:"",displayName:"TextEditorString",props:{}}}catch{}try{hr.displayName="TextEditorNumber",hr.__docgenInfo={description:"",displayName:"TextEditorNumber",props:{formatOptions:{defaultValue:null,description:"",name:"formatOptions",required:!1,type:{name:"ContentFormat"}}}}}catch{}const ni=e=>{const t=e;return typeof(t==null?void 0:t.editable)=="boolean"&&!!t.editable},Nr=(e,t,n)=>e?e.editable===void 0?n?n(t):!0:typeof e.editable=="boolean"?e.editable:e.editable(t):!1,Yn="[filter-focus]",Qn=mu("TABLE_CANVAS_FILTER"),Zt=e=>{if(!e)return null;const t=e;return{tag:e.tagName,role:e.getAttribute("role"),id:t.id||null,tabindex:e.getAttribute("tabindex"),floatingFocusable:e.hasAttribute("data-floating-ui-focusable")}},Md=()=>{const e=h.useRef(null);return h.useEffect(()=>{Qn(Yn,"mount",{refInput:Zt(e.current),active:Zt(document.activeElement)});let t=!0;const n=i=>{if(!t)return;const d=e.current,u=i.target;!d||!u||u===d||u===d.closest("[data-floating-ui-focusable]")&&(Qn(Yn,"focusin-redirect",{from:Zt(u)}),d.focus(),t=!1)};document.addEventListener("focusin",n,!0);let r=0;const o=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{var i;(i=e.current)==null||i.focus(),Qn(Yn,"raf-focus",{active:Zt(document.activeElement)})})}),a=setTimeout(()=>{t=!1},300),l=[50,150,300].map(i=>setTimeout(()=>{Qn(Yn,`t+${i}`,{active:Zt(document.activeElement),focusedOurInput:document.activeElement===e.current})},i));return()=>{document.removeEventListener("focusin",n,!0),cancelAnimationFrame(o),cancelAnimationFrame(r),clearTimeout(a),l.forEach(clearTimeout)}},[]),e};function _l(e){["ArrowLeft","ArrowRight"].includes(e.key)&&e.stopPropagation()}function Gd(e){return Object.entries(e)}function Rl(e){if(e)return e.filtersInfo?Gd(e.filtersInfo).reduce((t,[n,r])=>(t[n]=r.clearedValue,t),{}):e.clearedValue}const Wd=e=>{var a,l;const{tableConfig:t,columnConfig:n}=e,r=n.some(i=>!!i.filtering),o=((l=(a=t.filtering)==null?void 0:a.sidebarConfig)==null?void 0:l.items)&&Object.values(t.filtering.sidebarConfig.items).some(i=>!!(i!=null&&i.customRenderFn));return(r||o)??!1},zd=B(Y)`
  background-color: ${z.white};
  /* закомментировано, пока beforeList не sticky
  position: sticky;
  top: 0;
  z-index: 1; */
  position: relative;
  ${({$listIsNonEmpty:e})=>e&&P`
      padding-bottom: 6px;
      &::after {
        content: '';
        position: absolute;
        bottom: 3px;
        left: 0;

        width: 100%;

        border-bottom: 1px solid ${z.border};
      }
    `}
  ${({$beforeList:e})=>e&&P`
      padding-top: 6px;
      &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 0;

        width: 100%;

        border-bottom: 1px solid ${z.border};
      }
    `}
`,Kd={small:()=>({...xs,padding:"10px 12px",borderRadius:"6px"}),medium:()=>({...ys,padding:"10px 12px",borderRadius:"8px"}),big:()=>({..._r,padding:"10px 12px",borderRadius:"10px"})},Ud=B.ul`
  * {
    box-sizing: border-box;
  }
  padding: 0px;
  margin: 0px;
  max-height: ${({$maxHeight:e})=>e||"360px"};
  overflow-y: auto;
  overflow-x: hidden;
`,ri=B.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 0;
  overflow-wrap: anywhere;

  ${({$size:e="medium",$selected:t})=>P({...Kd[e](),...t&&{backgroundColor:z.headerColor},...!t&&{"&:hover":{backgroundColor:Qa}}})}
  ${({$css:e})=>e}
`,vl=B(iu)`
  && .input-wrapper {
    border-radius: 8px;
  }
`;function nn(e,t){return e==="single"}const Xd={xs:"16px",s:"24px",m:"24px"},Jd=(e,t,n)=>nn(t)?e.value===n:n.some(r=>r===e.value),mo=({value:e,onChange:t,mode:n="single",options:r,tabIndex:o,beforeList:a,afterList:l,size:i="medium",listMaxHeight:d="360px",width:u})=>{var b;const[p,y]=h.useState(((b=r.find(S=>S.value===e))==null?void 0:b.text)??""),f=Md(),w=h.useMemo(()=>new Map(r.map(S=>[S.value,S.text])),[r]),g=h.useMemo(()=>nn(n)?p===""||w.get(e)===p?r:r.filter(S=>S.text.toLowerCase().includes(p.toLowerCase())):p===""?r:r.filter(S=>S.text.toLowerCase().includes(p.toLowerCase())),[p,n,r,w,e]),x={indeterminate:(e==null?void 0:e.length)!==0&&(e==null?void 0:e.length)!==r.length,checked:(e==null?void 0:e.length)!==0&&(e==null?void 0:e.length)===r.length,onChange:()=>{}},C=i==="big"?"m":"s",c=i==="small"?"xs":"s",m=Xd[c];return s.jsxs(Y,{$css:{width:u??"unset"},children:[s.jsx(vl,{ref:f,size:ae[i].input,autoComplete:"off",tabIndex:o,value:p,onChange:S=>{y(S.target.value)},onClick:S=>{S.stopPropagation()},onKeyDown:_l}),s.jsxs(Ud,{$maxHeight:d,children:[a,!nn(n)&&g.length>1&&s.jsx(zd,{$listIsNonEmpty:!!g.length,$beforeList:!!a,children:s.jsxs(ri,{$size:i,$selected:x.checked,onClick:()=>{if(y(""),x.checked){t([]);return}t(r.map(S=>S.value))},children:[s.jsx(vt,{...x,size:C,style:{pointerEvents:"none",marginRight:"8px"}}),"Выбрать всё"]})}),g.length===0?s.jsx(pu,{size:"s",variant:"not-result",title:"Ничего не найдено"}):g.map(S=>{const _=Jd(S,n,e),I=()=>{if(nn(n)){t(S.value),y(S.text);return}if(!nn(n)){const R=new Set(e);R[R.has(S.value)?"delete":"add"](S.value),t([...R])}};return s.jsxs(ri,{$size:i,$selected:_,onClick:I,children:[n==="single"&&s.jsx("span",{style:{width:m,minWidth:m,display:"inline-flex",justifyContent:"center",alignItems:"center",marginRight:"8px",visibility:_?"visible":"hidden"},children:s.jsx(ps,{size:c,color:Fi})}),n==="multiple"&&s.jsx(vt,{checked:_,onChange:()=>{},size:C,style:{pointerEvents:"none",marginRight:"8px"}}),S.text]},S.value)}),l]})]})};try{mo.displayName="ComboboxX",mo.__docgenInfo={description:"",displayName:"ComboboxX",props:{mode:{defaultValue:{value:"single"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((v: string) => void) | ((v: string[]) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ text: string; value: string; }[]"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"medium"'}]}},beforeList:{defaultValue:null,description:"",name:"beforeList",required:!1,type:{name:"ReactNode"}},afterList:{defaultValue:null,description:"",name:"afterList",required:!1,type:{name:"ReactNode"}},listMaxHeight:{defaultValue:{value:"360px"},description:"",name:"listMaxHeight",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const Yd=(e,t,n)=>{var r,o;return h.useMemo(()=>{const a=new Set;return e.forEach(l=>{l.filtering&&a.add(l.filtering.keyInFilterState)}),Object.keys(t??{}).forEach(l=>a.add(l)),Array.from(a).reduce((l,i)=>{var d,u,p,y,f,w,g,x;return l[i]={label:((p=(u=(d=n==null?void 0:n.filtering)==null?void 0:d.filtersInfo)==null?void 0:u[i])==null?void 0:p.label)??i,clearedValue:((w=(f=(y=n==null?void 0:n.filtering)==null?void 0:y.filtersInfo)==null?void 0:f[i])==null?void 0:w.clearedValue)??((x=(g=n.filtering)==null?void 0:g.clearedValue)==null?void 0:x[i])??void 0},l},{})},[e,t,(r=n.filtering)==null?void 0:r.clearedValue,(o=n.filtering)==null?void 0:o.filtersInfo])},Qd=(e,t)=>h.useMemo(()=>{const n={};return e.forEach(r=>{var o,a,l;if(((o=r.filtering)==null?void 0:o.component)==="select"){const i=r.filtering.keyInFilterState;let d=[];if(r.filtering.selectOptions.type==="constant")d=((a=r.filtering.selectOptions.options)==null?void 0:a.map(u=>{var p;return{label:((p=u.text)==null?void 0:p.toString())??u.value.toString(),value:u.value}}))??[];else if(t){const u=r.filtering.selectOptions.optionsKeyInHeaderContext,p=t[u];d=(((l=Array.isArray(p)?p:void 0)==null?void 0:l.filter(f=>f&&typeof f.value<"u"))??[]).map(f=>{var w;return{label:((w=f.text)==null?void 0:w.toString())??f.value.toString(),value:f.value}})??[]}d.length>0&&(n[i]=d)}}),n},[e,t]),fr=({columnConfig:e,filters:t,tableConfig:n,headerContextValue:r})=>{var i;const o=Qd(e,r),a=Yd(e,t,n),l=h.useMemo(()=>{var g,x,C,c;const d=((x=(g=n.filtering)==null?void 0:g.sidebarConfig)==null?void 0:x.order)||[],u=[],p=[];e.forEach(m=>{m.filtering&&p.push(m.filtering.keyInFilterState||m.key)}),(c=(C=n.filtering)==null?void 0:C.sidebarConfig)!=null&&c.items&&Object.keys(n.filtering.sidebarConfig.items).forEach(m=>{p.includes(m)||u.push(m)});const y=[],f=[...u],w=[...p];return d.forEach(m=>{const b=f.indexOf(m);if(b>=0){y.push(m),f.splice(b,1);return}const S=w.indexOf(m);S>=0&&(y.push(m),w.splice(S,1))}),y.push(...f),y.push(...w),y},[e,(i=n.filtering)==null?void 0:i.sidebarConfig]);return{options:o,filtersInfo:a,filtersOrder:l}};try{fr.displayName="useFilterManagement",fr.__docgenInfo={description:"",displayName:"useFilterManagement",props:{columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"Record<string, unknown>"}},tableConfig:{defaultValue:null,description:"",name:"tableConfig",required:!0,type:{name:"TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>"}},headerContextValue:{defaultValue:null,description:"",name:"headerContextValue",required:!1,type:{name:"Record<string, unknown>"}}}}}catch{}const Zd=1,ec=8,oi=`${Zd}px solid ${z.border}`,si={},ho=({isOpened:e,activeView:t,columnConfig:n,tableConfig:r,headerContextValue:o,$borderLeftTopRadiusRounded:a,$borderRightTopRadiusRounded:l})=>{var x;const[i,d]=((x=r.filtering)==null?void 0:x.state)??[void 0,void 0],{options:u,filtersInfo:p,filtersOrder:y}=fr({columnConfig:n,filters:i,tableConfig:r,headerContextValue:o}),{filterList:f,clearAll:w}=zi({filters:i??si,options:u,updateFilters:(C,c)=>{d&&d(m=>({...m??si,[C]:c}))},filtersInfo:p,order:y});if(!r.filtering)return null;const g=e;return s.jsx(oa,{clearAll:w,opened:g,items:f,ellipsisLabel:!0,sizeOnOpen:uo,paddingTop:0,paddingInline:ec,maxHeight:uo,extraCss:{marginTop:0,borderInline:oi,borderTop:oi,borderTopLeftRadius:a?we:void 0,borderTopRightRadius:l?we:void 0,backgroundColor:z.white,transition:`all ${at}s ease`,...t==="cards"&&{backgroundColor:"transparent",borderColor:"transparent"}},chipStyle:r.filtering.chipStyle,renderGroupLabel:r.filtering.renderGroupLabel,renderChipLabel:r.filtering.renderChipLabel})};try{ho.displayName="FilterListBlock",ho.__docgenInfo={description:"",displayName:"FilterListBlock",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"enum",value:[{value:'"rows"'},{value:'"cards"'}]}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},tableConfig:{defaultValue:null,description:"",name:"tableConfig",required:!0,type:{name:"TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>"}},headerContextValue:{defaultValue:null,description:"",name:"headerContextValue",required:!0,type:{name:"ObjectForExtending"}},$borderLeftTopRadiusRounded:{defaultValue:null,description:"",name:"$borderLeftTopRadiusRounded",required:!0,type:{name:"boolean"}},$borderRightTopRadiusRounded:{defaultValue:null,description:"",name:"$borderRightTopRadiusRounded",required:!0,type:{name:"boolean"}}}}}catch{}const tc=B(Pa)`
  &.popover-root {
    padding: 0;
  }
`,fo=({opened:e,setIsOpen:t,children:n,popoverInnerCss:r,...o})=>s.jsx(tc,{opened:e,onToggle:t,id:"popover",flip:!0,shift:!0,offset:6,hasArrow:!1,...o,children:s.jsx(Y,{$css:r,children:n})});try{fo.displayName="PopoverX",fo.__docgenInfo={description:"",displayName:"PopoverX",props:{}}}catch{}const jt=({render:e})=>s.jsx(s.Fragment,{children:e()});try{jt.displayName="RenderSlot",jt.__docgenInfo={description:`Рендерит функцию-рендер как отдельный компонент.

Нужен для точек расширения фильтрации (customRender, customRenderFn): если
вызвать их как обычные функции, хуки внутри попадут в список хуков
вызывающего компонента — а там есть ранние return (поповер) и перебор списка
фильтров (сайдбар), из-за чего порядок хуков поедет.

Обёртка даёт функции собственный инстанс компонента, поэтому внутри можно
свободно пользоваться хуками и локальным состоянием. Сама функция передаётся
пропом, а не становится типом компонента, так что её пересоздание на каждый
рендер не приводит к размонтированию содержимого.`,displayName:"RenderSlot",props:{render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"() => ReactNode"}}}}}catch{}const yo=e=>{const{columnConfig:t,popoverIsOpen:n,setPopoverIsOpen:r,tabIndex:o,headerContextState:a}=e,{filters:l,setFilters:i,rowSize:d}=a,u=t.filtering;if(!u||!n)return null;if(u.component==="custom")return s.jsx(jt,{render:()=>u.customRender(e)});if(u.component==="input"){const m=u.keyInFilterState?u.keyInFilterState:t.key;return s.jsx(vl,{size:ae[d].input,autoComplete:"off",autoFocus:!0,tabIndex:o,value:l==null?void 0:l[m],onChange:b=>{i==null||i(S=>({...S,[m]:b.target.value}))},onClick:b=>{b.stopPropagation()},onKeyDown:_l,width:Xs[d]})}const p=u.keyInFilterState,y=l==null?void 0:l[p],f=u.filter.typeOfValue,{value:w,onChange:g}=f==="single"?{value:y,onChange:m=>{i==null||i(b=>({...b,[p]:m})),r(!1)}}:{value:y,onChange:m=>{i==null||i(b=>({...b,[p]:m}))}},x=(()=>{if(u.selectOptions.type==="constant")return u.selectOptions.options;const m=u.selectOptions.optionsKeyInHeaderContext;return m in a?(a==null?void 0:a[m])??[]:[]})(),C=(u==null?void 0:u.beforeList)??(()=>{}),c=(u==null?void 0:u.afterList)??(()=>{});return s.jsx(mo,{tabIndex:o,size:d,mode:f,value:w,onChange:g,options:x,beforeList:s.jsx(C,{...e}),afterList:s.jsx(c,{...e}),listMaxHeight:u.listMaxHeight??"360px",width:Xs[d]})};try{yo.displayName="FilterComponentInPopover",yo.__docgenInfo={description:"",displayName:"FilterComponentInPopover",props:{popoverIsOpen:{defaultValue:null,description:"",name:"popoverIsOpen",required:!0,type:{name:"boolean"}},setPopoverIsOpen:{defaultValue:null,description:"",name:"setPopoverIsOpen",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"ColumnConfig<R, SR>"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},headerContextState:{defaultValue:null,description:"",name:"headerContextState",required:!0,type:{name:"HeaderContextValueTypeInstance<FilterStateType> & FiltersVariables & HeaderContextValueTypeInstance<ObjectForExtending>"}},filterSource:{defaultValue:null,description:`Источник открытия фильтра: из шапки таблицы или из сайдбара
Полезно для условной логики в customRender (например, alwaysOpened для combobox)`,name:"filterSource",required:!1,type:{name:"enum",value:[{value:'"header"'},{value:'"sidebar"'}]}}}}}catch{}const nc=B(Oe)`
  &:hover {
    background-color: transparent;
  }
`,go=h.forwardRef(({redSquare:e,...t},n)=>s.jsxs(nc,{ref:n,size:"s",view:"clear",style:{width:16,height:16,position:"relative"},...t,children:[s.jsx(Y,{$css:{position:"absolute",top:-3,right:-3,width:"6px",aspectRatio:"1",borderRadius:"50%",transition:Gt,backgroundColor:"transparent",transform:"scale(0)",...e&&{backgroundColor:z.red,transform:"scale(1)"}}}),s.jsx(Ti,{size:"xs",color:he})]}));try{go.displayName="FilterIcon",go.__docgenInfo={description:"",displayName:"FilterIcon",props:{}}}catch{}const xo=({columnConfig:e,tabIndex:t})=>{const n=We(),{filters:r,clearedFiltersValue:o}=n,a=(()=>{var g,x,C,c;const u=(g=e.filtering)==null?void 0:g.keyInFilterState;if(!u)return!1;const p=r==null?void 0:r[u],y=o==null?void 0:o[u];if(((x=e.filtering)==null?void 0:x.component)==="custom"){const m=e.filtering;return m.compareWithClearedValue?m.compareWithClearedValue(y,p):JSON.stringify(p)===JSON.stringify(y)}const f=((C=e.filtering)==null?void 0:C.component)==="input"||((c=e.filtering)==null?void 0:c.component)==="select"?e.filtering.filter:void 0;return typeof f=="object"&&f.typeOfValue==="multiple"?Array.isArray(y)?p.length===y.length&&p.sort().join()===y.sort().join():!1:p===y})(),[l,i]=h.useState(!1),d=!a;return s.jsx("div",{className:` ${d?L.headerCellFilterIsActive:""} ${L.headerCellFilterIsAvailable}`,children:s.jsx(Ge,{text:"Отфильтровать по данной колонке",placement:"top",animated:!0,target:s.jsx(fo,{placement:"bottom-start",hasTail:!1,opened:l,setIsOpen:i,target:s.jsx(go,{redSquare:!a}),popoverInnerCss:`
            padding: 4px;
            background-color: ${z.white};
            border-radius: 8px;
            box-shadow: ${Za};
            `,zIndex:"9001",children:s.jsx(yo,{columnConfig:e,popoverIsOpen:l,setPopoverIsOpen:i,tabIndex:t,headerContextState:n,filterSource:"header"})})})})};try{xo.displayName="HeaderFilterButton",xo.__docgenInfo={description:"",displayName:"HeaderFilterButton",props:{columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"ColumnConfig<R, SR>"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}}}}}catch{}function rc({event:{currentTarget:e,target:t},scrollThreshold:n=100}){const r=t;return r.scrollTop+n>=r.scrollHeight-r.clientHeight}const cn="skeletonXXXXXXXXX",oc="SKELETON_CELLS_XXXXXXXXX",ii={[cn]:!0},eh=e=>({...e,[cn]:!0}),th=e=>{const t={...e};return t==null||delete t[cn],t},Il=h.createContext(null),sc=()=>{const e=h.useContext(Il);if(typeof e>"u")throw new Error("useRowInstrumentsCtx должен вызываться внутри контекста");return e},bo=({children:e,value:t})=>s.jsx(Il.Provider,{value:t,children:e});try{bo.displayName="RowInstrumentsCtxProvider",bo.__docgenInfo={description:"",displayName:"RowInstrumentsCtxProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RowInstrumentsType<RowType>"}}}}}catch{}const Ft=e=>e===Tt,El=B(Ha)(({$css:e})=>e),Et=e=>{const t=un(),{rowSize:n}=We();return s.jsx(El,{portal:t,listWidth:dl[n],size:ae[n].input,...e})},So=({onClose:e,isOpen:t,portal:n,...r})=>{const o=un(),{rowSize:a}=We();return h.useEffect(()=>{if(!t)return;const l=d=>{let u=null;typeof n=="string"?u=document.getElementById(n):n&&"current"in n?u=n.current:o!=null&&o.current&&(u=o.current),u&&!u.contains(d.target)&&e&&e()},i=d=>{d.key==="Escape"&&e&&e()};return document.addEventListener("mousedown",l),document.addEventListener("keydown",i),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[t,e,n,o]),s.jsx(El,{listWidth:dl[a],size:ae[a].input,closeOnOverlayClick:!1,...r})};try{Et.displayName="TableDropdown",Et.__docgenInfo={description:"",displayName:"TableDropdown",props:{}}}catch{}try{So.displayName="TableDropdownWithCustomClickOutside",So.__docgenInfo={description:"",displayName:"TableDropdownWithCustomClickOutside",props:{}}}catch{}const ic=B(Oe)({flexShrink:0}),lc={title:"Инструменты строки",children:s.jsx(ya,{size:"xs",color:"inherit"})},li=({children:e,...t})=>s.jsx(ic,{view:"secondary",size:"xs",...t,children:e});function wo({row:e,rowIdx:t,onRowChange:n}){const r=sc(),o=We();if(!r)return null;const{items:a,dropdownProps:l}=r({row:_t(e),rowIdx:t,onRowChange:i=>{n(_t(i))},additional:o});if(a.length===0)return null;if(l!=null&&l.useItemContentAsButtonContent&&a.length===1&&a[0]){const i=a[0],d=i.contentLeft??i.contentRight;if(d)return s.jsx(li,{title:i.label,onClick:u=>{if(l!=null&&l.onItemSelect){l.onItemSelect(i,u);return}i.onItemSelect&&i.onItemSelect(i,u)},children:d})}return s.jsx(Et,{onItemSelect:(i,d)=>{i.onItemSelect&&i.onItemSelect(i,d)},items:a,...l,children:s.jsx(li,{...lc})})}const ac={key:Tt,name:"",width:Or,minWidth:Or,maxWidth:Or,cellClass:`${St}`,headerCellClass:`${St} ${eo}`,summaryCellClass:`${St} ${id}`,frozen:!0,resizable:!1,sortable:!1,renderCell(e){return s.jsx(wo,{...e})}};try{wo.displayName="RowIRenderCell",wo.__docgenInfo={description:"",displayName:"RowIRenderCell",props:{}}}catch{}const Tl={key:{value:"key",label:"Ключ"},text:{value:"text",label:"Текст"},keyText:{value:"keyText",label:"Ключ и текст"},textKey:{value:"textKey",label:"Текст и ключ"}},Al="SERVICE_KEY_TEXT_PARENT",uc=Tl.keyText.value,kl=Object.values(Tl),Co=e=>e?typeof e=="boolean"?e:e.showInControl??!0:!1,Ar=(e,t)=>typeof e=="function"?e({keyText:t}):e,Me=({keyText:e,key:t,text:n})=>{const r=[];switch(e){case"key":r.push(t);break;case"keyText":r.push(t,n);break;case"textKey":r.push(n,t);break;default:r.push(n);break}return r},ai=e=>typeof(e==null?void 0:e[Al])<"u"||typeof(e==null?void 0:e[uc])<"u",dc=(e,t)=>e.reduce((n,r)=>{if(!r.keyText)return n.push(r),n;const o={...Ar(r.keyText,t),[Al]:r.key},a={...r,keyText:o},l=Me({keyText:t,key:o,text:a});return n.push(...l),n},[]),_o=({keyText:e,onItemSelect:t,rowSize:n})=>kl.map(r=>({...r,contentLeft:s.jsx(Y,{$css:{display:"inline-flex",alignItems:"center",justifyContent:"center",visibility:e===r.value?"visible":"hidden"},children:s.jsx(ps,{size:n?ae[n].icon:"s",color:qi})}),...t&&{onItemSelect:()=>t(r.value)}}));try{Co.displayName="showKeyText",Co.__docgenInfo={description:"",displayName:"showKeyText",props:{showInControl:{defaultValue:null,description:"",name:"showInControl",required:!1,type:{name:"boolean"}},defaultActiveOption:{defaultValue:null,description:"",name:"defaultActiveOption",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},controlBlock:{defaultValue:null,description:"",name:"controlBlock",required:!0,type:{name:"{ domMetadata?: DomMetadata; }"}},sidebar:{defaultValue:null,description:"",name:"sidebar",required:!0,type:{name:"{ domMetadata?: DomMetadata; }"}}}}}catch{}try{Me.displayName="getCols",Me.__docgenInfo={description:"",displayName:"getCols",props:{keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"K"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"T"}}}}}catch{}try{ai.displayName="isKeyTextColumn",ai.__docgenInfo={description:"",displayName:"isKeyTextColumn",props:{}}}catch{}try{_o.displayName="getKeyTextOptionsWithIcon",_o.__docgenInfo={description:"",displayName:"getKeyTextOptionsWithIcon",props:{keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},onItemSelect:{defaultValue:null,description:"",name:"onItemSelect",required:!1,type:{name:"(item: KeyText) => void"}},rowSize:{defaultValue:null,description:"",name:"rowSize",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"medium"'}]}}}}}catch{}const cc=({keyText:e,setKeyText:t,className:n,...r})=>{const{rowSize:o}=We();return s.jsx(Et,{onItemSelect:a=>{t(a.value)},items:_o({keyText:e,rowSize:o}),children:s.jsx(Ge,{text:"Ключ текст",animated:!0,target:s.jsx(fs,{size:"m",className:n,style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},...r,children:s.jsx(Ai,{color:"inherit"})})})})},pc=({tableConfigKeyTextBoolean:e,columnConfig:t,keyText:n})=>h.useMemo(()=>e?t.reduce((r,o)=>{if(o.keyText){const a={keyKey:Ar(o.keyText,n).key,textKey:o.key};r.set(a.keyKey,a),r.set(a.textKey,a)}return r},new Map):new Map,[t,n,e]),mc=e=>{const t="text";return!e||typeof e=="boolean"?t:e.defaultActiveOption??t},hc=e=>{const[t,n]=h.useState(()=>mc(e));return{keyText:t,setKeyText:n}};function Ro(e,t){let n=0;for(;n<e.length;)t(e[n])?e.splice(n,1):n+=1;return e}function fc(e,t,n){let r=0;for(;r<e.length;)t(e[r])?e.splice(r,1,...n):r+=1;return e}function Zn(e,t,n){const r=e[t],o=e[n];!r||!o||(e[n]=r,e[t]=o)}const Dl=({orderArrayForChanging:e})=>{const t=new Set(e),n=new Set;return[Ee,Tt,et].forEach(r=>{t.has(r)&&(t.delete(r),n.add(r))}),t.forEach(r=>{n.add(r)}),Array.from(n)},yc=({prevOrder:e,defaultOrder:t})=>{const n=[...e],r=new Set(n);let o;return t.forEach(a=>{if(!r.has(a)){const l=o===void 0?0:n.indexOf(o)+1;n.splice(l,0,a),r.add(a)}o=a}),n},Ol=({keyText:e,orderArrayForChanging:t,colsWithKeyTextMap:n})=>{const r=new Map(t.map((d,u)=>[d,u])),o={},a={},l={},i={};t.forEach(d=>{const u=n.get(d);if(!u)return;const{keyKey:p,textKey:y}=u,f=`${p}${y}`;if(o[f]||a[f]||l[f]||i[f])return;const w=r.get(p),g=r.get(y);if(!(typeof w=="number"&&typeof g=="number")){const T=w??g;if(typeof T>"u")return;const V=t[T],$=Me({keyText:e,key:p,text:y});o[f]=H=>{const W=H.findIndex(q=>q===V);H.splice(W,1,...$)};return}const m=Me({keyText:e,key:p,text:y});if(e==="key"||e==="text"){const T=e==="key"?y:p,V=e==="key"?p:y;a[f]=$=>{Ro($,H=>H===V),fc($,H=>H===T,[V])};return}const S=Math.min(w,g),_=Math.max(w,g),I=[t[S],t[_]],R=m.every((T,V)=>T===I[V]);if(_-S<=1){if(R)return;const T=t[S],V=t[_];l[f]=$=>{$[S]=V,$[_]=T};return}const v=t[_],A=t[S];i[f]=T=>{const V=T.findIndex(W=>W===v),$=T.findIndex(W=>W===A);if(!(typeof V>"u"||typeof $>"u")){if(R){T.splice($+1,0,T.splice(V,1)[0]);return}T.splice($,0,T.splice(V,1)[0])}}}),Object.values(o).forEach(d=>{d(t)}),Object.values(a).forEach(d=>{d(t)}),Object.values(l).forEach(d=>{d(t)}),Object.values(i).forEach(d=>{d(t)})},ui=({columnConfig:e,tableConfigDefaultOrder:t,selectingRowsIsActive:n,rowsGroupingIsActive:r,showRowInstruments:o,colsWithKeyTextMap:a,keyText:l})=>{const i=[];return n&&i.push(Ee),o&&i.push(Tt),r&&i.push(et),t&&t.forEach(u=>{u===Ee||Ft(u)||u===et||!(e.find(y=>y.key===u)||a.has(u))||i.push(u)}),e.forEach(u=>{i.findIndex(f=>f===u.key)>=0||i.push(u.key)}),Ol({keyText:l,orderArrayForChanging:i,colsWithKeyTextMap:a}),Dl({orderArrayForChanging:i})};function gc({colsWithKeyTextMap:e,sourceKey:t,targetKey:n,orderArrayForChanging:r,keyText:o,sourceColumnOrderIndex:a,targetColumnOrderIndex:l}){const i=e.get(t),d=e.get(n);if(!(!i&&!d)){if(i&&!d){const{keyKey:u,textKey:p}=i,y=t===u?p:u;Ro(r,x=>x===y);const f=r.findIndex(x=>x===t);if(!(f!==-1))return;const g=Me({keyText:o,key:u,text:p});r.splice(f,1,...g);return}if(!i&&d){const{keyKey:u,textKey:p}=d,y=a<l,f=Me({keyText:o,key:u,text:p});if(f.length<=1)return;const g=n===f[0],x=r.findIndex(C=>C===t);if(y){if(g){Zn(r,x,x-1);return}return}if(!y){if(g)return;g||Zn(r,x,x+1);return}return}if(i&&d){const{keyKey:u,textKey:p}=i,{keyKey:y,textKey:f}=d;if(u===y){r[a]=t,r[l]=n;return}if(o==="key"||o==="text")return;const x=t===u?p:u;Ro(r,I=>I===x);const C=r.findIndex(I=>I===t);if(!(C!==-1))return;const m=Me({keyText:o,key:u,text:p}),b=Me({keyText:o,key:y,text:f}),S=a<l,_=n===b[0];if(S){if(_){Zn(r,C,C-1),r.splice(C-1,1,...m);return}_||r.splice(C,1,...m);return}if(!S){if(_){r.splice(C,1,...m);return}_||(Zn(r,C,C+1),r.splice(C+1,1,...m))}}}}function xc({colsWithKeyTextMap:e,keyText:t,currentId:n,borderPlacement:r,tableConfigKeyTextBoolean:o}){if(!o)return null;const a=e.get(n);if(!a||t==="key"||t==="text")return null;const l=r==="bottom",{keyKey:i,textKey:d}=a,u=Me({keyText:t,key:i,text:d});return l?n===u[0]?"top":null:n===u[1]?"bottom":null}function bc({colsWithKeyTextMap:e,draggingId:t,currentIsDraggingOver:n,currentId:r,tableConfigKeyTextBoolean:o}){if(!o||!n)return null;const a=e.get(t),l=e.get(r);if(!l||!a)return null;const{keyKey:i}=l,{keyKey:d}=a;return i===d?!1:null}const Sc=(e,t,n)=>{const r=[...e];return r.splice(t,n),r},Vl=({sourceKey:e,targetKey:t,reorderIsActive:n,setColumnsOrder:r,onReorderingHeader:o,tableConfigKeyTextBoolean:a,keyText:l,colsWithKeyTextMap:i})=>{n&&(Ft(e)||Ft(t)||r(d=>{const u=d.findIndex(f=>f===e),p=d.findIndex(f=>f===t),y=Sc(d,u,1);return y.splice(p,0,e),a&&gc({keyText:l,sourceKey:e,targetKey:t,colsWithKeyTextMap:i,sourceColumnOrderIndex:u,targetColumnOrderIndex:p,orderArrayForChanging:y}),o&&o({newOrder:y,sourceKey:e,targetKey:t}),y}))};B(Y)({height:"40px",display:"flex",alignItems:"center",paddingInline:"8px",marginBottom:"12px"});const wc=B(Y)({height:"112px",marginInline:"-16px",paddingInline:"16px",marginBottom:"14px",display:"flex",alignItems:"center",flexWrap:"wrap",gap:"8px"});B(Er)`
  && .input-wrapper {
    height: 100%;
    max-height: 40px;
    padding-block: 12px;
    padding-inline: 10px;
    border-radius: 8px;
    background: ${()=>an};
  }
`;B(Oe)`
  background-color: transparent;
  height: 100%;
  width: 24px !important;
  color: ${()=>he};
  &:hover {
    background-color: transparent;
    color: ${()=>he};
  }
`;const vo=({clearLocalPinned:e,disabledClearPinnedButton:t,resetToDefaultOrder:n,disableResetToDefaultOrderButton:r,allColumnsIsVisible:o,allColumnsVisibilityChanger:a,columnsControlConfig:l})=>s.jsxs(wc,{children:[l.pinning&&s.jsx(Ze,{view:"secondary",size:"xs",contentLeft:s.jsx(ki,{color:"inherit",size:"xs"}),onClick:e,disabled:t,children:"Открепить все"}),(l.reorderingAside||l.reorderingHeader)&&s.jsx(Ze,{view:"secondary",size:"xs",contentLeft:s.jsx(ga,{color:"inherit",size:"xs"}),onClick:n,disabled:r,children:"Сбросить порядок"}),l.hiding&&s.jsx(Y,{$css:{width:"100%",padding:"10px 12px",backgroundColor:an,borderRadius:"8px"},children:s.jsx(wr,{label:"Включить все столбцы",checked:o,onChange:a,size:"s",toggleSize:"s"})})]});try{vo.displayName="ChangeAllButtonsBlock",vo.__docgenInfo={description:"",displayName:"ChangeAllButtonsBlock",props:{clearLocalPinned:{defaultValue:null,description:"",name:"clearLocalPinned",required:!0,type:{name:"() => void"}},disabledClearPinnedButton:{defaultValue:null,description:"",name:"disabledClearPinnedButton",required:!0,type:{name:"boolean"}},resetToDefaultOrder:{defaultValue:null,description:"",name:"resetToDefaultOrder",required:!0,type:{name:"() => void"}},disableResetToDefaultOrderButton:{defaultValue:null,description:"",name:"disableResetToDefaultOrderButton",required:!0,type:{name:"boolean"}},allColumnsIsVisible:{defaultValue:null,description:"",name:"allColumnsIsVisible",required:!0,type:{name:"boolean"}},allColumnsVisibilityChanger:{defaultValue:null,description:"",name:"allColumnsVisibilityChanger",required:!0,type:{name:"() => void"}},columnsControlConfig:{defaultValue:null,description:"",name:"columnsControlConfig",required:!0,type:{name:"ColumnsControlConfig"}}}}}catch{}const Io=({onMouseEnter:e,onMouseLeave:t,itemIsDragging:n,itemIsHovered:r})=>s.jsx(Y,{className:"drag-button",onMouseEnter:e,onMouseLeave:t,$css:{mr:"8px",display:"inline",height:"24px",...n?{color:he,pointerEvents:"none"}:{color:Ir,...r&&{color:he}}},children:s.jsx(Di,{color:"inherit"})});try{Io.displayName="DragButton",Io.__docgenInfo={description:"",displayName:"DragButton",props:{itemIsDragging:{defaultValue:null,description:"",name:"itemIsDragging",required:!0,type:{name:"boolean"}},itemIsHovered:{defaultValue:null,description:"",name:"itemIsHovered",required:!0,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!0,type:{name:"() => void"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!0,type:{name:"() => void"}}}}}catch{}const Cc=B(Y)(e=>({overflowY:"auto",marginBottom:"16px",paddingRight:e.$hasScroll?"8px":"0",flexGrow:1,minHeight:"40px","& .drag-button":{cursor:"grabbing"},".drag-item":{marginTop:"8px","&:first-of-type":{marginTop:"0px"}},"&, & *":{transition:`margin ${cl} ease-in-out`},...e.$isEmptySearch?{display:"flex",flexDirection:"column",justifyContent:"center"}:{}})),_c=B(Y)(({$isOvered:e,$borderPlacement:t,draggable:n})=>({display:"flex",alignItems:"center",paddingInline:"12px",paddingBlock:"8px",height:"40px",borderRadius:"8px",backgroundColor:an,...n&&{cursor:"grab","&:active":{cursor:"grabbing"},position:"relative","&&":{...e&&{...t==="top"?{marginTop:"10px !important","&::after":{content:"''",position:"absolute",top:"-6px",left:"0px",width:"100%",backgroundColor:Ws,height:"2px",borderRadius:"12px 12px 2px 2px"}}:{marginBottom:"6px","&::after":{content:"''",position:"absolute",bottom:"-4px",left:"0px",width:"100%",backgroundColor:Ws,height:"2px",borderRadius:"12px 12px 2px 2px"}}}}}})),Rc=({columnsOrder:e,onColumnsReorder:t,setDroppedAsHovered:n})=>{const[r,o]=h.useState(""),[a,l]=h.useState(""),[i,d]=h.useState("bottom"),u=g=>o(g);return{draggingId:r,draggingOverId:a,borderPlacement:i,handleDragStart:g=>{var x;g.dataTransfer.dropEffect="move",l(""),u(((x=g.target)==null?void 0:x.id)??"")},handleDragEnd:()=>u(""),handleDragOver:g=>{g.preventDefault(),g.dataTransfer.dropEffect="move";const{id:x}=g.target;if(x&&x!==a&&l(x??""),r&&a){const C=new Map(e.map((m,b)=>[m,b])),c=(C.get(r)??0)<(C.get(a)??0)?"bottom":"top";c!==i&&d(c)}},handleDrop:g=>{g.preventDefault(),r&&a&&r!==a&&t(r,a),n(r),u(""),l("")}}},di="$$dropped:1:",vc=()=>{const[e,t]=h.useState(""),n=l=>{t(i=>i.startsWith(di)?i.split(":")[2]??"":l)};return{hoveredId:e,setDroppedAsHovered:l=>{e&&t(`${di}${l}`)},onDragIconHoverStart:(l,i)=>{!i&&l!==e&&n(l)},onDragIconHoverEnd:(l,i)=>{!i&&e&&n("")}}},ci=({columnsControlConfig:e,key:t,isHiddenColumn:n,isPinnedColumn:r,columnsConfigMap:o,isKeyText:a,keyText:l,tableConfigKeyTextBoolean:i})=>{var f;const d=(f=e==null?void 0:e.columnsLabel)==null?void 0:f[t];if(d)return typeof d=="function"?d(n,r):d;let u=o.get(t);if(i&&a){const{keyKey:w,textKey:g}=a;if(t===w){const x=g,C=o.get(x),c=C==null?void 0:C.keyText;c&&(u=Ar(c,l))}}const p=u==null?void 0:u.name,y=u==null?void 0:u.nameAsString;return typeof p=="string"&&p||typeof y=="string"&&y||t},yr=(e,{currentKey:t,colsWithKeyTextMap:n,tableConfigKeyTextBoolean:r})=>{if(!r)return null;const o=n.get(t);if(!o)return null;const{keyKey:a,textKey:l}=o;return e.has(a)||e.has(l)?!0:null},Eo=({searchQuery:e="",columnsOrder:t,onColumnsReorder:n,setPinnedCols:r,setHiddenCols:o,columnConfig:a,columnsControlConfig:l,colsWithKeyTextMap:i,keyText:d,tableConfigKeyTextBoolean:u,disablePinningSet:p,disableHidingSet:y,pinnedColsSet:f,hiddenColsSet:w})=>{const g=h.useRef(null),x=h.useMemo(()=>t.filter(O=>O!==Ee&&O!==et&&!Ft(O)),[t]),{hoveredId:C,setDroppedAsHovered:c,onDragIconHoverStart:m,onDragIconHoverEnd:b}=vc(),{draggingId:S,draggingOverId:_,borderPlacement:I,handleDragStart:R,handleDragEnd:E,handleDragOver:v,handleDrop:A}=Rc({columnsOrder:x,onColumnsReorder:n,setDroppedAsHovered:c}),T=h.useMemo(()=>new Map(a.map(O=>[O.key,O])),[a]),V=ia(g,"vertical"),$=typeof V=="boolean"?V:V.vertical,H=!!l.reorderingAside,W=!!l.pinning,q=!!l.hiding,K=h.useMemo(()=>e?x.filter(O=>{const k=i.get(O),G=ci({columnsControlConfig:l,columnsConfigMap:T,isHiddenColumn:w.has(O),isPinnedColumn:f.has(O),key:O,isKeyText:k,keyText:d,tableConfigKeyTextBoolean:u});return String(G).toLowerCase().includes(e.toLowerCase())}):x,[x,e,i,l,T,w,f,d,u]),se=!!(K.length===0&&e);return s.jsxs(Cc,{onDrop:A,onDragOver:v,ref:g,$hasScroll:$,$isEmptySearch:se,children:[se&&s.jsx(Mi,{icon:s.jsx(xa,{size:"m"})}),K.map(O=>{var J,oe,ie,ye;const k=w.has(O),G=f.has(O),Q=y.has(O),Z=p.has(O),U=i.get(O),ee=ci({columnsControlConfig:l,columnsConfigMap:T,isHiddenColumn:k,isPinnedColumn:G,key:O,isKeyText:U,keyText:d,tableConfigKeyTextBoolean:u}),j=()=>{W&&r(G?pe=>pe.filter(te=>U?te!==U.keyKey&&te!==U.textKey:te!==O):pe=>U?[...pe,U.keyKey,U.textKey]:[...pe,O])},F=()=>{q&&o(k?pe=>pe.filter(te=>U?te!==U.keyKey&&te!==U.textKey:te!==O):pe=>U?[...pe,U.keyKey,U.textKey]:[...pe,O])},X=xc({keyText:d,colsWithKeyTextMap:i,currentId:O,borderPlacement:I,tableConfigKeyTextBoolean:u}),le=_===O,D=bc({colsWithKeyTextMap:i,draggingId:S,currentId:O,currentIsDraggingOver:le,tableConfigKeyTextBoolean:u}),M=yr(y,{colsWithKeyTextMap:i,currentKey:O,tableConfigKeyTextBoolean:u}),N=yr(p,{colsWithKeyTextMap:i,currentKey:O,tableConfigKeyTextBoolean:u});return s.jsxs(_c,{className:"drag-item",id:O,...H&&{draggable:!0,onDragStart:R,onDragEnd:E,$isOvered:D??le,$borderPlacement:X??I,title:"Перетащить колонку"},children:[H&&s.jsx(Io,{itemIsDragging:S===O,itemIsHovered:C===O,onMouseEnter:()=>m(O,S),onMouseLeave:()=>b(O,S)}),W&&s.jsx(Oe,{disabled:N??Z,id:"pin-column-btn",title:G?"Открепить":"Закрепить",size:"s",view:"clear",style:{flexShrink:0},onClick:pe=>{var te,re;j(),(re=(te=l==null?void 0:l.pinDomMetadata)==null?void 0:te.onClick)==null||re.call(te,pe,{action:G?qe.UNPIN_COLUMN:qe.PIN_COLUMN,columnKey:O,enabled:!G})},className:(J=l==null?void 0:l.pinDomMetadata)==null?void 0:J.className,...(oe=l==null?void 0:l.pinDomMetadata)==null?void 0:oe.dataAttributes,children:G?s.jsx(Oi,{color:he}):s.jsx(ki,{color:he})}),s.jsx(Y,{$css:{flex:1,minWidth:0},children:s.jsx(bs,{variant:"BodyS",tooltipText:ee,children:ee})}),q&&s.jsx(Y,{title:k?"Показать":"Скрыть",$css:{marginLeft:"auto",flexShrink:0},className:(ie=l==null?void 0:l.switchDomMetadata)==null?void 0:ie.className,...(ye=l==null?void 0:l.switchDomMetadata)==null?void 0:ye.dataAttributes,children:s.jsx(wr,{checked:!k,disabled:M??Q,onChange:pe=>{var te,re;F(),(re=(te=l==null?void 0:l.switchDomMetadata)==null?void 0:te.onClick)==null||re.call(te,pe,{action:k?qe.SHOW_COLUMN:qe.HIDE_COLUMN,columnKey:O,enabled:k})},toggleSize:"s"})})]},O)})]})};try{Eo.displayName="ColumnsList",Eo.__docgenInfo={description:"",displayName:"ColumnsList",props:{searchQuery:{defaultValue:{value:""},description:"",name:"searchQuery",required:!1,type:{name:"string"}},columnsOrder:{defaultValue:null,description:"",name:"columnsOrder",required:!0,type:{name:"string[]"}},onColumnsReorder:{defaultValue:null,description:"",name:"onColumnsReorder",required:!0,type:{name:"(sourceKey: string, targetKey: string) => void"}},setPinnedCols:{defaultValue:null,description:"",name:"setPinnedCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},setHiddenCols:{defaultValue:null,description:"",name:"setHiddenCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<Row, SummaryRow>[]"}},columnsControlConfig:{defaultValue:null,description:"",name:"columnsControlConfig",required:!0,type:{name:"ColumnsControlConfig"}},colsWithKeyTextMap:{defaultValue:null,description:"",name:"colsWithKeyTextMap",required:!0,type:{name:"KeyTextMap"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},tableConfigKeyTextBoolean:{defaultValue:null,description:"",name:"tableConfigKeyTextBoolean",required:!0,type:{name:"boolean"}},disableHidingSet:{defaultValue:null,description:"",name:"disableHidingSet",required:!0,type:{name:"Set<string>"}},disablePinningSet:{defaultValue:null,description:"",name:"disablePinningSet",required:!0,type:{name:"Set<string>"}},pinnedColsSet:{defaultValue:null,description:"",name:"pinnedColsSet",required:!0,type:{name:"Set<string>"}},hiddenColsSet:{defaultValue:null,description:"",name:"hiddenColsSet",required:!0,type:{name:"Set<string>"}}}}}catch{}const pi=(e,t)=>[...e].sort().join()===[...t].sort().join(),mi=(e,t)=>({...!pi(e.pinned,t.pinned)&&{pinned:"pinned"},...e.order.join()!==t.order.join()&&{order:"order"},...!pi(e.hidden,t.hidden)&&{hidden:"hidden"}}),To=({confirmAllLocalChanging:e,resetAllLocalChanging:t})=>s.jsxs(Y,{$css:{height:"32px",marginTop:"auto",display:"flex",justifyContent:"end",gap:"8px"},children:[s.jsx(Ze,{size:"xs",view:"secondary",onClick:t,children:"Отменить"}),s.jsx(Ze,{size:"xs",view:"accent",onClick:e,children:"Применить"})]});try{To.displayName="ConfirmOrResetBlock",To.__docgenInfo={description:"",displayName:"ConfirmOrResetBlock",props:{confirmAllLocalChanging:{defaultValue:null,description:"",name:"confirmAllLocalChanging",required:!0,type:{name:"() => void"}},resetAllLocalChanging:{defaultValue:null,description:"",name:"resetAllLocalChanging",required:!0,type:{name:"() => void"}}}}}catch{}const Ao=new Set([Tt,Ee,et]),Dt=e=>e.filter(t=>!Ao.has(t)),ko=({onClose:e,columnsOrder:t,getDefaultColumnsOrder:n,setColumnsOrder:r,pinnedCols:o,setPinnedCols:a,hiddenCols:l,setHiddenCols:i,columnConfig:d,columnsControlConfig:u,colsWithKeyTextMap:p,keyText:y,tableConfigKeyTextBoolean:f})=>{const w=u.applyMode==="instant",[g,x]=h.useState(t),[C,c]=h.useState(o),[m,b]=h.useState(l),[S,_]=h.useState(""),I=h.useRef(!1),R=h.useCallback(N=>J=>{I.current=!0,N(J)},[]),E=w?t:g,v=w?o:C,A=w?l:m,T=h.useMemo(()=>w?R(r):x,[w,R,r]),V=h.useMemo(()=>w?R(a):c,[w,R,a]),$=h.useMemo(()=>w?R(i):b,[w,R,i]),H=h.useRef({order:t,pinned:o,hidden:l});h.useEffect(()=>{var ie;const N=H.current,J={order:t,pinned:o,hidden:l};if(H.current=J,!w||!I.current)return;I.current=!1;const oe=mi(N,J);Object.keys(oe).length!==0&&((ie=u.onConfirm)==null||ie.call(u,{order:Dt(J.order),pinned:Dt(J.pinned),hidden:Dt(J.hidden),changed:oe},{setColumnsOrder:r,setHiddenCols:i,setPinnedCols:a}))},[t,o,l,w]);const W=Object.keys(d).length>=10,q=h.useCallback(N=>{_(N.target.value.toLowerCase())},[]),K=h.useCallback(()=>{_("")},[]),se=h.useMemo(()=>{const N=Ao,J=n().filter(ie=>!N.has(ie)).join(),oe=E.filter(ie=>!N.has(ie)).join();return J===oe},[E]),O=h.useCallback((N,J)=>Vl({sourceKey:N,targetKey:J,reorderIsActive:!0,setColumnsOrder:T,keyText:y,tableConfigKeyTextBoolean:f,colsWithKeyTextMap:p}),[p,y,f,T]),k={confirmAllLocalChanging(){if(r(E),a(v),i(A),u!=null&&u.onConfirm){const N=mi({order:t,pinned:o,hidden:l},{order:E,pinned:v,hidden:A});u.onConfirm({order:Dt(E),pinned:Dt(v),hidden:Dt(A),changed:N},{setColumnsOrder:r,setHiddenCols:i,setPinnedCols:a})}e()},resetAllLocalChanging(){T(t),V(o),$(l),e()}},G=h.useMemo(()=>new Set(A),[A]),Q=new Set(u.disableHiding??[]),Z=E.filter(N=>Ao.has(N)?!1:!(yr(Q,{colsWithKeyTextMap:p,currentKey:N,tableConfigKeyTextBoolean:f})??Q.has(N))),U=Z.every(N=>!G.has(N)),ee={allColumnsIsVisible:U,allColumnsVisibilityChanger:()=>{$(N=>{if(U){const oe=[...N,...Z];return Array.from(new Set(oe))}const J=new Set(Z);return N.filter(oe=>!J.has(oe))})}},j=h.useMemo(()=>new Set(v),[v]),F=new Set(u.disablePinning??[]),X=new Set(u.disablePinning??[]),le=E.filter(N=>{const J=X.has(N),oe=F.has(N);return J&&oe}),D=v.length===le.length,M=()=>V(N=>N.filter(J=>yr(F,{colsWithKeyTextMap:p,currentKey:J,tableConfigKeyTextBoolean:f})??F.has(J)));return h.useEffect(()=>{x(t)},[t]),h.useEffect(()=>{c(o)},[o]),h.useEffect(()=>{b(l)},[l]),s.jsxs(s.Fragment,{children:[W&&s.jsx(Y,{$css:{marginBottom:"12px"},children:s.jsx(Gi,{placeholder:"Поиск",value:S,onChange:q,contentLeft:s.jsx("span",{style:{marginRight:"2px"},children:s.jsx(nr,{})}),contentRight:S?s.jsx(Wi,{onClick:K,"aria-label":"Очистить поиск",children:s.jsx(ln,{})}):void 0,clear:!0})}),s.jsx(vo,{disabledClearPinnedButton:D,columnsControlConfig:u,clearLocalPinned:M,resetToDefaultOrder:()=>T(n()),disableResetToDefaultOrderButton:se,...ee}),s.jsx(Eo,{searchQuery:S,columnsOrder:E,onColumnsReorder:O,setPinnedCols:V,setHiddenCols:$,columnConfig:d,columnsControlConfig:u,colsWithKeyTextMap:p,keyText:y,tableConfigKeyTextBoolean:f,disableHidingSet:Q,disablePinningSet:F,pinnedColsSet:j,hiddenColsSet:G}),!w&&s.jsx(To,{...k})]})};try{ko.displayName="ColumnsControlInner",ko.__docgenInfo={description:"",displayName:"ColumnsControlInner",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},columnsOrder:{defaultValue:null,description:"",name:"columnsOrder",required:!0,type:{name:"string[]"}},getDefaultColumnsOrder:{defaultValue:null,description:"",name:"getDefaultColumnsOrder",required:!0,type:{name:"() => string[]"}},setColumnsOrder:{defaultValue:null,description:"",name:"setColumnsOrder",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},pinnedCols:{defaultValue:null,description:"",name:"pinnedCols",required:!0,type:{name:"string[]"}},setPinnedCols:{defaultValue:null,description:"",name:"setPinnedCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},hiddenCols:{defaultValue:null,description:"",name:"hiddenCols",required:!0,type:{name:"string[]"}},setHiddenCols:{defaultValue:null,description:"",name:"setHiddenCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<Row, SummaryRow>[]"}},columnsControlConfig:{defaultValue:null,description:"",name:"columnsControlConfig",required:!0,type:{name:"ColumnsControlConfig"}},colsWithKeyTextMap:{defaultValue:null,description:"",name:"colsWithKeyTextMap",required:!0,type:{name:"KeyTextMap"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},tableConfigKeyTextBoolean:{defaultValue:null,description:"",name:"tableConfigKeyTextBoolean",required:!0,type:{name:"boolean"}}}}}catch{}const Do=({opened:e,onClose:t,...n})=>s.jsx(Y,{$css:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:s.jsx(ko,{...n,onClose:t,opened:e})});try{Do.displayName="ColumnsControl",Do.__docgenInfo={description:"",displayName:"ColumnsControl",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},columnsOrder:{defaultValue:null,description:"",name:"columnsOrder",required:!0,type:{name:"string[]"}},getDefaultColumnsOrder:{defaultValue:null,description:"",name:"getDefaultColumnsOrder",required:!0,type:{name:"() => string[]"}},setColumnsOrder:{defaultValue:null,description:"",name:"setColumnsOrder",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},pinnedCols:{defaultValue:null,description:"",name:"pinnedCols",required:!0,type:{name:"string[]"}},setPinnedCols:{defaultValue:null,description:"",name:"setPinnedCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},hiddenCols:{defaultValue:null,description:"",name:"hiddenCols",required:!0,type:{name:"string[]"}},setHiddenCols:{defaultValue:null,description:"",name:"setHiddenCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<Row, SummaryRow>[]"}},columnsControlConfig:{defaultValue:null,description:"",name:"columnsControlConfig",required:!0,type:{name:"ColumnsControlConfig"}},colsWithKeyTextMap:{defaultValue:null,description:"",name:"colsWithKeyTextMap",required:!0,type:{name:"KeyTextMap"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},tableConfigKeyTextBoolean:{defaultValue:null,description:"",name:"tableConfigKeyTextBoolean",required:!0,type:{name:"boolean"}}}}}catch{}const Ic=({tableConfigColumnsControl:e,tableConfigKeyTextBoolean:t,colsWithKeyTextMap:n,columnsGroupingIsActive:r})=>{const o=!!(e!=null&&e.enable),a={enable:o,reorderingAside:o,reorderingHeader:o,pinning:o&&!r,hiding:o,...e},l=o&&(a.hiding||a.pinning||a.reorderingAside),i=o&&!!a.reorderingHeader,d=o&&!!(a.reorderingHeader||a.reorderingAside),[u,p]=h.useState(()=>(a.pinning&&(e==null?void 0:e.pinnedDefault)||[]).reduce((c,m)=>{if(t){const b=n.get(m);if(b)return c.push(...Object.values(b)),c}return c.push(m),c},[])),[y,f]=h.useState(()=>(a.hiding&&(e==null?void 0:e.hiddenDefault)||[]).reduce((c,m)=>{if(t){const b=n.get(m);if(b)return c.push(...Object.values(b)),c}return c.push(m),c},[])),[w,g]=h.useState(!1);return{columnsControlEnable:o,columnsControlConfig:a,columnsControlInControlBlockBoolean:l,reorderInHeaderIsActive:i,reorderIsActive:d,pinnedCols:u,setPinnedCols:p,hiddenCols:y,setHiddenCols:f,openControlModal:w,setOpenControlModal:g,colsWithKeyTextMap:n}};function Es(e){return e.children===void 0}const $l=(e,t)=>{if(Es(e)){t.push({...e});return}e.children.forEach(n=>{$l(n,t)})};function Ec(e){if(!e.length)return e;const t=[];return e.forEach(n=>{$l(n,t)}),t}const Nl=(e,t,n,r,o)=>Array.prototype.concat.apply(e==null?void 0:e.map(a=>({...a,level:r||1,parent:o||null})),e==null?void 0:e.map(a=>Nl(t(a)||[],t,n,(r||1)+1,n(a)??null))),Tc=(e,t,n)=>{if(Ft(e.key)||e.key===Ee||e.key===et)return e;const r=t.get(e.key);if(!r)return e;let o=null;const a=l=>{const i=Es(l)?n.get(l.key)??l:l;if(o=o?{...l,children:[o]}:i,!l.parent)return;const{parent:d}=l,u=t.get(d.key);u&&a(u)};return a(r),o},Bl=e=>{e.forEach((t,n,r)=>{if(n>=r.length-1)return;let o=!0;const a=n+1;for(;o;){const l=r[n],i=r[a],d=l.key===(i==null?void 0:i.key);if(a>r.length-1){o=!1;return}if(!d){o=!1;return}const u={...l,...i,children:[...(l==null?void 0:l.children)??[],...(i==null?void 0:i.children)??[]]};u.children.length>0&&Bl(u.children),r[n]=u,r.splice(a,1)}})},Ac=(e,t,n)=>h.useMemo(()=>{if(!n)return{columnsWithParentGroups:e};const r=new Map(t.reduce((l,i)=>{if(l.push([i.key,i]),Es(i)&&i.keyText){const d=Ar(i.keyText,"key"),u={...d,...i.parent&&{parent:i.parent}};l.push([d.key,u])}return l},[])),o=new Map(e.map(l=>[l.key,l])),a=e.map(l=>Tc(l,r,o));return Bl(a),{columnsWithParentGroups:a}},[t,n,e]),kc=e=>h.useMemo(()=>{const t=Ec(e),n=Nl(e,o=>o==null?void 0:o.children,o=>o),r=t.length>0&&t.length!==n.length;return{columnConfig:t,allColsFlattened:n,columnsGroupingIsActive:r}},[e]),Dc=e=>typeof e!="boolean"&&typeof(e==null?void 0:e.state)<"u",Oc=e=>{const t=typeof e!="boolean",n=h.useState((t&&(e==null?void 0:e.defaultOpened))??!1),r=t?(e==null?void 0:e.portal)??document.body:document.body;return{state:Dc(e)?e.state:n,fullScreenPortal:r}},Vc=({tableConfig:e,rows:t})=>{const{infinityScroll:n}=e,r=!!n,{onTrigger:o,hasMore:a=!0,scrollThreshold:l=100,isLoading:i=!1}=n??{},d=r&&a&&!!o;return{infinityScrollHandler:h.useCallback(p=>{if(!d)return;rc({event:p,scrollThreshold:l})&&!i&&o(t)},[d,i,o,t,l]),infinityScrollActiveInConfig:r,isHaveActiveInfinityScroll:d,infinityScrollHasMore:a}},De=({handleExpandRowDetail:e,row:t,className:n})=>{const r=Ks(t,"closed"),o=Ks(t,"opened"),{onClick:a,...l}=Au(t)??{};return s.jsx(Y,{className:n,$css:{display:"inline-block",paddingLeft:"8px"},children:s.jsx(Oe,{size:"s",view:"clear",onClick:i=>{e==null||e(t),a&&a(i)},...l,children:wu(t)?o??s.jsx(ba,{color:"inherit"}):r??s.jsx(Sa,{color:"inherit"})})})};try{De.displayName="ExpandDetailButton",De.__docgenInfo={description:"",displayName:"ExpandDetailButton",props:{handleExpandRowDetail:{defaultValue:null,description:"",name:"handleExpandRowDetail",required:!0,type:{name:"HandleExpandDetail<RowType>"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"ObjectForExtending"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}const Oo=({rows:e,tableConfigRowDetail:t})=>{const[n,r]=h.useState(new Set),o=!!t,a=h.useMemo(()=>{const i=t==null?void 0:t.expandButtonColumnKey;return{handleExpandRowDetail:u=>{if(!o)return;const{rowKeyGetter:p}=t,y=p(u);r(f=>{const w=new Set(f);return w.has(y)?w.delete(y):w.add(y),w})},expandButtonColumnKey:i}},[o]),l=h.useMemo(()=>{if(!o)return e;const{rowKeyGetter:i,isRowWithDetail:d,renderRowDetail:u,icons:p}=t;return e.reduce((y,f)=>{const w=d(f),g=i(f),x=w&&n.has(g);return y.push({...f,...w&&{[xe.IS_HAVE]:w,[xe.IS_HAVE_EXPANDED]:x,...!!(p!=null&&p.closed)&&{[xe.EXPAND_ICON_CLOSED]:p.closed},...!!(p!=null&&p.opened)&&{[xe.EXPAND_ICON_OPENED]:p.opened},...!!(p!=null&&p.iconButtonProps)&&{[xe.EXPAND_ICON_BUTTON_PROPS]:p.iconButtonProps}}}),x&&y.push({[xe.IS_DETAIL_PANEL_ROW]:!0,[xe.ROW_DATA]:f,[xe.ROW_DETAIL_RENDER]:u}),y},[])},[e,o,n]);return{rowDetailContextValue:a,rowsWithExpDetails:l,rowDetailIsActiveInConfig:o}};try{Oo.displayName="useRowDetailPanel",Oo.__docgenInfo={description:"",displayName:"useRowDetailPanel",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"readonly RowType[]"}},tableConfigRowDetail:{defaultValue:null,description:"",name:"tableConfigRowDetail",required:!0,type:{name:"RowDetailConfig<RowType>"}}}}}catch{}const Ll=h.createContext(null),Vo=({children:e,value:t})=>s.jsx(Ll.Provider,{value:t,children:e}),jl=()=>{const e=h.useContext(Ll);if(!e)throw new Error("useSelectingCheckBoxCellContext must be used within DataGrid cells");return e};try{Vo.displayName="RowDetailHandlerContextProvider",Vo.__docgenInfo={description:"",displayName:"RowDetailHandlerContextProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"{ handleExpandRowDetail: HandleExpandDetail<RowType>; expandButtonColumnKey: string; }"}}}}}catch{}const en="big",$c=Object.keys(ae),Nc=e=>{var t;return!e||!e.showInControl?!1:e!=null&&e.available?((t=e==null?void 0:e.available)==null?void 0:t.length)>1:!0},Bc=e=>{const t=e==null?void 0:e.default,n=e==null?void 0:e.available,r=n==null?void 0:n[0],o=!!r;return!t&&!n?en:t&&!n?t:!t&&n?o?n.find(a=>a===en)??r:en:t&&n&&!o?t:t&&n&&o?n.some(a=>a===t)?t:n.find(a=>a===en)??r:en},Lc=(e,t)=>{const n=(t==null?void 0:t.available)??$c,r=n==null?void 0:n[0];if(!!r){const a=n.findIndex(i=>i===e),l=n.length-1;return a===l?r:n[a+1]??r}return e},Fl={small:{icon:_a,tooltip:"Размер строки - минимальный"},medium:{icon:Ca,tooltip:"Размер строки - средний"},big:{icon:wa,tooltip:"Размер строки - максимальный"}},$o=e=>Fl[e].icon,jc=e=>Fl[e].tooltip;function Fc({tableConfig:e={},rows:t}){var g,x,C,c,m,b,S,_,I,R,E,v,A,T,V;const n=(g=e.selecting)==null?void 0:g.showState,r=h.useState(!!e.selecting&&(((x=e.selecting)==null?void 0:x.showDefault)??!0)),[o,a]=n??r,[l,i]=h.useState(!0),[d,u]=h.useState(!0),[p,y]=((C=e.selecting)==null?void 0:C.state)??[],f=h.useMemo(()=>{const{state:$,selectingRules:H,...W}=e.selecting??{};return{selectingRules:yl(H),selectingRowsIsActive:o,...W}},[o,e.selecting]),w=h.useMemo(()=>{var q;const $=(q=e.selecting)==null?void 0:q.rowKeyGetter;if(!o||!e.selecting||!$)return null;const H=ar(t,K=>K==null?void 0:K[Ct],K=>K),W=new Map(H.map(K=>[$(K),K]));return{flattenedRows:H,flattenedRowsMap:W}},[t,o]);return{selectingRowsIsActive:o,setSelectingRowsIsActive:a,selectedRows:p,setSelectedRows:y,selectingRowConfig:f,flattenedRowsArrAndMap:w,isSelectingRowLabelVisible:l,setIsSelectingRowLabelVisible:i,isSelectingRowCounterVisible:d,setIsSelectingRowCounterVisible:u,controlBlock:{domMetadata:{className:(b=(m=(c=e.selecting)==null?void 0:c.controlBlock)==null?void 0:m.domMetadata)==null?void 0:b.className,dataAttributes:(I=(_=(S=e.selecting)==null?void 0:S.controlBlock)==null?void 0:_.domMetadata)==null?void 0:I.dataAttributes}},sidebar:{domMetadata:{className:(v=(E=(R=e.selecting)==null?void 0:R.sidebar)==null?void 0:E.domMetadata)==null?void 0:v.className,dataAttributes:(V=(T=(A=e.selecting)==null?void 0:A.sidebar)==null?void 0:T.domMetadata)==null?void 0:V.dataAttributes}}}}const Pc=B(Oe)`
  &:hover {
    background-color: transparent;
  }
`,No=({columnKey:e,columnSorted:t,setSortState:n})=>{const r=(t==null?void 0:t.direction)==="ASC"&&Ra||(t==null?void 0:t.direction)==="DESC"&&va||Ia;return s.jsx(Ge,{text:"Отсортировать по данной колонке",placement:"top",animated:!0,target:s.jsx(Pc,{size:"s",view:"clear",style:{width:16,height:16},onClick:()=>{const o=(t==null?void 0:t.direction)===void 0&&"ASC"||(t==null?void 0:t.direction)==="ASC"&&"DESC"||void 0;n==null||n(o?[{columnKey:e,direction:o}]:[])},children:s.jsx(r,{color:he,size:"xs"})})})};try{No.displayName="HeaderSortButton",No.__docgenInfo={description:"",displayName:"HeaderSortButton",props:{columnKey:{defaultValue:null,description:"",name:"columnKey",required:!0,type:{name:"string"}},columnSorted:{defaultValue:null,description:"",name:"columnSorted",required:!0,type:{name:"SortColumn"}},setSortState:{defaultValue:null,description:"",name:"setSortState",required:!0,type:{name:"React.Dispatch<React.SetStateAction<readonly SortColumn[]>>"}}}}}catch{}const Hc="ru",qc={numeric:!0,sensitivity:"base"},hi=e=>String(e??"").trim()==="",fi=e=>String(e??"").trim(),yi=e=>{const t=String(e??"").trim();if(!t)return null;const n=t.replace(/\s/g,"").replace(",","."),r=Number(n);return Number.isFinite(r)?r:null},Mc=e=>(t,n)=>{const r=fi(t[e]),o=fi(n[e]);return!r&&!o?0:r?o?r.localeCompare(o,Hc,qc):-1:1},Gc=e=>(t,n)=>{const r=yi(t[e]),o=yi(n[e]);return r===null&&o===null?0:r===null?1:o===null?-1:r-o},Wc=({rows:e,columns:t,tableConfig:n,infinityScrollActiveInConfig:r,paginationActiveInConfig:o})=>{var f,w;const[a,l]=((f=n.sorting)==null?void 0:f.state)??[],[i,d]=h.useState(!1),u=!!n.sorting,p=!!((w=n.sorting)!=null&&w.manualSorting),y=h.useMemo(()=>{if(!u||p||r||o||!a||a.length===0)return e;const g=t.filter(x=>!!x.sortingType);return g.length===0?e:[...e].sort((x,C)=>{for(const c of a){const m=g.find(_=>_.key===c.columnKey);if(!m||!m.sortingType)return 0;const S=(m.sortingType==="stringSort"?Mc(c.columnKey):m.sortingType==="numberSort"?Gc(c.columnKey):m.sortingType)(x,C);if(S!==0){const _=m.sortingType==="stringSort"||m.sortingType==="numberSort",I=hi(x[c.columnKey])||hi(C[c.columnKey]);return _&&I||c.direction==="ASC"?S:-S}}return 0})},[t,e,a,p,r,o,u]);return{sortColumns:a,setSortColumns:l,sortedRows:y,sortIsVisible:i,setSortIsVisible:d}},zc=(e,t={})=>{const{scrollThreshold:n=5}=t,r=h.useRef(null);return h.useEffect(()=>{e.isOpen&&(r.current=null)},[e.isOpen]),h.useCallback(o=>{if(!e.isOpen)return;const{scrollTop:a}=o.currentTarget;if(r.current===null){r.current=a;return}Math.abs(r.current-a)>n&&e.close(),r.current=a},[e,n])},Kc=({columns:e,reorderIsActive:t,tableConfigColumnsControl:n,columnConfig:r,selectingRowsIsActive:o,rowsGroupingIsActive:a,showRowInstruments:l,tableConfigKeyTextBoolean:i,keyText:d,colsWithKeyTextMap:u})=>{const p=n==null?void 0:n.orderDefault,[y,f]=h.useState(()=>t?ui({columnConfig:r,tableConfigDefaultOrder:p,selectingRowsIsActive:o,colsWithKeyTextMap:u,keyText:d,rowsGroupingIsActive:a,showRowInstruments:l}):[]),w=()=>ui({columnConfig:r,tableConfigDefaultOrder:p,selectingRowsIsActive:o,rowsGroupingIsActive:a,colsWithKeyTextMap:u,keyText:d,showRowInstruments:l});h.useEffect(()=>{f(C=>{const c=w(),m=new Set(c),b=C.filter(I=>m.has(I)),S=yc({prevOrder:b,defaultOrder:c});return Ol({keyText:d,orderArrayForChanging:S,colsWithKeyTextMap:u}),Dl({orderArrayForChanging:S})})},[e]);const g=h.useMemo(()=>{if(!t)return e;const C=new Map(e.map(c=>[c.key,c]));return y.reduce((c,m)=>{const b=C.get(m);return b&&c.push(b),c},[])},[y,t]),x=h.useCallback((C,c)=>{Vl({sourceKey:C,targetKey:c,reorderIsActive:t,setColumnsOrder:f,onReorderingHeader:n==null?void 0:n.onReorderingHeader,tableConfigKeyTextBoolean:i,keyText:d,colsWithKeyTextMap:u})},[u,d,t,n==null?void 0:n.onReorderingHeader,i]);return{reorderedColumns:g,colsWithKeyTextMap:u,columnsOrder:y,setColumnsOrder:f,onColumnsReorder:x,getDefaultColumnsOrder:w}},Uc=B.div`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  > button {
    //     width: 24px !important;
    height: 24px !important;
  }
`;function Bo({tabIndex:e,expanded:t,onCellExpand:n,className:r}){const o=a=>{(a.key===" "||a.key==="Enter")&&(a.preventDefault(),n())};return s.jsx(Uc,{className:r,onClick:n,onKeyDown:o,children:s.jsx(Oe,{tabIndex:e,view:"clear",stretching:"auto",children:t?s.jsx(ms,{color:"inherit"}):s.jsx(Vi,{color:"inherit"})})})}try{Bo.displayName="CellExpandFormatter",Bo.__docgenInfo={description:"",displayName:"CellExpandFormatter",props:{tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},onCellExpand:{defaultValue:null,description:"",name:"onCellExpand",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}function Pt({tabIndex:e,tableConfigSubRows:t,row:n,className:r}){var d;const{expandedRowsIds:o,setExpandedRowsIds:a}=yu(),l=((d=t==null?void 0:t.rowKeyGetter)==null?void 0:d.call(t,n))??"trololo",i=!!(o!=null&&o.has(l));return s.jsx(Bo,{className:r,tabIndex:e,expanded:!!i,onCellExpand:()=>{a==null||a(u=>{const p=new Set(u);return i?p.delete(l):p.add(l),p})}})}try{Pt.displayName="ChevronTreeBtn",Pt.__docgenInfo={description:"",displayName:"ChevronTreeBtn",props:{tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},tableConfigSubRows:{defaultValue:null,description:"",name:"tableConfigSubRows",required:!0,type:{name:"SubRows<RowType, RowIdType>"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"ObjectForExtending"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}const Xc=()=>{const e=We(),{isExpandedAllRows:t,toggleExpandAllButton:n}=e;return s.jsx("div",{style:{display:"inline-block"},children:s.jsx(Ge,{text:`${t?"Скрыть":"Раскрыть"} все дочерние строки`,animated:!0,placement:"top",target:s.jsx(Oe,{size:"s",view:"clear",style:{width:16,height:16},onClick:n,children:t?s.jsx(Ea,{size:"xs",color:he}):s.jsx(Ta,{size:"xs",color:he})})})})};function rn(e){return e==null?"":typeof e=="string"?e:typeof e=="number"||typeof e=="boolean"?e.toString():JSON.stringify(e)}function gi(e,t={}){if(e==null)return"";const n=Number(e);if(Number.isNaN(n))return rn(e);const r=new Intl.NumberFormat(t.locales??"ru-RU",{minimumFractionDigits:t.minimumFractionDigits??0,maximumFractionDigits:t.maximumFractionDigits??2,useGrouping:t.useGrouping??!0});return!t.thousandSeparator&&!t.decimalSeparator?r.format(n):r.formatToParts(n).map(o=>o.type==="group"&&t.thousandSeparator?{...o,value:t.thousandSeparator}:o.type==="decimal"&&t.decimalSeparator?{...o,value:t.decimalSeparator}:o).map(o=>o.value).join("")}const Jc=(e,t)=>t===void 0?rn(e):typeof t=="object"&&"customFormat"in t?typeof t.customFormat=="function"?t.customFormat(rn(e)):rn(e):t==="number"?gi(e,{locales:"ru-RU",thousandSeparator:" ",decimalSeparator:","}):typeof t=="object"&&"type"in t&&t.type==="number"?gi(e,{decimalSeparator:t.decimalSeparator,thousandSeparator:t.thousandSeparator,locales:t.locales,minimumFractionDigits:t.minimumFractionDigits,maximumFractionDigits:t.maximumFractionDigits,useGrouping:t.useGrouping}):rn(e),Lo=B.span`
  width: 100%;
  display: inline-block;
  text-align: ${({alignContent:e="left"})=>e};
`;try{Lo.displayName="CellContentSpan",Lo.__docgenInfo={description:"",displayName:"CellContentSpan",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Yc=e=>typeof e=="object"&&e.alignContent?e.alignContent:e==="number"||typeof e=="object"&&"type"in e&&e.type==="number"?"right":"left",Br=(e,t)=>{if(bt.isValidElement(e))return e;const n=Jc(e,t),r=typeof n=="string"?n:void 0,o=Yc(t);return s.jsx(Lo,{className:ne.cellContent,title:r,alignContent:o,children:n})};function Qc(e){const{isHaveFiltering:t,isHaveSorting:n,columnIsPinned:r,subRowIsActiveAndColumnWithArrow:o,reorderForColIsActive:a=!1,customMinWidth:l}=e,i=16*2,d=36,u=16,p=4,y=6,f=[o,a,r].filter(Boolean).length,w=f*u+Math.max(0,f-1)*p+y,g=[t,n].filter(Boolean).length,x=g*u+Math.max(0,g-1)*p+y,C=i+w+d+x;return l??C}const tr=e=>{const t={};return e&&Object.entries(e).forEach(([n,r])=>{n.startsWith("data-")&&typeof r=="string"&&(t[n]=r)}),t},Zc=e=>{const n=Object.entries(e).filter(r=>r[1]!==void 0);return n.length?Object.fromEntries(n):{}},ep=e=>/^\w*$/.test(e),tp=e=>e instanceof Date,np=e=>typeof e=="object",rp=e=>e==null,op=e=>!rp(e)&&!Array.isArray(e)&&np(e)&&!tp(e),sp=e=>Array.isArray(e)?e.filter(Boolean):[],ip=e=>sp(e.replace(/["|']|\]/g,"").split(/\.|\[/)),lp=(e,t,n)=>{var i;let r=-1;const o=ep(t)?[t]:ip(t),{length:a}=o,l=a-1;for(;++r<a;){const d=o[r];let u=n;if(r!==l){const p=e[d];u=op(p)||Array.isArray(p)?p:(i=Number.isNaN)!=null&&i.call(Number,+o[r+1])?{}:[]}if(d==="__proto__")return;e[d]=u,e=e[d]}return e},ap=la,up={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},Pl=P`
  height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
`,Hl=P({...up,flexGrow:1,flexShrink:1,minWidth:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"inline-block"}),ql=P`
  margin-left: auto;
  flex-shrink: 0;
`,dp=24,cp=8,pp=({$lvl:e,$hasChildren:t})=>dp*e+(t?0:cp),mp=({$editingMode:e})=>{var r,o;if(!e)return"0px";const{$rowSize:t,$columnHasArrow:n}=e;return n?(o=(r=ae==null?void 0:ae[t])==null?void 0:r.cell)==null?void 0:o["padding-inline"]:"0px"},gr=B.div`
  ${Pl}
  padding-left: calc(${pp}px + ${mp});
  & span.${ne.cellContent} {
    ${Hl}
  }

  & .${ne.cellContent}.${ne.subRowCell} {
    display: inline-flex;
  }

  & .${ne.expandDetailButton} {
    ${ql}
  }
`,Lt=B(Y)`
  ${Pl}
  justify-content: space-between;

  & span.${ne.cellContent} {
    ${Hl}
  }

  & .${ne.cellContent}.${ne.subRowCell} {
    display: inline-flex;
  }

  & .${ne.expandDetailButton} {
    ${ql}
  }
`,hp=B.div({display:"flex",flexGrow:1,height:"100%",alignItems:"center",minWidth:0}),He=(e,t,n)=>t?s.jsxs(hp,{className:ne.selectArrowContainer,children:[e,n?s.jsx(ms,{size:"s",className:ne.selectArrow}):null]}):e,jo=({renderCellProps:e,column:t,tableConfigSubRows:n,currIndex:r,indexZeroColKey:o,tableConfigRowDetailPanel:a,keyText:l,editModeEnabled:i})=>{var $,H,W,q,K,se;const{row:d,tabIndex:u,onRowChange:p,column:{idx:y},rowIdx:f}=e,{handleExpandRowDetail:w,expandButtonColumnKey:g}=jl(),x=(($=t==null?void 0:t.editingCell)==null?void 0:$.component)==="select";if(d!=null&&d[cn])return s.jsx(zs,{roundness:8,width:"100%",height:"100%",lighter:!0});const C=d==null?void 0:d[oc];if(C&&C.has(t.key))return s.jsx(zs,{roundness:8,width:"100%",height:"100%",lighter:!0});if(ct(d)){const{isEmptyCell:O}=Cu(e.row,r,o);if(O)return null;const k=_u(d),G=Ru(d);return s.jsx(G,{row:k,tabIndex:u,onRowChange:p,rowIdx:f,colIdx:y})}const c=t.renderCell?t.renderCell(e):Br(d==null?void 0:d[t.key],t.contentFormat),m=!!n,b=!!a;if(!m&&!b)return He(c,x,i);const S=()=>ws(d)&&t.key===g;if(!m&&b)return S()?s.jsxs(Lt,{className:ne.cellWithExpandButton,children:[He(c,x,i),s.jsx(De,{className:ne.expandDetailButton,row:d,handleExpandRowDetail:w})]}):He(c,x,i);const{lvl:_}=rr(d),I=_===0?x:((W=(H=t==null?void 0:t.subRow)==null?void 0:H.editingCell)==null?void 0:W.component)==="select",R=Cs((q=t.subRow)==null?void 0:q.isColumnWithArrow,l),E=S();if(_===0){if(!R&&!E)return He(c,x,i);const O=(K=n==null?void 0:n.getSubRows)==null?void 0:K.call(n,d),k=m&&!!(O!=null&&O.length),G=R&&k,Q=b&&S();return!R&&!Q?He(c,x,i):!R&&Q?s.jsxs(Lt,{className:ne.cellWithExpandButton,children:[He(c,x,i),s.jsx(De,{className:ne.expandDetailButton,row:d,handleExpandRowDetail:w})]}):s.jsxs(gr,{$lvl:_,$hasChildren:G,$editingMode:!1,className:ne.cellWithExpandButton,children:[G&&s.jsx(Pt,{className:ne.expandTreeButton,tabIndex:u,row:d,tableConfigSubRows:n}),He(c,x,i),Q&&s.jsx(De,{className:ne.expandDetailButton,row:d,handleExpandRowDetail:w})]})}const v=(()=>{var k,G,Q;if(t.key===Ee&&t.renderCell||t.key===Tt&&t.renderCell)return t.renderCell(e);if((k=t.subRow)!=null&&k.renderSubRowCell)return t.subRow.renderSubRowCell(e,_);const O=()=>{var Z;return((Z=t.subRow)==null?void 0:Z.contentFormat)??t.contentFormat};if((G=t.subRow)!=null&&G.parentKeyAsDefault)return Br(d==null?void 0:d[t.key],O());if((Q=t.subRow)!=null&&Q.keyOfColumnInSubRow){const Z=typeof t.subRow.keyOfColumnInSubRow=="function"?t.subRow.keyOfColumnInSubRow(_):t.subRow.keyOfColumnInSubRow;return Br(d==null?void 0:d[Z],O())}return null})(),A=(se=n==null?void 0:n.getSubRows)==null?void 0:se.call(n,d),T=m&&!!(A!=null&&A.length),V=R&&T;return!R&&!E?He(v,I,i):!R&&E?s.jsxs(Lt,{className:ne.cellWithExpandButton,children:[He(v,I,i),s.jsx(De,{className:ne.expandDetailButton,row:d,handleExpandRowDetail:w})]}):s.jsxs(gr,{$lvl:_,$hasChildren:V,$editingMode:!1,className:ne.cellWithExpandButton,children:[V&&s.jsx(Pt,{className:ne.expandTreeButton,tabIndex:u,row:d,tableConfigSubRows:n}),He(s.jsx("span",{className:jr(ne.cellContent,ne.subRowCell),title:typeof v=="string"||typeof v=="number"?v.toString():void 0,children:v}),I,i),E&&s.jsx(De,{className:ne.expandDetailButton,row:d,handleExpandRowDetail:w})]})};try{jo.displayName="RenderCell",jo.__docgenInfo={description:"",displayName:"RenderCell",props:{renderCellProps:{defaultValue:null,description:"",name:"renderCellProps",required:!0,type:{name:"RenderCellProps<RowType, SummaryRowType>"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnConfig<RowType, SummaryRowType>"}},tableConfigSubRows:{defaultValue:null,description:"",name:"tableConfigSubRows",required:!0,type:{name:"SubRows<RowType, RowIdType>"}},tableConfigRowDetailPanel:{defaultValue:null,description:"",name:"tableConfigRowDetailPanel",required:!0,type:{name:"RowDetailConfig<RowType>"}},currIndex:{defaultValue:null,description:"",name:"currIndex",required:!0,type:{name:"number"}},indexZeroColKey:{defaultValue:null,description:"",name:"indexZeroColKey",required:!0,type:{name:"string"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},editModeEnabled:{defaultValue:null,description:"",name:"editModeEnabled",required:!0,type:{name:"boolean"}}}}}catch{}const Fo=({renderEditCellProps:e,column:t,tableConfigSubRows:n,tableConfigRowDetailPanel:r,keyText:o})=>{var S,_,I;const{row:a}=e,{handleExpandRowDetail:l,expandButtonColumnKey:i}=jl(),{rowSize:d}=Tr(),u=(()=>{if(t.editingCell)return t.editingCell.component==="inputString"?s.jsx(mr,{...e}):t.editingCell.component==="inputNumber"?s.jsx(hr,{...e,formatOptions:t==null?void 0:t.contentFormat}):t.editingCell.component==="select"?s.jsx(cr,{columnConfig:t,...e}):t.editingCell.component(e,0)})(),p=!!n,y=!!r;if(!p&&!y)return u;const f=()=>ws(a)&&t.key===i;if(!p&&y)return f()?s.jsxs(Lt,{className:ne.editableCellWithExpandButton,children:[u,s.jsx(De,{className:ne.expandDetailButton,row:a,handleExpandRowDetail:l})]}):u;const{lvl:w}=rr(a),g=Cs((S=t.subRow)==null?void 0:S.isColumnWithArrow,o),x=f();if(w===0){if(!g&&!x)return u;const R=(_=n==null?void 0:n.getSubRows)==null?void 0:_.call(n,a),E=p&&!!(R!=null&&R.length),v=g&&E,A=y&&f();return!g&&!A?u:!g&&A?s.jsxs(Lt,{className:ne.editableCellWithExpandButton,children:[u,s.jsx(De,{className:ne.expandDetailButton,row:a,handleExpandRowDetail:l})]}):s.jsxs(gr,{className:ne.editableCellWithExpandButton,$lvl:w,$hasChildren:v,$editingMode:{$columnHasArrow:g,$rowSize:d},children:[v&&s.jsx(Pt,{tabIndex:void 0,className:ne.expandTreeButton,row:a,tableConfigSubRows:n}),u,A&&s.jsx(De,{className:ne.expandDetailButton,row:a,handleExpandRowDetail:l})]})}const C=(()=>{if(!t.subRow||!t.subRow.editingCell)return;const R=t.subRow.parentKeyAsDefault,E=()=>{var $,H;return($=t==null?void 0:t.subRow)!=null&&$.keyOfColumnInSubRow?typeof t.subRow.keyOfColumnInSubRow=="function"?t.subRow.keyOfColumnInSubRow(w).toString():t.subRow.keyOfColumnInSubRow.toString():(H=t==null?void 0:t.subRow)!=null&&H.parentKeyAsDefault?t.key:""},{column:v,...A}=e,T={...v,...!R&&{key:E()},editingCell:t.subRow.editingCell},V={...A,column:T};return t.subRow.editingCell.component==="inputString"?s.jsx(mr,{...V}):t.subRow.editingCell.component==="inputNumber"?s.jsx(hr,{...V,formatOptions:t==null?void 0:t.contentFormat}):t.subRow.editingCell.component==="select"?s.jsx(cr,{columnConfig:t,...V}):t.subRow.editingCell.component(V,w)})(),c=(I=n==null?void 0:n.getSubRows)==null?void 0:I.call(n,a),m=p&&!!(c!=null&&c.length),b=g&&m;return!g&&!x?C:!g&&x?s.jsxs(Lt,{className:ne.editableCellWithExpandButton,children:[C,s.jsx(De,{className:ne.expandDetailButton,row:a,handleExpandRowDetail:l})]}):s.jsxs(gr,{className:ne.editableCellWithExpandButton,$lvl:w,$hasChildren:b,$editingMode:{$columnHasArrow:g,$rowSize:d},children:[b&&s.jsx(Pt,{className:ne.expandTreeButton,tabIndex:void 0,row:a,tableConfigSubRows:n}),C,x&&s.jsx(De,{className:ne.expandDetailButton,row:a,handleExpandRowDetail:l})]})};try{Fo.displayName="RenderEditCell",Fo.__docgenInfo={description:"",displayName:"RenderEditCell",props:{renderEditCellProps:{defaultValue:null,description:"",name:"renderEditCellProps",required:!0,type:{name:"RenderEditCellProps<RowType, SummaryRowType>"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnConfig<RowType, SummaryRowType>"}},tableConfigSubRows:{defaultValue:null,description:"",name:"tableConfigSubRows",required:!0,type:{name:"SubRows<RowType, RowIdType>"}},tableConfigRowDetailPanel:{defaultValue:null,description:"",name:"tableConfigRowDetailPanel",required:!0,type:{name:"RowDetailConfig<RowType>"}},currIndex:{defaultValue:null,description:"",name:"currIndex",required:!0,type:{name:"number"}},indexZeroColKey:{defaultValue:null,description:"",name:"indexZeroColKey",required:!0,type:{name:"string"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}}}}}catch{}const fp=(e,t)=>typeof e=="function"?e(t):e,xi={searching:{font:"16px SB Sans Text, sans-serif",indent:68,letterSpacing:-.32},paddingInline:8},Ht=h.forwardRef((e,t)=>{const{enableCollapse:n,isCollapsed:r,toggleCollapse:o,collapseText:a,expandText:l,domMetadata:i,collapseButtonPlacement:d}=Mt();return n?s.jsx("div",{ref:t,className:i==null?void 0:i.className,...i==null?void 0:i.dataAttributes,children:s.jsx(Ze,{...e,contentLeft:s.jsx(Aa,{size:"s",style:{transition:"rotate 0.3s",rotate:r?"0turn":"0.25turn"}}),view:"clear",size:"s",onClick:u=>{var p;(d==="above"||!r)&&o(),(p=e.onClick)==null||p.call(e,u)},children:r?l:a})}):null});Ht.displayName="CollapseTableButton";try{Ht.displayName="CollapseTableButton",Ht.__docgenInfo={description:"",displayName:"CollapseTableButton",props:{}}}catch{}const yp=B(Y)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 8px;

  height: ${Ve}px;
  max-height: ${Ve}px;

  border: 1px solid;
  border-bottom: ${({$collapsedTable:e})=>e?"1px solid":"none"};

  // Скругления: при открытой таблице - сверху, при закрытой - везде
  border-radius: ${({$borderTopRounded:e,$collapsedTable:t})=>{const n=e?we:0,r=t?we:0;return P`
      ${n}px
      ${n}px 
      ${r}px 
      ${r}px
    `}};

  transition: all ${at}s ease;

  ${({$activeView:e})=>P({...e==="rows"&&{backgroundColor:z.white,borderColor:z.border},...e==="cards"&&{borderColor:"transparent"}})}

  overflow-y: hidden;
`,Po=({activeView:e,$borderTopRounded:t,rightSlot:n})=>{const{isCollapsed:r,enableCollapse:o}=Mt();return o?s.jsxs(yp,{$activeView:e,$borderTopRounded:t,$collapsedTable:r,children:[s.jsx(Ht,{}),n&&n]}):null};try{Po.displayName="CollapseBlockAbove",Po.__docgenInfo={description:`Отдельный блок для кнопки коллапсинга таблицы, размещаемый сверху контрол-блока
Используется когда collapseButtonPlacement = 'above'`,displayName:"CollapseBlockAbove",props:{activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"enum",value:[{value:'"rows"'},{value:'"cards"'}]}},$borderTopRounded:{defaultValue:null,description:"",name:"$borderTopRounded",required:!0,type:{name:"boolean"}},rightSlot:{defaultValue:null,description:"",name:"rightSlot",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ho=({children:e})=>{const{toggleCollapse:t,isCollapsed:n}=Mt(),r=()=>{n&&t()},o=a=>{n&&(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),t())};return s.jsx("div",{role:"button",tabIndex:n?0:-1,onClick:r,onKeyDown:o,"aria-expanded":!n,style:n?{cursor:"pointer"}:void 0,children:e})};try{Ho.displayName="CollapseTableWrapper",Ho.__docgenInfo={description:"",displayName:"CollapseTableWrapper",props:{}}}catch{}const Ml=({$isFullHeight:e})=>P`
  && {
    .input-wrapper {
      height: 100%;
      max-height: 32px;
      padding-block: 8px;
      padding-inline: 10px;
      box-shadow: none;
      ${e&&P({maxHeight:"unset",height:"100%"})}
    }

    ${e&&P({maxHeight:"unset",height:"100%"})}
  }
`,gp=B(Er)`
  ${Ml}
`,xp=B(fu)`
  ${Ml}
`,bp=B(Oe)`
  background-color: transparent;
  height: 100%;
  width: 24px !important;
  color: ${()=>he};
  &:hover {
    background-color: transparent;
    color: ${()=>he};
  }
`,sn=({isVisible:e=!1,size:t="s",iconSize:n="s",$isFullHeight:r=!1})=>{const o=un(),a=gu();if(!a)throw new Error("SearchBlock must be used within SearchContextProvider");const{searchQuery:l,setSearchQuery:i,clearSearch:d,onDebouncedChange:u,onChange:p,debounceDelay:y,isDebounceActive:f,searchClasses:w,placeholder:g="Поиск",internalLocalValue:x,setInternalLocalValue:C,domMetadata:c,searchOnType:m,autocomplete:b}=a,S=!m,_=h.useRef(l),I=h.useRef(null),R=aa(x,f?y:0);h.useLayoutEffect(()=>{const $=_.current;_.current=l,$!==l&&x!==l&&(C(l),I.current=l,!S&&f&&(u==null||u(l)))},[l,x,C,S,f,u]),h.useEffect(()=>{if(!S){if(!f){x!==l&&(p==null||p(x),i(x));return}if(R===x){if(I.current!==null)if(R===I.current)I.current=null;else return;R!==l&&(u==null||u(R),i(R))}}},[R,l,i,u,f,x,p,S]);const E=$=>{const{value:H}=$.target;C(H),S||p==null||p(H)},v=()=>{d(),i(""),p==null||p(""),!S&&f&&(u==null||u(""))},A=()=>{x!==l&&(i(x),p==null||p(x))},T=$=>{$.key.toLowerCase()==="enter"&&(S?A():i(x))},V=$=>{var H;C($.label),i($.label),p==null||p($.label),u==null||u($.label),(H=b==null?void 0:b.onSuggestionSelect)==null||H.call(b,$)};if(!e)return null;if(b){const{onSuggestionSelect:$,...H}=b;return s.jsx(xp,{placeholder:g,value:x,onChange:E,onKeyDown:T,contentLeft:s.jsx("span",{style:{marginRight:"4px"},children:s.jsx(nr,{size:n,color:he})}),onClear:x?v:void 0,onSuggestionSelect:V,portal:o,className:jr(w,c==null?void 0:c.className),$isFullHeight:r,...H,...c==null?void 0:c.dataAttributes})}return s.jsx(gp,{placeholder:g,size:t,value:x,onChange:E,onKeyDown:T,contentLeft:s.jsx("span",{style:{marginRight:"2px"},children:s.jsx(nr,{size:n})}),contentRight:x?s.jsx(bp,{onClick:v,"aria-label":"Очистить поиск",children:s.jsx(ln,{size:n})}):void 0,appearance:"clear",className:jr(w,c==null?void 0:c.className),$isFullHeight:r,...c==null?void 0:c.dataAttributes})},qo=B(Y)`
  height: ${Ve}px;
  max-height: ${Ve}px;
  padding-inline: 16px;
  border: 1px solid;
  border-bottom: none;
  transition: max-height 0.1s ease;
  ${({$activeView:e,$isCollapsed:t})=>P({...e==="rows"&&{backgroundColor:z.white,borderColor:z.border},...e==="cards"&&{borderColor:"transparent"},...t&&{maxHeight:0,overflow:"hidden",borderTop:"none",transitionDelay:"0.3s"}})}
`;try{sn.displayName="SearchBlock",sn.__docgenInfo={description:"",displayName:"SearchBlock",props:{isVisible:{defaultValue:{value:"false"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},iconSize:{defaultValue:{value:"s"},description:"",name:"iconSize",required:!1,type:{name:"IconProps"}},$isFullHeight:{defaultValue:{value:"false"},description:"",name:"$isFullHeight",required:!1,type:{name:"boolean"}}}}}catch{}try{qo.displayName="StyledSearchBlockBellow",qo.__docgenInfo={description:"",displayName:"StyledSearchBlockBellow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function Sp(e){return"value"in e?"details"in e||"CustomIconRender"in e&&typeof e.CustomIconRender=="function":!1}const wp=(e,t)=>{if(!("details"in e)||!e.details)return null;const{details:n}=e,r={value:e.value,label:"label"in n?n.label:e.value};switch(n.type){case"button":{const o=n;return t.set(e.value,(a,l)=>{l.preventDefault(),o.onClick()}),{...r,contentLeft:o.icon}}case"switch":{const o=n;return{...r,contentRight:s.jsx(wr,{checked:o.checked,onChange:o.onChange})}}case"select":{const o=n,[a,l]=Ei(o.options.map(i=>({label:i.label,value:i.value})),(i,d)=>{d.preventDefault(),o.onChange(i.value)});return l.forEach((i,d)=>t.set(d,i)),{...r,contentLeft:o.icon,items:a}}case"custom":return{...r,contentLeft:n.render()};default:return null}},Mo=(e=[])=>{const{rowSize:t,setRowSize:n,activeView:r,setActiveView:o,onRowSizeChange:a}=We();return h.useMemo(()=>{const l=[],i={},d=new Map;return e.forEach(u=>{var p,y;if(Sp(u)){const f=wp(u,d);f&&l.push(f)}else if(u.value==="rowSize"){const f=[{label:"Максимальная",value:"big"},{label:"Средняя",value:"medium"},{label:"Минимальная",value:"small"}];l.push({label:u.text||"Высота строк",value:"row-size-group",contentLeft:$o(t)({}),items:f.map(w=>({...w,contentLeft:$o(w.value)({})}))}),f.forEach(w=>{d.set(w.value,()=>{switch(w.value){case"big":n("big"),a==null||a("big");break;case"small":n("small"),a==null||a("small");break;case"medium":n("medium"),a==null||a("medium");break}})})}else if(u.value==="view-mode"){const f=[{label:"Таблица",value:"rows"},{label:"Карточки",value:"cards"}];l.push({label:"Вид отображения",value:"view-mode-group",contentLeft:r==="rows"?s.jsx(Fr,{}):s.jsx(Pr,{}),items:f.map(w=>({...w,contentLeft:w.value==="rows"?s.jsx(Fr,{}):s.jsx(Pr,{})}))}),f.forEach(w=>{d.set(w.value,()=>{switch(w.value){case"rows":o("rows");break;case"cards":o("cards");break}})})}else if(u.dropdown){let f;u.itemID===hl?f=fl:f=`group-${u.key||u.text}`,u.dropdown.onItemSelect&&d.set(f.toString(),u.dropdown.onItemSelect);const[w,g]=Ei(u.dropdown.items||[],u.dropdown.onItemSelect);g.forEach((x,C)=>d.set(C,x)),(p=u.dropdown)!=null&&p.$css&&Object.assign(i,(y=u.dropdown)==null?void 0:y.$css),l.push({label:u.text??"",value:f,contentLeft:u.contentLeft,items:w,className:u.className})}else{const f=u.key||u.text||`btn-${Date.now()}`,w={label:u.text||"Кнопка",value:f.toString(),disabled:u.disabled,contentLeft:u.contentLeft};u.onClick&&d.set(f.toString(),(g,x)=>{var c;const C={...x,nativeEvent:x.nativeEvent,preventDefault:x.preventDefault,stopPropagation:x.stopPropagation,target:x.target,currentTarget:x.currentTarget};(c=u.onClick)==null||c.call(u,C)}),l.push(w)}}),{dropdownItems:l,handlerMap:d,$summaryCSS:i}},[r,e,t,o,n])};try{Mo.displayName="useButtonsToDropdownItems",Mo.__docgenInfo={description:"",displayName:"useButtonsToDropdownItems",props:{}}}catch{}const xr=({buttons:e=[],dividerIndexes:t=[],triggerSlot:n,dropdownProps:r})=>{const{dropdownItems:o,handlerMap:a,$summaryCSS:l}=Mo(e),i=ua(a),[d,u]=h.useState(!1);return s.jsx(Et,{$css:l,closeOnSelect:!0,...r,onItemSelect:i,items:o.map((p,y)=>(t.includes(y)&&(p.dividerAfter=!0),p)),onToggle:p=>u(p),children:n||s.jsx(Cr,{text:"Действия",contentRight:s.jsx("span",{style:{transform:d?"rotate(180deg)":"rotate(0deg)",display:"inline-flex",alignItems:"center"},children:s.jsx(ms,{size:"s"})}),style:{fontWeight:500,paddingInline:"16px"}})})};try{xr.displayName="ControlBlockActions",xr.__docgenInfo={description:"",displayName:"ControlBlockActions",props:{buttons:{defaultValue:{value:"[]"},description:"",name:"buttons",required:!1,type:{name:"ControlBlockButtonProps[]"}},dividerIndexes:{defaultValue:{value:"[]"},description:"",name:"dividerIndexes",required:!1,type:{name:"number[]"}},triggerSlot:{defaultValue:null,description:"",name:"triggerSlot",required:!1,type:{name:"ReactNode"}},dropdownProps:{defaultValue:null,description:"",name:"dropdownProps",required:!1,type:{name:"TableDropdownConfigProps"}}}}}catch{}const Cp={size:"s",view:"linkDefault"},_p=B(Cr)({paddingInline:qr.x8}),Rt=B(hs)({paddingLeft:"1px"});B(fs)`
  ${({$hasDropdown:e})=>e&&P`
      & > div > span:last-child {
        max-width: fit-content;
        min-width: unset;
      }
    `}
  ${({$buttonStyles:e})=>e&&P`
      ${e};
    `}
`;const bi=B(_p)`
  ${({$hasDropdown:e})=>e&&P`
      & > div > span:last-child {
        max-width: fit-content;
        min-width: unset;
      }
    `}
  ${({$buttonStyles:e})=>e&&P`
      ${e}
    `}
`,Rp=e=>{var t,n,r;return(r=(n=(t=e==null?void 0:e.split)==null?void 0:t.call(e,"link"))==null?void 0:n[1])==null?void 0:r.toLowerCase()},ut=({dropdown:e,isLastButtonInnArray:t=!0,index:n,view:r,showLabel:o,text:a,itemID:l,buttonStyles:i,...d})=>{const{view:u,...p}=Cp,y=r??u,f=o?a:void 0,w=!!e,g=!!d.disabled;let x=y!=null&&y.startsWith("link")?s.jsx(bi,{...p,...d,view:Rp(y),text:f,$hasDropdown:w,$showLabel:o,$buttonStyles:i}):s.jsx(bi,{...p,...d,view:y,text:f,$hasDropdown:w,$showLabel:o,$buttonStyles:i});return e&&!g&&(x=s.jsx(Et,{...e,children:x})),s.jsxs(s.Fragment,{children:[x,!t&&s.jsx(Rt,{orientation:"vertical",length:"16px"})]})};try{Rt.displayName="StyledDivider",Rt.__docgenInfo={description:"",displayName:"StyledDivider",props:{}}}catch{}try{ut.displayName="ControlBlockButton",ut.__docgenInfo={description:"",displayName:"ControlBlockButton",props:{view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"any"}},dropdown:{defaultValue:null,description:"",name:"dropdown",required:!1,type:{name:"any"}},isTargetAction:{defaultValue:null,description:"",name:"isTargetAction",required:!1,type:{name:"boolean"}},isLastButtonInnArray:{defaultValue:{value:"true"},description:"",name:"isLastButtonInnArray",required:!1,type:{name:"boolean"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},buttonStyles:{defaultValue:null,description:"",name:"buttonStyles",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}const Go=({iconsLength:e,index:t,...n})=>{if("CustomIconRender"in n){const{CustomIconRender:u}=n;return s.jsx("div",{style:{width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(u,{},n.value)})}const{Icon:r,onClick:o,dividerLeft:a,modal:l,...i}=n,d=e-1===t;return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx(Ge,{text:"label"in i?i.label:"",animated:!0,target:s.jsx(fs,{onClick:o,className:n.className,...tr(n),style:{width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(r,{color:"inherit"})})})}),a&&!d&&s.jsx(hs,{orientation:"vertical",length:"16px",style:{paddingLeft:"1px"}}),l]})};try{Go.displayName="FeatureIconBtn",Go.__docgenInfo={description:"",displayName:"FeatureIconBtn",props:{}}}catch{}const br=({icons:e,featureItems:t})=>s.jsxs(Y,{$css:"display: flex; flex-direction: row-reverse;",children:[e.map((n,r)=>s.jsx(Go,{...n,iconsLength:e.length,index:r},n.value)),!!t.length&&s.jsx(s.Fragment,{children:t.map(n=>"CustomIconRender"in n||!(n!=null&&n.modal)?null:n==null?void 0:n.modal)})]});try{br.displayName="RightSide",br.__docgenInfo={description:"",displayName:"RightSide",props:{icons:{defaultValue:null,description:"",name:"icons",required:!0,type:{name:"any[]"}},featureItems:{defaultValue:null,description:"",name:"featureItems",required:!0,type:{name:"any[]"}}}}}catch{}const Ts=B(Y)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${Ve}px;
  max-height: ${Ve}px;
  padding-inline: ${xi.paddingInline}px;

  border: 1px solid;
  border-bottom: ${({$collapsedTable:e})=>e?"1px solid":"none"};
  border-radius: ${({$borderTopRounded:e,$collapsedTable:t})=>{const n=e?we:0;return P`
      ${n}px
      ${n}px 
      ${t?we:0}px 
      ${t?we:0}px
    `}};
  transition: all ${at}s ease;
  ${({$activeView:e})=>P({...e==="rows"&&{backgroundColor:z.white,borderColor:z.border},...e==="cards"&&{borderColor:"transparent"}})}

  overflow-y: hidden;

  ${({$isVisibleSearching:e,$calculatedSearchQuery:t})=>e&&P`
      justify-content: unset;

      & .${dt.searchControlBlock} {
        margin-left: 6px;
        ${()=>{const{font:n,indent:r,letterSpacing:o}=xi.searching,l=da(t||"",n,o);if(!t||t.length===0)return P`
              width: 100%;
              min-width: 250px;
            `;const i=r;return P`
            width: min(calc(${l+25}px + ${i}px), 100%);
            min-width: 40px;
          `}}
      }

      & .${dt.rightControlBlock} {
        margin-left: auto;
      }
    `}
`,Gl=B(Y).attrs({className:dt.leftControlBlock})`
  display: flex;
`,fe={BUTTON_WITH_LABEL:100,BUTTON_ICON_ONLY:40,RIGHT_SIDE_INNER:{BUTTON_WITH_LABEL:100,BUTTON_ICON_ONLY:60},SEARCH_INLINE:266,SEARCH_COLLAPSED:0,FEATURE_ICON:40,FEATURE_EDITING:{EDIT_MODE_ENABLED:155,EDIT_MODE_DISABLED:168,ICON:60},SELECTING:{SELECTING_ROW:122,SELECTING_ROW_COUNTER:45,SELECTING_ICON:41},GROUPING:{ICON_WITH_COUNTER:74,ICON_WITHOUT_COUNTER:56,GROUPING_ROW:157,GROUPING_ROW_WITH_COUNTER:173},IS_LEFT_SIDE_INNER_INSIDE_DROPDOWN:124,COLLAPSING_LABEL:200},vp=10,Si=new WeakMap,Ip=(e,t,n)=>{const r=h.useRef(e);h.useEffect(()=>{r.current=e},[e]);const[o,a]=h.useState(e),l=h.useRef({cache:new Map});h.useEffect(()=>{if(n){let c=Si.get(n);c||(c={cache:new Map},Si.set(n,c)),l.current=c}else l.current={cache:new Map}},[n]),h.useEffect(()=>{n&&l.current&&l.current.cache.clear()},[t,n]);const i=h.useCallback(()=>JSON.stringify({state:r.current,measuredWidths:t}),[t]),d=h.useCallback(c=>{const m=i(),b=l.current.cache.get(m);if(!b)return null;const S=b.ranges.find(_=>c>=_.min&&c<=_.max);return S?S.state:null},[i]),u=h.useCallback((c,m,b)=>{const S=i();let _=l.current.cache.get(S);_||(_={originalState:Dr?structuredClone(r.current):JSON.parse(JSON.stringify(r.current)),ranges:[]},l.current.cache.set(S,_));const I={min:b,max:c,state:Dr?structuredClone(m):JSON.parse(JSON.stringify(m)),stateWidth:b};_.ranges.some(E=>I.min>=E.min&&I.max<=E.max)||(_.ranges.push(I),_.ranges.sort((E,v)=>E.min-v.min))},[i]),p=h.useCallback(c=>{var b;let m=0;return c.leftSide.collapsingBlock.isActive&&(m+=((b=t==null?void 0:t.collapseBlock)==null?void 0:b[0])??fe.COLLAPSING_LABEL),c.leftSide.selectingRowFeature.isActive&&(m+=c.leftSide.selectingRowFeature.isLabelVisible?fe.SELECTING.SELECTING_ROW:fe.SELECTING.SELECTING_ICON,c.leftSide.selectingRowFeature.isCounterVisible&&(m+=fe.SELECTING.SELECTING_ROW_COUNTER)),c.leftSide.editRowFeature.isActive&&(c.leftSide.editRowFeature.isLabelVisible?c.leftSide.editRowFeature.editModeEnabled?m+=fe.FEATURE_EDITING.EDIT_MODE_ENABLED:m+=fe.FEATURE_EDITING.EDIT_MODE_DISABLED:m+=fe.FEATURE_EDITING.ICON),c.leftSide.isLeftSideInnerInsideDropdown?m+=fe.IS_LEFT_SIDE_INNER_INSIDE_DROPDOWN:c.leftSide.leftSideInner.forEach((S,_)=>{var R;const I=((R=t==null?void 0:t.leftSideInner)==null?void 0:R[_])??fe.BUTTON_WITH_LABEL;m+=S.isLabelVisible?I:fe.BUTTON_ICON_ONLY}),m},[t==null?void 0:t.collapseBlock,t==null?void 0:t.leftSideInner]),y=h.useCallback(c=>{let m=0;return c.rightSide.rightSideInner.forEach((b,S)=>{var I;const _=((I=t==null?void 0:t.rightSideInner)==null?void 0:I[S])??fe.RIGHT_SIDE_INNER.BUTTON_WITH_LABEL;m+=b.isLabelVisible||b.isTargetAction?_:fe.RIGHT_SIDE_INNER.BUTTON_ICON_ONLY}),m+=c.rightSide.customFeatures.filter(b=>!b.isMovedToRightSidebar).length*fe.FEATURE_ICON,c.rightSide.groupingRowsFeature.isActive&&(c.rightSide.groupingRowsFeature.isVisibleLabel?c.rightSide.groupingRowsFeature.isCounterVisible?m+=fe.GROUPING.GROUPING_ROW_WITH_COUNTER:m+=fe.GROUPING.GROUPING_ROW:c.rightSide.groupingRowsFeature.isCounterVisible?m+=fe.GROUPING.ICON_WITH_COUNTER:m+=fe.GROUPING.ICON_WITHOUT_COUNTER),m},[t==null?void 0:t.rightSideInner]),f=h.useCallback(c=>{const m=p(c),b=y(c);let S=0;return c.middle.searchingFeature.isActive&&(S=c.middle.searchingFeature.searchPosition==="inline"?fe.SEARCH_INLINE:fe.SEARCH_COLLAPSED),m+S+b+vp},[p,y]),w=h.useMemo(()=>({compressionLevels:[{priority:0,target:"right",action:{type:"remove-label",target:"groupingRowFeature",strategy:"one"},condition:c=>c.rightSide.groupingRowsFeature.isActive&&c.rightSide.groupingRowsFeature.isVisibleLabel},{priority:1,target:"right",action:{type:"remove-label",target:"action-buttons",strategy:"all"},condition:c=>c.rightSide.rightSideInner.some(b=>!b.isTargetAction&&b.isLabelVisible)},{priority:2,target:"right",action:{type:"hide-custom-features",strategy:"all"},condition:c=>c.rightSide.customFeatures.some(m=>!m.isMandatory&&!m.isMovedToRightSidebar)},{priority:3,target:"left",action:{type:"remove-label",target:"editRowFeature"},condition:c=>c.leftSide.editRowFeature.isActive&&c.leftSide.editRowFeature.isLabelVisible},{priority:4,target:"center",action:{type:"move-search-down"},condition:c=>c.middle.searchingFeature.searchPosition==="inline"},{priority:6,target:"left",action:{type:"remove-label",target:"selectingRowFeature"},condition:c=>c.leftSide.selectingRowFeature.isActive&&c.leftSide.selectingRowFeature.isLabelVisible},{priority:6,target:"left",action:{type:"remove-counter",target:"select"},condition:c=>c.leftSide.selectingRowFeature.isActive&&c.leftSide.selectingRowFeature.isCounterVisible},{priority:7,target:"right",action:{type:"hide-right-side-features"},condition:c=>c.rightSide.groupingRowsFeature.isActive&&c.rightSide.rightSideInner.some(m=>!m.isTargetAction)||(c.rightSide.customFeatures??[]).some(m=>m.canBeCompressedInToolsMenu&&m.isMandatory)&&c.rightSide.groupingRowsFeature.isActive||(c.rightSide.customFeatures??[]).some(m=>m.canBeCompressedInToolsMenu&&m.isMandatory)&&c.rightSide.rightSideInner.some(m=>!m.isTargetAction)||(c.rightSide.rightSideInner??[]).filter(m=>!m.isTargetAction).length>=2||(c.rightSide.customFeatures??[]).filter(m=>m.canBeCompressedInToolsMenu&&m.isMandatory).length>=2}]}),[e.rightSide.rightSideInner.length,e.rightSide.customFeatures.length]),g=h.useCallback((c,m,b)=>{const S={...c},_=I=>{if(I.type==="remove-label")if(I.strategy==="one"){let R=-1;if(b==="right"&&S.rightSide.rightSideInner.length>0){if(S.rightSide.rightSideInner.forEach((E,v)=>{E&&!E.isTargetAction&&E.isLabelVisible&&(R=v)}),R!==-1){const E=S.rightSide.rightSideInner[R];E&&(E.isLabelVisible=!1)}}else if(b==="left"&&S.leftSide.leftSideInner.length>0&&(S.leftSide.leftSideInner.forEach((E,v)=>{E&&!E.isTargetAction&&E.isLabelVisible&&(R=v)}),R!==-1)){const E=S.leftSide.leftSideInner[R];E&&(E.isLabelVisible=!1)}}else(I.strategy==="all"||I.strategy===void 0)&&(b==="right"&&S.rightSide.rightSideInner.length>0?S.rightSide.rightSideInner=S.rightSide.rightSideInner.map(R=>R&&!R.isTargetAction?{...R,isLabelVisible:!1}:R):S.leftSide.leftSideInner=S.leftSide.leftSideInner.map(R=>R&&!R.isTargetAction?{...R,isLabelVisible:!1}:R))};switch(m.type){case"remove-label":{switch(m.target){case"action-buttons":_(m);break;case"editRowFeature":S.leftSide.editRowFeature&&(S.leftSide.editRowFeature.isLabelVisible=!1);break;case"groupingRowFeature":S.rightSide.groupingRowsFeature&&(S.rightSide.groupingRowsFeature.isVisibleLabel=!1);break;case"selectingRowFeature":S.leftSide.selectingRowFeature.isActive&&(S.leftSide.selectingRowFeature.isLabelVisible=!1);break}break}case"hide-custom-features":{if(S.rightSide.customFeatures.filter(R=>!R.isMandatory&&!R.isMovedToRightSidebar).length===0)break;if(m.strategy==="all")S.rightSide.customFeatures=S.rightSide.customFeatures.map(R=>({...R,isMovedToRightSidebar:R.isMandatory?R.isMovedToRightSidebar:!0}));else{const R=S.rightSide.customFeatures.findIndex(E=>!E.isMandatory&&!E.isMovedToRightSidebar);R!==-1&&(S.rightSide.customFeatures=S.rightSide.customFeatures.map((E,v)=>v===R?{...E,isMovedToRightSidebar:!0}:E))}break}case"move-search-down":{S.middle.searchingFeature.searchPosition="below";break}case"remove-counter":{m.target==="select"&&(S.leftSide.selectingRowFeature.isCounterVisible=!1);break}case"hide-right-side-features":{S.rightSide.isRightSideInsideDropdown=!0;break}}return S},[]),x=h.useCallback(c=>{const m=d(c);if(m){a(m);return}a(()=>{let b=Dr?structuredClone(r.current):JSON.parse(JSON.stringify(r.current)),S=f(b);if(S<=c)return u(c,b,S),b;const _=[...w.compressionLevels].sort((R,E)=>R.priority-E.priority);let I=!1;return _.some(R=>{if(I)return!0;if(R.condition&&!R.condition(b))return!1;const E=g(b,R.action,R.target),v=f(E);return v<S&&(b=E,S=v,u(S,b,S),S<=c&&(I=!0)),I}),u(c,b,S),b})},[u,g,f,w.compressionLevels,d]),C=h.useCallback(()=>{l.current.cache.clear(),a(r.current)},[]);return{compressedState:o,compress:x,calculateCurrentWidth:f,resetCompression:C,maxLevel:w.compressionLevels.length}},Ep=({visibleRightButtons:e,featureRightButtons:t})=>e.length>0&&t.length===0?[e.length-1]:e.length===0&&t.length>0?[t.length-1]:e.length>0&&t.length>0?[e.length+t.length-1]:[],Wo=({leftSideInner:e,rightSideInner:t,isHaveControlBlock:n,activeView:r,fullScreened:o,editModeEnabled:a,featuresObj:{isActivated:l,icons:i,featureItems:d,featureRightButtons:u,featureLeftButtons:p,featureSearching:{isActiveSearching:y,showSearchBlock:f,searchQueryLocalValue:w,placeholderSearchBlock:g}},$borderTopRounded:x,setCompressionVisibility:C,controlBlockLeftSideDropdownProps:c,controlBlockRightSideDropdownProps:m,collapseButtonPlacement:b="inside"})=>{var le;const S=ol(),{enableCollapse:_,isCollapsed:I}=Mt(),R=h.useRef(null),[E,v]=h.useState({}),A=h.useRef({}),T=h.useRef({}),V=h.useRef({}),$=h.useRef({}),H=h.useMemo(()=>({leftSide:{collapsingBlock:{isActive:_&&b==="inside"},selectingRowFeature:{isActive:!1,isLabelVisible:!1,isCounterVisible:!1},editRowFeature:{isActive:l.editingMode,isLabelVisible:!0,editModeEnabled:a},leftSideInner:[...e??[]].map(D=>({isLabelVisible:!0,isTargetAction:D.isTargetAction||D.view==="linkAccent"||!1})),isLeftSideInnerInsideDropdown:(e??[]).length>=2},middle:{searchingFeature:{isActive:y&&f,searchPosition:"inline"}},rightSide:{rightSideInner:[...t??[]].map(D=>({isLabelVisible:!0,isTargetAction:D.isTargetAction||D.view==="linkAccent"||!1})),customFeatures:i.map(D=>({isMovedToRightSidebar:!1,isMandatory:D.mandatory||!1,canBeCompressedInToolsMenu:D.canBeCompressedInToolsMenu||!1})),groupingRowsFeature:{isActive:l.rowsGrouping,isVisibleLabel:!0,isCounterVisible:!0},isRightSideInsideDropdown:!1}}),[_,l.editingMode,l.rowsGrouping,a,e,y,f,t,i,b]);h.useLayoutEffect(()=>{if(Object.keys(E).length>0)return;const D={},M=[];Object.entries(A.current).forEach(([oe,ie])=>{if(!ie)return;const ye=Number(oe);M[ye]=ie.getBoundingClientRect().width}),M.length>0&&(D.rightSideInner=M);const N=[];Object.entries(T.current).forEach(([oe,ie])=>{if(!ie)return;const ye=Number(oe);N[ye]=ie.getBoundingClientRect().width}),N.length>0&&(D.leftSideInner=N);const J=[];Object.entries($.current).forEach(([oe,ie])=>{if(!ie)return;const ye=Number(oe);J[ye]=ie.getBoundingClientRect().width}),J.length>0&&(D.collapseBlock=J),Object.keys(D).length>0&&v(D)},[t==null?void 0:t.length,e==null?void 0:e.length,E,o]);const{compressedState:W,compress:q}=Ip(H,E,(le=S==null?void 0:S.current)==null?void 0:le.element),K=h.useCallback(D=>{try{const M=D[0];if(M){const{width:N}=M.contentRect;N&&typeof N=="number"?q(N):console.warn("Cannot get valid width for compression")}}catch(M){console.error("ResizeObserver error:",M),R.current&&q(R.current.clientWidth)}},[q]),se=h.useMemo(()=>ca(K,100),[K]);Mr(se),h.useEffect(()=>{if(R.current){const D=R.current.clientWidth;D&&typeof D=="number"&&q(D)}},[q]),h.useEffect(()=>{C(W)},[W,C]);const O=h.useCallback((D,M,N)=>{switch(N){case"rightSideInner":A.current[M]=D;break;case"leftSideInner":T.current[M]=D;break;case"customFeatures":V.current[M]=D;break;case"collapsingBlock":$.current[M]=D;break}},[]),{isRightSideInsideDropdown:k}=W.rightSide,G=(e??[]).filter((D,M)=>{var N;return((N=W.leftSide.leftSideInner[M])==null?void 0:N.isLabelVisible)!==!1}),Q=t??[],Z=i.filter((D,M)=>{var N;return!((N=W.rightSide.customFeatures[M])!=null&&N.isMovedToRightSidebar)}),U=k?[...Z.filter(D=>!D.canBeCompressedInToolsMenu)]:[...Z],ee=W.middle.searchingFeature.searchPosition==="inline",j=!ee&&y&&f,F=()=>G.length>=2?s.jsx(xr,{buttons:G,dropdownProps:c}):G.map((D,M)=>{var N,J;return s.jsx(bt.Fragment,{children:s.jsx("div",{ref:oe=>O(oe,M,"leftSideInner"),children:s.jsx(ut,{...D,index:M,showLabel:((J=(N=W.leftSide.leftSideInner)==null?void 0:N[M])==null?void 0:J.isLabelVisible)??!0})})},D.key??`${D.text}${M}`)}),X=({onlyTargetActions:D=!1}={})=>Q.filter(M=>D?M.isTargetAction||M.view==="linkAccent":M).map((M,N,J)=>{var ie;const oe=N===J.length-1&&u.length===0;return s.jsxs(bt.Fragment,{children:[s.jsx("div",{ref:ye=>O(ye,N,"rightSideInner"),children:s.jsx(ut,{...M,index:N,showLabel:((ie=W.rightSide.rightSideInner[N])==null?void 0:ie.isLabelVisible)??!0})}),oe&&s.jsx(Rt,{orientation:"vertical",length:"16px"})]},M.key??`${M.text}${N}`)});return s.jsxs(ds,{isOpen:n,sizeOnOpen:Ve+(j?Ve:0),unMountOnClose:!0,children:[s.jsxs(Ts,{ref:R,$activeView:r,$borderTopRounded:b==="above"?!1:x,$isVisibleSearching:y&&f&&ee,$calculatedSearchQuery:w,$placeholderSearchBlock:g,$collapsedTable:I,children:[s.jsxs(Vt,{alignment:"center",style:{flexWrap:"nowrap"},children:[b==="inside"&&s.jsx(Ht,{ref:D=>O(D,0,"collapsingBlock")}),s.jsxs(Gl,{children:[p.map((D,M,N)=>s.jsx(bt.Fragment,{children:s.jsx(ut,{...D,index:M,isLastButtonInnArray:M===N.length-1&&G.length===0,showLabel:W.leftSide.editRowFeature.isLabelVisible??!0})},D.key??`${D.text}${M}`)),F()]})]}),s.jsx("div",{className:dt.searchControlBlock,children:y&&W.middle.searchingFeature.searchPosition==="inline"&&s.jsx(sn,{isVisible:f})}),s.jsxs(Y,{$css:"display: flex;",className:dt.rightControlBlock,children:[k?s.jsxs(s.Fragment,{children:[X({onlyTargetActions:!0}),s.jsx(xr,{buttons:Q.concat(u.filter(D=>!D.isTargetAction)).concat(Z.reverse().filter(D=>D.canBeCompressedInToolsMenu)),dividerIndexes:Z.some(D=>D.canBeCompressedInToolsMenu)?Ep({visibleRightButtons:Q,featureRightButtons:u}):[],triggerSlot:s.jsx(Cr,{size:"s",contentRight:s.jsx(ka,{size:"s"}),style:{paddingInline:"5px 8px"}}),dropdownProps:m}),U.length>0&&s.jsx(Rt,{orientation:"vertical",length:"16px"})]}):s.jsxs(s.Fragment,{children:[X(),u.map((D,M,N)=>{const J=M===N.length-1&&Z.length>0;return s.jsxs(bt.Fragment,{children:[s.jsx(ut,{...D,index:M,showLabel:W.rightSide.groupingRowsFeature.isVisibleLabel??!0},D.key??`${D.text}${M}`),J&&s.jsx(Rt,{orientation:"vertical",length:"16px"})]},D.key??`${D.text}${M}`)})]}),s.jsx(br,{icons:U,featureItems:d})]})]}),j&&s.jsx(qo,{$activeView:r,$isCollapsed:I,children:s.jsx(sn,{isVisible:f,$isFullHeight:!0})})]})};try{Wo.displayName="ControlBlock",Wo.__docgenInfo={description:"",displayName:"ControlBlock",props:{leftSideInner:{defaultValue:null,description:"",name:"leftSideInner",required:!0,type:{name:"ControlBlockButtonProps[]"}},rightSideInner:{defaultValue:null,description:"",name:"rightSideInner",required:!0,type:{name:"ControlBlockButtonProps[]"}},editModeEnabled:{defaultValue:null,description:"",name:"editModeEnabled",required:!0,type:{name:"boolean"}},fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!0,type:{name:"boolean"}},isHaveControlBlock:{defaultValue:null,description:"",name:"isHaveControlBlock",required:!0,type:{name:"boolean"}},activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"ActiveViewModsType"}},featuresObj:{defaultValue:null,description:"",name:"featuresObj",required:!0,type:{name:"{ isActivated: ActivatedFeatures; icons: any[]; featureItems: any[]; all: any[]; featureRightButtons: ControlBlockButtonProps[]; featureLeftButtons: ControlBlockButtonProps[]; featureSearching: { ...; }; }"}},$borderTopRounded:{defaultValue:null,description:"",name:"$borderTopRounded",required:!0,type:{name:"boolean"}},setCompressionVisibility:{defaultValue:null,description:"",name:"setCompressionVisibility",required:!0,type:{name:"React.Dispatch<React.SetStateAction<ToolsMenuState>>"}},controlBlockLeftSideDropdownProps:{defaultValue:null,description:"",name:"controlBlockLeftSideDropdownProps",required:!1,type:{name:"TableDropdownConfigProps"}},controlBlockRightSideDropdownProps:{defaultValue:null,description:"",name:"controlBlockRightSideDropdownProps",required:!1,type:{name:"TableDropdownConfigProps"}},collapseButtonPlacement:{defaultValue:{value:"inside"},description:"",name:"collapseButtonPlacement",required:!1,type:{name:"enum",value:[{value:'"inside"'},{value:'"above"'}]}}}}}catch{}const Tp=Object.freeze(Object.defineProperty({__proto__:null,ControlBlock:Wo},Symbol.toStringTag,{value:"Module"})),zo=h.lazy(()=>uu(()=>Promise.resolve().then(()=>Tp),void 0).then(e=>({default:e.ControlBlock})));try{zo.displayName="ControlBlockLazy",zo.__docgenInfo={description:"",displayName:"ControlBlockLazy",props:{leftSideInner:{defaultValue:null,description:"",name:"leftSideInner",required:!0,type:{name:"ControlBlockButtonProps[]"}},rightSideInner:{defaultValue:null,description:"",name:"rightSideInner",required:!0,type:{name:"ControlBlockButtonProps[]"}},editModeEnabled:{defaultValue:null,description:"",name:"editModeEnabled",required:!0,type:{name:"boolean"}},fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!0,type:{name:"boolean"}},isHaveControlBlock:{defaultValue:null,description:"",name:"isHaveControlBlock",required:!0,type:{name:"boolean"}},activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"ActiveViewModsType"}},featuresObj:{defaultValue:null,description:"",name:"featuresObj",required:!0,type:{name:"{ isActivated: ActivatedFeatures; icons: any[]; featureItems: any[]; all: any[]; featureRightButtons: ControlBlockButtonProps[]; featureLeftButtons: ControlBlockButtonProps[]; featureSearching: { ...; }; }"}},$borderTopRounded:{defaultValue:null,description:"",name:"$borderTopRounded",required:!0,type:{name:"boolean"}},setCompressionVisibility:{defaultValue:null,description:"",name:"setCompressionVisibility",required:!0,type:{name:"React.Dispatch<React.SetStateAction<ToolsMenuState>>"}},controlBlockLeftSideDropdownProps:{defaultValue:null,description:"",name:"controlBlockLeftSideDropdownProps",required:!1,type:{name:"TableDropdownConfigProps"}},controlBlockRightSideDropdownProps:{defaultValue:null,description:"",name:"controlBlockRightSideDropdownProps",required:!1,type:{name:"TableDropdownConfigProps"}},collapseButtonPlacement:{defaultValue:null,description:"",name:"collapseButtonPlacement",required:!1,type:{name:"enum",value:[{value:'"inside"'},{value:'"above"'}]}}}}}catch{}const Ko=({leftSideInner:e,rightSideInner:t,isHaveControlBlock:n,activeView:r,featuresObj:{icons:o,featureItems:a,featureRightButtons:l,featureLeftButtons:i,featureSearching:{isActiveSearching:d,showSearchBlock:u,searchQueryLocalValue:p,placeholderSearchBlock:y}},$borderTopRounded:f,collapseButtonPlacement:w="inside"})=>{const{isCollapsed:g}=Mt(),x=[...t??[],...l],C=[...i,...e??[]];return s.jsx(ds,{isOpen:n,sizeOnOpen:Ve,unMountOnClose:!0,children:s.jsxs(Ts,{$activeView:r,$borderTopRounded:w==="above"?!1:f,$isVisibleSearching:d&&u,$calculatedSearchQuery:p,$placeholderSearchBlock:y,$collapsedTable:g,children:[s.jsxs(Vt,{alignment:"center",style:{flexWrap:"nowrap"},children:[w==="inside"&&s.jsx(Ht,{}),s.jsx(Gl,{children:C==null?void 0:C.map((c,m,b)=>s.jsx(ut,{...c,index:m,isLastButtonInnArray:m===b.length-1,showLabel:!0},c.key??`${c.text}${m}`??m))})]}),d&&s.jsx("div",{className:dt.searchControlBlock,children:s.jsx(sn,{isVisible:u})}),s.jsxs(Y,{$css:"display: flex;",className:dt.rightControlBlock,children:[!!x.length&&s.jsxs(s.Fragment,{children:[x.map((c,m,b)=>s.jsx(ut,{...c,index:m,isLastButtonInnArray:m===b.length-1,showLabel:!0},c.key??`${c==null?void 0:c.text} ${m}`)),!!o.length&&s.jsx(Rt,{orientation:"vertical",length:"16px"})]}),s.jsx(br,{icons:o,featureItems:a})]})]})})};try{Ko.displayName="ControlBlockWithoutResize",Ko.__docgenInfo={description:"",displayName:"ControlBlockWithoutResize",props:{leftSideInner:{defaultValue:null,description:"",name:"leftSideInner",required:!0,type:{name:"ControlBlockButtonProps[]"}},rightSideInner:{defaultValue:null,description:"",name:"rightSideInner",required:!0,type:{name:"ControlBlockButtonProps[]"}},isHaveControlBlock:{defaultValue:null,description:"",name:"isHaveControlBlock",required:!0,type:{name:"boolean"}},activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"ActiveViewModsType"}},featuresObj:{defaultValue:null,description:"",name:"featuresObj",required:!0,type:{name:"{ icons: any[]; featureItems: any[]; all: any[]; featureRightButtons: ControlBlockButtonProps[]; featureLeftButtons: ControlBlockButtonProps[]; featureSearching: { ...; }; }"}},$borderTopRounded:{defaultValue:null,description:"",name:"$borderTopRounded",required:!0,type:{name:"boolean"}},collapseButtonPlacement:{defaultValue:{value:"inside"},description:"",name:"collapseButtonPlacement",required:!1,type:{name:"enum",value:[{value:'"inside"'},{value:'"above"'}]}}}}}catch{}function Uo({columnConfig:e,tableConfigSorting:t,tableConfigFiltering:n,tabIndex:r,columnIsPinned:o,reorderInHeaderIsActive:a,subRowIsActiveAndColumnWithArrow:l,...i}){var x,C;const d=We(),u=(x=d.sortState)==null?void 0:x.find(c=>c.columnKey===i.column.key),p=n&&e.filtering,y=t&&e.sortingType,f=!((C=e.subRow)!=null&&C.hideHeaderExpandAllArrow),w=l&&f,g=(u==null?void 0:u.columnKey)===i.column.key||d.sortIsVisible;return s.jsxs(Y,{className:L.headerCellContainer,children:[(w||a||o)&&s.jsxs(Y,{className:L.headerCellLeftIcons,children:[w&&s.jsx(Xc,{}),a&&s.jsx(Y,{$css:"display: inline;",children:s.jsx(Ge,{animated:!0,placement:"top",target:s.jsx(Di,{color:Ir,size:"xs"}),text:"Перетащить колонку"})}),o&&s.jsx(Y,{$css:"display: inline;",children:s.jsx(Ge,{animated:!0,placement:"top",target:s.jsx(Oi,{color:he,size:"xs"}),text:"Колонка закреплена"})})]}),typeof i.column.name=="string"?s.jsx(bs,{tooltipText:i.column.name,className:L.headerCellTextContent,variant:"BodyXS",tooltipProps:{placement:"top"},children:i.column.name}):s.jsx(Bi,{className:L.headerCellTextContent,children:i.column.name}),(p||y)&&s.jsxs(Y,{className:L.headerCellRightIcons,children:[p&&s.jsx(Y,{children:s.jsx(xo,{columnConfig:e,tabIndex:r})}),y&&s.jsx(Y,{className:`${L.headerCellFilterSorting} ${g?L.headerCellSortingIsActive:""} ${L.headerCellSortingIsAvailable}`,children:s.jsx(No,{columnKey:i.column.key,columnSorted:u,setSortState:d.setSortState})})]})]})}try{Uo.displayName="FilterSortHeader",Uo.__docgenInfo={description:"",displayName:"FilterSortHeader",props:{columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"ColumnConfig<RowType, SummaryRowType>"}},tableConfigSorting:{defaultValue:null,description:"",name:"tableConfigSorting",required:!0,type:{name:"boolean"}},tableConfigFiltering:{defaultValue:null,description:"",name:"tableConfigFiltering",required:!0,type:{name:"boolean"}},columnIsPinned:{defaultValue:null,description:"",name:"columnIsPinned",required:!0,type:{name:"boolean"}},reorderInHeaderIsActive:{defaultValue:null,description:"",name:"reorderInHeaderIsActive",required:!0,type:{name:"boolean"}},subRowIsActiveAndColumnWithArrow:{defaultValue:null,description:"",name:"subRowIsActiveAndColumnWithArrow",required:!0,type:{name:"boolean"}}}}}catch{}const Ap=B.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,kp=B(Cr)`
  margin-left: 12px;
`,Xo=({buttons:e,isHaveSomeFeatureInSidebar:t=!1,collapsedDropdownProps:n,bottom:r=24,forceShow:o=!1,size:a="s"})=>{const{selectedRows:l,selectingRowConfig:i}=vs(),{selectingRowsIsActive:d}=i,u=un(),p=Ss(),y=h.useRef(null),f=(l==null?void 0:l.size)??0,w=h.useMemo(()=>({isOpen:p.isOpen,width:p.width,togglePanelWidth:44}),[p.isOpen,p.width]),g=h.useRef(m=>{}),x=d&&f>0,C=h.useMemo(()=>x?s.jsx("div",{ref:y,children:s.jsx(ur,{isHaveRightDivider:!1,hideCheckbox:!0,onChangeHandlerRef:g})}):null,[g,x]),c=h.useMemo(()=>x?s.jsx(Ap,{children:s.jsx(kp,{text:"Сбросить всё",size:a==="xs"?"xxs":"s",onClick:()=>g.current({clearButtonClicked:!0,checkedAll:!0})})}):null,[a,g,x]);return!u||!o&&(f===0||!d)?null:s.jsx(hu,{containerRef:u,leftSection:C,middleSection:c,buttons:e,sidebarConfig:w,isHaveSomeFeatureInSidebar:t,collapsedDropdownProps:n,selectedCount:f,useTableDropdown:!0,minPadding:24,bottom:r,size:a})};try{Xo.displayName="MassActionsInTable",Xo.__docgenInfo={description:`Компонент массовых действий для таблицы
Обертка над базовым MassActions с интеграцией контекстов таблицы`,displayName:"MassActionsInTable",props:{buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"MassActionsButtonProps[]"}},collapsedDropdownProps:{defaultValue:null,description:"",name:"collapsedDropdownProps",required:!1,type:{name:"TableDropdownConfigProps"}},isHaveSomeFeatureInSidebar:{defaultValue:{value:"false"},description:"",name:"isHaveSomeFeatureInSidebar",required:!1,type:{name:"boolean"}},bottom:{defaultValue:{value:"24"},description:"",name:"bottom",required:!1,type:{name:"number"}},forceShow:{defaultValue:{value:"false"},description:"",name:"forceShow",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"s"},description:"Размерная сетка панели внутри таблицы: `m`/`s` — обычный, `xs` — уменьшенный. Viewport-логика (1280) в таблице не используется.",name:"size",required:!1,type:{name:"MassActionsSize"}}}}}catch{}const Dp="/dais-ui/pr-preview/pr-137/assets/no-rows-image-DIn5rd_B.png",Op=B.div`
  grid-column: 1/-1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .img {
    margin-bottom: -4.8px;
    margin-left: -13.65px;
  }
  & .text {
    margin-top: -2px;
  }
`,Jo=({text:e})=>s.jsxs(Op,{children:[s.jsx(qa,{className:"img",src:Dp,width:"122px",height:"98px",alt:"Картинка для случая, когда в таблице нет данных"}),s.jsx(Ma,{className:"text",color:eu,children:e??"Нет данных по заданным параметрам"})]});try{Jo.displayName="NoRowsFallback",Jo.__docgenInfo={description:"",displayName:"NoRowsFallback",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}}}}}catch{}const Vp=[-5,-15],Yo=B.button`
  ${pa}
`,Qo=B.div`
  position: ${({$isFixed:e})=>e?"fixed":"absolute"};
  display: inline-block;
  left: ${({position:e})=>e.x}px;
  top: ${({position:e})=>e.y}px;

  ${({$zIndex:e})=>e!==void 0&&P`
      z-index: ${e};
    `}
`;try{Yo.displayName="HiddenTriggerButton",Yo.__docgenInfo={description:"",displayName:"HiddenTriggerButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{Qo.displayName="MenuContainer",Qo.__docgenInfo={description:"",displayName:"MenuContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"{ x: number; y: number; }"}},$isFixed:{defaultValue:null,description:"",name:"$isFixed",required:!1,type:{name:"boolean"}},$zIndex:{defaultValue:null,description:"",name:"$zIndex",required:!1,type:{name:"number"}},$isOpen:{defaultValue:null,description:"",name:"$isOpen",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const $p=()=>{const{isOpen:e,items:t,position:n,close:r,onItemSelect:o,offset:a,open:l,...i}=Zi(),d=h.useRef(null),u=h.useCallback(p=>{p==null||p.click()},[]);return!e||!n?null:t&&s.jsx(Qo,{position:n,ref:d,$isOpen:e,children:s.jsx(So,{items:t,portal:d,offset:a??Vp,onItemSelect:o,listWidth:void 0,closeOnOverlayClick:!1,isOpen:e,onClose:r,...i,children:s.jsx(Yo,{ref:u,type:"button"})},`${n.x}-${n.y}`)})},Np=e=>{const{active:t,showSubtitleDelay:n=1e4}=e,[r,o]=h.useState({showOverlay:!1,showSubtitle:!1,elapsedTime:0});return h.useEffect(()=>{if(!t){o({showOverlay:!1,showSubtitle:!1,elapsedTime:0});return}o({showOverlay:!0,showSubtitle:!1,elapsedTime:0});const a=Date.now(),l=setTimeout(()=>{o(u=>({...u,showSubtitle:!0}))},n),i=setInterval(()=>{o(u=>({...u,elapsedTime:Math.floor((Date.now()-a)/1e3)}))},1e3);return()=>{clearTimeout(l),clearInterval(i)}},[t,n]),r},Bp=()=>P(ru),Lp=()=>P(_r),jp=B.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 6px;
  ${()=>Bp()}
  text-align: center;
  color: ${()=>gs};
  opacity: 0;
  animation: ${cs} 0.3s ease-out forwards;
  animation-delay: 0.2s;
  transition: ${Gt};
`,Fp=B.h3`
  padding: 0;
  margin: 0;
  min-height: 20px;
  ${()=>Lp()}
  text-align: center;
  color: ${()=>he};
  opacity: 0;
  transform: translateY(-10px);
  transition: ${Gt};

  ${({$show:e})=>e&&P`
      opacity: 1;
      transform: translateY(0);
    `}
`,Pp=B.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${()=>tu};
  border: 1px solid red;
  border-color: ${()=>nu};
  background: ${()=>Rr};
  transition: ${Gt};
  animation: ${cs} 0.1s ease-out forwards;
`,Hp=B.div`
  margin-bottom: ${Hi};
  align-self: center;
  transition: ${Gt};
  animation: ${cs} 0.2s ease-out forwards;
  animation-delay: 0.1s;
`,Zo=({loadingOverlayConfig:e={},containerStyle:t})=>{const{active:n=!0,spinner:r=s.jsx(Ga,{view:"secondary",size:"l"}),title:o="Загрузка таблицы",subtitle:a="",showSubtitleDelay:l=1e4}=e,{showOverlay:i,showSubtitle:d}=Np({active:n,showSubtitleDelay:l});return i?s.jsxs(Pp,{style:t,children:[s.jsx(Hp,{children:r}),s.jsx(jp,{children:o}),s.jsx(Fp,{$show:d,children:d?a:""})]}):null};try{Zo.displayName="TableLoadingOverlay",Zo.__docgenInfo={description:"",displayName:"TableLoadingOverlay",props:{loadingOverlayConfig:{defaultValue:{value:"{}"},description:"",name:"loadingOverlayConfig",required:!1,type:{name:"{ active?: boolean; spinner?: ReactNode; title?: string; subtitle?: string; showSubtitleDelay?: number; }"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const qp=B.div(()=>({border:`1px solid ${z.border}`,borderTop:"none",borderBottomLeftRadius:`${we}px`,borderBottomRightRadius:`${we}px`,backgroundColor:z.white,padding:"4px"})),Mp=B(Wa)`
  ${({$hideQuickJump:e})=>e&&P`
      .pagination-actions.pagination-type-default.pagination-has-perpage-select {
        flex-direction: row;
      }
    `}
`,es=e=>{const{onChangePageValue:t,onChange:n,setPaginationHeight:r,size:o=Zr,responsiveSlots:a=!1,onResize:l,value:i,count:d,...u}=e??{},p=h.useRef(null),y=ol(),[f,w]=h.useState(void 0),[g,x]=h.useState(!0),C=a&&f===1,c=u.perPage,m=h.useMemo(()=>{if(!(!d||!c))return Math.ceil(d/c)},[d,c]),b=h.useCallback(()=>{var A;(A=y==null?void 0:y.current)==null||A.scrollToCell({rowIdx:0,idx:0})},[y]),S=h.useCallback((A,T)=>{n==null||n(A,T,b)},[n,b]),_=h.useCallback(A=>{t==null||t(A,b)},[t,b]),I=h.useCallback(()=>{i&&i>1&&(n?n(i-1,c,b):t&&t(i-1,b))},[i,c,n,t,b]),R=h.useCallback(()=>{i&&m&&i<m&&(n?n(i+1,c,b):t&&t(i+1,b))},[i,m,c,n,t,b]),E=h.useMemo(()=>C?s.jsx(Oe,{size:o,view:"clear",onClick:I,disabled:!i||i<=1,children:s.jsx(Da,{})}):void 0,[C,o,I,i]),v=h.useMemo(()=>C?s.jsx(Oe,{size:o,view:"clear",onClick:R,disabled:!i||!m||i>=m,children:s.jsx(Vi,{})}):void 0,[C,o,R,i,m]);return h.useEffect(()=>{if(!p.current||!r)return;const A=Ii(T=>{const V=T[0];if(V){const{contentRect:{height:$,width:H}}=V;r($),l==null||l(H);const[W,q]=od(o,H);a&&(w(()=>W),x(q))}});return A.observe(p.current),()=>{A.disconnect()}},[r,o,a]),s.jsx("div",{ref:p,children:s.jsx(qp,{children:s.jsx(Mp,{...nd,size:o,value:i,count:d,hasQuickJump:a?g:u.hasQuickJump,slots:a?f:u.slots,leftContent:E,rightContent:v,onChange:n?S:void 0,onChangePageValue:t?_:void 0,$hideQuickJump:a?!g:!1,...u})})})};try{es.displayName="TablePagination",es.__docgenInfo={description:"",displayName:"TablePagination",props:{onChangePageValue:{defaultValue:null,description:"",name:"onChangePageValue",required:!1,type:{name:"(page: number, scrollToTop: () => void) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newPage: number, perPage: number, scrollToTop: () => void) => void"}},responsiveSlots:{defaultValue:{value:"false"},description:"Нужно ли активировать умную адаптацию изменения количества слотов в зависимости от ширины блока пагинации и от size",name:"responsiveSlots",required:!1,type:{name:"boolean"}},onResize:{defaultValue:null,description:"Callback при ресайзе блока с пагинацией таблицы",name:"onResize",required:!1,type:{name:"(width: number) => void"}},setPaginationHeight:{defaultValue:null,description:"",name:"setPaginationHeight",required:!0,type:{name:"React.Dispatch<React.SetStateAction<number>>"}}}}}catch{}function Gp(e,t,n){return e===t}const ts=({containerProps:{viewProp:{activeView:e,view:t},controlBlock:n,containerId:r,sidebarBlock:o,refTableGlobalContainer:a,refTableContainer:l,$borderLeftTopRadiusRounded:i,$borderRightTopRadiusRounded:d,$borderLeftBottomRadiusRounded:u,$borderRightBottomRadiusRounded:p,$containerStyle:y,$columnsGroupingIsActive:f,$containerCss:w,$css:g,$fullScreened:x,fullScreenPortal:C,$tableAndSidebarContainerHeightStyle:c,$highlightActiveType:m,collapseButtonPlacement:b,collapseButtonAboveRightSlot:S,$borderTopRounded:_,isHaveSomeFeatureInSidebar:I},dataGridProps:{className:R,rowSize:E,refTable:v,onCellContextMenu:A,...T},pagination:V,setPaginationHeight:$,loadingOverlayConfig:H,containerStyle:W,massActionPanel:q})=>{const{openHeaderContextMenu:K,enableHeaderContextMenu:se,enableCellContextMenu:O,openCellContextMenu:k}=Zi(),G=Gp("cards",e),Q=!G,Z=x?L.tableContainerFullScreened:"",{isCollapsed:U,enableCollapse:ee}=Mt(),j=ma(),F=h.useMemo(()=>({maxHeight:0,opacity:0,overflow:"hidden"}),[]),X=s.jsx(Hd,{ref:a,id:r,className:`${L.tableContainer} ${Z} ${e}-view-container-all`,$activeView:e,$isHaveRowHeightAnimation:!0,$borderRightTopRadiusRounded:d,$borderLeftTopRadiusRounded:i,$borderLeftBottomRadiusRounded:u,$borderRightBottomRadiusRounded:p,$rowHeight:E,$fullScreened:x,$columnsGroupingIsActive:f,$containerCss:w,style:y,$css:g,$highlightActiveType:m,...se&&{onContextMenu:le=>{K(le)}},$isCollapsed:U,$isEnabledCollapse:ee,$activeTheme:j,children:H!=null&&H.active?s.jsx(Zo,{loadingOverlayConfig:H,containerStyle:W}):s.jsxs(s.Fragment,{children:[b==="above"&&s.jsx(Po,{activeView:e,$borderTopRounded:_,rightSlot:S}),s.jsx(Ho,{children:n}),G&&s.jsx(Y,{className:`${L.table} ${L.tableCardsViewContainer}`,style:{...T.style,...U&&F},children:t.typeCardsRender}),Q&&s.jsxs(Y,{className:L.tableSidebarLayout,style:{...c,...U&&F},children:[s.jsx("div",{className:L.tableSidebarTableContainer,ref:l,children:s.jsx(za,{ref:v,className:`${L.table}-light ${L.tableRowsViewContainer} ${R??""}`,rowHeight:ae[E].rowHeight,summaryRowHeight:ae[E].rowHeight,...T,style:{...T.style},...O&&{onCellContextMenu:(le,D)=>{k(le,D)}}})}),o,(q==null?void 0:q.show)!==!1&&s.jsx(Xo,{buttons:q==null?void 0:q.buttons,isHaveSomeFeatureInSidebar:I,collapsedDropdownProps:q==null?void 0:q.collapsedDropdownProps,bottom:q==null?void 0:q.bottom,forceShow:(q==null?void 0:q.show)===!0,size:q==null?void 0:q.size})]}),V&&s.jsx(es,{...V,setPaginationHeight:$}),s.jsx($p,{})]})});return x&&C?du.createPortal(X,C):X};try{ts.displayName="TableOrCardsUI",ts.__docgenInfo={description:"",displayName:"TableOrCardsUI",props:{containerProps:{defaultValue:null,description:"",name:"containerProps",required:!0,type:{name:"{ viewProp: { activeView: ActiveViewModsType; view: View; }; controlBlock: ReactNode; sidebarBlock: ReactNode; containerId: string; refTableGlobalContainer: React.MutableRefObject<...>; ... 16 more ...; isHaveSomeFeatureInSidebar: boolean; }"}},dataGridProps:{defaultValue:null,description:"",name:"dataGridProps",required:!0,type:{name:'{ rowSize: "big" | "small" | "medium"; refTable: Ref<DataGridHandle>; } & DataGridProps<RowType, SummRowType, K>'}},pagination:{defaultValue:null,description:"",name:"pagination",required:!0,type:{name:"PaginationProps"}},setPaginationHeight:{defaultValue:null,description:"",name:"setPaginationHeight",required:!0,type:{name:"React.Dispatch<React.SetStateAction<number>>"}},loadingOverlayConfig:{defaultValue:null,description:"",name:"loadingOverlayConfig",required:!1,type:{name:"{ active?: boolean; spinner?: ReactNode; title?: string; subtitle?: string; showSubtitleDelay?: number; }"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},massActionPanel:{defaultValue:null,description:"",name:"massActionPanel",required:!1,type:{name:"{ buttons: MassActionsButtonProps[]; collapsedDropdownProps?: TableDropdownConfigProps; bottom?: number; show?: boolean; size?: MassActionsSize; }"}}}}}catch{}const ns=({columnConfig:e,tableConfig:t,selectingRowsIsActive:n,isLoadingTable:r,pinnedCols:o,hiddenCols:a,reorderIsActive:l,reorderInHeaderIsActive:i,showRowInstruments:d,keyText:u,tableConfigKeyTextBoolean:p,colsWithKeyTextMap:y,editModeEnabled:f})=>{var A,T;const w=!!t.filtering,g=!!t.sorting,x=f,C=!!t.rowsGrouping,c=!!t.subRows,m=!!t.rowDetailPanel,b=(T=(A=t.rowsGrouping??{})==null?void 0:A.groupByState)==null?void 0:T[0],S=h.useMemo(()=>{var O;const V=no({rowsGroupingIsActiveInConfig:C,groupByArr:b??[],columnConfig:e,tableConfigGroupedColumnProps:(O=t.rowsGrouping)==null?void 0:O.groupedColumnProps,pinnedCols:o}),$=n?d?{...je,cellClass:`${(je==null?void 0:je.cellClass)??""} ${wt}`,headerCellClass:`${(je==null?void 0:je.headerCellClass)??""} ${wt}`,summaryCellClass:`${(je==null?void 0:je.summaryCellClass)??""} ${wt}`}:je:null,H=[...n?[$]:[],...d?[ac]:[],...V],W=p?dc(H,u):H,q=new Set(a),K=q.size?W.filter(k=>!q.has(k.key)):W,se=new Set(o);return K.map((k,G,Q)=>{var ye,pe;const Z=se.has(k.key),U=(ye=Q[0])==null?void 0:ye.key,ee=i&&!Ft(k.key)&&k.key!==et,j=c&&Cs((pe=k.subRow)==null?void 0:pe.isColumnWithArrow,u),F=!!k.filtering,X=!!k.sortingType,le=te=>{var Te,$e;if(ni(k))return!0;if(!x||r||m&&ct(te)||te!=null&&te[cn])return!1;const re=c,be=(Te=t==null?void 0:t.editing)==null?void 0:Te.rowEditable;if(!re)return Nr(k.editingCell,te,be);const{lvl:_e}=rr(te);return Nr(_e===0?k.editingCell:($e=k.subRow)==null?void 0:$e.editingCell,te,be)};let D;(()=>{if(k.key===Ee){D=k.renderHeaderCell;return}if(k.key===Tt){D=k.renderHeaderCell;return}if(k.renderHeaderCell){D=k.renderHeaderCell;return}if(!w&&!g&&!i&&!Z&&!j){D=k.renderHeaderCell;return}if(!k.filtering&&!k.sortingType&&!i&&!Z&&!j){D=k.renderHeaderCell;return}D=te=>s.jsx(Uo,{columnConfig:k,tableConfigSorting:g,tableConfigFiltering:w,columnIsPinned:Z,reorderInHeaderIsActive:ee,subRowIsActiveAndColumnWithArrow:j,...te})})();const M=te=>{const re=s.jsx(jo,{renderCellProps:te,column:k,tableConfigSubRows:t.subRows,tableConfigRowDetailPanel:t.rowDetailPanel,currIndex:G,indexZeroColKey:U,keyText:u,editModeEnabled:le(te.row)});return k.key===Ee?s.jsx(so,{...te,children:re}):re},N=(()=>{if(ni(k))return k.renderEditCell;if(!(!x||r))return te=>s.jsx(Fo,{renderEditCellProps:te,column:k,tableConfigSubRows:t.subRows,tableConfigRowDetailPanel:t.rowDetailPanel,currIndex:G,indexZeroColKey:U,keyText:u})})(),J=t.resizableColumn&&k.resizable,oe=m?Tu({indexZeroColKey:U,currIndex:G,arr:Q,columnColSpan:k.colSpan}):k.colSpan,ie=(()=>{if(!(!(k!=null&&k.cellClass)&&(!f||!k.editingCell)))return te=>{var tt,mt,At,ze,kt,nt,Ke,Ae,rt,Fe;let re="";const{lvl:be}=rr(te),_e=_t(te),Te=fp(k==null?void 0:k.cellClass,_e);if(Te&&(re+=` ${Te}`),!f)return re||void 0;le(te)&&(re+=` ${L.editableCell}`);const $e=(be===0?(mt=(tt=k.editingCell)==null?void 0:tt.editedSuccessfully)==null?void 0:mt.value(_e,be):(kt=(ze=(At=k.subRow)==null?void 0:At.editingCell)==null?void 0:ze.editedSuccessfully)==null?void 0:kt.value(_e,be))&&L.editedSuccessfullyCell;$e&&(re+=` ${$e}`);const pt=(be===0?(Ke=(nt=k.editingCell)==null?void 0:nt.error)==null?void 0:Ke.value(_e,be):(Fe=(rt=(Ae=k.subRow)==null?void 0:Ae.editingCell)==null?void 0:rt.error)==null?void 0:Fe.value(_e,be))&&L.editedWithErrorCell;return pt&&(re+=` ${pt}`),re||void 0}})();return{...k,renderHeaderCell:D,minWidth:k.minWidth??Qc({isHaveFiltering:F,isHaveSorting:X,columnIsPinned:Z,subRowIsActiveAndColumnWithArrow:j,reorderForColIsActive:ee}),renderCell:M,editable:le,renderEditCell:N,resizable:J,draggable:ee,cellClass:ie,...Z&&{frozen:!0},...oe&&{colSpan:oe}}})},[e,t.resizableColumn,n,r,c,x,w,g,m,C,i,b,o,a,d,u,p]),{reorderedColumns:_,onColumnsReorder:I,setColumnsOrder:R,columnsOrder:E,getDefaultColumnsOrder:v}=Kc({columns:S,reorderIsActive:l,tableConfigColumnsControl:t.columnsControl,columnConfig:e,selectingRowsIsActive:n,rowsGroupingIsActive:C,showRowInstruments:d,tableConfigKeyTextBoolean:p,keyText:u,colsWithKeyTextMap:y});return{columns:S,reorderedColumns:_,columnsOrder:E,getDefaultColumnsOrder:v,setColumnsOrder:R,onColumnsReorder:I}};try{ns.displayName="useColumns",ns.__docgenInfo={description:"",displayName:"useColumns",props:{columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},tableConfig:{defaultValue:null,description:"",name:"tableConfig",required:!0,type:{name:"TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>"}},selectingRowsIsActive:{defaultValue:null,description:"",name:"selectingRowsIsActive",required:!0,type:{name:"boolean"}},isLoadingTable:{defaultValue:null,description:"",name:"isLoadingTable",required:!0,type:{name:"boolean"}},pinnedCols:{defaultValue:null,description:"",name:"pinnedCols",required:!0,type:{name:"string[]"}},hiddenCols:{defaultValue:null,description:"",name:"hiddenCols",required:!0,type:{name:"string[]"}},reorderIsActive:{defaultValue:null,description:"",name:"reorderIsActive",required:!0,type:{name:"boolean"}},reorderInHeaderIsActive:{defaultValue:null,description:"",name:"reorderInHeaderIsActive",required:!0,type:{name:"boolean"}},showRowInstruments:{defaultValue:null,description:"",name:"showRowInstruments",required:!0,type:{name:"boolean"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},tableConfigKeyTextBoolean:{defaultValue:null,description:"",name:"tableConfigKeyTextBoolean",required:!0,type:{name:"boolean"}},colsWithKeyTextMap:{defaultValue:null,description:"",name:"colsWithKeyTextMap",required:!0,type:{name:"KeyTextMap"}},editModeEnabled:{defaultValue:null,description:"",name:"editModeEnabled",required:!0,type:{name:"boolean"}}}}}catch{}const Wp='[role="columnheader"]',wi={row:"aria-rowindex",col:"aria-colindex"},zp=({tableConfig:e,refTableX:t})=>{const{onHeaderContextMenu:n,onHeaderContextMenuDropDown:r,onCellContextMenu:o,onCellContextMenuDropDown:a}=e,[l,i]=h.useState({isOpen:!1,position:null,items:null,targetElement:void 0}),d=h.useCallback(({position:c,items:m=null,asyncParams:b,targetElement:S=void 0,context:_})=>{i({isOpen:!0,position:c,items:m,asyncParams:b,targetElement:S,context:_})},[]),u=h.useCallback(()=>{i(c=>({...c,isOpen:!1,items:null,asyncParams:void 0,targetElement:void 0,context:void 0}))},[]),p=h.useCallback(c=>{if(!(c.target instanceof HTMLElement))return;const m=c.target.closest(Wp);if(m)return"innerText"in m&&m.innerText?{columnLabel:String(m.innerText),columnHeader:m}:void 0},[]),y=h.useCallback(()=>{var c,m;return((m=(c=t.current)==null?void 0:c.element)==null?void 0:m.querySelectorAll(`.${L.headerRow}`).length)||0},[t]),f=h.useCallback((c,m)=>{var R;const b=c.getAttribute(wi.col),S=(R=c==null?void 0:c.parentElement)==null?void 0:R.getAttribute(wi.row);if(b===null||S===null)return null;const _=parseInt(b,10),I=parseInt(S??"1",10);return{rowIdx:-(m-I+1),idx:_-1}},[]),w=h.useCallback(c=>{var T,V;const m=(T=p(c))==null?void 0:T.columnLabel,b=(V=p(c))==null?void 0:V.columnHeader;let S;if(c.currentTarget instanceof HTMLElement&&(S=c.currentTarget),!m||(n&&n(c,m,S),!r))return;const _=(S==null?void 0:S.getBoundingClientRect())??{left:0,top:0};c.preventDefault();const I={columnLabel:m},R=r.getDropDownItems(I),E={x:c.clientX-_.left,y:c.clientY-_.top},v={type:"header",data:{header:{columnLabel:m}}},A=()=>{var $;if(b instanceof HTMLElement){const H=f(b,y());H&&(($=t.current)==null||$.selectCell(H))}};R&&R.length>0?(d({position:E,items:R,targetElement:S,context:v}),A()):r.onOpen&&(d({position:E,asyncParams:{type:"header",params:I},targetElement:S,context:v}),r.onOpen(I),A())},[p,n,r,d,f,y,t]),g=h.useCallback((c,m)=>{if(o&&o(c,m),!a)return;m.preventDefault();const b=m.currentTarget.closest(`.${L.table}`),S={row:c.row,column:c.column},_=a.getDropDownItems(S),I={x:m.clientX-((b==null?void 0:b.getBoundingClientRect().left)||0),y:m.clientY-((b==null?void 0:b.getBoundingClientRect().top)||0)},R={type:"cell",data:{cell:{row:c.row,column:c.column,selectCell:c.selectCell}}};_&&_.length>0?d({position:I,items:_,targetElement:m.currentTarget,context:R}):a.onOpen&&(d({position:I,asyncParams:{type:"cell",params:S},targetElement:m.currentTarget,context:R}),a.onOpen(S))},[o,a,d]),x=h.useMemo(()=>{const c=a??r;if(!c)return{};const{type:m,getDropDownItems:b,onItemSelect:S,onOpen:_,...I}=c;return I},[a,r]),C=h.useMemo(()=>{if(!l.isOpen)return null;const c=l.asyncParams;return c?c.type==="header"?(r==null?void 0:r.getDropDownItems(c.params))??null:(a==null?void 0:a.getDropDownItems(c.params))??null:l.items},[l,r,a]);return h.useMemo(()=>({...l,...x,items:C,open:d,close:u,enableHeaderContextMenu:!!n||!!r,enableCellContextMenu:!!o||!!a,openHeaderContextMenu:w,openCellContextMenu:g,getClosestColumn:p,onItemSelect:(c,m)=>{var b,S;if(!l.context){u();return}if(l.context.type==="header"&&l.context.data.header){(b=r==null?void 0:r.onItemSelect)==null||b.call(r,c,l.context.data.header,m);return}l.context.data.cell&&((S=a==null?void 0:a.onItemSelect)==null||S.call(a,c,l.context.data.cell,m))}}),[l,x,C,d,u,n,r,o,a,w,g,p])},Kp=({filters:e,setFilters:t,rowSize:n,setRowSize:r,sortColumns:o,setSortColumns:a,sortIsVisible:l,setSortIsVisible:i,tableConfig:d,headerContextValue:u,rowContextValue:p,isExpandedAllRows:y,toggleExpandAllButton:f,activeView:w,setActiveView:g})=>{var c;const x=h.useMemo(()=>({...p,rowSize:n}),[p,n]);return{headerContextValueTotal:h.useMemo(()=>{var b;return{filters:e,setFilters:t,clearedFiltersValue:Rl(d==null?void 0:d.filtering),sortState:o,setSortState:a,sortIsVisible:l,setSortIsVisible:i,...u,rowSize:n,setRowSize:r,onRowSizeChange:(b=d.rowSize)==null?void 0:b.onRowSizeChange,isExpandedAllRows:y,toggleExpandAllButton:f,activeView:w,setActiveView:g}},[e,t,d==null?void 0:d.filtering,(c=d.rowSize)==null?void 0:c.onRowSizeChange,o,a,l,i,u,n,r,y,f,w,g]),rowContextValueTotal:x}},Up=({columnConfig:e,tableConfig:t,rows:n,infinityScrollActiveInConfig:r,paginationActiveInConfig:o,searchingActiveInConfig:a,searchQuery:l,isManualSearching:i})=>{var c,m,b,S;const[d,u]=((c=t.filtering)==null?void 0:c.state)??[],p=!!t.filtering,y=!!((m=t==null?void 0:t.filtering)!=null&&m.manualFiltering),f=(b=t.filtering)==null?void 0:b.filtersInfo,w=(S=t.filtering)==null?void 0:S.clearedValue,g=h.useMemo(()=>p&&!!d&&Object.entries(d).some(_=>{var V;const I=_[0],R=_[1],E=Array.isArray(R);if(!(E&&R.length||!E&&R))return!1;const A=f&&I in f?(V=f[I])==null?void 0:V.clearedValue:w==null?void 0:w[I];return R!==A}),[w,d,f,p]),x=h.useMemo(()=>{if(r||o)return n;let _=[...n];if(a&&(l!=null&&l.trim())&&!i){const E=l.trim().toLowerCase();_=_.filter(v=>e.some(A=>{var V;return A.searching?A.searching.valueInRow(v).toString().toLowerCase().includes(E):(((V=v[A.key])==null?void 0:V.toString().toLowerCase())||"").includes(E)}))}if(!p||!d||y)return _;const I=e.filter(E=>!!E.filtering);if(!I.length)return _;const R=E=>I.every(v=>{if(!v.filtering.valueInRow||!v.filtering.filter)return!0;const A=v.filtering.valueInRow(E),T=d[v.filtering.keyInFilterState];return v.filtering.component==="input"?v.filtering.filter==="includes"?T?A.toString().toLowerCase().includes(T.toLowerCase()):!0:v.filtering.filter==="startWith"?T?A.toString().toLowerCase().startsWith(T.toLowerCase()):!0:v.filtering.filter==="equal"?T?A.toString().toLowerCase()===T.toString().toLowerCase():!0:v.filtering.filter(T,A.toString()):v.filtering.component==="select"?!("filteringType"in v.filtering.filter)||typeof v.filtering.filter.filteringType!="function"?!0:(v.filtering.filter.typeOfValue==="single",v.filtering.filter.filteringType(T,A.toString())):v.filtering.component==="custom"?v.filtering.filter(T,A):!0});return _.filter(R)},[r,o,n,a,l,i,p,d,y,e]),C=Rl(t==null?void 0:t.filtering);return{filtersAreVisible:g,filteredRows:x,filters:d,setFilters:u,clearedFiltersValue:C}},rs=({r:e,parentId:t,getRowIsExpanded:n,rowKeyGetter:r,getSubRows:o})=>{const a=o==null?void 0:o(e),l=!!(a!=null&&a.length),i=[{...e,...t&&{[dn]:`${t}`}}];if(!l||!r)return i;const d=r(e);return!d||!n(d)||a.forEach((p,y)=>{const f=rs({r:p,getRowIsExpanded:n,rowKeyGetter:r,getSubRows:o,parentId:`${t?`${t}`:`${d.toString()}`}.${Ct}.${y}`});i.push(...f)}),i},Xp=({rows:e,tableConfig:t,groupedCols:n})=>{var g;const r=h.useState(new Set),o=((g=t.subRows)==null?void 0:g.expandedIdsState)??r,[a,l]=o;h.useEffect(()=>{n&&l(new Set)},[n]);const i=!!t.subRows,d=h.useMemo(()=>{var c,m;if(!i)return null;const x=(c=t.subRows)==null?void 0:c.rowKeyGetter,C=(m=t.subRows)==null?void 0:m.getSubRows;return e.reduce((b,S)=>(rs({r:S,getRowIsExpanded:()=>!0,rowKeyGetter:x,getSubRows:C}).forEach(I=>{const R=x==null?void 0:x(I);R&&b.add(R)}),b),new Set)},[e,i]),u=h.useMemo(()=>{var c,m;if(!i||a.size===0)return e;const x=(c=t.subRows)==null?void 0:c.rowKeyGetter,C=(m=t.subRows)==null?void 0:m.getSubRows;return e.reduce((b,S)=>{const _=rs({r:S,getRowIsExpanded(I){return a.has(I)},rowKeyGetter:x,getSubRows:C});return b.push(..._),b},[])},[a,e,i]),p=i&&!!d&&d.size===u.length,f=h.useMemo(()=>{var C,c;const x=(c=(C=t.rowsGrouping)==null?void 0:C.expandAllBtn)==null?void 0:c.expandedAll;return i&&x?x({allRowsIds:d,shownRows:u,expandedRowsIds:a}):null},[d,u,i])??p,w=h.useCallback(()=>{if(f){l(new Set);return}d&&l(d)},[d,f,l]);return{flattenedRows:u,expandedRowsIdsStateAndSetter:o,expandedRowsIds:a,isExpandedAllRows:f,toggleExpandAllButton:w}},os=(e,t)=>{const[n,r]=h.useState(null),o=h.useMemo(()=>e.map(l=>l.key).join(","),[e]),a=h.useCallback(()=>{r("calc(100% - 0.005px)");const l=setTimeout(()=>r(null),50);return()=>clearTimeout(l)},[]);return h.useLayoutEffect(()=>{a()},[o,a]),h.useEffect(()=>{if(!(t!=null&&t.current))return;const l=t.current,i=pl.recalculateWidth;return l.addEventListener(i,a),()=>{l.removeEventListener(i,a)}},[t,a]),{widthOfTable:n}};try{os.displayName="useRecalculateColumnsWidth",os.__docgenInfo={description:"при изменении количества колонок таблица автоматически не пересчитывает ширину колонок. Автоматическое пересчитываение происходит только при измении ширины таблицы",displayName:"useRecalculateColumnsWidth",props:{}}}catch{}const Jp=({tableConfig:e,reorderedColumns:t,filtersAreVisible:n,style:r,controlBlockIsHave:o,fullScreened:a,paginationActiveInConfig:l,paginationCustomSize:i,paginationHeight:d,isSearchingBellow:u,tableCollapsingValue:p,refTableContainer:y,collapseButtonPlacement:f="inside"})=>{var b,S;const w=JSON.stringify(r??{}),g=p.enableCollapse&&p.isCollapsed,x=(()=>{var _,I;return a?{...e.containerStyle,height:Ie.HEIGHT_TABLE_CONTAINER,maxHeight:Ie.HEIGHT_TABLE_CONTAINER}:g&&o?{...e.containerStyle,height:`${Ve}px`}:!((_=e.containerStyle)!=null&&_.height)&&!((I=e.containerStyle)!=null&&I.maxHeight)?{height:`${co}px`,maxHeight:`${co}px`,...e.containerStyle}:e.containerStyle})(),{widthOfTable:C}=os(t,y),{styleMemo:c,tableAndSidebarContainerHeightStyle:m}=h.useMemo(()=>{var A,T;const _=qd((A=e==null?void 0:e.containerStyle)==null?void 0:A.height,(T=e==null?void 0:e.containerStyle)==null?void 0:T.maxHeight,o,n,a,l,d,i,u,g,f),I={height:_.height,maxHeight:_.maxHeight},R={height:"100%",maxHeight:"100%"};return{styleMemo:{...JSON.parse(w),...R,...C!==null&&{width:C}},tableAndSidebarContainerHeightStyle:I}},[(b=e==null?void 0:e.containerStyle)==null?void 0:b.height,(S=e==null?void 0:e.containerStyle)==null?void 0:S.maxHeight,o,n,a,l,d,i,u,g,w,C,f]);return{styleMemo:c,containerStyleResult:x,tableAndSidebarContainerHeightStyle:m}},Yp=({tableConfig:e})=>{const t=e.isLoading,{boolean:n,skeletonRowsCount:r}=typeof t>"u"?{boolean:!1,skeletonRowsCount:10}:typeof t=="boolean"?{boolean:t,skeletonRowsCount:10}:t;return{isLoadingTable:n,skeletonRowsCount:r}},Qp=({onCellClickExternal:e})=>h.useCallback((t,n)=>{var o,a,l,i,d;e&&e(t,n),(typeof((o=t.column)==null?void 0:o.editable)=="function"&&((l=(a=t.column)==null?void 0:a.editable)==null?void 0:l.call(a,t.row))||((i=t.column)==null?void 0:i.editable))&&!((d=window.getSelection())!=null&&d.toString())&&(n.preventGridDefault(),t.selectCell(!0))},[e]),Ci=e=>typeof e=="object"?Array.isArray(e)?[...e]:{...e}:e;function Zp(e,t){return t!==-1}const em=({rows:e,tableConfig:t})=>{const n=t.editing,r=n==null?void 0:n.onRowsChange,o=n==null?void 0:n.subRowsKey,a=!!n&&!!r&&!!n.rowKeyGetter;return{onRowsChangeLastVersion:h.useMemo(()=>{if(a)return(i,d)=>{const u=[...e],p={column:d.column,indexes:[],rows:[]};d.indexes.forEach(y=>{const f=i[y],w=u[y],{treeId:g,...x}=f;if(g){let c=g.split(".");if(o){const S=o.split(".");c=c.map(_=>_===Ct?[S]:_).flat(1)}const m=u.findIndex(S=>n.rowKeyGetter(S)===c[0]),b=u[m];if(Zp(b,m)){const S=c.slice(1).join("."),_=ap(b,S),I=x;p.rows.push({before:Ci(_),after:I}),p.indexes.push(m),lp(b,S,I)}return}const C=u.findIndex(c=>n.rowKeyGetter(c)===n.rowKeyGetter(w));if(C>=0){const c=u[C],m=f;p.indexes.push(C),p.rows.push({before:Ci(c),after:m}),u[C]=m}}),r(u,p)}},[e,a,r])}},tm=(e,t)=>{let n=[],r=!1,o,a=!1;return[(...l)=>{if(a)return;if(r){n=[e,l];return}const i=e(...l);return r=!0,o=window.setTimeout(()=>{n.length&&(n!=null&&n[0])&&(n!=null&&n[1])&&(n[0](...n[1]),n=[]),r=!1},t),i},()=>{a=!0,clearTimeout(o)}]},nm=({onScrollExternal:e,infinityScrollHandler:t,isHaveActiveInfinityScroll:n,onScrollInternal:r})=>({onScroll:h.useMemo(()=>{const a=n?tm(t,200)[0]:null;return l=>{r==null||r(l),a==null||a(l),e==null||e(l)}},[t,n,e,r])}),rm=({tableConfigExternal:e})=>{if(!e)return{tableConfig:e};const{rowsGrouping:t}=e||{};return t?{tableConfig:{...e,...t&&{subRows:ad(t)}}}:{tableConfig:e}},om=({rowClassExternal:e,tableConfigSubRowsBoolean:t,tableConfigRowDetailBoolean:n})=>({rowClass:h.useCallback((o,a)=>{const l=(e==null?void 0:e(o,a))??"";let i="";const d=!t||typeof(o==null?void 0:o[dn])>"u",u=n&&ct(o);d&&!u&&(i=`${al} ${i}`),u&&(i=`${tn} ${i}`);const p=`${ul}${a}`;return`${l} ${p} ${i}`},[e,n,t])}),sm=({rowSize:e,rowDetailIsActiveInConfig:t,tableConfig:n})=>{const r=n.rowHeight,o=n.rowDetailPanel;return{resultRowHeight:h.useMemo(()=>{if(!r&&!t)return;const l={rowSizeName:e,rowSizeValue:ae[e].rowHeight};if(t)return i=>{const d=_t(i);return ct(i)?Iu(d,n.rowDetailPanel):r?typeof r=="number"?r:r(d,l):ae[e].rowHeight};if(r)return typeof r=="number"?r:i=>r(i,l)},[r,t,e,o])}},im=e=>{var a;const[t,n]=h.useState((e==null?void 0:e.defaultOpened)??!1);return{showRowInstruments:((a=e==null?void 0:e.openedState)==null?void 0:a[0])!==void 0?e.openedState[0]:t,setShowRowInstruments:l=>{var i,d;return(i=e==null?void 0:e.openedState)!=null&&i[1]?(d=e.openedState)==null?void 0:d[1](l):n(l)},getRowDropdownConfig:(e==null?void 0:e.getRowDropdownConfig)??null}},_i=e=>Array.from({length:e},(t,n)=>n),lm=({isLoadingTable:e,skeletonRowsCount:t,rows:n,infinityScrollActiveInConfig:r,infinityScrollHasMore:o})=>({rowsWithSkeletonsOrNot:h.useMemo(()=>e?_i(t).map(()=>ii):r&&o?[...n,..._i(5).map(()=>ii)]:n,[t,n,o,r,e])}),am=({tableConfig:e})=>{var m,b,S,_,I,R,E,v;const t=((m=e==null?void 0:e.searching)==null?void 0:m.enabled)??!1,n=((b=e==null?void 0:e.searching)==null?void 0:b.manualSearching)??!1,r=(S=e==null?void 0:e.searching)==null?void 0:S.searchQueryState,[o,a]=h.useState(((_=e==null?void 0:e.searching)==null?void 0:_.showSearchBlock)??!0),l=h.useState(((I=e==null?void 0:e.searching)==null?void 0:I.defaultSearchQuery)??""),[i,d]=r||l,[u,p]=h.useState(i||""),{onDebouncedChange:y,onChange:f,debounceDelay:w=300,isDebounceActive:g=!0,searchClasses:x,placeholder:C="Поиск"}=(e==null?void 0:e.searching)||{};return{searchQuery:i,setSearchQuery:d,clearSearch:()=>{p("")},showSearchBlock:o,setShowSearchBlock:a,onDebouncedChange:y,onChange:f,debounceDelay:w,isDebounceActive:g,enabled:t,searchClasses:x,placeholder:C,internalLocalValue:u,setInternalLocalValue:p,isManualSearching:n,domMetadata:(R=e.searching)==null?void 0:R.domMetadata,searchOnType:((E=e.searching)==null?void 0:E.searchOnType)??!0,autocomplete:(v=e.searching)==null?void 0:v.autocomplete}},um=100,dm=({tableConfig:e,refTableContainer:t})=>{var d,u;const n=h.useState(((d=e.sidebarConfig)==null?void 0:d.defaultOpen)??!1),[r,o]=((u=e.sidebarConfig)==null?void 0:u.openState)??n,[a,l]=h.useState(400);return{isOpen:r,width:a,toggle:()=>{o(!r),setTimeout(()=>{t!=null&&t.current&&ha(t==null?void 0:t.current,pl.recalculateWidth)},or*1e3+um)},setWidth:l}},cm=({tableConfig:e})=>{var f,w,g;const{enableCollapse:t=!1,defaultCollapsed:n=!1,collapseText:r="Свернуть",expandText:o="Развернуть",onToggleCollapse:a,collapsedState:l}=e.collapsing||{},[i,d]=h.useState(n),[u,p]=l??[i,d];h.useEffect(()=>{a&&a(u)},[u,a]);const y=h.useCallback(()=>{p(x=>!x)},[p]);return h.useMemo(()=>{var x,C,c;return{isCollapsed:u,toggleCollapse:y,collapseText:r,expandText:o,enableCollapse:t,domMetadata:(x=e.collapsing)==null?void 0:x.domMetadata,collapseButtonPlacement:(C=e.collapsing)==null?void 0:C.collapseButtonPlacement,collapseButtonAboveRightSlot:(c=e.collapsing)==null?void 0:c.collapseButtonAboveRightSlot}},[u,y,r,o,t,(f=e.collapsing)==null?void 0:f.domMetadata,(w=e.collapsing)==null?void 0:w.collapseButtonPlacement,(g=e.collapsing)==null?void 0:g.collapseButtonAboveRightSlot])},pm={small:{padding:"8px 8px",labelMargin:"4px",...xs},medium:{padding:"8px 12px",labelMargin:"6px",...ys},big:{padding:"12px 14px",labelMargin:"6px",..._r}},mm=B(vt)`
  && {
    ${({$rowSize:e="medium"})=>{const t=pm[e];return`
        padding: ${t.padding};
        border-bottom: 1px solid ${vr};
        
        & label {
          width: 100%;
        }

        & label > div:last-child {
          margin-left: ${t.labelMargin};
        }

        & label > div:last-child > span {
          font-size: ${t.fontSize};
          flex-grow: 1;
        }
      `}}
  }
`,hm=()=>({renderFilter:(t,n,r)=>{const{columnConfig:o,headerContextState:a}=t,{filters:l,setFilters:i,rowSize:d}=a;if(n)return s.jsx(jt,{render:n});const u=o.filtering;if(!u)return null;if(u.component==="custom")return s.jsx(jt,{render:()=>u.customRender(t)});if(u.component==="input"){const p=u.keyInFilterState||o.key;return s.jsx(Er,{size:ae[d].input,autoComplete:"off",value:l==null?void 0:l[p],onChange:y=>{const f=y.target.value;i==null||i(w=>w[p]===f?w:{...w,[p]:f})}})}if(u.component==="select"){const p=u.keyInFilterState,y=l==null?void 0:l[p],f=u.filter.typeOfValue,g=(()=>{if(u.selectOptions.type==="constant")return u.selectOptions.options;const m=u.selectOptions.optionsKeyInHeaderContext;return m in a?(a==null?void 0:a[m])??[]:[]})().map(m=>({value:String(m.value),label:String(m.text)})),x=(u==null?void 0:u.beforeList)??(()=>{}),C=(u==null?void 0:u.afterList)??(()=>{}),c=()=>{if(f!=="multiple")return null;const m=Array.isArray(y)&&y.length===g.length;return s.jsx(mm,{checked:m,indeterminate:Array.isArray(y)&&y.length>0&&y.length<g.length,onChange:()=>{m?i==null||i(b=>({...b,[p]:[]})):i==null||i(b=>({...b,[p]:g.map(S=>S.value)}))},label:"Выбрать всё",size:ae[d].checkboxOfCombobox,$rowSize:d})};return f==="multiple"?s.jsx(Ur,{multiple:!0,size:ae[d].input,items:g,value:y,onChange:m=>{i==null||i(b=>({...b,[p]:m}))},beforeList:s.jsxs(s.Fragment,{children:[x&&s.jsx(x,{...t}),c()]}),afterList:s.jsx(C,{...t}),filter:(m,b)=>m.label.toLowerCase().includes(b.toLowerCase()),closeAfterSelect:!1,placeholder:`Выберите ${r??"значение"}`,listMaxHeight:u.listMaxHeight??"360px"}):s.jsx(Ur,{size:ae[d].input,items:g,value:y,onChange:m=>{i==null||i(b=>({...b,[p]:m}))},beforeList:s.jsxs(s.Fragment,{children:[x&&s.jsx(x,{...t}),c()]}),afterList:s.jsx(C,{...t}),filter:(m,b)=>m.label.toLowerCase().includes(b.toLowerCase()),closeAfterSelect:!0,placeholder:`Выберите ${r??"значение"}`,listMaxHeight:u.listMaxHeight??"360px"})}return null}}),qt={spaceX8:()=>qr.x8,spaceX4:()=>qr.x4},fm=B.div`
  height: 100%;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: ${qt.spaceX8};
  overflow-x: hidden;
  overflow-y: auto;

  ${({$isEmptySearch:e})=>e&&P`
      justify-content: center;
    `}
`,ym=B.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  & .${lt.tableSidebarFilterSearchBlock} {
    margin-bottom: ${qt.spaceX8};
  }

  & .${lt.tableSidebarFilterItem} {
    display: flex;
    flex-direction: column;
    gap: ${qt.spaceX4};
    min-width: 0;
  }

  && .${lt.tableSidebarFilterLabel} {
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }
`,gm=B.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${qt.spaceX8};
  gap: ${qt.spaceX4};
`,xm=B.div`
  display: flex;
  gap: ${qt.spaceX4};
`;B(vt);const ss=({clear:e,apply:t,reset:n,isDirty:r})=>s.jsxs(gm,{children:[s.jsx(Ze,{size:"xs",view:"clear",onClick:()=>e(),children:"Очистить"}),s.jsxs(xm,{children:[s.jsx(Ze,{size:"xs",view:"secondary",onClick:()=>n(),children:"Отменить"}),s.jsx(Ze,{size:"xs",view:"accent",onClick:()=>t(),children:"Применить"})]})]});try{ss.displayName="ConfirmOrReset",ss.__docgenInfo={description:"",displayName:"ConfirmOrReset",props:{clear:{defaultValue:null,description:"",name:"clear",required:!0,type:{name:"() => void"}},apply:{defaultValue:null,description:"",name:"apply",required:!0,type:{name:"() => void"}},reset:{defaultValue:null,description:"",name:"reset",required:!0,type:{name:"() => void"}},isDirty:{defaultValue:null,description:"",name:"isDirty",required:!0,type:{name:"boolean"}}}}}catch{}const Ot={},is=({tableConfig:e,columnConfig:t})=>{var E;const n=We(),[r,o]=h.useState(n.filters||Ot),a=h.useCallback(v=>{o(A=>typeof v=="function"?v(A):v)},[]);h.useEffect(()=>{o(n.filters||Ot)},[n.filters]);const l=h.useCallback(()=>{var v;(v=n.setFilters)==null||v.call(n,r)},[r,n]),{renderFilter:i}=hm(),[d,u]=h.useState(""),p=h.useCallback(v=>{u(v.target.value.toLowerCase())},[]),y=h.useCallback(()=>{u("")},[]),f=(E=e.filtering)==null?void 0:E.sidebarConfig,{columnFilters:w,globalFilters:g}=h.useMemo(()=>{const v=[],A=[];return t.forEach(T=>{var W,q,K,se;if(!T.filtering)return;const V=T.filtering.keyInFilterState||T.key,$=(q=(W=f==null?void 0:f.items)==null?void 0:W[V])==null?void 0:q.customRenderFn,H=((se=(K=f==null?void 0:f.items)==null?void 0:K[V])==null?void 0:se.label)||(typeof T.name=="string"?T.name:T.nameAsString)||V;v.push({key:V,label:H,render:()=>i({columnConfig:T,headerContextState:{...n,filters:r,setFilters:a},popoverIsOpen:!0,setPopoverIsOpen:()=>{},tabIndex:0,filterSource:"sidebar"},$==null?void 0:$.bind(void 0,r,o),H)})}),f!=null&&f.items&&Object.entries(f.items).forEach(([T,V])=>{v.some($=>$.key===T)||A.push({key:T,label:(V==null?void 0:V.label)||T,render:()=>s.jsx(jt,{render:()=>{var $;return(($=V==null?void 0:V.customRenderFn)==null?void 0:$.call(V,r,o))||null}})})}),{columnFilters:v,globalFilters:A}},[t,f,i,n,r,a]),{options:x,filtersInfo:C,filtersOrder:c}=fr({columnConfig:t,filters:r,tableConfig:e,headerContextValue:n}),m=h.useMemo(()=>{const v=new Map;return[...w,...g].forEach(A=>{v.set(A.key,A)}),c.map(A=>v.get(A)).filter(A=>A?A.key.toLowerCase().includes(d.toLowerCase())||A.label.toLowerCase().includes(d.toLowerCase()):!1)},[c,w,g,d]),{clearAll:b}=zi({filters:r??Ot,options:x,updateFilters:(v,A)=>{o&&o(T=>({...T??Ot,[v]:A}))},filtersInfo:C}),S=h.useCallback(()=>{o(n.filters||Ot)},[n.filters]),_=h.useMemo(()=>!au(r,n.filters||Ot),[r,n.filters]),I=!!(m.length===0&&d),R=w.length+g.length;return s.jsxs(ym,{$isEmptySearch:I,children:[R>=1&&s.jsx("div",{className:lt.tableSidebarFilterSearchBlock,children:s.jsx(Gi,{placeholder:"Поиск по фильтрам",value:d,onChange:p,contentLeft:s.jsx("span",{style:{marginRight:"2px"},children:s.jsx(nr,{})}),contentRight:d?s.jsx(Wi,{onClick:y,"aria-label":"Очистить поиск",children:s.jsx(ln,{})}):void 0,appearance:"clear"})}),s.jsxs(fm,{$isEmptySearch:I,children:[I&&s.jsx(Mi,{icon:s.jsx(Ti,{size:"m"})}),m.map(v=>s.jsxs("div",{className:lt.tableSidebarFilterItem,children:[s.jsx(Li,{className:lt.tableSidebarFilterLabel,color:gs,children:v.label}),s.jsx("div",{className:lt.tableSidebarFilterControl,children:v.render()})]},v.key))]}),s.jsx(ss,{clear:b,apply:l,reset:S,isDirty:_})]})};try{is.displayName="SidebarFilters",is.__docgenInfo={description:"",displayName:"SidebarFilters",props:{tableConfig:{defaultValue:null,description:"",name:"tableConfig",required:!0,type:{name:"TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}}}}}catch{}const Sr=()=>({whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}),bm=B(Y)({height:"40px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",borderRadius:"8px",background:an,"& label":{width:"100%","& *":{fontSize:"14px"}}}),Sm=B(Y)({background:an,height:"40px",display:"flex",alignItems:"center",boxSizing:"border-box",justifyContent:"space-between",gap:"6px",position:"relative",width:"100%",padding:"8px 12px",borderRadius:"8px",flexWrap:"nowrap"}),wm=B(Y)(({$isFullWidthTarget:e=!1})=>({cursor:"pointer",flexGrow:1,display:"flex",justifyContent:"flex-end",marginLeft:"auto",...Sr(),"& > div":{width:e?"100%":"auto"}})),Cm=B.button({appearance:"none",background:"transparent",border:"none",marginLeft:"auto",width:"100%",textAlign:"right",paddingInline:"0",cursor:"pointer",color:he,...Sr()});B(Y)({fontSize:"14px",fontWeight:"400",lineHeight:"20px",letterSpacing:"-2%"});const _m=B(Y)({display:"flex",flexDirection:"column",gap:"8px",overflowY:"auto",overflowX:"hidden",height:"100%"}),Rm=B.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  // Для нечетного количества кнопок
  ${({$count:e})=>e%2!==0&&`
    & > :last-child {
      grid-column: 1 / -1;
    }
  `}
`,vm=B(Y)({marginBottom:"16px",width:"100%"}),Im=ji`
  from { opacity: 0; }
  to { opacity: 1; }
`,Em=B.div`
  overflow: hidden;
  opacity: 0;
  animation: ${Im};
  animation-delay: 0.1s;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  height: 100%;
`,Tm=[0,5],Am=({feature:e})=>{var i,d;const{rowSize:t}=We(),n=h.useRef(null),r=h.useRef(null),o=h.useRef(null),[a,l]=h.useState(!1);if(h.useEffect(()=>{var f,w,g;const u=(f=n.current)==null?void 0:f.offsetWidth,p=(w=r.current)==null?void 0:w.offsetWidth,y=(g=o.current)==null?void 0:g.offsetWidth;u&&p&&y&&l(u<p+y)},[t,e.details]),!e.details)return null;switch(e.details.type){case"button":return s.jsx(Ze,{onClick:e.details.onClick,stretching:"filled",view:"secondary",className:e.details.className,size:"s",...tr(e.details),children:s.jsxs(Vt,{orientation:"horizontal",mainAxisGap:6,alignment:"center",children:[e.details.icon,e.details.label]})});case"switch":return s.jsx(bm,{title:e.details.checked?"Выключить":"Включить",className:(i=e.details)==null?void 0:i.className,...tr(e.details),children:s.jsx(wr,{label:e.details.label,checked:e.details.checked,onChange:e.details.onChange,toggleSize:"s"})});case"select":{const u=e.details;return s.jsxs(Sm,{className:e.details.className,...tr(e.details),children:[s.jsxs(Vt,{mainAxisGap:8,alignment:"center",style:{maxWidth:"230px",flexShrink:0,flexWrap:"nowrap"},children:[s.jsx(Vt,{alignment:"center",children:u.icon}),s.jsx(Li,{style:{marginLeft:"auto",...Sr()},children:e.details.label})]}),s.jsx(wm,{ref:n,$isFullWidthTarget:a,children:s.jsx(Et,{offset:Tm,items:e.details.options.map(p=>({value:p.value,label:p.label,contentLeft:s.jsx(Y,{$css:{visibility:p.value===u.value?"visible":"hidden"},children:s.jsx(ps,{size:t?ae[t].icon:"s",color:qi})})})),onItemSelect:p=>"details"in e&&typeof e.details<"u"&&e.details.type==="select"&&e.details.onChange(String(p.value)),trigger:"click",closeOnSelect:!0,children:s.jsxs(Vt,{orientation:"horizontal",alignment:"center",style:{flexWrap:"nowrap"},children:[s.jsx(Cm,{children:s.jsx(Bi,{style:{...Sr()},ref:r,children:`${(d=e.details.options.find(p=>p.value===(u==null?void 0:u.value)))==null?void 0:d.label}`})}),s.jsx("div",{ref:o,children:s.jsx(Oa,{size:"xs",color:he})})]})})})]})}case"custom":return e.details.render();default:return null}},Lr=({features:e})=>s.jsx(s.Fragment,{children:e.map((t,n)=>{var r;return s.jsx(Am,{feature:t},`${t.value}-${(r=t==null?void 0:t.details)==null?void 0:r.type}-${n}`)})}),ls=({defaultSettings:e=[],features:t=[],customGeneralSettingsSlot:n})=>{const r=[],o=[],a=[];return[...e,...t].forEach(l=>{var i;switch((i=l.details)==null?void 0:i.type){case"button":r.push(l);break;case"switch":o.push(l);break;default:a.push(l);break}}),s.jsxs(_m,{children:[r.length>0&&s.jsx(Rm,{$count:r.length,children:s.jsx(Lr,{features:r})}),o.length>0&&s.jsx(Lr,{features:o}),a.length>0&&s.jsx(Lr,{features:a}),n]})};try{ls.displayName="TableSettingsBlock",ls.__docgenInfo={description:"",displayName:"TableSettingsBlock",props:{defaultSettings:{defaultValue:{value:"[]"},description:"",name:"defaultSettings",required:!1,type:{name:"any[]"}},features:{defaultValue:{value:"[]"},description:"",name:"features",required:!1,type:{name:"any[]"}},customGeneralSettingsSlot:{defaultValue:null,description:"",name:"customGeneralSettingsSlot",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const as=({generalSettings:e=[],customFeatures:t=[],filteringContent:n,columnsContent:r,showFiltering:o,showColumns:a,filteringDomMetadata:l,columnsDomMetadata:i,customGeneralSettingsSlot:d,activeSettingsTabId:u,setActiveSettingsTabId:p})=>{const y=[{id:"general",label:"Общие",content:s.jsx(ls,{defaultSettings:e,features:t,customGeneralSettingsSlot:d}),show:e.length>0||t.length>0||!!d},{id:"filtering",label:"Фильтры",content:n,show:o,domMetadata:l},{id:"columns",label:"Столбцы",content:r,show:a,domMetadata:i}].filter(c=>c.show),[f,w]=[u,p],g=y.some(c=>c.id===f),x=g&&f?f:y.length>0&&y[0]?y[0].id:null;if(h.useEffect(()=>{x!==f&&x!==null&&w(x)},[x,f,w]),y.length===0)return null;if(y.length===1)return s.jsx(s.Fragment,{children:y[0]&&y[0].content});const C=y.find(c=>c.id===x);return s.jsxs(s.Fragment,{children:[s.jsx(vm,{children:s.jsx($i,{view:"divider",orientation:"horizontal",size:"s",stretch:!0,children:y.map(c=>{var m,b;return s.jsx(Ni,{view:"divider",size:"s",selected:c.id===(g&&f?f:x),onClick:()=>w(c.id),tabIndex:0,style:{flexGrow:"1"},className:(m=c==null?void 0:c.domMetadata)==null?void 0:m.className,...((b=c==null?void 0:c.domMetadata)==null?void 0:b.dataAttributes)||{},children:c.label},c.id)})})}),s.jsx(Em,{children:C==null?void 0:C.content},x)]})};try{as.displayName="TableSettingsWithTabs",as.__docgenInfo={description:"",displayName:"TableSettingsWithTabs",props:{generalSettings:{defaultValue:{value:"[]"},description:"",name:"generalSettings",required:!1,type:{name:"any[]"}},customFeatures:{defaultValue:{value:"[]"},description:"",name:"customFeatures",required:!1,type:{name:"any[]"}},filteringContent:{defaultValue:null,description:"",name:"filteringContent",required:!1,type:{name:"ReactNode"}},columnsContent:{defaultValue:null,description:"",name:"columnsContent",required:!1,type:{name:"ReactNode"}},showFiltering:{defaultValue:null,description:"",name:"showFiltering",required:!0,type:{name:"boolean"}},showColumns:{defaultValue:null,description:"",name:"showColumns",required:!0,type:{name:"boolean"}},filteringDomMetadata:{defaultValue:null,description:"",name:"filteringDomMetadata",required:!1,type:{name:"DomMetadata"}},columnsDomMetadata:{defaultValue:null,description:"",name:"columnsDomMetadata",required:!1,type:{name:"DomMetadata"}},customGeneralSettingsSlot:{defaultValue:null,description:"",name:"customGeneralSettingsSlot",required:!1,type:{name:"ReactNode"}},activeSettingsTabId:{defaultValue:null,description:"",name:"activeSettingsTabId",required:!0,type:{name:"string"}},setActiveSettingsTabId:{defaultValue:null,description:"",name:"setActiveSettingsTabId",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string>>"}}}}}catch{}const er=(e,t)=>e?[t]:[],Ri=(e,t)=>e?[t]:[],us=({tableConfig:e,activeView:t,setActiveView:n,summaryRowsIsActive:r,setSummaryRowsIsActive:o,selectingRowsIsActive:a,setSelectingRowsIsActive:l,rowSize:i,setRowSize:d,columnsControlEnable:u,fullScreened:p,setFullScreened:y,showRowInstruments:f,setShowRowInstruments:w,keyText:g,setKeyText:x,rowsGroupingIsActiveInConfig:C,groupedCols:c,setGroupedCols:m,columnConfig:b,editModeEnabled:S,setEditModeEnabled:_,showSearchBlock:I,setShowSearchBlock:R,searchQueryLocalValue:E,placeholderSearchBlock:v,openControlModal:A,setOpenControlModal:T,setColumnsOrder:V,columnsOrder:$,pinnedCols:H,setPinnedCols:W,hiddenCols:q,setHiddenCols:K,getDefaultColumnsOrder:se,columnsControlConfig:O,colsWithKeyTextMap:k,tableConfigKeyTextBoolean:G,compressionVisibility:Q,enableAdaptiveCompress:Z})=>{var Ae,rt,Fe,Wt,zt,pn,Kt,mn,hn,fn,yn,gn,Ut,xn,Xt,bn,Sn,Ne,wn,Cn,_n,ht,Rn;const U=t==="rows",[ee,j]=h.useState("general"),F={viewChanging:((Ae=e==null?void 0:e.view)==null?void 0:Ae.type)==="both-types",rowSize:U&&Nc(e.rowSize),columnsControl:U&&u,summaryRows:U&&!!((rt=e.summaryRows)!=null&&rt.showInControl),selectingRows:U&&!!e.selecting&&(((Fe=e.selecting)==null?void 0:Fe.showInControl)??!0),fullScreen:U&&!!e.fullScreenEnabled&&(typeof e.fullScreenEnabled=="object"?e.fullScreenEnabled.showInControl??!0:!0),rowInstruments:U&&!!e.rowInstruments&&(e.rowInstruments.showInControl??!0),keyText:U&&Co(e.keyText),rowsGrouping:C&&(((Wt=e.rowsGrouping)==null?void 0:Wt.showInControl)??!0),editingMode:!!e.editing&&((zt=e.editing)==null?void 0:zt.showToggleEnabledButton)!==!1&&typeof e.editing.enabled!="boolean",searching:U&&!!((pn=e==null?void 0:e.searching)!=null&&pn.enabled),filtering:Wd({tableConfig:e,columnConfig:b}),collapsing:(Kt=e.collapsing)==null?void 0:Kt.enableCollapse},{rowsGroupingButtonProps:X}=ro({tableConfig:e,columnConfig:b,groupedCols:c,setGroupedCols:m,isActivatedRowsGrouping:F.rowsGrouping}),le=[...Ri(F.editingMode,{text:S?"Просмотреть":"Редактировать",contentLeft:s.jsx(Ba,{}),onClick:()=>{_&&_(de=>{var ce,Se;const me=!de;return(Se=(ce=e.editing)==null?void 0:ce.onToggleEnableEditing)==null||Se.call(ce,me),me})},className:(hn=(mn=e==null?void 0:e.editing)==null?void 0:mn.domMetadata)==null?void 0:hn.className,...(yn=(fn=e.editing)==null?void 0:fn.domMetadata)==null?void 0:yn.dataAttributes})],D=[...Ri(F.rowsGrouping,X)],M={isActiveSearching:F.searching,showSearchBlock:I,setShowSearchBlock:R,searchQueryLocalValue:E,placeholderSearchBlock:v},{all:N,icons:J,featureItems:oe,mandatoryFeatures:ie}=(()=>{var gt,vn,In,En,Tn,An,kn,Dn,On,Vn,$n,Nn,Bn,Ln,jn,Fn,Pn,Hn,qn,Mn,Gn,Wn,zn;const de=[...er(F.fullScreen,{value:"full-screen",label:p?"Выйти из полноэкранного режима":"На весь экран",dividerLeft:!0,onClick:()=>y(ue=>!ue),Icon:p?$a:Na,mandatory:!0,canBeCompressedInToolsMenu:!1,className:typeof(e==null?void 0:e.fullScreenEnabled)!="boolean"?(vn=(gt=e.fullScreenEnabled)==null?void 0:gt.domMetadata)==null?void 0:vn.className:"",...typeof(e==null?void 0:e.fullScreenEnabled)!="boolean"?((En=(In=e.fullScreenEnabled)==null?void 0:In.domMetadata)==null?void 0:En.dataAttributes)||{}:{}}),...er(F.rowSize,{value:"rowSize",label:jc(i),onClick:()=>{var Be,Le,Ue;let ue;d(Jt=>{var st,Kn;const ot=Lc(Jt,e.rowSize);return(Kn=(st=e.rowSize)==null?void 0:st.onRowSizeChange)==null||Kn.call(st,ot),ue=ot,ot}),(Ue=(Le=(Be=e.rowSize)==null?void 0:Be.domMetadata)==null?void 0:Le.onClick)==null||Ue.call(Le,void 0,{action:qe.CHANGE_ROW_SIZE,size:ue})},Icon:$o(i),mandatory:!0,canBeCompressedInToolsMenu:!0,dividerLeft:!F.viewChanging&&((Tn=e.controlBlock)==null?void 0:Tn.customFeatures)&&((kn=(An=e.controlBlock)==null?void 0:An.customFeatures)==null?void 0:kn.length)>0,className:(On=(Dn=e.rowSize)==null?void 0:Dn.domMetadata)==null?void 0:On.className,...($n=(Vn=e==null?void 0:e.rowSize)==null?void 0:Vn.domMetadata)==null?void 0:$n.dataAttributes}),...er(F.viewChanging,{value:"view-mode",label:"Изменить вид отображения",onClick:()=>{n(ue=>ue==="cards"&&"rows"||"cards")},Icon:t==="rows"&&Fr||Pr,mandatory:!0,canBeCompressedInToolsMenu:!0,dividerLeft:((Nn=e.controlBlock)==null?void 0:Nn.customFeatures)&&((Ln=(Bn=e.controlBlock)==null?void 0:Bn.customFeatures)==null?void 0:Ln.length)>0,className:(Fn=(jn=e==null?void 0:e.view)==null?void 0:jn.domMetadata)==null?void 0:Fn.className,...(Hn=(Pn=e==null?void 0:e.view)==null?void 0:Pn.domMetadata)==null?void 0:Hn.dataAttributes})],me=[...er(F.keyText,{value:"key-text-wrapper",CustomIconRender:()=>{var ue,Be,Le,Ue;return s.jsx(cc,{keyText:g,setKeyText:x,className:typeof(e==null?void 0:e.keyText)!="boolean"?(Be=(ue=e.keyText)==null?void 0:ue.controlBlock.domMetadata)==null?void 0:Be.className:"",...typeof(e==null?void 0:e.keyText)!="boolean"?((Ue=(Le=e.keyText)==null?void 0:Le.controlBlock.domMetadata)==null?void 0:Ue.dataAttributes)||{}:{}})},details:{type:"select",label:"Ключ и текст",icon:s.jsx(Ai,{color:"inherit",size:"s"}),value:g,options:kl,onChange:ue=>x(ue),className:typeof(e==null?void 0:e.keyText)!="boolean"?(Mn=(qn=e.keyText)==null?void 0:qn.sidebar.domMetadata)==null?void 0:Mn.className:"",...typeof(e==null?void 0:e.keyText)!="boolean"?((Wn=(Gn=e.keyText)==null?void 0:Gn.sidebar.domMetadata)==null?void 0:Wn.dataAttributes)||{}:{}}}),...(((zn=e.controlBlock)==null?void 0:zn.customFeatures)??[]).map(ue=>({...ue,mandatory:ue.mandatory||!1,canBeCompressedInToolsMenu:!0}))],ce=[...de,...me.filter(ue=>ue.mandatory)],Se=me.filter(ue=>!ue.mandatory),ft=5;let Re;if(ce.length>=ft)Re=ce.slice(0,ft);else{const ue=Math.min(Se.length,ft-ce.length);Re=[...ce,...Se.slice(0,ue)]}const yt=Z&&Q?Se.filter((ue,Be)=>{var ot;const Le=Re.some(st=>st.value===ue.value),Ue=ce.length+Be,Jt=((ot=Q==null?void 0:Q.rightSide.customFeatures[Ue])==null?void 0:ot.isMovedToRightSidebar)??!1;return!Le||Jt}):Se.filter(ue=>!Re.some(Be=>Be.value===ue.value));return{all:[...ce,...Se],icons:Re,featureItems:yt,mandatoryFeatures:ce}})(),ye=N.length>0||le.length>0||D.length>0||M.isActiveSearching||F.collapsing,pe=Z?Q?Q.rightSide.customFeatures.slice(ie.length).some(de=>de.isMovedToRightSidebar):!1:oe.length>0,te=h.useCallback(de=>{var me,ce;return(ce=(me=e==null?void 0:e.sidebarConfig)==null?void 0:me.defaultTabs)==null?void 0:ce.find(Se=>Se.id===de)},[(gn=e==null?void 0:e.sidebarConfig)==null?void 0:gn.defaultTabs]),re=te("tableSettings"),be=te("filtering"),_e=te("columns"),Te=[...F.summaryRows?[{value:"summary-rows",label:"Итоговые строки",onClick:()=>{},Icon:()=>null,details:{type:"switch",label:"Итоговые строки",checked:r,className:(xn=(Ut=e.summaryRows)==null?void 0:Ut.domMetadata)==null?void 0:xn.className,onChange:de=>{var me,ce;o(de.target.checked),(ce=(me=e.summaryRows)==null?void 0:me.onChange)==null||ce.call(me,de.target.checked)},...(bn=(Xt=e.summaryRows)==null?void 0:Xt.domMetadata)==null?void 0:bn.dataAttributes}}]:[],...F.selectingRows?[{value:"selecting-rows",label:"Выбор строк",onClick:()=>{},Icon:()=>null,details:{type:"switch",label:"Выбор строк",checked:a,onChange:de=>l(de.target.checked),className:(wn=(Ne=(Sn=e.selecting)==null?void 0:Sn.sidebar)==null?void 0:Ne.domMetadata)==null?void 0:wn.className,...(ht=(_n=(Cn=e.selecting)==null?void 0:Cn.sidebar)==null?void 0:_n.domMetadata)==null?void 0:ht.dataAttributes}}]:[],...F.rowInstruments?[{value:"row-instruments",label:"Инструменты в строках",onClick:()=>{},Icon:()=>null,details:{type:"switch",label:"Инструменты в строках",checked:f,onChange:de=>w(de.target.checked)}}]:[]],$e=re&&"customGeneralSettingsSlot"in re&&!!(re!=null&&re.customGeneralSettingsSlot),pt=Te.length>0||oe.length>0||$e,tt=F.filtering,mt=F.columnsControl,At=[pt,tt,mt].filter(Boolean).length;let ze=(re==null?void 0:re.title)??"Настройки";At===1&&(pt?ze="Общие настройки":tt?ze="Фильтры":mt&&(ze="Настройки столбцов"));const kt=[{id:"tableSettings",label:(re==null?void 0:re.label)??"Настройки",icon:s.jsx(Va,{size:"s"}),showInSidebar:F.summaryRows||F.selectingRows||F.rowInstruments||pe||F.filtering||F.columnsControl||$e,title:ze,titleRightSlot:re==null?void 0:re.titleRightSlot,content:s.jsx(as,{generalSettings:Te,customFeatures:oe,filteringContent:s.jsx(is,{tableConfig:e,columnConfig:b}),columnsContent:s.jsx(Do,{opened:A,onClose:()=>T(!1),setColumnsOrder:V,columnsOrder:$,pinnedCols:H,setPinnedCols:W,hiddenCols:q,setHiddenCols:K,getDefaultColumnsOrder:se,columnConfig:b,columnsControlConfig:O,colsWithKeyTextMap:k,keyText:g,tableConfigKeyTextBoolean:G}),showFiltering:F.filtering,showColumns:F.columnsControl,activeSettingsTabId:ee,setActiveSettingsTabId:j,filteringDomMetadata:be==null?void 0:be.domMetadata,columnsDomMetadata:_e==null?void 0:_e.domMetadata,customGeneralSettingsSlot:$e?re==null?void 0:re.customGeneralSettingsSlot:null}),domMetadata:re==null?void 0:re.domMetadata}],nt=(()=>{var me;const de=[...kt];if((me=e.sidebarConfig)!=null&&me.customTabs){const{customTabs:ce,customTabsOrder:Se}=e.sidebarConfig;if(Se){const ft=Se.map(yt=>ce.find(gt=>gt.id===yt)).filter(Boolean),Re=ce.filter(yt=>!Se.includes(yt.id));de.push(...ft,...Re)}else de.push(...ce)}return de})(),Ke=(()=>{const de=nt.find(me=>me.showInSidebar);return de?de.id:null})();return{icons:J,featureItems:oe,all:N,featureRightButtons:D,featureLeftButtons:le,isHaveSomeFeature:ye,featureSearching:M,isHaveSomeFeatureInSidebar:(((Rn=e.sidebarConfig)==null?void 0:Rn.enabled)??!0)&&nt.some(de=>de.showInSidebar),activeSidebarTabId:Ke,sidebarTabs:nt,isActivated:F}};try{us.displayName="useFeatureArray",us.__docgenInfo={description:"",displayName:"useFeatureArray",props:{tableConfig:{defaultValue:null,description:"",name:"tableConfig",required:!0,type:{name:"TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>"}},activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"enum",value:[{value:'"rows"'},{value:'"cards"'}]}},setActiveView:{defaultValue:null,description:"",name:"setActiveView",required:!0,type:{name:"React.Dispatch<React.SetStateAction<ActiveViewModsType>>"}},summaryRowsIsActive:{defaultValue:null,description:"",name:"summaryRowsIsActive",required:!0,type:{name:"boolean"}},setSummaryRowsIsActive:{defaultValue:null,description:"",name:"setSummaryRowsIsActive",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},selectingRowsIsActive:{defaultValue:null,description:"",name:"selectingRowsIsActive",required:!0,type:{name:"boolean"}},setSelectingRowsIsActive:{defaultValue:null,description:"",name:"setSelectingRowsIsActive",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},clearedFiltersValue:{defaultValue:null,description:"",name:"clearedFiltersValue",required:!0,type:{name:"ObjectForExtending"}},rowSize:{defaultValue:null,description:"",name:"rowSize",required:!0,type:{name:"SIZE"}},setRowSize:{defaultValue:null,description:"",name:"setRowSize",required:!0,type:{name:"React.Dispatch<React.SetStateAction<SIZE>>"}},columnsControlEnable:{defaultValue:null,description:"",name:"columnsControlEnable",required:!0,type:{name:"boolean"}},setOpenControlModal:{defaultValue:null,description:"",name:"setOpenControlModal",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},fullScreened:{defaultValue:null,description:"",name:"fullScreened",required:!0,type:{name:"boolean"}},setFullScreened:{defaultValue:null,description:"",name:"setFullScreened",required:!0,type:{name:"(arg: (prev: boolean) => boolean) => void"}},showRowInstruments:{defaultValue:null,description:"",name:"showRowInstruments",required:!0,type:{name:"boolean"}},setShowRowInstruments:{defaultValue:null,description:"",name:"setShowRowInstruments",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},keyText:{defaultValue:null,description:"",name:"keyText",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'},{value:'"keyText"'},{value:'"textKey"'}]}},setKeyText:{defaultValue:null,description:"",name:"setKeyText",required:!0,type:{name:"React.Dispatch<React.SetStateAction<KeyText>>"}},rowsGroupingIsActiveInConfig:{defaultValue:null,description:"",name:"rowsGroupingIsActiveInConfig",required:!0,type:{name:"boolean"}},groupedCols:{defaultValue:null,description:"",name:"groupedCols",required:!0,type:{name:"string[]"}},setGroupedCols:{defaultValue:null,description:"",name:"setGroupedCols",required:!0,type:{name:"any"}},columnConfig:{defaultValue:null,description:"",name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},editModeEnabled:{defaultValue:null,description:"",name:"editModeEnabled",required:!0,type:{name:"boolean"}},setEditModeEnabled:{defaultValue:null,description:"",name:"setEditModeEnabled",required:!0,type:{name:"any"}},showSearchBlock:{defaultValue:null,description:"",name:"showSearchBlock",required:!0,type:{name:"boolean"}},setShowSearchBlock:{defaultValue:null,description:"",name:"setShowSearchBlock",required:!0,type:{name:"React.Dispatch<React.SetStateAction<boolean>>"}},placeholderSearchBlock:{defaultValue:null,description:"",name:"placeholderSearchBlock",required:!0,type:{name:"string"}},searchQueryLocalValue:{defaultValue:null,description:"",name:"searchQueryLocalValue",required:!0,type:{name:"string"}},openControlModal:{defaultValue:null,description:"",name:"openControlModal",required:!0,type:{name:"boolean"}},setColumnsOrder:{defaultValue:null,description:"",name:"setColumnsOrder",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},columnsOrder:{defaultValue:null,description:"",name:"columnsOrder",required:!0,type:{name:"string[]"}},pinnedCols:{defaultValue:null,description:"",name:"pinnedCols",required:!0,type:{name:"string[]"}},setPinnedCols:{defaultValue:null,description:"",name:"setPinnedCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},hiddenCols:{defaultValue:null,description:"",name:"hiddenCols",required:!0,type:{name:"string[]"}},setHiddenCols:{defaultValue:null,description:"",name:"setHiddenCols",required:!0,type:{name:"React.Dispatch<React.SetStateAction<string[]>>"}},getDefaultColumnsOrder:{defaultValue:null,description:"",name:"getDefaultColumnsOrder",required:!0,type:{name:"() => string[]"}},columnsControlConfig:{defaultValue:null,description:"",name:"columnsControlConfig",required:!0,type:{name:"ColumnsControlConfig"}},colsWithKeyTextMap:{defaultValue:null,description:"",name:"colsWithKeyTextMap",required:!0,type:{name:"KeyTextMap"}},tableConfigKeyTextBoolean:{defaultValue:null,description:"",name:"tableConfigKeyTextBoolean",required:!0,type:{name:"boolean"}},compressionVisibility:{defaultValue:null,description:"",name:"compressionVisibility",required:!0,type:{name:"ToolsMenuState"}},enableAdaptiveCompress:{defaultValue:null,description:"",name:"enableAdaptiveCompress",required:!0,type:{name:"boolean"}}}}}catch{}function vi({tableConfig:e={},columnConfig:t,rows:n,topSummaryRows:r,bottomSummaryRows:o,headerContextValue:a,rowContextValue:l,refTable:i,refTableContainer:d}){var Ds,Os,Vs,$s,Ns,Bs,Ls,js,Fs,Ps,Hs,qs;const u=h.useRef(null),p=h.useRef(null),y=h.useMemo(()=>Ms(p,d),[d]),f=h.useRef(null),w=h.useMemo(()=>i?Ms(i,f):f,[i]),{tableConfig:g}=rm({tableConfigExternal:e}),{columnConfig:x,allColsFlattened:C,columnsGroupingIsActive:c}=kc(t),{isLoadingTable:m,skeletonRowsCount:b}=Yp({tableConfig:g}),{infinityScrollHandler:S,infinityScrollHasMore:_,infinityScrollActiveInConfig:I,isHaveActiveInfinityScroll:R}=Vc({tableConfig:g,rows:n}),{pagination:E}=g,v=!!E,[A,T]=h.useState(0),V=!!g.keyText,{keyText:$,setKeyText:H}=hc(g.keyText),W=pc({keyText:$,columnConfig:x,tableConfigKeyTextBoolean:V}),{showRowInstruments:q,setShowRowInstruments:K,getRowDropdownConfig:se}=im(g.rowInstruments),{selectingRowsIsActive:O,setSelectingRowsIsActive:k,selectedRows:G,setSelectedRows:Q,selectingRowConfig:Z,flattenedRowsArrAndMap:U,isSelectingRowCounterVisible:ee,setIsSelectingRowCounterVisible:j,isSelectingRowLabelVisible:F,setIsSelectingRowLabelVisible:X,controlBlock:le,sidebar:D}=Fc({tableConfig:g,rows:n}),{columnsControlConfig:M,columnsControlEnable:N,reorderInHeaderIsActive:J,reorderIsActive:oe,pinnedCols:ie,setPinnedCols:ye,hiddenCols:pe,setHiddenCols:te,openControlModal:re,setOpenControlModal:be}=Ic({tableConfigColumnsControl:g.columnsControl,tableConfigKeyTextBoolean:V,colsWithKeyTextMap:W,columnsGroupingIsActive:c}),_e=h.useState(!!g.editing&&!!((Ds=g==null?void 0:g.editing)!=null&&Ds.defaultEnabled)),[Te,$e]=Nu((Os=g.editing)==null?void 0:Os.enabled,_e),{columns:pt,reorderedColumns:tt,columnsOrder:mt,getDefaultColumnsOrder:At,setColumnsOrder:ze,onColumnsReorder:kt}=ns({tableConfig:g,columnConfig:x,selectingRowsIsActive:O,isLoadingTable:m,pinnedCols:ie,hiddenCols:pe,reorderIsActive:oe,reorderInHeaderIsActive:J,showRowInstruments:q,keyText:$,tableConfigKeyTextBoolean:V,colsWithKeyTextMap:W,editModeEnabled:Te}),{columnsWithParentGroups:nt}=Ac(tt,C,c),Ke=g.view??{type:"rows"},[Ae,rt]=h.useState(()=>Ke.type==="both-types"?Ke.default??"rows":Ke.type),[Fe,Wt]=h.useState(()=>Bc(g.rowSize)),[zt,pn]=h.useState(!!((Vs=g.summaryRows)!=null&&Vs.showDefault)),Kt=am({tableConfig:g}),{enabled:mn,searchQuery:hn,internalLocalValue:fn,showSearchBlock:yn,setShowSearchBlock:gn,placeholder:Ut,isManualSearching:xn}=Kt,Xt=zp({tableConfig:g,refTableX:f}),bn=zc(Xt),Sn=dm({tableConfig:g,refTableContainer:p}),Ne=cm({tableConfig:g}),{filters:wn,setFilters:Cn,filteredRows:_n,filtersAreVisible:ht}=Up({rows:n,tableConfig:g,columnConfig:x,infinityScrollActiveInConfig:I,paginationActiveInConfig:v,searchingActiveInConfig:mn,searchQuery:hn,isManualSearching:xn}),{sortColumns:Rn,setSortColumns:de,sortedRows:me,sortIsVisible:ce,setSortIsVisible:Se}=Wc({rows:_n,columns:pt,tableConfig:g,infinityScrollActiveInConfig:I,paginationActiveInConfig:v}),{groupedRows:ft,groupedCols:Re,setGroupedCols:yt,rowsGroupingIsActiveInConfig:gt,isRowsGroupingCounterVisible:vn,setIsRowsGroupingCounterVisible:In,isRowsGroupingLabelVisible:En,setIsRowsGroupingLabelVisible:Tn}=hd({tableConfig:g,rows:me}),{flattenedRows:An,expandedRowsIdsStateAndSetter:kn,isExpandedAllRows:Dn,toggleExpandAllButton:On}=Xp({rows:ft,tableConfig:g,groupedCols:Re}),{onRowsChangeLastVersion:Vn}=em({tableConfig:g,rows:n}),{containerCss:$n,style:Nn,summaryRowHeight:Bn,onFill:Ln,onCopy:jn,onPaste:Fn,onCellClick:Pn,onCellDoubleClick:Hn,onCellContextMenu:qn,onCellKeyDown:Mn,onSelectedCellChange:Gn,onColumnResize:Wn,enableVirtualization:zn,onScroll:ue,rowClass:Be,headerRowHeight:Le}=g,Ue=Qp({onCellClickExternal:Pn}),{onScroll:Jt}=nm({onScrollExternal:ue,infinityScrollHandler:S,isHaveActiveInfinityScroll:R,onScrollInternal:bn}),{rowClass:ot}=om({rowClassExternal:Be,tableConfigSubRowsBoolean:!!g.subRows,tableConfigRowDetailBoolean:!!g.rowDetailPanel}),{rowsWithExpDetails:st,rowDetailContextValue:Kn,rowDetailIsActiveInConfig:Wl}=Oo({tableConfigRowDetail:g.rowDetailPanel,rows:An}),{rowsWithSkeletonsOrNot:zl}=lm({isLoadingTable:m,infinityScrollActiveInConfig:I,infinityScrollHasMore:_,skeletonRowsCount:b,rows:st}),{isInTabs:Xe}=su(),{state:[it,Kl],fullScreenPortal:Ul}=Oc(g.fullScreenEnabled),[Un,Xl]=h.useState(),As=(($s=g.controlBlock)==null?void 0:$s.enableAdaptiveCompress)??!0,Je=us({tableConfig:g,activeView:Ae,setActiveView:rt,summaryRowsIsActive:zt,setSummaryRowsIsActive:pn,selectingRowsIsActive:O,setSelectingRowsIsActive:k,rowSize:Fe,setRowSize:Wt,columnsControlEnable:N,fullScreened:it,setFullScreened:Kl,showRowInstruments:q,setShowRowInstruments:K,keyText:$,setKeyText:H,rowsGroupingIsActiveInConfig:gt,groupedCols:Re,setGroupedCols:yt,columnConfig:x,editModeEnabled:Te,setEditModeEnabled:$e,showSearchBlock:yn,setShowSearchBlock:gn,searchQueryLocalValue:fn,placeholderSearchBlock:Ut,openControlModal:re,setOpenControlModal:be,setColumnsOrder:ze,columnsOrder:mt,pinnedCols:ie,setPinnedCols:ye,hiddenCols:pe,setHiddenCols:te,getDefaultColumnsOrder:At,columnsControlConfig:M,colsWithKeyTextMap:W,tableConfigKeyTextBoolean:V,compressionVisibility:Un,enableAdaptiveCompress:As}),{controlBlock:ge={show:!0,leftSideDropdownProps:{},rightSideDropdownProps:{}}}=g,Jl=!!((Ns=ge.leftSideInner)!=null&&Ns.length)||!!ge.rightSideInner,Ye=(ge.show??!0)&&(!!Je.isHaveSomeFeature||Jl),{styleMemo:Yl,containerStyleResult:Ql,tableAndSidebarContainerHeightStyle:Zl}=Jp({style:Nn,tableConfig:g,reorderedColumns:tt,filtersAreVisible:ht,controlBlockIsHave:Ye,isSearchingBellow:(Un==null?void 0:Un.middle.searchingFeature.searchPosition)==="below",fullScreened:it,paginationActiveInConfig:v,paginationCustomSize:E==null?void 0:E.size,tableCollapsingValue:Ne,paginationHeight:A,refTableContainer:p,collapseButtonPlacement:(Bs=g.collapsing)==null?void 0:Bs.collapseButtonPlacement}),{resultRowHeight:ks}=sm({rowDetailIsActiveInConfig:Wl,rowSize:Fe,tableConfig:g}),{noRowsFallback:kr}=g,ea=typeof kr=="object",{headerContextValueTotal:ta,rowContextValueTotal:na}=Kp({filters:wn,setFilters:Cn,sortColumns:Rn,setSortColumns:de,sortIsVisible:ce,setSortIsVisible:Se,rowSize:Fe,setRowSize:Wt,tableConfig:g,isExpandedAllRows:Dn,toggleExpandAllButton:On,headerContextValue:a,rowContextValue:l,setActiveView:rt,activeView:Ae}),ra=ta;return s.jsx(sl.Provider,{value:u,children:s.jsx(il.Provider,{value:p,children:s.jsx(rl.Provider,{value:f,children:s.jsx(zr,{headerCtxV:ra,rowCtxV:na,expandedRowCtxV:kn,searchCtxV:Kt,contextMenuCtxV:Xt,sideBarCtxV:Sn,tableCollapseCtxV:Ne,children:s.jsx(bo,{value:se,children:s.jsx(oo,{selectingRowConfig:Z,rows:n,flattenedRowsArrAndMap:U,selectedRows:G,setSelectedRows:Q,rowKeyGetter:(Ls=g==null?void 0:g.selecting)==null?void 0:Ls.rowKeyGetter,rowsGroupingIsActive:gt&&!!(Re!=null&&Re.length),isRowsGroupingCounterVisible:vn,setIsRowsGroupingCounterVisible:In,setIsRowsGroupingLabelVisible:Tn,isRowsGroupingLabelVisible:En,isSelectingRowCounterVisible:ee,setIsSelectingRowCounterVisible:j,isSelectingRowLabelVisible:F,setIsSelectingRowLabelVisible:X,controlBlock:le,sidebar:D,children:s.jsx(Vo,{value:Kn,children:s.jsx(Wr,{refTableContainer:u,children:s.jsx(ts,{containerProps:{controlBlock:s.jsxs("div",{className:L.rootControlBlock,children:[As?s.jsx(h.Suspense,{fallback:Ye?s.jsx(Ts,{$isVisibleSearching:!1,$activeView:"rows",$borderTopRounded:!Xe||it,$placeholderSearchBlock:Ut,$calculatedSearchQuery:"",$collapsedTable:Ne.isCollapsed,children:s.jsx("p",{children:"Загрузка панели управления..."})}):null,children:s.jsx(zo,{isHaveControlBlock:Ye,leftSideInner:ge==null?void 0:ge.leftSideInner,rightSideInner:ge==null?void 0:ge.rightSideInner,activeView:Ae,featuresObj:Je,$borderTopRounded:!Xe||it,setCompressionVisibility:Xl,editModeEnabled:Te,fullScreened:it,controlBlockLeftSideDropdownProps:ge.leftSideDropdownProps,controlBlockRightSideDropdownProps:ge.rightSideDropdownProps,collapseButtonPlacement:Ne.collapseButtonPlacement})}):s.jsx(Ko,{isHaveControlBlock:Ye,leftSideInner:ge==null?void 0:ge.leftSideInner,rightSideInner:ge==null?void 0:ge.rightSideInner,activeView:Ae,featuresObj:Je,$borderTopRounded:!Xe||it,collapseButtonPlacement:Ne.collapseButtonPlacement}),s.jsx(h.Suspense,{fallback:null,children:s.jsx(ho,{isOpened:ht&&!Ne.isCollapsed,activeView:Ae,tableConfig:g,columnConfig:x,headerContextValue:a,$borderLeftTopRadiusRounded:!Xe&&!Ye,$borderRightTopRadiusRounded:!Xe&&!Ye})})]}),sidebarBlock:(((js=g.sidebarConfig)==null?void 0:js.enabled)??!0)&&Je.isHaveSomeFeatureInSidebar?s.jsx(Yu,{$borderRightBottomRadiusRounded:!v,$borderRightTopRadiusRounded:!Xe&&!Ye,activeTabId:Je.activeSidebarTabId,sidebarTabs:Je.sidebarTabs,defaultActiveTabId:(Fs=g.sidebarConfig)==null?void 0:Fs.defaultActiveTabId,activeTabState:(Ps=g.sidebarConfig)==null?void 0:Ps.activeTabState,onActiveTabChange:(Hs=g.sidebarConfig)==null?void 0:Hs.onActiveTabChange}):null,refTableGlobalContainer:u,refTableContainer:y,$tableAndSidebarContainerHeightStyle:Zl,viewProp:{activeView:Ae,view:Ke},containerId:g.containerId,$borderLeftTopRadiusRounded:!Xe&&!Ye&&!ht,$borderRightTopRadiusRounded:!Xe&&!Ye&&!ht&&!Je.isHaveSomeFeatureInSidebar,$borderLeftBottomRadiusRounded:!v,$borderRightBottomRadiusRounded:!v&&!Je.isHaveSomeFeatureInSidebar,$columnsGroupingIsActive:c,$containerStyle:Ql,$containerCss:$n,$fullScreened:it,fullScreenPortal:Ul,$css:g.css,$highlightActiveType:g.highlightActiveType??"cell",collapseButtonPlacement:Ne.collapseButtonPlacement,isHaveSomeFeatureInSidebar:Je.isHaveSomeFeatureInSidebar,collapseButtonAboveRightSlot:Ne.collapseButtonAboveRightSlot,$borderTopRounded:!Xe||it},dataGridProps:{refTable:w,rows:zl,rowSize:Fe,...ks&&{rowHeight:ks},headerRowHeight:Le??33,...g.editing&&!m&&{onRowsChange:Vn},columns:nt,...J&&{onColumnsReorder:kt},...zt&&!m&&{topSummaryRows:r,bottomSummaryRows:o},...kr&&{renderers:{noRowsFallback:ea?kr.custom:s.jsx(Jo,{})}},rowClass:ot,style:Yl,onScroll:Jt,onCellClick:Ue,...Zc({"data-testid":g["data-testid"],summaryRowHeight:Bn,onFill:Ln,onCopy:jn,onPaste:Fn,onCellDoubleClick:Hn,onCellContextMenu:qn,onCellKeyDown:Mn,onSelectedCellChange:Gn,onColumnResize:Wn,enableVirtualization:zn})},pagination:E,setPaginationHeight:T,loadingOverlayConfig:g.loadingOverlay,containerStyle:g.containerStyle,massActionPanel:(qs=g==null?void 0:g.controlBlock)==null?void 0:qs.massActionPanel})})})})})})})})})}try{vi.displayName="Table",vi.__docgenInfo={description:"",displayName:"Table",props:{columnConfig:{defaultValue:null,description:`columnConfig - Конфигурация колонок.

(рекомендуется минимальное количество зависимостей для данной сущности - в идеале, чтобы не пересоздавался)`,name:"columnConfig",required:!0,type:{name:"readonly ColumnConfig<RowType, SummaryRowType>[]"}},rows:{defaultValue:null,description:"rows - данные для таблицы. ```RowType extends Record<string | number, any>```",name:"rows",required:!0,type:{name:"RowType[]"}},topSummaryRows:{defaultValue:null,description:"topSummaryRows - данные для итоговой строки в верхней части таблицы. ```SummaryRowType[]```",name:"topSummaryRows",required:!1,type:{name:"SummaryRowType[]"}},bottomSummaryRows:{defaultValue:null,description:"rows - данные для итоговой строки в нижней части таблицы. ```SummaryRowType[]```",name:"bottomSummaryRows",required:!1,type:{name:"SummaryRowType[]"}},tableConfig:{defaultValue:{value:"{}"},description:"tableConfig - Конфигурация фичей таблицы (их активация и отключение)",name:"tableConfig",required:!1,type:{name:"{ highlightActiveType?: HighlightActiveType; rowSize?: { showInControl: boolean; default?: SIZE; available?: SIZE[]; onRowSizeChange?: (size: SIZE) => void; domMetadata?: DomMetadata; }; ... 47 more ...; 'data-testid'?: string; }"}},headerContextValue:{defaultValue:null,description:"headerContextValue:  любые стейты, которые нужны в headerCell - кладем в headerContextValue. И получаем доступ с помощью useHeaderContext.",name:"headerContextValue",required:!1,type:{name:"ObjectForExtending"}},rowContextValue:{defaultValue:null,description:"rowContextValue:  любые стейты, которые нужны в cell - кладем в rowContextValue.  И получаем доступ с помощью useRowContext.",name:"rowContextValue",required:!1,type:{name:"ObjectForExtending"}},refTable:{defaultValue:null,description:"",name:"refTable",required:!1,type:{name:"Ref<DataGridHandle>"}},refTableContainer:{defaultValue:null,description:"",name:"refTableContainer",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}export{sr as A,z as C,Gt as D,Ur as S,Et as T,eh as a,un as b,ae as c,th as d,we as e,vi as f,We as g,qe as h,pr as i,ri as j,ol as k,_l as l,ir as m,up as o,Tr as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
