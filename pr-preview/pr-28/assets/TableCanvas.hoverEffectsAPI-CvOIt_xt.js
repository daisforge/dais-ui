import{j as e}from"./react-D2T61mpp.js";import{c2 as s,c3 as c}from"./vendor-Bxn4nphO.js";import{T as i}from"./TypeSourceViewer-BGBF9SJR.js";import"./react-is-Clcustum.js";import"./styled-components-k3SMx5Eo.js";import"./tslib-De9GV7Vy.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Локальные компоненты/TableCanvas/HoverEffects/API"}),`
`,e.jsx(n.h1,{id:"hovereffects-api",children:"HoverEffects API"}),`
`,e.jsx(n.h2,{id:"hovereffectsconfig",children:"HoverEffectsConfig"}),`
`,e.jsxs(n.p,{children:["Единый конфиг эффектов при наведении — ",e.jsx(n.code,{children:"tableConfig.hoverEffects"}),`. Объект
расширяемый: сейчас в нём подсветка строки (`,e.jsx(n.code,{children:"row"}),`), в будущем — hover по
ячейке, мапки цветов и т.д.`]}),`
`,e.jsx(i,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/types.ts",typeName:"HoverEffectsConfig"}),`
`,e.jsx(n.h3,{id:"hovereffectsrow",children:"hoverEffects.row"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["не задан / ",e.jsx(n.code,{children:"false"})]})," — hover-подсветка строки выключена (по умолчанию)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"true"})})," — включена, цвета из темы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"{ color: '#...' }"})}),` — включена со своим цветом data-ячеек (любой валидный
CSS-цвет для canvas `,e.jsx(n.code,{children:"fillStyle"}),`). Цвета служебных колонок и checkbox-строк
(см. ниже) остаются из темы.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{ hoverEffects: { row: true } }}
tableConfig={{ hoverEffects: { row: { color: '#FFF6E5' } } }}
`})}),`
`,e.jsx(n.h2,{id:"цвета-темы",children:"Цвета темы"}),`
`,e.jsxs(n.p,{children:[`| Токен темы             | Что красит                                          | light     |
| ---------------------- | --------------------------------------------------- | --------- |
| `,e.jsx(n.code,{children:"bgRowHovered"}),"         | data-ячейки hovered-строки                          | ",e.jsx(n.code,{children:"#F7F9FB"}),` |
| `,e.jsx(n.code,{children:"bgServiceRowHovered"}),"  | служебные колонки hovered-строки (= при селектинге) | ",e.jsx(n.code,{children:"#D4E7F2"}),` |
| `,e.jsx(n.code,{children:"bgSelectedRowHovered"})," | checkbox-строка под курсором (вся строка)           | ",e.jsx(n.code,{children:"#DEECF5"})," |"]}),`
`,e.jsx(n.h2,{id:"приоритеты-слоёв",children:"Приоритеты слоёв"}),`
`,e.jsxs(n.p,{children:["Hover рисуется в базовом слое фона ячеек (",e.jsx(n.code,{children:"bgCell"}),") и лежит ",e.jsx(n.strong,{children:"под"}),` остальными
состояниями:`]}),`
`,e.jsxs(n.p,{children:[`| Состояние                                     | Кто рисует        | Относительно hover       |
| --------------------------------------------- | ----------------- | ------------------------ |
| Выделение ячеек / строк / колонок             | highlightRegions  | поверх                   |
| Активная строка (`,e.jsx(n.code,{children:"highlightActiveType='row'"}),`) | highlightRegions  | поверх                   |
| Строка отмечена чекбоксом (`,e.jsx(n.code,{children:"selecting"}),`)       | bgCell            | свой hover-цвет (темнее) |
| Summary-строки                                | bgCell (bgHeader) | hover не получают        |`]}),`
`,e.jsxs(n.p,{children:[`Тип реэкспортируется из
`,e.jsx(n.code,{children:"@daisforge/ui/components/TableCanvas"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { HoverEffectsConfig } from '@daisforge/ui/components/TableCanvas';
`})})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{j as default};
