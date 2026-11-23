import{b as e,r as A}from"./react-UEdzNlUe.js";import{P as i}from"./PageTitle-CK0h6pWV.js";import{s as j}from"./constants-D9pWgtfS.js";import{dN as Fe,dO as _}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{D as _e}from"./DocPair-DZl9SYu9.js";import{M as ze,a as Re}from"./Measure-xndn83Cc.js";import{V as z}from"./ViewportFrame-CMbg3TfH.js";import{S as Ge,a as Ie,w as Me}from"./ScreenSwitch-CtFfRbV-.js";import{d as s,D as Oe,I as Le,u as We,t as Ce}from"./@salutejs/sdds-finai-CCc2M82T.js";import{c as He}from"./@salutejs/plasma-icons-D87bzLqR.js";const Xe={title:"Композиции/PageTitle/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}}}},je={padding:j.x4,borderRadius:j.x2,border:`1px dashed ${_}`,color:_,backgroundColor:Fe},Ve=({children:u})=>e.jsxDEV("div",{style:je,children:e.jsxDEV(Ce,{children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:44,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:43,columnNumber:3},void 0),o=({children:u,gap:t=40})=>e.jsxDEV("div",{style:{display:"grid",gap:t},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:49,columnNumber:3},void 0),E={items:[{title:"Главная",href:"#"},{title:"Раздел",href:"#"},{title:"Страница"}]},B=()=>{},r=({children:u})=>e.jsxDEV("div",{style:{display:"flex",gap:j.x4,alignItems:"flex-start"},children:u},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:63,columnNumber:3},void 0),a=({buttonSize:u})=>e.jsxDEV(r,{children:[e.jsxDEV(s,{size:u,view:"secondary",children:"Действие 2"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:69,columnNumber:5},void 0),e.jsxDEV(s,{size:u,view:"accent",children:"Главное действие"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:72,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:68,columnNumber:3},void 0),y=e.jsxDEV(We,{size:"l",view:"accent",text:"Label"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:78,columnNumber:15},void 0),V=({size:u,actions:t})=>{const v=A.useRef(null),[F,ye]=A.useState(!1);return A.useEffect(()=>{const l=v.current;if(!l)return;const w=new IntersectionObserver(([S])=>{S!=null&&S.isIntersecting&&(ye(!0),w.disconnect())},{rootMargin:"0px 0px -20% 0px"});return w.observe(l),()=>w.disconnect()},[]),e.jsxDEV("span",{ref:v,style:{display:"inline-flex"},children:e.jsxDEV(Oe,{alwaysOpened:F,placement:"bottom-start",listWidth:"180px",items:t.map(l=>({value:l,label:l})),children:e.jsxDEV(Le,{size:u,view:"secondary","aria-label":"Ещё действия",children:e.jsxDEV(He,{color:"inherit"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:121,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:120,columnNumber:9},void 0)},String(F),!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:113,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:112,columnNumber:5},void 0)},d={decorators:[Me],name:"Живая настройка",args:{...Ie,BreadCrumbs:!0,Description:!0,"Right block":!0,Type:"GroupButton","Custom block":!1,Back:!0,Title:"Title"},argTypes:{...Ge,BreadCrumbs:{control:"boolean",description:"Хлебные крошки над Title"},Description:{control:"boolean",description:"Описание под Title"},"Right block":{control:"boolean",description:"Блок справа"},Type:{control:"inline-radio",options:["GroupButton","Custom Slot"],description:"Содержимое Right block",if:{arg:"Right block",truthy:!0}},"Custom block":{control:"boolean",description:"Custom Slot справа от Title"},Back:{control:"boolean",description:"Кнопка «Назад»"},Title:{control:"text",description:"Текст заголовка"}},render:u=>e.jsxDEV(i,{breadcrumbs:u.BreadCrumbs?E:void 0,showBackButton:u.Back,onBackClick:B,title:u.Title,subtitle:u.Description?"Description":void 0,titleSlot:u["Custom block"]?y:void 0,rightSlot:u["Right block"]?u.Type==="GroupButton"?a:e.jsxDEV(Ve,{children:"Custom Slot"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:181,columnNumber:11},void 0):void 0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:169,columnNumber:5},void 0)},C=({className:u,height:t,children:v})=>e.jsxDEV("div",{className:u,style:{...je,height:t,display:"grid",placeItems:"center",padding:0},children:e.jsxDEV(Ce,{children:v},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:195,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:191,columnNumber:3},void 0),Ye=[{a:".m-header",b:".PageTitle__root",dir:"v",tone:"outer"},{a:"&",b:".PageTitle__root",dir:"h",tone:"outer"},{a:".PageTitle__root",b:"&",dir:"h",tone:"outer"},{a:".PageTitle__root",b:".m-panel",dir:"v",tone:"outer"},{a:".m-panel",b:".m-content",dir:"v",tone:"outer"},{a:".PageTitle__breadcrumbs",b:".PageTitle__content",dir:"v",tone:"inner"},{a:".PageTitle__title",b:".PageTitle__subtitle",dir:"v",tone:"inner"},{a:".PageTitle__back-icon-block",b:".PageTitle__title-block",dir:"h",tone:"inner"},{a:".PageTitle__title-block",b:".PageTitle__title-slot",dir:"h",tone:"inner"},{a:".PageTitle__left-block",b:".PageTitle__right-block",dir:"h",tone:"inner"}],m={name:"Отступы на живом компоненте",render:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(ze,{gaps:[...Ye],style:{backgroundColor:"var(--background-primary)",paddingBottom:24},children:[e.jsxDEV(C,{className:"m-header",height:56,children:"Header FinAI"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:220,columnNumber:9},void 0),e.jsxDEV("div",{style:{padding:"16px 32px 0"},children:[e.jsxDEV(i,{breadcrumbs:E,showBackButton:!0,onBackClick:B,title:"Title",subtitle:"Description",titleSlot:y,rightSlot:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:224,columnNumber:11},void 0),e.jsxDEV("div",{style:{marginTop:24},children:e.jsxDEV(C,{className:"m-panel",height:48,children:"Panel Block"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:234,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:233,columnNumber:11},void 0),e.jsxDEV("div",{style:{marginTop:24},children:e.jsxDEV(C,{className:"m-content",height:96,children:"Контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:239,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:238,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:223,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:216,columnNumber:7},void 0),e.jsxDEV(Re,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:245,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:215,columnNumber:5},void 0)},n={name:"Page Title в окне",parameters:{layout:"fullscreen"},render:()=>e.jsxDEV("div",{style:{width:900,boxSizing:"border-box",padding:"16px 32px",backgroundColor:"var(--background-primary)"},children:e.jsxDEV(i,{breadcrumbs:E,showBackButton:!0,onBackClick:B,title:"Title",subtitle:"Description",titleSlot:({buttonSize:u})=>e.jsxDEV(s,{size:u,view:"secondary",children:"Custom block"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:263,columnNumber:11},void 0),rightSlot:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:256,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:255,columnNumber:5},void 0)},c={name:"Кнопки на 1920 и 1280 px",render:()=>e.jsxDEV(o,{gap:24,children:[e.jsxDEV(z,{storyId:"композиции-pagetitle-для-дизайнеров--adaptive-frame",width:1920,height:150,visibleWidth:900,caption:"Окно 1920 px: кнопки размера S"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:277,columnNumber:7},void 0),e.jsxDEV(z,{storyId:"композиции-pagetitle-для-дизайнеров--adaptive-frame",width:1280,height:150,visibleWidth:900,caption:"Окно 1280 px: кнопки размера XS"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:284,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:276,columnNumber:5},void 0)},g={name:"BreadCrumbs",render:()=>e.jsxDEV(o,{children:[e.jsxDEV(i,{breadcrumbs:E,title:"С хлебными крошками"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:301,columnNumber:7},void 0),e.jsxDEV(i,{title:"Без хлебных крошек"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:302,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:300,columnNumber:5},void 0)},p={name:"Description",render:()=>e.jsxDEV(o,{children:[e.jsxDEV(i,{title:"С описанием",subtitle:"Описание занимает одну строку"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:311,columnNumber:7},void 0),e.jsxDEV(i,{title:"Без описания"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:312,columnNumber:7},void 0),e.jsxDEV("div",{style:{maxWidth:520},children:e.jsxDEV(i,{title:"Длинное описание",subtitle:"Длинное описание страницы не помещается в одну строку, поэтому обрезается, а целиком показывается в подсказке при наведении"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:314,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:313,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:310,columnNumber:5},void 0)},b={name:"Right block",render:()=>e.jsxDEV(o,{children:[e.jsxDEV(i,{title:"GroupButton",rightSlot:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:327,columnNumber:7},void 0),e.jsxDEV(i,{title:"Custom Slot",rightSlot:e.jsxDEV(Ve,{children:"Custom Slot"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:328,columnNumber:49},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:328,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:326,columnNumber:5},void 0)},x={name:"Custom block",render:()=>e.jsxDEV(i,{title:"Title",subtitle:"Description",titleSlot:y},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:335,columnNumber:17},void 0)},f={name:"Back",render:()=>e.jsxDEV(o,{children:[e.jsxDEV(i,{title:"С кнопкой «Назад»",showBackButton:!0,onBackClick:B},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:342,columnNumber:7},void 0),e.jsxDEV(i,{title:"Без кнопки «Назад»"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:343,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:341,columnNumber:5},void 0)},k={name:"Три кнопки",render:()=>e.jsxDEV(i,{title:"Title",rightSlot:({buttonSize:u})=>e.jsxDEV(r,{children:[e.jsxDEV(s,{size:u,view:"secondary",children:"Действие 3"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:357,columnNumber:11},void 0),a({buttonSize:u})]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:356,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:353,columnNumber:5},void 0)},T={name:"Четыре действия",render:()=>e.jsxDEV("div",{style:{paddingBottom:120},children:e.jsxDEV(i,{title:"Title",rightSlot:({buttonSize:u})=>e.jsxDEV(r,{children:[e.jsxDEV(V,{size:u,actions:["Действие 3","Действие 4"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:375,columnNumber:13},void 0),a({buttonSize:u})]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:374,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:371,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:370,columnNumber:5},void 0)},N={name:"Пара: три точки",render:()=>e.jsxDEV(_e,{goodText:"В «трёх точках» два действия, на экране Primary и три точки",badText:"В «трёх точках» одно действие",good:e.jsxDEV("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:120},children:e.jsxDEV(r,{children:[e.jsxDEV(V,{size:"s",actions:["Действие 2","Действие 3"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:393,columnNumber:13},void 0),e.jsxDEV(s,{size:"s",view:"accent",children:"Главное действие"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:394,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:392,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:391,columnNumber:9},void 0),bad:e.jsxDEV("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:120},children:e.jsxDEV(r,{children:[e.jsxDEV(V,{size:"s",actions:["Действие 3"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:403,columnNumber:13},void 0),e.jsxDEV(s,{size:"s",view:"secondary",children:"Действие 2"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:404,columnNumber:13},void 0),e.jsxDEV(s,{size:"s",view:"accent",children:"Главное действие"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:407,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:402,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:401,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:387,columnNumber:5},void 0)},P={name:"Исключение: четыре кнопки",render:()=>e.jsxDEV(i,{title:"Title",rightSlot:({buttonSize:u})=>e.jsxDEV(r,{children:[e.jsxDEV(s,{size:u,view:"secondary",children:"Действие 4"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:424,columnNumber:11},void 0),e.jsxDEV(s,{size:u,view:"secondary",children:"Действие 3"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:427,columnNumber:11},void 0),a({buttonSize:u})]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:423,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:420,columnNumber:5},void 0)},h={name:"Длинный Title",render:()=>e.jsxDEV(i,{title:"Длинное название страницы, которое не помещается в одну строку и обрезается многоточием",subtitle:"Наведите курсор на заголовок, чтобы увидеть его целиком",rightSlot:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:442,columnNumber:5},void 0)},D={name:"Хлебные крошки или «Назад»",render:()=>e.jsxDEV(o,{children:[e.jsxDEV(i,{breadcrumbs:E,title:"Хлебные крошки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:456,columnNumber:7},void 0),e.jsxDEV(i,{title:"Кнопка «Назад»",showBackButton:!0,onBackClick:B},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:457,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/PageTitle/PageTitle.examples.stories.tsx",lineNumber:455,columnNumber:5},void 0)};var R,G,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    BreadCrumbs: true,
    Description: true,
    'Right block': true,
    Type: 'GroupButton',
    'Custom block': false,
    Back: true,
    Title: 'Title'
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    BreadCrumbs: {
      control: 'boolean',
      description: 'Хлебные крошки над Title'
    },
    Description: {
      control: 'boolean',
      description: 'Описание под Title'
    },
    'Right block': {
      control: 'boolean',
      description: 'Блок справа'
    },
    Type: {
      control: 'inline-radio',
      options: ['GroupButton', 'Custom Slot'],
      description: 'Содержимое Right block',
      if: {
        arg: 'Right block',
        truthy: true
      }
    },
    'Custom block': {
      control: 'boolean',
      description: 'Custom Slot справа от Title'
    },
    Back: {
      control: 'boolean',
      description: 'Кнопка «Назад»'
    },
    Title: {
      control: 'text',
      description: 'Текст заголовка'
    }
  },
  render: args => <PageTitle breadcrumbs={args.BreadCrumbs ? crumbs : undefined} showBackButton={args.Back} onBackClick={noop} title={args.Title} subtitle={args.Description ? 'Description' : undefined} titleSlot={args['Custom block'] ? badge : undefined} rightSlot={
  // eslint-disable-next-line no-nested-ternary
  !args['Right block'] ? undefined : args.Type === 'GroupButton' ? groupButton : <SlotStub>Custom Slot</SlotStub>} />
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var M,O,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Отступы на живом компоненте',
  render: () => <>
      <Measure gaps={[...SPACING_GAPS]} style={{
      backgroundColor: 'var(--background-primary)',
      paddingBottom: 24
    }}>
        <PageStub className="m-header" height={56}>
          Header FinAI
        </PageStub>
        <div style={{
        padding: '16px 32px 0'
      }}>
          <PageTitle breadcrumbs={crumbs} showBackButton onBackClick={noop} title="Title" subtitle="Description" titleSlot={badge} rightSlot={groupButton} />
          <div style={{
          marginTop: 24
        }}>
            <PageStub className="m-panel" height={48}>
              Panel Block
            </PageStub>
          </div>
          <div style={{
          marginTop: 24
        }}>
            <PageStub className="m-content" height={96}>
              Контент
            </PageStub>
          </div>
        </div>
      </Measure>
      <MeasureLegend />
    </>
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var W,H,X,Y,$;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Page Title в окне',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    width: 900,
    boxSizing: 'border-box',
    padding: '16px 32px',
    backgroundColor: 'var(--background-primary)'
  }}>
      <PageTitle breadcrumbs={crumbs} showBackButton onBackClick={noop} title="Title" subtitle="Description" titleSlot={({
      buttonSize
    }: PageTitleSlotSizesProps) => <Button size={buttonSize} view="secondary">
            Custom block
          </Button>} rightSlot={groupButton} />
    </div>
}`,...(X=(H=n.parameters)==null?void 0:H.docs)==null?void 0:X.source},description:{story:"Страница в окне заданной ширины: для сравнения размера кнопок",...($=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var q,J,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Кнопки на 1920 и 1280 px',
  render: () => <Stack gap={24}>
      <ViewportFrame storyId="композиции-pagetitle-для-дизайнеров--adaptive-frame" width={1920} height={150} visibleWidth={900} caption="Окно 1920 px: кнопки размера S" />
      <ViewportFrame storyId="композиции-pagetitle-для-дизайнеров--adaptive-frame" width={1280} height={150} visibleWidth={900} caption="Окно 1280 px: кнопки размера XS" />
    </Stack>
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'BreadCrumbs',
  render: () => <Stack>
      <PageTitle breadcrumbs={crumbs} title="С хлебными крошками" />
      <PageTitle title="Без хлебных крошек" />
    </Stack>
}`,...(Z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,ue,ie;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Description',
  render: () => <Stack>
      <PageTitle title="С описанием" subtitle="Описание занимает одну строку" />
      <PageTitle title="Без описания" />
      <div style={{
      maxWidth: 520
    }}>
        <PageTitle title="Длинное описание" subtitle="Длинное описание страницы не помещается в одну строку, поэтому обрезается, а целиком показывается в подсказке при наведении" />
      </div>
    </Stack>
}`,...(ie=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var se,ae,ne;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Right block',
  render: () => <Stack>
      <PageTitle title="GroupButton" rightSlot={groupButton} />
      <PageTitle title="Custom Slot" rightSlot={<SlotStub>Custom Slot</SlotStub>} />
    </Stack>
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,te;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Custom block',
  render: () => <PageTitle title="Title" subtitle="Description" titleSlot={badge} />
}`,...(te=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var le,de,me;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Back',
  render: () => <Stack>
      <PageTitle title="С кнопкой «Назад»" showBackButton onBackClick={noop} />
      <PageTitle title="Без кнопки «Назад»" />
    </Stack>
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ge,pe;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Три кнопки',
  render: () => <PageTitle title="Title" rightSlot={({
    buttonSize
  }: PageTitleSlotSizesProps) => <Row>
          <Button size={buttonSize} view="secondary">
            Действие 3
          </Button>
          {groupButton({
      buttonSize
    })}
        </Row>} />
}`,...(pe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var be,xe,fe;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Четыре действия',
  render: () => <div style={{
    paddingBottom: 120
  }}>
      <PageTitle title="Title" rightSlot={({
      buttonSize
    }: PageTitleSlotSizesProps) => <Row>
            <Dots size={buttonSize} actions={['Действие 3', 'Действие 4']} />
            {groupButton({
        buttonSize
      })}
          </Row>} />
    </div>
}`,...(fe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ke,Te,Ne;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Пара: три точки',
  render: () => <DocPair goodText="В «трёх точках» два действия, на экране Primary и три точки" badText="В «трёх точках» одно действие" good={<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 120
  }}>
          <Row>
            <Dots size="s" actions={['Действие 2', 'Действие 3']} />
            <Button size="s" view="accent">
              Главное действие
            </Button>
          </Row>
        </div>} bad={<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 120
  }}>
          <Row>
            <Dots size="s" actions={['Действие 3']} />
            <Button size="s" view="secondary">
              Действие 2
            </Button>
            <Button size="s" view="accent">
              Главное действие
            </Button>
          </Row>
        </div>} />
}`,...(Ne=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Pe,he,De;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Исключение: четыре кнопки',
  render: () => <PageTitle title="Title" rightSlot={({
    buttonSize
  }: PageTitleSlotSizesProps) => <Row>
          <Button size={buttonSize} view="secondary">
            Действие 4
          </Button>
          <Button size={buttonSize} view="secondary">
            Действие 3
          </Button>
          {groupButton({
      buttonSize
    })}
        </Row>} />
}`,...(De=(he=P.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var Ee,Be,ve;h.parameters={...h.parameters,docs:{...(Ee=h.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Длинный Title',
  render: () => <PageTitle title="Длинное название страницы, которое не помещается в одну строку и обрезается многоточием" subtitle="Наведите курсор на заголовок, чтобы увидеть его целиком" rightSlot={groupButton} />
}`,...(ve=(Be=h.parameters)==null?void 0:Be.docs)==null?void 0:ve.source}}};var we,Se,Ae;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Хлебные крошки или «Назад»',
  render: () => <Stack>
      <PageTitle breadcrumbs={crumbs} title="Хлебные крошки" />
      <PageTitle title="Кнопка «Назад»" showBackButton onBackClick={noop} />
    </Stack>
}`,...(Ae=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};const $e=["Playground","SpacingLive","AdaptiveFrame","Adaptive","BreadCrumbs","Description","RightBlock","CustomBlock","Back","ButtonsThree","ButtonsFour","PairDots","ButtonsException","LongTitle","CrumbsOrBack"],au=Object.freeze(Object.defineProperty({__proto__:null,Adaptive:c,AdaptiveFrame:n,Back:f,BreadCrumbs:g,ButtonsException:P,ButtonsFour:T,ButtonsThree:k,CrumbsOrBack:D,CustomBlock:x,Description:p,LongTitle:h,PairDots:N,Playground:d,RightBlock:b,SpacingLive:m,__namedExportsOrder:$e,default:Xe},Symbol.toStringTag,{value:"Module"}));export{c as A,g as B,x as C,p as D,au as E,h as L,d as P,b as R,m as S,f as a,k as b,T as c,N as d,P as e,D as f};
