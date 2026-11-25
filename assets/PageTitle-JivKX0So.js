import{r as S,j as e}from"./react-DYHuXpTF.js";import{T as D}from"./TypographyWithAutoTooltip-CLK-DSeT.js";import{E as v}from"./@sddsjs/sdds_finai-CcsTvjys.js";import{a as p,h as j,e as N}from"./utils-DbMTrPCQ.js";import{s as o}from"./constants-Des9Datc.js";import{q as i,A as $}from"./styled-components-C3-Vg48S.js";import{W as P,I as w}from"./@salutejs/sdds-finai-BHH5Fs72.js";import{q}from"./@salutejs/plasma-icons-DAdkqmmH.js";const a="PageTitle__",l={root:`${a}root`,breadcrumbs:`${a}breadcrumbs`,content:`${a}content`,leftBlock:`${a}left-block`,titleBlock:`${a}title-block`,titleRow:`${a}title-row`,title:`${a}title`,subtitle:`${a}subtitle`,titleSlot:`${a}title-slot`,rightBlock:`${a}right-block`,backIconButton:`${a}back-icon-block`},V=i.div.attrs({className:l.root})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${()=>o.x8};
`,R=i.div.attrs({className:l.breadcrumbs})``,_=i.div.attrs({className:l.content})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${()=>o.x12};
`,W=i.div.attrs({className:l.leftBlock})`
  display: flex;
  align-items: flex-start;
  gap: ${()=>o.x8};
  flex: 1;
  min-width: 0;
`,I=i.div.attrs({className:l.titleBlock})`
  display: flex;
  flex-direction: column;
  gap: ${()=>o.x2};
  flex-shrink: 1;
  min-width: 0;
`,z=i.div.attrs({className:l.backIconButton})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&$`
      ${p.exact(960,1280)`
        margin-top: 2px;
      `}
      ${p.exact(0,959)`
        margin-top: 0;
      `}
    `}
`,H=i.div.attrs({className:l.titleRow})`
  display: flex;
  align-items: center;
  gap: ${()=>o.x8};
  min-width: 0;
`,O=i.div.attrs({className:l.title})`
  min-width: 0;
`,L=i.div.attrs({className:l.subtitle})``,M=i.div.attrs({className:l.titleSlot})`
  display: flex;
  flex-shrink: 0;
`,G=i.div.attrs({className:l.rightBlock})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`,J=u=>({buttonSize:u?"xs":"s"}),m=(u,t)=>typeof u=="function"?u(t):u,K=({isAdaptive1280:u,...t})=>e.jsx(z,{$isAdaptive1280:u,children:e.jsx(w,{size:"xs",view:"secondary",className:l.backIconButton,pin:"circle-circle",...t,children:e.jsx(q,{size:"xs",color:"inherit"})})}),Q=({breadcrumbs:u})=>{if(!u)return null;const t={size:"m",...u};return e.jsx(R,{children:e.jsx(P,{...t})})},U=({title:u,titleTypographyProps:t})=>u?e.jsx(O,{children:e.jsx(D,{variant:"H2",bold:!0,tooltipText:(t&&"tooltipText"in t?t.tooltipText:void 0)??u,...t,children:u})}):null,X=({subtitle:u,subtitleTypographyProps:t})=>u?e.jsx(L,{children:e.jsx(D,{variant:"BodyS",color:v,tooltipText:(t&&"tooltipText"in t?t.tooltipText:void 0)??u,...t,children:u})}):null,n=S.forwardRef(({title:u,titleTypographyProps:t,subtitle:r,subtitleTypographyProps:A,titleSlot:F,rightSlot:f,disableMediaAdaptive:x=!1,breadcrumbs:c,$css:y,className:h,showBackButton:C,onBackClick:g,...T},b)=>{const{down:k}=j(),E=!x&&k("xl"),d=J(E),s=m(F,d),B=m(f,d);return e.jsxs(V,{ref:b,$css:y,className:N(l.root,h),...T,children:[c&&e.jsx(Q,{breadcrumbs:c}),e.jsxs(_,{children:[e.jsxs(W,{children:[C&&e.jsx(K,{isAdaptive1280:E,onClick:g}),(u||r||s)&&e.jsxs(I,{children:[(u||s)&&e.jsxs(H,{children:[e.jsx(U,{title:u,titleTypographyProps:t}),s&&e.jsx(M,{children:s})]}),e.jsx(X,{subtitle:r,subtitleTypographyProps:A})]})]}),B&&e.jsx(G,{children:B})]})]})});n.displayName="PageTitle";try{n.displayName="PageTitle",n.__docgenInfo={description:'Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.\nКомпонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.\n- `title` — заголовок страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="H2"` и `bold={true}`.\n- `subtitle` — подзаголовок/описание страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="BodyS"`.\n- `titleTypographyProps` / `subtitleTypographyProps` — пропсы для настройки `TypographyWithAutoTooltip` (включая `tooltipText`, `tooltipProps`, `lines` и другие).\n- `breadcrumbs` — пропсы для компонента `Breadcrumbs`. По умолчанию `size=\'m\'`, но можно переопределить.\n- `showBackButton` / `onBackClick` — управление отображением кнопки «назад» слева от заголовка.\n- `titleSlot` — кастомный слот правее заголовка.\n- `rightSlot` — контент справа, прижатый к правому краю и к нижней границе компонента.',displayName:"PageTitle",props:{title:{defaultValue:null,description:"Заголовок страницы (текст)",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Дополнительный className для корневого элемента",name:"className",required:!1,type:{name:"string"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},rightSlot:{defaultValue:null,description:`Контент справа (прижат к правому краю и к нижней границе).
Можно передать ReactNode или callback с размерами для адаптива.`,name:"rightSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},subtitle:{defaultValue:null,description:"Подзаголовок/описание страницы (текст)",name:"subtitle",required:!1,type:{name:"string"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},titleTypographyProps:{defaultValue:null,description:"Пропсы для TypographyWithAutoTooltip в который обернут title",name:"titleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H2">, "children" | "variant">'}},subtitleTypographyProps:{defaultValue:null,description:"Пропсы для  TypographyWithAutoTooltip в который обернут subtitle",name:"subtitleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"BodyS">, "children" | "variant">'}},titleSlot:{defaultValue:null,description:"Кастомный слот правее заголовка, обычно для Badge.\nСтоит сразу за текстом `title` и выровнен по центру его строки.\nМожно передать ReactNode или callback с размерами для адаптива.",name:"titleSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},breadcrumbs:{defaultValue:null,description:`Пропсы для Breadcrumbs компонента
По умолчанию size='m'`,name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsPropsComp"}},showBackButton:{defaultValue:null,description:"Показывать ли кнопку со стрелкой назад слева от title",name:"showBackButton",required:!1,type:{name:"boolean"}},onBackClick:{defaultValue:null,description:"Callback при клике на кнопку назад",name:"onBackClick",required:!1,type:{name:"() => void"}}}}}catch{}export{n as P,l as p};
