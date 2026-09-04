import{j as e}from"./react-D2T61mpp.js";import{c6 as d,c7 as n,c0 as s}from"./vendor-Ca3Rcr5K.js";import{P as c}from"./PopoverDF.stories-D8jrlZ0y.js";import"./react-is-Clcustum.js";import"./styled-components-BlJZcR1N.js";import"./tslib-De9GV7Vy.js";import"./getFuncAsString-Bp1PYzKJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./PopoverDF-DKYvGhmM.js";import"./Box-CsOzBWtM.js";import"./constants-DM2G2kGu.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./@salutejs/sdds-finai-BaaqQyG7.js";import"./AnalyticalWidget-BUa3dXB_.js";import"./utils-BOxIorbb.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./IconButton-CYx5m0ft.js";import"./@salutejs/plasma-icons-DH_et0Tb.js";import"./Collapse-bo3y3zGA.js";function i(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:c,name:"Docs"}),`
`,e.jsx(o.h1,{id:"popoverdf",children:"PopoverDF"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"PopoverDF"})," — локальная DF-обёртка над ",e.jsx(o.a,{href:"https://plasma.sberdevices.ru/sdds-finai/beta/popover/",rel:"nofollow",children:"PopoverBeta"}),"."]}),`
`,e.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["крестик закрытия живёт в ",e.jsx(o.code,{children:"PopoverDF.Header"})]}),`
`,e.jsxs(o.li,{children:["доступны ",e.jsx(o.code,{children:"PopoverDF.Header"}),", ",e.jsx(o.code,{children:"PopoverDF.Body"}),", ",e.jsx(o.code,{children:"PopoverDF.Footer"})]}),`
`,e.jsxs(o.li,{children:["доступны размеры ",e.jsx(o.code,{children:'size="m" | "s"'})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"hasTail"})," можно отключить через ",e.jsx(o.code,{children:"hasTail={false}"})]}),`
`,e.jsxs(o.li,{children:["при ",e.jsx(o.code,{children:"resizable"})," иконка ресайза автоматически подстраивается под ",e.jsx(o.code,{children:"placement"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"compound-компоненты",children:"Compound-компоненты"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`PopoverDF.Header; // Шапка
PopoverDF.Body; // Контент
PopoverDF.Footer; // Футер
`})}),`
`,e.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["если нужен крестик, используйте ",e.jsx(o.code,{children:"PopoverDF.Header"}),"; закрытие привязано к нему"]}),`
`,e.jsxs(o.li,{children:["для кастомного блока в шапке используйте ",e.jsx(o.code,{children:"bottomBlock"})]}),`
`,e.jsxs(o.li,{children:["если нужен только контент без шапки и футера, можно оставить только ",e.jsx(o.code,{children:"PopoverDF.Body"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"resizable"})," можно передавать как ",e.jsx(o.code,{children:"true"})," или как объект конфигурации; по умолчанию ",e.jsx(o.code,{children:"PopoverDF"})," использует свою resize-иконку с учётом ",e.jsx(o.code,{children:"iconSize"}),", но пользовательские ",e.jsx(o.code,{children:"icons"})," переопределяют её"]}),`
`,e.jsxs(o.li,{children:["для ручной смены угла ресайза используйте нативный ",e.jsx(o.code,{children:"resizable.directions"}),", например ",e.jsx(o.code,{children:"directions: ['bottom-right']"})]}),`
`,e.jsxs(o.li,{children:["если ",e.jsx(o.code,{children:"hiddenIcons"})," не передан, ",e.jsx(o.code,{children:"PopoverDF"})," автоматически скрывает угловые иконки, которые не входят в ",e.jsx(o.code,{children:"directions"}),"; для нестандартной видимости передайте ",e.jsx(o.code,{children:"hiddenIcons"})," явно"]}),`
`,e.jsxs(o.li,{children:["в режиме ",e.jsx(o.code,{children:"resizable"})," стартовый размер задаётся через ",e.jsx(o.code,{children:"resizable.defaultSize"}),"; фиксированный ",e.jsx(o.code,{children:"style.width"})," на ",e.jsx(o.code,{children:"PopoverDF"})," может разъехать видимый popover и resize-контейнер"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"target"})," обязателен: ",e.jsx(o.code,{children:"PopoverDF"})," всегда позиционируется относительно target-элемента"]}),`
`]}),`
`,e.jsx(o.h2,{id:"кастомный-target",children:"Кастомный target"}),`
`,e.jsxs(o.p,{children:["Если в ",e.jsx(o.code,{children:"target"})," передаётся кастомный компонент, он должен поддерживать ",e.jsx(o.code,{children:"ref"})," и пробрасывать его на реальный DOM-элемент. ",e.jsx(o.code,{children:"PopoverDF"})," использует этот ",e.jsx(o.code,{children:"ref"})," для позиционирования. Полный рабочий пример доступен в story «Кастомный target»."]}),`
`,e.jsxs(o.p,{children:["Описание типов и compound-пропсов — в разделе ",e.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-popoverdf-api--docs",children:"API"}),"."]}),`
`,e.jsx(s,{})]})}function C(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{C as default};
