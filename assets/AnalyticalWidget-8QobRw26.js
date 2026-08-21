import{d as t,r as d}from"./react-D2T61mpp.js";import{I as lu,W as ou,y as R,p as ru,L as K,w as T,ao as du,x as J,ap as su}from"./@salutejs/sdds-themes-DMMPng_c.js";import{H as i,C as L}from"./styled-components-C8vPRKee.js";import{c as pu,d as cu,e as mu,f as fu,H as gu,g as yu,h as hu,i as Eu,j as xu,k as Au,l as vu,m as Du,n as wu,o as Nu,p as bu,q as Q,r as Bu,s as G,C as Tu,t as ku,L as Z,I as Wu,E as Fu}from"./@salutejs/sdds-finai-CPdoK_07.js";import{e as Cu,a as P,u as _u,c as Su,m as D}from"./utils-C6gzzOja.js";import{I as Vu,a as Hu}from"./IconButton-BnBbpqAh.js";import{kX as qu,M as Lu}from"./@salutejs/plasma-icons-Dn1uY4zn.js";import{C as $u}from"./Collapse-BXK8FQgS.js";const Iu={BodyL:Bu,BodyM:Q,BodyS:bu,BodyXS:Nu,BodyXXS:wu,DsplL:Du,DsplM:vu,DsplS:Au,H1:xu,H2:Eu,H3:hu,H4:yu,H5:gu,TextL:fu,TextM:mu,TextS:cu,TextXS:pu};function k({variant:u,children:e,refTypography:l,...o}){const n=Iu[u];return t.jsxDEV(n,{...o,ref:l,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/Typography.tsx",lineNumber:63,columnNumber:5},this)}k.displayName="Typography";try{k.displayName="Typography",k.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const H="typography-with-auto-tooltip-root";let B=!1,h=null,V=0;function uu(){if(typeof document>"u")return;const u=document.getElementById(H);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function Pu(){B||(B=!0,h=setTimeout(()=>{B=!1,h=null,uu()},0))}function Ru(){h&&(clearTimeout(h),h=null),B=!1}function ju(){h&&(clearTimeout(h),h=null),B=!1,uu()}function Mu(){if(!(typeof document>"u")){if(V+=1,V===1){const u=document.createElement("div");u.id=H,document.body.appendChild(u)}return()=>{if(V-=1,V===0){const u=document.getElementById(H);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function j(){return{schedule:Pu,flush:ju,cancel:Ru,getContainerId:()=>H,createContainer:Mu}}try{j.displayName="usePopoverCleanup",j.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const Ou=i.div`
  color: ${()=>lu};
  ${()=>L(ou)};
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
`,Xu=({groupLabel:u,items:e})=>t.jsxDEV(Ou,{children:[t.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:42,columnNumber:5},void 0),t.jsxDEV("ul",{children:e.map((l,o)=>t.jsxDEV("li",{children:l},`${l}-${o}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:43,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:41,columnNumber:3},void 0),zu=i.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,U=({groupLabel:u,items:e,children:l,fullWidth:o,...n})=>{const s=e.length>0,a=t.jsxDEV(G,{usePortal:!0,size:"s",mouseEnterDelay:500,...n,trigger:s?n.trigger??"hover":"none",text:s?t.jsxDEV(Xu,{groupLabel:u,items:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:93,columnNumber:11},void 0):null,opened:s?n.opened:!1,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:84,columnNumber:5},void 0);return o?t.jsxDEV(zu,{children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:103,columnNumber:12},void 0):a};try{U.displayName="TooltipList",U.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
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
`;try{M.displayName="StyledTooltip",M.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{O.displayName="StyleTooltipWrapper",O.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Gu=1,W=({tooltipText:u,tooltipProps:e,lines:l=1,className:o,children:n,...s})=>{const{mouseEnterDelay:a=500,mouseLeaveDelay:E=0,...r}=e||{},x=d.useRef(null),[w,F]=d.useState(!1),v=d.useRef(),{schedule:c,getContainerId:A,createContainer:C}=j(),_=d.useCallback(()=>{if(!x.current)return!1;const p=x.current;if(l>1)return p.scrollHeight>p.clientHeight||p.scrollWidth>p.clientWidth;try{const f=document.createRange();f.selectNodeContents(p);const iu=f.getBoundingClientRect().width,au=p.getBoundingClientRect().width;f.detach();const nu=window.devicePixelRatio||1;return(iu-au)*nu>Gu}catch{return!1}},[l]),S=d.useCallback(()=>{_()&&(v.current=setTimeout(()=>{F(!0)},a))},[_,a]),N=d.useCallback(()=>{clearTimeout(v.current),setTimeout(()=>{F(!1),c()},E)},[E,c]),{variant:$,bold:I,size:b,...y}=s,tu={variant:$,...I!==void 0&&{bold:I},...b!==void 0&&{size:b},...y,refTypography:x,onMouseEnter:p=>{var f;(f=y.onMouseEnter)==null||f.call(y,p)},onMouseLeave:p=>{var f;(f=y.onMouseLeave)==null||f.call(y,p)},style:{...Cu({lines:l}),...y.style||{}},children:n},Y=t.jsxDEV(k,{...tu,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:120,columnNumber:5},void 0);return d.useEffect(()=>C(),[C]),d.useEffect(()=>()=>{clearTimeout(v.current),c()},[c]),t.jsxDEV(O,{className:o,onMouseEnter:S,onMouseLeave:N,children:w?t.jsxDEV(M,{opened:w,text:u??"",target:Y,frame:A(),...r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:143,columnNumber:9},void 0):Y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:137,columnNumber:5},void 0)};try{W.displayName="TypographyWithAutoTooltip",W.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target" | "trigger" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const Yu={l:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"16px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"16px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"16px",borderRadius:"16px"}},m:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"}},s:{xl:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},lg:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"},md:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"16px",borderRadius:"16px"}}},Ku={l:{topSlot:!0,middleSlot:!0},m:{topSlot:!0,middleSlot:!1},s:{topSlot:!0,middleSlot:!1}},g={root:"analytical-widget",header:"analytical-widget__header",popoverInfo:"analytical-widget__popover-info",topSlot:"analytical-widget__top-slot",middleSlot:"analytical-widget__middle-slot",contentSlot:"analytical-widget__content",headerActions:"analytical-widget__header-actions"},Uu=u=>{const e=Yu[u];return{xl:`
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
    `}},Ju=i.article`
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

  ${({$size:u})=>{const e=Uu(u);return L`
      ${P.exact(0,1439)(e.md)} // 0-1439px
      ${P.exact(1440,1919)(e.lg)} // 1440-1919px
      ${P.exact(1920,1e5)(e.xl)} // 1920px+
    `}}
  ${({$css:u})=>u}
`,Qu=i(Q)`
  overflow: hidden;
`,Zu=i.div`
  overflow: hidden;
  padding-top: 4px;
`,u4=i.div`
  position: relative;
  flex: 1;
  min-height: 30px;
  margin-top: 4px;
  overflow-y: ${({scrollable:u})=>u?"auto":"visible"};
`,e4=i(ku)`
  max-height: 20px;
  max-width: 180px;
  border-radius: 12px;
  padding-inline: 8px;
`,t4=i(Tu)`
  --analytical-widget-chips-gap: 4px;
  gap: var(--analytical-widget-chips-gap);
`,X=({chips:u,commonView:e="default",commonSize:l="xs",opened:o=!1,...n})=>{const s=_u(o,300,!1);return t.jsxDEV($u,{isOpen:s,unMountOnClose:!0,children:t.jsxDEV(t4,{view:e,size:l,isCommonChipStyles:!1,...n,children:u.map(({key:a,view:E,...r},x)=>d.createElement(e4,{size:"xs",appearance:"transparent",...r,key:a??`${r==null?void 0:r.name}-${x}`}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:21,columnNumber:5},void 0)};try{X.displayName="AnalyticalWidgetChipsGroup",X.__docgenInfo={description:"",displayName:"AnalyticalWidgetChipsGroup",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}const i4=()=>L(su),eu=()=>L(du),a4=i.header`
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
`,n4=i.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
  min-height: 32px;
`,l4=i.div`
  margin: 0;
  display: flex;
  flex-shrink: 1;
  min-width: 0;
`;i.p`
  margin: 0;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>i4()};
  color: ${()=>J};
`;const o4=i(W)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,r4=i(W)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
  padding-bottom: 4px;
`,d4=i.p`
  flex-shrink: 0;
  margin: 0;
  margin-right: 5px;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>eu()}
  color: ${()=>ru};
  text-transform: uppercase;
`,s4=i.div`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
  position: relative;
`,p4=i.div.attrs({className:g.headerActions})`
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
`;const c4=i(Z)`
  display: flex;
  min-width: 0;
  flex-shrink: 1;
`;i(W)`
  flex-shrink: 1;
  margin: 0;
  min-width: 0;
`;const m4=i.div`
  align-self: start;
`,f4=i(Wu)`
  && {
    width: 24px;
    height: 24px;
    color: ${()=>T};
  }
`,q=({title:u,titleTooltipProps:e})=>t.jsxDEV(o4,{tooltipText:u,tooltipProps:{placement:"top",...e},variant:"BodyM",bold:!0,style:{color:J,wordBreak:"normal"},lines:1,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetTitle.tsx",lineNumber:10,columnNumber:3},void 0);try{q.displayName="AnalyticalWidgetTitle",q.__docgenInfo={description:"",displayName:"AnalyticalWidgetTitle",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}}}}}catch{}const z=({title:u,titleTooltipProps:e,badge:l,badgeStyles:o,subtitle:n,subtitleTooltipProps:s,infoTooltipText:a,infoTooltipProps:E,href:r,hrefProps:x,rightSlot:w,className:F,titleLinkProps:v})=>{const c=d.useRef(null),A=d.useRef(null),[C,_]=d.useState(0);return d.useLayoutEffect(()=>{const S=()=>{if(c.current&&A.current){const $=c.current.offsetWidth,b=A.current.offsetWidth-$;_(b>0?-b-4:0)}},N=Su(S);return c.current&&N.observe(c.current),A.current&&N.observe(A.current),S(),()=>N.disconnect()},[]),t.jsxDEV(a4,{className:D(g.header,F),children:[t.jsxDEV(n4,{children:[t.jsxDEV(l4,{children:[u&&v?t.jsxDEV(c4,{underline:"none",...v,children:t.jsxDEV(q,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:79,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:78,columnNumber:13},void 0):t.jsxDEV(q,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:85,columnNumber:13},void 0),l&&t.jsxDEV(d4,{style:o,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:91,columnNumber:13},void 0),t.jsxDEV(s4,{ref:c,children:t.jsxDEV(p4,{ref:A,$translateX:C,children:[a&&t.jsxDEV(G,{trigger:"hover",placement:"top",text:a,target:t.jsxDEV(Fu,{children:t.jsxDEV(qu,{size:"xs",style:{cursor:"pointer",color:T}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:105,columnNumber:23},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:104,columnNumber:21},void 0),className:D(g.popoverInfo),...E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:99,columnNumber:17},void 0),r&&t.jsxDEV(Z,{href:r,style:{flexShrink:0},size:"xs",...x,children:t.jsxDEV(f4,{view:"clear",size:"xs",children:t.jsxDEV(Lu,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:128,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:127,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:119,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:94,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:93,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:74,columnNumber:9},void 0),n&&t.jsxDEV(r4,{variant:"BodyXS",tooltipText:n,style:{color:T,wordBreak:"normal"},tooltipProps:{placement:"top",...s},lines:1,children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:136,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:73,columnNumber:7},void 0),w&&t.jsxDEV(m4,{children:w},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:153,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:72,columnNumber:5},void 0)};try{z.displayName="AnalyticalWidgetHeader",z.__docgenInfo={description:"",displayName:"AnalyticalWidgetHeader",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:"Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"subtitle",required:!1,type:{name:"string"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"url для ссылки. Если не передать, то иконка со стрелкой отображаться не будет",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"Дополнительные свойства для `href элемента`. Не будет работать, если не заполнено свойство `href`",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=({size:u="l",scrollable:e=!0,headerSlot:l,topSlot:o,middleSlot:n,contentSlot:s,classes:a,$css:E})=>{const r=Ku[u];return t.jsxDEV(Ju,{$size:u,$css:E,className:D(g.root,a==null?void 0:a.root),children:[t.jsxDEV("div",{style:{minHeight:"32px"},children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:40,columnNumber:7},void 0),r.topSlot&&o||r.middleSlot&&n?t.jsxDEV("div",{children:[r.topSlot&&o&&t.jsxDEV(Qu,{className:D(g.topSlot,a==null?void 0:a.topSlot),children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:51,columnNumber:13},void 0),r.middleSlot&&n&&t.jsxDEV(Zu,{className:D(g.middleSlot,a==null?void 0:a.middleSlot),children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:58,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:49,columnNumber:9},void 0):null,t.jsxDEV(u4,{scrollable:e,className:D(g.contentSlot,a==null?void 0:a.contentSlot),children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:33,columnNumber:5},void 0)};m.Header=z;m.FilterIconButton=Vu;m.DotsIconButton=Hu;m.Chips=X;try{m.displayName="AnalyticalWidget",m.__docgenInfo={description:"",displayName:"AnalyticalWidget",props:{size:{defaultValue:{value:"l"},description:"Размер виджета",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},scrollable:{defaultValue:{value:"true"},description:"Добавление или удаление скролла у contentSlot",name:"scrollable",required:!1,type:{name:"boolean"}},headerSlot:{defaultValue:null,description:"ReactNode для шапки",name:"headerSlot",required:!1,type:{name:"ReactNode"}},topSlot:{defaultValue:null,description:"ReactNode (в основном для фильтров)",name:"topSlot",required:!1,type:{name:"ReactNode"}},middleSlot:{defaultValue:null,description:"ReactNode (в основном для табов. Отображается только в режиме l)",name:"middleSlot",required:!1,type:{name:"ReactNode"}},contentSlot:{defaultValue:null,description:"ReactNode с контентом",name:"contentSlot",required:!0,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Кастомные классы для слотов и самого компонента",name:"classes",required:!1,type:{name:"AnalyticalWidgetClasses"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера виджета",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}try{m.Header.displayName="AnalyticalWidget.Header",m.Header.__docgenInfo={description:"",displayName:"AnalyticalWidget.Header",props:{title:{defaultValue:null,description:"Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"title",required:!1,type:{name:"string"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:"Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст",name:"subtitle",required:!1,type:{name:"string"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"url для ссылки. Если не передать, то иконка со стрелкой отображаться не будет",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"Дополнительные свойства для `href элемента`. Не будет работать, если не заполнено свойство `href`",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{m.Chips.displayName="AnalyticalWidget.Chips",m.Chips.__docgenInfo={description:"",displayName:"AnalyticalWidget.Chips",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}export{m as A,W as T,k as a,U as b,g as c};
