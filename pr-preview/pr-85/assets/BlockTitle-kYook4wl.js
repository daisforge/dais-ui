import{d as e}from"./react-D2T61mpp.js";import{B as h}from"./Box-Btl-KExz.js";import{a as b,T as A}from"./AnalyticalWidget-b-9gE6Zc.js";import{b as c,d as g,s as N,w as F}from"./@salutejs/sdds-themes-p9DCXULv.js";import{H as l}from"./styled-components-KwnbZyt5.js";import{f as v}from"./utils-CZFPcdcE.js";import{I as S}from"./@salutejs/sdds-finai-33CWxLUw.js";import{eZ as y}from"./@salutejs/plasma-icons-DWS_8Hv6.js";const t={backButton:"block-title__back-button",container:"block-title__container",contentLeft:"block-title__content-left",description:"block-title__description",topBlock:"block-title__top-block",rightBlock:"block-title__right-block",title:"block-title__title",titleBlock:"block-title__title-block"},C=l.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: ${()=>g};
`,_=l.div`
  display: flex;
  align-items: center;
  gap: ${()=>c};
  margin-bottom: ${()=>c};
`,V=l.div`
  width: 100%;
  margin-bottom: ${()=>c};
`,w=l(b)`
  color: ${()=>F};
  padding-left: ${({$hasLeftSlot:u})=>u?"28px":"0"};
`,z=l.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: end;
`,j=l.div`
  display: flex;
  min-height: 100%;
  align-items: end;
`,q=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${()=>N};
  flex: 1;
  min-width: 0;
`,I=l.div`
  margin-top: 3px;
`,E={titleBadgeSize:"m",titleIconSize:"s"},L=u=>u==="H4"||u==="H5"?{titleBadgeSize:"s",titleIconSize:"xs"}:E,$=(u,i)=>({...i?L(u):E,buttonSize:i?"xs":"s",actionIconSize:i?"xs":"s"}),H=u=>u?"xxs":"xs",a=(u,i)=>typeof u=="function"?u(i):u,B=({title:u,titleSize:i="H2",titleTooltipProps:r,titleLeftSlot:s,titleRightSlot:d,description:m,topSlot:f,rightSlot:D,disableMediaAdaptive:x=!1,containerProps:o,onBackButtonClick:p})=>{const{down:T}=v(),k=!x&&T("xl"),n=$(i,k);return e.jsxDEV(h,{...o,className:`${t.container} ${(o==null?void 0:o.className)??""}`,children:[e.jsxDEV(V,{className:t.topBlock,children:a(f,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:47,columnNumber:7},void 0),e.jsxDEV(C,{children:[e.jsxDEV(q,{className:t.contentLeft,children:[p&&e.jsxDEV(I,{className:t.backButton,children:e.jsxDEV(S,{size:H(k),view:"secondary",pin:"circle-circle",onClick:p,children:e.jsxDEV(y,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:60,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:54,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV(z,{children:[e.jsxDEV(_,{className:t.titleBlock,children:[a(s,n),e.jsxDEV(A,{tooltipText:typeof u=="string"?u:void 0,variant:i,className:t.title,lines:2,tooltipProps:r,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:67,columnNumber:15},void 0),a(d,n)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:65,columnNumber:13},void 0),m&&e.jsxDEV(w,{variant:"BodyS",className:t.description,$hasLeftSlot:!!s,children:m},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:79,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:64,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:51,columnNumber:9},void 0),e.jsxDEV(j,{className:t.rightBlock,children:a(D,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:89,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:50,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:43,columnNumber:5},void 0)};try{B.displayName="BlockTitle",B.__docgenInfo={description:"",displayName:"BlockTitle",props:{title:{defaultValue:null,description:"Текст заголовка",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"H2"},description:"Размер заголовка",name:"titleSize",required:!1,type:{name:"any"}},titleTooltipProps:{defaultValue:null,description:"Пропсы тултипа, которым оборачивается обрезанный `title`.\n@remarks Тултип показывается автоматически, когда `title` не помещается в две строки.\nПо умолчанию ширина тултипа не ограничена, из-за чего длинный заголовок\nрастягивается в одну строку — ограничьте её через `maxWidth`.\n@example ```tsx\n<BlockTitle\n  title=\"Очень длинный заголовок\"\n  titleTooltipProps={{ maxWidth: '300px', placement: 'auto-start' }}\n/>\n```",name:"titleTooltipProps",required:!1,type:{name:'TypographyWithAutoTooltipProps<"H2">'}},titleLeftSlot:{defaultValue:null,description:"Иконка слева от заголовка (обычно используется иконка)",name:"titleLeftSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},titleRightSlot:{defaultValue:null,description:"Иконка справа от заголовка (обычно используется иконка)",name:"titleRightSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},description:{defaultValue:null,description:"Текст Заголовка",name:"description",required:!1,type:{name:"string"}},topSlot:{defaultValue:null,description:"Слот для верхней части",name:"topSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},rightSlot:{defaultValue:null,description:"Слот для правой части",name:"rightSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},containerProps:{defaultValue:null,description:"Передача props в контейнер",name:"containerProps",required:!1,type:{name:"any"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка",name:"onBackButtonClick",required:!1,type:{name:"() => void"}}}}}catch{}export{B};
