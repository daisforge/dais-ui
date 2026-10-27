import{r as y,j as t}from"./react-CAOzMBF_.js";import{b as B,u as T,m as h}from"./utils-EIxGvR70.js";import{A as b,r as V,ar as W,z as v,y as f,aF as N}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{C,H as a}from"./styled-components-DCFsnh-i.js";import{n as $,u as q,D as R,C as k,v as P,L as H,p as j}from"./@salutejs/sdds-finai-CKhMjg07.js";import{I}from"./IconButton-ZoRfzXaJ.js";import{ib as L,i9 as O,k$ as z}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{T as w,a as M}from"./AiAgentPopup-zRx4ytCb.js";import{C as G}from"./Collapse-CblE70vy.js";const K={l:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"512px",padding:"12px",borderRadius:"16px"}},m:{xl:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},md:{minWidth:"448px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"}},s:{xl:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},lg:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"},md:{minWidth:"216px",maxWidth:"unset",width:"100%",minHeight:"248px",padding:"12px",borderRadius:"16px"}}},Y={l:{topSlot:!0,middleSlot:!0},m:{topSlot:!0,middleSlot:!1},s:{topSlot:!0,middleSlot:!1}},l={root:"analytical-widget",header:"analytical-widget__header",popoverInfo:"analytical-widget__popover-info",topSlot:"analytical-widget__top-slot",middleSlot:"analytical-widget__middle-slot",contentSlot:"analytical-widget__content",headerActions:"analytical-widget__header-actions",selfSpacedTopSlot:"analytical-widget__self-spaced-top-slot",hasRightSlot:"analytical-widget--has-right-slot"},X=u=>{const e=K[u];return{xl:`
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
  --analytical-widget-bg: ${b};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  background: var(--analytical-widget-bg);

  &:hover {
    .${l.headerActions} {
      opacity: 1;
    }
  }

  ${({$size:u})=>{const e=X(u);return C`
      ${B.exact(0,1439)(e.md)} // 0-1439px
      ${B.exact(1440,1919)(e.lg)} // 1440-1919px
      ${B.exact(1920,1e5)(e.xl)} // 1920px+
    `}}
  ${({$css:u})=>u}
`,Q=a($)`
  overflow: hidden;
  margin-top: 8px;

  &:empty {
    margin-top: 0;
  }

  &:has(.${l.selfSpacedTopSlot}) {
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
  .${l.hasRightSlot} ~ &,
  &:has(~ .${l.hasRightSlot}),
  &:has(~ * .${l.hasRightSlot}) {
    top: ${({$offset:u})=>u+4}px;
  }
`,x=y.forwardRef(({dropdownProps:u,iconSize:e,iconOrientation:d="vertical",view:s="default",size:n="m",absolute:c=!1,absoluteOffset:i=12,style:m,...o},g)=>{const p=d==="vertical"?L:O,E=t.jsx(q,{ref:g,view:s,size:n,style:m,...o,children:t.jsx(p,{size:e??"s"})}),S=u?t.jsx(R,{...u,children:E}):E;return c?t.jsx(u4,{$offset:i,children:S}):S});x.displayName="AnalyticalWidgetIconButtonDots";try{x.displayName="AnalyticalWidgetIconButtonDots",x.__docgenInfo={description:"",displayName:"AnalyticalWidgetIconButtonDots",props:{}}}catch{}const e4=a(P)`
  max-height: 20px;
  max-width: 180px;
  border-radius: 12px;
  padding-inline: 8px;
`,t4=a(k)`
  --analytical-widget-chips-gap: 4px;
  gap: var(--analytical-widget-chips-gap);
  padding-top: 8px;
`,A=({chips:u,commonView:e="default",commonSize:d="xs",opened:s=!1,...n})=>{const c=T(s,300,!1),i=y.useRef(u);u.length>0&&(i.current=u);const m=u.length>0?u:i.current;return t.jsx("div",{className:l.selfSpacedTopSlot,children:t.jsx(G,{isOpen:c,unMountOnClose:!0,children:t.jsx(t4,{view:e,size:d,isCommonChipStyles:!1,...n,children:m.map(({key:o,view:g,...p},E)=>y.createElement(e4,{size:"xs",appearance:"transparent",...p,key:o??`${p==null?void 0:p.name}-${E}`}))})})})};try{A.displayName="AnalyticalWidgetChipsGroup",A.__docgenInfo={description:"",displayName:"AnalyticalWidgetChipsGroup",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}const i4=()=>C(N),_=()=>C(W),a4=a.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // Резерв под кнопку-троеточие (абсолютное позиционирование), ширина 24px
  padding-right: 24px;

  // Стили для popover возле иконки информации
  & .popover-wrapper:has(.${l.popoverInfo}) {
    display: flex;
    flex-shrink: 0;
    height: 100%;
    align-items: center;
    transition: none;
  }
`,l4=a.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
  min-height: 32px;
  // 16px до правой части (rightSlot: табы/селекты/кастом). Держим через margin,
  // чтобы зазор не схлопывался при длинном тайтле.
  margin-right: 16px;
`,n4=a.div`
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
  color: ${()=>v};
`;const o4=a(w)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`,d4=a(w)`
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
  ${()=>_()}
  color: ${()=>V};
  text-transform: uppercase;
`,s4=a.div.attrs({className:l.headerActions})`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  opacity: 0;
  transition: opacity 0.3s ease;
`;a.p`
  ${()=>_()}
  flex-shrink: 1;
  margin: 0;
  min-width: 0;

  color: ${()=>f};
`;a(M)`
  color: ${()=>f};
`;const p4=a(H)`
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
`,F=({title:u,titleTooltipProps:e})=>typeof u!="string"?t.jsx(t.Fragment,{children:u}):t.jsx(o4,{tooltipText:u,tooltipProps:{placement:"top",...e},variant:"BodyM",bold:!0,style:{color:v,wordBreak:"normal"},lines:1,children:u});try{F.displayName="AnalyticalWidgetTitle",F.__docgenInfo={description:"",displayName:"AnalyticalWidgetTitle",props:{title:{defaultValue:null,description:`Заголовок. Строка обрезается троеточием с Tooltip; произвольный ReactNode
(например, Skeleton) рендерится как есть.`,name:"title",required:!1,type:{name:"ReactNode"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}}}}}catch{}const D=({title:u,titleTooltipProps:e,badge:d,badgeStyles:s,subtitle:n,subtitleTooltipProps:c,infoTooltipText:i,infoTooltipProps:m,rightSlot:o,className:g,titleLinkProps:p})=>t.jsxs(a4,{className:h(l.header,g),children:[t.jsxs(l4,{children:[t.jsxs(n4,{children:[u&&p?t.jsx(p4,{underline:"none",...p,children:t.jsx(F,{title:u,titleTooltipProps:e})}):t.jsx(F,{title:u,titleTooltipProps:e}),d&&t.jsx(r4,{style:s,children:d}),i&&t.jsx(s4,{children:t.jsx(j,{trigger:"hover",placement:"top",text:i,target:t.jsx(z,{size:"xs",style:{cursor:"pointer",color:f}}),className:h(l.popoverInfo),...m})})]}),n&&(typeof n=="string"?t.jsx(d4,{variant:"BodyXS",tooltipText:n,style:{color:f,wordBreak:"normal"},tooltipProps:{placement:"top",...c},lines:1,children:n}):n)]}),o&&t.jsx(c4,{children:o})]});try{D.displayName="AnalyticalWidgetHeader",D.__docgenInfo={description:"",displayName:"AnalyticalWidgetHeader",props:{title:{defaultValue:null,description:`Заголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки данных с бэкенда) — он рендерится как есть, без тултипа.`,name:"title",required:!1,type:{name:"ReactNode"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:`Подзаголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки) — он рендерится как есть, без тултипа.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}const r=({size:u="l",scrollable:e=!0,headerSlot:d,topSlot:s,middleSlot:n,contentSlot:c,classes:i,$css:m})=>{const o=Y[u],g=y.isValidElement(d)&&!!d.props.rightSlot;return t.jsxs(J,{$size:u,$css:m,className:h(l.root,g?l.hasRightSlot:void 0,i==null?void 0:i.root),children:[t.jsx("div",{style:{minHeight:"32px"},children:d}),o.topSlot&&s||o.middleSlot&&n?t.jsxs("div",{children:[o.topSlot&&s&&t.jsx(Q,{className:h(l.topSlot,i==null?void 0:i.topSlot),children:s}),o.middleSlot&&n&&t.jsx(U,{className:h(l.middleSlot,i==null?void 0:i.middleSlot),children:n})]}):null,t.jsx(Z,{scrollable:e,className:h(l.contentSlot,i==null?void 0:i.contentSlot),children:c})]})};r.Header=D;r.FilterIconButton=I;r.DotsIconButton=x;r.Chips=A;try{r.displayName="AnalyticalWidget",r.__docgenInfo={description:"",displayName:"AnalyticalWidget",props:{size:{defaultValue:{value:"l"},description:"Размер виджета",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},scrollable:{defaultValue:{value:"true"},description:"Добавление или удаление скролла у contentSlot",name:"scrollable",required:!1,type:{name:"boolean"}},headerSlot:{defaultValue:null,description:"ReactNode для шапки",name:"headerSlot",required:!1,type:{name:"ReactNode"}},topSlot:{defaultValue:null,description:"ReactNode (в основном для фильтров)",name:"topSlot",required:!1,type:{name:"ReactNode"}},middleSlot:{defaultValue:null,description:"ReactNode (в основном для табов. Отображается только в режиме l)",name:"middleSlot",required:!1,type:{name:"ReactNode"}},contentSlot:{defaultValue:null,description:"ReactNode с контентом",name:"contentSlot",required:!0,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Кастомные классы для слотов и самого компонента",name:"classes",required:!1,type:{name:"AnalyticalWidgetClasses"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера виджета",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}}}}}catch{}try{r.Header.displayName="AnalyticalWidget.Header",r.Header.__docgenInfo={description:"",displayName:"AnalyticalWidget.Header",props:{title:{defaultValue:null,description:`Заголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки данных с бэкенда) — он рендерится как есть, без тултипа.`,name:"title",required:!1,type:{name:"ReactNode"}},titleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip заголовка",name:"titleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},badge:{defaultValue:null,description:"Метка справа от заголовка",name:"badge",required:!1,type:{name:"string"}},badgeStyles:{defaultValue:null,description:"Стили для метки (badge). Позволяет переопределить, например, text-transform",name:"badgeStyles",required:!1,type:{name:"CSSProperties"}},subtitle:{defaultValue:null,description:`Подзаголовок. Строка обрезается троеточием (truncated text) с Tooltip при наведении
на обрезанный текст. Можно передать произвольный ReactNode (например, Skeleton на
время загрузки) — он рендерится как есть, без тултипа.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},subtitleTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip подзаголовка",name:"subtitleTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},infoTooltipText:{defaultValue:null,description:"Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет",name:"infoTooltipText",required:!1,type:{name:"string"}},infoTooltipProps:{defaultValue:null,description:"Пропсы для Tooltip иконки i, справа от тега.",name:"infoTooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target">'}},href:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"href",required:!1,type:{name:"string"}},hrefProps:{defaultValue:null,description:"@deprecated Стрелка больше не рисуется. Используйте `titleLinkProps`.",name:"hrefProps",required:!1,type:{name:"{ onClick?: MouseEventHandler<HTMLAnchorElement>; onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>; }"}},titleLinkProps:{defaultValue:{value:'underline="none"'},description:`Если необходимо title сделать ссылкой.
Пропсы для компонента Link, который оборачивает заголовок.`,name:"titleLinkProps",required:!1,type:{name:'Omit<LinkCompProps, "ref">'}},rightSlot:{defaultValue:null,description:"Слот для контента в правой части шапки",name:"rightSlot",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Имя класса для шапки",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.Chips.displayName="AnalyticalWidget.Chips",r.Chips.__docgenInfo={description:"",displayName:"AnalyticalWidget.Chips",props:{chips:{defaultValue:null,description:"Пропсы для чипов",name:"chips",required:!0,type:{name:"any[]"}},commonView:{defaultValue:{value:"default"},description:"",name:"commonView",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"clear"'},{value:'"accent"'}]}},commonSize:{defaultValue:{value:"xs"},description:"",name:"commonSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}}}}}catch{}export{r as A,l as a};
