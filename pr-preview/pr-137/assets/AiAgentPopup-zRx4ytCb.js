import{j as c,r as t}from"./react-CAOzMBF_.js";import{K as N4,Y as R4,cj as M4,A as H4,ck as P4,cl as $4}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as v,C as _4}from"./styled-components-DCFsnh-i.js";import{a as W4,b as k4,c as j4,d as z4,H as O4,e as V4,f as G4,g as q4,h as K4,i as X4,j as Y4,k as U4,B as Z4,l as J4,m as Q4,n as u0,o as e0,p as v4,q as t0,I as g4,r as n0}from"./@salutejs/sdds-finai-CKhMjg07.js";import{a as o0,t as r0,d as i0}from"./utils-EIxGvR70.js";import{T as s0}from"./TextArea-FtPqzh-q.js";import{c as a0}from"./constants-DatVHdkd.js";import{bo as c0}from"./vendor-DmWczWMC.js";import{b as l0}from"./sharedUtilsResizable-BjlCs3KG.js";import{fa as d0}from"./@salutejs/plasma-icons-Do5ggeDI.js";const p0={BodyL:e0,BodyM:u0,BodyS:Q4,BodyXS:J4,BodyXXS:Z4,DsplL:U4,DsplM:Y4,DsplS:X4,H1:K4,H2:q4,H3:G4,H4:V4,H5:O4,TextL:z4,TextM:j4,TextS:k4,TextXS:W4};function X({variant:u,children:e,refTypography:a,...n}){const s=p0[u];return c.jsx(s,{...n,ref:a,children:e})}X.displayName="Typography";try{X.displayName="Typography",X.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"BodyL"'},{value:'"BodyM"'},{value:'"BodyS"'},{value:'"BodyXS"'},{value:'"BodyXXS"'},{value:'"DsplL"'},{value:'"DsplM"'},{value:'"DsplS"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"TextL"'},{value:'"TextM"'},{value:'"TextS"'},{value:'"TextXS"'}]}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}}}}}catch{}const J="typography-with-auto-tooltip-root";let K=!1,k=null,Z=0;function x4(){if(typeof document>"u")return;const u=document.getElementById(J);u&&u.querySelectorAll("[id^='plasma-popover-root']:empty").forEach(e=>e.remove())}function E0(){K||(K=!0,k=setTimeout(()=>{K=!1,k=null,x4()},0))}function f0(){k&&(clearTimeout(k),k=null),K=!1}function h0(){k&&(clearTimeout(k),k=null),K=!1,x4()}function D0(){if(!(typeof document>"u")){if(Z+=1,Z===1){const u=document.createElement("div");u.id=J,document.body.appendChild(u)}return()=>{if(Z-=1,Z===0){const u=document.getElementById(J);u&&(u.querySelectorAll("[id^='plasma-popover-root']").length>0||u.remove())}}}}function i4(){return{schedule:E0,flush:h0,cancel:f0,getContainerId:()=>J,createContainer:D0}}try{i4.displayName="usePopoverCleanup",i4.__docgenInfo={description:`Возвращает { schedule, flush, cancel, getContainerId, createContainer } — SingleTone
getContainerId - функция для получения ID контейнера для TypographyWithAutoTooltip
useContainer - хук для создания/управления контейнером через React`,displayName:"usePopoverCleanup",props:{}}}catch{}const m0=v.div`
  color: ${()=>N4};
  ${()=>_4(R4)};
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
`,g0=({groupLabel:u,items:e})=>c.jsxs(m0,{children:[c.jsx("span",{children:u}),c.jsx("ul",{children:e.map((a,n)=>c.jsx("li",{children:a},`${a}-${n}`))})]}),A0=v.div`
  width: 100%;

  & .popover-target,
  & .popover-wrapper {
    width: 100%;
  }
`,A4=({groupLabel:u,items:e,children:a,fullWidth:n,...s})=>{const i=e.length>0,o=c.jsx(v4,{usePortal:!0,size:"s",mouseEnterDelay:500,...s,trigger:i?s.trigger??"hover":"none",text:i?c.jsx(g0,{groupLabel:u,items:e}):null,opened:i?s.opened:!1,children:a});return n?c.jsx(A0,{children:o}):o};try{A4.displayName="TooltipList",A4.__docgenInfo={description:"",displayName:"TooltipList",props:{groupLabel:{defaultValue:null,description:"",name:"groupLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},fullWidth:{defaultValue:null,description:`Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.`,name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const s4=v(v4)`
  &.popover-target {
    width: 100%;
  }
`,a4=v.div`
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
`;try{s4.displayName="StyledTooltip",s4.__docgenInfo={description:"",displayName:"StyledTooltip",props:{}}}catch{}try{a4.displayName="StyleTooltipWrapper",a4.__docgenInfo={description:"",displayName:"StyleTooltipWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const y0=1,y4=({tooltipText:u,tooltipProps:e,lines:a=1,className:n,children:s,...i})=>{const{mouseEnterDelay:o=500,mouseLeaveDelay:l=0,...h}=e||{},g=t.useRef(null),[A,x]=t.useState(!1),D=t.useRef(),{schedule:f,getContainerId:y,createContainer:B}=i4(),b=t.useCallback(()=>{if(!g.current)return!1;const T=g.current;if(a>1)return T.scrollHeight>T.clientHeight||T.scrollWidth>T.clientWidth;try{const I=document.createRange();I.selectNodeContents(T);const M=I.getBoundingClientRect().width,w=T.getBoundingClientRect().width;I.detach();const H=window.devicePixelRatio||1;return(M-w)*H>y0}catch{return!1}},[a]),p=t.useCallback(()=>{b()&&(D.current=setTimeout(()=>{x(!0)},o))},[b,o]),C=t.useCallback(()=>{clearTimeout(D.current),setTimeout(()=>{x(!1),f()},l)},[l,f]),{variant:m,bold:d,size:E,...r}=i,F={variant:m,...d!==void 0&&{bold:d},...E!==void 0&&{size:E},...r,refTypography:g,onMouseEnter:T=>{var I;(I=r.onMouseEnter)==null||I.call(r,T)},onMouseLeave:T=>{var I;(I=r.onMouseLeave)==null||I.call(r,T)},style:{...o0({lines:a}),...r.style||{}},children:s},R=c.jsx(X,{...F,children:s});return t.useEffect(()=>B(),[B]),t.useEffect(()=>()=>{clearTimeout(D.current),f()},[f]),c.jsx(a4,{className:n,onMouseEnter:p,onMouseLeave:C,children:A?c.jsx(s4,{opened:A,text:u??"",target:R,frame:y(),...h}):R})};try{y4.displayName="TypographyWithAutoTooltip",y4.__docgenInfo={description:"",displayName:"TypographyWithAutoTooltip",props:{tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "text" | "target" | "trigger" | "opened">'}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},refTypography:{defaultValue:null,description:"",name:"refTypography",required:!0,type:{name:"any"}}}}}catch{}const F4=5,F0=4,B0=12,C0=360,_0=360,v0=16,x0={width:400,height:540},B4=56,T0=100,w0="ai-agent-popup-state",S0=300,T4="ai-agent-popup-dragging",C4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',b0=.93,I0=79,L0=220,N0=23,w4=48,S4=300,R0=8,M0=12,H0=1,P0=2,c4=40,$0=2,V=800,W0=615,$={bg:()=>H4,outline:()=>M4,radius:()=>a0.m,padding:()=>`${v0}px`},k0=v(t0)`
  && .${c0.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${T4} {
    cursor: grabbing;
    user-select: none;
  }
`,j0=v.div`
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
`,z0=v.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${$.radius} + 4px);
  background: ${$.outline};
  box-shadow: ${({$shadow:u})=>u};
`,O0=v.div`
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
`,V0=v.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,G0=v.div`
  position: relative;
`,q0=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,K0=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,X0=v.div`
  position: absolute;
  top: ${-25}px;
  height: ${I0}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${b0*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?K0:q0};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,Y0=v.div`
  background: ${$.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-N0}px;
  }
`,U0=v.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,Z0=v.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?S4:w4}px;
  transition: width 0.3s ease;
`,b4=_4`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: ${R0}px;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,J0=v.div`
  ${b4};
  width: ${w4}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Q0=v.div`
  ${b4};
  width: ${S4}px;
  display: flex;
  flex-direction: column;
`,uu=v.div`
  flex: none;
  height: ${c4}px;
  display: flex;
  align-items: center;
  gap: ${$0}px;
`,eu=v.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${c4}px;
  height: ${c4}px;
`,tu=v.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nu=v.div`
  flex: 1 1 auto;
  min-height: 0;
`,ou=v.div`
  flex: none;
  display: flex;
  width: ${H0}px;
  margin-right: ${M0}px;

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *::before {
    border-radius: ${P0}px;
  }
`,r4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},I4=()=>{const[u,e]=t.useState(r4);return t.useEffect(()=>{e(r4());const a=new MutationObserver(()=>e(r4()));return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]),u},l4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:a=L0,className:n,style:s,...i},o)=>{const l=I4(),h={size:"s",rows:1,autoResize:!0,...i,contentRight:e};return c.jsxs(G0,{ref:o,className:n,style:s,children:[c.jsx(X0,{$visible:u,$isDark:l,"aria-hidden":!0}),c.jsx(Y0,{$maxHeight:a,children:c.jsx(s0,{...h})})]})});l4.displayName="AiAgentInput";try{l4.displayName="AiAgentInput",l4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const Q=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,j=u=>{const e=Q(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const a=e.getBoundingClientRect();return{left:a.left+e.clientLeft-e.scrollLeft,top:a.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},L4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),u4=(u,e={width:0,height:0},a={},n)=>{const{width:s,height:i}=n??L4(),{top:o=0,right:l=0,bottom:h=0,left:g=0}=a;return{x:Math.max(g,Math.min(u.x,s-e.width-l)),y:Math.max(o,Math.min(u.y,i-e.height-h))}},d4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),p4=(u,e,a)=>{const n=u.getBoundingClientRect(),{left:s,top:i}=a??L4(),o=typeof e=="number"?e:e.x??0,l=typeof e=="number"?0:e.y??0;return{x:n.right+o-s,y:n.top+l-i}},ru=()=>({x:B4,y:B4}),E4=(u,e,a={},n)=>{const{width:s,height:i}=n??{width:window.innerWidth,height:window.innerHeight},{left:o=0,right:l=0,top:h=0,bottom:g=0}=a,A=(s-o-l)/3,x=(i-h-g)/2,D=u.x-o,f=u.y-h;let y=1,B=-1;for(let b=1;b<=6;b+=1){const p=(b-1)%3*A,C=b<=3?0:x,m=Math.max(0,Math.min(D+e.width,p+A)-Math.max(D,p)),d=Math.max(0,Math.min(f+e.height,C+x)-Math.max(f,C)),E=m*d;E>B&&(B=E,y=b)}return y},f4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},h4=(u,e="bottom-right")=>l0(u,{corner:e,minWidth:C0,minHeight:_0});try{Q.displayName="resolveFrameElement",Q.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{j.displayName="getFrameMetrics",j.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
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
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{f4.displayName="getCornerForSector",f4.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{h4.displayName="buildResizableConfig",h4.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}const e4=({items:u,activeKey:e,defaultActiveKey:a=null,onActiveKeyChange:n})=>{const s=e!==void 0,[i,o]=t.useState(a),l=s?e:i,h=f=>{s||o(f),n==null||n(f)},g=u.find(f=>f.key===l)??null,A=!!g,x=t.useRef(g);g&&(x.current=g);const D=x.current;return c.jsxs(U0,{children:[c.jsxs(Z0,{$open:A,children:[c.jsx(J0,{$active:!A,"aria-hidden":A,children:u.map(f=>c.jsx(g4,{size:"s",view:"clear",onClick:()=>h(f.key),children:f.icon},f.key))}),c.jsx(Q0,{$active:A,"aria-hidden":!A,children:D&&c.jsxs(c.Fragment,{children:[c.jsxs(uu,{children:[c.jsx(eu,{children:D.titleIcon??D.icon}),c.jsx(tu,{children:c.jsx(X,{variant:"BodyM",bold:!0,children:D.title})}),c.jsx(g4,{size:"s",view:"clear",onClick:()=>h(null),children:c.jsx(d0,{size:"s"})})]}),c.jsx(nu,{children:D.content})]})})]}),c.jsx(ou,{children:c.jsx(n0,{orientation:"vertical"})})]})};e4.displayName="AiAgentLeftPanel";try{e4.displayName="AiAgentLeftPanel",e4.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Разделы панели: иконки в полосе и их контент.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const t4=t.forwardRef(({variant:u="embedded",leftPanel:e,children:a,...n},s)=>{const o=I4()?P4:$4,l=u==="floating"?j0:z0;return c.jsx(l,{...n,ref:s,$shadow:o,children:c.jsxs(O0,{children:[e&&c.jsx(e4,{...e}),c.jsx(V0,{children:a})]})})});t4.displayName="AiAgentSurface";try{t4.displayName="AiAgentSurface",t4.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const iu=({elementRef:u,setPosition:e,dragBoundary:a,onPositionChange:n,ignoreSelector:s,frame:i})=>{const[o,l]=t.useState(!1),[h,g]=t.useState(!1),A=t.useRef({x:0,y:0}),x=t.useRef({x:0,y:0}),D=t.useRef(!1),f=t.useRef(null),y=t.useMemo(()=>s?`${C4}, ${s}`:C4,[s]),B=t.useCallback((r,F)=>{if(!u.current)return;D.current=!1,x.current={x:r,y:F},f.current=j(i);const R=u.current.getBoundingClientRect();A.current={x:r-R.left,y:F-R.top},l(!0)},[u,i]),b=t.useCallback(r=>{r.button===0&&(r.target.closest(y)||B(r.clientX,r.clientY))},[B,y]),p=t.useCallback(r=>{if(r.target.closest(y))return;const F=r.touches[0];F&&B(F.clientX,F.clientY)},[B,y]),C=t.useCallback((r,F)=>{var O;if(!o||!u.current)return;const R=Math.abs(r-x.current.x),T=Math.abs(F-x.current.y);if(!D.current&&R<F4&&T<F4)return;D.current||(D.current=!0,g(!0),(O=window.getSelection())==null||O.removeAllRanges());const{offsetWidth:I,offsetHeight:M}=u.current,w=f.current??j(i),{top:H=0,right:P=0,bottom:L=0,left:S=0}=a||{},_=Math.max(S,Math.min(r-A.current.x-w.left,w.width-I-P)),N=Math.max(H,Math.min(F-A.current.y-w.top,w.height-M-L)),z={x:_,y:N};e(z),n==null||n(z)},[o,u,a,e,n,i]),m=t.useCallback(r=>{C(r.clientX,r.clientY)},[C]),d=t.useCallback(r=>{const F=r.touches[0];F&&C(F.clientX,F.clientY)},[C]),E=t.useCallback(()=>{l(!1),g(!1)},[]);return t.useEffect(()=>(o&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",E),document.addEventListener("touchmove",d),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)}),[o,m,d,E]),{dragActive:h,dragHandlers:{onMouseDown:b,onTouchStart:p}}},su=({opened:u,targetRef:e,targetGap:a,defaultPosition:n,savedPosition:s,externalPositionState:i,dragBoundary:o,frame:l})=>{const h=t.useRef(null),[g,A]=t.useState(null),x=t.useCallback(p=>{h.current=p,A(p)},[]),[D,f]=t.useState(()=>s??n??null),y=i?i[0]:D,B=t.useCallback(p=>{i?i[1](p):f(p)},[i==null?void 0:i[1]]);t.useLayoutEffect(()=>{if(!u)return;const p=g;if(!p)return;const C={width:p.offsetWidth,height:p.offsetHeight},m=j(l),d=y??(e!=null&&e.current?p4(e.current,a,m):ru()),E=u4(d,C,o,m);(!y||E.x!==y.x||E.y!==y.y)&&B(E)},[u,g,y,e,a,o,l,B]);const b=t.useRef(y);return t.useEffect(()=>{b.current=y},[y]),t.useEffect(()=>{if(!u)return;const p=r0(()=>{const d=h.current,E=b.current;if(!d||!E)return;const r=u4(E,{width:d.offsetWidth,height:d.offsetHeight},o,j(l));(r.x!==E.x||r.y!==E.y)&&B(r)},T0);window.addEventListener("resize",p);const C=Q(l);let m;return C&&(m=new ResizeObserver(p),m.observe(C)),()=>{window.removeEventListener("resize",p),m==null||m.disconnect(),p.cancel()}},[u,o,l,B]),{popupPosition:y,setPopupPosition:B,positionForStorage:i?void 0:D??void 0,containerRef:h,setContainerRef:x}},au=({resizable:u,defaultSize:e,savedSize:a,dragBoundary:n,containerRef:s,onSizeChange:i,popupPosition:o,setPopupPosition:l,frame:h,isSectionOpen:g=!1})=>{const[A,x]=t.useState(()=>a??e),[D,f]=t.useState({}),[y,B]=t.useState(null),b=t.useMemo(()=>{if(!o)return"bottom-right";const r=s.current,F={width:(r==null?void 0:r.offsetWidth)??0,height:(r==null?void 0:r.offsetHeight)??0};return f4(E4(o,F,n,j(h)))},[o,n,s,h]),p=y??b,C=t.useRef(null),m=t.useRef(null);t.useEffect(()=>()=>{var r;(r=m.current)==null||r.disconnect()},[]);const d=t.useMemo(()=>h4(u,p),[u,p]),E=t.useMemo(()=>{if(!d)return;const r=M=>{var H,P;const w=s.current;if(w){const L=j(h),S=w.getBoundingClientRect(),_={left:S.left-L.left,top:S.top-L.top,right:S.right-L.left,bottom:S.bottom-L.top},N=p;B(N);const{top:z=0,right:O=0,bottom:n4=0,left:o4=0}=n??{},G=Math.min(V,N.includes("left")?_.right-o4:L.width-_.left-O),Y=Math.min(V,N.includes("top")?_.bottom-z:L.height-_.top-n4);if(f({maxWidth:d.maxWidth?Math.min(d.maxWidth,G):G,maxHeight:d.maxHeight?Math.min(d.maxHeight,Y):Y}),N.includes("top")||N.includes("left")){const W={left:_.left,top:_.top,right:_.right,bottom:_.bottom,corner:N};C.current=W,(H=m.current)==null||H.disconnect(),m.current=new ResizeObserver(()=>{const q=s.current;q&&l({x:N.includes("left")?W.right-q.offsetWidth:W.left,y:N.includes("top")?W.bottom-q.offsetHeight:W.top})}),m.current.observe(w)}}(P=d.onResizeStart)==null||P.call(d,M)},F=M=>{var H,P,L;(H=m.current)==null||H.disconnect(),m.current=null,B(null);const w=((P=M==null?void 0:M.current)==null?void 0:P.resizable)??s.current;if(w){const S={width:w.offsetWidth,height:w.offsetHeight},_=C.current;_&&l({x:_.corner.includes("left")?_.right-S.width:_.left,y:_.corner.includes("top")?_.bottom-S.height:_.top}),x(S),i==null||i(S)}C.current=null,(L=d.onResizeEnd)==null||L.call(d,M)},R=g?W0:d.minWidth,T=Math.min(V,D.maxWidth??V),I=Math.min(V,D.maxHeight??V);return{...d,defaultSize:A??d.defaultSize,minWidth:R,maxWidth:T,maxHeight:I,onResizeStart:r,onResizeEnd:F}},[d,p,n,A,D,i,s,l,h,g]);return{popupSize:A,resizableConfig:E}},cu=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",lu=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",du=u=>{const e=typeof u=="string"?u:w0,a=t.useCallback(()=>{if(!u)return null;try{const i=localStorage.getItem(e);if(!i)return null;const o=JSON.parse(i);return!o||typeof o!="object"?null:{position:cu(o.position)?o.position:void 0,size:lu(o.size)?o.size:void 0}}catch(i){return console.error("AiAgentPopup: failed to load state:",i),null}},[u,e]),n=t.useCallback(i=>{if(u)try{const o=localStorage.getItem(e),l=o?JSON.parse(o):{},h={position:i.position??l.position,size:i.size??l.size};localStorage.setItem(e,JSON.stringify(h))}catch(o){console.error("AiAgentPopup: failed to save state:",o)}},[u,e]),s=t.useRef(void 0);return s.current===void 0&&(s.current=a()),{savedState:s.current,saveState:n}},D4=t.forwardRef((u,e)=>{const{children:a,leftPanel:n,opened:s,targetRef:i,targetGap:o=B0,defaultPosition:l,positionState:h,onPositionChange:g,draggable:A=!0,dragBoundary:x,dragIgnoreSelector:D,useStorage:f=!1,resizable:y=!0,defaultSize:B=x0,onSizeChange:b,frame:p="document",style:C,className:m,...d}=u,{savedState:E,saveState:r}=du(f),F=t.useMemo(()=>d4(x,F0),[x]),R=n==null?void 0:n.activeKey,T=R!==void 0,[I,M]=t.useState((n==null?void 0:n.defaultActiveKey)??null),w=T?R:I,H=!!(n&&w!=null&&n.items.some(U=>U.key===w)),P=t.useCallback(U=>{var m4;T||M(U),(m4=n==null?void 0:n.onActiveKeyChange)==null||m4.call(n,U)},[T,n==null?void 0:n.onActiveKeyChange]),L=t.useMemo(()=>n?{...n,activeKey:w,onActiveKeyChange:P}:void 0,[n,w,P]),{popupPosition:S,setPopupPosition:_,positionForStorage:N,containerRef:z,setContainerRef:O}=su({opened:s,targetRef:i,targetGap:o,defaultPosition:l,savedPosition:E==null?void 0:E.position,externalPositionState:h,dragBoundary:F,frame:p}),{dragActive:n4,dragHandlers:o4}=iu({elementRef:z,setPosition:_,dragBoundary:F,onPositionChange:g,ignoreSelector:D,frame:p}),{popupSize:G,resizableConfig:Y}=au({resizable:y,defaultSize:B,savedSize:E==null?void 0:E.size,dragBoundary:F,containerRef:z,onSizeChange:b,popupPosition:S,setPopupPosition:_,frame:p,isSectionOpen:H}),W=t.useMemo(()=>i0(r,S0),[r]);t.useEffect(()=>{f&&W({position:N,size:G})},[f,N,G,W]);const q=t.useMemo(()=>({left:S?`${S.x}px`:0,top:S?`${S.y}px`:0,...S?null:{visibility:"hidden"},...C}),[S,C]);return c.jsx(k0,{...d,ref:e,opened:s,frame:p,placement:"top-left",resizable:Y,style:q,className:n4?`${m??""} ${T4}`.trim():m,children:c.jsx(t4,{variant:"floating",leftPanel:L,ref:O,...A?o4:null,children:a})})});D4.displayName="AiAgentPopup";try{D4.displayName="AiAgentPopup",D4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{D4 as A,y4 as T,X as a,A4 as b,l4 as c};
