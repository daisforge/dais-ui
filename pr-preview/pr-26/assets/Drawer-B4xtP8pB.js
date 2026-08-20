import{j as n}from"./react-D2T61mpp.js";import{c2 as c,c3 as s,bY as d}from"./vendor-CxqVO1eN.js";import{D as i}from"./DrawerDF.stories-BSMECq7E.js";import"./react-is-Clcustum.js";import"./styled-components--DGtfFZ_.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-C1kndaLg.js";import"./storySourceDoc-tVKyHcEN.js";import"./DrawerDF-BGRQblQX.js";import"./@salutejs/sdds-finai-O6aB6XRK.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./@salutejs/plasma-icons-Bgg_GZ9Y.js";import"./constants-B3b49qmU.js";import"./Box-_3jV5Wqs.js";import"./data-dWPDlSF_.js";function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:i,name:"Docs"}),`
`,n.jsx(e.h1,{id:"drawerdf",children:"DrawerDF"}),`
`,n.jsxs(e.p,{children:["Расширенный ",n.jsx(e.code,{children:"Drawer"})," (",n.jsx(e.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/drawer/",rel:"nofollow",children:"документация SDDS"}),") с готовыми layout-ами для шапки/контента/футера, кнопкой «назад» и сервисными элементами. Из блоков можно собрать как простой выезжающий сайдбар, так и сложные многоколоночные сценарии."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Набор compound-компонентов (",n.jsx(e.code,{children:"Header"}),", ",n.jsx(e.code,{children:"Content"}),", ",n.jsx(e.code,{children:"Footer"}),", ",n.jsx(e.code,{children:"DotsIconButton"}),", ",n.jsx(e.code,{children:"BackIconButton"}),")"]}),`
`,n.jsx(e.li,{children:"Поддержка множественных контентных колонок с автоматическими отступами"}),`
`,n.jsxs(e.li,{children:["Управление кнопкой «назад» на уровне родительского компонента (",n.jsx(e.code,{children:"showBackButton"}),", ",n.jsx(e.code,{children:"onBackClick"}),")"]}),`
`,n.jsx(e.li,{children:"Готовые стили для бейджей, правого блока действий и табов в шапке"}),`
`]}),`
`,n.jsx(e.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`DrawerDF.Header; // Шапка: заголовок, подзаголовок, бейдж, правый блок, футер-блок (табы)
DrawerDF.Content; // Контейнер контента с поддержкой фиксированной ширины
DrawerDF.Footer; // Футер с преднастроенными отступами
DrawerDF.DotsIconButton; // Иконка «три точки» с Dropdown
DrawerDF.BackIconButton; // Кнопка «назад»
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"DrawerDF.Header"})," — автоматически выстраивает заголовок, подзаголовок, бейдж, правый блок и нижний блок (табы)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"DrawerDF.Content"})," — поддерживает ",n.jsx(e.code,{children:"fixedWidth"})," для формирования колонок"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"DrawerDF.Footer"})," — имеет преднастроенные отступы, принимает любые элементы управления"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"DrawerDF.DotsIconButton"})," — иконка меню с ",n.jsx(e.code,{children:"dropdownProps"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"DrawerDF.BackIconButton"})," — используется в кнопке «назад», доступен для произвольного использования"]}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"main"})," принимает одиночный ",n.jsx(e.code,{children:"DrawerDF.Content"})," или массив — при массиве автоматически формируются колонки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"showBackButton"})," заменяет крестик закрытия на кнопку «назад»"]}),`
`]}),`
`,n.jsxs(e.p,{children:["Описание типов и compound-пропсов — в разделе ",n.jsx(e.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-drawerdf-api--docs",children:"API"}),"."]}),`
`,n.jsx(d,{})]})}function k(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{k as default};
