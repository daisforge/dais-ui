import{j as n}from"./react-Ch9mc9Aq.js";import{da as l,db as s,d4 as i}from"./vendor-Ch15MtLz.js";import{M as r}from"./ModalDF.stories-DoXi2hXE.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-Bq12dC3g.js";import"./@tanstack/react-virtual-Csp9i2bR.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-Bjl1vUv4.js";import"./storySourceDoc-tVKyHcEN.js";import"./ModalDF-Dobroqyd.js";import"./@salutejs/sdds-finai-DrNgC8XC.js";import"./@sddsjs/sdds_finai-BSDEmCin.js";import"./@salutejs/plasma-icons-BYYYccLM.js";import"./constants-l0ilsueG.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./IconButton-eOYKhOpS.js";import"./utils-CzOQd3gO.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B1SQihVo.js";import"./Container-DexDt8DL.js";import"./data-dWPDlSF_.js";function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:r,name:"Docs"}),`
`,n.jsx(o.h1,{id:"modaldf",children:"ModalDF"}),`
`,n.jsx(o.p,{children:"Стилизованный модальный компонент дизайн-системы. Собирается из набора готовых блоков — от простого модального окна до двухколоночных сценариев с дополнительной панелью."}),`
`,n.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Поддержка полноэкранного режима с сохранением состояния"}),`
`,n.jsxs(o.li,{children:["Гибкая настройка контейнера контента через ",n.jsx(o.code,{children:"contentContainerProps"})]}),`
`,n.jsx(o.li,{children:"Наличие сервисных кнопок (fullscreen / close) даже без шапки"}),`
`,n.jsx(o.li,{children:"Набор compound-компонентов для построения консистентных шапок и футеров"}),`
`,n.jsxs(o.li,{children:["Двухколоночная раскладка через ",n.jsx(o.code,{children:"ModalDF.Left"})," и ",n.jsx(o.code,{children:"ModalDF.Main"})]}),`
`]}),`
`,n.jsx(o.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-ts",children:`ModalDF.Left; // Левая колонка
ModalDF.Main; // Основная колонка
ModalDF.Header; // Шапка: заголовок, подзаголовок, бейдж, правый блок, кнопка «назад»
ModalDF.Footer; // Футер: левый и правый блоки кнопок
ModalDF.Content; // Контейнер контента
ModalDF.Divider; // Разделитель
ModalDF.ServiceButtons; // Кнопки fullscreen/close
ModalDF.DotsIconButton; // Иконка «троеточие» с Dropdown
ModalDF.BackIconButton; // Кнопка «назад»
`})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"ModalDF.Header"})," — заголовок, подзаголовок, бейдж, правый блок действий и кнопка «назад»"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"ModalDF.Footer"})," — разделение кнопок и ссылок на левый и правый блоки"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"ModalDF.ServiceButtons"})," — блок с кнопками fullscreen/close"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"ModalDF.DotsIconButton"})," — иконка «троеточие» с поддержкой dropdown"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"ModalDF.BackIconButton"})," — кнопка «назад», доступна для произвольного использования"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"ModalDF.Left"}),", ",n.jsx(o.code,{children:"ModalDF.Main"}),", ",n.jsx(o.code,{children:"ModalDF.Content"}),", ",n.jsx(o.code,{children:"ModalDF.Divider"})," — контейнеры, наследуют ",n.jsx(o.code,{children:"BoxProps"}),", принимают ",n.jsx(o.code,{children:"$css"})]}),`
`]}),`
`,n.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"fullScreen"})," — включает встроенный менеджер полноэкранного режима. Можно передать callbacks и управлять сохранением состояния между открытиями"]}),`
`,n.jsxs(o.li,{children:["Ширину рекомендуется задавать через ",n.jsx(o.code,{children:"contentContainerProps.css"})]}),`
`,n.jsxs(o.li,{children:["Базовые пропсы наследуются от ",n.jsx(o.code,{children:"ModalCompProps"})," (",n.jsx(o.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/modal/",rel:"nofollow",children:"документация SDDS"}),")"]}),`
`]}),`
`,n.jsxs(o.p,{children:["Описание типов и compound-пропсов — в разделе ",n.jsx(o.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-modaldf-api--docs",children:"API"}),"."]}),`
`,n.jsx(i,{})]})}function L(e={}){const{wrapper:o}={...l(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(d,{...e})}):d(e)}export{L as default};
