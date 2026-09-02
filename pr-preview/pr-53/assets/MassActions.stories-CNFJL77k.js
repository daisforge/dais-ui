import{r as d,d as s}from"./react-D2T61mpp.js";import{g as j}from"./getFuncAsString-Bp1PYzKJ.js";import{s as V}from"./storySourceDoc-tVKyHcEN.js";import{L as ds}from"./LeftPanel-CESO-M5Z.js";import{M as f}from"./MassActions-BfU_VQow.js";import{M as hs}from"./MassActionsStatic-CeAQL06h.js";import{s as m}from"./constants-DM2G2kGu.js";import{y as ls}from"./@salutejs/sdds-themes-CZ516YZq.js";import{H as S}from"./styled-components-DI7cxCvS.js";import{I as z,b as C}from"./@salutejs/sdds-finai-Bs5lVnWZ.js";import{ia as R,pa as P}from"./@salutejs/plasma-icons-Bi2vmzc3.js";const ps={title:"Локальные компоненты/MassActions",component:f,parameters:{docs:{layout:"fullscreen"}},tags:["!autodocs"]},B=S.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`,L=S.div`
  width: 90%;
  max-width: 1200px;
  height: 550px;
  background: ${ls};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,E=S.h2`
  margin: 0 0 16px 0;
  color: #333;
  font-size: 24px;
`,D=S.p`
  margin: 0 0 24px 0;
  color: #666;
  font-size: 16px;
`,F=S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,I=S.div`
  padding: 16px;
  background: ${({$selected:r})=>r?"#e3f2fd":"#f5f5f5"};
  border: 2px solid
    ${({$selected:r})=>r?"#2196f3":"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({$selected:r})=>r?"#bbdefb":"#eeeeee"};
  }
`;function ms(){const r=d.useRef(null),[e,c]=d.useState(new Set),o=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"},{id:4,name:"Документ 4"},{id:5,name:"Документ 5"}],p=e.size===o.length,n=e.size>0&&e.size<o.length,k=p,h=n,x=i=>{const b=new Set(e);b.has(i)?b.delete(i):b.add(i),c(b)},N=i=>{c(i?new Set(o.map(b=>b.id)):new Set)},t=()=>{alert(`Отправить ${e.size} элементов`)},l=()=>{alert(`Экспорт ${e.size} элементов`)},a=()=>{alert(`Архивация ${e.size} элементов`)};return s.jsxDEV(B,{children:s.jsxDEV(L,{ref:r,style:{position:"relative"},children:[s.jsxDEV(E,{children:"Standalone MassActions"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:143,columnNumber:9},this),s.jsxDEV(D,{children:"Выберите элементы ниже, чтобы увидеть панель массовых действий"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:144,columnNumber:9},this),s.jsxDEV(F,{children:o.map(i=>s.jsxDEV(I,{$selected:e.has(i.id),onClick:()=>x(i.id),children:i.name},i.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:149,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:147,columnNumber:9},this),e.size>0&&s.jsxDEV(f,{containerRef:r,selectedCount:e.size,leftSection:s.jsxDEV(f.Counter,{selectedCount:e.size,showCheckbox:!0,checked:k,indeterminate:h,onCheckboxChange:i=>N(i.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:164,columnNumber:15},this),buttons:[{text:"Экспорт",onClick:l,type:"button",view:"secondary"},{text:"Архивировать",onClick:a,type:"button",view:"secondary"},{view:"accent",onClick:t,type:"button",text:"Отправить"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:160,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:142,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:141,columnNumber:5},this)}function ks(){const r=d.useRef(null),[e,c]=d.useState(!1),[o,p]=d.useState(new Set),n=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"}],k=o.size===n.length,h=o.size>0&&o.size<n.length,x=k,N=h,t=a=>{const i=new Set(o);i.has(a)?i.delete(a):i.add(a),p(i)},l=a=>{p(a?new Set(n.map(i=>i.id)):new Set)};return s.jsxDEV(B,{children:s.jsxDEV(L,{ref:r,style:{position:"relative"},children:[s.jsxDEV(E,{children:"Пример с пропом show"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:243,columnNumber:9},this),s.jsxDEV(D,{children:"Проп show позволяет явно контролировать видимость панели, даже если selectedCount === 0. Чекбокс работает так же, как в базовом примере: галочка когда все выбрано, минус когда выбрано частично, пусто когда ничего не выбрано."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:244,columnNumber:9},this),s.jsxDEV("div",{style:{marginBottom:m.x8,display:"flex",gap:m.x4},children:[s.jsxDEV(C,{onClick:()=>c(!e),children:[e?"Скрыть":"Показать"," панель"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:251,columnNumber:11},this),s.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:m.x2},children:[s.jsxDEV("span",{children:["selectedCount: ",o.size]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:255,columnNumber:13},this),s.jsxDEV("span",{children:["show: ",e?"true":"false"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:256,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:254,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:250,columnNumber:9},this),s.jsxDEV(F,{children:n.map(a=>s.jsxDEV(I,{$selected:o.has(a.id),onClick:()=>t(a.id),children:a.name},a.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:261,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:259,columnNumber:9},this),s.jsxDEV(f,{containerRef:r,selectedCount:o.size,show:e,leftSection:s.jsxDEV(f.Counter,{selectedCount:o.size,showCheckbox:!0,checked:x,indeterminate:N,onCheckboxChange:a=>l(a.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:276,columnNumber:13},this),buttons:[{text:"Действие 1",onClick:()=>alert("Действие 1"),type:"button",view:"secondary"},{text:"Действие 2",onClick:()=>alert("Действие 2"),type:"button",view:"secondary"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:271,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:242,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:241,columnNumber:5},this)}function bs(){const r=d.useRef(null),[e,c]=d.useState(new Set),o=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"},{id:4,name:"Документ 4"},{id:5,name:"Документ 5"}],p=e.size===o.length,n=e.size>0&&e.size<o.length,k=p,h=n,x=t=>{const l=new Set(e);l.has(t)?l.delete(t):l.add(t),c(l)},N=t=>{c(t?new Set(o.map(l=>l.id)):new Set)};return s.jsxDEV(B,{children:s.jsxDEV(L,{ref:r,style:{maxWidth:"600px",margin:"0 auto",position:"relative"},children:[s.jsxDEV(E,{children:"Узкий контейнер"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:356,columnNumber:9},this),s.jsxDEV(D,{children:"При недостатке места кнопки автоматически скрываются в дропдаун скрытых действий. Выберите элементы ниже, чтобы увидеть компрессию кнопок."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:357,columnNumber:9},this),s.jsxDEV(F,{style:{marginTop:m.x8,marginBottom:m.x8},children:o.map(t=>s.jsxDEV(I,{$selected:e.has(t.id),onClick:()=>x(t.id),children:t.name},t.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:364,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:362,columnNumber:9},this),e.size>0&&s.jsxDEV(f,{containerRef:r,selectedCount:e.size,leftSection:s.jsxDEV(f.Counter,{selectedCount:e.size,showCheckbox:!0,checked:k,indeterminate:h,onCheckboxChange:t=>N(t.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:379,columnNumber:15},this),buttons:[{text:"Экспорт",onClick:()=>alert("Экспорт"),view:"secondary",type:"button"},{text:"Копировать",onClick:()=>alert("Копировать"),view:"secondary",type:"button"},{text:"Переместить",onClick:()=>alert("Переместить"),view:"secondary",type:"button"},{text:"Архивировать",onClick:()=>alert("Архивировать"),view:"secondary",type:"button"},{text:"Заморозить",onClick:()=>alert("Заморозить"),view:"secondary",type:"button"},{type:"button",text:"Отправить",view:"accent",onClick:()=>alert("Отправить")}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:375,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:348,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:347,columnNumber:5},this)}function fs(){const r=d.useRef(null),[e,c]=d.useState(!1),[o,p]=d.useState(!1),[n,k]=d.useState(new Set),h=[{id:1,name:"Документ 1"},{id:2,name:"Документ 2"},{id:3,name:"Документ 3"},{id:4,name:"Документ 4"},{id:5,name:"Документ 5"}],x=n.size===h.length,N=n.size>0&&n.size<h.length,t=x,l=N,a=u=>{const w=new Set(n);w.has(u)?w.delete(u):w.add(u),k(w)},i=u=>{k(u?new Set(h.map(w=>w.id)):new Set)},b=u=>{c(u)};return s.jsxDEV("div",{style:{height:"100vh",padding:"20px",display:"flex",backgroundColor:"#f5f5f5"},children:[s.jsxDEV(ds,{onToggleCollapse:b,collapseState:[e,c],expandedContent:s.jsxDEV("div",{style:{padding:m.x8,height:"100%",display:"flex",flexDirection:"column"},children:[s.jsxDEV(E,{style:{fontSize:"18px",marginBottom:m.x4},children:"Левая панель"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:501,columnNumber:13},this),s.jsxDEV(D,{style:{fontSize:"14px",marginBottom:m.x8},children:"В левой панели используется StaticMassActionsPanel с базовыми кнопками"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:504,columnNumber:13},this),s.jsxDEV(hs,{show:o,children:[s.jsxDEV(z,{size:"s",view:"secondary",children:s.jsxDEV(R,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:510,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:509,columnNumber:15},this),s.jsxDEV(C,{text:"Label 1",contentLeft:s.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:514,columnNumber:30},this),size:"s",view:"secondary",onClick:()=>alert("Label 1"),style:{flexGrow:1}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:512,columnNumber:15},this),s.jsxDEV(C,{text:"Label 2",size:"s",contentLeft:s.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:525,columnNumber:30},this),view:"secondary",onClick:()=>alert("Label 2"),style:{flexGrow:1}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:522,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:508,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:493,columnNumber:11},this),collapsedContent:o&&s.jsxDEV(s.Fragment,{children:[s.jsxDEV(z,{size:"s",view:"secondary",children:s.jsxDEV(R,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:539,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:538,columnNumber:15},this),s.jsxDEV(z,{size:"s",view:"secondary",children:s.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:542,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:541,columnNumber:15},this),s.jsxDEV(z,{size:"s",view:"secondary",children:s.jsxDEV(P,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:545,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:544,columnNumber:15},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:537,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:489,columnNumber:7},this),s.jsxDEV("div",{ref:r,style:{flex:1,padding:m.x8,backgroundColor:ls,borderRadius:m.x8,position:"relative"},children:[s.jsxDEV("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:m.x8},children:s.jsxDEV(E,{style:{fontSize:"20px",margin:0},children:"Основной контент"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:569,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:561,columnNumber:9},this),s.jsxDEV(D,{style:{fontSize:"14px",marginBottom:m.x8},children:"В основном контенте используется адаптивный MassActions. Выберите документ."},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:573,columnNumber:9},this),s.jsxDEV("div",{style:{marginBottom:"16px"},children:s.jsxDEV("div",{style:{display:"flex",gap:"16px"},children:[s.jsxDEV(C,{onClick:()=>b(!e),children:[e?"Закрыть":"Открыть"," левую панель"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:584,columnNumber:13},this),s.jsxDEV(C,{onClick:()=>p(u=>!u),children:[o?"Закрыть":"Открыть"," ","MassActionsStatic в левой части"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:587,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:578,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:577,columnNumber:9},this),s.jsxDEV(F,{children:h.map(u=>s.jsxDEV(I,{$selected:n.has(u.id),onClick:()=>a(u.id),children:u.name},u.id,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:595,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:593,columnNumber:9},this),n.size>0&&s.jsxDEV(f,{containerRef:r,selectedCount:n.size,leftSection:s.jsxDEV(f.Counter,{selectedCount:n.size,showCheckbox:!0,checked:t,indeterminate:l,onCheckboxChange:u=>i(u.target.checked)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:610,columnNumber:15},this),buttons:[{text:"Экспорт",onClick:()=>alert("Экспорт"),type:"button",view:"secondary"},{text:"Архивировать",onClick:()=>alert("Архивировать"),type:"button",view:"secondary"},{text:"Копировать",onClick:()=>alert("Копировать"),type:"button",view:"secondary"},{text:"Переместить",onClick:()=>alert("Переместить"),type:"button",view:"secondary"},{view:"accent",onClick:()=>alert("Отправить"),type:"button",text:"Отправить"}]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:606,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:551,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/MassActions/MassActions.stories.tsx",lineNumber:481,columnNumber:5},this)}const xs=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${j("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","StandaloneExample")}
`,Ns=`
import { useRef, useState } from 'react';
import { Button } from '@ui-kit/components/Button';
import { MassActions } from '@ui-kit/components/MassActions';
import { s } from '@ui-kit/constants';

${j("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","ShowPropExample")}
`,ws=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${j("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","NarrowContainerExample")}
`,As=`
import { useRef, useState } from 'react';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { MassActions } from '@ui-kit/components/MassActions';
import { StaticMassActionsPanel } from '@ui-kit/components/StaticMassActionsPanel';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import { surfaceSolidCard } from '@ui-kit/tokens';

${j("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","WithLeftPanelExample")}
`,Ms=`
import { useRef, useState } from 'react';
import { MassActions } from '@ui-kit/components/MassActions';

${j("packages/storybook/src/stories/MassActions/MassActions.stories.tsx","StandaloneExample")}
`,A={name:"Standalone MassActions",...V({previewSource:"shown",code:xs}),render:ms},M={name:"С явным контролем видимости (show)",...V({previewSource:"shown",code:Ns}),render:ks},g={name:"Узкий контейнер (компрессия)",...V({previewSource:"shown",code:ws}),render:bs},y={name:"В комбинации с LeftPanel",...V({previewSource:"shown",code:As}),render:fs},v={name:"1280 Адаптив",parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile"}},...V({previewSource:"shown",code:Ms}),render:ms};var $,W,O,_,T;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Standalone MassActions',
  ...storySourceDoc({
    previewSource: 'shown',
    code: standalonePreCode
  }),
  render: StandaloneExample
}`,...(O=(W=A.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(T=(_=A.parameters)==null?void 0:_.docs)==null?void 0:T.description}}};var G,H,q,J,K;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'С явным контролем видимости (show)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: showPropPreCode
  }),
  render: ShowPropExample
}`,...(q=(H=M.parameters)==null?void 0:H.docs)==null?void 0:q.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(K=(J=M.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,U,X,Y,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Узкий контейнер (компрессия)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: narrowContainerPreCode
  }),
  render: NarrowContainerExample
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ss,es,os,is,ts;y.parameters={...y.parameters,docs:{...(ss=y.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  name: 'В комбинации с LeftPanel',
  ...storySourceDoc({
    previewSource: 'shown',
    code: withLeftPanelPreCode
  }),
  render: WithLeftPanelExample
}`,...(os=(es=y.parameters)==null?void 0:es.docs)==null?void 0:os.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(ts=(is=y.parameters)==null?void 0:is.docs)==null?void 0:ts.description}}};var rs,ns,as,us,cs;v.parameters={...v.parameters,docs:{...(rs=v.parameters)==null?void 0:rs.docs,source:{originalSource:`{
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
}`,...(as=(ns=v.parameters)==null?void 0:ns.docs)==null?void 0:as.source},description:{story:"#####ℹ️ Для просмотра примера нажми `Show code`.",...(cs=(us=v.parameters)==null?void 0:us.docs)==null?void 0:cs.description}}};const gs=["Standalone","WithShowProp","NarrowContainer","WithLeftPanel","Adaptive1280"],Is=Object.freeze(Object.defineProperty({__proto__:null,Adaptive1280:v,NarrowContainer:g,Standalone:A,WithLeftPanel:y,WithShowProp:M,__namedExportsOrder:gs,default:ps},Symbol.toStringTag,{value:"Module"}));export{Is as M};
