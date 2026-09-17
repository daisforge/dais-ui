import{r as y,d as e}from"./react-D2T61mpp.js";import{T as f}from"./AnalyticalWidget-DzDTXNdH.js";import{w as v}from"./@salutejs/sdds-themes-p9DCXULv.js";import{a as n,f as S,d as w}from"./utils-DEmWhYPK.js";import{s as o}from"./constants-Ci5uyz-N.js";import{H as l,C as g}from"./styled-components-4EwW4oL9.js";import{a4 as V,I as $}from"./@salutejs/sdds-finai-DxqN957p.js";import{eZ as j}from"./@salutejs/plasma-icons-D_Q3trqb.js";const a="PageTitle__",t={root:`${a}root`,breadcrumbs:`${a}breadcrumbs`,content:`${a}content`,leftBlock:`${a}left-block`,titleBlock:`${a}title-block`,title:`${a}title`,subtitle:`${a}subtitle`,titleSlot:`${a}title-slot`,rightBlock:`${a}right-block`,backIconButton:`${a}back-icon-block`},q=l.div.attrs({className:t.root})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${()=>o.x8};
`,_=l.div.attrs({className:t.breadcrumbs})``,I=l.div.attrs({className:t.content})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${()=>o.x12};
`,W=l.div.attrs({className:t.leftBlock})`
  display: flex;
  align-items: flex-start;
  gap: ${()=>o.x8};
  flex: 1;
  min-width: 0;
`,z=l.div.attrs({className:t.titleBlock})`
  display: flex;
  flex-direction: column;
  gap: ${()=>o.x2};
  flex-shrink: 1;
  min-width: 0;
`,R=l.div.attrs({className:t.backIconButton})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&g`
      ${n.exact(960,1280)`
        margin-top: 2px;
      `}
      ${n.exact(0,959)`
        margin-top: 0;
      `}
    `}
`,H=l.div.attrs({className:t.title})``,O=l.div.attrs({className:t.subtitle})``,L=l.div.attrs({className:t.titleSlot})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&g`
      ${n.exact(960,1280)`
        margin-top: 3px;
      `}
      ${n.exact(0,959)`
        margin-top: 2px;
      `}
    `}
`,M=l.div.attrs({className:t.rightBlock})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`,Z=u=>({buttonSize:u?"xs":"s"}),B=(u,i)=>typeof u=="function"?u(i):u,G=({isAdaptive1280:u,...i})=>e.jsxDEV(R,{$isAdaptive1280:u,children:e.jsxDEV($,{size:"xs",view:"secondary",className:t.backIconButton,pin:"circle-circle",...i,children:e.jsxDEV(j,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:43,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:36,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:35,columnNumber:3},void 0),J=({breadcrumbs:u})=>{if(!u)return null;const i={size:"m",...u};return e.jsxDEV(_,{children:e.jsxDEV(V,{...i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:62,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:61,columnNumber:5},void 0)},K=({title:u,titleTypographyProps:i})=>u?e.jsxDEV(H,{children:e.jsxDEV(f,{variant:"H2",bold:!0,tooltipText:(i&&"tooltipText"in i?i.tooltipText:void 0)??u,...i,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:78,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:77,columnNumber:5},void 0):null,Q=({subtitle:u,subtitleTypographyProps:i})=>u?e.jsxDEV(O,{children:e.jsxDEV(f,{variant:"BodyS",color:v,tooltipText:(i&&"tooltipText"in i?i.tooltipText:void 0)??u,...i,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:105,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:104,columnNumber:5},void 0):null,r=y.forwardRef(({title:u,titleTypographyProps:i,subtitle:c,subtitleTypographyProps:D,titleSlot:k,rightSlot:x,disableMediaAdaptive:T=!1,breadcrumbs:d,$css:b,className:A,showBackButton:F,onBackClick:N,...h},C)=>{const{down:P}=S(),s=!T&&P("xl"),m=Z(s),p=B(k,m),E=B(x,m);return e.jsxDEV(q,{ref:C,$css:b,className:w(t.root,A),...h,children:[d&&e.jsxDEV(J,{breadcrumbs:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:167,columnNumber:25},void 0),e.jsxDEV(I,{children:[e.jsxDEV(W,{children:[F&&e.jsxDEV(G,{isAdaptive1280:s,onClick:N},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:172,columnNumber:15},void 0),(u||c)&&e.jsxDEV(z,{children:[e.jsxDEV(K,{title:u,titleTypographyProps:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:179,columnNumber:17},void 0),e.jsxDEV(Q,{subtitle:c,subtitleTypographyProps:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:183,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:178,columnNumber:15},void 0),p&&e.jsxDEV(L,{$isAdaptive1280:s,children:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:190,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:170,columnNumber:11},void 0),E&&e.jsxDEV(M,{children:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:197,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:169,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:161,columnNumber:7},void 0)});r.displayName="PageTitle";try{r.displayName="PageTitle",r.__docgenInfo={description:'Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.\nКомпонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.\n- `title` — заголовок страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="H2"` и `bold={true}`.\n- `subtitle` — подзаголовок/описание страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="BodyS"`.\n- `titleTypographyProps` / `subtitleTypographyProps` — пропсы для настройки `TypographyWithAutoTooltip` (включая `tooltipText`, `tooltipProps`, `lines` и другие).\n- `breadcrumbs` — пропсы для компонента `Breadcrumbs`. По умолчанию `size=\'m\'`, но можно переопределить.\n- `showBackButton` / `onBackClick` — управление отображением кнопки «назад» слева от заголовка.\n- `titleSlot` — кастомный слот правее заголовка.\n- `rightSlot` — контент справа, прижатый к правому краю и к нижней границе компонента.',displayName:"PageTitle",props:{title:{defaultValue:null,description:"Заголовок страницы (текст)",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Дополнительный className для корневого элемента",name:"className",required:!1,type:{name:"string"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},subtitle:{defaultValue:null,description:"Подзаголовок/описание страницы (текст)",name:"subtitle",required:!1,type:{name:"string"}},rightSlot:{defaultValue:null,description:`Контент справа (прижат к правому краю и к нижней границе).
Можно передать ReactNode или callback с размерами для адаптива.`,name:"rightSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},showBackButton:{defaultValue:null,description:"Показывать ли кнопку со стрелкой назад слева от title",name:"showBackButton",required:!1,type:{name:"boolean"}},onBackClick:{defaultValue:null,description:"Callback при клике на кнопку назад",name:"onBackClick",required:!1,type:{name:"() => void"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},titleTypographyProps:{defaultValue:null,description:"Пропсы для TypographyWithAutoTooltip в который обернут title",name:"titleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H2">, "children" | "variant">'}},subtitleTypographyProps:{defaultValue:null,description:"Пропсы для  TypographyWithAutoTooltip в который обернут subtitle",name:"subtitleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"BodyS">, "children" | "variant">'}},titleSlot:{defaultValue:null,description:`Кастомный слот правее заголовка.
Можно передать ReactNode или callback с размерами для адаптива.`,name:"titleSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},breadcrumbs:{defaultValue:null,description:`Пропсы для Breadcrumbs компонента
По умолчанию size='m'`,name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsPropsComp"}}}}}catch{}export{r as P};
