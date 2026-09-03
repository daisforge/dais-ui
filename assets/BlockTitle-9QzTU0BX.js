import{d as e}from"./react-D2T61mpp.js";import{B as b}from"./Box-DsNuXb8L.js";import{a as D,T as N}from"./AnalyticalWidget-CGAcmAx3.js";import{b as r,d as g,s as h,w as A}from"./@salutejs/sdds-themes-CZ516YZq.js";import{H as l}from"./styled-components-kNohFqZo.js";import{f as v}from"./utils-Dx_gyAyt.js";import{I as S}from"./@salutejs/sdds-finai-DYlz9lC4.js";import{eZ as y}from"./@salutejs/plasma-icons-Co7qeio2.js";const t={backButton:"block-title__back-button",container:"block-title__container",contentLeft:"block-title__content-left",description:"block-title__description",topBlock:"block-title__top-block",rightBlock:"block-title__right-block",title:"block-title__title",titleBlock:"block-title__title-block"},_=l.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: ${()=>g};
`,F=l.div`
  display: flex;
  align-items: center;
  gap: ${()=>r};
  margin-bottom: ${()=>r};
`,C=l.div`
  width: 100%;
  margin-bottom: ${()=>r};
`,V=l(D)`
  color: ${()=>A};
  padding-left: ${({$hasLeftSlot:u})=>u?"28px":"0"};
`,w=l.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: end;
`,z=l.div`
  display: flex;
  min-height: 100%;
  align-items: end;
`,j=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${()=>h};
  flex: 1;
  min-width: 0;
`,q=l.div`
  margin-top: 3px;
`,B={titleBadgeSize:"m",titleIconSize:"s"},I=u=>u==="H4"||u==="H5"?{titleBadgeSize:"s",titleIconSize:"xs"}:B,L=(u,i)=>({...i?I(u):B,buttonSize:i?"xs":"s",actionIconSize:i?"xs":"s"}),$=u=>u?"xxs":"xs",a=(u,i)=>typeof u=="function"?u(i):u,p=({title:u,titleSize:i="H2",titleLeftSlot:s,titleRightSlot:d,description:c,topSlot:f,rightSlot:E,disableMediaAdaptive:x=!1,containerProps:o,onBackButtonClick:m})=>{const{down:T}=v(),k=!x&&T("xl"),n=L(i,k);return e.jsxDEV(b,{...o,className:`${t.container} ${(o==null?void 0:o.className)??""}`,children:[e.jsxDEV(C,{className:t.topBlock,children:a(f,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:46,columnNumber:7},void 0),e.jsxDEV(_,{children:[e.jsxDEV(j,{className:t.contentLeft,children:[m&&e.jsxDEV(q,{className:t.backButton,children:e.jsxDEV(S,{size:$(k),view:"secondary",pin:"circle-circle",onClick:m,children:e.jsxDEV(y,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:59,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:53,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:52,columnNumber:13},void 0),e.jsxDEV(w,{children:[e.jsxDEV(F,{className:t.titleBlock,children:[a(s,n),e.jsxDEV(N,{tooltipText:typeof u=="string"?u:void 0,variant:i,className:t.title,lines:2,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:66,columnNumber:15},void 0),a(d,n)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:64,columnNumber:13},void 0),c&&e.jsxDEV(V,{variant:"BodyS",className:t.description,$hasLeftSlot:!!s,children:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:77,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:63,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:50,columnNumber:9},void 0),e.jsxDEV(z,{className:t.rightBlock,children:a(E,n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:87,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:49,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/BlockTitle/BlockTitle.tsx",lineNumber:42,columnNumber:5},void 0)};try{p.displayName="BlockTitle",p.__docgenInfo={description:"",displayName:"BlockTitle",props:{title:{defaultValue:null,description:"Текст заголовка",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"H2"},description:"Размер заголовка",name:"titleSize",required:!1,type:{name:"any"}},titleLeftSlot:{defaultValue:null,description:"Иконка слева от заголовка (обычно используется иконка)",name:"titleLeftSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},titleRightSlot:{defaultValue:null,description:"Иконка справа от заголовка (обычно используется иконка)",name:"titleRightSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},description:{defaultValue:null,description:"Текст Заголовка",name:"description",required:!1,type:{name:"string"}},topSlot:{defaultValue:null,description:"Слот для верхней части",name:"topSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},rightSlot:{defaultValue:null,description:"Слот для правой части",name:"rightSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},containerProps:{defaultValue:null,description:"Передача props в контейнер",name:"containerProps",required:!1,type:{name:"any"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка",name:"onBackButtonClick",required:!1,type:{name:"() => void"}}}}}catch{}export{p as B};
