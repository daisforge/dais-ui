import{r as C,d as e}from"./react-D2T61mpp.js";import{g as a}from"./getFuncAsString-Bp1PYzKJ.js";import{s as n}from"./storySourceDoc-tVKyHcEN.js";import{M as V}from"./ModalDF-DWEhLqOs.js";import{S as o}from"./Stories-aVDOx3By.js";import{c as ae,s as j}from"./constants-BudGGuoE.js";import{cK as ne,cL as $}from"./@salutejs/sdds-themes-CUTvIVmO.js";import{ad as ce,b as S,p as de}from"./@salutejs/sdds-finai-DjKHUVIR.js";import{cl as me}from"./vendor-DV2KdZ5r.js";const le={title:"Локальные компоненты/Stories",component:o,tags:["!autodocs"]},s=(r,i,c)=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="430" height="760"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${i}"/><stop offset="1" stop-color="${c}"/></linearGradient></defs><rect width="430" height="760" fill="url(#g)"/><text x="215" y="380" font-family="sans-serif" font-size="34" fill="#ffffff" text-anchor="middle">${r}</text></svg>`)}`;function d(){const[r,i]=C.useState({});return{viewed:r,markViewed:u=>i(f=>({...f,[u]:!0}))}}const m=a("packages/storybook/src/stories/Stories/Stories.stories.tsx","useViewed");function fe(){const{viewed:r,markViewed:i}=d();return e.jsxDEV(o,{defaultDuration:5e3,onGroupChange:i,children:[e.jsxDEV(o.Preview,{title:"Обновления",image:s("1","#08c6c9","#99b0fe"),viewed:r[0],slides:[{src:s("Слайд 1","#08c6c9","#4f8ef7"),footer:e.jsxDEV(S,{size:"s",view:"accent",stretching:"filled",text:"Подробнее",onClick:()=>{}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:61,columnNumber:15},this)},{src:s("Слайд 2","#7b61ff","#99b0fe")},{src:s("Слайд 3","#00b3a4","#08c6c9"),objectFit:"contain"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:53,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Акции недели",image:s("2","#f7971e","#ffd200"),viewed:r[1],slides:[{src:s("Акция","#f7971e","#ffd200"),duration:3e3}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:77,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Как это работает",image:s("3","#c471ed","#f64f59"),viewed:r[2],slides:[{src:s("Шаг 1","#c471ed","#f64f59")},{src:s("Шаг 2","#12c2e9","#c471ed")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:83,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:52,columnNumber:5},this)}const pe=`
import { Button, Stories } from '@daisforge/ui';
import { useState } from 'react';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","CircleStoriesExample")}
`,k={name:"Круглые триггеры",...n({code:pe,previewSource:"shown"}),render:fe};function Se(){const{viewed:r,markViewed:i}=d();return e.jsxDEV(o,{defaultDuration:4e3,groupTransition:"slide",onGroupChange:i,children:[e.jsxDEV(o.Preview,{shape:"rect",title:"Дайджест",image:s("A","#08c6c9","#4f8ef7"),viewed:r[0],slides:[{src:s("Новость 1","#08c6c9","#4f8ef7")},{src:s("Новость 2","#4f8ef7","#7b61ff")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:123,columnNumber:7},this),e.jsxDEV(o.Preview,{shape:"rect",title:"Новые возможности",image:s("B","#00b3a4","#08c6c9"),viewed:r[1],slides:[{src:s("Фича","#00b3a4","#08c6c9"),footer:e.jsxDEV(S,{size:"s",view:"accent",stretching:"filled",as:"a",href:"#",text:"Открыть"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:142,columnNumber:15},this)}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:133,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:118,columnNumber:5},this)}const be=`
import { Button, Stories } from '@daisforge/ui';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","RectStoriesExample")}
`,x={name:"Прямоугольные триггеры",...n({code:be,previewSource:"shown"}),render:Se};function ke(){const{viewed:r,markViewed:i}=d();return e.jsxDEV(o,{loadingDelay:2e3,preloadOnHover:!1,onGroupChange:i,children:e.jsxDEV(o.Preview,{title:"Загрузка",image:s("⏳","#08c6c9","#99b0fe"),viewed:r[0],slides:[{src:s("Ассет 1","#08c6c9","#4f8ef7")},{src:s("Ассет 2","#7b61ff","#99b0fe")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:185,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:180,columnNumber:5},this)}const xe=`
import { Stories } from '@daisforge/ui';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","LoadingStoriesExample")}
`,w={name:"Спиннер загрузки (эмуляция)",...n({code:xe,previewSource:"shown"}),render:ke};function we(){return e.jsxDEV(o,{children:e.jsxDEV(o.Preview,{title:"Битый ассет",image:s("!","#8a959d","#30373c"),slides:[{src:"data:image/png;base64,not-a-valid-image"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:218,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:217,columnNumber:5},this)}const he=`
import { Stories } from '@daisforge/ui';

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","ErrorStateExample")}
`,h={name:"Ошибка: дефолтный EmptyState + ретрай",...n({code:he,previewSource:"shown"}),render:we};function ge(){return e.jsxDEV(o,{renderError:({retry:r})=>e.jsxDEV("div",{style:{boxSizing:"border-box",display:"flex",flexDirection:"column",gap:j.x4,alignItems:"center",width:"100%",padding:j.x8,borderRadius:ae.s,border:`1px solid ${$}`,color:$,backgroundColor:ne,textAlign:"center"},children:[e.jsxDEV(de,{children:"Свой контент при ошибке загрузки"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:264,columnNumber:11},this),e.jsxDEV(S,{size:"s",view:"secondary",text:"Повторить",onClick:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:265,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:248,columnNumber:9},this),children:e.jsxDEV(o.Preview,{title:"Кастомная ошибка",image:s("!","#8a959d","#30373c"),slides:[{src:"data:image/png;base64,broken-custom"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:269,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:246,columnNumber:5},this)}const Ne=`
import { BodyS, Button, Stories, surfaceAccentMinor, surfaceInfo } from '@daisforge/ui';
import { br, s } from '@daisforge/ui/constants';

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","ErrorCustomExample")}
`,g={name:"Ошибка: кастомный контент (renderError)",...n({code:Ne,previewSource:"shown"}),render:ge};function ve(){const r=C.useRef(null),{viewed:i,markViewed:c}=d(),[u,f]=C.useState({open:!1,group:0,slide:0});return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[e.jsxDEV(S,{size:"s",text:"Открыть группу 1",onClick:()=>{var t;return(t=r.current)==null?void 0:t.open(0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:309,columnNumber:9},this),e.jsxDEV(S,{size:"s",text:"Открыть группу 2",onClick:()=>{var t;return(t=r.current)==null?void 0:t.open(1)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:314,columnNumber:9},this),e.jsxDEV("span",{children:u.open?`Открыто: группа ${u.group}, слайд ${u.slide}`:"Закрыто"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:319,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:301,columnNumber:7},this),e.jsxDEV(o,{ref:r,onGroupChange:c,onOpenChange:(t,l)=>f(p=>({...p,open:t,group:l.groupIndex})),onSlideChange:(t,l)=>f(p=>({...p,group:t,slide:l})),children:[e.jsxDEV(o.Preview,{title:"Группа 1",image:s("1","#08c6c9","#99b0fe"),viewed:i[0],slides:[{src:s("1.1","#08c6c9","#4f8ef7")},{src:s("1.2","#4f8ef7","#7b61ff")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:335,columnNumber:9},this),e.jsxDEV(o.Preview,{title:"Группа 2",image:s("2","#f7971e","#ffd200"),viewed:i[1],slides:[{src:s("2.1","#f7971e","#ffd200")},{src:s("2.2","#f64f59","#c471ed")},{src:s("2.3","#12c2e9","#c471ed")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:344,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:325,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:300,columnNumber:5},this)}const Ee=`
import { Button, Stories, StoriesRef } from '@daisforge/ui';
import { useRef, useState } from 'react';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","ImperativeControlExample")}
`,N={name:"Внешнее управление через ref",...n({code:Ee,previewSource:"shown"}),render:ve};function ye(){const{viewed:r,markViewed:i}=d(),[c,u]=C.useState(!1);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(S,{size:"s",text:"Открыть модалку со сторями",onClick:()=>u(!0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:383,columnNumber:7},this),e.jsxDEV(V,{opened:c,onClose:()=>u(!1),children:e.jsxDEV(V.Main,{children:[e.jsxDEV(V.Header,{title:"Сторис внутри модалки",subTitle:"Клик по кружку открывает вьюер поверх модалки (zIndex выше оверлея ModalDF)"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:390,columnNumber:11},this),e.jsxDEV(V.Content,{children:e.jsxDEV(o,{zIndex:1e4,onGroupChange:i,children:[e.jsxDEV(o.Preview,{title:"Промо",image:s("1","#08c6c9","#99b0fe"),viewed:r[0],slides:[{src:s("Слайд 1","#08c6c9","#4f8ef7")},{src:s("Слайд 2","#7b61ff","#99b0fe")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:397,columnNumber:15},this),e.jsxDEV(o.Preview,{title:"Новости",image:s("2","#f7971e","#ffd200"),viewed:r[1],slides:[{src:s("Новость","#f7971e","#ffd200")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:406,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:396,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:394,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:389,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:388,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:382,columnNumber:5},this)}const De=`
import { Button, ModalDF, Stories } from '@daisforge/ui';
import { useState } from 'react';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","InsideModalExample")}
`,v={name:"Триггеры внутри ModalDF",...n({code:De,previewSource:"shown"}),render:ye};function Ce(){const{viewed:r,markViewed:i}=d();return e.jsxDEV(o,{arrows:"never",onGroupChange:i,children:[e.jsxDEV(o.Preview,{title:"Группа 1",image:s("1","#08c6c9","#99b0fe"),viewed:r[0],slides:[{src:s("Слайд 1","#08c6c9","#4f8ef7")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:444,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Группа 2",image:s("2","#f7971e","#ffd200"),viewed:r[1],slides:[{src:s("Слайд 2","#f7971e","#ffd200")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:450,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Группа 3",image:s("3","#c471ed","#f64f59"),viewed:r[2],slides:[{src:s("Слайд 3","#c471ed","#f64f59")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:456,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:443,columnNumber:5},this)}const Ve=`
import { Stories } from '@daisforge/ui';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","HiddenArrowsExample")}
`,E={name:'Стрелки скрыты (arrows="never")',...n({code:Ve,previewSource:"shown"}),render:Ce};function je(){const{viewed:r,markViewed:i}=d();return e.jsxDEV(o,{onGroupChange:i,children:[e.jsxDEV(o.Preview,{title:"Очень длинное название сторис, которое не помещается в две строки и уходит в троеточие с тултипом",image:s("L","#08c6c9","#99b0fe"),viewed:r[0],slides:[{src:s("Слайд","#08c6c9","#4f8ef7")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:488,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Слева",titleProps:{style:{textAlign:"left"}},image:s("◀","#f7971e","#ffd200"),viewed:r[1],slides:[{src:s("Слайд","#f7971e","#ffd200")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:494,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Крупнее, не жирный, цветной",titleProps:{variant:"BodyS",bold:!1,color:"#08c6c9"},image:s("●","#7b61ff","#99b0fe"),viewed:r[2],slides:[{src:s("Слайд","#7b61ff","#99b0fe")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:501,columnNumber:7},this),e.jsxDEV(o.Preview,{title:"Справа",titleProps:{style:{textAlign:"right"}},image:s("▶","#c471ed","#f64f59"),viewed:r[3],slides:[{src:s("Слайд","#c471ed","#f64f59")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:508,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:487,columnNumber:5},this)}const $e=`
import { Stories } from '@daisforge/ui';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","TitlesExample")}
`,y={name:"Подписи: 2 строки, ellipsis, выравнивание",...n({code:$e,previewSource:"shown"}),render:je},Be=[["#08c6c9","#4f8ef7"],["#f7971e","#ffd200"],["#c471ed","#f64f59"],["#00b3a4","#08c6c9"],["#7b61ff","#99b0fe"],["#12c2e9","#c471ed"]];function Ae(){const{viewed:r,markViewed:i}=d(),[c,u]=C.useState(0),f=t=>{i(t),u(t)};return e.jsxDEV(o,{onGroupChange:f,children:e.jsxDEV(ce,{index:c,onChangeIndex:u,scrollAlign:"start",gap:"16px",style:{maxWidth:360},children:Be.map(([t,l],p)=>{const b=p+1;return e.jsxDEV(me,{children:e.jsxDEV(o.Preview,{title:`Превью ${b}`,image:s(String(b),t,l),viewed:r[p],slides:[{src:s(`Слайд ${b}.1`,t,l)},{src:s(`Слайд ${b}.2`,l,t)}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:568,columnNumber:15},this)},b,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:567,columnNumber:13},this)})},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:557,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Stories/Stories.stories.tsx",lineNumber:556,columnNumber:5},this)}const Pe=`
import { Carousel, CarouselItem, Stories } from '@daisforge/ui';

${m}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","CarouselWrappedExample")}
`,D={name:"Превью внутри Carousel (вложенность)",...n({code:Pe,previewSource:"shown"}),render:Ae};var B,A,P;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Круглые триггеры',
  ...storySourceDoc({
    code: circleCode,
    previewSource: 'shown'
  }),
  render: CircleStoriesExample
}`,...(P=(A=k.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var I,F,M;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Прямоугольные триггеры',
  ...storySourceDoc({
    code: rectCode,
    previewSource: 'shown'
  }),
  render: RectStoriesExample
}`,...(M=(F=x.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,z,G;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Спиннер загрузки (эмуляция)',
  ...storySourceDoc({
    code: loadingCode,
    previewSource: 'shown'
  }),
  render: LoadingStoriesExample
}`,...(G=(z=w.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var T,L,W;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Ошибка: дефолтный EmptyState + ретрай',
  ...storySourceDoc({
    code: errorCode,
    previewSource: 'shown'
  }),
  render: ErrorStateExample
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var H,O,_;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Ошибка: кастомный контент (renderError)',
  ...storySourceDoc({
    code: errorCustomCode,
    previewSource: 'shown'
  }),
  render: ErrorCustomExample
}`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var U,K,q;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Внешнее управление через ref',
  ...storySourceDoc({
    code: imperativeCode,
    previewSource: 'shown'
  }),
  render: ImperativeControlExample
}`,...(q=(K=N.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Триггеры внутри ModalDF',
  ...storySourceDoc({
    code: insideModalCode,
    previewSource: 'shown'
  }),
  render: InsideModalExample
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Стрелки скрыты (arrows="never")',
  ...storySourceDoc({
    code: hiddenArrowsCode,
    previewSource: 'shown'
  }),
  render: HiddenArrowsExample
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,re,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Подписи: 2 строки, ellipsis, выравнивание',
  ...storySourceDoc({
    code: titlesCode,
    previewSource: 'shown'
  }),
  render: TitlesExample
}`,...(oe=(re=y.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,te,ue;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Превью внутри Carousel (вложенность)',
  ...storySourceDoc({
    code: carouselWrappedCode,
    previewSource: 'shown'
  }),
  render: CarouselWrappedExample
}`,...(ue=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};const Ie=["Circle","Rect","Loading","ErrorState","ErrorCustom","ImperativeControl","InsideModal","HiddenArrows","Titles","CarouselWrapped"],Oe=Object.freeze(Object.defineProperty({__proto__:null,CarouselWrapped:D,Circle:k,ErrorCustom:g,ErrorState:h,HiddenArrows:E,ImperativeControl:N,InsideModal:v,Loading:w,Rect:x,Titles:y,__namedExportsOrder:Ie,default:le},Symbol.toStringTag,{value:"Module"}));export{Oe as S};
