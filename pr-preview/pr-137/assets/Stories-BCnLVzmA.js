import{r as n,j as r}from"./react-CAOzMBF_.js";import{bE as Fu,r as xu}from"./vendor-DmWczWMC.js";import{z as nu,q as Bu,A as Iu}from"./utils-EIxGvR70.js";import{H as g,C as yu,U as k,W as Au}from"./styled-components-DCFsnh-i.js";import{T as _u}from"./AiAgentPopup-zRx4ytCb.js";import{q as $u,cL as Ru,z as Vu,A as ju,O as Nu,cM as Pu,au as Tu,av as Ou}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{S as ku,I as tu}from"./@salutejs/sdds-finai-CKhMjg07.js";import{E as qu}from"./EmptyState-BCYMGuYF.js";import{hf as zu,hi as Gu,fa as Lu}from"./@salutejs/plasma-icons-Do5ggeDI.js";const vu=n.createContext(null),ru=vu.Provider,X=()=>{const u=n.useContext(vu);if(!u)throw new Error("Компоненты Stories должны использоваться внутри <Stories>.");return u};try{ru.displayName="StoriesProvider",ru.__docgenInfo={description:"",displayName:"StoriesProvider",props:{}}}catch{}const U=u=>n.useSyncExternalStore(u.subscribe,u.getSnapshot,u.getSnapshot),w={root:"df-stories",preview:"df-stories-preview",previewRing:"df-stories-preview__ring",previewBody:"df-stories-preview__body",previewTitle:"df-stories-preview__title",viewer:"df-stories-viewer",overlay:"df-stories-viewer__overlay",stage:"df-stories-viewer__stage",banner:"df-stories-banner",progress:"df-stories-progress",progressItem:"df-stories-progress__item",content:"df-stories-content",action:"df-stories-banner__action",arrowPrev:"df-stories-viewer__arrow-prev",arrowNext:"df-stories-viewer__arrow-next",close:"df-stories-viewer__close"},Hu="linear-gradient(135deg, #08c6c9 0%, #99b0fe 100%)",Wu="#ecf6fc",z="df-stories-banner",M={duration:5e3,pauseHoldDelay:200,tapPrevZone:1/3,overlayColor:"#060a0c47",zIndex:9e3},E={circle:98,ring:2,titleGap:6,rectRadiusOuter:12,rectRadiusBody:8,bannerMaxWidth:430,bannerMaxHeight:900,bannerRadius:16,bannerPadding:28,stageWidth:558,progressHeight:4,progressRadius:2,progressFillRadius:6,progressGap:4},Mu="StoriesPreview",ou={ring:()=>Hu,fallback:()=>Wu,boxShadow:()=>Ru},du=(u,e)=>u==="circle"?"50%":`${{outer:E.rectRadiusOuter,body:E.rectRadiusBody}[e]}px`,Xu=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({$width:u})=>u}px;
`,Uu=g.button`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: ${({$width:u})=>u}px;
  height: ${({$height:u})=>u}px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: ${({$shape:u})=>du(u,"outer")};
  outline: none;

  &:focus-visible {
    outline: 2px solid ${$u};
    outline-offset: 2px;
  }
`,Yu=g.div`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: ${E.ring}px;
  background: ${ou.ring};
  border-radius: ${({$shape:u})=>du(u,"outer")};
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`,Zu=g.div`
  position: absolute;
  inset: ${({$viewed:u})=>u?0:E.ring*2}px;
  box-sizing: border-box;
  box-shadow: ${ou.boxShadow};
  background-color: ${ou.fallback};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({$image:u})=>u&&yu`
      /* Кавычки обязательны: без них data-URI и URL со спецсимволами
         (%, запятые, скобки) ломают парсинг url() и превью не отрисовывается. */
      background-image: url('${u}');
    `}
  border-radius: ${({$shape:u,$viewed:e})=>du(u,e?"outer":"body")};
`,Ku=g.div`
  margin-top: ${E.titleGap}px;
  width: 100%;
  text-align: ${({$align:u})=>u};

  /* Текстовый блок на всю ширину — иначе text-align (влево/вправо) не имеет пространства. */
  & > * {
    width: 100%;
  }
`,Z=u=>{var T;const{slides:e,shape:t="circle",title:o,titleProps:s,image:m,viewed:d=!1,size:c=E.circle,width:C,height:S,renderTrigger:a,className:p,__index:l=0}=u,{store:b,controller:y,preloadOnHover:D}=X(),v=U(b),N=v.isOpen&&v.groupIndex===l,_=t==="rect"?C??c:c,V=t==="rect"?S??c:c,P=()=>y.open(l),$=()=>{D&&e[0]&&nu(e[0].src)},R=()=>a?a({index:l,viewed:d,isActive:N}):r.jsxs(r.Fragment,{children:[d?null:r.jsx(Yu,{className:w.previewRing,$shape:t}),r.jsx(Zu,{className:w.previewBody,$shape:t,$viewed:d,$image:m})]}),I={variant:"BodyXXS",bold:!0,lines:2,tooltipText:o,color:Vu,...s,children:o},q=((T=s==null?void 0:s.style)==null?void 0:T.textAlign)??"center";return r.jsxs(Xu,{className:[w.preview,p].filter(Boolean).join(" "),"data-component":Mu,$width:_,children:[r.jsx(Uu,{type:"button","aria-label":o,$width:_,$height:V,$shape:t,onClick:P,onMouseEnter:$,children:R()}),o?r.jsx(Ku,{className:w.previewTitle,style:{maxWidth:_},$align:q,children:r.jsx(_u,{...I})}):null]})};try{Z.displayName="StoriesPreview",Z.__docgenInfo={description:"",displayName:"StoriesPreview",props:{__index:{defaultValue:null,description:"@internal Индекс группы, инжектится корнем `Stories` при клонировании.\nСнаружи задавать не нужно.",name:"__index",required:!1,type:{name:"number"}},slides:{defaultValue:null,description:"Сегменты группы: показываются по очереди после клика на триггер.",name:"slides",required:!0,type:{name:"StorySlide[]"}},shape:{defaultValue:null,description:"Форма триггера. По умолчанию `circle`.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rect"'}]}},title:{defaultValue:null,description:"Подпись под триггером (по умолчанию до 2 строк, ellipsis с авто-тултипом).",name:"title",required:!1,type:{name:"string"}},titleProps:{defaultValue:null,description:"Пропсы подписи (TypographyWithAutoTooltip) поверх дефолтов; выравнивание — через `style.textAlign`.",name:"titleProps",required:!1,type:{name:"TypographyWithAutoTooltipProps<TypographyVariant>"}},image:{defaultValue:null,description:"Картинка-превью внутри триггера. Если не задана — заливка-заглушка.",name:"image",required:!1,type:{name:"string"}},viewed:{defaultValue:null,description:"Просмотрена ли группа. Контролируется снаружи: по колбэкам гасите обводку.",name:"viewed",required:!1,type:{name:"boolean"}},defaultDuration:{defaultValue:null,description:"Дефолтная длительность сегментов этой группы, мс.",name:"defaultDuration",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"Размер круглого триггера (сторона), px. По умолчанию 98.",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Ширина прямоугольного триггера, px. По умолчанию равна `size`.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Высота прямоугольного триггера, px. По умолчанию равна `size`.",name:"height",required:!1,type:{name:"number"}},renderTrigger:{defaultValue:null,description:"Полная замена визуала триггера. Отменяет встроенную отрисовку.",name:"renderTrigger",required:!1,type:{name:"(state: StoriesTriggerState) => ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const su=n.lazy(()=>Fu(()=>Promise.resolve().then(()=>V4),void 0).then(u=>({default:u.StoriesViewer})));try{su.displayName="StoriesViewerLazy",su.__docgenInfo={description:"",displayName:"StoriesViewerLazy",props:{}}}catch{}const Ju=u=>{const e=n.useRef(u);return e.current=u,n.useCallback(t=>{const o=e.current[t];if(!o)return;o.slides.forEach(m=>nu(m.src));const s=e.current[t+1];s!=null&&s.slides[0]&&nu(s.slides[0].src)},[])},Qu={isOpen:!1,groupIndex:0,slideIndex:0,isPlaying:!0,direction:"next"},u4=u=>{let e={...Qu,...u};const t=new Set;return{getSnapshot:()=>e,subscribe:o=>(t.add(o),()=>{t.delete(o)}),setState:o=>{Object.keys(o).some(d=>e[d]!==o[d])&&(e={...e,...o},t.forEach(d=>d()))}}},e4=()=>typeof document<"u"&&typeof document.startViewTransition=="function",t4=(u,e)=>{const{direction:t="next",enabled:o=!0}=e??{};if(!o||!e4()){u();return}const s=document;s.documentElement.dataset.dfStoriesDir=t,s.startViewTransition(()=>xu.flushSync(u)).finished.finally(()=>{delete s.documentElement.dataset.dfStoriesDir})},n4=g.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`,hu=u=>n.isValidElement(u)&&u.type===Z,Cu=u=>{const e=[];return n.Children.forEach(u,t=>{var o;hu(t)?e.push(t):n.isValidElement(t)&&((o=t.props)!=null&&o.children)&&e.push(...Cu(t.props.children))}),e},Du=(u,e)=>n.Children.map(u,t=>{var o;if(hu(t)){const s=e.value;return e.value+=1,n.cloneElement(t,{__index:s})}return n.isValidElement(t)&&((o=t.props)!=null&&o.children)?n.cloneElement(t,void 0,Du(t.props.children,e)):t}),r4=()=>{const{store:u}=X(),{isOpen:e}=U(u),[t,o]=n.useState(e);return n.useEffect(()=>{e&&o(!0)},[e]),t?r.jsx(n.Suspense,{fallback:null,children:r.jsx(su,{})}):null},o4=(u,e)=>{const{children:t,defaultDuration:o=M.duration,open:s,defaultOpen:m,activeGroupIndex:d,activeSlideIndex:c,onOpenChange:C,onGroupChange:S,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:b,onError:y,renderError:D,overlay:v=!0,overlayColor:N=M.overlayColor,zIndex:_=M.zIndex,preloadOnHover:V=!0,loadingDelay:P=0,pauseHoldDelay:$=M.pauseHoldDelay,groupTransition:R="slide",arrows:I="auto",hideDisabledArrows:q=!0,mode:T,className:J}=u,j=Cu(t).map(F=>({slides:F.props.slides??[],defaultDuration:F.props.defaultDuration})),G=n.useRef();G.current||(G.current=u4({isOpen:m??!1}));const f=G.current,Y=n.useRef(j);Y.current=j;const cu=n.useRef({groupTransition:R});cu.current={groupTransition:R};const L=n.useRef({onOpenChange:C,onGroupChange:S,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:b});L.current={onOpenChange:C,onGroupChange:S,onSlideChange:a,onComplete:p,onGroupComplete:l,onClose:b};const uu=n.useRef();if(!uu.current){const F=(i,B)=>f.setState({slideIndex:i,direction:B,isPlaying:!0}),x=(i,B,A)=>t4(()=>f.setState({groupIndex:i,slideIndex:B,direction:A,isPlaying:!0}),{direction:A,enabled:cu.current.groupTransition!=="none"}),h=()=>{var i,B;(B=(i=L.current).onComplete)==null||B.call(i),f.setState({isOpen:!1,isPlaying:!1})};uu.current={open:(i,B)=>{const A=f.getSnapshot();f.setState({isOpen:!0,groupIndex:i??A.groupIndex,slideIndex:B??0,isPlaying:!0,direction:"next"})},close:()=>f.setState({isOpen:!1,isPlaying:!1}),next:()=>{var A,O,H,W,fu;const i=f.getSnapshot(),B=((A=Y.current[i.groupIndex])==null?void 0:A.slides.length)??0;i.slideIndex+1<B?F(i.slideIndex+1,"next"):i.groupIndex+1<Y.current.length?((H=(O=L.current).onGroupComplete)==null||H.call(O,i.groupIndex),x(i.groupIndex+1,0,"next")):((fu=(W=L.current).onGroupComplete)==null||fu.call(W,i.groupIndex),h())},prev:()=>{const i=f.getSnapshot();i.slideIndex>0?F(i.slideIndex-1,"prev"):i.groupIndex>0&&x(i.groupIndex-1,0,"prev")},nextGroup:()=>{const i=f.getSnapshot();i.groupIndex+1<Y.current.length&&x(i.groupIndex+1,0,"next")},prevGroup:()=>{const i=f.getSnapshot();i.groupIndex>0&&x(i.groupIndex-1,0,"prev")},goTo:(i,B)=>{const A=f.getSnapshot(),O=i<A.groupIndex?"prev":"next";i===A.groupIndex?F(B??0,O):x(i,B??0,O)},pause:()=>f.setState({isPlaying:!1}),resume:()=>f.setState({isPlaying:!0})}}const eu=uu.current,bu=Ju(j),pu=n.useRef(f.getSnapshot());n.useEffect(()=>f.subscribe(()=>{var i,B,A,O,H,W;const F=pu.current,x=f.getSnapshot();pu.current=x;const h=L.current;if(F.isOpen!==x.isOpen){(i=h.onOpenChange)==null||i.call(h,x.isOpen,{groupIndex:x.groupIndex}),x.isOpen?((B=h.onGroupChange)==null||B.call(h,x.groupIndex),(A=h.onSlideChange)==null||A.call(h,x.groupIndex,x.slideIndex)):(O=h.onClose)==null||O.call(h);return}x.isOpen&&(F.groupIndex!==x.groupIndex&&((H=h.onGroupChange)==null||H.call(h,x.groupIndex)),(F.groupIndex!==x.groupIndex||F.slideIndex!==x.slideIndex)&&((W=h.onSlideChange)==null||W.call(h,x.groupIndex,x.slideIndex)))}),[f]),n.useEffect(()=>{s!==void 0&&f.setState({isOpen:s})},[s,f]),n.useEffect(()=>{d!==void 0&&f.setState({groupIndex:d})},[d,f]),n.useEffect(()=>{c!==void 0&&f.setState({slideIndex:c})},[c,f]),n.useImperativeHandle(e,()=>({...eu,getState:()=>{const F=f.getSnapshot();return{isOpen:F.isOpen,groupIndex:F.groupIndex,slideIndex:F.slideIndex,isPlaying:F.isPlaying}}}),[eu,f]);const wu={store:f,controller:eu,groups:j,defaultDuration:o,pauseHoldDelay:$,tapPrevZone:M.tapPrevZone,preloadGroup:bu,preloadOnHover:V,loadingDelay:P,overlay:v,overlayColor:N,zIndex:_,groupTransition:R,arrows:I,hideDisabledArrows:q,mode:T,onError:y,renderError:D};return r.jsxs(ru,{value:wu,children:[r.jsx(n4,{className:[w.root,J].filter(Boolean).join(" "),children:Du(t,{value:0})}),r.jsx(r4,{})]})},K=n.forwardRef(o4);K.Preview=Z;K.displayName="Stories";try{K.displayName="Stories",K.__docgenInfo={description:"",displayName:"Stories",props:{children:{defaultValue:null,description:"Триггеры-превью: список `Stories.Preview`.",name:"children",required:!0,type:{name:"ReactNode"}},defaultDuration:{defaultValue:null,description:"Длительность сегмента по умолчанию, мс.",name:"defaultDuration",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"Controlled-открытие вьюера.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Начальное открытие для uncontrolled-режима.",name:"defaultOpen",required:!1,type:{name:"boolean"}},activeGroupIndex:{defaultValue:null,description:"Controlled-индекс активной группы.",name:"activeGroupIndex",required:!1,type:{name:"number"}},activeSlideIndex:{defaultValue:null,description:"Controlled-индекс активного сегмента.",name:"activeSlideIndex",required:!1,type:{name:"number"}},onOpenChange:{defaultValue:null,description:"Изменилось открытие/закрытие вьюера.",name:"onOpenChange",required:!1,type:{name:"(open: boolean, meta: { groupIndex: number; }) => void"}},onGroupChange:{defaultValue:null,description:"Сменилась активная группа.",name:"onGroupChange",required:!1,type:{name:"(groupIndex: number) => void"}},onSlideChange:{defaultValue:null,description:"Сменился активный сегмент (под-стори).",name:"onSlideChange",required:!1,type:{name:"(groupIndex: number, slideIndex: number) => void"}},onComplete:{defaultValue:null,description:"Досмотрены все группы (перед автозакрытием).",name:"onComplete",required:!1,type:{name:"() => void"}},onGroupComplete:{defaultValue:null,description:"Группа полностью досмотрена — удобно гасить индикатор «просмотрено».",name:"onGroupComplete",required:!1,type:{name:"(groupIndex: number) => void"}},onClose:{defaultValue:null,description:"Вьюер закрылся (крестик / Esc / клик по оверлею / автозакрытие).",name:"onClose",required:!1,type:{name:"() => void"}},onError:{defaultValue:null,description:"Ошибка загрузки ассета сегмента.",name:"onError",required:!1,type:{name:"(ctx: StoryErrorContext) => void"}},renderError:{defaultValue:null,description:"Свой контент при ошибке загрузки ассета (по умолчанию — встроенный EmptyState).",name:"renderError",required:!1,type:{name:"(ctx: StoryErrorContext) => ReactNode"}},overlay:{defaultValue:null,description:"Показывать затемнённый оверлей. По умолчанию `true`.",name:"overlay",required:!1,type:{name:"boolean"}},overlayColor:{defaultValue:null,description:"Цвет оверлея.",name:"overlayColor",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"z-index оверлея.",name:"zIndex",required:!1,type:{name:"number"}},preloadOnHover:{defaultValue:null,description:"Предзагружать первый ассет группы при наведении на её триггер. По умолчанию `true`.",name:"preloadOnHover",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:null,description:"Задержка показа ассета, мс (для демо/тестов загрузки).",name:"loadingDelay",required:!1,type:{name:"number"}},pauseHoldDelay:{defaultValue:null,description:"Порог удержания указателя для паузы, мс. По умолчанию 200.",name:"pauseHoldDelay",required:!1,type:{name:"number"}},groupTransition:{defaultValue:null,description:"Пресет анимации перехода между группами. По умолчанию `slide`.",name:"groupTransition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"slide"'},{value:'"fade"'}]}},arrows:{defaultValue:null,description:"Режим видимости стрелок навигации. По умолчанию `auto` (скрыть при единственном сегменте).",name:"arrows",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"always"'},{value:'"never"'}]}},hideDisabledArrows:{defaultValue:null,description:"Прятать стрелку, когда в её сторону листать некуда (крайний сегмент),\nвместо показа в disabled-состоянии. По умолчанию `true`.",name:"hideDisabledArrows",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"Явный режим темы. По умолчанию определяется автоматически.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const s4=({controller:u,pauseHoldDelay:e,tapPrevZone:t,isOpen:o})=>{const s=n.useRef(),m=n.useRef(!1),d=n.useRef("next"),c=()=>{s.current&&(clearTimeout(s.current),s.current=void 0)},C=p=>{const l=p.currentTarget.getBoundingClientRect(),b=l.width>0?(p.clientX-l.left)/l.width:1;d.current=b<t?"prev":"next",m.current=!1,c(),s.current=setTimeout(()=>{m.current=!0,u.pause()},e)},S=()=>{if(c(),m.current){m.current=!1,u.resume();return}d.current==="prev"?u.prev():u.next()},a=()=>{c(),m.current&&(m.current=!1,u.resume())};return n.useEffect(()=>{if(!o)return;const p=l=>{l.key==="ArrowLeft"?(l.preventDefault(),u.prev()):l.key==="ArrowRight"?(l.preventDefault(),u.next()):l.key==="Escape"&&(l.preventDefault(),u.close())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[o,u]),{onPointerDown:C,onPointerUp:S,onPointerLeave:a,onPointerCancel:a}},mu=g.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${ju};
`,i4=g.img`
  width: 100%;
  height: 100%;
  object-fit: ${({$objectFit:u})=>u};
  opacity: ${({$loaded:u})=>u?1:0};
  transition: opacity 0.2s ease;
  user-select: none;
`,a4=g.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,l4=g.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${E.bannerPadding}px;
`,iu=({slide:u,status:e,errorNode:t})=>{const o=u.objectFit??"cover",s=e==="loaded";return e==="error"?r.jsx(mu,{className:w.content,children:r.jsx(l4,{children:t})}):r.jsxs(mu,{className:w.content,children:[r.jsx(i4,{src:u.src,alt:"",draggable:!1,$objectFit:o,$loaded:s}),e==="loading"?r.jsx(a4,{children:r.jsx(ku,{view:"default",size:"l"})}):null]})};try{iu.displayName="StoriesContent",iu.__docgenInfo={description:"Контент баннера: ассет (картинка/GIF) + спиннер на время загрузки + error-state\nпри ошибке. Video пока не реализовано, но `slide.type` заложен в модель под будущее.",displayName:"StoriesContent",props:{slide:{defaultValue:null,description:"",name:"slide",required:!0,type:{name:"StorySlide"}},status:{defaultValue:null,description:"Статус загрузки ассета текущего сегмента (владелец — StoriesBanner).",name:"status",required:!0,type:{name:"ImageLoaderStatus"}},errorNode:{defaultValue:null,description:"Error-state при ошибке загрузки (готовит StoriesBanner: renderError или дефолтный EmptyState).",name:"errorNode",required:!1,type:{name:"ReactNode"}}}}}catch{}const gu=(u,e)=>{u&&(u.style.transform=`scaleX(${e})`)},d4=({fillRef:u,active:e,duration:t,isPlaying:o,isReady:s,resetKey:m,onComplete:d})=>{const c=n.useRef(0),C=n.useRef(d);C.current=d,n.useEffect(()=>{c.current=0,gu(u.current,0)},[m,u]),n.useEffect(()=>{if(!e||!o||!s||t<=0)return;let S=0,a=performance.now();const p=l=>{c.current+=l-a,a=l;const b=Math.min(1,c.current/t);if(gu(u.current,b),b>=1){C.current();return}S=requestAnimationFrame(p)};return S=requestAnimationFrame(p),()=>cancelAnimationFrame(S)},[e,o,s,t,m,u])},c4=g.div`
  display: flex;
  gap: ${E.progressGap}px;
  width: 100%;
`,p4=g.div`
  position: relative;
  flex: 1 1 0;
  height: ${E.progressHeight}px;
  border-radius: ${E.progressRadius}px;
  overflow: hidden;
  background: ${({$bg:u})=>u};
`,f4=g.span`
  position: absolute;
  inset: 0;
  border-radius: ${E.progressFillRadius}px;
  background: ${({$color:u})=>u};
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
`,au=({isReady:u})=>{var V;const{store:e,controller:t,groups:o,defaultDuration:s,mode:m}=X(),{groupIndex:d,slideIndex:c,isPlaying:C,isOpen:S}=U(e),a=Bu(),l=(m??a)==="dark",b=l?Tu:Ou,y=l?Nu:Pu,D=o[d],v=(D==null?void 0:D.slides)??[],N=n.useRef(null),_=((V=v[c])==null?void 0:V.duration)??(D==null?void 0:D.defaultDuration)??s;return d4({fillRef:N,active:S,duration:_,isPlaying:C,isReady:u,resetKey:`${d}-${c}`,onComplete:t.next}),r.jsx(c4,{className:w.progress,children:v.map((P,$)=>{const R=P.id??`${d}-${$}`,I=$<c,q=$===c;return r.jsx(p4,{className:w.progressItem,$bg:I?y:b,children:q?r.jsx(f4,{ref:N,$color:y}):null},R)})})};try{au.displayName="StoriesProgress",au.__docgenInfo={description:"",displayName:"StoriesProgress",props:{isReady:{defaultValue:null,description:"Ассет текущего сегмента загружен — иначе таймер стоит (крутится спиннер).",name:"isReady",required:!0,type:{name:"boolean"}}}}}catch{}const m4=k`
  from {
    opacity: 0;
    transform: scale(0.92) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,g4=k`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.96) translateY(6px);
  }
`,E4=g.div`
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
  animation: ${({$closing:u})=>u?g4:m4}
    ${({$closing:u})=>u?"0.2s":"0.24s"} ease forwards;
`,x4=g.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: none;
`,y4=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${E.bannerPadding}px;
  pointer-events: none;
`,v4=g.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${E.bannerPadding}px;
  pointer-events: none;
`,h4=g.div`
  pointer-events: auto;
`,lu=({closing:u,onAnimationEnd:e})=>{const{store:t,controller:o,groups:s,pauseHoldDelay:m,tapPrevZone:d,loadingDelay:c,onError:C,renderError:S}=X(),{groupIndex:a,slideIndex:p,isOpen:l}=U(t),b=s[a],y=b==null?void 0:b.slides[p],{status:D,reload:v}=Iu(y==null?void 0:y.src,c),N=s4({controller:o,pauseHoldDelay:m,tapPrevZone:d,isOpen:l}),_=n.useRef();n.useEffect(()=>{if(D!=="error"||!y)return;const I=`${a}-${p}`;_.current!==I&&(_.current=I,C==null||C({groupIndex:a,slideIndex:p,slide:y,retry:v}))},[D,a,p,y,C,v]);const V=I=>I.stopPropagation(),P=I=>{I.target===I.currentTarget&&e()};if(!y)return null;const{footer:$}=y,R=S?S({groupIndex:a,slideIndex:p,slide:y,retry:v}):r.jsx(qu,{size:"s",variant:"loading",title:"Не удалось загрузить",centered:!0,buttons:[{type:"link",props:{text:"Обновить",view:"accent",onClick:v}}]});return r.jsxs(E4,{className:w.banner,$closing:u,onClick:V,onAnimationEnd:P,children:[r.jsx(iu,{slide:y,status:D,errorNode:R}),D==="error"?null:r.jsx(x4,{...N}),r.jsx(y4,{children:r.jsx(au,{isReady:D==="loaded"})}),$?r.jsx(v4,{children:r.jsx(h4,{className:w.action,children:$})}):null]})};try{lu.displayName="StoriesBanner",lu.__docgenInfo={description:"",displayName:"StoriesBanner",props:{closing:{defaultValue:null,description:"Идёт анимация закрытия (проигрывается popOut).",name:"closing",required:!0,type:{name:"boolean"}},onAnimationEnd:{defaultValue:null,description:"Анимация баннера завершилась (вьюер размонтирует после закрытия).",name:"onAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}const C4=k`
  from { opacity: 0; }
  to { opacity: 1; }
`,D4=k`
  from { opacity: 1; }
  to { opacity: 0; }
`,Su=u=>yu`
  animation: ${u?D4:C4} ${u?"0.2s":"0.24s"} ease
    forwards;
`,S4=g.div`
  position: fixed;
  inset: 0;
  z-index: ${({$zIndex:u})=>u};
  display: flex;
  align-items: center;
  justify-content: center;
`,b4=g.div`
  position: absolute;
  inset: 0;
  background: ${({$color:u})=>u};
  opacity: ${({$closing:u})=>u?0:1};
  transition: opacity 0.24s ease;
`,w4=g.div`
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
`,Eu=g.div`
  position: absolute;
  top: 50%;
  ${({$side:u})=>u==="prev"?"left: 0;":"right: 0;"}
  z-index: 3;
  transform: translateY(-50%);
  ${({$closing:u})=>Su(u)}
`,F4=g.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  ${({$closing:u})=>Su(u)}
`,B4=k`
  from { transform: translateX(24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,I4=k`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-24px); opacity: 0; }
`,A4=k`
  from { transform: translateX(-24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,_4=k`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(24px); opacity: 0; }
`,$4=Au`
  ::view-transition-old(${z}),
  ::view-transition-new(${z}) {
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }
  html[data-df-stories-dir='next']::view-transition-new(${z}) {
    animation-name: ${B4};
  }
  html[data-df-stories-dir='next']::view-transition-old(${z}) {
    animation-name: ${I4};
  }
  html[data-df-stories-dir='prev']::view-transition-new(${z}) {
    animation-name: ${A4};
  }
  html[data-df-stories-dir='prev']::view-transition-old(${z}) {
    animation-name: ${_4};
  }
`,R4=()=>{var Q;const{store:u,controller:e,groups:t,overlay:o,overlayColor:s,zIndex:m,groupTransition:d,arrows:c,hideDisabledArrows:C,preloadGroup:S}=X(),{isOpen:a,groupIndex:p,slideIndex:l}=U(u),[b,y]=n.useState(a),D=n.useRef(null);n.useEffect(()=>{a&&y(!0)},[a]),n.useEffect(()=>{var j;a&&((j=D.current)==null||j.focus())},[a]),n.useEffect(()=>{a&&S(p)},[a,p,S]);const v=b&&!a,N=n.useCallback(()=>{v&&y(!1)},[v]);if(!b||typeof document>"u")return null;const _=((Q=t[p])==null?void 0:Q.slides.length)??0,V=p>0||l>0,P=l+1<_||p+1<t.length,$=t.reduce((j,G)=>j+G.slides.length,0),R=c==="always"||c==="auto"&&$>1,I=R&&(V||!C),q=R&&(P||!C),T=j=>j.stopPropagation(),J=r.jsxs(S4,{className:w.viewer,$zIndex:m,onClick:()=>e.close(),children:[o?r.jsx(b4,{className:w.overlay,$color:s,$closing:v}):null,d==="slide"?r.jsx($4,{}):null,r.jsxs(w4,{ref:D,tabIndex:-1,className:w.stage,children:[I?r.jsx(Eu,{className:w.arrowPrev,$side:"prev",$closing:v,onClick:T,children:r.jsx(tu,{size:"s",view:"white",pin:"circle-circle","aria-label":"Назад",disabled:!V,onClick:()=>e.prev(),children:r.jsx(zu,{size:"s"})})}):null,r.jsx(lu,{closing:v,onAnimationEnd:N}),q?r.jsx(Eu,{className:w.arrowNext,$side:"next",$closing:v,onClick:T,children:r.jsx(tu,{size:"s",view:"white",pin:"circle-circle","aria-label":"Вперёд",disabled:!P,onClick:()=>e.next(),children:r.jsx(Gu,{size:"s"})})}):null,r.jsx(F4,{className:w.close,$closing:v,onClick:T,children:r.jsx(tu,{size:"s",view:"white",pin:"circle-circle","aria-label":"Закрыть",onClick:()=>e.close(),children:r.jsx(Lu,{size:"s"})})})]})]});return xu.createPortal(J,document.body)},V4=Object.freeze(Object.defineProperty({__proto__:null,StoriesViewer:R4},Symbol.toStringTag,{value:"Module"}));export{K as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
