import{b as e,r as N}from"./react-UEdzNlUe.js";import{B as he}from"./BlockGradientScroll-vGdt5f49.js";import{T as Se}from"./TextArea-Cw6bGonh.js";import{a as t}from"./TextField-Bq_jSxbf.js";import{s as r}from"./constants-D9pWgtfS.js";import{cG as pe,d3 as ge}from"./@sddsjs/sdds_finai-DqiyF2lT.js";import{D as be}from"./DocPair-DZl9SYu9.js";import{V as w}from"./ViewportFrame-CMbg3TfH.js";import{S as Ne,a as Be,w as Ee}from"./ScreenSwitch-CtFfRbV-.js";import{Q as T,t as ve,d as D}from"./@salutejs/sdds-finai-CCc2M82T.js";const De={title:"Локальные компоненты/BlockGradientScroll/Для дизайнеров",tags:["!autodocs","!dev"],parameters:{layout:"padded",docs:{canvas:{sourceState:"none"}}}},G="локальные-компоненты-blockgradientscroll-для-дизайнеров",y=["Объект","Канал","Гипотеза","As Is","To Be","Ответственный","Срок","Комментарий"],j=({count:i=y.length})=>e.jsxDEV("div",{style:{display:"grid",gap:r.x6},children:y.slice(0,i).map(s=>e.jsxDEV(t,{size:"s",label:s,placeholder:"Введите значение"},s,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:49,columnNumber:7},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:47,columnNumber:3},void 0),we=()=>e.jsxDEV("div",{style:{display:"flex",justifyContent:"flex-end",gap:r.x4,paddingTop:r.x8},children:[e.jsxDEV(D,{size:"s",view:"clear",children:"Отменить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:56,columnNumber:5},void 0),e.jsxDEV(D,{size:"s",view:"secondary",children:"Сохранить"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:59,columnNumber:5},void 0),e.jsxDEV(D,{size:"s",view:"accent",children:"Далее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:62,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:55,columnNumber:3},void 0),Ge=i=>i==="white"?pe:ge,o=({variant:i="white",height:s=260,scroll:l,topGradient:u=!1,footer:B=!0,children:a})=>{const d=N.useRef(null);return N.useLayoutEffect(()=>{const n=d.current;n&&l!==void 0&&(n.scrollTop=(n.scrollHeight-n.clientHeight)*l)},[l]),e.jsxDEV("div",{style:{padding:r.x8,borderRadius:r.x8,backgroundColor:Ge(i)},children:[e.jsxDEV("div",{style:{position:"relative"},children:[e.jsxDEV(he,{ref:d,variant:i,style:{maxHeight:s,overflowY:"auto"},children:a??e.jsxDEV(j,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:104,columnNumber:24},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:103,columnNumber:9},void 0),u?e.jsxDEV("div",{"aria-hidden":"true",style:{position:"absolute",left:0,right:0,top:0,height:100,pointerEvents:"none",background:i==="white"?"linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)":"linear-gradient(to bottom, rgb(242, 245, 248) 0%, rgba(242, 245, 248, 0) 100%)"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:107,columnNumber:11},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:102,columnNumber:7},void 0),B?e.jsxDEV(we,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:124,columnNumber:17},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:101,columnNumber:5},void 0)},ke={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:r.x8,alignItems:"start"},xe=({children:i})=>e.jsxDEV(ve,{style:{marginBottom:r.x4},children:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:137,columnNumber:3},void 0),c={decorators:[Ee],name:"Живая настройка",args:{...Be,"Цвет градиента":"white",Контент:"Не помещается"},argTypes:{...Ne,"Цвет градиента":{control:"inline-radio",options:["white","gray"],description:"Под белый или серый фон блока"},Контент:{control:"inline-radio",options:["Не помещается","Помещается"],description:"Помещается ли контент в блок. Это пример, не свойство компонента"}},render:i=>e.jsxDEV("div",{style:{maxWidth:560},children:e.jsxDEV(o,{variant:i["Цвет градиента"],children:e.jsxDEV(j,{count:i.Контент==="Помещается"?2:y.length},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:169,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:168,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:167,columnNumber:5},void 0)},V="rgb(225, 45, 45)",I={position:"absolute",padding:"0 4px",borderRadius:4,font:"500 11px/16px sans-serif",color:"#fff",backgroundColor:V,whiteSpace:"nowrap"},ye=({children:i,showWidth:s=!1})=>{const l=N.useRef(null),[u,B]=N.useState();return N.useLayoutEffect(()=>{var C;const a=l.current;if(!a)return;const d=()=>{const E=a.querySelector(".blockGradientScroll_container");if(!E)return;const A=a.getBoundingClientRect(),v=E.getBoundingClientRect(),F=getComputedStyle(E,"::after");B({top:v.bottom-A.top,left:v.left-A.left,height:parseFloat(F.height)||0,width:parseFloat(F.width)||v.width})},n=new ResizeObserver(d);return n.observe(a),d(),(C=document.fonts)==null||C.ready.then(d),()=>n.disconnect()},[]),e.jsxDEV("div",{ref:l,style:{position:"relative",paddingRight:64},children:[i,u?e.jsxDEV("span",{"aria-hidden":"true",children:[e.jsxDEV("span",{style:{position:"absolute",left:u.left,top:u.top-u.height,width:u.width,height:u.height,outline:`1px dashed ${V}`,pointerEvents:"none"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:234,columnNumber:11},void 0),e.jsxDEV("span",{style:{position:"absolute",left:u.left+u.width+24,top:u.top-u.height,width:4,height:u.height,borderRadius:2,backgroundColor:V}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:245,columnNumber:11},void 0),e.jsxDEV("span",{style:{...I,left:u.left+u.width+34,top:u.top-u.height/2,transform:"translateY(-50%)"},children:Math.round(u.height)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:256,columnNumber:11},void 0),s?e.jsxDEV("span",{style:{...I,left:u.left+u.width/2,top:u.top-12,transform:"translate(-50%, -50%)"},children:`ширина ${Math.round(u.width)}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:260,columnNumber:13},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:233,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:230,columnNumber:5},void 0)},Ve={minHeight:"100vh",padding:32,boxSizing:"border-box",backgroundColor:ge},fe={parameters:{layout:"fullscreen"},render:()=>e.jsxDEV("div",{style:Ve,children:e.jsxDEV("div",{style:{maxWidth:640},children:e.jsxDEV(ye,{showWidth:!0,children:e.jsxDEV(o,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:285,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:284,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:283,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:282,columnNumber:5},void 0)},m={...fe,name:"Окно 1440 px"},p={...fe,name:"Окно 1000 px"},g={name:"Размер градиента на живом компоненте",render:()=>e.jsxDEV(w,{storyId:`${G}--window-1440`,width:1440,height:380,visibleWidth:720,caption:"Окно 1440 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:299,columnNumber:5},void 0)},k={name:"Версия 1280",render:()=>e.jsxDEV("div",{style:ke,children:[e.jsxDEV(w,{storyId:`${G}--window-1440`,width:1440,height:380,visibleWidth:720,caption:"Окно 1440 px: градиент 100 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:307,columnNumber:7},void 0),e.jsxDEV(w,{storyId:`${G}--window-1000`,width:1e3,height:380,visibleWidth:720,caption:"Окно 1000 px: градиент 60 px"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:308,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:306,columnNumber:5},void 0)},R=[{value:"1",label:"Вариант 1"},{value:"2",label:"Вариант 2"}],x={name:"Форма в блоке со скроллом",render:()=>e.jsxDEV("div",{style:{maxWidth:640},children:e.jsxDEV(o,{height:230,children:e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:r.x6},children:[e.jsxDEV(T,{size:"s",label:"Что тестируется",placeholder:"Выберите объект",items:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:326,columnNumber:11},void 0),e.jsxDEV(T,{size:"s",label:"Канал",placeholder:"Выберите канал",items:R},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:327,columnNumber:11},void 0),e.jsxDEV("div",{style:{gridColumn:"1 / -1"},children:e.jsxDEV(Se,{size:"s",label:"Гипотеза",placeholder:"Опишите гипотезу",rightHelper:"0/1000"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:329,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:328,columnNumber:11},void 0),e.jsxDEV(t,{size:"s",label:"As Is",placeholder:"Введите As Is",required:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:331,columnNumber:11},void 0),e.jsxDEV(t,{size:"s",label:"To Be",placeholder:"Введите To Be",required:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:332,columnNumber:11},void 0),e.jsxDEV(t,{size:"s",label:"Метрика",placeholder:"Введите метрику"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:333,columnNumber:11},void 0),e.jsxDEV(t,{size:"s",label:"Срок",placeholder:"Введите срок"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:334,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:325,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:324,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:323,columnNumber:5},void 0)},f={name:"Пара: градиент сверху",render:()=>e.jsxDEV(be,{goodText:"Скролл посередине: градиент только внизу блока",badText:"Скролл посередине: градиент и сверху контента",good:e.jsxDEV(o,{height:220,scroll:.5,footer:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:349,columnNumber:13},void 0),bad:e.jsxDEV(o,{height:220,scroll:.5,footer:!1,topGradient:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:350,columnNumber:12},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:346,columnNumber:5},void 0)},h={name:"Градиент при прокрутке",render:()=>e.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:r.x8,alignItems:"start"},children:[{scroll:0,text:"Начало прокрутки: градиент виден"},{scroll:.5,text:"Середина: градиент виден"},{scroll:1,text:"Конец контента: градиента нет"}].map(({scroll:i,text:s})=>e.jsxDEV("div",{children:[e.jsxDEV(xe,{children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:365,columnNumber:11},void 0),e.jsxDEV(o,{height:220,scroll:i,footer:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:366,columnNumber:11},void 0)]},s,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:364,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:358,columnNumber:5},void 0)},S={name:"Контент помещается",render:()=>e.jsxDEV("div",{style:{maxWidth:560},children:e.jsxDEV(o,{height:260,children:e.jsxDEV(j,{count:2},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:378,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:377,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:376,columnNumber:5},void 0)},b={name:"Цвет градиента",render:()=>e.jsxDEV("div",{style:ke,children:["white","gray"].map(i=>e.jsxDEV("div",{children:[e.jsxDEV(xe,{children:i==="white"?"white на белом фоне":"gray на сером фоне"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:390,columnNumber:11},void 0),e.jsxDEV("div",{style:{padding:i==="gray"?r.x8:0,borderRadius:r.x8,backgroundColor:pe},children:e.jsxDEV(o,{variant:i,height:220,footer:!1},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:392,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:391,columnNumber:11},void 0)]},i,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:389,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/docs/design/organisms/BlockGradientScroll/BlockGradientScroll.examples.stories.tsx",lineNumber:387,columnNumber:5},void 0)};var z,_,W;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    'Цвет градиента': 'white',
    Контент: 'Не помещается'
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    'Цвет градиента': {
      control: 'inline-radio',
      options: ['white', 'gray'],
      description: 'Под белый или серый фон блока'
    },
    Контент: {
      control: 'inline-radio',
      options: ['Не помещается', 'Помещается'],
      description: 'Помещается ли контент в блок. Это пример, не свойство компонента'
    }
  },
  render: args => <div style={{
    maxWidth: 560
  }}>
      <ScrollBlock variant={args['Цвет градиента']}>
        <Fields count={args.Контент === 'Помещается' ? 2 : FIELDS.length} />
      </ScrollBlock>
    </div>
}`,...(W=(_=c.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var P,L,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...WindowStory,
  name: 'Окно 1440 px'
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var Y,$,M;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...WindowStory,
  name: 'Окно 1000 px'
}`,...(M=($=p.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var H,q,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Размер градиента на живом компоненте',
  render: () => <ViewportFrame storyId={\`\${STORY_ID}--window-1440\`} width={1440} height={380} visibleWidth={720} caption="Окно 1440 px" />
}`,...(K=(q=g.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,J,U;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Версия 1280',
  render: () => <div style={twoColumns}>
      <ViewportFrame storyId={\`\${STORY_ID}--window-1440\`} width={1440} height={380} visibleWidth={720} caption="Окно 1440 px: градиент 100 px" />
      <ViewportFrame storyId={\`\${STORY_ID}--window-1000\`} width={1000} height={380} visibleWidth={720} caption="Окно 1000 px: градиент 60 px" />
    </div>
}`,...(U=(J=k.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var X,Z,ee;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Форма в блоке со скроллом',
  render: () => <div style={{
    maxWidth: 640
  }}>
      <ScrollBlock height={230}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: s.x6
      }}>
          <Select size="s" label="Что тестируется" placeholder="Выберите объект" items={SELECT_ITEMS} />
          <Select size="s" label="Канал" placeholder="Выберите канал" items={SELECT_ITEMS} />
          <div style={{
          gridColumn: '1 / -1'
        }}>
            <TextArea size="s" label="Гипотеза" placeholder="Опишите гипотезу" rightHelper="0/1000" />
          </div>
          <TextField size="s" label="As Is" placeholder="Введите As Is" required />
          <TextField size="s" label="To Be" placeholder="Введите To Be" required />
          <TextField size="s" label="Метрика" placeholder="Введите метрику" />
          <TextField size="s" label="Срок" placeholder="Введите срок" />
        </div>
      </ScrollBlock>
    </div>
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ue,ie,re;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Пара: градиент сверху',
  render: () => <DocPair goodText="Скролл посередине: градиент только внизу блока" badText="Скролл посередине: градиент и сверху контента" good={<ScrollBlock height={220} scroll={0.5} footer={false} />} bad={<ScrollBlock height={220} scroll={0.5} footer={false} topGradient />} />
}`,...(re=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,oe,ne;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Градиент при прокрутке',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: s.x8,
    alignItems: 'start'
  }}>
      {[{
      scroll: 0,
      text: 'Начало прокрутки: градиент виден'
    }, {
      scroll: 0.5,
      text: 'Середина: градиент виден'
    }, {
      scroll: 1,
      text: 'Конец контента: градиента нет'
    }].map(({
      scroll,
      text
    }) => <div key={text}>
          <Caption>{text}</Caption>
          <ScrollBlock height={220} scroll={scroll} footer={false} />
        </div>)}
    </div>
}`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ae,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Контент помещается',
  render: () => <div style={{
    maxWidth: 560
  }}>
      <ScrollBlock height={260}>
        <Fields count={2} />
      </ScrollBlock>
    </div>
}`,...(de=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var te,ce,me;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Цвет градиента',
  render: () => <div style={twoColumns}>
      {(['white', 'gray'] as const).map(variant => <div key={variant}>
          <Caption>{variant === 'white' ? 'white на белом фоне' : 'gray на сером фоне'}</Caption>
          <div style={{
        padding: variant === 'gray' ? s.x8 : 0,
        borderRadius: s.x8,
        backgroundColor: surfaceSolidCard
      }}>
            <ScrollBlock variant={variant} height={220} footer={false} />
          </div>
        </div>)}
    </div>
}`,...(me=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const je=["Playground","Window1440","Window1000","SpacingLive","Adaptive","FormInBlock","PairTop","ScrollStates","NoScroll","Variants"],Le=Object.freeze(Object.defineProperty({__proto__:null,Adaptive:k,FormInBlock:x,NoScroll:S,PairTop:f,Playground:c,ScrollStates:h,SpacingLive:g,Variants:b,Window1000:p,Window1440:m,__namedExportsOrder:je,default:De},Symbol.toStringTag,{value:"Module"}));export{k as A,Le as E,x as F,S as N,c as P,g as S,b as V,f as a,h as b};
