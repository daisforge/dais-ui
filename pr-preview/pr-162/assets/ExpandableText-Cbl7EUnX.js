import{j as n}from"./react-D2T61mpp.js";import{cg as s,ch as o,ca as c}from"./vendor-CVMKgdDh.js";import{E as d}from"./ExpandableText.stories-B8OJu9oi.js";import"./react-is-Clcustum.js";import"./styled-components-CwOMMRg3.js";import"./@tanstack/react-virtual-z_N2zvua.js";import"./tslib-DoU9Jm1N.js";import"./getFuncAsString-CPGdJoHN.js";import"./storySourceDoc-tVKyHcEN.js";import"./AiAgentPopup-xnLrr0ZX.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/sdds-finai-R41yApkS.js";import"./utils-C8PgCSKo.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextArea-DTfy2aDO.js";import"./sharedUtilsInputs-D-pVOLaP.js";import"./@salutejs/plasma-icons-D_1o7NsP.js";import"./sharedUtilsResizable-BpgOMr3m.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:d,name:"Docs"}),`
`,n.jsx(e.h1,{id:"сворачиваемый-текст",children:"Сворачиваемый текст"}),`
`,n.jsxs(e.p,{children:["Пример реализации длинного текста, который свёрнут до нескольких строк с многоточием и раскрывается кнопкой «Показать полностью». Это не компонент библиотеки: код из ",n.jsx(e.code,{children:"Show code"})," копируется в продукт и дорабатывается под его задачи."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["в свёрнутом виде текст обрезается многоточием, число строк задаёт продукт (",n.jsx(e.code,{children:"lines"}),")"]}),`
`,n.jsx(e.li,{children:"кнопка показывается, только если текст не помещается в заданные строки; при изменении ширины блока это пересчитывается"}),`
`,n.jsxs(e.li,{children:["раскрытие и сворачивание анимируются по высоте, длительность и кривая настраиваются (",n.jsx(e.code,{children:"duration"})," в мс, ",n.jsx(e.code,{children:"easing"}),")"]}),`
`,n.jsxs(e.li,{children:["кнопка: ",n.jsx(e.code,{children:"LinkButton"})," размера ",n.jsx(e.code,{children:"s"})," вида ",n.jsx(e.code,{children:"accent"}),", подписи меняются через ",n.jsx(e.code,{children:"expandLabel"})," и ",n.jsx(e.code,{children:"collapseLabel"})]}),`
`,n.jsxs(e.li,{children:["при ",n.jsx(e.code,{children:"duration={0}"})," и при системной настройке «уменьшить движение» текст переключается без анимации"]}),`
`]}),`
`,n.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["анимируется высота обёртки текста; многоточие (",n.jsx(e.code,{children:"line-clamp"}),") анимировать нельзя, поэтому во время раскрытия оно сразу снимается, а при сворачивании включается только после окончания анимации"]}),`
`,n.jsx(e.li,{children:"в покое у обёртки высота по содержимому, поэтому раскрытый текст подстраивается под ширину блока"}),`
`,n.jsxs(e.li,{children:["высота свёрнутого блока считается как высота строки текста, умноженная на ",n.jsx(e.code,{children:"lines"}),"; если меняете типографику, она пересчитается сама"]}),`
`,n.jsxs(e.li,{children:["стили обёртки, текста и кнопки задаются прямо в коде примера: меняйте их под продукт, например вариант ",n.jsx(e.code,{children:"Typography"}),", отступ до кнопки или вид кнопки"]}),`
`]}),`
`,n.jsx(c,{})]})}function w(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{w as default};
