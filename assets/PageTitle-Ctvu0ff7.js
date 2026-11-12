import{r as S,j as e}from"./react-CAOzMBF_.js";import{T as D}from"./AiAgentPopup-CVoyVKiT.js";import{y as v}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{b as p,h as j,f as N}from"./utils-D7J-sht1.js";import{s as o}from"./constants-ChwOYBdp.js";import{q as a,A as $}from"./styled-components-BAnxJVQm.js";import{a5 as P,I as w}from"./@salutejs/sdds-finai-CrMFu5No.js";import{eZ as q}from"./@salutejs/plasma-icons-DBF9uERs.js";const i="PageTitle__",l={root:`${i}root`,breadcrumbs:`${i}breadcrumbs`,content:`${i}content`,leftBlock:`${i}left-block`,titleBlock:`${i}title-block`,titleRow:`${i}title-row`,title:`${i}title`,subtitle:`${i}subtitle`,titleSlot:`${i}title-slot`,rightBlock:`${i}right-block`,backIconButton:`${i}back-icon-block`},V=a.div.attrs({className:l.root})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${()=>o.x8};
`,R=a.div.attrs({className:l.breadcrumbs})``,_=a.div.attrs({className:l.content})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${()=>o.x12};
`,I=a.div.attrs({className:l.leftBlock})`
  display: flex;
  align-items: flex-start;
  gap: ${()=>o.x8};
  flex: 1;
  min-width: 0;
`,W=a.div.attrs({className:l.titleBlock})`
  display: flex;
  flex-direction: column;
  gap: ${()=>o.x2};
  flex-shrink: 1;
  min-width: 0;
`,z=a.div.attrs({className:l.backIconButton})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&$`
      ${p.exact(960,1280)`
        margin-top: 2px;
      `}
      ${p.exact(0,959)`
        margin-top: 0;
      `}
    `}
`,H=a.div.attrs({className:l.titleRow})`
  display: flex;
  align-items: center;
  gap: ${()=>o.x8};
  min-width: 0;
`,O=a.div.attrs({className:l.title})`
  min-width: 0;
`,L=a.div.attrs({className:l.subtitle})``,M=a.div.attrs({className:l.titleSlot})`
  display: flex;
  flex-shrink: 0;
`,Z=a.div.attrs({className:l.rightBlock})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`,G=u=>({buttonSize:u?"xs":"s"}),m=(u,t)=>typeof u=="function"?u(t):u,J=({isAdaptive1280:u,...t})=>e.jsx(z,{$isAdaptive1280:u,children:e.jsx(w,{size:"xs",view:"secondary",className:l.backIconButton,pin:"circle-circle",...t,children:e.jsx(q,{size:"xs",color:"inherit"})})}),K=({breadcrumbs:u})=>{if(!u)return null;const t={size:"m",...u};return e.jsx(R,{children:e.jsx(P,{...t})})},Q=({title:u,titleTypographyProps:t})=>u?e.jsx(O,{children:e.jsx(D,{variant:"H2",bold:!0,tooltipText:(t&&"tooltipText"in t?t.tooltipText:void 0)??u,...t,children:u})}):null,U=({subtitle:u,subtitleTypographyProps:t})=>u?e.jsx(L,{children:e.jsx(D,{variant:"BodyS",color:v,tooltipText:(t&&"tooltipText"in t?t.tooltipText:void 0)??u,...t,children:u})}):null,n=S.forwardRef(({title:u,titleTypographyProps:t,subtitle:r,subtitleTypographyProps:A,titleSlot:F,rightSlot:f,disableMediaAdaptive:x=!1,breadcrumbs:c,$css:y,className:h,showBackButton:C,onBackClick:g,...T},b)=>{const{down:k}=j(),E=!x&&k("xl"),d=G(E),s=m(F,d),B=m(f,d);return e.jsxs(V,{ref:b,$css:y,className:N(l.root,h),...T,children:[c&&e.jsx(K,{breadcrumbs:c}),e.jsxs(_,{children:[e.jsxs(I,{children:[C&&e.jsx(J,{isAdaptive1280:E,onClick:g}),(u||r||s)&&e.jsxs(W,{children:[(u||s)&&e.jsxs(H,{children:[e.jsx(Q,{title:u,titleTypographyProps:t}),s&&e.jsx(M,{children:s})]}),e.jsx(U,{subtitle:r,subtitleTypographyProps:A})]})]}),B&&e.jsx(Z,{children:B})]})]})});n.displayName="PageTitle";try{n.displayName="PageTitle",n.__docgenInfo={description:'Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.\nКомпонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.\n- `title` — заголовок страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="H2"` и `bold={true}`.\n- `subtitle` — подзаголовок/описание страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="BodyS"`.\n- `titleTypographyProps` / `subtitleTypographyProps` — пропсы для настройки `TypographyWithAutoTooltip` (включая `tooltipText`, `tooltipProps`, `lines` и другие).\n- `breadcrumbs` — пропсы для компонента `Breadcrumbs`. По умолчанию `size=\'m\'`, но можно переопределить.\n- `showBackButton` / `onBackClick` — управление отображением кнопки «назад» слева от заголовка.\n- `titleSlot` — кастомный слот правее заголовка.\n- `rightSlot` — контент справа, прижатый к правому краю и к нижней границе компонента.',displayName:"PageTitle",props:{title:{defaultValue:null,description:"Заголовок страницы (текст)",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Дополнительный className для корневого элемента",name:"className",required:!1,type:{name:"string"}},rightSlot:{defaultValue:null,description:`Контент справа (прижат к правому краю и к нижней границе).
Можно передать ReactNode или callback с размерами для адаптива.`,name:"rightSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},subtitle:{defaultValue:null,description:"Подзаголовок/описание страницы (текст)",name:"subtitle",required:!1,type:{name:"string"}},showBackButton:{defaultValue:null,description:"Показывать ли кнопку со стрелкой назад слева от title",name:"showBackButton",required:!1,type:{name:"boolean"}},onBackClick:{defaultValue:null,description:"Callback при клике на кнопку назад",name:"onBackClick",required:!1,type:{name:"() => void"}},titleTypographyProps:{defaultValue:null,description:"Пропсы для TypographyWithAutoTooltip в который обернут title",name:"titleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H2">, "children" | "variant">'}},subtitleTypographyProps:{defaultValue:null,description:"Пропсы для  TypographyWithAutoTooltip в который обернут subtitle",name:"subtitleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"BodyS">, "children" | "variant">'}},titleSlot:{defaultValue:null,description:"Кастомный слот правее заголовка, обычно для Badge.\nСтоит сразу за текстом `title` и выровнен по центру его строки.\nМожно передать ReactNode или callback с размерами для адаптива.",name:"titleSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},breadcrumbs:{defaultValue:null,description:`Пропсы для Breadcrumbs компонента
По умолчанию size='m'`,name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsPropsComp"}}}}}catch{}export{n as P};
