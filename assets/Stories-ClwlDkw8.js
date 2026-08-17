import{r,d as u}from"./react-D2T61mpp.js";import{bp as we,bq as xe}from"./vendor-B0ELcGbr.js";import{y as re,o as De,z as Ne}from"./utils-C6gzzOja.js";import{H as E,C as Se,U as O,W as ke}from"./styled-components-C8vPRKee.js";import{T as Ce}from"./AnalyticalWidget-gPS8VfPH.js";import{n as Be,cE as Ve,x as Fe,y as Ie,M as Ae,cF as _e,at as $e,au as Pe}from"./@salutejs/sdds-themes-DMMPng_c.js";import{S as Re,I as ne}from"./@salutejs/sdds-finai-CPdoK_07.js";import{E as Te}from"./EmptyState-D_woUcid.js";import{hb as je,he as Oe,f6 as qe}from"./@salutejs/plasma-icons-Dn1uY4zn.js";const ve=r.createContext(null),te=ve.Provider,U=()=>{const e=r.useContext(ve);if(!e)throw new Error("Компоненты Stories должны использоваться внутри <Stories>.");return e};try{te.displayName="StoriesProvider",te.__docgenInfo={description:"",displayName:"StoriesProvider",props:{}}}catch{}const Y=e=>r.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot),k={root:"df-stories",preview:"df-stories-preview",previewRing:"df-stories-preview__ring",previewBody:"df-stories-preview__body",previewTitle:"df-stories-preview__title",viewer:"df-stories-viewer",overlay:"df-stories-viewer__overlay",stage:"df-stories-viewer__stage",banner:"df-stories-banner",progress:"df-stories-progress",progressItem:"df-stories-progress__item",content:"df-stories-content",action:"df-stories-banner__action",arrowPrev:"df-stories-viewer__arrow-prev",arrowNext:"df-stories-viewer__arrow-next",close:"df-stories-viewer__close"},ze="linear-gradient(135deg, #08c6c9 0%, #99b0fe 100%)",Ge="#ecf6fc",z="df-stories-banner",X={duration:5e3,pauseHoldDelay:200,tapPrevZone:1/3,overlayColor:"#060a0c47",zIndex:9e3},x={circle:98,ring:2,titleGap:6,rectRadiusOuter:12,rectRadiusBody:8,bannerMaxWidth:430,bannerMaxHeight:900,bannerRadius:16,bannerPadding:28,stageWidth:558,progressHeight:4,progressRadius:2,progressFillRadius:6,progressGap:4},Le="StoriesPreview",ie={ring:()=>ze,fallback:()=>Ge,boxShadow:()=>Ve},de=(e,n)=>e==="circle"?"50%":`${{outer:x.rectRadiusOuter,body:x.rectRadiusBody}[n]}px`,He=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({$width:e})=>e}px;
`,We=E.button`
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
    outline: 2px solid ${Be};
    outline-offset: 2px;
  }
`,Me=E.div`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: ${x.ring}px;
  background: ${ie.ring};
  border-radius: ${({$shape:e})=>de(e,"outer")};
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`,Xe=E.div`
  position: absolute;
  inset: ${({$viewed:e})=>e?0:x.ring*2}px;
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
  border-radius: ${({$shape:e,$viewed:n})=>de(e,n?"outer":"body")};
`,Ue=E.div`
  margin-top: ${x.titleGap}px;
  width: 100%;
  text-align: ${({$align:e})=>e};

  /* Текстовый блок на всю ширину — иначе text-align (влево/вправо) не имеет пространства. */
  & > * {
    width: 100%;
  }
`,K=e=>{var T;const{slides:n,shape:t="circle",title:i,titleProps:o,image:f,viewed:d=!1,size:c=x.circle,width:b,height:w,renderTrigger:a,className:p,__index:l=0}=e,{store:D,controller:S,preloadOnHover:h}=U(),v=Y(D),P=v.isOpen&&v.groupIndex===l,F=t==="rect"?b??c:c,_=t==="rect"?w??c:c,R=()=>S.open(l),I=()=>{h&&n[0]&&re(n[0].src)},A=()=>a?a({index:l,viewed:d,isActive:P}):u.jsxDEV(u.Fragment,{children:[d?null:u.jsxDEV(Me,{className:k.previewRing,$shape:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:66,columnNumber:11},void 0),u.jsxDEV(Xe,{className:k.previewBody,$shape:t,$viewed:d,$image:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:71,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:64,columnNumber:7},void 0),B={variant:"BodyXXS",bold:!0,lines:2,tooltipText:i,color:Fe,...o,children:i},q=((T=o==null?void 0:o.style)==null?void 0:T.textAlign)??"center";return u.jsxDEV(He,{className:[k.preview,p].filter(Boolean).join(" "),"data-component":Le,$width:F,children:[u.jsxDEV(We,{type:"button","aria-label":i,$width:F,$height:_,$shape:t,onClick:R,onMouseEnter:I,children:A()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:101,columnNumber:7},void 0),i?u.jsxDEV(Ue,{className:k.previewTitle,style:{maxWidth:F},$align:q,children:u.jsxDEV(Ce,{...B},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:119,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:114,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesPreview/StoriesPreview.tsx",lineNumber:94,columnNumber:5},void 0)};try{K.displayName="StoriesPreview",K.__docgenInfo={description:"",displayName:"StoriesPreview",props:{__index:{defaultValue:null,description:"@internal Индекс группы, инжектится корнем `Stories` при клонировании.\nСнаружи задавать не нужно.",name:"__index",required:!1,type:{name:"number"}},slides:{defaultValue:null,description:"Сегменты группы: показываются по очереди после клика на триггер.",name:"slides",required:!0,type:{name:"StorySlide[]"}},shape:{defaultValue:null,description:"Форма триггера. По умолчанию `circle`.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rect"'}]}},title:{defaultValue:null,description:"Подпись под триггером (по умолчанию до 2 строк, ellipsis с авто-тултипом).",name:"title",required:!1,type:{name:"string"}},titleProps:{defaultValue:null,description:"Пропсы подписи (TypographyWithAutoTooltip) поверх дефолтов; выравнивание — через `style.textAlign`.",name:"titleProps",required:!1,type:{name:"TypographyWithAutoTooltipProps<TypographyVariant>"}},image:{defaultValue:null,description:"Картинка-превью внутри триггера. Если не задана — заливка-заглушка.",name:"image",required:!1,type:{name:"string"}},viewed:{defaultValue:null,description:"Просмотрена ли группа. Контролируется снаружи: по колбэкам гасите обводку.",name:"viewed",required:!1,type:{name:"boolean"}},defaultDuration:{defaultValue:null,description:"Дефолтная длительность сегментов этой группы, мс.",name:"defaultDuration",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Размер круглого триггера (сторона), px. По умолчанию 98.",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Ширина прямоугольного триггера, px. По умолчанию равна `size`.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Высота прямоугольного триггера, px. По умолчанию равна `size`.",name:"height",required:!1,type:{name:"number"}},renderTrigger:{defaultValue:null,description:"Полная замена визуала триггера. Отменяет встроенную отрисовку.",name:"renderTrigger",required:!1,type:{name:"(state: StoriesTriggerState) => ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const oe=r.lazy(()=>we(()=>Promise.resolve().then(()=>Iu),void 0).then(e=>({default:e.StoriesViewer})));try{oe.displayName="StoriesViewerLazy",oe.__docgenInfo={description:"",displayName:"StoriesViewerLazy",props:{}}}catch{}const Ye=e=>{const n=r.useRef(e);return n.current=e,r.useCallback(t=>{const i=n.current[t];if(!i)return;i.slides.forEach(f=>re(f.src));const o=n.current[t+1];o!=null&&o.slides[0]&&re(o.slides[0].src)},[])},Ze={isOpen:!1,groupIndex:0,slideIndex:0,isPlaying:!0,direction:"next"},Ke=e=>{let n={...Ze,...e};const t=new Set;return{getSnapshot:()=>n,subscribe:i=>(t.add(i),()=>{t.delete(i)}),setState:i=>{Object.keys(i).some(d=>n[d]!==i[d])&&(n={...n,...i},t.forEach(d=>d()))}}},Je=()=>typeof document<"u"&&typeof document.startViewTransition=="function",Qe=(e,n)=>{const{direction:t="next",enabled:i=!0}=n??{};if(!i||!Je()){e();return}const o=document;o.documentElement.dataset.dfStoriesDir=t,o.startViewTransition(()=>xe.flushSync(e)).finished.finally(()=>{delete o.documentElement.dataset.dfStoriesDir})},eu=E.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`,uu=e=>r.isValidElement(e)&&e.type===K,nu=()=>{const{store:e}=U(),{isOpen:n}=Y(e),[t,i]=r.useState(n);return r.useEffect(()=>{n&&i(!0)},[n]),t?u.jsxDEV(r.Suspense,{fallback:null,children:u.jsxDEV(oe,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:65,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:64,columnNumber:5},void 0):null},ru=(e,n)=>{const{children:t,defaultDuration:i=X.duration,open:o,defaultOpen:f,activeGroupIndex:d,activeSlideIndex:c,onOpenChange:b,onGroupChange:w,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:D,onError:S,renderError:h,overlay:v=!0,overlayColor:P=X.overlayColor,zIndex:F=X.zIndex,preloadOnHover:_=!0,loadingDelay:R=0,pauseHoldDelay:I=X.pauseHoldDelay,groupTransition:A="slide",arrows:B="auto",hideDisabledArrows:q=!0,mode:T,className:Q}=e,G=r.Children.toArray(t).filter(uu),$=G.map(N=>({slides:N.props.slides??[],defaultDuration:N.props.defaultDuration})),L=r.useRef();L.current||(L.current=Ke({isOpen:f??!1}));const m=L.current,Z=r.useRef($);Z.current=$;const ce=r.useRef({groupTransition:A});ce.current={groupTransition:A};const H=r.useRef({onOpenChange:b,onGroupChange:w,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:D});H.current={onOpenChange:b,onGroupChange:w,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:D};const ee=r.useRef();if(!ee.current){const N=(s,C)=>m.setState({slideIndex:s,direction:C,isPlaying:!0}),g=(s,C,V)=>Qe(()=>m.setState({groupIndex:s,slideIndex:C,direction:V,isPlaying:!0}),{direction:V,enabled:ce.current.groupTransition!=="none"}),y=()=>{var s,C;(C=(s=H.current).onComplete)==null||C.call(s),m.setState({isOpen:!1,isPlaying:!1})};ee.current={open:(s,C)=>{const V=m.getSnapshot();m.setState({isOpen:!0,groupIndex:s??V.groupIndex,slideIndex:C??0,isPlaying:!0,direction:"next"})},close:()=>m.setState({isOpen:!1,isPlaying:!1}),next:()=>{var V,j,W,M,me;const s=m.getSnapshot(),C=((V=Z.current[s.groupIndex])==null?void 0:V.slides.length)??0;s.slideIndex+1<C?N(s.slideIndex+1,"next"):s.groupIndex+1<Z.current.length?((W=(j=H.current).onGroupComplete)==null||W.call(j,s.groupIndex),g(s.groupIndex+1,0,"next")):((me=(M=H.current).onGroupComplete)==null||me.call(M,s.groupIndex),y())},prev:()=>{const s=m.getSnapshot();s.slideIndex>0?N(s.slideIndex-1,"prev"):s.groupIndex>0&&g(s.groupIndex-1,0,"prev")},nextGroup:()=>{const s=m.getSnapshot();s.groupIndex+1<Z.current.length&&g(s.groupIndex+1,0,"next")},prevGroup:()=>{const s=m.getSnapshot();s.groupIndex>0&&g(s.groupIndex-1,0,"prev")},goTo:(s,C)=>{const V=m.getSnapshot(),j=s<V.groupIndex?"prev":"next";s===V.groupIndex?N(C??0,j):g(s,C??0,j)},pause:()=>m.setState({isPlaying:!1}),resume:()=>m.setState({isPlaying:!0})}}const ue=ee.current,be=Ye($),pe=r.useRef(m.getSnapshot());r.useEffect(()=>m.subscribe(()=>{var s,C,V,j,W,M;const N=pe.current,g=m.getSnapshot();pe.current=g;const y=H.current;if(N.isOpen!==g.isOpen){(s=y.onOpenChange)==null||s.call(y,g.isOpen,{groupIndex:g.groupIndex}),g.isOpen?((C=y.onGroupChange)==null||C.call(y,g.groupIndex),(V=y.onSlideChange)==null||V.call(y,g.groupIndex,g.slideIndex)):(j=y.onClose)==null||j.call(y);return}g.isOpen&&(N.groupIndex!==g.groupIndex&&((W=y.onGroupChange)==null||W.call(y,g.groupIndex)),(N.groupIndex!==g.groupIndex||N.slideIndex!==g.slideIndex)&&((M=y.onSlideChange)==null||M.call(y,g.groupIndex,g.slideIndex)))}),[m]),r.useEffect(()=>{o!==void 0&&m.setState({isOpen:o})},[o,m]),r.useEffect(()=>{d!==void 0&&m.setState({groupIndex:d})},[d,m]),r.useEffect(()=>{c!==void 0&&m.setState({slideIndex:c})},[c,m]),r.useImperativeHandle(n,()=>({...ue,getState:()=>{const N=m.getSnapshot();return{isOpen:N.isOpen,groupIndex:N.groupIndex,slideIndex:N.slideIndex,isPlaying:N.isPlaying}}}),[ue,m]);const he={store:m,controller:ue,groups:$,defaultDuration:i,pauseHoldDelay:I,tapPrevZone:X.tapPrevZone,preloadGroup:be,preloadOnHover:_,loadingDelay:R,overlay:v,overlayColor:P,zIndex:F,groupTransition:A,arrows:B,hideDisabledArrows:q,mode:T,onError:S,renderError:h};return u.jsxDEV(te,{value:he,children:[u.jsxDEV(eu,{className:[k.root,Q].filter(Boolean).join(" "),children:G.map((N,g)=>r.cloneElement(N,{__index:g}))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:314,columnNumber:7},void 0),u.jsxDEV(nu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:323,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/Stories.tsx",lineNumber:313,columnNumber:5},void 0)},J=r.forwardRef(ru);J.Preview=K;J.displayName="Stories";try{J.displayName="Stories",J.__docgenInfo={description:"",displayName:"Stories",props:{children:{defaultValue:null,description:"Триггеры-превью: список `Stories.Preview`.",name:"children",required:!0,type:{name:"ReactNode"}},defaultDuration:{defaultValue:null,description:"Длительность сегмента по умолчанию, мс.",name:"defaultDuration",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"Controlled-открытие вьюера.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Начальное открытие для uncontrolled-режима.",name:"defaultOpen",required:!1,type:{name:"boolean"}},activeGroupIndex:{defaultValue:null,description:"Controlled-индекс активной группы.",name:"activeGroupIndex",required:!1,type:{name:"number"}},activeSlideIndex:{defaultValue:null,description:"Controlled-индекс активного сегмента.",name:"activeSlideIndex",required:!1,type:{name:"number"}},onOpenChange:{defaultValue:null,description:"Изменилось открытие/закрытие вьюера.",name:"onOpenChange",required:!1,type:{name:"(open: boolean, meta: { groupIndex: number; }) => void"}},onGroupChange:{defaultValue:null,description:"Сменилась активная группа.",name:"onGroupChange",required:!1,type:{name:"(groupIndex: number) => void"}},onSlideChange:{defaultValue:null,description:"Сменился активный сегмент (под-стори).",name:"onSlideChange",required:!1,type:{name:"(groupIndex: number, slideIndex: number) => void"}},onComplete:{defaultValue:null,description:"Досмотрены все группы (перед автозакрытием).",name:"onComplete",required:!1,type:{name:"() => void"}},onGroupComplete:{defaultValue:null,description:"Группа полностью досмотрена — удобно гасить индикатор «просмотрено».",name:"onGroupComplete",required:!1,type:{name:"(groupIndex: number) => void"}},onClose:{defaultValue:null,description:"Вьюер закрылся (крестик / Esc / клик по оверлею / автозакрытие).",name:"onClose",required:!1,type:{name:"() => void"}},onError:{defaultValue:null,description:"Ошибка загрузки ассета сегмента.",name:"onError",required:!1,type:{name:"(ctx: StoryErrorContext) => void"}},renderError:{defaultValue:null,description:"Свой контент при ошибке загрузки ассета (по умолчанию — встроенный EmptyState).",name:"renderError",required:!1,type:{name:"(ctx: StoryErrorContext) => ReactNode"}},overlay:{defaultValue:null,description:"Показывать затемнённый оверлей. По умолчанию `true`.",name:"overlay",required:!1,type:{name:"boolean"}},overlayColor:{defaultValue:null,description:"Цвет оверлея.",name:"overlayColor",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"z-index оверлея.",name:"zIndex",required:!1,type:{name:"number"}},preloadOnHover:{defaultValue:null,description:"Предзагружать первый ассет группы при наведении на её триггер. По умолчанию `true`.",name:"preloadOnHover",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:null,description:"Задержка показа ассета, мс (для демо/тестов загрузки).",name:"loadingDelay",required:!1,type:{name:"number"}},pauseHoldDelay:{defaultValue:null,description:"Порог удержания указателя для паузы, мс. По умолчанию 200.",name:"pauseHoldDelay",required:!1,type:{name:"number"}},groupTransition:{defaultValue:null,description:"Пресет анимации перехода между группами. По умолчанию `slide`.",name:"groupTransition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"slide"'},{value:'"fade"'}]}},arrows:{defaultValue:null,description:"Режим видимости стрелок навигации. По умолчанию `auto` (скрыть при единственном сегменте).",name:"arrows",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"always"'},{value:'"never"'}]}},hideDisabledArrows:{defaultValue:null,description:"Прятать стрелку, когда в её сторону листать некуда (крайний сегмент),\nвместо показа в disabled-состоянии. По умолчанию `true`.",name:"hideDisabledArrows",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"Явный режим темы. По умолчанию определяется автоматически.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const tu=({controller:e,pauseHoldDelay:n,tapPrevZone:t,isOpen:i})=>{const o=r.useRef(),f=r.useRef(!1),d=r.useRef("next"),c=()=>{o.current&&(clearTimeout(o.current),o.current=void 0)},b=p=>{const l=p.currentTarget.getBoundingClientRect(),D=l.width>0?(p.clientX-l.left)/l.width:1;d.current=D<t?"prev":"next",f.current=!1,c(),o.current=setTimeout(()=>{f.current=!0,e.pause()},n)},w=()=>{if(c(),f.current){f.current=!1,e.resume();return}d.current==="prev"?e.prev():e.next()},a=()=>{c(),f.current&&(f.current=!1,e.resume())};return r.useEffect(()=>{if(!i)return;const p=l=>{l.key==="ArrowLeft"?(l.preventDefault(),e.prev()):l.key==="ArrowRight"?(l.preventDefault(),e.next()):l.key==="Escape"&&(l.preventDefault(),e.close())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[i,e]),{onPointerDown:b,onPointerUp:w,onPointerLeave:a,onPointerCancel:a}},fe=E.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${Ie};
`,iu=E.img`
  width: 100%;
  height: 100%;
  object-fit: ${({$objectFit:e})=>e};
  opacity: ${({$loaded:e})=>e?1:0};
  transition: opacity 0.2s ease;
  user-select: none;
`,ou=E.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,su=E.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${x.bannerPadding}px;
`,se=({slide:e,status:n,errorNode:t})=>{const i=e.objectFit??"cover",o=n==="loaded";return n==="error"?u.jsxDEV(fe,{className:k.content,children:u.jsxDEV(su,{children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:37,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:36,columnNumber:7},void 0):u.jsxDEV(fe,{className:k.content,children:[u.jsxDEV(iu,{src:e.src,alt:"",draggable:!1,$objectFit:i,$loaded:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:44,columnNumber:7},void 0),n==="loading"?u.jsxDEV(ou,{children:u.jsxDEV(Re,{view:"default",size:"l"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:53,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:52,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesContent/StoriesContent.tsx",lineNumber:43,columnNumber:5},void 0)};try{se.displayName="StoriesContent",se.__docgenInfo={description:"Контент баннера: ассет (картинка/GIF) + спиннер на время загрузки + error-state\nпри ошибке. Video пока не реализовано, но `slide.type` заложен в модель под будущее.",displayName:"StoriesContent",props:{slide:{defaultValue:null,description:"",name:"slide",required:!0,type:{name:"StorySlide"}},status:{defaultValue:null,description:"Статус загрузки ассета текущего сегмента (владелец — StoriesBanner).",name:"status",required:!0,type:{name:"ImageLoaderStatus"}},errorNode:{defaultValue:null,description:"Error-state при ошибке загрузки (готовит StoriesBanner: renderError или дефолтный EmptyState).",name:"errorNode",required:!1,type:{name:"ReactNode"}}}}}catch{}const ge=(e,n)=>{e&&(e.style.transform=`scaleX(${n})`)},au=({fillRef:e,active:n,duration:t,isPlaying:i,isReady:o,resetKey:f,onComplete:d})=>{const c=r.useRef(0),b=r.useRef(d);b.current=d,r.useEffect(()=>{c.current=0,ge(e.current,0)},[f,e]),r.useEffect(()=>{if(!n||!i||!o||t<=0)return;let w=0,a=performance.now();const p=l=>{c.current+=l-a,a=l;const D=Math.min(1,c.current/t);if(ge(e.current,D),D>=1){b.current();return}w=requestAnimationFrame(p)};return w=requestAnimationFrame(p),()=>cancelAnimationFrame(w)},[n,i,o,t,f,e])},lu=E.div`
  display: flex;
  gap: ${x.progressGap}px;
  width: 100%;
`,du=E.div`
  position: relative;
  flex: 1 1 0;
  height: ${x.progressHeight}px;
  border-radius: ${x.progressRadius}px;
  overflow: hidden;
  background: ${({$bg:e})=>e};
`,cu=E.span`
  position: absolute;
  inset: 0;
  border-radius: ${x.progressFillRadius}px;
  background: ${({$color:e})=>e};
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
`,ae=({isReady:e})=>{var _;const{store:n,controller:t,groups:i,defaultDuration:o,mode:f}=U(),{groupIndex:d,slideIndex:c,isPlaying:b,isOpen:w}=Y(n),a=De(),l=(f??a)==="dark",D=l?$e:Pe,S=l?Ae:_e,h=i[d],v=(h==null?void 0:h.slides)??[],P=r.useRef(null),F=((_=v[c])==null?void 0:_.duration)??(h==null?void 0:h.defaultDuration)??o;return au({fillRef:P,active:w,duration:F,isPlaying:b,isReady:e,resetKey:`${d}-${c}`,onComplete:t.next}),u.jsxDEV(lu,{className:k.progress,children:v.map((R,I)=>{const A=R.id??`${d}-${I}`,B=I<c,q=I===c;return u.jsxDEV(du,{className:k.progressItem,$bg:B?S:D,children:q?u.jsxDEV(cu,{ref:P,$color:S},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesProgress/StoriesProgress.tsx",lineNumber:74,columnNumber:26},void 0):null},A,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesProgress/StoriesProgress.tsx",lineNumber:69,columnNumber:11},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesProgress/StoriesProgress.tsx",lineNumber:62,columnNumber:5},void 0)};try{ae.displayName="StoriesProgress",ae.__docgenInfo={description:"",displayName:"StoriesProgress",props:{isReady:{defaultValue:null,description:"Ассет текущего сегмента загружен — иначе таймер стоит (крутится спиннер).",name:"isReady",required:!0,type:{name:"boolean"}}}}}catch{}const pu=O`
  from {
    opacity: 0;
    transform: scale(0.92) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,mu=O`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.96) translateY(6px);
  }
`,fu=E.div`
  position: relative;
  /* Высота ведущая (ограничена вьюпортом в StyledStage), ширина следует за ней
     по фиксированной пропорции — компонент ужимается пропорционально при
     уменьшении высоты вьюпорта. */
  height: 100%;
  width: auto;
  aspect-ratio: ${x.bannerMaxWidth} /
    ${x.bannerMaxHeight};
  max-width: calc(
    100vw - ${x.stageWidth-x.bannerMaxWidth}px
  );
  border-radius: ${x.bannerRadius}px;
  overflow: hidden;
  view-transition-name: ${z};
  animation: ${({$closing:e})=>e?mu:pu}
    ${({$closing:e})=>e?"0.2s":"0.24s"} ease forwards;
`,gu=E.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: none;
`,Eu=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${x.bannerPadding}px;
  pointer-events: none;
`,xu=E.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${x.bannerPadding}px;
  pointer-events: none;
`,Su=E.div`
  pointer-events: auto;
`,le=({closing:e,onAnimationEnd:n})=>{const{store:t,controller:i,groups:o,pauseHoldDelay:f,tapPrevZone:d,loadingDelay:c,onError:b,renderError:w}=U(),{groupIndex:a,slideIndex:p,isOpen:l}=Y(t),D=o[a],S=D==null?void 0:D.slides[p],{status:h,reload:v}=Ne(S==null?void 0:S.src,c),P=tu({controller:i,pauseHoldDelay:f,tapPrevZone:d,isOpen:l}),F=r.useRef();r.useEffect(()=>{if(h!=="error"||!S)return;const B=`${a}-${p}`;F.current!==B&&(F.current=B,b==null||b({groupIndex:a,slideIndex:p,slide:S,retry:v}))},[h,a,p,S,b,v]);const _=B=>B.stopPropagation(),R=B=>{B.target===B.currentTarget&&n()};if(!S)return null;const{footer:I}=S,A=w?w({groupIndex:a,slideIndex:p,slide:S,retry:v}):u.jsxDEV(Te,{size:"s",variant:"loading",title:"Не удалось загрузить",centered:!0,buttons:[{type:"link",props:{text:"Обновить",view:"accent",onClick:v}}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:85,columnNumber:5},void 0);return u.jsxDEV(fu,{className:k.banner,$closing:e,onClick:_,onAnimationEnd:R,children:[u.jsxDEV(se,{slide:S,status:h,errorNode:A},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:110,columnNumber:7},void 0),h==="error"?null:u.jsxDEV(gu,{...P},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:112,columnNumber:36},void 0),u.jsxDEV(Eu,{children:u.jsxDEV(ae,{isReady:h==="loaded"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:115,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:114,columnNumber:7},void 0),I?u.jsxDEV(xu,{children:u.jsxDEV(Su,{className:k.action,children:I},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:120,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:119,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesBanner/StoriesBanner.tsx",lineNumber:104,columnNumber:5},void 0)};try{le.displayName="StoriesBanner",le.__docgenInfo={description:"",displayName:"StoriesBanner",props:{closing:{defaultValue:null,description:"Идёт анимация закрытия (проигрывается popOut).",name:"closing",required:!0,type:{name:"boolean"}},onAnimationEnd:{defaultValue:null,description:"Анимация баннера завершилась (вьюер размонтирует после закрытия).",name:"onAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}const vu=O`
  from { opacity: 0; }
  to { opacity: 1; }
`,yu=O`
  from { opacity: 1; }
  to { opacity: 0; }
`,ye=e=>Se`
  animation: ${e?yu:vu} ${e?"0.2s":"0.24s"} ease
    forwards;
`,bu=E.div`
  position: fixed;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
`,hu=E.div`
  position: absolute;
  inset: 0;
  background: ${({$color:e})=>e};
  opacity: ${({$closing:e})=>e?0:1};
  transition: opacity 0.24s ease;
`,wu=E.div`
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
  max-width: min(${x.stageWidth}px, 100vw);
  height: min(${x.bannerMaxHeight}px, calc(100vh - 32px));
  padding: 0 ${(x.stageWidth-x.bannerMaxWidth)/2}px;
  outline: none;
`,Ee=E.div`
  position: absolute;
  top: 50%;
  ${({$side:e})=>e==="prev"?"left: 0;":"right: 0;"}
  z-index: 3;
  transform: translateY(-50%);
  ${({$closing:e})=>ye(e)}
`,Du=E.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  ${({$closing:e})=>ye(e)}
`,Nu=O`
  from { transform: translateX(24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,ku=O`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-24px); opacity: 0; }
`,Cu=O`
  from { transform: translateX(-24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,Bu=O`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(24px); opacity: 0; }
`,Vu=ke`
  ::view-transition-old(${z}),
  ::view-transition-new(${z}) {
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }
  html[data-df-stories-dir='next']::view-transition-new(${z}) {
    animation-name: ${Nu};
  }
  html[data-df-stories-dir='next']::view-transition-old(${z}) {
    animation-name: ${ku};
  }
  html[data-df-stories-dir='prev']::view-transition-new(${z}) {
    animation-name: ${Cu};
  }
  html[data-df-stories-dir='prev']::view-transition-old(${z}) {
    animation-name: ${Bu};
  }
`,Fu=()=>{var G;const{store:e,controller:n,groups:t,overlay:i,overlayColor:o,zIndex:f,groupTransition:d,arrows:c,hideDisabledArrows:b,preloadGroup:w}=U(),{isOpen:a,groupIndex:p,slideIndex:l}=Y(e),[D,S]=r.useState(a),h=r.useRef(null);r.useEffect(()=>{a&&S(!0)},[a]),r.useEffect(()=>{var $;a&&(($=h.current)==null||$.focus())},[a]),r.useEffect(()=>{a&&w(p)},[a,p,w]);const v=D&&!a,P=r.useCallback(()=>{v&&S(!1)},[v]);if(!D||typeof document>"u")return null;const F=((G=t[p])==null?void 0:G.slides.length)??0,_=p>0||l>0,R=l+1<F||p+1<t.length,I=t.reduce(($,L)=>$+L.slides.length,0),A=c==="always"||c==="auto"&&I>1,B=A&&(_||!b),q=A&&(R||!b),T=$=>$.stopPropagation(),Q=u.jsxDEV(bu,{className:k.viewer,$zIndex:f,onClick:()=>n.close(),children:[i?u.jsxDEV(hu,{className:k.overlay,$color:o,$closing:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:95,columnNumber:9},void 0):null,d==="slide"?u.jsxDEV(Vu,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:102,columnNumber:38},void 0):null,u.jsxDEV(wu,{ref:h,tabIndex:-1,className:k.stage,children:[B?u.jsxDEV(Ee,{className:k.arrowPrev,$side:"prev",$closing:v,onClick:T,children:u.jsxDEV(ne,{size:"s",view:"white",pin:"circle-circle","aria-label":"Назад",disabled:!_,onClick:()=>n.prev(),children:u.jsxDEV(je,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:124,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:116,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:110,columnNumber:11},void 0):null,u.jsxDEV(le,{closing:v,onAnimationEnd:P},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:129,columnNumber:9},void 0),q?u.jsxDEV(Ee,{className:k.arrowNext,$side:"next",$closing:v,onClick:T,children:u.jsxDEV(ne,{size:"s",view:"white",pin:"circle-circle","aria-label":"Вперёд",disabled:!R,onClick:()=>n.next(),children:u.jsxDEV(Oe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:146,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:132,columnNumber:11},void 0):null,u.jsxDEV(Du,{className:k.close,$closing:v,onClick:T,children:u.jsxDEV(ne,{size:"s",view:"white",pin:"circle-circle","aria-label":"Закрыть",onClick:()=>n.close(),children:u.jsxDEV(qe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:163,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:156,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:151,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:104,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/Stories/components/StoriesViewer/StoriesViewer.tsx",lineNumber:89,columnNumber:5},void 0);return xe.createPortal(Q,document.body)},Iu=Object.freeze(Object.defineProperty({__proto__:null,StoriesViewer:Fu},Symbol.toStringTag,{value:"Module"}));export{J as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
