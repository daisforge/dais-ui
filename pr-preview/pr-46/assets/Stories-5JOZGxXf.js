import{r,d as t}from"./react-D2T61mpp.js";import{bt as Ce,bu as xe}from"./vendor-Ca3Rcr5K.js";import{y as re,o as ke,z as Ve}from"./utils-BOxIorbb.js";import{H as g,C as Se,U as O,W as Be}from"./styled-components-BlJZcR1N.js";import{T as Fe}from"./AnalyticalWidget-D8Q0DXRg.js";import{n as Ie,cE as Ae,x as _e,y as $e,M as Pe,cF as Re,at as je,au as Te}from"./@salutejs/sdds-themes-CZ516YZq.js";import{S as Oe,I as ne}from"./@salutejs/sdds-finai-BaaqQyG7.js";import{E as qe}from"./EmptyState-ClfJf7Jw.js";import{hf as ze,hi as Ge,fa as Le}from"./@salutejs/plasma-icons-DH_et0Tb.js";const ve=r.createContext(null),te=ve.Provider,X=()=>{const e=r.useContext(ve);if(!e)throw new Error("Компоненты Stories должны использоваться внутри <Stories>.");return e};try{te.displayName="StoriesProvider",te.__docgenInfo={description:"",displayName:"StoriesProvider",props:{}}}catch{}const U=e=>r.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot),N={root:"df-stories",preview:"df-stories-preview",previewRing:"df-stories-preview__ring",previewBody:"df-stories-preview__body",previewTitle:"df-stories-preview__title",viewer:"df-stories-viewer",overlay:"df-stories-viewer__overlay",stage:"df-stories-viewer__stage",banner:"df-stories-banner",progress:"df-stories-progress",progressItem:"df-stories-progress__item",content:"df-stories-content",action:"df-stories-banner__action",arrowPrev:"df-stories-viewer__arrow-prev",arrowNext:"df-stories-viewer__arrow-next",close:"df-stories-viewer__close"},He="linear-gradient(135deg, #08c6c9 0%, #99b0fe 100%)",We="#ecf6fc",z="df-stories-banner",M={duration:5e3,pauseHoldDelay:200,tapPrevZone:1/3,overlayColor:"#060a0c47",zIndex:9e3},E={circle:98,ring:2,titleGap:6,rectRadiusOuter:12,rectRadiusBody:8,bannerMaxWidth:430,bannerMaxHeight:900,bannerRadius:16,bannerPadding:28,stageWidth:558,progressHeight:4,progressRadius:2,progressFillRadius:6,progressGap:4},Me="StoriesPreview",ie={ring:()=>He,fallback:()=>We,boxShadow:()=>Ae},de=(e,u)=>e==="circle"?"50%":`${{outer:E.rectRadiusOuter,body:E.rectRadiusBody}[u]}px`,Xe=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({$width:e})=>e}px;
`,Ue=g.button`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: ${({$width:e})=>e}px;
  height: ${({$height:e})=>e}px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: ${({$shape:e})=>de(e,"outer")};
  outline: none;

  &:focus-visible {
    outline: 2px solid ${Ie};
    outline-offset: 2px;
  }
`,Ye=g.div`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: ${E.ring}px;
  background: ${ie.ring};
  border-radius: ${({$shape:e})=>de(e,"outer")};
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`,Ze=g.div`
  position: absolute;
  inset: ${({$viewed:e})=>e?0:E.ring*2}px;
  box-sizing: border-box;
  box-shadow: ${ie.boxShadow};
  background-color: ${ie.fallback};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({$image:e})=>e&&Se`
      /* Кавычки обязательны: без них data-URI и URL со спецсимволами
         (%, запятые, скобки) ломают парсинг url() и превью не отрисовывается. */
      background-image: url('${e}');
    `}
  border-radius: ${({$shape:e,$viewed:u})=>de(e,u?"outer":"body")};
`,Ke=g.div`
  margin-top: ${E.titleGap}px;
  width: 100%;
  text-align: ${({$align:e})=>e};

  /* Текстовый блок на всю ширину — иначе text-align (влево/вправо) не имеет пространства. */
  & > * {
    width: 100%;
  }
`,Z=e=>{var j;const{slides:u,shape:n="circle",title:i,titleProps:o,image:f,viewed:d=!1,size:c=E.circle,width:b,height:h,renderTrigger:a,className:p,__index:l=0}=e,{store:D,controller:S,preloadOnHover:w}=X(),v=U(D),P=v.isOpen&&v.groupIndex===l,F=n==="rect"?b??c:c,_=n==="rect"?h??c:c,R=()=>S.open(l),I=()=>{w&&u[0]&&re(u[0].src)},A=()=>a?a({index:l,viewed:d,isActive:P}):t.jsxDEV(t.Fragment,{children:[d?null:t.jsxDEV(Ye,{className:N.previewRing,$shape:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:66,columnNumber:11},void 0),t.jsxDEV(Ze,{className:N.previewBody,$shape:n,$viewed:d,$image:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:71,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:64,columnNumber:7},void 0),V={variant:"BodyXXS",bold:!0,lines:2,tooltipText:i,color:_e,...o,children:i},q=((j=o==null?void 0:o.style)==null?void 0:j.textAlign)??"center";return t.jsxDEV(Xe,{className:[N.preview,p].filter(Boolean).join(" "),"data-component":Me,$width:F,children:[t.jsxDEV(Ue,{type:"button","aria-label":i,$width:F,$height:_,$shape:n,onClick:R,onMouseEnter:I,children:A()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:101,columnNumber:7},void 0),i?t.jsxDEV(Ke,{className:N.previewTitle,style:{maxWidth:F},$align:q,children:t.jsxDEV(Fe,{...V},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:119,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:114,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:94,columnNumber:5},void 0)};try{Z.displayName="StoriesPreview",Z.__docgenInfo={description:"",displayName:"StoriesPreview",props:{__index:{defaultValue:null,description:"@internal Индекс группы, инжектится корнем `Stories` при клонировании.\nСнаружи задавать не нужно.",name:"__index",required:!1,type:{name:"number"}},slides:{defaultValue:null,description:"Сегменты группы: показываются по очереди после клика на триггер.",name:"slides",required:!0,type:{name:"StorySlide[]"}},shape:{defaultValue:null,description:"Форма триггера. По умолчанию `circle`.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rect"'}]}},title:{defaultValue:null,description:"Подпись под триггером (по умолчанию до 2 строк, ellipsis с авто-тултипом).",name:"title",required:!1,type:{name:"string"}},titleProps:{defaultValue:null,description:"Пропсы подписи (TypographyWithAutoTooltip) поверх дефолтов; выравнивание — через `style.textAlign`.",name:"titleProps",required:!1,type:{name:"TypographyWithAutoTooltipProps<TypographyVariant>"}},image:{defaultValue:null,description:"Картинка-превью внутри триггера. Если не задана — заливка-заглушка.",name:"image",required:!1,type:{name:"string"}},viewed:{defaultValue:null,description:"Просмотрена ли группа. Контролируется снаружи: по колбэкам гасите обводку.",name:"viewed",required:!1,type:{name:"boolean"}},defaultDuration:{defaultValue:null,description:"Дефолтная длительность сегментов этой группы, мс.",name:"defaultDuration",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Размер круглого триггера (сторона), px. По умолчанию 98.",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Ширина прямоугольного триггера, px. По умолчанию равна `size`.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Высота прямоугольного триггера, px. По умолчанию равна `size`.",name:"height",required:!1,type:{name:"number"}},renderTrigger:{defaultValue:null,description:"Полная замена визуала триггера. Отменяет встроенную отрисовку.",name:"renderTrigger",required:!1,type:{name:"(state: StoriesTriggerState) => ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const oe=r.lazy(()=>Ce(()=>Promise.resolve().then(()=>_u),void 0).then(e=>({default:e.StoriesViewer})));try{oe.displayName="StoriesViewerLazy",oe.__docgenInfo={description:"",displayName:"StoriesViewerLazy",props:{}}}catch{}const Je=e=>{const u=r.useRef(e);return u.current=e,r.useCallback(n=>{const i=u.current[n];if(!i)return;i.slides.forEach(f=>re(f.src));const o=u.current[n+1];o!=null&&o.slides[0]&&re(o.slides[0].src)},[])},Qe={isOpen:!1,groupIndex:0,slideIndex:0,isPlaying:!0,direction:"next"},eu=e=>{let u={...Qe,...e};const n=new Set;return{getSnapshot:()=>u,subscribe:i=>(n.add(i),()=>{n.delete(i)}),setState:i=>{Object.keys(i).some(d=>u[d]!==i[d])&&(u={...u,...i},n.forEach(d=>d()))}}},uu=()=>typeof document<"u"&&typeof document.startViewTransition=="function",nu=(e,u)=>{const{direction:n="next",enabled:i=!0}=u??{};if(!i||!uu()){e();return}const o=document;o.documentElement.dataset.dfStoriesDir=n,o.startViewTransition(()=>xe.flushSync(e)).finished.finally(()=>{delete o.documentElement.dataset.dfStoriesDir})},ru=g.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`,ye=e=>r.isValidElement(e)&&e.type===Z,be=e=>{const u=[];return r.Children.forEach(e,n=>{var i;ye(n)?u.push(n):r.isValidElement(n)&&((i=n.props)!=null&&i.children)&&u.push(...be(n.props.children))}),u},we=(e,u)=>r.Children.map(e,n=>{var i;if(ye(n)){const o=u.value;return u.value+=1,r.cloneElement(n,{__index:o})}return r.isValidElement(n)&&((i=n.props)!=null&&i.children)?r.cloneElement(n,void 0,we(n.props.children,u)):n}),tu=()=>{const{store:e}=X(),{isOpen:u}=U(e),[n,i]=r.useState(u);return r.useEffect(()=>{u&&i(!0)},[u]),n?t.jsxDEV(r.Suspense,{fallback:null,children:t.jsxDEV(oe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:110,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:109,columnNumber:5},void 0):null},iu=(e,u)=>{const{children:n,defaultDuration:i=M.duration,open:o,defaultOpen:f,activeGroupIndex:d,activeSlideIndex:c,onOpenChange:b,onGroupChange:h,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:D,onError:S,renderError:w,overlay:v=!0,overlayColor:P=M.overlayColor,zIndex:F=M.zIndex,preloadOnHover:_=!0,loadingDelay:R=0,pauseHoldDelay:I=M.pauseHoldDelay,groupTransition:A="slide",arrows:V="auto",hideDisabledArrows:q=!0,mode:j,className:J}=e,$=be(n).map(C=>({slides:C.props.slides??[],defaultDuration:C.props.defaultDuration})),G=r.useRef();G.current||(G.current=eu({isOpen:f??!1}));const m=G.current,Y=r.useRef($);Y.current=$;const ce=r.useRef({groupTransition:A});ce.current={groupTransition:A};const L=r.useRef({onOpenChange:b,onGroupChange:h,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:D});L.current={onOpenChange:b,onGroupChange:h,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:D};const ee=r.useRef();if(!ee.current){const C=(s,k)=>m.setState({slideIndex:s,direction:k,isPlaying:!0}),x=(s,k,B)=>nu(()=>m.setState({groupIndex:s,slideIndex:k,direction:B,isPlaying:!0}),{direction:B,enabled:ce.current.groupTransition!=="none"}),y=()=>{var s,k;(k=(s=L.current).onComplete)==null||k.call(s),m.setState({isOpen:!1,isPlaying:!1})};ee.current={open:(s,k)=>{const B=m.getSnapshot();m.setState({isOpen:!0,groupIndex:s??B.groupIndex,slideIndex:k??0,isPlaying:!0,direction:"next"})},close:()=>m.setState({isOpen:!1,isPlaying:!1}),next:()=>{var B,T,H,W,me;const s=m.getSnapshot(),k=((B=Y.current[s.groupIndex])==null?void 0:B.slides.length)??0;s.slideIndex+1<k?C(s.slideIndex+1,"next"):s.groupIndex+1<Y.current.length?((H=(T=L.current).onGroupComplete)==null||H.call(T,s.groupIndex),x(s.groupIndex+1,0,"next")):((me=(W=L.current).onGroupComplete)==null||me.call(W,s.groupIndex),y())},prev:()=>{const s=m.getSnapshot();s.slideIndex>0?C(s.slideIndex-1,"prev"):s.groupIndex>0&&x(s.groupIndex-1,0,"prev")},nextGroup:()=>{const s=m.getSnapshot();s.groupIndex+1<Y.current.length&&x(s.groupIndex+1,0,"next")},prevGroup:()=>{const s=m.getSnapshot();s.groupIndex>0&&x(s.groupIndex-1,0,"prev")},goTo:(s,k)=>{const B=m.getSnapshot(),T=s<B.groupIndex?"prev":"next";s===B.groupIndex?C(k??0,T):x(s,k??0,T)},pause:()=>m.setState({isPlaying:!1}),resume:()=>m.setState({isPlaying:!0})}}const ue=ee.current,De=Je($),pe=r.useRef(m.getSnapshot());r.useEffect(()=>m.subscribe(()=>{var s,k,B,T,H,W;const C=pe.current,x=m.getSnapshot();pe.current=x;const y=L.current;if(C.isOpen!==x.isOpen){(s=y.onOpenChange)==null||s.call(y,x.isOpen,{groupIndex:x.groupIndex}),x.isOpen?((k=y.onGroupChange)==null||k.call(y,x.groupIndex),(B=y.onSlideChange)==null||B.call(y,x.groupIndex,x.slideIndex)):(T=y.onClose)==null||T.call(y);return}x.isOpen&&(C.groupIndex!==x.groupIndex&&((H=y.onGroupChange)==null||H.call(y,x.groupIndex)),(C.groupIndex!==x.groupIndex||C.slideIndex!==x.slideIndex)&&((W=y.onSlideChange)==null||W.call(y,x.groupIndex,x.slideIndex)))}),[m]),r.useEffect(()=>{o!==void 0&&m.setState({isOpen:o})},[o,m]),r.useEffect(()=>{d!==void 0&&m.setState({groupIndex:d})},[d,m]),r.useEffect(()=>{c!==void 0&&m.setState({slideIndex:c})},[c,m]),r.useImperativeHandle(u,()=>({...ue,getState:()=>{const C=m.getSnapshot();return{isOpen:C.isOpen,groupIndex:C.groupIndex,slideIndex:C.slideIndex,isPlaying:C.isPlaying}}}),[ue,m]);const Ne={store:m,controller:ue,groups:$,defaultDuration:i,pauseHoldDelay:I,tapPrevZone:M.tapPrevZone,preloadGroup:De,preloadOnHover:_,loadingDelay:R,overlay:v,overlayColor:P,zIndex:F,groupTransition:A,arrows:V,hideDisabledArrows:q,mode:j,onError:S,renderError:w};return t.jsxDEV(te,{value:Ne,children:[t.jsxDEV(ru,{className:[N.root,J].filter(Boolean).join(" "),children:we(n,{value:0})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:360,columnNumber:7},void 0),t.jsxDEV(tu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:367,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:359,columnNumber:5},void 0)},K=r.forwardRef(iu);K.Preview=Z;K.displayName="Stories";try{K.displayName="Stories",K.__docgenInfo={description:"",displayName:"Stories",props:{children:{defaultValue:null,description:"Триггеры-превью: список `Stories.Preview`.",name:"children",required:!0,type:{name:"ReactNode"}},defaultDuration:{defaultValue:null,description:"Длительность сегмента по умолчанию, мс.",name:"defaultDuration",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"Controlled-открытие вьюера.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Начальное открытие для uncontrolled-режима.",name:"defaultOpen",required:!1,type:{name:"boolean"}},activeGroupIndex:{defaultValue:null,description:"Controlled-индекс активной группы.",name:"activeGroupIndex",required:!1,type:{name:"number"}},activeSlideIndex:{defaultValue:null,description:"Controlled-индекс активного сегмента.",name:"activeSlideIndex",required:!1,type:{name:"number"}},onOpenChange:{defaultValue:null,description:"Изменилось открытие/закрытие вьюера.",name:"onOpenChange",required:!1,type:{name:"(open: boolean, meta: { groupIndex: number; }) => void"}},onGroupChange:{defaultValue:null,description:"Сменилась активная группа.",name:"onGroupChange",required:!1,type:{name:"(groupIndex: number) => void"}},onSlideChange:{defaultValue:null,description:"Сменился активный сегмент (под-стори).",name:"onSlideChange",required:!1,type:{name:"(groupIndex: number, slideIndex: number) => void"}},onComplete:{defaultValue:null,description:"Досмотрены все группы (перед автозакрытием).",name:"onComplete",required:!1,type:{name:"() => void"}},onGroupComplete:{defaultValue:null,description:"Группа полностью досмотрена — удобно гасить индикатор «просмотрено».",name:"onGroupComplete",required:!1,type:{name:"(groupIndex: number) => void"}},onClose:{defaultValue:null,description:"Вьюер закрылся (крестик / Esc / клик по оверлею / автозакрытие).",name:"onClose",required:!1,type:{name:"() => void"}},onError:{defaultValue:null,description:"Ошибка загрузки ассета сегмента.",name:"onError",required:!1,type:{name:"(ctx: StoryErrorContext) => void"}},renderError:{defaultValue:null,description:"Свой контент при ошибке загрузки ассета (по умолчанию — встроенный EmptyState).",name:"renderError",required:!1,type:{name:"(ctx: StoryErrorContext) => ReactNode"}},overlay:{defaultValue:null,description:"Показывать затемнённый оверлей. По умолчанию `true`.",name:"overlay",required:!1,type:{name:"boolean"}},overlayColor:{defaultValue:null,description:"Цвет оверлея.",name:"overlayColor",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"z-index оверлея.",name:"zIndex",required:!1,type:{name:"number"}},preloadOnHover:{defaultValue:null,description:"Предзагружать первый ассет группы при наведении на её триггер. По умолчанию `true`.",name:"preloadOnHover",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:null,description:"Задержка показа ассета, мс (для демо/тестов загрузки).",name:"loadingDelay",required:!1,type:{name:"number"}},pauseHoldDelay:{defaultValue:null,description:"Порог удержания указателя для паузы, мс. По умолчанию 200.",name:"pauseHoldDelay",required:!1,type:{name:"number"}},groupTransition:{defaultValue:null,description:"Пресет анимации перехода между группами. По умолчанию `slide`.",name:"groupTransition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"slide"'},{value:'"fade"'}]}},arrows:{defaultValue:null,description:"Режим видимости стрелок навигации. По умолчанию `auto` (скрыть при единственном сегменте).",name:"arrows",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"always"'},{value:'"never"'}]}},hideDisabledArrows:{defaultValue:null,description:"Прятать стрелку, когда в её сторону листать некуда (крайний сегмент),\nвместо показа в disabled-состоянии. По умолчанию `true`.",name:"hideDisabledArrows",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"Явный режим темы. По умолчанию определяется автоматически.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ou=({controller:e,pauseHoldDelay:u,tapPrevZone:n,isOpen:i})=>{const o=r.useRef(),f=r.useRef(!1),d=r.useRef("next"),c=()=>{o.current&&(clearTimeout(o.current),o.current=void 0)},b=p=>{const l=p.currentTarget.getBoundingClientRect(),D=l.width>0?(p.clientX-l.left)/l.width:1;d.current=D<n?"prev":"next",f.current=!1,c(),o.current=setTimeout(()=>{f.current=!0,e.pause()},u)},h=()=>{if(c(),f.current){f.current=!1,e.resume();return}d.current==="prev"?e.prev():e.next()},a=()=>{c(),f.current&&(f.current=!1,e.resume())};return r.useEffect(()=>{if(!i)return;const p=l=>{l.key==="ArrowLeft"?(l.preventDefault(),e.prev()):l.key==="ArrowRight"?(l.preventDefault(),e.next()):l.key==="Escape"&&(l.preventDefault(),e.close())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[i,e]),{onPointerDown:b,onPointerUp:h,onPointerLeave:a,onPointerCancel:a}},fe=g.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${$e};
`,su=g.img`
  width: 100%;
  height: 100%;
  object-fit: ${({$objectFit:e})=>e};
  opacity: ${({$loaded:e})=>e?1:0};
  transition: opacity 0.2s ease;
  user-select: none;
`,au=g.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,lu=g.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${E.bannerPadding}px;
`,se=({slide:e,status:u,errorNode:n})=>{const i=e.objectFit??"cover",o=u==="loaded";return u==="error"?t.jsxDEV(fe,{className:N.content,children:t.jsxDEV(lu,{children:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:37,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:36,columnNumber:7},void 0):t.jsxDEV(fe,{className:N.content,children:[t.jsxDEV(su,{src:e.src,alt:"",draggable:!1,$objectFit:i,$loaded:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:44,columnNumber:7},void 0),u==="loading"?t.jsxDEV(au,{children:t.jsxDEV(Oe,{view:"default",size:"l"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:53,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:52,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:43,columnNumber:5},void 0)};try{se.displayName="StoriesContent",se.__docgenInfo={description:"Контент баннера: ассет (картинка/GIF) + спиннер на время загрузки + error-state\nпри ошибке. Video пока не реализовано, но `slide.type` заложен в модель под будущее.",displayName:"StoriesContent",props:{slide:{defaultValue:null,description:"",name:"slide",required:!0,type:{name:"StorySlide"}},status:{defaultValue:null,description:"Статус загрузки ассета текущего сегмента (владелец — StoriesBanner).",name:"status",required:!0,type:{name:"ImageLoaderStatus"}},errorNode:{defaultValue:null,description:"Error-state при ошибке загрузки (готовит StoriesBanner: renderError или дефолтный EmptyState).",name:"errorNode",required:!1,type:{name:"ReactNode"}}}}}catch{}const ge=(e,u)=>{e&&(e.style.transform=`scaleX(${u})`)},du=({fillRef:e,active:u,duration:n,isPlaying:i,isReady:o,resetKey:f,onComplete:d})=>{const c=r.useRef(0),b=r.useRef(d);b.current=d,r.useEffect(()=>{c.current=0,ge(e.current,0)},[f,e]),r.useEffect(()=>{if(!u||!i||!o||n<=0)return;let h=0,a=performance.now();const p=l=>{c.current+=l-a,a=l;const D=Math.min(1,c.current/n);if(ge(e.current,D),D>=1){b.current();return}h=requestAnimationFrame(p)};return h=requestAnimationFrame(p),()=>cancelAnimationFrame(h)},[u,i,o,n,f,e])},cu=g.div`
  display: flex;
  gap: ${E.progressGap}px;
  width: 100%;
`,pu=g.div`
  position: relative;
  flex: 1 1 0;
  height: ${E.progressHeight}px;
  border-radius: ${E.progressRadius}px;
  overflow: hidden;
  background: ${({$bg:e})=>e};
`,mu=g.span`
  position: absolute;
  inset: 0;
  border-radius: ${E.progressFillRadius}px;
  background: ${({$color:e})=>e};
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
`,ae=({isReady:e})=>{var _;const{store:u,controller:n,groups:i,defaultDuration:o,mode:f}=X(),{groupIndex:d,slideIndex:c,isPlaying:b,isOpen:h}=U(u),a=ke(),l=(f??a)==="dark",D=l?je:Te,S=l?Pe:Re,w=i[d],v=(w==null?void 0:w.slides)??[],P=r.useRef(null),F=((_=v[c])==null?void 0:_.duration)??(w==null?void 0:w.defaultDuration)??o;return du({fillRef:P,active:h,duration:F,isPlaying:b,isReady:e,resetKey:`${d}-${c}`,onComplete:n.next}),t.jsxDEV(cu,{className:N.progress,children:v.map((R,I)=>{const A=R.id??`${d}-${I}`,V=I<c,q=I===c;return t.jsxDEV(pu,{className:N.progressItem,$bg:V?S:D,children:q?t.jsxDEV(mu,{ref:P,$color:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesProgress/StoriesProgress.tsx",lineNumber:74,columnNumber:26},void 0):null},A,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesProgress/StoriesProgress.tsx",lineNumber:69,columnNumber:11},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesProgress/StoriesProgress.tsx",lineNumber:62,columnNumber:5},void 0)};try{ae.displayName="StoriesProgress",ae.__docgenInfo={description:"",displayName:"StoriesProgress",props:{isReady:{defaultValue:null,description:"Ассет текущего сегмента загружен — иначе таймер стоит (крутится спиннер).",name:"isReady",required:!0,type:{name:"boolean"}}}}}catch{}const fu=O`
  from {
    opacity: 0;
    transform: scale(0.92) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,gu=O`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.96) translateY(6px);
  }
`,Eu=g.div`
  position: relative;
  /* Высота ведущая (ограничена вьюпортом в StyledStage), ширина следует за ней
     по фиксированной пропорции — компонент ужимается пропорционально при
     уменьшении высоты вьюпорта. */
  height: 100%;
  width: auto;
  aspect-ratio: ${E.bannerMaxWidth} /
    ${E.bannerMaxHeight};
  max-width: calc(
    100vw - ${E.stageWidth-E.bannerMaxWidth}px
  );
  border-radius: ${E.bannerRadius}px;
  overflow: hidden;
  view-transition-name: ${z};
  animation: ${({$closing:e})=>e?gu:fu}
    ${({$closing:e})=>e?"0.2s":"0.24s"} ease forwards;
`,xu=g.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: none;
`,Su=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${E.bannerPadding}px;
  pointer-events: none;
`,vu=g.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${E.bannerPadding}px;
  pointer-events: none;
`,yu=g.div`
  pointer-events: auto;
`,le=({closing:e,onAnimationEnd:u})=>{const{store:n,controller:i,groups:o,pauseHoldDelay:f,tapPrevZone:d,loadingDelay:c,onError:b,renderError:h}=X(),{groupIndex:a,slideIndex:p,isOpen:l}=U(n),D=o[a],S=D==null?void 0:D.slides[p],{status:w,reload:v}=Ve(S==null?void 0:S.src,c),P=ou({controller:i,pauseHoldDelay:f,tapPrevZone:d,isOpen:l}),F=r.useRef();r.useEffect(()=>{if(w!=="error"||!S)return;const V=`${a}-${p}`;F.current!==V&&(F.current=V,b==null||b({groupIndex:a,slideIndex:p,slide:S,retry:v}))},[w,a,p,S,b,v]);const _=V=>V.stopPropagation(),R=V=>{V.target===V.currentTarget&&u()};if(!S)return null;const{footer:I}=S,A=h?h({groupIndex:a,slideIndex:p,slide:S,retry:v}):t.jsxDEV(qe,{size:"s",variant:"loading",title:"Не удалось загрузить",centered:!0,buttons:[{type:"link",props:{text:"Обновить",view:"accent",onClick:v}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:85,columnNumber:5},void 0);return t.jsxDEV(Eu,{className:N.banner,$closing:e,onClick:_,onAnimationEnd:R,children:[t.jsxDEV(se,{slide:S,status:w,errorNode:A},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:110,columnNumber:7},void 0),w==="error"?null:t.jsxDEV(xu,{...P},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:112,columnNumber:36},void 0),t.jsxDEV(Su,{children:t.jsxDEV(ae,{isReady:w==="loaded"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:115,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:114,columnNumber:7},void 0),I?t.jsxDEV(vu,{children:t.jsxDEV(yu,{className:N.action,children:I},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:120,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:119,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:104,columnNumber:5},void 0)};try{le.displayName="StoriesBanner",le.__docgenInfo={description:"",displayName:"StoriesBanner",props:{closing:{defaultValue:null,description:"Идёт анимация закрытия (проигрывается popOut).",name:"closing",required:!0,type:{name:"boolean"}},onAnimationEnd:{defaultValue:null,description:"Анимация баннера завершилась (вьюер размонтирует после закрытия).",name:"onAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}const bu=O`
  from { opacity: 0; }
  to { opacity: 1; }
`,wu=O`
  from { opacity: 1; }
  to { opacity: 0; }
`,he=e=>Se`
  animation: ${e?wu:bu} ${e?"0.2s":"0.24s"} ease
    forwards;
`,hu=g.div`
  position: fixed;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
`,Du=g.div`
  position: absolute;
  inset: 0;
  background: ${({$color:e})=>e};
  opacity: ${({$closing:e})=>e?0:1};
  transition: opacity 0.24s ease;
`,Nu=g.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* Ширина подстраивается под баннер (он ведётся высотой), чтобы стрелки
     оставались вплотную к нему при уменьшении вьюпорта. По бокам — просветы
     под стрелки: (stageWidth - bannerMaxWidth) / 2. */
  width: fit-content;
  max-width: min(${E.stageWidth}px, 100vw);
  height: min(${E.bannerMaxHeight}px, calc(100vh - 32px));
  padding: 0 ${(E.stageWidth-E.bannerMaxWidth)/2}px;
  outline: none;
`,Ee=g.div`
  position: absolute;
  top: 50%;
  ${({$side:e})=>e==="prev"?"left: 0;":"right: 0;"}
  z-index: 3;
  transform: translateY(-50%);
  ${({$closing:e})=>he(e)}
`,Cu=g.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  ${({$closing:e})=>he(e)}
`,ku=O`
  from { transform: translateX(24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,Vu=O`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-24px); opacity: 0; }
`,Bu=O`
  from { transform: translateX(-24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,Fu=O`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(24px); opacity: 0; }
`,Iu=Be`
  ::view-transition-old(${z}),
  ::view-transition-new(${z}) {
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }
  html[data-df-stories-dir='next']::view-transition-new(${z}) {
    animation-name: ${ku};
  }
  html[data-df-stories-dir='next']::view-transition-old(${z}) {
    animation-name: ${Vu};
  }
  html[data-df-stories-dir='prev']::view-transition-new(${z}) {
    animation-name: ${Bu};
  }
  html[data-df-stories-dir='prev']::view-transition-old(${z}) {
    animation-name: ${Fu};
  }
`,Au=()=>{var Q;const{store:e,controller:u,groups:n,overlay:i,overlayColor:o,zIndex:f,groupTransition:d,arrows:c,hideDisabledArrows:b,preloadGroup:h}=X(),{isOpen:a,groupIndex:p,slideIndex:l}=U(e),[D,S]=r.useState(a),w=r.useRef(null);r.useEffect(()=>{a&&S(!0)},[a]),r.useEffect(()=>{var $;a&&(($=w.current)==null||$.focus())},[a]),r.useEffect(()=>{a&&h(p)},[a,p,h]);const v=D&&!a,P=r.useCallback(()=>{v&&S(!1)},[v]);if(!D||typeof document>"u")return null;const F=((Q=n[p])==null?void 0:Q.slides.length)??0,_=p>0||l>0,R=l+1<F||p+1<n.length,I=n.reduce(($,G)=>$+G.slides.length,0),A=c==="always"||c==="auto"&&I>1,V=A&&(_||!b),q=A&&(R||!b),j=$=>$.stopPropagation(),J=t.jsxDEV(hu,{className:N.viewer,$zIndex:f,onClick:()=>u.close(),children:[i?t.jsxDEV(Du,{className:N.overlay,$color:o,$closing:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:95,columnNumber:9},void 0):null,d==="slide"?t.jsxDEV(Iu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:102,columnNumber:38},void 0):null,t.jsxDEV(Nu,{ref:w,tabIndex:-1,className:N.stage,children:[V?t.jsxDEV(Ee,{className:N.arrowPrev,$side:"prev",$closing:v,onClick:j,children:t.jsxDEV(ne,{size:"s",view:"white",pin:"circle-circle","aria-label":"Назад",disabled:!_,onClick:()=>u.prev(),children:t.jsxDEV(ze,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:124,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:116,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:110,columnNumber:11},void 0):null,t.jsxDEV(le,{closing:v,onAnimationEnd:P},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:129,columnNumber:9},void 0),q?t.jsxDEV(Ee,{className:N.arrowNext,$side:"next",$closing:v,onClick:j,children:t.jsxDEV(ne,{size:"s",view:"white",pin:"circle-circle","aria-label":"Вперёд",disabled:!R,onClick:()=>u.next(),children:t.jsxDEV(Ge,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:146,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:132,columnNumber:11},void 0):null,t.jsxDEV(Cu,{className:N.close,$closing:v,onClick:j,children:t.jsxDEV(ne,{size:"s",view:"white",pin:"circle-circle","aria-label":"Закрыть",onClick:()=>u.close(),children:t.jsxDEV(Le,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:163,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:156,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:151,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:104,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:89,columnNumber:5},void 0);return xe.createPortal(J,document.body)},_u=Object.freeze(Object.defineProperty({__proto__:null,StoriesViewer:Au},Symbol.toStringTag,{value:"Module"}));export{K as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
