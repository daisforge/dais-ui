import{j as t}from"./react-CAOzMBF_.js";import{B as h}from"./Box-DvvYTz20.js";import{a as F,T as g}from"./AiAgentPopup-zRx4ytCb.js";import{b as c,d as y,s as S,y as T}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as i}from"./styled-components-DCFsnh-i.js";import{h as C}from"./utils-EIxGvR70.js";import{I as _}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eZ as b}from"./@salutejs/plasma-icons-Do5ggeDI.js";const l={backButton:"block-title__back-button",container:"block-title__container",contentLeft:"block-title__content-left",description:"block-title__description",topBlock:"block-title__top-block",rightBlock:"block-title__right-block",title:"block-title__title",titleBlock:"block-title__title-block"},v=i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: ${()=>y};
`,j=i.div`
  display: flex;
  align-items: center;
  gap: ${()=>c};
  margin-bottom: ${()=>c};
`,z=i.div`
  width: 100%;
  margin-bottom: ${()=>c};
`,N=i(F)`
  color: ${()=>T};
  padding-left: ${({$hasLeftSlot:u})=>u?"28px":"0"};
`,q=i.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: end;
`,V=i.div`
  display: flex;
  min-height: 100%;
  align-items: end;
`,I=i.div`
  display: flex;
  align-items: flex-start;
  gap: ${()=>S};
  flex: 1;
  min-width: 0;
`,L=i.div`
  margin-top: 3px;
`,f={titleBadgeSize:"m",titleIconSize:"s"},$=u=>u==="H4"||u==="H5"?{titleBadgeSize:"s",titleIconSize:"xs"}:f,w=(u,e)=>({...e?$(u):f,buttonSize:e?"xs":"s",actionIconSize:e?"xs":"s"}),H=u=>u?"xxs":"xs",a=(u,e)=>typeof u=="function"?u(e):u,m=({title:u,titleSize:e="H2",titleTooltipProps:r,titleLeftSlot:s,titleRightSlot:p,description:d,topSlot:k,rightSlot:D,disableMediaAdaptive:A=!1,containerProps:o,onBackButtonClick:B})=>{const{down:x}=C(),E=!A&&x("xl"),n=w(e,E);return t.jsxs(h,{...o,className:`${l.container} ${(o==null?void 0:o.className)??""}`,children:[t.jsx(z,{className:l.topBlock,children:a(k,n)}),t.jsxs(v,{children:[t.jsxs(I,{className:l.contentLeft,children:[B&&t.jsx(L,{className:l.backButton,children:t.jsx(_,{size:H(E),view:"secondary",pin:"circle-circle",onClick:B,children:t.jsx(b,{size:"xs",color:"inherit"})})}),t.jsxs(q,{children:[t.jsxs(j,{className:l.titleBlock,children:[a(s,n),t.jsx(g,{tooltipText:typeof u=="string"?u:void 0,variant:e,className:l.title,lines:2,tooltipProps:r,children:u}),a(p,n)]}),d&&t.jsx(N,{variant:"BodyS",className:l.description,$hasLeftSlot:!!s,children:d})]})]}),t.jsx(V,{className:l.rightBlock,children:a(D,n)})]})]})};try{m.displayName="BlockTitle",m.__docgenInfo={description:"",displayName:"BlockTitle",props:{title:{defaultValue:null,description:"Текст заголовка",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"H2"},description:"Размер заголовка",name:"titleSize",required:!1,type:{name:"any"}},titleTooltipProps:{defaultValue:null,description:"Пропсы тултипа, которым оборачивается обрезанный `title`.\n@remarks Тултип показывается автоматически, когда `title` не помещается в две строки.\nПо умолчанию ширина тултипа не ограничена, из-за чего длинный заголовок\nрастягивается в одну строку — ограничьте её через `maxWidth`.\n@example ```tsx\n<BlockTitle\n  title=\"Очень длинный заголовок\"\n  titleTooltipProps={{ maxWidth: '300px', placement: 'auto-start' }}\n/>\n```",name:"titleTooltipProps",required:!1,type:{name:'TypographyWithAutoTooltipProps<"H2">'}},titleLeftSlot:{defaultValue:null,description:"Иконка слева от заголовка (обычно используется иконка)",name:"titleLeftSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},titleRightSlot:{defaultValue:null,description:"Иконка справа от заголовка (обычно используется иконка)",name:"titleRightSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},description:{defaultValue:null,description:"Текст Заголовка",name:"description",required:!1,type:{name:"string"}},topSlot:{defaultValue:null,description:"Слот для верхней части",name:"topSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},rightSlot:{defaultValue:null,description:"Слот для правой части",name:"rightSlot",required:!1,type:{name:"BlockTitleAdaptiveSlot"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},containerProps:{defaultValue:null,description:"Передача props в контейнер",name:"containerProps",required:!1,type:{name:"any"}},onBackButtonClick:{defaultValue:null,description:"Callback при клике на кнопку со стрелкой назад слева от заголовка",name:"onBackButtonClick",required:!1,type:{name:"() => void"}}}}}catch{}export{m as B};
