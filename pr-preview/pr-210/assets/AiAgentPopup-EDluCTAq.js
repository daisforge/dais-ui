import{r as t,b as p}from"./react-UEdzNlUe.js";import{T as C4}from"./TextArea-Q3XGQhBt.js";import{t as v4,d as _4}from"./utils-JpoKTq_4.js";import{c as x4}from"./constants-YnncqoDz.js";import{cL as b4,G as y4,cM as N4,cN as k4}from"./@sddsjs/sdds_finai-Bv0LRYjs.js";import{q as b,A as w4}from"./styled-components-DEOLQzLG.js";import{ch as P4}from"./vendor-BjJ6Dniq.js";import{q as S4,I as d4,r as L4}from"./@salutejs/sdds-finai-CrHyedOo.js";import{b as I4}from"./sharedUtilsResizable-de_fnATz.js";import{T as R4}from"./Typography-D7_u4SSY.js";import{e as T4}from"./@salutejs/plasma-icons-BvdYvZ49.js";const E4=5,M4=4,V4=12,$4=360,H4=360,z4=16,W4={width:400,height:540},p4=56,j4=100,O4="ai-agent-popup-state",G4=300,D4="ai-agent-popup-dragging",A4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',K4=.93,q4=79,U4=220,X4=23,f4=48,g4=300,Y4=8,Z4=12,J4=1,Q4=2,t4=40,u0=2,W=800,e0=615,I={bg:()=>y4,outline:()=>b4,radius:()=>x4.m,padding:()=>`${z4}px`},t0=b(S4)`
  && .${P4.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${D4} {
    cursor: grabbing;
    user-select: none;
  }
`,n0=b.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${I.radius};
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
    border-radius: calc(${I.radius} + 4px);
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
    border-radius: calc(${I.radius} + 4px);
    background: ${I.outline};
    pointer-events: none;
  }
`,i0=b.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${I.radius} + 4px);
  background: ${I.outline};
  box-shadow: ${({$shadow:u})=>u};
`,o0=b.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${I.padding};
  border-radius: ${I.radius};
  background: ${I.bg};
  overflow: hidden;
`,r0=b.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,s0=b.div`
  position: relative;
`,a0=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,c0=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,l0=b.div`
  position: absolute;
  top: ${-25}px;
  height: ${q4}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${K4*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?c0:a0};
  filter: blur(40px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,d0=b.div`
  background: ${I.bg};
  border-radius: 0.625rem;
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({$maxHeight:u})=>u-X4}px;
  }
`,E0=b.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`,p0=b.div`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({$open:u})=>u?g4:f4}px;
  transition: width 0.3s ease;
`,h4=w4`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: ${Y4}px;
  opacity: ${({$active:u})=>u?1:0};
  pointer-events: ${({$active:u})=>u?"auto":"none"};
  transition: opacity 0.3s ease;
`,A0=b.div`
  ${h4};
  width: ${f4}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,m4=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  ${({$bottom:u})=>u&&"margin-top: auto;"}
`,m0=b.div`
  ${h4};
  width: ${g4}px;
  display: flex;
  flex-direction: column;
`,D0=b.div`
  flex: none;
  height: ${t4}px;
  display: flex;
  align-items: center;
  gap: ${u0}px;
`,f0=b.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t4}px;
  height: ${t4}px;
`,g0=b.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h0=b.div`
  flex: 1 1 auto;
  min-height: 0;
`,F0=b.div`
  flex: none;
  display: flex;
  width: ${J4}px;
  margin-right: ${Z4}px;

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *::before {
    border-radius: ${Q4}px;
  }
`,e4=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},F4=()=>{const[u,e]=t.useState(e4);return t.useEffect(()=>{e(e4());const c=new MutationObserver(()=>e(e4()));return c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>c.disconnect()},[]),u},n4=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:c=U4,className:i,style:a,...r},o)=>{const l=F4(),m={size:"s",rows:1,autoResize:!0,...r,contentRight:e};return p.jsxDEV(s0,{ref:o,className:i,style:a,children:[p.jsxDEV(l0,{$visible:u,$isDark:l,"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:60,columnNumber:9},void 0),p.jsxDEV(d0,{$maxHeight:c,children:p.jsxDEV(C4,{...m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:59,columnNumber:7},void 0)});n4.displayName="AiAgentInput";try{n4.displayName="AiAgentInput",n4.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const X=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,V=u=>{const e=X(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const c=e.getBoundingClientRect();return{left:c.left+e.clientLeft-e.scrollLeft,top:c.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},B4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),Y=(u,e={width:0,height:0},c={},i)=>{const{width:a,height:r}=i??B4(),{top:o=0,right:l=0,bottom:m=0,left:v=0}=c;return{x:Math.max(v,Math.min(u.x,a-e.width-l)),y:Math.max(o,Math.min(u.y,r-e.height-m))}},i4=(u,e)=>({top:((u==null?void 0:u.top)??0)+e,right:((u==null?void 0:u.right)??0)+e,bottom:((u==null?void 0:u.bottom)??0)+e,left:((u==null?void 0:u.left)??0)+e}),o4=(u,e,c)=>{const i=u.getBoundingClientRect(),{left:a,top:r}=c??B4(),o=typeof e=="number"?e:e.x??0,l=typeof e=="number"?0:e.y??0;return{x:i.right+o-a,y:i.top+l-r}},B0=()=>({x:p4,y:p4}),r4=(u,e,c={},i)=>{const{width:a,height:r}=i??{width:window.innerWidth,height:window.innerHeight},{left:o=0,right:l=0,top:m=0,bottom:v=0}=c,B=(a-o-l)/3,k=(r-m-v)/2,_=u.x-o,N=u.y-m;let D=1,g=-1;for(let C=1;C<=6;C+=1){const n=(C-1)%3*B,f=C<=3?0:k,A=Math.max(0,Math.min(_+e.width,n+B)-Math.max(_,n)),d=Math.max(0,Math.min(N+e.height,f+k)-Math.max(N,f)),E=A*d;E>g&&(g=E,D=C)}return D},s4=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},a4=(u,e="bottom-right")=>I4(u,{corner:e,minWidth:$4,minHeight:H4}),q=u=>u.content!==void 0;try{X.displayName="resolveFrameElement",X.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{V.displayName="getFrameMetrics",V.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{Y.displayName="validatePosition",Y.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{i4.displayName="inflateDragBoundary",i4.__docgenInfo={description:`Раздувает отступы границ на величину by со всех сторон. Нужно для учёта
светящейся рамки: она нарисована снаружи контейнера и в его размеры
не входит, поэтому для границ окно считается на by шире с каждой стороны,
иначе рамка вылезает за dragBoundary при перетаскивании и ресайзе к краю.`,displayName:"inflateDragBoundary",props:{}}}catch{}try{o4.displayName="getPositionFromTarget",o4.__docgenInfo={description:`Позиция справа от target-элемента. Числовой gap: только горизонтальный
отступ, верхние края выровнены. Объектный gap: смещение по обеим осям
от правого верхнего угла таргета. Координаты переводятся из вьюпортных
в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{r4.displayName="getViewportSector",r4.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
частей (три колонки, два ряда), сектором окна считается тот, с которым
у него наибольшая площадь пересечения:
1 | 2 | 3
---------
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{s4.displayName="getCornerForSector",s4.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{a4.displayName="buildResizableConfig",a4.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}try{q.displayName="isLeftPanelSection",q.__docgenInfo={description:`Пункт левой панели открывает раздел, только если у него есть content.
Пункт без content это кнопка-действие с onClick.`,displayName:"isLeftPanelSection",props:{key:{defaultValue:null,description:`Уникальный ключ пункта. У раздела по нему определяется открытый раздел
(activeKey) и приходит смена в onActiveKeyChange.`,name:"key",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка в полосе (свёрнутое состояние левой панели).",name:"icon",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:`Группа кнопки в полосе. Кнопки bottom прижаты к нижнему краю панели,
порядок внутри группы как в items.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},disabled:{defaultValue:{value:"false"},description:`Выключить кнопку в полосе. Уже открытый раздел остаётся открытым
и закрывается крестиком.`,name:"disabled",required:!1,type:{name:"boolean"}},titleIcon:{defaultValue:null,description:`Иконка слева в шапке открытого раздела, компонент ставит её по центру
квадрата 40x40. Если не задана, берётся icon.`,name:"titleIcon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок открытого раздела (в шапке, рядом с иконкой и крестиком).",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:`Контент открытого раздела под шапкой. Отступы, скролл и наполнение
полностью на стороне потребителя.`,name:"content",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:`Клик по кнопке раздела. Вызывается перед открытием раздела.
Клик по кнопке.`,name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const Z=({items:u,activeKey:e,defaultActiveKey:c=null,onActiveKeyChange:i})=>{const a=e!==void 0,[r,o]=t.useState(c),l=a?e:r,m=n=>{a||o(n),i==null||i(n)},v=u.filter(q).find(n=>n.key===l)??null,B=!!v,k=(n,f)=>{var A;(A=n.onClick)==null||A.call(n,f),q(n)&&m(n.key)},_=n=>p.jsxDEV(d4,{size:"s",view:"clear",disabled:n.disabled,onClick:f=>k(n,f),children:n.icon},n.key,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:69,columnNumber:5},void 0),N=u.filter(n=>n.placement==="bottom"),D=u.filter(n=>n.placement!=="bottom"),g=t.useRef(v);v&&(g.current=v);const C=g.current;return p.jsxDEV(E0,{children:[p.jsxDEV(p0,{$open:B,children:[p.jsxDEV(A0,{$active:!B,"aria-hidden":B,children:[p.jsxDEV(m4,{children:D.map(_)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:97,columnNumber:11},void 0),N.length>0&&p.jsxDEV(m4,{$bottom:!0,children:N.map(_)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:96,columnNumber:9},void 0),p.jsxDEV(m0,{$active:B,"aria-hidden":!B,children:C&&p.jsxDEV(p.Fragment,{children:[p.jsxDEV(D0,{children:[p.jsxDEV(f0,{children:C.titleIcon??C.icon},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:108,columnNumber:17},void 0),p.jsxDEV(g0,{children:p.jsxDEV(R4,{variant:"BodyM",bold:!0,children:C.title},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:112,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:111,columnNumber:17},void 0),p.jsxDEV(d4,{size:"s",view:"clear",onClick:()=>m(null),children:p.jsxDEV(T4,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:121,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:116,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:107,columnNumber:15},void 0),p.jsxDEV(h0,{children:C.content},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:124,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:106,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:104,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:95,columnNumber:7},void 0),p.jsxDEV(F0,{children:p.jsxDEV(L4,{orientation:"vertical"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:130,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:129,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentLeftPanel.tsx",lineNumber:94,columnNumber:5},void 0)};Z.displayName="AiAgentLeftPanel";try{Z.displayName="AiAgentLeftPanel",Z.__docgenInfo={description:`Левая панель окна: полоса иконок, при клике по иконке раскрывается
раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
к другим иконкам возвращаются только крестиком.

Пункт без content это кнопка-действие: клик вызывает его onClick,
раздел не открывается. Кнопки с placement bottom прижаты к низу полосы.

Открытый раздел управляется через activeKey (если передан) или хранится
внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.`,displayName:"AiAgentLeftPanel",props:{items:{defaultValue:null,description:"Пункты панели: разделы с контентом и кнопки-действия с onClick.",name:"items",required:!0,type:{name:"AiAgentLeftPanelItem[]"}},activeKey:{defaultValue:null,description:`Ключ открытого раздела. null или undefined — открыта полоса иконок,
раздел закрыт. Управляемый режим: значение задаёт потребитель.`,name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:{value:"null"},description:`Начальный открытый раздел в неуправляемом режиме (когда activeKey
не передан).`,name:"defaultActiveKey",required:!1,type:{name:"string"}},onActiveKeyChange:{defaultValue:null,description:`Смена открытого раздела: ключ раздела при клике по иконке, null
при закрытии крестиком. Клик по пункту-действию сюда не приходит.`,name:"onActiveKeyChange",required:!1,type:{name:"(key: string) => void"}}}}}catch{}const J=t.forwardRef(({variant:u="embedded",leftPanel:e,children:c,...i},a)=>{const o=F4()?N4:k4,l=u==="floating"?n0:i0;return p.jsxDEV(l,{...i,ref:a,$shadow:o,children:p.jsxDEV(o0,{children:[e&&p.jsxDEV(Z,{...e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:41,columnNumber:25},void 0),p.jsxDEV(r0,{children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:42,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:40,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:39,columnNumber:7},void 0)});J.displayName="AiAgentSurface";try{J.displayName="AiAgentSurface",J.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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
с контентом.`,name:"leftPanel",required:!1,type:{name:"AiAgentLeftPanelProps"}}}}}catch{}const C0=({elementRef:u,setPosition:e,dragBoundary:c,onPositionChange:i,ignoreSelector:a,frame:r})=>{const[o,l]=t.useState(!1),[m,v]=t.useState(!1),B=t.useRef({x:0,y:0}),k=t.useRef({x:0,y:0}),_=t.useRef(!1),N=t.useRef(null),D=t.useMemo(()=>a?`${A4}, ${a}`:A4,[a]),g=t.useCallback((s,h)=>{if(!u.current)return;_.current=!1,k.current={x:s,y:h},N.current=V(r);const R=u.current.getBoundingClientRect();B.current={x:s-R.left,y:h-R.top},l(!0)},[u,r]),C=t.useCallback(s=>{s.button===0&&(s.target.closest(D)||g(s.clientX,s.clientY))},[g,D]),n=t.useCallback(s=>{if(s.target.closest(D))return;const h=s.touches[0];h&&g(h.clientX,h.clientY)},[g,D]),f=t.useCallback((s,h)=>{var z;if(!o||!u.current)return;const R=Math.abs(s-k.current.x),$=Math.abs(h-k.current.y);if(!_.current&&R<E4&&$<E4)return;_.current||(_.current=!0,v(!0),(z=window.getSelection())==null||z.removeAllRanges());const{offsetWidth:j,offsetHeight:S}=u.current,y=N.current??V(r),{top:T=0,right:L=0,bottom:w=0,left:x=0}=c||{},F=Math.max(x,Math.min(s-B.current.x-y.left,y.width-j-L)),P=Math.max(T,Math.min(h-B.current.y-y.top,y.height-S-w)),H={x:F,y:P};e(H),i==null||i(H)},[o,u,c,e,i,r]),A=t.useCallback(s=>{f(s.clientX,s.clientY)},[f]),d=t.useCallback(s=>{const h=s.touches[0];h&&f(h.clientX,h.clientY)},[f]),E=t.useCallback(()=>{l(!1),v(!1)},[]);return t.useEffect(()=>(o&&(document.addEventListener("mousemove",A),document.addEventListener("mouseup",E),document.addEventListener("touchmove",d),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)}),[o,A,d,E]),{dragActive:m,dragHandlers:{onMouseDown:C,onTouchStart:n}}},v0=({opened:u,targetRef:e,targetGap:c,defaultPosition:i,savedPosition:a,externalPositionState:r,dragBoundary:o,frame:l})=>{const m=t.useRef(null),[v,B]=t.useState(null),k=t.useCallback(n=>{m.current=n,B(n)},[]),[_,N]=t.useState(()=>a??i??null),D=r?r[0]:_,g=t.useCallback(n=>{r?r[1](n):N(n)},[r==null?void 0:r[1]]);t.useLayoutEffect(()=>{if(!u)return;const n=v;if(!n)return;const f={width:n.offsetWidth,height:n.offsetHeight},A=V(l),d=D??(e!=null&&e.current?o4(e.current,c,A):B0()),E=Y(d,f,o,A);(!D||E.x!==D.x||E.y!==D.y)&&g(E)},[u,v,D,e,c,o,l,g]);const C=t.useRef(D);return t.useEffect(()=>{C.current=D},[D]),t.useEffect(()=>{if(!u)return;const n=v4(()=>{const d=m.current,E=C.current;if(!d||!E)return;const s=Y(E,{width:d.offsetWidth,height:d.offsetHeight},o,V(l));(s.x!==E.x||s.y!==E.y)&&g(s)},j4);window.addEventListener("resize",n);const f=X(l);let A;return f&&(A=new ResizeObserver(n),A.observe(f)),()=>{window.removeEventListener("resize",n),A==null||A.disconnect(),n.cancel()}},[u,o,l,g]),{popupPosition:D,setPopupPosition:g,positionForStorage:r?void 0:_??void 0,containerRef:m,setContainerRef:k}},_0=({resizable:u,defaultSize:e,savedSize:c,dragBoundary:i,containerRef:a,onSizeChange:r,popupPosition:o,setPopupPosition:l,frame:m,isSectionOpen:v=!1})=>{const[B,k]=t.useState(()=>c??e),[_,N]=t.useState({}),[D,g]=t.useState(null),C=t.useMemo(()=>{if(!o)return"bottom-right";const s=a.current,h={width:(s==null?void 0:s.offsetWidth)??0,height:(s==null?void 0:s.offsetHeight)??0};return s4(r4(o,h,i,V(m)))},[o,i,a,m]),n=D??C,f=t.useRef(null),A=t.useRef(null);t.useEffect(()=>()=>{var s;(s=A.current)==null||s.disconnect()},[]);const d=t.useMemo(()=>a4(u,n),[u,n]),E=t.useMemo(()=>{if(!d)return;const s=S=>{var T,L;const y=a.current;if(y){const w=V(m),x=y.getBoundingClientRect(),F={left:x.left-w.left,top:x.top-w.top,right:x.right-w.left,bottom:x.bottom-w.top},P=n;g(P);const{top:H=0,right:z=0,bottom:Q=0,left:u4=0}=i??{},O=Math.min(W,P.includes("left")?F.right-u4:w.width-F.left-z),U=Math.min(W,P.includes("top")?F.bottom-H:w.height-F.top-Q);if(N({maxWidth:d.maxWidth?Math.min(d.maxWidth,O):O,maxHeight:d.maxHeight?Math.min(d.maxHeight,U):U}),P.includes("top")||P.includes("left")){const M={left:F.left,top:F.top,right:F.right,bottom:F.bottom,corner:P};f.current=M,(T=A.current)==null||T.disconnect(),A.current=new ResizeObserver(()=>{const G=a.current;G&&l({x:P.includes("left")?M.right-G.offsetWidth:M.left,y:P.includes("top")?M.bottom-G.offsetHeight:M.top})}),A.current.observe(y)}}(L=d.onResizeStart)==null||L.call(d,S)},h=S=>{var T,L,w;(T=A.current)==null||T.disconnect(),A.current=null,g(null);const y=((L=S==null?void 0:S.current)==null?void 0:L.resizable)??a.current;if(y){const x={width:y.offsetWidth,height:y.offsetHeight},F=f.current;F&&l({x:F.corner.includes("left")?F.right-x.width:F.left,y:F.corner.includes("top")?F.bottom-x.height:F.top}),k(x),r==null||r(x)}f.current=null,(w=d.onResizeEnd)==null||w.call(d,S)},R=v?e0:d.minWidth,$=Math.min(W,_.maxWidth??W),j=Math.min(W,_.maxHeight??W);return{...d,defaultSize:B??d.defaultSize,minWidth:R,maxWidth:$,maxHeight:j,onResizeStart:s,onResizeEnd:h}},[d,n,i,B,_,r,a,l,m,v]);return{popupSize:B,resizableConfig:E}},x0=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",b0=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",y0=u=>{const e=typeof u=="string"?u:O4,c=t.useCallback(()=>{if(!u)return null;try{const r=localStorage.getItem(e);if(!r)return null;const o=JSON.parse(r);return!o||typeof o!="object"?null:{position:x0(o.position)?o.position:void 0,size:b0(o.size)?o.size:void 0}}catch(r){return console.error("AiAgentPopup: failed to load state:",r),null}},[u,e]),i=t.useCallback(r=>{if(u)try{const o=localStorage.getItem(e),l=o?JSON.parse(o):{},m={position:r.position??l.position,size:r.size??l.size};localStorage.setItem(e,JSON.stringify(m))}catch(o){console.error("AiAgentPopup: failed to save state:",o)}},[u,e]),a=t.useRef(void 0);return a.current===void 0&&(a.current=c()),{savedState:a.current,saveState:i}},c4=t.forwardRef((u,e)=>{const{children:c,leftPanel:i,opened:a,targetRef:r,targetGap:o=V4,defaultPosition:l,positionState:m,onPositionChange:v,draggable:B=!0,dragBoundary:k,dragIgnoreSelector:_,useStorage:N=!1,resizable:D=!0,defaultSize:g=W4,onSizeChange:C,frame:n="document",style:f,className:A,...d}=u,{savedState:E,saveState:s}=y0(N),h=t.useMemo(()=>i4(k,M4),[k]),R=i==null?void 0:i.activeKey,$=R!==void 0,[j,S]=t.useState((i==null?void 0:i.defaultActiveKey)??null),y=$?R:j,T=!!(i&&y!=null&&i.items.some(K=>q(K)&&K.key===y)),L=t.useCallback(K=>{var l4;$||S(K),(l4=i==null?void 0:i.onActiveKeyChange)==null||l4.call(i,K)},[$,i==null?void 0:i.onActiveKeyChange]),w=t.useMemo(()=>i?{...i,activeKey:y,onActiveKeyChange:L}:void 0,[i,y,L]),{popupPosition:x,setPopupPosition:F,positionForStorage:P,containerRef:H,setContainerRef:z}=v0({opened:a,targetRef:r,targetGap:o,defaultPosition:l,savedPosition:E==null?void 0:E.position,externalPositionState:m,dragBoundary:h,frame:n}),{dragActive:Q,dragHandlers:u4}=C0({elementRef:H,setPosition:F,dragBoundary:h,onPositionChange:v,ignoreSelector:_,frame:n}),{popupSize:O,resizableConfig:U}=_0({resizable:D,defaultSize:g,savedSize:E==null?void 0:E.size,dragBoundary:h,containerRef:H,onSizeChange:C,popupPosition:x,setPopupPosition:F,frame:n,isSectionOpen:T}),M=t.useMemo(()=>_4(s,G4),[s]);t.useEffect(()=>{N&&M({position:P,size:O})},[N,P,O,M]);const G=t.useMemo(()=>({left:x?`${x.x}px`:0,top:x?`${x.y}px`:0,...x?null:{visibility:"hidden"},...f}),[x,f]);return p.jsxDEV(t0,{...d,ref:e,opened:a,frame:n,placement:"top-left",resizable:U,style:G,className:Q?`${A??""} ${D4}`.trim():A,children:p.jsxDEV(J,{variant:"floating",leftPanel:w,ref:z,...B?u4:null,children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:195,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:183,columnNumber:7},void 0)});c4.displayName="AiAgentPopup";try{c4.displayName="AiAgentPopup",c4.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{c4 as A,n4 as a};
