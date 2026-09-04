import{j as e}from"./react-D2T61mpp.js";import{c6 as d,c7 as r,c8 as i}from"./vendor-Ca3Rcr5K.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";function c(n){const s={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Как работать с MCP"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"как-работать-с-mcp",children:"Как работать с MCP"}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"@daisforge/ui-mcp"})," — MCP-сервер для ",e.jsx(s.code,{children:"@daisforge/ui"}),". Работает по stdio и даёт кодовому агенту точные пропсы, типы, категории (wrapper/composition/standalone/form), примеры кода и фичи по всем 243 компонентам библиотеки, 77 фичам и 426 типам — а не только по тем, что описаны в этом Storybook."]}),e.jsx(s.p,{children:"Данные лежат в самом пакете, поэтому сеть в рантайме не нужна. Требуется Node.js 20 или новее."})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"быстрый-старт",children:"Быстрый старт"}),e.jsx(s.p,{children:"Если агент умеет запускать MCP-серверы по stdio одной командой, достаточно указать:"}),e.jsx(i,{language:"bash",dark:!0,format:!1,code:"npx -y @daisforge/ui-mcp"}),e.jsxs(s.p,{children:["Если агент просит ",e.jsx(s.code,{children:"command"})," и ",e.jsx(s.code,{children:"args"})," отдельно — такой конфиг (обычно ",e.jsx(s.code,{children:".mcp.json"})," в корне проекта):"]}),e.jsx(i,{language:"json",dark:!0,format:"dedent",code:`
        {
          "mcpServers": {
            "daisforge-ui": {
              "command": "npx",
              "args": ["-y", "@daisforge/ui-mcp"]
            }
          }
        }
      `}),e.jsxs(s.p,{children:["Надёжнее — поставить сервер в проект рядом с библиотекой и запускать по локальному пути. Так он не зависит от того, с каким рабочим каталогом клиент его стартует, и всегда видит вашу версию ",e.jsx(s.code,{children:"@daisforge/ui"}),":"]}),e.jsx(i,{language:"bash",dark:!0,format:!1,code:"npm install -D @daisforge/ui-mcp"}),e.jsx(i,{language:"json",dark:!0,format:"dedent",code:`
        {
          "mcpServers": {
            "daisforge-ui": {
              "command": "node",
              "args": ["node_modules/@daisforge/ui-mcp/dist/server.js"]
            }
          }
        }
      `}),e.jsx(s.p,{children:"Никаких флагов и параметров у сервера нет: версия библиотеки определяется автоматически — см. «Откуда берутся данные»."})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"какие-инструменты-доступны-агенту",children:"Какие инструменты доступны агенту"}),e.jsx(s.p,{children:"После подключения MCP-сервер отдаёт агенту девять инструментов:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list_components"})," — список компонентов с фильтрами по типу (wrapper/composition/standalone/form), категории и scope. По умолчанию показывает только самостоятельные компоненты (~177 из 243): слоты вроде ",e.jsx(s.code,{children:"DrawerDFHeader"})," и служебные примитивы скрыты, ",e.jsx(s.code,{children:'role: "all"'})," снимает фильтр."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"search_components"})," — поиск по свободному запросу на русском или английском сразу по трём сущностям: компоненты, их фичи и типы. Ищет и по тексту определения типа, поэтому находит нужное имя, когда оно заранее неизвестно («отрисовать свою ячейку» → ",e.jsx(s.code,{children:"CellContent"}),"/",e.jsx(s.code,{children:"ColumnConfig"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_component"})," — компактная карточка: тип, категория, подсказка, готовый ",e.jsx(s.code,{children:"importStatement"}),", имена пропсов, compound-части, список фичей."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_component_props"})," — полные пропсы: собственные плюс унаследованные от атомарного компонента ",e.jsx(s.code,{children:"@salutejs/sdds-finai"}),". Аргумент ",e.jsx(s.code,{children:"part"})," — для compound-частей, например ",e.jsx(s.code,{children:"Header"})," у ",e.jsx(s.code,{children:"DrawerDF"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_component_examples"})," — примеры кода компонента. Без ",e.jsx(s.code,{children:"title"})," отдаёт список заголовков и первый пример, с ",e.jsx(s.code,{children:"title"})," — конкретный."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_type"})," — разворачивает именованный тип из текста пропса. ",e.jsx(s.code,{children:"get_component_props"})," покажет только имя (",e.jsx(s.code,{children:"columnConfig: readonly ColumnConfig<Row>[]"}),"), а этот инструмент отдаёт само определение и готовый импорт."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list_features"})," — список фичей компонента. Особенно актуально для ",e.jsx(s.code,{children:"TableCanvas"})," и ",e.jsx(s.code,{children:"Table"}),": у них десятки фичей вроде ",e.jsx(s.code,{children:"Filtering"}),", ",e.jsx(s.code,{children:"Sorting"}),", ",e.jsx(s.code,{children:"CopyPasteFill"}),", до которых иначе не добраться."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_feature"})," — документация и API конкретной фичи."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get_feature_examples"})," — примеры кода конкретной фичи."]}),`
`]})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"ресурсы",children:"Ресурсы"}),e.jsx(s.p,{children:"Ещё две вещи сервер отдаёт не инструментами, а ресурсами — это статический контент, который агент читает один раз за сессию, не тратя слот в списке инструментов:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"daisforge-ui://catalog/categories"})," — категории каталога с количеством компонентов по типам."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"daisforge-ui://catalog/installation-guide"})," — установка пакета, подключение стилей и токенов, использование компонентов и иконок."]}),`
`]}),e.jsx(s.p,{children:"Большинство клиентов подтягивают их автоматически, отдельно вызывать ничего не нужно."})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"откуда-берутся-данные",children:"Откуда берутся данные"}),e.jsxs(s.p,{children:["Каталог компонентов собирается из исходников ",e.jsx(s.code,{children:"@daisforge/ui"})," на релизе и попадает сразу в два места, поэтому сервер ищет его по трём уровням, в таком порядке:"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"workspace"})," — каталог из монорепозитория, если сервер запущен внутри него. У потребителей библиотеки не встречается."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"installed"})," — данные из установленной у вас версии ",e.jsx(s.code,{children:"@daisforge/ui"}),". Основной случай: пропсы гарантированно соответствуют именно вашей версии."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"bundled"})," — запасной каталог, вшитый в сам ",e.jsx(s.code,{children:"@daisforge/ui-mcp"}),". Включается, если библиотека не установлена или её версия вышла до появления встроенных данных."]}),`
`]}),e.jsxs(s.p,{children:["Когда сервер отвечает не из установленной библиотеки, он честно добавляет к ответу поле ",e.jsx(s.code,{children:"dataVersionNotice"})," — например, что данные соответствуют версии 1.14.1, а у вас установлена другая, и в пропсах возможны расхождения. Если агент это упомянул — обновите ",e.jsx(s.code,{children:"@daisforge/ui"}),"."]})]})}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(s.h1,{id:"что-можно-спрашивать-у-агента",children:"Что можно спрашивать у агента"}),e.jsx(s.p,{children:"Формулировать можно свободно, называть инструменты не нужно — агент выберет их сам:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Какие пропсы есть у ",e.jsx(s.code,{children:"DrawerDF"})," и как собрать его из compound-частей?"]}),`
`,e.jsxs(s.li,{children:["Покажи примеры использования ",e.jsx(s.code,{children:"TableCanvas"})]}),`
`,e.jsxs(s.li,{children:["Какие фичи поддерживает ",e.jsx(s.code,{children:"TableCanvas"})," и как включить фильтрацию?"]}),`
`,e.jsx(s.li,{children:"Нужна таблица с редактированием ячеек и копипастом как в Excel — что взять?"}),`
`,e.jsxs(s.li,{children:["Что такое ",e.jsx(s.code,{children:"ColumnConfig"})," и откуда его импортировать?"]}),`
`,e.jsx(s.li,{children:"Какие компоненты есть в категории «Формы»?"}),`
`,e.jsxs(s.li,{children:["Как подключить ",e.jsx(s.code,{children:"@daisforge/ui"})," и глобальные стили в новый проект?"]}),`
`]}),e.jsx(s.p,{children:"Последний вопрос особенно полезен в начале работы: агент прочитает гайд по установке и сразу расставит импорты правильно."})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }
  `})]})}function j(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{j as default};
