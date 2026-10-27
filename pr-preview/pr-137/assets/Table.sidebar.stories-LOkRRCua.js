import{g as c}from"./getFuncAsString-DnrLf2YT.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as d}from"./TableCanvas-DlX-Wh2b.js";import{r as s,j as e}from"./react-CAOzMBF_.js";import{a as H}from"./TextField-DpKf-85P.js";import{kZ as v,sZ as Z,hU as q,c9 as G}from"./@salutejs/plasma-icons-Do5ggeDI.js";import{t as l,m as x}from"./@salutejs/sdds-finai-CKhMjg07.js";function y(){const o=["Critical","High","Medium","Low"];return{rows:Array.from({length:12},(a,r)=>({id:r+1,task:`Task ${r+1}`,priority:o[r%o.length]??"Low"})),columnConfig:[{key:"id",name:"ID",width:100},{key:"task",name:"Title",width:300},{key:"priority",name:"Priority",width:180}]}}function K(){const[{rows:o,columnConfig:t}]=s.useState(y),[n,a]=s.useState(new Set),[r,i]=s.useState({});return e.jsx(d,{tableConfig:{containerStyle:{height:480},rightSidebarConfig:{customTabs:[{id:"customInfo",label:"Информация",icon:e.jsx(v,{size:"s"}),content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Всего строк: ",o.length]}),e.jsxs("p",{children:["Выбрано строк: ",n.size]})]}),title:"Информация",showInSidebar:!0}]},selecting:{state:[n,a],rowKeyGetter:m=>m.id.toString()},filtering:{state:[r,i]}},columnConfig:t,rows:o})}function Q(){const[{rows:o,columnConfig:t}]=s.useState(y);return e.jsx(d,{tableConfig:{containerStyle:{height:480},rightSidebarConfig:{defaultOpen:!0,defaultActiveTabId:"customInfo",customTabs:[{id:"customInfo",label:"Информация",icon:e.jsx(v,{size:"s"}),content:e.jsxs("p",{children:["Всего строк: ",o.length]}),title:"Информация",showInSidebar:!0}]}},columnConfig:t,rows:o})}function U(){const[{rows:o,columnConfig:t}]=s.useState(y),[n,a]=s.useState(!1),[r,i]=s.useState(null),m=T=>{i(T),a(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[e.jsx(l,{onClick:()=>m("customInfo"),children:"Инфо"}),e.jsx(l,{onClick:()=>m("customSettings"),children:"Настройки"}),e.jsx(l,{onClick:()=>a(!1),children:"Закрыть"})]}),e.jsx(d,{tableConfig:{containerStyle:{height:480},rightSidebarConfig:{openState:[n,a],activeTabState:[r,i],customTabs:[{id:"customInfo",label:"Информация",icon:e.jsx(v,{size:"s"}),content:e.jsx("p",{children:"Вкладка «Информация»."}),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:e.jsx(Z,{size:"s"}),content:e.jsx("p",{children:"Вкладка «Настройки»."}),title:"Настройки",showInSidebar:!0}]}},columnConfig:t,rows:o})]})}function J(){const[{rows:o,columnConfig:t}]=s.useState(y),[n,a]=s.useState(null);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{marginBottom:12},children:["Активная вкладка: ",e.jsx("b",{children:n??"нет (сайдбар закрыт)"})]}),e.jsx(d,{tableConfig:{containerStyle:{height:480},rightSidebarConfig:{onActiveTabChange:(r,i)=>a((i==null?void 0:i.title)??r),customTabs:[{id:"customInfo",label:"Информация",icon:e.jsx(v,{size:"s"}),content:e.jsx("p",{children:"Вкладка «Информация»."}),title:"Информация",showInSidebar:!0},{id:"customSettings",label:"Настройки",icon:e.jsx(Z,{size:"s"}),content:e.jsx("p",{children:"Вкладка «Настройки»."}),title:"Настройки",showInSidebar:!0}]}},columnConfig:t,rows:o})]})}function N(){const[o,t]=s.useState(300),[n,a]=s.useState(!0),[r,i]=s.useState(""),m=u=>{u==="reports"&&t(300),u==="books"&&t("35%")},T=[{id:1,report:"Финансовый отчёт"},{id:2,report:"Итоги квартала"}];return e.jsxs("div",{style:{padding:16},children:[e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[e.jsx(l,{size:"xs",view:"secondary",onClick:()=>t(360),children:"360px"}),e.jsx(l,{size:"xs",view:"secondary",onClick:()=>t("25%"),children:"25%"}),e.jsx(l,{size:"xs",view:"secondary",onClick:()=>a(u=>!u),children:"Переключить панель"})]}),e.jsx(d,{rows:T,columnConfig:[{key:"id",name:"ID",width:100},{key:"report",name:"Отчёт",width:360}],tableConfig:{containerStyle:{height:480},leftSidebarConfig:{width:o,openState:[n,a],defaultActiveTabId:"reports",onActiveTabChange:m,customTabs:[{id:"reports",label:"Отчёты",icon:e.jsx(q,{size:"s"}),content:e.jsxs("div",{style:{padding:16},children:[e.jsx(H,{size:"xs","aria-label":"Поиск отчёта",placeholder:"Поиск отчёта",value:r,onChange:u=>i(u.target.value),onClear:()=>i("")}),T.filter(u=>u.report.toLowerCase().includes(r.toLowerCase())).map(u=>e.jsx(x,{style:{marginTop:16},children:u.report},u.id))]})},{id:"books",label:"Книги",icon:e.jsx(G,{size:"s"}),content:e.jsxs("div",{style:{padding:16},children:[e.jsx(x,{children:"Книги отчётов"}),e.jsx(l,{size:"xs",view:"secondary",style:{marginTop:16},children:"Отчётность 2026"})]})}]}}})]})}function V(){const[o,t]=s.useState(400),n=a=>{a==="reports"&&t(400),a==="books"&&t("35%")};return e.jsx("div",{style:{padding:16},children:e.jsx(d,{rows:[{id:1,report:"Финансовый отчёт"},{id:2,report:"Итоги квартала"}],columnConfig:[{key:"id",name:"ID",width:100},{key:"report",name:"Отчёт",width:360}],tableConfig:{containerStyle:{height:480},rightSidebarConfig:{width:o,defaultOpen:!0,defaultActiveTabId:"reports",onActiveTabChange:n,defaultTabs:[{id:"tableSettings",showInSidebar:!1},{id:"columns",showInSidebar:!1},{id:"filtering",showInSidebar:!1}],customTabs:[{id:"reports",label:"Отчёты",icon:e.jsx(q,{size:"s"}),content:e.jsxs("div",{style:{padding:16},children:[e.jsx(x,{children:"Сведения об отчёте"}),e.jsx(x,{style:{marginTop:16},children:"Данные по подразделениям за 2026 год."})]})},{id:"books",label:"Книги",icon:e.jsx(G,{size:"s"}),content:e.jsxs("div",{style:{padding:16},children:[e.jsx(x,{children:"Книги отчётов"}),e.jsx(l,{size:"xs",view:"secondary",style:{marginTop:16},children:"Отчётность 2026"})]})}]}}})})}const X={title:"Локальные компоненты/TableCanvas/Sidebar",component:d,tags:["!autodocs"]},Y=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","WithCustomTabExample")}
`,ee=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","DefaultOpenExample")}
`,oe=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { Button } from '@daisforge/ui';
import { IconInfo, IconSettings } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","ControlledActiveTabExample")}
`,te=`
import { TableCanvas, type ColumnConfig } from '@daisforge/ui/components/TableCanvas';
import { IconInfo, IconSettings } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","createSidebarData")}

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","ActiveTabCallbackExample")}
`,ae=`
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button, TextFieldSearch, BodyS } from '@daisforge/ui';
import { IconBookOpenOutline, IconDocumentOutline } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","LeftSidebarExample")}
`,se=`
import { TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { Button, BodyS } from '@daisforge/ui';
import { IconBookOpenOutline, IconDocumentOutline } from '@daisforge/ui/icons';
import React, { useState } from 'react';

${c("packages/storybook/src/stories/TableCanvas/TableCanvas.Sidebar/Table.sidebar.examples.tsx","RightSidebarExample")}
`,b={name:"С кастомной вкладкой",...p({code:Y,previewSource:"shown",type:"code"}),render:K},f={name:"Открыт по умолчанию на кастомной вкладке",...p({code:ee,previewSource:"shown",type:"code"}),render:Q},g={name:"Внешнее управление активной вкладкой",...p({code:oe,previewSource:"shown",type:"code"}),render:U},S={name:"Колбэк активной вкладки",...p({code:te,previewSource:"shown",type:"code"}),render:J},C={name:"Левая панель: ширина по активной вкладке",...p({code:ae,previewSource:"shown",type:"code"}),render:N},h={name:"Правая панель: контент и ширина по активной вкладке",...p({code:se,previewSource:"shown",type:"code"}),render:V};var w,j,k;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'С кастомной вкладкой',
  ...storySourceDoc({
    code: withCustomTabCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: WithCustomTabExample
}`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,D,I;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Открыт по умолчанию на кастомной вкладке',
  ...storySourceDoc({
    code: defaultOpenCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: DefaultOpenExample
}`,...(I=(D=f.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var E,B,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Внешнее управление активной вкладкой',
  ...storySourceDoc({
    code: controlledActiveTabCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ControlledActiveTabExample
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var z,F,R;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Колбэк активной вкладки',
  ...storySourceDoc({
    code: activeTabCallbackCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ActiveTabCallbackExample
}`,...(R=(F=S.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var $,L,W;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Левая панель: ширина по активной вкладке',
  ...storySourceDoc({
    code: leftSidebarCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: LeftSidebarExample
}`,...(W=(L=C.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,M,P;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Правая панель: контент и ширина по активной вкладке',
  ...storySourceDoc({
    code: rightSidebarCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: RightSidebarExample
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const re=["WithCustomTab","DefaultOpen","ControlledActiveTab","ActiveTabCallback","LeftSidebar","RightSidebar"],pe=Object.freeze(Object.defineProperty({__proto__:null,ActiveTabCallback:S,ControlledActiveTab:g,DefaultOpen:f,LeftSidebar:C,RightSidebar:h,WithCustomTab:b,__namedExportsOrder:re,default:X},Symbol.toStringTag,{value:"Module"}));export{pe as T};
