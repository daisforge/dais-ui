import{r as R,d as e}from"./react-D2T61mpp.js";import{s as r}from"./storySourceDoc-tVKyHcEN.js";import{L as l,g as u4,u as e4,a as o4,b as r4,c as n4,d as s4,e as j,f as t4,h as i4,i as a4}from"./Logger-GaxYq-OT.js";import{t as p,l as Zu,a as d4}from"./@salutejs/sdds-finai-DL_QtMGJ.js";import{uM as g4,fj as Ju}from"./@salutejs/plasma-icons-DTttYHJN.js";const a=(u,o,n)=>new Date(2025,0,1,u,o,n),l4=["System.Runtime.InteropServices.COMException (0x800A03EC):",'"The file could not be accessed. The system cannot find the path specified. (Exception from HRESULT: 0x800A03EC)"','Nested Inner Exception: System.IO.IOException: "The process cannot access the file',"'\\\\nas01\\shared\\reports\\Q3_Financial_Summary_TEMP.xlsx' because it is being used by another process.",'The sharing violation occurred while attempting to flush the binary stream to the physical disk."'].join(`
`),g=[{id:"excel",status:"error",title:"Ошибка скачивания Excel",defaultOpen:!0,items:[{id:"excel-1",status:"error",title:"Не удалось получить доступ к файлу. Системе не удаётся найти указанный путь",description:l4,traceId:"4bf92f3577b34da6a3ce929d0e0e4736",code:"F23",date:a(18,7,32)},{id:"excel-2",status:"error",title:"Файл занят другим процессом",code:"F24",date:a(18,7,33)}]},{id:"validation",status:"warning",title:"Проверка данных",items:[{id:"validation-1",status:"warning",title:"Пропущено 3 пустые строки",date:a(18,5,10)},{id:"validation-2",status:"warning",title:"Дубликаты ключей объединены",description:"Объединено 12 строк по ключу «Подразделение + Статья»",date:a(18,5,11)}]},{id:"saved",status:"success",title:"Сохранение",items:[{id:"saved-1",status:"success",title:"Изменения сохранены",date:a(18,1,0)}]},{id:"info",status:"info",title:"Информация",items:[{id:"info-1",status:"info",title:"Обновлён справочник подразделений",date:a(17,59,3)}]}],d=[{id:"p1",status:"error",title:"Не удалось загрузить справочник",description:"GET /api/dictionaries/42 вернул 502",traceId:"9a8b7c6d5e4f",code:"F23",date:a(9,0,0)},{id:"p2",status:"warning",title:"Часть данных устарела",date:a(9,1,0)},{id:"p3",status:"success",title:"Отчёт сформирован",date:a(9,2,0)},{id:"p4",status:"info",title:"Подключено к рабочей книге",date:a(9,3,0)}],V=["info","error","warning","success"],c4=Array.from({length:40},(u,o)=>({id:`many-${o}`,status:V[o%V.length]??"info",title:`Сообщение №${o+1}`,description:o%3===0?`Подробности сообщения №${o+1}`:void 0,date:a(12,Math.floor(o/60),o%60)})),m4=/^[A-Za-z_$][\w$]*$/,z=u=>`'${u.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n")}'`,P=(u,o=0)=>{const n="  ".repeat(o+1),s="  ".repeat(o);if(u===null)return"null";if(typeof u=="string")return z(u);if(typeof u=="number"||typeof u=="boolean")return String(u);if(u instanceof Date)return`new Date(${[u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds()].join(", ")})`;if(Array.isArray(u))return u.length?`[
${u.map(i=>`${n}${P(i,o+1)},`).join(`
`)}
${s}]`:"[]";if(typeof u=="object"&&u){const t=Object.entries(u).filter(([,i])=>i!==void 0).map(([i,Ku])=>`${n}${m4.test(i)?i:z(i)}: ${P(Ku,o+1)},`);return t.length?`{
${t.join(`
`)}
${s}}`:"{}"}return"undefined"},M=(u,o,n)=>`const ${u}: ${o} = ${P(n)};`,p4={title:"Локальные компоненты/Logger",component:l,tags:["!autodocs"],parameters:{docs:{layout:"padded"}},argTypes:{items:{control:!1},maxHeight:{control:"text"}},decorators:[u=>e.jsxDEV("div",{style:{width:720},children:e.jsxDEV(u,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:41,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:40,columnNumber:7},void 0)]},E4={error:"#E31227",warning:"#FA5F05",success:"#108E26",info:"#707C84"},E=M("items","LoggerItem[]",g),c=M("items","LoggerItem[]",d),m=`import { Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,f={...r({type:"code",preCode:m,code:`${E}

export const Example = () => <Logger items={items} defaultOpen />;`}),name:"Базовый пример",args:{items:g,defaultOpen:!0}},x={...r({type:"code",preCode:m,code:`${E}

// Панель свёрнута: видна только шапка со счётчиками. Клик по шапке открывает её
export const Example = () => <Logger items={items} />;`}),name:"Свёрнутый",args:{items:g,defaultOpen:!1}},L={...r({type:"code",preCode:m,code:`${c}

export const Example = () => <Logger items={items} defaultOpen />;`}),name:"Плоский список",args:{items:d,defaultOpen:!0}},D={...r({type:"code",preCode:m,code:`${E}

// defaultFilter выбирает начальный фильтр, defaultExpandedIds раскрывает группы.
// Группа остаётся в списке, если в ней есть сообщение нужного статуса
export const Example = () => (
  <Logger items={items} defaultOpen defaultFilter="warning" defaultExpandedIds={['validation']} />
);`}),name:"Фильтр по статусу",args:{items:g,defaultOpen:!0,defaultFilter:"warning",defaultExpandedIds:["validation"]}},y={...r({type:"code",preCode:m,code:`// Без сообщений показывается текст «Сообщений нет».
// Его можно заменить: labels={{ empty: '...' }} или emptyContent={<MyEmpty />}
export const Example = () => <Logger items={[]} defaultOpen />;`}),name:"Нет сообщений",args:{items:[],defaultOpen:!0}},C={...r({type:"code",preCode:`import { Logger } from '@daisforge/ui';
import type { LoggerItem, LoggerStatus } from '@daisforge/ui';`,code:`const STATUS_CYCLE: LoggerStatus[] = ['info', 'error', 'warning', 'success'];

const items: LoggerItem[] = Array.from({ length: 40 }, (_, index) => ({
  id: \`many-\${index}\`,
  status: STATUS_CYCLE[index % STATUS_CYCLE.length] ?? 'info',
  title: \`Сообщение №\${index + 1}\`,
  description: index % 3 === 0 ? \`Подробности сообщения №\${index + 1}\` : undefined,
  date: new Date(2025, 0, 1, 12, Math.floor(index / 60), index % 60),
}));

// maxHeight ограничивает высоту списка, дальше появляется прокрутка (по умолчанию 50vh)
export const Example = () => <Logger items={items} defaultOpen maxHeight={280} />;`}),name:"Много сообщений (прокрутка)",args:{items:c4,defaultOpen:!0,maxHeight:280}},B={name:"Управляемое состояние",...r({type:"code",preCode:`import { useState } from 'react';
import { Button, getLoggerGroupIds, Logger } from '@daisforge/ui';
import type { LoggerFilterValue, LoggerItem } from '@daisforge/ui';`,code:`${E}

export const Example = () => {
  // Открыта ли панель
  const [open, setOpen] = useState(true);
  // Активный фильтр: 'all' | 'error' | 'warning' | 'info' | 'success' | null
  const [filter, setFilter] = useState<LoggerFilterValue | null>('all');
  // id раскрытых групп и сообщений с открытыми подробностями
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button size="xs" view="secondary" text={open ? 'Закрыть' : 'Открыть'} onClick={() => setOpen(!open)} />
        <Button
          size="xs"
          view="secondary"
          text="Только ошибки"
          onClick={() => {
            setFilter('error');
            setOpen(true);
          }}
        />
        <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getLoggerGroupIds(items))} />
        <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
      </div>
      <Logger
        items={items}
        open={open}
        onOpenChange={setOpen}
        filter={filter}
        onFilterChange={setFilter}
        expandedIds={expanded}
        onExpandedIdsChange={setExpanded}
      />
    </div>
  );
};`}),render:()=>{const[u,o]=R.useState(!0),[n,s]=R.useState("all"),[t,i]=R.useState([]);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxDEV(p,{size:"xs",view:"secondary",text:u?"Закрыть":"Открыть",onClick:()=>o(!u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:211,columnNumber:11},void 0),e.jsxDEV(p,{size:"xs",view:"secondary",text:"Только ошибки",onClick:()=>{s("error"),o(!0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:217,columnNumber:11},void 0),e.jsxDEV(p,{size:"xs",view:"secondary",text:"Развернуть группы",onClick:()=>i(u4(g))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:226,columnNumber:11},void 0),e.jsxDEV(p,{size:"xs",view:"secondary",text:"Свернуть группы",onClick:()=>i([])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:232,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:210,columnNumber:9},void 0),e.jsxDEV(l,{items:g,open:u,onOpenChange:o,filter:n,onFilterChange:s,expandedIds:t,onExpandedIdsChange:i},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:239,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:209,columnNumber:7},void 0)}},A={name:"Только список (LoggerList)",...r({type:"code",preCode:`import { LoggerList } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`${E}

// LoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <LoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);`}),render:()=>e.jsxDEV("div",{style:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:12},children:e.jsxDEV(s4,{items:g,defaultExpandedIds:["excel"],maxHeight:360},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:270,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:269,columnNumber:5},void 0)},S={name:"Свои действия сообщений",...r({type:"code",preCode:`import { useState } from 'react';
import { BodyXS, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,code:`export const Example = () => {
  const [log, setLog] = useState<string[]>([]);
  const items: LoggerItem[] = [
    {
      id: 'download',
      status: 'error',
      title: 'Не удалось выгрузить отчёт',
      description: 'Превышено время ожидания ответа от сервиса выгрузки',
      date: new Date(2025, 0, 1, 11, 30, 0),
      // Свои кнопки показываются после «Подробнее» и «Скопировать ID»
      actions: [
        // Кнопка с текстом
        {
          id: 'retry',
          text: 'Повторить',
          onClick: (item) => setLog((prev) => [...prev, \`Повтор: \${item.id}\`]),
        },
        // Кнопка только с иконкой: title нужен для подсказки и доступности
        {
          id: 'download',
          title: 'Скачать лог',
          icon: <IconCloudDownloadOutline size="xs" />,
          onClick: (item) => setLog((prev) => [...prev, \`Скачивание лога: \${item.id}\`]),
        },
        // Неактивная кнопка
        { id: 'disabled', text: 'Недоступно', disabled: true },
      ],
    },
  ];

  return (
    <>
      <Logger items={items} defaultOpen />
      <BodyXS>
        Вызовы onClick:{' '}
        {log.length ? log.join(' → ') : 'пока нет, нажмите «Повторить» или иконку скачивания'}
      </BodyXS>
    </>
  );
};`}),render:()=>{const[u,o]=R.useState([]),n=[{id:"download",status:"error",title:"Не удалось выгрузить отчёт",description:"Превышено время ожидания ответа от сервиса выгрузки",date:new Date(2025,0,1,11,30,0),actions:[{id:"retry",text:"Повторить",onClick:s=>o(t=>[...t,`Повтор: ${s.id}`])},{id:"download",title:"Скачать лог",icon:e.jsxDEV(Ju,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:347,columnNumber:19},void 0),onClick:s=>o(t=>[...t,`Скачивание лога: ${s.id}`])},{id:"disabled",text:"Недоступно",disabled:!0}]}];return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{items:n,defaultOpen:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:358,columnNumber:9},void 0),e.jsxDEV(Zu,{children:["Вызовы onClick:"," ",u.length?u.join(" → "):"пока нет, нажмите «Повторить» или иконку скачивания"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:359,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:357,columnNumber:7},void 0)}},F={name:"Свои тексты и иконки",...r({type:"code",preCode:`import { Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconSyncError } from '@daisforge/ui/icons';`,code:`${c}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // Заголовок панели
    title="System messages"
    // Любые тексты компонента. Незаданные остаются по умолчанию
    labels={{
      all: 'All',
      details: 'Details',
      hide: 'Hide',
      copyTraceId: 'Copy ID',
      copied: 'Copied',
      empty: 'No messages',
    }}
    // Замена иконки отдельных статусов
    statusIcons={{ error: <IconSyncError size="xs" color="#E31227" /> }}
    // Формат даты. Вернуть null, чтобы скрыть дату
    formatDate={(date) => new Date(date).toLocaleString('en-GB')}
  />
);`}),render:()=>e.jsxDEV(l,{items:d,defaultOpen:!0,title:"System messages",labels:{all:"All",details:"Details",hide:"Hide",copyTraceId:"Copy ID",copied:"Copied",empty:"No messages"},statusIcons:{error:e.jsxDEV(g4,{size:"xs",color:"#E31227"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:414,columnNumber:29},void 0)},formatDate:u=>new Date(u).toLocaleString("en-GB")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:402,columnNumber:5},void 0)},b={name:"Свой рендер сообщения",...r({type:"code",preCode:m,code:`${c}

const STATUS_COLORS = {
  error: '#E31227',
  warning: '#FA5F05',
  success: '#108E26',
  info: '#707C84',
} as const;

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // renderMessage заменяет отрисовку сообщения.
    // defaultRender() возвращает стандартный вид, его можно обернуть
    renderMessage={({ item, defaultRender }) => (
      <div
        style={{
          borderLeft: \`3px solid \${STATUS_COLORS[item.status]}\`,
          paddingLeft: 12,
        }}
      >
        {defaultRender()}
      </div>
    )}
  />
);`}),render:()=>e.jsxDEV(l,{items:d,defaultOpen:!0,renderMessage:({item:u,defaultRender:o})=>e.jsxDEV("div",{style:{borderLeft:`3px solid ${E4[u.status]}`,paddingLeft:12},children:o()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:458,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:454,columnNumber:5},void 0)},I={name:"Свой рендер группы",...r({type:"code",preCode:`import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`${E}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    defaultExpandedIds={['excel']}
    // renderGroup заменяет отрисовку группы.
    // open: раскрыта ли группа, toggle: переключить, children: уже отрисованные вложенные сообщения
    renderGroup={({ item, open, toggle, children }) => (
      <section
        style={{
          border: '1px dashed rgba(0,0,0,0.2)',
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Button
          size="xxs"
          view="clear"
          text={\`\${open ? '▼' : '▶'} \${item.title} (\${item.items.length})\`}
          onClick={toggle}
        />
        {open && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              paddingTop: 8,
            }}
          >
            {children}
          </div>
        )}
      </section>
    )}
  />
);`}),render:()=>e.jsxDEV(l,{items:g,defaultOpen:!0,defaultExpandedIds:["excel"],renderGroup:({item:u,open:o,toggle:n,children:s})=>e.jsxDEV("section",{style:{border:"1px dashed rgba(0,0,0,0.2)",borderRadius:8,padding:8},children:[e.jsxDEV(p,{size:"xxs",view:"clear",text:`${o?"▼":"▶"} ${u.title} (${u.items.length})`,onClick:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:530,columnNumber:11},void 0),o&&e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12,paddingTop:8},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:537,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:523,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:518,columnNumber:5},void 0)},H=d.map(u=>({...u,meta:{source:"AE Data"}})),v={name:"Расширение строки действий и описания",...r({type:"code",preCode:`import { Button, Logger, TextXS } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`// meta: любые ваши данные, они доступны во всех render-функциях
${M("items","LoggerItem[]",H)}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // Добавить кнопку к стандартным: defaults это «Подробнее», «Скопировать ID», код и ваши actions
    renderActions={(_item, defaults) => (
      <>
        {defaults}
        <Button size="xxs" view="secondary" text="Создать тикет" />
      </>
    )}
    // Свой вид блока подробностей
    renderDescription={(item) => (
      <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: 12 }}>
        {String(item.description)}
      </pre>
    )}
    // Дополнительная строка под заголовком сообщения
    renderMessageExtra={(item) => <TextXS>Источник: {String(item.meta?.source)}</TextXS>}
  />
);`}),render:()=>e.jsxDEV(l,{items:H,defaultOpen:!0,renderActions:(u,o)=>e.jsxDEV(e.Fragment,{children:[o,e.jsxDEV(p,{size:"xxs",view:"secondary",text:"Создать тикет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:597,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:595,columnNumber:9},void 0),renderDescription:u=>e.jsxDEV("pre",{style:{margin:0,fontFamily:"monospace",fontSize:12},children:String(u.description)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:601,columnNumber:9},void 0),renderMessageExtra:u=>{var o;return e.jsxDEV(d4,{children:["Источник: ",String((o=u.meta)==null?void 0:o.source)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:606,columnNumber:9},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:591,columnNumber:5},void 0)},k={name:"Обработка копирования и кода",...r({type:"code",preCode:`import { useState } from 'react';
import { BodyXS, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`${c}

export const Example = () => {
  const [events, setEvents] = useState<string[]>([]);

  return (
    <>
      <Logger
        items={items}
        defaultOpen
        // Необязательно: свой способ копирования вместо navigator.clipboard
        copyToClipboard={() => undefined}
        // Вызывается после успешного копирования. kind: 'traceId' или 'description'
        onCopy={(kind, value) => setEvents((prev) => [...prev, \`copy:\${kind}:\${value}\`])}
        // Клик по кнопке с кодом, например открыть документацию по коду ошибки
        onCodeClick={(code) => setEvents((prev) => [...prev, \`code:\${code}\`])}
      />
      <BodyXS>
        Вызовы колбэков: {events.join(' | ') || 'пока нет, нажмите «Скопировать ID» или код'}
      </BodyXS>
    </>
  );
};`}),render:()=>{const[u,o]=R.useState([]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{items:d,defaultOpen:!0,copyToClipboard:()=>{},onCopy:(n,s)=>o(t=>[...t,`copy:${n}:${s}`]),onCodeClick:n=>o(s=>[...s,`code:${n}`])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:648,columnNumber:9},void 0),e.jsxDEV(Zu,{children:["Вызовы колбэков:"," ",u.join(" | ")||"пока нет, нажмите «Скопировать ID» или код"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:657,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:647,columnNumber:7},void 0)}},h={name:"Шапка: заголовок, иконка, доп. контент",...r({type:"code",preCode:`import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,code:`${c}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    title="Журнал загрузки"
    icon={<IconCloudDownloadOutline size="xs" />}
    // Контент справа в шапке. stopPropagation, чтобы клик не сворачивал панель
    headerExtra={
      <Button size="xxs" view="clear" text="Очистить" onClick={(e) => e.stopPropagation()} />
    }
    // Показывать чипсы статусов, даже если сообщений такого статуса нет
    showEmptyFilters
  />
);`}),render:()=>e.jsxDEV(l,{items:d,defaultOpen:!0,title:"Журнал загрузки",icon:e.jsxDEV(Ju,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:695,columnNumber:13},void 0),headerExtra:e.jsxDEV(p,{size:"xxs",view:"clear",text:"Очистить",onClick:u=>u.stopPropagation()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:697,columnNumber:9},void 0),showEmptyFilters:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:691,columnNumber:5},void 0)},N={name:"Внешние счётчики",...r({type:"code",preCode:m,code:`${c}

// По умолчанию счётчики считаются по items. Если загружена только часть данных,
// передайте итоговые значения: они перекроют вычисленные
export const Example = () => (
  <Logger items={items} defaultOpen counts={{ error: 128, warning: 12, info: 1043, success: 5 }} />
);`}),args:{items:d,defaultOpen:!0,counts:{error:128,warning:12,info:1043,success:5}}},w={name:"Стилизация: classes и $css",...r({type:"code",preCode:m,code:`${c}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // Классы отдельных слотов: root, header, filters, filter, list, group, groupHeader,
    // groupBody, message, messageIcon, messageTitle, messageActions, messageDate, messageDescription
    // classes={{ message: 'my-message' }}
    // Стили корня: строка, объект или css\`\`
    $css={{ padding: 16, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12 }}
  />
);`}),args:{items:d,defaultOpen:!0,$css:{padding:16,border:"1px solid rgba(0,0,0,0.12)",borderRadius:12}}},O={name:"Headless: useLogger + собственная вёрстка",...r({type:"code",preCode:`import { LoggerFilters, LoggerItems, LoggerProvider, useLogger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`${c}

export const Example = () => {
  // useLogger хранит состояние: фильтр, раскрытые элементы, счётчики, отфильтрованный список
  const logger = useLogger({ items, defaultFilter: 'all' });

  return (
    // LoggerProvider нужен вложенным частям (иконки, тексты, раскрытие)
    <LoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
      {/* Своя вёрстка: любые обёртки, шапки и расположение */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <LoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
        <LoggerItems items={logger.visibleItems} />
      </div>
    </LoggerProvider>
  );
};`}),render:()=>{const u=e4({items:d,defaultFilter:"all"});return e.jsxDEV(o4,{expandedIds:u.expandedIds,toggleExpanded:u.toggleExpanded,children:e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV(r4,{counts:u.counts,value:u.filter,onChange:u.setFilter,showEmpty:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:792,columnNumber:11},void 0),e.jsxDEV(n4,{items:u.visibleItems},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:798,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:791,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:787,columnNumber:7},void 0)}},$={name:"Иконки статусов",...r({type:"code",preCode:"import { LoggerStatusIcon } from '@daisforge/ui';",code:`// Иконка статуса из логгера. Статус: 'error' | 'warning' | 'info' | 'success'
export const Example = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {(['error', 'success', 'warning', 'info'] as const).map((status) => (
      <LoggerStatusIcon key={status} status={status} />
    ))}
  </div>
);`}),render:()=>e.jsxDEV("div",{style:{display:"flex",gap:16},children:["error","success","warning","info"].map(u=>e.jsxDEV(i4,{status:u},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:822,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:820,columnNumber:5},void 0)},_=d.find(a4),G=g.find(u=>u.id==="validation"),T={name:"Отдельные части: LoggerMessage и LoggerGroup",...r({type:"code",preCode:`import { LoggerGroup, LoggerMessage } from '@daisforge/ui';
import type { LoggerGroupItem, LoggerMessageItem } from '@daisforge/ui';`,code:`${M("message","LoggerMessageItem",_)}

${M("group","LoggerGroupItem",G)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <LoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <LoggerGroup item={group} open>
      <LoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </LoggerGroup>
  </div>
);`}),render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[_&&e.jsxDEV(j,{item:_},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:857,columnNumber:25},void 0),G&&e.jsxDEV(t4,{item:G,open:!0,children:e.jsxDEV(j,{item:{id:"standalone-2",status:"warning",title:"Вложенное сообщение"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:860,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:859,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:856,columnNumber:5},void 0)};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${GROUPED_SRC}

export const Example = () => <Logger items={items} defaultOpen />;\`
  }),
  name: 'Базовый пример',
  args: {
    items: GROUPED_ITEMS,
    defaultOpen: true
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var W,q,Q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${GROUPED_SRC}

// Панель свёрнута: видна только шапка со счётчиками. Клик по шапке открывает её
export const Example = () => <Logger items={items} />;\`
  }),
  name: 'Свёрнутый',
  args: {
    items: GROUPED_ITEMS,
    defaultOpen: false
  }
}`,...(Q=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Z,J,K;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${PLAIN_SRC}

export const Example = () => <Logger items={items} defaultOpen />;\`
  }),
  name: 'Плоский список',
  args: {
    items: PLAIN_ITEMS,
    defaultOpen: true
  }
}`,...(K=(J=L.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var uu,eu,ou;D.parameters={...D.parameters,docs:{...(uu=D.parameters)==null?void 0:uu.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${GROUPED_SRC}

// defaultFilter выбирает начальный фильтр, defaultExpandedIds раскрывает группы.
// Группа остаётся в списке, если в ней есть сообщение нужного статуса
export const Example = () => (
  <Logger items={items} defaultOpen defaultFilter="warning" defaultExpandedIds={['validation']} />
);\`
  }),
  name: 'Фильтр по статусу',
  args: {
    items: GROUPED_ITEMS,
    defaultOpen: true,
    defaultFilter: 'warning',
    defaultExpandedIds: ['validation']
  }
}`,...(ou=(eu=D.parameters)==null?void 0:eu.docs)==null?void 0:ou.source}}};var ru,nu,su;y.parameters={...y.parameters,docs:{...(ru=y.parameters)==null?void 0:ru.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`// Без сообщений показывается текст «Сообщений нет».
// Его можно заменить: labels={{ empty: '...' }} или emptyContent={<MyEmpty />}
export const Example = () => <Logger items={[]} defaultOpen />;\`
  }),
  name: 'Нет сообщений',
  args: {
    items: [],
    defaultOpen: true
  }
}`,...(su=(nu=y.parameters)==null?void 0:nu.docs)==null?void 0:su.source}}};var tu,iu,au;C.parameters={...C.parameters,docs:{...(tu=C.parameters)==null?void 0:tu.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Logger } from '@daisforge/ui';
import type { LoggerItem, LoggerStatus } from '@daisforge/ui';\`,
    code: \`const STATUS_CYCLE: LoggerStatus[] = ['info', 'error', 'warning', 'success'];

const items: LoggerItem[] = Array.from({ length: 40 }, (_, index) => ({
  id: \\\`many-\\\${index}\\\`,
  status: STATUS_CYCLE[index % STATUS_CYCLE.length] ?? 'info',
  title: \\\`Сообщение №\\\${index + 1}\\\`,
  description: index % 3 === 0 ? \\\`Подробности сообщения №\\\${index + 1}\\\` : undefined,
  date: new Date(2025, 0, 1, 12, Math.floor(index / 60), index % 60),
}));

// maxHeight ограничивает высоту списка, дальше появляется прокрутка (по умолчанию 50vh)
export const Example = () => <Logger items={items} defaultOpen maxHeight={280} />;\`
  }),
  name: 'Много сообщений (прокрутка)',
  args: {
    items: MANY_ITEMS,
    defaultOpen: true,
    maxHeight: 280
  }
}`,...(au=(iu=C.parameters)==null?void 0:iu.docs)==null?void 0:au.source}}};var du,gu,lu;B.parameters={...B.parameters,docs:{...(du=B.parameters)==null?void 0:du.docs,source:{originalSource:`{
  name: 'Управляемое состояние',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useState } from 'react';
import { Button, getLoggerGroupIds, Logger } from '@daisforge/ui';
import type { LoggerFilterValue, LoggerItem } from '@daisforge/ui';\`,
    code: \`\${GROUPED_SRC}

export const Example = () => {
  // Открыта ли панель
  const [open, setOpen] = useState(true);
  // Активный фильтр: 'all' | 'error' | 'warning' | 'info' | 'success' | null
  const [filter, setFilter] = useState<LoggerFilterValue | null>('all');
  // id раскрытых групп и сообщений с открытыми подробностями
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button size="xs" view="secondary" text={open ? 'Закрыть' : 'Открыть'} onClick={() => setOpen(!open)} />
        <Button
          size="xs"
          view="secondary"
          text="Только ошибки"
          onClick={() => {
            setFilter('error');
            setOpen(true);
          }}
        />
        <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getLoggerGroupIds(items))} />
        <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
      </div>
      <Logger
        items={items}
        open={open}
        onOpenChange={setOpen}
        filter={filter}
        onFilterChange={setFilter}
        expandedIds={expanded}
        onExpandedIdsChange={setExpanded}
      />
    </div>
  );
};\`
  }),
  render: () => {
    const [open, setOpen] = useState(true);
    const [filter, setFilter] = useState<LoggerFilterValue | null>('all');
    const [expanded, setExpanded] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button size="xs" view="secondary" text={open ? 'Закрыть' : 'Открыть'} onClick={() => setOpen(!open)} />
          <Button size="xs" view="secondary" text="Только ошибки" onClick={() => {
          setFilter('error');
          setOpen(true);
        }} />
          <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getLoggerGroupIds(GROUPED_ITEMS))} />
          <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
        </div>
        <Logger items={GROUPED_ITEMS} open={open} onOpenChange={setOpen} filter={filter} onFilterChange={setFilter} expandedIds={expanded} onExpandedIdsChange={setExpanded} />
      </div>;
  }
}`,...(lu=(gu=B.parameters)==null?void 0:gu.docs)==null?void 0:lu.source}}};var cu,mu,pu;A.parameters={...A.parameters,docs:{...(cu=A.parameters)==null?void 0:cu.docs,source:{originalSource:`{
  name: 'Только список (LoggerList)',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { LoggerList } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';\`,
    code: \`\${GROUPED_SRC}

// LoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <LoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);\`
  }),
  render: () => <div style={{
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 12
  }}>
      <LoggerList items={GROUPED_ITEMS} defaultExpandedIds={['excel']} maxHeight={360} />
    </div>
}`,...(pu=(mu=A.parameters)==null?void 0:mu.docs)==null?void 0:pu.source}}};var Eu,fu,xu;S.parameters={...S.parameters,docs:{...(Eu=S.parameters)==null?void 0:Eu.docs,source:{originalSource:`{
  name: 'Свои действия сообщений',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useState } from 'react';
import { BodyXS, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';\`,
    code: \`export const Example = () => {
  const [log, setLog] = useState<string[]>([]);
  const items: LoggerItem[] = [
    {
      id: 'download',
      status: 'error',
      title: 'Не удалось выгрузить отчёт',
      description: 'Превышено время ожидания ответа от сервиса выгрузки',
      date: new Date(2025, 0, 1, 11, 30, 0),
      // Свои кнопки показываются после «Подробнее» и «Скопировать ID»
      actions: [
        // Кнопка с текстом
        {
          id: 'retry',
          text: 'Повторить',
          onClick: (item) => setLog((prev) => [...prev, \\\`Повтор: \\\${item.id}\\\`]),
        },
        // Кнопка только с иконкой: title нужен для подсказки и доступности
        {
          id: 'download',
          title: 'Скачать лог',
          icon: <IconCloudDownloadOutline size="xs" />,
          onClick: (item) => setLog((prev) => [...prev, \\\`Скачивание лога: \\\${item.id}\\\`]),
        },
        // Неактивная кнопка
        { id: 'disabled', text: 'Недоступно', disabled: true },
      ],
    },
  ];

  return (
    <>
      <Logger items={items} defaultOpen />
      <BodyXS>
        Вызовы onClick:{' '}
        {log.length ? log.join(' → ') : 'пока нет, нажмите «Повторить» или иконку скачивания'}
      </BodyXS>
    </>
  );
};\`
  }),
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const items: LoggerItem[] = [{
      id: 'download',
      status: 'error',
      title: 'Не удалось выгрузить отчёт',
      description: 'Превышено время ожидания ответа от сервиса выгрузки',
      date: new Date(2025, 0, 1, 11, 30, 0),
      actions: [{
        id: 'retry',
        text: 'Повторить',
        onClick: item => setLog(prev => [...prev, \`Повтор: \${item.id}\`])
      }, {
        id: 'download',
        title: 'Скачать лог',
        icon: <IconCloudDownloadOutline size="xs" />,
        onClick: item => setLog(prev => [...prev, \`Скачивание лога: \${item.id}\`])
      }, {
        id: 'disabled',
        text: 'Недоступно',
        disabled: true
      }]
    }];
    return <>
        <Logger items={items} defaultOpen />
        <BodyXS>
          Вызовы onClick:{' '}
          {log.length ? log.join(' → ') : 'пока нет, нажмите «Повторить» или иконку скачивания'}
        </BodyXS>
      </>;
  }
}`,...(xu=(fu=S.parameters)==null?void 0:fu.docs)==null?void 0:xu.source}}};var Lu,Du,yu;F.parameters={...F.parameters,docs:{...(Lu=F.parameters)==null?void 0:Lu.docs,source:{originalSource:`{
  name: 'Свои тексты и иконки',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconSyncError } from '@daisforge/ui/icons';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // Заголовок панели
    title="System messages"
    // Любые тексты компонента. Незаданные остаются по умолчанию
    labels={{
      all: 'All',
      details: 'Details',
      hide: 'Hide',
      copyTraceId: 'Copy ID',
      copied: 'Copied',
      empty: 'No messages',
    }}
    // Замена иконки отдельных статусов
    statusIcons={{ error: <IconSyncError size="xs" color="#E31227" /> }}
    // Формат даты. Вернуть null, чтобы скрыть дату
    formatDate={(date) => new Date(date).toLocaleString('en-GB')}
  />
);\`
  }),
  render: () => <Logger items={PLAIN_ITEMS} defaultOpen title="System messages" labels={{
    all: 'All',
    details: 'Details',
    hide: 'Hide',
    copyTraceId: 'Copy ID',
    copied: 'Copied',
    empty: 'No messages'
  }} statusIcons={{
    error: <IconSyncError size="xs" color="#E31227" />
  }} formatDate={date => new Date(date).toLocaleString('en-GB')} />
}`,...(yu=(Du=F.parameters)==null?void 0:Du.docs)==null?void 0:yu.source}}};var Cu,Bu,Au;b.parameters={...b.parameters,docs:{...(Cu=b.parameters)==null?void 0:Cu.docs,source:{originalSource:`{
  name: 'Свой рендер сообщения',
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${PLAIN_SRC}

const STATUS_COLORS = {
  error: '#E31227',
  warning: '#FA5F05',
  success: '#108E26',
  info: '#707C84',
} as const;

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // renderMessage заменяет отрисовку сообщения.
    // defaultRender() возвращает стандартный вид, его можно обернуть
    renderMessage={({ item, defaultRender }) => (
      <div
        style={{
          borderLeft: \\\`3px solid \\\${STATUS_COLORS[item.status]}\\\`,
          paddingLeft: 12,
        }}
      >
        {defaultRender()}
      </div>
    )}
  />
);\`
  }),
  render: () => <Logger items={PLAIN_ITEMS} defaultOpen renderMessage={({
    item,
    defaultRender
  }) => <div style={{
    borderLeft: \`3px solid \${STATUS_COLORS[item.status]}\`,
    paddingLeft: 12
  }}>
          {defaultRender()}
        </div>} />
}`,...(Au=(Bu=b.parameters)==null?void 0:Bu.docs)==null?void 0:Au.source}}};var Su,Fu,bu;I.parameters={...I.parameters,docs:{...(Su=I.parameters)==null?void 0:Su.docs,source:{originalSource:`{
  name: 'Свой рендер группы',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';\`,
    code: \`\${GROUPED_SRC}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    defaultExpandedIds={['excel']}
    // renderGroup заменяет отрисовку группы.
    // open: раскрыта ли группа, toggle: переключить, children: уже отрисованные вложенные сообщения
    renderGroup={({ item, open, toggle, children }) => (
      <section
        style={{
          border: '1px dashed rgba(0,0,0,0.2)',
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Button
          size="xxs"
          view="clear"
          text={\\\`\\\${open ? '▼' : '▶'} \\\${item.title} (\\\${item.items.length})\\\`}
          onClick={toggle}
        />
        {open && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              paddingTop: 8,
            }}
          >
            {children}
          </div>
        )}
      </section>
    )}
  />
);\`
  }),
  render: () => <Logger items={GROUPED_ITEMS} defaultOpen defaultExpandedIds={['excel']} renderGroup={({
    item,
    open,
    toggle,
    children
  }) => <section style={{
    border: '1px dashed rgba(0,0,0,0.2)',
    borderRadius: 8,
    padding: 8
  }}>
          <Button size="xxs" view="clear" text={\`\${open ? '▼' : '▶'} \${item.title} (\${item.items.length})\`} onClick={toggle} />
          {open && <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingTop: 8
    }}>
              {children}
            </div>}
        </section>} />
}`,...(bu=(Fu=I.parameters)==null?void 0:Fu.docs)==null?void 0:bu.source}}};var Iu,vu,ku;v.parameters={...v.parameters,docs:{...(Iu=v.parameters)==null?void 0:Iu.docs,source:{originalSource:`{
  name: 'Расширение строки действий и описания',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Button, Logger, TextXS } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';\`,
    code: \`// meta: любые ваши данные, они доступны во всех render-функциях
\${declareSource('items', 'LoggerItem[]', ITEMS_WITH_META)}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // Добавить кнопку к стандартным: defaults это «Подробнее», «Скопировать ID», код и ваши actions
    renderActions={(_item, defaults) => (
      <>
        {defaults}
        <Button size="xxs" view="secondary" text="Создать тикет" />
      </>
    )}
    // Свой вид блока подробностей
    renderDescription={(item) => (
      <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: 12 }}>
        {String(item.description)}
      </pre>
    )}
    // Дополнительная строка под заголовком сообщения
    renderMessageExtra={(item) => <TextXS>Источник: {String(item.meta?.source)}</TextXS>}
  />
);\`
  }),
  render: () => <Logger items={ITEMS_WITH_META} defaultOpen renderActions={(_item, defaults) => <>
          {defaults}
          <Button size="xxs" view="secondary" text="Создать тикет" />
        </>} renderDescription={item => <pre style={{
    margin: 0,
    fontFamily: 'monospace',
    fontSize: 12
  }}>
          {String(item.description)}
        </pre>} renderMessageExtra={item => <TextXS>Источник: {String(item.meta?.source)}</TextXS>} />
}`,...(ku=(vu=v.parameters)==null?void 0:vu.docs)==null?void 0:ku.source}}};var hu,Nu,wu;k.parameters={...k.parameters,docs:{...(hu=k.parameters)==null?void 0:hu.docs,source:{originalSource:`{
  name: 'Обработка копирования и кода',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useState } from 'react';
import { BodyXS, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => {
  const [events, setEvents] = useState<string[]>([]);

  return (
    <>
      <Logger
        items={items}
        defaultOpen
        // Необязательно: свой способ копирования вместо navigator.clipboard
        copyToClipboard={() => undefined}
        // Вызывается после успешного копирования. kind: 'traceId' или 'description'
        onCopy={(kind, value) => setEvents((prev) => [...prev, \\\`copy:\\\${kind}:\\\${value}\\\`])}
        // Клик по кнопке с кодом, например открыть документацию по коду ошибки
        onCodeClick={(code) => setEvents((prev) => [...prev, \\\`code:\\\${code}\\\`])}
      />
      <BodyXS>
        Вызовы колбэков: {events.join(' | ') || 'пока нет, нажмите «Скопировать ID» или код'}
      </BodyXS>
    </>
  );
};\`
  }),
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    return <>
        <Logger items={PLAIN_ITEMS} defaultOpen copyToClipboard={() => undefined} onCopy={(kind, value) => setEvents(prev => [...prev, \`copy:\${kind}:\${value}\`])} onCodeClick={code => setEvents(prev => [...prev, \`code:\${code}\`])} />
        <BodyXS>
          Вызовы колбэков:{' '}
          {events.join(' | ') || 'пока нет, нажмите «Скопировать ID» или код'}
        </BodyXS>
      </>;
  }
}`,...(wu=(Nu=k.parameters)==null?void 0:Nu.docs)==null?void 0:wu.source}}};var Ou,$u,Tu;h.parameters={...h.parameters,docs:{...(Ou=h.parameters)==null?void 0:Ou.docs,source:{originalSource:`{
  name: 'Шапка: заголовок, иконка, доп. контент',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    title="Журнал загрузки"
    icon={<IconCloudDownloadOutline size="xs" />}
    // Контент справа в шапке. stopPropagation, чтобы клик не сворачивал панель
    headerExtra={
      <Button size="xxs" view="clear" text="Очистить" onClick={(e) => e.stopPropagation()} />
    }
    // Показывать чипсы статусов, даже если сообщений такого статуса нет
    showEmptyFilters
  />
);\`
  }),
  render: () => <Logger items={PLAIN_ITEMS} defaultOpen title="Журнал загрузки" icon={<IconCloudDownloadOutline size="xs" />} headerExtra={<Button size="xxs" view="clear" text="Очистить" onClick={e => e.stopPropagation()} />} showEmptyFilters />
}`,...(Tu=($u=h.parameters)==null?void 0:$u.docs)==null?void 0:Tu.source}}};var Ru,Mu,_u;N.parameters={...N.parameters,docs:{...(Ru=N.parameters)==null?void 0:Ru.docs,source:{originalSource:`{
  name: 'Внешние счётчики',
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${PLAIN_SRC}

// По умолчанию счётчики считаются по items. Если загружена только часть данных,
// передайте итоговые значения: они перекроют вычисленные
export const Example = () => (
  <Logger items={items} defaultOpen counts={{ error: 128, warning: 12, info: 1043, success: 5 }} />
);\`
  }),
  args: {
    items: PLAIN_ITEMS,
    defaultOpen: true,
    counts: {
      error: 128,
      warning: 12,
      info: 1043,
      success: 5
    }
  }
}`,...(_u=(Mu=N.parameters)==null?void 0:Mu.docs)==null?void 0:_u.source}}};var Gu,Pu,ju;w.parameters={...w.parameters,docs:{...(Gu=w.parameters)==null?void 0:Gu.docs,source:{originalSource:`{
  name: 'Стилизация: classes и $css',
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: \`\${PLAIN_SRC}

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // Классы отдельных слотов: root, header, filters, filter, list, group, groupHeader,
    // groupBody, message, messageIcon, messageTitle, messageActions, messageDate, messageDescription
    // classes={{ message: 'my-message' }}
    // Стили корня: строка, объект или css\\\`\\\`
    $css={{ padding: 16, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12 }}
  />
);\`
  }),
  args: {
    items: PLAIN_ITEMS,
    defaultOpen: true,
    $css: {
      padding: 16,
      border: '1px solid rgba(0,0,0,0.12)',
      borderRadius: 12
    }
  }
}`,...(ju=(Pu=w.parameters)==null?void 0:Pu.docs)==null?void 0:ju.source}}};var Vu,zu,Hu;O.parameters={...O.parameters,docs:{...(Vu=O.parameters)==null?void 0:Vu.docs,source:{originalSource:`{
  name: 'Headless: useLogger + собственная вёрстка',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { LoggerFilters, LoggerItems, LoggerProvider, useLogger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => {
  // useLogger хранит состояние: фильтр, раскрытые элементы, счётчики, отфильтрованный список
  const logger = useLogger({ items, defaultFilter: 'all' });

  return (
    // LoggerProvider нужен вложенным частям (иконки, тексты, раскрытие)
    <LoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
      {/* Своя вёрстка: любые обёртки, шапки и расположение */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <LoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
        <LoggerItems items={logger.visibleItems} />
      </div>
    </LoggerProvider>
  );
};\`
  }),
  render: () => {
    const logger = useLogger({
      items: PLAIN_ITEMS,
      defaultFilter: 'all'
    });
    return <LoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <LoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
          <LoggerItems items={logger.visibleItems} />
        </div>
      </LoggerProvider>;
  }
}`,...(Hu=(zu=O.parameters)==null?void 0:zu.docs)==null?void 0:Hu.source}}};var Uu,Xu,Yu;$.parameters={...$.parameters,docs:{...(Uu=$.parameters)==null?void 0:Uu.docs,source:{originalSource:`{
  name: 'Иконки статусов',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { LoggerStatusIcon } from '@daisforge/ui';\`,
    code: \`// Иконка статуса из логгера. Статус: 'error' | 'warning' | 'info' | 'success'
export const Example = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {(['error', 'success', 'warning', 'info'] as const).map((status) => (
      <LoggerStatusIcon key={status} status={status} />
    ))}
  </div>
);\`
  }),
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      {(['error', 'success', 'warning', 'info'] as const).map(status => <LoggerStatusIcon key={status} status={status} />)}
    </div>
}`,...(Yu=(Xu=$.parameters)==null?void 0:Xu.docs)==null?void 0:Yu.source}}};var Wu,qu,Qu;T.parameters={...T.parameters,docs:{...(Wu=T.parameters)==null?void 0:Wu.docs,source:{originalSource:`{
  name: 'Отдельные части: LoggerMessage и LoggerGroup',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { LoggerGroup, LoggerMessage } from '@daisforge/ui';
import type { LoggerGroupItem, LoggerMessageItem } from '@daisforge/ui';\`,
    code: \`\${declareSource('message', 'LoggerMessageItem', singleMessage)}

\${declareSource('group', 'LoggerGroupItem', singleGroup)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <LoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <LoggerGroup item={group} open>
      <LoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </LoggerGroup>
  </div>
);\`
  }),
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {singleMessage && <LoggerMessage item={singleMessage} />}
      {singleGroup && <LoggerGroup item={singleGroup} open>
          <LoggerMessage item={{
        id: 'standalone-2',
        status: 'warning',
        title: 'Вложенное сообщение'
      }} />
        </LoggerGroup>}
    </div>
}`,...(Qu=(qu=T.parameters)==null?void 0:qu.docs)==null?void 0:Qu.source}}};const f4=["Default","Collapsed","WithoutGroups","FilteredByStatus","Empty","ManyMessages","ControlledState","ListOnly","CustomActions","CustomLabelsAndIcons","CustomMessageRender","CustomGroupRender","CustomActionsSlot","CopyHandlers","HeaderCustomization","ExternalCounts","CustomStyling","Headless","StatusIcons","SingleParts"],B4=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:x,ControlledState:B,CopyHandlers:k,CustomActions:S,CustomActionsSlot:v,CustomGroupRender:I,CustomLabelsAndIcons:F,CustomMessageRender:b,CustomStyling:w,Default:f,Empty:y,ExternalCounts:N,FilteredByStatus:D,HeaderCustomization:h,Headless:O,ListOnly:A,ManyMessages:C,SingleParts:T,StatusIcons:$,WithoutGroups:L,__namedExportsOrder:f4,default:p4},Symbol.toStringTag,{value:"Module"}));export{B4 as L};
