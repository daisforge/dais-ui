import{r as f,j as e}from"./react-DYHuXpTF.js";import{d9 as e4,da as t4,cI as i4,z as r4,E as s4,db as n4,G as o4,l as a4,c$ as l4,k as d4}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as d,A as U}from"./styled-components-BADHLMuD.js";import{g as c4,I as Z,D as p4,c as f4,i as m4,h as h4,d as y4,j as g4,P as B4,k as _4,S as F4}from"./@salutejs/sdds-finai-DJh4O7Qc.js";import{b as E4,d as $,a as x4,e as J}from"./@salutejs/plasma-icons-CbqEe6UO.js";import{a as A4}from"./IconButton-D0PB5P2c.js";import{T as K}from"./TextField-CNv1rZv2.js";import{T as O}from"./TooltipList-CSPnrynf.js";import{c as b4,f as D4}from"./utils-Cdl8HW_v.js";import{B as q}from"./Box-Juih1CKQ.js";import{D as v4}from"./constants-Des9Datc.js";import{_ as C4}from"./preload-helper-DeA7wft2.js";import{S as w4}from"./Switch-yg_3Nt0z.js";const k4=()=>U(t4),I4=d.div`
  color: ${()=>e4};
  ${()=>k4()}

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
`,R4=({groupLabel:u,items:t})=>e.jsxs(I4,{children:[e.jsx("span",{children:u}),e.jsx("ul",{children:t.map(l=>e.jsx("li",{children:l}))})]}),H=({groupLabel:u,items:t,children:l,...s})=>{const[n,p]=f.useState(!1),r=t.length>0;return f.useEffect(()=>{if(!r){p(!0);const c=setTimeout(()=>{p(!1)},0);return()=>clearTimeout(c)}},[r]),e.jsx(c4,{usePortal:!0,trigger:r?(s==null?void 0:s.trigger)??"hover":"none",text:e.jsx(R4,{groupLabel:u,items:t}),size:"s",...s,children:l},`tooltip-${n}`)};try{H.displayName="FiltersActionsTooltip",H.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}const L=({dropdownProps:u,iconSize:t,...l})=>{const s=e.jsx(Z,{view:"secondary",size:"s",...l,children:e.jsx(E4,{size:t??"s"})});return u?e.jsx(p4,{...u,children:s}):s};try{L.displayName="FiltersActionsDotsIconButton",L.__docgenInfo={description:"",displayName:"FiltersActionsDotsIconButton",props:{}}}catch{}const C=({visible:u,topLeft:t})=>e.jsx(q,{$css:{position:"absolute",top:t??0,right:t??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:v4,backgroundColor:"transparent",transform:"scale(0)",...u&&{backgroundColor:i4,transform:"scale(1)"}}});try{C.displayName="Circle",C.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const w=d(f4).attrs(({redSquare:u,hideLabel:t=!1,size:l,iconSize:s,children:n,...p})=>({view:"secondary",size:l??"s",type:"button",contentLeft:!t&&e.jsx($,{size:s??"s"}),children:e.jsxs(e.Fragment,{children:[n??(!t&&(p.text??"Ещё фильтры")),t&&e.jsx($,{size:s??"s"}),e.jsx(C,{visible:u})]}),...p}))`
  position: relative;
  white-space: nowrap;
`;try{w.displayName="FiltersActionsFiltersButton",w.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const T4=f.lazy(()=>C4(()=>import("./ListOfFilters-DBouarlG.js").then(u=>u.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),j4=d(T4).attrs(({paddingTop:u,...t})=>({paddingTop:8,...t}))``,k=({visible:u,offset:t})=>e.jsx(C,{visible:u,topLeft:t});try{k.displayName="RedDot",k.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const T=d(m4).attrs(u=>({size:"xs",view:"filled",...u}))`
  & {
    margin: -2px;
    ${({$css:u})=>u}
  }
`,j=d(h4).attrs(u=>({size:"s",view:"default",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{T.displayName="FiltersActionsTabs",T.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{j.displayName="FiltersActionsTabItem",j.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const y={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},V4=()=>typeof window<"u"?window.innerHeight*y.maxHeightViewportRatio:y.fallbackMaxHeight,S4=()=>({minHeight:y.minHeight,minWidth:y.minWidth,maxWidth:y.maxWidth,maxHeight:V4(),defaultSize:{width:y.defaultWidth,height:y.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:e.jsx(x4,{color:r4}),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),V=u=>{if(u===!1)return!1;const t=S4();return typeof u=="object"&&u!==null?{...t,...u}:t};try{V.displayName="getFiltersPopoverResizable",V.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const v={backgroundPrimary:()=>n4,borderRadiusM:()=>a4,shadowDownHardS:()=>l4,surfaceSolidCard:()=>o4},z4=d(B4)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${v.backgroundPrimary}; */
  }
`,N4=d.div`
  background-color: ${v.surfaceSolidCard};
  border-radius: ${v.borderRadiusM};
  box-shadow: ${v.shadowDownHardS};
  ${({$resizable:u})=>u?"":`
    min-width: ${y.minWidth}px;
    max-width: ${y.maxWidth}px;
    max-height: ${y.maxHeightViewportRatio*100}dvh;
  `}
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`,q4=d.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,P4=d.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,W4=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:u})=>u?"8px":"0"};
`,$4=d.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,O4=d.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,I=({title:u,subtitle:t,content:l,state:s,onClose:n,footer:p,redSquare:r=!1,popoverProps:c={},buttonProps:i,renderTarget:o,searchable:g,searchValue:E,onSearchChange:h,searchingProps:_,emptySearchContent:m})=>{const{resizable:a,...x}=c,F=V(a),[R,D]=f.useState(!1),[A,B]=s??[R,D],Y=f.useCallback(()=>{B(!1),n==null||n()},[n,B]),u4=f.useCallback(b=>{B(b),b||n==null||n()},[n,B]),P=f.useCallback(()=>{B(!A)},[A,B]);return e.jsx(z4,{opened:A,onToggle:u4,target:o?o({onClick:P,isOpen:A,isRedDotVisible:r,RedDot:k}):e.jsx(w,{redSquare:r,hideLabel:!1,iconSize:"s",...i,onClick:b=>{var W;(W=i==null?void 0:i.onClick)==null||W.call(i,b),P()}}),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:F,...x,children:e.jsxs(N4,{$resizable:F!==!1,children:[e.jsxs(q4,{children:[e.jsxs(P4,{children:[e.jsxs(W4,{$searchable:g,children:[e.jsx(y4,{bold:!0,children:u}),t&&e.jsx(g4,{color:s4,children:t})]}),e.jsx(Z,{onClick:Y,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:g?"8px":void 0},children:e.jsx(J,{size:"xs"})})]}),g&&e.jsx(K,{value:E,onChange:b=>h==null?void 0:h(b.target.value),placeholder:"Поиск",..._})]}),e.jsx($4,{children:m||l}),p&&e.jsx(O4,{children:p})]})})};try{I.displayName="FiltersActionsFiltersButtonWithPopover",I.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const S=d(_4).attrs(u=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:e.jsx(J,{size:"xs",color:"inherit"}),style:{...u.style,visibility:u.isVisible?"visible":"hidden",pointerEvents:u.isVisible?"auto":"none"}}))`
  ${({$css:u})=>u}
`;try{S.displayName="ResetAllFiltersButton",S.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const z=d(F4).attrs(u=>({size:"s",view:"primary",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{z.displayName="FiltersActionsSegmentItem",z.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const N=({...u})=>e.jsx(w4,{size:"m",toggleSize:"s",hasBackground:!0,...u});try{N.displayName="SwitcherFilter",N.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const H4=(u,t)=>{if(!u&&!t)return;const l=u&&{$css:u.split(" ").map((s,n)=>({[`& > *:nth-child(${n+1})`]:{width:s}})).reduce((s,n)=>({...s,...n}),{})};return U`
    ${()=>l&&l.$css};
    ${()=>t&&t};
  `},L4=d(q)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Q=d.div`
  padding-block: 8px;
  border-radius: ${()=>d4};
`,M4=d(Q)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,X4=d(q)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,G4=({mainBlock:u,listOfFilters:t,activeButtonsBlock:l,mainBlockElementsWidth:s,containerProps:n,mainBlockProps:{$css:p,ref:r,...c}={},onResize:i})=>{const o=f.useRef(null),g=f.useRef(null),E=f.useRef(null);return f.useLayoutEffect(()=>{if(!i)return;const h=o.current,_=g.current,m=E.current;if(!h||!_)return;const a={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},x=()=>{const R=h.getBoundingClientRect().width,D=_.getBoundingClientRect().width,A=m?m.getBoundingClientRect().width:0,B=D;a.containerWidth=R,a.mainBlockWidth=D,a.buttonsBlockWidth=A,a.availableMainBlockWidth=B,i({...a})},F=b4(()=>{x()});return F.observe(h),F.observe(_),m&&F.observe(m),x(),()=>{F.disconnect()}},[i]),e.jsx(L4,{ref:o,...n,children:e.jsxs(Q,{children:[e.jsxs(X4,{$css:H4(s,p),...c,ref:D4(r,g),children:[u,l&&e.jsx(M4,{ref:E,children:l})]}),t]})})},M=Object.assign(G4,{FiltersButton:w,DotsIconButton:A4,ListOfFilters:j4,TextFieldSearch:K,Tabs:T,TabItem:j,SegmentItem:z,Tooltip:O,TooltipList:O,FilterPopover:I,FiltersButtonWithPopover:I,ResetAllFiltersButton:S,SwitcherFilter:N,RedDot:k});try{M.displayName="FiltersActions",M.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}function X(u,t,l){const{visible:s=[],inOverlay:n=[],hidden:p=[],modifications:r={},customActions:c={}}=l,i=new Set(s),o=new Set(n),g=new Set(p),E=u.filter(a=>i.has(a.id)),h=u.filter(a=>o.has(a.id)),_=u.filter(a=>g.has(a.id)),m=[];return s.forEach(a=>{m.push({type:"show",targetId:a,payload:null})}),n.forEach(a=>{m.push({type:"moveToOverlay",targetId:a,payload:null})}),p.forEach(a=>{m.push({type:"hide",targetId:a,payload:null})}),Object.entries(r).forEach(([a,x])=>{m.push({type:"modify",targetId:a,payload:x})}),{visibleItems:E,overlayItems:h,hiddenItems:_,modifications:r,actions:m,activeBreakpoint:t,hasOverlayItems:h.length>0,hasModifications:Object.keys(r).length>0,customActions:c}}const G=({items:u,width:t,breakpoints:l})=>{const s=f.useMemo(()=>{const r=Object.entries(l).map(([i,o])=>({breakpoint:Number(i),config:o})).sort((i,o)=>o.breakpoint-i.breakpoint),c=r.find(({breakpoint:i})=>t>=i);if(!c){const i=r[r.length-1];return X(u,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return X(u,c.breakpoint,c.config)},[u,t,l]),n=f.useCallback((r,c)=>{if(!r)return{};const i={...r.style};return r.width?i.width=r.width:r.widthPercent&&c?i.width=`${c*r.widthPercent/100}px`:r.widthPercent&&(i.width=`${r.widthPercent}%`),i},[]),p=f.useCallback((r,c)=>r.some(i=>{const o=c[i.id];return o===void 0?!1:Array.isArray(o)?o.length>0:typeof o=="boolean"?o===!0:typeof o=="string"?o!=="":typeof o=="number"?o!==0:!!o}),[]);return{...s,getItemStyle:n,hasActiveFilters:p}};try{G.displayName="useAdaptiveFilters",G.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}export{H as F,k as R,j4 as a,M as b,L as c,w as d,j as e,T as f,G as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-DBouarlG.js","assets/react-DYHuXpTF.js","assets/_commonjsHelpers-BosuxZz1.js","assets/Box-Juih1CKQ.js","assets/styled-components-BADHLMuD.js","assets/react-is-CT-rZfBU.js","assets/vendor-BpmB3NYD.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/@tanstack/react-virtual-uAYy1xUY.js","assets/vendor-CwzC1fIw.css","assets/Collapse-Cm4Vf7gU.js","assets/utils-Cdl8HW_v.js","assets/constants-Des9Datc.js","assets/@sddsjs/sdds_finai-CcsTvjys.js","assets/@sddsjs/sdds_finai-CvKT8RgX.css","assets/sharedUtilsDebug-BX_KjCjW.js","assets/@salutejs/sdds-finai-DJh4O7Qc.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/@salutejs/plasma-icons-CbqEe6UO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
