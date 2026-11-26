import{r as p,b as u}from"./react-UEdzNlUe.js";import{d9 as ue,da as te,cI as ie,z as se,E as ne,db as oe,G as re,l as ae,c$ as le,k as de}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as d,A as U}from"./styled-components-BSCswbR3.js";import{g as ce,I as Z,D as me,c as pe,i as fe,h as he,d as ye,j as Fe,P as ge,k as be,S as Ee}from"./@salutejs/sdds-finai-C9AHDOh5.js";import{b as ke,d as $,a as xe,e as J}from"./@salutejs/plasma-icons-CGioElEJ.js";import{a as Be}from"./IconButton-DZJTAkfX.js";import{T as K}from"./TextField-tPdr40MJ.js";import{T as O}from"./TooltipList-WyihhvAI.js";import{c as Ae,f as ve}from"./utils-BfZGf093.js";import{B as W}from"./Box-3Z-m9LhI.js";import{D as Ne}from"./constants-Des9Datc.js";import{_ as De}from"./preload-helper-DY3st4ya.js";import{S as _e}from"./Switch-OG9YqfkE.js";const we=()=>U(te),Ve=d.div`
  color: ${()=>ue};
  ${()=>we()}

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
`,Ce=({groupLabel:e,items:t})=>u.jsxDEV(Ve,{children:[u.jsxDEV("span",{children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:40,columnNumber:5},void 0),u.jsxDEV("ul",{children:t.map(l=>u.jsxDEV("li",{children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:43,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:39,columnNumber:3},void 0),H=({groupLabel:e,items:t,children:l,...n})=>{const[o,m]=p.useState(!1),s=t.length>0;return p.useEffect(()=>{if(!s){m(!0);const c=setTimeout(()=>{m(!1)},0);return()=>clearTimeout(c)}},[s]),u.jsxDEV(ce,{usePortal:!0,trigger:s?(n==null?void 0:n.trigger)??"hover":"none",text:u.jsxDEV(Ce,{groupLabel:e,items:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:92,columnNumber:13},void 0),size:"s",...n,children:l},`tooltip-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:88,columnNumber:5},void 0)};try{H.displayName="FiltersActionsTooltip",H.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}const L=({dropdownProps:e,iconSize:t,...l})=>{const n=u.jsxDEV(Z,{view:"secondary",size:"s",...l,children:u.jsxDEV(ke,{size:t??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:21,columnNumber:5},void 0);return e?u.jsxDEV(me,{...e,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:30,columnNumber:10},void 0):n};try{L.displayName="FiltersActionsDotsIconButton",L.__docgenInfo={description:"",displayName:"FiltersActionsDotsIconButton",props:{}}}catch{}const D=({visible:e,topLeft:t})=>u.jsxDEV(W,{$css:{position:"absolute",top:t??0,right:t??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:Ne,backgroundColor:"transparent",transform:"scale(0)",...e&&{backgroundColor:ie,transform:"scale(1)"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Circle.tsx",lineNumber:13,columnNumber:3},void 0);try{D.displayName="Circle",D.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const _=d(pe).attrs(({redSquare:e,hideLabel:t=!1,size:l,iconSize:n,children:o,...m})=>({view:"secondary",size:l??"s",type:"button",contentLeft:!t&&u.jsxDEV($,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:26,columnNumber:32},void 0),children:u.jsxDEV(u.Fragment,{children:[o??(!t&&(m.text??"Ещё фильтры")),t&&u.jsxDEV($,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:30,columnNumber:23},void 0),u.jsxDEV(D,{visible:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:31,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:28,columnNumber:7},void 0),...m}))`
  position: relative;
  white-space: nowrap;
`;try{_.displayName="FiltersActionsFiltersButton",_.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Ie=p.lazy(()=>De(()=>import("./ListOfFilters-5cngSlpR.js").then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Re=d(Ie).attrs(({paddingTop:e,...t})=>({paddingTop:8,...t}))``,w=({visible:e,offset:t})=>u.jsxDEV(D,{visible:e,topLeft:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx",lineNumber:24,columnNumber:3},void 0);try{w.displayName="RedDot",w.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const I=d(fe).attrs(e=>({size:"xs",view:"filled",...e}))`
  & {
    margin: -2px;
    ${({$css:e})=>e}
  }
`,R=d(he).attrs(e=>({size:"s",view:"default",...e}))`
  & {
    ${({$css:e})=>e}
  }
`;try{I.displayName="FiltersActionsTabs",I.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{R.displayName="FiltersActionsTabItem",R.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const y={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},Te=()=>typeof window<"u"?window.innerHeight*y.maxHeightViewportRatio:y.fallbackMaxHeight,Pe=()=>({minHeight:y.minHeight,minWidth:y.minWidth,maxWidth:y.maxWidth,maxHeight:Te(),defaultSize:{width:y.defaultWidth,height:y.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:u.jsxDEV(xe,{color:se},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.utils.tsx",lineNumber:30,columnNumber:18},void 0),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),T=e=>{if(e===!1)return!1;const t=Pe();return typeof e=="object"&&e!==null?{...t,...e}:t};try{T.displayName="getFiltersPopoverResizable",T.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const N={backgroundPrimary:()=>oe,borderRadiusM:()=>ae,shadowDownHardS:()=>le,surfaceSolidCard:()=>re},je=d(ge)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${N.backgroundPrimary}; */
  }
`,Se=d.div`
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
`,We=d.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,ze=d.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,qe=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:e})=>e?"8px":"0"};
`,$e=d.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,Oe=d.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,V=({title:e,subtitle:t,content:l,state:n,onClose:o,footer:m,redSquare:s=!1,popoverProps:c={},buttonProps:i,renderTarget:r,searchable:F,searchValue:k,onSearchChange:h,searchingProps:b,emptySearchContent:f})=>{const{resizable:a,...x}=c,E=T(a),[C,v]=p.useState(!1),[B,g]=n??[C,v],Y=p.useCallback(()=>{g(!1),o==null||o()},[o,g]),ee=p.useCallback(A=>{g(A),A||o==null||o()},[o,g]),z=p.useCallback(()=>{g(!B)},[B,g]);return u.jsxDEV(je,{opened:B,onToggle:ee,target:r?r({onClick:z,isOpen:B,isRedDotVisible:s,RedDot:w}):u.jsxDEV(_,{redSquare:s,hideLabel:!1,iconSize:"s",...i,onClick:A=>{var q;(q=i==null?void 0:i.onClick)==null||q.call(i,A),z()}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:299,columnNumber:11},void 0),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:E,...x,children:u.jsxDEV(Se,{$resizable:E!==!1,children:[u.jsxDEV(We,{children:[u.jsxDEV(ze,{children:[u.jsxDEV(qe,{$searchable:F,children:[u.jsxDEV(ye,{bold:!0,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:329,columnNumber:15},void 0),t&&u.jsxDEV(Fe,{color:ne,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:330,columnNumber:28},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:328,columnNumber:13},void 0),u.jsxDEV(Z,{onClick:Y,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:F?"8px":void 0},children:u.jsxDEV(J,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:342,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:332,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:327,columnNumber:11},void 0),F&&u.jsxDEV(K,{value:k,onChange:A=>h==null?void 0:h(A.target.value),placeholder:"Поиск",...b},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:346,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:326,columnNumber:9},void 0),u.jsxDEV($e,{children:f||l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:356,columnNumber:9},void 0),m&&u.jsxDEV(Oe,{children:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:359,columnNumber:20},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:324,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:287,columnNumber:5},void 0)};try{V.displayName="FiltersActionsFiltersButtonWithPopover",V.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const P=d(be).attrs(e=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:u.jsxDEV(J,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx",lineNumber:18,columnNumber:18},void 0),style:{...e.style,visibility:e.isVisible?"visible":"hidden",pointerEvents:e.isVisible?"auto":"none"}}))`
  ${({$css:e})=>e}
`;try{P.displayName="ResetAllFiltersButton",P.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j=d(Ee).attrs(e=>({size:"s",view:"primary",...e}))`
  & {
    ${({$css:e})=>e}
  }
`;try{j.displayName="FiltersActionsSegmentItem",j.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const S=({...e})=>u.jsxDEV(_e,{size:"m",toggleSize:"s",hasBackground:!0,...e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx",lineNumber:6,columnNumber:3},void 0);try{S.displayName="SwitcherFilter",S.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const He=(e,t)=>{if(!e&&!t)return;const l=e&&{$css:e.split(" ").map((n,o)=>({[`& > *:nth-child(${o+1})`]:{width:n}})).reduce((n,o)=>({...n,...o}),{})};return U`
    ${()=>l&&l.$css};
    ${()=>t&&t};
  `},Le=d(W)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Q=d.div`
  padding-block: 8px;
  border-radius: ${()=>de};
`,Me=d(Q)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,Xe=d(W)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,Ge=({mainBlock:e,listOfFilters:t,activeButtonsBlock:l,mainBlockElementsWidth:n,containerProps:o,mainBlockProps:{$css:m,ref:s,...c}={},onResize:i})=>{const r=p.useRef(null),F=p.useRef(null),k=p.useRef(null);return p.useLayoutEffect(()=>{if(!i)return;const h=r.current,b=F.current,f=k.current;if(!h||!b)return;const a={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},x=()=>{const C=h.getBoundingClientRect().width,v=b.getBoundingClientRect().width,B=f?f.getBoundingClientRect().width:0,g=v;a.containerWidth=C,a.mainBlockWidth=v,a.buttonsBlockWidth=B,a.availableMainBlockWidth=g,i({...a})},E=Ae(()=>{x()});return E.observe(h),E.observe(b),f&&E.observe(f),x(),()=>{E.disconnect()}},[i]),u.jsxDEV(Le,{ref:r,...o,children:u.jsxDEV(Q,{children:[u.jsxDEV(Xe,{$css:He(n,m),...c,ref:ve(s,F),children:[e,l&&u.jsxDEV(Me,{ref:k,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:153,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:146,columnNumber:9},void 0),t]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:145,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:144,columnNumber:5},void 0)},M=Object.assign(Ge,{FiltersButton:_,DotsIconButton:Be,ListOfFilters:Re,TextFieldSearch:K,Tabs:I,TabItem:R,SegmentItem:j,Tooltip:O,TooltipList:O,FilterPopover:V,FiltersButtonWithPopover:V,ResetAllFiltersButton:P,SwitcherFilter:S,RedDot:w});try{M.displayName="FiltersActions",M.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}function X(e,t,l){const{visible:n=[],inOverlay:o=[],hidden:m=[],modifications:s={},customActions:c={}}=l,i=new Set(n),r=new Set(o),F=new Set(m),k=e.filter(a=>i.has(a.id)),h=e.filter(a=>r.has(a.id)),b=e.filter(a=>F.has(a.id)),f=[];return n.forEach(a=>{f.push({type:"show",targetId:a,payload:null})}),o.forEach(a=>{f.push({type:"moveToOverlay",targetId:a,payload:null})}),m.forEach(a=>{f.push({type:"hide",targetId:a,payload:null})}),Object.entries(s).forEach(([a,x])=>{f.push({type:"modify",targetId:a,payload:x})}),{visibleItems:k,overlayItems:h,hiddenItems:b,modifications:s,actions:f,activeBreakpoint:t,hasOverlayItems:h.length>0,hasModifications:Object.keys(s).length>0,customActions:c}}const G=({items:e,width:t,breakpoints:l})=>{const n=p.useMemo(()=>{const s=Object.entries(l).map(([i,r])=>({breakpoint:Number(i),config:r})).sort((i,r)=>r.breakpoint-i.breakpoint),c=s.find(({breakpoint:i})=>t>=i);if(!c){const i=s[s.length-1];return X(e,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return X(e,c.breakpoint,c.config)},[e,t,l]),o=p.useCallback((s,c)=>{if(!s)return{};const i={...s.style};return s.width?i.width=s.width:s.widthPercent&&c?i.width=`${c*s.widthPercent/100}px`:s.widthPercent&&(i.width=`${s.widthPercent}%`),i},[]),m=p.useCallback((s,c)=>s.some(i=>{const r=c[i.id];return r===void 0?!1:Array.isArray(r)?r.length>0:typeof r=="boolean"?r===!0:typeof r=="string"?r!=="":typeof r=="number"?r!==0:!!r}),[]);return{...n,getItemStyle:o,hasActiveFilters:m}};try{G.displayName="useAdaptiveFilters",G.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}export{H as F,w as R,Re as a,M as b,L as c,_ as d,R as e,I as f,G as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-5cngSlpR.js","assets/react-UEdzNlUe.js","assets/_commonjsHelpers-BosuxZz1.js","assets/Box-3Z-m9LhI.js","assets/styled-components-BSCswbR3.js","assets/react-is-CJ4CjPIR.js","assets/vendor-DX-rrd2O.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/@tanstack/react-virtual-Z5qLdlzb.js","assets/vendor-CwzC1fIw.css","assets/Collapse-DxXZ8FX5.js","assets/utils-BfZGf093.js","assets/constants-Des9Datc.js","assets/@sddsjs/sdds_finai-CcsTvjys.js","assets/@sddsjs/sdds_finai-CvKT8RgX.css","assets/sharedUtilsDebug-BX_KjCjW.js","assets/@salutejs/sdds-finai-C9AHDOh5.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/@salutejs/plasma-icons-CGioElEJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
