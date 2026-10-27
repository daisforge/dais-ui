import{r,j as t}from"./react-CAOzMBF_.js";import{c as i}from"./tableData-DVJFoYoT.js";import{g as u}from"./getFuncAsString-DnrLf2YT.js";import{s as p}from"./storySourceDoc-tVKyHcEN.js";import{T as l,C as s}from"./TableCanvas-DlX-Wh2b.js";const O={title:"Локальные компоненты/TableCanvas/Tooltip",component:l,parameters:{docs:{}},tags:["!autodocs"]};function A(){const[a]=r.useState(i),e=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return t.jsx(l,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0}},columnConfig:e,rows:a})}function G(){const[a]=r.useState(i),e=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",headerCellTooltip:"Колонка: Title",cellTooltip:({row:n,column:o})=>`Ячейка: ${o.name} — ${n.id}`},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer",headerCellTooltip:"Колонка: Developer",cellTooltip:({row:n})=>n.developer?`Разработчик: ${n.developer}`:null},{key:"complete",name:"% Complete"}],[]);return t.jsx(l,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:a})}function F(){const[a]=r.useState(i),e=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete",cellTooltip:({row:n})=>{const o=n.complete??0,b=typeof o=="number"&&o>=80;return{text:b?`${o}% — почти готово!`:`Прогресс: ${o}%`,placement:b?"top":"bottom",minWidth:15}}}],[]);return t.jsx(l,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:a})}function H(){const[a]=r.useState(i),e=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",cellTooltip:({row:n,column:o})=>({text:`Колонка: ${o.name}
Задача: ${n.task}
ID: ${n.id}`,preserveLineBreaks:!0})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return t.jsx(l,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:a})}function _(){const[a]=r.useState(i),e=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"action",name:"Действие",renderCell:()=>t.jsx(s.Container,{direction:"row",gap:8,children:t.jsx(s.Button,{portalHoverEnabled:!0,tooltip:"Нажмите для перехода в карточку",variant:"secondary",onClick:()=>{},children:"Подробнее"})})}],[]);return t.jsx(l,{columnConfig:e,rows:a})}function L(){const[a]=r.useState(i),e="Очень длинный текст подсказки, который заведомо шире тултипа и переносится по словам, чтобы была видна ограниченная ширина",n=r.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title (ширина из tableConfig)",width:160,renderCell:({row:o})=>t.jsx(s.Container,{direction:"row",alignItems:"center",padding:8,children:t.jsx(s.Text,{overflow:"hidden",textOverflow:"ellipsis",autoTooltip:!0,style:{flexGrow:1},children:`${o.task}: ${e}`})})},{key:"developer",name:"Developer (свой maxWidth)",width:160,renderCell:({row:o})=>t.jsx(s.Container,{direction:"row",alignItems:"center",padding:8,children:t.jsx(s.Text,{overflow:"hidden",textOverflow:"ellipsis",autoTooltip:{maxWidth:360},style:{flexGrow:1},children:`${o.developer}: ${e}`})})}],[]);return t.jsx(l,{tableConfig:{tooltip:{maxWidth:200}},columnConfig:n,rows:a})}const z=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleDefaultTooltip")}
`,q=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipString")}
`,J=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipObject")}
`,K=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipMultiline")}
`,N=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleButtonWithTooltip")}
`,Q=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleGlobalTooltipWidth")}
`,m={name:"Встроенный тултип (drag-иконка в шапке)",...p({previewSource:"shown",code:z}),render:A},c={name:"cellTooltip: строка",...p({previewSource:"shown",code:q}),render:G},d={name:"cellTooltip: объект",...p({previewSource:"shown",code:J}),render:F},T={name:"cellTooltip: preserveLineBreaks",...p({previewSource:"shown",code:K}),render:H},C={name:"Canvas.Button: tooltip",...p({previewSource:"shown",code:N}),render:_},y={name:"Ширина тултипа: глобальная и своя",...p({previewSource:"shown",code:Q}),render:L};var v,f,k;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Встроенный тултип (drag-иконка в шапке)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: defaultTooltipPreCode
  }),
  render: ExampleDefaultTooltip
}`,...(k=(f=m.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,g,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'cellTooltip: строка',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnStringPreCode
  }),
  render: ExampleColumnTooltipString
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,h,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'cellTooltip: объект',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnObjectPreCode
  }),
  render: ExampleColumnTooltipObject
}`,...(D=(h=d.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var E,j,M;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'cellTooltip: preserveLineBreaks',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnMultilinePreCode
  }),
  render: ExampleColumnTooltipMultiline
}`,...(M=(j=T.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var R,$,P;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Canvas.Button: tooltip',
  ...storySourceDoc({
    previewSource: 'shown',
    code: buttonTooltipPreCode
  }),
  render: ExampleButtonWithTooltip
}`,...(P=($=C.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var B,W,I;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Ширина тултипа: глобальная и своя',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalWidthPreCode
  }),
  render: ExampleGlobalTooltipWidth
}`,...(I=(W=y.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const U=["DefaultTooltipStory","ColumnTooltipStringStory","ColumnTooltipObjectStory","ColumnTooltipMultilineStory","ButtonWithTooltipStory","GlobalTooltipWidthStory"],oe=Object.freeze(Object.defineProperty({__proto__:null,ButtonWithTooltipStory:C,ColumnTooltipMultilineStory:T,ColumnTooltipObjectStory:d,ColumnTooltipStringStory:c,DefaultTooltipStory:m,GlobalTooltipWidthStory:y,__namedExportsOrder:U,default:O},Symbol.toStringTag,{value:"Module"}));export{oe as T};
