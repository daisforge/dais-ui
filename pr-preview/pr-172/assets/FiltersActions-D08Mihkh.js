import{d as e,r as f}from"./react-Ch9mc9Aq.js";import{D as tu,a as iu}from"./IconButton-eOYKhOpS.js";import{I as X,t as su,x as ru,w as nu,n as ou,l as au,P as lu,J as du,R as cu,U as mu,p as pu}from"./@salutejs/sdds-finai-DrNgC8XC.js";import{ia as fu,t0 as L,a as hu,fa as J}from"./@salutejs/plasma-icons-BYYYccLM.js";import{a as Z}from"./TextField-uO_Wxg3G.js";import{b as G}from"./AiAgentPopup-BnRwwsT1.js";import{c as yu,s as Fu}from"./utils-CzOQd3gO.js";import{q as c,A as Q}from"./styled-components-Bq12dC3g.js";import{B as z}from"./Box-B1SQihVo.js";import{D as Eu}from"./Table-CTH7dwj2.js";import{yp as gu,Av as _u,As as Au,b as bu,yK as Bu,t as Du,xK as xu,zr as ku,s as Nu,jg as vu,l as wu}from"./@sddsjs/sdds_finai-BSDEmCin.js";import{cz as Vu}from"./vendor-Ch15MtLz.js";const H=({dropdownProps:u,iconSize:t,...a})=>{const n=e.jsxDEV(X,{view:"secondary",size:"s",...a,children:e.jsxDEV(fu,{size:t??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:21,columnNumber:5},void 0);return u?e.jsxDEV(tu,{...u,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx",lineNumber:30,columnNumber:10},void 0):n};try{H.displayName="FiltersActionsDotsIconButton",H.__docgenInfo={description:"",displayName:"FiltersActionsDotsIconButton",props:{}}}catch{}const v=({visible:u,topLeft:t})=>e.jsxDEV(z,{$css:{position:"absolute",top:t??0,right:t??0,width:"8px",aspectRatio:"1",borderRadius:"50%",transition:Eu,backgroundColor:"transparent",transform:"scale(0)",...u&&{backgroundColor:gu,transform:"scale(1)"}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Circle.tsx",lineNumber:13,columnNumber:3},void 0);try{v.displayName="Circle",v.__docgenInfo={description:"",displayName:"Circle",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},topLeft:{defaultValue:null,description:"",name:"topLeft",required:!1,type:{name:"string | number"}}}}}catch{}const w=c(su).attrs(({redSquare:u,hideLabel:t=!1,size:a,iconSize:n,children:o,...p})=>({view:"secondary",size:a??"s",type:"button",contentLeft:!t&&e.jsxDEV(L,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:26,columnNumber:32},void 0),children:e.jsxDEV(e.Fragment,{children:[o??(!t&&(p.text??"Ещё фильтры")),t&&e.jsxDEV(L,{size:n??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:30,columnNumber:23},void 0),e.jsxDEV(v,{visible:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:31,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx",lineNumber:28,columnNumber:7},void 0),...p}))`
  position: relative;
  white-space: nowrap;
`;try{w.displayName="FiltersActionsFiltersButton",w.__docgenInfo={description:"",displayName:"FiltersActionsFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Cu=f.lazy(()=>Vu(()=>import("./ListOfFilters-Bo8y-uW1.js").then(u=>u.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]))),Iu=c(Cu).attrs(({paddingTop:u,...t})=>({paddingTop:8,...t}))``,V=({visible:u,offset:t})=>e.jsxDEV(v,{visible:u,topLeft:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx",lineNumber:24,columnNumber:3},void 0);try{V.displayName="RedDot",V.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}const T=c(ru).attrs(u=>({size:"xs",view:"filled",...u}))`
  & {
    margin: -2px;
    ${({$css:u})=>u}
  }
`,R=c(nu).attrs(u=>({size:"s",view:"default",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{T.displayName="FiltersActionsTabs",T.__docgenInfo={description:"",displayName:"FiltersActionsTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{R.displayName="FiltersActionsTabItem",R.__docgenInfo={description:"",displayName:"FiltersActionsTabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const F={minWidth:360,maxWidth:700,minHeight:430,defaultWidth:360,defaultHeight:430,maxHeightViewportRatio:.8,fallbackMaxHeight:600},Tu=()=>typeof window<"u"?window.innerHeight*F.maxHeightViewportRatio:F.fallbackMaxHeight,Ru=()=>({minHeight:F.minHeight,minWidth:F.minWidth,maxWidth:F.maxWidth,maxHeight:Tu(),defaultSize:{width:F.defaultWidth,height:F.defaultHeight},directions:["bottom-right"],icons:{topRight:null,bottomRight:e.jsxDEV(hu,{color:_u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.utils.tsx",lineNumber:30,columnNumber:18},void 0),bottomLeft:null,topLeft:null},hiddenIcons:["bottom-left","top-left","top-right"]}),S=u=>{if(u===!1)return!1;const t=Ru();return typeof u=="object"&&u!==null?{...t,...u}:t};try{S.displayName="getFiltersPopoverResizable",S.__docgenInfo={description:"Итоговый resizable для Popover фильтров: `false` выключает ресайз,\n`true` или отсутствие пропа дают настройки по умолчанию, объект\nнакладывается поверх настроек по умолчанию.",displayName:"getFiltersPopoverResizable",props:{}}}catch{}const N={backgroundPrimary:()=>bu,borderRadiusM:()=>Du,shadowDownHardS:()=>xu,surfaceSolidCard:()=>Bu},Su=c(lu)`
  & .popover-root {
    box-shadow: none;
  }

  & .resizable-container {
    /* background-color: ${N.backgroundPrimary}; */
  }
`,qu=c.div`
  background-color: ${N.surfaceSolidCard};
  border-radius: ${N.borderRadiusM};
  box-shadow: ${N.shadowDownHardS};
  ${({$resizable:u})=>u?"":`
    min-width: ${F.minWidth}px;
    max-width: ${F.maxWidth}px;
    max-height: ${F.maxHeightViewportRatio*100}dvh;
  `}
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`,Pu=c.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  flex-shrink: 0;
`,ju=c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,Wu=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* Зазор до строки поиска нужен только когда поиск включён */
  margin-bottom: ${({$searchable:u})=>u?"8px":"0"};
`,zu=c.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 40px;
  margin: 12px 16px 16px 16px;
`,$u=c.div`
  box-sizing: border-box;
  min-height: 60px;
  padding: 12px 16px 16px 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,C=({title:u,subtitle:t,content:a,state:n,onClose:o,footer:p,redSquare:r=!1,popoverProps:m={},buttonProps:i,renderTarget:l,searchable:E,searchValue:b,onSearchChange:y,searchingProps:_,emptySearchContent:h})=>{const{resizable:d,...B}=m,A=S(d),[I,k]=f.useState(!1),[D,g]=n??[I,k],uu=f.useCallback(()=>{g(!1),o==null||o()},[o,g]),eu=f.useCallback(x=>{g(x),x||o==null||o()},[o,g]),$=f.useCallback(()=>{g(!D)},[D,g]);return e.jsxDEV(Su,{opened:D,onToggle:eu,target:l?l({onClick:$,isOpen:D,isRedDotVisible:r,RedDot:V}):e.jsxDEV(w,{redSquare:r,hideLabel:!1,iconSize:"s",...i,onClick:x=>{var O;(O=i==null?void 0:i.onClick)==null||O.call(i,x),$()}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:299,columnNumber:11},void 0),placement:"bottom-start",offset:[0,2],trigger:"click",hasArrow:!1,closeOnOverlayClick:!0,closeOnEsc:!0,isFocusTrapped:!0,usePortal:!0,animated:!0,resizable:A,...B,children:e.jsxDEV(qu,{$resizable:A!==!1,children:[e.jsxDEV(Pu,{children:[e.jsxDEV(ju,{children:[e.jsxDEV(Wu,{$searchable:E,children:[e.jsxDEV(ou,{bold:!0,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:329,columnNumber:15},void 0),t&&e.jsxDEV(au,{color:Au,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:330,columnNumber:28},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:328,columnNumber:13},void 0),e.jsxDEV(X,{onClick:uu,size:"xs",view:"secondary",pin:"circle-circle",title:"Закрыть",style:{marginBottom:E?"8px":void 0},children:e.jsxDEV(J,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:342,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:332,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:327,columnNumber:11},void 0),E&&e.jsxDEV(Z,{value:b,onChange:x=>y==null?void 0:y(x.target.value),placeholder:"Поиск",..._},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:346,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:326,columnNumber:9},void 0),e.jsxDEV(zu,{children:h||a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:356,columnNumber:9},void 0),p&&e.jsxDEV($u,{children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:359,columnNumber:20},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:324,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx",lineNumber:287,columnNumber:5},void 0)};try{C.displayName="FiltersActionsFiltersButtonWithPopover",C.__docgenInfo={description:`Компонент FiltersActionsPopup
- Использует Popover (вместо Popup)
- Кнопка фильтров является target для Popover
- Структура: header, content, опциональный footer
- Контент передается извне как ReactNode
- Ресайз включён по умолчанию, размеры задаются через \`popoverProps.resizable\``,displayName:"FiltersActionsFiltersButtonWithPopover",props:{}}}catch{}const q=c(du).attrs(u=>({view:"default",size:"s",text:"Сбросить фильтры",contentLeft:e.jsxDEV(J,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx",lineNumber:18,columnNumber:18},void 0),style:{...u.style,visibility:u.isVisible?"visible":"hidden",pointerEvents:u.isVisible?"auto":"none"}}))`
  ${({$css:u})=>u}
`;try{q.displayName="ResetAllFiltersButton",q.__docgenInfo={description:"",displayName:"ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const P=c(cu).attrs(u=>({size:"s",view:"primary",...u}))`
  & {
    ${({$css:u})=>u}
  }
`;try{P.displayName="FiltersActionsSegmentItem",P.__docgenInfo={description:"",displayName:"FiltersActionsSegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Ou=c(mu)`
  background: ${({hasBackground:u})=>u?ku:"none"};
  padding: ${({hasBackground:u})=>u?"10px 14px":"auto"};
  border-radius: ${({hasBackground:u})=>u?"10px":"auto"};
  max-height: 48px;
`,j=f.forwardRef(({hasBackground:u,size:t,...a},n)=>e.jsxDEV(Ou,{hasBackground:u,ref:n,size:u?"m":t,...a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Switch/Switch.tsx",lineNumber:8,columnNumber:5},void 0));try{j.displayName="Switch",j.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const W=({...u})=>e.jsxDEV(j,{size:"m",toggleSize:"s",hasBackground:!0,...u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx",lineNumber:6,columnNumber:3},void 0);try{W.displayName="SwitcherFilter",W.__docgenInfo={description:"",displayName:"SwitcherFilter",props:{}}}catch{}const Lu=(u,t)=>{if(!u&&!t)return;const a=u&&{$css:u.split(" ").map((n,o)=>({[`& > *:nth-child(${o+1})`]:{width:n}})).reduce((n,o)=>({...n,...o}),{})};return Q`
    ${()=>a&&a.$css};
    ${()=>t&&t};
  `},Hu=c(z)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`,Y=c.div`
  padding-block: 8px;
  border-radius: ${()=>Nu};
`,Mu=c(Y)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`,Ku=c(z)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`,s=({mainBlock:u,listOfFilters:t,activeButtonsBlock:a,mainBlockElementsWidth:n,containerProps:o,mainBlockProps:{$css:p,ref:r,...m}={},onResize:i})=>{const l=f.useRef(null),E=f.useRef(null),b=f.useRef(null);return f.useLayoutEffect(()=>{if(!i)return;const y=l.current,_=E.current,h=b.current;if(!y||!_)return;const d={containerWidth:0,mainBlockWidth:0,buttonsBlockWidth:0,availableMainBlockWidth:0},B=()=>{const I=y.getBoundingClientRect().width,k=_.getBoundingClientRect().width,D=h?h.getBoundingClientRect().width:0,g=k;d.containerWidth=I,d.mainBlockWidth=k,d.buttonsBlockWidth=D,d.availableMainBlockWidth=g,i({...d})},A=yu(()=>{B()});return A.observe(y),A.observe(_),h&&A.observe(h),B(),()=>{A.disconnect()}},[i]),e.jsxDEV(Hu,{ref:l,...o,children:e.jsxDEV(Y,{children:[e.jsxDEV(Ku,{$css:Lu(n,p),...m,ref:Fu(r,E),children:[u,a&&e.jsxDEV(Mu,{ref:b,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:153,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:146,columnNumber:9},void 0),t]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:145,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx",lineNumber:144,columnNumber:5},void 0)};s.FiltersButton=w;s.DotsIconButton=iu;s.ListOfFilters=Iu;s.TextFieldSearch=Z;s.Tabs=T;s.TabItem=R;s.SegmentItem=P;s.Tooltip=G;s.TooltipList=G;s.FilterPopover=C;s.FiltersButtonWithPopover=C;s.ResetAllFiltersButton=q;s.SwitcherFilter=W;s.RedDot=V;try{s.displayName="FiltersActions",s.__docgenInfo={description:"",displayName:"FiltersActions",props:{mainBlock:{defaultValue:null,description:"блок фильтров и табов",name:"mainBlock",required:!1,type:{name:"React.ReactNode"}},activeButtonsBlock:{defaultValue:null,description:"блок активных действий",name:"activeButtonsBlock",required:!1,type:{name:"React.ReactNode"}},listOfFilters:{defaultValue:null,description:"блок списка примененных фильтров",name:"listOfFilters",required:!1,type:{name:"React.ReactNode"}},mainBlockElementsWidth:{defaultValue:null,description:'пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")',name:"mainBlockElementsWidth",required:!1,type:{name:"string"}},containerProps:{defaultValue:null,description:"пропсы для контейнера всего компонента",name:"containerProps",required:!1,type:{name:"BoxProps"}},mainBlockProps:{defaultValue:{value:"{}"},description:"пропсы для контейнера блока фильтров и табов",name:"mainBlockProps",required:!1,type:{name:"BoxProps"}},onResize:{defaultValue:null,description:`Колбэк, вызываемый при изменении размеров блоков
Получает актуальные размеры контейнера, mainBlock и buttonsBlock`,name:"onResize",required:!1,type:{name:"(dimensions: FiltersActionsResizeDimensions) => void"}}}}}catch{}try{s.FiltersButton.displayName="FiltersActions.FiltersButton",s.FiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.FiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.Tabs.displayName="FiltersActions.Tabs",s.Tabs.__docgenInfo={description:"",displayName:"FiltersActions.Tabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.TabItem.displayName="FiltersActions.TabItem",s.TabItem.__docgenInfo={description:"",displayName:"FiltersActions.TabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.SegmentItem.displayName="FiltersActions.SegmentItem",s.SegmentItem.__docgenInfo={description:"",displayName:"FiltersActions.SegmentItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.ResetAllFiltersButton.displayName="FiltersActions.ResetAllFiltersButton",s.ResetAllFiltersButton.__docgenInfo={description:"",displayName:"FiltersActions.ResetAllFiltersButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.SwitcherFilter.displayName="FiltersActions.SwitcherFilter",s.SwitcherFilter.__docgenInfo={description:"",displayName:"FiltersActions.SwitcherFilter",props:{}}}catch{}try{s.RedDot.displayName="FiltersActions.RedDot",s.RedDot.__docgenInfo={description:"Красная точка-индикатор («есть активные фильтры»).\n\nПозиционируется абсолютно в правом верхнем углу, поэтому контейнер-родитель\nдолжен иметь `position: relative`. Экспортируется публично, чтобы её можно\nбыло использовать на кастомном таргете `FiltersActions.FiltersButtonWithPopover`\n(проп `renderTarget`) и сохранить единый вид индикатора.",displayName:"FiltersActions.RedDot",props:{visible:{defaultValue:null,description:"Показывать ли точку. Обычно прокидывается из `isRedDotVisible` рендер-API.",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"Смещение точки от правого верхнего угла контейнера (top/right).\nПо умолчанию `0` — точка прижата к углу.",name:"offset",required:!1,type:{name:"string | number"}}}}}catch{}function M(u,t,a){const{visible:n=[],inOverlay:o=[],hidden:p=[],modifications:r={},customActions:m={}}=a,i=new Set(n),l=new Set(o),E=new Set(p),b=u.filter(d=>i.has(d.id)),y=u.filter(d=>l.has(d.id)),_=u.filter(d=>E.has(d.id)),h=[];return n.forEach(d=>{h.push({type:"show",targetId:d,payload:null})}),o.forEach(d=>{h.push({type:"moveToOverlay",targetId:d,payload:null})}),p.forEach(d=>{h.push({type:"hide",targetId:d,payload:null})}),Object.entries(r).forEach(([d,B])=>{h.push({type:"modify",targetId:d,payload:B})}),{visibleItems:b,overlayItems:y,hiddenItems:_,modifications:r,actions:h,activeBreakpoint:t,hasOverlayItems:y.length>0,hasModifications:Object.keys(r).length>0,customActions:m}}const K=({items:u,width:t,breakpoints:a})=>{const n=f.useMemo(()=>{const r=Object.entries(a).map(([i,l])=>({breakpoint:Number(i),config:l})).sort((i,l)=>l.breakpoint-i.breakpoint),m=r.find(({breakpoint:i})=>t>=i);if(!m){const i=r[r.length-1];return M(u,(i==null?void 0:i.breakpoint)||0,(i==null?void 0:i.config)||{visible:[],inOverlay:[],hidden:[]})}return M(u,m.breakpoint,m.config)},[u,t,a]),o=f.useCallback((r,m)=>{if(!r)return{};const i={...r.style};return r.width?i.width=r.width:r.widthPercent&&m?i.width=`${m*r.widthPercent/100}px`:r.widthPercent&&(i.width=`${r.widthPercent}%`),i},[]),p=f.useCallback((r,m)=>r.some(i=>{const l=m[i.id];return l===void 0?!1:Array.isArray(l)?l.length>0:typeof l=="boolean"?l===!0:typeof l=="string"?l!=="":typeof l=="number"?l!==0:!!l}),[]);return{...n,getItemStyle:o,hasActiveFilters:p}};try{K.displayName="useAdaptiveFilters",K.__docgenInfo={description:"Хук для адаптивного управления элементами фильтров на основе брейкпоинтов",displayName:"useAdaptiveFilters",props:{items:{defaultValue:null,description:"Массив всех элементов",name:"items",required:!0,type:{name:"FilterItem[]"}},width:{defaultValue:null,description:"Текущая ширина",name:"width",required:!0,type:{name:"number"}},breakpoints:{defaultValue:null,description:"Конфигурация брейкпоинтов",name:"breakpoints",required:!0,type:{name:"Record<number, AdaptiveFiltersBreakpointConfig>"}}}}}catch{}const Uu=()=>Q(wu),Xu=c.div`
  color: ${()=>vu};
  ${()=>Uu()}

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
`,Ju=({groupLabel:u,items:t})=>e.jsxDEV(Xu,{children:[e.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:40,columnNumber:5},void 0),e.jsxDEV("ul",{children:t.map(a=>e.jsxDEV("li",{children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:43,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:39,columnNumber:3},void 0),U=({groupLabel:u,items:t,children:a,...n})=>{const[o,p]=f.useState(!1),r=t.length>0;return f.useEffect(()=>{if(!r){p(!0);const m=setTimeout(()=>{p(!1)},0);return()=>clearTimeout(m)}},[r]),e.jsxDEV(pu,{usePortal:!0,trigger:r?(n==null?void 0:n.trigger)??"hover":"none",text:e.jsxDEV(Ju,{groupLabel:u,items:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:92,columnNumber:13},void 0),size:"s",...n,children:a},`tooltip-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx",lineNumber:88,columnNumber:5},void 0)};try{U.displayName="FiltersActionsTooltip",U.__docgenInfo={description:"",displayName:"FiltersActionsTooltip",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}export{U as F,V as R,j as S,Iu as a,s as b,H as c,w as d,R as e,T as f,K as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ListOfFilters-Bo8y-uW1.js","assets/react-Ch9mc9Aq.js","assets/Box-B1SQihVo.js","assets/styled-components-Bq12dC3g.js","assets/react-is-CJ4CjPIR.js","assets/vendor-Ch15MtLz.js","assets/@tanstack/react-virtual-Csp9i2bR.js","assets/tslib-DoU9Jm1N.js","assets/vendor-CwzC1fIw.css","assets/Collapse-Bm3O7NKI.js","assets/utils-CzOQd3gO.js","assets/constants-l0ilsueG.js","assets/@sddsjs/sdds_finai-BSDEmCin.js","assets/@sddsjs/sdds_finai-BtiYKlh-.css","assets/@salutejs/sdds-themes-xIOWIAKk.js","assets/sharedUtilsDebug-BX_KjCjW.js","assets/Table-CTH7dwj2.js","assets/@salutejs/plasma-icons-BYYYccLM.js","assets/@salutejs/sdds-finai-DrNgC8XC.js","assets/@salutejs/sdds-finai-DVhmKpIx.css","assets/react-data-grid-BUPZWLsC.js","assets/react-data-grid-B7R8wGeR.css","assets/TableTabs-BFPUwQuo.js","assets/TableCanvasSharedConstants-CqGDn8zL.js","assets/TableGlide-OVAfEJMq.js","assets/@glideappsfinal/glide-data-grid-QHjQImj1.js","assets/canvas-hypertxt-DsokSIOX.js","assets/@glideappsfinal/glide-data-grid-CKpdBA2d.css","assets/IconButton-eOYKhOpS.js","assets/sharedUiSearch-6xwGqTPx.js","assets/TextField-uO_Wxg3G.js","assets/sharedUtilsInputs-sKUSifhp.js","assets/AiAgentPopup-BnRwwsT1.js","assets/TextArea-DaNX-Ddd.js","assets/sharedUtilsResizable-CoFfWvJc.js","assets/lodash.isequal-DQmZHUWu.js","assets/NumberFormat-BcqSWG7j.js","assets/EmptyState-CmZ09Z5o.js","assets/MassActions-X9ZMr0qa.js","assets/Autocomplete-BEXnNUoH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
