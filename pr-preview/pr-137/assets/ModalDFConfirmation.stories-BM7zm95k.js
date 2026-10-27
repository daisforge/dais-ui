import{r as u,j as e}from"./react-CAOzMBF_.js";import{g as p}from"./getFuncAsString-DnrLf2YT.js";import{s as l}from"./storySourceDoc-tVKyHcEN.js";import{M as n}from"./ModalDFConfirmation-BOBDdzju.js";import{s as i}from"./constants-DatVHdkd.js";import{t as o,F as A}from"./@salutejs/sdds-finai-CKhMjg07.js";import{pc as d}from"./@salutejs/plasma-icons-Do5ggeDI.js";const W={title:"Локальные компоненты/ModalDFConfirmation",parameters:{docs:{layout:"fullscreen"}},tags:["!autodocs"],component:n};function _(){const[c,t]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Открыть модальное окно"}),e.jsx(n,{opened:c,onClose:()=>t(!1),contentContainerProps:{css:{maxWidth:"500px"}},content:{header:"Сохранить изменения перед выходом?",body:"У вас есть несохранённые данные. При выходе без сохранения восстановить их будет невозможно",bodyMarginBlock:i.x4,mainButton:{text:"Сохранить"},secondaryButton:{text:"Выйти без сохранения"}}})]})}function V(){const[c,t]=u.useState(!1),[x,f]=u.useState(!1),[R,C]=u.useState(!1),[O,m]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:i.x2},children:[e.jsx(o,{view:"positive",onClick:()=>t(!0),children:"Открыть модальное окно"}),e.jsx(o,{view:"warning",onClick:()=>f(!0),children:"Открыть модальное окно"}),e.jsx(o,{view:"accent",onClick:()=>C(!0),children:"Открыть модальное окно"}),e.jsx(o,{view:"negative",onClick:()=>m(!0),children:"Открыть модальное окно"})]}),e.jsx(n,{view:"positive",icon:e.jsx(d,{}),opened:c,onClose:()=>t(!1),contentContainerProps:{css:{maxWidth:"500px"}},content:{header:"Изменения сохранены",body:"Данные были сохранены. Можно закрыть форму и продолжить пользоваться услугами",bodyMarginBlock:i.x4,mainButton:{text:"Далее",view:"positive"}}}),e.jsx(n,{view:"warning",icon:e.jsx(d,{}),opened:x,onClose:()=>f(!1),contentContainerProps:{css:{maxWidth:"500px"}},content:{header:"Что-то пошло не так",body:"Произошла ошибка. Нужно проверить введенные данные",bodyMarginBlock:i.x4,mainButton:{text:"Сохранить",view:"warning"},secondaryButton:{text:"Выйти без сохранения"}}}),e.jsx(n,{view:"info",icon:e.jsx(d,{}),opened:R,onClose:()=>C(!1),contentContainerProps:{css:{maxWidth:"500px"}},content:{header:"Сохранить изменения перед выходом?",body:"У вас есть несохранённые данные. При выходе без сохранения восстановить их будет невозможно",bodyMarginBlock:i.x4,mainButton:{text:"Сохранить"},secondaryButton:{text:"Выйти без сохранения"}}}),e.jsx(n,{view:"negative",icon:e.jsx(d,{}),opened:O,onClose:()=>m(!1),contentContainerProps:{css:{maxWidth:"432px"}},content:{header:"Удалить данные?",body:"Если удалить данные, восстановить их и продолжить работу будет невозможно",mainButton:{text:"Удалить",view:"negative"},secondaryButton:{text:"Отменить",onClick:()=>m(!1)}}})]})}function z(){const[c,t]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Открыть модальное окно"}),e.jsx(n,{opened:c,onClose:()=>t(!1),content:{header:"Заголовок модального окна",body:"Добавьте кастомный футер, когда нужно встроить нестандартные кнопки или дополнительный контент.",footer:e.jsx(n.Footer,{leftBlock:e.jsx(o,{size:"s",text:"Кнопка",view:"clear"}),rightBlock:e.jsxs(A,{mainAxisGap:i.x4,children:[e.jsx(o,{size:"s",view:"secondary",text:"Кнопка 2"}),e.jsx(o,{size:"s",view:"accent",text:"Кнопка 1"})]})})}})]})}const $=`
import { Button, ModalDFConfirmation } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import React, { useState } from 'react';

${p("packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx","SavingExampleRender")}
`,N=`
import { Button, ModalDFConfirmation } from '@daisforge/ui';
import React, { useState } from 'react';

${p("packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx","VariantsExampleRender")}
`,G=`
import { Button, Flow, ModalDFConfirmation } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import React, { useState } from 'react';

${p("packages/storybook/src/stories/ModalDFConfirmation/ModalDFConfirmation.stories.tsx","CustomFooterExampleRender")}
`,r={name:"Пример сохранения",...l({previewSource:"shown",code:$}),render:_},s={name:"Примеры разных view и иконок",...l({previewSource:"shown",code:N}),render:V},a={name:"Пример c кастомным footer-oм",...l({previewSource:"shown",code:G}),render:z};var F,g,v,E,w;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Пример сохранения',
  ...storySourceDoc({
    previewSource: 'shown',
    code: savingExamplePreCode
  }),
  render: SavingExampleRender
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.description}}};var S,h,y,j,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Примеры разных view и иконок',
  ...storySourceDoc({
    previewSource: 'shown',
    code: variantsExamplePreCode
  }),
  render: VariantsExampleRender
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var D,k,M,b,P;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Пример c кастомным footer-oм',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customFooterExamplePreCode
  }),
  render: CustomFooterExampleRender
}`,...(M=(k=a.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.description}}};const I=["SavingExample","VariantsExample","CustomFooterExample"],U=Object.freeze(Object.defineProperty({__proto__:null,CustomFooterExample:a,SavingExample:r,VariantsExample:s,__namedExportsOrder:I,default:W},Symbol.toStringTag,{value:"Module"}));export{U as M};
