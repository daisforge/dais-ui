import{d as e,r}from"./react-D2T61mpp.js";import{s as y}from"./storySourceDoc-tVKyHcEN.js";import{A as b,c as ee,a as d,d as oe}from"./AiAgentPopup-DiO3EcTT.js";import{s as V,c as te}from"./constants-BPUyiI8r.js";import{cE as se,R as ie,v as re,x as ne,cP as ae,ce as ue,u as le}from"./@salutejs/sdds-themes-fAtV8uGh.js";import{cj as P,br as N}from"./vendor-9g8l4WhJ.js";import{I as p}from"./@salutejs/sdds-finai-DGclA7qp.js";import{d7 as q,hZ as J,eB as ce,sS as de,kE as Q,eZ as pe,og as ge,mp as me,fa as fe}from"./@salutejs/plasma-icons-CsO0Zluk.js";const S=`import { useRef, useState } from 'react';
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
  textNegative,
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
`,Ae=`${S}
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
}`,he=`${S}
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
}`,ye=`import { useRef, useState } from 'react';
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
          {/* Сайдбар с кнопками всегда самый левый элемент страницы */}
          <Sidebar targetRef={targetRef} onToggle={() => setOpened(!opened)} />

          {/* Панель с чатом выезжает правее сайдбара: её ширина
              анимируется, поэтому переход плавный. Рамка AiAgentSurface
              в варианте embedded входит в блочную модель: отступы лэйаута
              идут от края рамки, absolute позиционирования нет */}
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
}`,be=`${S}
const sectionBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '12px',
  height: '100%',
  overflow: 'auto',
};

const indicatorDotStyle = {
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: textNegative,
};

function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(false);
  // активный раздел левой панели; null — открыта полоса иконок
  const [activeSection, setActiveSection] = useState(null);

  const leftPanel = {
    activeKey: activeSection,
    onActiveKeyChange: setActiveSection,
    items: [
      {
        key: 'history',
        icon: <IconHistory size="s" />,
        indicator: <span style={indicatorDotStyle} />,
        title: 'История',
        content: (
          <div style={sectionBodyStyle}>
            <Typography variant="BodyS">Вчера — вопросы по таблицам</Typography>
            <Typography variant="BodyS">2 дня назад — настройка форм</Typography>
          </div>
        ),
      },
      {
        key: 'calendar',
        icon: <IconCalendarEventOutline size="s" />,
        title: 'Календарь',
        content: (
          <div style={sectionBodyStyle}>
            <Typography variant="BodyS">Сегодня: созвон в 15:00</Typography>
          </div>
        ),
      },
    ],
  };

  return (
    <SSRProvider>
      <PopupProvider>
        <Sidebar targetRef={targetRef} onToggle={() => setOpened(!opened)} />
        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          leftPanel={leftPanel}
          defaultSize={{ width: 680, height: 520 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <ChatContent onClose={() => setOpened(false)} />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`,t={control:!1,table:{disable:!0}},w={opened:t,frame:t,targetRef:t,targetGap:t,defaultPosition:t,positionState:t,onPositionChange:t,draggable:t,dragBoundary:t,dragIgnoreSelector:t,useStorage:t,resizable:t,defaultSize:t,onSizeChange:t,glow:t},xe={title:"Локальные компоненты/AiAgentPopup",component:b,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:t,frame:t,positionState:t,onPositionChange:t,onSizeChange:t,opened:t,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8}}},x={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:se},D={...x,height:"100vh"},ve={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:V.x2,padding:V.x2,background:ie},ke={display:"flex",alignItems:"center",justifyContent:"space-between"},Pe={flex:"1 1 auto",minHeight:0,display:"flex",flexDirection:"column"},R={display:"flex",alignItems:"center"},Ne={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},Se={background:ae,borderRadius:te.s,padding:"10px 12px",color:ne},we={padding:"0 12px",color:re},De=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Свечение позади поля ввода рисует AiAgentInput, оно включено его пропом glow."},{text:"Проверь: позиция скролла и набранный черновик не теряются при перетаскивании окна."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение вырастет вслед за ним."},{text:"Отправь своё сообщение кнопкой, оно добавится в конец ленты."},{text:"Кнопка с иконкой панели в шапке переносит чат в левую панель, смотри стори «Переход в панель»."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}];function Ie({onClose:s,onTogglePanel:o}){return e.jsxDEV("div",{style:ke,children:[e.jsxDEV("div",{style:R,children:[e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(pe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:719,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:718,columnNumber:9},this),e.jsxDEV(d,{variant:"BodyM",bold:!0,children:"Тема диалога"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:721,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:717,columnNumber:7},this),e.jsxDEV("div",{style:R,children:[e.jsxDEV(p,{size:"s",view:"clear",onClick:o,children:e.jsxDEV(ge,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:727,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:726,columnNumber:9},this),e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(me,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:730,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:729,columnNumber:9},this),e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(Q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:733,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:732,columnNumber:9},this),e.jsxDEV(p,{size:"s",view:"clear",onClick:s,children:e.jsxDEV(fe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:736,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:735,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:725,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:716,columnNumber:5},this)}function I({messages:s,draft:o,glow:a,onDraftChange:u,onSend:n,onClose:l,onTogglePanel:c}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(Ie,{onClose:l,onTogglePanel:c},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:764,columnNumber:7},this),e.jsxDEV("div",{style:Pe,children:[e.jsxDEV("div",{style:Ne,children:s.map((i,g)=>e.jsxDEV(d,{variant:"BodyS",style:i.system?we:Se,"data-no-drag":!0,children:i.text},g,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:770,columnNumber:13},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:768,columnNumber:9},this),e.jsxDEV(oe,{glow:a,placeholder:"Спросите что-нибудь",value:o,onChange:i=>u(i.target.value),rightSlot:e.jsxDEV(p,{size:"xs",view:"clear",onClick:n,children:e.jsxDEV(de,{size:"s",color:ue},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:791,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:789,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:783,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:765,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:763,columnNumber:5},this)}function C(){const[s,o]=r.useState(De),[a,u]=r.useState("");return{messages:s,draft:a,setDraft:u,sendDraft:()=>{a.trim()&&(o(l=>[...l,{text:a.trim()}]),u(""))}}}function E({targetRef:s,onToggle:o}){return e.jsxDEV("div",{style:ve,children:[e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:828,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:827,columnNumber:7},this),e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(J,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:831,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:830,columnNumber:7},this),e.jsxDEV("span",{ref:s,children:e.jsxDEV(p,{size:"s",view:"clear",onClick:o,children:e.jsxDEV(ce,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:835,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:834,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:833,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:826,columnNumber:5},this)}function U({fullHeight:s,glow:o,...a}){const u=r.useRef(null),n=r.useRef(null),[l,c]=r.useState(!0),i=C();return e.jsxDEV(P,{children:e.jsxDEV(N,{children:e.jsxDEV("div",{ref:n,style:s?D:x,children:[e.jsxDEV(E,{targetRef:u,onToggle:()=>c(!l)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:862,columnNumber:11},this),e.jsxDEV(b,{...a,opened:l,targetRef:u,frame:n,children:e.jsxDEV(I,{messages:i.messages,draft:i.draft,glow:o,onDraftChange:i.setDraft,onSend:i.sendDraft,onClose:()=>c(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:869,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:863,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:858,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:857,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:856,columnNumber:5},this)}function Ce({fullHeight:s}){const o=r.useRef(null),a=r.useRef(null),u=r.useRef(null),[n,l]=r.useState("popup"),[c,i]=r.useState(!0),g=C(),[X,Y]=r.useState(8);r.useLayoutEffect(()=>{const v=u.current;if(!v)return;const z=()=>Y(v.offsetWidth);z();const B=new ResizeObserver(z);return B.observe(v),()=>B.disconnect()},[]);const j=e.jsxDEV(I,{messages:g.messages,draft:g.draft,glow:!0,onDraftChange:g.setDraft,onSend:g.sendDraft,onClose:()=>{l("popup"),i(!1)},onTogglePanel:()=>l(n==="popup"?"panel":"popup")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:911,columnNumber:5},this);return e.jsxDEV(P,{children:e.jsxDEV(N,{children:e.jsxDEV("div",{ref:a,style:s?D:x,children:[e.jsxDEV("div",{ref:u,style:{display:"flex"},children:e.jsxDEV(E,{targetRef:o,onToggle:()=>i(!c)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:935,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:934,columnNumber:11},this),e.jsxDEV("div",{style:{width:n==="panel"?376:0,overflow:"hidden",transition:"width 0.3s ease",flex:"none"},children:e.jsxDEV("div",{style:{width:360,height:"100%",padding:8},children:e.jsxDEV(ee,{style:{height:"100%"},children:n==="panel"?j:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:949,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:948,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:940,columnNumber:11},this),e.jsxDEV(b,{opened:n==="popup"&&c,targetRef:o,frame:a,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:X},children:n==="popup"?j:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:954,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:928,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:927,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:926,columnNumber:5},this)}const k={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"},Ee={display:"block",width:6,height:6,borderRadius:"50%",background:le};function je({fullHeight:s}){const o=r.useRef(null),a=r.useRef(null),[u,n]=r.useState(!0),[l,c]=r.useState(null),i=C(),g={activeKey:l,onActiveKeyChange:c,items:[{key:"history",icon:e.jsxDEV(Q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1001,columnNumber:15},this),indicator:e.jsxDEV("span",{style:Ee},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1002,columnNumber:20},this),title:"История",content:e.jsxDEV("div",{style:k,children:[e.jsxDEV(d,{variant:"BodyS",children:"Вчера — вопросы по таблицам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1006,columnNumber:13},this),e.jsxDEV(d,{variant:"BodyS",children:"2 дня назад — настройка форм"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1007,columnNumber:13},this),e.jsxDEV(d,{variant:"BodyS",children:"Неделю назад — обзор дашбордов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1010,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1005,columnNumber:11},this)},{key:"tasks",icon:e.jsxDEV(J,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1018,columnNumber:15},this),title:"Задачи",content:e.jsxDEV("div",{style:k,children:[e.jsxDEV(d,{variant:"BodyS",children:"Проверить отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1022,columnNumber:13},this),e.jsxDEV(d,{variant:"BodyS",children:"Согласовать макет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1023,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1021,columnNumber:11},this)},{key:"calendar",icon:e.jsxDEV(q,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1029,columnNumber:15},this),title:"Календарь",content:e.jsxDEV("div",{style:k,children:[e.jsxDEV(d,{variant:"BodyS",children:"Сегодня: созвон в 15:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1033,columnNumber:13},this),e.jsxDEV(d,{variant:"BodyS",children:"Завтра: демо в 12:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1034,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1032,columnNumber:11},this)}]};return e.jsxDEV(P,{children:e.jsxDEV(N,{children:e.jsxDEV("div",{ref:a,style:s?D:x,children:[e.jsxDEV(E,{targetRef:o,onToggle:()=>n(!u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1048,columnNumber:11},this),e.jsxDEV(b,{opened:u,targetRef:o,frame:a,leftPanel:g,defaultSize:{width:680,height:520},dragBoundary:{top:8,right:8,bottom:8,left:8},children:e.jsxDEV(I,{messages:i.messages,draft:i.draft,glow:!0,onDraftChange:i.setDraft,onSend:i.sendDraft,onClose:()=>n(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1057,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1049,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1044,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1043,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1042,columnNumber:5},this)}const m={name:"Simple",argTypes:w,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...y({code:Ae,previewSource:"shown"}),render:(s,o)=>e.jsxDEV(U,{glow:!0,defaultSize:{width:360,height:420},dragBoundary:{top:8,right:8,bottom:8,left:8},fullHeight:o.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1089,columnNumber:5},void 0)},f={name:"Playground",...y({code:he,previewSource:"shown"}),render:(s,o)=>e.jsxDEV(U,{...s,fullHeight:o.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1102,columnNumber:5},void 0)},A={name:"Переход в панель",argTypes:w,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...y({code:ye,previewSource:"shown"}),render:(s,o)=>e.jsxDEV(Ce,{fullHeight:o.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1123,columnNumber:5},void 0)},h={name:"С левой панелью",argTypes:w,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...y({code:be,previewSource:"shown"}),render:(s,o)=>e.jsxDEV(je,{fullHeight:o.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:1144,columnNumber:5},void 0)};var T,O,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(O=m.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var H,L,_;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentPopupExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(_=(L=f.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var G,W,F;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(F=(W=A.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var K,$,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'С левой панелью',
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
    code: leftPanelCode,
    previewSource: 'shown'
  }),
  render: (_args, context) => <WithLeftPanelExample fullHeight={context.viewMode === 'story'} />
}`,...(Z=($=h.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};const ze=["Simple","Playground","PanelTransform","WithLeftPanel"],_e=Object.freeze(Object.defineProperty({__proto__:null,PanelTransform:A,Playground:f,Simple:m,WithLeftPanel:h,__namedExportsOrder:ze,default:xe},Symbol.toStringTag,{value:"Module"}));export{_e as A};
