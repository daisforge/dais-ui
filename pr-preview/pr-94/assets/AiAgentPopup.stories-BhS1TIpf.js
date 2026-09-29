import{d as e,r}from"./react-D2T61mpp.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{A as b,a as W,b as q}from"./AiAgentPopup-DLwmrJuB.js";import{a as R}from"./AnalyticalWidget-BzD7NQw2.js";import{s as P,c as J}from"./constants-BPUyiI8r.js";import{cE as K,R as Q,v as U,x as X,cP as Y,ce as ee}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{cj as V,br as T}from"./vendor-CTB0GR9F.js";import{I as c}from"./@salutejs/sdds-finai-i7t7pRRX.js";import{d7 as oe,hZ as te,eB as se,sS as ie,eZ as re,og as ne,mp as ae,kE as ue,fa as le}from"./@salutejs/plasma-icons-BAFdEMs_.js";const O=`import { useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
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
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconChevronLeft,
  IconClose,
  IconDoneCircleOutline,
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

// Левый сайдбар страницы: узкая вертикальная панель с иконками разделов.
// Нижняя иконка (каталог) — триггер AI-помощника: окно откроется справа
// от неё, targetRef висит на обёртке кнопки
const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px',
  background: surfaceTransparentSecondary,
};

function Sidebar({ targetRef, onToggle }) {
  return (
    <div style={sidebarStyle}>
      <IconButton size="s" view="clear">
        <IconCalendarEventOutline size="s" />
      </IconButton>
      <IconButton size="s" view="clear">
        <IconDoneCircleOutline size="s" />
      </IconButton>
      <span ref={targetRef}>
        <IconButton size="s" view="clear" onClick={onToggle}>
          <IconCatalogOutline size="s" />
        </IconButton>
      </span>
    </div>
  );
}

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
        {/* Отступов вокруг AiAgentInput нет: по дизайну поле прижато
            к ленте сообщений */}
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
    </>
  );
}
`,ce=`${O}
function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(false);

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <Sidebar targetRef={targetRef} onToggle={() => setOpened(!opened)} />
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
}`,pe=`${O}
function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <Sidebar targetRef={targetRef} onToggle={() => setOpened(!opened)} />
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
}`,de=`import { useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
  AiAgentSurface,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconClose,
  IconDoneCircleOutline,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@daisforge/ui/icons';

// Один и тот же контент чата живёт то в окне, то в левой панели лэйаута.
// Состояние чата (сообщения, черновик) поднято в Example: окно при
// закрытии размонтирует контент, и при переносе в панель контент
// перемонтируется, а состояние снаружи это переживает.

// Левый сайдбар страницы, нижняя иконка (каталог) — триггер AI-помощника
const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px',
  background: surfaceTransparentSecondary,
};

function Sidebar({ targetRef, onToggle }) {
  return (
    <div style={sidebarStyle}>
      <IconButton size="s" view="clear">
        <IconCalendarEventOutline size="s" />
      </IconButton>
      <IconButton size="s" view="clear">
        <IconDoneCircleOutline size="s" />
      </IconButton>
      <span ref={targetRef}>
        <IconButton size="s" view="clear" onClick={onToggle}>
          <IconCatalogOutline size="s" />
        </IconButton>
      </span>
    </div>
  );
}

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

          <Sidebar
            targetRef={targetRef}
            onToggle={() => setOpened(!opened)}
          />

          {/* остальная страница */}
          <div style={{ flex: 1 }} />
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
}`,o={control:!1,table:{disable:!0}},M={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,glow:o},ge={title:"Локальные компоненты/AiAgentPopup",component:b,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8}}},y={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:K},H={...y,height:"100vh"},me={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:P.x2,padding:P.x2,background:Q},fe={display:"flex",alignItems:"center",justifyContent:"space-between"},Ae={flex:"1 1 auto",minHeight:0,display:"flex",flexDirection:"column"},N={display:"flex",alignItems:"center"},he={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},be={background:Y,borderRadius:J.s,padding:"10px 12px",color:X},ye={padding:"0 12px",color:U},xe=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Свечение позади поля ввода рисует AiAgentInput, оно включено его пропом glow."},{text:"Проверь: позиция скролла и набранный черновик не теряются при перетаскивании окна."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение вырастет вслед за ним."},{text:"Отправь своё сообщение кнопкой, оно добавится в конец ленты."},{text:"Кнопка с иконкой панели в шапке переносит чат в левую панель, смотри стори «Переход в панель»."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}];function ve({onClose:s,onTogglePanel:t}){return e.jsxDEV("div",{style:fe,children:[e.jsxDEV("div",{style:N,children:[e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(re,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:648,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:647,columnNumber:9},this),e.jsxDEV(R,{variant:"BodyM",bold:!0,children:"Тема диалога"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:650,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:646,columnNumber:7},this),e.jsxDEV("div",{style:N,children:[e.jsxDEV(c,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(ne,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:656,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:655,columnNumber:9},this),e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(ae,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:659,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:658,columnNumber:9},this),e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(ue,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:662,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:661,columnNumber:9},this),e.jsxDEV(c,{size:"s",view:"clear",onClick:s,children:e.jsxDEV(le,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:665,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:664,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:654,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:645,columnNumber:5},this)}function G({messages:s,draft:t,glow:a,onDraftChange:u,onSend:n,onClose:l,onTogglePanel:p}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(ve,{onClose:l,onTogglePanel:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:693,columnNumber:7},this),e.jsxDEV("div",{style:Ae,children:[e.jsxDEV("div",{style:he,children:s.map((i,d)=>e.jsxDEV(R,{variant:"BodyS",style:i.system?ye:be,"data-no-drag":!0,children:i.text},d,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:699,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:697,columnNumber:9},this),e.jsxDEV(q,{glow:a,placeholder:"Спросите что-нибудь",value:t,onChange:i=>u(i.target.value),rightSlot:e.jsxDEV(c,{size:"xs",view:"clear",onClick:n,children:e.jsxDEV(ie,{size:"s",color:ee},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:720,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:718,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:712,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:694,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:692,columnNumber:5},this)}function L(){const[s,t]=r.useState(xe),[a,u]=r.useState("");return{messages:s,draft:a,setDraft:u,sendDraft:()=>{a.trim()&&(t(l=>[...l,{text:a.trim()}]),u(""))}}}function _({targetRef:s,onToggle:t}){return e.jsxDEV("div",{style:me,children:[e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(oe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:757,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:756,columnNumber:7},this),e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(te,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:760,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:759,columnNumber:7},this),e.jsxDEV("span",{ref:s,children:e.jsxDEV(c,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(se,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:764,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:763,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:762,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:755,columnNumber:5},this)}function F({fullHeight:s,glow:t,...a}){const u=r.useRef(null),n=r.useRef(null),[l,p]=r.useState(!0),i=L();return e.jsxDEV(V,{children:e.jsxDEV(T,{children:e.jsxDEV("div",{ref:n,style:s?H:y,children:[e.jsxDEV(_,{targetRef:u,onToggle:()=>p(!l)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:791,columnNumber:11},this),e.jsxDEV(b,{...a,opened:l,targetRef:u,frame:n,children:e.jsxDEV(G,{messages:i.messages,draft:i.draft,glow:t,onDraftChange:i.setDraft,onSend:i.sendDraft,onClose:()=>p(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:798,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:792,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:787,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:786,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:785,columnNumber:5},this)}function ke({fullHeight:s}){const t=r.useRef(null),a=r.useRef(null),u=r.useRef(null),[n,l]=r.useState("popup"),[p,i]=r.useState(!0),d=L(),[Z,$]=r.useState(8);r.useLayoutEffect(()=>{const A=u.current;if(!A)return;const v=()=>$(A.offsetWidth);v();const k=new ResizeObserver(v);return k.observe(A),()=>k.disconnect()},[]);const x=e.jsxDEV(G,{messages:d.messages,draft:d.draft,glow:!0,onDraftChange:d.setDraft,onSend:d.sendDraft,onClose:()=>{l("popup"),i(!1)},onTogglePanel:()=>l(n==="popup"?"panel":"popup")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:840,columnNumber:5},this);return e.jsxDEV(V,{children:e.jsxDEV(T,{children:e.jsxDEV("div",{ref:a,style:s?H:y,children:[e.jsxDEV("div",{style:{width:n==="panel"?376:0,overflow:"hidden",transition:"width 0.3s ease",flex:"none"},children:e.jsxDEV("div",{style:{width:360,height:"100%",padding:8},children:e.jsxDEV(W,{style:{height:"100%"},children:n==="panel"?x:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:870,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:869,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:861,columnNumber:11},this),e.jsxDEV("div",{ref:u,style:{display:"flex"},children:e.jsxDEV(_,{targetRef:t,onToggle:()=>i(!p)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:876,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:875,columnNumber:11},this),e.jsxDEV(b,{opened:n==="popup"&&p,targetRef:t,frame:a,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:Z},children:n==="popup"?x:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:881,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:857,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:856,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:855,columnNumber:5},this)}const g={name:"Simple",argTypes:M,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...h({code:ce,previewSource:"shown"}),render:(s,t)=>e.jsxDEV(F,{glow:!0,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8},fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:913,columnNumber:5},void 0)},m={name:"Playground",...h({code:pe,previewSource:"shown"}),render:(s,t)=>e.jsxDEV(F,{...s,fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:926,columnNumber:5},void 0)},f={name:"Переход в панель",argTypes:M,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...h({code:de,previewSource:"shown"}),render:(s,t)=>e.jsxDEV(ke,{fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:947,columnNumber:5},void 0)};var S,w,I;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(w=g.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var C,D,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentPopupExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var z,j,B;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=(j=f.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Pe=["Simple","Playground","PanelTransform"],Be=Object.freeze(Object.defineProperty({__proto__:null,PanelTransform:f,Playground:m,Simple:g,__namedExportsOrder:Pe,default:ge},Symbol.toStringTag,{value:"Module"}));export{Be as A};
