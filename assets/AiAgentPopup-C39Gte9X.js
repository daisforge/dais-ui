import{d as c,r as t}from"./react-D2T61mpp.js";import{I as L4,W as I4,ch as P4,y as R4,ci as M4,cj as V4}from"./@salutejs/sdds-themes-DL6tmVfr.js";import{H as _,C as C4}from"./styled-components-D2iYy2uM.js";import{a as H4,b as $4,c as W4,d as j4,H as z4,e as O4,f as G4,g as q4,h as K4,i as X4,j as U4,k as Y4,B as Z4,l as J4,m as Q4,n as uu,o as eu,p as _4,q as tu,I as h4,r as nu}from"./@salutejs/sdds-finai-BD5fhF9i.js";import{a as ou,t as iu,d as ru}from"./utils-CEczJKOt.js";import{T as su}from"./TextArea-CLiSpBcI.js";import{c as au}from"./constants-rCJTDDk_.js";import{bp as cu}from"./vendor-DhPQnvNP.js";import{b as lu}from"./sharedUtilsResizable-4btFEOm_.js";import{fa as du}from"./@salutejs/plasma-icons-Duq7ysyN.js";const pu={BodyL:eu,BodyM:uu,BodyS:Q4,BodyXS:J4,BodyXXS:Z4,DsplL:Y4,DsplM:U4,DsplS:X4,H1:K4,H2:q4,H3:G4,H4:O4,H5:z4,TextL:j4,TextM:W4,TextS:$4,TextXS:H4};function X({variant:u,children:e,refTypography:a,...n}){const s=pu[u];return c.jsxDEV(s,{...n,ref:a,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/Typography.tsx",lineNumber:63,columnNumber:5},this)}X.displayName="Typography";try{X.displayName="Typography",X.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const J="typography-with-auto-tooltip-root";let K=!1,$=null,Z=0;function x4(){if(typeof document>"u")return;const u=document.getElementById(J);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function Eu(){K||(K=!0,$=setTimeout(()=>{K=!1,$=null,x4()},0))}function mu(){$&&(clearTimeout($),$=null),K=!1}function fu(){$&&(clearTimeout($),$=null),K=!1,x4()}function gu(){if(!(typeof document>"u")){if(Z+=1,Z===1){const u=document.createElement("div");u.id=J,document.body.appendChild(u)}return()=>{if(Z-=1,Z===0){const u=document.getElementById(J);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function r4(){return{schedule:Eu,flush:fu,cancel:mu,getContainerId:()=>J,createContainer:gu}}try{r4.displayName="usePopoverCleanup",r4.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const Au=_.div`
  color: ${()=>L4};
  ${()=>C4(I4)};
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
`,hu=({groupLabel:u,items:e})=>c.jsxDEV(Au,{children:[c.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:42,columnNumber:5},void 0),c.jsxDEV("ul",{children:e.map((a,n)=>c.jsxDEV("li",{children:a},`${a}-${n}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:43,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:41,columnNumber:3},void 0),Du=_.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,D4=({groupLabel:u,items:e,children:a,fullWidth:n,...s})=>{const r=e.length>0,o=c.jsxDEV(_4,{usePortal:!0,size:"s",mouseEnterDelay:500,...s,trigger:r?s.trigger??"hover":"none",text:r?c.jsxDEV(hu,{groupLabel:u,items:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:93,columnNumber:11},void 0):null,opened:r?s.opened:!1,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:84,columnNumber:5},void 0);return n?c.jsxDEV(Du,{children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:103,columnNumber:12},void 0):o};try{D4.displayName="TooltipList",D4.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const s4=_(_4)`
  &.popover-target {
    width: 100%;
  }
`,a4=_.div`
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
`;try{s4.displayName="StyledTooltip",s4.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{a4.displayName="StyleTooltipWrapper",a4.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const yu=1,y4=({tooltipText:u,tooltipProps:e,lines:a=1,className:n,children:s,...r})=>{const{mouseEnterDelay:o=500,mouseLeaveDelay:l=0,...f}=e||{},h=t.useRef(null),[D,x]=t.useState(!1),g=t.useRef(),{schedule:m,getContainerId:y,createContainer:v}=r4(),k=t.useCallback(()=>{if(!h.current)return!1;const N=h.current;if(a>1)return N.scrollHeight>N.clientHeight||N.scrollWidth>N.clientWidth;try{const T=document.createRange();T.selectNodeContents(N);const P=T.getBoundingClientRect().width,b=N.getBoundingClientRect().width;T.detach();const R=window.devicePixelRatio||1;return(P-b)*R>yu}catch{return!1}},[a]),p=t.useCallback(()=>{k()&&(g.current=setTimeout(()=>{x(!0)},o))},[k,o]),B=t.useCallback(()=>{clearTimeout(g.current),setTimeout(()=>{x(!1),m()},l)},[l,m]),{variant:A,bold:d,size:E,...i}=r,F={variant:A,...d!==void 0&&{bold:d},...E!==void 0&&{size:E},...i,refTypography:h,onMouseEnter:N=>{var T;(T=i.onMouseEnter)==null||T.call(i,N)},onMouseLeave:N=>{var T;(T=i.onMouseLeave)==null||T.call(i,N)},style:{...ou({lines:a}),...i.style||{}},children:s},I=c.jsxDEV(X,{...F,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:120,columnNumber:5},void 0);return t.useEffect(()=>v(),[v]),t.useEffect(()=>()=>{clearTimeout(g.current),m()},[m]),c.jsxDEV(a4,{className:n,onMouseEnter:p,onMouseLeave:B,children:D?c.jsxDEV(s4,{opened:D,text:u??"",target:I,frame:y(),...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:143,columnNumber:9},void 0):I},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:137,columnNumber:5},void 0)};try{y4.displayName="TypographyWithAutoTooltip",y4.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "trigger" | "target" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const F4=5,Fu=4,vu=12,Bu=360,Cu=360,_u=16,xu={width:400,height:540},v4=56,Nu=100,bu="ai-agent-popup-state",wu=300,N4="ai-agent-popup-dragging",B4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',ku=.93,Tu=79,Su=220,Lu=23,b4=48,w4=300,Iu=8,Pu=12,Ru=1,Mu=2,c4=40,Vu=2,O=800,Hu=615,V={bg:()=>R4,outline:()=>P4,radius:()=>au.m,padding:()=>`${_u}px`},$u=_(tu)`
  && .${cu.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${N4} {
    cursor: grabbing;
    user-select: none;
  }
`,Wu=_.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${V.radius};
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
    border-radius: calc(${V.radius} + 4px);
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
    border-radius: calc(${V.radius} + 4px);
    background: ${V.outline};
    pointer-events: none;
  }
`,ju=_.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${V.radius} + 4px);
  background: ${V.outline};
  box-shadow: ${({$shadow:u})=>u};
`,zu=_.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${V.padding};
  border-radius: ${V.radius};
  background: ${V.bg};
  overflow: hidden;
`,Ou=_.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Gu=_.div`
  position: relative;
`,qu=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,Ku=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,Xu=_.div`
  position: absolute;
  top: ${-25}px;
  height: ${Tu}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${ku*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?Ku:qu};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Uu=_.div`
  background: ${V.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-Lu}px;
  }
`,Yu=_.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,Zu=_.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?w4:b4}px;
  transition: width 0.3s ease;
`,k4=C4`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: ${Iu}px;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,Ju=_.div`
  ${k4};
  width: ${b4}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Qu=_.div`
  ${k4};
  width: ${w4}px;
  display: flex;
  flex-direction: column;
`,u0=_.div`
  flex: none;
  height: ${c4}px;
  display: flex;
  align-items: center;
  gap: ${Vu}px;
`,e0=_.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${c4}px;
  height: ${c4}px;
`,t0=_.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n0=_.div`
  flex: 1 1 auto;
  min-height: 0;
`,o0=_.div`
  flex: none;
  display: flex;
  width: ${Ru}px;
  margin-right: ${Pu}px;

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *::before {
    border-radius: ${Mu}px;
  }
`,i4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},T4=()=>{const[u,e]=t.useState(i4);return t.useEffect(()=>{e(i4());const a=new MutationObserver(()=>e(i4()));return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]),u},l4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:a=Su,className:n,style:s,...r},o)=>{const l=T4(),f={size:"s",rows:1,autoResize:!0,...r,contentRight:e};return c.jsxDEV(Gu,{ref:o,className:n,style:s,children:[c.jsxDEV(Xu,{$visible:u,$isDark:l,"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:60,columnNumber:9},void 0),c.jsxDEV(Uu,{$maxHeight:a,children:c.jsxDEV(su,{...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:59,columnNumber:7},void 0)});l4.displayName="AiAgentInput";try{l4.displayName="AiAgentInput",l4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const Q=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,W=u=>{const e=Q(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const a=e.getBoundingClientRect();return{left:a.left+e.clientLeft-e.scrollLeft,top:a.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},S4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),u4=(u,e={width:0,height:0},a={},n)=>{const{width:s,height:r}=n??S4(),{top:o=0,right:l=0,bottom:f=0,left:h=0}=a;return{x:Math.max(h,Math.min(u.x,s-e.width-l)),y:Math.max(o,Math.min(u.y,r-e.height-f))}},d4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),p4=(u,e,a)=>{const n=u.getBoundingClientRect(),{left:s,top:r}=a??S4(),o=typeof e=="number"?e:e.x??0,l=typeof e=="number"?0:e.y??0;return{x:n.right+o-s,y:n.top+l-r}},i0=()=>({x:v4,y:v4}),E4=(u,e,a={},n)=>{const{width:s,height:r}=n??{width:window.innerWidth,height:window.innerHeight},{left:o=0,right:l=0,top:f=0,bottom:h=0}=a,D=(s-o-l)/3,x=(r-f-h)/2,g=u.x-o,m=u.y-f;let y=1,v=-1;for(let k=1;k<=6;k+=1){const p=(k-1)%3*D,B=k<=3?0:x,A=Math.max(0,Math.min(g+e.width,p+D)-Math.max(g,p)),d=Math.max(0,Math.min(m+e.height,B+x)-Math.max(m,B)),E=A*d;E>v&&(v=E,y=k)}return y},m4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},f4=(u,e="bottom-right")=>lu(u,{corner:e,minWidth:Bu,minHeight:Cu});try{Q.displayName="resolveFrameElement",Q.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{W.displayName="getFrameMetrics",W.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{u4.displayName="validatePosition",u4.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{d4.displayName="inflateDragBoundary",d4.__docgenInfo={description:`Раздувает отступы границ на величину by со всех сторон. Нужно для учёта
светящейся рамки: она нарисована снаружи контейнера и в его размеры
не входит, поэтому для границ окно считается на by шире с каждой стороны,
иначе рамка вылезает за dragBoundary при перетаскивании и ресайзе к краю.`,displayName:"inflateDragBoundary",props:{}}}catch{}try{p4.displayName="getPositionFromTarget",p4.__docgenInfo={description:`Позиция справа от target-элемента. Числовой gap: только горизонтальный
отступ, верхние края выровнены. Объектный gap: смещение по обеим осям
от правого верхнего угла таргета. Координаты переводятся из вьюпортных
в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{E4.displayName="getViewportSector",E4.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
частей (три колонки, два ряда), сектором окна считается тот, с которым
у него наибольшая площадь пересечения:
1 | 2 | 3
---------
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{m4.displayName="getCornerForSector",m4.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{f4.displayName="buildResizableConfig",f4.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}const e4=({items:u,activeKey:e,defaultActiveKey:a=null,onActiveKeyChange:n})=>{const s=e!==void 0,[r,o]=t.useState(a),l=s?e:r,f=m=>{s||o(m),n==null||n(m)},h=u.find(m=>m.key===l)??null,D=!!h,x=t.useRef(h);h&&(x.current=h);const g=x.current;return c.jsxDEV(Yu,{children:[c.jsxDEV(Zu,{$open:D,children:[c.jsxDEV(Ju,{$active:!D,"aria-hidden":D,children:u.map(m=>c.jsxDEV(h4,{size:"s",view:"clear",onClick:()=>f(m.key),children:m.icon},m.key,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:62,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:60,columnNumber:9},void 0),c.jsxDEV(Qu,{$active:D,"aria-hidden":!D,children:g&&c.jsxDEV(c.Fragment,{children:[c.jsxDEV(u0,{children:[c.jsxDEV(e0,{children:g.titleIcon??g.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:76,columnNumber:17},void 0),c.jsxDEV(t0,{children:c.jsxDEV(X,{variant:"BodyM",bold:!0,children:g.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:80,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:79,columnNumber:17},void 0),c.jsxDEV(h4,{size:"s",view:"clear",onClick:()=>f(null),children:c.jsxDEV(du,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:89,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:84,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:75,columnNumber:15},void 0),c.jsxDEV(n0,{children:g.content},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:92,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:74,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:72,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:59,columnNumber:7},void 0),c.jsxDEV(o0,{children:c.jsxDEV(nu,{orientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:98,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:97,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:58,columnNumber:5},void 0)};e4.displayName="AiAgentLeftPanel";try{e4.displayName="AiAgentLeftPanel",e4.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Разделы панели: иконки в полосе и их контент.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const t4=t.forwardRef(({variant:u="embedded",leftPanel:e,children:a,...n},s)=>{const o=T4()?M4:V4,l=u==="floating"?Wu:ju;return c.jsxDEV(l,{...n,ref:s,$shadow:o,children:c.jsxDEV(zu,{children:[e&&c.jsxDEV(e4,{...e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:41,columnNumber:25},void 0),c.jsxDEV(Ou,{children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:42,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:40,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:39,columnNumber:7},void 0)});t4.displayName="AiAgentSurface";try{t4.displayName="AiAgentSurface",t4.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const r0=({elementRef:u,setPosition:e,dragBoundary:a,onPositionChange:n,ignoreSelector:s,frame:r})=>{const[o,l]=t.useState(!1),[f,h]=t.useState(!1),D=t.useRef({x:0,y:0}),x=t.useRef({x:0,y:0}),g=t.useRef(!1),m=t.useRef(null),y=t.useMemo(()=>s?`${B4}, ${s}`:B4,[s]),v=t.useCallback((i,F)=>{if(!u.current)return;g.current=!1,x.current={x:i,y:F},m.current=W(r);const I=u.current.getBoundingClientRect();D.current={x:i-I.left,y:F-I.top},l(!0)},[u,r]),k=t.useCallback(i=>{i.button===0&&(i.target.closest(y)||v(i.clientX,i.clientY))},[v,y]),p=t.useCallback(i=>{if(i.target.closest(y))return;const F=i.touches[0];F&&v(F.clientX,F.clientY)},[v,y]),B=t.useCallback((i,F)=>{var z;if(!o||!u.current)return;const I=Math.abs(i-x.current.x),N=Math.abs(F-x.current.y);if(!g.current&&I<F4&&N<F4)return;g.current||(g.current=!0,h(!0),(z=window.getSelection())==null||z.removeAllRanges());const{offsetWidth:T,offsetHeight:P}=u.current,b=m.current??W(r),{top:R=0,right:M=0,bottom:S=0,left:w=0}=a||{},C=Math.max(w,Math.min(i-D.current.x-b.left,b.width-T-M)),L=Math.max(R,Math.min(F-D.current.y-b.top,b.height-P-S)),j={x:C,y:L};e(j),n==null||n(j)},[o,u,a,e,n,r]),A=t.useCallback(i=>{B(i.clientX,i.clientY)},[B]),d=t.useCallback(i=>{const F=i.touches[0];F&&B(F.clientX,F.clientY)},[B]),E=t.useCallback(()=>{l(!1),h(!1)},[]);return t.useEffect(()=>(o&&(document.addEventListener("mousemove",A),document.addEventListener("mouseup",E),document.addEventListener("touchmove",d),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)}),[o,A,d,E]),{dragActive:f,dragHandlers:{onMouseDown:k,onTouchStart:p}}},s0=({opened:u,targetRef:e,targetGap:a,defaultPosition:n,savedPosition:s,externalPositionState:r,dragBoundary:o,frame:l})=>{const f=t.useRef(null),[h,D]=t.useState(null),x=t.useCallback(p=>{f.current=p,D(p)},[]),[g,m]=t.useState(()=>s??n??null),y=r?r[0]:g,v=t.useCallback(p=>{r?r[1](p):m(p)},[r==null?void 0:r[1]]);t.useLayoutEffect(()=>{if(!u)return;const p=h;if(!p)return;const B={width:p.offsetWidth,height:p.offsetHeight},A=W(l),d=y??(e!=null&&e.current?p4(e.current,a,A):i0()),E=u4(d,B,o,A);(!y||E.x!==y.x||E.y!==y.y)&&v(E)},[u,h,y,e,a,o,l,v]);const k=t.useRef(y);return t.useEffect(()=>{k.current=y},[y]),t.useEffect(()=>{if(!u)return;const p=iu(()=>{const d=f.current,E=k.current;if(!d||!E)return;const i=u4(E,{width:d.offsetWidth,height:d.offsetHeight},o,W(l));(i.x!==E.x||i.y!==E.y)&&v(i)},Nu);window.addEventListener("resize",p);const B=Q(l);let A;return B&&(A=new ResizeObserver(p),A.observe(B)),()=>{window.removeEventListener("resize",p),A==null||A.disconnect(),p.cancel()}},[u,o,l,v]),{popupPosition:y,setPopupPosition:v,positionForStorage:r?void 0:g??void 0,containerRef:f,setContainerRef:x}},a0=({resizable:u,defaultSize:e,savedSize:a,dragBoundary:n,containerRef:s,onSizeChange:r,popupPosition:o,setPopupPosition:l,frame:f,isSectionOpen:h=!1})=>{const[D,x]=t.useState(()=>a??e),[g,m]=t.useState({}),[y,v]=t.useState(null),k=t.useMemo(()=>{if(!o)return"bottom-right";const i=s.current,F={width:(i==null?void 0:i.offsetWidth)??0,height:(i==null?void 0:i.offsetHeight)??0};return m4(E4(o,F,n,W(f)))},[o,n,s,f]),p=y??k,B=t.useRef(null),A=t.useRef(null);t.useEffect(()=>()=>{var i;(i=A.current)==null||i.disconnect()},[]);const d=t.useMemo(()=>f4(u,p),[u,p]),E=t.useMemo(()=>{if(!d)return;const i=P=>{var R,M;const b=s.current;if(b){const S=W(f),w=b.getBoundingClientRect(),C={left:w.left-S.left,top:w.top-S.top,right:w.right-S.left,bottom:w.bottom-S.top},L=p;v(L);const{top:j=0,right:z=0,bottom:n4=0,left:o4=0}=n??{},G=Math.min(O,L.includes("left")?C.right-o4:S.width-C.left-z),U=Math.min(O,L.includes("top")?C.bottom-j:S.height-C.top-n4);if(m({maxWidth:d.maxWidth?Math.min(d.maxWidth,G):G,maxHeight:d.maxHeight?Math.min(d.maxHeight,U):U}),L.includes("top")||L.includes("left")){const H={left:C.left,top:C.top,right:C.right,bottom:C.bottom,corner:L};B.current=H,(R=A.current)==null||R.disconnect(),A.current=new ResizeObserver(()=>{const q=s.current;q&&l({x:L.includes("left")?H.right-q.offsetWidth:H.left,y:L.includes("top")?H.bottom-q.offsetHeight:H.top})}),A.current.observe(b)}}(M=d.onResizeStart)==null||M.call(d,P)},F=P=>{var R,M,S;(R=A.current)==null||R.disconnect(),A.current=null,v(null);const b=((M=P==null?void 0:P.current)==null?void 0:M.resizable)??s.current;if(b){const w={width:b.offsetWidth,height:b.offsetHeight},C=B.current;C&&l({x:C.corner.includes("left")?C.right-w.width:C.left,y:C.corner.includes("top")?C.bottom-w.height:C.top}),x(w),r==null||r(w)}B.current=null,(S=d.onResizeEnd)==null||S.call(d,P)},I=h?Hu:d.minWidth,N=Math.min(O,g.maxWidth??O),T=Math.min(O,g.maxHeight??O);return{...d,defaultSize:D??d.defaultSize,minWidth:I,maxWidth:N,maxHeight:T,onResizeStart:i,onResizeEnd:F}},[d,p,n,D,g,r,s,l,f,h]);return{popupSize:D,resizableConfig:E}},c0=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",l0=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",d0=u=>{const e=typeof u=="string"?u:bu,a=t.useCallback(()=>{if(!u)return null;try{const r=localStorage.getItem(e);if(!r)return null;const o=JSON.parse(r);return!o||typeof o!="object"?null:{position:c0(o.position)?o.position:void 0,size:l0(o.size)?o.size:void 0}}catch(r){return console.error("AiAgentPopup: failed to load state:",r),null}},[u,e]),n=t.useCallback(r=>{if(u)try{const o=localStorage.getItem(e),l=o?JSON.parse(o):{},f={position:r.position??l.position,size:r.size??l.size};localStorage.setItem(e,JSON.stringify(f))}catch(o){console.error("AiAgentPopup: failed to save state:",o)}},[u,e]),s=t.useRef(void 0);return s.current===void 0&&(s.current=a()),{savedState:s.current,saveState:n}},g4=t.forwardRef((u,e)=>{const{children:a,leftPanel:n,opened:s,targetRef:r,targetGap:o=vu,defaultPosition:l,positionState:f,onPositionChange:h,draggable:D=!0,dragBoundary:x,dragIgnoreSelector:g,useStorage:m=!1,resizable:y=!0,defaultSize:v=xu,onSizeChange:k,frame:p="document",style:B,className:A,...d}=u,{savedState:E,saveState:i}=d0(m),F=t.useMemo(()=>d4(x,Fu),[x]),I=n==null?void 0:n.activeKey,N=I!==void 0,[T,P]=t.useState((n==null?void 0:n.defaultActiveKey)??null),b=N?I:T,R=!!(n&&b!=null&&n.items.some(Y=>Y.key===b)),M=t.useCallback(Y=>{var A4;N||P(Y),(A4=n==null?void 0:n.onActiveKeyChange)==null||A4.call(n,Y)},[N,n==null?void 0:n.onActiveKeyChange]),S=t.useMemo(()=>n?{...n,activeKey:b,onActiveKeyChange:M}:void 0,[n,b,M]),{popupPosition:w,setPopupPosition:C,positionForStorage:L,containerRef:j,setContainerRef:z}=s0({opened:s,targetRef:r,targetGap:o,defaultPosition:l,savedPosition:E==null?void 0:E.position,externalPositionState:f,dragBoundary:F,frame:p}),{dragActive:n4,dragHandlers:o4}=r0({elementRef:j,setPosition:C,dragBoundary:F,onPositionChange:h,ignoreSelector:g,frame:p}),{popupSize:G,resizableConfig:U}=a0({resizable:y,defaultSize:v,savedSize:E==null?void 0:E.size,dragBoundary:F,containerRef:j,onSizeChange:k,popupPosition:w,setPopupPosition:C,frame:p,isSectionOpen:R}),H=t.useMemo(()=>ru(i,wu),[i]);t.useEffect(()=>{m&&H({position:L,size:G})},[m,L,G,H]);const q=t.useMemo(()=>({left:w?`${w.x}px`:0,top:w?`${w.y}px`:0,...w?null:{visibility:"hidden"},...B}),[w,B]);return c.jsxDEV($u,{...d,ref:e,opened:s,frame:p,placement:"top-left",resizable:U,style:q,className:n4?`${A??""} ${N4}`.trim():A,children:c.jsxDEV(t4,{variant:"floating",leftPanel:S,ref:z,...D?o4:null,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:193,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:181,columnNumber:7},void 0)});g4.displayName="AiAgentPopup";try{g4.displayName="AiAgentPopup",g4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{g4 as A,y4 as T,X as a,D4 as b,l4 as c};
