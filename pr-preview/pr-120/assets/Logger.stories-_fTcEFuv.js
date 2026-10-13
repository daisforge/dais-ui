import{r as _,d as e}from"./react-D2T61mpp.js";import{s as r}from"./storySourceDoc-tVKyHcEN.js";import{L as g,g as t4,b as s4,u as i4,a as a4,c as d4,d as g4,e as l4,f as V,h as c4,i as m4,j as p4}from"./Logger-FKTAiALI.js";import{t as p,l as e4,a as E4}from"./@salutejs/sdds-finai-DL_QtMGJ.js";import{uM as f4,fj as o4}from"./@salutejs/plasma-icons-DTttYHJN.js";const t=(u,o,n)=>new Date(2025,0,1,u,o,n),x4=["System.Runtime.InteropServices.COMException (0x800A03EC):",'"The file could not be accessed. The system cannot find the path specified. (Exception from HRESULT: 0x800A03EC)"','Nested Inner Exception: System.IO.IOException: "The process cannot access the file',"'\\\\nas01\\shared\\reports\\Q3_Financial_Summary_TEMP.xlsx' because it is being used by another process.",'The sharing violation occurred while attempting to flush the binary stream to the physical disk."'].join(`
`),l=[{id:"excel",status:"error",title:"Ошибка скачивания Excel",defaultOpen:!0,items:[{id:"excel-1",status:"error",title:"Не удалось получить доступ к файлу. Системе не удаётся найти указанный путь",description:x4,traceId:"4bf92f3577b34da6a3ce929d0e0e4736",code:"F23",date:t(18,7,32)},{id:"excel-2",status:"error",title:"Файл занят другим процессом",code:"F24",date:t(18,7,33)}]},{id:"validation",status:"warning",title:"Проверка данных",items:[{id:"validation-1",status:"warning",title:"Пропущено 3 пустые строки",date:t(18,5,10)},{id:"validation-2",status:"warning",title:"Дубликаты ключей объединены",description:"Объединено 12 строк по ключу «Подразделение + Статья»",date:t(18,5,11)}]},{id:"saved",status:"success",title:"Сохранение",items:[{id:"saved-1",status:"success",title:"Изменения сохранены",date:t(18,1,0)}]},{id:"info",status:"info",title:"Информация",items:[{id:"info-1",status:"info",title:"Обновлён справочник подразделений",date:t(17,59,3)}]}],r4=[{id:"a",status:"error",title:"Не удалось сохранить лист",date:t(10,0,0)},{id:"a-1",parentId:"a",status:"error",title:"Конфликт версий",description:"Лист был изменён другим пользователем после открытия",traceId:"c1d2e3f4a5b6",date:t(10,0,1)},{id:"a-2",parentId:"a",status:"warning",title:"Локальные изменения сохранены в черновик",date:t(10,0,2)},{id:"b",status:"success",title:"Данные обновлены",date:t(10,5,0)},{id:"c",status:"info",title:"Расчёт запущен",description:"Ожидаемое время: 2 минуты",date:t(10,6,0)}],d=[{id:"p1",status:"error",title:"Не удалось загрузить справочник",description:"GET /api/dictionaries/42 вернул 502",traceId:"9a8b7c6d5e4f",code:"F23",date:t(9,0,0)},{id:"p2",status:"warning",title:"Часть данных устарела",date:t(9,1,0)},{id:"p3",status:"success",title:"Отчёт сформирован",date:t(9,2,0)},{id:"p4",status:"info",title:"Подключено к рабочей книге",date:t(9,3,0)}],z=["info","error","warning","success"],L4=Array.from({length:40},(u,o)=>({id:`many-${o}`,status:z[o%z.length]??"info",title:`Сообщение №${o+1}`,description:o%3===0?`Подробности сообщения №${o+1}`:void 0,date:t(12,Math.floor(o/60),o%60)})),D4=/^[A-Za-z_$][\w$]*$/,H=u=>`'${u.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n")}'`,j=(u,o=0)=>{const n="  ".repeat(o+1),s="  ".repeat(o);if(u===null)return"null";if(typeof u=="string")return H(u);if(typeof u=="number"||typeof u=="boolean")return String(u);if(u instanceof Date)return`new Date(${[u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds()].join(", ")})`;if(Array.isArray(u))return u.length?`[
${u.map(a=>`${n}${j(a,o+1)},`).join(`
`)}
${s}]`:"[]";if(typeof u=="object"&&u){const i=Object.entries(u).filter(([,a])=>a!==void 0).map(([a,n4])=>`${n}${D4.test(a)?a:H(a)}: ${j(n4,o+1)},`);return i.length?`{
${i.join(`
`)}
${s}}`:"{}"}return"undefined"},E=(u,o,n)=>`const ${u}: ${o} = ${j(n)};`,y4={title:"Локальные компоненты/Logger",component:g,tags:["!autodocs"],parameters:{docs:{layout:"padded"}},argTypes:{items:{control:!1},maxHeight:{control:"text"}},decorators:[u=>e.jsxDEV("div",{style:{width:720},children:e.jsxDEV(u,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:47,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:46,columnNumber:7},void 0)]},C4={error:"#E31227",warning:"#FA5F05",success:"#108E26",info:"#707C84"},f=E("items","LoggerItem[]",l),c=E("items","LoggerItem[]",d),B4=E("messagesFromApi","LoggerFlatItem[]",r4),m=`import { Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,x={...r({type:"code",preCode:m,code:`${f}

export const Example = () => <Logger items={items} defaultOpen />;`}),name:"Базовый пример",args:{items:l,defaultOpen:!0}},L={...r({type:"code",preCode:m,code:`${f}

// Панель свёрнута: видна только шапка со счётчиками. Клик по шапке открывает её
export const Example = () => <Logger items={items} />;`}),name:"Свёрнутый",args:{items:l,defaultOpen:!1}},D={...r({type:"code",preCode:m,code:`${c}

export const Example = () => <Logger items={items} defaultOpen />;`}),name:"Плоский список",args:{items:d,defaultOpen:!0}},y={...r({type:"code",preCode:m,code:`${f}

// defaultFilter выбирает начальный фильтр, defaultExpandedIds раскрывает группы.
// Группа остаётся в списке, если в ней есть сообщение нужного статуса
export const Example = () => (
  <Logger items={items} defaultOpen defaultFilter="warning" defaultExpandedIds={['validation']} />
);`}),name:"Фильтр по статусу",args:{items:l,defaultOpen:!0,defaultFilter:"warning",defaultExpandedIds:["validation"]}},C={...r({type:"code",preCode:m,code:`// Без сообщений показывается текст «Сообщений нет».
// Его можно заменить: labels={{ empty: '...' }} или emptyContent={<MyEmpty />}
export const Example = () => <Logger items={[]} defaultOpen />;`}),name:"Нет сообщений",args:{items:[],defaultOpen:!0}},B={...r({type:"code",preCode:`import { Logger } from '@daisforge/ui';
import type { LoggerItem, LoggerStatus } from '@daisforge/ui';`,code:`const STATUS_CYCLE: LoggerStatus[] = ['info', 'error', 'warning', 'success'];

const items: LoggerItem[] = Array.from({ length: 40 }, (_, index) => ({
  id: \`many-\${index}\`,
  status: STATUS_CYCLE[index % STATUS_CYCLE.length] ?? 'info',
  title: \`Сообщение №\${index + 1}\`,
  description: index % 3 === 0 ? \`Подробности сообщения №\${index + 1}\` : undefined,
  date: new Date(2025, 0, 1, 12, Math.floor(index / 60), index % 60),
}));

// maxHeight ограничивает высоту списка, дальше появляется прокрутка (по умолчанию 50vh)
export const Example = () => <Logger items={items} defaultOpen maxHeight={280} />;`}),name:"Много сообщений (прокрутка)",args:{items:L4,defaultOpen:!0,maxHeight:280}},A={name:"Из плоского списка (parentId)",...r({type:"code",preCode:`import { useMemo } from 'react';
import { buildLoggerTree, Logger } from '@daisforge/ui';
import type { LoggerFlatItem } from '@daisforge/ui';`,code:`// Плоский список, как приходит с сервера. Вложенность задаёт parentId
${B4}

export const Example = () => {
  // buildLoggerTree превращает список в дерево: «a» станет группой с двумя сообщениями
  const items = useMemo(() => buildLoggerTree(messagesFromApi), []);

  return <Logger items={items} defaultOpen defaultExpandedIds={['a']} />;
};`}),render:()=>e.jsxDEV(g,{items:s4(r4),defaultOpen:!0,defaultExpandedIds:["a"]},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:186,columnNumber:5},void 0)},F={name:"Управляемое состояние",...r({type:"code",preCode:`import { useState } from 'react';
import { Button, getLoggerGroupIds, Logger } from '@daisforge/ui';
import type { LoggerFilterValue, LoggerItem } from '@daisforge/ui';`,code:`${f}

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
};`}),render:()=>{const[u,o]=_.useState(!0),[n,s]=_.useState("all"),[i,a]=_.useState([]);return e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxDEV(p,{size:"xs",view:"secondary",text:u?"Закрыть":"Открыть",onClick:()=>o(!u)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:248,columnNumber:11},void 0),e.jsxDEV(p,{size:"xs",view:"secondary",text:"Только ошибки",onClick:()=>{s("error"),o(!0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:254,columnNumber:11},void 0),e.jsxDEV(p,{size:"xs",view:"secondary",text:"Развернуть группы",onClick:()=>a(t4(l))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:263,columnNumber:11},void 0),e.jsxDEV(p,{size:"xs",view:"secondary",text:"Свернуть группы",onClick:()=>a([])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:269,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:247,columnNumber:9},void 0),e.jsxDEV(g,{items:l,open:u,onOpenChange:o,filter:n,onFilterChange:s,expandedIds:i,onExpandedIdsChange:a},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:276,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:246,columnNumber:7},void 0)}},S={name:"Только список (LoggerList)",...r({type:"code",preCode:`import { LoggerList } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`${f}

// LoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <LoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);`}),render:()=>e.jsxDEV("div",{style:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:12},children:e.jsxDEV(l4,{items:l,defaultExpandedIds:["excel"],maxHeight:360},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:307,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:306,columnNumber:5},void 0)},b={name:"Свои действия сообщений",...r({type:"code",preCode:`import { useState } from 'react';
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
};`}),render:()=>{const[u,o]=_.useState([]),n=[{id:"download",status:"error",title:"Не удалось выгрузить отчёт",description:"Превышено время ожидания ответа от сервиса выгрузки",date:new Date(2025,0,1,11,30,0),actions:[{id:"retry",text:"Повторить",onClick:s=>o(i=>[...i,`Повтор: ${s.id}`])},{id:"download",title:"Скачать лог",icon:e.jsxDEV(o4,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:384,columnNumber:19},void 0),onClick:s=>o(i=>[...i,`Скачивание лога: ${s.id}`])},{id:"disabled",text:"Недоступно",disabled:!0}]}];return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(g,{items:n,defaultOpen:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:395,columnNumber:9},void 0),e.jsxDEV(e4,{children:["Вызовы onClick:"," ",u.length?u.join(" → "):"пока нет, нажмите «Повторить» или иконку скачивания"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:396,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:394,columnNumber:7},void 0)}},I={name:"Свои тексты и иконки",...r({type:"code",preCode:`import { Logger } from '@daisforge/ui';
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
);`}),render:()=>e.jsxDEV(g,{items:d,defaultOpen:!0,title:"System messages",labels:{all:"All",details:"Details",hide:"Hide",copyTraceId:"Copy ID",copied:"Copied",empty:"No messages"},statusIcons:{error:e.jsxDEV(f4,{size:"xs",color:"#E31227"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:451,columnNumber:29},void 0)},formatDate:u=>new Date(u).toLocaleString("en-GB")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:439,columnNumber:5},void 0)},v={name:"Свой рендер сообщения",...r({type:"code",preCode:m,code:`${c}

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
);`}),render:()=>e.jsxDEV(g,{items:d,defaultOpen:!0,renderMessage:({item:u,defaultRender:o})=>e.jsxDEV("div",{style:{borderLeft:`3px solid ${C4[u.status]}`,paddingLeft:12},children:o()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:495,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:491,columnNumber:5},void 0)},k={name:"Свой рендер группы",...r({type:"code",preCode:`import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`${f}

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
);`}),render:()=>e.jsxDEV(g,{items:l,defaultOpen:!0,defaultExpandedIds:["excel"],renderGroup:({item:u,open:o,toggle:n,children:s})=>e.jsxDEV("section",{style:{border:"1px dashed rgba(0,0,0,0.2)",borderRadius:8,padding:8},children:[e.jsxDEV(p,{size:"xxs",view:"clear",text:`${o?"▼":"▶"} ${u.title} (${u.items.length})`,onClick:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:567,columnNumber:11},void 0),o&&e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12,paddingTop:8},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:574,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:560,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:555,columnNumber:5},void 0)},U=d.map(u=>({...u,meta:{source:"AE Data"}})),h={name:"Расширение строки действий и описания",...r({type:"code",preCode:`import { Button, Logger, TextXS } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,code:`// meta: любые ваши данные, они доступны во всех render-функциях
${E("items","LoggerItem[]",U)}

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
);`}),render:()=>e.jsxDEV(g,{items:U,defaultOpen:!0,renderActions:(u,o)=>e.jsxDEV(e.Fragment,{children:[o,e.jsxDEV(p,{size:"xxs",view:"secondary",text:"Создать тикет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:634,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:632,columnNumber:9},void 0),renderDescription:u=>e.jsxDEV("pre",{style:{margin:0,fontFamily:"monospace",fontSize:12},children:String(u.description)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:638,columnNumber:9},void 0),renderMessageExtra:u=>{var o;return e.jsxDEV(E4,{children:["Источник: ",String((o=u.meta)==null?void 0:o.source)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:643,columnNumber:9},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:628,columnNumber:5},void 0)},N={name:"Обработка копирования и кода",...r({type:"code",preCode:`import { useState } from 'react';
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
};`}),render:()=>{const[u,o]=_.useState([]);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(g,{items:d,defaultOpen:!0,copyToClipboard:()=>{},onCopy:(n,s)=>o(i=>[...i,`copy:${n}:${s}`]),onCodeClick:n=>o(s=>[...s,`code:${n}`])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:685,columnNumber:9},void 0),e.jsxDEV(e4,{children:["Вызовы колбэков:"," ",u.join(" | ")||"пока нет, нажмите «Скопировать ID» или код"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:694,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:684,columnNumber:7},void 0)}},w={name:"Шапка: заголовок, иконка, доп. контент",...r({type:"code",preCode:`import { Button, Logger } from '@daisforge/ui';
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
);`}),render:()=>e.jsxDEV(g,{items:d,defaultOpen:!0,title:"Журнал загрузки",icon:e.jsxDEV(o4,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:732,columnNumber:13},void 0),headerExtra:e.jsxDEV(p,{size:"xxs",view:"clear",text:"Очистить",onClick:u=>u.stopPropagation()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:734,columnNumber:9},void 0),showEmptyFilters:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:728,columnNumber:5},void 0)},O={name:"Внешние счётчики",...r({type:"code",preCode:m,code:`${c}

// По умолчанию счётчики считаются по items. Если загружена только часть данных,
// передайте итоговые значения: они перекроют вычисленные
export const Example = () => (
  <Logger items={items} defaultOpen counts={{ error: 128, warning: 12, info: 1043, success: 5 }} />
);`}),args:{items:d,defaultOpen:!0,counts:{error:128,warning:12,info:1043,success:5}}},T={name:"Стилизация: classes и $css",...r({type:"code",preCode:m,code:`${c}

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
);`}),args:{items:d,defaultOpen:!0,$css:{padding:16,border:"1px solid rgba(0,0,0,0.12)",borderRadius:12}}},$={name:"Headless: useLogger + собственная вёрстка",...r({type:"code",preCode:`import { LoggerFilters, LoggerItems, LoggerProvider, useLogger } from '@daisforge/ui';
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
};`}),render:()=>{const u=i4({items:d,defaultFilter:"all"});return e.jsxDEV(a4,{expandedIds:u.expandedIds,toggleExpanded:u.toggleExpanded,children:e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxDEV(d4,{counts:u.counts,value:u.filter,onChange:u.setFilter,showEmpty:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:829,columnNumber:11},void 0),e.jsxDEV(g4,{items:u.visibleItems},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:835,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:828,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:824,columnNumber:7},void 0)}},M={name:"Иконки статусов",...r({type:"code",preCode:"import { LoggerStatusIcon } from '@daisforge/ui';",code:`// Иконка статуса из логгера. Статус: 'error' | 'warning' | 'info' | 'success'
export const Example = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {(['error', 'success', 'warning', 'info'] as const).map((status) => (
      <LoggerStatusIcon key={status} status={status} />
    ))}
  </div>
);`}),render:()=>e.jsxDEV("div",{style:{display:"flex",gap:16},children:["error","success","warning","info"].map(u=>e.jsxDEV(m4,{status:u},u,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:859,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:857,columnNumber:5},void 0)},G=d.find(p4),P=l.find(u=>u.id==="validation"),R={name:"Отдельные части: LoggerMessage и LoggerGroup",...r({type:"code",preCode:`import { LoggerGroup, LoggerMessage } from '@daisforge/ui';
import type { LoggerGroupItem, LoggerMessageItem } from '@daisforge/ui';`,code:`${E("message","LoggerMessageItem",G)}

${E("group","LoggerGroupItem",P)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <LoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <LoggerGroup item={group} open>
      <LoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </LoggerGroup>
  </div>
);`}),render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[G&&e.jsxDEV(V,{item:G},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:894,columnNumber:25},void 0),P&&e.jsxDEV(c4,{item:P,open:!0,children:e.jsxDEV(V,{item:{id:"standalone-2",status:"warning",title:"Вложенное сообщение"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:897,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:896,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/Logger/Logger.stories.tsx",lineNumber:893,columnNumber:5},void 0)};var X,Y,W;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(W=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var q,Q,Z;L.parameters={...L.parameters,docs:{...(q=L.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Z=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var J,K,uu;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(uu=(K=D.parameters)==null?void 0:K.docs)==null?void 0:uu.source}}};var eu,ou,ru;y.parameters={...y.parameters,docs:{...(eu=y.parameters)==null?void 0:eu.docs,source:{originalSource:`{
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
}`,...(ru=(ou=y.parameters)==null?void 0:ou.docs)==null?void 0:ru.source}}};var nu,tu,su;C.parameters={...C.parameters,docs:{...(nu=C.parameters)==null?void 0:nu.docs,source:{originalSource:`{
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
}`,...(su=(tu=C.parameters)==null?void 0:tu.docs)==null?void 0:su.source}}};var iu,au,du;B.parameters={...B.parameters,docs:{...(iu=B.parameters)==null?void 0:iu.docs,source:{originalSource:`{
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
}`,...(du=(au=B.parameters)==null?void 0:au.docs)==null?void 0:du.source}}};var gu,lu,cu;A.parameters={...A.parameters,docs:{...(gu=A.parameters)==null?void 0:gu.docs,source:{originalSource:`{
  name: 'Из плоского списка (parentId)',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useMemo } from 'react';
import { buildLoggerTree, Logger } from '@daisforge/ui';
import type { LoggerFlatItem } from '@daisforge/ui';\`,
    code: \`// Плоский список, как приходит с сервера. Вложенность задаёт parentId
\${FLAT_SRC}

export const Example = () => {
  // buildLoggerTree превращает список в дерево: «a» станет группой с двумя сообщениями
  const items = useMemo(() => buildLoggerTree(messagesFromApi), []);

  return <Logger items={items} defaultOpen defaultExpandedIds={['a']} />;
};\`
  }),
  render: () => <Logger items={buildLoggerTree(FLAT_ITEMS)} defaultOpen defaultExpandedIds={['a']} />
}`,...(cu=(lu=A.parameters)==null?void 0:lu.docs)==null?void 0:cu.source}}};var mu,pu,Eu;F.parameters={...F.parameters,docs:{...(mu=F.parameters)==null?void 0:mu.docs,source:{originalSource:`{
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
}`,...(Eu=(pu=F.parameters)==null?void 0:pu.docs)==null?void 0:Eu.source}}};var fu,xu,Lu;S.parameters={...S.parameters,docs:{...(fu=S.parameters)==null?void 0:fu.docs,source:{originalSource:`{
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
}`,...(Lu=(xu=S.parameters)==null?void 0:xu.docs)==null?void 0:Lu.source}}};var Du,yu,Cu;b.parameters={...b.parameters,docs:{...(Du=b.parameters)==null?void 0:Du.docs,source:{originalSource:`{
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
}`,...(Cu=(yu=b.parameters)==null?void 0:yu.docs)==null?void 0:Cu.source}}};var Bu,Au,Fu;I.parameters={...I.parameters,docs:{...(Bu=I.parameters)==null?void 0:Bu.docs,source:{originalSource:`{
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
}`,...(Fu=(Au=I.parameters)==null?void 0:Au.docs)==null?void 0:Fu.source}}};var Su,bu,Iu;v.parameters={...v.parameters,docs:{...(Su=v.parameters)==null?void 0:Su.docs,source:{originalSource:`{
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
}`,...(Iu=(bu=v.parameters)==null?void 0:bu.docs)==null?void 0:Iu.source}}};var vu,ku,hu;k.parameters={...k.parameters,docs:{...(vu=k.parameters)==null?void 0:vu.docs,source:{originalSource:`{
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
}`,...(hu=(ku=k.parameters)==null?void 0:ku.docs)==null?void 0:hu.source}}};var Nu,wu,Ou;h.parameters={...h.parameters,docs:{...(Nu=h.parameters)==null?void 0:Nu.docs,source:{originalSource:`{
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
}`,...(Ou=(wu=h.parameters)==null?void 0:wu.docs)==null?void 0:Ou.source}}};var Tu,$u,Mu;N.parameters={...N.parameters,docs:{...(Tu=N.parameters)==null?void 0:Tu.docs,source:{originalSource:`{
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
}`,...(Mu=($u=N.parameters)==null?void 0:$u.docs)==null?void 0:Mu.source}}};var Ru,_u,Gu;w.parameters={...w.parameters,docs:{...(Ru=w.parameters)==null?void 0:Ru.docs,source:{originalSource:`{
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
}`,...(Gu=(_u=w.parameters)==null?void 0:_u.docs)==null?void 0:Gu.source}}};var Pu,ju,Vu;O.parameters={...O.parameters,docs:{...(Pu=O.parameters)==null?void 0:Pu.docs,source:{originalSource:`{
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
}`,...(Vu=(ju=O.parameters)==null?void 0:ju.docs)==null?void 0:Vu.source}}};var zu,Hu,Uu;T.parameters={...T.parameters,docs:{...(zu=T.parameters)==null?void 0:zu.docs,source:{originalSource:`{
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
}`,...(Uu=(Hu=T.parameters)==null?void 0:Hu.docs)==null?void 0:Uu.source}}};var Xu,Yu,Wu;$.parameters={...$.parameters,docs:{...(Xu=$.parameters)==null?void 0:Xu.docs,source:{originalSource:`{
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
}`,...(Wu=(Yu=$.parameters)==null?void 0:Yu.docs)==null?void 0:Wu.source}}};var qu,Qu,Zu;M.parameters={...M.parameters,docs:{...(qu=M.parameters)==null?void 0:qu.docs,source:{originalSource:`{
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
}`,...(Zu=(Qu=M.parameters)==null?void 0:Qu.docs)==null?void 0:Zu.source}}};var Ju,Ku,u4;R.parameters={...R.parameters,docs:{...(Ju=R.parameters)==null?void 0:Ju.docs,source:{originalSource:`{
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
}`,...(u4=(Ku=R.parameters)==null?void 0:Ku.docs)==null?void 0:u4.source}}};const A4=["Default","Collapsed","WithoutGroups","FilteredByStatus","Empty","ManyMessages","FromFlatList","ControlledState","ListOnly","CustomActions","CustomLabelsAndIcons","CustomMessageRender","CustomGroupRender","CustomActionsSlot","CopyHandlers","HeaderCustomization","ExternalCounts","CustomStyling","Headless","StatusIcons","SingleParts"],k4=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:L,ControlledState:F,CopyHandlers:N,CustomActions:b,CustomActionsSlot:h,CustomGroupRender:k,CustomLabelsAndIcons:I,CustomMessageRender:v,CustomStyling:T,Default:x,Empty:C,ExternalCounts:O,FilteredByStatus:y,FromFlatList:A,HeaderCustomization:w,Headless:$,ListOnly:S,ManyMessages:B,SingleParts:R,StatusIcons:M,WithoutGroups:D,__namedExportsOrder:A4,default:y4},Symbol.toStringTag,{value:"Module"}));export{k4 as L};
