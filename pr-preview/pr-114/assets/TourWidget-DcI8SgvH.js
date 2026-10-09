import{r as s,d as r}from"./react-D2T61mpp.js";import{f as S}from"./utils-0LQegF5b.js";import{a as V}from"./AiAgentPopup-DVfjVdJ6.js";import{cN as X,cO as E,x as w,ch as J,aw as K}from"./@salutejs/sdds-themes-DL6tmVfr.js";import{H as l,C as y}from"./styled-components-B4nx6Z04.js";const d="TourWidget__",a={root:`${d}root`,horizontal:`${d}horizontal`,vertical:`${d}vertical`,header:`${d}header`,headerTitle:`${d}header-title`,headerDescription:`${d}header-description`,content:`${d}content`,footer:`${d}footer`,gradient:`${d}gradient`,shapeGradient:`${d}shape-gradient`,bullets:`${d}bullets`,bulletsTrack:`${d}bullets-track`,bullet:`${d}bullet`,bulletActive:`${d}bullet-active`,bulletEdge:`${d}bullet-edge`},D=s.createContext({}),Q=D.Provider,F=()=>s.useContext(D),e={background:"--tour-widget-background",borderRadius:"--tour-widget-border-radius",bulletActiveBackground:"--tour-widget-bullet-active-background",bulletBackground:"--tour-widget-bullet-background",bulletsOffset:"--tour-widget-bullets-offset",bulletsWidth:"--tour-widget-bullets-width",contentBorderRadius:"--tour-widget-content-border-radius",gradientBackground:"--tour-widget-gradient-background",gradientBlur:"--tour-widget-gradient-blur",gradientFrameBottom:"--tour-widget-gradient-frame-bottom",gradientFrameFade:"--tour-widget-gradient-frame-fade",gradientFrameHeight:"--tour-widget-gradient-frame-height",gradientFrameLeft:"--tour-widget-gradient-frame-left",gradientFrameRight:"--tour-widget-gradient-frame-right",gradientHeight:"--tour-widget-gradient-height",gradientLeft:"--tour-widget-gradient-left",gradientOpacity:"--tour-widget-gradient-opacity",gradientTop:"--tour-widget-gradient-top",gradientWidth:"--tour-widget-gradient-width",inlineOvalDisplay:"--tour-widget-inline-oval-display",minWidth:"--tour-widget-min-width",ovalBackground:"--tour-widget-oval-background",ovalBlur:"--tour-widget-oval-blur",ovalBorderRadius:"--tour-widget-oval-border-radius",ovalFrameDisplay:"--tour-widget-oval-frame-display",ovalFrameHeight:"--tour-widget-oval-frame-height",ovalHeight:"--tour-widget-oval-height",ovalLeft:"--tour-widget-oval-left",ovalOpacity:"--tour-widget-oval-opacity",ovalTop:"--tour-widget-oval-top",ovalWidth:"--tour-widget-oval-width",shapeGradientMaskMiddle:"--tour-widget-shape-gradient-mask-middle",shapeGradientMaskStart:"--tour-widget-shape-gradient-mask-start",shapeGradientOpacity:"--tour-widget-shape-gradient-opacity",shapeGradientPathOpacity:"--tour-widget-shape-gradient-path-opacity",themeBackground:"--tour-widget-theme-background",themeGradientHorizontal:"--tour-widget-theme-gradient-horizontal",themeGradientHorizontalBlur:"--tour-widget-theme-gradient-horizontal-blur",themeGradientOpacity:"--tour-widget-theme-gradient-opacity",themeGradientVertical:"--tour-widget-theme-gradient-vertical",themeGradientVerticalBlur:"--tour-widget-theme-gradient-vertical-blur",themeOvalBackground:"--tour-widget-theme-oval-background",themeOvalHorizontalBlur:"--tour-widget-theme-oval-horizontal-blur",themeOvalHorizontalOpacity:"--tour-widget-theme-oval-horizontal-opacity",themeOvalVerticalBlur:"--tour-widget-theme-oval-vertical-blur",themeOvalVerticalOpacity:"--tour-widget-theme-oval-vertical-opacity",themeShapeEnd:"--tour-widget-theme-shape-end",themeShapeMiddle:"--tour-widget-theme-shape-middle",themeShapeOpacity:"--tour-widget-theme-shape-opacity",themeShapeStart:"--tour-widget-theme-shape-start"},O=`linear-gradient(
  270deg,
  #00dfff 33.759%,
  #51b7fb 63.268%,
  #bbb0fc 84.246%
)`,G=`linear-gradient(
  180deg,
  #56ff71 0%,
  rgba(86, 255, 113, 0) 100%
)`,h={light:{[e.themeBackground]:E,[e.themeGradientVertical]:O,[e.themeGradientHorizontal]:O,[e.themeGradientOpacity]:"1",[e.themeGradientVerticalBlur]:"25px",[e.themeGradientHorizontalBlur]:"25px",[e.themeOvalBackground]:G,[e.themeOvalVerticalOpacity]:"0.42",[e.themeOvalHorizontalOpacity]:"0.42",[e.themeOvalVerticalBlur]:"48px",[e.themeOvalHorizontalBlur]:"15px",[e.themeShapeOpacity]:"0.32",[e.themeShapeStart]:"#bbb0fc",[e.themeShapeMiddle]:"#00dfff",[e.themeShapeEnd]:"#56ff71"},dark:{[e.themeBackground]:X,[e.themeGradientVertical]:`linear-gradient(
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
    )`,[e.themeGradientOpacity]:"1",[e.themeGradientVerticalBlur]:"25px",[e.themeGradientHorizontalBlur]:"25px",[e.themeOvalBackground]:G,[e.themeOvalVerticalOpacity]:"0.42",[e.themeOvalHorizontalOpacity]:"0.42",[e.themeOvalVerticalBlur]:"48px",[e.themeOvalHorizontalBlur]:"15px",[e.themeShapeOpacity]:"0.32",[e.themeShapeStart]:"#6e87db",[e.themeShapeMiddle]:"#00e0ff",[e.themeShapeEnd]:"#56ff88"}},$=h.light,m={radius:"14px",contentRadius:"6px",cardBg:()=>`var(${e.themeBackground}, ${E})`,titleColor:()=>w,descriptionColor:()=>w},Y=y`
  ${e.gradientFrameHeight}: 10%;
  ${e.gradientFrameLeft}: 0;
  ${e.gradientFrameRight}: 0;
  ${e.gradientFrameBottom}: 0;
  ${e.gradientFrameFade}: 60%;

  ${e.gradientBackground}: var(
    ${e.themeGradientVertical},
    ${$[e.themeGradientVertical]}
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
`,ee=y`
  ${e.gradientFrameHeight}: 30%;
  ${e.gradientFrameLeft}: 0;
  ${e.gradientFrameRight}: 0;
  ${e.gradientFrameBottom}: 0;
  ${e.gradientFrameFade}: 78%;

  ${e.gradientBackground}: var(
    ${e.themeGradientHorizontal},
    ${$[e.themeGradientHorizontal]}
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
`,te=y`
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
`,ae=y`
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
`,re=({$orientation:t})=>t==="vertical"?te:ae,ie=l.div.attrs({className:a.root})`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-sizing: border-box;
  min-width: var(${e.minWidth}, auto);
  width: fit-content;
  color: ${m.titleColor};
  border: 4px solid transparent;
  background: linear-gradient(
        var(${e.background}, ${m.cardBg}),
        var(${e.background}, ${m.cardBg})
      )
      padding-box,
    ${J} border-box;
  border-radius: var(${e.borderRadius}, ${m.radius});

  & > :not(.${a.gradient}):not(.${a.shapeGradient}) {
    position: relative;
    z-index: 1;
  }

  ${({$isDark:t})=>h[t?"dark":"light"]}

  ${re}

  ${({$css:t})=>t}
`,oe=l.svg.attrs({className:a.shapeGradient,focusable:"false",preserveAspectRatio:"none"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  clip-path: inset(
    0 round max(0px, calc(var(${e.borderRadius}, ${m.radius}) - 4px))
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
`,H=l.div.attrs({className:a.gradient})`
  position: absolute;
  z-index: 0;
  left: var(${e.gradientFrameLeft}, 0);
  right: var(${e.gradientFrameRight}, 0);
  bottom: var(${e.gradientFrameBottom}, 0);
  height: var(${e.gradientFrameHeight}, 36%);
  overflow: hidden;
  border-radius: max(0px, calc(var(${e.borderRadius}, ${m.radius}) - 4px));
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
      ${$[e.themeGradientHorizontal]}
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
        ${$[e.themeOvalBackground]}
      )
    );

    filter: blur(var(${e.ovalBlur}, 127px));
    opacity: var(${e.ovalOpacity}, 1);
  }
`,ne=l(H)`
  display: var(${e.ovalFrameDisplay}, none);
  height: var(${e.ovalFrameHeight}, 0%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 40%, #000 100%);

  &::before {
    display: none;
  }

  &::after {
    display: block;
  }
`,de=l.div.attrs({className:a.header})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  ${({$css:t})=>t}
`,ue=l(V).attrs({className:a.headerTitle})`
  min-width: 0;
  color: ${m.titleColor};
  white-space: pre-line;
`,le=l(V).attrs({className:a.headerDescription})`
  min-width: 0;
  color: ${m.descriptionColor};
  white-space: pre-line;
`,se=l.div.attrs({className:a.content})`
  & img,
  & picture,
  & video,
  & canvas,
  & svg {
    display: block;
    object-fit: cover;
    border-radius: var(${e.contentBorderRadius}, ${m.contentRadius});
  }

  ${({$css:t})=>t}
`,ce=l.div.attrs({className:a.footer})`
  min-width: 0;

  ${({$css:t})=>t}
`,me=l.div.attrs({className:a.bullets})`
  display: inline-block;
  width: var(${e.bulletsWidth}, auto);
  min-width: 0;
  overflow: hidden;

  ${({$css:t})=>t}
`,ge=l.div.attrs({className:a.bulletsTrack})`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(var(${e.bulletsOffset}, 0px));
  transition: transform 300ms ease;
  will-change: transform;
`,pe=l.span.attrs({className:a.bullet})`
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
    background: var(${e.bulletActiveBackground}, ${w});
  }

  &.${a.bulletEdge} {
    transform: scale(0.75);
  }

  ${({$css:t})=>t}
`,N=s.forwardRef(({index:t,active:i,className:n,"aria-label":c,...o},g)=>{const{activeStepIndex:u}=F(),f=i??(typeof t=="number"&&u===t);return r.jsxDEV(pe,{ref:g,className:S(f&&a.bulletActive,n),"aria-current":f?"step":void 0,"aria-label":c??(typeof t=="number"?`Шаг ${t+1}`:void 0),...o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullet.tsx",lineNumber:18,columnNumber:5},void 0)});N.displayName="TourWidget.Bullet";try{TourWidget.Bullet.displayName="TourWidget.Bullet",TourWidget.Bullet.__docgenInfo={description:"",displayName:"TourWidget.Bullet",props:{index:{defaultValue:null,description:"Индекс буллета. Сравнивается с `TourWidget.activeStepIndex`.",name:"index",required:!1,type:{name:"number"}},active:{defaultValue:null,description:"Ручное переопределение активного состояния.",name:"active",required:!1,type:{name:"boolean"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const b=7,C=8,z=8,he=C+z,_=(t,i,n)=>Math.min(Math.max(t,i),n),fe=t=>Number.isFinite(t)?Math.max(0,Math.floor(t)):0,ve=t=>t>0?t*C+(t-1)*z:0,M=s.forwardRef(({count:t,style:i,"aria-label":n,...c},o)=>{const{activeStepIndex:g=0}=F(),u=fe(t),f=Number.isFinite(g)?Math.floor(g):0,x=u>0?_(f,0,u-1):0,k=Math.min(u,b),A=Math.max(0,u-k),v=u>b?_(x-Math.floor(b/2),0,A):0,B=v+k-1,q=v>0,P=B<u-1,U={...i,[e.bulletsOffset]:`-${v*he}px`,[e.bulletsWidth]:`${ve(k)}px`};return r.jsxDEV(me,{ref:o,"aria-label":n??(u>0?`Шаг ${x+1} из ${u}`:void 0),style:U,...c,children:r.jsxDEV(ge,{children:Array.from({length:u},(ke,p)=>{const Z=u>b&&(p===v&&q||p===B&&P);return r.jsxDEV(N,{index:p,active:p===x,className:Z?a.bulletEdge:void 0},p,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:80,columnNumber:13},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:72,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:61,columnNumber:5},void 0)});M.displayName="TourWidget.Bullets";try{TourWidget.Bullets.displayName="TourWidget.Bullets",TourWidget.Bullets.__docgenInfo={description:"",displayName:"TourWidget.Bullets",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const L=s.forwardRef(({children:t,...i},n)=>r.jsxDEV(se,{ref:n,...i,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetContent.tsx",lineNumber:10,columnNumber:3},void 0));L.displayName="TourWidget.Content";try{TourWidget.Content.displayName="TourWidget.Content",TourWidget.Content.__docgenInfo={description:"",displayName:"TourWidget.Content",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const R=s.forwardRef(({children:t,...i},n)=>r.jsxDEV(ce,{ref:n,...i,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetFooter.tsx",lineNumber:10,columnNumber:3},void 0));R.displayName="TourWidget.Footer";try{TourWidget.Footer.displayName="TourWidget.Footer",TourWidget.Footer.__docgenInfo={description:"",displayName:"TourWidget.Footer",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const j=s.forwardRef(({title:t,description:i,children:n,...c},o)=>r.jsxDEV(de,{ref:o,...c,children:[t!=null&&r.jsxDEV(ue,{variant:"H3",bold:!0,children:t},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:16,columnNumber:7},void 0),i!=null&&r.jsxDEV(le,{variant:"TextM",children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:21,columnNumber:7},void 0),n]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:14,columnNumber:3},void 0));j.displayName="TourWidget.Header";try{TourWidget.Header.displayName="TourWidget.Header",TourWidget.Header.__docgenInfo={description:"",displayName:"TourWidget.Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const be={vertical:{viewBox:"0 0 286 480",gradient:{x1:"0",y1:"318",x2:"286",y2:"480",middleOffset:"0.5",startOpacity:"0.56",middleOpacity:"0.62",endOpacity:"0.74"},filter:{x:"-20%",y:"-30%",width:"140%",height:"170%",blur:"18"},path:"M0 318 C 34 420 138 454 286 426 L286 482 L0 482 Z"},horizontal:{viewBox:"0 0 720 260",gradient:{x1:"0",y1:"170",x2:"720",y2:"260",middleOffset:"0.55",startOpacity:"0.5",middleOpacity:"0.58",endOpacity:"0.7"},filter:{x:"-12%",y:"-40%",width:"124%",height:"190%",blur:"22"},path:"M0 172 C 88 228 330 252 720 206 L720 262 L0 262 Z"}},I=({orientation:t})=>{const i=s.useId().replace(/[^a-zA-Z0-9_-]/g,""),n=`tour-widget-tail-gradient-${i}`,c=`tour-widget-tail-blur-${i}`,o=be[t];return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(oe,{"aria-hidden":!0,viewBox:o.viewBox,children:[r.jsxDEV("defs",{children:[r.jsxDEV("linearGradient",{id:n,x1:o.gradient.x1,y1:o.gradient.y1,x2:o.gradient.x2,y2:o.gradient.y2,gradientUnits:"userSpaceOnUse",children:[r.jsxDEV("stop",{offset:"0",stopColor:`var(${e.themeShapeStart}, ${h.light[e.themeShapeStart]})`,stopOpacity:o.gradient.startOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:84,columnNumber:13},void 0),r.jsxDEV("stop",{offset:o.gradient.middleOffset,stopColor:`var(${e.themeShapeMiddle}, ${h.light[e.themeShapeMiddle]})`,stopOpacity:o.gradient.middleOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:91,columnNumber:13},void 0),r.jsxDEV("stop",{offset:"1",stopColor:`var(${e.themeShapeEnd}, ${h.light[e.themeShapeEnd]})`,stopOpacity:o.gradient.endOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:98,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:76,columnNumber:11},void 0),r.jsxDEV("filter",{id:c,x:o.filter.x,y:o.filter.y,width:o.filter.width,height:o.filter.height,children:r.jsxDEV("feGaussianBlur",{stdDeviation:o.filter.blur},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:113,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:106,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:75,columnNumber:9},void 0),r.jsxDEV("path",{d:o.path,fill:`url(#${n})`,filter:`url(#${c})`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:116,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:74,columnNumber:7},void 0),r.jsxDEV(H,{"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:122,columnNumber:7},void 0),r.jsxDEV(ne,{"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:123,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:73,columnNumber:5},void 0)};I.displayName="TourWidget.Gradient";try{TourWidget.Gradient.displayName="TourWidget.Gradient",TourWidget.Gradient.__docgenInfo={description:"",displayName:"TourWidget.Gradient",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const T=()=>{var t;return!!((t=document.documentElement.getAttribute("data-theme"))!=null&&t.toLowerCase().includes("dark"))},$e=()=>{const[t,i]=s.useState(T);return s.useEffect(()=>{i(T());const n=new MutationObserver(()=>i(T()));return n.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>n.disconnect()},[]),t},ye={horizontal:a.horizontal,vertical:a.vertical},xe=s.forwardRef(({children:t,orientation:i="vertical",activeStepIndex:n,className:c,...o},g)=>{const u=$e();return r.jsxDEV(Q,{value:{activeStepIndex:n},children:r.jsxDEV(ie,{ref:g,$orientation:i,$isDark:u,className:S(ye[i],c),...o,children:[r.jsxDEV(I,{orientation:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:40,columnNumber:11},void 0),t]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:33,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:32,columnNumber:7},void 0)}),W=Object.assign(xe,{Header:j,Content:L,Footer:R,Bullet:N,Bullets:M});W.displayName="TourWidget";try{W.displayName="TourWidget",W.__docgenInfo={description:"",displayName:"TourWidget",props:{orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activeStepIndex:{defaultValue:null,description:"Активный шаг тура. Нумерация с нуля.",name:"activeStepIndex",required:!1,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}export{W as T};
