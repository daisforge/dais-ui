import{r as p,j as e}from"./react-CAOzMBF_.js";import{g as E}from"./getFuncAsString-DnrLf2YT.js";import{s as P}from"./storySourceDoc-tVKyHcEN.js";import{L as Se}from"./LeftPanel-bnl-ylDT.js";import{M as S}from"./MassActions-Csxbu-7r.js";import{M as we}from"./MassActionsStatic-BPMw3NFM.js";import{s as h}from"./constants-DatVHdkd.js";import{A as Ce}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{H as F}from"./styled-components-DCFsnh-i.js";import{I as L,t as I}from"./@salutejs/sdds-finai-CKhMjg07.js";import{ia as O,pc as $}from"./@salutejs/plasma-icons-Do5ggeDI.js";const ge={title:"Локальные компоненты/MassActions",component:S,parameters:{docs:{layout:"fullscreen"}},tags:["!autodocs"]},R=F.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`,W=F.div`
  width: 90%;
  max-width: 1200px;
  height: 550px;
  background: ${Ce};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,M=F.h2`
  margin: 0 0 16px 0;
  color: #333;
  font-size: 24px;
`,z=F.p`
  margin: 0 0 24px 0;
  color: #666;
  font-size: 16px;
`,D=F.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,B=F.div`
  padding: 16px;
  background: ${({$selected:a})=>a?"#e3f2fd":"#f5f5f5"};
  border: 2px solid
    ${({$selected:a})=>a?"#2196f3":"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({$selected:a})=>a?"#bbdefb":"#eeeeee"};
  }
`;function fe(){const a=p.useRef(null),[t,o]=p.useState(new Set),s=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"},{id:4,name:"Документ 4"},{id:5,name:"Документ 5"}],C=t.size===s.length,i=t.size>0&&t.size<s.length,f=C,m=i,n=r=>{const w=new Set(t);w.has(r)?w.delete(r):w.add(r),o(w)},u=r=>{o(r?new Set(s.map(w=>w.id)):new Set)},c=()=>{alert(`Отправить ${t.size} элементов`)},x=()=>{alert(`Экспорт ${t.size} элементов`)},l=()=>{alert(`Архивация ${t.size} элементов`)};return e.jsx(R,{children:e.jsxs(W,{ref:a,style:{position:"relative"},children:[e.jsx(M,{children:"Standalone MassActions"}),e.jsx(z,{children:"Выберите элементы ниже, чтобы увидеть панель массовых действий"}),e.jsx(D,{children:s.map(r=>e.jsx(B,{$selected:t.has(r.id),onClick:()=>n(r.id),children:r.name},r.id))}),t.size>0&&e.jsx(S,{containerRef:a,selectedCount:t.size,leftSection:e.jsx(S.Counter,{selectedCount:t.size,showCheckbox:!0,checked:f,indeterminate:m,onCheckboxChange:r=>u(r.target.checked)}),buttons:[{text:"Экспорт",onClick:x,type:"button",view:"secondary"},{text:"Архивировать",onClick:l,type:"button",view:"secondary"},{view:"accent",onClick:c,type:"button",text:"Отправить"}]})]})})}function ye(){const a=p.useRef(null),[t,o]=p.useState(!1),[s,C]=p.useState(new Set),i=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"}],f=s.size===i.length,m=s.size>0&&s.size<i.length,n=f,u=m,c=l=>{const r=new Set(s);r.has(l)?r.delete(l):r.add(l),C(r)},x=l=>{C(l?new Set(i.map(r=>r.id)):new Set)};return e.jsx(R,{children:e.jsxs(W,{ref:a,style:{position:"relative"},children:[e.jsx(M,{children:"Пример с пропом show"}),e.jsx(z,{children:"Проп show позволяет явно контролировать видимость панели, даже если selectedCount === 0. Чекбокс работает так же, как в базовом примере: галочка когда все выбрано, минус когда выбрано частично, пусто когда ничего не выбрано."}),e.jsxs("div",{style:{marginBottom:h.x8,display:"flex",gap:h.x4},children:[e.jsxs(I,{onClick:()=>o(!t),children:[t?"Скрыть":"Показать"," панель"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:h.x2},children:[e.jsxs("span",{children:["selectedCount: ",s.size]}),e.jsxs("span",{children:["show: ",t?"true":"false"]})]})]}),e.jsx(D,{children:i.map(l=>e.jsx(B,{$selected:s.has(l.id),onClick:()=>c(l.id),children:l.name},l.id))}),e.jsx(S,{containerRef:a,selectedCount:s.size,show:t,leftSection:e.jsx(S.Counter,{selectedCount:s.size,showCheckbox:!0,checked:n,indeterminate:u,onCheckboxChange:l=>x(l.target.checked)}),buttons:[{text:"Действие 1",onClick:()=>alert("Действие 1"),type:"button",view:"secondary"},{text:"Действие 2",onClick:()=>alert("Действие 2"),type:"button",view:"secondary"}]})]})})}function ke(){const a=p.useRef(null),[t,o]=p.useState(new Set),s=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"},{id:4,name:"Документ 4"},{id:5,name:"Документ 5"}],C=t.size===s.length,i=t.size>0&&t.size<s.length,f=C,m=i,n=c=>{const x=new Set(t);x.has(c)?x.delete(c):x.add(c),o(x)},u=c=>{o(c?new Set(s.map(x=>x.id)):new Set)};return e.jsx(R,{children:e.jsxs(W,{ref:a,style:{maxWidth:"600px",margin:"0 auto",position:"relative"},children:[e.jsx(M,{children:"Узкий контейнер"}),e.jsx(z,{children:"При недостатке места кнопки автоматически скрываются в дропдаун скрытых действий. Выберите элементы ниже, чтобы увидеть компрессию кнопок."}),e.jsx(D,{style:{marginTop:h.x8,marginBottom:h.x8},children:s.map(c=>e.jsx(B,{$selected:t.has(c.id),onClick:()=>n(c.id),children:c.name},c.id))}),t.size>0&&e.jsx(S,{containerRef:a,selectedCount:t.size,leftSection:e.jsx(S.Counter,{selectedCount:t.size,showCheckbox:!0,checked:f,indeterminate:m,onCheckboxChange:c=>u(c.target.checked)}),buttons:[{text:"Экспорт",onClick:()=>alert("Экспорт"),view:"secondary",type:"button"},{text:"Копировать",onClick:()=>alert("Копировать"),view:"secondary",type:"button"},{text:"Переместить",onClick:()=>alert("Переместить"),view:"secondary",type:"button"},{text:"Архивировать",onClick:()=>alert("Архивировать"),view:"secondary",type:"button"},{text:"Заморозить",onClick:()=>alert("Заморозить"),view:"secondary",type:"button"},{type:"button",text:"Отправить",view:"accent",onClick:()=>alert("Отправить")}]})]})})}function je(){const a=p.useRef(null),[t,o]=p.useState(!1),[s,C]=p.useState(!1),[i,f]=p.useState(new Set),m=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"},{id:4,name:"Документ 4"},{id:5,name:"Документ 5"}],n=i.size===m.length,u=i.size>0&&i.size<m.length,c=n,x=u,l=d=>{const g=new Set(i);g.has(d)?g.delete(d):g.add(d),f(g)},r=d=>{f(d?new Set(m.map(g=>g.id)):new Set)},w=d=>{o(d)};return e.jsxs("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:"#f5f5f5"},children:[e.jsx(Se,{onToggleCollapse:w,collapseState:[t,o],expandedContent:e.jsxs("div",{style:{padding:h.x8,height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx(M,{style:{fontSize:"18px",marginBottom:h.x4},children:"Левая панель"}),e.jsx(z,{style:{fontSize:"14px",marginBottom:h.x8},children:"В левой панели используется StaticMassActionsPanel с базовыми кнопками"}),e.jsxs(we,{show:s,children:[e.jsx(L,{size:"s",view:"secondary",children:e.jsx(O,{})}),e.jsx(I,{text:"Label 1",contentLeft:e.jsx($,{}),size:"s",view:"secondary",onClick:()=>alert("Label 1"),style:{flexGrow:1}}),e.jsx(I,{text:"Label 2",size:"s",contentLeft:e.jsx($,{}),view:"secondary",onClick:()=>alert("Label 2"),style:{flexGrow:1}})]})]}),collapsedContent:s&&e.jsxs(e.Fragment,{children:[e.jsx(L,{size:"s",view:"secondary",children:e.jsx(O,{})}),e.jsx(L,{size:"s",view:"secondary",children:e.jsx($,{})}),e.jsx(L,{size:"s",view:"secondary",children:e.jsx($,{})})]})}),e.jsxs("div",{ref:a,style:{flex:1,padding:h.x8,backgroundColor:Ce,borderRadius:h.x8,position:"relative"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:h.x8},children:e.jsx(M,{style:{fontSize:"20px",margin:0},children:"Основной контент"})}),e.jsx(z,{style:{fontSize:"14px",marginBottom:h.x8},children:"В основном контенте используется адаптивный MassActions. Выберите документ."}),e.jsx("div",{style:{marginBottom:"16px"},children:e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsxs(I,{onClick:()=>w(!t),children:[t?"Закрыть":"Открыть"," левую панель"]}),e.jsxs(I,{onClick:()=>C(d=>!d),children:[s?"Закрыть":"Открыть"," ","MassActionsStatic в левой части"]})]})}),e.jsx(D,{children:m.map(d=>e.jsx(B,{$selected:i.has(d.id),onClick:()=>l(d.id),children:d.name},d.id))}),i.size>0&&e.jsx(S,{containerRef:a,selectedCount:i.size,leftSection:e.jsx(S.Counter,{selectedCount:i.size,showCheckbox:!0,checked:c,indeterminate:x,onCheckboxChange:d=>r(d.target.checked)}),buttons:[{text:"Экспорт",onClick:()=>alert("Экспорт"),type:"button",view:"secondary"},{text:"Архивировать",onClick:()=>alert("Архивировать"),type:"button",view:"secondary"},{text:"Копировать",onClick:()=>alert("Копировать"),type:"button",view:"secondary"},{text:"Переместить",onClick:()=>alert("Переместить"),type:"button",view:"secondary"},{view:"accent",onClick:()=>alert("Отправить"),type:"button",text:"Отправить"}]})]})]})}const be=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${E("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","StandaloneExample")}
`,ve=`
import { useRef, useState } from 'react';
import { Button } from '@ui-kit/components/Button';
import { MassActions } from '@ui-kit/components/MassActions';
import { s } from '@ui-kit/constants';

${E("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","ShowPropExample")}
`,Ae=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${E("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","NarrowContainerExample")}
`,Me=`
import { useRef, useState } from 'react';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { MassActions } from '@ui-kit/components/MassActions';
import { StaticMassActionsPanel } from '@ui-kit/components/StaticMassActionsPanel';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import { surfaceSolidCard } from '@ui-kit/tokens';

${E("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","WithLeftPanelExample")}
`,ze=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${E("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","StandaloneExample")}
`,y={name:"Standalone MassActions",...P({previewSource:"shown",code:be}),render:fe},k={name:"С явным контролем видимости (show)",...P({previewSource:"shown",code:ve}),render:ye},j={name:"Узкий контейнер (компрессия)",...P({previewSource:"shown",code:Ae}),render:ke},b={name:"В комбинации с LeftPanel",...P({previewSource:"shown",code:Me}),render:je},v={name:"1280 Адаптив",parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile"}},...P({previewSource:"shown",code:ze}),render:fe};function Ee(){const a=p.useRef(null),t=Array.from({length:150},(n,u)=>({id:u+1,name:`Документ ${u+1}`})),[o,s]=p.useState(()=>new Set(t.map(n=>n.id))),C=o.size===t.length,i=o.size>0&&o.size<t.length,f=n=>{const u=new Set(o);u.has(n)?u.delete(n):u.add(n),s(u)},m=n=>{s(n?new Set(t.map(u=>u.id)):new Set)};return e.jsx(R,{children:e.jsxs(W,{ref:a,style:{position:"relative"},children:[e.jsx(M,{children:"MassActions.Counter — maxCount"}),e.jsxs(z,{children:["Выбрано ",o.size," из ",t.length,". maxCount = 99, поэтому счётчик показывает «99+». Снимите выделение до ≤ 99, чтобы увидеть точное число."]}),e.jsx(D,{style:{maxHeight:260,overflow:"auto"},children:t.map(n=>e.jsx(B,{$selected:o.has(n.id),onClick:()=>f(n.id),children:n.name},n.id))}),o.size>0&&e.jsx(S,{containerRef:a,selectedCount:o.size,leftSection:e.jsx(S.Counter,{selectedCount:o.size,maxCount:99,showCheckbox:!0,checked:C,indeterminate:i,onCheckboxChange:n=>m(n.target.checked)}),buttons:[{text:"Экспорт",onClick:()=>alert(`Экспорт ${o.size} элементов`),type:"button",view:"secondary"}]})]})})}const Pe=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${E("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","CounterMaxCountExample")}
`,A={name:"Ограничение счётчика (99+)",...P({previewSource:"shown",code:Pe}),render:Ee};var _,N,T,V,H;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Standalone MassActions',
  ...storySourceDoc({
    previewSource: 'shown',
    code: standalonePreCode
  }),
  render: StandaloneExample
}`,...(T=(N=y.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(H=(V=y.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var G,q,J,K,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'С явным контролем видимости (show)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: showPropPreCode
  }),
  render: ShowPropExample
}`,...(J=(q=k.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var U,X,Y,Z,ee;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Узкий контейнер (компрессия)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: narrowContainerPreCode
  }),
  render: NarrowContainerExample
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,se,oe,ne,re;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'В комбинации с LeftPanel',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withLeftPanelPreCode
  }),
  render: WithLeftPanelExample
}`,...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(re=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ae,ie,ce,ue,le;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: '1280 Адаптив',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile'
    }
  },
  ...storySourceDoc({
    previewSource: 'shown',
    code: adaptive1280PreCode
  }),
  render: StandaloneExample
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(le=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:le.description}}};var de,pe,me,xe,he;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Ограничение счётчика (99+)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: counterMaxCountPreCode
  }),
  render: CounterMaxCountExample
}`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(he=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:he.description}}};const Fe=["Standalone","WithShowProp","NarrowContainer","WithLeftPanel","Adaptive1280","CounterMaxCount"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Adaptive1280:v,CounterMaxCount:A,NarrowContainer:j,Standalone:y,WithLeftPanel:b,WithShowProp:k,__namedExportsOrder:Fe,default:ge},Symbol.toStringTag,{value:"Module"}));export{Ve as M};
