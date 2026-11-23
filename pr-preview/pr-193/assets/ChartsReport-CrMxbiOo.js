import{j as n}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-mKquPocI.js";import{M as d}from"./WithTooltip-KJL26V4Q-C9snA44b.js";import{C as l}from"./ChartsReport.stories-DS9pp9xJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-ChsoKbNC.js";import"./@tanstack/react-virtual-QRzx54Th.js";import"./preload-helper-C_zUFXUY.js";import"./index-Cu4lwwaE.js";import"./index-Bq810BSt.js";import"./AiAgentPopup-CPiuFpM7.js";import"./TextArea-CHFodWOJ.js";import"./sharedUtilsInputs-DbZh-QRR.js";import"./constants-Dyz8I1EV.js";import"./@sddsjs/sdds_finai-D-rO1ecf.js";import"./@salutejs/sdds-finai-CBl2Z6DX.js";import"./@salutejs/plasma-icons-1TCGvzmd.js";import"./utils-BKJAJHmZ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./sharedUtilsResizable-CgcEYEB2.js";import"./Typography-5KyJRrIU.js";import"./TableCanvas-B7jlUVHD.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-B3wCTA8J.js";import"./Box-tzqS-Nh4.js";import"./Collapse-Dk4xyTvf.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-006Ssm5C.js";import"./@daisforge/glide-data-grid-CoDMDuM0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-C0CUs4D0.js";import"./sharedUiSearch-DZ1uL2Yj.js";import"./TextField-C-3ULIlg.js";import"./TypographyWithAutoTooltip-skZwq5lh.js";import"./ListOfFilters-BlDMMOAw.js";import"./Table-D3Mm0M_U.js";import"./react-data-grid-CYj7lJMP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-_QeVdxzl.js";import"./NumberFormat-B73BQGAM.js";import"./EmptyState-BoffFkaY.js";import"./unidentified@3x-B3KotUFa.js";import"./MassActions-D91OzxuB.js";import"./Autocomplete-CPscEsgX.js";import"./FiltersActions-CICr9Sel.js";import"./IconButton-CRMJuemm.js";import"./TooltipList-CTbOsFXH.js";import"./ErrorPage-CuasRas-.js";import"./runSteps-BF5tvfXH.js";function s(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l,name:"Описание и план"}),`
`,n.jsx(r.h1,{id:"ai-отчёты-с-графиками",children:"AI-отчёты с графиками"}),`
`,n.jsx(r.p,{children:`Пользователь прикрепляет в чате AI-агента файл с данными, описывает словами,
что за что отвечает и какой отчёт нужен. Агент собирает отчёт с графиками
и отдаёт один HTML-файл, который можно переслать руководству.`}),`
`,n.jsxs(r.p,{children:["Это прототип взаимодействия. ",n.jsx(r.strong,{children:"Бэкенда и LLM в нём нет"}),`: ответы модели
имитируются правилами по ключевым словам, графики рисует заглушка на месте
Charts UI. Разбор файла, проверка спецификации, расчёт цифр и экспорт
HTML работают по-настоящему, в браузере.`]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.a,{href:"?path=/story/ai-%D0%B4%D0%B5%D0%BC%D0%BE-%D0%BE%D1%82%D1%87%D1%91%D1%82%D1%8B-%D1%81-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8--demo",children:"Демо"}),": свой CSV или пример, запросы словами."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.a,{href:"?path=/story/ai-%D0%B4%D0%B5%D0%BC%D0%BE-%D0%BE%D1%82%D1%87%D1%91%D1%82%D1%8B-%D1%81-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8--autoplay",children:"Автосценарий"}),": сообщения отправляются сами, удобно для показа."]}),`
`]}),`
`,n.jsx(r.h2,{id:"зачем",children:"Зачем"}),`
`,n.jsx(r.p,{children:`Пользователи хотят видеть свои данные в виде понятных графиков и показывать
такие отчёты выше. Сейчас это ручная работа в Excel или BI. Агент снимает
её целиком: файл + одна фраза → готовый отчёт в фирменном стиле.`}),`
`,n.jsx(r.h2,{id:"сценарий",children:"Сценарий"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:"Прикрепить CSV (кнопка с документом в поле ввода) или взять пример."}),`
`,n.jsx(r.li,{children:"Агент разбирает файл и показывает, какие колонки и типы нашёл."}),`
`,n.jsx(r.li,{children:"Описать отчёт: «покажи динамику выручки по месяцам в разрезе регионов и добавь итоговые KPI»."}),`
`,n.jsx(r.li,{children:`Уточнять словами: «сделай первый график столбцами», «оставь только Москву и Сибирь»,
«добавь таблицу», «назови отчёт «…»».`}),`
`,n.jsx(r.li,{children:`Скачать HTML или открыть его в новой вкладке. Вкладки «Спецификация» и «Данные»
показывают, что модель получила на вход и что вернула.`}),`
`]}),`
`,n.jsx(r.h2,{id:"что-в-демо-настоящее-а-что-имитация",children:"Что в демо настоящее, а что имитация"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Часть"}),n.jsx("th",{children:"В демо"}),n.jsx("th",{children:"В продукте"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Чат"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:"AiAgentSurface"})," + ",n.jsx("code",{children:"AiAgentInput"})]})}),n.jsx("td",{children:"то же"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Разбор CSV и профиль колонок"}),n.jsx("td",{children:"настоящий, в браузере"}),n.jsx("td",{children:"бэкенд, плюс XLSX"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Понимание запроса и выбор графиков"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("strong",{children:"имитация"}),": правила по словам"]})}),n.jsx("td",{children:"LLM с инструментами MCP"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Проверка спецификации и самоисправление"}),n.jsx("td",{children:"настоящая, упрощённая"}),n.jsx("td",{children:"Zod-схема из пакета Charts UI"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Расчёт цифр (группировки, агрегаты, фильтры)"}),n.jsx("td",{children:"настоящий, по всем строкам"}),n.jsx("td",{children:"runtime Charts UI"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Графики"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("strong",{children:"заглушка"}),": SVG в ",n.jsx("code",{children:"charts-stub/"})]})}),n.jsx("td",{children:"компоненты Charts UI"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Экспорт HTML"}),n.jsx("td",{children:n.jsxs(r.p,{children:["настоящий: ",n.jsx("code",{children:"renderToStaticMarkup"})]})}),n.jsx("td",{children:n.jsxs(r.p,{children:["бэкенд ",n.jsx("code",{children:"render_report"}),", плюс PDF/PNG"]})})]})]})]}),`
`,n.jsx(r.h2,{id:"как-это-устроено",children:"Как это устроено"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{children:`Файл (CSV/XLSX)
  │
  ▼
Бэкенд: разбор и профиль (колонки, типы, диапазоны, 3 примера значений)
  │        строки данных в LLM не уходят
  ▼
LLM + MCP Charts UI ── list_charts / get_chart_schema / get_report_template
  │  возвращает только ReportSpec (JSON, ~1 КБ)
  ▼
Проверка спецификации ── ошибки → обратно в LLM (1–2 круга)
  │
  ▼
render_report: runtime Charts UI считает цифры по ВСЕМ строкам
  │
  ▼
Предпросмотр в чате (sandbox iframe) + скачать HTML / PDF / PNG
  │
  └── правка словами → patch_report_spec → перерисовка
`})}),`
`,n.jsx(r.p,{children:"Три решения, на которых держится подход:"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Модель не пишет HTML и не считает цифры."}),` Она выбирает блоки, колонки
и агрегации. Цифры считает код, поэтому они совпадают с исходным файлом.`]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Данные не уходят в модель."}),` Только схема и несколько значений на колонку.
Это снимает большую часть вопросов ИБ и ограничений на размер файла.`]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Один контракт — ReportSpec."}),` Его генерирует модель, проверяет валидатор,
рендерит runtime. Замена имитации на настоящую LLM не трогает рендер и экспорт.`]}),`
`]}),`
`,n.jsx(r.h2,{id:"контракт-reportspec",children:"Контракт ReportSpec"}),`
`,n.jsxs(r.p,{children:["Тип и проверка — в ",n.jsx(r.a,{href:"https://github.com/daisforge/dais-ui/blob/develop/packages/storybook/src/stories/AiDemos/ChartsReport/engine/spec.ts",rel:"nofollow",children:n.jsx(r.code,{children:"engine/spec.ts"})}),`.
Пример после запроса «покажи динамику выручки по месяцам в разрезе регионов и добавь итоговые KPI»:`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-json",children:`{
  "version": 1,
  "title": "Выручка по месяцам в разрезе регионов",
  "dataset": "продажи_2025.csv",
  "filters": [],
  "blocks": [
    {
      "kind": "kpi",
      "id": "kpi-1",
      "items": [
        {
          "label": "Выручка, млн ₽, итого",
          "measure": { "column": "Выручка, млн ₽", "agg": "sum" }
        },
        {
          "label": "Сделки, итого",
          "measure": { "column": "Сделки", "agg": "sum" }
        },
        {
          "label": "Строк в выборке",
          "measure": { "column": "Месяц", "agg": "count" }
        }
      ]
    },
    {
      "kind": "chart",
      "id": "chart-2",
      "title": "Выручка по месяцам в разрезе регионов",
      "chart": "line",
      "x": { "column": "Месяц", "timeUnit": "month" },
      "measures": [{ "column": "Выручка, млн ₽", "agg": "sum" }],
      "series": "Регион"
    }
  ]
}
`})}),`
`,n.jsxs(r.p,{children:["Блоки: ",n.jsx(r.code,{children:"kpi"}),", ",n.jsx(r.code,{children:"chart"})," (",n.jsx(r.code,{children:"bar"})," / ",n.jsx(r.code,{children:"line"})," / ",n.jsx(r.code,{children:"area"})," / ",n.jsx(r.code,{children:"pie"}),"), ",n.jsx(r.code,{children:"table"}),`. Фильтры —
по значениям категорий. Когда Charts UI приедет, перечень типов и их опции
берутся из его схемы, а не из этого файла.`]}),`
`,n.jsx(r.h2,{id:"что-нужно-сделать",children:"Что нужно сделать"}),`
`,n.jsx(r.h3,{id:"1-charts-ui-библиотека-графиков",children:"1. Charts UI (библиотека графиков)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Декларативный API: график целиком описывается JSON-конфигом, без функций в пропсах."}),`
`,n.jsx(r.li,{children:"Zod-схема конфигов из пакета: её же использует валидатор спецификации и MCP."}),`
`,n.jsx(r.li,{children:`Runtime-бандл (IIFE, всё внутри) для вставки в один HTML-файл. Шрифты встроены
или с fallback: файл должен открываться офлайн из почты.`}),`
`,n.jsx(r.li,{children:"Палитра и токены в теме Plasma, светлая и тёмная, проверенные на различимость."}),`
`,n.jsxs(r.li,{children:["Подключение в демо: заменить компоненты в ",n.jsx(r.code,{children:"ChartRenderer"}),`
(`,n.jsx(r.a,{href:"https://github.com/daisforge/dais-ui/blob/develop/packages/storybook/src/stories/AiDemos/ChartsReport/charts-stub/Charts.tsx",rel:"nofollow",children:n.jsx(r.code,{children:"charts-stub/Charts.tsx"})}),`),
контракт `,n.jsx(r.code,{children:"ChartData"})," остаётся тем же."]}),`
`]}),`
`,n.jsx(r.h3,{id:"2-mcp",children:"2. MCP"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:`Раздел Charts UI в индексе: типы графиков, какие данные под какой тип,
схема опций, примеры. Собирается тем же индексером, что и компоненты.`}),`
`,n.jsxs(r.li,{children:["Инструменты: ",n.jsx(r.code,{children:"list_charts"}),", ",n.jsx(r.code,{children:"get_chart_schema"}),", ",n.jsx(r.code,{children:"get_report_template"}),`
(шаблоны отчётов: «для руководства», «план-факт», «динамика»).`]}),`
`,n.jsx(r.li,{children:`HTTP-транспорт (Streamable HTTP) или импорт инструментов библиотекой:
сейчас сервер работает только через stdio, это годится для локальных агентов,
а не для бэкенда чата.`}),`
`]}),`
`,n.jsx(r.h3,{id:"3-бэкенд-чата",children:"3. Бэкенд чата"}),`
`,n.jsx(r.p,{children:"Черновик API:"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Метод и путь"}),n.jsx("th",{children:"Что делает"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"POST /api/reports/datasets"})}),n.jsx("td",{children:n.jsxs(r.p,{children:["загрузка файла (multipart), ответ — ",n.jsx("code",{children:"datasetId"})," и профиль"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"POST /api/reports/chat"})}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:"{ datasetId, message, reportId? }"}),`, поток SSE:
шаги, спецификация, ответ`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"GET /api/reports/{reportId}"})}),n.jsx("td",{children:"текущая спецификация и история правок"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"GET /api/reports/{reportId}/export"})}),n.jsx("td",{children:n.jsx("code",{children:"?format=html | pdf | png"})})]})]})]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:`Разбор CSV/XLSX: объединённые ячейки, шапка в несколько строк, даты в разных
форматах, числа с пробелами и запятой.`}),`
`,n.jsx(r.li,{children:"Оркестрация LLM: tool-calling, лимит кругов самоисправления, таймауты."}),`
`,n.jsx(r.li,{children:`Рендер: HTML из runtime-бандла; PDF и PNG через headless Chromium
(в репозитории уже есть Docker с Chromium для скриншотных тестов).`}),`
`,n.jsx(r.li,{children:"Хранение файлов и отчётов, срок жизни, права доступа."}),`
`]}),`
`,n.jsx(r.h3,{id:"4-фронт",children:"4. Фронт"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Чат уже есть: ",n.jsx(r.code,{children:"AiAgentPopup"}),", ",n.jsx(r.code,{children:"AiAgentSurface"}),", ",n.jsx(r.code,{children:"AiAgentInput"}),"."]}),`
`,n.jsx(r.li,{children:`Вложение файла в поле ввода, отображение шагов агента, предпросмотр
отчёта в sandbox iframe, кнопки «Скачать» и «Открыть».`}),`
`]}),`
`,n.jsx(r.h3,{id:"5-иб-и-данные",children:"5. ИБ и данные"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Согласовать, что именно уходит в модель: только схема или ещё выборка строк."}),`
`,n.jsx(r.li,{children:"Какая модель и где она работает."}),`
`,n.jsx(r.li,{children:"Срок хранения загруженных файлов."}),`
`]}),`
`,n.jsx(r.h2,{id:"этапы-и-оценка",children:"Этапы и оценка"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Этап"}),n.jsx("th",{children:"Что входит"}),n.jsx("th",{children:"Срок"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"MVP"}),n.jsx("td",{children:n.jsx(r.p,{children:"CSV/XLSX, 4–6 типов графиков, KPI и таблица, один HTML, правки словами"})}),n.jsx("td",{children:"4–6 недель, 1 фронт + 1 бэк"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"v2"}),n.jsx("td",{children:n.jsx(r.p,{children:`шаблоны отчётов, PDF/PNG, светлая и тёмная тема, несколько файлов в
отчёте`})}),n.jsx("td",{children:"+4 недели"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"v3"}),n.jsx("td",{children:n.jsx(r.p,{children:"ссылка на отчёт вместо файла, обновление данных, фильтры в самом отчёте"})}),n.jsx("td",{children:"+4–6 недель"})]})]})]}),`
`,n.jsx(r.p,{children:"Оценки при условии, что Charts UI готов, а модель в бэкенде чата умеет tool-calling."}),`
`,n.jsx(r.h2,{id:"риски",children:"Риски"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Грязные Excel-файлы: основной источник ошибок, нужен набор реальных файлов для проверки."}),`
`,n.jsxs(r.li,{children:[`Качество понимания запроса: нужен набор из 30–50 типовых запросов
и замер, как в A/B-стенде MCP (`,n.jsx(r.code,{children:"packages/mcp-server/ab"}),")."]}),`
`,n.jsx(r.li,{children:"Размер HTML с runtime-бандлом и встроенными шрифтами."}),`
`,n.jsx(r.li,{children:"Ограничения ИБ на отправку данных в модель."}),`
`]}),`
`,n.jsx(r.h2,{id:"открытые-вопросы",children:"Открытые вопросы"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"На чём построен Charts UI и есть ли у него декларативный конфиг."}),`
`,n.jsx(r.li,{children:"Чей бэкенд у чата и какая модель."}),`
`,n.jsx(r.li,{children:"Нужен ли отчёт офлайн (вложение в почту) или подойдёт ссылка."}),`
`]}),`
`,n.jsx(r.h2,{id:"файлы-демо",children:"Файлы демо"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Файл"}),n.jsx("th",{children:"Что внутри"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"ChartsReportDemo.tsx"})}),n.jsx("td",{children:"экран: чат, вкладки, предпросмотр, экспорт"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"engine/dataset.ts"})}),n.jsx("td",{children:"разбор CSV и профиль колонок"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"engine/spec.ts"})}),n.jsx("td",{children:"контракт ReportSpec, каталог графиков, проверка"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"engine/fakeAgent.ts"})}),n.jsx("td",{children:"имитация LLM: правила по ключевым словам"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"engine/aggregate.ts"})}),n.jsx("td",{children:"группировки, агрегаты, фильтры"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"charts-stub/"})}),n.jsx("td",{children:"заглушка Charts UI: SVG-графики и палитра"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"report/ReportView.tsx"})}),n.jsx("td",{children:"отчёт по спецификации, общий для предпросмотра и файла"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"report/exportHtml.tsx"})}),n.jsx("td",{children:"сборка HTML-файла"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"../shared/"})}),n.jsx("td",{children:"общий чат демо, используется и в конструкторе страниц"})]})]})]})]})}function cn(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{cn as default};
