import{r as c,d as u}from"./react-D2T61mpp.js";import{g as Fe}from"./getFuncAsString-gqZbQPX4.js";import{s as t}from"./storySourceDoc-tVKyHcEN.js";import{w as Se,r as Ne,u as we,v as Oe}from"./@salutejs/sdds-themes-DPwMcFh9.js";import{T as $e,a as l,g as _e,u as Re,b as je,c as Me,d as Pe,e as Ge,f as $,h as Ve,i as ze}from"./TableCanvas-C10W5NLT.js";import{t as m,l as he,a as Xe}from"./@salutejs/sdds-finai-BWYHBdru.js";import{uM as He,fj as Ae}from"./@salutejs/plasma-icons-lvaNTfmN.js";const i=(e,a,n)=>new Date(2025,0,1,e,a,n),Ue=["System.Runtime.InteropServices.COMException (0x800A03EC):",'"The file could not be accessed. The system cannot find the path specified. (Exception from HRESULT: 0x800A03EC)"','Nested Inner Exception: System.IO.IOException: "The process cannot access the file',"'\\\\nas01\\shared\\reports\\Q3_Financial_Summary_TEMP.xlsx' because it is being used by another process.",'The sharing violation occurred while attempting to flush the binary stream to the physical disk."'].join(`
`),g=[{id:"excel",status:"error",title:"Ошибка скачивания Excel",defaultOpen:!0,items:[{id:"excel-1",status:"error",title:"Не удалось получить доступ к файлу. Системе не удаётся найти указанный путь",description:Ue,traceId:"4bf92f3577b34da6a3ce929d0e0e4736",code:"F23",date:i(18,7,32)},{id:"excel-2",status:"error",title:"Файл занят другим процессом",code:"F24",date:i(18,7,33)}]},{id:"validation",status:"warning",title:"Проверка данных",items:[{id:"validation-1",status:"warning",title:"Пропущено 3 пустые строки",date:i(18,5,10)},{id:"validation-2",status:"warning",title:"Дубликаты ключей объединены",description:"Объединено 12 строк по ключу «Подразделение + Статья»",date:i(18,5,11)}]},{id:"saved",status:"success",title:"Сохранение",items:[{id:"saved-1",status:"success",title:"Изменения сохранены",date:i(18,1,0)}]},{id:"info",status:"info",title:"Информация",items:[{id:"info-1",status:"info",title:"Обновлён справочник подразделений",date:i(17,59,3)}]}],d=[{id:"p1",status:"error",title:"Не удалось загрузить справочник",description:"GET /api/dictionaries/42 вернул 502",traceId:"9a8b7c6d5e4f",code:"F23",date:i(9,0,0)},{id:"p2",status:"warning",title:"Часть данных устарела",date:i(9,1,0)},{id:"p3",status:"success",title:"Отчёт сформирован",date:i(9,2,0)},{id:"p4",status:"info",title:"Подключено к рабочей книге",date:i(9,3,0)}];function w({items:e}){const[a,n]=c.useState(!1),s=Array.from({length:40},(r,o)=>({id:o,report:`Отчёт ${o+1}`}));return u.jsxDEV($e,{rows:s,columnConfig:[{key:"id",name:"ID",width:100},{key:"report",name:"Отчёт",width:360}],tableConfig:{containerStyle:{height:520},bottomSheetConfig:{height:a?280:40,minHeight:40,content:u.jsxDEV(l,{items:e,open:a,onOpenChange:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.inTable.tsx",lineNumber:32,columnNumber:13},this)}}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.inTable.tsx",lineNumber:20,columnNumber:5},this)}try{w.displayName="TableCanvasLoggerInTableExample",w.__docgenInfo={description:"",displayName:"TableCanvasLoggerInTableExample",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TableCanvasLoggerItem[]"}}}}}catch{}const We=/^[A-Za-z_$][\w$]*$/,_=e=>`'${e.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n")}'`,O=(e,a=0)=>{const n="  ".repeat(a+1),s="  ".repeat(a);if(e===null)return"null";if(typeof e=="string")return _(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Date)return`new Date(${[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()].join(", ")})`;if(Array.isArray(e))return e.length?`[
${e.map(o=>`${n}${O(o,a+1)},`).join(`
`)}
${s}]`:"[]";if(typeof e=="object"&&e){const r=Object.entries(e).filter(([,o])=>o!==void 0).map(([o,Ie])=>`${n}${We.test(o)?o:_(o)}: ${O(Ie,a+1)},`);return r.length?`{
${r.join(`
`)}
${s}}`:"{}"}return"undefined"},k=(e,a,n)=>`const ${e}: ${a} = ${O(n)};`,qe={title:"Локальные компоненты/TableCanvas/BottomSheet/Logger",component:l,tags:["!autodocs"],parameters:{docs:{layout:"padded"}},argTypes:{items:{control:!1},maxHeight:{control:"text"}},decorators:[e=>u.jsxDEV("div",{style:{width:720},children:u.jsxDEV(e,{},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:52,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:51,columnNumber:7},void 0)]},Qe={error:()=>Se,warning:()=>Oe,success:()=>we,info:()=>Ne},I=k("items","TableCanvasLoggerItem[]",g),p=k("items","TableCanvasLoggerItem[]",d),ke=`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,Ye=`
import { TableCanvas, TableCanvasLogger, type TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import React, { useState } from 'react';

${I}

${Fe("packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.inTable.tsx","TableCanvasLoggerInTableExample")}

<TableCanvasLoggerInTableExample items={items} />;
`,C={...t({type:"code",code:Ye}),name:"В нижней панели таблицы",render:()=>u.jsxDEV(w,{items:g},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:99,columnNumber:17},void 0)},b={...t({type:"code",preCode:ke,code:`${I}

export const Example = () => <TableCanvasLogger items={items} defaultOpen />;`}),name:"Базовый пример",args:{items:g,defaultOpen:!0}},v={name:"Управляемое состояние",...t({type:"code",preCode:`import { useState } from 'react';
import { Button } from '@daisforge/ui';
import { getTableCanvasLoggerGroupIds, TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerFilterValue, TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${I}

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
};`}),render:()=>{const[e,a]=c.useState(!0),[n,s]=c.useState("all"),[r,o]=c.useState([]);return u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxDEV("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[u.jsxDEV(m,{size:"xs",view:"secondary",text:e?"Закрыть":"Открыть",onClick:()=>a(!e)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:169,columnNumber:11},void 0),u.jsxDEV(m,{size:"xs",view:"secondary",text:"Только ошибки",onClick:()=>{s("error"),a(!0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:175,columnNumber:11},void 0),u.jsxDEV(m,{size:"xs",view:"secondary",text:"Развернуть группы",onClick:()=>o(_e(g))},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:184,columnNumber:11},void 0),u.jsxDEV(m,{size:"xs",view:"secondary",text:"Свернуть группы",onClick:()=>o([])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:192,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:168,columnNumber:9},void 0),u.jsxDEV(l,{items:g,open:e,onOpenChange:a,filter:n,onFilterChange:s,expandedIds:r,onExpandedIdsChange:o},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:199,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:167,columnNumber:7},void 0)}},f={name:"Только список (TableCanvasLoggerList)",...t({type:"code",preCode:`import { TableCanvasLoggerList } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${I}

// TableCanvasLoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <TableCanvasLoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);`}),render:()=>u.jsxDEV("div",{style:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:12},children:u.jsxDEV(Ge,{items:g,defaultExpandedIds:["excel"],maxHeight:360},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:230,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:229,columnNumber:5},void 0)},E={name:"Свои действия сообщений",...t({type:"code",preCode:`import { useState } from 'react';
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
};`}),render:()=>{const[e,a]=c.useState([]),n=[{id:"download",status:"error",title:"Не удалось выгрузить отчёт",description:"Превышено время ожидания ответа от сервиса выгрузки",date:new Date(2025,0,1,11,30,0),actions:[{id:"retry",text:"Повторить",onClick:s=>a(r=>[...r,`Повтор: ${s.id}`])},{id:"download",title:"Скачать лог",icon:u.jsxDEV(Ae,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:308,columnNumber:19},void 0),onClick:s=>a(r=>[...r,`Скачивание лога: ${s.id}`])},{id:"disabled",text:"Недоступно",disabled:!0}]}];return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(l,{items:n,defaultOpen:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:319,columnNumber:9},void 0),u.jsxDEV(he,{children:["Вызовы onClick:"," ",e.length?e.join(" → "):"пока нет, нажмите «Повторить» или иконку скачивания"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:320,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:318,columnNumber:7},void 0)}},T={name:"Свои тексты и иконки",...t({type:"code",preCode:`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconSyncError } from '@daisforge/ui/icons';
import { textNegative } from '@daisforge/ui/tokens';`,code:`${p}

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
);`}),render:()=>u.jsxDEV(l,{items:d,defaultOpen:!0,title:"System messages",labels:{all:"All",details:"Details",hide:"Hide",copyTraceId:"Copy ID",copied:"Copied",empty:"No messages"},statusIcons:{error:u.jsxDEV(He,{size:"xs",color:Se},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:376,columnNumber:29},void 0)},formatDate:e=>new Date(e).toLocaleString("en-GB")},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:364,columnNumber:5},void 0)},x={name:"Свой рендер сообщения",...t({type:"code",preCode:`import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem, TableCanvasLoggerStatus } from '@daisforge/ui/components/TableCanvas';
import { textNegative, textPositive, textTertiary, textWarning } from '@daisforge/ui/tokens';`,code:`${p}

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
);`}),render:()=>u.jsxDEV(l,{items:d,defaultOpen:!0,renderMessage:({item:e,defaultRender:a})=>u.jsxDEV("div",{style:{borderLeft:`3px solid ${Qe[e.status]()}`,paddingLeft:12},children:a()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:422,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:418,columnNumber:5},void 0)},L={name:"Свой рендер группы",...t({type:"code",preCode:`import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${I}

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
);`}),render:()=>u.jsxDEV(l,{items:g,defaultOpen:!0,defaultExpandedIds:["excel"],renderGroup:({item:e,open:a,toggle:n,children:s})=>u.jsxDEV("section",{style:{border:"1px dashed rgba(0,0,0,0.2)",borderRadius:8,padding:8},children:[u.jsxDEV(m,{size:"xxs",view:"clear",text:`${a?"▼":"▶"} ${e.title} (${e.items.length})`,onClick:n},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:495,columnNumber:11},void 0),a&&u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:12,paddingTop:8},children:s},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:502,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:488,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:483,columnNumber:5},void 0)},R=d.map(e=>({...e,meta:{source:"AE Data"}})),y={name:"Расширение строки действий и описания",...t({type:"code",preCode:`import { Button, TextXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`// meta: любые ваши данные, они доступны во всех render-функциях
${k("items","TableCanvasLoggerItem[]",R)}

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
);`}),render:()=>u.jsxDEV(l,{items:R,defaultOpen:!0,renderActions:(e,a)=>u.jsxDEV(u.Fragment,{children:[a,u.jsxDEV(m,{size:"xxs",view:"secondary",text:"Создать тикет"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:563,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:561,columnNumber:9},void 0),renderDescription:e=>u.jsxDEV("pre",{style:{margin:0,fontFamily:"monospace",fontSize:12},children:String(e.description)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:567,columnNumber:9},void 0),renderMessageExtra:e=>{var a;return u.jsxDEV(Xe,{children:["Источник: ",String((a=e.meta)==null?void 0:a.source)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:572,columnNumber:9},void 0)}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:557,columnNumber:5},void 0)},D={name:"Обработка копирования и кода",...t({type:"code",preCode:`import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${p}

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
};`}),render:()=>{const[e,a]=c.useState([]);return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(l,{items:d,defaultOpen:!0,copyToClipboard:()=>{},onCopy:(n,s)=>a(r=>[...r,`copy:${n}:${s}`]),onCodeClick:n=>a(s=>[...s,`code:${n}`])},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:615,columnNumber:9},void 0),u.jsxDEV(he,{children:["Вызовы колбэков:"," ",e.join(" | ")||"пока нет, нажмите «Скопировать ID» или код"]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:624,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:614,columnNumber:7},void 0)}},B={name:"Шапка: заголовок, иконка, доп. контент",...t({type:"code",preCode:`import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,code:`${p}

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
);`}),render:()=>u.jsxDEV(l,{items:d,defaultOpen:!0,title:"Журнал загрузки",icon:u.jsxDEV(Ae,{size:"xs"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:663,columnNumber:13},void 0),headerExtra:u.jsxDEV(m,{size:"xxs",view:"clear",text:"Очистить",onClick:e=>e.stopPropagation()},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:665,columnNumber:9},void 0),showEmptyFilters:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:659,columnNumber:5},void 0)},S={name:"Стилизация: classes и $css",...t({type:"code",preCode:ke,code:`${p}

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
);`}),args:{items:d,defaultOpen:!0,$css:{padding:16,border:"1px solid rgba(0,0,0,0.12)",borderRadius:12}}},h={name:"Headless: useTableCanvasLogger + собственная вёрстка",...t({type:"code",preCode:`import { TableCanvasLoggerFilters, TableCanvasLoggerItems, TableCanvasLoggerProvider, useTableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,code:`${p}

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
};`}),render:()=>{const e=Re({items:d,defaultFilter:"all"});return u.jsxDEV(je,{expandedIds:e.expandedIds,toggleExpanded:e.toggleExpanded,children:u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxDEV(Me,{counts:e.counts,value:e.filter,onChange:e.setFilter,showEmpty:!0},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:743,columnNumber:11},void 0),u.jsxDEV(Pe,{items:e.visibleItems},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:749,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:742,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:738,columnNumber:7},void 0)}},F=d.find(ze),N=g.find(e=>e.id==="validation"),A={name:"Отдельные части: TableCanvasLoggerMessage и TableCanvasLoggerGroup",...t({type:"code",preCode:`import { TableCanvasLoggerGroup, TableCanvasLoggerMessage } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerGroupItem, TableCanvasLoggerMessageItem } from '@daisforge/ui/components/TableCanvas';`,code:`${k("message","TableCanvasLoggerMessageItem",F)}

${k("group","TableCanvasLoggerGroupItem",N)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <TableCanvasLoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <TableCanvasLoggerGroup item={group} open>
      <TableCanvasLoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </TableCanvasLoggerGroup>
  </div>
);`}),render:()=>u.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[F&&u.jsxDEV($,{item:F},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:789,columnNumber:25},void 0),N&&u.jsxDEV(Ve,{item:N,open:!0,children:u.jsxDEV($,{item:{id:"standalone-2",status:"warning",title:"Вложенное сообщение"}},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:792,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:791,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.stories.tsx",lineNumber:788,columnNumber:5},void 0)};var j,M,P;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...storySourceDoc({
    type: 'code',
    code: IN_TABLE_CODE
  }),
  name: 'В нижней панели таблицы',
  render: () => <TableCanvasLoggerInTableExample items={GROUPED_ITEMS} />
}`,...(P=(M=C.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var G,V,z;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(V=b.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var X,H,U;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(U=(H=v.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,q,Q;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(q=f.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Y,Z,J;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,ee,ue;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ue=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ue.source}}};var ae,ne,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,te,re;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(te=L.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,le,de;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ge,me,ce;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ce=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,Ce,be;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var ve,fe,Ee;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};var Te,xe,Le;h.parameters={...h.parameters,docs:{...(Te=h.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Le=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:Le.source}}};var ye,De,Be;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Be=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};const Ze=["InTable","Default","ControlledState","ListOnly","CustomActions","CustomLabelsAndIcons","CustomMessageRender","CustomGroupRender","CustomActionsSlot","CopyHandlers","HeaderCustomization","CustomStyling","Headless","SingleParts"],ou=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:v,CopyHandlers:D,CustomActions:E,CustomActionsSlot:y,CustomGroupRender:L,CustomLabelsAndIcons:T,CustomMessageRender:x,CustomStyling:S,Default:b,HeaderCustomization:B,Headless:h,InTable:C,ListOnly:f,SingleParts:A,__namedExportsOrder:Ze,default:qe},Symbol.toStringTag,{value:"Module"}));export{v as C,b as D,B as H,C as I,f as L,A as S,ou as T,E as a,T as b,x as c,L as d,y as e,D as f,S as g,h};
