import{r as t,d as a}from"./react-D2T61mpp.js";import{c as l}from"./tableData-UCfjiBCh.js";import{g as u}from"./getFuncAsString-D5MKVTTk.js";import{s as m}from"./storySourceDoc-tVKyHcEN.js";import{T as n,C as i}from"./TableCanvas-BfbYnDWX.js";const I={title:"Локальные компоненты/TableCanvas/Tooltip",component:n,parameters:{docs:{}},tags:["!autodocs"]};function O(){const[r]=t.useState(l),e=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return a.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:40,columnNumber:5},this)}function V(){const[r]=t.useState(l),e=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",headerCellTooltip:"Колонка: Title",cellTooltip:({row:s,column:o})=>`Ячейка: ${o.name} — ${s.id}`},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer",headerCellTooltip:"Колонка: Developer",cellTooltip:({row:s})=>s.developer?`Разработчик: ${s.developer}`:null},{key:"complete",name:"% Complete"}],[]);return a.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:77,columnNumber:5},this)}function A(){const[r]=t.useState(l),e=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete",cellTooltip:({row:s})=>{const o=s.complete??0,v=typeof o=="number"&&o>=80;return{text:v?`${o}% — почти готово!`:`Прогресс: ${o}%`,placement:v?"top":"bottom",minWidth:15}}}],[]);return a.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:116,columnNumber:5},this)}function G(){const[r]=t.useState(l),e=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title",cellTooltip:({row:s,column:o})=>({text:`Колонка: ${o.name}
Задача: ${s.task}
ID: ${s.id}`,preserveLineBreaks:!0})},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"developer",name:"Developer"},{key:"complete",name:"% Complete"}],[]);return a.jsxDEV(n,{tableConfig:{columnsControl:{enable:!0,reorderingHeader:!0},tooltip:{enabled:!0}},columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:150,columnNumber:5},this)}function F(){const[r]=t.useState(l),e=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title"},{key:"action",name:"Действие",renderCell:()=>a.jsxDEV(i.Container,{direction:"row",gap:8,children:a.jsxDEV(i.Button,{portalHoverEnabled:!0,tooltip:"Нажмите для перехода в карточку",variant:"secondary",onClick:()=>{},children:"Подробнее"},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:173,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:172,columnNumber:11},this)}],[]);return a.jsxDEV(n,{columnConfig:e,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:188,columnNumber:10},this)}function H(){const[r]=t.useState(l),e="Очень длинный текст подсказки, который заведомо шире тултипа и переносится по словам, чтобы была видна ограниченная ширина",s=t.useMemo(()=>[{key:"id",name:"ID"},{key:"task",name:"Title (ширина из tableConfig)",width:160,renderCell:({row:o})=>a.jsxDEV(i.Container,{direction:"row",alignItems:"center",padding:8,children:a.jsxDEV(i.Text,{overflow:"hidden",textOverflow:"ellipsis",autoTooltip:!0,style:{flexGrow:1},children:`${o.task}: ${e}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:206,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:205,columnNumber:11},this)},{key:"developer",name:"Developer (свой maxWidth)",width:160,renderCell:({row:o})=>a.jsxDEV(i.Container,{direction:"row",alignItems:"center",padding:8,children:a.jsxDEV(i.Text,{overflow:"hidden",textOverflow:"ellipsis",autoTooltip:{maxWidth:360},style:{flexGrow:1},children:`${o.developer}: ${e}`},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:223,columnNumber:13},this)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:222,columnNumber:11},this)}],[]);return a.jsxDEV(n,{tableConfig:{tooltip:{maxWidth:200}},columnConfig:s,rows:r},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx",lineNumber:239,columnNumber:5},this)}const _=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleDefaultTooltip")}
`,L=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipString")}
`,z=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipObject")}
`,q=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleColumnTooltipMultiline")}
`,J=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleButtonWithTooltip")}
`,K=`
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${u("packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx","ExampleGlobalTooltipWidth")}
`,p={name:"Встроенный тултип (drag-иконка в шапке)",...m({previewSource:"shown",code:_}),render:O},c={name:"cellTooltip: строка",...m({previewSource:"shown",code:L}),render:V},d={name:"cellTooltip: объект",...m({previewSource:"shown",code:z}),render:A},T={name:"cellTooltip: preserveLineBreaks",...m({previewSource:"shown",code:q}),render:G},b={name:"Canvas.Button: tooltip",...m({previewSource:"shown",code:J}),render:F},C={name:"Ширина тултипа: глобальная и своя",...m({previewSource:"shown",code:K}),render:H};var k,y,f;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Встроенный тултип (drag-иконка в шапке)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: defaultTooltipPreCode
  }),
  render: ExampleDefaultTooltip
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,h,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'cellTooltip: строка',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnStringPreCode
  }),
  render: ExampleColumnTooltipString
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,S,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'cellTooltip: объект',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnObjectPreCode
  }),
  render: ExampleColumnTooltipObject
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,N,j;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'cellTooltip: preserveLineBreaks',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnMultilinePreCode
  }),
  render: ExampleColumnTooltipMultiline
}`,...(j=(N=T.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var M,R,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Canvas.Button: tooltip',
  ...storySourceDoc({
    previewSource: 'shown',
    code: buttonTooltipPreCode
  }),
  render: ExampleButtonWithTooltip
}`,...($=(R=b.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var P,B,W;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Ширина тултипа: глобальная и своя',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalWidthPreCode
  }),
  render: ExampleGlobalTooltipWidth
}`,...(W=(B=C.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const Q=["DefaultTooltipStory","ColumnTooltipStringStory","ColumnTooltipObjectStory","ColumnTooltipMultilineStory","ButtonWithTooltipStory","GlobalTooltipWidthStory"],oe=Object.freeze(Object.defineProperty({__proto__:null,ButtonWithTooltipStory:b,ColumnTooltipMultilineStory:T,ColumnTooltipObjectStory:d,ColumnTooltipStringStory:c,DefaultTooltipStory:p,GlobalTooltipWidthStory:C,__namedExportsOrder:Q,default:I},Symbol.toStringTag,{value:"Module"}));export{oe as T};
