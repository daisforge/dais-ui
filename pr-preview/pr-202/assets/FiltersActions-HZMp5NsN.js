import{b as u,r as p}from"./react-UEdzNlUe.js";import{I as U,D as ue,c as te,i as ie,h as se,d as ne,n as oe,P as re,m as ae,t as le,g as de}from"./@salutejs/sdds-finai-CkM2RoIx.js";import{b as ce,d as $,a as me,e as Z}from"./@salutejs/plasma-icons-BPl9HMYM.js";import{a as pe}from"./IconButton-DE-9S934.js";import{a as J}from"./TextField-_kp-5o4i.js";import{T as O}from"./TooltipList--BueJEoS.js";import{c as fe,r as he}from"./utils-Booj3GAg.js";import{q as d,A as K}from"./styled-components-CDfPITHT.js";import{B as S}from"./Box-CZ_ZQ2uM.js";import{D as ye}from"./Table-XtziPUZ1.js";import{cI as Fe,z as ge,E as be,dr as Ee,G as xe,l as ke,c$ as Be,k as Ae,ds as ve,de as Ne}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{_ as De}from"./preload-helper-KkJ3rXAN.js";import{S as _e}from"./index-By_8dfga.js";const H=({dropdownProps:e,iconSize:t,...l})=>{const n=u.jsxDEV(U,{view:"secondary",size:"s",...l,children:u.jsxDEV(ce,{size:t??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:21,columnNumber:5},void 0);return e?u.jsxDEV(ue,{...e,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:30,columnNumber:10},void 0):n};try{H.displayName="FiltersActionsDotsIconButton",H.__docgenInfo={description:"",displayName:"FiltersActionsDotsIconButton",props:{}}}catch{}const D=({visible:e,topLeft:t})=>u.jsxDEV(S,{$css:{position:"absolute",top:t??0,right:t??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:ye,backgroundColor:"transparent",transform:"scale(0)",...e&&{backgroundColor:Fe,transform:"scale(1)"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Circle.tsx",lineNumber:13,columnNumber:3},void 0);try{D.displayName="Circle",D.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const _=d(te).attrs(({redSquare:e,hideLabel:t=!1,size:l,iconSize:n,children:o,...m})=>({view:"secondary",size:l??"s",type:"button",contentLeft:!t&&u.jsxDEV($,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:26,columnNumber:32},void 0),children:u.jsxDEV(u.Fragment,{children:[o??(!t&&(m.text??"Ещё фильтры")),t&&u.jsxDEV($,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:30,columnNumber:23},void 0),u.jsxDEV(D,{visible:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:31,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:28,columnNumber:7},void 0),...m}))`
  position: relative;
  white-space: nowrap;
`;try{_.displayName="FiltersActionsFiltersButton",_.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const we=p.lazy(()=>De(()=>import("./ListOfFilters-c3v_yIQj.js").then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]))),Ve=d(we).attrs(({paddingTop:e,...t})=>({paddingTop:8,...t}))``,w=({visible:e,offset:t})=>u.jsxDEV(D,{visible:e,topLeft:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx",lineNumber:24,columnNumber:3},void 0);try{w.displayName="RedDot",w.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const I=d(ie).attrs(e=>({size:"xs",view:"filled",...e}))`
  & {
    margin: -2px;
    ${({$css:e})=>e}
  }
`,R=d(se).attrs(e=>({size:"s",view:"default",...e}))`
  & {
    ${({$css:e})=>e}
  }
`;try{I.displayName="FiltersActionsTabs",I.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{R.displayName="FiltersActionsTabItem",R.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const y={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},Ce=()=>typeof window<"u"?window.innerHeight*y.maxHeightViewportRatio:y.fallbackMaxHeight,Ie=()=>({minHeight:y.minHeight,minWidth:y.minWidth,maxWidth:y.maxWidth,maxHeight:Ce(),defaultSize:{width:y.defaultWidth,height:y.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:u.jsxDEV(me,{color:ge},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.utils.tsx",lineNumber:30,columnNumber:18},void 0),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),T=e=>{if(e===!1)return!1;const t=Ie();return typeof e=="object"&&e!==null?{...t,...e}:t};try{T.displayName="getFiltersPopoverResizable",T.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const N={backgroundPrimary:()=>Ee,borderRadiusM:()=>ke,shadowDownHardS:()=>Be,surfaceSolidCard:()=>xe},Re=d(re)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${N.backgroundPrimary}; */
  }
`,Te=d.div`
  background-color: ${N.surfaceSolidCard};
  border-radius: ${N.borderRadiusM};
  box-shadow: ${N.shadowDownHardS};
  ${({$resizable:e})=>e?"":`
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
`,Pe=d.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,je=d.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,We=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:e})=>e?"8px":"0"};
`,Se=d.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,ze=d.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,V=({title:e,subtitle:t,content:l,state:n,onClose:o,footer:m,redSquare:s=!1,popoverProps:c={},buttonProps:i,renderTarget:r,searchable:F,searchValue:x,onSearchChange:h,searchingProps:b,emptySearchContent:f})=>{const{resizable:a,...k}=c,E=T(a),[C,v]=p.useState(!1),[B,g]=n??[C,v],Y=p.useCallback(()=>{g(!1),o==null||o()},[o,g]),ee=p.useCallback(A=>{g(A),A||o==null||o()},[o,g]),z=p.useCallback(()=>{g(!B)},[B,g]);return u.jsxDEV(Re,{opened:B,onToggle:ee,target:r?r({onClick:z,isOpen:B,isRedDotVisible:s,RedDot:w}):u.jsxDEV(_,{redSquare:s,hideLabel:!1,iconSize:"s",...i,onClick:A=>{var q;(q=i==null?void 0:i.onClick)==null||q.call(i,A),z()}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:299,columnNumber:11},void 0),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:E,...k,children:u.jsxDEV(Te,{$resizable:E!==!1,children:[u.jsxDEV(Pe,{children:[u.jsxDEV(je,{children:[u.jsxDEV(We,{$searchable:F,children:[u.jsxDEV(ne,{bold:!0,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:329,columnNumber:15},void 0),t&&u.jsxDEV(oe,{color:be,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:330,columnNumber:28},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:328,columnNumber:13},void 0),u.jsxDEV(U,{onClick:Y,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:F?"8px":void 0},children:u.jsxDEV(Z,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:342,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:332,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:327,columnNumber:11},void 0),F&&u.jsxDEV(J,{value:x,onChange:A=>h==null?void 0:h(A.target.value),placeholder:"Поиск",...b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:346,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:326,columnNumber:9},void 0),u.jsxDEV(Se,{children:f||l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:356,columnNumber:9},void 0),m&&u.jsxDEV(ze,{children:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:359,columnNumber:20},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:324,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:287,columnNumber:5},void 0)};try{V.displayName="FiltersActionsFiltersButtonWithPopover",V.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const P=d(ae).attrs(e=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:u.jsxDEV(Z,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx",lineNumber:18,columnNumber:18},void 0),style:{...e.style,visibility:e.isVisible?"visible":"hidden",pointerEvents:e.isVisible?"auto":"none"}}))`
  ${({$css:e})=>e}
`;try{P.displayName="ResetAllFiltersButton",P.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j=d(le).attrs(e=>({size:"s",view:"primary",...e}))`
  & {
    ${({$css:e})=>e}
  }
`;try{j.displayName="FiltersActionsSegmentItem",j.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const W=({...e})=>u.jsxDEV(_e,{size:"m",toggleSize:"s",hasBackground:!0,...e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx",lineNumber:6,columnNumber:3},void 0);try{W.displayName="SwitcherFilter",W.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const qe=(e,t)=>{if(!e&&!t)return;const l=e&&{$css:e.split(" ").map((n,o)=>({[`& > *:nth-child(${o+1})`]:{width:n}})).reduce((n,o)=>({...n,...o}),{})};return K`
    ${()=>l&&l.$css};
    ${()=>t&&t};
  `},$e=d(S)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Q=d.div`
  padding-block: 8px;
  border-radius: ${()=>Ae};
`,Oe=d(Q)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,He=d(S)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,Le=({mainBlock:e,listOfFilters:t,activeButtonsBlock:l,mainBlockElementsWidth:n,containerProps:o,mainBlockProps:{$css:m,ref:s,...c}={},onResize:i})=>{const r=p.useRef(null),F=p.useRef(null),x=p.useRef(null);return p.useLayoutEffect(()=>{if(!i)return;const h=r.current,b=F.current,f=x.current;if(!h||!b)return;const a={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},k=()=>{const C=h.getBoundingClientRect().width,v=b.getBoundingClientRect().width,B=f?f.getBoundingClientRect().width:0,g=v;a.containerWidth=C,a.mainBlockWidth=v,a.buttonsBlockWidth=B,a.availableMainBlockWidth=g,i({...a})},E=fe(()=>{k()});return E.observe(h),E.observe(b),f&&E.observe(f),k(),()=>{E.disconnect()}},[i]),u.jsxDEV($e,{ref:r,...o,children:u.jsxDEV(Q,{children:[u.jsxDEV(He,{$css:qe(n,m),...c,ref:he(s,F),children:[e,l&&u.jsxDEV(Oe,{ref:x,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:153,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:146,columnNumber:9},void 0),t]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:145,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:144,columnNumber:5},void 0)},L=Object.assign(Le,{FiltersButton:_,DotsIconButton:pe,ListOfFilters:Ve,TextFieldSearch:J,Tabs:I,TabItem:R,SegmentItem:j,Tooltip:O,TooltipList:O,FilterPopover:V,FiltersButtonWithPopover:V,ResetAllFiltersButton:P,SwitcherFilter:W,RedDot:w});try{L.displayName="FiltersActions",L.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}function M(e,t,l){const{visible:n=[],inOverlay:o=[],hidden:m=[],modifications:s={},customActions:c={}}=l,i=new Set(n),r=new Set(o),F=new Set(m),x=e.filter(a=>i.has(a.id)),h=e.filter(a=>r.has(a.id)),b=e.filter(a=>F.has(a.id)),f=[];return n.forEach(a=>{f.push({type:"show",targetId:a,payload:null})}),o.forEach(a=>{f.push({type:"moveToOverlay",targetId:a,payload:null})}),m.forEach(a=>{f.push({type:"hide",targetId:a,payload:null})}),Object.entries(s).forEach(([a,k])=>{f.push({type:"modify",targetId:a,payload:k})}),{visibleItems:x,overlayItems:h,hiddenItems:b,modifications:s,actions:f,activeBreakpoint:t,hasOverlayItems:h.length>0,hasModifications:Object.keys(s).length>0,customActions:c}}const X=({items:e,width:t,breakpoints:l})=>{const n=p.useMemo(()=>{const s=Object.entries(l).map(([i,r])=>({breakpoint:Number(i),config:r})).sort((i,r)=>r.breakpoint-i.breakpoint),c=s.find(({breakpoint:i})=>t>=i);if(!c){const i=s[s.length-1];return M(e,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return M(e,c.breakpoint,c.config)},[e,t,l]),o=p.useCallback((s,c)=>{if(!s)return{};const i={...s.style};return s.width?i.width=s.width:s.widthPercent&&c?i.width=`${c*s.widthPercent/100}px`:s.widthPercent&&(i.width=`${s.widthPercent}%`),i},[]),m=p.useCallback((s,c)=>s.some(i=>{const r=c[i.id];return r===void 0?!1:Array.isArray(r)?r.length>0:typeof r=="boolean"?r===!0:typeof r=="string"?r!=="":typeof r=="number"?r!==0:!!r}),[]);return{...n,getItemStyle:o,hasActiveFilters:m}};try{X.displayName="useAdaptiveFilters",X.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}const Me=()=>K(Ne),Xe=d.div`
  color: ${()=>ve};
  ${()=>Me()}

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
`,Ge=({groupLabel:e,items:t})=>u.jsxDEV(Xe,{children:[u.jsxDEV("span",{children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:40,columnNumber:5},void 0),u.jsxDEV("ul",{children:t.map(l=>u.jsxDEV("li",{children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:43,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:39,columnNumber:3},void 0),G=({groupLabel:e,items:t,children:l,...n})=>{const[o,m]=p.useState(!1),s=t.length>0;return p.useEffect(()=>{if(!s){m(!0);const c=setTimeout(()=>{m(!1)},0);return()=>clearTimeout(c)}},[s]),u.jsxDEV(de,{usePortal:!0,trigger:s?(n==null?void 0:n.trigger)??"hover":"none",text:u.jsxDEV(Ge,{groupLabel:e,items:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:92,columnNumber:13},void 0),size:"s",...n,children:l},`tooltip-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:88,columnNumber:5},void 0)};try{G.displayName="FiltersActionsTooltip",G.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}export{G as F,w as R,Ve as a,L as b,H as c,_ as d,R as e,I as f,X as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-c3v_yIQj.js","assets/react-UEdzNlUe.js","assets/_commonjsHelpers-BosuxZz1.js","assets/Box-CZ_ZQ2uM.js","assets/styled-components-CDfPITHT.js","assets/react-is-CJ4CjPIR.js","assets/vendor-DKFmtNka.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/@tanstack/react-virtual-0hY7ij6n.js","assets/vendor-CwzC1fIw.css","assets/Collapse-je_wNoe6.js","assets/utils-Booj3GAg.js","assets/constants-3UB8ZrMK.js","assets/@sddsjs/sdds_finai-CqI1dsZV.js","assets/@sddsjs/sdds_finai-CvKT8RgX.css","assets/sharedUtilsDebug-BX_KjCjW.js","assets/Table-XtziPUZ1.js","assets/index-By_8dfga.js","assets/@salutejs/sdds-finai-CkM2RoIx.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/@salutejs/plasma-icons-BPl9HMYM.js","assets/react-data-grid-zJbN7yQ-.js","assets/react-data-grid-B7R8wGeR.css","assets/TableTabs-HvjNq9qy.js","assets/TableCanvasSharedConstants-CqGDn8zL.js","assets/TableGlide-9pGS80-9.js","assets/@daisforge/glide-data-grid-DAsmNUnq.js","assets/preload-helper-KkJ3rXAN.js","assets/canvas-hypertxt-DsokSIOX.js","assets/@daisforge/glide-data-grid-CX9wdX8f.css","assets/countWhile-blgVacgU.js","assets/sharedUiSearch-S6VmH8Up.js","assets/TextField-_kp-5o4i.js","assets/sharedUtilsInputs-DKhoD9kx.js","assets/TypographyWithAutoTooltip-DQtPK5Qj.js","assets/Typography-BA5qaSRD.js","assets/lodash.isequal-mFNAsUE8.js","assets/Combobox-C6JBaB8n.js","assets/NumberFormat-DkWjZssr.js","assets/EmptyState-CJBToD3S.js","assets/unidentified@3x-DnyuMWBO.js","assets/MassActions-D9w9KKFY.js","assets/Autocomplete-BbyjSCwg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
