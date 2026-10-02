import{r as g,d as r}from"./react-D2T61mpp.js";import{d as E,o as U}from"./utils-BE2UrxrW.js";import{a as B}from"./AnalyticalWidget-CNgldML7.js";import{cK as Z,cL as C,x as y,cM as X,aw as K}from"./@salutejs/sdds-themes-BWS17lsS.js";import{H as u,C as v}from"./styled-components-egl4WZWx.js";const d="TourWidget__",t={root:`${d}root`,horizontal:`${d}horizontal`,vertical:`${d}vertical`,header:`${d}header`,headerTitle:`${d}header-title`,headerDescription:`${d}header-description`,content:`${d}content`,footer:`${d}footer`,gradient:`${d}gradient`,shapeGradient:`${d}shape-gradient`,bullets:`${d}bullets`,bulletsTrack:`${d}bullets-track`,bullet:`${d}bullet`,bulletActive:`${d}bullet-active`,bulletEdge:`${d}bullet-edge`},D=g.createContext({}),J=D.Provider,V=()=>g.useContext(D),W=`linear-gradient(
  270deg,
  #00dfff 33.759%,
  #51b7fb 63.268%,
  #bbb0fc 84.246%
)`,$=`linear-gradient(
  180deg,
  #56ff71 0%,
  rgba(86, 255, 113, 0) 100%
)`,G={light:{"--tour-widget-theme-background":C,"--tour-widget-theme-gradient-vertical":W,"--tour-widget-theme-gradient-horizontal":W,"--tour-widget-theme-gradient-opacity":"0.53","--tour-widget-theme-gradient-vertical-blur":"45px","--tour-widget-theme-gradient-horizontal-blur":"45px","--tour-widget-theme-oval-background":$,"--tour-widget-theme-oval-vertical-opacity":"0.42","--tour-widget-theme-oval-horizontal-opacity":"0.42","--tour-widget-theme-oval-vertical-blur":"48px","--tour-widget-theme-oval-horizontal-blur":"48px","--tour-widget-theme-shape-opacity":"0.32","--tour-widget-theme-shape-start":"#bbb0fc","--tour-widget-theme-shape-middle":"#00dfff","--tour-widget-theme-shape-end":"#56ff71"},dark:{"--tour-widget-theme-background":Z,"--tour-widget-theme-gradient-vertical":`linear-gradient(
      -45.68deg,
      rgb(56 255 62) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 194 219) 44.903%,
      rgb(110 135 219) 69.826%
    )`,"--tour-widget-theme-gradient-horizontal":`linear-gradient(
      -45.68deg,
      rgb(56 255 136) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 138 219) 44.903%,
      rgb(90 117 207) 69.826%
    )`,"--tour-widget-theme-gradient-opacity":"1","--tour-widget-theme-gradient-vertical-blur":"34px","--tour-widget-theme-gradient-horizontal-blur":"46px","--tour-widget-theme-oval-background":$,"--tour-widget-theme-oval-vertical-opacity":"1","--tour-widget-theme-oval-horizontal-opacity":"0.82","--tour-widget-theme-oval-vertical-blur":"37px","--tour-widget-theme-oval-horizontal-blur":"86px","--tour-widget-theme-shape-opacity":"0.84","--tour-widget-theme-shape-start":"#6e87db","--tour-widget-theme-shape-middle":"#00e0ff","--tour-widget-theme-shape-end":"#56ff88"}},w=G.light,l={radius:"14px",contentRadius:"6px",cardBg:()=>`var(--tour-widget-theme-background, ${C})`,titleColor:()=>y,descriptionColor:()=>y},Q=v`
  --tour-widget-gradient-frame-height: 20%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 60%;

  --tour-widget-gradient-background: var(
    --tour-widget-theme-gradient-vertical,
    ${w["--tour-widget-theme-gradient-vertical"]}
  );
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -15%;
  --tour-widget-gradient-top: 60%;
  --tour-widget-gradient-blur: var(
    --tour-widget-theme-gradient-vertical-blur,
    45px
  );
  --tour-widget-gradient-opacity: var(
    --tour-widget-theme-gradient-opacity,
    0.53
  );

  --tour-widget-inline-oval-display: none;
  --tour-widget-oval-frame-display: block;
  --tour-widget-oval-frame-height: 32%;
  --tour-widget-oval-border-radius: 50%;
  --tour-widget-shape-gradient-mask-start: 84%;
  --tour-widget-shape-gradient-mask-middle: 94%;

  --tour-widget-oval-width: 45%;
  --tour-widget-oval-height: 100%;
  --tour-widget-oval-left: 78%;
  --tour-widget-oval-top: 35%;
  --tour-widget-oval-blur: var(--tour-widget-theme-oval-vertical-blur, 48px);
  --tour-widget-oval-opacity: var(
    --tour-widget-theme-oval-vertical-opacity,
    0.42
  );
`,Y=v`
  --tour-widget-gradient-frame-height: 30%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 78%;

  --tour-widget-gradient-background: var(
    --tour-widget-theme-gradient-horizontal,
    ${w["--tour-widget-theme-gradient-horizontal"]}
  );
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -10%;
  --tour-widget-gradient-top: 55%;
  --tour-widget-gradient-blur: var(
    --tour-widget-theme-gradient-horizontal-blur,
    45px
  );
  --tour-widget-gradient-opacity: var(
    --tour-widget-theme-gradient-opacity,
    0.53
  );

  --tour-widget-inline-oval-display: none;
  --tour-widget-oval-frame-display: block;
  --tour-widget-oval-frame-height: 42%;
  --tour-widget-oval-border-radius: 50%;
  --tour-widget-shape-gradient-mask-start: 76%;
  --tour-widget-shape-gradient-mask-middle: 88%;

  --tour-widget-oval-width: 30%;
  --tour-widget-oval-height: 120%;
  --tour-widget-oval-left: 84%;
  --tour-widget-oval-top: 20%;
  --tour-widget-oval-blur: var(--tour-widget-theme-oval-horizontal-blur, 48px);
  --tour-widget-oval-opacity: var(
    --tour-widget-theme-oval-horizontal-opacity,
    0.42
  );
`,ee=v`
  ${Q}

  display: flex;
  flex-direction: column;

  & .${t.content} {
    padding: 16px 16px 0 16px;
  }

  & .${t.header} {
    padding-top: 24px;
    padding-inline: 16px;
  }

  & .${t.footer} {
    padding: 24px 16px 16px;
  }
`,te=v`
  ${Y}

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: max-content minmax(0, 1fr) max-content;
  align-items: stretch;

  & .${t.header} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding: 16px 16px 0;
  }

  & .${t.footer} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    align-self: end;
    margin-top: 0;
    padding: 24px 16px 16px;
  }

  &:has(> .${t.content}) {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    column-gap: 24px;
  }

  &:has(> .${t.content}) .${t.content} {
    grid-column: 1;
    grid-row: 1 / 4;
    padding: 16px 0 16px 16px;
  }

  &:has(> .${t.content}) .${t.header} {
    grid-column: 2;
    grid-row: 1;
    padding: 16px 16px 0 0;
  }

  &:has(> .${t.content}) .${t.footer} {
    grid-column: 2;
    grid-row: 3;
    padding: 0 16px 16px 0;
  }
`,re=({$orientation:e})=>e==="vertical"?ee:te,ie=u.div.attrs({className:t.root})`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-width: var(--tour-widget-min-width, auto);
  width: fit-content;
  color: ${l.titleColor};
  border: 4px solid transparent;
  background: linear-gradient(
        var(--tour-widget-background, ${l.cardBg}),
        var(--tour-widget-background, ${l.cardBg})
      )
      padding-box,
    ${X} border-box;
  border-radius: var(--tour-widget-border-radius, ${l.radius});

  & > :not(.${t.gradient}):not(.${t.shapeGradient}) {
    position: relative;
    z-index: 1;
  }

  ${({$isDark:e})=>G[e?"dark":"light"]}

  ${re}

  ${({$css:e})=>e}
`,ae=u.svg.attrs({className:t.shapeGradient,focusable:"false",preserveAspectRatio:"none"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  clip-path: inset(
    0 round max(0px, calc(var(--tour-widget-border-radius, ${l.radius}) - 4px))
  );
  opacity: var(
    --tour-widget-shape-gradient-opacity,
    var(--tour-widget-theme-shape-opacity, 0.32)
  );

  /* Маска оставляет SVG-хвост видимым только в нижней части карточки,
     чтобы диагональная фигура не перекрывала основной фон сверху. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent var(--tour-widget-shape-gradient-mask-start, 42%),
    rgba(0, 0, 0, 0.55) var(--tour-widget-shape-gradient-mask-middle, 58%),
    #000 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent var(--tour-widget-shape-gradient-mask-start, 42%),
    rgba(0, 0, 0, 0.55) var(--tour-widget-shape-gradient-mask-middle, 58%),
    #000 100%
  );

  & path {
    opacity: var(--tour-widget-shape-gradient-path-opacity, 0.86);
  }
`,S=u.div.attrs({className:t.gradient})`
  position: absolute;
  z-index: 0;
  left: var(--tour-widget-gradient-frame-left, 0);
  right: var(--tour-widget-gradient-frame-right, 0);
  bottom: var(--tour-widget-gradient-frame-bottom, 0);
  height: var(--tour-widget-gradient-frame-height, 36%);
  overflow: hidden;
  border-radius: max(
    0px,
    calc(var(--tour-widget-border-radius, ${l.radius}) - 4px)
  );
  pointer-events: none;

  /* Маска плавно проявляет нижний gradient-frame и срезает верхнюю часть blur,
     иначе размытие уходит слишком высоко поверх контента. */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 var(--tour-widget-gradient-frame-fade, 24%),
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
    width: var(--tour-widget-gradient-width);
    height: var(--tour-widget-gradient-height);
    left: var(--tour-widget-gradient-left);
    top: var(--tour-widget-gradient-top);

    background: var(
      --tour-widget-gradient-background,
      ${w["--tour-widget-theme-gradient-horizontal"]}
    );

    filter: blur(var(--tour-widget-gradient-blur, 69px));
    opacity: var(--tour-widget-gradient-opacity, 1);
  }

  /* ::after — отдельный зеленый овал справа. Его blur смешивается с
     прямоугольником и дает зеленую подсветку, как в Figma-композиции. */
  &::after {
    display: var(--tour-widget-inline-oval-display, block);
    width: var(--tour-widget-oval-width);
    height: var(--tour-widget-oval-height);
    left: var(--tour-widget-oval-left);
    top: var(--tour-widget-oval-top);
    border-radius: var(--tour-widget-oval-border-radius, 0);

    background: var(
      --tour-widget-oval-background,
      var(
        --tour-widget-theme-oval-background,
        ${w["--tour-widget-theme-oval-background"]}
      )
    );

    filter: blur(var(--tour-widget-oval-blur, 127px));
    opacity: var(--tour-widget-oval-opacity, 1);
  }
`,oe=u(S)`
  display: var(--tour-widget-oval-frame-display, none);
  height: var(--tour-widget-oval-frame-height, 0%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 40%, #000 100%);

  &::before {
    display: none;
  }

  &::after {
    display: block;
  }
`,de=u.div.attrs({className:t.header})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  ${({$css:e})=>e}
`,ne=u(B).attrs({className:t.headerTitle})`
  min-width: 0;
  color: ${l.titleColor};
  white-space: pre-line;
`,ue=u(B).attrs({className:t.headerDescription})`
  min-width: 0;
  color: ${l.descriptionColor};
  white-space: pre-line;
`,se=u.div.attrs({className:t.content})`
  & img,
  & picture,
  & video,
  & canvas,
  & svg {
    display: block;
    object-fit: cover;
    border-radius: var(--tour-widget-content-border-radius, ${l.contentRadius});
  }

  ${({$css:e})=>e}
`,le=u.div.attrs({className:t.footer})`
  min-width: 0;

  ${({$css:e})=>e}
`,ge=u.div.attrs({className:t.bullets})`
  display: inline-block;
  width: var(--tour-widget-bullets-width, auto);
  min-width: 0;
  overflow: hidden;

  ${({$css:e})=>e}
`,ce=u.div.attrs({className:t.bulletsTrack})`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(var(--tour-widget-bullets-offset, 0px));
  transition: transform 300ms ease;
  will-change: transform;
`,me=u.span.attrs({className:t.bullet})`
  display: block;
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(
    --tour-widget-bullet-background,
    ${K}
  );
  transform: scale(1);
  transform-origin: center;
  transition: background-color 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  &.${t.bulletActive} {
    background: var(--tour-widget-bullet-active-background, ${y});
  }

  &.${t.bulletEdge} {
    transform: scale(0.75);
  }

  ${({$css:e})=>e}
`,T=g.forwardRef(({index:e,active:a,className:o,"aria-label":s,...i},c)=>{const{activeStepIndex:n}=V(),p=a??(typeof e=="number"&&n===e);return r.jsxDEV(me,{ref:c,className:E(p&&t.bulletActive,o),"aria-current":p?"step":void 0,"aria-label":s??(typeof e=="number"?`Шаг ${e+1}`:void 0),...i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullet.tsx",lineNumber:18,columnNumber:5},void 0)});T.displayName="TourWidget.Bullet";try{TourWidget.Bullet.displayName="TourWidget.Bullet",TourWidget.Bullet.__docgenInfo={description:"",displayName:"TourWidget.Bullet",props:{index:{defaultValue:null,description:"Индекс буллета. Сравнивается с `TourWidget.activeStepIndex`.",name:"index",required:!1,type:{name:"number"}},active:{defaultValue:null,description:"Ручное переопределение активного состояния.",name:"active",required:!1,type:{name:"boolean"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const f=7,j=8,z=8,pe=j+z,_=(e,a,o)=>Math.min(Math.max(e,a),o),he=e=>Number.isFinite(e)?Math.max(0,Math.floor(e)):0,fe=e=>e>0?e*j+(e-1)*z:0,I=g.forwardRef(({count:e,style:a,"aria-label":o,...s},i)=>{const{activeStepIndex:c=0}=V(),n=he(e),p=Number.isFinite(c)?Math.floor(c):0,b=n>0?_(p,0,n-1):0,x=Math.min(n,f),A=Math.max(0,n-x),h=n>f?_(b-Math.floor(f/2),0,A):0,N=h+x-1,q=h>0,R=N<n-1,M={...a,"--tour-widget-bullets-offset":`-${h*pe}px`,"--tour-widget-bullets-width":`${fe(x)}px`};return r.jsxDEV(ge,{ref:i,"aria-label":o??(n>0?`Шаг ${b+1} из ${n}`:void 0),style:M,...s,children:r.jsxDEV(ce,{children:Array.from({length:n},(xe,m)=>{const P=n>f&&(m===h&&q||m===N&&R);return r.jsxDEV(T,{index:m,active:m===b,className:P?t.bulletEdge:void 0},m,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:79,columnNumber:13},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:71,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:60,columnNumber:5},void 0)});I.displayName="TourWidget.Bullets";try{TourWidget.Bullets.displayName="TourWidget.Bullets",TourWidget.Bullets.__docgenInfo={description:"",displayName:"TourWidget.Bullets",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const F=g.forwardRef(({children:e,...a},o)=>r.jsxDEV(se,{ref:o,...a,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetContent.tsx",lineNumber:10,columnNumber:3},void 0));F.displayName="TourWidget.Content";try{TourWidget.Content.displayName="TourWidget.Content",TourWidget.Content.__docgenInfo={description:"",displayName:"TourWidget.Content",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const H=g.forwardRef(({children:e,...a},o)=>r.jsxDEV(le,{ref:o,...a,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetFooter.tsx",lineNumber:10,columnNumber:3},void 0));H.displayName="TourWidget.Footer";try{TourWidget.Footer.displayName="TourWidget.Footer",TourWidget.Footer.__docgenInfo={description:"",displayName:"TourWidget.Footer",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const L=g.forwardRef(({title:e,description:a,children:o,...s},i)=>r.jsxDEV(de,{ref:i,...s,children:[e!=null&&r.jsxDEV(ne,{variant:"H3",bold:!0,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:16,columnNumber:7},void 0),a!=null&&r.jsxDEV(ue,{variant:"TextM",children:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:21,columnNumber:7},void 0),o]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:14,columnNumber:3},void 0));L.displayName="TourWidget.Header";try{TourWidget.Header.displayName="TourWidget.Header",TourWidget.Header.__docgenInfo={description:"",displayName:"TourWidget.Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const we={vertical:{viewBox:"0 0 286 480",gradient:{x1:"0",y1:"318",x2:"286",y2:"480",middleOffset:"0.5",startOpacity:"0.56",middleOpacity:"0.62",endOpacity:"0.74"},filter:{x:"-20%",y:"-30%",width:"140%",height:"170%",blur:"18"},path:"M0 318 C 34 420 138 454 286 426 L286 482 L0 482 Z"},horizontal:{viewBox:"0 0 720 260",gradient:{x1:"0",y1:"170",x2:"720",y2:"260",middleOffset:"0.55",startOpacity:"0.5",middleOpacity:"0.58",endOpacity:"0.7"},filter:{x:"-12%",y:"-40%",width:"124%",height:"190%",blur:"22"},path:"M0 172 C 88 228 330 252 720 206 L720 262 L0 262 Z"}},O=({orientation:e})=>{const a=g.useId().replace(/[^a-zA-Z0-9_-]/g,""),o=`tour-widget-tail-gradient-${a}`,s=`tour-widget-tail-blur-${a}`,i=we[e];return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(ae,{"aria-hidden":!0,viewBox:i.viewBox,children:[r.jsxDEV("defs",{children:[r.jsxDEV("linearGradient",{id:o,x1:i.gradient.x1,y1:i.gradient.y1,x2:i.gradient.x2,y2:i.gradient.y2,gradientUnits:"userSpaceOnUse",children:[r.jsxDEV("stop",{offset:"0",stopColor:"var(--tour-widget-theme-shape-start, #bbb0fc)",stopOpacity:i.gradient.startOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:82,columnNumber:13},void 0),r.jsxDEV("stop",{offset:i.gradient.middleOffset,stopColor:"var(--tour-widget-theme-shape-middle, #00dfff)",stopOpacity:i.gradient.middleOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:87,columnNumber:13},void 0),r.jsxDEV("stop",{offset:"1",stopColor:"var(--tour-widget-theme-shape-end, #56ff71)",stopOpacity:i.gradient.endOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:92,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:74,columnNumber:11},void 0),r.jsxDEV("filter",{id:s,x:i.filter.x,y:i.filter.y,width:i.filter.width,height:i.filter.height,children:r.jsxDEV("feGaussianBlur",{stdDeviation:i.filter.blur},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:105,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:98,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:73,columnNumber:9},void 0),r.jsxDEV("path",{d:i.path,fill:`url(#${o})`,filter:`url(#${s})`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:108,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:72,columnNumber:7},void 0),r.jsxDEV(S,{"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:114,columnNumber:7},void 0),r.jsxDEV(oe,{"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:115,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:71,columnNumber:5},void 0)};O.displayName="TourWidget.Gradient";try{TourWidget.Gradient.displayName="TourWidget.Gradient",TourWidget.Gradient.__docgenInfo={description:"",displayName:"TourWidget.Gradient",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const ve={horizontal:t.horizontal,vertical:t.vertical},be=g.forwardRef(({children:e,orientation:a="vertical",activeStepIndex:o,className:s,...i},c)=>{const n=U();return r.jsxDEV(J,{value:{activeStepIndex:o},children:r.jsxDEV(ie,{ref:c,$orientation:a,$isDark:n==="dark",className:E(ve[a],s),...i,children:[r.jsxDEV(O,{orientation:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:40,columnNumber:11},void 0),e]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:33,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:32,columnNumber:7},void 0)}),k=Object.assign(be,{Header:L,Content:F,Footer:H,Bullet:T,Bullets:I});k.displayName="TourWidget";try{k.displayName="TourWidget",k.__docgenInfo={description:"",displayName:"TourWidget",props:{orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activeStepIndex:{defaultValue:null,description:"Активный шаг тура. Нумерация с нуля.",name:"activeStepIndex",required:!1,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}export{k as T};
