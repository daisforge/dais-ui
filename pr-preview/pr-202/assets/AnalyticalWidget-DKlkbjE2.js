import{r as h,b as t}from"./react-UEdzNlUe.js";import{a as D,u as b,m as y}from"./utils-DSJLiokB.js";import{G as v,z as S,d6 as V,F as C,E,d7 as _}from"./@sddsjs/sdds_finai-CqI1dsZV.js";import{A as w,q as a}from"./styled-components-C6Uw7ovB.js";import{d as T,e as H,D as q,C as $,f as R,L as P,g as I}from"./@salutejs/sdds-finai-mlEHigyJ.js";import{I as j}from"./IconButton-Dl3DqcX6.js";import{j as L,c as O,k as z}from"./@salutejs/plasma-icons-CWYH4jgn.js";import{T as M}from"./Typography-D6ms_BcN.js";import{T as N}from"./TypographyWithAutoTooltip-CawVpSY7.js";import{C as G}from"./Collapse-CfxT3MfK.js";const K={l:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"}},m:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"}},s:{xl:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},md:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"}}},Y={l:{topSlot:!0,middleSlot:!0},m:{topSlot:!0,middleSlot:!1},s:{topSlot:!0,middleSlot:!1}},n={root:"analytical-widget",header:"analytical-widget__header",popoverInfo:"analytical-widget__popover-info",topSlot:"analytical-widget__top-slot",middleSlot:"analytical-widget__middle-slot",contentSlot:"analytical-widget__content",headerActions:"analytical-widget__header-actions",selfSpacedTopSlot:"analytical-widget__self-spaced-top-slot",hasRightSlot:"analytical-widget--has-right-slot"},X=u=>{const e=K[u];return{xl:`
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
    `}},J=a.article`
  --analytical-widget-bg: ${v};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  background: var(--analytical-widget-bg);

  &:hover {
    .${n.headerActions} {
      opacity: 1;
    }
  }

  ${({$size:u})=>{const e=X(u);return w`
      ${D.exact(0,1439)(e.md)} // 0-1439px
      ${D.exact(1440,1919)(e.lg)} // 1440-1919px
      ${D.exact(1920,1e5)(e.xl)} // 1920px+
    `}}
  ${({$css:u})=>u}
`,Q=a(T)`
  overflow: hidden;
  margin-top: 8px;

  &:empty {
    margin-top: 0;
  }

  &:has(.${n.selfSpacedTopSlot}) {
    margin-top: 0;
  }
`,U=a.div`
  overflow: hidden;
  padding-top: 8px;
`,Z=a.div`
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
  .${n.hasRightSlot} ~ &,
  &:has(~ .${n.hasRightSlot}),
  &:has(~ * .${n.hasRightSlot}) {
    top: ${({$offset:u})=>u+4}px;
  }
`,x=h.forwardRef(({dropdownProps:u,iconSize:e,iconOrientation:d="vertical",view:s="default",size:l="m",absolute:p=!1,absoluteOffset:i=12,style:m,...o},g)=>{const c=d==="vertical"?L:O,f=t.jsxDEV(H,{ref:g,view:s,size:l,style:m,...o,children:t.jsxDEV(c,{size:e??"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:66,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:59,columnNumber:7},void 0),W=u?t.jsxDEV(q,{...u,children:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:71,columnNumber:7},void 0):f;return p?t.jsxDEV(u4,{$offset:i,children:W},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetButtons/AnalyticalWidgetIconButtonDots.tsx",lineNumber:78,columnNumber:9},void 0):W});x.displayName="AnalyticalWidgetIconButtonDots";try{x.displayName="AnalyticalWidgetIconButtonDots",x.__docgenInfo={description:"",displayName:"AnalyticalWidgetIconButtonDots",props:{}}}catch{}const e4=a(R)`
  max-height: 20px;
  max-width: 180px;
  border-radius: 12px;
  padding-inline: 8px;
`,t4=a($)`
  --analytical-widget-chips-gap: 4px;
  gap: var(--analytical-widget-chips-gap);
  padding-top: 8px;
`,B=({chips:u,commonView:e="default",commonSize:d="xs",opened:s=!1,...l})=>{const p=b(s,300,!1),i=h.useRef(u);u.length>0&&(i.current=u);const m=u.length>0?u:i.current;return t.jsxDEV("div",{className:n.selfSpacedTopSlot,children:t.jsxDEV(G,{isOpen:p,unMountOnClose:!0,children:t.jsxDEV(t4,{view:e,size:d,isCommonChipStyles:!1,...l,children:m.map(({key:o,view:g,...c},f)=>h.createElement(e4,{size:"xs",appearance:"transparent",...c,key:o??`${c==null?void 0:c.name}-${f}`}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:30,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.tsx",lineNumber:29,columnNumber:5},void 0)};try{B.displayName="AnalyticalWidgetChipsGroup",B.__docgenInfo={description:"",displayName:"AnalyticalWidgetChipsGroup",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"default"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}const i4=()=>w(_),k=()=>w(V),a4=a.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // Резерв под кнопку-троеточие (абсолютное позиционирование), ширина 24px
  padding-right: 24px;

  // Стили для popover возле иконки информации
  & .popover-wrapper:has(.${n.popoverInfo}) {
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
  color: ${()=>C};
`;const o4=a(N)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,d4=a(N)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,r4=a.p`
  flex-shrink: 0;
  margin: 0;
  margin-right: 4px;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${()=>k()}
  color: ${()=>S};
  text-transform: uppercase;
`,s4=a.div.attrs({className:n.headerActions})`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  opacity: 0;
  transition: opacity 0.3s ease;
`;a.p`
  ${()=>k()}
  flex-shrink: 1;
  margin: 0;
  min-width: 0;

  color: ${()=>E};
`;a(M)`
  color: ${()=>E};
`;const c4=a(P)`
  display: flex;
  min-width: 0;
  flex-shrink: 1;
`;a(N)`
  flex-shrink: 1;
  margin: 0;
  min-width: 0;
`;const p4=a.div`
  align-self: start;
  flex-shrink: 0;
`,A=({title:u,titleTooltipProps:e})=>typeof u!="string"?u??null:t.jsxDEV(o4,{tooltipText:u,tooltipProps:{placement:"top",...e},variant:"BodyM",bold:!0,style:{color:C,wordBreak:"normal"},lines:1,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetTitle.tsx",lineNumber:16,columnNumber:5},void 0);try{A.displayName="AnalyticalWidgetTitle",A.__docgenInfo={description:"",displayName:"AnalyticalWidgetTitle",props:{title:{defaultValue:null,description:`Заголовок. Строка обрезается троеточием с Tooltip; произвольный ReactNode
(например, Skeleton) рендерится как есть.`,name:"title",required:!1,type:{name:"ReactNode"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}}}}}catch{}const F=({title:u,titleTooltipProps:e,badge:d,badgeStyles:s,subtitle:l,subtitleTooltipProps:p,infoTooltipText:i,infoTooltipProps:m,rightSlot:o,className:g,titleLinkProps:c})=>t.jsxDEV(a4,{className:y(n.header,g),children:[t.jsxDEV(n4,{children:[t.jsxDEV(l4,{children:[u&&c?t.jsxDEV(c4,{underline:"none",...c,children:t.jsxDEV(A,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:38,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:37,columnNumber:11},void 0):t.jsxDEV(A,{title:u,titleTooltipProps:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:44,columnNumber:11},void 0),d&&t.jsxDEV(r4,{style:s,children:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:50,columnNumber:11},void 0),i&&t.jsxDEV(s4,{children:t.jsxDEV(I,{trigger:"hover",placement:"top",text:i,target:t.jsxDEV(z,{size:"xs",style:{cursor:"pointer",color:E}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:59,columnNumber:17},void 0),className:y(n.popoverInfo),...m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:54,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:53,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:35,columnNumber:7},void 0),l&&(typeof l=="string"?t.jsxDEV(d4,{variant:"BodyXS",tooltipText:l,style:{color:E,wordBreak:"normal"},tooltipProps:{placement:"top",...p},lines:1,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:75,columnNumber:11},void 0):l)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:34,columnNumber:5},void 0),o&&t.jsxDEV(p4,{children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:94,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.tsx",lineNumber:33,columnNumber:3},void 0);try{F.displayName="AnalyticalWidgetHeader",F.__docgenInfo={description:"",displayName:"AnalyticalWidgetHeader",props:{title:{defaultValue:null,description:`Заголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки данных с бэкенда) — он рендерится как есть, без тултипа.`,name:"title",required:!1,type:{name:"ReactNode"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:`Подзаголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки) — он рендерится как есть, без тултипа.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}const r=({size:u="l",scrollable:e=!0,headerSlot:d,topSlot:s,middleSlot:l,contentSlot:p,classes:i,$css:m})=>{const o=Y[u],g=h.isValidElement(d)&&!!d.props.rightSlot;return t.jsxDEV(J,{$size:u,$css:m,className:y(n.root,g?n.hasRightSlot:void 0,i==null?void 0:i.root),children:[t.jsxDEV("div",{style:{minHeight:"32px"},children:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:50,columnNumber:7},void 0),o.topSlot&&s||o.middleSlot&&l?t.jsxDEV("div",{children:[o.topSlot&&s&&t.jsxDEV(Q,{className:y(n.topSlot,i==null?void 0:i.topSlot),children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:61,columnNumber:13},void 0),o.middleSlot&&l&&t.jsxDEV(U,{className:y(n.middleSlot,i==null?void 0:i.middleSlot),children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:68,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:59,columnNumber:9},void 0):null,t.jsxDEV(Z,{scrollable:e,className:y(n.contentSlot,i==null?void 0:i.contentSlot),children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:76,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.tsx",lineNumber:39,columnNumber:5},void 0)};r.Header=F;r.FilterIconButton=j;r.DotsIconButton=x;r.Chips=B;try{r.displayName="AnalyticalWidget",r.__docgenInfo={description:"",displayName:"AnalyticalWidget",props:{size:{defaultValue:{value:"l"},description:"Размер виджета",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},scrollable:{defaultValue:{value:"true"},description:"Добавление или удаление скролла у contentSlot",name:"scrollable",required:!1,type:{name:"boolean"}},headerSlot:{defaultValue:null,description:"ReactNode для шапки",name:"headerSlot",required:!1,type:{name:"ReactNode"}},topSlot:{defaultValue:null,description:"ReactNode (в основном для фильтров)",name:"topSlot",required:!1,type:{name:"ReactNode"}},middleSlot:{defaultValue:null,description:"ReactNode (в основном для табов. Отображается только в режиме l)",name:"middleSlot",required:!1,type:{name:"ReactNode"}},contentSlot:{defaultValue:null,description:"ReactNode с контентом",name:"contentSlot",required:!0,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Кастомные классы для слотов и самого компонента",name:"classes",required:!1,type:{name:"AnalyticalWidgetClasses"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера виджета",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}try{r.Header.displayName="AnalyticalWidget.Header",r.Header.__docgenInfo={description:"",displayName:"AnalyticalWidget.Header",props:{title:{defaultValue:null,description:`Заголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки данных с бэкенда) — он рендерится как есть, без тултипа.`,name:"title",required:!1,type:{name:"ReactNode"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:`Подзаголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки) — он рендерится как есть, без тултипа.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.Chips.displayName="AnalyticalWidget.Chips",r.Chips.__docgenInfo={description:"",displayName:"AnalyticalWidget.Chips",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"default"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}export{r as A,n as a};
