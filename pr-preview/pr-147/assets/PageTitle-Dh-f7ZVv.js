import{r as P,d as e}from"./react-D2T61mpp.js";import{T as f}from"./AiAgentPopup-CSh1rsxi.js";import{y as C}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{b as p,h as v,f as w}from"./utils-ddnlLRAX.js";import{s as n}from"./constants-ChwOYBdp.js";import{q as l,A as S}from"./styled-components-DLu4QhXQ.js";import{a5 as V,I as j}from"./@salutejs/sdds-finai-DzYR6xJW.js";import{eZ as $}from"./@salutejs/plasma-icons-B9ywyW0D.js";const a="PageTitle__",t={root:`${a}root`,breadcrumbs:`${a}breadcrumbs`,content:`${a}content`,leftBlock:`${a}left-block`,titleBlock:`${a}title-block`,titleRow:`${a}title-row`,title:`${a}title`,subtitle:`${a}subtitle`,titleSlot:`${a}title-slot`,rightBlock:`${a}right-block`,backIconButton:`${a}back-icon-block`},q=l.div.attrs({className:t.root})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${()=>n.x8};
`,R=l.div.attrs({className:t.breadcrumbs})``,_=l.div.attrs({className:t.content})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${()=>n.x12};
`,I=l.div.attrs({className:t.leftBlock})`
  display: flex;
  align-items: flex-start;
  gap: ${()=>n.x8};
  flex: 1;
  min-width: 0;
`,W=l.div.attrs({className:t.titleBlock})`
  display: flex;
  flex-direction: column;
  gap: ${()=>n.x2};
  flex-shrink: 1;
  min-width: 0;
`,z=l.div.attrs({className:t.backIconButton})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&S`
      ${p.exact(960,1280)`
        margin-top: 2px;
      `}
      ${p.exact(0,959)`
        margin-top: 0;
      `}
    `}
`,H=l.div.attrs({className:t.titleRow})`
  display: flex;
  align-items: center;
  gap: ${()=>n.x8};
  min-width: 0;
`,O=l.div.attrs({className:t.title})`
  min-width: 0;
`,L=l.div.attrs({className:t.subtitle})``,M=l.div.attrs({className:t.titleSlot})`
  display: flex;
  flex-shrink: 0;
`,Z=l.div.attrs({className:t.rightBlock})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`,G=u=>({buttonSize:u?"xs":"s"}),B=(u,i)=>typeof u=="function"?u(i):u,J=({isAdaptive1280:u,...i})=>e.jsxDEV(z,{$isAdaptive1280:u,children:e.jsxDEV(j,{size:"xs",view:"secondary",className:t.backIconButton,pin:"circle-circle",...i,children:e.jsxDEV($,{size:"xs",color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:44,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:37,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:36,columnNumber:3},void 0),K=({breadcrumbs:u})=>{if(!u)return null;const i={size:"m",...u};return e.jsxDEV(R,{children:e.jsxDEV(V,{...i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:63,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:62,columnNumber:5},void 0)},Q=({title:u,titleTypographyProps:i})=>u?e.jsxDEV(O,{children:e.jsxDEV(f,{variant:"H2",bold:!0,tooltipText:(i&&"tooltipText"in i?i.tooltipText:void 0)??u,...i,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:79,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:78,columnNumber:5},void 0):null,U=({subtitle:u,subtitleTypographyProps:i})=>u?e.jsxDEV(L,{children:e.jsxDEV(f,{variant:"BodyS",color:C,tooltipText:(i&&"tooltipText"in i?i.tooltipText:void 0)??u,...i,children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:106,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:105,columnNumber:5},void 0):null,s=P.forwardRef(({title:u,titleTypographyProps:i,subtitle:r,subtitleTypographyProps:D,titleSlot:g,rightSlot:k,disableMediaAdaptive:T=!1,breadcrumbs:d,$css:b,className:x,showBackButton:A,onBackClick:F,...N},h)=>{const{down:y}=v(),c=!T&&y("xl"),m=G(c),o=B(g,m),E=B(k,m);return e.jsxDEV(q,{ref:h,$css:b,className:w(t.root,x),...N,children:[d&&e.jsxDEV(K,{breadcrumbs:d},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:168,columnNumber:25},void 0),e.jsxDEV(_,{children:[e.jsxDEV(I,{children:[A&&e.jsxDEV(J,{isAdaptive1280:c,onClick:F},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:173,columnNumber:15},void 0),(u||r||o)&&e.jsxDEV(W,{children:[(u||o)&&e.jsxDEV(H,{children:[e.jsxDEV(Q,{title:u,titleTypographyProps:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:182,columnNumber:21},void 0),o&&e.jsxDEV(M,{children:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:187,columnNumber:23},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:181,columnNumber:19},void 0),e.jsxDEV(U,{subtitle:r,subtitleTypographyProps:D},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:191,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:179,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:171,columnNumber:11},void 0),E&&e.jsxDEV(Z,{children:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:200,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:170,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/ui-kit/src/components/PageTitle/PageTitle.tsx",lineNumber:162,columnNumber:7},void 0)});s.displayName="PageTitle";try{s.displayName="PageTitle",s.__docgenInfo={description:'Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.\nКомпонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.\n- `title` — заголовок страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="H2"` и `bold={true}`.\n- `subtitle` — подзаголовок/описание страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="BodyS"`.\n- `titleTypographyProps` / `subtitleTypographyProps` — пропсы для настройки `TypographyWithAutoTooltip` (включая `tooltipText`, `tooltipProps`, `lines` и другие).\n- `breadcrumbs` — пропсы для компонента `Breadcrumbs`. По умолчанию `size=\'m\'`, но можно переопределить.\n- `showBackButton` / `onBackClick` — управление отображением кнопки «назад» слева от заголовка.\n- `titleSlot` — кастомный слот правее заголовка.\n- `rightSlot` — контент справа, прижатый к правому краю и к нижней границе компонента.',displayName:"PageTitle",props:{title:{defaultValue:null,description:"Заголовок страницы (текст)",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Дополнительный className для корневого элемента",name:"className",required:!1,type:{name:"string"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},rightSlot:{defaultValue:null,description:`Контент справа (прижат к правому краю и к нижней границе).
Можно передать ReactNode или callback с размерами для адаптива.`,name:"rightSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},subtitle:{defaultValue:null,description:"Подзаголовок/описание страницы (текст)",name:"subtitle",required:!1,type:{name:"string"}},showBackButton:{defaultValue:null,description:"Показывать ли кнопку со стрелкой назад слева от title",name:"showBackButton",required:!1,type:{name:"boolean"}},onBackClick:{defaultValue:null,description:"Callback при клике на кнопку назад",name:"onBackClick",required:!1,type:{name:"() => void"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},titleTypographyProps:{defaultValue:null,description:"Пропсы для TypographyWithAutoTooltip в который обернут title",name:"titleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H2">, "children" | "variant">'}},subtitleTypographyProps:{defaultValue:null,description:"Пропсы для  TypographyWithAutoTooltip в который обернут subtitle",name:"subtitleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"BodyS">, "children" | "variant">'}},titleSlot:{defaultValue:null,description:"Кастомный слот правее заголовка, обычно для Badge.\nСтоит сразу за текстом `title` и выровнен по центру его строки.\nМожно передать ReactNode или callback с размерами для адаптива.",name:"titleSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},breadcrumbs:{defaultValue:null,description:`Пропсы для Breadcrumbs компонента
По умолчанию size='m'`,name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsPropsComp"}}}}}catch{}export{s as P};
