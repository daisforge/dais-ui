import{j as l,r as t}from"./react-CAOzMBF_.js";import{cv as M4,cw as P4,cx as H4,A as $4}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{q as _,A as x4}from"./styled-components-BAnxJVQm.js";import{a as k4,b as W4,c as j4,d as z4,H as V4,e as O4,f as q4,g as G4,h as K4,i as X4,j as U4,k as Y4,B as Z4,l as J4,m as Q4,n as u0,o as e0,p as T4,q as t0,I as g4,r as n0}from"./@salutejs/sdds-finai-CrMFu5No.js";import{a as o0,t as r0,d as i0}from"./utils-D7J-sht1.js";import{T as s0}from"./TextArea-CpQ0MrCF.js";import{c as a0}from"./constants-ChwOYBdp.js";import{bp as c0}from"./vendor-CvBXOjQ8.js";import{b as l0}from"./sharedUtilsResizable-Bp8tiGu6.js";import{fa as d0}from"./@salutejs/plasma-icons-DBF9uERs.js";import{s as E0,a as p0}from"./@salutejs/sdds-themes-xIOWIAKk.js";const D0={BodyL:e0,BodyM:u0,BodyS:Q4,BodyXS:J4,BodyXXS:Z4,DsplL:Y4,DsplM:U4,DsplS:X4,H1:K4,H2:G4,H3:q4,H4:O4,H5:V4,TextL:z4,TextM:j4,TextS:W4,TextXS:k4};function U({variant:u,children:e,refTypography:c,...n}){const a=D0[u];return l.jsx(a,{...n,ref:c,children:e})}U.displayName="Typography";try{U.displayName="Typography",U.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"H2"'},{value:'"BodyS"'},{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const Q="typography-with-auto-tooltip-root";let X=!1,W=null,J=0;function b4(){if(typeof document>"u")return;const u=document.getElementById(Q);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function f0(){X||(X=!0,W=setTimeout(()=>{X=!1,W=null,b4()},0))}function A0(){W&&(clearTimeout(W),W=null),X=!1}function h0(){W&&(clearTimeout(W),W=null),X=!1,b4()}function m0(){if(!(typeof document>"u")){if(J+=1,J===1){const u=document.createElement("div");u.id=Q,document.body.appendChild(u)}return()=>{if(J-=1,J===0){const u=document.getElementById(Q);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function s4(){return{schedule:f0,flush:h0,cancel:A0,getContainerId:()=>Q,createContainer:m0}}try{s4.displayName="usePopoverCleanup",s4.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const g0=_.div`
  color: ${()=>M4};
  ${()=>x4(P4)};
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
`,F0=({groupLabel:u,items:e})=>l.jsxs(g0,{children:[l.jsx("span",{children:u}),l.jsx("ul",{children:e.map((c,n)=>l.jsx("li",{children:c},`${c}-${n}`))})]}),B0=_.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,F4=({groupLabel:u,items:e,children:c,fullWidth:n,...a})=>{const s=e.length>0,r=l.jsx(T4,{usePortal:!0,size:"s",mouseEnterDelay:500,...a,trigger:s?a.trigger??"hover":"none",text:s?l.jsx(F0,{groupLabel:u,items:e}):null,opened:s?a.opened:!1,children:c});return n?l.jsx(B0,{children:r}):r};try{F4.displayName="TooltipList",F4.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const a4=_(T4)`
  &.popover-target {
    width: 100%;
  }
`,c4=_.div`
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
`;try{a4.displayName="StyledTooltip",a4.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{c4.displayName="StyleTooltipWrapper",c4.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const y0=1,B4=({tooltipText:u,tooltipProps:e,lines:c=1,className:n,children:a,...s})=>{const{mouseEnterDelay:r=500,mouseLeaveDelay:d=0,...f}=e||{},g=t.useRef(null),[F,S]=t.useState(!1),B=t.useRef(),{schedule:v,getContainerId:A,createContainer:m}=s4(),y=t.useCallback(()=>{if(!g.current)return!1;const T=g.current;if(c>1)return T.scrollHeight>T.clientHeight||T.scrollWidth>T.clientWidth;try{const I=document.createRange();I.selectNodeContents(T);const M=I.getBoundingClientRect().width,b=T.getBoundingClientRect().width;I.detach();const P=window.devicePixelRatio||1;return(M-b)*P>y0}catch{return!1}},[c]),o=t.useCallback(()=>{y()&&(B.current=setTimeout(()=>{S(!0)},r))},[y,r]),h=t.useCallback(()=>{clearTimeout(B.current),setTimeout(()=>{S(!1),v()},d)},[d,v]),{variant:D,bold:E,size:p,...i}=s,C={variant:D,...E!==void 0&&{bold:E},...p!==void 0&&{size:p},...i,refTypography:g,onMouseEnter:T=>{var I;(I=i.onMouseEnter)==null||I.call(i,T)},onMouseLeave:T=>{var I;(I=i.onMouseLeave)==null||I.call(i,T)},style:{...o0({lines:c}),...i.style||{}},children:a},R=l.jsx(U,{...C,children:a});return t.useEffect(()=>m(),[m]),t.useEffect(()=>()=>{clearTimeout(B.current),v()},[v]),l.jsx(c4,{className:n,onMouseEnter:o,onMouseLeave:h,children:F?l.jsx(a4,{opened:F,text:u??"",target:R,frame:A(),...f}):R})};try{B4.displayName="TypographyWithAutoTooltip",B4.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target" | "trigger" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const y4=5,C0=4,_0=12,v0=360,x0=360,T0=16,b0={width:400,height:540},C4=56,w0=100,S0="ai-agent-popup-state",I0=300,w4="ai-agent-popup-dragging",_4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',L0=.93,N0=79,R0=220,M0=23,S4=48,I4=300,P0=8,H0=12,$0=1,k0=2,l4=40,W0=2,O=800,j0=615,$={bg:()=>$4,outline:()=>H4,radius:()=>a0.m,padding:()=>`${T0}px`},z0=_(t0)`
  && .${c0.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${w4} {
    cursor: grabbing;
    user-select: none;
  }
`,V0=_.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${$.radius};
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
    border-radius: calc(${$.radius} + 4px);
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
    border-radius: calc(${$.radius} + 4px);
    background: ${$.outline};
    pointer-events: none;
  }
`,O0=_.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${$.radius} + 4px);
  background: ${$.outline};
  box-shadow: ${({$shadow:u})=>u};
`,q0=_.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${$.padding};
  border-radius: ${$.radius};
  background: ${$.bg};
  overflow: hidden;
`,G0=_.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,K0=_.div`
  position: relative;
`,X0=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,U0=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,Y0=_.div`
  position: absolute;
  top: ${-25}px;
  height: ${N0}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${L0*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?U0:X0};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Z0=_.div`
  background: ${$.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-M0}px;
  }
`,J0=_.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,Q0=_.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?I4:S4}px;
  transition: width 0.3s ease;
`,L4=x4`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: ${P0}px;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,uu=_.div`
  ${L4};
  width: ${S4}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,v4=_.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  ${({$bottom:u})=>u&&"margin-top: auto;"}
`,eu=_.div`
  ${L4};
  width: ${I4}px;
  display: flex;
  flex-direction: column;
`,tu=_.div`
  flex: none;
  height: ${l4}px;
  display: flex;
  align-items: center;
  gap: ${W0}px;
`,nu=_.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${l4}px;
  height: ${l4}px;
`,ou=_.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ru=_.div`
  flex: 1 1 auto;
  min-height: 0;
`,iu=_.div`
  flex: none;
  display: flex;
  width: ${$0}px;
  margin-right: ${H0}px;

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *::before {
    border-radius: ${k0}px;
  }
`,i4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},N4=()=>{const[u,e]=t.useState(i4);return t.useEffect(()=>{e(i4());const c=new MutationObserver(()=>e(i4()));return c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>c.disconnect()},[]),u},d4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:c=R0,className:n,style:a,...s},r)=>{const d=N4(),f={size:"s",rows:1,autoResize:!0,...s,contentRight:e};return l.jsxs(K0,{ref:r,className:n,style:a,children:[l.jsx(Y0,{$visible:u,$isDark:d,"aria-hidden":!0}),l.jsx(Z0,{$maxHeight:c,children:l.jsx(s0,{...f})})]})});d4.displayName="AiAgentInput";try{d4.displayName="AiAgentInput",d4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const u4=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,j=u=>{const e=u4(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const c=e.getBoundingClientRect();return{left:c.left+e.clientLeft-e.scrollLeft,top:c.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},R4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),e4=(u,e={width:0,height:0},c={},n)=>{const{width:a,height:s}=n??R4(),{top:r=0,right:d=0,bottom:f=0,left:g=0}=c;return{x:Math.max(g,Math.min(u.x,a-e.width-d)),y:Math.max(r,Math.min(u.y,s-e.height-f))}},E4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),p4=(u,e,c)=>{const n=u.getBoundingClientRect(),{left:a,top:s}=c??R4(),r=typeof e=="number"?e:e.x??0,d=typeof e=="number"?0:e.y??0;return{x:n.right+r-a,y:n.top+d-s}},su=()=>({x:C4,y:C4}),D4=(u,e,c={},n)=>{const{width:a,height:s}=n??{width:window.innerWidth,height:window.innerHeight},{left:r=0,right:d=0,top:f=0,bottom:g=0}=c,F=(a-r-d)/3,S=(s-f-g)/2,B=u.x-r,v=u.y-f;let A=1,m=-1;for(let y=1;y<=6;y+=1){const o=(y-1)%3*F,h=y<=3?0:S,D=Math.max(0,Math.min(B+e.width,o+F)-Math.max(B,o)),E=Math.max(0,Math.min(v+e.height,h+S)-Math.max(v,h)),p=D*E;p>m&&(m=p,A=y)}return A},f4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},A4=(u,e="bottom-right")=>l0(u,{corner:e,minWidth:v0,minHeight:x0}),Y=u=>u.content!==void 0;try{u4.displayName="resolveFrameElement",u4.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{j.displayName="getFrameMetrics",j.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{e4.displayName="validatePosition",e4.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{E4.displayName="inflateDragBoundary",E4.__docgenInfo={description:`Раздувает отступы границ на величину by со всех сторон. Нужно для учёта
светящейся рамки: она нарисована снаружи контейнера и в его размеры
не входит, поэтому для границ окно считается на by шире с каждой стороны,
иначе рамка вылезает за dragBoundary при перетаскивании и ресайзе к краю.`,displayName:"inflateDragBoundary",props:{}}}catch{}try{p4.displayName="getPositionFromTarget",p4.__docgenInfo={description:`Позиция справа от target-элемента. Числовой gap: только горизонтальный
отступ, верхние края выровнены. Объектный gap: смещение по обеим осям
от правого верхнего угла таргета. Координаты переводятся из вьюпортных
в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{D4.displayName="getViewportSector",D4.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
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
Клик по кнопке.`,name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const t4=({items:u,activeKey:e,defaultActiveKey:c=null,onActiveKeyChange:n})=>{const a=e!==void 0,[s,r]=t.useState(c),d=a?e:s,f=o=>{a||r(o),n==null||n(o)},g=u.filter(Y).find(o=>o.key===d)??null,F=!!g,S=(o,h)=>{var D;(D=o.onClick)==null||D.call(o,h),Y(o)&&f(o.key)},B=o=>l.jsx(g4,{size:"s",view:"clear",disabled:o.disabled,onClick:h=>S(o,h),children:o.icon},o.key),v=u.filter(o=>o.placement==="bottom"),A=u.filter(o=>o.placement!=="bottom"),m=t.useRef(g);g&&(m.current=g);const y=m.current;return l.jsxs(J0,{children:[l.jsxs(Q0,{$open:F,children:[l.jsxs(uu,{$active:!F,"aria-hidden":F,children:[l.jsx(v4,{children:A.map(B)}),v.length>0&&l.jsx(v4,{$bottom:!0,children:v.map(B)})]}),l.jsx(eu,{$active:F,"aria-hidden":!F,children:y&&l.jsxs(l.Fragment,{children:[l.jsxs(tu,{children:[l.jsx(nu,{children:y.titleIcon??y.icon}),l.jsx(ou,{children:l.jsx(U,{variant:"BodyM",bold:!0,children:y.title})}),l.jsx(g4,{size:"s",view:"clear",onClick:()=>f(null),children:l.jsx(d0,{size:"s"})})]}),l.jsx(ru,{children:y.content})]})})]}),l.jsx(iu,{children:l.jsx(n0,{orientation:"vertical"})})]})};t4.displayName="AiAgentLeftPanel";try{t4.displayName="AiAgentLeftPanel",t4.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Пункт без content это кнопка-действие: клик вызывает его onClick,
раздел не открывается. Кнопки с placement bottom прижаты к низу полосы.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Пункты панели: разделы с контентом и кнопки-действия с onClick.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком. Клик по пункту-действию сюда не приходит.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const n4=t.forwardRef(({variant:u="embedded",leftPanel:e,children:c,...n},a)=>{const r=N4()?E0:p0,d=u==="floating"?V0:O0;return l.jsx(d,{...n,ref:a,$shadow:r,children:l.jsxs(q0,{children:[e&&l.jsx(t4,{...e}),l.jsx(G0,{children:c})]})})});n4.displayName="AiAgentSurface";try{n4.displayName="AiAgentSurface",n4.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const au=({elementRef:u,setPosition:e,dragBoundary:c,onPositionChange:n,ignoreSelector:a,frame:s})=>{const[r,d]=t.useState(!1),[f,g]=t.useState(!1),F=t.useRef({x:0,y:0}),S=t.useRef({x:0,y:0}),B=t.useRef(!1),v=t.useRef(null),A=t.useMemo(()=>a?`${_4}, ${a}`:_4,[a]),m=t.useCallback((i,C)=>{if(!u.current)return;B.current=!1,S.current={x:i,y:C},v.current=j(s);const R=u.current.getBoundingClientRect();F.current={x:i-R.left,y:C-R.top},d(!0)},[u,s]),y=t.useCallback(i=>{i.button===0&&(i.target.closest(A)||m(i.clientX,i.clientY))},[m,A]),o=t.useCallback(i=>{if(i.target.closest(A))return;const C=i.touches[0];C&&m(C.clientX,C.clientY)},[m,A]),h=t.useCallback((i,C)=>{var V;if(!r||!u.current)return;const R=Math.abs(i-S.current.x),T=Math.abs(C-S.current.y);if(!B.current&&R<y4&&T<y4)return;B.current||(B.current=!0,g(!0),(V=window.getSelection())==null||V.removeAllRanges());const{offsetWidth:I,offsetHeight:M}=u.current,b=v.current??j(s),{top:P=0,right:H=0,bottom:L=0,left:w=0}=c||{},x=Math.max(w,Math.min(i-F.current.x-b.left,b.width-I-H)),N=Math.max(P,Math.min(C-F.current.y-b.top,b.height-M-L)),z={x,y:N};e(z),n==null||n(z)},[r,u,c,e,n,s]),D=t.useCallback(i=>{h(i.clientX,i.clientY)},[h]),E=t.useCallback(i=>{const C=i.touches[0];C&&h(C.clientX,C.clientY)},[h]),p=t.useCallback(()=>{d(!1),g(!1)},[]);return t.useEffect(()=>(r&&(document.addEventListener("mousemove",D),document.addEventListener("mouseup",p),document.addEventListener("touchmove",E),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)}),[r,D,E,p]),{dragActive:f,dragHandlers:{onMouseDown:y,onTouchStart:o}}},cu=({opened:u,targetRef:e,targetGap:c,defaultPosition:n,savedPosition:a,externalPositionState:s,dragBoundary:r,frame:d})=>{const f=t.useRef(null),[g,F]=t.useState(null),S=t.useCallback(o=>{f.current=o,F(o)},[]),[B,v]=t.useState(()=>a??n??null),A=s?s[0]:B,m=t.useCallback(o=>{s?s[1](o):v(o)},[s==null?void 0:s[1]]);t.useLayoutEffect(()=>{if(!u)return;const o=g;if(!o)return;const h={width:o.offsetWidth,height:o.offsetHeight},D=j(d),E=A??(e!=null&&e.current?p4(e.current,c,D):su()),p=e4(E,h,r,D);(!A||p.x!==A.x||p.y!==A.y)&&m(p)},[u,g,A,e,c,r,d,m]);const y=t.useRef(A);return t.useEffect(()=>{y.current=A},[A]),t.useEffect(()=>{if(!u)return;const o=r0(()=>{const E=f.current,p=y.current;if(!E||!p)return;const i=e4(p,{width:E.offsetWidth,height:E.offsetHeight},r,j(d));(i.x!==p.x||i.y!==p.y)&&m(i)},w0);window.addEventListener("resize",o);const h=u4(d);let D;return h&&(D=new ResizeObserver(o),D.observe(h)),()=>{window.removeEventListener("resize",o),D==null||D.disconnect(),o.cancel()}},[u,r,d,m]),{popupPosition:A,setPopupPosition:m,positionForStorage:s?void 0:B??void 0,containerRef:f,setContainerRef:S}},lu=({resizable:u,defaultSize:e,savedSize:c,dragBoundary:n,containerRef:a,onSizeChange:s,popupPosition:r,setPopupPosition:d,frame:f,isSectionOpen:g=!1})=>{const[F,S]=t.useState(()=>c??e),[B,v]=t.useState({}),[A,m]=t.useState(null),y=t.useMemo(()=>{if(!r)return"bottom-right";const i=a.current,C={width:(i==null?void 0:i.offsetWidth)??0,height:(i==null?void 0:i.offsetHeight)??0};return f4(D4(r,C,n,j(f)))},[r,n,a,f]),o=A??y,h=t.useRef(null),D=t.useRef(null);t.useEffect(()=>()=>{var i;(i=D.current)==null||i.disconnect()},[]);const E=t.useMemo(()=>A4(u,o),[u,o]),p=t.useMemo(()=>{if(!E)return;const i=M=>{var P,H;const b=a.current;if(b){const L=j(f),w=b.getBoundingClientRect(),x={left:w.left-L.left,top:w.top-L.top,right:w.right-L.left,bottom:w.bottom-L.top},N=o;m(N);const{top:z=0,right:V=0,bottom:o4=0,left:r4=0}=n??{},q=Math.min(O,N.includes("left")?x.right-r4:L.width-x.left-V),Z=Math.min(O,N.includes("top")?x.bottom-z:L.height-x.top-o4);if(v({maxWidth:E.maxWidth?Math.min(E.maxWidth,q):q,maxHeight:E.maxHeight?Math.min(E.maxHeight,Z):Z}),N.includes("top")||N.includes("left")){const k={left:x.left,top:x.top,right:x.right,bottom:x.bottom,corner:N};h.current=k,(P=D.current)==null||P.disconnect(),D.current=new ResizeObserver(()=>{const G=a.current;G&&d({x:N.includes("left")?k.right-G.offsetWidth:k.left,y:N.includes("top")?k.bottom-G.offsetHeight:k.top})}),D.current.observe(b)}}(H=E.onResizeStart)==null||H.call(E,M)},C=M=>{var P,H,L;(P=D.current)==null||P.disconnect(),D.current=null,m(null);const b=((H=M==null?void 0:M.current)==null?void 0:H.resizable)??a.current;if(b){const w={width:b.offsetWidth,height:b.offsetHeight},x=h.current;x&&d({x:x.corner.includes("left")?x.right-w.width:x.left,y:x.corner.includes("top")?x.bottom-w.height:x.top}),S(w),s==null||s(w)}h.current=null,(L=E.onResizeEnd)==null||L.call(E,M)},R=g?j0:E.minWidth,T=Math.min(O,B.maxWidth??O),I=Math.min(O,B.maxHeight??O);return{...E,defaultSize:F??E.defaultSize,minWidth:R,maxWidth:T,maxHeight:I,onResizeStart:i,onResizeEnd:C}},[E,o,n,F,B,s,a,d,f,g]);return{popupSize:F,resizableConfig:p}},du=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",Eu=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",pu=u=>{const e=typeof u=="string"?u:S0,c=t.useCallback(()=>{if(!u)return null;try{const s=localStorage.getItem(e);if(!s)return null;const r=JSON.parse(s);return!r||typeof r!="object"?null:{position:du(r.position)?r.position:void 0,size:Eu(r.size)?r.size:void 0}}catch(s){return console.error("AiAgentPopup: failed to load state:",s),null}},[u,e]),n=t.useCallback(s=>{if(u)try{const r=localStorage.getItem(e),d=r?JSON.parse(r):{},f={position:s.position??d.position,size:s.size??d.size};localStorage.setItem(e,JSON.stringify(f))}catch(r){console.error("AiAgentPopup: failed to save state:",r)}},[u,e]),a=t.useRef(void 0);return a.current===void 0&&(a.current=c()),{savedState:a.current,saveState:n}},h4=t.forwardRef((u,e)=>{const{children:c,leftPanel:n,opened:a,targetRef:s,targetGap:r=_0,defaultPosition:d,positionState:f,onPositionChange:g,draggable:F=!0,dragBoundary:S,dragIgnoreSelector:B,useStorage:v=!1,resizable:A=!0,defaultSize:m=b0,onSizeChange:y,frame:o="document",style:h,className:D,...E}=u,{savedState:p,saveState:i}=pu(v),C=t.useMemo(()=>E4(S,C0),[S]),R=n==null?void 0:n.activeKey,T=R!==void 0,[I,M]=t.useState((n==null?void 0:n.defaultActiveKey)??null),b=T?R:I,P=!!(n&&b!=null&&n.items.some(K=>Y(K)&&K.key===b)),H=t.useCallback(K=>{var m4;T||M(K),(m4=n==null?void 0:n.onActiveKeyChange)==null||m4.call(n,K)},[T,n==null?void 0:n.onActiveKeyChange]),L=t.useMemo(()=>n?{...n,activeKey:b,onActiveKeyChange:H}:void 0,[n,b,H]),{popupPosition:w,setPopupPosition:x,positionForStorage:N,containerRef:z,setContainerRef:V}=cu({opened:a,targetRef:s,targetGap:r,defaultPosition:d,savedPosition:p==null?void 0:p.position,externalPositionState:f,dragBoundary:C,frame:o}),{dragActive:o4,dragHandlers:r4}=au({elementRef:z,setPosition:x,dragBoundary:C,onPositionChange:g,ignoreSelector:B,frame:o}),{popupSize:q,resizableConfig:Z}=lu({resizable:A,defaultSize:m,savedSize:p==null?void 0:p.size,dragBoundary:C,containerRef:z,onSizeChange:y,popupPosition:w,setPopupPosition:x,frame:o,isSectionOpen:P}),k=t.useMemo(()=>i0(i,I0),[i]);t.useEffect(()=>{v&&k({position:N,size:q})},[v,N,q,k]);const G=t.useMemo(()=>({left:w?`${w.x}px`:0,top:w?`${w.y}px`:0,...w?null:{visibility:"hidden"},...h}),[w,h]);return l.jsx(z0,{...E,ref:e,opened:a,frame:o,placement:"top-left",resizable:Z,style:G,className:o4?`${D??""} ${w4}`.trim():D,children:l.jsx(n4,{variant:"floating",leftPanel:L,ref:V,...F?r4:null,children:c})})});h4.displayName="AiAgentPopup";try{h4.displayName="AiAgentPopup",h4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{h4 as A,B4 as T,U as a,F4 as b,d4 as c};
