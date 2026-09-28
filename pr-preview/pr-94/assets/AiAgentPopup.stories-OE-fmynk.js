import{d as e,r as u}from"./react-D2T61mpp.js";import{s as A}from"./storySourceDoc-tVKyHcEN.js";import{A as h,a as _,b as L}from"./AiAgentPopup-BuM34CsA.js";import{a as E}from"./AnalyticalWidget-DDGycJzB.js";import{s as b,c as F}from"./constants-BPUyiI8r.js";import{cE as $,R as Z,v as q,x as J,cP as K,ce as Q}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{cj as j,br as z}from"./vendor-9g8l4WhJ.js";import{c as B,I as d}from"./@salutejs/sdds-finai-DjrWBgCD.js";import{sS as U,eZ as W,og as X,mp as Y,kE as ee,fa as oe}from"./@salutejs/plasma-icons-CsO0Zluk.js";const V=`import { useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
  Button,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  textAccentGradient,
  textInfo,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import {
  IconChevronLeft,
  IconClose,
  IconHistory,
  IconMessageAddOutline,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@daisforge/ui/icons';

// Весь контент окна на стороне потребителя, ниже один из вариантов сборки.
// Поле ввода с овальным свечением позади даёт компонент AiAgentInput:
// свечение включается его пропом glow (например, пока AI-агент обдумывает
// ответ) и выключается в реальном времени, при авторосте поля растёт
// вслед за ним и ложится под соседние сообщения.

const chatHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const chatBodyStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
};

const chatMessagesStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '8px',
};

const chatBubbleStyle = {
  background: surfaceAccentMinor,
  borderRadius: '8px',
  padding: '10px 12px',
  color: textPrimary,
};

// Сообщение от системы: без фона, свечение ложится прямо под текст
const systemMessageStyle = {
  padding: '0 12px',
  color: textInfo,
};

// Кнопки не начинают перетаскивание, по ним работают обычные клики
function ChatHeader({ onClose }) {
  return (
    <div style={chatHeaderStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="s" view="clear">
          <IconChevronLeft size="s" />
        </IconButton>
        <Typography variant="BodyM" bold>
          Тема диалога
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="s" view="clear">
          <IconPanelSidebarLOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear">
          <IconMessageAddOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear">
          <IconHistory size="s" />
        </IconButton>
        <IconButton size="s" view="clear" onClick={onClose}>
          <IconClose size="s" />
        </IconButton>
      </div>
    </div>
  );
}

function ChatContent({ onClose }) {
  const [messages, setMessages] = useState([
    { text: 'Привет! Я AI-помощник.' },
    { text: 'Анализирую ваш запрос…', system: true },
  ]);
  const [draft, setDraft] = useState('');
  // Пока агент «думает», подсветка поля включена; свою логику смены
  // состояний (стоп вместо отправки, тултипы) реализуйте в rightSlot
  const [thinking, setThinking] = useState(true);

  const sendDraft = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { text: draft.trim() }]);
    setDraft('');
  };

  return (
    <>
      <ChatHeader onClose={onClose} />
      <div style={chatBodyStyle}>
        <div style={chatMessagesStyle}>
          {messages.map((message, index) => (
            <Typography
              key={index}
              variant="BodyS"
              style={message.system ? systemMessageStyle : chatBubbleStyle}
              data-no-drag
            >
              {message.text}
            </Typography>
          ))}
        </div>
        {/* Внешних отступов у AiAgentInput нет, место в лэйауте чата
            задаёт потребитель */}
        <div style={{ paddingTop: '12px' }}>
          <AiAgentInput
            glow={thinking}
            placeholder="Спросите что-нибудь"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rightSlot={
              <IconButton size="xs" view="clear" onClick={sendDraft}>
                {/* плазма-иконки умеют градиент в color: рисуют её маской */}
                <IconSendOutline size="s" color={textAccentGradient} />
              </IconButton>
            }
          />
        </div>
      </div>
    </>
  );
}
`,te=`${V}
function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(false);

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <span ref={targetRef}>
          <Button onClick={() => setOpened(!opened)}>AI помощник</Button>
        </span>
        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          defaultSize={{ width: 360, height: 420 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <ChatContent onClose={() => setOpened(false)} />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`,se=`${V}
function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <span ref={targetRef}>
          <Button onClick={() => setOpened(!opened)}>AI помощник</Button>
        </span>
        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          targetGap={12}
          draggable
          resizable
          useStorage
          defaultSize={{ width: 360, height: 420 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}
        >
          <ChatContent onClose={() => setOpened(false)} />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`,ie=`import { useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
  AiAgentSurface,
  Button,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  textAccentGradient,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import {
  IconClose,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@daisforge/ui/icons';

// Один и тот же контент чата живёт то в окне, то в левой панели лэйаута.
// Состояние чата (сообщения, черновик) поднято в Example: окно при
// закрытии размонтирует контент, и при переносе в панель контент
// перемонтируется, а состояние снаружи это переживает.

const bubbleStyle = {
  background: surfaceAccentMinor,
  borderRadius: '8px',
  padding: '10px 12px',
  color: textPrimary,
};

function ChatContent({
  messages,
  draft,
  onDraftChange,
  onSend,
  onClose,
  onTogglePanel,
}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="BodyM" bold>
          Тема диалога
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* эта кнопка и переносит чат между окном и панелью */}
          <IconButton size="s" view="clear" onClick={onTogglePanel}>
            <IconPanelSidebarLOutline size="s" />
          </IconButton>
          <IconButton size="s" view="clear" onClick={onClose}>
            <IconClose size="s" />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginTop: 8,
        }}
      >
        {messages.map((text, index) => (
          <Typography
            key={index}
            variant="BodyS"
            style={bubbleStyle}
            data-no-drag
          >
            {text}
          </Typography>
        ))}
      </div>
      <div style={{ paddingTop: 12 }}>
        <AiAgentInput
          glow
          placeholder="Спросите что-нибудь"
          value={draft}
          onChange={(e) => onDraftChange(e.target.value)}
          rightSlot={
            <IconButton size="xs" view="clear" onClick={onSend}>
              <IconSendOutline size="s" color={textAccentGradient} />
            </IconButton>
          }
        />
      </div>
    </>
  );
}

function Example() {
  const targetRef = useRef(null);
  // где сейчас живёт чат: в окне или в левой панели
  const [view, setView] = useState('popup');
  const [opened, setOpened] = useState(true);
  const [messages, setMessages] = useState(['Привет! Я AI-помощник.']);
  const [draft, setDraft] = useState('');

  const send = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, draft.trim()]);
    setDraft('');
  };

  const chat = (
    <ChatContent
      messages={messages}
      draft={draft}
      onDraftChange={setDraft}
      onSend={send}
      onClose={() => setOpened(false)}
      onTogglePanel={() => setView(view === 'popup' ? 'panel' : 'popup')}
    />
  );

  return (
    <SSRProvider>
      <PopupProvider>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Левая панель: её ширина анимируется, поэтому переход плавный.
              Рамка AiAgentSurface в варианте embedded входит в блочную
              модель: отступы лэйаута идут от края рамки, absolute
              позиционирования нет */}
          <div
            style={{
              width: view === 'panel' ? 376 : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              flex: 'none',
            }}
          >
            <div style={{ width: 360, height: '100%', padding: 8 }}>
              <AiAgentSurface style={{ height: '100%' }}>
                {view === 'panel' ? chat : null}
              </AiAgentSurface>
            </div>
          </div>

          {/* остальная страница */}
          <div style={{ flex: 1 }}>
            <span ref={targetRef}>
              <Button onClick={() => setOpened(!opened)}>AI помощник</Button>
            </span>
          </div>
        </div>

        <AiAgentPopup
          opened={view === 'popup' && opened}
          targetRef={targetRef}
          defaultSize={{ width: 360, height: 420 }}
        >
          {view === 'popup' ? chat : null}
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`,o={control:!1,table:{disable:!0}},R={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,glow:o},re={title:"Локальные компоненты/AiAgentPopup",component:h,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8}}},x={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:$},T={...x,height:"100vh"},M={display:"flex",flexDirection:"column",gap:b.x4,padding:b.x4,background:Z},ne={display:"flex",alignItems:"center",justifyContent:"space-between"},ae={flex:"1 1 auto",minHeight:0,display:"flex",flexDirection:"column"},y={display:"flex",alignItems:"center"},ue={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},le={background:K,borderRadius:F.s,padding:"10px 12px",color:J},pe={padding:"0 12px",color:q},de={paddingTop:"12px"},ce=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Свечение позади поля ввода рисует AiAgentInput, оно включено его пропом glow."},{text:"Проверь: позиция скролла и набранный черновик не теряются при перетаскивании окна."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение вырастет вслед за ним."},{text:"Отправь своё сообщение кнопкой, оно добавится в конец ленты."},{text:"Кнопка с иконкой панели в шапке переносит чат в левую панель, смотри стори «Переход в панель»."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}];function ge({onClose:i,onTogglePanel:t}){return e.jsxDEV("div",{style:ne,children:[e.jsxDEV("div",{style:y,children:[e.jsxDEV(d,{size:"s",view:"clear",children:e.jsxDEV(W,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:588,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:587,columnNumber:9},this),e.jsxDEV(E,{variant:"BodyM",bold:!0,children:"Тема диалога"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:590,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:586,columnNumber:7},this),e.jsxDEV("div",{style:y,children:[e.jsxDEV(d,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(X,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:596,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:595,columnNumber:9},this),e.jsxDEV(d,{size:"s",view:"clear",children:e.jsxDEV(Y,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:599,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:598,columnNumber:9},this),e.jsxDEV(d,{size:"s",view:"clear",children:e.jsxDEV(ee,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:602,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:601,columnNumber:9},this),e.jsxDEV(d,{size:"s",view:"clear",onClick:i,children:e.jsxDEV(oe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:605,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:604,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:594,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:585,columnNumber:5},this)}function O({messages:i,draft:t,glow:n,onDraftChange:r,onSend:l,onClose:a,onTogglePanel:p}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(ge,{onClose:a,onTogglePanel:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:633,columnNumber:7},this),e.jsxDEV("div",{style:ae,children:[e.jsxDEV("div",{style:ue,children:i.map((s,f)=>e.jsxDEV(E,{variant:"BodyS",style:s.system?pe:le,"data-no-drag":!0,children:s.text},f,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:639,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:637,columnNumber:9},this),e.jsxDEV("div",{style:de,children:e.jsxDEV(L,{glow:n,placeholder:"Спросите что-нибудь",value:t,onChange:s=>r(s.target.value),rightSlot:e.jsxDEV(d,{size:"xs",view:"clear",onClick:l,children:e.jsxDEV(U,{size:"s",color:Q},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:661,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:659,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:653,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:652,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:634,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:632,columnNumber:5},this)}function H(){const[i,t]=u.useState(ce),[n,r]=u.useState("");return{messages:i,draft:n,setDraft:r,sendDraft:()=>{n.trim()&&(t(a=>[...a,{text:n.trim()}]),r(""))}}}function G({fullHeight:i,glow:t,...n}){const r=u.useRef(null),l=u.useRef(null),[a,p]=u.useState(!0),s=H();return e.jsxDEV(j,{children:e.jsxDEV(z,{children:e.jsxDEV("div",{ref:l,style:i?T:x,children:[e.jsxDEV("div",{style:M,children:e.jsxDEV("span",{ref:r,children:e.jsxDEV(B,{size:"xs",onClick:()=>p(!a),children:"AI помощник"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:708,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:707,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:706,columnNumber:11},this),e.jsxDEV(h,{...n,opened:a,targetRef:r,frame:l,children:e.jsxDEV(O,{messages:s.messages,draft:s.draft,glow:t,onDraftChange:s.setDraft,onSend:s.sendDraft,onClose:()=>p(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:719,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:713,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:702,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:701,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:700,columnNumber:5},this)}function me({fullHeight:i}){const t=u.useRef(null),n=u.useRef(null),[r,l]=u.useState("popup"),[a,p]=u.useState(!0),s=H(),f=e.jsxDEV(O,{messages:s.messages,draft:s.draft,glow:!0,onDraftChange:s.setDraft,onSend:s.sendDraft,onClose:()=>{l("popup"),p(!1)},onTogglePanel:()=>l(r==="popup"?"panel":"popup")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:746,columnNumber:5},this);return e.jsxDEV(j,{children:e.jsxDEV(z,{children:e.jsxDEV("div",{ref:n,style:i?T:x,children:[e.jsxDEV("div",{style:{width:r==="panel"?376:0,overflow:"hidden",transition:"width 0.3s ease",flex:"none"},children:e.jsxDEV("div",{style:{width:360,height:"100%",padding:8},children:e.jsxDEV(_,{style:{height:"100%"},children:r==="panel"?f:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:776,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:775,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:767,columnNumber:11},this),e.jsxDEV("div",{style:M,children:e.jsxDEV("span",{ref:t,children:e.jsxDEV(B,{size:"xs",onClick:()=>p(!a),children:"AI помощник"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:783,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:782,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:781,columnNumber:11},this),e.jsxDEV(h,{opened:r==="popup"&&a,targetRef:t,frame:n,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8},children:r==="popup"?f:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:788,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:763,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:762,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:761,columnNumber:5},this)}const c={name:"Simple",argTypes:R,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...A({code:te,previewSource:"shown"}),render:(i,t)=>e.jsxDEV(G,{glow:!0,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8},fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:820,columnNumber:5},void 0)},g={name:"Playground",...A({code:se,previewSource:"shown"}),render:(i,t)=>e.jsxDEV(G,{...i,fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:833,columnNumber:5},void 0)},m={name:"Переход в панель",argTypes:R,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...A({code:ie,previewSource:"shown"}),render:(i,t)=>e.jsxDEV(me,{fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:854,columnNumber:5},void 0)};var v,P,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Simple',
  argTypes: simpleArgTypes,
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
    code: simpleCode,
    previewSource: 'shown'
  }),
  render: (_args, context) => <AiAgentPopupExample glow defaultSize={{
    width: 360,
    height: 420
  }} dragBoundary={{
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  }} fullHeight={context.viewMode === 'story'} />
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var N,S,w;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentPopupExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(w=(S=g.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,I,C;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Переход в панель',
  argTypes: simpleArgTypes,
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
    code: panelCode,
    previewSource: 'shown'
  }),
  render: (_args, context) => <PanelTransformExample fullHeight={context.viewMode === 'story'} />
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const fe=["Simple","Playground","PanelTransform"],Se=Object.freeze(Object.defineProperty({__proto__:null,PanelTransform:m,Playground:g,Simple:c,__namedExportsOrder:fe,default:re},Symbol.toStringTag,{value:"Module"}));export{Se as A};
