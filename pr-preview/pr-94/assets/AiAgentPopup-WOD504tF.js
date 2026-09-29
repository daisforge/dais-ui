import{r as t,d as I}from"./react-D2T61mpp.js";import{T as i4}from"./TextArea-BAg5mqz8.js";import{t as s4,d as c4}from"./utils-CkhYkXt4.js";import{c as a4}from"./constants-BPUyiI8r.js";import{ch as d4,y as E4,ci as l4,cj as p4}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{H as T}from"./styled-components-5_LCUbRt.js";import{bp as m4}from"./vendor-9g8l4WhJ.js";import{a as D4}from"./@salutejs/sdds-finai-DjrWBgCD.js";import{b as f4}from"./sharedUtilsResizable-IZRdYnaY.js";const u4=5,g4=12,h4=360,A4=360,e4=56,F4=100,C4="ai-agent-popup-state",b4=300,n4="ai-agent-popup-dragging",t4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',B4=.93,_4=79,v4=160,y4=23,R={bg:()=>E4,outline:()=>d4,radius:()=>a4.m},x4=T(D4)`
  && .${m4.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${n4} {
    cursor: grabbing;
    user-select: none;
  }
`,w4=T.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${R.radius};
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
    border-radius: calc(${R.radius} + 4px);
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
    border-radius: calc(${R.radius} + 4px);
    background: ${R.outline};
    pointer-events: none;
  }
`,N4=T.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${R.radius} + 4px);
  background: ${R.outline};
  box-shadow: ${({$shadow:u})=>u};
`,S4=T.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: 16px;
  border-radius: ${R.radius};
  background: ${R.bg};
  overflow: hidden;
`,k4=T.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,I4=T.div`
  position: relative;
`,R4=`linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`,M4=`linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`,T4=T.div`
  position: absolute;
  top: ${-25}px;
  height: ${_4}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${B4*100}%;
  z-index: 1;
  border-radius: 50%;
  background: ${({$isDark:u})=>u?M4:R4};
  filter: blur(92px);
  opacity: ${({$visible:u,$isDark:e})=>u?e?1:.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,L4=T.div`
  background: ${R.bg};
  border-radius: 0.625rem;

  textarea {
    max-height: ${({$maxHeight:u})=>u-y4}px;
  }
`,U=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},o4=()=>{const[u,e]=t.useState(U);return t.useEffect(()=>{e(U());const c=new MutationObserver(()=>e(U()));return c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>c.disconnect()},[]),u},X=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:c=v4,className:a,style:d,...n},o)=>{const l=o4(),f={size:"s",rows:1,autoResize:!0,...n,contentRight:e};return I.jsxDEV(I4,{ref:o,className:a,style:d,children:[I.jsxDEV(T4,{$visible:u,$isDark:l,"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:60,columnNumber:9},void 0),I.jsxDEV(L4,{$maxHeight:c,children:I.jsxDEV(i4,{...f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:62,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:59,columnNumber:7},void 0)});X.displayName="AiAgentInput";try{X.displayName="AiAgentInput",X.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
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
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const W=t.forwardRef(({variant:u="embedded",children:e,...c},a)=>{const n=o4()?l4:p4,o=u==="floating"?w4:N4;return I.jsxDEV(o,{...c,ref:a,$shadow:n,children:I.jsxDEV(S4,{children:I.jsxDEV(k4,{children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:40,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:39,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:38,columnNumber:7},void 0)});W.displayName="AiAgentSurface";try{W.displayName="AiAgentSurface",W.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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

Тема подхватывается автоматически, как у AiAgentPopup.`,displayName:"AiAgentSurface",props:{variant:{defaultValue:{value:"embedded"},description:"Вариант рамки.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"floating"'},{value:'"embedded"'}]}}}}}catch{}const O=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,M=u=>{const e=O(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const c=e.getBoundingClientRect();return{left:c.left+e.clientLeft-e.scrollLeft,top:c.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},r4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),G=(u,e={width:0,height:0},c={},a)=>{const{width:d,height:n}=a??r4(),{top:o=0,right:l=0,bottom:f=0,left:B=0}=c;return{x:Math.max(B,Math.min(u.x,d-e.width-l)),y:Math.max(o,Math.min(u.y,n-e.height-f))}},J=(u,e,c)=>{const a=u.getBoundingClientRect(),{left:d,top:n}=c??r4();return{x:a.right+e-d,y:a.top-n}},P4=()=>({x:e4,y:e4}),K=(u,e,c={},a)=>{const{width:d,height:n}=a??{width:window.innerWidth,height:window.innerHeight},{left:o=0,right:l=0,top:f=0,bottom:B=0}=c,v=(d-o-l)/3,y=(n-f-B)/2,C=u.x-o,N=u.y-f;let m=1,F=-1;for(let h=1;h<=6;h+=1){const E=(h-1)%3*v,D=h<=3?0:y,s=Math.max(0,Math.min(C+e.width,E+v)-Math.max(C,E)),A=Math.max(0,Math.min(N+e.height,D+y)-Math.max(N,D)),r=s*A;r>F&&(F=r,m=h)}return m},q=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},Z=(u,e="bottom-right")=>f4(u,{corner:e,minWidth:h4,minHeight:A4});try{O.displayName="resolveFrameElement",O.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{M.displayName="getFrameMetrics",M.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{G.displayName="validatePosition",G.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
(вьюпорт или frame) с учётом отступов boundary.`,displayName:"validatePosition",props:{}}}catch{}try{J.displayName="getPositionFromTarget",J.__docgenInfo={description:`Позиция справа от target-элемента, верхние края выровнены.
Координаты переводятся из вьюпортных в систему области окна.`,displayName:"getPositionFromTarget",props:{}}}catch{}try{K.displayName="getViewportSector",K.__docgenInfo={description:`Номер сектора экрана, в котором находится окно. Экран делится на шесть
частей (три колонки, два ряда), сектором окна считается тот, с которым
у него наибольшая площадь пересечения:
1 | 2 | 3
---------
4 | 5 | 6`,displayName:"getViewportSector",props:{}}}catch{}try{q.displayName="getCornerForSector",q.__docgenInfo={description:`Угол ресайз-иконки для сектора: иконка смотрит туда, где есть место
расти. Окно в верхней половине экрана растёт вниз, в нижней вверх,
в левой части вправо, в правой влево.`,displayName:"getCornerForSector",props:{}}}catch{}try{Z.displayName="buildResizableConfig",Z.__docgenInfo={description:`Конфигурация resizable для атомарного Popup: ресайз за один угол
(activeCorner, зависит от положения окна на экране). Сборка общая
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}const H4=({elementRef:u,setPosition:e,dragBoundary:c,onPositionChange:a,ignoreSelector:d,frame:n})=>{const[o,l]=t.useState(!1),[f,B]=t.useState(!1),v=t.useRef({x:0,y:0}),y=t.useRef({x:0,y:0}),C=t.useRef(!1),N=t.useRef(null),m=t.useMemo(()=>d?`${t4}, ${d}`:t4,[d]),F=t.useCallback((i,p)=>{if(!u.current)return;C.current=!1,y.current={x:i,y:p},N.current=M(n);const _=u.current.getBoundingClientRect();v.current={x:i-_.left,y:p-_.top},l(!0)},[u,n]),h=t.useCallback(i=>{i.button===0&&(i.target.closest(m)||F(i.clientX,i.clientY))},[F,m]),E=t.useCallback(i=>{if(i.target.closest(m))return;const p=i.touches[0];p&&F(p.clientX,p.clientY)},[F,m]),D=t.useCallback((i,p)=>{var z;if(!o||!u.current)return;const _=Math.abs(i-y.current.x),S=Math.abs(p-y.current.y);if(!C.current&&_<u4&&S<u4)return;C.current||(C.current=!0,B(!0),(z=window.getSelection())==null||z.removeAllRanges());const{offsetWidth:k,offsetHeight:x}=u.current,b=N.current??M(n),{top:g=0,right:w=0,bottom:L=0,left:P=0}=c||{},V=Math.max(P,Math.min(i-v.current.x-b.left,b.width-k-w)),j=Math.max(g,Math.min(p-v.current.y-b.top,b.height-x-L)),H={x:V,y:j};e(H),a==null||a(H)},[o,u,c,e,a,n]),s=t.useCallback(i=>{D(i.clientX,i.clientY)},[D]),A=t.useCallback(i=>{const p=i.touches[0];p&&D(p.clientX,p.clientY)},[D]),r=t.useCallback(()=>{l(!1),B(!1)},[]);return t.useEffect(()=>(o&&(document.addEventListener("mousemove",s),document.addEventListener("mouseup",r),document.addEventListener("touchmove",A),document.addEventListener("touchend",r),document.addEventListener("touchcancel",r)),()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",r),document.removeEventListener("touchcancel",r)}),[o,s,A,r]),{dragActive:f,dragHandlers:{onMouseDown:h,onTouchStart:E}}},z4=({opened:u,targetRef:e,targetGap:c,defaultPosition:a,savedPosition:d,externalPositionState:n,dragBoundary:o,frame:l})=>{const f=t.useRef(null),[B,v]=t.useState(null),y=t.useCallback(E=>{f.current=E,v(E)},[]),[C,N]=t.useState(()=>d??a??null),m=n?n[0]:C,F=t.useCallback(E=>{n?n[1](E):N(E)},[n==null?void 0:n[1]]);t.useLayoutEffect(()=>{if(!u)return;const E=B;if(!E)return;const D={width:E.offsetWidth,height:E.offsetHeight},s=M(l),A=m??(e!=null&&e.current?J(e.current,c,s):P4()),r=G(A,D,o,s);(!m||r.x!==m.x||r.y!==m.y)&&F(r)},[u,B,m,e,c,o,l,F]);const h=t.useRef(m);return t.useEffect(()=>{h.current=m},[m]),t.useEffect(()=>{if(!u)return;const E=s4(()=>{const A=f.current,r=h.current;if(!A||!r)return;const i=G(r,{width:A.offsetWidth,height:A.offsetHeight},o,M(l));(i.x!==r.x||i.y!==r.y)&&F(i)},F4);window.addEventListener("resize",E);const D=O(l);let s;return D&&(s=new ResizeObserver(E),s.observe(D)),()=>{window.removeEventListener("resize",E),s==null||s.disconnect(),E.cancel()}},[u,o,l,F]),{popupPosition:m,setPopupPosition:F,positionForStorage:n?void 0:C??void 0,containerRef:f,setContainerRef:y}},$4=({resizable:u,defaultSize:e,savedSize:c,dragBoundary:a,containerRef:d,onSizeChange:n,popupPosition:o,setPopupPosition:l,frame:f})=>{const[B,v]=t.useState(()=>c??e),[y,C]=t.useState({}),[N,m]=t.useState(null),F=t.useMemo(()=>{if(!o)return"bottom-right";const r=d.current,i={width:(r==null?void 0:r.offsetWidth)??0,height:(r==null?void 0:r.offsetHeight)??0};return q(K(o,i,a,M(f)))},[o,a,d,f]),h=N??F,E=t.useRef(null),D=t.useRef(null);t.useEffect(()=>()=>{var r;(r=D.current)==null||r.disconnect()},[]);const s=t.useMemo(()=>Z(u,h),[u,h]),A=t.useMemo(()=>{if(!s)return;const r=p=>{var S,k;const _=d.current;if(_){const x=M(f),b=_.getBoundingClientRect(),g={left:b.left-x.left,top:b.top-x.top,right:b.right-x.left,bottom:b.bottom-x.top},w=h;m(w);const{top:L=0,right:P=0,bottom:V=0,left:j=0}=a??{},H=w.includes("left")?g.right-j:x.width-g.left-P,z=w.includes("top")?g.bottom-L:x.height-g.top-V;if(C({maxWidth:s.maxWidth?Math.min(s.maxWidth,H):H,maxHeight:s.maxHeight?Math.min(s.maxHeight,z):z}),w.includes("top")||w.includes("left")){const $={left:g.left,top:g.top,right:g.right,bottom:g.bottom,corner:w};E.current=$,(S=D.current)==null||S.disconnect(),D.current=new ResizeObserver(()=>{const Y=d.current;Y&&l({x:w.includes("left")?$.right-Y.offsetWidth:$.left,y:w.includes("top")?$.bottom-Y.offsetHeight:$.top})}),D.current.observe(_)}}(k=s.onResizeStart)==null||k.call(s,p)},i=p=>{var S,k,x;(S=D.current)==null||S.disconnect(),D.current=null,m(null);const _=((k=p==null?void 0:p.current)==null?void 0:k.resizable)??d.current;if(_){const b={width:_.offsetWidth,height:_.offsetHeight},g=E.current;g&&l({x:g.corner.includes("left")?g.right-b.width:g.left,y:g.corner.includes("top")?g.bottom-b.height:g.top}),v(b),n==null||n(b)}E.current=null,(x=s.onResizeEnd)==null||x.call(s,p)};return{...s,defaultSize:B??s.defaultSize,maxWidth:y.maxWidth??s.maxWidth,maxHeight:y.maxHeight??s.maxHeight,onResizeStart:r,onResizeEnd:i}},[s,h,a,B,y,n,d,l,f]);return{popupSize:B,resizableConfig:A}},W4=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",O4=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",G4=u=>{const e=typeof u=="string"?u:C4,c=t.useCallback(()=>{if(!u)return null;try{const n=localStorage.getItem(e);if(!n)return null;const o=JSON.parse(n);return!o||typeof o!="object"?null:{position:W4(o.position)?o.position:void 0,size:O4(o.size)?o.size:void 0}}catch(n){return console.error("AiAgentPopup: failed to load state:",n),null}},[u,e]),a=t.useCallback(n=>{if(u)try{const o=localStorage.getItem(e),l=o?JSON.parse(o):{},f={position:n.position??l.position,size:n.size??l.size};localStorage.setItem(e,JSON.stringify(f))}catch(o){console.error("AiAgentPopup: failed to save state:",o)}},[u,e]),d=t.useRef(void 0);return d.current===void 0&&(d.current=c()),{savedState:d.current,saveState:a}},Q=t.forwardRef((u,e)=>{const{children:c,opened:a,targetRef:d,targetGap:n=g4,defaultPosition:o,positionState:l,onPositionChange:f,draggable:B=!0,dragBoundary:v,dragIgnoreSelector:y,useStorage:C=!1,resizable:N=!0,defaultSize:m,onSizeChange:F,frame:h="document",style:E,className:D,...s}=u,{savedState:A,saveState:r}=G4(C),{popupPosition:i,setPopupPosition:p,positionForStorage:_,containerRef:S,setContainerRef:k}=z4({opened:a,targetRef:d,targetGap:n,defaultPosition:o,savedPosition:A==null?void 0:A.position,externalPositionState:l,dragBoundary:v,frame:h}),{dragActive:x,dragHandlers:b}=H4({elementRef:S,setPosition:p,dragBoundary:v,onPositionChange:f,ignoreSelector:y,frame:h}),{popupSize:g,resizableConfig:w}=$4({resizable:N,defaultSize:m,savedSize:A==null?void 0:A.size,dragBoundary:v,containerRef:S,onSizeChange:F,popupPosition:i,setPopupPosition:p,frame:h}),L=t.useMemo(()=>c4(r,b4),[r]);t.useEffect(()=>{C&&L({position:_,size:g})},[C,_,g,L]);const P=t.useMemo(()=>({left:i?`${i.x}px`:0,top:i?`${i.y}px`:0,...i?null:{visibility:"hidden"},...E}),[i,E]);return I.jsxDEV(x4,{...s,ref:e,opened:a,frame:h,placement:"top-left",resizable:w,style:P,className:x?`${D??""} ${n4}`.trim():D,children:I.jsxDEV(W,{variant:"floating",ref:k,...B?b:null,children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:137,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:125,columnNumber:7},void 0)});Q.displayName="AiAgentPopup";try{Q.displayName="AiAgentPopup",Q.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{Q as A,W as a,X as b};
