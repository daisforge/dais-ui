import{r as l,j as e}from"./react-CAOzMBF_.js";import{g as u}from"./getFuncAsString-DnrLf2YT.js";import{s as x}from"./storySourceDoc-tVKyHcEN.js";import{D as r}from"./DrawerDF-BPw-jAxs.js";import{s}from"./constants-DatVHdkd.js";import{s as h,l as w}from"./data-dWPDlSF_.js";import{x as O,w as T,t,F as D}from"./@salutejs/sdds-finai-CKhMjg07.js";function p({stretch:n=!1,view:o="divider"}){const _=Array(4).fill(0),[f,g]=l.useState(0);return e.jsx("div",{style:{marginBlock:-2,flexShrink:0,...n&&{width:"100%"}},children:e.jsx(O,{stretch:n,view:o,size:"m",index:f,children:_.map((P,m)=>e.jsx(T,{view:"divider",size:"m",itemIndex:m,onIndexChange:z=>g(z),selected:m===f,tabIndex:0,onClick:()=>g(m),children:"Label"},`item:${m}`))})})}try{p.displayName="TabsComp",p.__docgenInfo={description:"",displayName:"TabsComp",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},view:{defaultValue:{value:"divider"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"divider"'}]}}}}}catch{}const L={title:"Локальные компоненты/DrawerDF",parameters:{docs:{layout:"fullscreen"}},component:r,tags:["!autodocs"]};function N(){const[n,o]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Открыть drawer"}),e.jsx(r,{opened:n,onClose:()=>o(!1),header:e.jsx(r.Header,{title:"Заголовок дровера",subTitle:"Подзаголовок здесь",badge:{text:"Label"},rightBlock:e.jsxs(D,{mainAxisGap:s.x1,style:{flexWrap:"nowrap",gap:s.x4},children:[e.jsx(r.DotsIconButton,{}),e.jsx(t,{text:"Вторичная 1",size:"xs",view:"secondary"})]}),footerBlock:e.jsx(p,{stretch:!0})}),main:e.jsx(r.Content,{children:w}),footer:e.jsxs(r.Footer,{$css:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{view:"clear",size:"xs",children:"Очистить"}),e.jsxs("div",{children:[e.jsx(t,{view:"secondary",size:"xs",children:"Действие 1"}),e.jsx(t,{view:"accent",size:"xs",style:{marginLeft:8},children:"Главная кнопка"})]})]})})]})}function H(){const[n,o]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Открыть drawer"}),e.jsx(r,{opened:n,onClose:()=>o(!1),width:"fit-content",header:e.jsx(r.Header,{title:"Заголовок дровера",subTitle:"Подзаголовок здесь",badge:{text:"Label"},rightBlock:e.jsxs(D,{mainAxisGap:s.x1,style:{flexWrap:"nowrap",gap:s.x4},children:[e.jsx(r.DotsIconButton,{}),e.jsx(t,{text:"Вторичная 1",size:"xs",view:"secondary"}),e.jsx(t,{text:"Главная кнопка",size:"xs",view:"accent"})]}),footerBlock:e.jsx(p,{stretch:!0})}),main:[e.jsxs(r.Content,{fixedWidth:"150px",children:[e.jsx(t,{view:"accent",size:"xs",children:"Обосновать"}),h]},"left"),e.jsx(r.Content,{fixedWidth:"50%",children:w},"middle"),e.jsx(r.Content,{children:h},"right-1"),e.jsx(r.Content,{children:h},"right-2")]})]})}function I(){const[n,o]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Открыть drawer (одиночный контент)"}),e.jsx(r,{opened:n,onClose:()=>o(!1),width:"560px",main:e.jsx(r.Content,{children:w})})]})}function $(){const[n,o]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Открыть drawer с back"}),e.jsx(r,{opened:n,onClose:()=>o(!1),showBackButton:!0,onBackClick:()=>o(!1),header:e.jsx(r.Header,{title:"Заголовок с кнопкой назад",subTitle:"Кнопка назад закрывает drawer",rightBlock:e.jsxs(D,{mainAxisGap:s.x1,style:{flexWrap:"nowrap",gap:s.x4},children:[e.jsx(r.DotsIconButton,{}),e.jsx(t,{text:"Вторичная",size:"xs",view:"secondary"})]})}),main:e.jsx(r.Content,{children:w}),footer:e.jsxs(r.Footer,{$css:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{view:"clear",size:"xs",children:"Очистить"}),e.jsxs("div",{children:[e.jsx(t,{view:"secondary",size:"xs",children:"Действие 1"}),e.jsx(t,{view:"accent",size:"xs",style:{marginLeft:8},children:"Действие 2"})]})]})})]})}const A=`
import { Button, DrawerDF, Flow } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from './data';
import { TabsComp } from './Tabs';
import React, { useState } from 'react';

${u("packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx","DrawerWithOneMainContentExample")}
`,R=`
import { Button, DrawerDF, Flow } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem, shortLorem } from './data';
import { TabsComp } from './Tabs';
import React, { useState } from 'react';

${u("packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx","DrawerWithMultipleContentExample")}
`,G=`
import { Button, DrawerDF } from '@daisforge/ui';
import { longLorem } from './data';
import React, { useState } from 'react';

${u("packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx","DrawerSingleContentNoHeaderExample")}
`,q=`
import { Button, DrawerDF, Flow } from '@daisforge/ui';
import { s } from '@daisforge/ui/constants';
import { longLorem } from './data';
import React, { useState } from 'react';

${u("packages/storybook/src/stories/DrawerDF/DrawerDF.stories.tsx","DrawerWithBackButtonExample")}
`,a={name:"DrawerDF with one content",...x({previewSource:"shown",code:A}),render:N},i={name:"DrawerDF with multiple content",...x({previewSource:"shown",code:R}),render:H},c={name:"DrawerDF with single content (no header, no footer)",...x({previewSource:"shown",code:G}),render:I},d={name:"DrawerDF with back button",...x({previewSource:"shown",code:q}),render:$};var j,C,F;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'DrawerDF with one content',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerWithOneMainContentCode
  }),
  render: DrawerWithOneMainContentExample
}`,...(F=(C=a.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var S,v,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'DrawerDF with multiple content',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerWithMultipleContentCode
  }),
  render: DrawerWithMultipleContentExample
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,k,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'DrawerDF with single content (no header, no footer)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerSingleContentNoHeaderCode
  }),
  render: DrawerSingleContentNoHeaderExample
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var W,M,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'DrawerDF with back button',
  ...storySourceDoc({
    previewSource: 'shown',
    code: drawerWithBackButtonCode
  }),
  render: DrawerWithBackButtonExample
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const V=["DrawerWithOneMainContent","DrawerDFWithMultipleMainContent","DrawerWithSingleContentNoHeaderNoFooter","DrawerWithBackButton"],ee=Object.freeze(Object.defineProperty({__proto__:null,DrawerDFWithMultipleMainContent:i,DrawerWithBackButton:d,DrawerWithOneMainContent:a,DrawerWithSingleContentNoHeaderNoFooter:c,__namedExportsOrder:V,default:L},Symbol.toStringTag,{value:"Module"}));export{ee as D};
