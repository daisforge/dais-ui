import{g as e}from"./getFuncAsString-CiehoYHv.js";import{s as a}from"./storySourceDoc-tVKyHcEN.js";import{T as k}from"./TableCanvas-Cqd_sxAx.js";import{A as h,C as w,D as B,L as O,R as I,W as R}from"./Table.sidebar.examples-C1qYFhCk.js";const F={title:"Локальные компоненты/TableCanvas/Sidebar",component:k,tags:["!autodocs"]},$=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","WithCustomTabExample")}
`,L=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","DefaultOpenExample")}
`,W=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { Button } from '@daisforge/ui';
import { IconInfo, IconSettings } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","ControlledActiveTabExample")}
`,_=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo, IconSettings } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","ActiveTabCallbackExample")}
`,j=`
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button, TextFieldSearch, BodyS } from '@daisforge/ui';
import { IconBookOpenOutline, IconDocumentOutline } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","LeftSidebarExample")}
`,z=`
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button, BodyS } from '@daisforge/ui';
import { IconBookOpenOutline, IconDocumentOutline } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${e("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","RightSidebarExample")}
`,o={name:"С кастомной вкладкой",...a({code:$,previewSource:"shown",type:"code"}),render:R},r={name:"Открыт по умолчанию на кастомной вкладке",...a({code:L,previewSource:"shown",type:"code"}),render:B},u={name:"Внешнее управление активной вкладкой",...a({code:W,previewSource:"shown",type:"code"}),render:w},s={name:"Колбэк активной вкладки",...a({code:_,previewSource:"shown",type:"code"}),render:h},t={name:"Левая панель: ширина по активной вкладке",...a({code:j,previewSource:"shown",type:"code"}),render:O},n={name:"Правая панель: контент и ширина по активной вкладке",...a({code:z,previewSource:"shown",type:"code"}),render:I};var c,i,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'С кастомной вкладкой',
  ...storySourceDoc({
    code: withCustomTabCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: WithCustomTabExample
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Открыт по умолчанию на кастомной вкладке',
  ...storySourceDoc({
    code: defaultOpenCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: DefaultOpenExample
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var b,C,S;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Внешнее управление активной вкладкой',
  ...storySourceDoc({
    code: controlledActiveTabCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ControlledActiveTabExample
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,f,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Колбэк активной вкладки',
  ...storySourceDoc({
    code: activeTabCallbackCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ActiveTabCallbackExample
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Левая панель: ширина по активной вкладке',
  ...storySourceDoc({
    code: leftSidebarCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: LeftSidebarExample
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,E,A;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Правая панель: контент и ширина по активной вкладке',
  ...storySourceDoc({
    code: rightSidebarCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: RightSidebarExample
}`,...(A=(E=n.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const M=["WithCustomTab","DefaultOpen","ControlledActiveTab","ActiveTabCallback","LeftSidebar","RightSidebar"],J=Object.freeze(Object.defineProperty({__proto__:null,ActiveTabCallback:s,ControlledActiveTab:u,DefaultOpen:r,LeftSidebar:t,RightSidebar:n,WithCustomTab:o,__namedExportsOrder:M,default:F},Symbol.toStringTag,{value:"Module"}));export{J as T};
