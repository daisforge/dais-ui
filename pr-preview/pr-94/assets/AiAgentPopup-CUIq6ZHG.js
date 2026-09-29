import{j as n}from"./react-D2T61mpp.js";import{cg as d,ch as c,ca as r}from"./vendor-CTB0GR9F.js";import{A as l}from"./AiAgentPopup.stories-BhS1TIpf.js";import"./react-is-Clcustum.js";import"./styled-components-BL30Z6ii.js";import"./@tanstack/react-virtual-C2S66mmn.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./AiAgentPopup-DLwmrJuB.js";import"./TextArea-DN5JpdTo.js";import"./sharedUtilsInputs-BE0qUTzi.js";import"./constants-BPUyiI8r.js";import"./@salutejs/sdds-themes-fAtV8uGh.js";import"./@salutejs/sdds-finai-i7t7pRRX.js";import"./@salutejs/plasma-icons-BAFdEMs_.js";import"./utils-HY4cVWx9.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./sharedUtilsResizable-CFlo7NIB.js";import"./AnalyticalWidget-BzD7NQw2.js";import"./IconButton-D3XgkvSP.js";import"./Box-Cdw7dWBy.js";import"./Collapse-jNRB-gTy.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l,name:"Docs"}),`
`,n.jsx(e.h1,{id:"aiagentpopup",children:"AiAgentPopup"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"AiAgentPopup"}),` — окно AI-помощника, локальная DF-обёртка над
`,n.jsx(e.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/popup/",rel:"nofollow",children:"Popup"}),`.
Компонент даёт готовый контейнер с перетаскиванием, ресайзом и сохранением
положения; всё наполнение окна (шапка, чат, поле ввода) — на стороне
потребителя.`]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`окно можно перетаскивать за любое свободное место контейнера;
область перетаскивания ограничена экраном с учётом `,n.jsx(e.code,{children:"dragBoundary"})]}),`
`,n.jsx(e.li,{children:`ресайз с адаптивным углом: иконка сама встаёт в тот угол окна,
где есть место расти`}),`
`,n.jsxs(e.li,{children:[`позиция при открытии, по убыванию приоритета: сохранённая в localStorage
(`,n.jsx(e.code,{children:"useStorage"}),"), затем ",n.jsx(e.code,{children:"defaultPosition"}),", затем справа от ",n.jsx(e.code,{children:"targetRef"}),`
с отступом `,n.jsx(e.code,{children:"targetGap"}),", иначе отступ от левого верхнего угла экрана"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"targetGap"}),` числом задаёт отступ только по горизонтали (верхние кромки
окна и таргета на одном уровне), а объектом `,n.jsx(e.code,{children:"{ x, y }"}),` — смещение
по обеим осям от правого верхнего угла таргета: `,n.jsx(e.code,{children:"y"}),` больше нуля
опускает окно, меньше нуля поднимает`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useStorage"}),` сохраняет позицию и размер окна: после закрытия и даже
перезагрузки страницы окно открывается там же и того же размера`]}),`
`,n.jsxs(e.li,{children:[`поле ввода чата с овальным свечением позади даёт компонент
`,n.jsx(e.code,{children:"AiAgentInput"}),": свечение включается его пропом ",n.jsx(e.code,{children:"glow"}),` и переключается
в реальном времени (например, пока AI-агент обдумывает ответ)`]}),`
`,n.jsxs(e.li,{children:[`оболочка окна (рамка, тень, карточка) доступна отдельным
компонентом `,n.jsx(e.code,{children:"AiAgentSurface"})," для встраивания чата в лэйаут страницы"]}),`
`,n.jsx(e.li,{children:"тема подхватывается автоматически, настраивать её снаружи не нужно"}),`
`,n.jsxs(e.li,{children:["существующий ",n.jsx(e.code,{children:"AiAgentPopover"}),` (плавающая кнопка с поповером) остаётся
как есть, `,n.jsx(e.code,{children:"AiAgentPopup"})," — отдельный компонент под новый дизайн"]}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`перетаскивание не начинается с интерактивных элементов (кнопки, ссылки,
поля ввода), с зон с атрибутом `,n.jsx(e.code,{children:"data-no-drag"}),` и с зон под селектором
`,n.jsx(e.code,{children:"dragIgnoreSelector"}),"; пометьте ",n.jsx(e.code,{children:"data-no-drag"}),` область сообщений чата,
чтобы в ней работало выделение текста`]}),`
`,n.jsx(e.li,{children:"смещения меньше 5px считаются кликом, а не перетаскиванием"}),`
`,n.jsx(e.li,{children:`активный угол ресайза вычисляется по положению окна: экран делится
на шесть секторов, окно в верхней половине растёт вниз, в нижней вверх,
в левой части вправо, в правой влево; при ресайзе за верхние и левые
углы противоположный угол окна стоит на месте`}),`
`,n.jsxs(e.li,{children:["окно нельзя растянуть за края экрана, пределы учитывают ",n.jsx(e.code,{children:"dragBoundary"}),`;
минимальный размер по умолчанию 360x360`]}),`
`,n.jsxs(e.li,{children:["конфигурация ресайза настраивается через ",n.jsx(e.code,{children:"resizable"}),` частично:
не заданные поля компонент заполняет своими значениями;
`,n.jsx(e.code,{children:"resizable={false}"})," выключает ресайз"]}),`
`,n.jsxs(e.li,{children:["для полного управления позицией снаружи есть ",n.jsx(e.code,{children:"positionState"}),` — пара
`,n.jsx(e.code,{children:"[position, setPosition]"}),", как у ",n.jsx(e.code,{children:"useState"}),`; в этом режиме позиция
в localStorage не сохраняется`]}),`
`,n.jsx(e.li,{children:`сохранённая позиция при чтении зажимается в границы текущего экрана,
при изменении размеров окна браузера окно возвращается в видимую область`}),`
`,n.jsxs(e.li,{children:["проп ",n.jsx(e.code,{children:"frame"})," (унаследован от атомарного ",n.jsx(e.code,{children:"Popup"}),`) ограничивает окно
рамками переданного контейнера: позиция, перетаскивание и ресайз
считаются внутри него. В продуктовом коде обычно не нужен, окно живёт
поверх всей страницы; используется в наших стори для изоляции примеров
друг от друга`]}),`
`]}),`
`,n.jsx(e.h2,{id:"поле-ввода-aiagentinput",children:"Поле ввода AiAgentInput"}),`
`,n.jsx(e.p,{children:`Поле ввода чата с овальным свечением позади — отдельный простой компонент.
Логики отправки, очистки и смены кнопок в нём нет, всё это на стороне
потребителя.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["свечение включается пропом ",n.jsx(e.code,{children:"glow"}),` и переключается в реальном времени
с плавным переходом; рисуется линейным градиентом и размытием
из макета, у тёмных тем свой градиент`]}),`
`,n.jsx(e.li,{children:`овал фиксированной высоты (79px, по макету) держится у верхней границы
поля со свесом 25px над ней: при авторосте поля (Shift+Enter) он
поднимается вместе с кромкой, при ресайзе окна тянется только ширина`}),`
`,n.jsx(e.li,{children:`свечение лежит поверх контента чата, включая сообщения с фоном
(решение дизайнера); кликам и выделению текста оно не мешает`}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rightSlot"}),` — произвольная правая часть поля: кнопка отправки, кнопка
остановки, с тултипами и любой логикой потребителя`]}),`
`,n.jsxs(e.li,{children:["поле авторастёт до пиксельного предела ",n.jsx(e.code,{children:"maxHeight"}),` (по умолчанию 160),
дальше внутренний скролл; предел в px, а не в строках, потому что
при ресайзе окна количество помещающихся строк меняется`]}),`
`,n.jsxs(e.li,{children:[`внешних отступов у компонента нет: место в лэйауте чата задаёт
потребитель; стили переопределяются через `,n.jsx(e.code,{children:"className"})," и ",n.jsx(e.code,{children:"style"})]}),`
`,n.jsx(e.li,{children:`у поля атомарки полупрозрачный фон, поэтому под ним непрозрачная
подложка цвета карточки`}),`
`]}),`
`,n.jsx(e.h2,{id:"встраивание-в-лэйаут",children:"Встраивание в лэйаут"}),`
`,n.jsxs(e.p,{children:[`Когда чат переезжает из окна в часть страницы (например, в левую панель),
попап больше не нужен: рендерите `,n.jsx(e.code,{children:"AiAgentSurface"}),` — оболочку с рамкой,
тенью и карточкой, которую `,n.jsx(e.code,{children:"AiAgentPopup"}),` использует внутри себя сам.
У оболочки нет перетаскивания, ресайза и их курсоров, а свечение живёт
в `,n.jsx(e.code,{children:"AiAgentInput"})," и переезжает вместе с контентом чата."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["вариант ",n.jsx(e.code,{children:"embedded"}),` (по умолчанию): рамка — часть блочной модели, отступы
и гэпы лэйаута считаются от светящегося края, а не от белой карточки`]}),`
`,n.jsxs(e.li,{children:["вариант ",n.jsx(e.code,{children:"floating"}),` используется самим окном: там рамка нарисована наружу
и в размеры не входит`]}),`
`,n.jsxs(e.li,{children:[`контент чата держите со состоянием снаружи и рендерите один и тот же
компонент то в `,n.jsx(e.code,{children:"AiAgentPopup"}),", то в ",n.jsx(e.code,{children:"AiAgentSurface"}),`; переход удобно
анимировать шириной панели, пример в стори «Переход в панель»`]}),`
`]}),`
`,n.jsx(e.h2,{id:"внутреннее-состояние-контента",children:"Внутреннее состояние контента"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`перетаскивание, ресайз, смена активного угла и смена темы контент
не перемонтируют, внутреннее состояние живёт`}),`
`,n.jsxs(e.li,{children:["закрытие окна (",n.jsx(e.code,{children:"opened={false}"}),`) полностью убирает содержимое из DOM,
это поведение атомарного `,n.jsx(e.code,{children:"Popup"}),`; локальный стейт контента при этом
теряется`]}),`
`,n.jsxs(e.li,{children:[`поэтому состояние чата (переписку, черновик ввода) держите снаружи
окна: в сторе или поднятым стейтом, который живёт независимо от
`,n.jsx(e.code,{children:"opened"}),`. Это же понадобится для сценария «чат переезжает в боковую
панель»: контент с внешним состоянием можно рендерить хоть в окне,
хоть в панели без потерь`]}),`
`]}),`
`,n.jsxs(e.p,{children:[`Описание типов — в разделе
`,n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-aiagentpopup-api--docs",children:"API"}),"."]}),`
`,n.jsx(r,{})]})}function w(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{w as default};
