import{r as f,b as e}from"./react-UEdzNlUe.js";import{d9 as eu,da as tu,cI as iu,z as su,E as ru,db as nu,G as ou,l as au,c$ as lu,k as du}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as c,A as G}from"./styled-components-BSCswbR3.js";import{g as cu,I as U,D as mu,c as pu,i as fu,h as hu,d as Fu,j as yu,P as Eu,k as gu,S as Au}from"./@salutejs/sdds-finai-C9AHDOh5.js";import{b as _u,d as O,a as Bu,e as Z}from"./@salutejs/plasma-icons-CeiXuCrU.js";import{a as bu}from"./IconButton-6UMpEOsj.js";import{T as J}from"./TextField-22C63cj3.js";import{T as K}from"./TooltipList-WyihhvAI.js";import{c as Du,f as xu}from"./utils-BfZGf093.js";import{B as W}from"./Box-3Z-m9LhI.js";import{D as ku}from"./constants-Des9Datc.js";import{_ as Nu}from"./preload-helper-EhFzO87Y.js";import{S as vu}from"./Switch-OG9YqfkE.js";const wu=()=>G(tu),Vu=c.div`
  color: ${()=>eu};
  ${()=>wu()}

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
`,Cu=({groupLabel:u,items:t})=>e.jsxDEV(Vu,{children:[e.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:40,columnNumber:5},void 0),e.jsxDEV("ul",{children:t.map(d=>e.jsxDEV("li",{children:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:43,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:39,columnNumber:3},void 0),L=({groupLabel:u,items:t,children:d,...n})=>{const[o,p]=f.useState(!1),r=t.length>0;return f.useEffect(()=>{if(!r){p(!0);const m=setTimeout(()=>{p(!1)},0);return()=>clearTimeout(m)}},[r]),e.jsxDEV(cu,{usePortal:!0,trigger:r?(n==null?void 0:n.trigger)??"hover":"none",text:e.jsxDEV(Cu,{groupLabel:u,items:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:92,columnNumber:13},void 0),size:"s",...n,children:d},`tooltip-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:88,columnNumber:5},void 0)};try{L.displayName="FiltersActionsTooltip",L.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}const H=({dropdownProps:u,iconSize:t,...d})=>{const n=e.jsxDEV(U,{view:"secondary",size:"s",...d,children:e.jsxDEV(_u,{size:t??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:21,columnNumber:5},void 0);return u?e.jsxDEV(mu,{...u,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:30,columnNumber:10},void 0):n};try{H.displayName="FiltersActionsDotsIconButton",H.__docgenInfo={description:"",displayName:"FiltersActionsDotsIconButton",props:{}}}catch{}const v=({visible:u,topLeft:t})=>e.jsxDEV(W,{$css:{position:"absolute",top:t??0,right:t??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:ku,backgroundColor:"transparent",transform:"scale(0)",...u&&{backgroundColor:iu,transform:"scale(1)"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Circle.tsx",lineNumber:13,columnNumber:3},void 0);try{v.displayName="Circle",v.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const w=c(pu).attrs(({redSquare:u,hideLabel:t=!1,size:d,iconSize:n,children:o,...p})=>({view:"secondary",size:d??"s",type:"button",contentLeft:!t&&e.jsxDEV(O,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:26,columnNumber:32},void 0),children:e.jsxDEV(e.Fragment,{children:[o??(!t&&(p.text??"Ещё фильтры")),t&&e.jsxDEV(O,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:30,columnNumber:23},void 0),e.jsxDEV(v,{visible:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:31,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:28,columnNumber:7},void 0),...p}))`
  position: relative;
  white-space: nowrap;
`;try{w.displayName="FiltersActionsFiltersButton",w.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Iu=f.lazy(()=>Nu(()=>import("./ListOfFilters-CEDMuRHg.js").then(u=>u.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Tu=c(Iu).attrs(({paddingTop:u,...t})=>({paddingTop:8,...t}))``,V=({visible:u,offset:t})=>e.jsxDEV(v,{visible:u,topLeft:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx",lineNumber:24,columnNumber:3},void 0);try{V.displayName="RedDot",V.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const T=c(fu).attrs(u=>({size:"xs",view:"filled",...u}))`
  & {
    margin: -2px;
    ${({$css:u})=>u}
  }
`,R=c(hu).attrs(u=>({size:"s",view:"default",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{T.displayName="FiltersActionsTabs",T.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{R.displayName="FiltersActionsTabItem",R.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const y={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},Ru=()=>typeof window<"u"?window.innerHeight*y.maxHeightViewportRatio:y.fallbackMaxHeight,Su=()=>({minHeight:y.minHeight,minWidth:y.minWidth,maxWidth:y.maxWidth,maxHeight:Ru(),defaultSize:{width:y.defaultWidth,height:y.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:e.jsxDEV(Bu,{color:su},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.utils.tsx",lineNumber:30,columnNumber:18},void 0),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),S=u=>{if(u===!1)return!1;const t=Su();return typeof u=="object"&&u!==null?{...t,...u}:t};try{S.displayName="getFiltersPopoverResizable",S.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const N={backgroundPrimary:()=>nu,borderRadiusM:()=>au,shadowDownHardS:()=>lu,surfaceSolidCard:()=>ou},qu=c(Eu)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${N.backgroundPrimary}; */
  }
`,Pu=c.div`
  background-color: ${N.surfaceSolidCard};
  border-radius: ${N.borderRadiusM};
  box-shadow: ${N.shadowDownHardS};
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
`,ju=c.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,Wu=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,zu=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:u})=>u?"8px":"0"};
`,$u=c.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,Ou=c.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,C=({title:u,subtitle:t,content:d,state:n,onClose:o,footer:p,redSquare:r=!1,popoverProps:m={},buttonProps:i,renderTarget:a,searchable:E,searchValue:B,onSearchChange:F,searchingProps:A,emptySearchContent:h})=>{const{resizable:l,...b}=m,_=S(l),[I,k]=f.useState(!1),[D,g]=n??[I,k],Y=f.useCallback(()=>{g(!1),o==null||o()},[o,g]),uu=f.useCallback(x=>{g(x),x||o==null||o()},[o,g]),z=f.useCallback(()=>{g(!D)},[D,g]);return e.jsxDEV(qu,{opened:D,onToggle:uu,target:a?a({onClick:z,isOpen:D,isRedDotVisible:r,RedDot:V}):e.jsxDEV(w,{redSquare:r,hideLabel:!1,iconSize:"s",...i,onClick:x=>{var $;($=i==null?void 0:i.onClick)==null||$.call(i,x),z()}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:299,columnNumber:11},void 0),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:_,...b,children:e.jsxDEV(Pu,{$resizable:_!==!1,children:[e.jsxDEV(ju,{children:[e.jsxDEV(Wu,{children:[e.jsxDEV(zu,{$searchable:E,children:[e.jsxDEV(Fu,{bold:!0,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:329,columnNumber:15},void 0),t&&e.jsxDEV(yu,{color:ru,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:330,columnNumber:28},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:328,columnNumber:13},void 0),e.jsxDEV(U,{onClick:Y,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:E?"8px":void 0},children:e.jsxDEV(Z,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:342,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:332,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:327,columnNumber:11},void 0),E&&e.jsxDEV(J,{value:B,onChange:x=>F==null?void 0:F(x.target.value),placeholder:"Поиск",...A},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:346,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:326,columnNumber:9},void 0),e.jsxDEV($u,{children:h||d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:356,columnNumber:9},void 0),p&&e.jsxDEV(Ou,{children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:359,columnNumber:20},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:324,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:287,columnNumber:5},void 0)};try{C.displayName="FiltersActionsFiltersButtonWithPopover",C.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const q=c(gu).attrs(u=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:e.jsxDEV(Z,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx",lineNumber:18,columnNumber:18},void 0),style:{...u.style,visibility:u.isVisible?"visible":"hidden",pointerEvents:u.isVisible?"auto":"none"}}))`
  ${({$css:u})=>u}
`;try{q.displayName="ResetAllFiltersButton",q.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const P=c(Au).attrs(u=>({size:"s",view:"primary",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{P.displayName="FiltersActionsSegmentItem",P.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j=({...u})=>e.jsxDEV(vu,{size:"m",toggleSize:"s",hasBackground:!0,...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx",lineNumber:6,columnNumber:3},void 0);try{j.displayName="SwitcherFilter",j.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const Lu=(u,t)=>{if(!u&&!t)return;const d=u&&{$css:u.split(" ").map((n,o)=>({[`& > *:nth-child(${o+1})`]:{width:n}})).reduce((n,o)=>({...n,...o}),{})};return G`
    ${()=>d&&d.$css};
    ${()=>t&&t};
  `},Hu=c(W)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Q=c.div`
  padding-block: 8px;
  border-radius: ${()=>du};
`,Mu=c(Q)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,Xu=c(W)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,s=({mainBlock:u,listOfFilters:t,activeButtonsBlock:d,mainBlockElementsWidth:n,containerProps:o,mainBlockProps:{$css:p,ref:r,...m}={},onResize:i})=>{const a=f.useRef(null),E=f.useRef(null),B=f.useRef(null);return f.useLayoutEffect(()=>{if(!i)return;const F=a.current,A=E.current,h=B.current;if(!F||!A)return;const l={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},b=()=>{const I=F.getBoundingClientRect().width,k=A.getBoundingClientRect().width,D=h?h.getBoundingClientRect().width:0,g=k;l.containerWidth=I,l.mainBlockWidth=k,l.buttonsBlockWidth=D,l.availableMainBlockWidth=g,i({...l})},_=Du(()=>{b()});return _.observe(F),_.observe(A),h&&_.observe(h),b(),()=>{_.disconnect()}},[i]),e.jsxDEV(Hu,{ref:a,...o,children:e.jsxDEV(Q,{children:[e.jsxDEV(Xu,{$css:Lu(n,p),...m,ref:xu(r,E),children:[u,d&&e.jsxDEV(Mu,{ref:B,children:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:153,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:146,columnNumber:9},void 0),t]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:145,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:144,columnNumber:5},void 0)};s.FiltersButton=w;s.DotsIconButton=bu;s.ListOfFilters=Tu;s.TextFieldSearch=J;s.Tabs=T;s.TabItem=R;s.SegmentItem=P;s.Tooltip=K;s.TooltipList=K;s.FilterPopover=C;s.FiltersButtonWithPopover=C;s.ResetAllFiltersButton=q;s.SwitcherFilter=j;s.RedDot=V;try{s.displayName="FiltersActions",s.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}try{s.FiltersButton.displayName="FiltersActions.FiltersButton",s.FiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.FiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.Tabs.displayName="FiltersActions.Tabs",s.Tabs.__docgenInfo={description:"",displayName:"FiltersActions.Tabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.TabItem.displayName="FiltersActions.TabItem",s.TabItem.__docgenInfo={description:"",displayName:"FiltersActions.TabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.SegmentItem.displayName="FiltersActions.SegmentItem",s.SegmentItem.__docgenInfo={description:"",displayName:"FiltersActions.SegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.ResetAllFiltersButton.displayName="FiltersActions.ResetAllFiltersButton",s.ResetAllFiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.SwitcherFilter.displayName="FiltersActions.SwitcherFilter",s.SwitcherFilter.__docgenInfo={description:"",displayName:"FiltersActions.SwitcherFilter",props:{}}}catch{}try{s.RedDot.displayName="FiltersActions.RedDot",s.RedDot.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"FiltersActions.RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}function M(u,t,d){const{visible:n=[],inOverlay:o=[],hidden:p=[],modifications:r={},customActions:m={}}=d,i=new Set(n),a=new Set(o),E=new Set(p),B=u.filter(l=>i.has(l.id)),F=u.filter(l=>a.has(l.id)),A=u.filter(l=>E.has(l.id)),h=[];return n.forEach(l=>{h.push({type:"show",targetId:l,payload:null})}),o.forEach(l=>{h.push({type:"moveToOverlay",targetId:l,payload:null})}),p.forEach(l=>{h.push({type:"hide",targetId:l,payload:null})}),Object.entries(r).forEach(([l,b])=>{h.push({type:"modify",targetId:l,payload:b})}),{visibleItems:B,overlayItems:F,hiddenItems:A,modifications:r,actions:h,activeBreakpoint:t,hasOverlayItems:F.length>0,hasModifications:Object.keys(r).length>0,customActions:m}}const X=({items:u,width:t,breakpoints:d})=>{const n=f.useMemo(()=>{const r=Object.entries(d).map(([i,a])=>({breakpoint:Number(i),config:a})).sort((i,a)=>a.breakpoint-i.breakpoint),m=r.find(({breakpoint:i})=>t>=i);if(!m){const i=r[r.length-1];return M(u,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return M(u,m.breakpoint,m.config)},[u,t,d]),o=f.useCallback((r,m)=>{if(!r)return{};const i={...r.style};return r.width?i.width=r.width:r.widthPercent&&m?i.width=`${m*r.widthPercent/100}px`:r.widthPercent&&(i.width=`${r.widthPercent}%`),i},[]),p=f.useCallback((r,m)=>r.some(i=>{const a=m[i.id];return a===void 0?!1:Array.isArray(a)?a.length>0:typeof a=="boolean"?a===!0:typeof a=="string"?a!=="":typeof a=="number"?a!==0:!!a}),[]);return{...n,getItemStyle:o,hasActiveFilters:p}};try{X.displayName="useAdaptiveFilters",X.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}export{L as F,V as R,Tu as a,s as b,H as c,w as d,R as e,T as f,X as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-CEDMuRHg.js","assets/react-UEdzNlUe.js","assets/_commonjsHelpers-BosuxZz1.js","assets/Box-3Z-m9LhI.js","assets/styled-components-BSCswbR3.js","assets/react-is-CJ4CjPIR.js","assets/vendor-DX-rrd2O.js","assets/tslib-DoU9Jm1N.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/@tanstack/react-virtual-Z5qLdlzb.js","assets/vendor-CwzC1fIw.css","assets/Collapse-DxXZ8FX5.js","assets/utils-BfZGf093.js","assets/constants-Des9Datc.js","assets/@sddsjs/sdds_finai-CcsTvjys.js","assets/@sddsjs/sdds_finai-CvKT8RgX.css","assets/sharedUtilsDebug-BX_KjCjW.js","assets/@salutejs/sdds-finai-C9AHDOh5.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/@salutejs/plasma-icons-CeiXuCrU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
