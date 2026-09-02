import{r as c,d as r}from"./react-D2T61mpp.js";import{d as $}from"./utils-Dl3ZmthU.js";import{a as _}from"./AnalyticalWidget-D9a3c7nn.js";import{C as B,cG as L,au as q,a2 as M}from"./@salutejs/sdds-themes-CZ516YZq.js";import{H as s,C as w}from"./styled-components-CrE_0Vxv.js";const n="TourWidget__",t={root:`${n}root`,horizontal:`${n}horizontal`,vertical:`${n}vertical`,header:`${n}header`,headerTitle:`${n}header-title`,headerDescription:`${n}header-description`,content:`${n}content`,footer:`${n}footer`,gradient:`${n}gradient`,shapeGradient:`${n}shape-gradient`,bullets:`${n}bullets`,bulletsTrack:`${n}bullets-track`,bullet:`${n}bullet`,bulletActive:`${n}bullet-active`,bulletEdge:`${n}bullet-edge`},E=c.createContext({}),P=E.Provider,C=()=>c.useContext(E),d={verticalGreen:"56 255 62",horizontalGreen:"56 255 136",cyanSolid:"0 224 255",verticalBlue:"16 194 219",horizontalBlue:"16 138 219",verticalSlateBlue:"110 135 219",horizontalSlateBlue:"90 117 207",cyan:"0, 224, 255",blue:"25, 154, 240",periwinkle:"153, 176, 254",green:"#56ff71",greenTransparent:"rgba(86, 255, 113, 0)"},v={vertical:`linear-gradient(
    -45.68deg,
    rgb(${d.verticalGreen}) 16.982%,
    rgb(${d.cyanSolid}) 16.982%,
    rgb(${d.verticalBlue}) 44.903%,
    rgb(${d.verticalSlateBlue}) 69.826%
  )`,horizontal:`linear-gradient(
    -45.68deg,
    rgb(${d.horizontalGreen}) 16.982%,
    rgb(${d.cyanSolid}) 16.982%,
    rgb(${d.horizontalBlue}) 44.903%,
    rgb(${d.horizontalSlateBlue}) 69.826%
  )`,fallback:`linear-gradient(
    90deg,
    rgba(${d.periwinkle}, 0.56) 0%,
    rgba(${d.blue}, 0.76) 50%,
    rgba(${d.cyan}, 0.84) 100%
  )`,oval:`linear-gradient(
    180deg,
    ${d.green} 0%,
    ${d.greenTransparent} 100%
  )`},m={radius:"14px",contentRadius:"6px",cardBg:()=>L,titleColor:()=>B,descriptionColor:()=>M},U=w`
  --tour-widget-gradient-frame-height: 42%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 60%;

  --tour-widget-gradient-background: ${v.vertical};
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -15%;
  --tour-widget-gradient-top: 80%;
  --tour-widget-gradient-blur: 34px;
  --tour-widget-gradient-opacity: 1;

  --tour-widget-oval-width: 50%;
  --tour-widget-oval-height: 90%;
  --tour-widget-oval-left: 90%;
  --tour-widget-oval-top: 70%;
  --tour-widget-oval-blur: 37px;
  --tour-widget-oval-opacity: 1;
`,Z=w`
  --tour-widget-gradient-frame-height: 42%;
  --tour-widget-gradient-frame-left: 0;
  --tour-widget-gradient-frame-right: 0;
  --tour-widget-gradient-frame-bottom: 0;
  --tour-widget-gradient-frame-fade: 78%;

  --tour-widget-gradient-background: ${v.horizontal};
  --tour-widget-gradient-width: 115%;
  --tour-widget-gradient-height: 100%;
  --tour-widget-gradient-left: -10%;
  --tour-widget-gradient-top: 60%;
  --tour-widget-gradient-blur: 46px;
  --tour-widget-gradient-opacity: 1;

  --tour-widget-oval-width: 40%;
  --tour-widget-oval-height: 126%;
  --tour-widget-oval-left: 78%;
  --tour-widget-oval-top: 34%;
  --tour-widget-oval-blur: 86px;
  --tour-widget-oval-opacity: 0.82;
`,X=w`
  ${U}

  display: flex;
  flex-direction: column;

  & .${t.content} {
    padding: 10px 10px 0 10px;
  }

  & .${t.header} {
    padding-top: 24px;
    padding-inline: 10px;
  }

  & .${t.footer} {
    padding: 24px 10px 10px;
  }
`,J=w`
  ${Z}

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: max-content minmax(0, 1fr) max-content;
  align-items: stretch;

  & .${t.header} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding: 10px 10px 0;
  }

  & .${t.footer} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    align-self: end;
    margin-top: 0;
    padding: 24px 10px 10px;
  }

  &:has(> .${t.content}) {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    column-gap: 24px;
  }

  &:has(> .${t.content}) .${t.content} {
    grid-column: 1;
    grid-row: 1 / 4;
    padding: 10px 0 10px 10px;
  }

  &:has(> .${t.content}) .${t.header} {
    grid-column: 2;
    grid-row: 1;
    padding: 10px 10px 0 0;
  }

  &:has(> .${t.content}) .${t.footer} {
    grid-column: 2;
    grid-row: 3;
    padding: 0 10px 10px 0;
  }
`,K=({$orientation:e})=>e==="vertical"?X:J,Q=s.div.attrs({className:t.root})`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-width: var(--tour-widget-min-width, auto);
  width: fit-content;
  color: ${m.titleColor};
  background: var(--tour-widget-background, ${m.cardBg});
  border-radius: var(--tour-widget-border-radius, ${m.radius});

  & > :not(.${t.gradient}):not(.${t.shapeGradient}) {
    position: relative;
    z-index: 1;
  }

  ${K}

  ${({$css:e})=>e}
`,Y=s.svg.attrs({className:t.shapeGradient,focusable:"false",preserveAspectRatio:"none"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: var(--tour-widget-shape-gradient-opacity, 0.84);

  /* Маска оставляет SVG-хвост видимым только в нижней части карточки,
     чтобы диагональная фигура не перекрывала основной темный фон сверху. */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 42%,
    rgba(0, 0, 0, 0.55) 58%,
    #000 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 42%,
    rgba(0, 0, 0, 0.55) 58%,
    #000 100%
  );

  & path {
    opacity: var(--tour-widget-shape-gradient-path-opacity, 0.86);
  }
`,ee=s.div.attrs({className:t.gradient})`
  position: absolute;
  z-index: 0;
  left: var(--tour-widget-gradient-frame-left, 0);
  right: var(--tour-widget-gradient-frame-right, 0);
  bottom: var(--tour-widget-gradient-frame-bottom, 0);
  height: var(--tour-widget-gradient-frame-height, 36%);
  overflow: hidden;
  border-radius: inherit;
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
      ${v.fallback}
    );

    filter: blur(var(--tour-widget-gradient-blur, 69px));
    opacity: var(--tour-widget-gradient-opacity, 1);
  }

  /* ::after — отдельный зеленый овал справа. Его blur смешивается с
     прямоугольником и дает зеленую подсветку, как в Figma-композиции. */
  &::after {
    width: var(--tour-widget-oval-width);
    height: var(--tour-widget-oval-height);
    left: var(--tour-widget-oval-left);
    top: var(--tour-widget-oval-top);

    background: var(
      --tour-widget-oval-background,
      ${v.oval}
    );

    filter: blur(var(--tour-widget-oval-blur, 127px));
    opacity: var(--tour-widget-oval-opacity, 1);
  }
`,te=s.div.attrs({className:t.header})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  ${({$css:e})=>e}
`,re=s(_).attrs({className:t.headerTitle})`
  min-width: 0;
  color: ${m.titleColor};
`,ie=s(_).attrs({className:t.headerDescription})`
  min-width: 0;
  color: ${m.descriptionColor};
`,oe=s.div.attrs({className:t.content})`
  & img,
  & picture,
  & video,
  & canvas,
  & svg {
    display: block;
    object-fit: cover;
    border-radius: var(--tour-widget-content-border-radius, ${m.contentRadius});
  }

  ${({$css:e})=>e}
`,ae=s.div.attrs({className:t.footer})`
  min-width: 0;

  ${({$css:e})=>e}
`,ne=s.div.attrs({className:t.bullets})`
  display: inline-block;
  width: var(--tour-widget-bullets-width, auto);
  min-width: 0;
  overflow: hidden;

  ${({$css:e})=>e}
`,de=s.div.attrs({className:t.bulletsTrack})`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(var(--tour-widget-bullets-offset, 0px));
  transition: transform 300ms ease;
  will-change: transform;
`,ue=s.span.attrs({className:t.bullet})`
  display: block;
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(
    --tour-widget-bullet-background,
    ${q}
  );
  transform: scale(1);
  transform-origin: center;
  transition: background-color 300ms ease, opacity 300ms ease,
    transform 300ms ease;

  &.${t.bulletActive} {
    background: var(
      --tour-widget-bullet-active-background,
      ${B}
    );
  }

  &.${t.bulletEdge} {
    transform: scale(0.75);
  }

  ${({$css:e})=>e}
`,N=c.forwardRef(({index:e,active:o,className:a,"aria-label":l,...i},g)=>{const{activeStepIndex:u}=C(),f=o??(typeof e=="number"&&u===e);return r.jsxDEV(ue,{ref:g,className:$(f&&t.bulletActive,a),"aria-current":f?"step":void 0,"aria-label":l??(typeof e=="number"?`Шаг ${e+1}`:void 0),...i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullet.tsx",lineNumber:18,columnNumber:5},void 0)});N.displayName="TourWidget.Bullet";try{TourWidget.Bullet.displayName="TourWidget.Bullet",TourWidget.Bullet.__docgenInfo={description:"",displayName:"TourWidget.Bullet",props:{index:{defaultValue:null,description:"Индекс буллета. Сравнивается с `TourWidget.activeStepIndex`.",name:"index",required:!1,type:{name:"number"}},active:{defaultValue:null,description:"Ручное переопределение активного состояния.",name:"active",required:!1,type:{name:"boolean"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const b=7,D=8,S=8,se=D+S,k=(e,o,a)=>Math.min(Math.max(e,o),a),le=e=>Number.isFinite(e)?Math.max(0,Math.floor(e)):0,ce=e=>e>0?e*D+(e-1)*S:0,V=c.forwardRef(({count:e,style:o,"aria-label":a,...l},i)=>{const{activeStepIndex:g=0}=C(),u=le(e),f=Number.isFinite(g)?Math.floor(g):0,x=u>0?k(f,0,u-1):0,y=Math.min(u,b),F=Math.max(0,u-y),h=u>b?k(x-Math.floor(b/2),0,F):0,W=h+y-1,O=h>0,H=W<u-1,R={...o,"--tour-widget-bullets-offset":`-${h*se}px`,"--tour-widget-bullets-width":`${ce(y)}px`};return r.jsxDEV(ne,{ref:i,"aria-label":a??(u>0?`Шаг ${x+1} из ${u}`:void 0),style:R,...l,children:r.jsxDEV(de,{children:Array.from({length:u},(fe,p)=>{const A=u>b&&(p===h&&O||p===W&&H);return r.jsxDEV(N,{index:p,active:p===x,className:A?t.bulletEdge:void 0},p,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:79,columnNumber:13},void 0)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:71,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetBullets.tsx",lineNumber:60,columnNumber:5},void 0)});V.displayName="TourWidget.Bullets";try{TourWidget.Bullets.displayName="TourWidget.Bullets",TourWidget.Bullets.__docgenInfo={description:"",displayName:"TourWidget.Bullets",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const G=c.forwardRef(({children:e,...o},a)=>r.jsxDEV(oe,{ref:a,...o,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetContent.tsx",lineNumber:10,columnNumber:3},void 0));G.displayName="TourWidget.Content";try{TourWidget.Content.displayName="TourWidget.Content",TourWidget.Content.__docgenInfo={description:"",displayName:"TourWidget.Content",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const j=c.forwardRef(({children:e,...o},a)=>r.jsxDEV(ae,{ref:a,...o,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetFooter.tsx",lineNumber:10,columnNumber:3},void 0));j.displayName="TourWidget.Footer";try{TourWidget.Footer.displayName="TourWidget.Footer",TourWidget.Footer.__docgenInfo={description:"",displayName:"TourWidget.Footer",props:{$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const I=c.forwardRef(({title:e,description:o,children:a,...l},i)=>r.jsxDEV(te,{ref:i,...l,children:[e!=null&&r.jsxDEV(re,{variant:"H3",bold:!0,children:e},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:16,columnNumber:7},void 0),o!=null&&r.jsxDEV(ie,{variant:"TextM",children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:21,columnNumber:7},void 0),a]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetHeader.tsx",lineNumber:14,columnNumber:3},void 0));I.displayName="TourWidget.Header";try{TourWidget.Header.displayName="TourWidget.Header",TourWidget.Header.__docgenInfo={description:"",displayName:"TourWidget.Header",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}const ge={vertical:{viewBox:"0 0 286 480",gradient:{x1:"0",y1:"318",x2:"286",y2:"480",middleOffset:"0.5",startOpacity:"0.56",middleOpacity:"0.62",endOpacity:"0.74"},filter:{x:"-20%",y:"-30%",width:"140%",height:"170%",blur:"18"},path:"M0 318 C 34 420 138 454 286 426 L286 482 L0 482 Z"},horizontal:{viewBox:"0 0 720 260",gradient:{x1:"0",y1:"170",x2:"720",y2:"260",middleOffset:"0.55",startOpacity:"0.5",middleOpacity:"0.58",endOpacity:"0.7"},filter:{x:"-12%",y:"-40%",width:"124%",height:"190%",blur:"22"},path:"M0 172 C 88 228 330 252 720 206 L720 262 L0 262 Z"}},z=({orientation:e})=>{const o=c.useId().replace(/[^a-zA-Z0-9_-]/g,""),a=`tour-widget-tail-gradient-${o}`,l=`tour-widget-tail-blur-${o}`,i=ge[e];return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(Y,{"aria-hidden":!0,viewBox:i.viewBox,children:[r.jsxDEV("defs",{children:[r.jsxDEV("linearGradient",{id:a,x1:i.gradient.x1,y1:i.gradient.y1,x2:i.gradient.x2,y2:i.gradient.y2,gradientUnits:"userSpaceOnUse",children:[r.jsxDEV("stop",{offset:"0",stopColor:"#6e87db",stopOpacity:i.gradient.startOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:78,columnNumber:13},void 0),r.jsxDEV("stop",{offset:i.gradient.middleOffset,stopColor:"#00e0ff",stopOpacity:i.gradient.middleOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:83,columnNumber:13},void 0),r.jsxDEV("stop",{offset:"1",stopColor:"#56ff88",stopOpacity:i.gradient.endOpacity},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:88,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:70,columnNumber:11},void 0),r.jsxDEV("filter",{id:l,x:i.filter.x,y:i.filter.y,width:i.filter.width,height:i.filter.height,children:r.jsxDEV("feGaussianBlur",{stdDeviation:i.filter.blur},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:101,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:94,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:69,columnNumber:9},void 0),r.jsxDEV("path",{d:i.path,fill:`url(#${a})`,filter:`url(#${l})`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:104,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:68,columnNumber:7},void 0),r.jsxDEV(ee,{"aria-hidden":!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:110,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/components/TourWidgetGradient.tsx",lineNumber:67,columnNumber:5},void 0)};z.displayName="TourWidget.Gradient";try{TourWidget.Gradient.displayName="TourWidget.Gradient",TourWidget.Gradient.__docgenInfo={description:"",displayName:"TourWidget.Gradient",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const me={horizontal:t.horizontal,vertical:t.vertical},pe=c.forwardRef(({children:e,orientation:o="vertical",activeStepIndex:a,className:l,...i},g)=>r.jsxDEV(P,{value:{activeStepIndex:a},children:r.jsxDEV(Q,{ref:g,$orientation:o,className:$(me[o],l),...i,children:[r.jsxDEV(z,{orientation:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:35,columnNumber:9},void 0),e]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:29,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/TourWidget/TourWidget.tsx",lineNumber:28,columnNumber:5},void 0)),T=Object.assign(pe,{Header:I,Content:G,Footer:j,Bullet:N,Bullets:V});T.displayName="TourWidget";try{T.displayName="TourWidget",T.__docgenInfo={description:"",displayName:"TourWidget",props:{orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activeStepIndex:{defaultValue:null,description:"Активный шаг тура. Нумерация с нуля.",name:"activeStepIndex",required:!1,type:{name:"number"}},$css:{defaultValue:null,description:"",name:"$css",required:!1,type:{name:"TourWidgetCss"}}}}}catch{}export{T};
