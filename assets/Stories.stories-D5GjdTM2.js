import{r as D,j as e}from"./react-CAOzMBF_.js";import{g as a}from"./getFuncAsString-B1yRgn90.js";import{s as c}from"./storySourceDoc-tVKyHcEN.js";import{M as $}from"./ModalDF-DGdz2a6t.js";import{S as o}from"./Stories-BdB7JG0f.js";import{c as ae,s as B}from"./constants-ChwOYBdp.js";import{dy as ce,dD as A}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{ad as ue,t as x,m as de}from"./@salutejs/sdds-finai-CrMFu5No.js";import{cv as le}from"./vendor-CvBXOjQ8.js";const me={title:"Локальные компоненты/Stories",component:o,tags:["!autodocs"]},r=(s,t,u)=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="430" height="760"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${u}"/></linearGradient></defs><rect width="430" height="760" fill="url(#g)"/><text x="215" y="380" font-family="sans-serif" font-size="34" fill="#ffffff" text-anchor="middle">${s}</text></svg>`)}`;function d(){const[s,t]=D.useState({});return{viewed:s,markViewed:n=>t(p=>({...p,[n]:!0}))}}const l=a("packages/storybook/src/stories/Stories/Stories.stories.tsx","useViewed");function pe(){const{viewed:s,markViewed:t}=d();return e.jsxs(o,{defaultDuration:5e3,onGroupChange:t,children:[e.jsx(o.Preview,{title:"Обновления",image:r("1","#08c6c9","#99b0fe"),viewed:s[0],slides:[{src:r("Слайд 1","#08c6c9","#4f8ef7"),footer:e.jsx(x,{size:"s",view:"accent",stretching:"filled",text:"Подробнее",onClick:()=>{}})},{src:r("Слайд 2","#7b61ff","#99b0fe")},{src:r("Слайд 3","#00b3a4","#08c6c9"),objectFit:"contain"}]}),e.jsx(o.Preview,{title:"Акции недели",image:r("2","#f7971e","#ffd200"),viewed:s[1],slides:[{src:r("Акция","#f7971e","#ffd200"),duration:3e3}]}),e.jsx(o.Preview,{title:"Как это работает",image:r("3","#c471ed","#f64f59"),viewed:s[2],slides:[{src:r("Шаг 1","#c471ed","#f64f59")},{src:r("Шаг 2","#12c2e9","#c471ed")}]})]})}const fe=`
import { Button, Stories } from '@daisforge/ui';
import { useState } from 'react';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","CircleStoriesExample")}
`,g={name:"Круглые триггеры",...c({code:fe,previewSource:"shown"}),render:pe};function xe(){const{viewed:s,markViewed:t}=d();return e.jsxs(o,{defaultDuration:4e3,groupTransition:"slide",onGroupChange:t,children:[e.jsx(o.Preview,{shape:"rect",title:"Дайджест",image:r("A","#08c6c9","#4f8ef7"),viewed:s[0],slides:[{src:r("Новость 1","#08c6c9","#4f8ef7")},{src:r("Новость 2","#4f8ef7","#7b61ff")}]}),e.jsx(o.Preview,{shape:"rect",title:"Новые возможности",image:r("B","#00b3a4","#08c6c9"),viewed:s[1],slides:[{src:r("Фича","#00b3a4","#08c6c9"),footer:e.jsx(x,{size:"s",view:"accent",stretching:"filled",as:"a",href:"#",text:"Открыть"})}]})]})}const we=`
import { Button, Stories } from '@daisforge/ui';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","RectStoriesExample")}
`,S={name:"Прямоугольные триггеры",...c({code:we,previewSource:"shown"}),render:xe};function ge(){const{viewed:s,markViewed:t}=d();return e.jsx(o,{loadingDelay:2e3,preloadOnHover:!1,onGroupChange:t,children:e.jsx(o.Preview,{title:"Загрузка",image:r("⏳","#08c6c9","#99b0fe"),viewed:s[0],slides:[{src:r("Ассет 1","#08c6c9","#4f8ef7")},{src:r("Ассет 2","#7b61ff","#99b0fe")}]})})}const Se=`
import { Stories } from '@daisforge/ui';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","LoadingStoriesExample")}
`,v={name:"Спиннер загрузки (эмуляция)",...c({code:Se,previewSource:"shown"}),render:ge};function ve(){return e.jsx(o,{children:e.jsx(o.Preview,{title:"Битый ассет",image:r("!","#8a959d","#30373c"),slides:[{src:"data:image/png;base64,not-a-valid-image"}]})})}const Ce=`
import { Stories } from '@daisforge/ui';

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","ErrorStateExample")}
`,C={name:"Ошибка: дефолтный EmptyState + ретрай",...c({code:Ce,previewSource:"shown"}),render:ve};function he(){return e.jsx(o,{renderError:({retry:s})=>e.jsxs("div",{style:{boxSizing:"border-box",display:"flex",flexDirection:"column",gap:B.x4,alignItems:"center",width:"100%",padding:B.x8,borderRadius:ae.s,border:`1px solid ${A}`,color:A,backgroundColor:ce,textAlign:"center"},children:[e.jsx(de,{children:"Свой контент при ошибке загрузки"}),e.jsx(x,{size:"s",view:"secondary",text:"Повторить",onClick:s})]}),children:e.jsx(o.Preview,{title:"Кастомная ошибка",image:r("!","#8a959d","#30373c"),slides:[{src:"data:image/png;base64,broken-custom"}]})})}const Ee=`
import { BodyS, Button, Stories, surfaceAccentMinor, surfaceInfo } from '@daisforge/ui';
import { br, s } from '@daisforge/ui/constants';

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","ErrorCustomExample")}
`,h={name:"Ошибка: кастомный контент (renderError)",...c({code:Ee,previewSource:"shown"}),render:he};function je(){const s=D.useRef(null),{viewed:t,markViewed:u}=d(),[n,p]=D.useState({open:!1,group:0,slide:0});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(x,{size:"s",text:"Открыть группу 1",onClick:()=>{var i;return(i=s.current)==null?void 0:i.open(0)}}),e.jsx(x,{size:"s",text:"Открыть группу 2",onClick:()=>{var i;return(i=s.current)==null?void 0:i.open(1)}}),e.jsx("span",{children:n.open?`Открыто: группа ${n.group}, слайд ${n.slide}`:"Закрыто"})]}),e.jsxs(o,{ref:s,onGroupChange:u,onOpenChange:(i,m)=>p(f=>({...f,open:i,group:m.groupIndex})),onSlideChange:(i,m)=>p(f=>({...f,group:i,slide:m})),children:[e.jsx(o.Preview,{title:"Группа 1",image:r("1","#08c6c9","#99b0fe"),viewed:t[0],slides:[{src:r("1.1","#08c6c9","#4f8ef7")},{src:r("1.2","#4f8ef7","#7b61ff")}]}),e.jsx(o.Preview,{title:"Группа 2",image:r("2","#f7971e","#ffd200"),viewed:t[1],slides:[{src:r("2.1","#f7971e","#ffd200")},{src:r("2.2","#f64f59","#c471ed")},{src:r("2.3","#12c2e9","#c471ed")}]})]})]})}const be=`
import { Button, Stories, StoriesRef } from '@daisforge/ui';
import { useRef, useState } from 'react';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","ImperativeControlExample")}
`,E={name:"Внешнее управление через ref",...c({code:be,previewSource:"shown"}),render:je};function ye(){const{viewed:s,markViewed:t}=d(),[u,n]=D.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"s",text:"Открыть модалку со сторями",onClick:()=>n(!0)}),e.jsx($,{opened:u,onClose:()=>n(!1),children:e.jsxs($.Main,{children:[e.jsx($.Header,{title:"Сторис внутри модалки",subTitle:"Клик по кружку открывает вьюер поверх модалки (zIndex выше оверлея ModalDF)"}),e.jsx($.Content,{children:e.jsxs(o,{zIndex:1e4,onGroupChange:t,children:[e.jsx(o.Preview,{title:"Промо",image:r("1","#08c6c9","#99b0fe"),viewed:s[0],slides:[{src:r("Слайд 1","#08c6c9","#4f8ef7")},{src:r("Слайд 2","#7b61ff","#99b0fe")}]}),e.jsx(o.Preview,{title:"Новости",image:r("2","#f7971e","#ffd200"),viewed:s[1],slides:[{src:r("Новость","#f7971e","#ffd200")}]})]})})]})})]})}const ke=`
import { Button, ModalDF, Stories } from '@daisforge/ui';
import { useState } from 'react';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","InsideModalExample")}
`,j={name:"Триггеры внутри ModalDF",...c({code:ke,previewSource:"shown"}),render:ye};function De(){const{viewed:s,markViewed:t}=d();return e.jsxs(o,{arrows:"never",onGroupChange:t,children:[e.jsx(o.Preview,{title:"Группа 1",image:r("1","#08c6c9","#99b0fe"),viewed:s[0],slides:[{src:r("Слайд 1","#08c6c9","#4f8ef7")}]}),e.jsx(o.Preview,{title:"Группа 2",image:r("2","#f7971e","#ffd200"),viewed:s[1],slides:[{src:r("Слайд 2","#f7971e","#ffd200")}]}),e.jsx(o.Preview,{title:"Группа 3",image:r("3","#c471ed","#f64f59"),viewed:s[2],slides:[{src:r("Слайд 3","#c471ed","#f64f59")}]})]})}const $e=`
import { Stories } from '@daisforge/ui';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","HiddenArrowsExample")}
`,b={name:'Стрелки скрыты (arrows="never")',...c({code:$e,previewSource:"shown"}),render:De};function Be(){const{viewed:s,markViewed:t}=d();return e.jsxs(o,{onGroupChange:t,children:[e.jsx(o.Preview,{title:"Очень длинное название сторис, которое не помещается в две строки и уходит в троеточие с тултипом",image:r("L","#08c6c9","#99b0fe"),viewed:s[0],slides:[{src:r("Слайд","#08c6c9","#4f8ef7")}]}),e.jsx(o.Preview,{title:"Слева",titleProps:{style:{textAlign:"left"}},image:r("◀","#f7971e","#ffd200"),viewed:s[1],slides:[{src:r("Слайд","#f7971e","#ffd200")}]}),e.jsx(o.Preview,{title:"Крупнее, не жирный, цветной",titleProps:{variant:"BodyS",bold:!1,color:"#08c6c9"},image:r("●","#7b61ff","#99b0fe"),viewed:s[2],slides:[{src:r("Слайд","#7b61ff","#99b0fe")}]}),e.jsx(o.Preview,{title:"Справа",titleProps:{style:{textAlign:"right"}},image:r("▶","#c471ed","#f64f59"),viewed:s[3],slides:[{src:r("Слайд","#c471ed","#f64f59")}]})]})}const Ae=`
import { Stories } from '@daisforge/ui';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","TitlesExample")}
`,y={name:"Подписи: 2 строки, ellipsis, выравнивание",...c({code:Ae,previewSource:"shown"}),render:Be},Pe=[["#08c6c9","#4f8ef7"],["#f7971e","#ffd200"],["#c471ed","#f64f59"],["#00b3a4","#08c6c9"],["#7b61ff","#99b0fe"],["#12c2e9","#c471ed"]];function Ie(){const{viewed:s,markViewed:t}=d(),[u,n]=D.useState(0),p=i=>{t(i),n(i)};return e.jsx(o,{onGroupChange:p,children:e.jsx(ue,{index:u,onChangeIndex:n,scrollAlign:"start",gap:"16px",style:{maxWidth:360},children:Pe.map(([i,m],f)=>{const w=f+1;return e.jsx(le,{children:e.jsx(o.Preview,{title:`Превью ${w}`,image:r(String(w),i,m),viewed:s[f],slides:[{src:r(`Слайд ${w}.1`,i,m)},{src:r(`Слайд ${w}.2`,m,i)}]})},w)})})})}const Fe=`
import { Carousel, CarouselItem, Stories } from '@daisforge/ui';

${l}

${a("packages/storybook/src/stories/Stories/Stories.stories.tsx","CarouselWrappedExample")}
`,k={name:"Превью внутри Carousel (вложенность)",...c({code:Fe,previewSource:"shown"}),render:Ie};var P,I,F;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Круглые триггеры',
  ...storySourceDoc({
    code: circleCode,
    previewSource: 'shown'
  }),
  render: CircleStoriesExample
}`,...(F=(I=g.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var M,V,R;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Прямоугольные триггеры',
  ...storySourceDoc({
    code: rectCode,
    previewSource: 'shown'
  }),
  render: RectStoriesExample
}`,...(R=(V=S.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var z,G,T;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Спиннер загрузки (эмуляция)',
  ...storySourceDoc({
    code: loadingCode,
    previewSource: 'shown'
  }),
  render: LoadingStoriesExample
}`,...(T=(G=v.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var W,_,L;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Ошибка: дефолтный EmptyState + ретрай',
  ...storySourceDoc({
    code: errorCode,
    previewSource: 'shown'
  }),
  render: ErrorStateExample
}`,...(L=(_=C.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var H,O,U;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Ошибка: кастомный контент (renderError)',
  ...storySourceDoc({
    code: errorCustomCode,
    previewSource: 'shown'
  }),
  render: ErrorCustomExample
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var q,J,K;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Внешнее управление через ref',
  ...storySourceDoc({
    code: imperativeCode,
    previewSource: 'shown'
  }),
  render: ImperativeControlExample
}`,...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Триггеры внутри ModalDF',
  ...storySourceDoc({
    code: insideModalCode,
    previewSource: 'shown'
  }),
  render: InsideModalExample
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Стрелки скрыты (arrows="never")',
  ...storySourceDoc({
    code: hiddenArrowsCode,
    previewSource: 'shown'
  }),
  render: HiddenArrowsExample
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,se,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Подписи: 2 строки, ellipsis, выравнивание',
  ...storySourceDoc({
    code: titlesCode,
    previewSource: 'shown'
  }),
  render: TitlesExample
}`,...(oe=(se=y.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var te,ie,ne;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Превью внутри Carousel (вложенность)',
  ...storySourceDoc({
    code: carouselWrappedCode,
    previewSource: 'shown'
  }),
  render: CarouselWrappedExample
}`,...(ne=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const Me=["Circle","Rect","Loading","ErrorState","ErrorCustom","ImperativeControl","InsideModal","HiddenArrows","Titles","CarouselWrapped"],Oe=Object.freeze(Object.defineProperty({__proto__:null,CarouselWrapped:k,Circle:g,ErrorCustom:h,ErrorState:C,HiddenArrows:b,ImperativeControl:E,InsideModal:j,Loading:v,Rect:S,Titles:y,__namedExportsOrder:Me,default:me},Symbol.toStringTag,{value:"Module"}));export{Oe as S};
