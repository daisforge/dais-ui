import{d as c,r as t}from"./react-D2T61mpp.js";import{cv as I4,cw as R4,cx as V4,A as M4}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as C,A as x4}from"./styled-components-DldTWSFz.js";import{a as H4,b as $4,c as W4,d as j4,H as z4,e as O4,f as q4,g as G4,h as K4,i as X4,j as U4,k as Y4,B as Z4,l as J4,m as Q4,n as uu,o as eu,p as b4,q as tu,I as h4,r as nu}from"./@salutejs/sdds-finai-C2nSo9ZF.js";import{a as ou,t as iu,d as ru}from"./utils-BgMYkZVs.js";import{T as su}from"./TextArea-q3jTH-k_.js";import{c as au}from"./constants-ChwOYBdp.js";import{bp as lu}from"./vendor-DEnmvFjy.js";import{b as cu}from"./sharedUtilsResizable-kirulsbM.js";import{fa as du}from"./@salutejs/plasma-icons-B_9bJsfG.js";import{s as pu,a as Eu}from"./@salutejs/sdds-themes-xIOWIAKk.js";const mu={BodyL:eu,BodyM:uu,BodyS:Q4,BodyXS:J4,BodyXXS:Z4,DsplL:Y4,DsplM:U4,DsplS:X4,H1:K4,H2:G4,H3:q4,H4:O4,H5:z4,TextL:j4,TextM:W4,TextS:$4,TextXS:H4};function U({variant:u,children:e,refTypography:l,...n}){const a=mu[u];return c.jsxDEV(a,{...n,ref:l,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/Typography.tsx",lineNumber:63,columnNumber:5},this)}U.displayName="Typography";try{U.displayName="Typography",U.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const Q="typography-with-auto-tooltip-root";let X=!1,$=null,J=0;function N4(){if(typeof document>"u")return;const u=document.getElementById(Q);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function fu(){X||(X=!0,$=setTimeout(()=>{X=!1,$=null,N4()},0))}function Au(){$&&(clearTimeout($),$=null),X=!1}function Du(){$&&(clearTimeout($),$=null),X=!1,N4()}function gu(){if(!(typeof document>"u")){if(J+=1,J===1){const u=document.createElement("div");u.id=Q,document.body.appendChild(u)}return()=>{if(J-=1,J===0){const u=document.getElementById(Q);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function s4(){return{schedule:fu,flush:Du,cancel:Au,getContainerId:()=>Q,createContainer:gu}}try{s4.displayName="usePopoverCleanup",s4.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const hu=C.div`
  color: ${()=>I4};
  ${()=>x4(R4)};
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
`,Fu=({groupLabel:u,items:e})=>c.jsxDEV(hu,{children:[c.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:42,columnNumber:5},void 0),c.jsxDEV("ul",{children:e.map((l,n)=>c.jsxDEV("li",{children:l},`${l}-${n}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:43,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:41,columnNumber:3},void 0),Bu=C.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,F4=({groupLabel:u,items:e,children:l,fullWidth:n,...a})=>{const s=e.length>0,i=c.jsxDEV(b4,{usePortal:!0,size:"s",mouseEnterDelay:500,...a,trigger:s?a.trigger??"hover":"none",text:s?c.jsxDEV(Fu,{groupLabel:u,items:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:93,columnNumber:11},void 0):null,opened:s?a.opened:!1,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:84,columnNumber:5},void 0);return n?c.jsxDEV(Bu,{children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:103,columnNumber:12},void 0):i};try{F4.displayName="TooltipList",F4.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const a4=C(b4)`
  &.popover-target {
    width: 100%;
  }
`,l4=C.div`
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
`;try{a4.displayName="StyledTooltip",a4.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{l4.displayName="StyleTooltipWrapper",l4.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const yu=1,B4=({tooltipText:u,tooltipProps:e,lines:l=1,className:n,children:a,...s})=>{const{mouseEnterDelay:i=500,mouseLeaveDelay:d=0,...f}=e||{},h=t.useRef(null),[F,w]=t.useState(!1),B=t.useRef(),{schedule:_,getContainerId:A,createContainer:g}=s4(),y=t.useCallback(()=>{if(!h.current)return!1;const b=h.current;if(l>1)return b.scrollHeight>b.clientHeight||b.scrollWidth>b.clientWidth;try{const T=document.createRange();T.selectNodeContents(b);const I=T.getBoundingClientRect().width,N=b.getBoundingClientRect().width;T.detach();const R=window.devicePixelRatio||1;return(I-N)*R>yu}catch{return!1}},[l]),o=t.useCallback(()=>{y()&&(B.current=setTimeout(()=>{w(!0)},i))},[y,i]),D=t.useCallback(()=>{clearTimeout(B.current),setTimeout(()=>{w(!1),_()},d)},[d,_]),{variant:m,bold:p,size:E,...r}=s,v={variant:m,...p!==void 0&&{bold:p},...E!==void 0&&{size:E},...r,refTypography:h,onMouseEnter:b=>{var T;(T=r.onMouseEnter)==null||T.call(r,b)},onMouseLeave:b=>{var T;(T=r.onMouseLeave)==null||T.call(r,b)},style:{...ou({lines:l}),...r.style||{}},children:a},P=c.jsxDEV(U,{...v,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:120,columnNumber:5},void 0);return t.useEffect(()=>g(),[g]),t.useEffect(()=>()=>{clearTimeout(B.current),_()},[_]),c.jsxDEV(l4,{className:n,onMouseEnter:o,onMouseLeave:D,children:F?c.jsxDEV(a4,{opened:F,text:u??"",target:P,frame:A(),...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:143,columnNumber:9},void 0):P},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:137,columnNumber:5},void 0)};try{B4.displayName="TypographyWithAutoTooltip",B4.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "trigger" | "text" | "target" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const y4=5,vu=4,Cu=12,_u=360,xu=360,bu=16,Nu={width:400,height:540},v4=56,ku=100,wu="ai-agent-popup-state",Tu=300,k4="ai-agent-popup-dragging",C4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',Su=.93,Lu=79,Pu=220,Iu=23,w4=48,T4=300,Ru=8,Vu=12,Mu=1,Hu=2,c4=40,$u=2,O=800,Wu=615,M={bg:()=>M4,outline:()=>V4,radius:()=>au.m,padding:()=>`${bu}px`},ju=C(tu)`
  && .${lu.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${k4} {
    cursor: grabbing;
    user-select: none;
  }
`,zu=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${M.radius};
  /* Иначе на тач-устройствах перетаскивание окна конкурирует со скроллом
     страницы (touchmove пассивный, preventDefault не поможет). Скроллу
     ленты сообщений не мешает: у неё свой скролл-контейнер, и жесты
     по ней считаются до него */
  touch-action: none;

  /* Свечение отдаём прозрачному слою размером с внешний край рамки: тень,
     повешенная на саму карточку, первые 4px пряталась бы под кольцом */
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: calc(${M.radius} + 4px);
    box-shadow: ${({$shadow:u})=>u};
    pointer-events: none;
  }

  /* Рамка: сплошной градиентный слой на 4px больше контейнера. Середину
     вырезать не нужно, её накрывает непрозрачная карточка (она поверх),
     снаружи остаётся только кант рамки. Заодно исключается субпиксельный
     шов между рамкой и карточкой при дробной позиции окна */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: calc(${M.radius} + 4px);
    background: ${M.outline};
    pointer-events: none;
  }
`,Ou=C.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${M.radius} + 4px);
  background: ${M.outline};
  box-shadow: ${({$shadow:u})=>u};
`,qu=C.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${M.padding};
  border-radius: ${M.radius};
  background: ${M.bg};
  overflow: hidden;
`,Gu=C.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Ku=C.div`
  position: relative;
`,Xu=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,Uu=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,Yu=C.div`
  position: absolute;
  top: ${-25}px;
  height: ${Lu}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${Su*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?Uu:Xu};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Zu=C.div`
  background: ${M.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-Iu}px;
  }
`,Ju=C.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,Qu=C.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?T4:w4}px;
  transition: width 0.3s ease;
`,S4=x4`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: ${Ru}px;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,u0=C.div`
  ${S4};
  width: ${w4}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,_4=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  ${({$bottom:u})=>u&&"margin-top: auto;"}
`,e0=C.div`
  ${S4};
  width: ${T4}px;
  display: flex;
  flex-direction: column;
`,t0=C.div`
  flex: none;
  height: ${c4}px;
  display: flex;
  align-items: center;
  gap: ${$u}px;
`,n0=C.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${c4}px;
  height: ${c4}px;
`,o0=C.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i0=C.div`
  flex: 1 1 auto;
  min-height: 0;
`,r0=C.div`
  flex: none;
  display: flex;
  width: ${Mu}px;
  margin-right: ${Vu}px;

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *::before {
    border-radius: ${Hu}px;
  }
`,r4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},L4=()=>{const[u,e]=t.useState(r4);return t.useEffect(()=>{e(r4());const l=new MutationObserver(()=>e(r4()));return l.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>l.disconnect()},[]),u},d4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:l=Pu,className:n,style:a,...s},i)=>{const d=L4(),f={size:"s",rows:1,autoResize:!0,...s,contentRight:e};return c.jsxDEV(Ku,{ref:i,className:n,style:a,children:[c.jsxDEV(Yu,{$visible:u,$isDark:d,"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:60,columnNumber:9},void 0),c.jsxDEV(Zu,{$maxHeight:l,children:c.jsxDEV(su,{...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:59,columnNumber:7},void 0)});d4.displayName="AiAgentInput";try{d4.displayName="AiAgentInput",d4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
и правым слотом под кнопки. Компонент намеренно простой: никакой логики
отправки, очистки или смены кнопок в нём нет, всё это на стороне
потребителя.

- свечение включается пропом glow и переключается в реальном времени;
  овал фиксированной высоты держится у верхней границы поля,
  при авторосте поднимается вместе с ней и лежит поверх контента
  чата (решение дизайнера), кликам не мешает;
- rightSlot — произвольное содержимое правой части поля: кнопка
  отправки, кнопка остановки, с тултипами и любой логикой потребителя;
- поле авторастёт до пиксельного предела maxHeight (по умолчанию 160),
  дальше внутренний скролл;
- внешних отступов у компонента нет: место в лэйауте чата задаёт
  потребитель. Остальные пропсы уходят в TextArea, стили можно
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const u4=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,W=u=>{const e=u4(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const l=e.getBoundingClientRect();return{left:l.left+e.clientLeft-e.scrollLeft,top:l.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},P4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),e4=(u,e={width:0,height:0},l={},n)=>{const{width:a,height:s}=n??P4(),{top:i=0,right:d=0,bottom:f=0,left:h=0}=l;return{x:Math.max(h,Math.min(u.x,a-e.width-d)),y:Math.max(i,Math.min(u.y,s-e.height-f))}},p4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),E4=(u,e,l)=>{const n=u.getBoundingClientRect(),{left:a,top:s}=l??P4(),i=typeof e=="number"?e:e.x??0,d=typeof e=="number"?0:e.y??0;return{x:n.right+i-a,y:n.top+d-s}},s0=()=>({x:v4,y:v4}),m4=(u,e,l={},n)=>{const{width:a,height:s}=n??{width:window.innerWidth,height:window.innerHeight},{left:i=0,right:d=0,top:f=0,bottom:h=0}=l,F=(a-i-d)/3,w=(s-f-h)/2,B=u.x-i,_=u.y-f;let A=1,g=-1;for(let y=1;y<=6;y+=1){const o=(y-1)%3*F,D=y<=3?0:w,m=Math.max(0,Math.min(B+e.width,o+F)-Math.max(B,o)),p=Math.max(0,Math.min(_+e.height,D+w)-Math.max(_,D)),E=m*p;E>g&&(g=E,A=y)}return A},f4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},A4=(u,e="bottom-right")=>cu(u,{corner:e,minWidth:_u,minHeight:xu}),Y=u=>u.content!==void 0;try{u4.displayName="resolveFrameElement",u4.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{W.displayName="getFrameMetrics",W.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{e4.displayName="validatePosition",e4.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{p4.displayName="inflateDragBoundary",p4.__docgenInfo={description:`Раздувает отступы границ на величину by со всех сторон. Нужно для учёта
светящейся рамки: она нарисована снаружи контейнера и в его размеры
не входит, поэтому для границ окно считается на by шире с каждой стороны,
иначе рамка вылезает за dragBoundary при перетаскивании и ресайзе к краю.`,displayName:"inflateDragBoundary",props:{}}}catch{}try{E4.displayName="getPositionFromTarget",E4.__docgenInfo={description:`Позиция справа от target-элемента. Числовой gap: только горизонтальный
отступ, верхние края выровнены. Объектный gap: смещение по обеим осям
от правого верхнего угла таргета. Координаты переводятся из вьюпортных
в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{m4.displayName="getViewportSector",m4.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
частей (три колонки, два ряда), сектором окна считается тот, с которым
у него наибольшая площадь пересечения:
1 | 2 | 3
---------
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{f4.displayName="getCornerForSector",f4.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{A4.displayName="buildResizableConfig",A4.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}try{Y.displayName="isLeftPanelSection",Y.__docgenInfo={description:`Пункт левой панели открывает раздел, только если у него есть content.
Пункт без content это кнопка-действие с onClick.`,displayName:"isLeftPanelSection",props:{key:{defaultValue:null,description:`Уникальный ключ пункта. У раздела по нему определяется открытый раздел
(activeKey) и приходит смена в onActiveKeyChange.`,name:"key",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка в полосе (свёрнутое состояние левой панели).",name:"icon",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:`Группа кнопки в полосе. Кнопки bottom прижаты к нижнему краю панели,
порядок внутри группы как в items.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},disabled:{defaultValue:{value:"false"},description:`Выключить кнопку в полосе. Уже открытый раздел остаётся открытым
и закрывается крестиком.`,name:"disabled",required:!1,type:{name:"boolean"}},titleIcon:{defaultValue:null,description:`Иконка слева в шапке открытого раздела, компонент ставит её по центру
квадрата 40x40. Если не задана, берётся icon.`,name:"titleIcon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок открытого раздела (в шапке, рядом с иконкой и крестиком).",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:`Контент открытого раздела под шапкой. Отступы, скролл и наполнение
полностью на стороне потребителя.`,name:"content",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:`Клик по кнопке раздела. Вызывается перед открытием раздела.
Клик по кнопке.`,name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const t4=({items:u,activeKey:e,defaultActiveKey:l=null,onActiveKeyChange:n})=>{const a=e!==void 0,[s,i]=t.useState(l),d=a?e:s,f=o=>{a||i(o),n==null||n(o)},h=u.filter(Y).find(o=>o.key===d)??null,F=!!h,w=(o,D)=>{var m;(m=o.onClick)==null||m.call(o,D),Y(o)&&f(o.key)},B=o=>c.jsxDEV(h4,{size:"s",view:"clear",disabled:o.disabled,onClick:D=>w(o,D),children:o.icon},o.key,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:69,columnNumber:5},void 0),_=u.filter(o=>o.placement==="bottom"),A=u.filter(o=>o.placement!=="bottom"),g=t.useRef(h);h&&(g.current=h);const y=g.current;return c.jsxDEV(Ju,{children:[c.jsxDEV(Qu,{$open:F,children:[c.jsxDEV(u0,{$active:!F,"aria-hidden":F,children:[c.jsxDEV(_4,{children:A.map(B)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:97,columnNumber:11},void 0),_.length>0&&c.jsxDEV(_4,{$bottom:!0,children:_.map(B)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:96,columnNumber:9},void 0),c.jsxDEV(e0,{$active:F,"aria-hidden":!F,children:y&&c.jsxDEV(c.Fragment,{children:[c.jsxDEV(t0,{children:[c.jsxDEV(n0,{children:y.titleIcon??y.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:108,columnNumber:17},void 0),c.jsxDEV(o0,{children:c.jsxDEV(U,{variant:"BodyM",bold:!0,children:y.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:112,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:111,columnNumber:17},void 0),c.jsxDEV(h4,{size:"s",view:"clear",onClick:()=>f(null),children:c.jsxDEV(du,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:121,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:116,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:107,columnNumber:15},void 0),c.jsxDEV(i0,{children:y.content},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:124,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:106,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:104,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:95,columnNumber:7},void 0),c.jsxDEV(r0,{children:c.jsxDEV(nu,{orientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:130,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:129,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:94,columnNumber:5},void 0)};t4.displayName="AiAgentLeftPanel";try{t4.displayName="AiAgentLeftPanel",t4.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Пункт без content это кнопка-действие: клик вызывает его onClick,
раздел не открывается. Кнопки с placement bottom прижаты к низу полосы.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Пункты панели: разделы с контентом и кнопки-действия с onClick.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком. Клик по пункту-действию сюда не приходит.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const n4=t.forwardRef(({variant:u="embedded",leftPanel:e,children:l,...n},a)=>{const i=L4()?pu:Eu,d=u==="floating"?zu:Ou;return c.jsxDEV(d,{...n,ref:a,$shadow:i,children:c.jsxDEV(qu,{children:[e&&c.jsxDEV(t4,{...e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:41,columnNumber:25},void 0),c.jsxDEV(Gu,{children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:42,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:40,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:39,columnNumber:7},void 0)});n4.displayName="AiAgentSurface";try{n4.displayName="AiAgentSurface",n4.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
контент. AiAgentPopup рендерит её внутри себя сам, а отдельно она
нужна, когда чат встраивается в лэйаут страницы (например, как левая
панель): контент из окна переносится в оболочку без попапа, перетаскивания
и ресайза. Овальное свечение живёт в AiAgentInput, поле ввода чата.

Варианты рамки:
- floating (в окне): рамка нарисована наружу от карточки и в размеры
  не входит, как обводка снаружи в макете;
- embedded (в лэйауте, по умолчанию): рамка обычный padding с градиентным
  фоном, то есть часть блочной модели, и отступы лэйаута считаются
  от светящегося края.

Тема подхватывается автоматически, как у AiAgentPopup.`,displayName:"AiAgentSurface",props:{variant:{defaultValue:{value:"embedded"},description:"Вариант рамки.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"floating"'},{value:'"embedded"'}]}},leftPanel:{defaultValue:null,description:`Левая панель с иконками-разделами. Если не задана, оболочка только
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const a0=({elementRef:u,setPosition:e,dragBoundary:l,onPositionChange:n,ignoreSelector:a,frame:s})=>{const[i,d]=t.useState(!1),[f,h]=t.useState(!1),F=t.useRef({x:0,y:0}),w=t.useRef({x:0,y:0}),B=t.useRef(!1),_=t.useRef(null),A=t.useMemo(()=>a?`${C4}, ${a}`:C4,[a]),g=t.useCallback((r,v)=>{if(!u.current)return;B.current=!1,w.current={x:r,y:v},_.current=W(s);const P=u.current.getBoundingClientRect();F.current={x:r-P.left,y:v-P.top},d(!0)},[u,s]),y=t.useCallback(r=>{r.button===0&&(r.target.closest(A)||g(r.clientX,r.clientY))},[g,A]),o=t.useCallback(r=>{if(r.target.closest(A))return;const v=r.touches[0];v&&g(v.clientX,v.clientY)},[g,A]),D=t.useCallback((r,v)=>{var z;if(!i||!u.current)return;const P=Math.abs(r-w.current.x),b=Math.abs(v-w.current.y);if(!B.current&&P<y4&&b<y4)return;B.current||(B.current=!0,h(!0),(z=window.getSelection())==null||z.removeAllRanges());const{offsetWidth:T,offsetHeight:I}=u.current,N=_.current??W(s),{top:R=0,right:V=0,bottom:S=0,left:k=0}=l||{},x=Math.max(k,Math.min(r-F.current.x-N.left,N.width-T-V)),L=Math.max(R,Math.min(v-F.current.y-N.top,N.height-I-S)),j={x,y:L};e(j),n==null||n(j)},[i,u,l,e,n,s]),m=t.useCallback(r=>{D(r.clientX,r.clientY)},[D]),p=t.useCallback(r=>{const v=r.touches[0];v&&D(v.clientX,v.clientY)},[D]),E=t.useCallback(()=>{d(!1),h(!1)},[]);return t.useEffect(()=>(i&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",E),document.addEventListener("touchmove",p),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)}),[i,m,p,E]),{dragActive:f,dragHandlers:{onMouseDown:y,onTouchStart:o}}},l0=({opened:u,targetRef:e,targetGap:l,defaultPosition:n,savedPosition:a,externalPositionState:s,dragBoundary:i,frame:d})=>{const f=t.useRef(null),[h,F]=t.useState(null),w=t.useCallback(o=>{f.current=o,F(o)},[]),[B,_]=t.useState(()=>a??n??null),A=s?s[0]:B,g=t.useCallback(o=>{s?s[1](o):_(o)},[s==null?void 0:s[1]]);t.useLayoutEffect(()=>{if(!u)return;const o=h;if(!o)return;const D={width:o.offsetWidth,height:o.offsetHeight},m=W(d),p=A??(e!=null&&e.current?E4(e.current,l,m):s0()),E=e4(p,D,i,m);(!A||E.x!==A.x||E.y!==A.y)&&g(E)},[u,h,A,e,l,i,d,g]);const y=t.useRef(A);return t.useEffect(()=>{y.current=A},[A]),t.useEffect(()=>{if(!u)return;const o=iu(()=>{const p=f.current,E=y.current;if(!p||!E)return;const r=e4(E,{width:p.offsetWidth,height:p.offsetHeight},i,W(d));(r.x!==E.x||r.y!==E.y)&&g(r)},ku);window.addEventListener("resize",o);const D=u4(d);let m;return D&&(m=new ResizeObserver(o),m.observe(D)),()=>{window.removeEventListener("resize",o),m==null||m.disconnect(),o.cancel()}},[u,i,d,g]),{popupPosition:A,setPopupPosition:g,positionForStorage:s?void 0:B??void 0,containerRef:f,setContainerRef:w}},c0=({resizable:u,defaultSize:e,savedSize:l,dragBoundary:n,containerRef:a,onSizeChange:s,popupPosition:i,setPopupPosition:d,frame:f,isSectionOpen:h=!1})=>{const[F,w]=t.useState(()=>l??e),[B,_]=t.useState({}),[A,g]=t.useState(null),y=t.useMemo(()=>{if(!i)return"bottom-right";const r=a.current,v={width:(r==null?void 0:r.offsetWidth)??0,height:(r==null?void 0:r.offsetHeight)??0};return f4(m4(i,v,n,W(f)))},[i,n,a,f]),o=A??y,D=t.useRef(null),m=t.useRef(null);t.useEffect(()=>()=>{var r;(r=m.current)==null||r.disconnect()},[]);const p=t.useMemo(()=>A4(u,o),[u,o]),E=t.useMemo(()=>{if(!p)return;const r=I=>{var R,V;const N=a.current;if(N){const S=W(f),k=N.getBoundingClientRect(),x={left:k.left-S.left,top:k.top-S.top,right:k.right-S.left,bottom:k.bottom-S.top},L=o;g(L);const{top:j=0,right:z=0,bottom:o4=0,left:i4=0}=n??{},q=Math.min(O,L.includes("left")?x.right-i4:S.width-x.left-z),Z=Math.min(O,L.includes("top")?x.bottom-j:S.height-x.top-o4);if(_({maxWidth:p.maxWidth?Math.min(p.maxWidth,q):q,maxHeight:p.maxHeight?Math.min(p.maxHeight,Z):Z}),L.includes("top")||L.includes("left")){const H={left:x.left,top:x.top,right:x.right,bottom:x.bottom,corner:L};D.current=H,(R=m.current)==null||R.disconnect(),m.current=new ResizeObserver(()=>{const G=a.current;G&&d({x:L.includes("left")?H.right-G.offsetWidth:H.left,y:L.includes("top")?H.bottom-G.offsetHeight:H.top})}),m.current.observe(N)}}(V=p.onResizeStart)==null||V.call(p,I)},v=I=>{var R,V,S;(R=m.current)==null||R.disconnect(),m.current=null,g(null);const N=((V=I==null?void 0:I.current)==null?void 0:V.resizable)??a.current;if(N){const k={width:N.offsetWidth,height:N.offsetHeight},x=D.current;x&&d({x:x.corner.includes("left")?x.right-k.width:x.left,y:x.corner.includes("top")?x.bottom-k.height:x.top}),w(k),s==null||s(k)}D.current=null,(S=p.onResizeEnd)==null||S.call(p,I)},P=h?Wu:p.minWidth,b=Math.min(O,B.maxWidth??O),T=Math.min(O,B.maxHeight??O);return{...p,defaultSize:F??p.defaultSize,minWidth:P,maxWidth:b,maxHeight:T,onResizeStart:r,onResizeEnd:v}},[p,o,n,F,B,s,a,d,f,h]);return{popupSize:F,resizableConfig:E}},d0=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",p0=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",E0=u=>{const e=typeof u=="string"?u:wu,l=t.useCallback(()=>{if(!u)return null;try{const s=localStorage.getItem(e);if(!s)return null;const i=JSON.parse(s);return!i||typeof i!="object"?null:{position:d0(i.position)?i.position:void 0,size:p0(i.size)?i.size:void 0}}catch(s){return console.error("AiAgentPopup: failed to load state:",s),null}},[u,e]),n=t.useCallback(s=>{if(u)try{const i=localStorage.getItem(e),d=i?JSON.parse(i):{},f={position:s.position??d.position,size:s.size??d.size};localStorage.setItem(e,JSON.stringify(f))}catch(i){console.error("AiAgentPopup: failed to save state:",i)}},[u,e]),a=t.useRef(void 0);return a.current===void 0&&(a.current=l()),{savedState:a.current,saveState:n}},D4=t.forwardRef((u,e)=>{const{children:l,leftPanel:n,opened:a,targetRef:s,targetGap:i=Cu,defaultPosition:d,positionState:f,onPositionChange:h,draggable:F=!0,dragBoundary:w,dragIgnoreSelector:B,useStorage:_=!1,resizable:A=!0,defaultSize:g=Nu,onSizeChange:y,frame:o="document",style:D,className:m,...p}=u,{savedState:E,saveState:r}=E0(_),v=t.useMemo(()=>p4(w,vu),[w]),P=n==null?void 0:n.activeKey,b=P!==void 0,[T,I]=t.useState((n==null?void 0:n.defaultActiveKey)??null),N=b?P:T,R=!!(n&&N!=null&&n.items.some(K=>Y(K)&&K.key===N)),V=t.useCallback(K=>{var g4;b||I(K),(g4=n==null?void 0:n.onActiveKeyChange)==null||g4.call(n,K)},[b,n==null?void 0:n.onActiveKeyChange]),S=t.useMemo(()=>n?{...n,activeKey:N,onActiveKeyChange:V}:void 0,[n,N,V]),{popupPosition:k,setPopupPosition:x,positionForStorage:L,containerRef:j,setContainerRef:z}=l0({opened:a,targetRef:s,targetGap:i,defaultPosition:d,savedPosition:E==null?void 0:E.position,externalPositionState:f,dragBoundary:v,frame:o}),{dragActive:o4,dragHandlers:i4}=a0({elementRef:j,setPosition:x,dragBoundary:v,onPositionChange:h,ignoreSelector:B,frame:o}),{popupSize:q,resizableConfig:Z}=c0({resizable:A,defaultSize:g,savedSize:E==null?void 0:E.size,dragBoundary:v,containerRef:j,onSizeChange:y,popupPosition:k,setPopupPosition:x,frame:o,isSectionOpen:R}),H=t.useMemo(()=>ru(r,Tu),[r]);t.useEffect(()=>{_&&H({position:L,size:q})},[_,L,q,H]);const G=t.useMemo(()=>({left:k?`${k.x}px`:0,top:k?`${k.y}px`:0,...k?null:{visibility:"hidden"},...D}),[k,D]);return c.jsxDEV(ju,{...p,ref:e,opened:a,frame:o,placement:"top-left",resizable:Z,style:G,className:o4?`${m??""} ${k4}`.trim():m,children:c.jsxDEV(n4,{variant:"floating",leftPanel:S,ref:z,...F?i4:null,children:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:195,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:183,columnNumber:7},void 0)});D4.displayName="AiAgentPopup";try{D4.displayName="AiAgentPopup",D4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{D4 as A,B4 as T,U as a,F4 as b,d4 as c};
