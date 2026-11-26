import{r as t,j as p}from"./react-DYHuXpTF.js";import{T as C4}from"./TextArea-DgLev7zQ.js";import{t as _4,d as y4}from"./utils-Cdl8HW_v.js";import{c as v4}from"./constants-Des9Datc.js";import{cJ as x4,G as b4,cK as w4,cL as S4}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{q as x,A as I4}from"./styled-components-BADHLMuD.js";import{ch as L4}from"./vendor-BpmB3NYD.js";import{a as R4,I as l4,b as T4}from"./@salutejs/sdds-finai-DJh4O7Qc.js";import{b as N4}from"./sharedUtilsResizable-B3Ee5DOI.js";import{T as M4}from"./Typography-DrjV5Wmt.js";import{e as P4}from"./@salutejs/plasma-icons-CbqEe6UO.js";const d4=5,$4=4,k4=12,H4=360,z4=360,j4=16,W4={width:400,height:540},p4=56,O4=100,G4="ai-agent-popup-state",K4=300,F4="ai-agent-popup-dragging",A4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',V4=.93,q4=79,U4=220,X4=23,f4=48,h4=300,Y4=8,J4=12,Z4=1,Q4=2,t4=40,u0=2,W=800,e0=615,N={bg:()=>b4,outline:()=>x4,radius:()=>v4.m,padding:()=>`${j4}px`},t0=x(R4)`
  && .${L4.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${F4} {
    cursor: grabbing;
    user-select: none;
  }
`,n0=x.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${N.radius};
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
    border-radius: calc(${N.radius} + 4px);
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
    border-radius: calc(${N.radius} + 4px);
    background: ${N.outline};
    pointer-events: none;
  }
`,o0=x.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${N.radius} + 4px);
  background: ${N.outline};
  box-shadow: ${({$shadow:u})=>u};
`,i0=x.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${N.padding};
  border-radius: ${N.radius};
  background: ${N.bg};
  overflow: hidden;
`,r0=x.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,s0=x.div`
  position: relative;
`,c0=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,a0=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,E0=x.div`
  position: absolute;
  top: ${-25}px;
  height: ${q4}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${V4*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?a0:c0};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,l0=x.div`
  background: ${N.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-X4}px;
  }
`,d0=x.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,p0=x.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?h4:f4}px;
  transition: width 0.3s ease;
`,B4=I4`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: ${Y4}px;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,A0=x.div`
  ${B4};
  width: ${f4}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,D4=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  ${({$bottom:u})=>u&&"margin-top: auto;"}
`,D0=x.div`
  ${B4};
  width: ${h4}px;
  display: flex;
  flex-direction: column;
`,F0=x.div`
  flex: none;
  height: ${t4}px;
  display: flex;
  align-items: center;
  gap: ${u0}px;
`,f0=x.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t4}px;
  height: ${t4}px;
`,h0=x.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,B0=x.div`
  flex: 1 1 auto;
  min-height: 0;
`,m0=x.div`
  flex: none;
  display: flex;
  width: ${Z4}px;
  margin-right: ${J4}px;

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *::before {
    border-radius: ${Q4}px;
  }
`,e4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},m4=()=>{const[u,e]=t.useState(e4);return t.useEffect(()=>{e(e4());const a=new MutationObserver(()=>e(e4()));return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]),u},n4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:a=U4,className:o,style:c,...r},i)=>{const E=m4(),D={size:"s",rows:1,autoResize:!0,...r,contentRight:e};return p.jsxs(s0,{ref:i,className:o,style:c,children:[p.jsx(E0,{$visible:u,$isDark:E,"aria-hidden":!0}),p.jsx(l0,{$maxHeight:a,children:p.jsx(C4,{...D})})]})});n4.displayName="AiAgentInput";try{n4.displayName="AiAgentInput",n4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const X=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,k=u=>{const e=X(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const a=e.getBoundingClientRect();return{left:a.left+e.clientLeft-e.scrollLeft,top:a.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},g4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),Y=(u,e={width:0,height:0},a={},o)=>{const{width:c,height:r}=o??g4(),{top:i=0,right:E=0,bottom:D=0,left:_=0}=a;return{x:Math.max(_,Math.min(u.x,c-e.width-E)),y:Math.max(i,Math.min(u.y,r-e.height-D))}},o4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),i4=(u,e,a)=>{const o=u.getBoundingClientRect(),{left:c,top:r}=a??g4(),i=typeof e=="number"?e:e.x??0,E=typeof e=="number"?0:e.y??0;return{x:o.right+i-c,y:o.top+E-r}},g0=()=>({x:p4,y:p4}),r4=(u,e,a={},o)=>{const{width:c,height:r}=o??{width:window.innerWidth,height:window.innerHeight},{left:i=0,right:E=0,top:D=0,bottom:_=0}=a,g=(c-i-E)/3,S=(r-D-_)/2,y=u.x-i,w=u.y-D;let F=1,h=-1;for(let C=1;C<=6;C+=1){const n=(C-1)%3*g,f=C<=3?0:S,A=Math.max(0,Math.min(y+e.width,n+g)-Math.max(y,n)),l=Math.max(0,Math.min(w+e.height,f+S)-Math.max(w,f)),d=A*l;d>h&&(h=d,F=C)}return F},s4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},c4=(u,e="bottom-right")=>N4(u,{corner:e,minWidth:H4,minHeight:z4}),q=u=>u.content!==void 0;try{X.displayName="resolveFrameElement",X.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{k.displayName="getFrameMetrics",k.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{Y.displayName="validatePosition",Y.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{o4.displayName="inflateDragBoundary",o4.__docgenInfo={description:`Раздувает отступы границ на величину by со всех сторон. Нужно для учёта
светящейся рамки: она нарисована снаружи контейнера и в его размеры
не входит, поэтому для границ окно считается на by шире с каждой стороны,
иначе рамка вылезает за dragBoundary при перетаскивании и ресайзе к краю.`,displayName:"inflateDragBoundary",props:{}}}catch{}try{i4.displayName="getPositionFromTarget",i4.__docgenInfo={description:`Позиция справа от target-элемента. Числовой gap: только горизонтальный
отступ, верхние края выровнены. Объектный gap: смещение по обеим осям
от правого верхнего угла таргета. Координаты переводятся из вьюпортных
в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{r4.displayName="getViewportSector",r4.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
частей (три колонки, два ряда), сектором окна считается тот, с которым
у него наибольшая площадь пересечения:
1 | 2 | 3
---------
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{s4.displayName="getCornerForSector",s4.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{c4.displayName="buildResizableConfig",c4.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}try{q.displayName="isLeftPanelSection",q.__docgenInfo={description:`Пункт левой панели открывает раздел, только если у него есть content.
Пункт без content это кнопка-действие с onClick.`,displayName:"isLeftPanelSection",props:{key:{defaultValue:null,description:`Уникальный ключ пункта. У раздела по нему определяется открытый раздел
(activeKey) и приходит смена в onActiveKeyChange.`,name:"key",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка в полосе (свёрнутое состояние левой панели).",name:"icon",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:`Группа кнопки в полосе. Кнопки bottom прижаты к нижнему краю панели,
порядок внутри группы как в items.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},disabled:{defaultValue:{value:"false"},description:`Выключить кнопку в полосе. Уже открытый раздел остаётся открытым
и закрывается крестиком.`,name:"disabled",required:!1,type:{name:"boolean"}},titleIcon:{defaultValue:null,description:`Иконка слева в шапке открытого раздела, компонент ставит её по центру
квадрата 40x40. Если не задана, берётся icon.`,name:"titleIcon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок открытого раздела (в шапке, рядом с иконкой и крестиком).",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:`Контент открытого раздела под шапкой. Отступы, скролл и наполнение
полностью на стороне потребителя.`,name:"content",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:`Клик по кнопке раздела. Вызывается перед открытием раздела.
Клик по кнопке.`,name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const J=({items:u,activeKey:e,defaultActiveKey:a=null,onActiveKeyChange:o})=>{const c=e!==void 0,[r,i]=t.useState(a),E=c?e:r,D=n=>{c||i(n),o==null||o(n)},_=u.filter(q).find(n=>n.key===E)??null,g=!!_,S=(n,f)=>{var A;(A=n.onClick)==null||A.call(n,f),q(n)&&D(n.key)},y=n=>p.jsx(l4,{size:"s",view:"clear",disabled:n.disabled,onClick:f=>S(n,f),children:n.icon},n.key),w=u.filter(n=>n.placement==="bottom"),F=u.filter(n=>n.placement!=="bottom"),h=t.useRef(_);_&&(h.current=_);const C=h.current;return p.jsxs(d0,{children:[p.jsxs(p0,{$open:g,children:[p.jsxs(A0,{$active:!g,"aria-hidden":g,children:[p.jsx(D4,{children:F.map(y)}),w.length>0&&p.jsx(D4,{$bottom:!0,children:w.map(y)})]}),p.jsx(D0,{$active:g,"aria-hidden":!g,children:C&&p.jsxs(p.Fragment,{children:[p.jsxs(F0,{children:[p.jsx(f0,{children:C.titleIcon??C.icon}),p.jsx(h0,{children:p.jsx(M4,{variant:"BodyM",bold:!0,children:C.title})}),p.jsx(l4,{size:"s",view:"clear",onClick:()=>D(null),children:p.jsx(P4,{size:"s"})})]}),p.jsx(B0,{children:C.content})]})})]}),p.jsx(m0,{children:p.jsx(T4,{orientation:"vertical"})})]})};J.displayName="AiAgentLeftPanel";try{J.displayName="AiAgentLeftPanel",J.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Пункт без content это кнопка-действие: клик вызывает его onClick,
раздел не открывается. Кнопки с placement bottom прижаты к низу полосы.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Пункты панели: разделы с контентом и кнопки-действия с onClick.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком. Клик по пункту-действию сюда не приходит.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const Z=t.forwardRef(({variant:u="embedded",leftPanel:e,children:a,...o},c)=>{const i=m4()?w4:S4,E=u==="floating"?n0:o0;return p.jsx(E,{...o,ref:c,$shadow:i,children:p.jsxs(i0,{children:[e&&p.jsx(J,{...e}),p.jsx(r0,{children:a})]})})});Z.displayName="AiAgentSurface";try{Z.displayName="AiAgentSurface",Z.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const C0=({elementRef:u,setPosition:e,dragBoundary:a,onPositionChange:o,ignoreSelector:c,frame:r})=>{const[i,E]=t.useState(!1),[D,_]=t.useState(!1),g=t.useRef({x:0,y:0}),S=t.useRef({x:0,y:0}),y=t.useRef(!1),w=t.useRef(null),F=t.useMemo(()=>c?`${A4}, ${c}`:A4,[c]),h=t.useCallback((s,B)=>{if(!u.current)return;y.current=!1,S.current={x:s,y:B},w.current=k(r);const M=u.current.getBoundingClientRect();g.current={x:s-M.left,y:B-M.top},E(!0)},[u,r]),C=t.useCallback(s=>{s.button===0&&(s.target.closest(F)||h(s.clientX,s.clientY))},[h,F]),n=t.useCallback(s=>{if(s.target.closest(F))return;const B=s.touches[0];B&&h(B.clientX,B.clientY)},[h,F]),f=t.useCallback((s,B)=>{var j;if(!i||!u.current)return;const M=Math.abs(s-S.current.x),H=Math.abs(B-S.current.y);if(!y.current&&M<d4&&H<d4)return;y.current||(y.current=!0,_(!0),(j=window.getSelection())==null||j.removeAllRanges());const{offsetWidth:O,offsetHeight:R}=u.current,b=w.current??k(r),{top:P=0,right:T=0,bottom:I=0,left:v=0}=a||{},m=Math.max(v,Math.min(s-g.current.x-b.left,b.width-O-T)),L=Math.max(P,Math.min(B-g.current.y-b.top,b.height-R-I)),z={x:m,y:L};e(z),o==null||o(z)},[i,u,a,e,o,r]),A=t.useCallback(s=>{f(s.clientX,s.clientY)},[f]),l=t.useCallback(s=>{const B=s.touches[0];B&&f(B.clientX,B.clientY)},[f]),d=t.useCallback(()=>{E(!1),_(!1)},[]);return t.useEffect(()=>(i&&(document.addEventListener("mousemove",A),document.addEventListener("mouseup",d),document.addEventListener("touchmove",l),document.addEventListener("touchend",d),document.addEventListener("touchcancel",d)),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",d),document.removeEventListener("touchcancel",d)}),[i,A,l,d]),{dragActive:D,dragHandlers:{onMouseDown:C,onTouchStart:n}}},_0=({opened:u,targetRef:e,targetGap:a,defaultPosition:o,savedPosition:c,externalPositionState:r,dragBoundary:i,frame:E})=>{const D=t.useRef(null),[_,g]=t.useState(null),S=t.useCallback(n=>{D.current=n,g(n)},[]),[y,w]=t.useState(()=>c??o??null),F=r?r[0]:y,h=t.useCallback(n=>{r?r[1](n):w(n)},[r==null?void 0:r[1]]);t.useLayoutEffect(()=>{if(!u)return;const n=_;if(!n)return;const f={width:n.offsetWidth,height:n.offsetHeight},A=k(E),l=F??(e!=null&&e.current?i4(e.current,a,A):g0()),d=Y(l,f,i,A);(!F||d.x!==F.x||d.y!==F.y)&&h(d)},[u,_,F,e,a,i,E,h]);const C=t.useRef(F);return t.useEffect(()=>{C.current=F},[F]),t.useEffect(()=>{if(!u)return;const n=_4(()=>{const l=D.current,d=C.current;if(!l||!d)return;const s=Y(d,{width:l.offsetWidth,height:l.offsetHeight},i,k(E));(s.x!==d.x||s.y!==d.y)&&h(s)},O4);window.addEventListener("resize",n);const f=X(E);let A;return f&&(A=new ResizeObserver(n),A.observe(f)),()=>{window.removeEventListener("resize",n),A==null||A.disconnect(),n.cancel()}},[u,i,E,h]),{popupPosition:F,setPopupPosition:h,positionForStorage:r?void 0:y??void 0,containerRef:D,setContainerRef:S}},y0=({resizable:u,defaultSize:e,savedSize:a,dragBoundary:o,containerRef:c,onSizeChange:r,popupPosition:i,setPopupPosition:E,frame:D,isSectionOpen:_=!1})=>{const[g,S]=t.useState(()=>a??e),[y,w]=t.useState({}),[F,h]=t.useState(null),C=t.useMemo(()=>{if(!i)return"bottom-right";const s=c.current,B={width:(s==null?void 0:s.offsetWidth)??0,height:(s==null?void 0:s.offsetHeight)??0};return s4(r4(i,B,o,k(D)))},[i,o,c,D]),n=F??C,f=t.useRef(null),A=t.useRef(null);t.useEffect(()=>()=>{var s;(s=A.current)==null||s.disconnect()},[]);const l=t.useMemo(()=>c4(u,n),[u,n]),d=t.useMemo(()=>{if(!l)return;const s=R=>{var P,T;const b=c.current;if(b){const I=k(D),v=b.getBoundingClientRect(),m={left:v.left-I.left,top:v.top-I.top,right:v.right-I.left,bottom:v.bottom-I.top},L=n;h(L);const{top:z=0,right:j=0,bottom:Q=0,left:u4=0}=o??{},G=Math.min(W,L.includes("left")?m.right-u4:I.width-m.left-j),U=Math.min(W,L.includes("top")?m.bottom-z:I.height-m.top-Q);if(w({maxWidth:l.maxWidth?Math.min(l.maxWidth,G):G,maxHeight:l.maxHeight?Math.min(l.maxHeight,U):U}),L.includes("top")||L.includes("left")){const $={left:m.left,top:m.top,right:m.right,bottom:m.bottom,corner:L};f.current=$,(P=A.current)==null||P.disconnect(),A.current=new ResizeObserver(()=>{const K=c.current;K&&E({x:L.includes("left")?$.right-K.offsetWidth:$.left,y:L.includes("top")?$.bottom-K.offsetHeight:$.top})}),A.current.observe(b)}}(T=l.onResizeStart)==null||T.call(l,R)},B=R=>{var P,T,I;(P=A.current)==null||P.disconnect(),A.current=null,h(null);const b=((T=R==null?void 0:R.current)==null?void 0:T.resizable)??c.current;if(b){const v={width:b.offsetWidth,height:b.offsetHeight},m=f.current;m&&E({x:m.corner.includes("left")?m.right-v.width:m.left,y:m.corner.includes("top")?m.bottom-v.height:m.top}),S(v),r==null||r(v)}f.current=null,(I=l.onResizeEnd)==null||I.call(l,R)},M=_?e0:l.minWidth,H=Math.min(W,y.maxWidth??W),O=Math.min(W,y.maxHeight??W);return{...l,defaultSize:g??l.defaultSize,minWidth:M,maxWidth:H,maxHeight:O,onResizeStart:s,onResizeEnd:B}},[l,n,o,g,y,r,c,E,D,_]);return{popupSize:g,resizableConfig:d}},v0=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",x0=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",b0=u=>{const e=typeof u=="string"?u:G4,a=t.useCallback(()=>{if(!u)return null;try{const r=localStorage.getItem(e);if(!r)return null;const i=JSON.parse(r);return!i||typeof i!="object"?null:{position:v0(i.position)?i.position:void 0,size:x0(i.size)?i.size:void 0}}catch(r){return console.error("AiAgentPopup: failed to load state:",r),null}},[u,e]),o=t.useCallback(r=>{if(u)try{const i=localStorage.getItem(e),E=i?JSON.parse(i):{},D={position:r.position??E.position,size:r.size??E.size};localStorage.setItem(e,JSON.stringify(D))}catch(i){console.error("AiAgentPopup: failed to save state:",i)}},[u,e]),c=t.useRef(void 0);return c.current===void 0&&(c.current=a()),{savedState:c.current,saveState:o}},a4=t.forwardRef((u,e)=>{const{children:a,leftPanel:o,opened:c,targetRef:r,targetGap:i=k4,defaultPosition:E,positionState:D,onPositionChange:_,draggable:g=!0,dragBoundary:S,dragIgnoreSelector:y,useStorage:w=!1,resizable:F=!0,defaultSize:h=W4,onSizeChange:C,frame:n="document",style:f,className:A,...l}=u,{savedState:d,saveState:s}=b0(w),B=t.useMemo(()=>o4(S,$4),[S]),M=o==null?void 0:o.activeKey,H=M!==void 0,[O,R]=t.useState((o==null?void 0:o.defaultActiveKey)??null),b=H?M:O,P=!!(o&&b!=null&&o.items.some(V=>q(V)&&V.key===b)),T=t.useCallback(V=>{var E4;H||R(V),(E4=o==null?void 0:o.onActiveKeyChange)==null||E4.call(o,V)},[H,o==null?void 0:o.onActiveKeyChange]),I=t.useMemo(()=>o?{...o,activeKey:b,onActiveKeyChange:T}:void 0,[o,b,T]),{popupPosition:v,setPopupPosition:m,positionForStorage:L,containerRef:z,setContainerRef:j}=_0({opened:c,targetRef:r,targetGap:i,defaultPosition:E,savedPosition:d==null?void 0:d.position,externalPositionState:D,dragBoundary:B,frame:n}),{dragActive:Q,dragHandlers:u4}=C0({elementRef:z,setPosition:m,dragBoundary:B,onPositionChange:_,ignoreSelector:y,frame:n}),{popupSize:G,resizableConfig:U}=y0({resizable:F,defaultSize:h,savedSize:d==null?void 0:d.size,dragBoundary:B,containerRef:z,onSizeChange:C,popupPosition:v,setPopupPosition:m,frame:n,isSectionOpen:P}),$=t.useMemo(()=>y4(s,K4),[s]);t.useEffect(()=>{w&&$({position:L,size:G})},[w,L,G,$]);const K=t.useMemo(()=>({left:v?`${v.x}px`:0,top:v?`${v.y}px`:0,...v?null:{visibility:"hidden"},...f}),[v,f]);return p.jsx(t0,{...l,ref:e,opened:c,frame:n,placement:"top-left",resizable:U,style:K,className:Q?`${A??""} ${F4}`.trim():A,children:p.jsx(Z,{variant:"floating",leftPanel:I,ref:j,...g?u4:null,children:a})})});a4.displayName="AiAgentPopup";try{a4.displayName="AiAgentPopup",a4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{a4 as A,n4 as a};
