import{d as e,r}from"./react-D2T61mpp.js";import{s as D}from"./storySourceDoc-tVKyHcEN.js";import{A as C,a as i,c as _}from"./AiAgentPopup-B-jiqUix.js";import{s as W,c as G}from"./constants-ChwOYBdp.js";import{db as L,d7 as $,x as K,z as F,dy as X,dz as E}from"./@sddsjs/sdds_finai-Clnx3I02.js";import{cj as Z,br as q}from"./vendor-aFf5tYwy.js";import{I as g}from"./@salutejs/sdds-finai-DHWxFeH-.js";import{eB as J,sV as Q,kE as U,hZ as Y,d7 as ee,u2 as oe,t2 as te,vX as se,sO as ie,mp as ne,fa as re}from"./@salutejs/plasma-icons-CfbkFxsV.js";const j=`import { useLayoutEffect, useRef, useState } from 'react';
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

// Весь контент окна на стороне потребителя, ниже один из вариантов сборки.
// Состояние чата и открытый раздел левой панели держим снаружи окна:
// закрытие окна размонтирует контент, а состояние снаружи это переживает.

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

// Иконка у заголовка не кликается, но стоит в том же квадрате 40x40,
// что и кнопки шапки
const chatTitleIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
};

const chatMessagesStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '12px',
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
        <span style={chatTitleIconStyle}>
          <IconSearchAIOutline size="s" color={textAccentGradient} />
        </span>
        <Typography variant="BodyM" bold>
          AI-Chat
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
}) {
  return (
    <>
      <ChatHeader onClose={onClose} />
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


// Пункты левой панели: разделы сверху, выключенный раздел, снизу раздел
// настроек и кнопка-действие без раздела (только onClick)
const getLeftPanelItems = (onClearChat) => [
  {
    key: 'history',
    icon: <IconHistory size="s" />,
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
  },  {
    key: 'favorites',
    icon: <IconStar size="s" />,
    title: 'Избранное',
    disabled: true,
    content: (
      <div style={sectionBodyStyle}>
        <Typography variant="BodyS">Избранных ответов пока нет</Typography>
      </div>
    ),
  },
  {
    key: 'settings',
    icon: <IconSettingsOutline size="s" />,
    title: 'Настройки',
    placement: 'bottom',
    content: (
      <div style={sectionBodyStyle}>
        <Typography variant="BodyS">Язык ответов: русский</Typography>
      </div>
    ),
  },
  {
    key: 'clear',
    icon: <IconTrashOutline size="s" />,
    placement: 'bottom',
    onClick: onClearChat,
  },
];
`,z=t=>`
function Example() {
  const sidebarRef = useRef(null);
  const targetRef = useRef(null);
  const sidebarWidth = useSidebarWidth(sidebarRef);
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
        </div>

        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          leftPanel={{
            items: getLeftPanelItems(() => setMessages([])),
            activeKey: activeSection,
            onActiveKeyChange: setActiveSection,
          }}
${t}
        >
          <ChatContent
            messages={messages}
            draft={draft}
            onDraftChange={setDraft}
            onSend={send}
            onClose={() => setOpened(false)}
          />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`,ae=`${j}${z(`          // Пока окно не умеет само расширяться при открытии раздела, стартуем
          // шире размера по умолчанию, чтобы чату хватило места рядом с разделом
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}`)}`,ue=`${j}${z(`          targetGap={12}
          draggable
          resizable
          useStorage
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}`)}`,o={control:!1,table:{disable:!0}},le={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,leftPanel:o,glow:o},de={title:"Локальные компоненты/AiAgentPopup",component:C,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,leftPanel:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object",description:"Отступы от краёв. В примере left отсчитывается от правого края сайдбара"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:0}}},V={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:L},ce={...V,height:"100vh"},pe={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:W.x2,background:$},me={display:"flex",alignItems:"center",justifyContent:"space-between"},k={display:"flex",alignItems:"center"},ge={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40},fe={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"12px"},Ae={background:X,borderRadius:G.s,padding:"10px 12px",color:F},ye={padding:"0 12px",color:K},c={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"},he=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине."},{text:"Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик. Избранное выключено, внизу настройки и корзина: она очищает чат без открытия раздела."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}],be=t=>[{key:"history",icon:e.jsxDEV(U,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:534,columnNumber:11},void 0),title:"История",content:e.jsxDEV("div",{style:c,children:[e.jsxDEV(i,{variant:"BodyS",children:"Вчера: вопросы по таблицам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:538,columnNumber:9},void 0),e.jsxDEV(i,{variant:"BodyS",children:"2 дня назад: настройка форм"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:539,columnNumber:9},void 0),e.jsxDEV(i,{variant:"BodyS",children:"Неделю назад: обзор дашбордов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:540,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:537,columnNumber:7},void 0)},{key:"tasks",icon:e.jsxDEV(Y,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:546,columnNumber:11},void 0),title:"Задачи",content:e.jsxDEV("div",{style:c,children:[e.jsxDEV(i,{variant:"BodyS",children:"Проверить отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:550,columnNumber:9},void 0),e.jsxDEV(i,{variant:"BodyS",children:"Согласовать макет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:551,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:549,columnNumber:7},void 0)},{key:"calendar",icon:e.jsxDEV(ee,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:557,columnNumber:11},void 0),title:"Календарь",content:e.jsxDEV("div",{style:c,children:[e.jsxDEV(i,{variant:"BodyS",children:"Сегодня: созвон в 15:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:561,columnNumber:9},void 0),e.jsxDEV(i,{variant:"BodyS",children:"Завтра: демо в 12:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:562,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:560,columnNumber:7},void 0)},{key:"favorites",icon:e.jsxDEV(oe,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:568,columnNumber:11},void 0),title:"Избранное",disabled:!0,content:e.jsxDEV("div",{style:c,children:e.jsxDEV(i,{variant:"BodyS",children:"Избранных ответов пока нет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:573,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:572,columnNumber:7},void 0)},{key:"settings",icon:e.jsxDEV(te,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:579,columnNumber:11},void 0),title:"Настройки",placement:"bottom",content:e.jsxDEV("div",{style:c,children:e.jsxDEV(i,{variant:"BodyS",children:"Язык ответов: русский"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:584,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:583,columnNumber:7},void 0)},{key:"clear",icon:e.jsxDEV(se,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:590,columnNumber:11},void 0),placement:"bottom",onClick:t}];function xe({onClose:t}){return e.jsxDEV("div",{style:me,children:[e.jsxDEV("div",{style:k,children:[e.jsxDEV("span",{style:ge,children:e.jsxDEV(ie,{size:"s",color:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:604,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:602,columnNumber:9},this),e.jsxDEV(i,{variant:"BodyM",bold:!0,children:"AI-Chat"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:606,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:601,columnNumber:7},this),e.jsxDEV("div",{style:k,children:[e.jsxDEV(g,{size:"s",view:"clear",children:e.jsxDEV(ne,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:612,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:611,columnNumber:9},this),e.jsxDEV(g,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(re,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:615,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:614,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:610,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:600,columnNumber:5},this)}function ke({messages:t,draft:s,glow:n,onDraftChange:a,onSend:u,onClose:l}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(xe,{onClose:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:641,columnNumber:7},this),e.jsxDEV("div",{style:fe,children:t.map((d,f)=>e.jsxDEV(i,{variant:"BodyS",style:d.system?ye:Ae,"data-no-drag":!0,children:d.text},f,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:646,columnNumber:11},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:644,columnNumber:7},this),e.jsxDEV(_,{glow:n,placeholder:"Спросите что-нибудь",value:s,onChange:d=>a(d.target.value),rightSlot:e.jsxDEV(g,{size:"xs",view:"clear",onClick:u,children:e.jsxDEV(Q,{size:"s",color:E},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:667,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:665,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:659,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:640,columnNumber:5},this)}function ve({sidebarRef:t,targetRef:s,onToggle:n}){return e.jsxDEV("div",{ref:t,style:pe,children:e.jsxDEV("span",{ref:s,children:e.jsxDEV(g,{size:"s",view:"clear",onClick:n,children:e.jsxDEV(J,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:690,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:689,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:688,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:687,columnNumber:5},this)}function Ne(t){const[s,n]=r.useState(0);return r.useLayoutEffect(()=>{const a=t.current;if(!a)return;const u=()=>n(a.offsetWidth);u();const l=new ResizeObserver(u);return l.observe(a),()=>l.disconnect()},[t]),s}function B({fullHeight:t,glow:s,dragBoundary:n,...a}){const u=r.useRef(null),l=r.useRef(null),d=r.useRef(null),f=Ne(u),[y,h]=r.useState(!0),[T,R]=r.useState(null),[O,b]=r.useState(he),[A,x]=r.useState(""),M=()=>{A.trim()&&(b(H=>[...H,{text:A.trim()}]),x(""))};return e.jsxDEV(Z,{children:e.jsxDEV(q,{children:e.jsxDEV("div",{ref:d,style:t?ce:V,children:[e.jsxDEV(ve,{sidebarRef:u,targetRef:l,onToggle:()=>h(!y)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:748,columnNumber:11},this),e.jsxDEV(C,{defaultSize:{width:680,height:540},...a,opened:y,targetRef:l,frame:d,leftPanel:{items:be(()=>b([])),activeKey:T,onActiveKeyChange:R},dragBoundary:{top:8,right:8,bottom:8,...n,left:f+((n==null?void 0:n.left)??0)},children:e.jsxDEV(ke,{messages:O,draft:A,glow:s,onDraftChange:x,onSend:M,onClose:()=>h(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:774,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:753,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:744,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:743,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:742,columnNumber:5},this)}const p={name:"Simple",argTypes:le,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...D({code:ae,previewSource:"shown"}),render:(t,s)=>e.jsxDEV(B,{glow:!0,fullHeight:s.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:806,columnNumber:5},void 0)},m={name:"Playground",...D({code:ue,previewSource:"shown"}),render:(t,s)=>e.jsxDEV(B,{...t,fullHeight:s.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:814,columnNumber:5},void 0)};var v,N,P;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var S,w,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const Pe=["Simple","Playground"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Playground:m,Simple:p,__namedExportsOrder:Pe,default:de},Symbol.toStringTag,{value:"Module"}));export{Ve as A};
