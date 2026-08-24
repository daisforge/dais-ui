import{d as t,r as f}from"./react-D2T61mpp.js";import{I as au,W as nu,y as lu,x as P,p as ou,ao as ru,w as F,ap as du}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as a,C}from"./styled-components-CdU5JEL5.js";import{c as su,d as pu,e as cu,f as mu,H as fu,g as gu,h as yu,i as hu,j as Eu,k as xu,l as Au,m as vu,n as Du,o as Bu,p as wu,q as X,r as Nu,s as $,t as bu,D as Fu,C as Tu,u as ku,L as Cu}from"./@salutejs/sdds-finai-rsluPq8z.js";import{e as Wu,a as _,u as _u,m as v}from"./utils-ej044pNs.js";import{I as Su}from"./IconButton-BWb4-hTc.js";import{i7 as Vu,i5 as Hu,kX as qu}from"./@salutejs/plasma-icons-BiMarbkF.js";import{C as Iu}from"./Collapse-Bk3Aw7RD.js";const Lu={BodyL:Nu,BodyM:X,BodyS:wu,BodyXS:Bu,BodyXXS:Du,DsplL:vu,DsplM:Au,DsplS:xu,H1:Eu,H2:hu,H3:yu,H4:gu,H5:fu,TextL:mu,TextM:cu,TextS:pu,TextXS:su};function B({variant:u,children:e,refTypography:n,...o}){const l=Lu[u];return t.jsxDEV(l,{...o,ref:n,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/Typography.tsx",lineNumber:63,columnNumber:5},this)}B.displayName="Typography";try{B.displayName="Typography",B.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"H2"'},{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const T="typography-with-auto-tooltip-root";let D=!1,x=null,b=0;function Y(){if(typeof document>"u")return;const u=document.getElementById(T);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function Pu(){D||(D=!0,x=setTimeout(()=>{D=!1,x=null,Y()},0))}function $u(){x&&(clearTimeout(x),x=null),D=!1}function Ru(){x&&(clearTimeout(x),x=null),D=!1,Y()}function ju(){if(!(typeof document>"u")){if(b+=1,b===1){const u=document.createElement("div");u.id=T,document.body.appendChild(u)}return()=>{if(b-=1,b===0){const u=document.getElementById(T);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function S(){return{schedule:Pu,flush:Ru,cancel:$u,getContainerId:()=>T,createContainer:ju}}try{S.displayName="usePopoverCleanup",S.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const Ou=a.div`
  color: ${()=>au};
  ${()=>C(nu)};
  max-height: 130px;
  overflow-y: auto;
  padding-block: 2px;
  padding-right: 2px;

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
`,Mu=({groupLabel:u,items:e})=>t.jsxDEV(Ou,{children:[t.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:42,columnNumber:5},void 0),t.jsxDEV("ul",{children:e.map((n,o)=>t.jsxDEV("li",{children:n},`${n}-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:43,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:41,columnNumber:3},void 0),zu=a.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,G=({groupLabel:u,items:e,children:n,fullWidth:o,...l})=>{const d=e.length>0,i=t.jsxDEV($,{usePortal:!0,size:"s",mouseEnterDelay:500,...l,trigger:d?l.trigger??"hover":"none",text:d?t.jsxDEV(Mu,{groupLabel:u,items:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:93,columnNumber:11},void 0):null,opened:d?l.opened:!1,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:84,columnNumber:5},void 0);return o?t.jsxDEV(zu,{children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:103,columnNumber:12},void 0):i};try{G.displayName="TooltipList",G.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const V=a($)`
  &.popover-target {
    width: 100%;
  }
`,H=a.div`
  display: flex;
  align-items: center;
  min-width: 0;

  & .popover-target {
    width: 100%;
  }

  & .popover-wrapper {
    overflow: hidden;
    width: 100%;
    display: flex;
  }
`;try{V.displayName="StyledTooltip",V.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{H.displayName="StyleTooltipWrapper",H.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Gu=1,w=({tooltipText:u,tooltipProps:e,lines:n=1,className:o,children:l,...d})=>{const{mouseEnterDelay:i=500,mouseLeaveDelay:g=0,...s}=e||{},y=f.useRef(null),[p,A]=f.useState(!1),W=f.useRef(),{schedule:N,getContainerId:J,createContainer:R}=S(),j=f.useCallback(()=>{if(!y.current)return!1;const m=y.current;if(n>1)return m.scrollHeight>m.clientHeight||m.scrollWidth>m.clientWidth;try{const h=document.createRange();h.selectNodeContents(m);const eu=h.getBoundingClientRect().width,tu=m.getBoundingClientRect().width;h.detach();const iu=window.devicePixelRatio||1;return(eu-tu)*iu>Gu}catch{return!1}},[n]),Q=f.useCallback(()=>{j()&&(W.current=setTimeout(()=>{A(!0)},i))},[j,i]),U=f.useCallback(()=>{clearTimeout(W.current),setTimeout(()=>{A(!1),N()},g)},[g,N]),{variant:Z,bold:O,size:M,...E}=d,uu={variant:Z,...O!==void 0&&{bold:O},...M!==void 0&&{size:M},...E,refTypography:y,onMouseEnter:m=>{var h;(h=E.onMouseEnter)==null||h.call(E,m)},onMouseLeave:m=>{var h;(h=E.onMouseLeave)==null||h.call(E,m)},style:{...Wu({lines:n}),...E.style||{}},children:l},z=t.jsxDEV(B,{...uu,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:120,columnNumber:5},void 0);return f.useEffect(()=>R(),[R]),f.useEffect(()=>()=>{clearTimeout(W.current),N()},[N]),t.jsxDEV(H,{className:o,onMouseEnter:Q,onMouseLeave:U,children:p?t.jsxDEV(V,{opened:p,text:u??"",target:z,frame:J(),...s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:143,columnNumber:9},void 0):z},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:137,columnNumber:5},void 0)};try{w.displayName="TypographyWithAutoTooltip",w.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target" | "trigger" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const Xu={l:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"}},m:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"}},s:{xl:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},md:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"}}},Yu={l:{topSlot:!0,middleSlot:!0},m:{topSlot:!0,middleSlot:!1},s:{topSlot:!0,middleSlot:!1}},r={root:"analytical-widget",header:"analytical-widget__header",popoverInfo:"analytical-widget__popover-info",topSlot:"analytical-widget__top-slot",middleSlot:"analytical-widget__middle-slot",contentSlot:"analytical-widget__content",headerActions:"analytical-widget__header-actions",selfSpacedTopSlot:"analytical-widget__self-spaced-top-slot",hasRightSlot:"analytical-widget--has-right-slot"},Ku=u=>{const e=Xu[u];return{xl:`
      --analytical-widget-padding: ${e.xl.padding};
      --analytical-widget-br: ${e.xl.borderRadius};
      --analytical-widget-min-height: ${e.xl.minHeight};
      --analytical-widget-min-width: ${e.xl.minWidth||"unset"};
      --analytical-widget-max-width: ${e.xl.maxWidth||"unset"};

      width: ${e.xl.width};
      min-height: var(--analytical-widget-min-height);
      height: 100%;
      min-width: var(--analytical-widget-min-width);
      max-width: var(--analytical-widget-max-width);
      padding: var(--analytical-widget-padding);
      border-radius: var(--analytical-widget-br);
    `,lg:`
      --analytical-widget-padding: ${e.lg.padding};
      --analytical-widget-br: ${e.lg.borderRadius};
      --analytical-widget-min-height: ${e.lg.minHeight};
      --analytical-widget-min-width: ${e.lg.minWidth||"unset"};
      --analytical-widget-max-width: ${e.lg.maxWidth||"unset"};

      width: ${e.lg.width};
      min-height: var(--analytical-widget-min-height);
      height: 100%;
      min-width: var(--analytical-widget-min-width);
      max-width: var(--analytical-widget-max-width);
      padding: var(--analytical-widget-padding);
      border-radius: var(--analytical-widget-br);
    `,md:`
      --analytical-widget-padding: ${e.md.padding};
      --analytical-widget-br: ${e.md.borderRadius};
      --analytical-widget-min-height: ${e.md.minHeight};
      --analytical-widget-min-width: ${e.md.minWidth||"unset"};
      --analytical-widget-max-width: ${e.md.maxWidth||"unset"};

      width: ${e.md.width};
      min-height: var(--analytical-widget-min-height);
      height: 100%;
      min-width: var(--analytical-widget-min-width);
      max-width: var(--analytical-widget-max-width);
      padding: var(--analytical-widget-padding);
      border-radius: var(--analytical-widget-br);
    `}},Ju=a.article`
  --analytical-widget-bg: ${lu};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  background: var(--analytical-widget-bg);

  &:hover {
    .${r.headerActions} {
      opacity: 1;
    }
  }

  ${({$size:u})=>{const e=Ku(u);return C`
      ${_.exact(0,1439)(e.md)} // 0-1439px
      ${_.exact(1440,1919)(e.lg)} // 1440-1919px
      ${_.exact(1920,1e5)(e.xl)} // 1920px+
    `}}
  ${({$css:u})=>u}
`,Qu=a(X)`
  overflow: hidden;
  margin-top: 8px;

  &:empty {
    margin-top: 0;
  }

  &:has(.${r.selfSpacedTopSlot}) {
    margin-top: 0;
  }
`,Uu=a.div`
  overflow: hidden;
  padding-top: 8px;
`,Zu=a.div`
  position: relative;
  flex: 1;
  min-height: 30px;
  margin-top: 8px;
  overflow-y: ${({scrollable:u})=>u?"auto":"visible"};
`,u4=a.div`
  position: absolute;
  top: ${({$offset:u})=>u}px;
  right: ${({$offset:u})=>u}px;

  // Если рядом (сиблинг, в т.ч. вложенный) виджет с заполненным rightSlot —
  // поднимаем top на 4px (12 -> 16). right не меняется. Работает при общем DOM.
  .${r.hasRightSlot} ~ &,
  &:has(~ .${r.hasRightSlot}),
  &:has(~ * .${r.hasRightSlot}) {
    top: ${({$offset:u})=>u+4}px;
  }
`,q=({dropdownProps:u,iconSize:e,iconOrientation:n="vertical",view:o="secondary",size:l="m",absolute:d=!1,absoluteOffset:i=12,style:g,...s})=>{const y=n==="vertical"?Vu:Hu,p=t.jsxDEV(bu,{view:o,size:l,style:g,...s,children:t.jsxDEV(y,{size:e??"s",color:P},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:54,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:53,columnNumber:5},void 0),A=u?t.jsxDEV(Fu,{...u,children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:59,columnNumber:5},void 0):p;return d?t.jsxDEV(u4,{$offset:i,children:A},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:66,columnNumber:7},void 0):A};try{q.displayName="AnalyticalWidgetIconButtonDots",q.__docgenInfo={description:"",displayName:"AnalyticalWidgetIconButtonDots",props:{dropdownProps:{defaultValue:null,description:"",name:"dropdownProps",required:!1,type:{name:"any"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"any"}},iconOrientation:{defaultValue:{value:"vertical"},description:"",name:"iconOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},absolute:{defaultValue:{value:"false"},description:`Позиционировать кнопку абсолютом в правом верхнем углу ближайшего
relative-контейнера. Для потребителей (напр. GridDND рабочих столов),
у которых нет доступа к контенту виджета.`,name:"absolute",required:!1,type:{name:"boolean"}},absoluteOffset:{defaultValue:{value:"12"},description:"Отступ (top/right) при `absolute`.",name:"absoluteOffset",required:!1,type:{name:"number"}}}}}catch{}const e4=a(ku)`
  max-height: 20px;
  max-width: 180px;
  border-radius: 12px;
  padding-inline: 8px;
`,t4=a(Tu)`
  --analytical-widget-chips-gap: 4px;
  gap: var(--analytical-widget-chips-gap);
  padding-top: 8px;
`,I=({chips:u,commonView:e="default",commonSize:n="xs",opened:o=!1,...l})=>{const d=_u(o,300,!1),i=f.useRef(u);u.length>0&&(i.current=u);const g=u.length>0?u:i.current;return t.jsxDEV("div",{className:r.selfSpacedTopSlot,children:t.jsxDEV(Iu,{isOpen:d,unMountOnClose:!0,children:t.jsxDEV(t4,{view:e,size:n,isCommonChipStyles:!1,...l,children:g.map(({key:s,view:y,...p},A)=>f.createElement(e4,{size:"xs",appearance:"transparent",...p,key:s??`${p==null?void 0:p.name}-${A}`}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:30,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:29,columnNumber:5},void 0)};try{I.displayName="AnalyticalWidgetChipsGroup",I.__docgenInfo={description:"",displayName:"AnalyticalWidgetChipsGroup",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}const i4=()=>C(du),K=()=>C(ru),a4=a.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // Резерв под кнопку-троеточие (абсолютное позиционирование), ширина 24px
  padding-right: 24px;

  // Стили для popover возле иконки информации
  & .popover-wrapper:has(.${r.popoverInfo}) {
    display: flex;
    flex-shrink: 0;
    height: 100%;
    align-items: center;
    transition: none;
  }
`,n4=a.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
  min-height: 32px;
  // 16px до правой части (rightSlot: табы/селекты/кастом). Держим через margin,
  // чтобы зазор не схлопывался при длинном тайтле.
  margin-right: 16px;
`,l4=a.div`
  margin: 0;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  min-width: 0;
`;a.p`
  margin: 0;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>i4()};
  color: ${()=>P};
`;const o4=a(w)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,r4=a(w)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,d4=a.p`
  flex-shrink: 0;
  margin: 0;
  margin-right: 4px;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>K()}
  color: ${()=>ou};
  text-transform: uppercase;
`,s4=a.div.attrs({className:r.headerActions})`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  opacity: 0;
  transition: opacity 0.3s ease;
`;a.p`
  ${()=>K()}
  flex-shrink: 1;
  margin: 0;
  min-width: 0;

  color: ${()=>F};
`;a(B)`
  color: ${()=>F};
`;const p4=a(Cu)`
  display: flex;
  min-width: 0;
  flex-shrink: 1;
`;a(w)`
  flex-shrink: 1;
  margin: 0;
  min-width: 0;
`;const c4=a.div`
  align-self: start;
  flex-shrink: 0;
`,k=({title:u,titleTooltipProps:e})=>t.jsxDEV(o4,{tooltipText:u,tooltipProps:{placement:"top",...e},variant:"BodyM",bold:!0,style:{color:P,wordBreak:"normal"},lines:1,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetTitle.tsx",lineNumber:10,columnNumber:3},void 0);try{k.displayName="AnalyticalWidgetTitle",k.__docgenInfo={description:"",displayName:"AnalyticalWidgetTitle",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}}}}}catch{}const L=({title:u,titleTooltipProps:e,badge:n,badgeStyles:o,subtitle:l,subtitleTooltipProps:d,infoTooltipText:i,infoTooltipProps:g,rightSlot:s,className:y,titleLinkProps:p})=>t.jsxDEV(a4,{className:v(r.header,y),children:[t.jsxDEV(n4,{children:[t.jsxDEV(l4,{children:[u&&p?t.jsxDEV(p4,{underline:"none",...p,children:t.jsxDEV(k,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:38,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:37,columnNumber:11},void 0):t.jsxDEV(k,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:44,columnNumber:11},void 0),n&&t.jsxDEV(d4,{style:o,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:50,columnNumber:11},void 0),i&&t.jsxDEV(s4,{children:t.jsxDEV($,{trigger:"hover",placement:"top",text:i,target:t.jsxDEV(qu,{size:"xs",style:{cursor:"pointer",color:F}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:59,columnNumber:17},void 0),className:v(r.popoverInfo),...g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:54,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:53,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:35,columnNumber:7},void 0),l&&t.jsxDEV(r4,{variant:"BodyXS",tooltipText:l,style:{color:F,wordBreak:"normal"},tooltipProps:{placement:"top",...d},lines:1,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:34,columnNumber:5},void 0),s&&t.jsxDEV(c4,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:91,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:33,columnNumber:3},void 0);try{L.displayName="AnalyticalWidgetHeader",L.__docgenInfo={description:"",displayName:"AnalyticalWidgetHeader",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:"Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"subtitle",required:!1,type:{name:"string"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=({size:u="l",scrollable:e=!0,headerSlot:n,topSlot:o,middleSlot:l,contentSlot:d,classes:i,$css:g})=>{const s=Yu[u],y=f.isValidElement(n)&&!!n.props.rightSlot;return t.jsxDEV(Ju,{$size:u,$css:g,className:v(r.root,y?r.hasRightSlot:void 0,i==null?void 0:i.root),children:[t.jsxDEV("div",{style:{minHeight:"32px"},children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:50,columnNumber:7},void 0),s.topSlot&&o||s.middleSlot&&l?t.jsxDEV("div",{children:[s.topSlot&&o&&t.jsxDEV(Qu,{className:v(r.topSlot,i==null?void 0:i.topSlot),children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:61,columnNumber:13},void 0),s.middleSlot&&l&&t.jsxDEV(Uu,{className:v(r.middleSlot,i==null?void 0:i.middleSlot),children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:68,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:59,columnNumber:9},void 0):null,t.jsxDEV(Zu,{scrollable:e,className:v(r.contentSlot,i==null?void 0:i.contentSlot),children:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:76,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:39,columnNumber:5},void 0)};c.Header=L;c.FilterIconButton=Su;c.DotsIconButton=q;c.Chips=I;try{c.displayName="AnalyticalWidget",c.__docgenInfo={description:"",displayName:"AnalyticalWidget",props:{size:{defaultValue:{value:"l"},description:"Размер виджета",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},scrollable:{defaultValue:{value:"true"},description:"Добавление или удаление скролла у contentSlot",name:"scrollable",required:!1,type:{name:"boolean"}},headerSlot:{defaultValue:null,description:"ReactNode для шапки",name:"headerSlot",required:!1,type:{name:"ReactNode"}},topSlot:{defaultValue:null,description:"ReactNode (в основном для фильтров)",name:"topSlot",required:!1,type:{name:"ReactNode"}},middleSlot:{defaultValue:null,description:"ReactNode (в основном для табов. Отображается только в режиме l)",name:"middleSlot",required:!1,type:{name:"ReactNode"}},contentSlot:{defaultValue:null,description:"ReactNode с контентом",name:"contentSlot",required:!0,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Кастомные классы для слотов и самого компонента",name:"classes",required:!1,type:{name:"AnalyticalWidgetClasses"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера виджета",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}try{c.Header.displayName="AnalyticalWidget.Header",c.Header.__docgenInfo={description:"",displayName:"AnalyticalWidget.Header",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:"Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"subtitle",required:!1,type:{name:"string"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{c.DotsIconButton.displayName="AnalyticalWidget.DotsIconButton",c.DotsIconButton.__docgenInfo={description:"",displayName:"AnalyticalWidget.DotsIconButton",props:{dropdownProps:{defaultValue:null,description:"",name:"dropdownProps",required:!1,type:{name:"any"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"any"}},iconOrientation:{defaultValue:{value:"vertical"},description:"",name:"iconOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},absolute:{defaultValue:{value:"false"},description:`Позиционировать кнопку абсолютом в правом верхнем углу ближайшего
relative-контейнера. Для потребителей (напр. GridDND рабочих столов),
у которых нет доступа к контенту виджета.`,name:"absolute",required:!1,type:{name:"boolean"}},absoluteOffset:{defaultValue:{value:"12"},description:"Отступ (top/right) при `absolute`.",name:"absoluteOffset",required:!1,type:{name:"number"}}}}}catch{}try{c.Chips.displayName="AnalyticalWidget.Chips",c.Chips.__docgenInfo={description:"",displayName:"AnalyticalWidget.Chips",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}export{c as A,w as T,B as a,G as b,r as c};
