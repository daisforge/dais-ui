import{d as e,r as n}from"./react-D2T61mpp.js";import{s as z}from"./storySourceDoc-tVKyHcEN.js";import{A as B,c as $,a as r,d as K}from"./AiAgentPopup-BLFPDkW5.js";import{s as Z,c as F}from"./constants-rCJTDDk_.js";import{cE as Q,R as q,u as J,v as U,x as X,cQ as Y,ce as ee}from"./@salutejs/sdds-themes-DL6tmVfr.js";import{cj as oe,br as te}from"./vendor-DXdfnwad.js";import{I as p}from"./@salutejs/sdds-finai-DV8XcQV0.js";import{eB as se,kE as ie,hZ as ne,d7 as re,sS as ae,eZ as ue,og as le,mp as de,fa as ce}from"./@salutejs/plasma-icons-EjQFeqZJ.js";const T=`import { useLayoutEffect, useRef, useState } from 'react';
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
// Состояние чата и открытый раздел левой панели держим снаружи окна:
// контент переезжает между окном и панелью лэйаута без потерь.

// Левый сайдбар страницы с кнопкой AI-помощника: окно откроется справа
// от неё, targetRef висит на обёртке кнопки
const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  background: surfaceTransparentSecondary,
};

function Sidebar({ sidebarRef, targetRef, onToggle }) {
  return (
    <div ref={sidebarRef} style={sidebarStyle}>
      <span ref={targetRef}>
        <IconButton size="s" view="clear" onClick={onToggle}>
          <IconCatalogOutline size="s" />
        </IconButton>
      </span>
    </div>
  );
}

// Левая граница перетаскивания равна ширине сайдбара: окно не заезжает
// на него. Ширину следим наблюдателем, а не одним замером
function useSidebarWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const update = () => setWidth(node.offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return width;
}

const chatHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

// Кнопки не начинают перетаскивание, по ним работают обычные клики.
// Кнопка с иконкой панели переносит чат между окном и панелью лэйаута
function ChatHeader({ onClose, onTogglePanel }) {
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
        <IconButton size="s" view="clear" onClick={onTogglePanel}>
          <IconPanelSidebarLOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear">
          <IconMessageAddOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear" onClick={onClose}>
          <IconClose size="s" />
        </IconButton>
      </div>
    </div>
  );
}

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
      <ChatHeader onClose={onClose} onTogglePanel={onTogglePanel} />
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
        glow
        placeholder="Спросите что-нибудь"
        value={draft}
        onChange={(e) => onDraftChange(e.target.value)}
        rightSlot={
          <IconButton size="xs" view="clear" onClick={onSend}>
            {/* плазма-иконки умеют градиент в color: рисуют её маской */}
            <IconSendOutline size="s" color={textAccentGradient} />
          </IconButton>
        }
      />
    </>
  );
}

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

// Разделы левой панели окна: иконка в полосе, заголовок и контент раздела
const leftPanelItems = [
  {
    key: 'history',
    icon: <IconHistory size="s" />,
    indicator: <span style={indicatorDotStyle} />,
    title: 'История',
    content: (
      <div style={sectionBodyStyle}>
        <Typography variant="BodyS">Вчера: вопросы по таблицам</Typography>
        <Typography variant="BodyS">2 дня назад: настройка форм</Typography>
      </div>
    ),
  },
  {
    key: 'tasks',
    icon: <IconDoneCircleOutline size="s" />,
    title: 'Задачи',
    content: (
      <div style={sectionBodyStyle}>
        <Typography variant="BodyS">Проверить отчёт</Typography>
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
];
`,R=t=>`
function Example() {
  const sidebarRef = useRef(null);
  const targetRef = useRef(null);
  const sidebarWidth = useSidebarWidth(sidebarRef);
  // где сейчас живёт чат: в окне или в панели лэйаута
  const [view, setView] = useState('popup');
  const [opened, setOpened] = useState(false);
  // открытый раздел левой панели; null — видна полоса иконок
  const [activeSection, setActiveSection] = useState(null);
  const [messages, setMessages] = useState([
    { text: 'Привет! Я AI-помощник.' },
    { text: 'Анализирую ваш запрос…', system: true },
  ]);
  const [draft, setDraft] = useState('');

  const send = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { text: draft.trim() }]);
    setDraft('');
  };

  const leftPanel = {
    items: leftPanelItems,
    activeKey: activeSection,
    onActiveKeyChange: setActiveSection,
  };

  const chat = (
    <ChatContent
      messages={messages}
      draft={draft}
      onDraftChange={setDraft}
      onSend={send}
      onClose={() => {
        setView('popup');
        setOpened(false);
      }}
      onTogglePanel={() => setView(view === 'popup' ? 'panel' : 'popup')}
    />
  );

  // В лэйауте ширину панели задаёт страница: с открытым разделом панель
  // шире на 252 (раздел 300 вместо полосы иконок 48), чат не сужается
  const panelWidth = activeSection ? 612 : 360;

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar
            sidebarRef={sidebarRef}
            targetRef={targetRef}
            onToggle={() => setOpened(!opened)}
          />
          {/* Панель лэйаута с чатом выезжает правее сайдбара: её ширина
              анимируется. Рамка AiAgentSurface здесь входит в блочную модель */}
          <div
            style={{
              width: view === 'panel' ? panelWidth : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              flex: 'none',
            }}
          >
            <div
              style={{
                width: panelWidth,
                height: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                transition: 'width 0.3s ease',
              }}
            >
              <AiAgentSurface leftPanel={leftPanel} style={{ height: '100%' }}>
                {view === 'panel' ? chat : null}
              </AiAgentSurface>
            </div>
          </div>
        </div>

        <AiAgentPopup
          opened={view === 'popup' && opened}
          targetRef={targetRef}
          leftPanel={leftPanel}
${t}
        >
          {view === 'popup' ? chat : null}
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`,pe=`${T}${R(`          // Пока окно не умеет само расширяться при открытии раздела, стартуем
          // шире размера по умолчанию, чтобы чату хватило места рядом с разделом
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}`)}`,ge=`${T}${R(`          targetGap={12}
          draggable
          resizable
          useStorage
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}`)}`,o={control:!1,table:{disable:!0}},me={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,leftPanel:o,glow:o},fe={title:"Локальные компоненты/AiAgentPopup",component:B,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,leftPanel:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object",description:"Отступы от краёв. В примере left отсчитывается от правого края сайдбара"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:0}}},O={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:Q},he={...O,height:"100vh"},Ae={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:Z.x2,background:q},be={display:"flex",alignItems:"center",justifyContent:"space-between"},w={display:"flex",alignItems:"center"},ye={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},xe={background:Y,borderRadius:F.s,padding:"10px 12px",color:X},ve={padding:"0 12px",color:U},A={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"},ke={display:"block",width:6,height:6,borderRadius:"50%",background:J},Pe=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине."},{text:"Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик."},{text:"Кнопка с иконкой панели в шапке переносит чат в панель лэйаута и обратно, переписка и открытый раздел сохраняются."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вслед за кромкой поля."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}],Ne=[{key:"history",icon:e.jsxDEV(ie,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:551,columnNumber:11},void 0),indicator:e.jsxDEV("span",{style:ke},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:552,columnNumber:16},void 0),title:"История",content:e.jsxDEV("div",{style:A,children:[e.jsxDEV(r,{variant:"BodyS",children:"Вчера: вопросы по таблицам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:556,columnNumber:9},void 0),e.jsxDEV(r,{variant:"BodyS",children:"2 дня назад: настройка форм"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:557,columnNumber:9},void 0),e.jsxDEV(r,{variant:"BodyS",children:"Неделю назад: обзор дашбордов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:558,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:555,columnNumber:7},void 0)},{key:"tasks",icon:e.jsxDEV(ne,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:564,columnNumber:11},void 0),title:"Задачи",content:e.jsxDEV("div",{style:A,children:[e.jsxDEV(r,{variant:"BodyS",children:"Проверить отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:568,columnNumber:9},void 0),e.jsxDEV(r,{variant:"BodyS",children:"Согласовать макет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:569,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:567,columnNumber:7},void 0)},{key:"calendar",icon:e.jsxDEV(re,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:575,columnNumber:11},void 0),title:"Календарь",content:e.jsxDEV("div",{style:A,children:[e.jsxDEV(r,{variant:"BodyS",children:"Сегодня: созвон в 15:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:579,columnNumber:9},void 0),e.jsxDEV(r,{variant:"BodyS",children:"Завтра: демо в 12:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:580,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:578,columnNumber:7},void 0)}];function Se({onClose:t,onTogglePanel:s}){return e.jsxDEV("div",{style:be,children:[e.jsxDEV("div",{style:w,children:[e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(ue,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:599,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:598,columnNumber:9},this),e.jsxDEV(r,{variant:"BodyM",bold:!0,children:"Тема диалога"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:601,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:597,columnNumber:7},this),e.jsxDEV("div",{style:w,children:[e.jsxDEV(p,{size:"s",view:"clear",onClick:s,children:e.jsxDEV(le,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:607,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:606,columnNumber:9},this),e.jsxDEV(p,{size:"s",view:"clear",children:e.jsxDEV(de,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:610,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:609,columnNumber:9},this),e.jsxDEV(p,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(ce,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:613,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:612,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:605,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:596,columnNumber:5},this)}function we({messages:t,draft:s,glow:i,onDraftChange:a,onSend:u,onClose:l,onTogglePanel:f}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(Se,{onClose:l,onTogglePanel:f},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:641,columnNumber:7},this),e.jsxDEV("div",{style:ye,children:t.map((c,d)=>e.jsxDEV(r,{variant:"BodyS",style:c.system?ve:xe,"data-no-drag":!0,children:c.text},d,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:646,columnNumber:11},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:644,columnNumber:7},this),e.jsxDEV(K,{glow:i,placeholder:"Спросите что-нибудь",value:s,onChange:c=>a(c.target.value),rightSlot:e.jsxDEV(p,{size:"xs",view:"clear",onClick:u,children:e.jsxDEV(ae,{size:"s",color:ee},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:667,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:665,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:659,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:640,columnNumber:5},this)}function De({sidebarRef:t,targetRef:s,onToggle:i}){return e.jsxDEV("div",{ref:t,style:Ae,children:e.jsxDEV("span",{ref:s,children:e.jsxDEV(p,{size:"s",view:"clear",onClick:i,children:e.jsxDEV(se,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:690,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:689,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:688,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:687,columnNumber:5},this)}function Ie(t){const[s,i]=n.useState(0);return n.useLayoutEffect(()=>{const a=t.current;if(!a)return;const u=()=>i(a.offsetWidth);u();const l=new ResizeObserver(u);return l.observe(a),()=>l.disconnect()},[t]),s}const Ee=360,Ce=612;function M({fullHeight:t,glow:s,dragBoundary:i,...a}){const u=n.useRef(null),l=n.useRef(null),f=n.useRef(null),c=Ie(u),[d,b]=n.useState("popup"),[y,x]=n.useState(!0),[v,H]=n.useState(null),[W,_]=n.useState(Pe),[h,k]=n.useState(""),L=()=>{h.trim()&&(_(G=>[...G,{text:h.trim()}]),k(""))},P={items:Ne,activeKey:v,onActiveKeyChange:H},N=e.jsxDEV(we,{messages:W,draft:h,glow:s,onDraftChange:k,onSend:L,onClose:()=>{b("popup"),x(!1)},onTogglePanel:()=>b(d==="popup"?"panel":"popup")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:752,columnNumber:5},this),S=v?Ce:Ee;return e.jsxDEV(oe,{children:e.jsxDEV(te,{children:e.jsxDEV("div",{ref:f,style:t?he:O,children:[e.jsxDEV(De,{sidebarRef:u,targetRef:l,onToggle:()=>x(!y)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:778,columnNumber:11},this),e.jsxDEV("div",{style:{width:d==="panel"?S:0,overflow:"hidden",transition:"width 0.3s ease",flex:"none"},children:e.jsxDEV("div",{style:{width:S,height:"100%",padding:8,boxSizing:"border-box",transition:"width 0.3s ease"},children:e.jsxDEV($,{leftPanel:P,style:{height:"100%"},children:d==="panel"?N:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:800,columnNumber:15},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:791,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:783,columnNumber:11},this),e.jsxDEV(B,{defaultSize:{width:680,height:540},...a,opened:d==="popup"&&y,targetRef:l,frame:f,leftPanel:P,dragBoundary:{top:8,right:8,bottom:8,...i,left:c+((i==null?void 0:i.left)??0)},children:d==="popup"?N:null},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:805,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:774,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:773,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:772,columnNumber:5},this)}const g={name:"Simple",argTypes:me,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...z({code:pe,previewSource:"shown"}),render:(t,s)=>e.jsxDEV(M,{glow:!0,fullHeight:s.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:847,columnNumber:5},void 0)},m={name:"Playground",...z({code:ge,previewSource:"shown"}),render:(t,s)=>e.jsxDEV(M,{...t,fullHeight:s.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:855,columnNumber:5},void 0)};var D,I,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    code: mainCode,
    previewSource: 'shown'
  }),
  render: (_args, context) => <AiAgentExample glow fullHeight={context.viewMode === 'story'} />
}`,...(E=(I=g.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var C,j,V;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(V=(j=m.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const je=["Simple","Playground"],We=Object.freeze(Object.defineProperty({__proto__:null,Playground:m,Simple:g,__namedExportsOrder:je,default:fe},Symbol.toStringTag,{value:"Module"}));export{We as A};
