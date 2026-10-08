import{d as e,r}from"./react-D2T61mpp.js";import{s as I}from"./storySourceDoc-tVKyHcEN.js";import{A as D,a as n,c as W}from"./AiAgentPopup-DP28yMpZ.js";import{s as G,c as _}from"./constants-rCJTDDk_.js";import{cE as $,R as K,v as L,x as F,cQ as Q,ce as C}from"./@salutejs/sdds-themes-DL6tmVfr.js";import{cj as Z,br as q}from"./vendor-DXdfnwad.js";import{I as g}from"./@salutejs/sdds-finai-DV8XcQV0.js";import{eB as J,kE as U,hZ as X,d7 as Y,sS as ee,sL as oe,mp as te,fa as se}from"./@salutejs/plasma-icons-EjQFeqZJ.js";const E=`import { useLayoutEffect, useRef, useState } from 'react';
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


// Разделы левой панели окна: иконка в полосе, заголовок и контент раздела
const leftPanelItems = [
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
  },
];
`,j=t=>`
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
            items: leftPanelItems,
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
}`,ie=`${E}${j(`          // Пока окно не умеет само расширяться при открытии раздела, стартуем
          // шире размера по умолчанию, чтобы чату хватило места рядом с разделом
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}`)}`,re=`${E}${j(`          targetGap={12}
          draggable
          resizable
          useStorage
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}`)}`,o={control:!1,table:{disable:!0}},ne={opened:o,frame:o,targetRef:o,targetGap:o,defaultPosition:o,positionState:o,onPositionChange:o,draggable:o,dragBoundary:o,dragIgnoreSelector:o,useStorage:o,resizable:o,defaultSize:o,onSizeChange:o,leftPanel:o,glow:o},ae={title:"Локальные компоненты/AiAgentPopup",component:D,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:o,frame:o,positionState:o,onPositionChange:o,onSizeChange:o,opened:o,leftPanel:o,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object",description:"Отступы от краёв. В примере left отсчитывается от правого края сайдбара"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:0}}},z={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:$},ue={...z,height:"100vh"},le={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:G.x2,background:K},de={display:"flex",alignItems:"center",justifyContent:"space-between"},x={display:"flex",alignItems:"center"},ce={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40},pe={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"12px"},ge={background:Q,borderRadius:_.s,padding:"10px 12px",color:F},me={padding:"0 12px",color:L},A={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"},fe=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине."},{text:"Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}],Ae=[{key:"history",icon:e.jsxDEV(U,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:498,columnNumber:11},void 0),title:"История",content:e.jsxDEV("div",{style:A,children:[e.jsxDEV(n,{variant:"BodyS",children:"Вчера: вопросы по таблицам"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:502,columnNumber:9},void 0),e.jsxDEV(n,{variant:"BodyS",children:"2 дня назад: настройка форм"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:503,columnNumber:9},void 0),e.jsxDEV(n,{variant:"BodyS",children:"Неделю назад: обзор дашбордов"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:504,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:501,columnNumber:7},void 0)},{key:"tasks",icon:e.jsxDEV(X,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:510,columnNumber:11},void 0),title:"Задачи",content:e.jsxDEV("div",{style:A,children:[e.jsxDEV(n,{variant:"BodyS",children:"Проверить отчёт"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:514,columnNumber:9},void 0),e.jsxDEV(n,{variant:"BodyS",children:"Согласовать макет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:515,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:513,columnNumber:7},void 0)},{key:"calendar",icon:e.jsxDEV(Y,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:521,columnNumber:11},void 0),title:"Календарь",content:e.jsxDEV("div",{style:A,children:[e.jsxDEV(n,{variant:"BodyS",children:"Сегодня: созвон в 15:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:525,columnNumber:9},void 0),e.jsxDEV(n,{variant:"BodyS",children:"Завтра: демо в 12:00"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:526,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:524,columnNumber:7},void 0)}];function he({onClose:t}){return e.jsxDEV("div",{style:de,children:[e.jsxDEV("div",{style:x,children:[e.jsxDEV("span",{style:ce,children:e.jsxDEV(oe,{size:"s",color:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:540,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:538,columnNumber:9},this),e.jsxDEV(n,{variant:"BodyM",bold:!0,children:"AI-Chat"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:542,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:537,columnNumber:7},this),e.jsxDEV("div",{style:x,children:[e.jsxDEV(g,{size:"s",view:"clear",children:e.jsxDEV(te,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:548,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:547,columnNumber:9},this),e.jsxDEV(g,{size:"s",view:"clear",onClick:t,children:e.jsxDEV(se,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:551,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:550,columnNumber:9},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:546,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:536,columnNumber:5},this)}function ye({messages:t,draft:s,glow:i,onDraftChange:a,onSend:u,onClose:l}){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(he,{onClose:l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:577,columnNumber:7},this),e.jsxDEV("div",{style:pe,children:t.map((d,m)=>e.jsxDEV(n,{variant:"BodyS",style:d.system?me:ge,"data-no-drag":!0,children:d.text},m,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:582,columnNumber:11},this))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:580,columnNumber:7},this),e.jsxDEV(W,{glow:i,placeholder:"Спросите что-нибудь",value:s,onChange:d=>a(d.target.value),rightSlot:e.jsxDEV(g,{size:"xs",view:"clear",onClick:u,children:e.jsxDEV(ee,{size:"s",color:C},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:603,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:601,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:595,columnNumber:7},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:576,columnNumber:5},this)}function be({sidebarRef:t,targetRef:s,onToggle:i}){return e.jsxDEV("div",{ref:t,style:le,children:e.jsxDEV("span",{ref:s,children:e.jsxDEV(g,{size:"s",view:"clear",onClick:i,children:e.jsxDEV(J,{size:"s"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:626,columnNumber:11},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:625,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:624,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:623,columnNumber:5},this)}function xe(t){const[s,i]=r.useState(0);return r.useLayoutEffect(()=>{const a=t.current;if(!a)return;const u=()=>i(a.offsetWidth);u();const l=new ResizeObserver(u);return l.observe(a),()=>l.disconnect()},[t]),s}function V({fullHeight:t,glow:s,dragBoundary:i,...a}){const u=r.useRef(null),l=r.useRef(null),d=r.useRef(null),m=xe(u),[h,y]=r.useState(!0),[B,R]=r.useState(null),[T,O]=r.useState(fe),[f,b]=r.useState(""),M=()=>{f.trim()&&(O(H=>[...H,{text:f.trim()}]),b(""))};return e.jsxDEV(Z,{children:e.jsxDEV(q,{children:e.jsxDEV("div",{ref:d,style:t?ue:z,children:[e.jsxDEV(be,{sidebarRef:u,targetRef:l,onToggle:()=>y(!h)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:684,columnNumber:11},this),e.jsxDEV(D,{defaultSize:{width:680,height:540},...a,opened:h,targetRef:l,frame:d,leftPanel:{items:Ae,activeKey:B,onActiveKeyChange:R},dragBoundary:{top:8,right:8,bottom:8,...i,left:m+((i==null?void 0:i.left)??0)},children:e.jsxDEV(ye,{messages:T,draft:f,glow:s,onDraftChange:b,onSend:M,onClose:()=>y(!1)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:710,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:689,columnNumber:11},this)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:680,columnNumber:9},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:679,columnNumber:7},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:678,columnNumber:5},this)}const c={name:"Simple",argTypes:ne,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...I({code:ie,previewSource:"shown"}),render:(t,s)=>e.jsxDEV(V,{glow:!0,fullHeight:s.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:742,columnNumber:5},void 0)},p={name:"Playground",...I({code:re,previewSource:"shown"}),render:(t,s)=>e.jsxDEV(V,{...t,fullHeight:s.viewMode==="story"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx",lineNumber:750,columnNumber:5},void 0)};var k,v,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var P,S,w;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ke=["Simple","Playground"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Playground:p,Simple:c,__namedExportsOrder:ke,default:ae},Symbol.toStringTag,{value:"Module"}));export{Ee as A};
