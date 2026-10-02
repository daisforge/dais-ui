import{d as c,r as t}from"./react-D2T61mpp.js";import{I as S4,W as L4,ch as I4,y as P4,ci as R4,cj as M4}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{H as F,C as B4}from"./styled-components-5_LCUbRt.js";import{a as V4,b as H4,c as W4,d as $4,H as j4,e as z4,f as O4,g as q4,h as G4,i as K4,j as X4,k as Y4,B as U4,l as J4,m as Z4,n as Q4,o as uu,p as C4,q as eu,I as A4,r as tu}from"./@salutejs/sdds-finai-DGclA7qp.js";import{a as nu,t as ou,d as iu}from"./utils-qLOjzm3a.js";import{T as ru}from"./TextArea-D0nS5Pa8.js";import{c as su}from"./constants-BPUyiI8r.js";import{bp as au}from"./vendor-9g8l4WhJ.js";import{b as cu}from"./sharedUtilsResizable-IZRdYnaY.js";import{fa as lu}from"./@salutejs/plasma-icons-CsO0Zluk.js";const du={BodyL:uu,BodyM:Q4,BodyS:Z4,BodyXS:J4,BodyXXS:U4,DsplL:Y4,DsplM:X4,DsplS:K4,H1:G4,H2:q4,H3:O4,H4:z4,H5:j4,TextL:$4,TextM:W4,TextS:H4,TextXS:V4};function X({variant:u,children:e,refTypography:a,...n}){const s=du[u];return c.jsxDEV(s,{...n,ref:a,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/Typography.tsx",lineNumber:63,columnNumber:5},this)}X.displayName="Typography";try{X.displayName="Typography",X.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const Z="typography-with-auto-tooltip-root";let K=!1,W=null,J=0;function x4(){if(typeof document>"u")return;const u=document.getElementById(Z);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function pu(){K||(K=!0,W=setTimeout(()=>{K=!1,W=null,x4()},0))}function mu(){W&&(clearTimeout(W),W=null),K=!1}function Eu(){W&&(clearTimeout(W),W=null),K=!1,x4()}function fu(){if(!(typeof document>"u")){if(J+=1,J===1){const u=document.createElement("div");u.id=Z,document.body.appendChild(u)}return()=>{if(J-=1,J===0){const u=document.getElementById(Z);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function r4(){return{schedule:pu,flush:Eu,cancel:mu,getContainerId:()=>Z,createContainer:fu}}try{r4.displayName="usePopoverCleanup",r4.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const gu=F.div`
  color: ${()=>S4};
  ${()=>B4(L4)};
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
`,Au=({groupLabel:u,items:e})=>c.jsxDEV(gu,{children:[c.jsxDEV("span",{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:42,columnNumber:5},void 0),c.jsxDEV("ul",{children:e.map((a,n)=>c.jsxDEV("li",{children:a},`${a}-${n}`,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:43,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:41,columnNumber:3},void 0),hu=F.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,h4=({groupLabel:u,items:e,children:a,fullWidth:n,...s})=>{const r=e.length>0,o=c.jsxDEV(C4,{usePortal:!0,size:"s",mouseEnterDelay:500,...s,trigger:r?s.trigger??"hover":"none",text:r?c.jsxDEV(Au,{groupLabel:u,items:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:93,columnNumber:11},void 0):null,opened:r?s.opened:!1,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:84,columnNumber:5},void 0);return n?c.jsxDEV(hu,{children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Tooltip/TooltipList.tsx",lineNumber:103,columnNumber:12},void 0):o};try{h4.displayName="TooltipList",h4.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const s4=F(C4)`
  &.popover-target {
    width: 100%;
  }
`,a4=F.div`
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
`;try{s4.displayName="StyledTooltip",s4.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{a4.displayName="StyleTooltipWrapper",a4.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Du=1,D4=({tooltipText:u,tooltipProps:e,lines:a=1,className:n,children:s,...r})=>{const{mouseEnterDelay:o=500,mouseLeaveDelay:l=0,...f}=e||{},h=t.useRef(null),[D,_]=t.useState(!1),g=t.useRef(),{schedule:E,getContainerId:y,createContainer:B}=r4(),w=t.useCallback(()=>{if(!h.current)return!1;const b=h.current;if(a>1)return b.scrollHeight>b.clientHeight||b.scrollWidth>b.clientWidth;try{const T=document.createRange();T.selectNodeContents(b);const P=T.getBoundingClientRect().width,N=b.getBoundingClientRect().width;T.detach();const R=window.devicePixelRatio||1;return(P-N)*R>Du}catch{return!1}},[a]),p=t.useCallback(()=>{w()&&(g.current=setTimeout(()=>{_(!0)},o))},[w,o]),C=t.useCallback(()=>{clearTimeout(g.current),setTimeout(()=>{_(!1),E()},l)},[l,E]),{variant:A,bold:d,size:m,...i}=r,v={variant:A,...d!==void 0&&{bold:d},...m!==void 0&&{size:m},...i,refTypography:h,onMouseEnter:b=>{var T;(T=i.onMouseEnter)==null||T.call(i,b)},onMouseLeave:b=>{var T;(T=i.onMouseLeave)==null||T.call(i,b)},style:{...nu({lines:a}),...i.style||{}},children:s},I=c.jsxDEV(X,{...v,children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:120,columnNumber:5},void 0);return t.useEffect(()=>B(),[B]),t.useEffect(()=>()=>{clearTimeout(g.current),E()},[E]),c.jsxDEV(a4,{className:n,onMouseEnter:p,onMouseLeave:C,children:D?c.jsxDEV(s4,{opened:D,text:u??"",target:I,frame:y(),...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:143,columnNumber:9},void 0):I},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.tsx",lineNumber:137,columnNumber:5},void 0)};try{D4.displayName="TypographyWithAutoTooltip",D4.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target" | "trigger" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const y4=5,yu=4,vu=12,Fu=360,Bu=360,Cu=12,v4=56,xu=100,_u="ai-agent-popup-state",bu=300,_4="ai-agent-popup-dragging",F4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',Nu=.93,ku=79,wu=160,Tu=23,b4=44,N4=300,Su=4,Lu=40,O=800,Iu=615,V={bg:()=>P4,outline:()=>I4,radius:()=>su.m,padding:()=>`${Cu}px`},Pu=F(eu)`
  && .${au.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${_4} {
    cursor: grabbing;
    user-select: none;
  }
`,Ru=F.div`
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
`,Mu=F.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${V.radius} + 4px);
  background: ${V.outline};
  box-shadow: ${({$shadow:u})=>u};
`,Vu=F.div`
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
`,Hu=F.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Wu=F.div`
  position: relative;
`,$u=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,ju=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,zu=F.div`
  position: absolute;
  top: ${-25}px;
  height: ${ku}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${Nu*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?ju:$u};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Ou=F.div`
  background: ${V.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-Tu}px;
  }
`,qu=F.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,Gu=F.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?N4:b4}px;
  transition: width 0.3s ease;
`,k4=B4`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,Ku=F.div`
  ${k4};
  width: ${b4}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Xu=F.div`
  position: relative;
  flex: none;
`,Yu=F.div`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`,Uu=F.div`
  ${k4};
  width: ${N4}px;
  display: flex;
  flex-direction: column;
`,Ju=F.div`
  flex: none;
  height: ${Lu}px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Zu=F.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`,Qu=F.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,u0=F.div`
  flex: 1 1 auto;
  min-height: 0;
`,e0=F.div`
  flex: none;
  display: flex;
  margin: 0 ${Su}px;

  & > * {
    height: 100%;
  }
`,i4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},w4=()=>{const[u,e]=t.useState(i4);return t.useEffect(()=>{e(i4());const a=new MutationObserver(()=>e(i4()));return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]),u},c4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:a=wu,className:n,style:s,...r},o)=>{const l=w4(),f={size:"s",rows:1,autoResize:!0,...r,contentRight:e};return c.jsxDEV(Wu,{ref:o,className:n,style:s,children:[c.jsxDEV(zu,{$visible:u,$isDark:l,"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:60,columnNumber:9},void 0),c.jsxDEV(Ou,{$maxHeight:a,children:c.jsxDEV(ru,{...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:59,columnNumber:7},void 0)});c4.displayName="AiAgentInput";try{c4.displayName="AiAgentInput",c4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const Q=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,$=u=>{const e=Q(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const a=e.getBoundingClientRect();return{left:a.left+e.clientLeft-e.scrollLeft,top:a.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},T4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),u4=(u,e={width:0,height:0},a={},n)=>{const{width:s,height:r}=n??T4(),{top:o=0,right:l=0,bottom:f=0,left:h=0}=a;return{x:Math.max(h,Math.min(u.x,s-e.width-l)),y:Math.max(o,Math.min(u.y,r-e.height-f))}},l4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),d4=(u,e,a)=>{const n=u.getBoundingClientRect(),{left:s,top:r}=a??T4(),o=typeof e=="number"?e:e.x??0,l=typeof e=="number"?0:e.y??0;return{x:n.right+o-s,y:n.top+l-r}},t0=()=>({x:v4,y:v4}),p4=(u,e,a={},n)=>{const{width:s,height:r}=n??{width:window.innerWidth,height:window.innerHeight},{left:o=0,right:l=0,top:f=0,bottom:h=0}=a,D=(s-o-l)/3,_=(r-f-h)/2,g=u.x-o,E=u.y-f;let y=1,B=-1;for(let w=1;w<=6;w+=1){const p=(w-1)%3*D,C=w<=3?0:_,A=Math.max(0,Math.min(g+e.width,p+D)-Math.max(g,p)),d=Math.max(0,Math.min(E+e.height,C+_)-Math.max(E,C)),m=A*d;m>B&&(B=m,y=w)}return y},m4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},E4=(u,e="bottom-right")=>cu(u,{corner:e,minWidth:Fu,minHeight:Bu});try{Q.displayName="resolveFrameElement",Q.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{$.displayName="getFrameMetrics",$.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{u4.displayName="validatePosition",u4.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{l4.displayName="inflateDragBoundary",l4.__docgenInfo={description:`Раздувает отступы границ на величину by со всех сторон. Нужно для учёта
светящейся рамки: она нарисована снаружи контейнера и в его размеры
не входит, поэтому для границ окно считается на by шире с каждой стороны,
иначе рамка вылезает за dragBoundary при перетаскивании и ресайзе к краю.`,displayName:"inflateDragBoundary",props:{}}}catch{}try{d4.displayName="getPositionFromTarget",d4.__docgenInfo={description:`Позиция справа от target-элемента. Числовой gap: только горизонтальный
отступ, верхние края выровнены. Объектный gap: смещение по обеим осям
от правого верхнего угла таргета. Координаты переводятся из вьюпортных
в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{p4.displayName="getViewportSector",p4.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
частей (три колонки, два ряда), сектором окна считается тот, с которым
у него наибольшая площадь пересечения:
1 | 2 | 3
---------
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{m4.displayName="getCornerForSector",m4.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{E4.displayName="buildResizableConfig",E4.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}const e4=({items:u,activeKey:e,defaultActiveKey:a=null,onActiveKeyChange:n})=>{const s=e!==void 0,[r,o]=t.useState(a),l=s?e:r,f=E=>{s||o(E),n==null||n(E)},h=u.find(E=>E.key===l)??null,D=!!h,_=t.useRef(h);h&&(_.current=h);const g=_.current;return c.jsxDEV(qu,{children:[c.jsxDEV(Gu,{$open:D,children:[c.jsxDEV(Ku,{$active:!D,"aria-hidden":D,children:u.map(E=>c.jsxDEV(Xu,{children:[E.indicator&&c.jsxDEV(Yu,{children:E.indicator},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:66,columnNumber:17},void 0),c.jsxDEV(A4,{size:"s",view:"clear",onClick:()=>f(E.key),children:E.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:68,columnNumber:15},void 0)]},E.key,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:64,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:62,columnNumber:9},void 0),c.jsxDEV(Uu,{$active:D,"aria-hidden":!D,children:g&&c.jsxDEV(c.Fragment,{children:[c.jsxDEV(Ju,{children:[c.jsxDEV(Zu,{children:g.titleIcon??g.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:82,columnNumber:17},void 0),c.jsxDEV(Qu,{children:c.jsxDEV(X,{variant:"BodyM",bold:!0,children:g.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:86,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:85,columnNumber:17},void 0),c.jsxDEV(A4,{size:"s",view:"clear",onClick:()=>f(null),children:c.jsxDEV(lu,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:95,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:90,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:81,columnNumber:15},void 0),c.jsxDEV(u0,{children:g.content},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:98,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:80,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:61,columnNumber:7},void 0),c.jsxDEV(e0,{children:c.jsxDEV(tu,{orientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:104,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:103,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:60,columnNumber:5},void 0)};e4.displayName="AiAgentLeftPanel";try{e4.displayName="AiAgentLeftPanel",e4.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Разделы панели: иконки в полосе и их контент.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const t4=t.forwardRef(({variant:u="embedded",leftPanel:e,children:a,...n},s)=>{const o=w4()?R4:M4,l=u==="floating"?Ru:Mu;return c.jsxDEV(l,{...n,ref:s,$shadow:o,children:c.jsxDEV(Vu,{children:[e&&c.jsxDEV(e4,{...e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:41,columnNumber:25},void 0),c.jsxDEV(Hu,{children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:42,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:40,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:39,columnNumber:7},void 0)});t4.displayName="AiAgentSurface";try{t4.displayName="AiAgentSurface",t4.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const n0=({elementRef:u,setPosition:e,dragBoundary:a,onPositionChange:n,ignoreSelector:s,frame:r})=>{const[o,l]=t.useState(!1),[f,h]=t.useState(!1),D=t.useRef({x:0,y:0}),_=t.useRef({x:0,y:0}),g=t.useRef(!1),E=t.useRef(null),y=t.useMemo(()=>s?`${F4}, ${s}`:F4,[s]),B=t.useCallback((i,v)=>{if(!u.current)return;g.current=!1,_.current={x:i,y:v},E.current=$(r);const I=u.current.getBoundingClientRect();D.current={x:i-I.left,y:v-I.top},l(!0)},[u,r]),w=t.useCallback(i=>{i.button===0&&(i.target.closest(y)||B(i.clientX,i.clientY))},[B,y]),p=t.useCallback(i=>{if(i.target.closest(y))return;const v=i.touches[0];v&&B(v.clientX,v.clientY)},[B,y]),C=t.useCallback((i,v)=>{var z;if(!o||!u.current)return;const I=Math.abs(i-_.current.x),b=Math.abs(v-_.current.y);if(!g.current&&I<y4&&b<y4)return;g.current||(g.current=!0,h(!0),(z=window.getSelection())==null||z.removeAllRanges());const{offsetWidth:T,offsetHeight:P}=u.current,N=E.current??$(r),{top:R=0,right:M=0,bottom:S=0,left:k=0}=a||{},x=Math.max(k,Math.min(i-D.current.x-N.left,N.width-T-M)),L=Math.max(R,Math.min(v-D.current.y-N.top,N.height-P-S)),j={x,y:L};e(j),n==null||n(j)},[o,u,a,e,n,r]),A=t.useCallback(i=>{C(i.clientX,i.clientY)},[C]),d=t.useCallback(i=>{const v=i.touches[0];v&&C(v.clientX,v.clientY)},[C]),m=t.useCallback(()=>{l(!1),h(!1)},[]);return t.useEffect(()=>(o&&(document.addEventListener("mousemove",A),document.addEventListener("mouseup",m),document.addEventListener("touchmove",d),document.addEventListener("touchend",m),document.addEventListener("touchcancel",m)),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",m),document.removeEventListener("touchcancel",m)}),[o,A,d,m]),{dragActive:f,dragHandlers:{onMouseDown:w,onTouchStart:p}}},o0=({opened:u,targetRef:e,targetGap:a,defaultPosition:n,savedPosition:s,externalPositionState:r,dragBoundary:o,frame:l})=>{const f=t.useRef(null),[h,D]=t.useState(null),_=t.useCallback(p=>{f.current=p,D(p)},[]),[g,E]=t.useState(()=>s??n??null),y=r?r[0]:g,B=t.useCallback(p=>{r?r[1](p):E(p)},[r==null?void 0:r[1]]);t.useLayoutEffect(()=>{if(!u)return;const p=h;if(!p)return;const C={width:p.offsetWidth,height:p.offsetHeight},A=$(l),d=y??(e!=null&&e.current?d4(e.current,a,A):t0()),m=u4(d,C,o,A);(!y||m.x!==y.x||m.y!==y.y)&&B(m)},[u,h,y,e,a,o,l,B]);const w=t.useRef(y);return t.useEffect(()=>{w.current=y},[y]),t.useEffect(()=>{if(!u)return;const p=ou(()=>{const d=f.current,m=w.current;if(!d||!m)return;const i=u4(m,{width:d.offsetWidth,height:d.offsetHeight},o,$(l));(i.x!==m.x||i.y!==m.y)&&B(i)},xu);window.addEventListener("resize",p);const C=Q(l);let A;return C&&(A=new ResizeObserver(p),A.observe(C)),()=>{window.removeEventListener("resize",p),A==null||A.disconnect(),p.cancel()}},[u,o,l,B]),{popupPosition:y,setPopupPosition:B,positionForStorage:r?void 0:g??void 0,containerRef:f,setContainerRef:_}},i0=({resizable:u,defaultSize:e,savedSize:a,dragBoundary:n,containerRef:s,onSizeChange:r,popupPosition:o,setPopupPosition:l,frame:f,isSectionOpen:h=!1})=>{const[D,_]=t.useState(()=>a??e),[g,E]=t.useState({}),[y,B]=t.useState(null),w=t.useMemo(()=>{if(!o)return"bottom-right";const i=s.current,v={width:(i==null?void 0:i.offsetWidth)??0,height:(i==null?void 0:i.offsetHeight)??0};return m4(p4(o,v,n,$(f)))},[o,n,s,f]),p=y??w,C=t.useRef(null),A=t.useRef(null);t.useEffect(()=>()=>{var i;(i=A.current)==null||i.disconnect()},[]);const d=t.useMemo(()=>E4(u,p),[u,p]),m=t.useMemo(()=>{if(!d)return;const i=P=>{var R,M;const N=s.current;if(N){const S=$(f),k=N.getBoundingClientRect(),x={left:k.left-S.left,top:k.top-S.top,right:k.right-S.left,bottom:k.bottom-S.top},L=p;B(L);const{top:j=0,right:z=0,bottom:n4=0,left:o4=0}=n??{},q=Math.min(O,L.includes("left")?x.right-o4:S.width-x.left-z),Y=Math.min(O,L.includes("top")?x.bottom-j:S.height-x.top-n4);if(E({maxWidth:d.maxWidth?Math.min(d.maxWidth,q):q,maxHeight:d.maxHeight?Math.min(d.maxHeight,Y):Y}),L.includes("top")||L.includes("left")){const H={left:x.left,top:x.top,right:x.right,bottom:x.bottom,corner:L};C.current=H,(R=A.current)==null||R.disconnect(),A.current=new ResizeObserver(()=>{const G=s.current;G&&l({x:L.includes("left")?H.right-G.offsetWidth:H.left,y:L.includes("top")?H.bottom-G.offsetHeight:H.top})}),A.current.observe(N)}}(M=d.onResizeStart)==null||M.call(d,P)},v=P=>{var R,M,S;(R=A.current)==null||R.disconnect(),A.current=null,B(null);const N=((M=P==null?void 0:P.current)==null?void 0:M.resizable)??s.current;if(N){const k={width:N.offsetWidth,height:N.offsetHeight},x=C.current;x&&l({x:x.corner.includes("left")?x.right-k.width:x.left,y:x.corner.includes("top")?x.bottom-k.height:x.top}),_(k),r==null||r(k)}C.current=null,(S=d.onResizeEnd)==null||S.call(d,P)},I=h?Iu:d.minWidth,b=Math.min(O,g.maxWidth??O),T=Math.min(O,g.maxHeight??O);return{...d,defaultSize:D??d.defaultSize,minWidth:I,maxWidth:b,maxHeight:T,onResizeStart:i,onResizeEnd:v}},[d,p,n,D,g,r,s,l,f,h]);return{popupSize:D,resizableConfig:m}},r0=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",s0=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",a0=u=>{const e=typeof u=="string"?u:_u,a=t.useCallback(()=>{if(!u)return null;try{const r=localStorage.getItem(e);if(!r)return null;const o=JSON.parse(r);return!o||typeof o!="object"?null:{position:r0(o.position)?o.position:void 0,size:s0(o.size)?o.size:void 0}}catch(r){return console.error("AiAgentPopup: failed to load state:",r),null}},[u,e]),n=t.useCallback(r=>{if(u)try{const o=localStorage.getItem(e),l=o?JSON.parse(o):{},f={position:r.position??l.position,size:r.size??l.size};localStorage.setItem(e,JSON.stringify(f))}catch(o){console.error("AiAgentPopup: failed to save state:",o)}},[u,e]),s=t.useRef(void 0);return s.current===void 0&&(s.current=a()),{savedState:s.current,saveState:n}},f4=t.forwardRef((u,e)=>{const{children:a,leftPanel:n,opened:s,targetRef:r,targetGap:o=vu,defaultPosition:l,positionState:f,onPositionChange:h,draggable:D=!0,dragBoundary:_,dragIgnoreSelector:g,useStorage:E=!1,resizable:y=!0,defaultSize:B,onSizeChange:w,frame:p="document",style:C,className:A,...d}=u,{savedState:m,saveState:i}=a0(E),v=t.useMemo(()=>l4(_,yu),[_]),I=n==null?void 0:n.activeKey,b=I!==void 0,[T,P]=t.useState((n==null?void 0:n.defaultActiveKey)??null),N=b?I:T,R=!!(n&&N!=null&&n.items.some(U=>U.key===N)),M=t.useCallback(U=>{var g4;b||P(U),(g4=n==null?void 0:n.onActiveKeyChange)==null||g4.call(n,U)},[b,n==null?void 0:n.onActiveKeyChange]),S=t.useMemo(()=>n?{...n,activeKey:N,onActiveKeyChange:M}:void 0,[n,N,M]),{popupPosition:k,setPopupPosition:x,positionForStorage:L,containerRef:j,setContainerRef:z}=o0({opened:s,targetRef:r,targetGap:o,defaultPosition:l,savedPosition:m==null?void 0:m.position,externalPositionState:f,dragBoundary:v,frame:p}),{dragActive:n4,dragHandlers:o4}=n0({elementRef:j,setPosition:x,dragBoundary:v,onPositionChange:h,ignoreSelector:g,frame:p}),{popupSize:q,resizableConfig:Y}=i0({resizable:y,defaultSize:B,savedSize:m==null?void 0:m.size,dragBoundary:v,containerRef:j,onSizeChange:w,popupPosition:k,setPopupPosition:x,frame:p,isSectionOpen:R}),H=t.useMemo(()=>iu(i,bu),[i]);t.useEffect(()=>{E&&H({position:L,size:q})},[E,L,q,H]);const G=t.useMemo(()=>({left:k?`${k.x}px`:0,top:k?`${k.y}px`:0,...k?null:{visibility:"hidden"},...C}),[k,C]);return c.jsxDEV(Pu,{...d,ref:e,opened:s,frame:p,placement:"top-left",resizable:Y,style:G,className:n4?`${A??""} ${_4}`.trim():A,children:c.jsxDEV(t4,{variant:"floating",leftPanel:S,ref:z,...D?o4:null,children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:192,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:180,columnNumber:7},void 0)});f4.displayName="AiAgentPopup";try{f4.displayName="AiAgentPopup",f4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{f4 as A,D4 as T,X as a,h4 as b,t4 as c,c4 as d};
