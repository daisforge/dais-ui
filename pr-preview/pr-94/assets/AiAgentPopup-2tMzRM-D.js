import{r as t,d as I}from"./react-D2T61mpp.js";import{T as r4}from"./TextArea-Fb5fTDb-.js";import{t as i4,d as s4}from"./utils-CkhYkXt4.js";import{c as c4}from"./constants-BPUyiI8r.js";import{ch as a4,y as d4,ci as E4,cj as l4}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{H as P}from"./styled-components-5_LCUbRt.js";import{bp as p4}from"./vendor-9g8l4WhJ.js";import{a as m4}from"./@salutejs/sdds-finai-DjrWBgCD.js";import{b as D4}from"./sharedUtilsResizable-IZRdYnaY.js";const u4=5,f4=12,A4=360,h4=360,e4=56,g4=100,F4="ai-agent-popup-state",C4=300,n4="ai-agent-popup-dragging",t4='button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]',b4=.93,B4=312,R={bg:()=>d4,outline:()=>a4,radius:()=>c4.m},v4=P(m4)`
  && .${p4.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.${n4} {
    cursor: grabbing;
    user-select: none;
  }
`,_4=P.div`
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
`,y4=P.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${R.radius} + 4px);
  background: ${R.outline};
  box-shadow: ${({$shadow:u})=>u};
`,x4=P.div`
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
`,w4=P.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,N4=P.div`
  position: relative;
`,S4=P.div`
  position: absolute;
  top: ${-16}px;
  bottom: ${-16}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${b4*100}%;
  z-index: -1;
  border-radius: 50%;
  background: linear-gradient(
    268.89deg,
    rgba(157, 179, 255, 1) 6.881%,
    rgba(0, 224, 255, 1) 50.076%,
    rgba(157, 179, 255, 1) 99.883%
  );
  filter: blur(20px);
  opacity: ${({$visible:u})=>u?.56:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,k4=P.div`
  background: ${R.bg};
  border-radius: 0.625rem;

  textarea {
    max-height: ${({$maxHeight:u})=>u}px;
  }
`,U=t.forwardRef(({glow:u=!1,rightSlot:e,maxHeight:c=B4,className:a,style:d,...n},o)=>{const l={size:"s",rows:1,autoResize:!0,...n,contentRight:e};return I.jsxDEV(N4,{ref:o,className:a,style:d,children:[I.jsxDEV(S4,{$visible:u,"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:55,columnNumber:9},void 0),I.jsxDEV(k4,{$maxHeight:c,children:I.jsxDEV(r4,{...l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:57,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:56,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentInput.tsx",lineNumber:54,columnNumber:7},void 0)});U.displayName="AiAgentInput";try{U.displayName="AiAgentInput",U.__docgenInfo={description:`Поле ввода AI-помощника: атомарный TextArea с овальным свечением позади
и правым слотом под кнопки. Компонент намеренно простой: никакой логики
отправки, очистки или смены кнопок в нём нет, всё это на стороне
потребителя.

- свечение включается пропом glow и переключается в реальном времени;
  привязано к полю: при авторосте поля растёт вслед за ним так, что
  свес над верхней границей поля постоянный, и ложится под соседний
  контент (сообщения чата);
- rightSlot — произвольное содержимое правой части поля: кнопка
  отправки, кнопка остановки, с тултипами и любой логикой потребителя;
- поле авторастёт до пиксельного предела maxHeight (по умолчанию 312),
  дальше внутренний скролл;
- внешних отступов у компонента нет: место в лэйауте чата задаёт
  потребитель. Остальные пропсы уходят в TextArea, стили можно
  переопределить через className и style.`,displayName:"AiAgentInput",props:{}}}catch{}const X=()=>{var u;return!!((u=document.documentElement.getAttribute("data-theme"))!=null&&u.toLowerCase().includes("dark"))},I4=()=>{const[u,e]=t.useState(X);return t.useEffect(()=>{e(X());const c=new MutationObserver(()=>e(X()));return c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>c.disconnect()},[]),u},W=t.forwardRef(({variant:u="embedded",children:e,...c},a)=>{const n=I4()?E4:l4,o=u==="floating"?_4:y4;return I.jsxDEV(o,{...c,ref:a,$shadow:n,children:I.jsxDEV(x4,{children:I.jsxDEV(w4,{children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:40,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:39,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentSurface.tsx",lineNumber:38,columnNumber:7},void 0)});W.displayName="AiAgentSurface";try{W.displayName="AiAgentSurface",W.__docgenInfo={description:`Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
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

Тема подхватывается автоматически, как у AiAgentPopup.`,displayName:"AiAgentSurface",props:{variant:{defaultValue:{value:"embedded"},description:"Вариант рамки.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"floating"'},{value:'"embedded"'}]}}}}}catch{}const O=u=>!u||u==="document"?null:typeof u=="string"?document.getElementById(u):u.current??null,M=u=>{const e=O(u);if(!e)return{left:0,top:0,width:window.innerWidth,height:window.innerHeight};const c=e.getBoundingClientRect();return{left:c.left+e.clientLeft-e.scrollLeft,top:c.top+e.clientTop-e.scrollTop,width:e.scrollWidth,height:e.scrollHeight}},o4=()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),V=(u,e={width:0,height:0},c={},a)=>{const{width:d,height:n}=a??o4(),{top:o=0,right:l=0,bottom:g=0,left:B=0}=c;return{x:Math.max(B,Math.min(u.x,d-e.width-l)),y:Math.max(o,Math.min(u.y,n-e.height-g))}},J=(u,e,c)=>{const a=u.getBoundingClientRect(),{left:d,top:n}=c??o4();return{x:a.right+e-d,y:a.top-n}},R4=()=>({x:e4,y:e4}),K=(u,e,c={},a)=>{const{width:d,height:n}=a??{width:window.innerWidth,height:window.innerHeight},{left:o=0,right:l=0,top:g=0,bottom:B=0}=c,_=(d-o-l)/3,y=(n-g-B)/2,C=u.x-o,N=u.y-g;let m=1,F=-1;for(let A=1;A<=6;A+=1){const E=(A-1)%3*_,D=A<=3?0:y,s=Math.max(0,Math.min(C+e.width,E+_)-Math.max(C,E)),h=Math.max(0,Math.min(N+e.height,D+y)-Math.max(N,D)),r=s*h;r>F&&(F=r,m=A)}return m},q=u=>{switch(u){case 1:case 2:return"bottom-right";case 3:return"bottom-left";case 4:case 5:return"top-right";case 6:return"top-left";default:return"bottom-right"}},Z=(u,e="bottom-right")=>D4(u,{corner:e,minWidth:A4,minHeight:h4});try{O.displayName="resolveFrameElement",O.__docgenInfo={description:`Элемент, в котором живёт окно. null означает документ: окно поверх
всего, координаты от вьюпорта.`,displayName:"resolveFrameElement",props:{}}}catch{}try{M.displayName="getFrameMetrics",M.__docgenInfo={description:`Метрики области, в которой окно позиционируется и двигается:
вьюпорт или элемент из пропса frame. left и top нужны для перевода
координат мыши и таргета (они всегда от вьюпорта) в систему frame:
это точка начала содержимого, поэтому прокрутка frame вычитается,
ведь окно позиционируется absolute и скроллится вместе с содержимым.
Размеры содержимого, а не видимой части, по той же причине.`,displayName:"getFrameMetrics",props:{}}}catch{}try{V.displayName="validatePosition",V.__docgenInfo={description:`Зажимает позицию так, чтобы окно целиком оставалось в границах области
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
с PopupDF, отличаются только угол и минимальные размеры.`,displayName:"buildResizableConfig",props:{}}}catch{}const M4=({elementRef:u,setPosition:e,dragBoundary:c,onPositionChange:a,ignoreSelector:d,frame:n})=>{const[o,l]=t.useState(!1),[g,B]=t.useState(!1),_=t.useRef({x:0,y:0}),y=t.useRef({x:0,y:0}),C=t.useRef(!1),N=t.useRef(null),m=t.useMemo(()=>d?`${t4}, ${d}`:t4,[d]),F=t.useCallback((i,p)=>{if(!u.current)return;C.current=!1,y.current={x:i,y:p},N.current=M(n);const v=u.current.getBoundingClientRect();_.current={x:i-v.left,y:p-v.top},l(!0)},[u,n]),A=t.useCallback(i=>{i.button===0&&(i.target.closest(m)||F(i.clientX,i.clientY))},[F,m]),E=t.useCallback(i=>{if(i.target.closest(m))return;const p=i.touches[0];p&&F(p.clientX,p.clientY)},[F,m]),D=t.useCallback((i,p)=>{var z;if(!o||!u.current)return;const v=Math.abs(i-y.current.x),S=Math.abs(p-y.current.y);if(!C.current&&v<u4&&S<u4)return;C.current||(C.current=!0,B(!0),(z=window.getSelection())==null||z.removeAllRanges());const{offsetWidth:k,offsetHeight:x}=u.current,b=N.current??M(n),{top:f=0,right:w=0,bottom:T=0,left:L=0}=c||{},G=Math.max(L,Math.min(i-_.current.x-b.left,b.width-k-w)),j=Math.max(f,Math.min(p-_.current.y-b.top,b.height-x-T)),H={x:G,y:j};e(H),a==null||a(H)},[o,u,c,e,a,n]),s=t.useCallback(i=>{D(i.clientX,i.clientY)},[D]),h=t.useCallback(i=>{const p=i.touches[0];p&&D(p.clientX,p.clientY)},[D]),r=t.useCallback(()=>{l(!1),B(!1)},[]);return t.useEffect(()=>(o&&(document.addEventListener("mousemove",s),document.addEventListener("mouseup",r),document.addEventListener("touchmove",h),document.addEventListener("touchend",r),document.addEventListener("touchcancel",r)),()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",r),document.removeEventListener("touchcancel",r)}),[o,s,h,r]),{dragActive:g,dragHandlers:{onMouseDown:A,onTouchStart:E}}},P4=({opened:u,targetRef:e,targetGap:c,defaultPosition:a,savedPosition:d,externalPositionState:n,dragBoundary:o,frame:l})=>{const g=t.useRef(null),[B,_]=t.useState(null),y=t.useCallback(E=>{g.current=E,_(E)},[]),[C,N]=t.useState(()=>d??a??null),m=n?n[0]:C,F=t.useCallback(E=>{n?n[1](E):N(E)},[n==null?void 0:n[1]]);t.useLayoutEffect(()=>{if(!u)return;const E=B;if(!E)return;const D={width:E.offsetWidth,height:E.offsetHeight},s=M(l),h=m??(e!=null&&e.current?J(e.current,c,s):R4()),r=V(h,D,o,s);(!m||r.x!==m.x||r.y!==m.y)&&F(r)},[u,B,m,e,c,o,l,F]);const A=t.useRef(m);return t.useEffect(()=>{A.current=m},[m]),t.useEffect(()=>{if(!u)return;const E=i4(()=>{const h=g.current,r=A.current;if(!h||!r)return;const i=V(r,{width:h.offsetWidth,height:h.offsetHeight},o,M(l));(i.x!==r.x||i.y!==r.y)&&F(i)},g4);window.addEventListener("resize",E);const D=O(l);let s;return D&&(s=new ResizeObserver(E),s.observe(D)),()=>{window.removeEventListener("resize",E),s==null||s.disconnect(),E.cancel()}},[u,o,l,F]),{popupPosition:m,setPopupPosition:F,positionForStorage:n?void 0:C??void 0,containerRef:g,setContainerRef:y}},T4=({resizable:u,defaultSize:e,savedSize:c,dragBoundary:a,containerRef:d,onSizeChange:n,popupPosition:o,setPopupPosition:l,frame:g})=>{const[B,_]=t.useState(()=>c??e),[y,C]=t.useState({}),[N,m]=t.useState(null),F=t.useMemo(()=>{if(!o)return"bottom-right";const r=d.current,i={width:(r==null?void 0:r.offsetWidth)??0,height:(r==null?void 0:r.offsetHeight)??0};return q(K(o,i,a,M(g)))},[o,a,d,g]),A=N??F,E=t.useRef(null),D=t.useRef(null);t.useEffect(()=>()=>{var r;(r=D.current)==null||r.disconnect()},[]);const s=t.useMemo(()=>Z(u,A),[u,A]),h=t.useMemo(()=>{if(!s)return;const r=p=>{var S,k;const v=d.current;if(v){const x=M(g),b=v.getBoundingClientRect(),f={left:b.left-x.left,top:b.top-x.top,right:b.right-x.left,bottom:b.bottom-x.top},w=A;m(w);const{top:T=0,right:L=0,bottom:G=0,left:j=0}=a??{},H=w.includes("left")?f.right-j:x.width-f.left-L,z=w.includes("top")?f.bottom-T:x.height-f.top-G;if(C({maxWidth:s.maxWidth?Math.min(s.maxWidth,H):H,maxHeight:s.maxHeight?Math.min(s.maxHeight,z):z}),w.includes("top")||w.includes("left")){const $={left:f.left,top:f.top,right:f.right,bottom:f.bottom,corner:w};E.current=$,(S=D.current)==null||S.disconnect(),D.current=new ResizeObserver(()=>{const Y=d.current;Y&&l({x:w.includes("left")?$.right-Y.offsetWidth:$.left,y:w.includes("top")?$.bottom-Y.offsetHeight:$.top})}),D.current.observe(v)}}(k=s.onResizeStart)==null||k.call(s,p)},i=p=>{var S,k,x;(S=D.current)==null||S.disconnect(),D.current=null,m(null);const v=((k=p==null?void 0:p.current)==null?void 0:k.resizable)??d.current;if(v){const b={width:v.offsetWidth,height:v.offsetHeight},f=E.current;f&&l({x:f.corner.includes("left")?f.right-b.width:f.left,y:f.corner.includes("top")?f.bottom-b.height:f.top}),_(b),n==null||n(b)}E.current=null,(x=s.onResizeEnd)==null||x.call(s,p)};return{...s,defaultSize:B??s.defaultSize,maxWidth:y.maxWidth??s.maxWidth,maxHeight:y.maxHeight??s.maxHeight,onResizeStart:r,onResizeEnd:i}},[s,A,a,B,y,n,d,l,g]);return{popupSize:B,resizableConfig:h}},L4=u=>!!u&&typeof u.x=="number"&&typeof u.y=="number",H4=u=>!!u&&typeof u.width=="number"&&typeof u.height=="number",z4=u=>{const e=typeof u=="string"?u:F4,c=t.useCallback(()=>{if(!u)return null;try{const n=localStorage.getItem(e);if(!n)return null;const o=JSON.parse(n);return!o||typeof o!="object"?null:{position:L4(o.position)?o.position:void 0,size:H4(o.size)?o.size:void 0}}catch(n){return console.error("AiAgentPopup: failed to load state:",n),null}},[u,e]),a=t.useCallback(n=>{if(u)try{const o=localStorage.getItem(e),l=o?JSON.parse(o):{},g={position:n.position??l.position,size:n.size??l.size};localStorage.setItem(e,JSON.stringify(g))}catch(o){console.error("AiAgentPopup: failed to save state:",o)}},[u,e]),d=t.useRef(void 0);return d.current===void 0&&(d.current=c()),{savedState:d.current,saveState:a}},Q=t.forwardRef((u,e)=>{const{children:c,opened:a,targetRef:d,targetGap:n=f4,defaultPosition:o,positionState:l,onPositionChange:g,draggable:B=!0,dragBoundary:_,dragIgnoreSelector:y,useStorage:C=!1,resizable:N=!0,defaultSize:m,onSizeChange:F,frame:A="document",style:E,className:D,...s}=u,{savedState:h,saveState:r}=z4(C),{popupPosition:i,setPopupPosition:p,positionForStorage:v,containerRef:S,setContainerRef:k}=P4({opened:a,targetRef:d,targetGap:n,defaultPosition:o,savedPosition:h==null?void 0:h.position,externalPositionState:l,dragBoundary:_,frame:A}),{dragActive:x,dragHandlers:b}=M4({elementRef:S,setPosition:p,dragBoundary:_,onPositionChange:g,ignoreSelector:y,frame:A}),{popupSize:f,resizableConfig:w}=T4({resizable:N,defaultSize:m,savedSize:h==null?void 0:h.size,dragBoundary:_,containerRef:S,onSizeChange:F,popupPosition:i,setPopupPosition:p,frame:A}),T=t.useMemo(()=>s4(r,C4),[r]);t.useEffect(()=>{C&&T({position:v,size:f})},[C,v,f,T]);const L=t.useMemo(()=>({left:i?`${i.x}px`:0,top:i?`${i.y}px`:0,...i?null:{visibility:"hidden"},...E}),[i,E]);return I.jsxDEV(v4,{...s,ref:e,opened:a,frame:A,placement:"top-left",resizable:w,style:L,className:x?`${D??""} ${n4}`.trim():D,children:I.jsxDEV(W,{variant:"floating",ref:k,...B?b:null,children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:137,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.tsx",lineNumber:125,columnNumber:7},void 0)});Q.displayName="AiAgentPopup";try{Q.displayName="AiAgentPopup",Q.__docgenInfo={description:`Окно AI-помощника: контейнер с градиентной обводкой и тенью, который можно
перетаскивать и ресайзить в пределах экрана. Наполнение окна полностью
на стороне потребителя.

Позиция окна определяется в порядке приоритета: сохранённая в localStorage
(useStorage), затем defaultPosition, затем справа от targetRef, иначе
отступ от левого верхнего угла экрана.

Тема (светлая / тёмная) подхватывается автоматически: обводка через
CSS-переменную токена, тень через подписку на data-theme.`,displayName:"AiAgentPopup",props:{}}}catch{}export{Q as A,W as a,U as b};
