import{j as n}from"./react-D2T61mpp.js";import{cg as c,ch as s,ca as l}from"./vendor-DhPQnvNP.js";import{A as r}from"./AiAgentPopup.stories-DwFZgZds.js";import"./react-is-Clcustum.js";import"./styled-components-D2iYy2uM.js";import"./@tanstack/react-virtual-DonijgCh.js";import"./tslib-DoU9Jm1N.js";import"./storySourceDoc-tVKyHcEN.js";import"./AiAgentPopup-C39Gte9X.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./@salutejs/sdds-finai-BD5fhF9i.js";import"./utils-CEczJKOt.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextArea-CLiSpBcI.js";import"./sharedUtilsInputs-CS9oGklk.js";import"./@salutejs/plasma-icons-Duq7ysyN.js";import"./sharedUtilsResizable-4btFEOm_.js";function d(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:r,name:"Docs"}),`
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
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"targetGap"}),` числом задаёт отступ только по горизонтали (верх окна
и верх таргета на одном уровне), а объектом `,n.jsx(e.code,{children:"{ x, y }"}),` — смещение
по обеим осям от правого верхнего угла таргета: `,n.jsx(e.code,{children:"y"}),` больше нуля
опускает окно, меньше нуля поднимает`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useStorage"}),` сохраняет позицию и размер окна: после закрытия и даже
перезагрузки страницы окно открывается там же и того же размера`]}),`
`,n.jsxs(e.li,{children:[`поле ввода чата с овальным свечением позади даёт компонент
`,n.jsx(e.code,{children:"AiAgentInput"}),": свечение включается его пропом ",n.jsx(e.code,{children:"glow"}),` и переключается
в реальном времени (например, пока AI-агент обдумывает ответ)`]}),`
`,n.jsxs(e.li,{children:["слева в окне можно показать полосу иконок-разделов (проп ",n.jsx(e.code,{children:"leftPanel"}),")"]}),`
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
минимальный размер по умолчанию 360x360, максимальный 800x800`]}),`
`,n.jsxs(e.li,{children:[`при первом открытии окно 400x540, другой стартовый размер задаётся
через `,n.jsx(e.code,{children:"defaultSize"})]}),`
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
`,n.jsx(e.li,{children:`свечение — овал высотой 79px (по макету), он выступает над верхним
краем поля на 25px, остальная часть лежит за полем; когда поле растёт
(Shift+Enter), овал поднимается вместе с верхним краем поля, а при
ресайзе окна у овала меняется только ширина`}),`
`,n.jsx(e.li,{children:`свечение лежит поверх контента чата, включая сообщения с фоном
(решение дизайнера); кликам и выделению текста оно не мешает`}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rightSlot"}),` — произвольная правая часть поля: кнопка отправки, кнопка
остановки, с тултипами и любой логикой потребителя`]}),`
`,n.jsxs(e.li,{children:["поле авторастёт до пиксельного предела ",n.jsx(e.code,{children:"maxHeight"}),` (по умолчанию 220),
дальше внутренний скролл; предел в px, а не в строках, потому что
при ресайзе окна количество помещающихся строк меняется`]}),`
`,n.jsxs(e.li,{children:[`лимита на число символов у компонента нет; если он нужен (по гайду
дизайна 324 символа), передайте `,n.jsx(e.code,{children:"maxLength"}),", он уйдёт в поле как есть"]}),`
`,n.jsxs(e.li,{children:[`внешних отступов у компонента нет: место в лэйауте чата задаёт
потребитель; стили переопределяются через `,n.jsx(e.code,{children:"className"})," и ",n.jsx(e.code,{children:"style"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"левая-панель",children:"Левая панель"}),`
`,n.jsxs(e.p,{children:["Проп ",n.jsx(e.code,{children:"leftPanel"}),` добавляет внутри окна слева узкую полосу иконок-разделов.
Клик по иконке раскрывает раздел фиксированной ширины: он показывается
вместо полосы (полоса и раздел сменяют друг друга плавно), а вернуться
к другим иконкам можно только крестиком в шапке раздела.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["разделы задаются массивом ",n.jsx(e.code,{children:"items"}),": у каждого ",n.jsx(e.code,{children:"key"}),", ",n.jsx(e.code,{children:"icon"}),` (в полосе),
`,n.jsx(e.code,{children:"title"})," и ",n.jsx(e.code,{children:"content"}),` (в раскрытом разделе); иконку шапки раздела можно
задать отдельно через `,n.jsx(e.code,{children:"titleIcon"})]}),`
`,n.jsx(e.li,{children:`шапку раздела (иконка, заголовок, крестик) и её высоту компонент рисует
сам; отступы, скролл и наполнение раздела под шапкой — на потребителе`}),`
`,n.jsxs(e.li,{children:["открытый раздел задаётся ",n.jsx(e.code,{children:"activeKey"})," (управляемо) или ",n.jsx(e.code,{children:"defaultActiveKey"}),`
(начальное значение); смена приходит в `,n.jsx(e.code,{children:"onActiveKeyChange"}),` — ключ
раздела при клике по иконке, `,n.jsx(e.code,{children:"null"})," при закрытии крестиком"]}),`
`,n.jsx(e.li,{children:`пока раздел открыт, минимальная ширина окна при ресайзе больше, чтобы
чат не схлопнулся; максимальный размер окна 800x800`}),`
`,n.jsxs(e.li,{children:[`окно пока не расширяется автоматически при открытии раздела (для этого
нужен управляемый размер окна от атомарного `,n.jsx(e.code,{children:"Popup"}),`, его ещё нет),
поэтому задавайте `,n.jsx(e.code,{children:"defaultSize"})," с запасом под ширину раздела"]}),`
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
`,n.jsx(e.code,{children:"opened"})]}),`
`]}),`
`,n.jsxs(e.p,{children:[`Описание типов — в разделе
`,n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-aiagentpopup-api--docs",children:"API"}),"."]}),`
`,n.jsx(l,{})]})}function C(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{C as default};
