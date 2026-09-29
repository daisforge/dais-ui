import{d as e,r}from"./react-D2T61mpp.js";import{s as h}from"./storySourceDoc-tVKyHcEN.js";import{A as b,a as q,b as J}from"./AiAgentPopup-Dgbv3gkI.js";import{a as V}from"./AnalyticalWidget-CJ71wkdw.js";import{s as k,c as K}from"./constants-BPUyiI8r.js";import{cE as Q,R as U,v as X,x as Y,cP as ee,ce as oe}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{cj as R,br as T}from"./vendor-9g8l4WhJ.js";import{c as M,I as c}from"./@salutejs/sdds-finai-DjrWBgCD.js";import{sS as te,eZ as se,og as ie,mp as re,kE as ne,fa as ae}from"./@salutejs/plasma-icons-CsO0Zluk.js";const O=`import { useRef, useState } from 'react';
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
`,ue=`${O}
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
}`,le=`${O}
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
}`,pe=`import { useRef, useState } from 'react';
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
}`,o={control:!1,table:{disable:!0}},H={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,glow:o},de={title:"Локальные компоненты/AiAgentPopup",component:b,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8}}},x={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:Q},G={...x,height:"100vh"},L={display:"flex",flexDirection:"column",gap:k.x4,padding:k.x4,background:U},ce={display:"flex",alignItems:"center",justifyContent:"space-between"},ge={flex:"1 1 auto",minHeight:0,display:"flex",flexDirection:"column"},N={display:"flex",alignItems:"center"},me={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},fe={background:ee,borderRadius:K.s,padding:"10px 12px",color:Y},Ae={padding:"0 12px",color:X},he=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Свечение позади поля ввода рисует AiAgentInput, оно включено его пропом glow."},{text:"Проверь: позиция скролла и набранный черновик не теряются при перетаскивании окна."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение вырастет вслед за ним."},{text:"Отправь своё сообщение кнопкой, оно добавится в конец ленты."},{text:"Кнопка с иконкой панели в шапке переносит чат в левую панель, смотри стори «Переход в панель»."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}];function be({onClose:s,onTogglePanel:t}){return e.jsxDEV("div",{style:ce,children:[e.jsxDEV("div",{style:N,children:[e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(se,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:580,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:579,columnNumber:9},this),e.jsxDEV(V,{variant:"BodyM",bold:!0,children:"Тема диалога"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:582,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:578,columnNumber:7},this),e.jsxDEV("div",{style:N,children:[e.jsxDEV(c,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(ie,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:588,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:587,columnNumber:9},this),e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(re,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:591,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:590,columnNumber:9},this),e.jsxDEV(c,{size:"s",view:"clear",children:e.jsxDEV(ne,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:594,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:593,columnNumber:9},this),e.jsxDEV(c,{size:"s",view:"clear",onClick:s,children:e.jsxDEV(ae,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:597,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:596,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:586,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:577,columnNumber:5},this)}function _({messages:s,draft:t,glow:a,onDraftChange:u,onSend:n,onClose:l,onTogglePanel:p}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(be,{onClose:l,onTogglePanel:p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:625,columnNumber:7},this),e.jsxDEV("div",{style:ge,children:[e.jsxDEV("div",{style:me,children:s.map((i,d)=>e.jsxDEV(V,{variant:"BodyS",style:i.system?Ae:fe,"data-no-drag":!0,children:i.text},d,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:631,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:629,columnNumber:9},this),e.jsxDEV(J,{glow:a,placeholder:"Спросите что-нибудь",value:t,onChange:i=>u(i.target.value),rightSlot:e.jsxDEV(c,{size:"xs",view:"clear",onClick:n,children:e.jsxDEV(te,{size:"s",color:oe},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:652,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:650,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:644,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:626,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:624,columnNumber:5},this)}function F(){const[s,t]=r.useState(he),[a,u]=r.useState("");return{messages:s,draft:a,setDraft:u,sendDraft:()=>{a.trim()&&(t(l=>[...l,{text:a.trim()}]),u(""))}}}function $({fullHeight:s,glow:t,...a}){const u=r.useRef(null),n=r.useRef(null),[l,p]=r.useState(!0),i=F();return e.jsxDEV(R,{children:e.jsxDEV(T,{children:e.jsxDEV("div",{ref:n,style:s?G:x,children:[e.jsxDEV("div",{style:L,children:e.jsxDEV("span",{ref:u,children:e.jsxDEV(M,{size:"xs",onClick:()=>p(!l),children:"AI помощник"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:698,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:697,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:696,columnNumber:11},this),e.jsxDEV(b,{...a,opened:l,targetRef:u,frame:n,children:e.jsxDEV(_,{messages:i.messages,draft:i.draft,glow:t,onDraftChange:i.setDraft,onSend:i.sendDraft,onClose:()=>p(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:709,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:703,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:692,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:691,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:690,columnNumber:5},this)}function xe({fullHeight:s}){const t=r.useRef(null),a=r.useRef(null),u=r.useRef(null),[n,l]=r.useState("popup"),[p,i]=r.useState(!0),d=F(),[W,Z]=r.useState(8);r.useLayoutEffect(()=>{const A=u.current;if(!A)return;const v=()=>Z(A.offsetWidth);v();const P=new ResizeObserver(v);return P.observe(A),()=>P.disconnect()},[]);const y=e.jsxDEV(_,{messages:d.messages,draft:d.draft,glow:!0,onDraftChange:d.setDraft,onSend:d.sendDraft,onClose:()=>{l("popup"),i(!1)},onTogglePanel:()=>l(n==="popup"?"panel":"popup")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:751,columnNumber:5},this);return e.jsxDEV(R,{children:e.jsxDEV(T,{children:e.jsxDEV("div",{ref:a,style:s?G:x,children:[e.jsxDEV("div",{style:{width:n==="panel"?376:0,overflow:"hidden",transition:"width 0.3s ease",flex:"none"},children:e.jsxDEV("div",{style:{width:360,height:"100%",padding:8},children:e.jsxDEV(q,{style:{height:"100%"},children:n==="panel"?y:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:781,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:780,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:772,columnNumber:11},this),e.jsxDEV("div",{ref:u,style:L,children:e.jsxDEV("span",{ref:t,children:e.jsxDEV(M,{size:"xs",onClick:()=>i(!p),children:"AI помощник"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:788,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:787,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:786,columnNumber:11},this),e.jsxDEV(b,{opened:n==="popup"&&p,targetRef:t,frame:a,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:W},children:n==="popup"?y:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:793,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:768,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:767,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:766,columnNumber:5},this)}const g={name:"Simple",argTypes:H,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...h({code:ue,previewSource:"shown"}),render:(s,t)=>e.jsxDEV($,{glow:!0,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8},fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:825,columnNumber:5},void 0)},m={name:"Playground",...h({code:le,previewSource:"shown"}),render:(s,t)=>e.jsxDEV($,{...s,fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:838,columnNumber:5},void 0)},f={name:"Переход в панель",argTypes:H,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...h({code:pe,previewSource:"shown"}),render:(s,t)=>e.jsxDEV(xe,{fullHeight:t.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:859,columnNumber:5},void 0)};var S,w,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(w=g.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,I,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentPopupExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var j,B,z;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(B=f.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};const ye=["Simple","Playground","PanelTransform"],Ee=Object.freeze(Object.defineProperty({__proto__:null,PanelTransform:f,Playground:m,Simple:g,__namedExportsOrder:ye,default:de},Symbol.toStringTag,{value:"Module"}));export{Ee as A};
