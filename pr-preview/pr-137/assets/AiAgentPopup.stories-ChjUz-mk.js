import{j as e,r}from"./react-CAOzMBF_.js";import{s as z}from"./storySourceDoc-tVKyHcEN.js";import{A as P,a,c as _}from"./AiAgentPopup-zRx4ytCb.js";import{s as $,c as K}from"./constants-DatVHdkd.js";import{cF as L,T as F,x as q,z as N,cQ as Q,cg as B}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{ci as U,bq as Z}from"./vendor-DmWczWMC.js";import{I as p}from"./@salutejs/sdds-finai-CKhMjg07.js";import{eB as J,kE as V,hZ as X,d7 as Y,sU as ee,sN as te,mp as ne,fa as oe}from"./@salutejs/plasma-icons-Do5ggeDI.js";const R=`import { useLayoutEffect, useRef, useState } from 'react';
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
`,T=n=>`
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
${n}
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
}`,se=`${R}${T(`          // Пока окно не умеет само расширяться при открытии раздела, стартуем
          // шире размера по умолчанию, чтобы чату хватило места рядом с разделом
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}`)}`,re=`${R}${T(`          targetGap={12}
          draggable
          resizable
          useStorage
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}`)}`,t={control:!1,table:{disable:!0}},ae={opened:t,frame:t,targetRef:t,targetGap:t,defaultPosition:t,positionState:t,onPositionChange:t,draggable:t,dragBoundary:t,dragIgnoreSelector:t,useStorage:t,resizable:t,defaultSize:t,onSizeChange:t,leftPanel:t,glow:t},ie={title:"Локальные компоненты/AiAgentPopup",component:P,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{targetRef:t,frame:t,positionState:t,onPositionChange:t,onSizeChange:t,opened:t,leftPanel:t,draggable:{control:"boolean"},resizable:{control:"boolean"},useStorage:{control:"boolean"},glow:{control:"boolean",description:"Свечение поля ввода (проп AiAgentInput в примере)"},targetGap:{control:"number"},dragIgnoreSelector:{control:"text"},defaultPosition:{control:"object"},defaultSize:{control:"object"},dragBoundary:{control:"object",description:"Отступы от краёв. В примере left отсчитывается от правого края сайдбара"}},args:{draggable:!0,resizable:!0,useStorage:!1,glow:!0,targetGap:12,defaultSize:{width:680,height:540},dragBoundary:{top:8,right:8,bottom:8,left:0}}},O={position:"relative",minHeight:"640px",display:"flex",overflow:"hidden",backgroundColor:L},le={...O,height:"100vh"},ce={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:$.x2,background:F},de={display:"flex",alignItems:"center",justifyContent:"space-between"},v={display:"flex",alignItems:"center"},ue={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40},ge={flex:"1 1 auto",minHeight:0,overflow:"auto",display:"flex",flexDirection:"column",gap:"8px",marginTop:"12px"},pe={background:Q,borderRadius:K.s,padding:"10px 12px",color:N},ye={padding:"0 12px",color:q},h={display:"flex",flexDirection:"column",gap:8,padding:12,height:"100%",overflow:"auto"},fe=[{text:"Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается."},{text:"А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком."},{text:"Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине."},{text:"Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик."},{text:"Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля."},{text:"Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи."},{text:"Анализирую ваш запрос…",system:!0}],he=[{key:"history",icon:e.jsx(V,{size:"s"}),title:"История",content:e.jsxs("div",{style:h,children:[e.jsx(a,{variant:"BodyS",children:"Вчера: вопросы по таблицам"}),e.jsx(a,{variant:"BodyS",children:"2 дня назад: настройка форм"}),e.jsx(a,{variant:"BodyS",children:"Неделю назад: обзор дашбордов"})]})},{key:"tasks",icon:e.jsx(X,{size:"s"}),title:"Задачи",content:e.jsxs("div",{style:h,children:[e.jsx(a,{variant:"BodyS",children:"Проверить отчёт"}),e.jsx(a,{variant:"BodyS",children:"Согласовать макет"})]})},{key:"calendar",icon:e.jsx(Y,{size:"s"}),title:"Календарь",content:e.jsxs("div",{style:h,children:[e.jsx(a,{variant:"BodyS",children:"Сегодня: созвон в 15:00"}),e.jsx(a,{variant:"BodyS",children:"Завтра: демо в 12:00"})]})}];function xe({onClose:n}){return e.jsxs("div",{style:de,children:[e.jsxs("div",{style:v,children:[e.jsx("span",{style:ue,children:e.jsx(te,{size:"s",color:B})}),e.jsx(a,{variant:"BodyM",bold:!0,children:"AI-Chat"})]}),e.jsxs("div",{style:v,children:[e.jsx(p,{size:"s",view:"clear",children:e.jsx(ne,{size:"s"})}),e.jsx(p,{size:"s",view:"clear",onClick:n,children:e.jsx(oe,{size:"s"})})]})]})}function Se({messages:n,draft:o,glow:s,onDraftChange:i,onSend:l,onClose:c}){return e.jsxs(e.Fragment,{children:[e.jsx(xe,{onClose:c}),e.jsx("div",{style:ge,children:n.map((d,y)=>e.jsx(a,{variant:"BodyS",style:d.system?ye:pe,"data-no-drag":!0,children:d.text},y))}),e.jsx(_,{glow:s,placeholder:"Спросите что-нибудь",value:o,onChange:d=>i(d.target.value),rightSlot:e.jsx(p,{size:"xs",view:"clear",onClick:l,children:e.jsx(ee,{size:"s",color:B})})})]})}function me({sidebarRef:n,targetRef:o,onToggle:s}){return e.jsx("div",{ref:n,style:ce,children:e.jsx("span",{ref:o,children:e.jsx(p,{size:"s",view:"clear",onClick:s,children:e.jsx(J,{size:"s"})})})})}function ve(n){const[o,s]=r.useState(0);return r.useLayoutEffect(()=>{const i=n.current;if(!i)return;const l=()=>s(i.offsetWidth);l();const c=new ResizeObserver(l);return c.observe(i),()=>c.disconnect()},[n]),o}function M({fullHeight:n,glow:o,dragBoundary:s,...i}){const l=r.useRef(null),c=r.useRef(null),d=r.useRef(null),y=ve(l),[x,S]=r.useState(!0),[k,D]=r.useState(null),[H,E]=r.useState(fe),[f,m]=r.useState(""),W=()=>{f.trim()&&(E(G=>[...G,{text:f.trim()}]),m(""))};return e.jsx(U,{children:e.jsx(Z,{children:e.jsxs("div",{ref:d,style:n?le:O,children:[e.jsx(me,{sidebarRef:l,targetRef:c,onToggle:()=>S(!x)}),e.jsx(P,{defaultSize:{width:680,height:540},...i,opened:x,targetRef:c,frame:d,leftPanel:{items:he,activeKey:k,onActiveKeyChange:D},dragBoundary:{top:8,right:8,bottom:8,...s,left:y+((s==null?void 0:s.left)??0)},children:e.jsx(Se,{messages:H,draft:f,glow:o,onDraftChange:m,onSend:W,onClose:()=>S(!1)})})]})})})}const u={name:"Simple",argTypes:ae,args:{},parameters:{controls:{disable:!0,exclude:/.*/},docs:{controls:{exclude:/.*/}}},...z({code:se,previewSource:"shown"}),render:(n,o)=>e.jsx(M,{glow:!0,fullHeight:o.viewMode==="story"})},g={name:"Playground",...z({code:re,previewSource:"shown"}),render:(n,o)=>e.jsx(M,{...n,fullHeight:o.viewMode==="story"})};var b,I,C;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(I=u.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var A,j,w;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Playground',
  ...storySourceDoc({
    code: playgroundCode,
    previewSource: 'shown'
  }),
  render: (args, context) => <AiAgentExample {...args} fullHeight={context.viewMode === 'story'} />
}`,...(w=(j=g.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const be=["Simple","Playground"],Re=Object.freeze(Object.defineProperty({__proto__:null,Playground:g,Simple:u,__namedExportsOrder:be,default:ie},Symbol.toStringTag,{value:"Module"}));export{Re as A};
