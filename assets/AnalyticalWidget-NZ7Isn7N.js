import{d as t,r as s}from"./react-D2T61mpp.js";import{I as nu,W as lu,y as R,p as ou,L as K,w as T,ao as ru,x as J,ap as du}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as i,C as L}from"./styled-components-BkMlLbXT.js";import{c as su,d as pu,e as cu,f as mu,H as fu,g as gu,h as yu,i as hu,j as Eu,k as xu,l as Au,m as vu,n as Du,o as wu,p as Nu,q as Q,r as bu,s as G,C as Bu,t as Tu,L as Z,I as ku,E as Wu}from"./@salutejs/sdds-finai-DFCsnlGS.js";import{e as Fu,a as P,u as Cu,c as _u,m as D}from"./utils-e9PhU-mi.js";import{I as Su,a as Vu}from"./IconButton-BQnj4hIh.js";import{kX as Hu,M as qu}from"./@salutejs/plasma-icons-B9bLUA95.js";import{C as Lu}from"./Collapse-CCEpHUe-.js";const $u={BodyL:bu,BodyM:Q,BodyS:Nu,BodyXS:wu,BodyXXS:Du,DsplL:vu,DsplM:Au,DsplS:xu,H1:Eu,H2:hu,H3:yu,H4:gu,H5:fu,TextL:mu,TextM:cu,TextS:pu,TextXS:su};function k({variant:u,children:e,refTypography:l,...o}){const n=$u[u];return t.jsxDEV(n,{...o,ref:l,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/Typography.tsx",lineNumber:63,columnNumber:5},this)}k.displayName="Typography";try{k.displayName="Typography",k.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const H="typography-with-auto-tooltip-root";let B=!1,h=null,V=0;function uu(){if(typeof document>"u")return;const u=document.getElementById(H);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function Iu(){B||(B=!0,h=setTimeout(()=>{B=!1,h=null,uu()},0))}function Pu(){h&&(clearTimeout(h),h=null),B=!1}function Ru(){h&&(clearTimeout(h),h=null),B=!1,uu()}function ju(){if(!(typeof document>"u")){if(V+=1,V===1){const u=document.createElement("div");u.id=H,document.body.appendChild(u)}return()=>{if(V-=1,V===0){const u=document.getElementById(H);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function j(){return{schedule:Iu,flush:Ru,cancel:Pu,getContainerId:()=>H,createContainer:ju}}try{j.displayName="usePopoverCleanup",j.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const Mu=i.div`
  color: ${()=>nu};
  ${()=>L(lu)};
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
`,Ou=({groupLabel:u,items:e})=>t.jsxDEV(Mu,{children:[t.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:42,columnNumber:5},void 0),t.jsxDEV("ul",{children:e.map((l,o)=>t.jsxDEV("li",{children:l},`${l}-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:43,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:41,columnNumber:3},void 0),Xu=i.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,U=({groupLabel:u,items:e,children:l,fullWidth:o,...n})=>{const p=e.length>0,a=t.jsxDEV(G,{usePortal:!0,size:"s",mouseEnterDelay:500,...n,trigger:p?n.trigger??"hover":"none",text:p?t.jsxDEV(Ou,{groupLabel:u,items:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:93,columnNumber:11},void 0):null,opened:p?n.opened:!1,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:84,columnNumber:5},void 0);return o?t.jsxDEV(Xu,{children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:103,columnNumber:12},void 0):a};try{U.displayName="TooltipList",U.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const M=i(G)`
  &.popover-target {
    width: 100%;
  }
`,O=i.div`
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
`;try{M.displayName="StyledTooltip",M.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{O.displayName="StyleTooltipWrapper",O.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const W=({tooltipText:u,tooltipProps:e,lines:l=1,className:o,children:n,...p})=>{const{mouseEnterDelay:a=500,mouseLeaveDelay:E=0,...r}=e||{},x=s.useRef(null),[w,F]=s.useState(!1),v=s.useRef(),{schedule:c,getContainerId:A,createContainer:C}=j(),_=s.useCallback(()=>{if(!x.current)return!1;const d=x.current;if(l>1)return d.scrollHeight>d.clientHeight||d.scrollWidth>d.clientWidth;if(d.scrollWidth>d.clientWidth)return!0;try{const f=document.createRange();f.selectNodeContents(d);const iu=f.getBoundingClientRect().width,au=d.getBoundingClientRect().width;return f.detach(),iu>au}catch{return!1}},[l]),S=s.useCallback(()=>{_()&&(v.current=setTimeout(()=>{F(!0)},a))},[_,a]),N=s.useCallback(()=>{clearTimeout(v.current),setTimeout(()=>{F(!1),c()},E)},[E,c]),{variant:$,bold:I,size:b,...y}=p,tu={variant:$,...I!==void 0&&{bold:I},...b!==void 0&&{size:b},...y,refTypography:x,onMouseEnter:d=>{var f;(f=y.onMouseEnter)==null||f.call(y,d)},onMouseLeave:d=>{var f;(f=y.onMouseLeave)==null||f.call(y,d)},style:{...Fu({lines:l}),...y.style||{}},children:n},Y=t.jsxDEV(k,{...tu,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:113,columnNumber:5},void 0);return s.useEffect(()=>C(),[C]),s.useEffect(()=>()=>{clearTimeout(v.current),c()},[c]),t.jsxDEV(O,{className:o,onMouseEnter:S,onMouseLeave:N,children:w?t.jsxDEV(M,{opened:w,text:u??"",target:Y,frame:A(),...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:136,columnNumber:9},void 0):Y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:130,columnNumber:5},void 0)};try{W.displayName="TypographyWithAutoTooltip",W.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target" | "trigger" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const zu={l:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"16px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"16px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"16px",borderRadius:"16px"}},m:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"}},s:{xl:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},lg:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},md:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"}}},Gu={l:{topSlot:!0,middleSlot:!0},m:{topSlot:!0,middleSlot:!1},s:{topSlot:!0,middleSlot:!1}},g={root:"analytical-widget",header:"analytical-widget__header",popoverInfo:"analytical-widget__popover-info",topSlot:"analytical-widget__top-slot",middleSlot:"analytical-widget__middle-slot",contentSlot:"analytical-widget__content",headerActions:"analytical-widget__header-actions"},Yu=u=>{const e=zu[u];return{xl:`
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
    `}},Ku=i.article`
  --analytical-widget-bg: ${R};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  background: var(--analytical-widget-bg);

  &:hover {
    .${g.headerActions} {
      opacity: 1;
    }
  }

  ${({$size:u})=>{const e=Yu(u);return L`
      ${P.exact(0,1439)(e.md)} // 0-1439px
      ${P.exact(1440,1919)(e.lg)} // 1440-1919px
      ${P.exact(1920,1e5)(e.xl)} // 1920px+
    `}}
  ${({$css:u})=>u}
`,Uu=i(Q)`
  overflow: hidden;
`,Ju=i.div`
  overflow: hidden;
  padding-top: 4px;
`,Qu=i.div`
  position: relative;
  flex: 1;
  min-height: 30px;
  margin-top: 4px;
  overflow-y: ${({scrollable:u})=>u?"auto":"visible"};
`,Zu=i(Tu)`
  max-height: 20px;
  max-width: 180px;
  border-radius: 12px;
  padding-inline: 8px;
`,u4=i(Bu)`
  --analytical-widget-chips-gap: 4px;
  gap: var(--analytical-widget-chips-gap);
`,X=({chips:u,commonView:e="default",commonSize:l="xs",opened:o=!1,...n})=>{const p=Cu(o,300,!1);return t.jsxDEV(Lu,{isOpen:p,unMountOnClose:!0,children:t.jsxDEV(u4,{view:e,size:l,isCommonChipStyles:!1,...n,children:u.map(({key:a,view:E,...r},x)=>s.createElement(Zu,{size:"xs",appearance:"transparent",...r,key:a??`${r==null?void 0:r.name}-${x}`}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:21,columnNumber:5},void 0)};try{X.displayName="AnalyticalWidgetChipsGroup",X.__docgenInfo={description:"",displayName:"AnalyticalWidgetChipsGroup",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}const e4=()=>L(du),eu=()=>L(ru),t4=i.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  // Зарезервировано для кнопки управления виджетом (абсолютное позиционирование другой командой)
  padding-right: 40px;

  // Стили для popover возле иконки информации
  & .popover-wrapper:has(.${g.popoverInfo}) {
    display: flex;
    flex-shrink: 0;
    height: 100%;
    align-items: center;
    transition: none;
  }
`,i4=i.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
  min-height: 32px;
`,a4=i.div`
  margin: 0;
  display: flex;
  flex-shrink: 1;
  min-width: 0;
`;i.p`
  margin: 0;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>e4()};
  color: ${()=>J};
`;const n4=i(W)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,l4=i(W)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
  padding-bottom: 4px;
`,o4=i.p`
  flex-shrink: 0;
  margin: 0;
  margin-right: 5px;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>eu()}
  color: ${()=>ou};
  text-transform: uppercase;
`,r4=i.div`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
  position: relative;
`,d4=i.div.attrs({className:g.headerActions})`
  position: absolute;

  display: flex;
  left: 0;
  top: 0;
  transform: translateX(
    ${u=>u.$translateX?u.$translateX:0}px
  );
  padding-left: ${u=>u.$translateX?20:0}px;

  opacity: 0;
  transition: opacity 0.3s ease;
  background: linear-gradient(
    to right,
    ${K} 0%,
    ${K} 15%,
    ${R} 40%,
    ${R} 100%
  );
`;i.p`
  ${()=>eu()}
  flex-shrink: 1;
  margin: 0;
  min-width: 0;

  color: ${()=>T};
`;i(k)`
  color: ${()=>T};
`;const s4=i(Z)`
  display: flex;
  min-width: 0;
  flex-shrink: 1;
`;i(W)`
  flex-shrink: 1;
  margin: 0;
  min-width: 0;
`;const p4=i.div`
  align-self: start;
`,c4=i(ku)`
  && {
    width: 24px;
    height: 24px;
    color: ${()=>T};
  }
`,q=({title:u,titleTooltipProps:e})=>t.jsxDEV(n4,{tooltipText:u,tooltipProps:{placement:"top",...e},variant:"BodyM",bold:!0,style:{color:J,wordBreak:"normal"},lines:1,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetTitle.tsx",lineNumber:10,columnNumber:3},void 0);try{q.displayName="AnalyticalWidgetTitle",q.__docgenInfo={description:"",displayName:"AnalyticalWidgetTitle",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}}}}}catch{}const z=({title:u,titleTooltipProps:e,badge:l,badgeStyles:o,subtitle:n,subtitleTooltipProps:p,infoTooltipText:a,infoTooltipProps:E,href:r,hrefProps:x,rightSlot:w,className:F,titleLinkProps:v})=>{const c=s.useRef(null),A=s.useRef(null),[C,_]=s.useState(0);return s.useLayoutEffect(()=>{const S=()=>{if(c.current&&A.current){const $=c.current.offsetWidth,b=A.current.offsetWidth-$;_(b>0?-b-4:0)}},N=_u(S);return c.current&&N.observe(c.current),A.current&&N.observe(A.current),S(),()=>N.disconnect()},[]),t.jsxDEV(t4,{className:D(g.header,F),children:[t.jsxDEV(i4,{children:[t.jsxDEV(a4,{children:[u&&v?t.jsxDEV(s4,{underline:"none",...v,children:t.jsxDEV(q,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:79,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:78,columnNumber:13},void 0):t.jsxDEV(q,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:85,columnNumber:13},void 0),l&&t.jsxDEV(o4,{style:o,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:91,columnNumber:13},void 0),t.jsxDEV(r4,{ref:c,children:t.jsxDEV(d4,{ref:A,$translateX:C,children:[a&&t.jsxDEV(G,{trigger:"hover",placement:"top",text:a,target:t.jsxDEV(Wu,{children:t.jsxDEV(Hu,{size:"xs",style:{cursor:"pointer",color:T}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:105,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:104,columnNumber:21},void 0),className:D(g.popoverInfo),...E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:99,columnNumber:17},void 0),r&&t.jsxDEV(Z,{href:r,style:{flexShrink:0},size:"xs",...x,children:t.jsxDEV(c4,{view:"clear",size:"xs",children:t.jsxDEV(qu,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:128,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:127,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:119,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:94,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:93,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:74,columnNumber:9},void 0),n&&t.jsxDEV(l4,{variant:"BodyXS",tooltipText:n,style:{color:T,wordBreak:"normal"},tooltipProps:{placement:"top",...p},lines:1,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:136,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:73,columnNumber:7},void 0),w&&t.jsxDEV(p4,{children:w},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:153,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:72,columnNumber:5},void 0)};try{z.displayName="AnalyticalWidgetHeader",z.__docgenInfo={description:"",displayName:"AnalyticalWidgetHeader",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:"Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"subtitle",required:!1,type:{name:"string"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"url для ссылки. Если не передать, то иконка со стрелкой отображаться не будет",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"Дополнительные свойства для `href элемента`. Не будет работать, если не заполнено свойство `href`",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=({size:u="l",scrollable:e=!0,headerSlot:l,topSlot:o,middleSlot:n,contentSlot:p,classes:a,$css:E})=>{const r=Gu[u];return t.jsxDEV(Ku,{$size:u,$css:E,className:D(g.root,a==null?void 0:a.root),children:[t.jsxDEV("div",{style:{minHeight:"32px"},children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:40,columnNumber:7},void 0),r.topSlot&&o||r.middleSlot&&n?t.jsxDEV("div",{children:[r.topSlot&&o&&t.jsxDEV(Uu,{className:D(g.topSlot,a==null?void 0:a.topSlot),children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:51,columnNumber:13},void 0),r.middleSlot&&n&&t.jsxDEV(Ju,{className:D(g.middleSlot,a==null?void 0:a.middleSlot),children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:58,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:49,columnNumber:9},void 0):null,t.jsxDEV(Qu,{scrollable:e,className:D(g.contentSlot,a==null?void 0:a.contentSlot),children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:33,columnNumber:5},void 0)};m.Header=z;m.FilterIconButton=Su;m.DotsIconButton=Vu;m.Chips=X;try{m.displayName="AnalyticalWidget",m.__docgenInfo={description:"",displayName:"AnalyticalWidget",props:{size:{defaultValue:{value:"l"},description:"Размер виджета",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"l"'},{value:'"m"'}]}},scrollable:{defaultValue:{value:"true"},description:"Добавление или удаление скролла у contentSlot",name:"scrollable",required:!1,type:{name:"boolean"}},headerSlot:{defaultValue:null,description:"ReactNode для шапки",name:"headerSlot",required:!1,type:{name:"ReactNode"}},topSlot:{defaultValue:null,description:"ReactNode (в основном для фильтров)",name:"topSlot",required:!1,type:{name:"ReactNode"}},middleSlot:{defaultValue:null,description:"ReactNode (в основном для табов. Отображается только в режиме l)",name:"middleSlot",required:!1,type:{name:"ReactNode"}},contentSlot:{defaultValue:null,description:"ReactNode с контентом",name:"contentSlot",required:!0,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Кастомные классы для слотов и самого компонента",name:"classes",required:!1,type:{name:"AnalyticalWidgetClasses"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера виджета",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}try{m.Header.displayName="AnalyticalWidget.Header",m.Header.__docgenInfo={description:"",displayName:"AnalyticalWidget.Header",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:"Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"subtitle",required:!1,type:{name:"string"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"url для ссылки. Если не передать, то иконка со стрелкой отображаться не будет",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"Дополнительные свойства для `href элемента`. Не будет работать, если не заполнено свойство `href`",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{m.Chips.displayName="AnalyticalWidget.Chips",m.Chips.__docgenInfo={description:"",displayName:"AnalyticalWidget.Chips",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}export{m as A,W as T,k as a,U as b,g as c};
