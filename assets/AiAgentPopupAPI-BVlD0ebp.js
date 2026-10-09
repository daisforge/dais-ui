import{j as e}from"./react-D2T61mpp.js";import{cg as s,ch as o}from"./vendor-DhPQnvNP.js";import{T as t}from"./TypeSourceViewer-pOY9LbL3.js";import"./react-is-Clcustum.js";import"./styled-components-D2iYy2uM.js";import"./@tanstack/react-virtual-DonijgCh.js";import"./tslib-DoU9Jm1N.js";function p(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Локальные компоненты/AiAgentPopup/API"}),`
`,e.jsx(n.h1,{id:"aiagentpopup-api",children:"AiAgentPopup API"}),`
`,e.jsx(n.h2,{id:"aiagentpopupprops",children:"AiAgentPopupProps"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupProps"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AiAgentPopup"})," наследует базовые пропсы ",e.jsx(n.code,{children:"Popup"})," из ",e.jsx(n.code,{children:"sdds-finai"}),", кроме ",e.jsx(n.code,{children:"placement"}),`,
`,e.jsx(n.code,{children:"offset"}),", ",e.jsx(n.code,{children:"draggable"})," и ",e.jsx(n.code,{children:"resizable"}),`: позицией и ресайзом компонент управляет сам
через собственные пропсы.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentpopupposition",children:"AiAgentPopupPosition"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupPosition"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Координаты левого верхнего угла окна относительно экрана, в px."}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentpopuppositionstate",children:"AiAgentPopupPositionState"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupPositionState"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Пара для полного внешнего управления позицией, как у ",e.jsx(n.code,{children:"useState"}),`. Если передана
в `,e.jsx(n.code,{children:"positionState"}),", компонент не хранит позицию сам и не сохраняет её в localStorage."]}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentpopuptargetgap",children:"AiAgentPopupTargetGap"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupTargetGap"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Отступ окна от ",e.jsx(n.code,{children:"targetRef"}),`. Число задаёт отступ только по горизонтали, объект с
полями `,e.jsx(n.code,{children:"x"})," и ",e.jsx(n.code,{children:"y"})," — смещение по обеим осям от правого верхнего угла таргета: ",e.jsx(n.code,{children:"y"}),` больше
нуля опускает окно, меньше нуля поднимает.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentpopupsize",children:"AiAgentPopupSize"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupSize"}),`
`,e.jsx(n.h2,{id:"aiagentpopupdragboundary",children:"AiAgentPopupDragBoundary"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupDragBoundary"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Отступы от краёв экрана. Учитываются при перетаскивании, при ресайзе и при вычислении
начальной позиции.`}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentpopupresizableconfig",children:"AiAgentPopupResizableConfig"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentPopupResizableConfig"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Конфигурация ресайза атомарного ",e.jsx(n.code,{children:"Popup"}),". В ",e.jsx(n.code,{children:"resizable"}),` можно передать её частично:
не заданные поля компонент заполняет своими значениями (активный угол по положению
окна, DF-иконка, минимум 360x360, пределы по краям экрана).`]}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentinputprops",children:"AiAgentInputProps"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentInputProps"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Поле ввода чата с овальным свечением позади. Наследует пропсы ",e.jsx(n.code,{children:"TextArea"}),`, кроме
`,e.jsx(n.code,{children:"contentRight"}),": правая часть поля задаётся через ",e.jsx(n.code,{children:"rightSlot"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentleftpanelprops",children:"AiAgentLeftPanelProps"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentLeftPanelProps"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Левая панель окна: полоса иконок-разделов. Открытый раздел задаётся ",e.jsx(n.code,{children:"activeKey"}),`
(управляемо) или `,e.jsx(n.code,{children:"defaultActiveKey"}),"; смена приходит в ",e.jsx(n.code,{children:"onActiveKeyChange"}),` (ключ раздела
или `,e.jsx(n.code,{children:"null"})," при закрытии)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"aiagentleftpanelitem",children:"AiAgentLeftPanelItem"}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/AiAgentPopup/AiAgentPopup.types.ts",typeName:"AiAgentLeftPanelItem"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Один раздел левой панели: ",e.jsx(n.code,{children:"icon"})," в полосе, ",e.jsx(n.code,{children:"title"})," и ",e.jsx(n.code,{children:"content"}),` в раскрытом разделе.
Шапку с иконкой, заголовком и крестиком компонент рисует сам; наполнение раздела
под шапкой задаёт потребитель.`]}),`
`]})]})}function A(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(p,{...i})}):p(i)}export{A as default};
