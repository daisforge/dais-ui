import{r as s,j as e}from"./react-CAOzMBF_.js";import{g as f}from"./getFuncAsString-B1yRgn90.js";import{s as R}from"./storySourceDoc-tVKyHcEN.js";import{A as v,a as c,c as M}from"./AiAgentPopup-DrReb3Ou.js";import{s as L,c as W}from"./constants-ChwOYBdp.js";import{db as D,d7 as _,x as K,z as $,dy as G,dz as I}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{cj as B,br as k}from"./vendor-CvBXOjQ8.js";import{I as S}from"./@salutejs/sdds-finai-CrMFu5No.js";import{eB as V,sV as X,kE as Z,hZ as q,d7 as J,u2 as N,t2 as Q,vX as U,sO as Y,mp as ee,fa as te}from"./@salutejs/plasma-icons-DBF9uERs.js";function w(){const[u,t]=s.useState([{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине."},{text:"Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик. Избранное выключено, внизу настройки и корзина: она очищает чат без открытия раздела."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}]),[o,r]=s.useState("");return{messages:u,draft:o,setDraft:r,send:()=>{o.trim()&&(t(d=>[...d,{text:o.trim()}]),r(""))},clear:()=>t([])}}function z(u){const t={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"};return[{key:"history",icon:e.jsx(Z,{size:"s"}),title:"История",content:e.jsxs("div",{style:t,children:[e.jsx(c,{variant:"BodyS",children:"Вчера: вопросы по таблицам"}),e.jsx(c,{variant:"BodyS",children:"2 дня назад: настройка форм"}),e.jsx(c,{variant:"BodyS",children:"Неделю назад: обзор дашбордов"})]})},{key:"tasks",icon:e.jsx(q,{size:"s"}),title:"Задачи",content:e.jsxs("div",{style:t,children:[e.jsx(c,{variant:"BodyS",children:"Проверить отчёт"}),e.jsx(c,{variant:"BodyS",children:"Согласовать макет"})]})},{key:"calendar",icon:e.jsx(J,{size:"s"}),title:"Календарь",content:e.jsxs("div",{style:t,children:[e.jsx(c,{variant:"BodyS",children:"Сегодня: созвон в 15:00"}),e.jsx(c,{variant:"BodyS",children:"Завтра: демо в 12:00"})]})},{key:"favorites",icon:e.jsx(N,{size:"s"}),title:"Избранное",disabled:!0,content:e.jsx("div",{style:t,children:e.jsx(c,{variant:"BodyS",children:"Избранных ответов пока нет"})})},{key:"settings",icon:e.jsx(Q,{size:"s"}),title:"Настройки",placement:"bottom",content:e.jsx("div",{style:t,children:e.jsx(c,{variant:"BodyS",children:"Язык ответов: русский"})})},{key:"clear",icon:e.jsx(U,{size:"s"}),placement:"bottom",onClick:u}]}function ne({onClose:u}){const t={display:"flex",alignItems:"center"},o={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40};return e.jsxs("div",{style:{...t,justifyContent:"space-between"},children:[e.jsxs("div",{style:t,children:[e.jsx("span",{style:o,children:e.jsx(Y,{size:"s",color:I})}),e.jsx(c,{variant:"BodyM",bold:!0,children:"AI-Chat"})]}),e.jsxs("div",{style:t,children:[e.jsx(S,{size:"s",view:"clear",children:e.jsx(ee,{size:"s"})}),e.jsx(S,{size:"s",view:"clear",onClick:u,children:e.jsx(te,{size:"s"})})]})]})}function O({messages:u,draft:t,glow:o,onDraftChange:r,onSend:a,onClose:i}){const d={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"12px"},p={background:G,borderRadius:W.s,padding:"10px 12px",color:$},l={padding:"0 12px",color:K};return e.jsxs(e.Fragment,{children:[e.jsx(ne,{onClose:i}),e.jsx("div",{style:d,children:u.map((g,x)=>e.jsx(c,{variant:"BodyS",style:g.system?l:p,"data-no-drag":!0,children:g.text},x))}),e.jsx(M,{glow:o,placeholder:"Спросите что-нибудь",value:t,onChange:g=>r(g.target.value),rightSlot:e.jsx(S,{size:"xs",view:"clear",onClick:a,children:e.jsx(X,{size:"s",color:I})})})]})}function T({sidebarRef:u,targetRef:t,onToggle:o}){return e.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:L.x2,background:_},children:e.jsx("span",{ref:t,children:e.jsx(S,{size:"s",view:"clear",onClick:o,children:e.jsx(V,{size:"s"})})})})}function F(u){const[t,o]=s.useState(0);return s.useLayoutEffect(()=>{const r=u.current;if(!r)return;const a=()=>o(r.offsetWidth);a();const i=new ResizeObserver(a);return i.observe(r),()=>i.disconnect()},[u]),t}const H=`import React, { useLayoutEffect, useRef, useState } from 'react';
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

${f("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","useChat")}

${f("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","getLeftPanelItems")}

${f("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","ChatHeader")}

${f("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","ChatContent")}

${f("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","Sidebar")}

${f("packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx","useSidebarWidth")}

`,n={control:!1,table:{disable:!0}},ue={opened:n,frame:n,targetRef:n,targetGap:n,defaultPosition:n,positionState:n,onPositionChange:n,draggable:n,dragBoundary:n,dragIgnoreSelector:n,useStorage:n,resizable:n,defaultSize:n,onSizeChange:n,leftPanel:n,glow:n},oe={title:"Локальные компоненты/AiAgentPopup",component:v,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:n,frame:n,positionState:n,onPositionChange:n,onSizeChange:n,opened:n,leftPanel:n,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object",description:"Отступы от краёв. В примере left отсчитывается от правого края сайдбара"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:0}}},m={name:"Simple",argTypes:ue,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...R({preCode:H,previewSource:"shown",type:"code"}),render(){const u=s.useRef(null),t=s.useRef(null),o=s.useRef(null),r=F(u),[a,i]=s.useState(!0),[d,p]=s.useState(null),l=w();return e.jsx(B,{children:e.jsx(k,{children:e.jsxs("div",{ref:o,style:{position:"relative",display:"flex",height:"100vh",minHeight:640,overflow:"hidden",backgroundColor:D},children:[e.jsx(T,{sidebarRef:u,targetRef:t,onToggle:()=>i(!a)}),e.jsx(v,{opened:a,targetRef:t,frame:o,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:r},leftPanel:{items:z(l.clear),activeKey:d,onActiveKeyChange:p},children:e.jsx(O,{glow:!0,messages:l.messages,draft:l.draft,onDraftChange:l.setDraft,onSend:l.send,onClose:()=>i(!1)})})]})})})}},y={name:"Playground",...R({preCode:H,previewSource:"shown",type:"code"}),render:({glow:u,dragBoundary:t,...o})=>{const r=s.useRef(null),a=s.useRef(null),i=s.useRef(null),d=F(r),[p,l]=s.useState(!0),[g,x]=s.useState(null),h=w();return e.jsx(B,{children:e.jsx(k,{children:e.jsxs("div",{ref:i,style:{position:"relative",display:"flex",height:"100vh",minHeight:640,overflow:"hidden",backgroundColor:D},children:[e.jsx(T,{sidebarRef:r,targetRef:a,onToggle:()=>l(!p)}),e.jsx(v,{...o,opened:p,targetRef:a,frame:i,dragBoundary:{...t,left:d+((t==null?void 0:t.left)??0)},leftPanel:{items:z(h.clear),activeKey:g,onActiveKeyChange:x},children:e.jsx(O,{glow:u,messages:h.messages,draft:h.draft,onDraftChange:h.setDraft,onSend:h.send,onClose:()=>l(!1)})})]})})})}};var A,b,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var P,j,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(j=y.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const se=["Simple","Playground"],he=Object.freeze(Object.defineProperty({__proto__:null,Playground:y,Simple:m,__namedExportsOrder:se,default:oe},Symbol.toStringTag,{value:"Module"}));export{he as A};
