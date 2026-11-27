import{r as a,j as e}from"./react-DYHuXpTF.js";import{g as w}from"./getFuncAsString-Db0amMg_.js";import{s as j}from"./storySourceDoc-tVKyHcEN.js";import{T as x,C as o}from"./TableCanvas-D2iKJXJX.js";import{t as U,ad as Z}from"./@salutejs/sdds-finai-C2CeMSda.js";import{b as k,V as A}from"./@salutejs/plasma-icons-EIkzXMi-.js";import{cC as ee}from"./vendor-4go4qBMz.js";const ne={title:"Локальные компоненты/TableCanvas/Dropdown",component:x,parameters:{docs:{}},tags:["!autodocs"]};function E(){const s=["Low","Medium","High","Critical"],d=["Новая","В работе","Готово"];return Array.from({length:50},(c,r)=>({id:r+1,task:`Task ${r+1}`,priority:s[r%s.length]??"",status:d[r%d.length]??"",developer:`Разработчик ${r%7+1}`}))}function oe(){const[s]=a.useState(E),[d,c]=a.useState(""),r=a.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title"},{key:"status",name:"Status"},{key:"developer",name:"Developer"},{key:"action",name:"Действие",width:80,renderCell:({row:m,theme:l})=>e.jsx(o.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:e.jsx(o.IconButton,{icon:e.jsx(k,{}),dropdown:{items:[{value:"open",label:"Открыть"},{value:"copy",label:"Копировать ссылку"},{value:"assign",label:"Назначить",dividerAfter:!0},{value:"delete",label:"Удалить"}],onItemSelect:i=>c(`${i.label}: ${m.task}`)}})})}],[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(x,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:r,rows:s}),e.jsxs("div",{children:["Последнее действие: ",d||"нет"]})]})}function te(){const[s]=a.useState(E),[d,c]=a.useState(""),r=a.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title",width:160},{key:"priority",name:"Priority (наведение на кнопку)",width:240,renderCell:({row:m,theme:l})=>e.jsxs(o.Container,{direction:"row",alignItems:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},gap:8,children:[e.jsx(o.Text,{children:m.priority}),e.jsx(o.Button,{view:"secondary",dropdown:{trigger:"hover",items:["Low","Medium","High","Critical"].map(i=>({value:i,label:i,disabled:i===m.priority})),onItemSelect:i=>c(`приоритет ${i.label}: ${m.task}`)},children:"Изменить"})]})},{key:"action",name:"Действие (клик по кнопке)",width:200,renderCell:({row:m,theme:l})=>e.jsx(o.Container,{direction:"row",alignItems:"center",padding:{left:l.cellHorizontalPadding,right:l.cellHorizontalPadding},children:e.jsx(o.Button,{view:"secondary",dropdown:{items:[{value:"open",label:"Открыть"},{value:"copy",label:"Копировать ссылку"},{value:"delete",label:"Удалить"}],onItemSelect:i=>c(`${i.label}: ${m.task}`)},children:"Действия"})})},{key:"developer",name:"Developer"}],[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(x,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:r,rows:s}),e.jsxs("div",{children:["Последнее действие: ",d||"нет"]})]})}const re=[0,1,2].map(s=>({value:`__skeleton_${s}`,label:"",disabled:!0}));function ae(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px"},children:[e.jsx(ee,{width:16,height:16,roundness:4}),e.jsx("div",{style:{width:150},children:e.jsx(Z,{size:"bodyS"})})]})}function X({shouldFail:s}){const[d]=a.useState(E),[c,r]=a.useState(""),m=a.useRef(0),l=a.useCallback(g=>new Promise((u,C)=>{const n=s&&m.current===0;m.current+=1,setTimeout(()=>{if(n){C(new Error("Сервер недоступен"));return}u([{value:"open",label:`Открыть ${g.task}`},{value:"assign",label:`Назначить на ${g.developer}`},{value:"delete",label:"Удалить"}])},1200)}),[s]),i=a.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title"},{key:"developer",name:"Developer"},{key:"action",name:"Действие",width:80,renderCell:({row:g,theme:u})=>e.jsx(o.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:u.cellHorizontalPadding,right:u.cellHorizontalPadding},children:e.jsx(o.IconButton,{icon:e.jsx(k,{}),dropdown:{getItems:()=>l(g),loadingItems:re,renderItem:C=>String(C.value).startsWith("__skeleton")?e.jsx(ae,{}):C.label,renderError:({error:C,retry:n})=>e.jsxs("div",{style:{padding:12,width:220},children:[e.jsx("div",{style:{marginBottom:8},children:C.message}),e.jsx(U,{size:"s",view:"secondary",text:"Повторить",onClick:n})]}),onItemSelect:C=>r(C.label)}})})}],[l]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(x,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:i,rows:d}),e.jsxs("div",{children:["Последнее действие: ",c||"нет"]})]})}function se(){const[s]=a.useState(E),d=a.useMemo(()=>[{key:"id",name:"ID",width:60},{key:"task",name:"Title",width:220,renderCell:({row:c,theme:r})=>e.jsxs(o.Container,{direction:"row",alignItems:"center",padding:{left:r.cellHorizontalPadding,right:r.cellHorizontalPadding},gap:8,children:[e.jsx(o.Text,{children:c.task}),e.jsx(o.Icon,{icon:e.jsx(A,{}),size:16,dropdown:{items:[{value:"rename",label:"Переименовать"},{value:"archive",label:"В архив"}]}})]})},{key:"status",name:"Status",width:200,renderCell:({row:c,theme:r})=>e.jsxs(o.Container,{direction:"row",alignItems:"center",padding:{left:r.cellHorizontalPadding,right:r.cellHorizontalPadding},gap:8,children:[e.jsx(o.Text,{children:c.status}),e.jsx(o.Icon,{icon:e.jsx(A,{}),size:16,dropdown:{placement:"bottom-start",items:[{value:"new",label:"Новая"},{value:"progress",label:"В работе"},{value:"done",label:"Готово"}]}})]})},{key:"developer",name:"Developer"}],[]);return e.jsx(x,{tableConfig:{fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"},dropdown:{placement:"right-start",listWidth:200,variant:"tight",closeOnSelect:!1}},columnConfig:d,rows:s})}const v=[{value:"open",label:"Открыть"},{value:"copy",label:"Копировать ссылку"},{value:"delete",label:"Удалить"}],le=[{value:"open",label:"Открыть"},{value:"move",label:"Переместить в...",items:[{value:"backlog",label:"Бэклог"},{value:"sprint",label:"Спринт"},{value:"archive",label:"Архив"}]},{value:"assign",label:"Назначить",dividerAfter:!0},{value:"delete",label:"Удалить",disabled:!0}];function ie({listWidth:s,longLabel:d}){const[c]=a.useState(E),[r,m]=a.useState([]),l=a.useRef({}),i=a.useRef(0),g=a.useCallback(n=>{i.current+=1;const t=i.current;m(p=>[...p.slice(-9),{id:t,text:n}])},[]),u=a.useCallback((n,t)=>({onOpen:()=>g(`${n} #${t.id}: открыт`),onClose:()=>g(`${n} #${t.id}: закрыт`),onItemSelect:p=>g(`${n} #${t.id}: выбран «${p.label}»`)}),[g]),C=a.useMemo(()=>[{key:"id",name:"ID",width:56},{key:"task",name:"Title",width:110},{key:"click",name:"Клик",width:130,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.Button,{view:"secondary",dropdown:{items:d?[...v,{value:"history",label:"Посмотреть подробную историю изменений и комментарии всех участников согласования заявки"}]:v,...u("Клик",n)},children:"Действия"})})},{key:"nested",name:"Вложенные",width:100,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.IconButton,{icon:e.jsx(k,{}),dropdown:{items:le,listWidth:s,...u("Вложенные",n)}})})},{key:"hover",name:"Наведение",width:130,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.Button,{view:"secondary",dropdown:{trigger:"hover",items:v,...u("Наведение",n)},children:"Наведи"})})},{key:"hoverIcon",name:"Наведение (иконка)",width:150,renderCell:({row:n,theme:t})=>e.jsxs(o.Container,{direction:"row",alignItems:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},gap:8,children:[e.jsx(o.Text,{children:n.priority}),e.jsx(o.Icon,{icon:e.jsx(A,{}),size:16,dropdown:{trigger:"hover",placement:"right-start",variant:"tight",items:["Low","Medium","High","Critical"].map(p=>({value:p,label:p,disabled:p===n.priority})),...u("Иконка",n)}})]})},{key:"async",name:"Async",width:90,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.IconButton,{icon:e.jsx(k,{}),dropdown:{getItems:()=>new Promise(p=>{setTimeout(()=>p([{value:"open",label:`Открыть ${n.task}`},{value:"assign",label:`Назначить ${n.developer}`}]),1e3)}),...u("Async",n)}})})},{key:"asyncError",name:"Async: ошибка",width:120,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",justifyContent:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.IconButton,{icon:e.jsx(k,{}),dropdown:{getItems:()=>new Promise((p,I)=>{const P=l.current[n.id]??0;l.current[n.id]=P+1,setTimeout(()=>{P===0?I(new Error("Сервер недоступен")):p(v)},800)}),renderError:({error:p,retry:I})=>e.jsxs("div",{style:{padding:12,width:220},children:[e.jsx("div",{style:{marginBottom:8},children:p.message}),e.jsx(U,{size:"s",view:"secondary",text:"Повторить",onClick:I})]}),...u("Async-ошибка",n)}})})},{key:"keepOpen",name:"closeOnSelect: false",width:170,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.Button,{view:"secondary",dropdown:{items:v,closeOnSelect:!1,...u("Без закрытия",n)},children:"Несколько"})})},{key:"noOutside",name:"Без клика мимо и Esc",width:180,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.Button,{view:"secondary",dropdown:{items:v,closeOnOutsideClick:!1,closeOnEsc:!1,placement:"top",...u("Только toggle",n)},children:"Только toggle"})})},{key:"popover",name:"Поповер рядом",width:140,renderCell:({row:n,theme:t})=>e.jsx(o.Container,{direction:"row",alignItems:"center",padding:{left:t.cellHorizontalPadding,right:t.cellHorizontalPadding},children:e.jsx(o.Button,{view:"secondary",popover:{content:e.jsxs("div",{style:{width:180},children:["Поповер строки ",n.id]}),onOpen:()=>g(`Поповер #${n.id}: открыт`),onClose:()=>g(`Поповер #${n.id}: закрыт`)},children:"Поповер"})})},{key:"developer",name:"Developer",width:140}],[u,s,d,g]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(x,{tableConfig:{containerStyle:{height:420},fullScreenEnabled:!0,rowSize:{showInControl:!0,default:"big"}},columnConfig:C,rows:c}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("div",{children:"Журнал (последние 10):"}),r.length===0?e.jsx("div",{children:"пусто"}):r.map(n=>e.jsx("div",{children:n.text},n.id))]})]})}const T=`
${w("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","createRows")}

type Row = ReturnType<typeof createRows>[number];
`,ue=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${T}
${w("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleNodeDropdown")}
`,de=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';
${T}
${w("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleClickAndHoverDropdown")}
`,Y=`
import { Button } from '@daisforge/ui/components/Button';
import { LineSkeleton, RectSkeleton } from '@daisforge/ui/components/Skeleton';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@daisforge/ui/icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';
${T}
const SKELETON_ITEMS = [0, 1, 2].map((i) => ({
  value: \`__skeleton_\${i}\`,
  label: '',
  disabled: true,
}));

${w("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","SkeletonRow")}

${w("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleAsyncDropdown")}
`,ce=`
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSettingsOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${T}
${w("packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx","ExampleGlobalDefaults")}
`,y={name:"dropdown на Canvas-элементе",...j({previewSource:"shown",code:ue}),render:oe},b={name:"Клик и наведение (trigger)",...j({previewSource:"shown",code:de}),render:te},f={name:"Асинхронная подгрузка пунктов (успех)",...j({previewSource:"shown",code:Y}),render:()=>e.jsx(X,{shouldFail:!1})},h={name:"Асинхронная подгрузка пунктов (ошибка и повтор)",...j({previewSource:"hidden",code:Y}),parameters:{screenshot:{skip:!0,skipReason:"Тот же пример, что «успех», отдельный эталон не нужен"}},render:()=>e.jsx(X,{shouldFail:!0})},D={name:"Дефолты в tableConfig.dropdown",...j({previewSource:"shown",code:ce}),render:se},S={args:{listWidth:"220px",longLabel:!1},argTypes:{listWidth:{name:"Ширина меню «Вложенные»",options:["220px","600px","96px","20rem"],mapping:{"220px":220,"600px":600},control:{type:"select",labels:{"220px":"220 (число)","600px":"600 (число)"}}},longLabel:{name:"Длинная подпись в меню «Клик»",control:"boolean"}},name:"Все варианты (стенд)",parameters:{docs:{disable:!0},screenshot:{skip:!0,skipReason:"Стенд для ручной проверки всех вариантов, не для снимков"}},render:ie};var z,B,H;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'dropdown на Canvas-элементе',
  ...storySourceDoc({
    previewSource: 'shown',
    code: nodeDropdownPreCode
  }),
  render: ExampleNodeDropdown
}`,...(H=(B=y.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var $,F,O;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Клик и наведение (trigger)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: clickAndHoverPreCode
  }),
  render: ExampleClickAndHoverDropdown
}`,...(O=(F=b.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,_,M;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Асинхронная подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: asyncPreCode
  }),
  render: () => <ExampleAsyncDropdown shouldFail={false} />
}`,...(M=(_=f.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var L,N,V;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var G,W,K;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Дефолты в tableConfig.dropdown',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalDefaultsPreCode
  }),
  render: ExampleGlobalDefaults
}`,...(K=(W=D.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,J,Q;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    listWidth: '220px',
    longLabel: false
  },
  argTypes: {
    listWidth: {
      name: 'Ширина меню «Вложенные»',
      options: ['220px', '600px', '96px', '20rem'],
      mapping: {
        '220px': 220,
        '600px': 600
      },
      control: {
        type: 'select',
        labels: {
          '220px': '220 (число)',
          '600px': '600 (число)'
        }
      }
    },
    longLabel: {
      name: 'Длинная подпись в меню «Клик»',
      control: 'boolean'
    }
  },
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const pe=["NodeDropdownStory","ClickAndHoverStory","AsyncSuccessStory","AsyncErrorStory","GlobalDefaultsStory","AllVariantsStory"],be=Object.freeze(Object.defineProperty({__proto__:null,AllVariantsStory:S,AsyncErrorStory:h,AsyncSuccessStory:f,ClickAndHoverStory:b,GlobalDefaultsStory:D,NodeDropdownStory:y,__namedExportsOrder:pe,default:ne},Symbol.toStringTag,{value:"Module"}));export{be as T};
