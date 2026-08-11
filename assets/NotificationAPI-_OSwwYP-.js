import{j as i}from"./react-D2T61mpp.js";import{c2 as c,c3 as s}from"./vendor-Q_a-vZxa.js";import"./react-is-Clcustum.js";import"./styled-components-BEUoKpTk.js";import"./tslib-De9GV7Vy.js";function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Локальные компоненты/Notification/API"}),`
`,i.jsx(e.h1,{id:"notification-api",children:"Notification API"}),`
`,i.jsxs(e.p,{children:["Компонент-обёртка над ",i.jsx(e.code,{children:"Notification"})," из ",i.jsx(e.code,{children:"@salutejs/sdds-finai"}),". Принимает все пропсы оригинального компонента."]}),`
`,i.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,i.jsxs(e.p,{children:["Для показа уведомлений используется ",i.jsx(e.code,{children:"addNotification"})," из ",i.jsx(e.code,{children:"NotificationsProvider"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`import { addNotification } from '@salutejs/sdds-finai';

addNotification({
  title: 'Заголовок',
  children: 'Текст уведомления',
  view: 'positive',
  timeout: 3000,
});
`})}),`
`,i.jsx(e.h2,{id:"пропсы-addnotification",children:"Пропсы addNotification"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"id"})," (",i.jsx(e.code,{children:"string"}),") — уникальный идентификатор уведомления"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"title"})," (",i.jsx(e.code,{children:"string"}),") — заголовок"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"children"})," (",i.jsx(e.code,{children:"ReactNode"}),") — содержимое / текст уведомления"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"view"})," (",i.jsx(e.code,{children:"'default' | 'positive' | 'negative' | 'warning' | 'info'"}),") — вид уведомления"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"icon"})," (",i.jsx(e.code,{children:"ReactNode"}),") — иконка слева"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"timeout"})," (",i.jsx(e.code,{children:"number"}),") — время автоскрытия (мс). ",i.jsx(e.code,{children:"0"})," или ",i.jsx(e.code,{children:"null"})," — не скрывать"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"onTimeoutClose"})," (",i.jsx(e.code,{children:"() => void"}),") — колбэк при автоматическом закрытии"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"titleColor"})," (",i.jsx(e.code,{children:"string"}),") — переопределение цвета заголовка"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"textColor"})," (",i.jsx(e.code,{children:"string"}),") — переопределение цвета текста"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"width"})," (",i.jsx(e.code,{children:"string"}),") — ширина компонента"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"maxWidth"})," (",i.jsx(e.code,{children:"string"}),") — максимальная ширина"]}),`
`]}),`
`,i.jsx(e.h2,{id:"пропсы-notificationsprovider",children:"Пропсы NotificationsProvider"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"placement"})," (",i.jsx(e.code,{children:"'center' | 'top' | 'bottom' | 'right' | 'left' | 'bottom-left' | 'top-right' | ..."}),") — позиция уведомлений"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"frame"})," (",i.jsx(e.code,{children:"string | ref"}),") — контейнер для позиционирования (по умолчанию document)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"children"})," (",i.jsx(e.code,{children:"ReactNode"}),") — дочерние компоненты"]}),`
`]}),`
`,i.jsxs(e.p,{children:["Полное описание — в документации ",i.jsx(e.code,{children:"@salutejs/sdds-finai"}),": ",i.jsx(e.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/notification/",rel:"nofollow",children:"Notification"})]})]})}function x(n={}){const{wrapper:e}={...c(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(d,{...n})}):d(n)}export{x as default};
