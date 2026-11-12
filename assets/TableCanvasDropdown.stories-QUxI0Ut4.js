import{r as s,j as e}from"./react-CAOzMBF_.js";import{g}from"./getFuncAsString-SqWQ2qo2.js";import{s as k}from"./storySourceDoc-tVKyHcEN.js";import{T as w,C as t}from"./TableCanvas-DOsQrCiP.js";import{t as J,a7 as X}from"./@salutejs/sdds-finai-CrMFu5No.js";import{ia as S,t2 as I}from"./@salutejs/plasma-icons-DBF9uERs.js";import{bE as Y}from"./vendor-CvBXOjQ8.js";const Z={title:"Локальные компоненты/TableCanvas/Dropdown",component:w,parameters:{docs:{}},tags:["!autodocs"]};function D(){const d=["Low","Medium","High","Critical"],u=["Новая","В работе","Готово"];return Array.from({length:50},(c,a)=>({id:a+1,task:`Task ${a+1}`,priority:d[a%d.length]??"",status:u[a%u.length]??"",developer:`Разработчик ${a%7+1}`}))}function ee(){const[d]=s.useState(D),[u,c]=s.useState(""),a=s.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title"},{key:"status",name:"Status"},{key:"developer",name:"Developer"},{key:"action",name:"Действие",width:80,renderCell:({row:p,theme:l})=>e.jsx(t.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:e.jsx(t.IconButton,{icon:e.jsx(S,{}),dropdown:{items:[{value:"open",label:"Открыть"},{value:"copy",label:"Копировать ссылку"},{value:"assign",label:"Назначить",dividerAfter:!0},{value:"delete",label:"Удалить"}],onItemSelect:r=>c(`${r.label}: ${p.task}`)}})})}],[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(w,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:a,rows:d}),e.jsxs("div",{children:["Последнее действие: ",u||"нет"]})]})}function ne(){const[d]=s.useState(D),[u,c]=s.useState(""),a=s.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority (наведение на кнопку)",width:240,renderCell:({row:p,theme:l})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},gap:8,children:[e.jsx(t.Text,{children:p.priority}),e.jsx(t.Button,{view:"secondary",dropdown:{trigger:"hover",items:["Low","Medium","High","Critical"].map(r=>({value:r,label:r,disabled:r===p.priority})),onItemSelect:r=>c(`приоритет ${r.label}: ${p.task}`)},children:"Изменить"})]})},{key:"action",name:"Действие (клик по кнопке)",width:200,renderCell:({row:p,theme:l})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:e.jsx(t.Button,{view:"secondary",dropdown:{items:[{value:"open",label:"Открыть"},{value:"copy",label:"Копировать ссылку"},{value:"delete",label:"Удалить"}],onItemSelect:r=>c(`${r.label}: ${p.task}`)},children:"Действия"})})},{key:"developer",name:"Developer"}],[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(w,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:a,rows:d}),e.jsxs("div",{children:["Последнее действие: ",u||"нет"]})]})}const oe=[0,1,2].map(d=>({value:`__skeleton_${d}`,label:"",disabled:!0}));function te(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[e.jsx(Y,{width:16,height:16,roundness:4}),e.jsx("div",{style:{width:150},children:e.jsx(X,{size:"bodyS"})})]})}function Q({shouldFail:d}){const[u]=s.useState(D),[c,a]=s.useState(""),p=s.useRef(0),l=s.useCallback(m=>new Promise((o,n)=>{const i=d&&p.current===0;p.current+=1,setTimeout(()=>{if(i){n(new Error("Сервер недоступен"));return}o([{value:"open",label:`Открыть ${m.task}`},{value:"assign",label:`Назначить на ${m.developer}`},{value:"delete",label:"Удалить"}])},1200)}),[d]),r=s.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title"},{key:"developer",name:"Developer"},{key:"action",name:"Действие",width:80,renderCell:({row:m,theme:o})=>e.jsx(t.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:o.cellHorizontalPadding,right:o.cellHorizontalPadding},children:e.jsx(t.IconButton,{icon:e.jsx(S,{}),dropdown:{getItems:()=>l(m),loadingItems:oe,renderItem:n=>String(n.value).startsWith("__skeleton")?e.jsx(te,{}):n.label,renderError:({error:n,retry:i})=>e.jsxs("div",{style:{padding:12,width:220},children:[e.jsx("div",{style:{marginBottom:8},children:n.message}),e.jsx(J,{size:"s",view:"secondary",text:"Повторить",onClick:i})]}),onItemSelect:n=>a(n.label)}})})}],[l]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(w,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:r,rows:u}),e.jsxs("div",{children:["Последнее действие: ",c||"нет"]})]})}function re(){const[d]=s.useState(D),u=s.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title",width:220,renderCell:({row:c,theme:a})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},gap:8,children:[e.jsx(t.Text,{children:c.task}),e.jsx(t.Icon,{icon:e.jsx(I,{}),size:16,dropdown:{items:[{value:"rename",label:"Переименовать"},{value:"archive",label:"В архив"}]}})]})},{key:"status",name:"Status",width:200,renderCell:({row:c,theme:a})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",padding:{left:a.cellHorizontalPadding,right:a.cellHorizontalPadding},gap:8,children:[e.jsx(t.Text,{children:c.status}),e.jsx(t.Icon,{icon:e.jsx(I,{}),size:16,dropdown:{placement:"bottom",items:[{value:"new",label:"Новая"},{value:"progress",label:"В работе"},{value:"done",label:"Готово"}]}})]})},{key:"developer",name:"Developer"}],[]);return e.jsx(w,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},dropdown:{placement:"right",listWidth:200,variant:"tight",closeOnSelect:!1}},columnConfig:u,rows:d})}const v=[{value:"open",label:"Открыть"},{value:"copy",label:"Копировать ссылку"},{value:"delete",label:"Удалить"}],ae=[{value:"open",label:"Открыть"},{value:"move",label:"Переместить в...",items:[{value:"backlog",label:"Бэклог"},{value:"sprint",label:"Спринт"},{value:"archive",label:"Архив"}]},{value:"assign",label:"Назначить",dividerAfter:!0},{value:"delete",label:"Удалить",disabled:!0}];function se(){const[d]=s.useState(D),[u,c]=s.useState([]),a=s.useRef({}),p=s.useRef(0),l=s.useCallback(o=>{p.current+=1;const n=p.current;c(i=>[...i.slice(-9),{id:n,text:o}])},[]),r=s.useCallback((o,n)=>({onOpen:()=>l(`${o} #${n.id}: открыт`),onClose:()=>l(`${o} #${n.id}: закрыт`),onItemSelect:i=>l(`${o} #${n.id}: выбран «${i.label}»`)}),[l]),m=s.useMemo(()=>[{key:"id",name:"ID",width:56},{key:"task",name:"Title",width:110},{key:"click",name:"Клик",width:130,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.Button,{view:"secondary",dropdown:{items:v,...r("Клик",o)},children:"Действия"})})},{key:"nested",name:"Вложенные",width:100,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.IconButton,{icon:e.jsx(S,{}),dropdown:{items:ae,listWidth:220,...r("Вложенные",o)}})})},{key:"hover",name:"Наведение",width:130,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.Button,{view:"secondary",dropdown:{trigger:"hover",items:v,...r("Наведение",o)},children:"Наведи"})})},{key:"hoverIcon",name:"Наведение (иконка)",width:150,renderCell:({row:o,theme:n})=>e.jsxs(t.Container,{direction:"row",alignItems:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},gap:8,children:[e.jsx(t.Text,{children:o.priority}),e.jsx(t.Icon,{icon:e.jsx(I,{}),size:16,dropdown:{trigger:"hover",placement:"right",variant:"tight",items:["Low","Medium","High","Critical"].map(i=>({value:i,label:i,disabled:i===o.priority})),...r("Иконка",o)}})]})},{key:"async",name:"Async",width:90,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.IconButton,{icon:e.jsx(S,{}),dropdown:{getItems:()=>new Promise(i=>{setTimeout(()=>i([{value:"open",label:`Открыть ${o.task}`},{value:"assign",label:`Назначить ${o.developer}`}]),1e3)}),...r("Async",o)}})})},{key:"asyncError",name:"Async: ошибка",width:120,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.IconButton,{icon:e.jsx(S,{}),dropdown:{getItems:()=>new Promise((i,E)=>{const T=a.current[o.id]??0;a.current[o.id]=T+1,setTimeout(()=>{T===0?E(new Error("Сервер недоступен")):i(v)},800)}),renderError:({error:i,retry:E})=>e.jsxs("div",{style:{padding:12,width:220},children:[e.jsx("div",{style:{marginBottom:8},children:i.message}),e.jsx(J,{size:"s",view:"secondary",text:"Повторить",onClick:E})]}),...r("Async-ошибка",o)}})})},{key:"keepOpen",name:"closeOnSelect: false",width:170,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.Button,{view:"secondary",dropdown:{items:v,closeOnSelect:!1,...r("Без закрытия",o)},children:"Несколько"})})},{key:"noOutside",name:"Без клика мимо и Esc",width:180,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.Button,{view:"secondary",dropdown:{items:v,closeOnOutsideClick:!1,closeOnEsc:!1,placement:"top",...r("Только toggle",o)},children:"Только toggle"})})},{key:"popover",name:"Поповер рядом",width:140,renderCell:({row:o,theme:n})=>e.jsx(t.Container,{direction:"row",alignItems:"center",padding:{left:n.cellHorizontalPadding,right:n.cellHorizontalPadding},children:e.jsx(t.Button,{view:"secondary",popover:{content:e.jsxs("div",{style:{width:180},children:["Поповер строки ",o.id]}),onOpen:()=>l(`Поповер #${o.id}: открыт`),onClose:()=>l(`Поповер #${o.id}: закрыт`)},children:"Поповер"})})},{key:"developer",name:"Developer",width:140}],[r,l]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(w,{tableConfig:{containerStyle:{height:420},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:m,rows:d}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("div",{children:"Журнал (последние 10):"}),u.length===0?e.jsx("div",{children:"пусто"}):u.map(o=>e.jsx("div",{children:o.text},o.id))]})]})}const j=`
${g("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","createRows")}

type Row = ReturnType<typeof createRows>[number];
`,le=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${j}
${g("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleNodeDropdown")}
`,ie=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';
${j}
${g("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleClickAndHoverDropdown")}
`,U=`
import { Button } from '@daisforge/ui/components/Button';
import { LineSkeleton, RectSkeleton } from '@daisforge/ui/components/Skeleton';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@daisforge/ui/icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';
${j}
const SKELETON_ITEMS = [0, 1, 2].map((i) => ({
  value: \`__skeleton_\${i}\`,
  label: '',
  disabled: true,
}));

${g("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","SkeletonRow")}

${g("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleAsyncDropdown")}
`,de=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSettingsOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${j}
${g("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleGlobalDefaults")}
`,C={name:"dropdown на Canvas-элементе",...k({previewSource:"shown",code:le}),render:ee},y={name:"Клик и наведение (trigger)",...k({previewSource:"shown",code:ie}),render:ne},f={name:"Асинхронная подгрузка пунктов (успех)",...k({previewSource:"shown",code:U}),render:()=>e.jsx(Q,{shouldFail:!1})},h={name:"Асинхронная подгрузка пунктов (ошибка и повтор)",...k({previewSource:"hidden",code:U}),parameters:{screenshot:{skip:!0,skipReason:"Тот же пример, что «успех», отдельный эталон не нужен"}},render:()=>e.jsx(Q,{shouldFail:!0})},b={name:"Дефолты в tableConfig.dropdown",...k({previewSource:"shown",code:de}),render:re},x={name:"Все варианты (стенд)",parameters:{docs:{disable:!0},screenshot:{skip:!0,skipReason:"Стенд для ручной проверки всех вариантов, не для снимков"}},render:se};var A,P,z;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'dropdown на Canvas-элементе',
  ...storySourceDoc({
    previewSource: 'shown',
    code: nodeDropdownPreCode
  }),
  render: ExampleNodeDropdown
}`,...(z=(P=C.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var H,$,B;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Клик и наведение (trigger)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: clickAndHoverPreCode
  }),
  render: ExampleClickAndHoverDropdown
}`,...(B=($=y.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var O,R,F;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Асинхронная подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: asyncPreCode
  }),
  render: () => <ExampleAsyncDropdown shouldFail={false} />
}`,...(F=(R=f.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var _,M,L;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Асинхронная подгрузка пунктов (ошибка и повтор)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code: asyncPreCode
  }),
  parameters: {
    screenshot: {
      skip: true,
      skipReason: 'Тот же пример, что «успех», отдельный эталон не нужен'
    }
  },
  render: () => <ExampleAsyncDropdown shouldFail />
}`,...(L=(M=h.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var N,V,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Дефолты в tableConfig.dropdown',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalDefaultsPreCode
  }),
  render: ExampleGlobalDefaults
}`,...(G=(V=b.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var W,K,q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Все варианты (стенд)',
  parameters: {
    docs: {
      disable: true
    },
    screenshot: {
      skip: true,
      skipReason: 'Стенд для ручной проверки всех вариантов, не для снимков'
    }
  },
  render: ExampleAllVariants
}`,...(q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const ue=["NodeDropdownStory","ClickAndHoverStory","AsyncSuccessStory","AsyncErrorStory","GlobalDefaultsStory","AllVariantsStory"],ye=Object.freeze(Object.defineProperty({__proto__:null,AllVariantsStory:x,AsyncErrorStory:h,AsyncSuccessStory:f,ClickAndHoverStory:y,GlobalDefaultsStory:b,NodeDropdownStory:C,__namedExportsOrder:ue,default:Z},Symbol.toStringTag,{value:"Module"}));export{ye as T};
