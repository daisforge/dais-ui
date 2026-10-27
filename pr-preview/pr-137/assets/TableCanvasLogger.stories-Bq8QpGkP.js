import{r as c,j as u}from"./react-CAOzMBF_.js";import{g as O4}from"./getFuncAsString-DnrLf2YT.js";import{s}from"./storySourceDoc-tVKyHcEN.js";import{w as A4,r as w4,u as $4,v as _4}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{T as R4,a as d,g as j4,u as M4,b as P4,c as G4,d as k4,e as z4,f as R,h as N4,i as X4}from"./TableCanvas-DlX-Wh2b.js";import{t as p,l as S4,a as H4}from"./@salutejs/sdds-finai-CKhMjg07.js";import{uM as U4,fj as I4}from"./@salutejs/plasma-icons-Do5ggeDI.js";const i=(e,n,t)=>new Date(2025,0,1,e,n,t),W4=["System.Runtime.InteropServices.COMException (0x800A03EC):",'"The file could not be accessed. The system cannot find the path specified. (Exception from HRESULT: 0x800A03EC)"','Nested Inner Exception: System.IO.IOException: "The process cannot access the file',"'\\\\nas01\\shared\\reports\\Q3_Financial_Summary_TEMP.xlsx' because it is being used by another process.",'The sharing violation occurred while attempting to flush the binary stream to the physical disk."'].join(`
`),g=[{id:"excel",status:"error",title:"Ошибка скачивания Excel",defaultOpen:!0,items:[{id:"excel-1",status:"error",title:"Не удалось получить доступ к файлу. Системе не удаётся найти указанный путь",description:W4,traceId:"4bf92f3577b34da6a3ce929d0e0e4736",code:"F23",date:i(18,7,32)},{id:"excel-2",status:"error",title:"Файл занят другим процессом",code:"F24",date:i(18,7,33)}]},{id:"validation",status:"warning",title:"Проверка данных",items:[{id:"validation-1",status:"warning",title:"Пропущено 3 пустые строки",date:i(18,5,10)},{id:"validation-2",status:"warning",title:"Дубликаты ключей объединены",description:"Объединено 12 строк по ключу «Подразделение + Статья»",date:i(18,5,11)}]},{id:"saved",status:"success",title:"Сохранение",items:[{id:"saved-1",status:"success",title:"Изменения сохранены",date:i(18,1,0)}]},{id:"info",status:"info",title:"Информация",items:[{id:"info-1",status:"info",title:"Обновлён справочник подразделений",date:i(17,59,3)}]}],l=[{id:"p1",status:"error",title:"Не удалось загрузить справочник",description:"GET /api/dictionaries/42 вернул 502",traceId:"9a8b7c6d5e4f",code:"F23",date:i(9,0,0)},{id:"p2",status:"warning",title:"Часть данных устарела",date:i(9,1,0)},{id:"p3",status:"success",title:"Отчёт сформирован",date:i(9,2,0)},{id:"p4",status:"info",title:"Подключено к рабочей книге",date:i(9,3,0)}];function $({items:e}){const[n,t]=c.useState(!1),a=Array.from({length:40},(r,o)=>({id:o,report:`Отчёт ${o+1}`}));return u.jsx(R4,{rows:a,columnConfig:[{key:"id",name:"ID",width:100},{key:"report",name:"Отчёт",width:360}],tableConfig:{containerStyle:{height:520},bottomSheetConfig:{height:n?280:40,minHeight:40,content:u.jsx(d,{items:e,open:n,onOpenChange:t})}}})}try{$.displayName="TableCanvasLoggerInTableExample",$.__docgenInfo={description:"",displayName:"TableCanvasLoggerInTableExample",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TableCanvasLoggerItem[]"}}}}}catch{}const V4=/^[A-Za-z_$][\w$]*$/,j=e=>`'${e.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n")}'`,_=(e,n=0)=>{const t="  ".repeat(n+1),a="  ".repeat(n);if(e===null)return"null";if(typeof e=="string")return j(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Date)return`new Date(${[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()].join(", ")})`;if(Array.isArray(e))return e.length?`[
${e.map(o=>`${t}${_(o,n+1)},`).join(`
`)}
${a}]`:"[]";if(typeof e=="object"&&e){const r=Object.entries(e).filter(([,o])=>o!==void 0).map(([o,h4])=>`${t}${V4.test(o)?o:j(o)}: ${_(h4,n+1)},`);return r.length?`{
${r.join(`
`)}
${a}}`:"{}"}return"undefined"},F=(e,n,t)=>`const ${e}: ${n} = ${_(t)};`,q4={title:"Локальные компоненты/TableCanvas/BottomSheet/Logger",component:d,tags:["!autodocs"],parameters:{docs:{layout:"padded"}},argTypes:{items:{control:!1},maxHeight:{control:"text"}},decorators:[e=>u.jsx("div",{style:{width:720},children:u.jsx(e,{})})]},Q4={error:()=>A4,warning:()=>_4,success:()=>$4,info:()=>w4},h=F("items","TableCanvasLoggerItem[]",g),m=F("items","TableCanvasLoggerItem[]",l),F4=`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,Y4=`
import { TableCanvas, TableCanvasLogger, type TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import React, { useState } from 'react';

${h}

${O4("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.inTable.tsx","TableCanvasLoggerInTableExample")}

<TableCanvasLoggerInTableExample items={items} />;
`,C={...s({type:"code",code:Y4}),name:"В нижней панели таблицы",render:()=>u.jsx($,{items:g})},E={...s({type:"code",preCode:F4,code:`${h}

export const Example = () => <TableCanvasLogger items={items} defaultOpen />;`}),name:"Базовый пример",args:{items:g,defaultOpen:!0}},x={name:"Управляемое состояние",...s({type:"code",preCode:`import { useState } from 'react';
import { Button } from '@daisforge/ui';
import { getTableCanvasLoggerGroupIds, TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerFilterValue, TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${h}

export const Example = () => {
  // Открыта ли панель
  const [open, setOpen] = useState(true);
  // Активный фильтр: 'all' | 'error' | 'warning' | 'info' | 'success'. При закрытии панели сбрасывается на 'all'
  const [filter, setFilter] = useState<TableCanvasLoggerFilterValue>('all');
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
        <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getTableCanvasLoggerGroupIds(items))} />
        <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
      </div>
      <TableCanvasLogger
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
};`}),render:()=>{const[e,n]=c.useState(!0),[t,a]=c.useState("all"),[r,o]=c.useState([]);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[u.jsx(p,{size:"xs",view:"secondary",text:e?"Закрыть":"Открыть",onClick:()=>n(!e)}),u.jsx(p,{size:"xs",view:"secondary",text:"Только ошибки",onClick:()=>{a("error"),n(!0)}}),u.jsx(p,{size:"xs",view:"secondary",text:"Развернуть группы",onClick:()=>o(j4(g))}),u.jsx(p,{size:"xs",view:"secondary",text:"Свернуть группы",onClick:()=>o([])})]}),u.jsx(d,{items:g,open:e,onOpenChange:n,filter:t,onFilterChange:a,expandedIds:r,onExpandedIdsChange:o})]})}},v={name:"Только список (TableCanvasLoggerList)",...s({type:"code",preCode:`import { TableCanvasLoggerList } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${h}

// TableCanvasLoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <TableCanvasLoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);`}),render:()=>u.jsx("div",{style:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:12},children:u.jsx(z4,{items:g,defaultExpandedIds:["excel"],maxHeight:360})})},f={name:"Свои действия сообщений",...s({type:"code",preCode:`import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,code:`export const Example = () => {
  const [log, setLog] = useState<string[]>([]);
  const items: TableCanvasLoggerItem[] = [
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
      <TableCanvasLogger items={items} defaultOpen />
      <BodyXS>
        Вызовы onClick:{' '}
        {log.length ? log.join(' → ') : 'пока нет, нажмите «Повторить» или иконку скачивания'}
      </BodyXS>
    </>
  );
};`}),render:()=>{const[e,n]=c.useState([]),t=[{id:"download",status:"error",title:"Не удалось выгрузить отчёт",description:"Превышено время ожидания ответа от сервиса выгрузки",date:new Date(2025,0,1,11,30,0),actions:[{id:"retry",text:"Повторить",onClick:a=>n(r=>[...r,`Повтор: ${a.id}`])},{id:"download",title:"Скачать лог",icon:u.jsx(I4,{size:"xs"}),onClick:a=>n(r=>[...r,`Скачивание лога: ${a.id}`])},{id:"disabled",text:"Недоступно",disabled:!0}]}];return u.jsxs(u.Fragment,{children:[u.jsx(d,{items:t,defaultOpen:!0}),u.jsxs(S4,{children:["Вызовы onClick:"," ",e.length?e.join(" → "):"пока нет, нажмите «Повторить» или иконку скачивания"]})]})}},b={name:"Свои тексты и иконки",...s({type:"code",preCode:`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconSyncError } from '@daisforge/ui/icons';
import { textNegative } from '@daisforge/ui/tokens';`,code:`${m}

export const Example = () => (
  <TableCanvasLogger
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
    statusIcons={{ error: <IconSyncError size="xs" color={textNegative} /> }}
    // Формат даты. Вернуть null, чтобы скрыть дату
    formatDate={(date) => new Date(date).toLocaleString('en-GB')}
  />
);`}),render:()=>u.jsx(d,{items:l,defaultOpen:!0,title:"System messages",labels:{all:"All",details:"Details",hide:"Hide",copyTraceId:"Copy ID",copied:"Copied",empty:"No messages"},statusIcons:{error:u.jsx(U4,{size:"xs",color:A4})},formatDate:e=>new Date(e).toLocaleString("en-GB")})},T={name:"Свой рендер сообщения",...s({type:"code",preCode:`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem, TableCanvasLoggerStatus } from '@daisforge/ui/components/TableCanvas';
import { textNegative, textPositive, textTertiary, textWarning } from '@daisforge/ui/tokens';`,code:`${m}

const STATUS_COLORS: Record<TableCanvasLoggerStatus, () => string> = {
  error: () => textNegative,
  warning: () => textWarning,
  success: () => textPositive,
  info: () => textTertiary,
};

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // renderMessage заменяет отрисовку сообщения.
    // defaultRender() возвращает стандартный вид, его можно обернуть
    renderMessage={({ item, defaultRender }) => (
      <div
        style={{
          borderLeft: \`3px solid \${STATUS_COLORS[item.status]()}\`,
          paddingLeft: 12,
        }}
      >
        {defaultRender()}
      </div>
    )}
  />
);`}),render:()=>u.jsx(d,{items:l,defaultOpen:!0,renderMessage:({item:e,defaultRender:n})=>u.jsx("div",{style:{borderLeft:`3px solid ${Q4[e.status]()}`,paddingLeft:12},children:n()})})},y={name:"Свой рендер группы",...s({type:"code",preCode:`import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${h}

export const Example = () => (
  <TableCanvasLogger
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
);`}),render:()=>u.jsx(d,{items:g,defaultOpen:!0,defaultExpandedIds:["excel"],renderGroup:({item:e,open:n,toggle:t,children:a})=>u.jsxs("section",{style:{border:"1px dashed rgba(0,0,0,0.2)",borderRadius:8,padding:8},children:[u.jsx(p,{size:"xxs",view:"clear",text:`${n?"▼":"▶"} ${e.title} (${e.items.length})`,onClick:t}),n&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,paddingTop:8},children:a})]})})},M=l.map(e=>({...e,meta:{source:"AE Data"}})),D={name:"Расширение строки действий и описания",...s({type:"code",preCode:`import { Button, TextXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`// meta: любые ваши данные, они доступны во всех render-функциях
${F("items","TableCanvasLoggerItem[]",M)}

export const Example = () => (
  <TableCanvasLogger
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
);`}),render:()=>u.jsx(d,{items:M,defaultOpen:!0,renderActions:(e,n)=>u.jsxs(u.Fragment,{children:[n,u.jsx(p,{size:"xxs",view:"secondary",text:"Создать тикет"})]}),renderDescription:e=>u.jsx("pre",{style:{margin:0,fontFamily:"monospace",fontSize:12},children:String(e.description)}),renderMessageExtra:e=>{var n;return u.jsxs(H4,{children:["Источник: ",String((n=e.meta)==null?void 0:n.source)]})}})},L={name:"Обработка копирования и кода",...s({type:"code",preCode:`import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${m}

export const Example = () => {
  const [events, setEvents] = useState<string[]>([]);

  return (
    <>
      <TableCanvasLogger
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
};`}),render:()=>{const[e,n]=c.useState([]);return u.jsxs(u.Fragment,{children:[u.jsx(d,{items:l,defaultOpen:!0,copyToClipboard:()=>{},onCopy:(t,a)=>n(r=>[...r,`copy:${t}:${a}`]),onCodeClick:t=>n(a=>[...a,`code:${t}`])}),u.jsxs(S4,{children:["Вызовы колбэков:"," ",e.join(" | ")||"пока нет, нажмите «Скопировать ID» или код"]})]})}},B={name:"Шапка: заголовок, иконка, доп. контент",...s({type:"code",preCode:`import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,code:`${m}

export const Example = () => (
  <TableCanvasLogger
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
);`}),render:()=>u.jsx(d,{items:l,defaultOpen:!0,title:"Журнал загрузки",icon:u.jsx(I4,{size:"xs"}),headerExtra:u.jsx(p,{size:"xxs",view:"clear",text:"Очистить",onClick:e=>e.stopPropagation()}),showEmptyFilters:!0})},A={name:"Стилизация: classes и $css",...s({type:"code",preCode:F4,code:`${m}

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // Классы отдельных слотов: root, header, filters, filter, list, group, groupHeader,
    // groupBody, message, messageIcon, messageTitle, messageActions, messageDate, messageDescription
    // classes={{ message: 'my-message' }}
    // Стили корня: строка, объект или css\`\`
    $css={{ padding: 16, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12 }}
  />
);`}),args:{items:l,defaultOpen:!0,$css:{padding:16,border:"1px solid rgba(0,0,0,0.12)",borderRadius:12}}},S={name:"Headless: useTableCanvasLogger + собственная вёрстка",...s({type:"code",preCode:`import { TableCanvasLoggerFilters, TableCanvasLoggerItems, TableCanvasLoggerProvider, useTableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${m}

export const Example = () => {
  // useTableCanvasLogger хранит состояние: фильтр, раскрытые элементы, счётчики, отфильтрованный список
  const logger = useTableCanvasLogger({ items, defaultFilter: 'all' });

  return (
    // TableCanvasLoggerProvider нужен вложенным частям (иконки, тексты, раскрытие)
    <TableCanvasLoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
      {/* Своя вёрстка: любые обёртки, шапки и расположение */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TableCanvasLoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
        <TableCanvasLoggerItems items={logger.visibleItems} />
      </div>
    </TableCanvasLoggerProvider>
  );
};`}),render:()=>{const e=M4({items:l,defaultFilter:"all"});return u.jsx(P4,{expandedIds:e.expandedIds,toggleExpanded:e.toggleExpanded,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx(G4,{counts:e.counts,value:e.filter,onChange:e.setFilter,showEmpty:!0}),u.jsx(k4,{items:e.visibleItems})]})})}},O=l.find(X4),w=g.find(e=>e.id==="validation"),I={name:"Отдельные части: TableCanvasLoggerMessage и TableCanvasLoggerGroup",...s({type:"code",preCode:`import { TableCanvasLoggerGroup, TableCanvasLoggerMessage } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerGroupItem, TableCanvasLoggerMessageItem } from '@daisforge/ui/components/TableCanvas';`,code:`${F("message","TableCanvasLoggerMessageItem",O)}

${F("group","TableCanvasLoggerGroupItem",w)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <TableCanvasLoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <TableCanvasLoggerGroup item={group} open>
      <TableCanvasLoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </TableCanvasLoggerGroup>
  </div>
);`}),render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[O&&u.jsx(R,{item:O}),w&&u.jsx(N4,{item:w,open:!0,children:u.jsx(R,{item:{id:"standalone-2",status:"warning",title:"Вложенное сообщение"}})})]})};var P,G,k;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    code: IN_TABLE_CODE
  }),
  name: 'В нижней панели таблицы',
  render: () => <TableCanvasLoggerInTableExample items={GROUPED_ITEMS} />
}`,...(k=(G=C.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var z,N,X;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    preCode: TABLE_CANVAS_LOGGER_IMPORT,
    code: \`\${GROUPED_SRC}

export const Example = () => <TableCanvasLogger items={items} defaultOpen />;\`
  }),
  name: 'Базовый пример',
  args: {
    items: GROUPED_ITEMS,
    defaultOpen: true
  }
}`,...(X=(N=E.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var H,U,W;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Управляемое состояние',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useState } from 'react';
import { Button } from '@daisforge/ui';
import { getTableCanvasLoggerGroupIds, TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerFilterValue, TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`\${GROUPED_SRC}

export const Example = () => {
  // Открыта ли панель
  const [open, setOpen] = useState(true);
  // Активный фильтр: 'all' | 'error' | 'warning' | 'info' | 'success'. При закрытии панели сбрасывается на 'all'
  const [filter, setFilter] = useState<TableCanvasLoggerFilterValue>('all');
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
        <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getTableCanvasLoggerGroupIds(items))} />
        <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
      </div>
      <TableCanvasLogger
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
    const [filter, setFilter] = useState<TableCanvasLoggerFilterValue>('all');
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
          <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getTableCanvasLoggerGroupIds(GROUPED_ITEMS))} />
          <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
        </div>
        <TableCanvasLogger items={GROUPED_ITEMS} open={open} onOpenChange={setOpen} filter={filter} onFilterChange={setFilter} expandedIds={expanded} onExpandedIdsChange={setExpanded} />
      </div>;
  }
}`,...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var V,q,Q;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Только список (TableCanvasLoggerList)',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { TableCanvasLoggerList } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`\${GROUPED_SRC}

// TableCanvasLoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <TableCanvasLoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);\`
  }),
  render: () => <div style={{
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 12
  }}>
      <TableCanvasLoggerList items={GROUPED_ITEMS} defaultExpandedIds={['excel']} maxHeight={360} />
    </div>
}`,...(Q=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Y,Z,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Свои действия сообщений',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';\`,
    code: \`export const Example = () => {
  const [log, setLog] = useState<string[]>([]);
  const items: TableCanvasLoggerItem[] = [
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
      <TableCanvasLogger items={items} defaultOpen />
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
    const items: TableCanvasLoggerItem[] = [{
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
        <TableCanvasLogger items={items} defaultOpen />
        <BodyXS>
          Вызовы onClick:{' '}
          {log.length ? log.join(' → ') : 'пока нет, нажмите «Повторить» или иконку скачивания'}
        </BodyXS>
      </>;
  }
}`,...(J=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,e4,u4;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Свои тексты и иконки',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconSyncError } from '@daisforge/ui/icons';
import { textNegative } from '@daisforge/ui/tokens';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => (
  <TableCanvasLogger
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
    statusIcons={{ error: <IconSyncError size="xs" color={textNegative} /> }}
    // Формат даты. Вернуть null, чтобы скрыть дату
    formatDate={(date) => new Date(date).toLocaleString('en-GB')}
  />
);\`
  }),
  render: () => <TableCanvasLogger items={PLAIN_ITEMS} defaultOpen title="System messages" labels={{
    all: 'All',
    details: 'Details',
    hide: 'Hide',
    copyTraceId: 'Copy ID',
    copied: 'Copied',
    empty: 'No messages'
  }} statusIcons={{
    error: <IconSyncError size="xs" color={textNegative} />
  }} formatDate={date => new Date(date).toLocaleString('en-GB')} />
}`,...(u4=(e4=b.parameters)==null?void 0:e4.docs)==null?void 0:u4.source}}};var n4,t4,a4;T.parameters={...T.parameters,docs:{...(n4=T.parameters)==null?void 0:n4.docs,source:{originalSource:`{
  name: 'Свой рендер сообщения',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem, TableCanvasLoggerStatus } from '@daisforge/ui/components/TableCanvas';
import { textNegative, textPositive, textTertiary, textWarning } from '@daisforge/ui/tokens';\`,
    code: \`\${PLAIN_SRC}

const STATUS_COLORS: Record<TableCanvasLoggerStatus, () => string> = {
  error: () => textNegative,
  warning: () => textWarning,
  success: () => textPositive,
  info: () => textTertiary,
};

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // renderMessage заменяет отрисовку сообщения.
    // defaultRender() возвращает стандартный вид, его можно обернуть
    renderMessage={({ item, defaultRender }) => (
      <div
        style={{
          borderLeft: \\\`3px solid \\\${STATUS_COLORS[item.status]()}\\\`,
          paddingLeft: 12,
        }}
      >
        {defaultRender()}
      </div>
    )}
  />
);\`
  }),
  render: () => <TableCanvasLogger items={PLAIN_ITEMS} defaultOpen renderMessage={({
    item,
    defaultRender
  }) => <div style={{
    borderLeft: \`3px solid \${STATUS_COLORS[item.status]()}\`,
    paddingLeft: 12
  }}>
          {defaultRender()}
        </div>} />
}`,...(a4=(t4=T.parameters)==null?void 0:t4.docs)==null?void 0:a4.source}}};var o4,s4,r4;y.parameters={...y.parameters,docs:{...(o4=y.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  name: 'Свой рендер группы',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`\${GROUPED_SRC}

export const Example = () => (
  <TableCanvasLogger
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
  render: () => <TableCanvasLogger items={GROUPED_ITEMS} defaultOpen defaultExpandedIds={['excel']} renderGroup={({
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
}`,...(r4=(s4=y.parameters)==null?void 0:s4.docs)==null?void 0:r4.source}}};var i4,d4,l4;D.parameters={...D.parameters,docs:{...(i4=D.parameters)==null?void 0:i4.docs,source:{originalSource:`{
  name: 'Расширение строки действий и описания',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Button, TextXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`// meta: любые ваши данные, они доступны во всех render-функциях
\${declareSource('items', 'TableCanvasLoggerItem[]', ITEMS_WITH_META)}

export const Example = () => (
  <TableCanvasLogger
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
  render: () => <TableCanvasLogger items={ITEMS_WITH_META} defaultOpen renderActions={(_item, defaults) => <>
          {defaults}
          <Button size="xxs" view="secondary" text="Создать тикет" />
        </>} renderDescription={item => <pre style={{
    margin: 0,
    fontFamily: 'monospace',
    fontSize: 12
  }}>
          {String(item.description)}
        </pre>} renderMessageExtra={item => <TextXS>Источник: {String(item.meta?.source)}</TextXS>} />
}`,...(l4=(d4=D.parameters)==null?void 0:d4.docs)==null?void 0:l4.source}}};var g4,p4,c4;L.parameters={...L.parameters,docs:{...(g4=L.parameters)==null?void 0:g4.docs,source:{originalSource:`{
  name: 'Обработка копирования и кода',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => {
  const [events, setEvents] = useState<string[]>([]);

  return (
    <>
      <TableCanvasLogger
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
        <TableCanvasLogger items={PLAIN_ITEMS} defaultOpen copyToClipboard={() => undefined} onCopy={(kind, value) => setEvents(prev => [...prev, \`copy:\${kind}:\${value}\`])} onCodeClick={code => setEvents(prev => [...prev, \`code:\${code}\`])} />
        <BodyXS>
          Вызовы колбэков:{' '}
          {events.join(' | ') || 'пока нет, нажмите «Скопировать ID» или код'}
        </BodyXS>
      </>;
  }
}`,...(c4=(p4=L.parameters)==null?void 0:p4.docs)==null?void 0:c4.source}}};var m4,C4,E4;B.parameters={...B.parameters,docs:{...(m4=B.parameters)==null?void 0:m4.docs,source:{originalSource:`{
  name: 'Шапка: заголовок, иконка, доп. контент',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => (
  <TableCanvasLogger
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
  render: () => <TableCanvasLogger items={PLAIN_ITEMS} defaultOpen title="Журнал загрузки" icon={<IconCloudDownloadOutline size="xs" />} headerExtra={<Button size="xxs" view="clear" text="Очистить" onClick={e => e.stopPropagation()} />} showEmptyFilters />
}`,...(E4=(C4=B.parameters)==null?void 0:C4.docs)==null?void 0:E4.source}}};var x4,v4,f4;A.parameters={...A.parameters,docs:{...(x4=A.parameters)==null?void 0:x4.docs,source:{originalSource:`{
  name: 'Стилизация: classes и $css',
  ...storySourceDoc({
    type: 'code',
    preCode: TABLE_CANVAS_LOGGER_IMPORT,
    code: \`\${PLAIN_SRC}

export const Example = () => (
  <TableCanvasLogger
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
}`,...(f4=(v4=A.parameters)==null?void 0:v4.docs)==null?void 0:f4.source}}};var b4,T4,y4;S.parameters={...S.parameters,docs:{...(b4=S.parameters)==null?void 0:b4.docs,source:{originalSource:`{
  name: 'Headless: useTableCanvasLogger + собственная вёрстка',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { TableCanvasLoggerFilters, TableCanvasLoggerItems, TableCanvasLoggerProvider, useTableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`\${PLAIN_SRC}

export const Example = () => {
  // useTableCanvasLogger хранит состояние: фильтр, раскрытые элементы, счётчики, отфильтрованный список
  const logger = useTableCanvasLogger({ items, defaultFilter: 'all' });

  return (
    // TableCanvasLoggerProvider нужен вложенным частям (иконки, тексты, раскрытие)
    <TableCanvasLoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
      {/* Своя вёрстка: любые обёртки, шапки и расположение */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TableCanvasLoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
        <TableCanvasLoggerItems items={logger.visibleItems} />
      </div>
    </TableCanvasLoggerProvider>
  );
};\`
  }),
  render: () => {
    const logger = useTableCanvasLogger({
      items: PLAIN_ITEMS,
      defaultFilter: 'all'
    });
    return <TableCanvasLoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <TableCanvasLoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
          <TableCanvasLoggerItems items={logger.visibleItems} />
        </div>
      </TableCanvasLoggerProvider>;
  }
}`,...(y4=(T4=S.parameters)==null?void 0:T4.docs)==null?void 0:y4.source}}};var D4,L4,B4;I.parameters={...I.parameters,docs:{...(D4=I.parameters)==null?void 0:D4.docs,source:{originalSource:`{
  name: 'Отдельные части: TableCanvasLoggerMessage и TableCanvasLoggerGroup',
  ...storySourceDoc({
    type: 'code',
    preCode: \`import { TableCanvasLoggerGroup, TableCanvasLoggerMessage } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerGroupItem, TableCanvasLoggerMessageItem } from '@daisforge/ui/components/TableCanvas';\`,
    code: \`\${declareSource('message', 'TableCanvasLoggerMessageItem', singleMessage)}

\${declareSource('group', 'TableCanvasLoggerGroupItem', singleGroup)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <TableCanvasLoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <TableCanvasLoggerGroup item={group} open>
      <TableCanvasLoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </TableCanvasLoggerGroup>
  </div>
);\`
  }),
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {singleMessage && <TableCanvasLoggerMessage item={singleMessage} />}
      {singleGroup && <TableCanvasLoggerGroup item={singleGroup} open>
          <TableCanvasLoggerMessage item={{
        id: 'standalone-2',
        status: 'warning',
        title: 'Вложенное сообщение'
      }} />
        </TableCanvasLoggerGroup>}
    </div>
}`,...(B4=(L4=I.parameters)==null?void 0:L4.docs)==null?void 0:B4.source}}};const Z4=["InTable","Default","ControlledState","ListOnly","CustomActions","CustomLabelsAndIcons","CustomMessageRender","CustomGroupRender","CustomActionsSlot","CopyHandlers","HeaderCustomization","CustomStyling","Headless","SingleParts"],oe=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:x,CopyHandlers:L,CustomActions:f,CustomActionsSlot:D,CustomGroupRender:y,CustomLabelsAndIcons:b,CustomMessageRender:T,CustomStyling:A,Default:E,HeaderCustomization:B,Headless:S,InTable:C,ListOnly:v,SingleParts:I,__namedExportsOrder:Z4,default:q4},Symbol.toStringTag,{value:"Module"}));export{x as C,E as D,B as H,C as I,v as L,I as S,oe as T,f as a,b,T as c,y as d,D as e,L as f,A as g,S as h};
