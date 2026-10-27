import{r as v,j as t}from"./react-CAOzMBF_.js";import{T as D}from"./AiAgentPopup-zRx4ytCb.js";import{y as $}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{b as o,h as j,f as N}from"./utils-EIxGvR70.js";import{s}from"./constants-DatVHdkd.js";import{H as i,C as A}from"./styled-components-DCFsnh-i.js";import{a5 as P,I as q}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eZ as w}from"./@salutejs/plasma-icons-Do5ggeDI.js";const a="PageTitle__",l={root:`${a}root`,breadcrumbs:`${a}breadcrumbs`,content:`${a}content`,leftBlock:`${a}left-block`,titleBlock:`${a}title-block`,title:`${a}title`,subtitle:`${a}subtitle`,titleSlot:`${a}title-slot`,rightBlock:`${a}right-block`,backIconButton:`${a}back-icon-block`},V=i.div.attrs({className:l.root})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${()=>s.x8};
`,_=i.div.attrs({className:l.breadcrumbs})``,I=i.div.attrs({className:l.content})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${()=>s.x12};
`,W=i.div.attrs({className:l.leftBlock})`
  display: flex;
  align-items: flex-start;
  gap: ${()=>s.x8};
  flex: 1;
  min-width: 0;
`,z=i.div.attrs({className:l.titleBlock})`
  display: flex;
  flex-direction: column;
  gap: ${()=>s.x2};
  flex-shrink: 1;
  min-width: 0;
`,R=i.div.attrs({className:l.backIconButton})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&A`
      ${o.exact(960,1280)`
        margin-top: 2px;
      `}
      ${o.exact(0,959)`
        margin-top: 0;
      `}
    `}
`,H=i.div.attrs({className:l.title})``,O=i.div.attrs({className:l.subtitle})``,L=i.div.attrs({className:l.titleSlot})`
  margin-top: 4px;
  ${({$isAdaptive1280:u})=>u&&A`
      ${o.exact(960,1280)`
        margin-top: 3px;
      `}
      ${o.exact(0,959)`
        margin-top: 2px;
      `}
    `}
`,M=i.div.attrs({className:l.rightBlock})`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  align-self: flex-end;
`,Z=u=>({buttonSize:u?"xs":"s"}),m=(u,e)=>typeof u=="function"?u(e):u,G=({isAdaptive1280:u,...e})=>t.jsx(R,{$isAdaptive1280:u,children:t.jsx(q,{size:"xs",view:"secondary",className:l.backIconButton,pin:"circle-circle",...e,children:t.jsx(w,{size:"xs",color:"inherit"})})}),J=({breadcrumbs:u})=>{if(!u)return null;const e={size:"m",...u};return t.jsx(_,{children:t.jsx(P,{...e})})},K=({title:u,titleTypographyProps:e})=>u?t.jsx(H,{children:t.jsx(D,{variant:"H2",bold:!0,tooltipText:(e&&"tooltipText"in e?e.tooltipText:void 0)??u,...e,children:u})}):null,Q=({subtitle:u,subtitleTypographyProps:e})=>u?t.jsx(O,{children:t.jsx(D,{variant:"BodyS",color:$,tooltipText:(e&&"tooltipText"in e?e.tooltipText:void 0)??u,...e,children:u})}):null,r=v.forwardRef(({title:u,titleTypographyProps:e,subtitle:c,subtitleTypographyProps:F,titleSlot:x,rightSlot:f,disableMediaAdaptive:C=!1,breadcrumbs:E,$css:y,className:h,showBackButton:g,onBackClick:b,...T},k)=>{const{down:S}=j(),n=!C&&S("xl"),d=Z(n),p=m(x,d),B=m(f,d);return t.jsxs(V,{ref:k,$css:y,className:N(l.root,h),...T,children:[E&&t.jsx(J,{breadcrumbs:E}),t.jsxs(I,{children:[t.jsxs(W,{children:[g&&t.jsx(G,{isAdaptive1280:n,onClick:b}),(u||c)&&t.jsxs(z,{children:[t.jsx(K,{title:u,titleTypographyProps:e}),t.jsx(Q,{subtitle:c,subtitleTypographyProps:F})]}),p&&t.jsx(L,{$isAdaptive1280:n,children:p})]}),B&&t.jsx(M,{children:B})]})]})});r.displayName="PageTitle";try{r.displayName="PageTitle",r.__docgenInfo={description:'Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.\nКомпонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.\n- `title` — заголовок страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="H2"` и `bold={true}`.\n- `subtitle` — подзаголовок/описание страницы (текст). Оборачивается в `TypographyWithAutoTooltip` с `variant="BodyS"`.\n- `titleTypographyProps` / `subtitleTypographyProps` — пропсы для настройки `TypographyWithAutoTooltip` (включая `tooltipText`, `tooltipProps`, `lines` и другие).\n- `breadcrumbs` — пропсы для компонента `Breadcrumbs`. По умолчанию `size=\'m\'`, но можно переопределить.\n- `showBackButton` / `onBackClick` — управление отображением кнопки «назад» слева от заголовка.\n- `titleSlot` — кастомный слот правее заголовка.\n- `rightSlot` — контент справа, прижатый к правому краю и к нижней границе компонента.',displayName:"PageTitle",props:{className:{defaultValue:null,description:"Дополнительный className для корневого элемента",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Заголовок страницы (текст)",name:"title",required:!1,type:{name:"string"}},rightSlot:{defaultValue:null,description:`Контент справа (прижат к правому краю и к нижней границе).
Можно передать ReactNode или callback с размерами для адаптива.`,name:"rightSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},$css:{defaultValue:null,description:"Кастомные стили styled-components для основного контейнера",name:"$css",required:!1,type:{name:"string | CSSObject | FlattenSimpleInterpolation"}},onBackClick:{defaultValue:null,description:"Callback при клике на кнопку назад",name:"onBackClick",required:!1,type:{name:"() => void"}},showBackButton:{defaultValue:null,description:"Показывать ли кнопку со стрелкой назад слева от title",name:"showBackButton",required:!1,type:{name:"boolean"}},disableMediaAdaptive:{defaultValue:{value:"false"},description:`Отключает принудительный адаптив компонента на viewport <= 1280px.
@deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
@remarks При \`true\` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
Это временный escape hatch, не основной сценарий использования.`,name:"disableMediaAdaptive",required:!1,type:{name:"boolean"}},subtitle:{defaultValue:null,description:"Подзаголовок/описание страницы (текст)",name:"subtitle",required:!1,type:{name:"string"}},titleTypographyProps:{defaultValue:null,description:"Пропсы для TypographyWithAutoTooltip в который обернут title",name:"titleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"H2">, "children" | "variant">'}},subtitleTypographyProps:{defaultValue:null,description:"Пропсы для  TypographyWithAutoTooltip в который обернут subtitle",name:"subtitleTypographyProps",required:!1,type:{name:'Omit<TypographyWithAutoTooltipProps<"BodyS">, "children" | "variant">'}},titleSlot:{defaultValue:null,description:`Кастомный слот правее заголовка.
Можно передать ReactNode или callback с размерами для адаптива.`,name:"titleSlot",required:!1,type:{name:"PageTitleAdaptiveSlot"}},breadcrumbs:{defaultValue:null,description:`Пропсы для Breadcrumbs компонента
По умолчанию size='m'`,name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsPropsComp"}}}}}catch{}export{r as P};
