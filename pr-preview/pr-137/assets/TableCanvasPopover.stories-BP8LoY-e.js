import{r as i,j as e}from"./react-CAOzMBF_.js";import{g as C}from"./getFuncAsString-DwlnUpBS.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{T as g,C as r}from"./TableCanvas-CXslNPgb.js";import{t as k}from"./@salutejs/sdds-finai-Bupqgw5V.js";import{k$ as f}from"./@salutejs/plasma-icons-Do5ggeDI.js";const _={title:"Локальные компоненты/TableCanvas/Popover",component:g,parameters:{docs:{}},tags:["!autodocs"]};function x(){const t=["Low","Medium","High","Critical"],s=["Bug","Story","Epic","Improvement"];return Array.from({length:50},(n,o)=>({id:o+1,task:`Task ${o+1}`,priority:t[o%t.length]??"",issueType:s[o*3%s.length]??"",developer:`Разработчик ${o%7+1}`,complete:o*17%101}))}function F(){const[t]=i.useState(x),s=i.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"developer",name:"Developer"},{key:"action",name:"Действие",width:160,renderCell:({row:n,theme:o})=>e.jsx(r.Container,{direction:"row",alignItems:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:e.jsx(r.Button,{view:"secondary",popover:{renderContent:({close:c})=>e.jsxs("div",{style:{width:240},children:[e.jsxs("div",{style:{marginBottom:12},children:["Задача «",n.task,"», приоритет ",n.priority,"."]}),e.jsx(k,{size:"s",view:"secondary",text:"Закрыть",onClick:c})]})},children:"Подробнее"})})}],[]);return e.jsx(g,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:s,rows:t})}function G(){const[t]=i.useState(x),s=i.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",width:200,renderCell:({row:n,theme:o})=>e.jsxs(r.Container,{direction:"row",alignItems:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},gap:8,children:[e.jsx(r.Text,{children:n.task}),e.jsx(r.Icon,{icon:e.jsx(f,{}),size:16,popover:{content:e.jsxs("div",{style:{width:200},children:["Задача: ",n.task]})}})]})},{key:"priority",name:"Priority",width:200,renderCell:({row:n,theme:o})=>e.jsxs(r.Container,{direction:"row",alignItems:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},gap:8,children:[e.jsx(r.Text,{children:n.priority}),e.jsx(r.Icon,{icon:e.jsx(f,{}),size:16,popover:{placement:"bottom",content:e.jsxs("div",{style:{width:160},children:["Приоритет: ",n.priority]})}})]})},{key:"developer",name:"Developer"}],[]);return e.jsx(g,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},popover:{placement:"right",hasTail:!0,offset:8}},columnConfig:s,rows:t})}function N(){const[t]=i.useState(x),[s,n]=i.useState([]),o=i.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"action",name:"Действие",width:160,renderCell:({row:c,theme:a})=>e.jsx(r.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},children:e.jsx(r.IconButton,{icon:e.jsx(f,{}),popover:{hasTail:!0,placement:"left",closeOnScroll:!1,onOpen:()=>n(l=>[...l,`открыт: ${c.id}`]),onClose:()=>n(l=>[...l,`закрыт: ${c.id}`]),content:e.jsxs("div",{style:{width:180},children:["Строка ",c.id]})}})})}],[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(g,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:o,rows:t}),e.jsxs("div",{children:["Журнал: ",s.slice(-5).join(", ")||"пусто"]})]})}function R({fullScreen:t=!1}){const[s]=i.useState(x),[n,o]=i.useState(""),c=i.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority (наведение на иконку)",width:220,renderCell:({row:a,theme:l})=>e.jsxs(r.Container,{direction:"row",alignItems:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},gap:8,children:[e.jsx(r.Text,{children:a.priority}),e.jsx(r.Icon,{icon:e.jsx(f,{}),size:16,popover:{trigger:"hover",placement:"top",hasTail:!0,renderContent:({close:h})=>e.jsxs("div",{style:{width:220},children:[e.jsxs("div",{style:{marginBottom:12},children:["Приоритет задачи ",a.id,": ",a.priority,"."]}),e.jsx(k,{size:"s",view:"secondary",text:"Повысить",onClick:()=>{o(`повысить приоритет: ${a.id}`),h()}})]})}})]})},{key:"action",name:"Действие (клик по кнопке)",width:200,renderCell:({row:a,theme:l})=>e.jsx(r.Container,{direction:"row",alignItems:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:e.jsx(r.Button,{view:"secondary",popover:{renderContent:({close:h})=>e.jsxs("div",{style:{width:240},children:[e.jsxs("div",{style:{marginBottom:12},children:["Задача «",a.task,"», приоритет ",a.priority,"."]}),e.jsx(k,{size:"s",view:"secondary",text:"Закрыть",onClick:h})]})},children:"Подробнее"})})},{key:"developer",name:"Developer"}],[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(g,{tableConfig:{rowSize:{showInControl:!0,default:"big"},fullScreenEnabled:t?{defaultOpened:!0}:!0},columnConfig:c,rows:s}),e.jsxs("div",{children:["Последнее действие: ",n||"нет"]})]})}const b=`
${C("packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx","createRows")}

type Row = ReturnType<typeof createRows>[number];
`,L=`
import { Button } from '@daisforge/ui/components/Button';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';
${b}
${C("packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx","ExampleNodePopover")}
`,W=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconInfoCircleOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${b}
${C("packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx","ExampleGlobalDefaults")}
`,q=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconInfoCircleOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${b}
${C("packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx","ExamplePopoverWithCallbacks")}
`,J=`
import { Button } from '@daisforge/ui/components/Button';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconInfoCircleOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${b}
${C("packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx","ExampleClickAndHoverPopover")}
`,u={name:"popover на Canvas-элементе",...y({previewSource:"shown",code:L}),render:F},d={name:"Клик и наведение (trigger)",...y({previewSource:"shown",code:J}),render:()=>e.jsx(R,{})},p={name:"Клик и наведение: полноэкранный режим",tags:["!autodocs"],parameters:{docs:{disable:!0},screenshot:{skip:!0}},render:()=>e.jsx(R,{fullScreen:!0})},m={name:"Дефолты в tableConfig.popover",...y({previewSource:"shown",code:W}),render:G},v={name:"onOpen, onClose и closeOnScroll",...y({previewSource:"shown",code:q}),render:N};var S,w,P;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'popover на Canvas-элементе',
  ...storySourceDoc({
    previewSource: 'shown',
    code: nodePopoverPreCode
  }),
  render: ExampleNodePopover
}`,...(P=(w=u.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var j,T,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Клик и наведение (trigger)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: clickAndHoverPreCode
  }),
  render: () => <ExampleClickAndHoverPopover />
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,I,B;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Клик и наведение: полноэкранный режим',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      disable: true
    },
    // Тот же пример, что «Клик и наведение»; отдельный эталон не нужен.
    screenshot: {
      skip: true
    }
  },
  render: () => <ExampleClickAndHoverPopover fullScreen />
}`,...(B=(I=p.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var z,H,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Дефолты в tableConfig.popover',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalDefaultsPreCode
  }),
  render: ExampleGlobalDefaults
}`,...(A=(H=m.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var $,O,M;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'onOpen, onClose и closeOnScroll',
  ...storySourceDoc({
    previewSource: 'shown',
    code: callbacksPreCode
  }),
  render: ExamplePopoverWithCallbacks
}`,...(M=(O=v.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const K=["NodePopoverStory","ClickAndHoverStory","ClickAndHoverFullScreenStory","GlobalDefaultsStory","CallbacksStory"],ee=Object.freeze(Object.defineProperty({__proto__:null,CallbacksStory:v,ClickAndHoverFullScreenStory:p,ClickAndHoverStory:d,GlobalDefaultsStory:m,NodePopoverStory:u,__namedExportsOrder:K,default:_},Symbol.toStringTag,{value:"Module"}));export{ee as T};
