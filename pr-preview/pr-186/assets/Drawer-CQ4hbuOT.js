import{j as n}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-D2r4jgZf.js";import{M as c,S as d}from"./WithTooltip-KJL26V4Q-BGwBziuD.js";import{D as s}from"./DrawerDF.stories-RWtDwzkl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./preload-helper-ChIeFzsB.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./getFuncAsString-CYIdLC6X.js";import"./storySourceDoc-tVKyHcEN.js";import"./DrawerDF-DL35Qf0d.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/plasma-icons-CWYH4jgn.js";import"./constants-3UB8ZrMK.js";import"./Box-Dwqy9xB3.js";import"./data-dWPDlSF_.js";function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:s,name:"Docs"}),`
`,n.jsx(r.h1,{id:"drawerdf",children:"DrawerDF"}),`
`,n.jsxs(r.p,{children:["Расширенный ",n.jsx(r.code,{children:"Drawer"})," (",n.jsx(r.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/drawer/",rel:"nofollow",children:"документация SDDS"}),") с готовыми layout-ами для шапки/контента/футера, кнопкой «назад» и сервисными элементами. Из блоков можно собрать как простой выезжающий сайдбар, так и сложные многоколоночные сценарии."]}),`
`,n.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Набор compound-компонентов (",n.jsx(r.code,{children:"Header"}),", ",n.jsx(r.code,{children:"Content"}),", ",n.jsx(r.code,{children:"Footer"}),", ",n.jsx(r.code,{children:"DotsIconButton"}),", ",n.jsx(r.code,{children:"BackIconButton"}),")"]}),`
`,n.jsx(r.li,{children:"Поддержка множественных контентных колонок с автоматическими отступами"}),`
`,n.jsxs(r.li,{children:["Управление кнопкой «назад» на уровне родительского компонента (",n.jsx(r.code,{children:"showBackButton"}),", ",n.jsx(r.code,{children:"onBackClick"}),")"]}),`
`,n.jsx(r.li,{children:"Готовые стили для бейджей, правого блока действий и табов в шапке"}),`
`]}),`
`,n.jsx(r.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-ts",children:`DrawerDF.Header; // Шапка: заголовок, подзаголовок, бейдж, правый блок, футер-блок (табы)
DrawerDF.Content; // Контейнер контента с поддержкой фиксированной ширины
DrawerDF.Footer; // Футер с преднастроенными отступами
DrawerDF.DotsIconButton; // Иконка «три точки» с Dropdown
DrawerDF.BackIconButton; // Кнопка «назад»
`})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"DrawerDF.Header"})," — автоматически выстраивает заголовок, подзаголовок, бейдж, правый блок и нижний блок (табы)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"DrawerDF.Content"})," — поддерживает ",n.jsx(r.code,{children:"fixedWidth"})," для формирования колонок"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"DrawerDF.Footer"})," — имеет преднастроенные отступы, принимает любые элементы управления"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"DrawerDF.DotsIconButton"})," — иконка меню с ",n.jsx(r.code,{children:"dropdownProps"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"DrawerDF.BackIconButton"})," — используется в кнопке «назад», доступен для произвольного использования"]}),`
`]}),`
`,n.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"main"})," принимает одиночный ",n.jsx(r.code,{children:"DrawerDF.Content"})," или массив — при массиве автоматически формируются колонки"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"showBackButton"})," заменяет крестик закрытия на кнопку «назад»"]}),`
`]}),`
`,n.jsxs(r.p,{children:["Описание типов и compound-пропсов — в разделе ",n.jsx(r.a,{href:"/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-drawerdf-api--docs",children:"API"}),"."]}),`
`,n.jsx(d,{})]})}function H(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{H as default};
