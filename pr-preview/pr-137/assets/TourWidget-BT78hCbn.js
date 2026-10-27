import{r as u,j as r}from"./react-CAOzMBF_.js";import{f as F}from"./utils-EIxGvR70.js";import{a as H}from"./AiAgentPopup-zRx4ytCb.js";import{cN as X,cO as C,z as T,cj as J,aw as K}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as s,C as b}from"./styled-components-DCFsnh-i.js";const n="TourWidget__",a={root:`${n}root`,horizontal:`${n}horizontal`,vertical:`${n}vertical`,header:`${n}header`,headerTitle:`${n}header-title`,headerDescription:`${n}header-description`,content:`${n}content`,footer:`${n}footer`,gradient:`${n}gradient`,shapeGradient:`${n}shape-gradient`,bullets:`${n}bullets`,bulletsTrack:`${n}bullets-track`,bullet:`${n}bullet`,bulletActive:`${n}bullet-active`,bulletEdge:`${n}bullet-edge`},N=u.createContext({}),Q=N.Provider,z=()=>u.useContext(N),e={background:"--tour-widget-background",borderRadius:"--tour-widget-border-radius",bulletActiveBackground:"--tour-widget-bullet-active-background",bulletBackground:"--tour-widget-bullet-background",bulletsOffset:"--tour-widget-bullets-offset",bulletsWidth:"--tour-widget-bullets-width",contentBorderRadius:"--tour-widget-content-border-radius",gradientBackground:"--tour-widget-gradient-background",gradientBlur:"--tour-widget-gradient-blur",gradientFrameBottom:"--tour-widget-gradient-frame-bottom",gradientFrameFade:"--tour-widget-gradient-frame-fade",gradientFrameHeight:"--tour-widget-gradient-frame-height",gradientFrameLeft:"--tour-widget-gradient-frame-left",gradientFrameRight:"--tour-widget-gradient-frame-right",gradientHeight:"--tour-widget-gradient-height",gradientLeft:"--tour-widget-gradient-left",gradientOpacity:"--tour-widget-gradient-opacity",gradientTop:"--tour-widget-gradient-top",gradientWidth:"--tour-widget-gradient-width",inlineOvalDisplay:"--tour-widget-inline-oval-display",minWidth:"--tour-widget-min-width",ovalBackground:"--tour-widget-oval-background",ovalBlur:"--tour-widget-oval-blur",ovalBorderRadius:"--tour-widget-oval-border-radius",ovalFrameDisplay:"--tour-widget-oval-frame-display",ovalFrameHeight:"--tour-widget-oval-frame-height",ovalHeight:"--tour-widget-oval-height",ovalLeft:"--tour-widget-oval-left",ovalOpacity:"--tour-widget-oval-opacity",ovalTop:"--tour-widget-oval-top",ovalWidth:"--tour-widget-oval-width",shapeGradientMaskMiddle:"--tour-widget-shape-gradient-mask-middle",shapeGradientMaskStart:"--tour-widget-shape-gradient-mask-start",shapeGradientOpacity:"--tour-widget-shape-gradient-opacity",shapeGradientPathOpacity:"--tour-widget-shape-gradient-path-opacity",themeBackground:"--tour-widget-theme-background",themeGradientHorizontal:"--tour-widget-theme-gradient-horizontal",themeGradientHorizontalBlur:"--tour-widget-theme-gradient-horizontal-blur",themeGradientOpacity:"--tour-widget-theme-gradient-opacity",themeGradientVertical:"--tour-widget-theme-gradient-vertical",themeGradientVerticalBlur:"--tour-widget-theme-gradient-vertical-blur",themeOvalBackground:"--tour-widget-theme-oval-background",themeOvalHorizontalBlur:"--tour-widget-theme-oval-horizontal-blur",themeOvalHorizontalOpacity:"--tour-widget-theme-oval-horizontal-opacity",themeOvalVerticalBlur:"--tour-widget-theme-oval-vertical-blur",themeOvalVerticalOpacity:"--tour-widget-theme-oval-vertical-opacity",themeShapeEnd:"--tour-widget-theme-shape-end",themeShapeMiddle:"--tour-widget-theme-shape-middle",themeShapeOpacity:"--tour-widget-theme-shape-opacity",themeShapeStart:"--tour-widget-theme-shape-start"},_=`linear-gradient(
  270deg,
  #00dfff 33.759%,
  #51b7fb 63.268%,
  #bbb0fc 84.246%
)`,S=`linear-gradient(
  180deg,
  #56ff71 0%,
  rgba(86, 255, 113, 0) 100%
)`,h={light:{[e.themeBackground]:C,[e.themeGradientVertical]:_,[e.themeGradientHorizontal]:_,[e.themeGradientOpacity]:"1",[e.themeGradientVerticalBlur]:"25px",[e.themeGradientHorizontalBlur]:"25px",[e.themeOvalBackground]:S,[e.themeOvalVerticalOpacity]:"0.42",[e.themeOvalHorizontalOpacity]:"0.42",[e.themeOvalVerticalBlur]:"48px",[e.themeOvalHorizontalBlur]:"15px",[e.themeShapeOpacity]:"0.32",[e.themeShapeStart]:"#bbb0fc",[e.themeShapeMiddle]:"#00dfff",[e.themeShapeEnd]:"#56ff71"},dark:{[e.themeBackground]:X,[e.themeGradientVertical]:`linear-gradient(
      -45.68deg,
      rgb(56 255 62) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 194 219) 44.903%,
      rgb(110 135 219) 69.826%
    )`,[e.themeGradientHorizontal]:`linear-gradient(
      -45.68deg,
      rgb(56 255 136) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 138 219) 44.903%,
      rgb(90 117 207) 69.826%
    )`,[e.themeGradientOpacity]:"1",[e.themeGradientVerticalBlur]:"25px",[e.themeGradientHorizontalBlur]:"25px",[e.themeOvalBackground]:S,[e.themeOvalVerticalOpacity]:"0.42",[e.themeOvalHorizontalOpacity]:"0.42",[e.themeOvalVerticalBlur]:"48px",[e.themeOvalHorizontalBlur]:"15px",[e.themeShapeOpacity]:"0.32",[e.themeShapeStart]:"#6e87db",[e.themeShapeMiddle]:"#00e0ff",[e.themeShapeEnd]:"#56ff88"}},y=h.light,g={radius:"14px",contentRadius:"6px",cardBg:()=>`var(${e.themeBackground}, ${C})`,titleColor:()=>T,descriptionColor:()=>T},Y=b`
  ${e.gradientFrameHeight}: 10%;
  ${e.gradientFrameLeft}: 0;
  ${e.gradientFrameRight}: 0;
  ${e.gradientFrameBottom}: 0;
  ${e.gradientFrameFade}: 60%;

  ${e.gradientBackground}: var(
    ${e.themeGradientVertical},
    ${y[e.themeGradientVertical]}
  );
  ${e.gradientWidth}: 115%;
  ${e.gradientHeight}: 70%;
  ${e.gradientLeft}: -15%;
  ${e.gradientTop}: 110%;
  ${e.gradientBlur}: var(
    ${e.themeGradientVerticalBlur},
    25px
  );
  ${e.gradientOpacity}: var(
    ${e.themeGradientOpacity},
    1
  );

  ${e.inlineOvalDisplay}: none;
  ${e.ovalFrameDisplay}: block;
  ${e.ovalFrameHeight}: 32%;
  ${e.ovalBorderRadius}: 50%;
  ${e.shapeGradientMaskStart}: 84%;
  ${e.shapeGradientMaskMiddle}: 94%;

  ${e.ovalWidth}: 45%;
  ${e.ovalHeight}: 100%;
  ${e.ovalLeft}: 90%;
  ${e.ovalTop}: 60%;
  ${e.ovalBlur}: var(${e.themeOvalVerticalBlur}, 48px);
  ${e.ovalOpacity}: var(
    ${e.themeOvalVerticalOpacity},
    0.42
  );
`,ee=b`
  ${e.gradientFrameHeight}: 30%;
  ${e.gradientFrameLeft}: 0;
  ${e.gradientFrameRight}: 0;
  ${e.gradientFrameBottom}: 0;
  ${e.gradientFrameFade}: 78%;

  ${e.gradientBackground}: var(
    ${e.themeGradientHorizontal},
    ${y[e.themeGradientHorizontal]}
  );
  ${e.gradientWidth}: 115%;
  ${e.gradientHeight}: 50%;
  ${e.gradientLeft}: -10%;
  ${e.gradientTop}: 100%;
  ${e.gradientBlur}: var(
    ${e.themeGradientHorizontalBlur},
    25px
  );
  ${e.gradientOpacity}: var(
    ${e.themeGradientOpacity},
    1
  );

  ${e.inlineOvalDisplay}: none;
  ${e.ovalFrameDisplay}: block;
  /* Минимальные размеры сохраняют овал на низкой карточке без Content. */
  ${e.ovalFrameHeight}: max(42%, 110px);
  ${e.ovalBorderRadius}: 50%;
  ${e.shapeGradientMaskStart}: 76%;
  ${e.shapeGradientMaskMiddle}: 88%;

  ${e.ovalWidth}: max(30%, 216px);
  ${e.ovalHeight}: 120%;
  ${e.ovalLeft}: calc(100% - 72px);
  ${e.ovalTop}: 20%;
  ${e.ovalBlur}: var(${e.themeOvalHorizontalBlur}, 15px);
  ${e.ovalOpacity}: var(
    ${e.themeOvalHorizontalOpacity},
    0.42
  );
`,te=b`
  ${Y}

  display: flex;
  flex-direction: column;

  & .${a.content} {
    padding: 12px 12px 0;
  }

  & .${a.header} {
    padding-top: 24px;
    padding-inline: 12px;
  }

  & .${a.footer} {
    padding: 24px 12px 12px;
  }
`,ae=b`
  ${ee}

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: max-content minmax(0, 1fr) max-content;
  align-items: stretch;

  & .${a.header} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding: 12px 12px 0;
  }

  & .${a.footer} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    align-self: end;
    margin-top: 0;
    padding: 24px 12px 12px;
  }

  &:has(> .${a.content}) {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    column-gap: 24px;
  }

  &:has(> .${a.content}) .${a.content} {
    grid-column: 1;
    grid-row: 1 / 4;
    padding: 12px 0 12px 12px;
  }

  &:has(> .${a.content}) .${a.header} {
    grid-column: 2;
    grid-row: 1;
    padding: 12px 12px 0 0;
  }

  &:has(> .${a.content}) .${a.footer} {
    grid-column: 2;
    grid-row: 3;
    padding: 0 12px 12px 0;
  }
`,re=({$orientation:t})=>t==="vertical"?te:ae,ie=s.div.attrs({className:a.root})`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-sizing: border-box;
  min-width: var(${e.minWidth}, auto);
  width: fit-content;
  color: ${g.titleColor};
  border: 4px solid transparent;
  background: linear-gradient(
        var(${e.background}, ${g.cardBg}),
        var(${e.background}, ${g.cardBg})
      )
      padding-box,
    ${J} border-box;
  border-radius: var(${e.borderRadius}, ${g.radius});

  & > :not(.${a.gradient}):not(.${a.shapeGradient}) {
    position: relative;
    z-index: 1;
  }

  ${({$isDark:t})=>h[t?"dark":"light"]}

  ${re}

  ${({$css:t})=>t}
`,oe=s.svg.attrs({className:a.shapeGradient,focusable:"false",preserveAspectRatio:"none"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  clip-path: inset(
    0 round max(0px, calc(var(${e.borderRadius}, ${g.radius}) - 4px))
  );
  opacity: var(
    ${e.shapeGradientOpacity},
    var(${e.themeShapeOpacity}, 0.32)
  );

  /* Маска оставляет SVG-хвост видимым только в нижней части карточки,
     чтобы диагональная фигура не перекрывала основной фон сверху. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent var(${e.shapeGradientMaskStart}, 42%),
    rgba(0, 0, 0, 0.55) var(${e.shapeGradientMaskMiddle}, 58%),
    #000 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent var(${e.shapeGradientMaskStart}, 42%),
    rgba(0, 0, 0, 0.55) var(${e.shapeGradientMaskMiddle}, 58%),
    #000 100%
  );

  & path {
    opacity: var(${e.shapeGradientPathOpacity}, 0.86);
  }
`,M=s.div.attrs({className:a.gradient})`
  position: absolute;
  z-index: 0;
  left: var(${e.gradientFrameLeft}, 0);
  right: var(${e.gradientFrameRight}, 0);
  bottom: var(${e.gradientFrameBottom}, 0);
  height: var(${e.gradientFrameHeight}, 36%);
  overflow: hidden;
  border-radius: max(0px, calc(var(${e.borderRadius}, ${g.radius}) - 4px));
  pointer-events: none;

  /* Маска плавно проявляет нижний gradient-frame и срезает верхнюю часть blur,
     иначе размытие уходит слишком высоко поверх контента. */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 var(${e.gradientFrameFade}, 24%),
    #000 100%
  );

  &::before,
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
  }

  /* ::before — основной вытянутый прямоугольник с сине-голубым градиентом.
     Blur превращает его в мягкую нижнюю подсветку без жестких границ. */
  &::before {
    width: var(${e.gradientWidth});
    height: var(${e.gradientHeight});
    left: var(${e.gradientLeft});
    top: var(${e.gradientTop});

    background: var(
      ${e.gradientBackground},
      ${y[e.themeGradientHorizontal]}
    );

    filter: blur(var(${e.gradientBlur}, 69px));
    opacity: var(${e.gradientOpacity}, 1);
  }

  /* ::after — отдельный зеленый овал справа. Его blur смешивается с
     прямоугольником и дает зеленую подсветку, как в Figma-композиции. */
  &::after {
    display: var(${e.inlineOvalDisplay}, block);
    width: var(${e.ovalWidth});
    height: var(${e.ovalHeight});
    left: var(${e.ovalLeft});
    top: var(${e.ovalTop});
    border-radius: var(${e.ovalBorderRadius}, 0);

    background: var(
      ${e.ovalBackground},
      var(
        ${e.themeOvalBackground},
        ${y[e.themeOvalBackground]}
      )
    );

    filter: blur(var(${e.ovalBlur}, 127px));
    opacity: var(${e.ovalOpacity}, 1);
  }
`,de=s(M)`
  display: var(${e.ovalFrameDisplay}, none);
  height: var(${e.ovalFrameHeight}, 0%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 40%, #000 100%);

  &::before {
    display: none;
  }

  &::after {
    display: block;
  }
`,ne=s.div.attrs({className:a.header})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  ${({$css:t})=>t}
`,le=s(H).attrs({className:a.headerTitle})`
  min-width: 0;
  color: ${g.titleColor};
  white-space: pre-line;
`,se=s(H).attrs({className:a.headerDescription})`
  min-width: 0;
  color: ${g.descriptionColor};
  white-space: pre-line;
`,ue=s.div.attrs({className:a.content})`
  & img,
  & picture,
  & video,
  & canvas,
  & svg {
    display: block;
    object-fit: cover;
    border-radius: var(${e.contentBorderRadius}, ${g.contentRadius});
  }

  ${({$css:t})=>t}
`,ce=s.div.attrs({className:a.footer})`
  min-width: 0;

  ${({$css:t})=>t}
`,ge=s.div.attrs({className:a.bullets})`
  display: inline-block;
  width: var(${e.bulletsWidth}, auto);
  min-width: 0;
  overflow: hidden;

  ${({$css:t})=>t}
`,pe=s.div.attrs({className:a.bulletsTrack})`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(var(${e.bulletsOffset}, 0px));
  transition: transform 300ms ease;
  will-change: transform;
`,me=s.span.attrs({className:a.bullet})`
  display: block;
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(${e.bulletBackground}, ${K});
  transform: scale(1);
  transform-origin: center;
  transition: background-color 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  &.${a.bulletActive} {
    background: var(${e.bulletActiveBackground}, ${T});
  }

  &.${a.bulletEdge} {
    transform: scale(0.75);
  }

  ${({$css:t})=>t}
`,k=u.forwardRef(({index:t,active:i,className:d,"aria-label":c,...o},p)=>{const{activeStepIndex:l}=z(),v=i??(typeof t=="number"&&l===t);return r.jsx(me,{ref:p,className:F(v&&a.bulletActive,d),"aria-current":v?"step":void 0,"aria-label":c??(typeof t=="number"?`Шаг ${t+1}`:void 0),...o})});k.displayName="TourWidget.Bullet";try{TourWidget.Bullet.displayName="TourWidget.Bullet",TourWidget.Bullet.__docgenInfo={description:"",displayName:"TourWidget.Bullet",props:{index:{defaultValue:null,description:"Индекс буллета. Сравнивается с `TourWidget.activeStepIndex`.",name:"index",required:!1,type:{name:"number"}},active:{defaultValue:null,description:"Ручное переопределение активного состояния.",name:"active",required:!1,type:{name:"boolean"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const f=7,V=8,E=8,he=V+E,G=(t,i,d)=>Math.min(Math.max(t,i),d),ve=t=>Number.isFinite(t)?Math.max(0,Math.floor(t)):0,$e=t=>t>0?t*V+(t-1)*E:0,L=u.forwardRef(({count:t,style:i,"aria-label":d,...c},o)=>{const{activeStepIndex:p=0}=z(),l=ve(t),v=Number.isFinite(p)?Math.floor(p):0,x=l>0?G(v,0,l-1):0,w=Math.min(l,f),A=Math.max(0,l-w),$=l>f?G(x-Math.floor(f/2),0,A):0,W=$+w-1,q=$>0,P=W<l-1,U={...i,[e.bulletsOffset]:`-${$*he}px`,[e.bulletsWidth]:`${$e(w)}px`};return r.jsx(ge,{ref:o,"aria-label":d??(l>0?`Шаг ${x+1} из ${l}`:void 0),style:U,...c,children:r.jsx(pe,{children:Array.from({length:l},(we,m)=>{const Z=l>f&&(m===$&&q||m===W&&P);return r.jsx(k,{index:m,active:m===x,className:Z?a.bulletEdge:void 0},m)})})})});L.displayName="TourWidget.Bullets";try{TourWidget.Bullets.displayName="TourWidget.Bullets",TourWidget.Bullets.__docgenInfo={description:"",displayName:"TourWidget.Bullets",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const j=u.forwardRef(({children:t,...i},d)=>r.jsx(ue,{ref:d,...i,children:t}));j.displayName="TourWidget.Content";try{TourWidget.Content.displayName="TourWidget.Content",TourWidget.Content.__docgenInfo={description:"",displayName:"TourWidget.Content",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const D=u.forwardRef(({children:t,...i},d)=>r.jsx(ce,{ref:d,...i,children:t}));D.displayName="TourWidget.Footer";try{TourWidget.Footer.displayName="TourWidget.Footer",TourWidget.Footer.__docgenInfo={description:"",displayName:"TourWidget.Footer",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const R=u.forwardRef(({title:t,description:i,children:d,...c},o)=>r.jsxs(ne,{ref:o,...c,children:[t!=null&&r.jsx(le,{variant:"H3",bold:!0,children:t}),i!=null&&r.jsx(se,{variant:"TextM",children:i}),d]}));R.displayName="TourWidget.Header";try{TourWidget.Header.displayName="TourWidget.Header",TourWidget.Header.__docgenInfo={description:"",displayName:"TourWidget.Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const fe={vertical:{viewBox:"0 0 286 480",gradient:{x1:"0",y1:"318",x2:"286",y2:"480",middleOffset:"0.5",startOpacity:"0.56",middleOpacity:"0.62",endOpacity:"0.74"},filter:{x:"-20%",y:"-30%",width:"140%",height:"170%",blur:"18"},path:"M0 318 C 34 420 138 454 286 426 L286 482 L0 482 Z"},horizontal:{viewBox:"0 0 720 260",gradient:{x1:"0",y1:"170",x2:"720",y2:"260",middleOffset:"0.55",startOpacity:"0.5",middleOpacity:"0.58",endOpacity:"0.7"},filter:{x:"-12%",y:"-40%",width:"124%",height:"190%",blur:"22"},path:"M0 172 C 88 228 330 252 720 206 L720 262 L0 262 Z"}},I=({orientation:t})=>{const i=u.useId().replace(/[^a-zA-Z0-9_-]/g,""),d=`tour-widget-tail-gradient-${i}`,c=`tour-widget-tail-blur-${i}`,o=fe[t];return r.jsxs(r.Fragment,{children:[r.jsxs(oe,{"aria-hidden":!0,viewBox:o.viewBox,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:d,x1:o.gradient.x1,y1:o.gradient.y1,x2:o.gradient.x2,y2:o.gradient.y2,gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:"0",stopColor:`var(${e.themeShapeStart}, ${h.light[e.themeShapeStart]})`,stopOpacity:o.gradient.startOpacity}),r.jsx("stop",{offset:o.gradient.middleOffset,stopColor:`var(${e.themeShapeMiddle}, ${h.light[e.themeShapeMiddle]})`,stopOpacity:o.gradient.middleOpacity}),r.jsx("stop",{offset:"1",stopColor:`var(${e.themeShapeEnd}, ${h.light[e.themeShapeEnd]})`,stopOpacity:o.gradient.endOpacity})]}),r.jsx("filter",{id:c,x:o.filter.x,y:o.filter.y,width:o.filter.width,height:o.filter.height,children:r.jsx("feGaussianBlur",{stdDeviation:o.filter.blur})})]}),r.jsx("path",{d:o.path,fill:`url(#${d})`,filter:`url(#${c})`})]}),r.jsx(M,{"aria-hidden":!0}),r.jsx(de,{"aria-hidden":!0})]})};I.displayName="TourWidget.Gradient";try{TourWidget.Gradient.displayName="TourWidget.Gradient",TourWidget.Gradient.__docgenInfo={description:"",displayName:"TourWidget.Gradient",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const B=()=>{var t;return!!((t=document.documentElement.getAttribute("data-theme"))!=null&&t.toLowerCase().includes("dark"))},ye=()=>{const[t,i]=u.useState(B);return u.useEffect(()=>{i(B());const d=new MutationObserver(()=>i(B()));return d.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>d.disconnect()},[]),t},be={horizontal:a.horizontal,vertical:a.vertical},xe=u.forwardRef(({children:t,orientation:i="vertical",activeStepIndex:d,className:c,...o},p)=>{const l=ye();return r.jsx(Q,{value:{activeStepIndex:d},children:r.jsxs(ie,{ref:p,$orientation:i,$isDark:l,className:F(be[i],c),...o,children:[r.jsx(I,{orientation:i}),t]})})}),O=Object.assign(xe,{Header:R,Content:j,Footer:D,Bullet:k,Bullets:L});O.displayName="TourWidget";try{O.displayName="TourWidget",O.__docgenInfo={description:"",displayName:"TourWidget",props:{orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activeStepIndex:{defaultValue:null,description:"Активный шаг тура. Нумерация с нуля.",name:"activeStepIndex",required:!1,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}export{O as T};
