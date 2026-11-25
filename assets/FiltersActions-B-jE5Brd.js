import{r as f,j as e}from"./react-DYHuXpTF.js";import{d9 as e4,da as t4,cI as i4,z as r4,E as s4,db as n4,G as a4,l as o4,c$ as l4,k as d4}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as c,A as G}from"./styled-components-C3-Vg48S.js";import{g as c4,I as U,D as p4,c as m4,i as f4,h as h4,d as y4,j as _4,P as F4,k as E4,S as B4}from"./@salutejs/sdds-finai-BHH5Fs72.js";import{b as g4,d as O,a as A4,e as Z}from"./@salutejs/plasma-icons-DAdkqmmH.js";import{a as D4}from"./IconButton-DBKuef6W.js";import{T as J}from"./TextField-DW3a8v-2.js";import{T as K}from"./TooltipList-BajRDP8T.js";import{c as x4,f as b4}from"./utils-DbMTrPCQ.js";import{B as P}from"./Box-DwiKSnnX.js";import{D as v4}from"./constants-Des9Datc.js";import{_ as C4}from"./preload-helper-DeA7wft2.js";import{S as w4}from"./Switch-BJtGJ7E8.js";const I4=()=>G(t4),T4=c.div`
  color: ${()=>e4};
  ${()=>I4()}

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
`,R4=({groupLabel:u,items:t})=>e.jsxs(T4,{children:[e.jsx("span",{children:u}),e.jsx("ul",{children:t.map(d=>e.jsx("li",{children:d}))})]}),L=({groupLabel:u,items:t,children:d,...n})=>{const[a,m]=f.useState(!1),s=t.length>0;return f.useEffect(()=>{if(!s){m(!0);const p=setTimeout(()=>{m(!1)},0);return()=>clearTimeout(p)}},[s]),e.jsx(c4,{usePortal:!0,trigger:s?(n==null?void 0:n.trigger)??"hover":"none",text:e.jsx(R4,{groupLabel:u,items:t}),size:"s",...n,children:d},`tooltip-${a}`)};try{L.displayName="FiltersActionsTooltip",L.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}const H=({dropdownProps:u,iconSize:t,...d})=>{const n=e.jsx(U,{view:"secondary",size:"s",...d,children:e.jsx(g4,{size:t??"s"})});return u?e.jsx(p4,{...u,children:n}):n};try{H.displayName="FiltersActionsDotsIconButton",H.__docgenInfo={description:"",displayName:"FiltersActionsDotsIconButton",props:{}}}catch{}const w=({visible:u,topLeft:t})=>e.jsx(P,{$css:{position:"absolute",top:t??0,right:t??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:v4,backgroundColor:"transparent",transform:"scale(0)",...u&&{backgroundColor:i4,transform:"scale(1)"}}});try{w.displayName="Circle",w.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const I=c(m4).attrs(({redSquare:u,hideLabel:t=!1,size:d,iconSize:n,children:a,...m})=>({view:"secondary",size:d??"s",type:"button",contentLeft:!t&&e.jsx(O,{size:n??"s"}),children:e.jsxs(e.Fragment,{children:[a??(!t&&(m.text??"Ещё фильтры")),t&&e.jsx(O,{size:n??"s"}),e.jsx(w,{visible:u})]}),...m}))`
  position: relative;
  white-space: nowrap;
`;try{I.displayName="FiltersActionsFiltersButton",I.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const V4=f.lazy(()=>C4(()=>import("./ListOfFilters-DEBHSdGI.js").then(u=>u.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),k4=c(V4).attrs(({paddingTop:u,...t})=>({paddingTop:8,...t}))``,T=({visible:u,offset:t})=>e.jsx(w,{visible:u,topLeft:t});try{T.displayName="RedDot",T.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const k=c(f4).attrs(u=>({size:"xs",view:"filled",...u}))`
  & {
    margin: -2px;
    ${({$css:u})=>u}
  }
`,N=c(h4).attrs(u=>({size:"s",view:"default",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{k.displayName="FiltersActionsTabs",k.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{N.displayName="FiltersActionsTabItem",N.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const _={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},N4=()=>typeof window<"u"?window.innerHeight*_.maxHeightViewportRatio:_.fallbackMaxHeight,S4=()=>({minHeight:_.minHeight,minWidth:_.minWidth,maxWidth:_.maxWidth,maxHeight:N4(),defaultSize:{width:_.defaultWidth,height:_.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:e.jsx(A4,{color:r4}),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),S=u=>{if(u===!1)return!1;const t=S4();return typeof u=="object"&&u!==null?{...t,...u}:t};try{S.displayName="getFiltersPopoverResizable",S.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const C={backgroundPrimary:()=>n4,borderRadiusM:()=>o4,shadowDownHardS:()=>l4,surfaceSolidCard:()=>a4},q4=c(F4)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${C.backgroundPrimary}; */
  }
`,j4=c.div`
  background-color: ${C.surfaceSolidCard};
  border-radius: ${C.borderRadiusM};
  box-shadow: ${C.shadowDownHardS};
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
`,z4=c.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,P4=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,W4=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:u})=>u?"8px":"0"};
`,$4=c.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,O4=c.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,R=({title:u,subtitle:t,content:d,state:n,onClose:a,footer:m,redSquare:s=!1,popoverProps:p={},buttonProps:i,renderTarget:o,searchable:F,searchValue:A,onSearchChange:y,searchingProps:B,emptySearchContent:h})=>{const{resizable:l,...D}=p,g=S(l),[V,v]=f.useState(!1),[x,E]=n??[V,v],Y=f.useCallback(()=>{E(!1),a==null||a()},[a,E]),u4=f.useCallback(b=>{E(b),b||a==null||a()},[a,E]),W=f.useCallback(()=>{E(!x)},[x,E]);return e.jsx(q4,{opened:x,onToggle:u4,target:o?o({onClick:W,isOpen:x,isRedDotVisible:s,RedDot:T}):e.jsx(I,{redSquare:s,hideLabel:!1,iconSize:"s",...i,onClick:b=>{var $;($=i==null?void 0:i.onClick)==null||$.call(i,b),W()}}),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:g,...D,children:e.jsxs(j4,{$resizable:g!==!1,children:[e.jsxs(z4,{children:[e.jsxs(P4,{children:[e.jsxs(W4,{$searchable:F,children:[e.jsx(y4,{bold:!0,children:u}),t&&e.jsx(_4,{color:s4,children:t})]}),e.jsx(U,{onClick:Y,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:F?"8px":void 0},children:e.jsx(Z,{size:"xs"})})]}),F&&e.jsx(J,{value:A,onChange:b=>y==null?void 0:y(b.target.value),placeholder:"Поиск",...B})]}),e.jsx($4,{children:h||d}),m&&e.jsx(O4,{children:m})]})})};try{R.displayName="FiltersActionsFiltersButtonWithPopover",R.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const q=c(E4).attrs(u=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:e.jsx(Z,{size:"xs",color:"inherit"}),style:{...u.style,visibility:u.isVisible?"visible":"hidden",pointerEvents:u.isVisible?"auto":"none"}}))`
  ${({$css:u})=>u}
`;try{q.displayName="ResetAllFiltersButton",q.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j=c(B4).attrs(u=>({size:"s",view:"primary",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{j.displayName="FiltersActionsSegmentItem",j.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const z=({...u})=>e.jsx(w4,{size:"m",toggleSize:"s",hasBackground:!0,...u});try{z.displayName="SwitcherFilter",z.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const L4=(u,t)=>{if(!u&&!t)return;const d=u&&{$css:u.split(" ").map((n,a)=>({[`& > *:nth-child(${a+1})`]:{width:n}})).reduce((n,a)=>({...n,...a}),{})};return G`
    ${()=>d&&d.$css};
    ${()=>t&&t};
  `},H4=c(P)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Q=c.div`
  padding-block: 8px;
  border-radius: ${()=>d4};
`,M4=c(Q)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,X4=c(P)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,r=({mainBlock:u,listOfFilters:t,activeButtonsBlock:d,mainBlockElementsWidth:n,containerProps:a,mainBlockProps:{$css:m,ref:s,...p}={},onResize:i})=>{const o=f.useRef(null),F=f.useRef(null),A=f.useRef(null);return f.useLayoutEffect(()=>{if(!i)return;const y=o.current,B=F.current,h=A.current;if(!y||!B)return;const l={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},D=()=>{const V=y.getBoundingClientRect().width,v=B.getBoundingClientRect().width,x=h?h.getBoundingClientRect().width:0,E=v;l.containerWidth=V,l.mainBlockWidth=v,l.buttonsBlockWidth=x,l.availableMainBlockWidth=E,i({...l})},g=x4(()=>{D()});return g.observe(y),g.observe(B),h&&g.observe(h),D(),()=>{g.disconnect()}},[i]),e.jsx(H4,{ref:o,...a,children:e.jsxs(Q,{children:[e.jsxs(X4,{$css:L4(n,m),...p,ref:b4(s,F),children:[u,d&&e.jsx(M4,{ref:A,children:d})]}),t]})})};r.FiltersButton=I;r.DotsIconButton=D4;r.ListOfFilters=k4;r.TextFieldSearch=J;r.Tabs=k;r.TabItem=N;r.SegmentItem=j;r.Tooltip=K;r.TooltipList=K;r.FilterPopover=R;r.FiltersButtonWithPopover=R;r.ResetAllFiltersButton=q;r.SwitcherFilter=z;r.RedDot=T;try{r.displayName="FiltersActions",r.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}try{r.FiltersButton.displayName="FiltersActions.FiltersButton",r.FiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.FiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.Tabs.displayName="FiltersActions.Tabs",r.Tabs.__docgenInfo={description:"",displayName:"FiltersActions.Tabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.TabItem.displayName="FiltersActions.TabItem",r.TabItem.__docgenInfo={description:"",displayName:"FiltersActions.TabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.SegmentItem.displayName="FiltersActions.SegmentItem",r.SegmentItem.__docgenInfo={description:"",displayName:"FiltersActions.SegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.ResetAllFiltersButton.displayName="FiltersActions.ResetAllFiltersButton",r.ResetAllFiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.SwitcherFilter.displayName="FiltersActions.SwitcherFilter",r.SwitcherFilter.__docgenInfo={description:"",displayName:"FiltersActions.SwitcherFilter",props:{}}}catch{}try{r.RedDot.displayName="FiltersActions.RedDot",r.RedDot.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"FiltersActions.RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}function M(u,t,d){const{visible:n=[],inOverlay:a=[],hidden:m=[],modifications:s={},customActions:p={}}=d,i=new Set(n),o=new Set(a),F=new Set(m),A=u.filter(l=>i.has(l.id)),y=u.filter(l=>o.has(l.id)),B=u.filter(l=>F.has(l.id)),h=[];return n.forEach(l=>{h.push({type:"show",targetId:l,payload:null})}),a.forEach(l=>{h.push({type:"moveToOverlay",targetId:l,payload:null})}),m.forEach(l=>{h.push({type:"hide",targetId:l,payload:null})}),Object.entries(s).forEach(([l,D])=>{h.push({type:"modify",targetId:l,payload:D})}),{visibleItems:A,overlayItems:y,hiddenItems:B,modifications:s,actions:h,activeBreakpoint:t,hasOverlayItems:y.length>0,hasModifications:Object.keys(s).length>0,customActions:p}}const X=({items:u,width:t,breakpoints:d})=>{const n=f.useMemo(()=>{const s=Object.entries(d).map(([i,o])=>({breakpoint:Number(i),config:o})).sort((i,o)=>o.breakpoint-i.breakpoint),p=s.find(({breakpoint:i})=>t>=i);if(!p){const i=s[s.length-1];return M(u,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return M(u,p.breakpoint,p.config)},[u,t,d]),a=f.useCallback((s,p)=>{if(!s)return{};const i={...s.style};return s.width?i.width=s.width:s.widthPercent&&p?i.width=`${p*s.widthPercent/100}px`:s.widthPercent&&(i.width=`${s.widthPercent}%`),i},[]),m=f.useCallback((s,p)=>s.some(i=>{const o=p[i.id];return o===void 0?!1:Array.isArray(o)?o.length>0:typeof o=="boolean"?o===!0:typeof o=="string"?o!=="":typeof o=="number"?o!==0:!!o}),[]);return{...n,getItemStyle:a,hasActiveFilters:m}};try{X.displayName="useAdaptiveFilters",X.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}export{L as F,T as R,k4 as a,r as b,H as c,I as d,N as e,k as f,X as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-DEBHSdGI.js","assets/react-DYHuXpTF.js","assets/_commonjsHelpers-BosuxZz1.js","assets/Box-DwiKSnnX.js","assets/styled-components-C3-Vg48S.js","assets/react-is-CT-rZfBU.js","assets/vendor-DQaMhftP.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/@tanstack/react-virtual-EEUi7wi6.js","assets/vendor-CwzC1fIw.css","assets/Collapse-mn0OPShb.js","assets/utils-DbMTrPCQ.js","assets/constants-Des9Datc.js","assets/@sddsjs/sdds_finai-CcsTvjys.js","assets/@sddsjs/sdds_finai-CvKT8RgX.css","assets/sharedUtilsDebug-BX_KjCjW.js","assets/@salutejs/sdds-finai-BHH5Fs72.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/@salutejs/plasma-icons-DAdkqmmH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
