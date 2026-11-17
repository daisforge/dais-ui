import{r as u,d as e}from"./react-D2T61mpp.js";import{g}from"./getFuncAsString-B1yRgn90.js";import{s as D}from"./storySourceDoc-tVKyHcEN.js";import{A as P,a as l,c as F}from"./AiAgentPopup-B8FW9bw7.js";import{s as H,c as M}from"./constants-ChwOYBdp.js";import{db as w,d7 as L,x as W,z as _,dy as K,dz as C}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{cj as j,br as R}from"./vendor-BrHBSlJK.js";import{I as b}from"./@salutejs/sdds-finai-QR_WCRdF.js";import{eB as $,sV as G,kE as X,hZ as Z,d7 as q,u2 as J,t2 as Q,vX as U,sO as Y,mp as ee,fa as se}from"./@salutejs/plasma-icons-DKlbVZSX.js";function V(){const[i,s]=u.useState([{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине."},{text:"Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик. Избранное выключено, внизу настройки и корзина: она очищает чат без открытия раздела."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}]),[t,r]=u.useState("");return{messages:i,draft:t,setDraft:r,send:()=>{t.trim()&&(s(d=>[...d,{text:t.trim()}]),r(""))},clear:()=>s([])}}function I(i){const s={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"};return[{key:"history",icon:e.jsxDEV(X,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:94,columnNumber:13},this),title:"История",content:e.jsxDEV("div",{style:s,children:[e.jsxDEV(l,{variant:"BodyS",children:"Вчера: вопросы по таблицам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:98,columnNumber:11},this),e.jsxDEV(l,{variant:"BodyS",children:"2 дня назад: настройка форм"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:99,columnNumber:11},this),e.jsxDEV(l,{variant:"BodyS",children:"Неделю назад: обзор дашбордов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:100,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:97,columnNumber:9},this)},{key:"tasks",icon:e.jsxDEV(Z,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:106,columnNumber:13},this),title:"Задачи",content:e.jsxDEV("div",{style:s,children:[e.jsxDEV(l,{variant:"BodyS",children:"Проверить отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:110,columnNumber:11},this),e.jsxDEV(l,{variant:"BodyS",children:"Согласовать макет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:111,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:109,columnNumber:9},this)},{key:"calendar",icon:e.jsxDEV(q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:117,columnNumber:13},this),title:"Календарь",content:e.jsxDEV("div",{style:s,children:[e.jsxDEV(l,{variant:"BodyS",children:"Сегодня: созвон в 15:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:121,columnNumber:11},this),e.jsxDEV(l,{variant:"BodyS",children:"Завтра: демо в 12:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:122,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:120,columnNumber:9},this)},{key:"favorites",icon:e.jsxDEV(J,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:128,columnNumber:13},this),title:"Избранное",disabled:!0,content:e.jsxDEV("div",{style:s,children:e.jsxDEV(l,{variant:"BodyS",children:"Избранных ответов пока нет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:133,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:132,columnNumber:9},this)},{key:"settings",icon:e.jsxDEV(Q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:139,columnNumber:13},this),title:"Настройки",placement:"bottom",content:e.jsxDEV("div",{style:s,children:e.jsxDEV(l,{variant:"BodyS",children:"Язык ответов: русский"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:144,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:143,columnNumber:9},this)},{key:"clear",icon:e.jsxDEV(U,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:150,columnNumber:13},this),placement:"bottom",onClick:i}]}function oe({onClose:i}){const s={display:"flex",alignItems:"center"},t={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40};return e.jsxDEV("div",{style:{...s,justifyContent:"space-between"},children:[e.jsxDEV("div",{style:s,children:[e.jsxDEV("span",{style:t,children:e.jsxDEV(Y,{size:"s",color:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:179,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:177,columnNumber:9},this),e.jsxDEV(l,{variant:"BodyM",bold:!0,children:"AI-Chat"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:181,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:176,columnNumber:7},this),e.jsxDEV("div",{style:s,children:[e.jsxDEV(b,{size:"s",view:"clear",children:e.jsxDEV(ee,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:187,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:186,columnNumber:9},this),e.jsxDEV(b,{size:"s",view:"clear",onClick:i,children:e.jsxDEV(se,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:190,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:189,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:185,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:175,columnNumber:5},this)}function B({messages:i,draft:s,glow:t,onDraftChange:r,onSend:n,onClose:a}){const d={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"12px"},p={background:K,borderRadius:M.s,padding:"10px 12px",color:_},c={padding:"0 12px",color:W};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(oe,{onClose:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:237,columnNumber:7},this),e.jsxDEV("div",{style:d,children:i.map((m,k)=>e.jsxDEV(l,{variant:"BodyS",style:m.system?c:p,"data-no-drag":!0,children:m.text},k,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:242,columnNumber:11},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:240,columnNumber:7},this),e.jsxDEV(F,{glow:t,placeholder:"Спросите что-нибудь",value:s,onChange:m=>r(m.target.value),rightSlot:e.jsxDEV(b,{size:"xs",view:"clear",onClick:n,children:e.jsxDEV(G,{size:"s",color:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:263,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:261,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:255,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:236,columnNumber:5},this)}function z({sidebarRef:i,targetRef:s,onToggle:t}){return e.jsxDEV("div",{ref:i,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:H.x2,background:L},children:e.jsxDEV("span",{ref:s,children:e.jsxDEV(b,{size:"s",view:"clear",onClick:t,children:e.jsxDEV($,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:296,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:295,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:294,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:283,columnNumber:5},this)}function O(i){const[s,t]=u.useState(0);return u.useLayoutEffect(()=>{const r=i.current;if(!r)return;const n=()=>t(r.offsetWidth);n();const a=new ResizeObserver(n);return a.observe(r),()=>a.disconnect()},[i]),s}const T=`import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
  backgroundPrimary,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textInfo,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import type { AiAgentLeftPanelItem } from '@daisforge/ui';
import { br, s } from '@daisforge/ui/constants';
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconClose,
  IconDoneCircleOutline,
  IconHistory,
  IconMessageAddOutline,
  IconSearchAIOutline,
  IconSendOutline,
  IconSettingsOutline,
  IconStar,
  IconTrashOutline,
} from '@daisforge/ui/icons';

type ChatMessage = { text: string; system?: boolean };

${g("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","useChat")}

${g("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","getLeftPanelItems")}

${g("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","ChatHeader")}

${g("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","ChatContent")}

${g("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","Sidebar")}

${g("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","useSidebarWidth")}

`,o={control:!1,table:{disable:!0}},ie={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,leftPanel:o,glow:o},te={title:"Локальные компоненты/AiAgentPopup",component:P,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,leftPanel:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object",description:"Отступы от краёв. В примере left отсчитывается от правого края сайдбара"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:0}}},f={name:"Simple",argTypes:ie,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...D({preCode:T,previewSource:"shown",type:"code"}),render(){const i=u.useRef(null),s=u.useRef(null),t=u.useRef(null),r=O(i),[n,a]=u.useState(!0),[d,p]=u.useState(null),c=V();return e.jsxDEV(j,{children:e.jsxDEV(R,{children:e.jsxDEV("div",{ref:t,style:{position:"relative",display:"flex",height:"100vh",minHeight:640,overflow:"hidden",backgroundColor:w},children:[e.jsxDEV(z,{sidebarRef:i,targetRef:s,onToggle:()=>a(!n)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:502,columnNumber:13},this),e.jsxDEV(P,{opened:n,targetRef:s,frame:t,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:r},leftPanel:{items:I(c.clear),activeKey:d,onActiveKeyChange:p},children:e.jsxDEV(B,{glow:!0,messages:c.messages,draft:c.draft,onDraftChange:c.setDraft,onSend:c.send,onClose:()=>a(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:521,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:507,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:491,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:490,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:489,columnNumber:7},this)}},h={name:"Playground",...D({preCode:T,previewSource:"shown",type:"code"}),render:({glow:i,dragBoundary:s,...t})=>{const r=u.useRef(null),n=u.useRef(null),a=u.useRef(null),d=O(r),[p,c]=u.useState(!0),[m,k]=u.useState(null),A=V();return e.jsxDEV(j,{children:e.jsxDEV(R,{children:e.jsxDEV("div",{ref:a,style:{position:"relative",display:"flex",height:"100vh",minHeight:640,overflow:"hidden",backgroundColor:w},children:[e.jsxDEV(z,{sidebarRef:r,targetRef:n,onToggle:()=>c(!p)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:564,columnNumber:13},void 0),e.jsxDEV(P,{...t,opened:p,targetRef:n,frame:a,dragBoundary:{...s,left:d+((s==null?void 0:s.left)??0)},leftPanel:{items:I(A.clear),activeKey:m,onActiveKeyChange:k},children:e.jsxDEV(B,{glow:i,messages:A.messages,draft:A.draft,onDraftChange:A.setDraft,onSend:A.send,onClose:()=>c(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:585,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:569,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:553,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:552,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:551,columnNumber:7},void 0)}};var y,x,N;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Simple',
  argTypes: mainArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/
    },
    docs: {
      controls: {
        exclude: /.*/
      }
    }
  },
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLSpanElement>(null);
    // frame нужен только в стори: изолирует окно в рамках примера, чтобы
    // примеры на странице документации не мешали друг другу. В продуктовом
    // коде frame не передавайте, окно живёт поверх всей страницы
    const frameRef = useRef<HTMLDivElement>(null);
    const sidebarWidth = useSidebarWidth(sidebarRef);
    const [opened, setOpened] = useState(true);
    // Открытый раздел левой панели, null: видна полоса иконок
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const chat = useChat();

    // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
    return <SSRProvider>
        <PopupProvider>
          <div ref={frameRef} style={{
          position: 'relative',
          display: 'flex',
          height: '100vh',
          minHeight: 640,
          overflow: 'hidden',
          backgroundColor: backgroundPrimary
        }}>
            <Sidebar sidebarRef={sidebarRef} targetRef={targetRef} onToggle={() => setOpened(!opened)} />
            <AiAgentPopup opened={opened} targetRef={targetRef} frame={frameRef}
          // Пока окно не умеет само расширяться при открытии раздела,
          // стартуем шире размера по умолчанию
          defaultSize={{
            width: 680,
            height: 540
          }} dragBoundary={{
            top: 8,
            right: 8,
            bottom: 8,
            left: sidebarWidth
          }} leftPanel={{
            items: getLeftPanelItems(chat.clear),
            activeKey: activeSection,
            onActiveKeyChange: setActiveSection
          }}>
              <ChatContent glow messages={chat.messages} draft={chat.draft} onDraftChange={chat.setDraft} onSend={chat.send} onClose={() => setOpened(false)} />
            </AiAgentPopup>
          </div>
        </PopupProvider>
      </SSRProvider>;
  }
}`,...(N=(x=f.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var v,E,S;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
    type: 'code'
  }),
  render: ({
    glow,
    dragBoundary,
    ...popupArgs
  }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLSpanElement>(null);
    // frame нужен только в стори, в продуктовом коде его не передавайте
    const frameRef = useRef<HTMLDivElement>(null);
    const sidebarWidth = useSidebarWidth(sidebarRef);
    const [opened, setOpened] = useState(true);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const chat = useChat();
    return <SSRProvider>
        <PopupProvider>
          <div ref={frameRef} style={{
          position: 'relative',
          display: 'flex',
          height: '100vh',
          minHeight: 640,
          overflow: 'hidden',
          backgroundColor: backgroundPrimary
        }}>
            <Sidebar sidebarRef={sidebarRef} targetRef={targetRef} onToggle={() => setOpened(!opened)} />
            <AiAgentPopup {...popupArgs} opened={opened} targetRef={targetRef} frame={frameRef}
          // left в dragBoundary отсчитывается от правого края сайдбара
          dragBoundary={{
            ...dragBoundary,
            left: sidebarWidth + (dragBoundary?.left ?? 0)
          }} leftPanel={{
            items: getLeftPanelItems(chat.clear),
            activeKey: activeSection,
            onActiveKeyChange: setActiveSection
          }}>
              <ChatContent glow={glow} messages={chat.messages} draft={chat.draft} onDraftChange={chat.setDraft} onSend={chat.send} onClose={() => setOpened(false)} />
            </AiAgentPopup>
          </div>
        </PopupProvider>
      </SSRProvider>;
  }
}`,...(S=(E=h.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const ue=["Simple","Playground"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Playground:h,Simple:f,__namedExportsOrder:ue,default:te},Symbol.toStringTag,{value:"Module"}));export{Ae as A};
