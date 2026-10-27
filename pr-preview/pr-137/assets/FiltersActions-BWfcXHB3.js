import{j as t,r as f}from"./react-CAOzMBF_.js";import{a as u4}from"./IconButton-ZoRfzXaJ.js";import{a as U}from"./TextField-DpKf-85P.js";import{b as X}from"./AiAgentPopup-zRx4ytCb.js";import{c as e4,s as t4}from"./utils-EIxGvR70.js";import{H as c,C as G}from"./styled-components-DCFsnh-i.js";import{B as $}from"./Box-DvvYTz20.js";import{D as i4}from"./Table-BQHrw1K6.js";import{G as r4,r as a4,y as n4,cF as s4,A as o4,l as l4,aK as d4,T as c4,k as p4,K as m4,Y as f4}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{t as h4,x as y4,w as _4,n as F4,l as E4,I as g4,P as B4,J as A4,R as x4,U as D4,p as b4}from"./@salutejs/sdds-finai-CKhMjg07.js";import{s$ as H,a as v4,fa as J}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{bE as w4}from"./vendor-DmWczWMC.js";const C=({visible:u,topLeft:e})=>t.jsx($,{$css:{position:"absolute",top:e??0,right:e??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:i4,backgroundColor:"transparent",transform:"scale(0)",...u&&{backgroundColor:r4,transform:"scale(1)"}}});try{C.displayName="Circle",C.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const I=c(h4).attrs(({redSquare:u,hideLabel:e=!1,size:d,iconSize:s,children:n,...m})=>({view:"secondary",size:d??"s",type:"button",contentLeft:!e&&t.jsx(H,{size:s??"s"}),children:t.jsxs(t.Fragment,{children:[n??(!e&&(m.text??"Ещё фильтры")),e&&t.jsx(H,{size:s??"s"}),t.jsx(C,{visible:u})]}),...m}))`
  position: relative;
  white-space: nowrap;
`;try{I.displayName="FiltersActionsFiltersButton",I.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const C4=f.lazy(()=>w4(()=>import("./ListOfFilters-CMjwWdxj.js").then(u=>u.L),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))),I4=c(C4).attrs(({paddingTop:u,...e})=>({paddingTop:8,...e}))``,R=({visible:u,offset:e})=>t.jsx(C,{visible:u,topLeft:e});try{R.displayName="RedDot",R.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const V=c(y4).attrs(u=>({size:"xs",view:"filled",...u}))`
  & {
    margin: -2px;
    ${({$css:u})=>u}
  }
`,k=c(_4).attrs(u=>({size:"s",view:"default",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{V.displayName="FiltersActionsTabs",V.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{k.displayName="FiltersActionsTabItem",k.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const _={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},R4=()=>typeof window<"u"?window.innerHeight*_.maxHeightViewportRatio:_.fallbackMaxHeight,T4=()=>({minHeight:_.minHeight,minWidth:_.minWidth,maxWidth:_.maxWidth,maxHeight:R4(),defaultSize:{width:_.defaultWidth,height:_.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:t.jsx(v4,{color:a4}),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),N=u=>{if(u===!1)return!1;const e=T4();return typeof u=="object"&&u!==null?{...e,...u}:e};try{N.displayName="getFiltersPopoverResizable",N.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const w={backgroundPrimary:()=>s4,borderRadiusM:()=>l4,shadowDownHardS:()=>d4,surfaceSolidCard:()=>o4},S4=c(B4)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${w.backgroundPrimary}; */
  }
`,V4=c.div`
  background-color: ${w.surfaceSolidCard};
  border-radius: ${w.borderRadiusM};
  box-shadow: ${w.shadowDownHardS};
  ${({$resizable:u})=>u?"":`
    min-width: ${_.minWidth}px;
    max-width: ${_.maxWidth}px;
    max-height: ${_.maxHeightViewportRatio*100}dvh;
  `}
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`,k4=c.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,N4=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,q4=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:u})=>u?"8px":"0"};
`,j4=c.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,z4=c.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,T=({title:u,subtitle:e,content:d,state:s,onClose:n,footer:m,redSquare:a=!1,popoverProps:p={},buttonProps:i,renderTarget:o,searchable:F,searchValue:A,onSearchChange:y,searchingProps:g,emptySearchContent:h})=>{const{resizable:l,...x}=p,B=N(l),[S,v]=f.useState(!1),[D,E]=s??[S,v],Z=f.useCallback(()=>{E(!1),n==null||n()},[n,E]),Q=f.useCallback(b=>{E(b),b||n==null||n()},[n,E]),W=f.useCallback(()=>{E(!D)},[D,E]);return t.jsx(S4,{opened:D,onToggle:Q,target:o?o({onClick:W,isOpen:D,isRedDotVisible:a,RedDot:R}):t.jsx(I,{redSquare:a,hideLabel:!1,iconSize:"s",...i,onClick:b=>{var O;(O=i==null?void 0:i.onClick)==null||O.call(i,b),W()}}),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:B,...x,children:t.jsxs(V4,{$resizable:B!==!1,children:[t.jsxs(k4,{children:[t.jsxs(N4,{children:[t.jsxs(q4,{$searchable:F,children:[t.jsx(F4,{bold:!0,children:u}),e&&t.jsx(E4,{color:n4,children:e})]}),t.jsx(g4,{onClick:Z,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:F?"8px":void 0},children:t.jsx(J,{size:"xs"})})]}),F&&t.jsx(U,{value:A,onChange:b=>y==null?void 0:y(b.target.value),placeholder:"Поиск",...g})]}),t.jsx(j4,{children:h||d}),m&&t.jsx(z4,{children:m})]})})};try{T.displayName="FiltersActionsFiltersButtonWithPopover",T.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const q=c(A4).attrs(u=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:t.jsx(J,{size:"xs",color:"inherit"}),style:{...u.style,visibility:u.isVisible?"visible":"hidden",pointerEvents:u.isVisible?"auto":"none"}}))`
  ${({$css:u})=>u}
`;try{q.displayName="ResetAllFiltersButton",q.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j=c(x4).attrs(u=>({size:"s",view:"primary",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{j.displayName="FiltersActionsSegmentItem",j.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const P4=c(D4)`
  background: ${({hasBackground:u})=>u?c4:"none"};
  padding: ${({hasBackground:u})=>u?"10px 14px":"auto"};
  border-radius: ${({hasBackground:u})=>u?"10px":"auto"};
  max-height: 48px;
`,z=f.forwardRef(({hasBackground:u,size:e,...d},s)=>t.jsx(P4,{hasBackground:u,ref:s,size:u?"m":e,...d}));try{z.displayName="Switch",z.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const P=({...u})=>t.jsx(z,{size:"m",toggleSize:"s",hasBackground:!0,...u});try{P.displayName="SwitcherFilter",P.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const $4=(u,e)=>{if(!u&&!e)return;const d=u&&{$css:u.split(" ").map((s,n)=>({[`& > *:nth-child(${n+1})`]:{width:s}})).reduce((s,n)=>({...s,...n}),{})};return G`
    ${()=>d&&d.$css};
    ${()=>e&&e};
  `},W4=c($)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Y=c.div`
  padding-block: 8px;
  border-radius: ${()=>p4};
`,O4=c(Y)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,H4=c($)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,r=({mainBlock:u,listOfFilters:e,activeButtonsBlock:d,mainBlockElementsWidth:s,containerProps:n,mainBlockProps:{$css:m,ref:a,...p}={},onResize:i})=>{const o=f.useRef(null),F=f.useRef(null),A=f.useRef(null);return f.useLayoutEffect(()=>{if(!i)return;const y=o.current,g=F.current,h=A.current;if(!y||!g)return;const l={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},x=()=>{const S=y.getBoundingClientRect().width,v=g.getBoundingClientRect().width,D=h?h.getBoundingClientRect().width:0,E=v;l.containerWidth=S,l.mainBlockWidth=v,l.buttonsBlockWidth=D,l.availableMainBlockWidth=E,i({...l})},B=e4(()=>{x()});return B.observe(y),B.observe(g),h&&B.observe(h),x(),()=>{B.disconnect()}},[i]),t.jsx(W4,{ref:o,...n,children:t.jsxs(Y,{children:[t.jsxs(H4,{$css:$4(s,m),...p,ref:t4(a,F),children:[u,d&&t.jsx(O4,{ref:A,children:d})]}),e]})})};r.FiltersButton=I;r.DotsIconButton=u4;r.ListOfFilters=I4;r.TextFieldSearch=U;r.Tabs=V;r.TabItem=k;r.SegmentItem=j;r.Tooltip=X;r.TooltipList=X;r.FilterPopover=T;r.FiltersButtonWithPopover=T;r.ResetAllFiltersButton=q;r.SwitcherFilter=P;r.RedDot=R;try{r.displayName="FiltersActions",r.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}try{r.FiltersButton.displayName="FiltersActions.FiltersButton",r.FiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.FiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.Tabs.displayName="FiltersActions.Tabs",r.Tabs.__docgenInfo={description:"",displayName:"FiltersActions.Tabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.TabItem.displayName="FiltersActions.TabItem",r.TabItem.__docgenInfo={description:"",displayName:"FiltersActions.TabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.SegmentItem.displayName="FiltersActions.SegmentItem",r.SegmentItem.__docgenInfo={description:"",displayName:"FiltersActions.SegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.ResetAllFiltersButton.displayName="FiltersActions.ResetAllFiltersButton",r.ResetAllFiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.SwitcherFilter.displayName="FiltersActions.SwitcherFilter",r.SwitcherFilter.__docgenInfo={description:"",displayName:"FiltersActions.SwitcherFilter",props:{}}}catch{}try{r.RedDot.displayName="FiltersActions.RedDot",r.RedDot.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"FiltersActions.RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}function L(u,e,d){const{visible:s=[],inOverlay:n=[],hidden:m=[],modifications:a={},customActions:p={}}=d,i=new Set(s),o=new Set(n),F=new Set(m),A=u.filter(l=>i.has(l.id)),y=u.filter(l=>o.has(l.id)),g=u.filter(l=>F.has(l.id)),h=[];return s.forEach(l=>{h.push({type:"show",targetId:l,payload:null})}),n.forEach(l=>{h.push({type:"moveToOverlay",targetId:l,payload:null})}),m.forEach(l=>{h.push({type:"hide",targetId:l,payload:null})}),Object.entries(a).forEach(([l,x])=>{h.push({type:"modify",targetId:l,payload:x})}),{visibleItems:A,overlayItems:y,hiddenItems:g,modifications:a,actions:h,activeBreakpoint:e,hasOverlayItems:y.length>0,hasModifications:Object.keys(a).length>0,customActions:p}}const M=({items:u,width:e,breakpoints:d})=>{const s=f.useMemo(()=>{const a=Object.entries(d).map(([i,o])=>({breakpoint:Number(i),config:o})).sort((i,o)=>o.breakpoint-i.breakpoint),p=a.find(({breakpoint:i})=>e>=i);if(!p){const i=a[a.length-1];return L(u,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return L(u,p.breakpoint,p.config)},[u,e,d]),n=f.useCallback((a,p)=>{if(!a)return{};const i={...a.style};return a.width?i.width=a.width:a.widthPercent&&p?i.width=`${p*a.widthPercent/100}px`:a.widthPercent&&(i.width=`${a.widthPercent}%`),i},[]),m=f.useCallback((a,p)=>a.some(i=>{const o=p[i.id];return o===void 0?!1:Array.isArray(o)?o.length>0:typeof o=="boolean"?o===!0:typeof o=="string"?o!=="":typeof o=="number"?o!==0:!!o}),[]);return{...s,getItemStyle:n,hasActiveFilters:m}};try{M.displayName="useAdaptiveFilters",M.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}const L4=()=>G(f4),M4=c.div`
  color: ${()=>m4};
  ${()=>L4()}

  & > ul {
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    padding-left: 12px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 2px;
    }
  }
`,K4=({groupLabel:u,items:e})=>t.jsxs(M4,{children:[t.jsx("span",{children:u}),t.jsx("ul",{children:e.map(d=>t.jsx("li",{children:d}))})]}),K=({groupLabel:u,items:e,children:d,...s})=>{const[n,m]=f.useState(!1),a=e.length>0;return f.useEffect(()=>{if(!a){m(!0);const p=setTimeout(()=>{m(!1)},0);return()=>clearTimeout(p)}},[a]),t.jsx(b4,{usePortal:!0,trigger:a?(s==null?void 0:s.trigger)??"hover":"none",text:t.jsx(K4,{groupLabel:u,items:e}),size:"s",...s,children:d},`tooltip-${n}`)};try{K.displayName="FiltersActionsTooltip",K.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}export{K as F,z as S,I4 as a,r as b,M as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-CMjwWdxj.js","assets/react-CAOzMBF_.js","assets/Box-DvvYTz20.js","assets/styled-components-DCFsnh-i.js","assets/react-is-vVGXX3JE.js","assets/vendor-DmWczWMC.js","assets/@tanstack/react-virtual-vLM_tzFQ.js","assets/tslib-DoU9Jm1N.js","assets/vendor-CwzC1fIw.css","assets/Collapse-CblE70vy.js","assets/utils-EIxGvR70.js","assets/constants-DatVHdkd.js","assets/@salutejs/sdds-themes-DPwMcFh9.js","assets/@salutejs/sdds-themes-DEM7LVTo.css","assets/sharedUtilsDebug-BX_KjCjW.js","assets/Table-BQHrw1K6.js","assets/@salutejs/plasma-icons-Do5ggeDI.js","assets/@salutejs/sdds-finai-CKhMjg07.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/react-data-grid-BKw4Q-W8.js","assets/react-data-grid-B7R8wGeR.css","assets/TableTabs-C6Rr5Gy-.js","assets/TableCanvasSharedConstants-B2qJZwC8.js","assets/TableGlide-DbDA-PPi.js","assets/@glideappsfinal/glide-data-grid-BB_xclG6.js","assets/canvas-hypertxt-DsokSIOX.js","assets/@glideappsfinal/glide-data-grid-BE5GUwZp.css","assets/sharedUiSearch-DGAhIiuN.js","assets/TextField-DpKf-85P.js","assets/sharedUtilsInputs-Cj-LRbcu.js","assets/AiAgentPopup-zRx4ytCb.js","assets/TextArea-FtPqzh-q.js","assets/sharedUtilsResizable-BjlCs3KG.js","assets/lodash.isequal-DxetvuAY.js","assets/NumberFormat-BqjpJJQW.js","assets/EmptyState-BCYMGuYF.js","assets/MassActions-Csxbu-7r.js","assets/Autocomplete-DE_6PTST.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
